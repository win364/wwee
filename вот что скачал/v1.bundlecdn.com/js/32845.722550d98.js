(self["webpackChunk_1win_frontend_main"] = self["webpackChunk_1win_frontend_main"] || []).push([
    [32845], {
        995441: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => A
            });
            var o = n(166252),
                s = n(602262),
                i = n(3577),
                r = n(322201),
                a = n(280894),
                l = n(549532),
                u = n.n(l),
                c = n(318786),
                p = n.n(c),
                d = n(526354),
                b = n.n(d),
                v = n(558832),
                g = n.n(v),
                m = n(81948),
                h = n(920346),
                y = n(945436),
                f = n(878417),
                S = n(112808),
                B = n(894710),
                w = n(305653),
                _ = n(59394),
                C = n(173870),
                F = Object.defineProperty,
                O = Object.defineProperties,
                x = Object.getOwnPropertyDescriptors,
                k = Object.getOwnPropertySymbols,
                R = Object.prototype.hasOwnProperty,
                T = Object.prototype.propertyIsEnumerable,
                I = (e, t, n) => t in e ? F(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                N = (e, t) => {
                    for (var n in t || (t = {})) R.call(t, n) && I(e, n, t[n]);
                    if (k)
                        for (var n of k(t)) T.call(t, n) && I(e, n, t[n]);
                    return e
                },
                z = (e, t) => O(e, x(t)),
                $ = (e, t, n) => new Promise(((o, s) => {
                    var i = e => {
                            try {
                                a(n.next(e))
                            } catch (t) {
                                s(t)
                            }
                        },
                        r = e => {
                            try {
                                a(n.throw(e))
                            } catch (t) {
                                s(t)
                            }
                        },
                        a = e => e.done ? o(e.value) : Promise.resolve(e.value).then(i, r);
                    a((n = n.apply(e, t)).next())
                }));
            const D = () => {
                const e = (0, y.gD)(),
                    t = (0, h.dd)(),
                    n = (0, a.oR)(),
                    i = (0, f.L)(),
                    l = (0, h.Jr)("common.bonuses.activeBonusBanner"),
                    u = (0, h.Fg)(),
                    c = (0, r.tv)(),
                    p = (0, s.Vh)((() => n.getters.isMobile)),
                    d = {
                        openRegisterModal: n => {
                            e.setDepositBonusId(n.id), t.open(p.value ? _.Ko : B.bn)
                        },
                        openCashier: n => {
                            e.setDepositBonusId(n.id), t.open(p.value ? _.bZ : B.bZ)
                        },
                        getFreespinBonus: t => $(void 0, null, (function*() {
                            yield e.activateNonDepositFreespin(t.id), yield e.init()
                        })),
                        activateNewBonus: e => {
                            t.open(p.value ? _.Fg : B.Fg, {
                                props: {
                                    bonus: e
                                }
                            })
                        },
                        redirectToFreespinGames: e => {
                            var t, n, o, s, i, r, a;
                            1 === (null != (n = null == (t = e.freespinBonusData) ? void 0 : t.gamesContent) ? n : []).length && u(null != (i = null == (s = null == (o = e.freespinBonusData) ? void 0 : o.gamesContent[0]) ? void 0 : s.id) ? i : ""), (null != (a = null == (r = e.freespinBonusData) ? void 0 : r.gamesContent) ? a : []).length > 1 && c.push({
                                name: p.value ? C.Z.CASINO_FREESPIN_GAMES : w.Z.CASINO_FREESPIN_GAMES,
                                params: {
                                    freespinId: e.id
                                }
                            })
                        },
                        openBonusLanding: e => {
                            t.open(p.value ? _.lT : B.lT, {
                                props: {
                                    bonus: e
                                }
                            })
                        },
                        openDepositBonusGames: () => {
                            var e, t;
                            c.replace(p.value ? {
                                name: C.Z.CASINO_CATEGORY,
                                params: {
                                    categoryId: null == (e = S.appConfig.modules.casino) ? void 0 : e.categories.forNewBonusBalance
                                }
                            } : {
                                name: w.Z.CASINO_LIST,
                                params: {
                                    category: null == (t = S.appConfig.modules.casino) ? void 0 : t.categories.forNewBonusBalance
                                }
                            })
                        }
                    },
                    b = (0, o.Fl)((() => {
                        var t, n, o;
                        const s = e.availableBonuses[0],
                            r = e.newBonuses[0],
                            {
                                activeBonus: a
                            } = e;
                        return s && !i.isAuthed ? z(N({}, s), {
                            buttonText: s.content.buttonText,
                            onButtonClick: () => {
                                d.openRegisterModal(s)
                            }
                        }) : (null == s ? void 0 : s.depositRequired) ? z(N({}, s), {
                            buttonText: s.content.buttonText,
                            onButtonClick: () => {
                                d.openCashier(s)
                            }
                        }) : s && !s.depositRequired ? z(N({}, s), {
                            buttonText: s.content.buttonText,
                            onButtonClick: () => {
                                d.getFreespinBonus(s)
                            }
                        }) : !r || "deposit" !== r.type && (null == (t = r.freespinBonusData) ? void 0 : t.statusId) !== m.RY.FREESPIN_WIN ? r && (null == (n = r.freespinBonusData) ? void 0 : n.statusId) === m.RY.FREESPIN_NEW ? z(N({}, r), {
                            buttonText: l.buttonPlay,
                            onButtonClick: () => {
                                d.redirectToFreespinGames(r)
                            }
                        }) : r && [m.RY.FREESPIN_UNFINISHED, m.RY.FREESPIN_LOSE].includes(null == (o = r.freespinBonusData) ? void 0 : o.statusId) ? z(N({}, r), {
                            buttonText: l.buttonDetails,
                            onButtonClick: () => {
                                d.openBonusLanding(r)
                            }
                        }) : a && "deposit" === a.type && "active" === e.activeBonusStatus ? z(N({}, a), {
                            buttonText: l.buttonPlay,
                            onButtonClick: d.openDepositBonusGames
                        }) : a && "freespin" === a.type && "active" === e.activeBonusStatus ? z(N({}, a), {
                            buttonText: l.buttonPlay,
                            onButtonClick: () => {
                                d.redirectToFreespinGames(a)
                            }
                        }) : a && "active" !== e.activeBonusStatus ? z(N({}, a), {
                            buttonText: l.buttonDetails,
                            onButtonClick: () => {
                                d.openBonusLanding(a)
                            }
                        }) : void 0 : z(N({}, r), {
                            buttonText: l.buttonActivate,
                            onButtonClick: () => {
                                d.activateNewBonus(r)
                            }
                        })
                    }));
                return {
                    bannerContent: b
                }
            };
            var E = n(510174);
            const P = ["src"],
                j = ["src"],
                Z = (0, o.aZ)({
                    __name: "BonusBanner",
                    setup(e) {
                        const t = (0, a.oR)(),
                            n = (0, r.tv)(),
                            l = (0, h.Jr)("common.bonuses.activeBonusBanner"),
                            c = (0, s.Vh)((() => t.getters.isMobile)),
                            {
                                bannerContent: d
                            } = D(),
                            v = () => {
                                n.replace({
                                    name: w.Z.BONUSES
                                })
                            },
                            m = (0, o.Fl)((() => {
                                const e = c.value ? 14 : 18,
                                    t = c.value ? 14 : 10;
                                return {
                                    lines: [{
                                        maxFontSize: e,
                                        minFontSize: t
                                    }]
                                }
                            })),
                            y = (0, o.Fl)((() => {
                                if (!d.value) return;
                                const {
                                    gradientLeft: e,
                                    gradientRight: t
                                } = d.value.content;
                                return `linear-gradient(135deg, ${e}, ${t})`
                            })),
                            f = (0, o.Fl)((() => {
                                var e;
                                return {
                                    1: c.value ? p().src : u().src,
                                    3: c.value ? g().src : b().src
                                }[null == (e = d.value) ? void 0 : e.content.designType]
                            }));
                        return (e, t) => {
                            var n, r;
                            return (0, s.SU)(d) ? ((0, o.wg)(), (0, o.iD)("div", {
                                key: 0,
                                class: (0, i.C_)(c.value ? e.$style.rootMobile : e.$style.root),
                                style: (0, i.j5)({
                                    backgroundImage: y.value
                                })
                            }, [f.value ? ((0, o.wg)(), (0, o.iD)("img", {
                                key: 0,
                                src: f.value,
                                class: (0, i.C_)(e.$style.image)
                            }, null, 10, P)) : (0, o.kq)("", !0), (0, o._)("div", {
                                class: (0, i.C_)(e.$style.content)
                            }, [(0, o._)("div", {
                                class: (0, i.C_)(e.$style.title)
                            }, (0, i.zw)(null == (n = (0, s.SU)(d).content) ? void 0 : n.title), 3), (0, o.Wm)(E.Z, {
                                tag: "button",
                                type: "button",
                                text: null != (r = (0, s.SU)(d).buttonText) ? r : "",
                                options: m.value,
                                class: (0, i.C_)(e.$style.button),
                                onClick: (0, s.SU)(d).onButtonClick
                            }, null, 8, ["text", "options", "class", "onClick"])], 2)], 6)) : c.value ? (0, o.kq)("", !0) : ((0, o.wg)(), (0, o.iD)("div", {
                                key: 1,
                                class: (0, i.C_)(e.$style.rootStatic)
                            }, [(0, o._)("img", {
                                src: (0, s.SU)(u()).src,
                                class: (0, i.C_)(e.$style.image)
                            }, null, 10, j), (0, o._)("div", {
                                class: (0, i.C_)(e.$style.content)
                            }, [(0, o._)("div", {
                                class: (0, i.C_)(e.$style.title)
                            }, (0, i.zw)((0, s.SU)(l).staticTitle), 3), (0, o.Wm)(E.Z, {
                                tag: "button",
                                type: "button",
                                text: (0, s.SU)(l).staticButton,
                                options: m.value,
                                class: (0, i.C_)(e.$style.button),
                                onClick: v
                            }, null, 8, ["text", "options", "class"])], 2)], 2))
                        }
                    }
                }),
                W = {
                    root: "BonusBanner_root_SbAJH",
                    content: "BonusBanner_content_Td2oV",
                    title: "BonusBanner_title_THDHp",
                    button: "BonusBanner_button_jKQ1q",
                    image: "BonusBanner_image_M2vbc",
                    rootMobile: "BonusBanner_rootMobile_MqjTv BonusBanner_root_SbAJH",
                    rootStatic: "BonusBanner_rootStatic__EWJa BonusBanner_root_SbAJH"
                };
            var L = n(348118);
            const M = {};
            M["$style"] = W;
            const G = (0, L.Z)(Z, [
                    ["__cssModules", M]
                ]),
                A = G
        },
        696814: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var o = n(166252),
                s = n(3577),
                i = n(602262),
                r = n(931338);
            const a = "analytics-13538-a-a-b-vidzheta-dzhekpot",
                l = "treatment",
                u = () => {
                    const {
                        value: e
                    } = (0, r.y)(a), t = (0, i.Vh)((() => e.value === l));
                    return {
                        isNewWidgetEnabled: t
                    }
                },
                c = (0, o.aZ)({
                    __name: "JackpotEntry",
                    props: {
                        withTitle: {
                            type: Boolean,
                            default: !0
                        },
                        tile: {
                            type: Boolean
                        },
                        isSmall: {
                            type: Boolean
                        },
                        preset: {
                            default: void 0
                        }
                    },
                    setup(e) {
                        const t = e,
                            i = {
                                new: (0, o.RC)((() => Promise.all([n.e(88627), n.e(31771)]).then(n.bind(n, 631771)))),
                                old: (0, o.RC)((() => Promise.all([n.e(88627), n.e(2708)]).then(n.bind(n, 902708))))
                            },
                            {
                                isNewWidgetEnabled: r
                            } = u(),
                            a = (0, o.Fl)((() => r.value ? i.new : i.old));
                        return (e, n) => a.value ? ((0, o.wg)(), (0, o.j4)((0, o.LL)(a.value), (0, s.vs)((0, o.dG)({
                            key: 0
                        }, t)), null, 16)) : (0, o.kq)("", !0)
                    }
                }),
                p = c,
                d = p
        },
        510174: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => F
            });
            var o = n(166252);

            function s(e, t, n, s, i, r) {
                return (0, o.wg)(), (0, o.j4)((0, o.LL)(n.tag), (0, o.dG)({
                    style: r.style
                }, e.$attrs, {
                    innerHTML: s.DOMPurify.sanitize(n.text)
                }), null, 16, ["style", "innerHTML"])
            }
            var i = n(827856),
                r = n.n(i),
                a = n(142454),
                l = n(250576),
                u = n(909997),
                c = Object.defineProperty,
                p = Object.defineProperties,
                d = Object.getOwnPropertyDescriptors,
                b = Object.getOwnPropertySymbols,
                v = Object.prototype.hasOwnProperty,
                g = Object.prototype.propertyIsEnumerable,
                m = (e, t, n) => t in e ? c(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                h = (e, t) => {
                    for (var n in t || (t = {})) v.call(t, n) && m(e, n, t[n]);
                    if (b)
                        for (var n of b(t)) g.call(t, n) && m(e, n, t[n]);
                    return e
                },
                y = (e, t) => p(e, d(t));
            const f = ["fontFamily", "fontWeight", "letterSpacing", "lineHeight", "textTransform"],
                S = (e, t) => {
                    const n = document.createElement("div");
                    for (const [o, s] of Object.entries(e)) n.style[o] = s;
                    return n.style.display = "inline-block", n.textContent = t, document.body.prepend(n), n
                },
                B = (0, a.Z)(((e, t, n, o) => {
                    const s = S(y(h({}, n), {
                            width: `${e}px`
                        }), t),
                        i = e => {
                            if (o.lines[e].styles)
                                for (const [t, n] of Object.entries(o.lines[e].styles)) s.style[t] = n
                        },
                        r = (e, t) => {
                            const n = o.lines[e];
                            s.style.fontSize = `${t}px`;
                            const a = Number.parseInt(window.getComputedStyle(s).lineHeight, 10),
                                l = Math.round(s.offsetHeight / a);
                            if (l > e + 1 || s.scrollWidth > s.offsetWidth) {
                                if (t > n.minFontSize) return r(e, t - 1);
                                if (e + 1 < o.lines.length) {
                                    const n = o.lines[e + 1].maxFontSize;
                                    return i(e + 1), r(e + 1, t > n ? n : t)
                                }
                            }
                            return s.remove(), {
                                fontSize: t,
                                indexLineOptions: e
                            }
                        };
                    return i(0), r(0, o.lines[0].maxFontSize)
                }), ((...e) => JSON.stringify(e))),
                w = {
                    name: "ResponsiveFontSize",
                    props: {
                        options: {
                            type: Object,
                            required: !0
                        },
                        text: {
                            type: String,
                            required: !0
                        },
                        tag: {
                            type: String,
                            default: "div"
                        }
                    },
                    setup() {
                        return {
                            DOMPurify: r()
                        }
                    },
                    data: () => ({
                        width: null,
                        computedFontStyle: null,
                        fontSize: null,
                        indexLineOptions: 0
                    }),
                    computed: {
                        style() {
                            return y(h({}, this.options.lines[this.indexLineOptions].styles), {
                                fontSize: `${this.fontSize}px`
                            })
                        },
                        calcFontSizeTrigger() {
                            return {
                                width: this.width,
                                text: this.text,
                                computedFontStyle: this.computedFontStyle
                            }
                        }
                    },
                    watch: {
                        calcFontSizeTrigger: "calcFontSize",
                        options() {
                            this.calcComputedFontStyle(), this.calcFontSize()
                        }
                    },
                    mounted() {
                        const {
                            paddingLeft: e,
                            paddingRight: t
                        } = window.getComputedStyle(this.$el);
                        this.width = Math.round(this.$el.clientWidth - Number.parseFloat(e) - Number.parseFloat(t)), this.calcComputedFontStyle(), this.addResizeObserver()
                    },
                    beforeUnmount() {
                        this.removeResizeObserver()
                    },
                    methods: {
                        calcComputedFontStyle() {
                            const e = window.getComputedStyle(this.$el),
                                t = Object.fromEntries(f.map((t => [t, e[t]])));
                            (0, l.Z)(t, this.computedFontStyle) || (this.computedFontStyle = t)
                        },
                        calcFontSize() {
                            if (!this.width) return;
                            const {
                                fontSize: e,
                                indexLineOptions: t
                            } = B(this.width, this.text, this.computedFontStyle, this.options);
                            this.fontSize = e, this.indexLineOptions = t
                        },
                        addResizeObserver() {
                            this.resizeObserver = (0, u.Sp)((([{
                                contentRect: {
                                    width: e
                                }
                            }]) => {
                                this.width = Math.round(e)
                            })), this.resizeObserver.observe(this.$el)
                        },
                        removeResizeObserver() {
                            this.resizeObserver.unobserve(this.$el)
                        }
                    }
                };
            var _ = n(348118);
            const C = (0, _.Z)(w, [
                    ["render", s]
                ]),
                F = C
        },
        66894: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var o = n(166252),
                s = n(3577);
            const i = {
                    class: "WithSelfBlurGlow"
                },
                r = {
                    class: "WithSelfBlurGlow__content-wrapper"
                };

            function a(e, t, n, a, l, u) {
                return (0, o.wg)(), (0, o.iD)("div", i, [n.disabled ? (0, o.kq)("", !0) : ((0, o.wg)(), (0, o.iD)("div", {
                    key: 0,
                    class: "WithSelfBlurGlow__glow-surrogate",
                    style: (0, s.j5)(u.glowSurrogateWrapperStyle)
                }, [(0, o.WI)(e.$slots, "default", {}, void 0, !0)], 4)), (0, o._)("div", r, [(0, o.WI)(e.$slots, "default", {}, void 0, !0)])])
            }
            const l = {
                props: {
                    disabled: Boolean,
                    amount: {
                        type: [Number, String],
                        required: !0
                    },
                    offsetTop: {
                        type: [Number, String],
                        default: 0
                    },
                    power: {
                        type: [Number, String],
                        default: 1
                    },
                    saturate: {
                        type: [Number, String],
                        default: 1
                    }
                },
                computed: {
                    glowSurrogateWrapperStyle() {
                        return `\n                filter: blur(${this.amount}px) saturate(${this.saturate});\n                top: ${this.offsetTop}px;\n                opacity: ${this.power};\n                transform: translateZ(0px);\n            `
                    }
                }
            };
            var u = n(348118);
            const c = (0, u.Z)(l, [
                    ["render", a],
                    ["__scopeId", "data-v-0ea06900"]
                ]),
                p = c
        },
        349328: (e, t, n) => {
            "use strict";
            n.d(t, {
                K: () => u
            });
            var o = n(166252),
                s = n(280894),
                i = n(931338);
            const r = "an-16648-games-category-replace-south-korea",
                a = "group_b",
                l = "group_c",
                u = () => {
                    const e = (0, s.oR)(),
                        {
                            value: t
                        } = (0, i.y)(r),
                        n = (0, o.Fl)((() => t.value === a && "KR" === e.state.country)),
                        u = (0, o.Fl)((() => t.value === l && "KR" === e.state.country));
                    return {
                        isDisplayWidgetsGroupB: n,
                        isDisplayWidgetsGroupC: u
                    }
                }
        },
        439670: (e, t, n) => {
            "use strict";
            n.d(t, {
                V: () => v
            });
            var o = n(166252),
                s = n(280894),
                i = n(931338);
            const r = "an-17597-fastplay-retest-russia",
                a = "an-17597-fastplay-retest-india",
                l = "an-17597-fastplay-retest-argentina",
                u = "an-17597-fastplay-retest-ghana",
                c = "an-17597-fastplay-retest-colombia",
                p = "an-17597-fastplay-retest-indonesia",
                d = "an-17597-fastplay-retest-ivory-coast",
                b = "group_b",
                v = () => {
                    const e = (0, s.oR)(),
                        {
                            value: t
                        } = (0, i.y)(r),
                        {
                            value: n
                        } = (0, i.y)(a),
                        {
                            value: v
                        } = (0, i.y)(l),
                        {
                            value: g
                        } = (0, i.y)(u),
                        {
                            value: m
                        } = (0, i.y)(c),
                        {
                            value: h
                        } = (0, i.y)(p),
                        {
                            value: y
                        } = (0, i.y)(d),
                        f = (0, o.Fl)((() => t.value === b && "RU" === e.state.country || n.value === b && "IN" === e.state.country || v.value === b && "AR" === e.state.country || g.value === b && "GH" === e.state.country || h.value === b && "ID" === e.state.country || y.value === b && "CI" === e.state.country || m.value === b && "CO" === e.state.country));
                    return {
                        isFastPlayEnabled: f
                    }
                }
        },
        549532: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/banner-deposit-desktop.15e50327f-540.png 540w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/banner-deposit-desktop.15e50327f-540.png",
                    width: 540,
                    height: 556
                }],
                src: "https://v1.bundlecdn.com/img/banner-deposit-desktop.15e50327f-540.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/banner-deposit-desktop.15e50327f-540.png"
                },
                width: 540,
                height: 556
            }
        },
        318786: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/banner-deposit-mobile.afe4a1ea3-328.png 328w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/banner-deposit-mobile.afe4a1ea3-328.png",
                    width: 328,
                    height: 368
                }],
                src: "https://v1.bundlecdn.com/img/banner-deposit-mobile.afe4a1ea3-328.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/banner-deposit-mobile.afe4a1ea3-328.png"
                },
                width: 328,
                height: 368
            }
        },
        526354: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/banner-freespin-desktop.6d0cf1073-540.png 540w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/banner-freespin-desktop.6d0cf1073-540.png",
                    width: 540,
                    height: 640
                }],
                src: "https://v1.bundlecdn.com/img/banner-freespin-desktop.6d0cf1073-540.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/banner-freespin-desktop.6d0cf1073-540.png"
                },
                width: 540,
                height: 640
            }
        },
        558832: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/banner-freespin-mobile.d6b31c72e-328.png 328w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/banner-freespin-mobile.d6b31c72e-328.png",
                    width: 328,
                    height: 368
                }],
                src: "https://v1.bundlecdn.com/img/banner-freespin-mobile.d6b31c72e-328.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/banner-freespin-mobile.d6b31c72e-328.png"
                },
                width: 328,
                height: 368
            }
        }
    }
]);