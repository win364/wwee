"use strict";
(self["webpackChunk_1win_frontend_main"] = self["webpackChunk_1win_frontend_main"] || []).push([
    [88627], {
        822126: (e, t, i) => {
            i(107185)
        },
        613758: (e, t, i) => {
            i(113433)
        },
        235824: (e, t, i) => {
            i(107185)
        },
        380557: (e, t, i) => {
            i(239277), i(682503), i(979181), i(107185)
        },
        266160: (e, t, i) => {
            i(239277), i(682503), i(107185)
        },
        435485: (e, t, i) => {
            i(239277), i(682503), i(979181), i(107185)
        },
        130820: (e, t, i) => {
            i(107185)
        },
        21395: (e, t, i) => {
            i(682503), i(979181), i(107185)
        },
        515646: (e, t, i) => {
            i(239277), i(682503), i(979181), i(107185)
        },
        492844: (e, t, i) => {
            i.d(t, {
                Z: () => a
            });
            var s = i(107185);

            function a(e) {
                let {
                    swiper: t,
                    extendParams: i,
                    emit: a,
                    once: n
                } = e;

                function r() {
                    if (t.params.cssMode) return;
                    const e = t.getTranslate();
                    t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                        currentPos: t.rtl ? t.translate : -t.translate
                    })
                }

                function l() {
                    if (t.params.cssMode) return;
                    const {
                        touchEventsData: e,
                        touches: i
                    } = t;
                    0 === e.velocities.length && e.velocities.push({
                        position: i[t.isHorizontal() ? "startX" : "startY"],
                        time: e.touchStartTime
                    }), e.velocities.push({
                        position: i[t.isHorizontal() ? "currentX" : "currentY"],
                        time: (0, s.d)()
                    })
                }

                function o(e) {
                    let {
                        currentPos: i
                    } = e;
                    if (t.params.cssMode) return;
                    const {
                        params: r,
                        wrapperEl: l,
                        rtlTranslate: o,
                        snapGrid: d,
                        touchEventsData: c
                    } = t, p = (0, s.d)(), u = p - c.touchStartTime;
                    if (i < -t.minTranslate()) t.slideTo(t.activeIndex);
                    else if (i > -t.maxTranslate()) t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1);
                    else {
                        if (r.freeMode.momentum) {
                            if (c.velocities.length > 1) {
                                const e = c.velocities.pop(),
                                    i = c.velocities.pop(),
                                    a = e.position - i.position,
                                    n = e.time - i.time;
                                t.velocity = a / n, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (n > 150 || (0, s.d)() - e.time > 300) && (t.velocity = 0)
                            } else t.velocity = 0;
                            t.velocity *= r.freeMode.momentumVelocityRatio, c.velocities.length = 0;
                            let e = 1e3 * r.freeMode.momentumRatio;
                            const i = t.velocity * e;
                            let p = t.translate + i;
                            o && (p = -p);
                            let u, f = !1;
                            const v = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                            let m;
                            if (p < t.maxTranslate()) r.freeMode.momentumBounce ? (p + t.maxTranslate() < -v && (p = t.maxTranslate() - v), u = t.maxTranslate(), f = !0, c.allowMomentumBounce = !0) : p = t.maxTranslate(), r.loop && r.centeredSlides && (m = !0);
                            else if (p > t.minTranslate()) r.freeMode.momentumBounce ? (p - t.minTranslate() > v && (p = t.minTranslate() + v), u = t.minTranslate(), f = !0, c.allowMomentumBounce = !0) : p = t.minTranslate(), r.loop && r.centeredSlides && (m = !0);
                            else if (r.freeMode.sticky) {
                                let e;
                                for (let t = 0; t < d.length; t += 1)
                                    if (d[t] > -p) {
                                        e = t;
                                        break
                                    }
                                p = Math.abs(d[e] - p) < Math.abs(d[e - 1] - p) || "next" === t.swipeDirection ? d[e] : d[e - 1], p = -p
                            }
                            if (m && n("transitionEnd", (() => {
                                    t.loopFix()
                                })), 0 !== t.velocity) {
                                if (e = o ? Math.abs((-p - t.translate) / t.velocity) : Math.abs((p - t.translate) / t.velocity), r.freeMode.sticky) {
                                    const i = Math.abs((o ? -p : p) - t.translate),
                                        s = t.slidesSizesGrid[t.activeIndex];
                                    e = i < s ? r.speed : i < 2 * s ? 1.5 * r.speed : 2.5 * r.speed
                                }
                            } else if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode.momentumBounce && f ? (t.updateProgress(u), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating = !0, (0, s.i)(l, (() => {
                                t && !t.destroyed && c.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout((() => {
                                    t.setTranslate(u), (0, s.i)(l, (() => {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))
                                }), 0))
                            }))) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(p), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, (0, s.i)(l, (() => {
                                t && !t.destroyed && t.transitionEnd()
                            })))) : t.updateProgress(p), t.updateActiveIndex(), t.updateSlidesClasses()
                        } else {
                            if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode && a("_freeModeNoMomentumRelease")
                        }(!r.freeMode.momentum || u >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                    }
                }
                i({
                    freeMode: {
                        enabled: !1,
                        momentum: !0,
                        momentumRatio: 1,
                        momentumBounce: !0,
                        momentumBounceRatio: 1,
                        momentumVelocityRatio: 1,
                        sticky: !1,
                        minimumVelocity: .02
                    }
                }), Object.assign(t, {
                    freeMode: {
                        onTouchStart: r,
                        onTouchMove: l,
                        onTouchEnd: o
                    }
                })
            }
        },
        524914: (e, t, i) => {
            i(113433), i(107185)
        },
        428538: (e, t, i) => {
            i(113433)
        },
        715560: (e, t, i) => {
            i.d(t, {
                Rv: () => a.Z,
                tl: () => s.Z
            });
            i(934257), i(965647), i(108104), i(432562);
            var s = i(641853),
                a = (i(975278), i(939278), i(288498), i(235824), i(822126), i(428538), i(524914), i(613758), i(546765), i(492844));
            i(21395), i(130820), i(515646), i(266160), i(435485), i(380557)
        },
        965647: (e, t, i) => {
            i(113433), i(107185)
        },
        108104: (e, t, i) => {
            i(113433), i(107185)
        },
        432562: (e, t, i) => {
            i(577701)
        },
        641853: (e, t, i) => {
            i.d(t, {
                Z: () => r
            });
            var s = i(557869),
                a = i(577701),
                n = i(107185);

            function r(e) {
                let {
                    swiper: t,
                    extendParams: i,
                    on: r,
                    emit: l
                } = e;
                const o = "swiper-pagination";
                let d;
                i({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: `${o}-bullet`,
                        bulletActiveClass: `${o}-bullet-active`,
                        modifierClass: `${o}-`,
                        currentClass: `${o}-current`,
                        totalClass: `${o}-total`,
                        hiddenClass: `${o}-hidden`,
                        progressbarFillClass: `${o}-progressbar-fill`,
                        progressbarOppositeClass: `${o}-progressbar-opposite`,
                        clickableClass: `${o}-clickable`,
                        lockClass: `${o}-lock`,
                        horizontalClass: `${o}-horizontal`,
                        verticalClass: `${o}-vertical`,
                        paginationDisabledClass: `${o}-disabled`
                    }
                }), t.pagination = {
                    el: null,
                    bullets: []
                };
                let c = 0;
                const p = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));

                function u() {
                    return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
                }

                function f(e, i) {
                    const {
                        bulletActiveClass: s
                    } = t.params.pagination;
                    e && (e = e[("prev" === i ? "previous" : "next") + "ElementSibling"], e && (e.classList.add(`${s}-${i}`), e = e[("prev" === i ? "previous" : "next") + "ElementSibling"], e && e.classList.add(`${s}-${i}-${i}`)))
                }

                function v(e) {
                    const i = e.target.closest((0, s.c)(t.params.pagination.bulletClass));
                    if (!i) return;
                    e.preventDefault();
                    const a = (0, n.g)(i) * t.params.slidesPerGroup;
                    if (t.params.loop) {
                        if (t.realIndex === a) return;
                        const e = t.realIndex,
                            i = t.getSlideIndexByData(a),
                            s = t.getSlideIndexByData(t.realIndex);
                        if (i > t.slides.length - t.loopedSlides) {
                            const a = t.activeIndex;
                            t.loopFix({
                                direction: i > s ? "next" : "prev",
                                activeSlideIndex: i,
                                slideTo: !1
                            });
                            const n = t.activeIndex;
                            a === n && t.slideToLoop(e, 0, !1, !0)
                        }
                        t.slideToLoop(a)
                    } else t.slideTo(a)
                }

                function m() {
                    const e = t.rtl,
                        i = t.params.pagination;
                    if (u()) return;
                    let a, r, o = t.pagination.el;
                    o = p(o);
                    const v = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        m = t.params.loop ? Math.ceil(v / t.params.slidesPerGroup) : t.snapGrid.length;
                    if (t.params.loop ? (r = t.previousRealIndex || 0, a = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : "undefined" !== typeof t.snapIndex ? (a = t.snapIndex, r = t.previousSnapIndex) : (r = t.previousIndex || 0, a = t.activeIndex || 0), "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                        const s = t.pagination.bullets;
                        let l, p, u;
                        if (i.dynamicBullets && (d = (0, n.f)(s[0], t.isHorizontal() ? "width" : "height", !0), o.forEach((e => {
                                e.style[t.isHorizontal() ? "width" : "height"] = d * (i.dynamicMainBullets + 4) + "px"
                            })), i.dynamicMainBullets > 1 && void 0 !== r && (c += a - (r || 0), c > i.dynamicMainBullets - 1 ? c = i.dynamicMainBullets - 1 : c < 0 && (c = 0)), l = Math.max(a - c, 0), p = l + (Math.min(s.length, i.dynamicMainBullets) - 1), u = (p + l) / 2), s.forEach((e => {
                                const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${i.bulletActiveClass}${e}`))].map((e => "string" === typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                                e.classList.remove(...t)
                            })), o.length > 1) s.forEach((e => {
                            const s = (0, n.g)(e);
                            s === a ? e.classList.add(...i.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), i.dynamicBullets && (s >= l && s <= p && e.classList.add(...`${i.bulletActiveClass}-main`.split(" ")), s === l && f(e, "prev"), s === p && f(e, "next"))
                        }));
                        else {
                            const e = s[a];
                            if (e && e.classList.add(...i.bulletActiveClass.split(" ")), t.isElement && s.forEach(((e, t) => {
                                    e.setAttribute("part", t === a ? "bullet-active" : "bullet")
                                })), i.dynamicBullets) {
                                const e = s[l],
                                    t = s[p];
                                for (let a = l; a <= p; a += 1) s[a] && s[a].classList.add(...`${i.bulletActiveClass}-main`.split(" "));
                                f(e, "prev"), f(t, "next")
                            }
                        }
                        if (i.dynamicBullets) {
                            const a = Math.min(s.length, i.dynamicMainBullets + 4),
                                n = (d * a - d) / 2 - u * d,
                                r = e ? "right" : "left";
                            s.forEach((e => {
                                e.style[t.isHorizontal() ? r : "top"] = `${n}px`
                            }))
                        }
                    }
                    o.forEach(((e, n) => {
                        if ("fraction" === i.type && (e.querySelectorAll((0, s.c)(i.currentClass)).forEach((e => {
                                e.textContent = i.formatFractionCurrent(a + 1)
                            })), e.querySelectorAll((0, s.c)(i.totalClass)).forEach((e => {
                                e.textContent = i.formatFractionTotal(m)
                            }))), "progressbar" === i.type) {
                            let n;
                            n = i.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                            const r = (a + 1) / m;
                            let l = 1,
                                o = 1;
                            "horizontal" === n ? l = r : o = r, e.querySelectorAll((0, s.c)(i.progressbarFillClass)).forEach((e => {
                                e.style.transform = `translate3d(0,0,0) scaleX(${l}) scaleY(${o})`, e.style.transitionDuration = `${t.params.speed}ms`
                            }))
                        }
                        "custom" === i.type && i.renderCustom ? (e.innerHTML = i.renderCustom(t, a + 1, m), 0 === n && l("paginationRender", e)) : (0 === n && l("paginationRender", e), l("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](i.lockClass)
                    }))
                }

                function h() {
                    const e = t.params.pagination;
                    if (u()) return;
                    const i = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length;
                    let a = t.pagination.el;
                    a = p(a);
                    let n = "";
                    if ("bullets" === e.type) {
                        let s = t.params.loop ? Math.ceil(i / t.params.slidesPerGroup) : t.snapGrid.length;
                        t.params.freeMode && t.params.freeMode.enabled && s > i && (s = i);
                        for (let i = 0; i < s; i += 1) e.renderBullet ? n += e.renderBullet.call(t, i, e.bulletClass) : n += `<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
                    }
                    "fraction" === e.type && (n = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (n = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], a.forEach((i => {
                        "custom" !== e.type && (i.innerHTML = n || ""), "bullets" === e.type && t.pagination.bullets.push(...i.querySelectorAll((0, s.c)(e.bulletClass)))
                    })), "custom" !== e.type && l("paginationRender", a[0])
                }

                function g() {
                    t.params.pagination = (0, a.c)(t, t.originalParams.pagination, t.params.pagination, {
                        el: "swiper-pagination"
                    });
                    const e = t.params.pagination;
                    if (!e.el) return;
                    let i;
                    "string" === typeof e.el && t.isElement && (i = t.el.querySelector(e.el)), i || "string" !== typeof e.el || (i = [...document.querySelectorAll(e.el)]), i || (i = e.el), i && 0 !== i.length && (t.params.uniqueNavElements && "string" === typeof e.el && Array.isArray(i) && i.length > 1 && (i = [...t.el.querySelectorAll(e.el)], i.length > 1 && (i = i.filter((e => (0, n.a)(e, ".swiper")[0] === t.el))[0])), Array.isArray(i) && 1 === i.length && (i = i[0]), Object.assign(t.pagination, {
                        el: i
                    }), i = p(i), i.forEach((i => {
                        "bullets" === e.type && e.clickable && i.classList.add(...(e.clickableClass || "").split(" ")), i.classList.add(e.modifierClass + e.type), i.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (i.classList.add(`${e.modifierClass}${e.type}-dynamic`), c = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && i.classList.add(e.progressbarOppositeClass), e.clickable && i.addEventListener("click", v), t.enabled || i.classList.add(e.lockClass)
                    })))
                }

                function y() {
                    const e = t.params.pagination;
                    if (u()) return;
                    let i = t.pagination.el;
                    i && (i = p(i), i.forEach((i => {
                        i.classList.remove(e.hiddenClass), i.classList.remove(e.modifierClass + e.type), i.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (i.classList.remove(...(e.clickableClass || "").split(" ")), i.removeEventListener("click", v))
                    }))), t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))))
                }
                r("changeDirection", (() => {
                    if (!t.pagination || !t.pagination.el) return;
                    const e = t.params.pagination;
                    let {
                        el: i
                    } = t.pagination;
                    i = p(i), i.forEach((i => {
                        i.classList.remove(e.horizontalClass, e.verticalClass), i.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
                    }))
                })), r("init", (() => {
                    !1 === t.params.pagination.enabled ? w() : (g(), h(), m())
                })), r("activeIndexChange", (() => {
                    "undefined" === typeof t.snapIndex && m()
                })), r("snapIndexChange", (() => {
                    m()
                })), r("snapGridLengthChange", (() => {
                    h(), m()
                })), r("destroy", (() => {
                    y()
                })), r("enable disable", (() => {
                    let {
                        el: e
                    } = t.pagination;
                    e && (e = p(e), e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))))
                })), r("lock unlock", (() => {
                    m()
                })), r("click", ((e, i) => {
                    const s = i.target,
                        a = p(t.pagination.el);
                    if (t.params.pagination.el && t.params.pagination.hideOnClick && a && a.length > 0 && !s.classList.contains(t.params.pagination.bulletClass)) {
                        if (t.navigation && (t.navigation.nextEl && s === t.navigation.nextEl || t.navigation.prevEl && s === t.navigation.prevEl)) return;
                        const e = a[0].classList.contains(t.params.pagination.hiddenClass);
                        l(!0 === e ? "paginationShow" : "paginationHide"), a.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)))
                    }
                }));
                const b = () => {
                        t.el.classList.remove(t.params.pagination.paginationDisabledClass);
                        let {
                            el: e
                        } = t.pagination;
                        e && (e = p(e), e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))), g(), h(), m()
                    },
                    w = () => {
                        t.el.classList.add(t.params.pagination.paginationDisabledClass);
                        let {
                            el: e
                        } = t.pagination;
                        e && (e = p(e), e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))), y()
                    };
                Object.assign(t.pagination, {
                    enable: b,
                    disable: w,
                    render: h,
                    update: m,
                    init: g,
                    destroy: y
                })
            }
        },
        939278: (e, t, i) => {
            i(107185)
        },
        975278: (e, t, i) => {
            i(113433), i(107185), i(577701)
        },
        546765: (e, t, i) => {
            i(113433), i(107185)
        },
        934257: (e, t, i) => {
            i(113433), i(107185)
        },
        288498: (e, t, i) => {
            i(113433), i(107185)
        },
        557869: (e, t, i) => {
            function s(e) {
                return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
            }
            i.d(t, {
                c: () => s
            })
        },
        577701: (e, t, i) => {
            i.d(t, {
                c: () => a
            });
            var s = i(107185);

            function a(e, t, i, a) {
                return e.params.createElements && Object.keys(a).forEach((n => {
                    if (!i[n] && !0 === i.auto) {
                        let r = (0, s.e)(e.el, `.${a[n]}`)[0];
                        r || (r = (0, s.c)("div", a[n]), r.className = a[n], e.el.append(r)), i[n] = r, t[n] = r
                    }
                })), i
            }
        },
        239277: (e, t, i) => {
            i(107185)
        },
        682503: (e, t, i) => {
            i(107185)
        },
        979181: (e, t, i) => {
            i(107185)
        },
        113433: (e, t, i) => {
            function s(e) {
                return null !== e && "object" === typeof e && "constructor" in e && e.constructor === Object
            }

            function a(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((i => {
                    "undefined" === typeof e[i] ? e[i] = t[i] : s(t[i]) && s(e[i]) && Object.keys(t[i]).length > 0 && a(e[i], t[i])
                }))
            }
            i.d(t, {
                a: () => o,
                g: () => r
            });
            const n = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector() {
                    return null
                },
                querySelectorAll() {
                    return []
                },
                getElementById() {
                    return null
                },
                createEvent() {
                    return {
                        initEvent() {}
                    }
                },
                createElement() {
                    return {
                        children: [],
                        childNodes: [],
                        style: {},
                        setAttribute() {},
                        getElementsByTagName() {
                            return []
                        }
                    }
                },
                createElementNS() {
                    return {}
                },
                importNode() {
                    return null
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function r() {
                const e = "undefined" !== typeof document ? document : {};
                return a(e, n), e
            }
            const l = {
                document: n,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle() {
                    return {
                        getPropertyValue() {
                            return ""
                        }
                    }
                },
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia() {
                    return {}
                },
                requestAnimationFrame(e) {
                    return "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0)
                },
                cancelAnimationFrame(e) {
                    "undefined" !== typeof setTimeout && clearTimeout(e)
                }
            };

            function o() {
                const e = "undefined" !== typeof window ? window : {};
                return a(e, l), e
            }
        },
        996236: (e, t, i) => {
            i.d(t, {
                S: () => ze,
                d: () => Pe
            });
            var s = i(113433),
                a = i(107185);
            let n, r, l;

            function o() {
                const e = (0, s.a)(),
                    t = (0, s.g)();
                return {
                    smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                }
            }

            function d() {
                return n || (n = o()), n
            }

            function c(e) {
                let {
                    userAgent: t
                } = void 0 === e ? {} : e;
                const i = d(),
                    a = (0, s.a)(),
                    n = a.navigator.platform,
                    r = t || a.navigator.userAgent,
                    l = {
                        ios: !1,
                        android: !1
                    },
                    o = a.screen.width,
                    c = a.screen.height,
                    p = r.match(/(Android);?[\s\/]+([\d.]+)?/);
                let u = r.match(/(iPad).*OS\s([\d_]+)/);
                const f = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                    v = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    m = "Win32" === n;
                let h = "MacIntel" === n;
                const g = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
                return !u && h && i.touch && g.indexOf(`${o}x${c}`) >= 0 && (u = r.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), h = !1), p && !m && (l.os = "android", l.android = !0), (u || v || f) && (l.os = "ios", l.ios = !0), l
            }

            function p(e) {
                return void 0 === e && (e = {}), r || (r = c(e)), r
            }

            function u() {
                const e = (0, s.a)();
                let t = !1;

                function i() {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                }
                if (i()) {
                    const i = String(e.navigator.userAgent);
                    if (i.includes("Version/")) {
                        const [e, s] = i.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                        t = e < 16 || 16 === e && s < 2
                    }
                }
                return {
                    isSafari: t || i(),
                    needPerspectiveFix: t,
                    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                }
            }

            function f() {
                return l || (l = u()), l
            }

            function v(e) {
                let {
                    swiper: t,
                    on: i,
                    emit: a
                } = e;
                const n = (0, s.a)();
                let r = null,
                    l = null;
                const o = () => {
                        t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"))
                    },
                    d = () => {
                        t && !t.destroyed && t.initialized && (r = new ResizeObserver((e => {
                            l = n.requestAnimationFrame((() => {
                                const {
                                    width: i,
                                    height: s
                                } = t;
                                let a = i,
                                    n = s;
                                e.forEach((e => {
                                    let {
                                        contentBoxSize: i,
                                        contentRect: s,
                                        target: r
                                    } = e;
                                    r && r !== t.el || (a = s ? s.width : (i[0] || i).inlineSize, n = s ? s.height : (i[0] || i).blockSize)
                                })), a === i && n === s || o()
                            }))
                        })), r.observe(t.el))
                    },
                    c = () => {
                        l && n.cancelAnimationFrame(l), r && r.unobserve && t.el && (r.unobserve(t.el), r = null)
                    },
                    p = () => {
                        t && !t.destroyed && t.initialized && a("orientationchange")
                    };
                i("init", (() => {
                    t.params.resizeObserver && "undefined" !== typeof n.ResizeObserver ? d() : (n.addEventListener("resize", o), n.addEventListener("orientationchange", p))
                })), i("destroy", (() => {
                    c(), n.removeEventListener("resize", o), n.removeEventListener("orientationchange", p)
                }))
            }

            function m(e) {
                let {
                    swiper: t,
                    extendParams: i,
                    on: n,
                    emit: r
                } = e;
                const l = [],
                    o = (0, s.a)(),
                    d = function(e, i) {
                        void 0 === i && (i = {});
                        const s = o.MutationObserver || o.WebkitMutationObserver,
                            a = new s((e => {
                                if (t.__preventObserver__) return;
                                if (1 === e.length) return void r("observerUpdate", e[0]);
                                const i = function() {
                                    r("observerUpdate", e[0])
                                };
                                o.requestAnimationFrame ? o.requestAnimationFrame(i) : o.setTimeout(i, 0)
                            }));
                        a.observe(e, {
                            attributes: "undefined" === typeof i.attributes || i.attributes,
                            childList: "undefined" === typeof i.childList || i.childList,
                            characterData: "undefined" === typeof i.characterData || i.characterData
                        }), l.push(a)
                    },
                    c = () => {
                        if (t.params.observer) {
                            if (t.params.observeParents) {
                                const e = (0, a.a)(t.hostEl);
                                for (let t = 0; t < e.length; t += 1) d(e[t])
                            }
                            d(t.hostEl, {
                                childList: t.params.observeSlideChildren
                            }), d(t.wrapperEl, {
                                attributes: !1
                            })
                        }
                    },
                    p = () => {
                        l.forEach((e => {
                            e.disconnect()
                        })), l.splice(0, l.length)
                    };
                i({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), n("init", c), n("destroy", p)
            }
            var h = {
                on(e, t, i) {
                    const s = this;
                    if (!s.eventsListeners || s.destroyed) return s;
                    if ("function" !== typeof t) return s;
                    const a = i ? "unshift" : "push";
                    return e.split(" ").forEach((e => {
                        s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t)
                    })), s
                },
                once(e, t, i) {
                    const s = this;
                    if (!s.eventsListeners || s.destroyed) return s;
                    if ("function" !== typeof t) return s;

                    function a() {
                        s.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
                        for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                        t.apply(s, n)
                    }
                    return a.__emitterProxy = t, s.on(e, a, i)
                },
                onAny(e, t) {
                    const i = this;
                    if (!i.eventsListeners || i.destroyed) return i;
                    if ("function" !== typeof e) return i;
                    const s = t ? "unshift" : "push";
                    return i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i
                },
                offAny(e) {
                    const t = this;
                    if (!t.eventsListeners || t.destroyed) return t;
                    if (!t.eventsAnyListeners) return t;
                    const i = t.eventsAnyListeners.indexOf(e);
                    return i >= 0 && t.eventsAnyListeners.splice(i, 1), t
                },
                off(e, t) {
                    const i = this;
                    return !i.eventsListeners || i.destroyed ? i : i.eventsListeners ? (e.split(" ").forEach((e => {
                        "undefined" === typeof t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach(((s, a) => {
                            (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(a, 1)
                        }))
                    })), i) : i
                },
                emit() {
                    const e = this;
                    if (!e.eventsListeners || e.destroyed) return e;
                    if (!e.eventsListeners) return e;
                    let t, i, s;
                    for (var a = arguments.length, n = new Array(a), r = 0; r < a; r++) n[r] = arguments[r];
                    "string" === typeof n[0] || Array.isArray(n[0]) ? (t = n[0], i = n.slice(1, n.length), s = e) : (t = n[0].events, i = n[0].data, s = n[0].context || e), i.unshift(s);
                    const l = Array.isArray(t) ? t : t.split(" ");
                    return l.forEach((t => {
                        e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                            e.apply(s, [t, ...i])
                        })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                            e.apply(s, i)
                        }))
                    })), e
                }
            };

            function g() {
                const e = this;
                let t, i;
                const s = e.el;
                t = "undefined" !== typeof e.params.width && null !== e.params.width ? e.params.width : s.clientWidth, i = "undefined" !== typeof e.params.height && null !== e.params.height ? e.params.height : s.clientHeight, 0 === t && e.isHorizontal() || 0 === i && e.isVertical() || (t = t - parseInt((0, a.l)(s, "padding-left") || 0, 10) - parseInt((0, a.l)(s, "padding-right") || 0, 10), i = i - parseInt((0, a.l)(s, "padding-top") || 0, 10) - parseInt((0, a.l)(s, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(i) && (i = 0), Object.assign(e, {
                    width: t,
                    height: i,
                    size: e.isHorizontal() ? t : i
                }))
            }

            function y() {
                const e = this;

                function t(t) {
                    return e.isHorizontal() ? t : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    }[t]
                }

                function i(e, i) {
                    return parseFloat(e.getPropertyValue(t(i)) || 0)
                }
                const s = e.params,
                    {
                        wrapperEl: n,
                        slidesEl: r,
                        size: l,
                        rtlTranslate: o,
                        wrongRTL: d
                    } = e,
                    c = e.virtual && s.virtual.enabled,
                    p = c ? e.virtual.slides.length : e.slides.length,
                    u = (0, a.e)(r, `.${e.params.slideClass}, swiper-slide`),
                    f = c ? e.virtual.slides.length : u.length;
                let v = [];
                const m = [],
                    h = [];
                let g = s.slidesOffsetBefore;
                "function" === typeof g && (g = s.slidesOffsetBefore.call(e));
                let y = s.slidesOffsetAfter;
                "function" === typeof y && (y = s.slidesOffsetAfter.call(e));
                const b = e.snapGrid.length,
                    w = e.slidesGrid.length;
                let S = s.spaceBetween,
                    T = -g,
                    x = 0,
                    E = 0;
                if ("undefined" === typeof l) return;
                "string" === typeof S && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * l : "string" === typeof S && (S = parseFloat(S)), e.virtualSize = -S, u.forEach((e => {
                    o ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                })), s.centeredSlides && s.cssMode && ((0, a.s)(n, "--swiper-centered-offset-before", ""), (0, a.s)(n, "--swiper-centered-offset-after", ""));
                const C = s.grid && s.grid.rows > 1 && e.grid;
                let M;
                C && e.grid.initSlides(f);
                const P = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => "undefined" !== typeof s.breakpoints[e].slidesPerView)).length > 0;
                for (let O = 0; O < f; O += 1) {
                    let n;
                    if (M = 0, u[O] && (n = u[O]), C && e.grid.updateSlide(O, n, f, t), !u[O] || "none" !== (0, a.l)(n, "display")) {
                        if ("auto" === s.slidesPerView) {
                            P && (u[O].style[t("width")] = "");
                            const r = getComputedStyle(n),
                                l = n.style.transform,
                                o = n.style.webkitTransform;
                            if (l && (n.style.transform = "none"), o && (n.style.webkitTransform = "none"), s.roundLengths) M = e.isHorizontal() ? (0, a.f)(n, "width", !0) : (0, a.f)(n, "height", !0);
                            else {
                                const e = i(r, "width"),
                                    t = i(r, "padding-left"),
                                    s = i(r, "padding-right"),
                                    a = i(r, "margin-left"),
                                    l = i(r, "margin-right"),
                                    o = r.getPropertyValue("box-sizing");
                                if (o && "border-box" === o) M = e + a + l;
                                else {
                                    const {
                                        clientWidth: i,
                                        offsetWidth: r
                                    } = n;
                                    M = e + t + s + a + l + (r - i)
                                }
                            }
                            l && (n.style.transform = l), o && (n.style.webkitTransform = o), s.roundLengths && (M = Math.floor(M))
                        } else M = (l - (s.slidesPerView - 1) * S) / s.slidesPerView, s.roundLengths && (M = Math.floor(M)), u[O] && (u[O].style[t("width")] = `${M}px`);
                        u[O] && (u[O].swiperSlideSize = M), h.push(M), s.centeredSlides ? (T = T + M / 2 + x / 2 + S, 0 === x && 0 !== O && (T = T - l / 2 - S), 0 === O && (T = T - l / 2 - S), Math.abs(T) < .001 && (T = 0), s.roundLengths && (T = Math.floor(T)), E % s.slidesPerGroup === 0 && v.push(T), m.push(T)) : (s.roundLengths && (T = Math.floor(T)), (E - Math.min(e.params.slidesPerGroupSkip, E)) % e.params.slidesPerGroup === 0 && v.push(T), m.push(T), T = T + M + S), e.virtualSize += M + S, x = M, E += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, l) + y, o && d && ("slide" === s.effect || "coverflow" === s.effect) && (n.style.width = `${e.virtualSize+S}px`), s.setWrapperSize && (n.style[t("width")] = `${e.virtualSize+S}px`), C && e.grid.updateWrapperSize(M, v, t), !s.centeredSlides) {
                    const t = [];
                    for (let i = 0; i < v.length; i += 1) {
                        let a = v[i];
                        s.roundLengths && (a = Math.floor(a)), v[i] <= e.virtualSize - l && t.push(a)
                    }
                    v = t, Math.floor(e.virtualSize - l) - Math.floor(v[v.length - 1]) > 1 && v.push(e.virtualSize - l)
                }
                if (c && s.loop) {
                    const t = h[0] + S;
                    if (s.slidesPerGroup > 1) {
                        const i = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup),
                            a = t * s.slidesPerGroup;
                        for (let e = 0; e < i; e += 1) v.push(v[v.length - 1] + a)
                    }
                    for (let i = 0; i < e.virtual.slidesBefore + e.virtual.slidesAfter; i += 1) 1 === s.slidesPerGroup && v.push(v[v.length - 1] + t), m.push(m[m.length - 1] + t), e.virtualSize += t
                }
                if (0 === v.length && (v = [0]), 0 !== S) {
                    const i = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
                    u.filter(((e, t) => !(s.cssMode && !s.loop) || t !== u.length - 1)).forEach((e => {
                        e.style[i] = `${S}px`
                    }))
                }
                if (s.centeredSlides && s.centeredSlidesBounds) {
                    let e = 0;
                    h.forEach((t => {
                        e += t + (S || 0)
                    })), e -= S;
                    const t = e - l;
                    v = v.map((e => e <= 0 ? -g : e > t ? t + y : e))
                }
                if (s.centerInsufficientSlides) {
                    let e = 0;
                    if (h.forEach((t => {
                            e += t + (S || 0)
                        })), e -= S, e < l) {
                        const t = (l - e) / 2;
                        v.forEach(((e, i) => {
                            v[i] = e - t
                        })), m.forEach(((e, i) => {
                            m[i] = e + t
                        }))
                    }
                }
                if (Object.assign(e, {
                        slides: u,
                        snapGrid: v,
                        slidesGrid: m,
                        slidesSizesGrid: h
                    }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                    (0, a.s)(n, "--swiper-centered-offset-before", -v[0] + "px"), (0, a.s)(n, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
                    const t = -e.snapGrid[0],
                        i = -e.slidesGrid[0];
                    e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + i))
                }
                if (f !== p && e.emit("slidesLengthChange"), v.length !== b && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), m.length !== w && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), !c && !s.cssMode && ("slide" === s.effect || "fade" === s.effect)) {
                    const t = `${s.containerModifierClass}backface-hidden`,
                        i = e.el.classList.contains(t);
                    f <= s.maxBackfaceHiddenSlides ? i || e.el.classList.add(t) : i && e.el.classList.remove(t)
                }
            }

            function b(e) {
                const t = this,
                    i = [],
                    s = t.virtual && t.params.virtual.enabled;
                let a, n = 0;
                "number" === typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                const r = e => s ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                    if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
                        i.push(e)
                    }));
                    else
                        for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
                            const e = t.activeIndex + a;
                            if (e > t.slides.length && !s) break;
                            i.push(r(e))
                        } else i.push(r(t.activeIndex));
                for (a = 0; a < i.length; a += 1)
                    if ("undefined" !== typeof i[a]) {
                        const e = i[a].offsetHeight;
                        n = e > n ? e : n
                    }(n || 0 === n) && (t.wrapperEl.style.height = `${n}px`)
            }

            function w() {
                const e = this,
                    t = e.slides,
                    i = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
                for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = (e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop) - i - e.cssOverflowAdjustment()
            }

            function S(e) {
                void 0 === e && (e = this && this.translate || 0);
                const t = this,
                    i = t.params,
                    {
                        slides: s,
                        rtlTranslate: a,
                        snapGrid: n
                    } = t;
                if (0 === s.length) return;
                "undefined" === typeof s[0].swiperSlideOffset && t.updateSlidesOffset();
                let r = -e;
                a && (r = e), s.forEach((e => {
                    e.classList.remove(i.slideVisibleClass)
                })), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                let l = i.spaceBetween;
                "string" === typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : "string" === typeof l && (l = parseFloat(l));
                for (let o = 0; o < s.length; o += 1) {
                    const e = s[o];
                    let d = e.swiperSlideOffset;
                    i.cssMode && i.centeredSlides && (d -= s[0].swiperSlideOffset);
                    const c = (r + (i.centeredSlides ? t.minTranslate() : 0) - d) / (e.swiperSlideSize + l),
                        p = (r - n[0] + (i.centeredSlides ? t.minTranslate() : 0) - d) / (e.swiperSlideSize + l),
                        u = -(r - d),
                        f = u + t.slidesSizesGrid[o],
                        v = u >= 0 && u < t.size - 1 || f > 1 && f <= t.size || u <= 0 && f >= t.size;
                    v && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(o), s[o].classList.add(i.slideVisibleClass)), e.progress = a ? -c : c, e.originalProgress = a ? -p : p
                }
            }

            function T(e) {
                const t = this;
                if ("undefined" === typeof e) {
                    const i = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * i || 0
                }
                const i = t.params,
                    s = t.maxTranslate() - t.minTranslate();
                let {
                    progress: a,
                    isBeginning: n,
                    isEnd: r,
                    progressLoop: l
                } = t;
                const o = n,
                    d = r;
                if (0 === s) a = 0, n = !0, r = !0;
                else {
                    a = (e - t.minTranslate()) / s;
                    const i = Math.abs(e - t.minTranslate()) < 1,
                        l = Math.abs(e - t.maxTranslate()) < 1;
                    n = i || a <= 0, r = l || a >= 1, i && (a = 0), l && (a = 1)
                }
                if (i.loop) {
                    const i = t.getSlideIndexByData(0),
                        s = t.getSlideIndexByData(t.slides.length - 1),
                        a = t.slidesGrid[i],
                        n = t.slidesGrid[s],
                        r = t.slidesGrid[t.slidesGrid.length - 1],
                        o = Math.abs(e);
                    l = o >= a ? (o - a) / r : (o + r - n) / r, l > 1 && (l -= 1)
                }
                Object.assign(t, {
                    progress: a,
                    progressLoop: l,
                    isBeginning: n,
                    isEnd: r
                }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), n && !o && t.emit("reachBeginning toEdge"), r && !d && t.emit("reachEnd toEdge"), (o && !n || d && !r) && t.emit("fromEdge"), t.emit("progress", a)
            }

            function x() {
                const e = this,
                    {
                        slides: t,
                        params: i,
                        slidesEl: s,
                        activeIndex: n
                    } = e,
                    r = e.virtual && i.virtual.enabled,
                    l = e => (0, a.e)(s, `.${i.slideClass}${e}, swiper-slide${e}`)[0];
                let o;
                if (t.forEach((e => {
                        e.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass)
                    })), r)
                    if (i.loop) {
                        let t = n - e.virtual.slidesBefore;
                        t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), o = l(`[data-swiper-slide-index="${t}"]`)
                    } else o = l(`[data-swiper-slide-index="${n}"]`);
                else o = t[n];
                if (o) {
                    o.classList.add(i.slideActiveClass);
                    let e = (0, a.m)(o, `.${i.slideClass}, swiper-slide`)[0];
                    i.loop && !e && (e = t[0]), e && e.classList.add(i.slideNextClass);
                    let s = (0, a.o)(o, `.${i.slideClass}, swiper-slide`)[0];
                    i.loop && 0 === !s && (s = t[t.length - 1]), s && s.classList.add(i.slidePrevClass)
                }
                e.emitSlidesClasses()
            }
            const E = (e, t) => {
                    if (!e || e.destroyed || !e.params) return;
                    const i = () => e.isElement ? "swiper-slide" : `.${e.params.slideClass}`,
                        s = t.closest(i());
                    if (s) {
                        let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
                        !t && e.isElement && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)), t && t.remove()
                    }
                },
                C = (e, t) => {
                    if (!e.slides[t]) return;
                    const i = e.slides[t].querySelector('[loading="lazy"]');
                    i && i.removeAttribute("loading")
                },
                M = e => {
                    if (!e || e.destroyed || !e.params) return;
                    let t = e.params.lazyPreloadPrevNext;
                    const i = e.slides.length;
                    if (!i || !t || t < 0) return;
                    t = Math.min(t, i);
                    const s = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                        a = e.activeIndex;
                    if (e.params.grid && e.params.grid.rows > 1) {
                        const i = a,
                            n = [i - t];
                        return n.push(...Array.from({
                            length: t
                        }).map(((e, t) => i + s + t))), void e.slides.forEach(((t, i) => {
                            n.includes(t.column) && C(e, i)
                        }))
                    }
                    const n = a + s - 1;
                    if (e.params.rewind || e.params.loop)
                        for (let r = a - t; r <= n + t; r += 1) {
                            const t = (r % i + i) % i;
                            (t < a || t > n) && C(e, t)
                        } else
                            for (let r = Math.max(a - t, 0); r <= Math.min(n + t, i - 1); r += 1) r !== a && (r > n || r < a) && C(e, r)
                };

            function P(e) {
                const {
                    slidesGrid: t,
                    params: i
                } = e, s = e.rtlTranslate ? e.translate : -e.translate;
                let a;
                for (let n = 0; n < t.length; n += 1) "undefined" !== typeof t[n + 1] ? s >= t[n] && s < t[n + 1] - (t[n + 1] - t[n]) / 2 ? a = n : s >= t[n] && s < t[n + 1] && (a = n + 1) : s >= t[n] && (a = n);
                return i.normalizeSlideIndex && (a < 0 || "undefined" === typeof a) && (a = 0), a
            }

            function O(e) {
                const t = this,
                    i = t.rtlTranslate ? t.translate : -t.translate,
                    {
                        snapGrid: s,
                        params: a,
                        activeIndex: n,
                        realIndex: r,
                        snapIndex: l
                    } = t;
                let o, d = e;
                const c = e => {
                    let i = e - t.virtual.slidesBefore;
                    return i < 0 && (i = t.virtual.slides.length + i), i >= t.virtual.slides.length && (i -= t.virtual.slides.length), i
                };
                if ("undefined" === typeof d && (d = P(t)), s.indexOf(i) >= 0) o = s.indexOf(i);
                else {
                    const e = Math.min(a.slidesPerGroupSkip, d);
                    o = e + Math.floor((d - e) / a.slidesPerGroup)
                }
                if (o >= s.length && (o = s.length - 1), d === n) return o !== l && (t.snapIndex = o, t.emit("snapIndexChange")), void(t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = c(d)));
                let p;
                p = t.virtual && a.virtual.enabled && a.loop ? c(d) : t.slides[d] ? parseInt(t.slides[d].getAttribute("data-swiper-slide-index") || d, 10) : d, Object.assign(t, {
                    previousSnapIndex: l,
                    snapIndex: o,
                    previousRealIndex: r,
                    realIndex: p,
                    previousIndex: n,
                    activeIndex: d
                }), t.initialized && M(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), r !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
            }

            function k(e) {
                const t = this,
                    i = t.params,
                    s = e.closest(`.${i.slideClass}, swiper-slide`);
                let a, n = !1;
                if (s)
                    for (let r = 0; r < t.slides.length; r += 1)
                        if (t.slides[r] === s) {
                            n = !0, a = r;
                            break
                        }
                if (!s || !n) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                t.clickedSlide = s, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(s.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = a, i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
            }
            var L = {
                updateSize: g,
                updateSlides: y,
                updateAutoHeight: b,
                updateSlidesOffset: w,
                updateSlidesProgress: S,
                updateProgress: T,
                updateSlidesClasses: x,
                updateActiveIndex: O,
                updateClickedSlide: k
            };

            function z(e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                const t = this,
                    {
                        params: i,
                        rtlTranslate: s,
                        translate: n,
                        wrapperEl: r
                    } = t;
                if (i.virtualTranslate) return s ? -n : n;
                if (i.cssMode) return n;
                let l = (0, a.h)(r, e);
                return l += t.cssOverflowAdjustment(), s && (l = -l), l || 0
            }

            function I(e, t) {
                const i = this,
                    {
                        rtlTranslate: s,
                        params: a,
                        wrapperEl: n,
                        progress: r
                    } = i;
                let l = 0,
                    o = 0;
                const d = 0;
                let c;
                i.isHorizontal() ? l = s ? -e : e : o = e, a.roundLengths && (l = Math.floor(l), o = Math.floor(o)), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? l : o, a.cssMode ? n[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -l : -o : a.virtualTranslate || (i.isHorizontal() ? l -= i.cssOverflowAdjustment() : o -= i.cssOverflowAdjustment(), n.style.transform = `translate3d(${l}px, ${o}px, ${d}px)`);
                const p = i.maxTranslate() - i.minTranslate();
                c = 0 === p ? 0 : (e - i.minTranslate()) / p, c !== r && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
            }

            function B() {
                return -this.snapGrid[0]
            }

            function _() {
                return -this.snapGrid[this.snapGrid.length - 1]
            }

            function A(e, t, i, s, n) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
                const r = this,
                    {
                        params: l,
                        wrapperEl: o
                    } = r;
                if (r.animating && l.preventInteractionOnTransition) return !1;
                const d = r.minTranslate(),
                    c = r.maxTranslate();
                let p;
                if (p = s && e > d ? d : s && e < c ? c : e, r.updateProgress(p), l.cssMode) {
                    const e = r.isHorizontal();
                    if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -p;
                    else {
                        if (!r.support.smoothScroll) return (0, a.p)({
                            swiper: r,
                            targetPosition: -p,
                            side: e ? "left" : "top"
                        }), !0;
                        o.scrollTo({
                            [e ? "left" : "top"]: -p,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return 0 === t ? (r.setTransition(0), r.setTranslate(p), i && (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(p), i && (r.emit("beforeTransitionStart", t, n), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                    r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, i && r.emit("transitionEnd"))
                }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0
            }
            var G = {
                getTranslate: z,
                setTranslate: I,
                minTranslate: B,
                maxTranslate: _,
                translateTo: A
            };

            function N(e, t) {
                const i = this;
                i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${e}ms`, i.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), i.emit("setTransition", e, t)
            }

            function D(e) {
                let {
                    swiper: t,
                    runCallbacks: i,
                    direction: s,
                    step: a
                } = e;
                const {
                    activeIndex: n,
                    previousIndex: r
                } = t;
                let l = s;
                if (l || (l = n > r ? "next" : n < r ? "prev" : "reset"), t.emit(`transition${a}`), i && n !== r) {
                    if ("reset" === l) return void t.emit(`slideResetTransition${a}`);
                    t.emit(`slideChangeTransition${a}`), "next" === l ? t.emit(`slideNextTransition${a}`) : t.emit(`slidePrevTransition${a}`)
                }
            }

            function $(e, t) {
                void 0 === e && (e = !0);
                const i = this,
                    {
                        params: s
                    } = i;
                s.cssMode || (s.autoHeight && i.updateAutoHeight(), D({
                    swiper: i,
                    runCallbacks: e,
                    direction: t,
                    step: "Start"
                }))
            }

            function j(e, t) {
                void 0 === e && (e = !0);
                const i = this,
                    {
                        params: s
                    } = i;
                i.animating = !1, s.cssMode || (i.setTransition(0), D({
                    swiper: i,
                    runCallbacks: e,
                    direction: t,
                    step: "End"
                }))
            }
            var H = {
                setTransition: N,
                transitionStart: $,
                transitionEnd: j
            };

            function F(e, t, i, s, n) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "string" === typeof e && (e = parseInt(e, 10));
                const r = this;
                let l = e;
                l < 0 && (l = 0);
                const {
                    params: o,
                    snapGrid: d,
                    slidesGrid: c,
                    previousIndex: p,
                    activeIndex: u,
                    rtlTranslate: f,
                    wrapperEl: v,
                    enabled: m
                } = r;
                if (r.animating && o.preventInteractionOnTransition || !m && !s && !n) return !1;
                const h = Math.min(r.params.slidesPerGroupSkip, l);
                let g = h + Math.floor((l - h) / r.params.slidesPerGroup);
                g >= d.length && (g = d.length - 1);
                const y = -d[g];
                if (o.normalizeSlideIndex)
                    for (let a = 0; a < c.length; a += 1) {
                        const e = -Math.floor(100 * y),
                            t = Math.floor(100 * c[a]),
                            i = Math.floor(100 * c[a + 1]);
                        "undefined" !== typeof c[a + 1] ? e >= t && e < i - (i - t) / 2 ? l = a : e >= t && e < i && (l = a + 1) : e >= t && (l = a)
                    }
                if (r.initialized && l !== u) {
                    if (!r.allowSlideNext && (f ? y > r.translate && y > r.minTranslate() : y < r.translate && y < r.minTranslate())) return !1;
                    if (!r.allowSlidePrev && y > r.translate && y > r.maxTranslate() && (u || 0) !== l) return !1
                }
                let b;
                if (l !== (p || 0) && i && r.emit("beforeSlideChangeStart"), r.updateProgress(y), b = l > u ? "next" : l < u ? "prev" : "reset", f && -y === r.translate || !f && y === r.translate) return r.updateActiveIndex(l), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(y), "reset" !== b && (r.transitionStart(i, b), r.transitionEnd(i, b)), !1;
                if (o.cssMode) {
                    const e = r.isHorizontal(),
                        i = f ? y : -y;
                    if (0 === t) {
                        const t = r.virtual && r.params.virtual.enabled;
                        t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                            v[e ? "scrollLeft" : "scrollTop"] = i
                        }))) : v[e ? "scrollLeft" : "scrollTop"] = i, t && requestAnimationFrame((() => {
                            r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1
                        }))
                    } else {
                        if (!r.support.smoothScroll) return (0, a.p)({
                            swiper: r,
                            targetPosition: i,
                            side: e ? "left" : "top"
                        }), !0;
                        v.scrollTo({
                            [e ? "left" : "top"]: i,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return r.setTransition(t), r.setTranslate(y), r.updateActiveIndex(l), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, b), 0 === t ? r.transitionEnd(i, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                    r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, b))
                }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0
            }

            function V(e, t, i, s) {
                if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "string" === typeof e) {
                    const t = parseInt(e, 10);
                    e = t
                }
                const a = this;
                let n = e;
                return a.params.loop && (a.virtual && a.params.virtual.enabled ? n += a.virtual.slidesBefore : n = a.getSlideIndexByData(n)), a.slideTo(n, t, i, s)
            }

            function R(e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                const s = this,
                    {
                        enabled: a,
                        params: n,
                        animating: r
                    } = s;
                if (!a) return s;
                let l = n.slidesPerGroup;
                "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                const o = s.activeIndex < n.slidesPerGroupSkip ? 1 : l,
                    d = s.virtual && n.virtual.enabled;
                if (n.loop) {
                    if (r && !d && n.loopPreventsSliding) return !1;
                    s.loopFix({
                        direction: "next"
                    }), s._clientLeft = s.wrapperEl.clientLeft
                }
                return n.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + o, e, t, i)
            }

            function q(e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                const s = this,
                    {
                        params: a,
                        snapGrid: n,
                        slidesGrid: r,
                        rtlTranslate: l,
                        enabled: o,
                        animating: d
                    } = s;
                if (!o) return s;
                const c = s.virtual && a.virtual.enabled;
                if (a.loop) {
                    if (d && !c && a.loopPreventsSliding) return !1;
                    s.loopFix({
                        direction: "prev"
                    }), s._clientLeft = s.wrapperEl.clientLeft
                }
                const p = l ? s.translate : -s.translate;

                function u(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                const f = u(p),
                    v = n.map((e => u(e)));
                let m = n[v.indexOf(f) - 1];
                if ("undefined" === typeof m && a.cssMode) {
                    let e;
                    n.forEach(((t, i) => {
                        f >= t && (e = i)
                    })), "undefined" !== typeof e && (m = n[e > 0 ? e - 1 : e])
                }
                let h = 0;
                if ("undefined" !== typeof m && (h = r.indexOf(m), h < 0 && (h = s.activeIndex - 1), "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (h = h - s.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0))), a.rewind && s.isBeginning) {
                    const a = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                    return s.slideTo(a, e, t, i)
                }
                return s.slideTo(h, e, t, i)
            }

            function W(e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                const s = this;
                return s.slideTo(s.activeIndex, e, t, i)
            }

            function Y(e, t, i, s) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
                const a = this;
                let n = a.activeIndex;
                const r = Math.min(a.params.slidesPerGroupSkip, n),
                    l = r + Math.floor((n - r) / a.params.slidesPerGroup),
                    o = a.rtlTranslate ? a.translate : -a.translate;
                if (o >= a.snapGrid[l]) {
                    const e = a.snapGrid[l],
                        t = a.snapGrid[l + 1];
                    o - e > (t - e) * s && (n += a.params.slidesPerGroup)
                } else {
                    const e = a.snapGrid[l - 1],
                        t = a.snapGrid[l];
                    o - e <= (t - e) * s && (n -= a.params.slidesPerGroup)
                }
                return n = Math.max(n, 0), n = Math.min(n, a.slidesGrid.length - 1), a.slideTo(n, e, t, i)
            }

            function X() {
                const e = this,
                    {
                        params: t,
                        slidesEl: i
                    } = e,
                    s = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let n, r = e.clickedIndex;
                const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
                if (t.loop) {
                    if (e.animating) return;
                    n = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - s / 2 || r > e.slides.length - e.loopedSlides + s / 2 ? (e.loopFix(), r = e.getSlideIndex((0, a.e)(i, `${l}[data-swiper-slide-index="${n}"]`)[0]), (0, a.n)((() => {
                        e.slideTo(r)
                    }))) : e.slideTo(r) : r > e.slides.length - s ? (e.loopFix(), r = e.getSlideIndex((0, a.e)(i, `${l}[data-swiper-slide-index="${n}"]`)[0]), (0, a.n)((() => {
                        e.slideTo(r)
                    }))) : e.slideTo(r)
                } else e.slideTo(r)
            }
            var U = {
                slideTo: F,
                slideToLoop: V,
                slideNext: R,
                slidePrev: q,
                slideReset: W,
                slideToClosest: Y,
                slideToClickedSlide: X
            };

            function J(e) {
                const t = this,
                    {
                        params: i,
                        slidesEl: s
                    } = t;
                if (!i.loop || t.virtual && t.params.virtual.enabled) return;
                const n = (0, a.e)(s, `.${i.slideClass}, swiper-slide`);
                n.forEach(((e, t) => {
                    e.setAttribute("data-swiper-slide-index", t)
                })), t.loopFix({
                    slideRealIndex: e,
                    direction: i.centeredSlides ? void 0 : "next"
                })
            }

            function K(e) {
                let {
                    slideRealIndex: t,
                    slideTo: i = !0,
                    direction: s,
                    setTranslate: a,
                    activeSlideIndex: n,
                    byController: r,
                    byMousewheel: l
                } = void 0 === e ? {} : e;
                const o = this;
                if (!o.params.loop) return;
                o.emit("beforeLoopFix");
                const {
                    slides: d,
                    allowSlidePrev: c,
                    allowSlideNext: p,
                    slidesEl: u,
                    params: f
                } = o;
                if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && f.virtual.enabled) return i && (f.centeredSlides || 0 !== o.snapIndex ? f.centeredSlides && o.snapIndex < f.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)), o.allowSlidePrev = c, o.allowSlideNext = p, void o.emit("loopFix");
                const v = "auto" === f.slidesPerView ? o.slidesPerViewDynamic() : Math.ceil(parseFloat(f.slidesPerView, 10));
                let m = f.loopedSlides || v;
                m % f.slidesPerGroup !== 0 && (m += f.slidesPerGroup - m % f.slidesPerGroup), o.loopedSlides = m;
                const h = [],
                    g = [];
                let y = o.activeIndex;
                "undefined" === typeof n ? n = o.getSlideIndex(o.slides.filter((e => e.classList.contains(f.slideActiveClass)))[0]) : y = n;
                const b = "next" === s || !s,
                    w = "prev" === s || !s;
                let S = 0,
                    T = 0;
                if (n < m) {
                    S = Math.max(m - n, f.slidesPerGroup);
                    for (let e = 0; e < m - n; e += 1) {
                        const t = e - Math.floor(e / d.length) * d.length;
                        h.push(d.length - t - 1)
                    }
                } else if (n > o.slides.length - 2 * m) {
                    T = Math.max(n - (o.slides.length - 2 * m), f.slidesPerGroup);
                    for (let e = 0; e < T; e += 1) {
                        const t = e - Math.floor(e / d.length) * d.length;
                        g.push(t)
                    }
                }
                if (w && h.forEach((e => {
                        o.slides[e].swiperLoopMoveDOM = !0, u.prepend(o.slides[e]), o.slides[e].swiperLoopMoveDOM = !1
                    })), b && g.forEach((e => {
                        o.slides[e].swiperLoopMoveDOM = !0, u.append(o.slides[e]), o.slides[e].swiperLoopMoveDOM = !1
                    })), o.recalcSlides(), "auto" === f.slidesPerView && o.updateSlides(), f.watchSlidesProgress && o.updateSlidesOffset(), i)
                    if (h.length > 0 && w)
                        if ("undefined" === typeof t) {
                            const e = o.slidesGrid[y],
                                t = o.slidesGrid[y + S],
                                i = t - e;
                            l ? o.setTranslate(o.translate - i) : (o.slideTo(y + S, 0, !1, !0), a && (o.touches[o.isHorizontal() ? "startX" : "startY"] += i, o.touchEventsData.currentTranslate = o.translate))
                        } else a && (o.slideToLoop(t, 0, !1, !0), o.touchEventsData.currentTranslate = o.translate);
                else if (g.length > 0 && b)
                    if ("undefined" === typeof t) {
                        const e = o.slidesGrid[y],
                            t = o.slidesGrid[y - T],
                            i = t - e;
                        l ? o.setTranslate(o.translate - i) : (o.slideTo(y - T, 0, !1, !0), a && (o.touches[o.isHorizontal() ? "startX" : "startY"] += i, o.touchEventsData.currentTranslate = o.translate))
                    } else o.slideToLoop(t, 0, !1, !0);
                if (o.allowSlidePrev = c, o.allowSlideNext = p, o.controller && o.controller.control && !r) {
                    const e = {
                        slideRealIndex: t,
                        direction: s,
                        setTranslate: a,
                        activeSlideIndex: n,
                        byController: !0
                    };
                    Array.isArray(o.controller.control) ? o.controller.control.forEach((t => {
                        !t.destroyed && t.params.loop && t.loopFix({ ...e,
                            slideTo: t.params.slidesPerView === f.slidesPerView && i
                        })
                    })) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({ ...e,
                        slideTo: o.controller.control.params.slidesPerView === f.slidesPerView && i
                    })
                }
                o.emit("loopFix")
            }

            function Z() {
                const e = this,
                    {
                        params: t,
                        slidesEl: i
                    } = e;
                if (!t.loop || e.virtual && e.params.virtual.enabled) return;
                e.recalcSlides();
                const s = [];
                e.slides.forEach((e => {
                    const t = "undefined" === typeof e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                    s[t] = e
                })), e.slides.forEach((e => {
                    e.removeAttribute("data-swiper-slide-index")
                })), s.forEach((e => {
                    i.append(e)
                })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
            }
            var Q = {
                loopCreate: J,
                loopFix: K,
                loopDestroy: Z
            };

            function ee(e) {
                const t = this;
                if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                const i = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                t.isElement && (t.__preventObserver__ = !0), i.style.cursor = "move", i.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                    t.__preventObserver__ = !1
                }))
            }

            function te() {
                const e = this;
                e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                    e.__preventObserver__ = !1
                })))
            }
            var ie = {
                setGrabCursor: ee,
                unsetGrabCursor: te
            };

            function se(e, t) {
                function i(t) {
                    if (!t || t === (0, s.g)() || t === (0, s.a)()) return null;
                    t.assignedSlot && (t = t.assignedSlot);
                    const a = t.closest(e);
                    return a || t.getRootNode ? a || i(t.getRootNode().host) : null
                }
                return void 0 === t && (t = this), i(t)
            }

            function ae(e) {
                const t = this,
                    i = (0, s.g)(),
                    n = (0, s.a)(),
                    r = t.touchEventsData;
                r.evCache.push(e);
                const {
                    params: l,
                    touches: o,
                    enabled: d
                } = t;
                if (!d) return;
                if (!l.simulateTouch && "mouse" === e.pointerType) return;
                if (t.animating && l.preventInteractionOnTransition) return;
                !t.animating && l.cssMode && l.loop && t.loopFix();
                let c = e;
                c.originalEvent && (c = c.originalEvent);
                let p = c.target;
                if ("wrapper" === l.touchEventsTarget && !t.wrapperEl.contains(p)) return;
                if ("which" in c && 3 === c.which) return;
                if ("button" in c && c.button > 0) return;
                if (r.isTouched && r.isMoved) return;
                const u = !!l.noSwipingClass && "" !== l.noSwipingClass,
                    f = e.composedPath ? e.composedPath() : e.path;
                u && c.target && c.target.shadowRoot && f && (p = f[0]);
                const v = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
                    m = !(!c.target || !c.target.shadowRoot);
                if (l.noSwiping && (m ? se(v, p) : p.closest(v))) return void(t.allowClick = !0);
                if (l.swipeHandler && !p.closest(l.swipeHandler)) return;
                o.currentX = c.pageX, o.currentY = c.pageY;
                const h = o.currentX,
                    g = o.currentY,
                    y = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
                    b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
                if (y && (h <= b || h >= n.innerWidth - b)) {
                    if ("prevent" !== y) return;
                    e.preventDefault()
                }
                Object.assign(r, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), o.startX = h, o.startY = g, r.touchStartTime = (0, a.d)(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (r.allowThresholdMove = !1);
                let w = !0;
                p.matches(r.focusableElements) && (w = !1, "SELECT" === p.nodeName && (r.isTouched = !1)), i.activeElement && i.activeElement.matches(r.focusableElements) && i.activeElement !== p && i.activeElement.blur();
                const S = w && t.allowTouchMove && l.touchStartPreventDefault;
                !l.touchStartForcePreventDefault && !S || p.isContentEditable || c.preventDefault(), l.freeMode && l.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", c)
            }

            function ne(e) {
                const t = (0, s.g)(),
                    i = this,
                    n = i.touchEventsData,
                    {
                        params: r,
                        touches: l,
                        rtlTranslate: o,
                        enabled: d
                    } = i;
                if (!d) return;
                if (!r.simulateTouch && "mouse" === e.pointerType) return;
                let c = e;
                if (c.originalEvent && (c = c.originalEvent), !n.isTouched) return void(n.startMoving && n.isScrolling && i.emit("touchMoveOpposite", c));
                const p = n.evCache.findIndex((e => e.pointerId === c.pointerId));
                p >= 0 && (n.evCache[p] = c);
                const u = n.evCache.length > 1 ? n.evCache[0] : c,
                    f = u.pageX,
                    v = u.pageY;
                if (c.preventedByNestedSwiper) return l.startX = f, void(l.startY = v);
                if (!i.allowTouchMove) return c.target.matches(n.focusableElements) || (i.allowClick = !1), void(n.isTouched && (Object.assign(l, {
                    startX: f,
                    startY: v,
                    prevX: i.touches.currentX,
                    prevY: i.touches.currentY,
                    currentX: f,
                    currentY: v
                }), n.touchStartTime = (0, a.d)()));
                if (r.touchReleaseOnEdges && !r.loop)
                    if (i.isVertical()) {
                        if (v < l.startY && i.translate <= i.maxTranslate() || v > l.startY && i.translate >= i.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
                    } else if (f < l.startX && i.translate <= i.maxTranslate() || f > l.startX && i.translate >= i.minTranslate()) return;
                if (t.activeElement && c.target === t.activeElement && c.target.matches(n.focusableElements)) return n.isMoved = !0, void(i.allowClick = !1);
                if (n.allowTouchCallbacks && i.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
                l.currentX = f, l.currentY = v;
                const m = l.currentX - l.startX,
                    h = l.currentY - l.startY;
                if (i.params.threshold && Math.sqrt(m ** 2 + h ** 2) < i.params.threshold) return;
                if ("undefined" === typeof n.isScrolling) {
                    let e;
                    i.isHorizontal() && l.currentY === l.startY || i.isVertical() && l.currentX === l.startX ? n.isScrolling = !1 : m * m + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(m)) / Math.PI, n.isScrolling = i.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
                }
                if (n.isScrolling && i.emit("touchMoveOpposite", c), "undefined" === typeof n.startMoving && (l.currentX === l.startX && l.currentY === l.startY || (n.startMoving = !0)), n.isScrolling || i.zoom && i.params.zoom && i.params.zoom.enabled && n.evCache.length > 1) return void(n.isTouched = !1);
                if (!n.startMoving) return;
                i.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation();
                let g = i.isHorizontal() ? m : h,
                    y = i.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
                r.oneWayMovement && (g = Math.abs(g) * (o ? 1 : -1), y = Math.abs(y) * (o ? 1 : -1)), l.diff = g, g *= r.touchRatio, o && (g = -g, y = -y);
                const b = i.touchesDirection;
                i.swipeDirection = g > 0 ? "prev" : "next", i.touchesDirection = y > 0 ? "prev" : "next";
                const w = i.params.loop && !r.cssMode;
                if (!n.isMoved) {
                    if (w && i.loopFix({
                            direction: i.swipeDirection
                        }), n.startTranslate = i.getTranslate(), i.setTransition(0), i.animating) {
                        const e = new window.CustomEvent("transitionend", {
                            bubbles: !0,
                            cancelable: !0
                        });
                        i.wrapperEl.dispatchEvent(e)
                    }
                    n.allowMomentumBounce = !1, !r.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit("sliderFirstMove", c)
                }
                let S;
                n.isMoved && b !== i.touchesDirection && w && Math.abs(g) >= 1 && (i.loopFix({
                    direction: i.swipeDirection,
                    setTranslate: !0
                }), S = !0), i.emit("sliderMove", c), n.isMoved = !0, n.currentTranslate = g + n.startTranslate;
                let T = !0,
                    x = r.resistanceRatio;
                if (r.touchReleaseOnEdges && (x = 0), g > 0 ? (w && !S && n.currentTranslate > (r.centeredSlides ? i.minTranslate() - i.size / 2 : i.minTranslate()) && i.loopFix({
                        direction: "prev",
                        setTranslate: !0,
                        activeSlideIndex: 0
                    }), n.currentTranslate > i.minTranslate() && (T = !1, r.resistance && (n.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + n.startTranslate + g) ** x))) : g < 0 && (w && !S && n.currentTranslate < (r.centeredSlides ? i.maxTranslate() + i.size / 2 : i.maxTranslate()) && i.loopFix({
                        direction: "next",
                        setTranslate: !0,
                        activeSlideIndex: i.slides.length - ("auto" === r.slidesPerView ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
                    }), n.currentTranslate < i.maxTranslate() && (T = !1, r.resistance && (n.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - n.startTranslate - g) ** x))), T && (c.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), i.allowSlidePrev || i.allowSlideNext || (n.currentTranslate = n.startTranslate), r.threshold > 0) {
                    if (!(Math.abs(g) > r.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
                    if (!n.allowThresholdMove) return n.allowThresholdMove = !0, l.startX = l.currentX, l.startY = l.currentY, n.currentTranslate = n.startTranslate, void(l.diff = i.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY)
                }
                r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && i.freeMode || r.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(n.currentTranslate), i.setTranslate(n.currentTranslate))
            }

            function re(e) {
                const t = this,
                    i = t.touchEventsData,
                    s = i.evCache.findIndex((t => t.pointerId === e.pointerId));
                if (s >= 0 && i.evCache.splice(s, 1), ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type)) {
                    const i = ["pointercancel", "contextmenu"].includes(e.type) && (t.browser.isSafari || t.browser.isWebView);
                    if (!i) return
                }
                const {
                    params: n,
                    touches: r,
                    rtlTranslate: l,
                    slidesGrid: o,
                    enabled: d
                } = t;
                if (!d) return;
                if (!n.simulateTouch && "mouse" === e.pointerType) return;
                let c = e;
                if (c.originalEvent && (c = c.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", c), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
                n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                const p = (0, a.d)(),
                    u = p - i.touchStartTime;
                if (t.allowClick) {
                    const e = c.path || c.composedPath && c.composedPath();
                    t.updateClickedSlide(e && e[0] || c.target), t.emit("tap click", c), u < 300 && p - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", c)
                }
                if (i.lastClickTime = (0, a.d)(), (0, a.n)((() => {
                        t.destroyed || (t.allowClick = !0)
                    })), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === r.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
                let f;
                if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, f = n.followFinger ? l ? t.translate : -t.translate : -i.currentTranslate, n.cssMode) return;
                if (n.freeMode && n.freeMode.enabled) return void t.freeMode.onTouchEnd({
                    currentPos: f
                });
                let v = 0,
                    m = t.slidesSizesGrid[0];
                for (let a = 0; a < o.length; a += a < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                    const e = a < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                    "undefined" !== typeof o[a + e] ? f >= o[a] && f < o[a + e] && (v = a, m = o[a + e] - o[a]) : f >= o[a] && (v = a, m = o[o.length - 1] - o[o.length - 2])
                }
                let h = null,
                    g = null;
                n.rewind && (t.isBeginning ? g = n.virtual && n.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (h = 0));
                const y = (f - o[v]) / m,
                    b = v < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                if (u > n.longSwipesMs) {
                    if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (y >= n.longSwipesRatio ? t.slideTo(n.rewind && t.isEnd ? h : v + b) : t.slideTo(v)), "prev" === t.swipeDirection && (y > 1 - n.longSwipesRatio ? t.slideTo(v + b) : null !== g && y < 0 && Math.abs(y) > n.longSwipesRatio ? t.slideTo(g) : t.slideTo(v))
                } else {
                    if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                    const e = t.navigation && (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl);
                    e ? c.target === t.navigation.nextEl ? t.slideTo(v + b) : t.slideTo(v) : ("next" === t.swipeDirection && t.slideTo(null !== h ? h : v + b), "prev" === t.swipeDirection && t.slideTo(null !== g ? g : v))
                }
            }

            function le() {
                const e = this,
                    {
                        params: t,
                        el: i
                    } = e;
                if (i && 0 === i.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                const {
                    allowSlideNext: s,
                    allowSlidePrev: a,
                    snapGrid: n
                } = e, r = e.virtual && e.params.virtual.enabled;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
                const l = r && t.loop;
                !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !r ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
                    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
                }), 500)), e.allowSlidePrev = a, e.allowSlideNext = s, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
            }

            function oe(e) {
                const t = this;
                t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
            }

            function de() {
                const e = this,
                    {
                        wrapperEl: t,
                        rtlTranslate: i,
                        enabled: s
                    } = e;
                if (!s) return;
                let a;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                const n = e.maxTranslate() - e.minTranslate();
                a = 0 === n ? 0 : (e.translate - e.minTranslate()) / n, a !== e.progress && e.updateProgress(i ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
            }

            function ce(e) {
                const t = this;
                E(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
            }
            let pe = !1;

            function ue() {}
            const fe = (e, t) => {
                const i = (0, s.g)(),
                    {
                        params: a,
                        el: n,
                        wrapperEl: r,
                        device: l
                    } = e,
                    o = !!a.nested,
                    d = "on" === t ? "addEventListener" : "removeEventListener",
                    c = t;
                n[d]("pointerdown", e.onTouchStart, {
                    passive: !1
                }), i[d]("pointermove", e.onTouchMove, {
                    passive: !1,
                    capture: o
                }), i[d]("pointerup", e.onTouchEnd, {
                    passive: !0
                }), i[d]("pointercancel", e.onTouchEnd, {
                    passive: !0
                }), i[d]("pointerout", e.onTouchEnd, {
                    passive: !0
                }), i[d]("pointerleave", e.onTouchEnd, {
                    passive: !0
                }), i[d]("contextmenu", e.onTouchEnd, {
                    passive: !0
                }), (a.preventClicks || a.preventClicksPropagation) && n[d]("click", e.onClick, !0), a.cssMode && r[d]("scroll", e.onScroll), a.updateOnWindowResize ? e[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", le, !0) : e[c]("observerUpdate", le, !0), n[d]("load", e.onLoad, {
                    capture: !0
                })
            };

            function ve() {
                const e = this,
                    t = (0, s.g)(),
                    {
                        params: i
                    } = e;
                e.onTouchStart = ae.bind(e), e.onTouchMove = ne.bind(e), e.onTouchEnd = re.bind(e), i.cssMode && (e.onScroll = de.bind(e)), e.onClick = oe.bind(e), e.onLoad = ce.bind(e), pe || (t.addEventListener("touchstart", ue), pe = !0), fe(e, "on")
            }

            function me() {
                const e = this;
                fe(e, "off")
            }
            var he = {
                attachEvents: ve,
                detachEvents: me
            };
            const ge = (e, t) => e.grid && t.grid && t.grid.rows > 1;

            function ye() {
                const e = this,
                    {
                        realIndex: t,
                        initialized: i,
                        params: s,
                        el: n
                    } = e,
                    r = s.breakpoints;
                if (!r || r && 0 === Object.keys(r).length) return;
                const l = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
                if (!l || e.currentBreakpoint === l) return;
                const o = l in r ? r[l] : void 0,
                    d = o || e.originalParams,
                    c = ge(e, s),
                    p = ge(e, d),
                    u = s.enabled;
                c && !p ? (n.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && p && (n.classList.add(`${s.containerModifierClass}grid`), (d.grid.fill && "column" === d.grid.fill || !d.grid.fill && "column" === s.grid.fill) && n.classList.add(`${s.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                    if ("undefined" === typeof d[t]) return;
                    const i = s[t] && s[t].enabled,
                        a = d[t] && d[t].enabled;
                    i && !a && e[t].disable(), !i && a && e[t].enable()
                }));
                const f = d.direction && d.direction !== s.direction,
                    v = s.loop && (d.slidesPerView !== s.slidesPerView || f);
                f && i && e.changeDirection(), (0, a.q)(e.params, d);
                const m = e.params.enabled;
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }), u && !m ? e.disable() : !u && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", d), v && i && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()), e.emit("breakpoint", d)
            }

            function be(e, t, i) {
                if (void 0 === t && (t = "window"), !e || "container" === t && !i) return;
                let a = !1;
                const n = (0, s.a)(),
                    r = "window" === t ? n.innerHeight : i.clientHeight,
                    l = Object.keys(e).map((e => {
                        if ("string" === typeof e && 0 === e.indexOf("@")) {
                            const t = parseFloat(e.substr(1)),
                                i = r * t;
                            return {
                                value: i,
                                point: e
                            }
                        }
                        return {
                            value: e,
                            point: e
                        }
                    }));
                l.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                for (let s = 0; s < l.length; s += 1) {
                    const {
                        point: e,
                        value: r
                    } = l[s];
                    "window" === t ? n.matchMedia(`(min-width: ${r}px)`).matches && (a = e) : r <= i.clientWidth && (a = e)
                }
                return a || "max"
            }
            var we = {
                setBreakpoint: ye,
                getBreakpoint: be
            };

            function Se(e, t) {
                const i = [];
                return e.forEach((e => {
                    "object" === typeof e ? Object.keys(e).forEach((s => {
                        e[s] && i.push(t + s)
                    })) : "string" === typeof e && i.push(t + e)
                })), i
            }

            function Te() {
                const e = this,
                    {
                        classNames: t,
                        params: i,
                        rtl: s,
                        el: a,
                        device: n
                    } = e,
                    r = Se(["initialized", i.direction, {
                        "free-mode": e.params.freeMode && i.freeMode.enabled
                    }, {
                        autoheight: i.autoHeight
                    }, {
                        rtl: s
                    }, {
                        grid: i.grid && i.grid.rows > 1
                    }, {
                        "grid-column": i.grid && i.grid.rows > 1 && "column" === i.grid.fill
                    }, {
                        android: n.android
                    }, {
                        ios: n.ios
                    }, {
                        "css-mode": i.cssMode
                    }, {
                        centered: i.cssMode && i.centeredSlides
                    }, {
                        "watch-progress": i.watchSlidesProgress
                    }], i.containerModifierClass);
                t.push(...r), a.classList.add(...t), e.emitContainerClasses()
            }

            function xe() {
                const e = this,
                    {
                        el: t,
                        classNames: i
                    } = e;
                t.classList.remove(...i), e.emitContainerClasses()
            }
            var Ee = {
                addClasses: Te,
                removeClasses: xe
            };

            function Ce() {
                const e = this,
                    {
                        isLocked: t,
                        params: i
                    } = e,
                    {
                        slidesOffsetBefore: s
                    } = i;
                if (s) {
                    const t = e.slides.length - 1,
                        i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
                    e.isLocked = e.size > i
                } else e.isLocked = 1 === e.snapGrid.length;
                !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
            var Me = {
                    checkOverflow: Ce
                },
                Pe = {
                    init: !0,
                    direction: "horizontal",
                    oneWayMovement: !1,
                    touchEventsTarget: "wrapper",
                    initialSlide: 0,
                    speed: 300,
                    cssMode: !1,
                    updateOnWindowResize: !0,
                    resizeObserver: !0,
                    nested: !1,
                    createElements: !1,
                    enabled: !0,
                    focusableElements: "input, select, option, textarea, button, video, label",
                    width: null,
                    height: null,
                    preventInteractionOnTransition: !1,
                    userAgent: null,
                    url: null,
                    edgeSwipeDetection: !1,
                    edgeSwipeThreshold: 20,
                    autoHeight: !1,
                    setWrapperSize: !1,
                    virtualTranslate: !1,
                    effect: "slide",
                    breakpoints: void 0,
                    breakpointsBase: "window",
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    slidesPerGroupSkip: 0,
                    slidesPerGroupAuto: !1,
                    centeredSlides: !1,
                    centeredSlidesBounds: !1,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                    normalizeSlideIndex: !0,
                    centerInsufficientSlides: !1,
                    watchOverflow: !0,
                    roundLengths: !1,
                    touchRatio: 1,
                    touchAngle: 45,
                    simulateTouch: !0,
                    shortSwipes: !0,
                    longSwipes: !0,
                    longSwipesRatio: .5,
                    longSwipesMs: 300,
                    followFinger: !0,
                    allowTouchMove: !0,
                    threshold: 5,
                    touchMoveStopPropagation: !1,
                    touchStartPreventDefault: !0,
                    touchStartForcePreventDefault: !1,
                    touchReleaseOnEdges: !1,
                    uniqueNavElements: !0,
                    resistance: !0,
                    resistanceRatio: .85,
                    watchSlidesProgress: !1,
                    grabCursor: !1,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    slideToClickedSlide: !1,
                    loop: !1,
                    loopedSlides: null,
                    loopPreventsSliding: !0,
                    rewind: !1,
                    allowSlidePrev: !0,
                    allowSlideNext: !0,
                    swipeHandler: null,
                    noSwiping: !0,
                    noSwipingClass: "swiper-no-swiping",
                    noSwipingSelector: null,
                    passiveListeners: !0,
                    maxBackfaceHiddenSlides: 10,
                    containerModifierClass: "swiper-",
                    slideClass: "swiper-slide",
                    slideActiveClass: "swiper-slide-active",
                    slideVisibleClass: "swiper-slide-visible",
                    slideNextClass: "swiper-slide-next",
                    slidePrevClass: "swiper-slide-prev",
                    wrapperClass: "swiper-wrapper",
                    lazyPreloaderClass: "swiper-lazy-preloader",
                    lazyPreloadPrevNext: 0,
                    runCallbacksOnInit: !0,
                    _emitClasses: !1
                };

            function Oe(e, t) {
                return function(i) {
                    void 0 === i && (i = {});
                    const s = Object.keys(i)[0],
                        n = i[s];
                    "object" === typeof n && null !== n ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 && !0 === e[s] && (e[s] = {
                        auto: !0
                    }), s in e && "enabled" in n ? (!0 === e[s] && (e[s] = {
                        enabled: !0
                    }), "object" !== typeof e[s] || "enabled" in e[s] || (e[s].enabled = !0), e[s] || (e[s] = {
                        enabled: !1
                    }), (0, a.q)(t, i)) : (0, a.q)(t, i)) : (0, a.q)(t, i)
                }
            }
            const ke = {
                    eventsEmitter: h,
                    update: L,
                    translate: G,
                    transition: H,
                    slide: U,
                    loop: Q,
                    grabCursor: ie,
                    events: he,
                    breakpoints: we,
                    checkOverflow: Me,
                    classes: Ee
                },
                Le = {};
            class ze {
                constructor() {
                    let e, t;
                    for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    1 === n.length && n[0].constructor && "Object" === Object.prototype.toString.call(n[0]).slice(8, -1) ? t = n[0] : [e, t] = n, t || (t = {}), t = (0, a.q)({}, t), e && !t.el && (t.el = e);
                    const l = (0, s.g)();
                    if (t.el && "string" === typeof t.el && l.querySelectorAll(t.el).length > 1) {
                        const e = [];
                        return l.querySelectorAll(t.el).forEach((i => {
                            const s = (0, a.q)({}, t, {
                                el: i
                            });
                            e.push(new ze(s))
                        })), e
                    }
                    const o = this;
                    o.__swiper__ = !0, o.support = d(), o.device = p({
                        userAgent: t.userAgent
                    }), o.browser = f(), o.eventsListeners = {}, o.eventsAnyListeners = [], o.modules = [...o.__modules__], t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
                    const c = {};
                    o.modules.forEach((e => {
                        e({
                            params: t,
                            swiper: o,
                            extendParams: Oe(t, c),
                            on: o.on.bind(o),
                            once: o.once.bind(o),
                            off: o.off.bind(o),
                            emit: o.emit.bind(o)
                        })
                    }));
                    const u = (0, a.q)({}, Pe, c);
                    return o.params = (0, a.q)({}, u, Le, t), o.originalParams = (0, a.q)({}, o.params), o.passedParams = (0, a.q)({}, t), o.params && o.params.on && Object.keys(o.params.on).forEach((e => {
                        o.on(e, o.params.on[e])
                    })), o.params && o.params.onAny && o.onAny(o.params.onAny), Object.assign(o, {
                        enabled: o.params.enabled,
                        el: e,
                        classNames: [],
                        slides: [],
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal() {
                            return "horizontal" === o.params.direction
                        },
                        isVertical() {
                            return "vertical" === o.params.direction
                        },
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        cssOverflowAdjustment() {
                            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                        },
                        allowSlideNext: o.params.allowSlideNext,
                        allowSlidePrev: o.params.allowSlidePrev,
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: o.params.focusableElements,
                            lastClickTime: 0,
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            startMoving: void 0,
                            evCache: []
                        },
                        allowClick: !0,
                        allowTouchMove: o.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), o.emit("_swiper"), o.params.init && o.init(), o
                }
                getSlideIndex(e) {
                    const {
                        slidesEl: t,
                        params: i
                    } = this, s = (0, a.e)(t, `.${i.slideClass}, swiper-slide`), n = (0, a.g)(s[0]);
                    return (0, a.g)(e) - n
                }
                getSlideIndexByData(e) {
                    return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
                }
                recalcSlides() {
                    const e = this,
                        {
                            slidesEl: t,
                            params: i
                        } = e;
                    e.slides = (0, a.e)(t, `.${i.slideClass}, swiper-slide`)
                }
                enable() {
                    const e = this;
                    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
                }
                disable() {
                    const e = this;
                    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
                }
                setProgress(e, t) {
                    const i = this;
                    e = Math.min(Math.max(e, 0), 1);
                    const s = i.minTranslate(),
                        a = i.maxTranslate(),
                        n = (a - s) * e + s;
                    i.translateTo(n, "undefined" === typeof t ? 0 : t), i.updateActiveIndex(), i.updateSlidesClasses()
                }
                emitContainerClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    const t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
                }
                emitSlidesClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = [];
                    e.slides.forEach((i => {
                        const s = e.getSlideClasses(i);
                        t.push({
                            slideEl: i,
                            classNames: s
                        }), e.emit("_slideClass", i, s)
                    })), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    const i = this,
                        {
                            params: s,
                            slides: a,
                            slidesGrid: n,
                            slidesSizesGrid: r,
                            size: l,
                            activeIndex: o
                        } = i;
                    let d = 1;
                    if (s.centeredSlides) {
                        let e, t = a[o] ? a[o].swiperSlideSize : 0;
                        for (let i = o + 1; i < a.length; i += 1) a[i] && !e && (t += a[i].swiperSlideSize, d += 1, t > l && (e = !0));
                        for (let i = o - 1; i >= 0; i -= 1) a[i] && !e && (t += a[i].swiperSlideSize, d += 1, t > l && (e = !0))
                    } else if ("current" === e)
                        for (let c = o + 1; c < a.length; c += 1) {
                            const e = t ? n[c] + r[c] - n[o] < l : n[c] - n[o] < l;
                            e && (d += 1)
                        } else
                            for (let c = o - 1; c >= 0; c -= 1) {
                                const e = n[o] - n[c] < l;
                                e && (d += 1)
                            }
                    return d
                }
                update() {
                    const e = this;
                    if (!e || e.destroyed) return;
                    const {
                        snapGrid: t,
                        params: i
                    } = e;

                    function s() {
                        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    let a;
                    if (i.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
                            t.complete && E(e, t)
                        })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), i.freeMode && i.freeMode.enabled && !i.cssMode) s(), i.autoHeight && e.updateAutoHeight();
                    else {
                        if (("auto" === i.slidesPerView || i.slidesPerView > 1) && e.isEnd && !i.centeredSlides) {
                            const t = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
                            a = e.slideTo(t.length - 1, 0, !1, !0)
                        } else a = e.slideTo(e.activeIndex, 0, !1, !0);
                        a || s()
                    }
                    i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
                changeDirection(e, t) {
                    void 0 === t && (t = !0);
                    const i = this,
                        s = i.params.direction;
                    return e || (e = "horizontal" === s ? "vertical" : "horizontal"), e === s || "horizontal" !== e && "vertical" !== e || (i.el.classList.remove(`${i.params.containerModifierClass}${s}`), i.el.classList.add(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.forEach((t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    })), i.emit("changeDirection"), t && i.update()), i
                }
                changeLanguageDirection(e) {
                    const t = this;
                    t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
                }
                mount(e) {
                    const t = this;
                    if (t.mounted) return !0;
                    let i = e || t.params.el;
                    if ("string" === typeof i && (i = document.querySelector(i)), !i) return !1;
                    i.swiper = t, i.parentNode && i.parentNode.host && "SWIPER-CONTAINER" === i.parentNode.host.nodeName && (t.isElement = !0);
                    const s = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,
                        n = () => {
                            if (i && i.shadowRoot && i.shadowRoot.querySelector) {
                                const e = i.shadowRoot.querySelector(s());
                                return e
                            }
                            return (0, a.e)(i, s())[0]
                        };
                    let r = n();
                    return !r && t.params.createElements && (r = (0, a.c)("div", t.params.wrapperClass), i.append(r), (0, a.e)(i, `.${t.params.slideClass}`).forEach((e => {
                        r.append(e)
                    }))), Object.assign(t, {
                        el: i,
                        wrapperEl: r,
                        slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : r,
                        hostEl: t.isElement ? i.parentNode.host : i,
                        mounted: !0,
                        rtl: "rtl" === i.dir.toLowerCase() || "rtl" === (0, a.l)(i, "direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === (0, a.l)(i, "direction")),
                        wrongRTL: "-webkit-box" === (0, a.l)(r, "display")
                    }), !0
                }
                init(e) {
                    const t = this;
                    if (t.initialized) return t;
                    const i = t.mount(e);
                    if (!1 === i) return t;
                    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
                    const s = [...t.el.querySelectorAll('[loading="lazy"]')];
                    return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((e => {
                        e.complete ? E(t, e) : e.addEventListener("load", (e => {
                            E(t, e.target)
                        }))
                    })), M(t), t.initialized = !0, M(t), t.emit("init"), t.emit("afterInit"), t
                }
                destroy(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    const i = this,
                        {
                            params: s,
                            el: n,
                            wrapperEl: r,
                            slides: l
                        } = i;
                    return "undefined" === typeof i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), n.removeAttribute("style"), r.removeAttribute("style"), l && l.length && l.forEach((e => {
                        e.classList.remove(s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                    }))), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((e => {
                        i.off(e)
                    })), !1 !== e && (i.el.swiper = null, (0, a.r)(i)), i.destroyed = !0), null
                }
                static extendDefaults(e) {
                    (0, a.q)(Le, e)
                }
                static get extendedDefaults() {
                    return Le
                }
                static get defaults() {
                    return Pe
                }
                static installModule(e) {
                    ze.prototype.__modules__ || (ze.prototype.__modules__ = []);
                    const t = ze.prototype.__modules__;
                    "function" === typeof e && t.indexOf(e) < 0 && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? (e.forEach((e => ze.installModule(e))), ze) : (ze.installModule(e), ze)
                }
            }
            Object.keys(ke).forEach((e => {
                Object.keys(ke[e]).forEach((t => {
                    ze.prototype[t] = ke[e][t]
                }))
            })), ze.use([v, m])
        },
        799762: (e, t, i) => {
            i.d(t, {
                a: () => l,
                g: () => n,
                m: () => r,
                u: () => o
            });
            var s = i(162546),
                a = i(996236);

            function n(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = !0);
                const i = {
                        on: {}
                    },
                    n = {},
                    r = {};
                (0, s.e)(i, a.d), i._emitClasses = !0, i.init = !1;
                const l = {},
                    o = s.p.map((e => e.replace(/_/, ""))),
                    d = Object.assign({}, e);
                return Object.keys(d).forEach((a => {
                    "undefined" !== typeof e[a] && (o.indexOf(a) >= 0 ? (0, s.i)(e[a]) ? (i[a] = {}, r[a] = {}, (0, s.e)(i[a], e[a]), (0, s.e)(r[a], e[a])) : (i[a] = e[a], r[a] = e[a]) : 0 === a.search(/on[A-Z]/) && "function" === typeof e[a] ? t ? n[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : i.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : l[a] = e[a])
                })), ["navigation", "pagination", "scrollbar"].forEach((e => {
                    !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e]
                })), {
                    params: i,
                    passedParams: r,
                    rest: l,
                    events: n
                }
            }

            function r(e, t) {
                let {
                    el: i,
                    nextEl: a,
                    prevEl: n,
                    paginationEl: r,
                    scrollbarEl: l,
                    swiper: o
                } = e;
                (0, s.n)(t) && a && n && (o.params.navigation.nextEl = a, o.originalParams.navigation.nextEl = a, o.params.navigation.prevEl = n, o.originalParams.navigation.prevEl = n), (0, s.a)(t) && r && (o.params.pagination.el = r, o.originalParams.pagination.el = r), (0, s.b)(t) && l && (o.params.scrollbar.el = l, o.originalParams.scrollbar.el = l), o.init(i)
            }

            function l(e, t, i, a, n) {
                const r = [];
                if (!t) return r;
                const l = e => {
                    r.indexOf(e) < 0 && r.push(e)
                };
                if (i && a) {
                    const e = a.map(n),
                        t = i.map(n);
                    e.join("") !== t.join("") && l("children"), a.length !== i.length && l("children")
                }
                const o = s.p.filter((e => "_" === e[0])).map((e => e.replace(/_/, "")));
                return o.forEach((i => {
                    if (i in e && i in t)
                        if ((0, s.i)(e[i]) && (0, s.i)(t[i])) {
                            const s = Object.keys(e[i]),
                                a = Object.keys(t[i]);
                            s.length !== a.length ? l(i) : (s.forEach((s => {
                                e[i][s] !== t[i][s] && l(i)
                            })), a.forEach((s => {
                                e[i][s] !== t[i][s] && l(i)
                            })))
                        } else e[i] !== t[i] && l(i)
                })), r
            }
            const o = e => {
                !e || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
            }
        },
        162546: (e, t, i) => {
            i.d(t, {
                a: () => l,
                b: () => o,
                d: () => d,
                e: () => n,
                i: () => a,
                n: () => r,
                p: () => s,
                u: () => p,
                w: () => c
            });
            const s = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopedSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideNextClass", "slidePrevClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

            function a(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function n(e, t) {
                const i = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter((e => i.indexOf(e) < 0)).forEach((i => {
                    "undefined" === typeof e[i] ? e[i] = t[i] : a(t[i]) && a(e[i]) && Object.keys(t[i]).length > 0 ? t[i].__swiper__ ? e[i] = t[i] : n(e[i], t[i]) : e[i] = t[i]
                }))
            }

            function r(e) {
                return void 0 === e && (e = {}), e.navigation && "undefined" === typeof e.navigation.nextEl && "undefined" === typeof e.navigation.prevEl
            }

            function l(e) {
                return void 0 === e && (e = {}), e.pagination && "undefined" === typeof e.pagination.el
            }

            function o(e) {
                return void 0 === e && (e = {}), e.scrollbar && "undefined" === typeof e.scrollbar.el
            }

            function d(e) {
                void 0 === e && (e = "");
                const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
                    i = [];
                return t.forEach((e => {
                    i.indexOf(e) < 0 && i.push(e)
                })), i.join(" ")
            }

            function c(e) {
                return void 0 === e && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
            }

            function p(e) {
                let {
                    swiper: t,
                    slides: i,
                    passedParams: s,
                    changedParams: r,
                    nextEl: l,
                    prevEl: o,
                    scrollbarEl: d,
                    paginationEl: c
                } = e;
                const p = r.filter((e => "children" !== e && "direction" !== e && "wrapperClass" !== e)),
                    {
                        params: u,
                        pagination: f,
                        navigation: v,
                        scrollbar: m,
                        virtual: h,
                        thumbs: g
                    } = t;
                let y, b, w, S, T, x, E, C;
                r.includes("thumbs") && s.thumbs && s.thumbs.swiper && u.thumbs && !u.thumbs.swiper && (y = !0), r.includes("controller") && s.controller && s.controller.control && u.controller && !u.controller.control && (b = !0), r.includes("pagination") && s.pagination && (s.pagination.el || c) && (u.pagination || !1 === u.pagination) && f && !f.el && (w = !0), r.includes("scrollbar") && s.scrollbar && (s.scrollbar.el || d) && (u.scrollbar || !1 === u.scrollbar) && m && !m.el && (S = !0), r.includes("navigation") && s.navigation && (s.navigation.prevEl || o) && (s.navigation.nextEl || l) && (u.navigation || !1 === u.navigation) && v && !v.prevEl && !v.nextEl && (T = !0);
                const M = e => {
                    t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), u[e].prevEl = void 0, u[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), u[e].el = void 0, t[e].el = void 0))
                };
                if (r.includes("loop") && t.isElement && (u.loop && !s.loop ? x = !0 : !u.loop && s.loop ? E = !0 : C = !0), p.forEach((e => {
                        if (a(u[e]) && a(s[e])) n(u[e], s[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in s[e]) || s[e].enabled || M(e);
                        else {
                            const t = s[e];
                            !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? u[e] = s[e] : !1 === t && M(e)
                        }
                    })), p.includes("controller") && !b && t.controller && t.controller.control && u.controller && u.controller.control && (t.controller.control = u.controller.control), r.includes("children") && i && h && u.virtual.enabled && (h.slides = i, h.update(!0)), r.includes("children") && i && u.loop && (C = !0), y) {
                    const e = g.init();
                    e && g.update(!0)
                }
                b && (t.controller.control = u.controller.control), w && (!t.isElement || c && "string" !== typeof c || (c = document.createElement("div"), c.classList.add("swiper-pagination"), c.part.add("pagination"), t.el.appendChild(c)), c && (u.pagination.el = c), f.init(), f.render(), f.update()), S && (!t.isElement || d && "string" !== typeof d || (d = document.createElement("div"), d.classList.add("swiper-scrollbar"), d.part.add("scrollbar"), t.el.appendChild(d)), d && (u.scrollbar.el = d), m.init(), m.updateSize(), m.setTranslate()), T && (t.isElement && (l && "string" !== typeof l || (l = document.createElement("div"), l.classList.add("swiper-button-next"), l.innerHTML = t.hostEl.constructor.nextButtonSvg, l.part.add("button-next"), t.el.appendChild(l)), o && "string" !== typeof o || (o = document.createElement("div"), o.classList.add("swiper-button-prev"), o.innerHTML = t.hostEl.constructor.prevButtonSvg, o.part.add("button-prev"), t.el.appendChild(o))), l && (u.navigation.nextEl = l), o && (u.navigation.prevEl = o), v.init(), v.update()), r.includes("allowSlideNext") && (t.allowSlideNext = s.allowSlideNext), r.includes("allowSlidePrev") && (t.allowSlidePrev = s.allowSlidePrev), r.includes("direction") && t.changeDirection(s.direction, !1), (x || C) && t.loopDestroy(), (E || C) && t.loopCreate(), t.update()
            }
        },
        107185: (e, t, i) => {
            i.d(t, {
                a: () => w,
                c: () => m,
                d: () => r,
                e: () => v,
                f: () => T,
                g: () => b,
                h: () => o,
                i: () => S,
                l: () => y,
                m: () => g,
                n: () => n,
                o: () => h,
                p: () => f,
                q: () => p,
                r: () => a,
                s: () => u
            });
            var s = i(113433);

            function a(e) {
                const t = e;
                Object.keys(t).forEach((e => {
                    try {
                        t[e] = null
                    } catch (i) {}
                    try {
                        delete t[e]
                    } catch (i) {}
                }))
            }

            function n(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            }

            function r() {
                return Date.now()
            }

            function l(e) {
                const t = (0, s.a)();
                let i;
                return t.getComputedStyle && (i = t.getComputedStyle(e, null)), !i && e.currentStyle && (i = e.currentStyle), i || (i = e.style), i
            }

            function o(e, t) {
                void 0 === t && (t = "x");
                const i = (0, s.a)();
                let a, n, r;
                const o = l(e);
                return i.WebKitCSSMatrix ? (n = o.transform || o.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map((e => e.replace(",", "."))).join(", ")), r = new i.WebKitCSSMatrix("none" === n ? "" : n)) : (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = r.toString().split(",")), "x" === t && (n = i.WebKitCSSMatrix ? r.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (n = i.WebKitCSSMatrix ? r.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), n || 0
            }

            function d(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function c(e) {
                return "undefined" !== typeof window && "undefined" !== typeof window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
            }

            function p() {
                const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                    t = ["__proto__", "constructor", "prototype"];
                for (let i = 1; i < arguments.length; i += 1) {
                    const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                    if (void 0 !== s && null !== s && !c(s)) {
                        const i = Object.keys(Object(s)).filter((e => t.indexOf(e) < 0));
                        for (let t = 0, a = i.length; t < a; t += 1) {
                            const a = i[t],
                                n = Object.getOwnPropertyDescriptor(s, a);
                            void 0 !== n && n.enumerable && (d(e[a]) && d(s[a]) ? s[a].__swiper__ ? e[a] = s[a] : p(e[a], s[a]) : !d(e[a]) && d(s[a]) ? (e[a] = {}, s[a].__swiper__ ? e[a] = s[a] : p(e[a], s[a])) : e[a] = s[a])
                        }
                    }
                }
                return e
            }

            function u(e, t, i) {
                e.style.setProperty(t, i)
            }

            function f(e) {
                let {
                    swiper: t,
                    targetPosition: i,
                    side: a
                } = e;
                const n = (0, s.a)(),
                    r = -t.translate;
                let l, o = null;
                const d = t.params.speed;
                t.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(t.cssModeFrameID);
                const c = i > r ? "next" : "prev",
                    p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
                    u = () => {
                        l = (new Date).getTime(), null === o && (o = l);
                        const e = Math.max(Math.min((l - o) / d, 1), 0),
                            s = .5 - Math.cos(e * Math.PI) / 2;
                        let c = r + s * (i - r);
                        if (p(c, i) && (c = i), t.wrapperEl.scrollTo({
                                [a]: c
                            }), p(c, i)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                            t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                                [a]: c
                            })
                        })), void n.cancelAnimationFrame(t.cssModeFrameID);
                        t.cssModeFrameID = n.requestAnimationFrame(u)
                    };
                u()
            }

            function v(e, t) {
                return void 0 === t && (t = ""), [...e.children].filter((e => e.matches(t)))
            }

            function m(e, t) {
                void 0 === t && (t = []);
                const i = document.createElement(e);
                return i.classList.add(...Array.isArray(t) ? t : [t]), i
            }

            function h(e, t) {
                const i = [];
                while (e.previousElementSibling) {
                    const s = e.previousElementSibling;
                    t ? s.matches(t) && i.push(s) : i.push(s), e = s
                }
                return i
            }

            function g(e, t) {
                const i = [];
                while (e.nextElementSibling) {
                    const s = e.nextElementSibling;
                    t ? s.matches(t) && i.push(s) : i.push(s), e = s
                }
                return i
            }

            function y(e, t) {
                const i = (0, s.a)();
                return i.getComputedStyle(e, null).getPropertyValue(t)
            }

            function b(e) {
                let t, i = e;
                if (i) {
                    t = 0;
                    while (null !== (i = i.previousSibling)) 1 === i.nodeType && (t += 1);
                    return t
                }
            }

            function w(e, t) {
                const i = [];
                let s = e.parentElement;
                while (s) t ? s.matches(t) && i.push(s) : i.push(s), s = s.parentElement;
                return i
            }

            function S(e, t) {
                function i(s) {
                    s.target === e && (t.call(e, s), e.removeEventListener("transitionend", i))
                }
                t && e.addEventListener("transitionend", i)
            }

            function T(e, t, i) {
                const a = (0, s.a)();
                return i ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
            }
        },
        292376: (e, t, i) => {
            i.d(t, {
                o5: () => p,
                tq: () => c
            });
            var s = i(166252),
                a = i(602262),
                n = i(996236),
                r = i(799762),
                l = i(162546);

            function o(e, t, i) {
                void 0 === e && (e = {});
                const s = [],
                    a = {
                        "container-start": [],
                        "container-end": [],
                        "wrapper-start": [],
                        "wrapper-end": []
                    },
                    n = (e, t) => {
                        Array.isArray(e) && e.forEach((e => {
                            const i = "symbol" === typeof e.type;
                            "default" === t && (t = "container-end"), i && e.children ? n(e.children, t) : !e.type || "SwiperSlide" !== e.type.name && "AsyncComponentWrapper" !== e.type.name ? a[t] && a[t].push(e) : s.push(e)
                        }))
                    };
                return Object.keys(e).forEach((t => {
                    if ("function" !== typeof e[t]) return;
                    const i = e[t]();
                    n(i, t)
                })), i.value = t.value, t.value = s, {
                    slides: s,
                    slots: a
                }
            }

            function d(e, t, i) {
                if (!i) return null;
                const a = e => {
                        let i = e;
                        return e < 0 ? i = t.length + e : i >= t.length && (i -= t.length), i
                    },
                    n = e.value.isHorizontal() ? {
                        [e.value.rtlTranslate ? "right" : "left"]: `${i.offset}px`
                    } : {
                        top: `${i.offset}px`
                    },
                    {
                        from: r,
                        to: l
                    } = i,
                    o = e.value.params.loop ? -t.length : 0,
                    d = e.value.params.loop ? 2 * t.length : t.length,
                    c = [];
                for (let s = o; s < d; s += 1) s >= r && s <= l && c.push(t[a(s)]);
                return c.map((t => (t.props || (t.props = {}), t.props.style || (t.props.style = {}), t.props.swiperRef = e, t.props.style = n, (0, s.h)(t.type, { ...t.props
                }, t.children))))
            }
            const c = {
                    name: "Swiper",
                    props: {
                        tag: {
                            type: String,
                            default: "div"
                        },
                        wrapperTag: {
                            type: String,
                            default: "div"
                        },
                        modules: {
                            type: Array,
                            default: void 0
                        },
                        init: {
                            type: Boolean,
                            default: void 0
                        },
                        direction: {
                            type: String,
                            default: void 0
                        },
                        oneWayMovement: {
                            type: Boolean,
                            default: void 0
                        },
                        touchEventsTarget: {
                            type: String,
                            default: void 0
                        },
                        initialSlide: {
                            type: Number,
                            default: void 0
                        },
                        speed: {
                            type: Number,
                            default: void 0
                        },
                        cssMode: {
                            type: Boolean,
                            default: void 0
                        },
                        updateOnWindowResize: {
                            type: Boolean,
                            default: void 0
                        },
                        resizeObserver: {
                            type: Boolean,
                            default: void 0
                        },
                        nested: {
                            type: Boolean,
                            default: void 0
                        },
                        focusableElements: {
                            type: String,
                            default: void 0
                        },
                        width: {
                            type: Number,
                            default: void 0
                        },
                        height: {
                            type: Number,
                            default: void 0
                        },
                        preventInteractionOnTransition: {
                            type: Boolean,
                            default: void 0
                        },
                        userAgent: {
                            type: String,
                            default: void 0
                        },
                        url: {
                            type: String,
                            default: void 0
                        },
                        edgeSwipeDetection: {
                            type: [Boolean, String],
                            default: void 0
                        },
                        edgeSwipeThreshold: {
                            type: Number,
                            default: void 0
                        },
                        autoHeight: {
                            type: Boolean,
                            default: void 0
                        },
                        setWrapperSize: {
                            type: Boolean,
                            default: void 0
                        },
                        virtualTranslate: {
                            type: Boolean,
                            default: void 0
                        },
                        effect: {
                            type: String,
                            default: void 0
                        },
                        breakpoints: {
                            type: Object,
                            default: void 0
                        },
                        spaceBetween: {
                            type: [Number, String],
                            default: void 0
                        },
                        slidesPerView: {
                            type: [Number, String],
                            default: void 0
                        },
                        maxBackfaceHiddenSlides: {
                            type: Number,
                            default: void 0
                        },
                        slidesPerGroup: {
                            type: Number,
                            default: void 0
                        },
                        slidesPerGroupSkip: {
                            type: Number,
                            default: void 0
                        },
                        slidesPerGroupAuto: {
                            type: Boolean,
                            default: void 0
                        },
                        centeredSlides: {
                            type: Boolean,
                            default: void 0
                        },
                        centeredSlidesBounds: {
                            type: Boolean,
                            default: void 0
                        },
                        slidesOffsetBefore: {
                            type: Number,
                            default: void 0
                        },
                        slidesOffsetAfter: {
                            type: Number,
                            default: void 0
                        },
                        normalizeSlideIndex: {
                            type: Boolean,
                            default: void 0
                        },
                        centerInsufficientSlides: {
                            type: Boolean,
                            default: void 0
                        },
                        watchOverflow: {
                            type: Boolean,
                            default: void 0
                        },
                        roundLengths: {
                            type: Boolean,
                            default: void 0
                        },
                        touchRatio: {
                            type: Number,
                            default: void 0
                        },
                        touchAngle: {
                            type: Number,
                            default: void 0
                        },
                        simulateTouch: {
                            type: Boolean,
                            default: void 0
                        },
                        shortSwipes: {
                            type: Boolean,
                            default: void 0
                        },
                        longSwipes: {
                            type: Boolean,
                            default: void 0
                        },
                        longSwipesRatio: {
                            type: Number,
                            default: void 0
                        },
                        longSwipesMs: {
                            type: Number,
                            default: void 0
                        },
                        followFinger: {
                            type: Boolean,
                            default: void 0
                        },
                        allowTouchMove: {
                            type: Boolean,
                            default: void 0
                        },
                        threshold: {
                            type: Number,
                            default: void 0
                        },
                        touchMoveStopPropagation: {
                            type: Boolean,
                            default: void 0
                        },
                        touchStartPreventDefault: {
                            type: Boolean,
                            default: void 0
                        },
                        touchStartForcePreventDefault: {
                            type: Boolean,
                            default: void 0
                        },
                        touchReleaseOnEdges: {
                            type: Boolean,
                            default: void 0
                        },
                        uniqueNavElements: {
                            type: Boolean,
                            default: void 0
                        },
                        resistance: {
                            type: Boolean,
                            default: void 0
                        },
                        resistanceRatio: {
                            type: Number,
                            default: void 0
                        },
                        watchSlidesProgress: {
                            type: Boolean,
                            default: void 0
                        },
                        grabCursor: {
                            type: Boolean,
                            default: void 0
                        },
                        preventClicks: {
                            type: Boolean,
                            default: void 0
                        },
                        preventClicksPropagation: {
                            type: Boolean,
                            default: void 0
                        },
                        slideToClickedSlide: {
                            type: Boolean,
                            default: void 0
                        },
                        loop: {
                            type: Boolean,
                            default: void 0
                        },
                        loopedSlides: {
                            type: Number,
                            default: void 0
                        },
                        loopPreventsSliding: {
                            type: Boolean,
                            default: void 0
                        },
                        rewind: {
                            type: Boolean,
                            default: void 0
                        },
                        allowSlidePrev: {
                            type: Boolean,
                            default: void 0
                        },
                        allowSlideNext: {
                            type: Boolean,
                            default: void 0
                        },
                        swipeHandler: {
                            type: Boolean,
                            default: void 0
                        },
                        noSwiping: {
                            type: Boolean,
                            default: void 0
                        },
                        noSwipingClass: {
                            type: String,
                            default: void 0
                        },
                        noSwipingSelector: {
                            type: String,
                            default: void 0
                        },
                        passiveListeners: {
                            type: Boolean,
                            default: void 0
                        },
                        containerModifierClass: {
                            type: String,
                            default: void 0
                        },
                        slideClass: {
                            type: String,
                            default: void 0
                        },
                        slideActiveClass: {
                            type: String,
                            default: void 0
                        },
                        slideVisibleClass: {
                            type: String,
                            default: void 0
                        },
                        slideNextClass: {
                            type: String,
                            default: void 0
                        },
                        slidePrevClass: {
                            type: String,
                            default: void 0
                        },
                        wrapperClass: {
                            type: String,
                            default: void 0
                        },
                        lazyPreloaderClass: {
                            type: String,
                            default: void 0
                        },
                        lazyPreloadPrevNext: {
                            type: Number,
                            default: void 0
                        },
                        runCallbacksOnInit: {
                            type: Boolean,
                            default: void 0
                        },
                        observer: {
                            type: Boolean,
                            default: void 0
                        },
                        observeParents: {
                            type: Boolean,
                            default: void 0
                        },
                        observeSlideChildren: {
                            type: Boolean,
                            default: void 0
                        },
                        a11y: {
                            type: [Boolean, Object],
                            default: void 0
                        },
                        autoplay: {
                            type: [Boolean, Object],
                            default: void 0
                        },
                        controller: {
                            type: Object,
                            default: void 0
                        },
                        coverflowEffect: {
                            type: Object,
                            default: void 0
                        },
                        cubeEffect: {
                            type: Object,
                            default: void 0
                        },
                        fadeEffect: {
                            type: Object,
                            default: void 0
                        },
                        flipEffect: {
                            type: Object,
                            default: void 0
                        },
                        creativeEffect: {
                            type: Object,
                            default: void 0
                        },
                        cardsEffect: {
                            type: Object,
                            default: void 0
                        },
                        hashNavigation: {
                            type: [Boolean, Object],
                            default: void 0
                        },
                        history: {
                            type: [Boolean, Object],
                            default: void 0
                        },
                        keyboard: {
                            type: [Boolean, Object],
                            default: void 0
                        },
                        mousewheel: {
                            type: [Boolean, Object],
                            default: void 0
                        },
                        navigation: {
                            type: [Boolean, Object],
                            default: void 0
                        },
                        pagination: {
                            type: [Boolean, Object],
                            default: void 0
                        },
                        parallax: {
                            type: [Boolean, Object],
                            default: void 0
                        },
                        scrollbar: {
                            type: [Boolean, Object],
                            default: void 0
                        },
                        thumbs: {
                            type: Object,
                            default: void 0
                        },
                        virtual: {
                            type: [Boolean, Object],
                            default: void 0
                        },
                        zoom: {
                            type: [Boolean, Object],
                            default: void 0
                        },
                        grid: {
                            type: [Object],
                            default: void 0
                        },
                        freeMode: {
                            type: [Boolean, Object],
                            default: void 0
                        },
                        enabled: {
                            type: Boolean,
                            default: void 0
                        }
                    },
                    emits: ["_beforeBreakpoint", "_containerClasses", "_slideClass", "_slideClasses", "_swiper", "_freeModeNoMomentumRelease", "activeIndexChange", "afterInit", "autoplay", "autoplayStart", "autoplayStop", "autoplayPause", "autoplayResume", "autoplayTimeLeft", "beforeDestroy", "beforeInit", "beforeLoopFix", "beforeResize", "beforeSlideChangeStart", "beforeTransitionStart", "breakpoint", "changeDirection", "click", "disable", "doubleTap", "doubleClick", "destroy", "enable", "fromEdge", "hashChange", "hashSet", "init", "keyPress", "lock", "loopFix", "momentumBounce", "navigationHide", "navigationShow", "navigationPrev", "navigationNext", "observerUpdate", "orientationchange", "paginationHide", "paginationRender", "paginationShow", "paginationUpdate", "progress", "reachBeginning", "reachEnd", "realIndexChange", "resize", "scroll", "scrollbarDragEnd", "scrollbarDragMove", "scrollbarDragStart", "setTransition", "setTranslate", "slideChange", "slideChangeTransitionEnd", "slideChangeTransitionStart", "slideNextTransitionEnd", "slideNextTransitionStart", "slidePrevTransitionEnd", "slidePrevTransitionStart", "slideResetTransitionStart", "slideResetTransitionEnd", "sliderMove", "sliderFirstMove", "slidesLengthChange", "slidesGridLengthChange", "snapGridLengthChange", "snapIndexChange", "swiper", "tap", "toEdge", "touchEnd", "touchMove", "touchMoveOpposite", "touchStart", "transitionEnd", "transitionStart", "unlock", "update", "virtualUpdate", "zoomChange"],
                    setup(e, t) {
                        let {
                            slots: i,
                            emit: c
                        } = t;
                        const {
                            tag: p,
                            wrapperTag: u
                        } = e, f = (0, a.iH)("swiper"), v = (0, a.iH)(null), m = (0, a.iH)(!1), h = (0, a.iH)(!1), g = (0, a.iH)(null), y = (0, a.iH)(null), b = (0, a.iH)(null), w = {
                            value: []
                        }, S = {
                            value: []
                        }, T = (0, a.iH)(null), x = (0, a.iH)(null), E = (0, a.iH)(null), C = (0, a.iH)(null), {
                            params: M,
                            passedParams: P
                        } = (0, r.g)(e, !1);
                        o(i, w, S), b.value = P, S.value = w.value;
                        const O = () => {
                            o(i, w, S), m.value = !0
                        };
                        M.onAny = function(e) {
                            for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
                            c(e, ...i)
                        }, Object.assign(M.on, {
                            _beforeBreakpoint: O,
                            _containerClasses(e, t) {
                                f.value = t
                            }
                        });
                        const k = { ...M
                        };
                        if (delete k.wrapperClass, y.value = new n.S(k), y.value.virtual && y.value.params.virtual.enabled) {
                            y.value.virtual.slides = w.value;
                            const e = {
                                cache: !1,
                                slides: w.value,
                                renderExternal: e => {
                                    v.value = e
                                },
                                renderExternalUpdate: !1
                            };
                            (0, l.e)(y.value.params.virtual, e), (0, l.e)(y.value.originalParams.virtual, e)
                        }

                        function L(e) {
                            return M.virtual ? d(y, e, v.value) : (e.forEach(((e, t) => {
                                e.props || (e.props = {}), e.props.swiperRef = y, e.props.swiperSlideIndex = t
                            })), e)
                        }
                        return (0, s.ic)((() => {
                            !h.value && y.value && (y.value.emitSlidesClasses(), h.value = !0);
                            const {
                                passedParams: t
                            } = (0, r.g)(e, !1), i = (0, r.a)(t, b.value, w.value, S.value, (e => e.props && e.props.key));
                            b.value = t, (i.length || m.value) && y.value && !y.value.destroyed && (0, l.u)({
                                swiper: y.value,
                                slides: w.value,
                                passedParams: t,
                                changedParams: i,
                                nextEl: T.value,
                                prevEl: x.value,
                                scrollbarEl: C.value,
                                paginationEl: E.value
                            }), m.value = !1
                        })), (0, s.JJ)("swiper", y), (0, s.YP)(v, (() => {
                            (0, s.Y3)((() => {
                                (0, r.u)(y.value)
                            }))
                        })), (0, s.bv)((() => {
                            g.value && ((0, r.m)({
                                el: g.value,
                                nextEl: T.value,
                                prevEl: x.value,
                                paginationEl: E.value,
                                scrollbarEl: C.value,
                                swiper: y.value
                            }, M), c("swiper", y.value))
                        })), (0, s.Jd)((() => {
                            y.value && !y.value.destroyed && y.value.destroy(!0, !1)
                        })), () => {
                            const {
                                slides: t,
                                slots: a
                            } = o(i, w, S);
                            return (0, s.h)(p, {
                                ref: g,
                                class: (0, l.d)(f.value)
                            }, [a["container-start"], (0, s.h)(u, {
                                class: (0, l.w)(M.wrapperClass)
                            }, [a["wrapper-start"], L(t), a["wrapper-end"]]), (0, l.n)(e) && [(0, s.h)("div", {
                                ref: x,
                                class: "swiper-button-prev"
                            }), (0, s.h)("div", {
                                ref: T,
                                class: "swiper-button-next"
                            })], (0, l.b)(e) && (0, s.h)("div", {
                                ref: C,
                                class: "swiper-scrollbar"
                            }), (0, l.a)(e) && (0, s.h)("div", {
                                ref: E,
                                class: "swiper-pagination"
                            }), a["container-end"]])
                        }
                    }
                },
                p = {
                    name: "SwiperSlide",
                    props: {
                        tag: {
                            type: String,
                            default: "div"
                        },
                        swiperRef: {
                            type: Object,
                            required: !1
                        },
                        swiperSlideIndex: {
                            type: Number,
                            default: void 0,
                            required: !1
                        },
                        zoom: {
                            type: Boolean,
                            default: void 0,
                            required: !1
                        },
                        lazy: {
                            type: Boolean,
                            default: !1,
                            required: !1
                        },
                        virtualIndex: {
                            type: [String, Number],
                            default: void 0
                        }
                    },
                    setup(e, t) {
                        let {
                            slots: i
                        } = t, n = !1;
                        const {
                            swiperRef: r
                        } = e, o = (0, a.iH)(null), d = (0, a.iH)("swiper-slide"), c = (0, a.iH)(!1);

                        function p(e, t, i) {
                            t === o.value && (d.value = i)
                        }(0, s.bv)((() => {
                            r && r.value && (r.value.on("_slideClass", p), n = !0)
                        })), (0, s.Xn)((() => {
                            !n && r && r.value && (r.value.on("_slideClass", p), n = !0)
                        })), (0, s.ic)((() => {
                            o.value && r && r.value && ("undefined" !== typeof e.swiperSlideIndex && (o.value.swiperSlideIndex = e.swiperSlideIndex), r.value.destroyed && "swiper-slide" !== d.value && (d.value = "swiper-slide"))
                        })), (0, s.Jd)((() => {
                            r && r.value && r.value.off("_slideClass", p)
                        }));
                        const u = (0, s.Fl)((() => ({
                            isActive: d.value.indexOf("swiper-slide-active") >= 0,
                            isVisible: d.value.indexOf("swiper-slide-visible") >= 0,
                            isPrev: d.value.indexOf("swiper-slide-prev") >= 0,
                            isNext: d.value.indexOf("swiper-slide-next") >= 0
                        })));
                        (0, s.JJ)("swiperSlide", u);
                        const f = () => {
                            c.value = !0
                        };
                        return () => (0, s.h)(e.tag, {
                            class: (0, l.d)(`${d.value}`),
                            ref: o,
                            "data-swiper-slide-index": "undefined" === typeof e.virtualIndex && r && r.value && r.value.params.loop ? e.swiperSlideIndex : e.virtualIndex,
                            onLoadCapture: f
                        }, e.zoom ? (0, s.h)("div", {
                            class: "swiper-zoom-container",
                            "data-swiper-zoom": "number" === typeof e.zoom ? e.zoom : void 0
                        }, [i.default && i.default(u.value), e.lazy && !c.value && (0, s.h)("div", {
                            class: "swiper-lazy-preloader"
                        })]) : [i.default && i.default(u.value), e.lazy && !c.value && (0, s.h)("div", {
                            class: "swiper-lazy-preloader"
                        })])
                    }
                }
        }
    }
]);