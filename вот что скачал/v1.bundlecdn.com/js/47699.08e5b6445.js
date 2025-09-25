(self["webpackChunk_1win_frontend_main"] = self["webpackChunk_1win_frontend_main"] || []).push([
    [47699], {
        710014: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => y
            });
            var n = i(166252),
                a = i(3577),
                s = i(602262),
                o = i(753154),
                r = i(845919),
                l = i(88631);

            function c(e, t) {
                return (0, n.wg)(), (0, n.iD)("div", {
                    class: (0, a.C_)(e.$style.root)
                }, [(0, n.WI)(e.$slots, "default")], 2)
            }
            const d = {
                root: "TvImagePlaceholder_root_Wiva1",
                loading: "TvImagePlaceholder_loading_JHrva"
            };
            var p = i(348118);
            const m = {},
                u = {};
            u["$style"] = d;
            const g = (0, p.Z)(m, [
                    ["render", c],
                    ["__cssModules", u]
                ]),
                h = g,
                v = (0, n.aZ)({
                    __name: "TvFilmImage",
                    props: {
                        film: {},
                        unfixedSize: {
                            type: Boolean
                        },
                        isMobile: {
                            type: Boolean
                        },
                        poster: {
                            type: Boolean
                        }
                    },
                    setup(e) {
                        const t = e,
                            {
                                TV_DESKTOP_CARD: i,
                                TV_MOBILE_CARD: c,
                                TV_DESKTOP_POSTER: d,
                                TV_MOBILE_POSTER: p
                            } = r.ResponsivePictureTypesEnum,
                            m = (0, s.iH)("loading"),
                            u = (0, n.Fl)((() => t.poster ? t.isMobile ? p : d : t.isMobile ? c : i)),
                            g = (0, n.Fl)((() => t.unfixedSize ? void 0 : {
                                height: t.isMobile ? "117px" : "192px",
                                width: t.isMobile ? "79px" : "130px"
                            })),
                            v = () => {
                                m.value = "error"
                            },
                            b = () => {
                                m.value = "ready"
                            };
                        return (e, t) => ((0, n.wg)(), (0, n.iD)("div", {
                            class: (0, a.C_)("loading" === m.value ? e.$style.rootLoading : e.$style.root),
                            style: (0, a.j5)(g.value)
                        }, ["loading" !== m.value && e.film ? (0, n.kq)("", !0) : ((0, n.wg)(), (0, n.j4)(h, {
                            key: 0
                        })), e.film ? ((0, n.wg)(), (0, n.iD)(n.HY, {
                            key: 1
                        }, ["error" === m.value ? ((0, n.wg)(), (0, n.iD)("div", {
                            key: 0,
                            class: (0, a.C_)(e.$style.text)
                        }, (0, a.zw)(e.film.name), 3)) : ((0, n.wg)(), (0, n.j4)(o.Z, {
                            key: 1,
                            class: (0, a.C_)(e.$style.picture),
                            "fallback-image-dpr": 2,
                            type: u.value,
                            src: (0, s.SU)(l.m)(e.film),
                            onError: v,
                            onLoad: b
                        }, null, 8, ["class", "type", "src"]))], 64)) : (0, n.kq)("", !0)], 6))
                    }
                }),
                b = {
                    root: "TvFilmImage_root_dVl6o",
                    rootLoading: "TvFilmImage_rootLoading_n54a_ TvFilmImage_root_dVl6o",
                    picture: "TvFilmImage_picture_vTg4M",
                    text: "TvFilmImage_text_5YcSk"
                },
                _ = {};
            _["$style"] = b;
            const f = (0, p.Z)(v, [
                    ["__cssModules", _]
                ]),
                y = f
        },
        747408: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => $
            });
            var n = i(166252),
                a = i(749963),
                s = i(3577),
                o = i(602262),
                r = i(715560),
                l = i(292376),
                c = i(322201),
                d = i(51165),
                p = i(305653),
                m = i(173870),
                u = i(710014);
            const g = (0, n.aZ)({
                    __name: "TvSliderCardText",
                    props: {
                        film: {}
                    },
                    setup(e) {
                        return (e, t) => {
                            var i, a;
                            return (0, n.wg)(), (0, n.iD)("div", {
                                class: (0, s.C_)(e.$style.root)
                            }, (0, s.zw)(null != (a = null == (i = e.film) ? void 0 : i.name) ? a : " "), 3)
                        }
                    }
                }),
                h = {
                    root: "TvSliderCardText_root__ZghG"
                };
            var v = i(348118);
            const b = {};
            b["$style"] = h;
            const _ = (0, v.Z)(g, [
                    ["__cssModules", b]
                ]),
                f = _,
                y = (0, n.aZ)({
                    __name: "TvSliderCard",
                    props: {
                        film: {},
                        isMobile: {
                            type: Boolean
                        }
                    },
                    setup(e) {
                        return (e, t) => ((0, n.wg)(), (0, n.iD)("div", {
                            class: (0, s.C_)(e.isMobile ? e.$style.root : e.$style.rootDesktop)
                        }, [(0, n.Wm)(u.Z, {
                            film: e.film,
                            "is-mobile": e.isMobile
                        }, null, 8, ["film", "is-mobile"]), e.isMobile ? (0, n.kq)("", !0) : ((0, n.wg)(), (0, n.j4)(f, {
                            key: 0,
                            class: (0, s.C_)(e.$style.title),
                            film: e.film
                        }, null, 8, ["class", "film"]))], 2))
                    }
                }),
                w = {
                    root: "TvSliderCard_root_iSqLK",
                    rootDesktop: "TvSliderCard_rootDesktop_S36yu TvSliderCard_root_iSqLK",
                    title: "TvSliderCard_title_uPfwp"
                },
                S = {};
            S["$style"] = w;
            const k = (0, v.Z)(y, [
                    ["__cssModules", S]
                ]),
                C = k,
                T = (0, n.aZ)({
                    __name: "TvSlider",
                    props: {
                        isMobile: {
                            type: Boolean
                        }
                    },
                    emits: ["filmClick", "init"],
                    setup(e, {
                        emit: t
                    }) {
                        (0, a.sj)((e => ({
                            "876d63c2": _.value
                        })));
                        const i = t,
                            u = e,
                            g = (0, c.tv)(),
                            {
                                films: h
                            } = (0, d.dX)(),
                            v = (0, n.Fl)((() => {
                                var e;
                                return null != (e = h.value) ? e : Array.from({
                                    length: 20
                                }, (() => {}))
                            })),
                            b = (e, t) => {
                                e && (i("filmClick", e, t), g.push({
                                    name: u.isMobile ? m.Z.TV_FILM : p.Z.TV_FILM,
                                    params: {
                                        filmId: e.id
                                    }
                                }))
                            },
                            _ = (0, n.Fl)((() => u.isMobile ? 0 : "10px 0"));
                        return (e, t) => ((0, n.wg)(), (0, n.iD)("div", {
                            class: (0, s.C_)(e.$style.root)
                        }, [(0, n.Wm)((0, o.SU)(l.tq), {
                            "free-mode": "",
                            "slides-per-view": "auto",
                            modules: [(0, o.SU)(r.Rv)],
                            "slides-offset-after": e.isMobile ? 15 : 20,
                            "slides-offset-before": e.isMobile ? 15 : 20,
                            "space-between": e.isMobile ? 10 : 20,
                            onSwiper: t[0] || (t[0] = t => e.$emit("init", t))
                        }, {
                            default: (0, n.w5)((() => [((0, n.wg)(!0), (0, n.iD)(n.HY, null, (0, n.Ko)(v.value, ((t, i) => {
                                var a;
                                return (0, n.wg)(), (0, n.j4)((0, o.SU)(l.o5), {
                                    key: null != (a = null == t ? void 0 : t.id) ? a : i
                                }, {
                                    default: (0, n.w5)((() => [(0, n.Wm)(C, {
                                        "is-mobile": e.isMobile,
                                        film: t,
                                        onClick: e => b(t, i)
                                    }, null, 8, ["is-mobile", "film", "onClick"])])),
                                    _: 2
                                }, 1024)
                            })), 128))])),
                            _: 1
                        }, 8, ["modules", "slides-offset-after", "slides-offset-before", "space-between"])], 2))
                    }
                }),
                P = {
                    root: "TvSlider_root_OU1YV"
                },
                B = {};
            B["$style"] = P;
            const F = (0, v.Z)(T, [
                    ["__cssModules", B]
                ]),
                $ = F
        },
        642520: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => D
            });
            var n = i(166252),
                a = i(436334),
                s = i(528716),
                o = i(3577),
                r = i(602262),
                l = i(934405),
                c = i(966309),
                d = i(749963),
                p = i(126538),
                m = i(137101),
                u = i(377823),
                g = Object.defineProperty,
                h = Object.defineProperties,
                v = Object.getOwnPropertyDescriptors,
                b = Object.getOwnPropertySymbols,
                _ = Object.prototype.hasOwnProperty,
                f = Object.prototype.propertyIsEnumerable,
                y = (e, t, i) => t in e ? g(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i
                }) : e[t] = i,
                w = (e, t) => {
                    for (var i in t || (t = {})) _.call(t, i) && y(e, i, t[i]);
                    if (b)
                        for (var i of b(t)) f.call(t, i) && y(e, i, t[i]);
                    return e
                },
                S = (e, t) => h(e, v(t));
            const k = ["data-pw"],
                C = ["data-pw"],
                T = ["data-pw"],
                P = ["data-pw"],
                B = ["data-pw"],
                F = (0, n.aZ)({
                    __name: "BaseCarousel",
                    props: {
                        banners: {},
                        pictureType: {},
                        delay: {
                            default: 8e3
                        },
                        dataPw: {
                            default: void 0
                        }
                    },
                    emits: ["arrow-click", "slide-click", "slide-visible"],
                    setup(e, {
                        emit: t
                    }) {
                        const i = (0, c.KQJ)(),
                            a = (0, m.d)(),
                            s = (0, d.fb)(),
                            g = (0, r.iH)(0),
                            h = (0, r.iH)(0),
                            v = (0, r.iH)(!1),
                            b = (0, r.iH)(!1),
                            _ = (0, r.iH)(null);
                        let f, y = !1;
                        const F = e,
                            $ = t,
                            E = e => {
                                if ((0, l.Kn)(F.dataPw)) return F.dataPw[e]
                            },
                            I = (0, n.Fl)((() => 1 === F.banners.length)),
                            U = e => {
                                const t = g.value + e;
                                return t < 0 ? F.banners.length - 1 : t >= F.banners.length ? 0 : t
                            },
                            L = (e, t = !1) => {
                                var i, n;
                                v.value || (v.value = !0, b.value = !0, _.value = e, h.value = U(e), t && $("arrow-click", {
                                    delta: e,
                                    name: null == (i = F.banners[g.value]) ? void 0 : i.bannerId,
                                    position: g.value,
                                    title: null == (n = F.banners[g.value]) ? void 0 : n.headingText
                                }))
                            },
                            O = () => {
                                clearInterval(f)
                            },
                            A = () => {
                                y || (O(), 0 === F.banners.length || I.value || (f = setInterval((() => {
                                    L(1)
                                }), F.delay)))
                            },
                            D = (0, n.Fl)((() => F.banners[g.value])),
                            j = (0, n.Fl)((() => {
                                if (I.value) return [F.banners[0]];
                                if (2 === F.banners.length) {
                                    const e = F.banners[U(1)];
                                    return e ? [S(w({}, e), {
                                        bannerId: `${e.bannerId}_clone`
                                    }), D.value, e] : []
                                }
                                const e = [U(-1), g.value, U(1)];
                                return e.map((e => F.banners[e])).filter((e => !!e))
                            })),
                            x = (0, n.Fl)((() => {
                                if (I.value) return s.trackSingle;
                                let e;
                                return _.value && (e = _.value > 0 ? s.trackTranslatedNext : s.trackTranslatedPrev), [s.track, b.value && s.trackTransitioned, e]
                            })),
                            Z = (0, n.Fl)((() => F.banners.map((e => e.bannerId)))),
                            M = () => {
                                b.value = !1, g.value = h.value, _.value = null, v.value = !1
                            },
                            z = () => {
                                y = !0, O()
                            },
                            N = () => {
                                y = !1, A()
                            },
                            R = () => {
                                "visible" === document.visibilityState ? A() : O()
                            },
                            W = () => {
                                (0, u.Wi)("banners")
                            },
                            V = e => {
                                $("slide-click", {
                                    name: e.bannerId,
                                    position: g.value,
                                    title: e.headingText,
                                    primaryButtonText: e.primaryButtonText
                                })
                            },
                            q = (0, r.iH)(!1),
                            H = (0, r.iH)(),
                            G = new IntersectionObserver((e => {
                                q.value = !!e[0] && e[0].isIntersecting
                            }), {
                                rootMargin: "0px",
                                threshold: .5
                            }),
                            K = (0, n.Fl)((() => q.value && !a.isOpen && D.value !== H.value && D.value));
                        return (0, n.YP)(K, (e => {
                            e && (H.value = e, $("slide-visible", {
                                name: e.bannerId,
                                position: g.value,
                                title: e.headingText
                            }))
                        })), (0, n.YP)(F.banners, A, {
                            immediate: !0
                        }), (0, n.YP)(Z, (() => {
                            g.value = 0
                        })), (0, n.bv)((() => {
                            document.addEventListener("visibilitychange", R), G.observe(i.value)
                        })), (0, n.Jd)((() => {
                            document.removeEventListener("visibilitychange", R), G.unobserve(i.value), O()
                        })), (e, t) => ((0, n.wg)(), (0, n.iD)("div", {
                            class: (0, o.C_)((0, r.SU)(s).root),
                            "data-pw": "string" === typeof e.dataPw ? e.dataPw : void 0,
                            onMouseenter: z,
                            onMouseleave: N
                        }, [(0, n._)("div", {
                            class: (0, o.C_)((0, r.SU)(s).sliderContainer),
                            "data-pw": E("containerSlide")
                        }, [e.banners.length > 0 ? ((0, n.wg)(), (0, n.iD)("div", {
                            key: 0,
                            class: (0, o.C_)(x.value),
                            onTransitionend: M
                        }, [((0, n.wg)(!0), (0, n.iD)(n.HY, null, (0, n.Ko)(j.value, (t => ((0, n.wg)(), (0, n.j4)(p.Z, {
                            id: "loadDurationBanners",
                            key: t.bannerId,
                            class: (0, o.C_)((0, r.SU)(s).slide),
                            slide: t,
                            "picture-type": e.pictureType,
                            "data-pw": {
                                button: E("actions")
                            },
                            onLoaded: W,
                            onClickMainButton: V
                        }, null, 8, ["class", "slide", "picture-type", "data-pw"])))), 128))], 34)) : (0, n.kq)("", !0)], 10, C), e.banners.length > 1 ? ((0, n.wg)(), (0, n.iD)("div", {
                            key: 0,
                            class: (0, o.C_)((0, r.SU)(s).buttonsContainer),
                            "data-pw": E("navigationArrows")
                        }, [(0, n._)("div", {
                            class: (0, o.C_)((0, r.SU)(s).buttonsBackground)
                        }, [(0, n._)("button", {
                            type: "button",
                            class: (0, o.C_)((0, r.SU)(s).button),
                            "data-pw": E("prev"),
                            onClick: t[0] || (t[0] = e => L(-1, !0))
                        }, [(0, n._)("span", {
                            class: (0, o.C_)((0, r.SU)(s).buttonAngleBefore)
                        }, null, 2)], 10, P), (0, n._)("button", {
                            type: "button",
                            class: (0, o.C_)((0, r.SU)(s).button),
                            "data-pw": E("next"),
                            onClick: t[1] || (t[1] = e => L(1, !0))
                        }, [(0, n._)("span", {
                            class: (0, o.C_)((0, r.SU)(s).buttonAngle)
                        }, null, 2)], 10, B)], 2)], 10, T)) : (0, n.kq)("", !0)], 42, k))
                    }
                }),
                $ = {
                    sliderContainer: "BaseCarousel_sliderContainer_bxaUW",
                    trackSingle: "BaseCarousel_trackSingle_zUfSv",
                    track: "BaseCarousel_track_VMLaY",
                    trackTransitioned: "BaseCarousel_trackTransitioned_Q2Wbu",
                    trackTranslatedNext: "BaseCarousel_trackTranslatedNext_MKsy4",
                    trackTranslatedPrev: "BaseCarousel_trackTranslatedPrev_kJA_r",
                    slide: "BaseCarousel_slide_srQjW",
                    buttonsContainer: "BaseCarousel_buttonsContainer_q19V2",
                    root: "BaseCarousel_root_JjqM3",
                    buttonsBackground: "BaseCarousel_buttonsBackground__xySZ",
                    button: "BaseCarousel_button_zsH0C",
                    buttonAngle: "BaseCarousel_buttonAngle_iXRrz",
                    buttonAngleBefore: "BaseCarousel_buttonAngleBefore_Ecrg3 BaseCarousel_buttonAngle_iXRrz"
                };
            var E = i(348118);
            const I = {};
            I["$style"] = $;
            const U = (0, E.Z)(F, [
                    ["__cssModules", I]
                ]),
                L = U,
                O = (0, n.aZ)({
                    __name: "BannerCarousel",
                    props: {
                        slideType: {
                            default: s.TD.DEFAULT
                        },
                        bannersType: {},
                        bannersFallback: {
                            default: s.$.MAIN
                        },
                        pictureType: {},
                        sectionName: {
                            default: void 0
                        }
                    },
                    setup(e) {
                        return (e, t) => ((0, n.wg)(), (0, n.j4)(a.Z, {
                            "banners-type": e.bannersType,
                            "banners-fallback": e.bannersFallback,
                            "section-name": e.sectionName
                        }, {
                            default: (0, n.w5)((({
                                banners: t,
                                onArrowClick: i,
                                onSlideClick: a,
                                onSlideVisible: s
                            }) => [(0, n.Wm)(L, {
                                banners: t,
                                "slide-type": e.slideType,
                                "picture-type": e.pictureType,
                                "data-pw": {
                                    containerSlide: "TOP-PANEL-ADV-SLIDER",
                                    actions: "TOP-PANEL-ADV-SLIDER-SLIDE-BUTTONS",
                                    navigationArrows: "TOP-PANEL-ADV-SLIDER-BUTTONS-CONTAINER",
                                    prev: "TOP-PANEL-ADV-SLIDER-BEFORE-BUTTON",
                                    next: "TOP-PANEL-ADV-SLIDER-NEXT-BUTTON"
                                },
                                onArrowClick: i,
                                onSlideClick: a,
                                onSlideVisible: s
                            }, null, 8, ["banners", "slide-type", "picture-type", "onArrowClick", "onSlideClick", "onSlideVisible"])])),
                            _: 1
                        }, 8, ["banners-type", "banners-fallback", "section-name"]))
                    }
                }),
                A = O,
                D = A
        },
        833045: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                default: () => Zi
            });
            var n = i(166252),
                a = i(3577);
            const s = {
                    class: "home__header"
                },
                o = {
                    class: "home__header-content"
                },
                r = {
                    class: "home__header-carousel"
                },
                l = {
                    class: "home__header-promo"
                },
                c = ["src"],
                d = {
                    class: "home__header-promo"
                },
                p = ["src"],
                m = {
                    class: "home__header-promo"
                },
                u = {
                    class: "home__header-promo"
                },
                g = {
                    key: 1,
                    class: "home__header-promo"
                },
                h = {
                    class: "home__promos home__section"
                },
                v = {
                    class: "home__section-list"
                };

            function b(e, t, i, b, _, f) {
                var y, w;
                const S = (0, n.up)("BannerCarousel"),
                    k = (0, n.up)("BonusBanner"),
                    C = (0, n.up)("VScaler"),
                    T = (0, n.up)("VSlide"),
                    P = (0, n.up)("BonusFreespins"),
                    B = (0, n.up)("BonusFreespinsHelper"),
                    F = (0, n.up)("PromoCard");
                return (0, n.wg)(), (0, n.iD)("div", {
                    class: "page-home",
                    style: (0, a.j5)(f.style)
                }, [(0, n._)("div", s, [(0, n._)("div", o, [(0, n._)("div", r, [(0, n.Wm)(S, {
                    "picture-type": e.$options.ResponsivePictureTypesEnum.BANNER_DESKTOP_MAIN,
                    "banners-type": e.$options.BannerType.MAIN,
                    "slide-type": e.$options.SlideType.DEFAULT,
                    "section-name": f.SectionName.MAIN_PAGE
                }, null, 8, ["picture-type", "banners-type", "slide-type", "section-name"])]), "kz" === e.$options.appConfig.type ? ((0, n.wg)(), (0, n.iD)(n.HY, {
                    key: 0
                }, [(0, n._)("div", l, [(0, n._)("img", {
                    class: "home__empty-slide",
                    src: f.slideKzCyber
                }, null, 8, c)]), (0, n._)("div", d, [(0, n._)("img", {
                    class: "home__empty-slide",
                    src: f.slideKzLine
                }, null, 8, p)])], 64)) : ((0, n.wg)(), (0, n.iD)(n.HY, {
                    key: 1
                }, [(0, n._)("div", m, [f.isNewBonusBalance && b.freespinStore.showPromo ? ((0, n.wg)(), (0, n.j4)(C, {
                    key: 0,
                    height: 320
                }, {
                    default: (0, n.w5)((() => [(0, n.Wm)(k)])),
                    _: 1
                })) : ((0, n.wg)(), (0, n.j4)(T, {
                    key: 1,
                    slide: f.bannerCashback,
                    "picture-type": e.$options.ResponsivePictureTypesEnum.BANNER_DESKTOP_MAIN,
                    type: e.$options.SlideType.SMALL,
                    formats: ["png"],
                    onClickMainButton: t[0] || (t[0] = e => f.onBannerStaticClick("cashback 30%", 0))
                }, null, 8, ["slide", "picture-type", "type"]))]), b.freespinStore.showPromo ? ((0, n.wg)(), (0, n.j4)(B, {
                    key: 0
                }, {
                    default: (0, n.w5)((({
                        hidePromo: e
                    }) => [(0, n._)("div", u, [(0, n.Wm)(C, {
                        height: 320
                    }, {
                        default: (0, n.w5)((() => [(0, n.Wm)(P, {
                            class: "home__bonus-freespins",
                            onHide: e
                        }, null, 8, ["onHide"])])),
                        _: 2
                    }, 1024)])])),
                    _: 1
                })) : ((0, n.wg)(), (0, n.iD)("div", g, [f.isNewBonusBalance ? ((0, n.wg)(), (0, n.j4)(C, {
                    key: 0,
                    height: 320
                }, {
                    default: (0, n.w5)((() => [(0, n.Wm)(k)])),
                    _: 1
                })) : ((0, n.wg)(), (0, n.j4)(T, {
                    key: 1,
                    slide: f.bannerBonusDeposit,
                    "picture-type": e.$options.ResponsivePictureTypesEnum.BANNER_DESKTOP_MAIN,
                    type: e.$options.SlideType.SMALL,
                    onClickMainButton: t[1] || (t[1] = e => f.onBannerStaticClick("bonus 500%", 1))
                }, null, 8, ["slide", "picture-type", "type"]))]))], 64))])]), (0, n._)("div", h, [e.$options.appConfig.modules.tvBet ? ((0, n.wg)(), (0, n.j4)(F, {
                    key: 0,
                    class: "home__promo-card",
                    heading: "TVBET",
                    subheading: e.lang.home.promoCard.tvBet.subheading,
                    "sprite-p-n-g": f.sprites[1].png,
                    "sprite-w-e-b-p": f.sprites[1].webp,
                    "static-frame": f.staticFrames[1],
                    to: {
                        name: e.$options.ROUTE_NAME.TVBET
                    }
                }, null, 8, ["subheading", "sprite-p-n-g", "sprite-w-e-b-p", "static-frame", "to"])) : (0, n.kq)("", !0), e.$options.appConfig.modules.casino ? ((0, n.wg)(), (0, n.j4)(F, {
                    key: 1,
                    class: "home__promo-card",
                    heading: e.lang.home.promoCard.casino.heading,
                    subheading: e.lang.home.promoCard.casino.subheading,
                    "sprite-p-n-g": f.sprites[2].png,
                    "sprite-w-e-b-p": f.sprites[2].webp,
                    "static-frame": f.staticFrames[2],
                    to: {
                        name: e.$options.ROUTE_NAME.CASINO
                    },
                    "disable-animation": f.sprites[2].disabled
                }, null, 8, ["heading", "subheading", "sprite-p-n-g", "sprite-w-e-b-p", "static-frame", "to", "disable-animation"])) : (0, n.kq)("", !0), (null == (y = e.$options.appConfig.modules.casino) ? void 0 : y.liveGames) && (null == (w = e.$options.appConfig.modules.casino) ? void 0 : w.categories.live) ? ((0, n.wg)(), (0, n.j4)(F, {
                    key: 2,
                    class: "home__promo-card",
                    heading: e.lang.home.promoCard.liveGames.heading,
                    subheading: e.lang.home.promoCard.liveGames.subheading,
                    "sprite-p-n-g": f.sprites[4].png,
                    "sprite-w-e-b-p": f.sprites[4].webp,
                    "static-frame": f.staticFrames[4],
                    to: {
                        name: e.$options.ROUTE_NAME.CASINO,
                        params: {
                            preset: e.$options.CasinoPresetEnum.LIVE_GAMES
                        }
                    },
                    "disable-animation": f.sprites[4].disabled
                }, null, 8, ["heading", "subheading", "sprite-p-n-g", "sprite-w-e-b-p", "static-frame", "to", "disable-animation"])) : (0, n.kq)("", !0), e.$options.appConfig.modules.poker ? ((0, n.wg)(), (0, n.j4)(F, {
                    key: 3,
                    class: "home__promo-card",
                    heading: "Poker",
                    subheading: e.lang.home.promoCard.poker.subheading,
                    "sprite-p-n-g": f.sprites[5].png,
                    "sprite-w-e-b-p": f.sprites[5].webp,
                    "static-frame": f.staticFrames[5],
                    to: {
                        name: e.$options.ROUTE_NAME.POKER
                    }
                }, null, 8, ["subheading", "sprite-p-n-g", "sprite-w-e-b-p", "static-frame", "to"])) : (0, n.kq)("", !0)]), (0, n._)("ul", v, [((0, n.wg)(!0), (0, n.iD)(n.HY, null, (0, n.Ko)(f.components, (e => ((0, n.wg)(), (0, n.iD)("li", {
                    key: e.key,
                    class: "home__section-list-item",
                    style: (0, a.j5)(e.width ? {
                        flex: `0 0 ${e.width}%`,
                        maxWidth: `${e.width}%`
                    } : null)
                }, [((0, n.wg)(), (0, n.j4)((0, n.LL)(e.component), (0, n.dG)({
                    class: "home__section",
                    style: e.style,
                    ref_for: !0
                }, e.props), null, 16, ["style"]))], 4)))), 128))])], 4)
            }
            var _ = i(280894),
                f = i(709251),
                y = i.n(f),
                w = i(850779),
                S = i.n(w),
                k = i(923454),
                C = i.n(k),
                T = i(771773),
                P = i.n(T),
                B = i(691337),
                F = i.n(B),
                $ = i(488815),
                E = i.n($),
                I = i(995441),
                U = i(810979),
                L = i(541272),
                O = i(459153),
                A = i(126538),
                D = i(99290),
                j = i(354648),
                x = i(432519),
                Z = i(528716),
                M = i(439670),
                z = i(945436),
                N = i(523016),
                R = i(878417),
                W = i(845919),
                V = i(112808),
                q = (i(600285), i(171385)),
                H = i.n(q),
                G = i(665530),
                K = i.n(G),
                Y = i(312610),
                J = i.n(Y),
                X = i(339281),
                Q = i.n(X),
                ee = i(590509),
                te = i.n(ee),
                ie = i(504339),
                ne = i.n(ie),
                ae = (i(484038), i(104477)),
                se = i.n(ae),
                oe = i(80298),
                re = i.n(oe),
                le = i(531884),
                ce = i.n(le),
                de = i(310851),
                pe = i.n(de),
                me = i(140252),
                ue = i.n(me),
                ge = i(42003),
                he = i.n(ge),
                ve = i(642520);
            const be = {
                    class: "promo-card__heading"
                },
                _e = {
                    class: "promo-card__message"
                },
                fe = {
                    class: "promo-card__pic-wrapper"
                },
                ye = {
                    class: "promo-card__pic-holder"
                },
                we = ["width", "height"];

            function Se(e, t, i, s, o, r) {
                const l = (0, n.up)("router-link");
                return (0, n.wg)(), (0, n.j4)(l, {
                    to: i.to
                }, {
                    default: (0, n.w5)((() => [(0, n._)("div", {
                        class: "promo-card",
                        onMouseover: t[0] || (t[0] = (...e) => r.onHover && r.onHover(...e)),
                        onMouseleave: t[1] || (t[1] = (...e) => r.onLeave && r.onLeave(...e)),
                        onClick: t[2] || (t[2] = t => e.$emit("click"))
                    }, [(0, n._)("div", be, (0, a.zw)(i.heading), 1), (0, n._)("div", _e, (0, a.zw)(i.subheading), 1), (0, n._)("div", fe, [(0, n._)("div", ye, [(0, n._)("canvas", {
                        ref: "canvas",
                        class: "promo-card__pic",
                        width: r.canvasSize,
                        height: r.canvasSize
                    }, null, 8, we)])])], 32)])),
                    _: 1
                }, 8, ["to"])
            }
            class ke {
                constructor({
                    spriteURL: e,
                    staticFrameURL: t = null,
                    totalFrames: i,
                    frameSize: n,
                    canvas: a,
                    frameDirection: s = "vertical",
                    onLoadSprite: o = (() => {})
                }) {
                    this._loop = this._loop.bind(this), this._loopIteration = 0, this._spriteReady = !1, this._staticFrameReady = !1, this._currentFrameIndex = 0, this._frameNumber = 0, this._animationStatus = ke.AnimationStatus.STOPPED, this._frameSize = n, this._totalFrames = i, this._canvas = a, this._canvasCtx = a.getContext("2d"), this._frameDirection = ["vertical", "horizontal"].includes(s) ? s : "vertical", t && (this._staticFrame = new Image, this._staticFrame.src = t, this._staticFrame.addEventListener("load", (() => {
                        this._staticFrameReady = !0, this._render()
                    }), {
                        once: !0
                    })), this._sprite = new Image, this._sprite.src = e, this._sprite.addEventListener("load", (() => {
                        o(), this._spriteReady = !0, this._render()
                    }), {
                        once: !0
                    })
                }
                play() {
                    this._animationStatus === ke.AnimationStatus.STOPPED ? (this._animationStatus = ke.AnimationStatus.PLAYS, this._rafid = requestAnimationFrame(this._loop)) : this._animationStatus = ke.AnimationStatus.PLAYS
                }
                stop(e = !1) {
                    this._animationStatus !== ke.AnimationStatus.STOPPED && (this._animationStatus = e ? ke.AnimationStatus.PLAYS_OUT : ke.AnimationStatus.STOPPED, this._animationStatus === ke.AnimationStatus.STOPPED && cancelAnimationFrame(this._rafid))
                }
                get _currentFrameOffets() {
                    return "vertical" === this._frameDirection ? [0, this._currentFrameIndex * this._frameSize[1]] : [this._currentFrameIndex * this._frameSize[0], 0]
                }
                _loop() {
                    if (this._loopIteration % 2) return this._rafid = requestAnimationFrame(this._loop), void(this._loopIteration += 1);
                    this._loopIteration += 1;
                    const e = this._currentFrameIndex === this._totalFrames - 1,
                        t = this._animationStatus !== ke.AnimationStatus.PLAYS_OUT || 0 !== this._currentFrameIndex;
                    t ? this._rafid = requestAnimationFrame(this._loop) : this._animationStatus = ke.AnimationStatus.STOPPED, this._render(), this._currentFrameIndex = e ? 0 : this._currentFrameIndex + 1
                }
                _render() {
                    if (this._spriteReady || this._staticFrameReady)
                        if (this._canvasCtx.clearRect(0, 0, this._frameSize[0], this._frameSize[1]), this._animationStatus === ke.AnimationStatus.STOPPED && this._staticFrameReady) try {
                            this._canvasCtx.drawImage(this._staticFrame, this._currentFrameOffets[0], this._currentFrameOffets[1], this._frameSize[0], this._frameSize[1])
                        } catch (e) {} else try {
                            this._canvasCtx.drawImage(this._sprite, this._currentFrameOffets[0], this._currentFrameOffets[1], this._frameSize[0], this._frameSize[1], 0, 0, this._frameSize[0], this._frameSize[1])
                        } catch (e) {}
                }
            }
            ke.AnimationStatus = {
                PLAYS: 1,
                STOPPED: 2,
                PLAYS_OUT: 3
            };
            var Ce = i(977350);
            const Te = {
                props: {
                    heading: {
                        type: String,
                        required: !0
                    },
                    subheading: {
                        type: String,
                        required: !0
                    },
                    spritePNG: {
                        type: String,
                        required: !0
                    },
                    spriteWEBP: {
                        type: String,
                        required: !0
                    },
                    staticFrame: {
                        type: String,
                        required: !0
                    },
                    to: {
                        type: [Object, String],
                        required: !0
                    },
                    disableAnimation: {
                        type: Boolean,
                        required: !1
                    }
                },
                emits: ["click"],
                data: () => ({
                    SPRITE_SIZE: 128,
                    randomPlayTimeSpan: [5e3, 2e4],
                    randomPlayTimeout: null,
                    sprite: null
                }),
                computed: {
                    canvasSize() {
                        return this.SPRITE_SIZE * this.pixelRatio
                    }
                },
                created() {
                    this.pixelRatio = 2, this.sprite = (0, Ce.p)(Ce._.WEBP) ? this.spriteWEBP : this.spritePNG
                },
                mounted() {
                    this.player = new ke({
                        spriteURL: this.sprite,
                        staticFrameURL: this.staticFrame,
                        totalFrames: 50,
                        frameSize: [256, 256],
                        canvas: this.$refs.canvas
                    }), this.disableAnimation || this.scheduleRandomPlay()
                },
                beforeUnmount() {
                    this.disableAnimation || clearTimeout(this.randomPlayTimeout)
                },
                methods: {
                    onHover() {
                        this.disableAnimation || (this.player.play(), clearTimeout(this.randomPlayTimeout))
                    },
                    onLeave() {
                        this.disableAnimation || (this.player.stop(!0), this.scheduleRandomPlay())
                    },
                    scheduleRandomPlay() {
                        const [e, t] = this.randomPlayTimeSpan, i = Math.random() * (t - e) + e;
                        this.randomPlayTimeout = setTimeout(this.randomPlayHandler, i)
                    },
                    randomPlayHandler() {
                        this.player.play(), this.player.stop(!0), this.scheduleRandomPlay()
                    }
                }
            };
            var Pe = i(348118);
            const Be = (0, Pe.Z)(Te, [
                    ["render", Se],
                    ["__scopeId", "data-v-1e11f167"]
                ]),
                Fe = Be;
            var $e = i(894710),
                Ee = i(305653),
                Ie = i(602262),
                Ue = i(749963),
                Le = i(322201),
                Oe = i(444829),
                Ae = i(920346),
                De = i(695139),
                je = i(909997);
            const xe = {
                    key: 1,
                    class: "section-card__background"
                },
                Ze = {
                    key: 2,
                    class: "section-card__header"
                },
                Me = {
                    class: "section-card__left"
                },
                ze = {
                    key: 0,
                    class: "section-card__meta"
                },
                Ne = {
                    class: "section-card__right"
                },
                Re = {
                    class: "section-card__content"
                };

            function We(e, t, i, s, o, r) {
                const l = (0, n.up)("VIconSvgGradient");
                return (0, n.wg)(), (0, n.j4)((0, n.LL)(i.to ? "router-link" : "div"), {
                    class: "section-card",
                    to: i.to
                }, {
                    default: (0, n.w5)((() => [i.notch ? ((0, n.wg)(), (0, n.iD)("div", {
                        key: 0,
                        class: "section-card__notch",
                        style: (0, a.j5)(r.notchStyle)
                    }, null, 4)) : (0, n.kq)("", !0), e.$slots.background ? ((0, n.wg)(), (0, n.iD)("div", xe, [(0, n.WI)(e.$slots, "background", {}, void 0, !0)])) : (0, n.kq)("", !0), i.title || i.meta ? ((0, n.wg)(), (0, n.iD)("div", Ze, [(0, n._)("div", Me, [i.sectionIcon ? ((0, n.wg)(), (0, n.j4)(l, {
                        key: 0,
                        class: "section-icon",
                        icon: i.sectionIcon
                    }, null, 8, ["icon"])) : (0, n.kq)("", !0), i.title ? ((0, n.wg)(), (0, n.iD)("div", {
                        key: 1,
                        class: (0, a.C_)(["section-card__title", {
                            "is-link": e.$attrs.onTitleClick
                        }]),
                        onClick: t[0] || (t[0] = t => e.$emit("titleClick"))
                    }, [(0, n.Uk)((0, a.zw)(i.title) + " ", 1), i.meta ? ((0, n.wg)(), (0, n.iD)("div", ze, (0, a.zw)(i.meta), 1)) : (0, n.kq)("", !0)], 2)) : (0, n.kq)("", !0)]), (0, n._)("div", Ne, [i.actionLabel ? ((0, n.wg)(), (0, n.iD)("div", {
                        key: 0,
                        class: "section-card__action",
                        onClick: t[1] || (t[1] = t => e.$emit("actionClick"))
                    }, (0, a.zw)(i.actionLabel), 1)) : (0, n.kq)("", !0), (0, n.WI)(e.$slots, "header-right", {}, void 0, !0)])])) : (0, n.kq)("", !0), (0, n._)("div", Re, [(0, n.WI)(e.$slots, "default", {}, void 0, !0)])])),
                    _: 3
                }, 8, ["to"])
            }
            var Ve = i(633644);
            const qe = {
                    components: {
                        VIconSvgGradient: Ve.Z
                    },
                    props: {
                        to: {
                            type: [Object, String],
                            default: null
                        },
                        notch: {
                            type: Array,
                            default: null
                        },
                        title: {
                            type: [String, Number],
                            default: null
                        },
                        meta: {
                            type: [String, Number, null],
                            default: void 0
                        },
                        actionLabel: {
                            type: String,
                            default: null
                        },
                        sectionIcon: {
                            type: String,
                            default: null
                        }
                    },
                    emits: ["actionClick", "titleClick"],
                    computed: {
                        notchStyle() {
                            return `background-image: ${(0,je.Fh)(90,this.notch)}`
                        }
                    }
                },
                He = (0, Pe.Z)(qe, [
                    ["render", We],
                    ["__scopeId", "data-v-726b8e9f"]
                ]),
                Ge = He,
                Ke = (0, n.aZ)({
                    __name: "SectionGamesOneWin",
                    props: {
                        iconName: {},
                        maxItemsInRow: {}
                    },
                    setup(e) {
                        var t;
                        const i = e,
                            s = (0, Le.tv)(),
                            o = (0, Ae.Jr)("desktop.home"),
                            r = (0, n.Fl)((() => {
                                var e;
                                return {
                                    limit: null != (e = i.maxItemsInRow) ? e : 4,
                                    offset: 0
                                }
                            })),
                            l = null == (t = V.appConfig.modules.casino) ? void 0 : t.categories.oneWin,
                            {
                                data: c
                            } = (0, De.ag)(null != l ? l : 0, r, {
                                enabled: void 0 !== l
                            }),
                            d = (0, n.Fl)((() => {
                                var e;
                                const t = [],
                                    i = null == (e = c.value) ? void 0 : e.pages;
                                if (null == i ? void 0 : i.length)
                                    for (const n of i)
                                        if (t.push(...n.data.slice(0, r.value.limit)), t.length >= r.value.limit) break;
                                return t
                            })),
                            {
                                gameIdToOnlineMap: p
                            } = (0, De.Rj)({
                                key: "section-games-onewin",
                                games: d
                            }),
                            {
                                gameNameFormatter: m,
                                isGameFavorite: u,
                                isGameFavoriteToggleAvailable: g,
                                isBonusIconVisible: h,
                                toggleGameFavorite: v,
                                getProviderLogo: b
                            } = (0, De.Fn)({
                                withProviderData: (0, Ie.Vh)((() => d.value.length > 0))
                            }),
                            _ = () => {
                                s.push({
                                    name: Ee.Z.CASINO_LIST,
                                    params: {
                                        category: l
                                    }
                                }), je.L_.handleCasinoEvent("category", {
                                    category_name: "1win_games"
                                })
                            },
                            f = (0, De.Fg)(),
                            y = e => {
                                je.L_.handleCasinoEvent("game", {
                                    category_name: "1win_games",
                                    game_name: e.nameEn,
                                    game_id: e.id
                                }), f(e.id, e)
                            };
                        return (e, t) => {
                            var s;
                            return (0, n.wg)(), (0, n.j4)(Ge, {
                                title: null == (s = (0, Ie.SU)(o).gamesOneWin) ? void 0 : s.title,
                                "action-label": (0, Ie.SU)(o).all,
                                "section-icon": i.iconName,
                                notch: ["#1BF1FF", "#0855C4"],
                                class: (0, a.C_)(e.$style.root),
                                onTitleClick: _,
                                onActionClick: _
                            }, {
                                default: (0, n.w5)((() => [(0, n._)("div", {
                                    class: (0, a.C_)(e.$style.content),
                                    style: (0, a.j5)({
                                        "grid-template-columns": ` repeat(${r.value.limit}, 1fr)`
                                    })
                                }, [((0, n.wg)(!0), (0, n.iD)(n.HY, null, (0, n.Ko)(d.value, (t => {
                                    var i;
                                    return (0, n.wg)(), (0, n.j4)(Oe.Z, {
                                        key: t.id,
                                        game: t,
                                        "user-count": null == (i = (0, Ie.SU)(p)[t.id]) ? void 0 : i.userCount,
                                        class: (0, a.C_)(e.$style.gameCard),
                                        "is-favorite": (0, Ie.SU)(u)(t),
                                        "is-favorite-button-visible": (0, Ie.SU)(g),
                                        "is-bonus-icon-visible": (0, Ie.SU)(h),
                                        "game-name-formatter": (0, Ie.SU)(m),
                                        "provider-logo-url": (0, Ie.SU)(b)(t.gameOwnerName),
                                        onClick: (0, Ue.iM)((e => y(t)), ["stop"]),
                                        onToggleFavorite: e => (0, Ie.SU)(v)(t)
                                    }, null, 8, ["game", "user-count", "class", "is-favorite", "is-favorite-button-visible", "is-bonus-icon-visible", "game-name-formatter", "provider-logo-url", "onClick", "onToggleFavorite"])
                                })), 128))], 6)])),
                                _: 1
                            }, 8, ["title", "action-label", "section-icon", "class"])
                        }
                    }
                }),
                Ye = {
                    root: "SectionGamesOneWin_root_FBJ1a",
                    content: "SectionGamesOneWin_content_alv0o"
                },
                Je = {};
            Je["$style"] = Ye;
            const Xe = (0, Pe.Z)(Ke, [
                    ["__cssModules", Je]
                ]),
                Qe = Xe;

            function et(e, t, i, s, o, r) {
                const l = (0, n.up)("VPicture"),
                    c = (0, n.up)("WithSelfBlurGlow"),
                    d = (0, n.up)("SectionCard");
                return (0, n.wg)(), (0, n.j4)(d, {
                    title: e.lang.home.pokerBanner.title,
                    "section-icon": "home/poker",
                    notch: ["#8D53E9", "#00B7FF"],
                    to: {
                        name: e.$options.ROUTE_NAME.POKER
                    },
                    onClickCapture: r.onSectionClick
                }, {
                    background: (0, n.w5)((() => [(0, n._)("div", {
                        class: (0, a.C_)(e.$style.background)
                    }, [(0, n.Wm)(c, {
                        amount: "30",
                        power: "0.5",
                        class: (0, a.C_)(e.$style.backgroundBlur)
                    }, {
                        default: (0, n.w5)((() => [(0, n.Wm)(l, {
                            class: (0, a.C_)(e.$style.backgroundPicture),
                            picture: r.backgroundPicture,
                            position: "right"
                        }, null, 8, ["class", "picture"])])),
                        _: 1
                    }, 8, ["class"])], 2)])),
                    default: (0, n.w5)((() => [(0, n._)("div", {
                        class: (0, a.C_)(e.$style.content)
                    }, [(0, n._)("div", {
                        class: (0, a.C_)(e.$style.contentSubtitle)
                    }, (0, a.zw)(e.lang.home.pokerBanner.subtitle), 3), (0, n._)("div", {
                        class: (0, a.C_)(e.$style.contentButton)
                    }, (0, a.zw)(e.lang.home.pokerBanner.button), 3)], 2)])),
                    _: 1
                }, 8, ["title", "to", "onClickCapture"])
            }
            var tt = i(644918),
                it = i(66894),
                nt = i(208401),
                at = i.n(nt),
                st = i(451279),
                ot = i.n(st),
                rt = Object.defineProperty,
                lt = Object.defineProperties,
                ct = Object.getOwnPropertyDescriptors,
                dt = Object.getOwnPropertySymbols,
                pt = Object.prototype.hasOwnProperty,
                mt = Object.prototype.propertyIsEnumerable,
                ut = (e, t, i) => t in e ? rt(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i
                }) : e[t] = i,
                gt = (e, t) => {
                    for (var i in t || (t = {})) pt.call(t, i) && ut(e, i, t[i]);
                    if (dt)
                        for (var i of dt(t)) mt.call(t, i) && ut(e, i, t[i]);
                    return e
                },
                ht = (e, t) => lt(e, ct(t));
            const vt = {
                    components: {
                        SectionCard: Ge,
                        VPicture: tt.Z,
                        WithSelfBlurGlow: it.Z
                    },
                    computed: ht(gt({}, (0, _.Se)(["lang"])), {
                        backgroundPicture() {
                            return {
                                png: at(),
                                webp: ot()
                            }
                        }
                    }),
                    methods: {
                        onSectionClick() {
                            this.$googleTagManager.handleCasinoEvent("category", {
                                category_name: "poker"
                            })
                        }
                    },
                    ROUTE_NAME: Ee.Z
                },
                bt = {
                    background: "SectionPokerBanner_background_uu70z",
                    backgroundBlur: "SectionPokerBanner_backgroundBlur_TyNOz",
                    backgroundPicture: "SectionPokerBanner_backgroundPicture_FIUWN",
                    content: "SectionPokerBanner_content_HDmYl",
                    contentSubtitle: "SectionPokerBanner_contentSubtitle_xxCyi",
                    contentButton: "SectionPokerBanner_contentButton_guN7b",
                    "button-flare": "SectionPokerBanner_button-flare_h6wXQ"
                },
                _t = {};
            _t["$style"] = bt;
            const ft = (0, Pe.Z)(vt, [
                    ["render", et],
                    ["__cssModules", _t]
                ]),
                yt = ft;
            var wt = Object.defineProperty,
                St = Object.defineProperties,
                kt = Object.getOwnPropertyDescriptors,
                Ct = Object.getOwnPropertySymbols,
                Tt = Object.prototype.hasOwnProperty,
                Pt = Object.prototype.propertyIsEnumerable,
                Bt = (e, t, i) => t in e ? wt(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i
                }) : e[t] = i,
                Ft = (e, t) => {
                    for (var i in t || (t = {})) Tt.call(t, i) && Bt(e, i, t[i]);
                    if (Ct)
                        for (var i of Ct(t)) Pt.call(t, i) && Bt(e, i, t[i]);
                    return e
                },
                $t = (e, t) => St(e, kt(t));
            const Et = (0, n.aZ)({
                    __name: "BannersSection",
                    props: {
                        games: {},
                        poker: {
                            type: Boolean
                        }
                    },
                    setup(e) {
                        const t = {
                                "--section-card__header-padding": "25px 25px 5px",
                                "--section-card__header-title-font-size": "32px",
                                "--section-card__label-top": "-13px"
                            },
                            i = $t(Ft({}, t), {
                                "--section-card__right-height": "auto"
                            });
                        return (e, s) => e.poker || e.games ? ((0, n.wg)(), (0, n.iD)("div", {
                            key: 0,
                            class: (0, a.C_)(e.$style.root)
                        }, [e.games ? ((0, n.wg)(), (0, n.j4)(Qe, {
                            key: 0,
                            style: i,
                            "icon-name": e.games.iconName,
                            "max-items-in-row": e.poker ? 4 : 8
                        }, null, 8, ["icon-name", "max-items-in-row"])) : (0, n.kq)("", !0), e.poker ? ((0, n.wg)(), (0, n.j4)(yt, {
                            key: 1,
                            style: t
                        })) : (0, n.kq)("", !0)], 2)) : (0, n.kq)("", !0)
                    }
                }),
                It = {
                    root: "BannersSection_root_soEsj"
                },
                Ut = {};
            Ut["$style"] = It;
            const Lt = (0, Pe.Z)(Et, [
                    ["__cssModules", Ut]
                ]),
                Ot = Lt;
            var At = i(349328),
                Dt = i(696814),
                jt = i(382369),
                xt = i(575913),
                Zt = i(763925);
            const Mt = ["onClick"];

            function zt(e, t, i, s, o, r) {
                const l = (0, n.up)("PaginationButton");
                return (0, n.wg)(), (0, n.iD)("div", {
                    class: (0, a.C_)([e.$style.root, r.ofl && e.$style.ofl, r.ofr && e.$style.ofr])
                }, [(0, n.Wm)(l, {
                    class: (0, a.C_)(e.$style.control),
                    left: "left",
                    theme: "blue",
                    onClick: t[0] || (t[0] = e => r.move(-1))
                }, null, 8, ["class"]), (0, n._)("div", {
                    ref: "list",
                    class: (0, a.C_)([e.$style.list, "scrollbar-hide"])
                }, [((0, n.wg)(!0), (0, n.iD)(n.HY, null, (0, n.Ko)(i.items, ((t, i) => ((0, n.wg)(), (0, n.iD)("div", {
                    key: i,
                    ref_for: !0,
                    ref: "item",
                    class: (0, a.C_)(e.$style.item),
                    onClick: e => r.onClick(t)
                }, [(0, n.WI)(e.$slots, "item", {
                    item: t
                })], 10, Mt)))), 128))], 2), (0, n.Wm)(l, {
                    class: (0, a.C_)(e.$style.control),
                    right: "right",
                    theme: "blue",
                    onClick: t[1] || (t[1] = e => r.move(1))
                }, null, 8, ["class"])], 2)
            }
            var Nt = i(300111),
                Rt = i(520697);
            const Wt = {
                    components: {
                        PaginationButton: Rt.Z
                    },
                    props: {
                        items: {
                            type: Array,
                            default: () => []
                        },
                        step: {
                            type: Number,
                            default: .5
                        },
                        dynamicSizeItems: Boolean,
                        gapItems: {
                            type: Number,
                            default: 5
                        }
                    },
                    emits: ["click"],
                    data: () => ({
                        scrollLeft: null,
                        clientWidth: null,
                        scrollWidth: null
                    }),
                    computed: {
                        ofl() {
                            return null != this.scrollLeft && 0 !== this.scrollLeft
                        },
                        ofr() {
                            return ![this.scrollLeft, this.clientWidth, this.scrollWidth].some((e => null == e)) && this.scrollWidth - this.clientWidth - this.scrollLeft - 2 > 0
                        }
                    },
                    watch: {
                        items: {
                            handler() {
                                this.resizeObserverItems && (this.resizeObserverItems.disconnect(), (0, n.Y3)((() => {
                                    if (this.$refs.item)
                                        for (const e of this.$refs.item) this.resizeObserverItems.observe(e)
                                }))), (0, n.Y3)((() => {
                                    this.throttleUpdateSizes()
                                }))
                            },
                            deep: !0
                        }
                    },
                    mounted() {
                        this.dynamicSizeItems && (this.resizeObserverItems = (0, je.Sp)(this.throttleUpdateSizes)), this.$refs.list.addEventListener("scroll", this.onScroll, {
                            passive: !0
                        }), this.resizeObserverRoot = (0, je.Sp)(this.updateSizes), this.resizeObserverRoot.observe(this.$el)
                    },
                    beforeUnmount() {
                        var e;
                        this.$refs.list.removeEventListener("scroll", this.onScroll), null == (e = this.resizeObserverItems) || e.disconnect(), this.resizeObserverRoot.disconnect()
                    },
                    methods: {
                        onClick(e) {
                            je.L_.handleCasinoEvent("filter_category", {
                                category_name: e.nameEn || e.name
                            })
                        },
                        move(e) {
                            const {
                                scrollLeft: t,
                                clientWidth: i,
                                step: n
                            } = this, a = Math.round(i * n) * e, s = Math.max(t + a, 0);
                            this.$refs.list.scrollTo({
                                left: s,
                                behavior: "smooth"
                            }), this.$emit("click", e)
                        },
                        updateSizes() {
                            if (!this.$refs.list) return;
                            const {
                                scrollLeft: e,
                                clientWidth: t,
                                scrollWidth: i
                            } = this.$refs.list;
                            this.scrollLeft = e, this.clientWidth = t, this.scrollWidth = i
                        },
                        onScroll: (0, Nt.Z)((function() {
                            this.scrollLeft = this.$refs.list.scrollLeft
                        }), 50),
                        throttleUpdateSizes: (0, Nt.Z)((function() {
                            this.updateSizes()
                        }), 50)
                    }
                },
                Vt = () => {
                    (0, Ue.sj)((e => ({
                        36729256: e.gapItems
                    })))
                },
                qt = Wt.setup;
            Wt.setup = qt ? (e, t) => (Vt(), qt(e, t)) : Vt;
            const Ht = Wt,
                Gt = {
                    root: "HorizontalSelector_root_VgpHc",
                    item: "HorizontalSelector_item_ZfaLD",
                    list: "HorizontalSelector_list_VnVCL",
                    control: "HorizontalSelector_control_vF4ZF",
                    ofl: "HorizontalSelector_ofl_aUPJh",
                    ofr: "HorizontalSelector_ofr_cBFUe"
                },
                Kt = {};
            Kt["$style"] = Gt;
            const Yt = (0, Pe.Z)(Ht, [
                    ["render", zt],
                    ["__cssModules", Kt]
                ]),
                Jt = Yt,
                Xt = (0, n.aZ)({
                    __name: "CasinoSection",
                    props: {
                        category: {},
                        withCategoryFilter: {
                            type: Boolean
                        },
                        withProviderFilter: {
                            type: Boolean
                        },
                        withCategoryProviderFilter: {
                            type: Boolean,
                            default: !1
                        },
                        displayJackpot: {
                            type: Boolean
                        },
                        withGamesLimit: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    emits: ["gameClick"],
                    setup(e, {
                        emit: t
                    }) {
                        var i;
                        const s = e,
                            o = t,
                            r = null == (i = V.appConfig.modules.casino) ? void 0 : i.categories,
                            l = r ? [r.favorites, r.popular, r.all].filter((e => void 0 !== e)) : void 0,
                            {
                                gameCategories: c,
                                isError: d
                            } = (0, Ae.bg)({
                                enabled: (0, Ie.Vh)((() => s.withCategoryFilter)),
                                deleteEmpty: !0,
                                deleteIds: l
                            }),
                            p = e => e.nameLocalized || e.nameEn,
                            {
                                data: m,
                                isError: u
                            } = (0, Ae.z8)({
                                enabled: (0, Ie.Vh)((() => s.withProviderFilter))
                            }),
                            g = (0, Ae.Jr)("desktop.home.casinoLoadErrorMessage"),
                            {
                                data: h,
                                isLoading: v,
                                isError: b
                            } = (0, Ae.ag)((() => s.category), s.withGamesLimit ? {
                                limit: 24
                            } : void 0),
                            _ = (0, n.Fl)((() => {
                                var e, t;
                                return [...new Set(null != (t = null == (e = h.value) ? void 0 : e.pages.reduce(((e, t) => {
                                    const i = t.data.map((e => e.gameOwnerName));
                                    return e.push(...i), e
                                }), [])) ? t : []).values()]
                            })),
                            f = (0, n.Fl)((() => {
                                var e;
                                return s.withCategoryProviderFilter ? null == (e = m.value) ? void 0 : e.filter((e => _.value.includes(e.name))) : m.value
                            })),
                            y = (0, n.Fl)((() => {
                                var e;
                                return (null == (e = h.value) ? void 0 : e.pages.length) ? h.value.pages.reduce(((e, t) => {
                                    for (const i of t.data) i.imageUrl && e.push(i);
                                    return e
                                }), []).slice(0, s.displayJackpot ? 8 : 12) : []
                            })),
                            {
                                gameIdToOnlineMap: w
                            } = (0, Ae.Rj)({
                                key: (0, Ie.Vh)((() => `casino-section-home-${s.category}`)),
                                games: y
                            }),
                            {
                                gameNameFormatter: S,
                                toggleGameFavorite: k,
                                isGameFavorite: C,
                                isGameFavoriteToggleAvailable: T,
                                isBonusIconVisible: P,
                                getProviderLogo: B
                            } = (0, Ae.Fn)({
                                withProviderData: (0, Ie.Vh)((() => y.value.length > 0))
                            });
                        return (e, t) => {
                            var i;
                            const s = (0, n.up)("router-link");
                            return (0, n.wg)(), (0, n.j4)(Ge, (0, n.dG)(e.$attrs, {
                                meta: null != (i = e.$attrs.meta) ? i : y.value.length > 0 ? y.value.length : void 0
                            }), {
                                default: (0, n.w5)((() => {
                                    var t, i;
                                    return [(0, n._)("div", {
                                        class: (0, a.C_)(e.$style.filters)
                                    }, [e.withCategoryFilter && !(0, Ie.SU)(d) ? ((0, n.wg)(), (0, n.j4)(Jt, {
                                        key: 0,
                                        class: (0, a.C_)([e.$style.filter, e.withProviderFilter && !(0, Ie.SU)(u) && e.$style.half]),
                                        items: (0, Ie.SU)(c)
                                    }, {
                                        item: (0, n.w5)((({
                                            item: t
                                        }) => [((0, n.wg)(), (0, n.j4)(s, {
                                            key: t.id,
                                            class: (0, a.C_)(e.$style.item),
                                            to: {
                                                name: "casino-list",
                                                params: {
                                                    category: t.id
                                                }
                                            }
                                        }, {
                                            default: (0, n.w5)((() => [(0, n.Wm)(Zt.Z, {
                                                class: (0, a.C_)(e.$style.icon),
                                                "category-id": t.id,
                                                "image-url": t.imageUrl,
                                                title: p(t)
                                            }, null, 8, ["class", "category-id", "image-url", "title"]), (0, n._)("div", {
                                                class: (0, a.C_)(e.$style.name)
                                            }, (0, a.zw)(p(t)), 3)])),
                                            _: 2
                                        }, 1032, ["class", "to"]))])),
                                        _: 1
                                    }, 8, ["class", "items"])) : (0, n.kq)("", !0), !e.withProviderFilter && !e.withCategoryProviderFilter || (0, Ie.SU)(u) ? (0, n.kq)("", !0) : ((0, n.wg)(), (0, n.j4)(Jt, {
                                        key: 1,
                                        class: (0, a.C_)([e.$style.filter, e.withCategoryFilter && !(0, Ie.SU)(d) && e.$style.half]),
                                        items: null != (t = f.value) ? t : []
                                    }, {
                                        item: (0, n.w5)((({
                                            item: t
                                        }) => [((0, n.wg)(), (0, n.j4)(s, {
                                            key: t.name,
                                            class: (0, a.C_)(e.$style.item),
                                            to: {
                                                name: "casino-owner",
                                                params: {
                                                    ownerName: t.name
                                                }
                                            }
                                        }, {
                                            default: (0, n.w5)((() => {
                                                var i;
                                                return [(0, n.Wm)(jt.Z, {
                                                    class: (0, a.C_)(e.$style.icon),
                                                    "provider-name": t.name,
                                                    logo: null != (i = t.imageUrl) ? i : t.imageBigUrl
                                                }, null, 8, ["class", "provider-name", "logo"]), (0, n._)("div", {
                                                    class: (0, a.C_)(e.$style.name)
                                                }, (0, a.zw)(t.name), 3)]
                                            })),
                                            _: 2
                                        }, 1032, ["class", "to"]))])),
                                        _: 1
                                    }, 8, ["class", "items"]))], 2), (0, n._)("div", {
                                        class: (0, a.C_)(e.$style.games)
                                    }, [(0, n._)("div", {
                                        class: (0, a.C_)(e.$style.wrapper)
                                    }, [(0, Ie.SU)(v) ? ((0, n.wg)(), (0, n.j4)(xt.Z, {
                                        key: 0,
                                        class: (0, a.C_)(e.$style.preloader)
                                    }, null, 8, ["class"])) : (0, Ie.SU)(b) ? ((0, n.wg)(), (0, n.iD)("div", {
                                        key: 1,
                                        class: (0, a.C_)(e.$style.message)
                                    }, (0, a.zw)(null != (i = (0, Ie.SU)(g)) ? i : "Failed to load games"), 3)) : ((0, n.wg)(), (0, n.iD)("div", {
                                        key: 2,
                                        class: (0, a.C_)(e.$style.list)
                                    }, [e.displayJackpot ? ((0, n.wg)(), (0, n.j4)(Dt.Z, {
                                        key: 0,
                                        "is-small": "",
                                        class: (0, a.C_)(e.$style.jackpot)
                                    }, null, 8, ["class"])) : (0, n.kq)("", !0), ((0, n.wg)(!0), (0, n.iD)(n.HY, null, (0, n.Ko)(y.value, (e => {
                                        var t;
                                        return (0, n.wg)(), (0, n.j4)(Oe.Z, {
                                            key: e.id,
                                            "is-single-line-name": "",
                                            game: e,
                                            "game-name-formatter": (0, Ie.SU)(S),
                                            "user-count": null == (t = (0, Ie.SU)(w)[e.id]) ? void 0 : t.userCount,
                                            "is-favorite": (0, Ie.SU)(C)(e),
                                            "is-favorite-button-visible": (0, Ie.SU)(T),
                                            "is-bonus-icon-visible": (0, Ie.SU)(P),
                                            "provider-logo-url": (0, Ie.SU)(B)(e.gameOwnerName),
                                            onToggleFavorite: t => (0, Ie.SU)(k)(e),
                                            onClick: t => o("gameClick", e)
                                        }, null, 8, ["game", "game-name-formatter", "user-count", "is-favorite", "is-favorite-button-visible", "is-bonus-icon-visible", "provider-logo-url", "onToggleFavorite", "onClick"])
                                    })), 128))], 2))], 2)], 2)]
                                })),
                                _: 1
                            }, 16, ["meta"])
                        }
                    }
                }),
                Qt = {
                    filters: "CasinoSection_filters_Langv",
                    filter: "CasinoSection_filter_va7xj",
                    half: "CasinoSection_half_iJTuf",
                    item: "CasinoSection_item_brUnJ",
                    icon: "CasinoSection_icon_Jkpoh",
                    name: "CasinoSection_name_ZDop4",
                    games: "CasinoSection_games_Ok6WP",
                    wrapper: "CasinoSection_wrapper_NcSaE",
                    jackpot: "CasinoSection_jackpot_nwmtE",
                    list: "CasinoSection_list_ZqIm4",
                    preloader: "CasinoSection_preloader_PxsoZ",
                    message: "CasinoSection_message_mzZY3"
                },
                ei = {};
            ei["$style"] = Qt;
            const ti = (0, Pe.Z)(Xt, [
                    ["__cssModules", ei]
                ]),
                ii = ti,
                ni = 252,
                ai = (0, n.aZ)({
                    __name: "CasinoSectionList",
                    setup(e) {
                        var t, i, s, o, r;
                        const l = null != (i = null == (t = V.appConfig.modules.casino) ? void 0 : t.categories) ? i : {},
                            c = null == (o = null == (s = V.appConfig.modules.casino) ? void 0 : s.jackpot) ? void 0 : o.showOnHomePage,
                            d = null == (r = V.appConfig.modules.casino) ? void 0 : r.liveGames,
                            p = {
                                casino: {
                                    name: Ee.Z.CASINO
                                },
                                livegames: {
                                    name: Ee.Z.CASINO,
                                    params: {
                                        preset: x.Py.LIVE_GAMES
                                    }
                                },
                                baccarat: {
                                    name: Ee.Z.CASINO_LIST,
                                    params: {
                                        category: ni
                                    }
                                }
                            },
                            m = (0, Ae.Jr)("desktop.home"),
                            u = (0, Le.tv)(),
                            g = (0, R.L)(),
                            {
                                gameNameFormatter: h,
                                isGameFavorite: v,
                                toggleGameFavorite: b
                            } = (0, Ae.Fn)(),
                            {
                                isDisplayWidgetsGroupC: _
                            } = (0, At.K)(),
                            {
                                gameCategoriesMap: f
                            } = (0, Ae.bg)({
                                includeHidden: !0
                            }),
                            y = (0, n.Fl)((() => {
                                var e, t, i, n, a, s;
                                return {
                                    base: null != (t = l.all && (null == (e = f.value[l.all]) ? void 0 : e.amount)) ? t : 0,
                                    live: null != (n = l.live && (null == (i = f.value[l.live]) ? void 0 : i.amount)) ? n : 0,
                                    baccarat: null != (s = null == (a = f.value[ni]) ? void 0 : a.amount) ? s : 0
                                }
                            })),
                            w = e => {
                                u.push(p[e]), je.L_.handleCasinoEvent("category", {
                                    category_name: e
                                })
                            },
                            S = (0, Ae.Fg)(),
                            k = (e, t) => {
                                je.L_.handleCasinoEvent("game", {
                                    category_name: t,
                                    game_name: e.nameEn,
                                    game_id: e.id
                                }), S(e.id, e)
                            };
                        return (e, t) => {
                            var i, s;
                            return (0, n.wg)(), (0, n.iD)("div", {
                                class: (0, a.C_)(e.$style.list)
                            }, [(null == (i = (0, Ie.SU)(l)) ? void 0 : i.popular) ? ((0, n.wg)(), (0, n.j4)(ii, {
                                key: 0,
                                "with-category-filter": "",
                                "with-provider-filter": "",
                                category: (0, Ie.SU)(l).popular,
                                class: (0, a.C_)(e.$style.section),
                                "display-jackpot": (0, Ie.SU)(c),
                                notch: ["#00b7ff", "#c700ff", "#ffbb00"],
                                title: (0, Ie.SU)(m).casino,
                                "action-label": (0, Ie.SU)(m).all,
                                meta: y.value.base,
                                "game-name-formatter": (0, Ie.SU)(h),
                                "is-game-favorite-func": (0, Ie.SU)(v),
                                "is-authed": (0, Ie.SU)(g).isAuthed,
                                onTitleClick: t[0] || (t[0] = e => w("casino")),
                                onActionClick: t[1] || (t[1] = e => w("casino")),
                                onGameClick: t[2] || (t[2] = e => k(e, "casino")),
                                onToggleFavorite: (0, Ie.SU)(b)
                            }, null, 8, ["category", "class", "display-jackpot", "title", "action-label", "meta", "game-name-formatter", "is-game-favorite-func", "is-authed", "onToggleFavorite"])) : (0, n.kq)("", !0), (0, Ie.SU)(d) && void 0 !== (null == (s = (0, Ie.SU)(l)) ? void 0 : s.live) ? ((0, n.wg)(), (0, n.iD)(n.HY, {
                                key: 1
                            }, [(0, Ie.SU)(_) ? ((0, n.wg)(), (0, n.j4)(ii, {
                                key: 0,
                                title: "Baccarat",
                                "with-category-provider-filter": "",
                                "with-games-limit": !1,
                                category: ni,
                                class: (0, a.C_)(e.$style.section),
                                notch: ["#ff4edf", "#ff2958"],
                                "action-label": (0, Ie.SU)(m).all,
                                meta: y.value.baccarat,
                                "game-name-formatter": (0, Ie.SU)(h),
                                "is-game-favorite-func": (0, Ie.SU)(v),
                                "is-authed": (0, Ie.SU)(g).isAuthed,
                                onTitleClick: t[3] || (t[3] = e => w("baccarat")),
                                onActionClick: t[4] || (t[4] = e => w("baccarat")),
                                onGameClick: t[5] || (t[5] = e => k(e, "baccarat")),
                                onToggleFavorite: (0, Ie.SU)(b)
                            }, null, 8, ["class", "action-label", "meta", "game-name-formatter", "is-game-favorite-func", "is-authed", "onToggleFavorite"])) : ((0, n.wg)(), (0, n.j4)(ii, {
                                key: 1,
                                title: (0, Ie.SU)(m).live_games,
                                "with-provider-filter": "",
                                category: (0, Ie.SU)(l).live,
                                class: (0, a.C_)(e.$style.section),
                                notch: ["#ff4edf", "#ff2958"],
                                "action-label": (0, Ie.SU)(m).all,
                                meta: y.value.live,
                                "game-name-formatter": (0, Ie.SU)(h),
                                "is-game-favorite-func": (0, Ie.SU)(v),
                                "is-authed": (0, Ie.SU)(g).isAuthed,
                                onTitleClick: t[6] || (t[6] = e => w("livegames")),
                                onActionClick: t[7] || (t[7] = e => w("livegames")),
                                onGameClick: t[8] || (t[8] = e => k(e, "livegames")),
                                onToggleFavorite: (0, Ie.SU)(b)
                            }, null, 8, ["title", "category", "class", "action-label", "meta", "game-name-formatter", "is-game-favorite-func", "is-authed", "onToggleFavorite"]))], 64)) : (0, n.kq)("", !0)], 2)
                        }
                    }
                }),
                si = {
                    list: "CasinoSectionList_list_wKfdH",
                    section: "CasinoSectionList_section_fvFW7"
                },
                oi = {};
            oi["$style"] = si;
            const ri = (0, Pe.Z)(ai, [
                    ["__cssModules", oi]
                ]),
                li = ri;
            var ci = i(715560),
                di = i(292376),
                pi = i(144954);
            const mi = 329,
                ui = (0, n.aZ)({
                    __name: "FastPlayBanner",
                    setup(e) {
                        const t = (0, Le.tv)(),
                            {
                                data: i
                            } = (0, Ae.ag)(mi),
                            {
                                gameNameFormatter: s
                            } = (0, Ae.Fn)(),
                            o = (0, n.Fl)((() => {
                                var e;
                                const t = null == (e = i.value) ? void 0 : e.pages[0];
                                return t && t.data.length > 0 ? t.data : []
                            })),
                            r = (0, Ae.Jr)("desktop.home"),
                            l = (0, Ae.Fg)(),
                            c = e => {
                                je.L_.handleCasinoEvent("game", {
                                    category_name: "fastplay",
                                    game_name: e.nameEn,
                                    game_id: e.id
                                }), je.L_.handleMainPageEvent("fastplay_game", {
                                    game_name: e.nameEn
                                }), l(e.id, e)
                            },
                            d = {
                                "--section-card__header-title-font-size": "32px"
                            },
                            {
                                setInstance: p,
                                skip: m
                            } = (0, pi.i)(),
                            u = () => {
                                je.L_.handleMainPageEvent("fastplay_scroll", {
                                    scroll_direction: "left"
                                }), m(-6)
                            },
                            g = () => {
                                je.L_.handleMainPageEvent("fastplay_scroll", {
                                    scroll_direction: "right"
                                }), m(6)
                            },
                            h = () => {
                                je.L_.handleCasinoEvent("category", {
                                    category_name: "fastplay"
                                }), t.push({
                                    name: Ee.Z.CASINO_LIST,
                                    params: {
                                        category: mi
                                    }
                                })
                            };
                        return (e, t) => o.value.length > 0 ? ((0, n.wg)(), (0, n.j4)(Ge, {
                            key: 0,
                            title: "1win FastPlay",
                            "action-label": (0, Ie.SU)(r).all,
                            style: d,
                            class: (0, a.C_)(e.$style.root),
                            onTitleClick: h,
                            onActionClick: h
                        }, {
                            "header-right": (0, n.w5)((() => [(0, n._)("div", {
                                class: (0, a.C_)(e.$style.paginationContainer)
                            }, [(0, n.Wm)(Rt.Z, {
                                left: "",
                                onClick: u
                            }), (0, n.Wm)(Rt.Z, {
                                right: "",
                                onClick: g
                            })], 2)])),
                            default: (0, n.w5)((() => [(0, n._)("div", {
                                class: (0, a.C_)(e.$style.content)
                            }, [(0, n.Wm)((0, Ie.SU)(di.tq), {
                                "free-mode": "",
                                "slides-per-view": "auto",
                                class: (0, a.C_)(e.$style.swiper),
                                modules: [(0, Ie.SU)(ci.Rv)],
                                "space-between": 20,
                                onSwiper: (0, Ie.SU)(p)
                            }, {
                                default: (0, n.w5)((() => [((0, n.wg)(!0), (0, n.iD)(n.HY, null, (0, n.Ko)(o.value, (t => ((0, n.wg)(), (0, n.j4)((0, Ie.SU)(di.o5), {
                                    key: t.id,
                                    class: (0, a.C_)(e.$style.slide)
                                }, {
                                    default: (0, n.w5)((() => [(0, n.Wm)(Oe.Z, {
                                        game: t,
                                        class: (0, a.C_)(e.$style.card),
                                        "game-name-formatter": (0, Ie.SU)(s),
                                        onClick: (0, Ue.iM)((e => c(t)), ["stop"])
                                    }, null, 8, ["game", "class", "game-name-formatter", "onClick"])])),
                                    _: 2
                                }, 1032, ["class"])))), 128))])),
                                _: 1
                            }, 8, ["class", "modules", "onSwiper"])], 2)])),
                            _: 1
                        }, 8, ["action-label", "class"])) : (0, n.kq)("", !0)
                    }
                }),
                gi = {
                    root: "FastPlayBanner_root_NRQ5e",
                    content: "FastPlayBanner_content_nBHVe",
                    paginationContainer: "FastPlayBanner_paginationContainer_eLeyB",
                    card: "FastPlayBanner_card_HcotC",
                    swiper: "FastPlayBanner_swiper_oWXkd",
                    slide: "FastPlayBanner_slide_hM_0X"
                },
                hi = {};
            hi["$style"] = gi;
            const vi = (0, Pe.Z)(ui, [
                    ["__cssModules", hi]
                ]),
                bi = vi;
            var _i = i(747408),
                fi = i(51165);
            const yi = (0, n.aZ)({
                    __name: "SectionCardTV",
                    setup(e) {
                        const t = (0, _.oR)(),
                            i = (0, Le.tv)(),
                            {
                                count: s
                            } = (0, fi.eg)(),
                            {
                                setInstance: o,
                                skip: r
                            } = (0, pi.i)(),
                            l = () => {
                                r(-6), je.L_.handleMainPageEvent("tv_scroll_left")
                            },
                            c = () => {
                                r(6), je.L_.handleMainPageEvent("tv_scroll_right")
                            },
                            d = () => {
                                i.push({
                                    name: Ee.Z.TV
                                }), je.L_.handleMainPageEvent("tv_all")
                            },
                            p = (e, t) => {
                                je.L_.handleMainPageEvent("tv_movie", {
                                    movie_name: e.name,
                                    position_index: t
                                })
                            };
                        return (e, i) => {
                            var r;
                            return (0, n.wg)(), (0, n.j4)(Ge, {
                                title: "1win Tv",
                                meta: null != (r = (0, Ie.SU)(s)) ? r : 0,
                                "action-label": (0, Ie.SU)(t).getters.lang.home.all,
                                style: {
                                    "--section-card__header-padding": "15px 25px 5px 20px",
                                    "--poster-carousel__padding-bottom": "20px"
                                },
                                onTitleClick: d,
                                onActionClick: d
                            }, {
                                "header-right": (0, n.w5)((() => [(0, n._)("div", {
                                    class: (0, a.C_)(e.$style.paginationContainer)
                                }, [(0, n.Wm)(Rt.Z, {
                                    left: "",
                                    class: (0, a.C_)(e.$style.paginationButton),
                                    onClick: l
                                }, null, 8, ["class"]), (0, n.Wm)(Rt.Z, {
                                    right: "",
                                    class: (0, a.C_)(e.$style.paginationButton),
                                    onClick: c
                                }, null, 8, ["class"])], 2)])),
                                default: (0, n.w5)((() => [(0, n.Wm)(_i.Z, {
                                    class: (0, a.C_)(e.$style.carousel),
                                    onFilmClick: p,
                                    onInit: (0, Ie.SU)(o)
                                }, null, 8, ["class", "onInit"])])),
                                _: 1
                            }, 8, ["meta", "action-label"])
                        }
                    }
                }),
                wi = {
                    paginationContainer: "SectionCardTV_paginationContainer_z1AvG",
                    paginationButton: "SectionCardTV_paginationButton_tdMKr",
                    carousel: "SectionCardTV_carousel_gznUU"
                },
                Si = {};
            Si["$style"] = wi;
            const ki = (0, Pe.Z)(yi, [
                    ["__cssModules", Si]
                ]),
                Ci = ki;
            var Ti = Object.defineProperty,
                Pi = Object.defineProperties,
                Bi = Object.getOwnPropertyDescriptors,
                Fi = Object.getOwnPropertySymbols,
                $i = Object.prototype.hasOwnProperty,
                Ei = Object.prototype.propertyIsEnumerable,
                Ii = (e, t, i) => t in e ? Ti(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i
                }) : e[t] = i,
                Ui = (e, t) => {
                    for (var i in t || (t = {})) $i.call(t, i) && Ii(e, i, t[i]);
                    if (Fi)
                        for (var i of Fi(t)) Ei.call(t, i) && Ii(e, i, t[i]);
                    return e
                },
                Li = (e, t) => Pi(e, Bi(t));
            const Oi = "30",
                Ai = "500",
                Di = {
                    line: {
                        kz: P(),
                        ru: E(),
                        en: S()
                    },
                    cyber: {
                        kz: C(),
                        ru: F(),
                        en: y()
                    }
                },
                ji = {
                    components: {
                        FastPlayBanner: bi,
                        BonusBanner: I.Z,
                        BonusFreespins: U.Z,
                        BonusFreespinsHelper: L.Z,
                        VSlide: A.Z,
                        VScaler: O.Z,
                        PromoCard: Fe,
                        BannerCarousel: ve.Z,
                        CasinoSectionList: li,
                        SectionCardTV: Ci
                    },
                    inject: ["$filters"],
                    setup() {
                        const e = (0, R.L)(),
                            t = (0, z.gD)(),
                            i = (0, N.V)(),
                            {
                                isFastPlayEnabled: n
                            } = (0, M.V)();
                        return {
                            userStore: e,
                            bonusStore: t,
                            freespinStore: i,
                            isFastPlayEnabled: n
                        }
                    },
                    data: () => ({
                        initialKzLang: null
                    }),
                    computed: Li(Ui({
                        SectionName() {
                            return Z.jz
                        }
                    }, (0, _.Se)(["lang", "currentLang", "isAllowedTv"])), {
                        slideKzCyber() {
                            var e;
                            return (null == (e = Di.cyber) ? void 0 : e[this.initialKzLang]) || Di.cyber.en
                        },
                        slideKzLine() {
                            var e;
                            return (null == (e = Di.line) ? void 0 : e[this.initialKzLang]) || Di.line.en
                        },
                        staticFrames() {
                            return {
                                1: pe().src,
                                2: se().src,
                                4: H().src,
                                5: Q().src
                            }
                        },
                        sprites() {
                            return {
                                1: {
                                    png: ue().src,
                                    webp: he().src
                                },
                                2: {
                                    png: re().src,
                                    webp: ce().src,
                                    disabled: !1
                                },
                                4: {
                                    png: K().src,
                                    webp: J().src,
                                    disabled: !1
                                },
                                5: {
                                    png: te().src,
                                    webp: ne().src
                                }
                            }
                        },
                        isNewBonusBalance() {
                            return this.bonusStore.isNewBonusBalance
                        },
                        components() {
                            var e, t;
                            const i = [],
                                n = null == (t = null == (e = V.appConfig.modules.home) ? void 0 : e.blocks) ? void 0 : t.desktop;
                            return this.isFastPlayEnabled && i.push({
                                component: bi,
                                key: "fastPlay",
                                order: 1
                            }), (null == n ? void 0 : n.casino) && i.push({
                                component: li,
                                key: "casinoBlock",
                                order: n.casino.order
                            }), (null == n ? void 0 : n.widgets) && i.push({
                                component: Ot,
                                key: "gamesBlock",
                                order: n.widgets.order,
                                props: {
                                    games: n.widgets.games,
                                    poker: n.widgets.poker
                                }
                            }), (null == n ? void 0 : n.tv) && this.isAllowedTv && i.push({
                                component: Ci,
                                key: "tvBlock",
                                order: n.tv.order
                            }), i.sort(((e, t) => e.order - t.order))
                        },
                        bannerCashback() {
                            return {
                                headingText: this.$filters.format(this.lang.homeBannerCashback.title, Oi),
                                background: D.assets.banners.cashback.src,
                                backgroundColor: "#9926F8",
                                primaryButtonText: this.lang.homeBannerCashback.button,
                                primaryButton: {
                                    color: "#9926F8",
                                    linkType: "link",
                                    link: "/casino"
                                }
                            }
                        },
                        bannerBonusDeposit() {
                            return {
                                headingText: this.$filters.format(this.lang.homeBannerBonusDeposit.title, Ai),
                                background: D.assets.banners.bonus.src,
                                backgroundColor: "#2A26F8",
                                primaryButtonText: this.userStore.isAuthed ? this.lang.homeBannerBonusDeposit.buttonAfterAuth : this.lang.homeBannerBonusDeposit.button,
                                primaryButton: {
                                    color: "#2A26F8",
                                    linkType: "link",
                                    link: this.$router.resolve({
                                        query: {
                                            modal: JSON.stringify({
                                                name: this.userStore.isAuthed ? $e.bZ : $e.bn
                                            })
                                        }
                                    }).href
                                }
                            }
                        },
                        style() {
                            return {
                                "--home__header-carousel-width": j.fv[this.$options.SlideType.DEFAULT].width,
                                "--home__header-carousel-height": j.fv[this.$options.SlideType.DEFAULT].height
                            }
                        }
                    }),
                    mounted() {
                        this.initialKzLang = this.currentLang
                    },
                    methods: {
                        onBannerStaticClick(e, t) {
                            this.$googleTagManager.handleCasinoEvent("banner_static", {
                                banner_name: e,
                                position_index: t
                            })
                        }
                    },
                    ResponsivePictureTypesEnum: W.ResponsivePictureTypesEnum,
                    BannerType: Z.$,
                    SlideType: Z.TD,
                    ROUTE_NAME: Ee.Z,
                    appConfig: V.appConfig,
                    CasinoPresetEnum: x.Py
                },
                xi = (0, Pe.Z)(ji, [
                    ["render", b],
                    ["__scopeId", "data-v-3bea4b3c"]
                ]),
                Zi = xi
        },
        763925: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => v
            });
            var n = i(166252);
            const a = ["src", "alt", "title"];

            function s(e, t, i, s, o, r) {
                var l;
                const c = (0, n.up)("VIcon");
                return !1 === e.isBadImageUrl && i.imageUrl ? ((0, n.wg)(), (0, n.iD)("img", {
                    key: 0,
                    src: i.imageUrl,
                    loading: "lazy",
                    alt: null != (l = i.title) ? l : "icon",
                    title: i.title,
                    onError: t[0] || (t[0] = t => e.isBadImageUrl = !0)
                }, null, 40, a)) : ((0, n.wg)(), (0, n.j4)(c, {
                    key: 1,
                    icon: r.icon
                }, null, 8, ["icon"]))
            }
            var o, r, l = i(559166),
                c = i(432519),
                d = i(112808);
            const p = null != (r = null == (o = d.appConfig.modules.casino) ? void 0 : o.categories) ? r : {},
                m = Object.freeze({
                    [p.favorites]: "favorite",
                    [p.popular]: "popular",
                    [p.all]: "all",
                    [p.slots]: "slots",
                    [p.roulette]: "roulette",
                    [p.live]: "live",
                    [p.blackJacks]: "blackjack",
                    [p.new]: "new",
                    [p.table]: "table",
                    [p.videoPoker]: "poker",
                    [p.multiplayer]: "multiply",
                    [p.scratchCards]: "scratch",
                    [p.other]: "other",
                    [c.B5.WARM]: "hot"
                }),
                u = {
                    components: {
                        VIcon: l.Z
                    },
                    props: {
                        categoryId: {
                            type: [String, Number],
                            default: p.all
                        },
                        imageUrl: {
                            type: String,
                            required: !1
                        },
                        title: {
                            type: String,
                            required: !1
                        }
                    },
                    data: () => ({
                        isBadImageUrl: !1
                    }),
                    computed: {
                        icon() {
                            var e;
                            const t = null != (e = m[this.categoryId]) ? e : "all";
                            return `casino/category/${t}`
                        }
                    }
                };
            var g = i(348118);
            const h = (0, g.Z)(u, [
                    ["render", s]
                ]),
                v = h
        },
        520697: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => g
            });
            var n = i(166252),
                a = i(3577);

            function s(e, t, i, s, o, r) {
                const l = (0, n.up)("VIcon");
                return (0, n.wg)(), (0, n.iD)("div", {
                    class: (0, a.C_)(["PaginationButton", [e.$style.root, i.theme && e.$style[e.$options.cssClassByTheme[i.theme]], i.left && e.$style.rootLeft, i.right && e.$style.rootRight]]),
                    onClick: t[0] || (t[0] = t => e.$emit("click"))
                }, [i.left ? ((0, n.wg)(), (0, n.j4)(l, {
                    key: 0,
                    class: (0, a.C_)(e.$style.icon),
                    icon: "chevron-left-new"
                }, null, 8, ["class"])) : (0, n.kq)("", !0), i.right ? ((0, n.wg)(), (0, n.j4)(l, {
                    key: 1,
                    class: (0, a.C_)(e.$style.icon),
                    icon: "chevron-right-new"
                }, null, 8, ["class"])) : (0, n.kq)("", !0)], 2)
            }
            var o = i(559166);
            const r = Object.freeze({
                    BLUE: "blue",
                    DEFAULT: "default"
                }),
                l = {
                    [r.BLUE]: "themeBlue",
                    [r.DEFAULT]: "themeDefault"
                },
                c = {
                    components: {
                        VIcon: o.Z
                    },
                    props: {
                        right: {
                            type: Boolean,
                            default: !1
                        },
                        left: {
                            type: Boolean,
                            default: !1
                        },
                        theme: {
                            type: String,
                            default: r.DEFAULT,
                            validator(e) {
                                return Object.values(r).includes(e)
                            }
                        }
                    },
                    emits: ["click"],
                    cssClassByTheme: l
                },
                d = {
                    root: "PaginationButton_root_GYvgd",
                    themeDefault: "PaginationButton_themeDefault_pyM43",
                    themeBlue: "PaginationButton_themeBlue_ToHle",
                    rootLeft: "PaginationButton_rootLeft_HQ5wi",
                    rootRight: "PaginationButton_rootRight__HD0w",
                    icon: "PaginationButton_icon_EDav_"
                };
            var p = i(348118);
            const m = {};
            m["$style"] = d;
            const u = (0, p.Z)(c, [
                    ["render", s],
                    ["__cssModules", m]
                ]),
                g = u
        },
        144954: (e, t, i) => {
            "use strict";
            i.d(t, {
                i: () => s
            });
            var n = i(602262),
                a = i(166252);
            const s = () => {
                const e = (0, n.XI)(),
                    t = (0, a.Fl)((() => {
                        var t;
                        return null == (t = e.value) ? void 0 : t.isEnd
                    })),
                    i = (0, a.Fl)((() => {
                        var t;
                        return null == (t = e.value) ? void 0 : t.isBeginning
                    })),
                    s = t => {
                        var i, n, a;
                        const s = (null != (n = null == (i = e.value) ? void 0 : i.activeIndex) ? n : 0) + t;
                        null == (a = e.value) || a.slideTo(s)
                    },
                    o = () => {
                        var t;
                        null == (t = e.value) || t.slideNext()
                    },
                    r = () => {
                        var t;
                        null == (t = e.value) || t.slidePrev()
                    },
                    l = t => {
                        e.value = t
                    };
                return {
                    setInstance: l,
                    isEnd: t,
                    isBeginning: i,
                    skip: s,
                    slideNext: o,
                    slidePrev: r
                }
            }
        },
        88631: (e, t, i) => {
            "use strict";
            i.d(t, {
                m: () => a
            });
            var n = i(112808);
            const a = e => `${n.appConfig.server.tvImagesUrl}/film-posters/${e.kinopoiskId}.jpg`
        },
        709251: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/empty-slide-cyber.ece5bd051-300.webp 300w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/empty-slide-cyber.ece5bd051-300.webp",
                    width: 300,
                    height: 348
                }],
                src: "https://v1.bundlecdn.com/img/empty-slide-cyber.ece5bd051-300.webp",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/empty-slide-cyber.ece5bd051-300.webp"
                },
                width: 300,
                height: 348
            }
        },
        850779: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/empty-slide-line.15ec0fd1f-300.webp 300w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/empty-slide-line.15ec0fd1f-300.webp",
                    width: 300,
                    height: 348
                }],
                src: "https://v1.bundlecdn.com/img/empty-slide-line.15ec0fd1f-300.webp",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/empty-slide-line.15ec0fd1f-300.webp"
                },
                width: 300,
                height: 348
            }
        },
        923454: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/empty-slide-cyber.b39ccdddc-300.webp 300w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/empty-slide-cyber.b39ccdddc-300.webp",
                    width: 300,
                    height: 348
                }],
                src: "https://v1.bundlecdn.com/img/empty-slide-cyber.b39ccdddc-300.webp",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/empty-slide-cyber.b39ccdddc-300.webp"
                },
                width: 300,
                height: 348
            }
        },
        771773: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/empty-slide-line.31cf1569a-300.webp 300w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/empty-slide-line.31cf1569a-300.webp",
                    width: 300,
                    height: 348
                }],
                src: "https://v1.bundlecdn.com/img/empty-slide-line.31cf1569a-300.webp",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/empty-slide-line.31cf1569a-300.webp"
                },
                width: 300,
                height: 348
            }
        },
        691337: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/empty-slide-cyber.9a7899e1f-300.webp 300w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/empty-slide-cyber.9a7899e1f-300.webp",
                    width: 300,
                    height: 348
                }],
                src: "https://v1.bundlecdn.com/img/empty-slide-cyber.9a7899e1f-300.webp",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/empty-slide-cyber.9a7899e1f-300.webp"
                },
                width: 300,
                height: 348
            }
        },
        488815: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/empty-slide-line.073ec9819-300.webp 300w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/empty-slide-line.073ec9819-300.webp",
                    width: 300,
                    height: 348
                }],
                src: "https://v1.bundlecdn.com/img/empty-slide-line.073ec9819-300.webp",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/empty-slide-line.073ec9819-300.webp"
                },
                width: 300,
                height: 348
            }
        },
        208401: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/home-poker-banner-bg.208ec677b-100.png 100w,https://v1.bundlecdn.com/img/home-poker-banner-bg.c0fe413df-200.png 200w,https://v1.bundlecdn.com/img/home-poker-banner-bg.bc0df2617-300.png 300w,https://v1.bundlecdn.com/img/home-poker-banner-bg.5b2fd80bf-400.png 400w,https://v1.bundlecdn.com/img/home-poker-banner-bg.daea5f5cb-600.png 600w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/home-poker-banner-bg.208ec677b-100.png",
                    width: 100,
                    height: 49
                }, {
                    path: "https://v1.bundlecdn.com/img/home-poker-banner-bg.c0fe413df-200.png",
                    width: 200,
                    height: 98
                }, {
                    path: "https://v1.bundlecdn.com/img/home-poker-banner-bg.bc0df2617-300.png",
                    width: 300,
                    height: 148
                }, {
                    path: "https://v1.bundlecdn.com/img/home-poker-banner-bg.5b2fd80bf-400.png",
                    width: 400,
                    height: 197
                }, {
                    path: "https://v1.bundlecdn.com/img/home-poker-banner-bg.daea5f5cb-600.png",
                    width: 600,
                    height: 295
                }],
                src: "https://v1.bundlecdn.com/img/home-poker-banner-bg.daea5f5cb-600.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/home-poker-banner-bg.daea5f5cb-600.png"
                },
                width: 600,
                height: 295
            }
        },
        451279: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/home-poker-banner-bg.083a5519f-100.webp 100w,https://v1.bundlecdn.com/img/home-poker-banner-bg.785faf272-200.webp 200w,https://v1.bundlecdn.com/img/home-poker-banner-bg.b4075394c-300.webp 300w,https://v1.bundlecdn.com/img/home-poker-banner-bg.938c9525d-400.webp 400w,https://v1.bundlecdn.com/img/home-poker-banner-bg.a77f0d650-600.webp 600w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/home-poker-banner-bg.083a5519f-100.webp",
                    width: 100,
                    height: 49
                }, {
                    path: "https://v1.bundlecdn.com/img/home-poker-banner-bg.785faf272-200.webp",
                    width: 200,
                    height: 98
                }, {
                    path: "https://v1.bundlecdn.com/img/home-poker-banner-bg.b4075394c-300.webp",
                    width: 300,
                    height: 148
                }, {
                    path: "https://v1.bundlecdn.com/img/home-poker-banner-bg.938c9525d-400.webp",
                    width: 400,
                    height: 197
                }, {
                    path: "https://v1.bundlecdn.com/img/home-poker-banner-bg.a77f0d650-600.webp",
                    width: 600,
                    height: 295
                }],
                src: "https://v1.bundlecdn.com/img/home-poker-banner-bg.a77f0d650-600.webp",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/home-poker-banner-bg.a77f0d650-600.webp"
                },
                width: 600,
                height: 295
            }
        },
        600285: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/sprite-dice-frame-luckystar.949d95773-288.png 288w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/sprite-dice-frame-luckystar.949d95773-288.png",
                    width: 288,
                    height: 288
                }],
                src: "https://v1.bundlecdn.com/img/sprite-dice-frame-luckystar.949d95773-288.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/sprite-dice-frame-luckystar.949d95773-288.png"
                },
                width: 288,
                height: 288
            }
        },
        171385: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/sprite-dice-frame@2.8e0d70675-256.png 256w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/sprite-dice-frame@2.8e0d70675-256.png",
                    width: 256,
                    height: 256
                }],
                src: "https://v1.bundlecdn.com/img/sprite-dice-frame@2.8e0d70675-256.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/sprite-dice-frame@2.8e0d70675-256.png"
                },
                width: 256,
                height: 256
            }
        },
        665530: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/sprite-dice@2.249a9af36-256.png 256w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/sprite-dice@2.249a9af36-256.png",
                    width: 256,
                    height: 12800
                }],
                src: "https://v1.bundlecdn.com/img/sprite-dice@2.249a9af36-256.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/sprite-dice@2.249a9af36-256.png"
                },
                width: 256,
                height: 12800
            }
        },
        312610: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/sprite-dice@2.6e1ac0ed1-256.webp 256w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/sprite-dice@2.6e1ac0ed1-256.webp",
                    width: 256,
                    height: 12800
                }],
                src: "https://v1.bundlecdn.com/img/sprite-dice@2.6e1ac0ed1-256.webp",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/sprite-dice@2.6e1ac0ed1-256.webp"
                },
                width: 256,
                height: 12800
            }
        },
        339281: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/sprite-poker-frame@2.50a0c1527-256.png 256w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/sprite-poker-frame@2.50a0c1527-256.png",
                    width: 256,
                    height: 256
                }],
                src: "https://v1.bundlecdn.com/img/sprite-poker-frame@2.50a0c1527-256.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/sprite-poker-frame@2.50a0c1527-256.png"
                },
                width: 256,
                height: 256
            }
        },
        590509: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/sprite-poker@2.a0689bfdc-256.png 256w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/sprite-poker@2.a0689bfdc-256.png",
                    width: 256,
                    height: 12800
                }],
                src: "https://v1.bundlecdn.com/img/sprite-poker@2.a0689bfdc-256.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/sprite-poker@2.a0689bfdc-256.png"
                },
                width: 256,
                height: 12800
            }
        },
        504339: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/sprite-poker@2.a38733e7a-256.webp 256w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/sprite-poker@2.a38733e7a-256.webp",
                    width: 256,
                    height: 12800
                }],
                src: "https://v1.bundlecdn.com/img/sprite-poker@2.a38733e7a-256.webp",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/sprite-poker@2.a38733e7a-256.webp"
                },
                width: 256,
                height: 12800
            }
        },
        484038: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/sprite-roulette-frame-luckystar.8dbe7af0b-288.png 288w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/sprite-roulette-frame-luckystar.8dbe7af0b-288.png",
                    width: 288,
                    height: 288
                }],
                src: "https://v1.bundlecdn.com/img/sprite-roulette-frame-luckystar.8dbe7af0b-288.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/sprite-roulette-frame-luckystar.8dbe7af0b-288.png"
                },
                width: 288,
                height: 288
            }
        },
        104477: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/sprite-roulette-frame@2.76ea5a241-256.png 256w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/sprite-roulette-frame@2.76ea5a241-256.png",
                    width: 256,
                    height: 256
                }],
                src: "https://v1.bundlecdn.com/img/sprite-roulette-frame@2.76ea5a241-256.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/sprite-roulette-frame@2.76ea5a241-256.png"
                },
                width: 256,
                height: 256
            }
        },
        80298: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/sprite-roulette@2.968ea6c22-256.png 256w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/sprite-roulette@2.968ea6c22-256.png",
                    width: 256,
                    height: 12800
                }],
                src: "https://v1.bundlecdn.com/img/sprite-roulette@2.968ea6c22-256.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/sprite-roulette@2.968ea6c22-256.png"
                },
                width: 256,
                height: 12800
            }
        },
        531884: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/sprite-roulette@2.255074856-256.webp 256w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/sprite-roulette@2.255074856-256.webp",
                    width: 256,
                    height: 12800
                }],
                src: "https://v1.bundlecdn.com/img/sprite-roulette@2.255074856-256.webp",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/sprite-roulette@2.255074856-256.webp"
                },
                width: 256,
                height: 12800
            }
        },
        310851: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/sprite-tvbet-frame@2.52cde99d0-256.png 256w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/sprite-tvbet-frame@2.52cde99d0-256.png",
                    width: 256,
                    height: 256
                }],
                src: "https://v1.bundlecdn.com/img/sprite-tvbet-frame@2.52cde99d0-256.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/sprite-tvbet-frame@2.52cde99d0-256.png"
                },
                width: 256,
                height: 256
            }
        },
        140252: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/sprite-tvbet@2.3b5ed1cbe-256.png 256w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/sprite-tvbet@2.3b5ed1cbe-256.png",
                    width: 256,
                    height: 12800
                }],
                src: "https://v1.bundlecdn.com/img/sprite-tvbet@2.3b5ed1cbe-256.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/sprite-tvbet@2.3b5ed1cbe-256.png"
                },
                width: 256,
                height: 12800
            }
        },
        42003: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/sprite-tvbet@2.888adc8ee-256.webp 256w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/sprite-tvbet@2.888adc8ee-256.webp",
                    width: 256,
                    height: 12800
                }],
                src: "https://v1.bundlecdn.com/img/sprite-tvbet@2.888adc8ee-256.webp",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/sprite-tvbet@2.888adc8ee-256.webp"
                },
                width: 256,
                height: 12800
            }
        }
    }
]);