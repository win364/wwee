var u = Object.defineProperty,
    c = Object.getOwnPropertySymbols,
    d = Object.prototype.hasOwnProperty,
    f = Object.prototype.propertyIsEnumerable,
    l = (e, t, n) => t in e ? u(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    h = (e, t) => {
        for (var n in t || (t = {})) d.call(t, n) && l(e, n, t[n]);
        if (c)
            for (var n of c(t)) f.call(t, n) && l(e, n, t[n]);
        return e
    };
const log = e => console.warn("service worker:", e),
    isMxDomain = self.location.hostname.endsWith("in.mx");
self.addEventListener("notificationclick", (e => {
    e.notification.close(), e.waitUntil(self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    }).then((e => {
        const t = self.location.origin,
            n = e.find((e => e.url.includes(t) && "focus" in e));
        return n ? n.focus() : self.clients.openWindow(t)
    })).then((t => {
        try {
            const {
                link: n
            } = e.notification.data.originalMessage;
            if (!n) return;
            t.navigate(n)
        } catch (n) {
            console.info("Probably incorrect push notification json structure", n)
        }
    })).catch((e => {
        console.error("Error handling notifications click", e)
    })))
})), importScripts("/firebase/8.1.1/firebase-app.js", "/firebase/8.1.1/firebase-messaging.js");
const isFirebaseAppInitialized = e => self.firebase.apps.some((t => t.options.apiKey === e)),
    initFirebase = (e = {}) => {
        e.apiKey ? isFirebaseAppInitialized(e.apiKey) ? log("Firebase initialized.") : self.firebase.messaging.isSupported() ? (self.firebase.initializeApp({
            apiKey: e.apiKey,
            authDomain: e.authDomain,
            projectId: e.projectId,
            storageBucket: e.storageBucket,
            messagingSenderId: e.messagingSenderId,
            appId: e.appId,
            measurementId: e.measurementId
        }), self.firebase.messaging().onBackgroundMessage((e => {
            self.registration.showNotification(e.data.title, {
                body: e.data.body,
                image: e.data.image,
                icon: "https://v1.bundlecdn.com/img/icons/webpush-512x512.png",
                requireInteraction: !0,
                tag: "showOnlyLastPushTag",
                data: {
                    originalMessage: e.data
                }
            })
        }))) : log("Firebase Push Api is not supported.") : log("Firebase Push api key is empty.")
    };
self.addEventListener("fetch", (e => {
    const t = new URL(e.request.url);
    return "unsafe-url" === e.request.referrerPolicy && "/pwa.html" === t.pathname || "/sw-active" === t.pathname ? e.respondWith(new Response("ok")) : void 0
}));
const getKeyCache = (e, t) => e + t,
    fetchFromCache = (e, t) => {
        const n = t.url || t;
        return caches.open(getKeyCache(e, "static")).then((e => e.match(n).then((e => {
            if (!e) throw new Error(`${n} not found in cache`);
            return e
        }))))
    },
    serviceWorkerCacheData = e => {
        const {
            request: t,
            request: {
                url: n,
                method: r
            }
        } = e, i = new Response(JSON.stringify(""));
        return "POST" === r ? e.respondWith(t.json().then((e => caches.open(n).then((t => t.put(n, new Response(JSON.stringify(e))))))).then((() => i))) : e.respondWith(caches.open(n).then((e => e.match(n).then((e => e || i)) || i)))
    },
    APPLY_ACTUAL_DOMAIN_LOGIC_URLS_ARR = new Set([location.origin]),
    NOT_FOUND_PAGE = "/pwaNotFound.html",
    FORBIDDEN_ACTUAL_PATHNAMES = new Set(["/static/1.txt", "/1.txt"]),
    CUSTOM_REFERRER_PATHNAME = new Set(["/affiliate:link_visit"]);
