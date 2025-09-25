"use strict";
(self["webpackChunk_1win_frontend_main"] = self["webpackChunk_1win_frontend_main"] || []).push([
    [80897], {
        380897: (n, e, t) => {
            t.r(e), t.d(e, {
                componentsToDebugString: () => vt,
                default: () => Lt,
                getFullscreenElement: () => tn,
                getUnstableAudioFingerprint: () => un,
                getUnstableCanvasFingerprint: () => Wn,
                getUnstableScreenFrame: () => zn,
                getUnstableScreenResolution: () => An,
                getWebGLContext: () => qe,
                hashComponents: () => ht,
                isAndroid: () => on,
                isChromium: () => z,
                isDesktopWebKit: () => O,
                isEdgeHTML: () => D,
                isGecko: () => Q,
                isSamsungInternet: () => an,
                isTrident: () => _,
                isWebKit: () => B,
                load: () => wt,
                loadSources: () => J,
                murmurX64Hash128: () => kt,
                prepareForSources: () => bt,
                sources: () => ct,
                transformSource: () => T,
                withIframe: () => vn
            });
            var r = function() {
                return r = Object.assign || function(n) {
                    for (var e, t = 1, r = arguments.length; t < r; t++)
                        for (var o in e = arguments[t], e) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                    return n
                }, r.apply(this, arguments)
            };

            function o(n, e, t, r) {
                function o(n) {
                    return n instanceof t ? n : new t((function(e) {
                        e(n)
                    }))
                }
                return new(t || (t = Promise))((function(t, i) {
                    function a(n) {
                        try {
                            u(r.next(n))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(n) {
                        try {
                            u(r["throw"](n))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(n) {
                        n.done ? t(n.value) : o(n.value).then(a, c)
                    }
                    u((r = r.apply(n, e || [])).next())
                }))
            }

            function i(n, e) {
                var t, r, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    },
                    a = Object.create(("function" === typeof Iterator ? Iterator : Object).prototype);
                return a.next = c(0), a["throw"] = c(1), a["return"] = c(2), "function" === typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function c(n) {
                    return function(e) {
                        return u([n, e])
                    }
                }

                function u(c) {
                    if (t) throw new TypeError("Generator is already executing.");
                    while (a && (a = 0, c[0] && (i = 0)), i) try {
                        if (t = 1, r && (o = 2 & c[0] ? r["return"] : c[0] ? r["throw"] || ((o = r["return"]) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                        switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                            case 0:
                            case 1:
                                o = c;
                                break;
                            case 4:
                                return i.label++, {
                                    value: c[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, r = c[1], c = [0];
                                continue;
                            case 7:
                                c = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (o = i.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                    i.label = c[1];
                                    break
                                }
                                if (6 === c[0] && i.label < o[1]) {
                                    i.label = o[1], o = c;
                                    break
                                }
                                if (o && i.label < o[2]) {
                                    i.label = o[2], i.ops.push(c);
                                    break
                                }
                                o[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        c = e.call(n, i)
                    } catch (u) {
                        c = [6, u], r = 0
                    } finally {
                        t = o = 0
                    }
                    if (5 & c[0]) throw c[1];
                    return {
                        value: c[0] ? c[1] : void 0,
                        done: !0
                    }
                }
            }
            Object.create;

            function a(n, e, t) {
                if (t || 2 === arguments.length)
                    for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
                return n.concat(r || Array.prototype.slice.call(e))
            }
            Object.create;
            "function" === typeof SuppressedError && SuppressedError;
            var c = "4.6.2";

            function u(n, e) {
                return new Promise((function(t) {
                    return setTimeout(t, n, e)
                }))
            }

            function s() {
                return new Promise((function(n) {
                    var e = new MessageChannel;
                    e.port1.onmessage = function() {
                        return n()
                    }, e.port2.postMessage(null)
                }))
            }

            function l(n, e) {
                void 0 === e && (e = 1 / 0);
                var t = window.requestIdleCallback;
                return t ? new Promise((function(n) {
                    return t.call(window, (function() {
                        return n()
                    }), {
                        timeout: e
                    })
                })) : u(Math.min(n, e))
            }

            function d(n) {
                return !!n && "function" === typeof n.then
            }

            function f(n, e) {
                try {
                    var t = n();
                    d(t) ? t.then((function(n) {
                        return e(!0, n)
                    }), (function(n) {
                        return e(!1, n)
                    })) : e(!0, t)
                } catch (r) {
                    e(!1, r)
                }
            }

            function m(n, e, t) {
                return void 0 === t && (t = 16), o(this, void 0, void 0, (function() {
                    var r, o, a, c;
                    return i(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                r = Array(n.length), o = Date.now(), a = 0, i.label = 1;
                            case 1:
                                return a < n.length ? (r[a] = e(n[a], a), c = Date.now(), c >= o + t ? (o = c, [4, s()]) : [3, 3]) : [3, 4];
                            case 2:
                                i.sent(), i.label = 3;
                            case 3:
                                return ++a, [3, 1];
                            case 4:
                                return [2, r]
                        }
                    }))
                }))
            }

            function v(n) {
                return n.then(void 0, (function() {})), n
            }

            function h(n, e) {
                for (var t = 0, r = n.length; t < r; ++t)
                    if (n[t] === e) return !0;
                return !1
            }

            function p(n, e) {
                return !h(n, e)
            }

            function b(n) {
                return parseInt(n)
            }

            function y(n) {
                return parseFloat(n)
            }

            function g(n, e) {
                return "number" === typeof n && isNaN(n) ? e : n
            }

            function w(n) {
                return n.reduce((function(n, e) {
                    return n + (e ? 1 : 0)
                }), 0)
            }

            function L(n, e) {
                if (void 0 === e && (e = 1), Math.abs(e) >= 1) return Math.round(n / e) * e;
                var t = 1 / e;
                return Math.round(n * t) / t
            }

            function k(n) {
                for (var e, t, r = "Unexpected syntax '".concat(n, "'"), o = /^\s*([a-z-]*)(.*)$/i.exec(n), i = o[1] || void 0, a = {}, c = /([.:#][\w-]+|\[.+?\])/gi, u = function(n, e) {
                        a[n] = a[n] || [], a[n].push(e)
                    };;) {
                    var s = c.exec(o[2]);
                    if (!s) break;
                    var l = s[0];
                    switch (l[0]) {
                        case ".":
                            u("class", l.slice(1));
                            break;
                        case "#":
                            u("id", l.slice(1));
                            break;
                        case "[":
                            var d = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(l);
                            if (!d) throw new Error(r);
                            u(d[1], null !== (t = null !== (e = d[4]) && void 0 !== e ? e : d[5]) && void 0 !== t ? t : "");
                            break;
                        default:
                            throw new Error(r)
                    }
                }
                return [i, a]
            }

            function V(n) {
                for (var e = new Uint8Array(n.length), t = 0; t < n.length; t++) {
                    var r = n.charCodeAt(t);
                    if (r > 127) return (new TextEncoder).encode(n);
                    e[t] = r
                }
                return e
            }

            function S(n, e) {
                var t = n[0] >>> 16,
                    r = 65535 & n[0],
                    o = n[1] >>> 16,
                    i = 65535 & n[1],
                    a = e[0] >>> 16,
                    c = 65535 & e[0],
                    u = e[1] >>> 16,
                    s = 65535 & e[1],
                    l = 0,
                    d = 0,
                    f = 0,
                    m = 0;
                m += i + s, f += m >>> 16, m &= 65535, f += o + u, d += f >>> 16, f &= 65535, d += r + c, l += d >>> 16, d &= 65535, l += t + a, l &= 65535, n[0] = l << 16 | d, n[1] = f << 16 | m
            }

            function W(n, e) {
                var t = n[0] >>> 16,
                    r = 65535 & n[0],
                    o = n[1] >>> 16,
                    i = 65535 & n[1],
                    a = e[0] >>> 16,
                    c = 65535 & e[0],
                    u = e[1] >>> 16,
                    s = 65535 & e[1],
                    l = 0,
                    d = 0,
                    f = 0,
                    m = 0;
                m += i * s, f += m >>> 16, m &= 65535, f += o * s, d += f >>> 16, f &= 65535, f += i * u, d += f >>> 16, f &= 65535, d += r * s, l += d >>> 16, d &= 65535, d += o * u, l += d >>> 16, d &= 65535, d += i * c, l += d >>> 16, d &= 65535, l += t * s + r * u + o * c + i * a, l &= 65535, n[0] = l << 16 | d, n[1] = f << 16 | m
            }

            function x(n, e) {
                var t = n[0];
                e %= 64, 32 === e ? (n[0] = n[1], n[1] = t) : e < 32 ? (n[0] = t << e | n[1] >>> 32 - e, n[1] = n[1] << e | t >>> 32 - e) : (e -= 32, n[0] = n[1] << e | t >>> 32 - e, n[1] = t << e | n[1] >>> 32 - e)
            }

            function Z(n, e) {
                e %= 64, 0 !== e && (e < 32 ? (n[0] = n[1] >>> 32 - e, n[1] = n[1] << e) : (n[0] = n[1] << e - 32, n[1] = 0))
            }

            function M(n, e) {
                n[0] ^= e[0], n[1] ^= e[1]
            }
            var R = [4283543511, 3981806797],
                F = [3301882366, 444984403];

            function G(n) {
                var e = [0, n[0] >>> 1];
                M(n, e), W(n, R), e[1] = n[0] >>> 1, M(n, e), W(n, F), e[1] = n[0] >>> 1, M(n, e)
            }
            var I = [2277735313, 289559509],
                j = [1291169091, 658871167],
                C = [0, 5],
                Y = [0, 1390208809],
                X = [0, 944331445];

            function E(n, e) {
                var t = V(n);
                e = e || 0;
                var r, o = [0, t.length],
                    i = o[1] % 16,
                    a = o[1] - i,
                    c = [0, e],
                    u = [0, e],
                    s = [0, 0],
                    l = [0, 0];
                for (r = 0; r < a; r += 16) s[0] = t[r + 4] | t[r + 5] << 8 | t[r + 6] << 16 | t[r + 7] << 24, s[1] = t[r] | t[r + 1] << 8 | t[r + 2] << 16 | t[r + 3] << 24, l[0] = t[r + 12] | t[r + 13] << 8 | t[r + 14] << 16 | t[r + 15] << 24, l[1] = t[r + 8] | t[r + 9] << 8 | t[r + 10] << 16 | t[r + 11] << 24, W(s, I), x(s, 31), W(s, j), M(c, s), x(c, 27), S(c, u), W(c, C), S(c, Y), W(l, j), x(l, 33), W(l, I), M(u, l), x(u, 31), S(u, c), W(u, C), S(u, X);
                s[0] = 0, s[1] = 0, l[0] = 0, l[1] = 0;
                var d = [0, 0];
                switch (i) {
                    case 15:
                        d[1] = t[r + 14], Z(d, 48), M(l, d);
                    case 14:
                        d[1] = t[r + 13], Z(d, 40), M(l, d);
                    case 13:
                        d[1] = t[r + 12], Z(d, 32), M(l, d);
                    case 12:
                        d[1] = t[r + 11], Z(d, 24), M(l, d);
                    case 11:
                        d[1] = t[r + 10], Z(d, 16), M(l, d);
                    case 10:
                        d[1] = t[r + 9], Z(d, 8), M(l, d);
                    case 9:
                        d[1] = t[r + 8], M(l, d), W(l, j), x(l, 33), W(l, I), M(u, l);
                    case 8:
                        d[1] = t[r + 7], Z(d, 56), M(s, d);
                    case 7:
                        d[1] = t[r + 6], Z(d, 48), M(s, d);
                    case 6:
                        d[1] = t[r + 5], Z(d, 40), M(s, d);
                    case 5:
                        d[1] = t[r + 4], Z(d, 32), M(s, d);
                    case 4:
                        d[1] = t[r + 3], Z(d, 24), M(s, d);
                    case 3:
                        d[1] = t[r + 2], Z(d, 16), M(s, d);
                    case 2:
                        d[1] = t[r + 1], Z(d, 8), M(s, d);
                    case 1:
                        d[1] = t[r], M(s, d), W(s, I), x(s, 31), W(s, j), M(c, s)
                }
                return M(c, o), M(u, o), S(c, u), S(u, c), G(c), G(u), S(c, u), S(u, c), ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (u[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (u[1] >>> 0).toString(16)).slice(-8)
            }

            function P(n) {
                var e;
                return r({
                    name: n.name,
                    message: n.message,
                    stack: null === (e = n.stack) || void 0 === e ? void 0 : e.split("\n")
                }, n)
            }

            function H(n) {
                return /^function\s.*?\{\s*\[native code]\s*}$/.test(String(n))
            }

            function A(n) {
                return "function" !== typeof n
            }

            function N(n, e) {
                var t = v(new Promise((function(t) {
                    var r = Date.now();
                    f(n.bind(null, e), (function() {
                        for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                        var o = Date.now() - r;
                        if (!n[0]) return t((function() {
                            return {
                                error: n[1],
                                duration: o
                            }
                        }));
                        var i = n[1];
                        if (A(i)) return t((function() {
                            return {
                                value: i,
                                duration: o
                            }
                        }));
                        t((function() {
                            return new Promise((function(n) {
                                var e = Date.now();
                                f(i, (function() {
                                    for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                    var i = o + Date.now() - e;
                                    if (!t[0]) return n({
                                        error: t[1],
                                        duration: i
                                    });
                                    n({
                                        value: t[1],
                                        duration: i
                                    })
                                }))
                            }))
                        }))
                    }))
                })));
                return function() {
                    return t.then((function(n) {
                        return n()
                    }))
                }
            }

            function J(n, e, t, r) {
                var a = Object.keys(n).filter((function(n) {
                        return p(t, n)
                    })),
                    c = v(m(a, (function(t) {
                        return N(n[t], e)
                    }), r));
                return function() {
                    return o(this, void 0, void 0, (function() {
                        var n, e, t, o, u;
                        return i(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, c];
                                case 1:
                                    return n = i.sent(), [4, m(n, (function(n) {
                                        return v(n())
                                    }), r)];
                                case 2:
                                    return e = i.sent(), [4, Promise.all(e)];
                                case 3:
                                    for (t = i.sent(), o = {}, u = 0; u < a.length; ++u) o[a[u]] = t[u];
                                    return [2, o]
                            }
                        }))
                    }))
                }
            }

            function T(n, e) {
                var t = function(n) {
                    return A(n) ? e(n) : function() {
                        var t = n();
                        return d(t) ? t.then(e) : e(t)
                    }
                };
                return function(e) {
                    var r = n(e);
                    return d(r) ? r.then(t) : t(r)
                }
            }

            function _() {
                var n = window,
                    e = navigator;
                return w(["MSCSSMatrix" in n, "msSetImmediate" in n, "msIndexedDB" in n, "msMaxTouchPoints" in e, "msPointerEnabled" in e]) >= 4
            }

            function D() {
                var n = window,
                    e = navigator;
                return w(["msWriteProfilerMark" in n, "MSStream" in n, "msLaunchUri" in e, "msSaveBlob" in e]) >= 3 && !_()
            }

            function z() {
                var n = window,
                    e = navigator;
                return w(["webkitPersistentStorage" in e, "webkitTemporaryStorage" in e, 0 === (e.vendor || "").indexOf("Google"), "webkitResolveLocalFileSystemURL" in n, "BatteryManager" in n, "webkitMediaStream" in n, "webkitSpeechGrammar" in n]) >= 5
            }

            function B() {
                var n = window,
                    e = navigator;
                return w(["ApplePayError" in n, "CSSPrimitiveValue" in n, "Counter" in n, 0 === e.vendor.indexOf("Apple"), "RGBColor" in n, "WebKitMediaKeys" in n]) >= 4
            }

            function O() {
                var n = window,
                    e = n.HTMLElement,
                    t = n.Document;
                return w(["safari" in n, !("ongestureend" in n), !("TouchEvent" in n), !("orientation" in n), e && !("autocapitalize" in e.prototype), t && "pointerLockElement" in t.prototype]) >= 4
            }

            function U() {
                var n = window;
                return H(n.print) && "[object WebPageNamespace]" === String(n.browser)
            }

            function Q() {
                var n, e, t = window;
                return w(["buildID" in navigator, "MozAppearance" in (null !== (e = null === (n = document.documentElement) || void 0 === n ? void 0 : n.style) && void 0 !== e ? e : {}), "onmozfullscreenchange" in t, "mozInnerScreenX" in t, "CSSMozDocumentRule" in t, "CanvasCaptureMediaStream" in t]) >= 4
            }

            function K() {
                var n = window;
                return w([!("MediaSettingsRange" in n), "RTCEncodedAudioFrame" in n, "" + n.Intl === "[object Intl]", "" + n.Reflect === "[object Reflect]"]) >= 3
            }

            function q() {
                var n = window,
                    e = n.URLPattern;
                return w(["union" in Set.prototype, "Iterator" in n, e && "hasRegExpGroups" in e.prototype, "RGB8" in WebGLRenderingContext.prototype]) >= 3
            }

            function $() {
                var n = window;
                return w(["DOMRectList" in n, "RTCPeerConnectionIceEvent" in n, "SVGGeometryElement" in n, "ontransitioncancel" in n]) >= 3
            }

            function nn() {
                var n = window,
                    e = navigator,
                    t = n.CSS,
                    r = n.HTMLButtonElement;
                return w([!("getStorageUpdates" in e), r && "popover" in r.prototype, "CSSCounterStyleRule" in n, t.supports("font-size-adjust: ex-height 0.5"), t.supports("text-transform: full-width")]) >= 4
            }

            function en() {
                if ("iPad" === navigator.platform) return !0;
                var n = screen,
                    e = n.width / n.height;
                return w(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, e > .65 && e < 1.53]) >= 2
            }

            function tn() {
                var n = document;
                return n.fullscreenElement || n.msFullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement || null
            }

            function rn() {
                var n = document;
                return (n.exitFullscreen || n.msExitFullscreen || n.mozCancelFullScreen || n.webkitExitFullscreen).call(n)
            }

            function on() {
                var n = z(),
                    e = Q(),
                    t = window,
                    r = navigator,
                    o = "connection";
                return n ? w([!("SharedWorker" in t), r[o] && "ontypechange" in r[o], !("sinkId" in new Audio)]) >= 2 : !!e && w(["onorientationchange" in t, "orientation" in t, /android/i.test(r.appVersion)]) >= 2
            }

            function an() {
                var n = navigator,
                    e = window,
                    t = Audio.prototype,
                    r = e.visualViewport;
                return w(["srLatency" in t, "srChannelCount" in t, "devicePosture" in n, r && "segments" in r, "getTextInformation" in Image.prototype]) >= 3
            }

            function cn() {
                return ln() ? -4 : un()
            }

            function un() {
                var n = window,
                    e = n.OfflineAudioContext || n.webkitOfflineAudioContext;
                if (!e) return -2;
                if (sn()) return -1;
                var t = 4500,
                    r = 5e3,
                    o = new e(1, r, 44100),
                    i = o.createOscillator();
                i.type = "triangle", i.frequency.value = 1e4;
                var a = o.createDynamicsCompressor();
                a.threshold.value = -50, a.knee.value = 40, a.ratio.value = 12, a.attack.value = 0, a.release.value = .25, i.connect(a), a.connect(o.destination), i.start(0);
                var c = dn(o),
                    u = c[0],
                    s = c[1],
                    l = v(u.then((function(n) {
                        return fn(n.getChannelData(0).subarray(t))
                    }), (function(n) {
                        if ("timeout" === n.name || "suspended" === n.name) return -3;
                        throw n
                    })));
                return function() {
                    return s(), l
                }
            }

            function sn() {
                return B() && !O() && !$()
            }

            function ln() {
                return B() && nn() && U() || z() && an() && q()
            }

            function dn(n) {
                var e = 3,
                    t = 500,
                    r = 500,
                    o = 5e3,
                    i = function() {},
                    a = new Promise((function(a, c) {
                        var u = !1,
                            s = 0,
                            l = 0;
                        n.oncomplete = function(n) {
                            return a(n.renderedBuffer)
                        };
                        var f = function() {
                                setTimeout((function() {
                                    return c(mn("timeout"))
                                }), Math.min(r, l + o - Date.now()))
                            },
                            m = function() {
                                try {
                                    var r = n.startRendering();
                                    switch (d(r) && v(r), n.state) {
                                        case "running":
                                            l = Date.now(), u && f();
                                            break;
                                        case "suspended":
                                            document.hidden || s++, u && s >= e ? c(mn("suspended")) : setTimeout(m, t);
                                            break
                                    }
                                } catch (o) {
                                    c(o)
                                }
                            };
                        m(), i = function() {
                            u || (u = !0, l > 0 && f())
                        }
                    }));
                return [a, i]
            }

            function fn(n) {
                for (var e = 0, t = 0; t < n.length; ++t) e += Math.abs(n[t]);
                return e
            }

            function mn(n) {
                var e = new Error(n);
                return e.name = n, e
            }

            function vn(n, e, t) {
                var r, a, c;
                return void 0 === t && (t = 50), o(this, void 0, void 0, (function() {
                    var o, s;
                    return i(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                o = document, i.label = 1;
                            case 1:
                                return o.body ? [3, 3] : [4, u(t)];
                            case 2:
                                return i.sent(), [3, 1];
                            case 3:
                                s = o.createElement("iframe"), i.label = 4;
                            case 4:
                                return i.trys.push([4, , 10, 11]), [4, new Promise((function(n, t) {
                                    var r = !1,
                                        i = function() {
                                            r = !0, n()
                                        },
                                        a = function(n) {
                                            r = !0, t(n)
                                        };
                                    s.onload = i, s.onerror = a;
                                    var c = s.style;
                                    c.setProperty("display", "block", "important"), c.position = "absolute", c.top = "0", c.left = "0", c.visibility = "hidden", e && "srcdoc" in s ? s.srcdoc = e : s.src = "about:blank", o.body.appendChild(s);
                                    var u = function() {
                                        var n, e;
                                        r || ("complete" === (null === (e = null === (n = s.contentWindow) || void 0 === n ? void 0 : n.document) || void 0 === e ? void 0 : e.readyState) ? i() : setTimeout(u, 10))
                                    };
                                    u()
                                }))];
                            case 5:
                                i.sent(), i.label = 6;
                            case 6:
                                return (null === (a = null === (r = s.contentWindow) || void 0 === r ? void 0 : r.document) || void 0 === a ? void 0 : a.body) ? [3, 8] : [4, u(t)];
                            case 7:
                                return i.sent(), [3, 6];
                            case 8:
                                return [4, n(s, s.contentWindow)];
                            case 9:
                                return [2, i.sent()];
                            case 10:
                                return null === (c = s.parentNode) || void 0 === c || c.removeChild(s), [7];
                            case 11:
                                return [2]
                        }
                    }))
                }))
            }

            function hn(n) {
                for (var e = k(n), t = e[0], r = e[1], o = document.createElement(null !== t && void 0 !== t ? t : "div"), i = 0, a = Object.keys(r); i < a.length; i++) {
                    var c = a[i],
                        u = r[c].join(" ");
                    "style" === c ? pn(o.style, u) : o.setAttribute(c, u)
                }
                return o
            }

            function pn(n, e) {
                for (var t = 0, r = e.split(";"); t < r.length; t++) {
                    var o = r[t],
                        i = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(o);
                    if (i) {
                        var a = i[1],
                            c = i[2],
                            u = i[4];
                        n.setProperty(a, c, u || "")
                    }
                }
            }

            function bn() {
                for (var n = window;;) {
                    var e = n.parent;
                    if (!e || e === n) return !1;
                    try {
                        if (e.location.origin !== n.location.origin) return !0
                    } catch (t) {
                        if (t instanceof Error && "SecurityError" === t.name) return !0;
                        throw t
                    }
                    n = e
                }
            }
            var yn = "mmMwWLliI0O&1",
                gn = "48px",
                wn = ["monospace", "sans-serif", "serif"],
                Ln = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

            function kn() {
                var n = this;
                return vn((function(e, t) {
                    var r = t.document;
                    return o(n, void 0, void 0, (function() {
                        var n, e, t, o, a, c, u, s, l, d, f, m;
                        return i(this, (function(i) {
                            for (n = r.body, n.style.fontSize = gn, e = r.createElement("div"), e.style.setProperty("visibility", "hidden", "important"), t = {}, o = {}, a = function(n) {
                                    var t = r.createElement("span"),
                                        o = t.style;
                                    return o.position = "absolute", o.top = "0", o.left = "0", o.fontFamily = n, t.textContent = yn, e.appendChild(t), t
                                }, c = function(n, e) {
                                    return a("'".concat(n, "',").concat(e))
                                }, u = function() {
                                    return wn.map(a)
                                }, s = function() {
                                    for (var n = {}, e = function(e) {
                                            n[e] = wn.map((function(n) {
                                                return c(e, n)
                                            }))
                                        }, t = 0, r = Ln; t < r.length; t++) {
                                        var o = r[t];
                                        e(o)
                                    }
                                    return n
                                }, l = function(n) {
                                    return wn.some((function(e, r) {
                                        return n[r].offsetWidth !== t[e] || n[r].offsetHeight !== o[e]
                                    }))
                                }, d = u(), f = s(), n.appendChild(e), m = 0; m < wn.length; m++) t[wn[m]] = d[m].offsetWidth, o[wn[m]] = d[m].offsetHeight;
                            return [2, Ln.filter((function(n) {
                                return l(f[n])
                            }))]
                        }))
                    }))
                }))
            }

            function Vn() {
                var n = navigator.plugins;
                if (n) {
                    for (var e = [], t = 0; t < n.length; ++t) {
                        var r = n[t];
                        if (r) {
                            for (var o = [], i = 0; i < r.length; ++i) {
                                var a = r[i];
                                o.push({
                                    type: a.type,
                                    suffixes: a.suffixes
                                })
                            }
                            e.push({
                                name: r.name,
                                description: r.description,
                                mimeTypes: o
                            })
                        }
                    }
                    return e
                }
            }

            function Sn() {
                return Wn(jn())
            }

            function Wn(n) {
                var e, t, r, o = !1,
                    i = xn(),
                    a = i[0],
                    c = i[1];
                return Zn(a, c) ? (o = Mn(c), n ? t = r = "skipped" : (e = Rn(a, c), t = e[0], r = e[1])) : t = r = "unsupported", {
                    winding: o,
                    geometry: t,
                    text: r
                }
            }

            function xn() {
                var n = document.createElement("canvas");
                return n.width = 1, n.height = 1, [n, n.getContext("2d")]
            }

            function Zn(n, e) {
                return !(!e || !n.toDataURL)
            }

            function Mn(n) {
                return n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), !n.isPointInPath(5, 5, "evenodd")
            }

            function Rn(n, e) {
                Fn(n, e);
                var t = In(n),
                    r = In(n);
                if (t !== r) return ["unstable", "unstable"];
                Gn(n, e);
                var o = In(n);
                return [o, t]
            }

            function Fn(n, e) {
                n.width = 240, n.height = 60, e.textBaseline = "alphabetic", e.fillStyle = "#f60", e.fillRect(100, 1, 62, 20), e.fillStyle = "#069", e.font = '11pt "Times New Roman"';
                var t = "Cwm fjordbank gly ".concat(String.fromCharCode(55357, 56835));
                e.fillText(t, 2, 15), e.fillStyle = "rgba(102, 204, 0, 0.2)", e.font = "18pt Arial", e.fillText(t, 4, 45)
            }

            function Gn(n, e) {
                n.width = 122, n.height = 110, e.globalCompositeOperation = "multiply";
                for (var t = 0, r = [
                        ["#f2f", 40, 40],
                        ["#2ff", 80, 40],
                        ["#ff2", 60, 80]
                    ]; t < r.length; t++) {
                    var o = r[t],
                        i = o[0],
                        a = o[1],
                        c = o[2];
                    e.fillStyle = i, e.beginPath(), e.arc(a, c, 40, 0, 2 * Math.PI, !0), e.closePath(), e.fill()
                }
                e.fillStyle = "#f9c", e.arc(60, 60, 60, 0, 2 * Math.PI, !0), e.arc(60, 60, 20, 0, 2 * Math.PI, !0), e.fill("evenodd")
            }

            function In(n) {
                return n.toDataURL()
            }

            function jn() {
                return B() && nn() && U()
            }

            function Cn() {
                var n, e = navigator,
                    t = 0;
                void 0 !== e.maxTouchPoints ? t = b(e.maxTouchPoints) : void 0 !== e.msMaxTouchPoints && (t = e.msMaxTouchPoints);
                try {
                    document.createEvent("TouchEvent"), n = !0
                } catch (o) {
                    n = !1
                }
                var r = "ontouchstart" in window;
                return {
                    maxTouchPoints: t,
                    touchEvent: n,
                    touchStart: r
                }
            }

            function Yn() {
                return navigator.oscpu
            }

            function Xn() {
                var n = navigator,
                    e = [],
                    t = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
                if (void 0 !== t && e.push([t]), Array.isArray(n.languages)) z() && K() || e.push(n.languages);
                else if ("string" === typeof n.languages) {
                    var r = n.languages;
                    r && e.push(r.split(","))
                }
                return e
            }

            function En() {
                return window.screen.colorDepth
            }

            function Pn() {
                return g(y(navigator.deviceMemory), void 0)
            }

            function Hn() {
                if (!(B() && nn() && U())) return An()
            }

            function An() {
                var n = screen,
                    e = function(n) {
                        return g(b(n), null)
                    },
                    t = [e(n.width), e(n.height)];
                return t.sort().reverse(), t
            }
            var Nn, Jn, Tn = 2500,
                _n = 10;

            function Dn() {
                if (void 0 === Jn) {
                    var n = function() {
                        var e = On();
                        Un(e) ? Jn = setTimeout(n, Tn) : (Nn = e, Jn = void 0)
                    };
                    n()
                }
            }

            function zn() {
                var n = this;
                return Dn(),
                    function() {
                        return o(n, void 0, void 0, (function() {
                            var n;
                            return i(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return n = On(), Un(n) ? Nn ? [2, a([], Nn, !0)] : tn() ? [4, rn()] : [3, 2] : [3, 2];
                                    case 1:
                                        e.sent(), n = On(), e.label = 2;
                                    case 2:
                                        return Un(n) || (Nn = n), [2, n]
                                }
                            }))
                        }))
                    }
            }

            function Bn() {
                var n = this;
                if (B() && nn() && U()) return function() {
                    return Promise.resolve(void 0)
                };
                var e = zn();
                return function() {
                    return o(n, void 0, void 0, (function() {
                        var n, t;
                        return i(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, e()];
                                case 1:
                                    return n = r.sent(), t = function(n) {
                                        return null === n ? null : L(n, _n)
                                    }, [2, [t(n[0]), t(n[1]), t(n[2]), t(n[3])]]
                            }
                        }))
                    }))
                }
            }

            function On() {
                var n = screen;
                return [g(y(n.availTop), null), g(y(n.width) - y(n.availWidth) - g(y(n.availLeft), 0), null), g(y(n.height) - y(n.availHeight) - g(y(n.availTop), 0), null), g(y(n.availLeft), null)]
            }

            function Un(n) {
                for (var e = 0; e < 4; ++e)
                    if (n[e]) return !1;
                return !0
            }

            function Qn() {
                return g(b(navigator.hardwareConcurrency), void 0)
            }

            function Kn() {
                var n, e = null === (n = window.Intl) || void 0 === n ? void 0 : n.DateTimeFormat;
                if (e) {
                    var t = (new e).resolvedOptions().timeZone;
                    if (t) return t
                }
                var r = -qn();
                return "UTC".concat(r >= 0 ? "+" : "").concat(r)
            }

            function qn() {
                var n = (new Date).getFullYear();
                return Math.max(y(new Date(n, 0, 1).getTimezoneOffset()), y(new Date(n, 6, 1).getTimezoneOffset()))
            }

            function $n() {
                try {
                    return !!window.sessionStorage
                } catch (n) {
                    return !0
                }
            }

            function ne() {
                try {
                    return !!window.localStorage
                } catch (n) {
                    return !0
                }
            }

            function ee() {
                if (!_() && !D()) try {
                    return !!window.indexedDB
                } catch (n) {
                    return !0
                }
            }

            function te() {
                return !!window.openDatabase
            }

            function re() {
                return navigator.cpuClass
            }

            function oe() {
                var n = navigator.platform;
                return "MacIntel" === n && B() && !O() ? en() ? "iPad" : "iPhone" : n
            }

            function ie() {
                return navigator.vendor || ""
            }

            function ae() {
                for (var n = [], e = 0, t = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; e < t.length; e++) {
                    var r = t[e],
                        o = window[r];
                    o && "object" === typeof o && n.push(r)
                }
                return n.sort()
            }

            function ce() {
                var n = document;
                try {
                    n.cookie = "cookietest=1; SameSite=Strict;";
                    var e = -1 !== n.cookie.indexOf("cookietest=");
                    return n.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", e
                } catch (t) {
                    return !1
                }
            }

            function ue() {
                var n = atob;
                return {
                    abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', n("I0JveC1CYW5uZXItYWRz")],
                    abpvn: [".quangcao", "#mobileCatfish", n("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
                    adBlockFinland: [".mainostila", n("LnNwb25zb3JpdA=="), ".ylamainos", n("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), n("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
                    adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", n("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
                    adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", n("LmhlYWRlci1ibG9ja2VkLWFk"), n("I2FkX2Jsb2NrZXI=")],
                    adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
                    adGuardBase: [".BetterJsPopOverlay", n("I2FkXzMwMFgyNTA="), n("I2Jhbm5lcmZsb2F0MjI="), n("I2NhbXBhaWduLWJhbm5lcg=="), n("I0FkLUNvbnRlbnQ=")],
                    adGuardChinese: [n("LlppX2FkX2FfSA=="), n("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", n("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), n("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
                    adGuardFrench: ["#pavePub", n("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", n("LmFkc19iYW4=")],
                    adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
                    adGuardJapanese: ["#kauli_yad_1", n("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), n("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), n("LmFkZ29vZ2xl"), n("Ll9faXNib29zdFJldHVybkFk")],
                    adGuardMobile: [n("YW1wLWF1dG8tYWRz"), n("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", n("I2FkX2ludmlld19hcmVh")],
                    adGuardRussian: [n("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), n("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', n("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
                    adGuardSocial: [n("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), n("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
                    adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
                    adGuardTrackingProtection: ["#qoo-counter", n("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), n("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), n("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
                    adGuardTurkish: ["#backkapat", n("I3Jla2xhbWk="), n("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), n("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), n("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
                    bulgarian: [n("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
                    easyList: [".yb-floorad", n("LndpZGdldF9wb19hZHNfd2lkZ2V0"), n("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", n("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],
                    easyListChina: [n("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), n("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
                    easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", n("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
                    easyListCzechSlovak: ["#onlajny-stickers", n("I3Jla2xhbW5pLWJveA=="), n("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", n("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
                    easyListDutch: [n("I2FkdmVydGVudGll"), n("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", n("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
                    easyListGermany: ["#SSpotIMPopSlider", n("LnNwb25zb3JsaW5rZ3J1ZW4="), n("I3dlcmJ1bmdza3k="), n("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), n("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
                    easyListItaly: [n("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", n("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), n("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), n("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
                    easyListLithuania: [n("LnJla2xhbW9zX3RhcnBhcw=="), n("LnJla2xhbW9zX251b3JvZG9z"), n("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), n("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), n("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
                    estonian: [n("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
                    fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
                    fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
                    fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
                    fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
                    frellwitSwedish: [n("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), n("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", n("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
                    greekAdBlock: [n("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), n("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), n("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
                    hungarian: ["#cemp_doboz", ".optimonk-iframe-container", n("LmFkX19tYWlu"), n("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
                    iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
                    icelandicAbp: [n("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
                    latvian: [n("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), n("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
                    listKr: [n("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), n("I2xpdmVyZUFkV3JhcHBlcg=="), n("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), n("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
                    listeAr: [n("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", n("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), n("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), n("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
                    listeFr: [n("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), n("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), n("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
                    officialPolish: ["#ceneo-placeholder-ceneo-12", n("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), n("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), n("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), n("ZGl2I3NrYXBpZWNfYWQ=")],
                    ro: [n("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), n("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), n("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), n("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
                    ruAd: [n("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), n("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), n("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
                    thaiAds: ["a[href*=macau-uta-popup]", n("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), n("LmFkczMwMHM="), ".bumq", ".img-kosana"],
                    webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", n("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
                }
            }

            function se(n) {
                var e = void 0 === n ? {} : n,
                    t = e.debug;
                return o(this, void 0, void 0, (function() {
                    var n, e, r, o, a, c;
                    return i(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return le() ? (n = ue(), e = Object.keys(n), r = (c = []).concat.apply(c, e.map((function(e) {
                                    return n[e]
                                }))), [4, de(r)]) : [2, void 0];
                            case 1:
                                return o = i.sent(), t && me(n, o), a = e.filter((function(e) {
                                    var t = n[e],
                                        r = w(t.map((function(n) {
                                            return o[n]
                                        })));
                                    return r > .6 * t.length
                                })), a.sort(), [2, a]
                        }
                    }))
                }))
            }

            function le() {
                return B() || on()
            }

            function de(n) {
                var e;
                return o(this, void 0, void 0, (function() {
                    var t, r, o, a, c, s, l;
                    return i(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                for (t = document, r = t.createElement("div"), o = new Array(n.length), a = {}, fe(r), l = 0; l < n.length; ++l) c = hn(n[l]), "DIALOG" === c.tagName && c.show(), s = t.createElement("div"), fe(s), s.appendChild(c), r.appendChild(s), o[l] = c;
                                i.label = 1;
                            case 1:
                                return t.body ? [3, 3] : [4, u(50)];
                            case 2:
                                return i.sent(), [3, 1];
                            case 3:
                                t.body.appendChild(r);
                                try {
                                    for (l = 0; l < n.length; ++l) o[l].offsetParent || (a[n[l]] = !0)
                                } finally {
                                    null === (e = r.parentNode) || void 0 === e || e.removeChild(r)
                                }
                                return [2, a]
                        }
                    }))
                }))
            }

            function fe(n) {
                n.style.setProperty("visibility", "hidden", "important"), n.style.setProperty("display", "block", "important")
            }

            function me(n, e) {
                for (var t = "DOM blockers debug:\n```", r = 0, o = Object.keys(n); r < o.length; r++) {
                    var i = o[r];
                    t += "\n".concat(i, ":");
                    for (var a = 0, c = n[i]; a < c.length; a++) {
                        var u = c[a];
                        t += "\n  ".concat(e[u] ? "🚫" : "➡️", " ").concat(u)
                    }
                }
                console.log("".concat(t, "\n```"))
            }

            function ve() {
                for (var n = 0, e = ["rec2020", "p3", "srgb"]; n < e.length; n++) {
                    var t = e[n];
                    if (matchMedia("(color-gamut: ".concat(t, ")")).matches) return t
                }
            }

            function he() {
                return !!pe("inverted") || !pe("none") && void 0
            }

            function pe(n) {
                return matchMedia("(inverted-colors: ".concat(n, ")")).matches
            }

            function be() {
                return !!ye("active") || !ye("none") && void 0
            }

            function ye(n) {
                return matchMedia("(forced-colors: ".concat(n, ")")).matches
            }
            var ge = 100;

            function we() {
                if (matchMedia("(min-monochrome: 0)").matches) {
                    for (var n = 0; n <= ge; ++n)
                        if (matchMedia("(max-monochrome: ".concat(n, ")")).matches) return n;
                    throw new Error("Too high value")
                }
            }

            function Le() {
                return ke("no-preference") ? 0 : ke("high") || ke("more") ? 1 : ke("low") || ke("less") ? -1 : ke("forced") ? 10 : void 0
            }

            function ke(n) {
                return matchMedia("(prefers-contrast: ".concat(n, ")")).matches
            }

            function Ve() {
                return !!Se("reduce") || !Se("no-preference") && void 0
            }

            function Se(n) {
                return matchMedia("(prefers-reduced-motion: ".concat(n, ")")).matches
            }

            function We() {
                return !!xe("reduce") || !xe("no-preference") && void 0
            }

            function xe(n) {
                return matchMedia("(prefers-reduced-transparency: ".concat(n, ")")).matches
            }

            function Ze() {
                return !!Me("high") || !Me("standard") && void 0
            }

            function Me(n) {
                return matchMedia("(dynamic-range: ".concat(n, ")")).matches
            }
            var Re = Math,
                Fe = function() {
                    return 0
                };

            function Ge() {
                var n = Re.acos || Fe,
                    e = Re.acosh || Fe,
                    t = Re.asin || Fe,
                    r = Re.asinh || Fe,
                    o = Re.atanh || Fe,
                    i = Re.atan || Fe,
                    a = Re.sin || Fe,
                    c = Re.sinh || Fe,
                    u = Re.cos || Fe,
                    s = Re.cosh || Fe,
                    l = Re.tan || Fe,
                    d = Re.tanh || Fe,
                    f = Re.exp || Fe,
                    m = Re.expm1 || Fe,
                    v = Re.log1p || Fe,
                    h = function(n) {
                        return Re.pow(Re.PI, n)
                    },
                    p = function(n) {
                        return Re.log(n + Re.sqrt(n * n - 1))
                    },
                    b = function(n) {
                        return Re.log(n + Re.sqrt(n * n + 1))
                    },
                    y = function(n) {
                        return Re.log((1 + n) / (1 - n)) / 2
                    },
                    g = function(n) {
                        return Re.exp(n) - 1 / Re.exp(n) / 2
                    },
                    w = function(n) {
                        return (Re.exp(n) + 1 / Re.exp(n)) / 2
                    },
                    L = function(n) {
                        return Re.exp(n) - 1
                    },
                    k = function(n) {
                        return (Re.exp(2 * n) - 1) / (Re.exp(2 * n) + 1)
                    },
                    V = function(n) {
                        return Re.log(1 + n)
                    };
                return {
                    acos: n(.12312423423423424),
                    acosh: e(1e308),
                    acoshPf: p(1e154),
                    asin: t(.12312423423423424),
                    asinh: r(1),
                    asinhPf: b(1),
                    atanh: o(.5),
                    atanhPf: y(.5),
                    atan: i(.5),
                    sin: a(-1e300),
                    sinh: c(1),
                    sinhPf: g(1),
                    cos: u(10.000000000123),
                    cosh: s(1),
                    coshPf: w(1),
                    tan: l(-1e300),
                    tanh: d(1),
                    tanhPf: k(1),
                    exp: f(1),
                    expm1: m(1),
                    expm1Pf: L(1),
                    log1p: v(10),
                    log1pPf: V(10),
                    powPI: h(-100)
                }
            }
            var Ie = "mmMwWLliI0fiflO&1",
                je = {
                    default: [],
                    apple: [{
                        font: "-apple-system-body"
                    }],
                    serif: [{
                        fontFamily: "serif"
                    }],
                    sans: [{
                        fontFamily: "sans-serif"
                    }],
                    mono: [{
                        fontFamily: "monospace"
                    }],
                    min: [{
                        fontSize: "1px"
                    }],
                    system: [{
                        fontFamily: "system-ui"
                    }]
                };

            function Ce() {
                return Ye((function(n, e) {
                    for (var t = {}, r = {}, o = 0, i = Object.keys(je); o < i.length; o++) {
                        var a = i[o],
                            c = je[a],
                            u = c[0],
                            s = void 0 === u ? {} : u,
                            l = c[1],
                            d = void 0 === l ? Ie : l,
                            f = n.createElement("span");
                        f.textContent = d, f.style.whiteSpace = "nowrap";
                        for (var m = 0, v = Object.keys(s); m < v.length; m++) {
                            var h = v[m],
                                p = s[h];
                            void 0 !== p && (f.style[h] = p)
                        }
                        t[a] = f, e.append(n.createElement("br"), f)
                    }
                    for (var b = 0, y = Object.keys(je); b < y.length; b++) {
                        a = y[b];
                        r[a] = t[a].getBoundingClientRect().width
                    }
                    return r
                }))
            }

            function Ye(n, e) {
                return void 0 === e && (e = 4e3), vn((function(t, r) {
                    var o = r.document,
                        i = o.body,
                        c = i.style;
                    c.width = "".concat(e, "px"), c.webkitTextSizeAdjust = c.textSizeAdjust = "none", z() ? i.style.zoom = "".concat(1 / r.devicePixelRatio) : B() && (i.style.zoom = "reset");
                    var u = o.createElement("div");
                    return u.textContent = a([], Array(e / 20 << 0), !0).map((function() {
                        return "word"
                    })).join(" "), i.appendChild(u), n(o, i)
                }), '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
            }

            function Xe() {
                return navigator.pdfViewerEnabled
            }

            function Ee() {
                var n = new Float32Array(1),
                    e = new Uint8Array(n.buffer);
                return n[0] = 1 / 0, n[0] = n[0] - n[0], e[3]
            }

            function Pe() {
                var n = window.ApplePaySession;
                if ("function" !== typeof(null === n || void 0 === n ? void 0 : n.canMakePayments)) return -1;
                if (He()) return -3;
                try {
                    return n.canMakePayments() ? 1 : 0
                } catch (e) {
                    return Ae(e)
                }
            }
            var He = bn;

            function Ae(n) {
                if (n instanceof Error && "InvalidAccessError" === n.name && /\bfrom\b.*\binsecure\b/i.test(n.message)) return -2;
                throw n
            }

            function Ne() {
                var n, e = document.createElement("a"),
                    t = null !== (n = e.attributionSourceId) && void 0 !== n ? n : e.attributionsourceid;
                return void 0 === t ? void 0 : String(t)
            }
            var Je = -1,
                Te = -2,
                _e = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
                De = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
                ze = ["FRAGMENT_SHADER", "VERTEX_SHADER"],
                Be = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"],
                Oe = "WEBGL_debug_renderer_info",
                Ue = "WEBGL_polygon_mode";

            function Qe(n) {
                var e, t, r, o, i, a, c = n.cache,
                    u = qe(c);
                if (!u) return Je;
                if (!ot(u)) return Te;
                var s = tt() ? null : u.getExtension(Oe);
                return {
                    version: (null === (e = u.getParameter(u.VERSION)) || void 0 === e ? void 0 : e.toString()) || "",
                    vendor: (null === (t = u.getParameter(u.VENDOR)) || void 0 === t ? void 0 : t.toString()) || "",
                    vendorUnmasked: s ? null === (r = u.getParameter(s.UNMASKED_VENDOR_WEBGL)) || void 0 === r ? void 0 : r.toString() : "",
                    renderer: (null === (o = u.getParameter(u.RENDERER)) || void 0 === o ? void 0 : o.toString()) || "",
                    rendererUnmasked: s ? null === (i = u.getParameter(s.UNMASKED_RENDERER_WEBGL)) || void 0 === i ? void 0 : i.toString() : "",
                    shadingLanguageVersion: (null === (a = u.getParameter(u.SHADING_LANGUAGE_VERSION)) || void 0 === a ? void 0 : a.toString()) || ""
                }
            }

            function Ke(n) {
                var e = n.cache,
                    t = qe(e);
                if (!t) return Je;
                if (!ot(t)) return Te;
                var r = t.getSupportedExtensions(),
                    o = t.getContextAttributes(),
                    i = [],
                    a = [],
                    c = [],
                    u = [],
                    s = [];
                if (o)
                    for (var l = 0, d = Object.keys(o); l < d.length; l++) {
                        var f = d[l];
                        a.push("".concat(f, "=").concat(o[f]))
                    }
                for (var m = nt(t), v = 0, h = m; v < h.length; v++) {
                    var p = h[v],
                        b = t[p];
                    c.push("".concat(p, "=").concat(b).concat(_e.has(b) ? "=".concat(t.getParameter(b)) : ""))
                }
                if (r)
                    for (var y = 0, g = r; y < g.length; y++) {
                        var w = g[y];
                        if (!(w === Oe && tt() || w === Ue && rt())) {
                            var L = t.getExtension(w);
                            if (L)
                                for (var k = 0, V = nt(L); k < V.length; k++) {
                                    p = V[k], b = L[p];
                                    u.push("".concat(p, "=").concat(b).concat(De.has(b) ? "=".concat(t.getParameter(b)) : ""))
                                } else i.push(w)
                        }
                    }
                for (var S = 0, W = ze; S < W.length; S++)
                    for (var x = W[S], Z = 0, M = Be; Z < M.length; Z++) {
                        var R = M[Z],
                            F = $e(t, x, R);
                        s.push("".concat(x, ".").concat(R, "=").concat(F.join(",")))
                    }
                return u.sort(), c.sort(), {
                    contextAttributes: a,
                    parameters: c,
                    shaderPrecisions: s,
                    extensions: r,
                    extensionParameters: u,
                    unsupportedExtensions: i
                }
            }

            function qe(n) {
                if (n.webgl) return n.webgl.context;
                var e, t = document.createElement("canvas");
                t.addEventListener("webglCreateContextError", (function() {
                    return e = void 0
                }));
                for (var r = 0, o = ["webgl", "experimental-webgl"]; r < o.length; r++) {
                    var i = o[r];
                    try {
                        e = t.getContext(i)
                    } catch (a) {}
                    if (e) break
                }
                return n.webgl = {
                    context: e
                }, e
            }

            function $e(n, e, t) {
                var r = n.getShaderPrecisionFormat(n[e], n[t]);
                return r ? [r.rangeMin, r.rangeMax, r.precision] : []
            }

            function nt(n) {
                var e = Object.keys(n.__proto__);
                return e.filter(et)
            }

            function et(n) {
                return "string" === typeof n && !n.match(/[^A-Z0-9_x]/)
            }

            function tt() {
                return Q()
            }

            function rt() {
                return z() || B()
            }

            function ot(n) {
                return "function" === typeof n.getParameter
            }

            function it() {
                var n = on() || B();
                if (!n) return -2;
                if (!window.AudioContext) return -1;
                var e = (new AudioContext).baseLatency;
                return null === e || void 0 === e ? -1 : isFinite(e) ? e : -3
            }

            function at() {
                if (!window.Intl) return -1;
                var n = window.Intl.DateTimeFormat;
                if (!n) return -2;
                var e = n().resolvedOptions().locale;
                return e || "" === e ? e : -3
            }
            var ct = {
                fonts: kn,
                domBlockers: se,
                fontPreferences: Ce,
                audio: cn,
                screenFrame: Bn,
                canvas: Sn,
                osCpu: Yn,
                languages: Xn,
                colorDepth: En,
                deviceMemory: Pn,
                screenResolution: Hn,
                hardwareConcurrency: Qn,
                timezone: Kn,
                sessionStorage: $n,
                localStorage: ne,
                indexedDB: ee,
                openDatabase: te,
                cpuClass: re,
                platform: oe,
                plugins: Vn,
                touchSupport: Cn,
                vendor: ie,
                vendorFlavors: ae,
                cookiesEnabled: ce,
                colorGamut: ve,
                invertedColors: he,
                forcedColors: be,
                monochrome: we,
                contrast: Le,
                reducedMotion: Ve,
                reducedTransparency: We,
                hdr: Ze,
                math: Ge,
                pdfViewerEnabled: Xe,
                architecture: Ee,
                applePay: Pe,
                privateClickMeasurement: Ne,
                audioBaseLatency: it,
                dateTimeLocale: at,
                webGlBasics: Qe,
                webGlExtensions: Ke
            };

            function ut(n) {
                return J(ct, n, [])
            }
            var st = "$ if upgrade to Pro: https://fpjs.dev/pro";

            function lt(n) {
                var e = dt(n),
                    t = ft(e);
                return {
                    score: e,
                    comment: st.replace(/\$/g, "".concat(t))
                }
            }

            function dt(n) {
                if (on()) return .4;
                if (B()) return !O() || nn() && U() ? .3 : .5;
                var e = "value" in n.platform ? n.platform.value : "";
                return /^Win/.test(e) ? .6 : /^Mac/.test(e) ? .5 : .7
            }

            function ft(n) {
                return L(.99 + .01 * n, 1e-4)
            }

            function mt(n) {
                for (var e = "", t = 0, r = Object.keys(n).sort(); t < r.length; t++) {
                    var o = r[t],
                        i = n[o],
                        a = "error" in i ? "error" : JSON.stringify(i.value);
                    e += "".concat(e ? "|" : "").concat(o.replace(/([:|\\])/g, "\\$1"), ":").concat(a)
                }
                return e
            }

            function vt(n) {
                return JSON.stringify(n, (function(n, e) {
                    return e instanceof Error ? P(e) : e
                }), 2)
            }

            function ht(n) {
                return E(mt(n))
            }

            function pt(n) {
                var e, t = lt(n);
                return {
                    get visitorId() {
                        return void 0 === e && (e = ht(this.components)), e
                    },
                    set visitorId(n) {
                        e = n
                    },
                    confidence: t,
                    components: n,
                    version: c
                }
            }

            function bt(n) {
                return void 0 === n && (n = 50), l(n, 2 * n)
            }

            function yt(n, e) {
                var t = Date.now();
                return {
                    get: function(r) {
                        return o(this, void 0, void 0, (function() {
                            var o, a, c;
                            return i(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return o = Date.now(), [4, n()];
                                    case 1:
                                        return a = i.sent(), c = pt(a), (e || (null === r || void 0 === r ? void 0 : r.debug)) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(c.version, "\nuserAgent: ").concat(navigator.userAgent, "\ntimeBetweenLoadAndGet: ").concat(o - t, "\nvisitorId: ").concat(c.visitorId, "\ncomponents: ").concat(vt(a), "\n```")), [2, c]
                                }
                            }))
                        }))
                    }
                }
            }

            function gt() {
                if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
                    var n = new XMLHttpRequest;
                    n.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(c, "/npm-monitoring"), !0), n.send()
                } catch (e) {
                    console.error(e)
                }
            }

            function wt(n) {
                var e;
                return void 0 === n && (n = {}), o(this, void 0, void 0, (function() {
                    var t, r, o;
                    return i(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return (null === (e = n.monitoring) || void 0 === e || e) && gt(), t = n.delayFallback, r = n.debug, [4, bt(t)];
                            case 1:
                                return i.sent(), o = ut({
                                    cache: {},
                                    debug: r
                                }), [2, yt(o, r)]
                        }
                    }))
                }))
            }
            var Lt = {
                    load: wt,
                    hashComponents: ht,
                    componentsToDebugString: vt
                },
                kt = E
        }
    }
]);