self.addEventListener("message", (e => {
    "DISABLE_ACTUAL_DOMAINS" === e.data.type && APPLY_ACTUAL_DOMAIN_LOGIC_URLS_ARR.clear(), "ENABLE_ACTUAL_DOMAINS" === e.data.type && APPLY_ACTUAL_DOMAIN_LOGIC_URLS_ARR.add(e.data.domain), "FIREBASE_KEYS" === e.data.type && initFirebase(e.data.payload)
}));
const HOME_PAGE = "/",
    config = {
        version: "v8",
        staticCacheItems: [NOT_FOUND_PAGE],
        dynamicCacheItems: [],
        rewrites: {},
        actualUrl: "",
        index: "",
        lastUpdate: 0,
        isForceActualDomainsLogicUsage: !1
    },
    ping = e => fetch(`${e}/ping?1=${Date.now().toString()}`).then((e => e.text())).then((e => "ok" === e.trim(/\s/) ? Promise.resolve(!0) : Promise.reject(new Error("ping error")))),
    fetchActualDomain = () => fetch("https://476d7da1ce61.v1.bundlecdn.com/domains.json?1=" + Date.now().toString()).then((e => e.text())).then(JSON.parse).then((e => e.reduce(((e, t) => e.then((e => e || ping(t.url).then((() => t)).catch((() => !1))))), new Promise((e => {
        e(!1)
    }))).then((e => e || Promise.reject(new Error("actual domain not found")))))),
    proxyPost = (e, t) => {
        const n = new URL(e),
            r = t.clone(),
            i = h({}, CUSTOM_REFERRER_PATHNAME.has(n.pathname) && {
                "X-Custom-Referer": t.referrer
            });
        for (const [a, o] of r.headers.entries()) i[a] = o;
        return r.blob().then((n => {
            const r = t,
                a = new Request(e, {
                    body: n,
                    headers: i,
                    credentials: "include",
                    destination: r.destination,
                    integrity: r.integrity,
                    method: r.method,
                    cache: r.cache,
                    mode: r.mode,
                    keepalive: r.keepalive,
                    redirect: r.redirect,
                    referrer: r.referrer,
                    referrerPolicy: r.referrerPolicy,
                    isHistoryNavigation: r.isHistoryNavigation
                });
            return fetch(a)
        }))
    },
    navigationFetch = e => fetch(e, {
        redirect: "follow",
        credentials: "omit"
    }).then((e => {
        if (200 !== e.status) throw new Error("error");
        return e
    })),
    proxyFetch = e => {
        const {
            rewrites: t,
            actualUrl: n
        } = config, r = new URL(e.request.url), i = t[r.pathname] || r.pathname, a = n + i + r.search;
        if ("navigate" === e.request.mode) {
            const e = t[HOME_PAGE] || r.pathname,
                i = n + e + r.search;
            return navigationFetch(i)
        }
        return ["POST", "PUT"].includes(e.request.method) ? proxyPost(a, e.request) : fetch(a, e.request)
    };
let getActualDomainPromise;
const fetchFromActualDomain = e => {
        const t = Date.now() - config.lastUpdate > 3e4;
        return (!config.lastUpdate || t) && (config.lastUpdate = Date.now(), getActualDomainPromise = fetchActualDomain().then((({
            index: e,
            url: t
        }) => {
            config.rewrites[HOME_PAGE] = e, config.actualUrl = t
        })).catch((e => {
            throw delete config.rewrites[HOME_PAGE], config.actualUrl = null, e
        }))), getActualDomainPromise.then((() => proxyFetch(e)))
    },
    getIsDomainBlockedPromise = (() => {
        let e = {};

        function t(e) {
            return Promise.race([fetch(`${e}/1.txt?${Date.now()}`), new Promise(((e, t) => {
                setTimeout((() => t(new Error("Domain check block request timeout!"))), 1500)
            }))])
        }
        return n => {
            const r = new URL(n.request.url).origin;
            return "navigate" === n.request.mode && (e = {}), e[r] || (e[r] = t(r).then((e => {
                if (!0 === e.redirected) throw new Error("1.txt redirect detected.");
                return e.text()
            })).then((e => "fuckrkn" !== e.trim()))), e[r]
        }
    })(),
    fetchFromTargetDomainOrActualDomain = e => getIsDomainBlockedPromise(e).catch((() => !0)).then((t => t ? fetchFromActualDomain(e).catch((() => fetch(e.request))) : fetch(e.request).catch((() => fetchFromActualDomain(e))))).catch((() => fetchFromCache(config.version, NOT_FOUND_PAGE)));
self.addEventListener("fetch", (e => {
    const t = new URL(e.request.url);
    return /^\/sw-cache\/.+/.test(t.pathname) ? serviceWorkerCacheData(e) : FORBIDDEN_ACTUAL_PATHNAMES.has(t.pathname) ? fetch(e.request) : "/turn-on-force-actual-domains-usage" === t.pathname ? (config.isForceActualDomainsLogicUsage = !0, e.respondWith(new Response("ok"))) : config.isForceActualDomainsLogicUsage && APPLY_ACTUAL_DOMAIN_LOGIC_URLS_ARR.has(t.origin) && !isMxDomain ? e.respondWith(fetchFromActualDomain(e).catch((() => fetchFromCache(config.version, NOT_FOUND_PAGE)))) : APPLY_ACTUAL_DOMAIN_LOGIC_URLS_ARR.has(t.origin) && !isMxDomain ? e.respondWith(fetchFromTargetDomainOrActualDomain(e)) : void 0
})), self.addEventListener("install", (e => {
    e.waitUntil(caches.open(getKeyCache(config.version, "static")).then((e => e.addAll(config.staticCacheItems))).catch((e => console.error(e.message))).then((() => self.skipWaiting())))
})), self.addEventListener("activate", (e => {
    e.waitUntil(caches.open(getKeyCache(config.version, "static")).then((e => {
        e.keys().then((e => {
            const t = e.filter((e => !new RegExp(`^${config.version}`).test(e))).map((e => caches.delete(e)));
            return Promise.all(t)
        })).catch((e => console.error(e.message)))
    })).then((() => self.clients.claim())))
}));