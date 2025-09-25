"use strict";
(self["webpackChunk_1win_frontend_main"] = self["webpackChunk_1win_frontend_main"] || []).push([
    [17450], {
        617450: (t, e, o) => {
            o.r(e), o.d(e, {
                default: () => hi
            });
            var i = o(166252),
                n = o(3577);

            function s(t, e, o, s, l, a) {
                var r, c;
                const p = (0, i.up)("Logo"),
                    u = (0, i.up)("ContactSection"),
                    g = (0, i.up)("NavigationSectionLS"),
                    _ = (0, i.up)("NavigationSection"),
                    m = (0, i.up)("ApplicationSection"),
                    d = (0, i.up)("OwnerBlock"),
                    y = (0, i.up)("SocialList"),
                    h = (0, i.up)("SportsPromotionSection"),
                    k = (0, i.up)("GamblingLinks"),
                    C = (0, i.up)("ChangeLanguageSection"),
                    f = (0, i.up)("PaymentSection"),
                    v = (0, i.up)("LicenseSection");
                return (0, i.wg)(), (0, i.iD)("footer", {
                    class: (0, n.C_)(a.footerClass)
                }, [(0, i._)("div", {
                    class: (0, n.C_)(t.$style.logoContainer)
                }, [(0, i._)("div", {
                    class: (0, n.C_)(t.$style.logoWrapper)
                }, [(0, i.Wm)(p, {
                    class: (0, n.C_)(t.$style.logo)
                }, null, 8, ["class"])], 2), (0, i._)("div", {
                    class: (0, n.C_)(t.$style.logoSeparator)
                }, null, 2)], 2), (0, i._)("div", {
                    class: (0, n.C_)(t.$style.navSection)
                }, [(0, i._)("div", {
                    class: (0, n.C_)(t.$style.leftSection)
                }, [(0, i.Wm)(u, {
                    class: (0, n.C_)(t.$style.contactSection)
                }, null, 8, ["class"]), t.$options.isLuckyStarFooterDomains ? ((0, i.wg)(), (0, i.j4)(g, {
                    key: 0,
                    class: (0, n.C_)(t.$style.navigationSection)
                }, null, 8, ["class"])) : ((0, i.wg)(), (0, i.j4)(_, {
                    key: 1,
                    "rules-footer": o.rulesFooter,
                    class: (0, n.C_)([t.$style.navigationSection, s.showLegalInformation && t.$style.navigationSectionLarge])
                }, null, 8, ["rules-footer", "class"]))], 2), (0, i._)("div", {
                    class: (0, n.C_)(t.$style.rightSection)
                }, [t.$options.appConfig.modules.applications ? ((0, i.wg)(), (0, i.j4)(m, {
                    key: 0
                })) : (0, i.kq)("", !0), s.isOwnerBlockVisible ? ((0, i.wg)(), (0, i.j4)(d, {
                    key: 1
                })) : (0, i.kq)("", !0)], 2)], 2), (0, i._)("div", {
                    class: (0, n.C_)(t.$style.middleSeparator)
                }, null, 2), (0, i._)("div", {
                    class: (0, n.C_)(t.$style.promotionSection)
                }, [a.isSocialNetworksAvailable ? ((0, i.wg)(), (0, i.j4)(y, {
                    key: 0,
                    class: (0, n.C_)(t.$style.socialList)
                }, null, 8, ["class"])) : (0, i.kq)("", !0), (null == (r = t.$options.appConfig.layout.footer.associations) ? void 0 : r.length) ? ((0, i.wg)(), (0, i.j4)(h, {
                    key: 1,
                    desktop: "",
                    class: (0, n.C_)(t.$style.sportsPromotion)
                }, null, 8, ["class"])) : (0, i.kq)("", !0), t.$options.appConfig.layout.footer.gamblings ? ((0, i.wg)(), (0, i.j4)(k, {
                    key: 2,
                    class: (0, n.C_)(t.$style.gamblingLinks)
                }, null, 8, ["class"])) : (0, i.kq)("", !0), (0, i.Wm)(C)], 2), (null == (c = t.$options.appConfig.layout.footer.paymentMethods) ? void 0 : c.length) ? ((0, i.wg)(), (0, i.iD)(i.HY, {
                    key: 0
                }, [(0, i._)("div", {
                    class: (0, n.C_)(t.$style.separator)
                }, null, 2), (0, i.Wm)(f)], 64)) : (0, i.kq)("", !0), (0, i._)("div", {
                    class: (0, n.C_)(t.$style.separator)
                }, null, 2), (0, i.Wm)(v)], 2)
            }
            var l = o(280894),
                a = o(813082),
                r = o(940850),
                c = o(714466),
                p = o(248625),
                u = o(932256),
                g = o(384754),
                _ = o(136629),
                m = o(551543),
                d = o(112808);
            const y = ["href", "onClick"];

            function h(t, e, o, s, l, a) {
                const r = (0, i.up)("VIcon"),
                    c = (0, i.up)("SocialItemWrapper");
                return a.socialList.length > 0 ? ((0, i.wg)(), (0, i.iD)("div", {
                    key: 0,
                    class: (0, n.C_)(t.$style.root)
                }, [(0, i._)("ul", {
                    class: (0, n.C_)(t.$style.list)
                }, [((0, i.wg)(!0), (0, i.iD)(i.HY, null, (0, i.Ko)(a.socialList, (e => ((0, i.wg)(), (0, i.iD)("li", {
                    key: e.social,
                    class: (0, n.C_)(t.$style.item)
                }, [(0, i.Wm)(c, {
                    social: e.social
                }, {
                    default: (0, i.w5)((({
                        href: o,
                        gradientClassName: s,
                        iconName: l
                    }) => [(0, i._)("a", {
                        class: (0, n.C_)([t.$style.link, s]),
                        href: o,
                        rel: "noopener",
                        target: "_blank",
                        onClick: t => a.onClick(e.social)
                    }, [(0, i.Wm)(r, {
                        class: (0, n.C_)(t.$style.icon),
                        icon: `social/${l}`,
                        size: e.height || 21
                    }, null, 8, ["class", "icon", "size"])], 10, y)])),
                    _: 2
                }, 1032, ["social"])], 2)))), 128))], 2)], 2)) : (0, i.kq)("", !0)
            }
            var k = o(559166),
                C = o(790408),
                f = o(370359),
                v = Object.defineProperty,
                b = Object.defineProperties,
                w = Object.getOwnPropertyDescriptors,
                S = Object.getOwnPropertySymbols,
                $ = Object.prototype.hasOwnProperty,
                L = Object.prototype.propertyIsEnumerable,
                O = (t, e, o) => e in t ? v(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: o
                }) : t[e] = o,
                P = (t, e) => {
                    for (var o in e || (e = {})) $.call(e, o) && O(t, o, e[o]);
                    if (S)
                        for (var o of S(e)) L.call(e, o) && O(t, o, e[o]);
                    return t
                },
                N = (t, e) => b(t, w(e));
            const D = {
                    name: "SocialList",
                    components: {
                        SocialItemWrapper: C.Z,
                        VIcon: k.Z
                    },
                    computed: N(P({}, (0, l.Se)(["socialsWithLinks"])), {
                        socialList() {
                            const t = {
                                [f.Z.TELEGRAM]: {
                                    height: 15
                                },
                                [f.Z.VKONTAKTE]: {
                                    height: 21
                                },
                                [f.Z.YOUTUBE]: {
                                    height: 14
                                },
                                [f.Z.TWITTER]: {
                                    height: 17
                                }
                            };
                            return this.socialsWithLinks.map((e => P({
                                social: e
                            }, t[e])))
                        }
                    }),
                    methods: {
                        onClick(t) {
                            this.$googleTagManager.handleFooterEvent("social", {
                                social_network_name: t
                            })
                        }
                    }
                },
                F = {
                    root: "SocialList_root_I2PxQ",
                    list: "SocialList_list_KoppQ",
                    item: "SocialList_item_Sxv6_",
                    link: "SocialList_link_o9lLv"
                };
            var I = o(348118);
            const x = {};
            x["$style"] = F;
            const A = (0, I.Z)(D, [
                    ["render", h],
                    ["__cssModules", x]
                ]),
                j = A;

            function E(t, e, o, s, l, a) {
                var r, c;
                const p = (0, i.up)("FooterMobileApps"),
                    u = (0, i.up)("FooterDesktopApps");
                return t.isPwaIgnored || t.isDesktopApp || a.isPwa ? (0, i.kq)("", !0) : ((0, i.wg)(), (0, i.iD)("div", {
                    key: 0,
                    class: (0, n.C_)(t.$style.container)
                }, [(null == (r = t.$options.appConfig.modules.applications) ? void 0 : r.mobile) ? ((0, i.wg)(), (0, i.iD)("div", {
                    key: 0,
                    class: (0, n.C_)(t.$style.sectionMobile)
                }, [(0, i.Wm)(p, {
                    type: "ios",
                    onClick: e[0] || (e[0] = e => a.onClick(t.$options.OsEnum.IOS))
                }), (0, i.Wm)(p, {
                    type: "android",
                    class: (0, n.C_)(t.$style.android),
                    onClick: e[1] || (e[1] = e => a.onClick(t.$options.OsEnum.ANDROID))
                }, null, 8, ["class"])], 2)) : (0, i.kq)("", !0), (null == (c = t.$options.appConfig.modules.applications) ? void 0 : c.desktop) ? ((0, i.wg)(), (0, i.j4)(u, {
                    key: 1,
                    onClick: a.onClick
                }, null, 8, ["onClick"])) : (0, i.kq)("", !0)], 2))
            }
            var M = o(135058);

            function B(t, e, o, s, l, a) {
                const r = (0, i.up)("VIcon");
                return (0, i.wg)(), (0, i.iD)("div", {
                    class: (0, n.C_)(t.$style.container),
                    onClick: e[0] || (e[0] = (...t) => a.onClick && a.onClick(...t))
                }, [(0, i._)("div", {
                    class: (0, n.C_)(t.$style.sectionTop)
                }, [(0, i.Wm)(r, {
                    icon: a.isApple ? "apple-blue" : "windows-blue",
                    size: 25
                }, null, 8, ["icon"]), (0, i.Wm)(r, {
                    icon: "chevron-right-bold",
                    class: (0, n.C_)(t.$style.iconChevron),
                    size: 7
                }, null, 8, ["class"])], 2), (0, i._)("div", {
                    class: (0, n.C_)(t.$style.text)
                }, [(0, i._)("div", {
                    class: (0, n.C_)(t.$style.title)
                }, (0, n.zw)(a.text.title), 3), (0, i._)("div", {
                    class: (0, n.C_)(t.$style.subtitle)
                }, (0, n.zw)(a.isApple ? a.text.desktop.subtitleIos : a.text.desktop.subtitleWindows), 3)], 2)], 2)
            }
            var T = o(715983),
                R = Object.defineProperty,
                Z = Object.defineProperties,
                V = Object.getOwnPropertyDescriptors,
                W = Object.getOwnPropertySymbols,
                z = Object.prototype.hasOwnProperty,
                H = Object.prototype.propertyIsEnumerable,
                q = (t, e, o) => e in t ? R(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: o
                }) : t[e] = o,
                U = (t, e) => {
                    for (var o in e || (e = {})) z.call(e, o) && q(t, o, e[o]);
                    if (W)
                        for (var o of W(e)) H.call(e, o) && q(t, o, e[o]);
                    return t
                },
                Y = (t, e) => Z(t, V(e));
            const K = {
                    name: "FooterDesktopApps",
                    components: {
                        VIcon: k.Z
                    },
                    inject: ["$platform"],
                    emits: ["click"],
                    computed: Y(U({}, (0, l.Se)(["lang"])), {
                        text() {
                            return this.lang.footer.applicationButtons
                        },
                        isApple() {
                            return this.$platform.desktop.apple.mac
                        }
                    }),
                    methods: {
                        onClick() {
                            this.$emit("click"), T.Z.popup()
                        }
                    }
                },
                G = {
                    container: "FooterDesktopApps_container_uDP3I",
                    iconChevron: "FooterDesktopApps_iconChevron_pqKhR",
                    sectionTop: "FooterDesktopApps_sectionTop_V_lYl",
                    text: "FooterDesktopApps_text_a6XB2",
                    title: "FooterDesktopApps_title_Xi5o5",
                    subtitle: "FooterDesktopApps_subtitle_BG97M"
                },
                J = {};
            J["$style"] = G;
            const Q = (0, I.Z)(K, [
                    ["render", B],
                    ["__cssModules", J]
                ]),
                X = Q;

            function tt(t, e, o, s, l, a) {
                const r = (0, i.up)("VIcon"),
                    c = (0, i.up)("MobilePWAInfoTooltip"),
                    p = (0, i.up)("TooltipHover");
                return (0, i.wg)(), (0, i.j4)(p, {
                    placement: "top",
                    strategy: "absolute",
                    offset: [0, 15]
                }, {
                    tooltip: (0, i.w5)((() => [(0, i.Wm)(c, {
                        platform: o.type
                    }, null, 8, ["platform"])])),
                    default: (0, i.w5)((() => [(0, i._)("div", {
                        class: (0, n.C_)(t.$style.container)
                    }, [(0, i.Wm)(r, {
                        icon: a.icon,
                        size: 23,
                        class: (0, n.C_)(t.$style.icon)
                    }, null, 8, ["icon", "class"]), (0, i._)("div", {
                        class: (0, n.C_)(t.$style.text)
                    }, [(0, i._)("div", {
                        class: (0, n.C_)(t.$style.title)
                    }, (0, n.zw)(a.text.title), 3), (0, i._)("div", {
                        class: (0, n.C_)(t.$style.subtitle)
                    }, (0, n.zw)(a.text[o.type].subtitle), 3)], 2), (0, i.Wm)(r, {
                        icon: "question-circle",
                        size: 10,
                        class: (0, n.C_)(t.$style.question)
                    }, null, 8, ["class"])], 2)])),
                    _: 1
                })
            }
            var et = o(336373),
                ot = o(715764),
                it = o(967861),
                nt = Object.defineProperty,
                st = Object.defineProperties,
                lt = Object.getOwnPropertyDescriptors,
                at = Object.getOwnPropertySymbols,
                rt = Object.prototype.hasOwnProperty,
                ct = Object.prototype.propertyIsEnumerable,
                pt = (t, e, o) => e in t ? nt(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: o
                }) : t[e] = o,
                ut = (t, e) => {
                    for (var o in e || (e = {})) rt.call(e, o) && pt(t, o, e[o]);
                    if (at)
                        for (var o of at(e)) ct.call(e, o) && pt(t, o, e[o]);
                    return t
                },
                gt = (t, e) => st(t, lt(e));
            const _t = {
                    name: "FooterMobileApps",
                    components: {
                        TooltipHover: et.Z,
                        MobilePWAInfoTooltip: it.Z,
                        VIcon: k.Z
                    },
                    props: {
                        type: {
                            type: String,
                            default: "android",
                            validator: t => ["android", "ios"].includes(t)
                        }
                    },
                    data: () => ({
                        PLATFORM_IOS: ot.p.PLATFORM_IOS
                    }),
                    computed: gt(ut({}, (0, l.Se)(["lang"])), {
                        text() {
                            return this.lang.footer.applicationButtons
                        },
                        icon() {
                            return {
                                android: "android-2",
                                ios: "ios"
                            }[this.type]
                        }
                    })
                },
                mt = {
                    container: "FooterMobileApps_container_cOabW",
                    question: "FooterMobileApps_question_s35NH",
                    icon: "FooterMobileApps_icon_IQ5EC",
                    text: "FooterMobileApps_text_s_4vN",
                    title: "FooterMobileApps_title_TNcHs",
                    subtitle: "FooterMobileApps_subtitle_zUaR4"
                },
                dt = {};
            dt["$style"] = mt;
            const yt = (0, I.Z)(_t, [
                    ["render", tt],
                    ["__cssModules", dt]
                ]),
                ht = yt;
            var kt = Object.defineProperty,
                Ct = Object.defineProperties,
                ft = Object.getOwnPropertyDescriptors,
                vt = Object.getOwnPropertySymbols,
                bt = Object.prototype.hasOwnProperty,
                wt = Object.prototype.propertyIsEnumerable,
                St = (t, e, o) => e in t ? kt(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: o
                }) : t[e] = o,
                $t = (t, e) => {
                    for (var o in e || (e = {})) bt.call(e, o) && St(t, o, e[o]);
                    if (vt)
                        for (var o of vt(e)) wt.call(e, o) && St(t, o, e[o]);
                    return t
                },
                Lt = (t, e) => Ct(t, ft(e));
            const Ot = {
                    name: "ApplicationSection",
                    components: {
                        FooterDesktopApps: X,
                        FooterMobileApps: ht
                    },
                    inject: ["$platform"],
                    computed: Lt($t({}, (0, l.Se)(["isDesktopApp", "isPwaIgnored"])), {
                        isPwa() {
                            return this.$platform.pwa.any
                        }
                    }),
                    methods: {
                        onClick(t) {
                            this.$googleTagManager.handleFooterEvent("app", {
                                app_platform: t || (this.$platform.desktop.apple.mac ? M.GV.MACOS : M.GV.WINDOWS)
                            })
                        }
                    },
                    appConfig: d.appConfig,
                    OsEnum: M.GV
                },
                Pt = {
                    container: "ApplicationSection_container_dSdRG",
                    sectionMobile: "ApplicationSection_sectionMobile_zSdAB",
                    android: "ApplicationSection_android_ZfXH3"
                },
                Nt = {};
            Nt["$style"] = Pt;
            const Dt = (0, I.Z)(Ot, [
                    ["render", E],
                    ["__cssModules", Nt]
                ]),
                Ft = Dt;

            function It(t, e, o, s, l, a) {
                const r = (0, i.up)("ChangeLanguage"),
                    c = (0, i.up)("VIcon"),
                    p = (0, i.up)("VButton");
                return (0, i.wg)(), (0, i.iD)("div", {
                    class: (0, n.C_)(t.$style.container)
                }, [(0, i.Wm)(r, {
                    "is-footer-theme": ""
                }), a.notPWA ? ((0, i.wg)(), (0, i.iD)("div", {
                    key: 0,
                    class: (0, n.C_)(t.$style.spacer)
                }, null, 2)) : (0, i.kq)("", !0), a.notPWA ? ((0, i.wg)(), (0, i.j4)(p, {
                    key: 1,
                    type: "dark-gradient",
                    class: (0, n.C_)(t.$style.button),
                    onClick: a.goToMobile
                }, {
                    default: (0, i.w5)((() => [(0, i.Wm)(c, {
                        icon: "mobile",
                        size: 20
                    })])),
                    _: 1
                }, 8, ["class", "onClick"])) : (0, i.kq)("", !0), (0, i._)("div", {
                    class: (0, n.C_)(t.$style.spacer)
                }, null, 2), (0, i.Wm)(p, {
                    type: "dark-gradient",
                    class: (0, n.C_)(t.$style.button),
                    onClick: a.scrollToTop
                }, {
                    default: (0, i.w5)((() => [(0, i.Wm)(c, {
                        icon: "up-window",
                        size: 20
                    })])),
                    _: 1
                }, 8, ["class", "onClick"])], 2)
            }
            var xt = o(583582),
                At = o(884297),
                jt = o(636406),
                Et = Object.defineProperty,
                Mt = Object.defineProperties,
                Bt = Object.getOwnPropertyDescriptors,
                Tt = Object.getOwnPropertySymbols,
                Rt = Object.prototype.hasOwnProperty,
                Zt = Object.prototype.propertyIsEnumerable,
                Vt = (t, e, o) => e in t ? Et(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: o
                }) : t[e] = o,
                Wt = (t, e) => {
                    for (var o in e || (e = {})) Rt.call(e, o) && Vt(t, o, e[o]);
                    if (Tt)
                        for (var o of Tt(e)) Zt.call(e, o) && Vt(t, o, e[o]);
                    return t
                },
                zt = (t, e) => Mt(t, Bt(e));
            const Ht = {
                    name: "ChangeLanguageSection",
                    components: {
                        ChangeLanguage: jt.Z,
                        VButton: xt.Z,
                        VIcon: k.Z
                    },
                    inject: ["$platform"],
                    computed: zt(Wt({}, (0, l.Se)(["isDesktopApp", "isPwaIgnored"])), {
                        notPWA() {
                            return !this.isPwaIgnored && !this.$platform.pwa.any && !this.isDesktopApp
                        }
                    }),
                    methods: {
                        goToMobile() {
                            At.J_.set(At.pM, u.mvW), window.location.reload(), this.$googleTagManager.handleFooterEvent("button", {
                                element_name: "mobile"
                            })
                        },
                        scrollToTop() {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            }), this.$googleTagManager.handleFooterEvent("button", {
                                element_name: "to_top"
                            })
                        }
                    }
                },
                qt = {
                    container: "ChangeLanguageSection_container_mFUw2",
                    button: "ChangeLanguageSection_button_w2jBF",
                    spacer: "ChangeLanguageSection_spacer_Zshee"
                },
                Ut = {};
            Ut["$style"] = qt;
            const Yt = (0, I.Z)(Ht, [
                    ["render", It],
                    ["__cssModules", Ut]
                ]),
                Kt = Yt,
                Gt = ["href"];

            function Jt(t, e, o, s, l, a) {
                const r = (0, i.up)("SupportButton");
                return (0, i.wg)(), (0, i.iD)("div", {
                    class: (0, n.C_)(t.$style.container)
                }, [(0, i._)("div", {
                    class: (0, n.C_)(t.$style.title)
                }, (0, n.zw)(a.text.suport), 3), (0, i._)("div", {
                    class: (0, n.C_)(t.$style.subtitle)
                }, (0, n.zw)(a.text.suport_subtitle), 3), t.supportNumber ? ((0, i.wg)(), (0, i.iD)("div", {
                    key: 0,
                    class: (0, n.C_)(t.$style.phone)
                }, [(0, i.Wm)(r, {
                    type: "call",
                    onClick: a.call
                }, null, 8, ["onClick"]), (0, i._)("a", {
                    href: `tel:${t.supportNumber}`,
                    class: (0, n.C_)(t.$style.link),
                    onClick: e[0] || (e[0] = (...t) => a.sendAnalyticsEvent && a.sendAnalyticsEvent(...t))
                }, (0, n.zw)(a.supportNumberVisually), 11, Gt)], 2)) : (0, i.kq)("", !0)], 2)
            }
            var Qt = o(216196);

            function Xt(t, e, o, s, l, a) {
                const r = (0, i.up)("VIcon"),
                    c = (0, i.up)("VButton");
                return (0, i.wg)(), (0, i.j4)(c, {
                    class: (0, n.C_)(t.$style.button),
                    onClick: a.onClick
                }, {
                    default: (0, i.w5)((() => [(0, i.Wm)(r, {
                        icon: a.icon,
                        size: 12
                    }, null, 8, ["icon"])])),
                    _: 1
                }, 8, ["class", "onClick"])
            }
            const te = {
                    components: {
                        VButton: xt.Z,
                        VIcon: k.Z
                    },
                    props: {
                        type: {
                            type: String,
                            default: "chat",
                            validator: t => ["chat", "call"].includes(t)
                        }
                    },
                    emits: ["click"],
                    computed: {
                        icon() {
                            return {
                                chat: "comment",
                                call: "phone"
                            }[this.type]
                        }
                    },
                    methods: {
                        onClick(t) {
                            this.$emit("click", t)
                        }
                    }
                },
                ee = {
                    button: "SupportButton_button_Bqph9"
                },
                oe = {};
            oe["$style"] = ee;
            const ie = (0, I.Z)(te, [
                    ["render", Xt],
                    ["__cssModules", oe]
                ]),
                ne = ie;
            var se = Object.defineProperty,
                le = Object.defineProperties,
                ae = Object.getOwnPropertyDescriptors,
                re = Object.getOwnPropertySymbols,
                ce = Object.prototype.hasOwnProperty,
                pe = Object.prototype.propertyIsEnumerable,
                ue = (t, e, o) => e in t ? se(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: o
                }) : t[e] = o,
                ge = (t, e) => {
                    for (var o in e || (e = {})) ce.call(e, o) && ue(t, o, e[o]);
                    if (re)
                        for (var o of re(e)) pe.call(e, o) && ue(t, o, e[o]);
                    return t
                },
                _e = (t, e) => le(t, ae(e));
            const me = {
                    name: "ContactSection",
                    components: {
                        SupportButton: ne
                    },
                    appConfig: d.appConfig,
                    computed: _e(ge({}, (0, l.Se)(["lang", "supportNumber"])), {
                        text() {
                            return this.lang.footer
                        },
                        supportNumberVisually() {
                            return (0, Qt.CN)(this.supportNumber)
                        }
                    }),
                    methods: {
                        call() {
                            this.sendAnalyticsEvent(), window.open(`tel:${this.supportNumber}`)
                        },
                        sendAnalyticsEvent() {
                            var t;
                            this.$googleTagManager.handleFooterEvent("support", {
                                element_name: "call",
                                user_id: null == (t = this.$store.getters.user) ? void 0 : t.id
                            })
                        }
                    }
                },
                de = {
                    container: "ContactSection_container_OKaZH",
                    title: "ContactSection_title_zydGT",
                    subtitle: "ContactSection_subtitle_y_StB",
                    phone: "ContactSection_phone_se8li",
                    link: "ContactSection_link_s9SPT"
                },
                ye = {};
            ye["$style"] = de;
            const he = (0, I.Z)(me, [
                    ["render", Jt],
                    ["__cssModules", ye]
                ]),
                ke = he;
            var Ce = o(602262),
                fe = o(749963),
                ve = o(827856),
                be = o.n(ve),
                we = o(322201),
                Se = o(672340),
                $e = o(378966),
                Le = o(322820),
                Oe = o(996787),
                Pe = o(920346),
                Ne = o(305653);
            const De = ["innerHTML"],
                Fe = ["innerHTML"],
                Ie = {
                    key: 0
                },
                xe = {
                    key: 1
                },
                Ae = ["innerHTML"],
                je = (0, i.aZ)({
                    __name: "LicenseSection",
                    setup(t) {
                        const e = (0, l.oR)(),
                            o = (0, we.tv)(),
                            s = (new Date).getFullYear(),
                            a = (0, Pe.Jr)("common.license.cookie"),
                            r = (0, Pe.Jr)("common.license.title"),
                            c = (0, Pe.Jr)("common.license.simple"),
                            p = (0, Ce.Vh)((() => d.appConfig.layout.footer.showSimpleLicense && c)),
                            u = (0, Ce.Vh)((() => e.getters.licenseText)),
                            _ = (0, Ce.Vh)((() => e.getters.responsibleGamingText)),
                            m = t => {
                                t && o.push({
                                    name: Ne.Z.RULES,
                                    params: {
                                        ruleId: t
                                    }
                                })
                            };
                        return (t, e) => ((0, i.wg)(), (0, i.iD)("div", {
                            class: (0, n.C_)(t.$style.container)
                        }, [(0, i.Wm)(Se.Z), (0, i._)("div", null, [(0, Ce.SU)(g.iV) ? (0, i.kq)("", !0) : ((0, i.wg)(), (0, i.j4)(Le.Z, {
                            key: 0,
                            class: (0, n.C_)([t.$style.copyright, t.$style.responsibleGaming])
                        }, null, 8, ["class"])), (0, i._)("div", {
                            class: (0, n.C_)(t.$style.container)
                        }, [u.value || !p.value ? ((0, i.wg)(), (0, i.iD)("div", {
                            key: 0,
                            class: (0, n.C_)([t.$style.copyright, t.$style.text])
                        }, [(0, i._)("b", null, "© " + (0, n.zw)((0, Ce.SU)(s)) + " " + (0, n.zw)((0, Ce.SU)(r)) + ". ", 1), !(0, Ce.SU)(g.iV) && u.value ? ((0, i.wg)(), (0, i.iD)("span", {
                            key: 0,
                            class: (0, n.C_)(t.$style.licenseText),
                            innerHTML: (0, Ce.SU)(be()).sanitize(u.value, {
                                ADD_ATTR: ["target"]
                            })
                        }, null, 10, De)) : (0, i.kq)("", !0), _.value ? ((0, i.wg)(), (0, i.iD)(i.HY, {
                            key: 1
                        }, [e[2] || (e[2] = (0, i._)("br", null, null, -1)), (0, i._)("span", {
                            class: (0, n.C_)(t.$style.licenseText),
                            innerHTML: (0, Ce.SU)(be()).sanitize(_.value, {
                                ADD_ATTR: ["target"]
                            })
                        }, null, 10, Fe)], 64)) : (0, i.kq)("", !0)], 2)) : (0, i.kq)("", !0), !(0, Ce.SU)(g.iV) && p.value ? ((0, i.wg)(), (0, i.iD)("div", {
                            key: 1,
                            class: (0, n.C_)([t.$style.copyright, t.$style.text])
                        }, [u.value ? ((0, i.wg)(), (0, i.iD)("b", xe, "© " + (0, n.zw)((0, Ce.SU)(s)) + " ", 1)) : ((0, i.wg)(), (0, i.iD)("b", Ie, "© " + (0, n.zw)((0, Ce.SU)(s)) + " " + (0, n.zw)((0, Ce.SU)(r)) + ". ", 1)), (0, i._)("span", {
                            innerHTML: (0, Ce.SU)(be()).sanitize((0, Ce.SU)(c))
                        }, null, 8, Ae)], 2)) : (0, i.kq)("", !0), !(0, Ce.SU)(g.iV) && (0, Ce.SU)(a) ? ((0, i.wg)(), (0, i.iD)("div", {
                            key: 2,
                            class: (0, n.C_)(t.$style.copyright)
                        }, [(0, i.Wm)(Oe.Z, {
                            text: (0, Ce.SU)(a).description
                        }, {
                            0: (0, i.w5)((() => [(0, i._)("u", null, (0, n.zw)((0, Ce.SU)(a).underlining), 1)])),
                            1: (0, i.w5)((() => [(0, i._)("a", {
                                onClick: e[0] || (e[0] = (0, fe.iM)((() => {
                                    var t;
                                    return m(null == (t = (0, Ce.SU)(d.appConfig).options.rules) ? void 0 : t.cookieInformationRuleId)
                                }), ["stop", "prevent"]))
                            }, (0, n.zw)((0, Ce.SU)(a).rulesLink1), 1)])),
                            2: (0, i.w5)((() => [(0, i._)("a", {
                                onClick: e[1] || (e[1] = (0, fe.iM)((() => {
                                    var t;
                                    return m(null == (t = (0, Ce.SU)(d.appConfig).options.rules) ? void 0 : t.privacyPolicyRuleId)
                                }), ["stop", "prevent"]))
                            }, (0, n.zw)((0, Ce.SU)(a).rulesLink2), 1)])),
                            _: 1
                        }, 8, ["text"])], 2)) : (0, i.kq)("", !0)], 2)]), (0, i._)("div", {
                            class: (0, n.C_)(t.$style.leftSection)
                        }, [(0, i.Wm)($e.Z, {
                            desktop: ""
                        })], 2)], 2))
                    }
                }),
                Ee = {
                    container: "LicenseSection_container_IVo_M",
                    copyright: "LicenseSection_copyright_cjsdT",
                    text: "LicenseSection_text_f0HSo",
                    licenseText: "LicenseSection_licenseText_OfC81",
                    leftSection: "LicenseSection_leftSection_L0Ru4",
                    responsibleGaming: "LicenseSection_responsibleGaming_nknp9"
                },
                Me = {};
            Me["$style"] = Ee;
            const Be = (0, I.Z)(je, [
                    ["__cssModules", Me]
                ]),
                Te = Be;

            function Re(t, e, o, s, l, a) {
                const r = (0, i.up)("FooterContactsBlock"),
                    c = (0, i.up)("FooterLegalInformationBlock"),
                    p = (0, i.up)("FooterInformationBlock"),
                    u = (0, i.up)("FooterCategoriesBlock");
                return (0, i.wg)(), (0, i.iD)("div", {
                    class: (0, n.C_)(t.$style.root)
                }, [(0, i.Wm)(r, {
                    class: (0, n.C_)(t.$style.block),
                    title: a.text.contacts_title,
                    list: a.contacts,
                    onLinkClick: a.sendNavigationEvent
                }, null, 8, ["class", "title", "list", "onLinkClick"]), s.showLegalInformation ? ((0, i.wg)(), (0, i.j4)(c, {
                    key: 0,
                    class: (0, n.C_)(t.$style.block),
                    title: a.text.legal_title,
                    list: s.legalInformationList,
                    onLinkClick: a.sendNavigationEvent
                }, null, 8, ["class", "title", "list", "onLinkClick"])) : (0, i.kq)("", !0), (0, i.Wm)(p, {
                    title: s.showLegalInformation ? a.text.other_title : a.text.info_title,
                    list: a.informationList,
                    class: (0, n.C_)([t.$style.block, s.showLegalInformation && t.$style.lastOrder])
                }, null, 8, ["title", "list", "class"]), (0, i.Wm)(u, {
                    class: (0, n.C_)(t.$style.block),
                    title: a.text.categories_title,
                    "num-columns": a.numColumns,
                    "num-rows": a.numRows,
                    list: a.categoriesList,
                    onLinkClick: a.sendNavigationEvent
                }, null, 8, ["class", "title", "num-columns", "num-rows", "list", "onLinkClick"])], 2)
            }
            var Ze = o(585400),
                Ve = o(432519),
                We = o(680890),
                ze = o(238678),
                He = o(876074),
                qe = o(128805),
                Ue = o(563012);
            const Ye = (0, i.aZ)({
                    __name: "FooterCategoriesBlock",
                    props: {
                        title: {},
                        numColumns: {},
                        numRows: {},
                        list: {}
                    },
                    emits: ["linkClick"],
                    setup(t, {
                        emit: e
                    }) {
                        const o = t,
                            s = e,
                            l = t => {
                                const {
                                    numRows: e,
                                    list: i
                                } = o;
                                return i.slice((t - 1) * e, (t - 1) * e + e)
                            },
                            a = t => {
                                if (t.href) return {
                                    rel: "noopener noreferrer",
                                    href: t.href,
                                    target: "_blank"
                                }
                            };
                        return (t, e) => ((0, i.wg)(), (0, i.iD)("div", null, [(0, i._)("p", {
                            class: (0, n.C_)(t.$style.title)
                        }, (0, n.zw)(t.title), 3), (0, i._)("div", {
                            class: (0, n.C_)(t.$style.listCategories)
                        }, [((0, i.wg)(!0), (0, i.iD)(i.HY, null, (0, i.Ko)(t.numColumns, (e => ((0, i.wg)(), (0, i.iD)("div", {
                            key: e,
                            class: (0, n.C_)(t.$style.listCategoriesColumn)
                        }, [((0, i.wg)(!0), (0, i.iD)(i.HY, null, (0, i.Ko)(l(e), (e => ((0, i.wg)(), (0, i.iD)("div", {
                            key: e.id,
                            class: (0, n.C_)(t.$style.linksRow)
                        }, [((0, i.wg)(), (0, i.j4)((0, i.LL)(e.to ? "RouterLink" : "a"), (0, i.dG)({
                            ref_for: !0
                        }, a(e), {
                            to: e.to,
                            class: t.$style.link,
                            "data-tag": e.to ? "RouterLink" : "a",
                            onClick: o => s("linkClick", e.href || t.$router.resolve(e.to).href)
                        }), {
                            default: (0, i.w5)((() => [(0, i.Uk)((0, n.zw)(e.name), 1)])),
                            _: 2
                        }, 1040, ["to", "class", "data-tag", "onClick"]))], 2)))), 128))], 2)))), 128))], 2)]))
                    }
                }),
                Ke = {
                    title: "FooterCategoriesBlock_title_n2hY4",
                    link: "FooterCategoriesBlock_link_LmqSQ",
                    listCategories: "FooterCategoriesBlock_listCategories_yIdHt",
                    listCategoriesColumn: "FooterCategoriesBlock_listCategoriesColumn_ZMflY",
                    linksRow: "FooterCategoriesBlock_linksRow_SUA4H"
                },
                Ge = {};
            Ge["$style"] = Ke;
            const Je = (0, I.Z)(Ye, [
                    ["__cssModules", Ge]
                ]),
                Qe = Je,
                Xe = ["href", "onClick"],
                to = (0, i.aZ)({
                    __name: "FooterContactsBlock",
                    props: {
                        title: {},
                        list: {}
                    },
                    emits: ["linkClick"],
                    setup(t, {
                        emit: e
                    }) {
                        const o = e;
                        return (t, e) => ((0, i.wg)(), (0, i.iD)("div", null, [(0, i._)("p", {
                            class: (0, n.C_)(t.$style.title)
                        }, (0, n.zw)(t.title), 3), (0, i._)("div", {
                            class: (0, n.C_)(t.$style.contacts)
                        }, [((0, i.wg)(!0), (0, i.iD)(i.HY, null, (0, i.Ko)(t.list, (e => ((0, i.wg)(), (0, i.iD)("div", {
                            key: e.id,
                            class: (0, n.C_)(t.$style.contactsRow)
                        }, [(0, i._)("div", {
                            class: (0, n.C_)(t.$style.contactsCellName)
                        }, [(0, i._)("span", {
                            class: (0, n.C_)(t.$style.link)
                        }, (0, n.zw)(e.name), 3)], 2), (0, i._)("div", {
                            class: (0, n.C_)(t.$style.contactsCell)
                        }, [(0, i._)("a", {
                            class: (0, n.C_)(t.$style.link),
                            href: `mailto:${e.email}`,
                            onClick: t => o("linkClick", `mailto:${e.email}`)
                        }, (0, n.zw)(e.email), 11, Xe)], 2)], 2)))), 128))], 2)]))
                    }
                }),
                eo = {
                    title: "FooterContactsBlock_title_Q1AsD",
                    link: "FooterContactsBlock_link_oj8uL",
                    contacts: "FooterContactsBlock_contacts_sbGF2",
                    contactsCell: "FooterContactsBlock_contactsCell_lrXlb",
                    contactsRow: "FooterContactsBlock_contactsRow_uLtPS",
                    contactsCellName: "FooterContactsBlock_contactsCellName_sAAdY FooterContactsBlock_contactsCell_lrXlb"
                },
                oo = {};
            oo["$style"] = eo;
            const io = (0, I.Z)(to, [
                    ["__cssModules", oo]
                ]),
                no = io,
                so = ["href", "target", "onClick"],
                lo = (0, i.aZ)({
                    __name: "FooterInformationBlock",
                    props: {
                        title: {},
                        list: {}
                    },
                    setup(t) {
                        return (t, e) => ((0, i.wg)(), (0, i.iD)("div", null, [(0, i._)("p", {
                            class: (0, n.C_)(t.$style.title)
                        }, (0, n.zw)(t.title), 3), (0, i._)("div", null, [((0, i.wg)(!0), (0, i.iD)(i.HY, null, (0, i.Ko)(t.list, (e => ((0, i.wg)(), (0, i.iD)("div", {
                            key: e.id,
                            class: (0, n.C_)([t.$style.item, t.$style.linksRow])
                        }, [(0, i._)("a", {
                            rel: "noopener noreferrer",
                            href: e.href,
                            target: e.target || "_blank",
                            class: (0, n.C_)(t.$style.link),
                            onClick: e.action
                        }, (0, n.zw)(e.name), 11, so)], 2)))), 128))])]))
                    }
                }),
                ao = {
                    title: "FooterInformationBlock_title_YMH0a",
                    link: "FooterInformationBlock_link_xE5v9",
                    linksRow: "FooterInformationBlock_linksRow_E8xgZ"
                },
                ro = {};
            ro["$style"] = ao;
            const co = (0, I.Z)(lo, [
                    ["__cssModules", ro]
                ]),
                po = co,
                uo = ["href", "target", "onClickCapture"],
                go = (0, i.aZ)({
                    __name: "FooterLegalInformationBlock",
                    props: {
                        title: {},
                        list: {}
                    },
                    emits: ["linkClick"],
                    setup(t, {
                        emit: e
                    }) {
                        const o = e;
                        return (t, e) => ((0, i.wg)(), (0, i.iD)("div", null, [(0, i._)("p", {
                            class: (0, n.C_)(t.$style.title)
                        }, (0, n.zw)(t.title), 3), (0, i._)("div", null, [((0, i.wg)(!0), (0, i.iD)(i.HY, null, (0, i.Ko)(t.list, (e => ((0, i.wg)(), (0, i.iD)("div", {
                            key: e.id,
                            class: (0, n.C_)([t.$style.item, t.$style.linksRow])
                        }, [(0, i._)("a", {
                            rel: "noopener noreferrer",
                            href: e.href,
                            target: e.target || "_blank",
                            class: (0, n.C_)(t.$style.link),
                            onClickCapture: t => o("linkClick", e.href)
                        }, (0, n.zw)(e.name), 43, uo)], 2)))), 128))])]))
                    }
                }),
                _o = {
                    title: "FooterLegalInformationBlock_title_V_F6W",
                    link: "FooterLegalInformationBlock_link_utGEn",
                    linksRow: "FooterLegalInformationBlock_linksRow_DFnb6"
                },
                mo = {};
            mo["$style"] = _o;
            const yo = (0, I.Z)(go, [
                    ["__cssModules", mo]
                ]),
                ho = yo;
            var ko = Object.defineProperty,
                Co = Object.defineProperties,
                fo = Object.getOwnPropertyDescriptors,
                vo = Object.getOwnPropertySymbols,
                bo = Object.prototype.hasOwnProperty,
                wo = Object.prototype.propertyIsEnumerable,
                So = (t, e, o) => e in t ? ko(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: o
                }) : t[e] = o,
                $o = (t, e) => {
                    for (var o in e || (e = {})) bo.call(e, o) && So(t, o, e[o]);
                    if (vo)
                        for (var o of vo(e)) wo.call(e, o) && So(t, o, e[o]);
                    return t
                },
                Lo = (t, e) => Co(t, fo(e));
            const Oo = {
                    name: "NavigationSection",
                    components: {
                        FooterContactsBlock: no,
                        FooterCategoriesBlock: Qe,
                        FooterInformationBlock: po,
                        FooterLegalInformationBlock: ho
                    },
                    inject: ["$platform"],
                    props: {
                        rulesFooter: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    setup() {
                        const {
                            showLegalInformation: t,
                            legalInformationList: e
                        } = (0, m.U)(), {
                            isLoyaltyProgramEnabled: o
                        } = (0, He.I)(), {
                            isForumLinkEnabled: i
                        } = (0, ze.E)(), {
                            isEntryPointToSportVisible: n
                        } = (0, We.v)();
                        return {
                            showLegalInformation: t,
                            legalInformationList: e,
                            isLoyaltyProgramEnabled: o,
                            isForumLinkEnabled: i,
                            isEntryPointToSportVisible: n
                        }
                    },
                    computed: Lo($o({}, (0, l.Se)(["currentLang", "isDesktopApp", "isPwaIgnored", "lang", "langCommon"])), {
                        numRows() {
                            return (0, Ue.WF)(this.informationList.length, {
                                min: this.categoriesList.length < 7 ? 3 : 4
                            })
                        },
                        numColumns() {
                            return Math.ceil(this.categoriesList.length / this.numRows)
                        },
                        text() {
                            return this.lang.footer
                        },
                        textNavigation() {
                            return this.lang.navigation
                        },
                        contacts() {
                            return d.appConfig.options.contacts.map((({
                                nameKey: t,
                                email: e
                            }) => ({
                                email: e,
                                nameKey: t,
                                name: this.langCommon.contacts[t]
                            })))
                        },
                        informationList() {
                            var t;
                            const e = null != (t = d.appConfig.layout.footer.informationBlock) ? t : [],
                                o = t => e.includes(t),
                                i = [{
                                    id: "rules",
                                    name: this.text.rules_link,
                                    action: () => {
                                        const t = "/rules";
                                        (0, qe.dj)(t), this.sendNavigationEvent(t)
                                    },
                                    isShown: !this.showLegalInformation && !this.rulesFooter && o("rules")
                                }, {
                                    id: "responsible-gaming",
                                    name: this.textNavigation["responsible-gaming"],
                                    href: "/rules/7",
                                    action: () => {
                                        this.sendNavigationEvent("/rules/7")
                                    },
                                    isShown: !this.showLegalInformation && o("responsible-gaming")
                                }, {
                                    id: "bonus",
                                    name: this.text.bonus,
                                    action: () => {
                                        const t = {
                                            name: Ne.Z.BONUSES
                                        };
                                        this.$router.push(t), this.sendNavigationEvent(this.$router.resolve(t).href)
                                    },
                                    isShown: d.appConfig.modules.bonuses && o("bonus")
                                }, {
                                    id: "mobile",
                                    name: this.text.mobile_version,
                                    action: () => {
                                        At.J_.set(At.pM, u.mvW), window.location.reload(), this.sendNavigationEvent("mobile")
                                    },
                                    isShown: d.appConfig.modules.applications && !this.showLegalInformation && !this.isPwaIgnored && !this.$platform.pwa.any && !this.isDesktopApp && o("mobile")
                                }, {
                                    id: "affiliate",
                                    name: this.text.affiliate_link,
                                    href: d.appConfig.options.partnerUrl,
                                    action: () => {
                                        this.sendNavigationEvent(d.appConfig.options.partnerUrl)
                                    },
                                    isShown: !!d.appConfig.options.partnerUrl && o("affiliate")
                                }, {
                                    id: "risk_disclosure",
                                    name: "Risk Disclosure",
                                    href: "/rules/9",
                                    action: () => {
                                        this.sendNavigationEvent("/rules/9")
                                    },
                                    isShown: !this.showLegalInformation && "en" === this.currentLang && o("risk_disclosure")
                                }].filter((({
                                    isShown: t
                                }) => t));
                            return this.isDesktopApp ? i.filter((t => "mobile" !== t.id)) : i
                        },
                        categoriesList() {
                            var t, e;
                            const o = null != (t = d.appConfig.layout.footer.categories) ? t : [],
                                i = [{
                                    id: "live",
                                    name: this.textNavigation.live,
                                    to: {
                                        name: Ze.qV.LIVE
                                    }
                                }, {
                                    id: "line",
                                    name: this.textNavigation.prematch,
                                    to: {
                                        name: Ze.qV.PREMATCH
                                    }
                                }, {
                                    id: "sports",
                                    name: this.textNavigation.sports,
                                    to: {
                                        name: Ze.qV.HOME
                                    }
                                }, {
                                    id: "promotions",
                                    name: this.textNavigation.promotions,
                                    to: {
                                        name: Ne.Z.BONUSES
                                    }
                                }, {
                                    id: "live_games",
                                    name: this.textNavigation["casino-live"],
                                    hidden: !(null == (e = d.appConfig.modules.casino) ? void 0 : e.liveGames),
                                    to: {
                                        name: Ne.Z.CASINO,
                                        params: {
                                            preset: Ve.Py.LIVE_GAMES
                                        }
                                    }
                                }, {
                                    id: "poker",
                                    name: this.textNavigation["tvbet-poker"],
                                    to: {
                                        name: Ne.Z.POKER
                                    }
                                }, {
                                    id: "casino",
                                    name: this.textNavigation["casino-list"],
                                    to: {
                                        name: Ne.Z.CASINO
                                    }
                                }, {
                                    id: "sport",
                                    name: this.textNavigation.sports,
                                    to: {
                                        name: Ze.qV.HOME
                                    },
                                    hidden: !this.isEntryPointToSportVisible,
                                    bypassAppConfig: !0
                                }, {
                                    id: "cybersport",
                                    name: this.textNavigation.esport,
                                    to: {
                                        name: Ze.qV.CYBER_SPORT
                                    },
                                    hidden: !this.isEntryPointToSportVisible,
                                    bypassAppConfig: !0
                                }, {
                                    id: "loyalty_program",
                                    name: this.langCommon.loyalty_program.common.loyaltyProgram,
                                    to: {
                                        name: Ne.Z.LOYALTY_PROGRAM
                                    },
                                    hidden: !this.isLoyaltyProgramEnabled,
                                    bypassAppConfig: !0
                                }, {
                                    id: "forum",
                                    name: this.textNavigation.forum,
                                    href: (0, u.n6$)(d.appConfig.domain),
                                    hidden: !(0, u.Hhj)(d.appConfig.domain) || !this.isForumLinkEnabled
                                }];
                            return i.filter((({
                                to: t,
                                id: e,
                                hidden: i,
                                bypassAppConfig: n,
                                href: s
                            }) => !i && (s || this.$router.hasRoute(t.name)) && (n || o.includes(e))))
                        }
                    }),
                    methods: {
                        sendNavigationEvent(t) {
                            this.$googleTagManager.handleFooterEvent("navigation", {
                                link_url: t
                            })
                        }
                    }
                },
                Po = {
                    root: "NavigationSection_root_l0Hat",
                    block: "NavigationSection_block_dHibI",
                    lastOrder: "NavigationSection_lastOrder_mi9Kk"
                },
                No = {};
            No["$style"] = Po;
            const Do = (0, I.Z)(Oo, [
                    ["render", Re],
                    ["__cssModules", No]
                ]),
                Fo = Do,
                Io = ["href"],
                xo = ["href", "target", "onClick"],
                Ao = ["href", "target", "onClick"];

            function jo(t, e, o, s, l, a) {
                const r = (0, i.up)("RouterLink");
                return (0, i.wg)(), (0, i.iD)("div", {
                    class: (0, n.C_)(t.$style.root)
                }, [(0, i._)("div", {
                    class: (0, n.C_)(t.$style.block)
                }, [(0, i._)("p", {
                    class: (0, n.C_)(t.$style.title)
                }, (0, n.zw)(a.text.contacts_title), 3), (0, i._)("div", {
                    class: (0, n.C_)(t.$style.contacts)
                }, [((0, i.wg)(!0), (0, i.iD)(i.HY, null, (0, i.Ko)(a.contacts, (o => ((0, i.wg)(), (0, i.iD)("div", {
                    key: o.id,
                    class: (0, n.C_)(t.$style.contactsRow)
                }, [(0, i._)("div", {
                    class: (0, n.C_)(t.$style.contactsCellName)
                }, [(0, i._)("span", {
                    class: (0, n.C_)(t.$style.link)
                }, (0, n.zw)(o.name), 3)], 2), (0, i._)("div", {
                    class: (0, n.C_)(t.$style.contactsCell)
                }, [(0, i._)("a", {
                    class: (0, n.C_)(t.$style.link),
                    href: `mailto:${o.email}`,
                    onClick: e[0] || (e[0] = t => a.sendNavigationEvent(t.target.href))
                }, (0, n.zw)(o.email), 11, Io)], 2)], 2)))), 128))], 2)], 2), (0, i._)("div", {
                    class: (0, n.C_)(t.$style.block)
                }, [(0, i._)("p", {
                    class: (0, n.C_)(t.$style.title)
                }, (0, n.zw)(a.text.legal_title), 3), (0, i._)("div", null, [((0, i.wg)(!0), (0, i.iD)(i.HY, null, (0, i.Ko)(a.legalInformationList, (e => ((0, i.wg)(), (0, i.iD)("div", {
                    key: e.id,
                    class: (0, n.C_)([t.$style.item, t.$style.linksRow])
                }, [(0, i._)("a", {
                    rel: "noopener noreferrer",
                    href: e.href,
                    target: e.target || "_blank",
                    class: (0, n.C_)(t.$style.link),
                    onClick: t => a.sendNavigationEvent(a.generateLinkPath(e.id))
                }, (0, n.zw)(e.name), 11, xo)], 2)))), 128))])], 2), (0, i._)("div", {
                    class: (0, n.C_)(t.$style.block)
                }, [(0, i._)("p", {
                    class: (0, n.C_)(t.$style.title)
                }, (0, n.zw)(a.text.categories_title), 3), (0, i._)("div", {
                    class: (0, n.C_)(t.$style.listCategories)
                }, [((0, i.wg)(!0), (0, i.iD)(i.HY, null, (0, i.Ko)(a.numColumns, (e => ((0, i.wg)(), (0, i.iD)("div", {
                    key: e,
                    class: (0, n.C_)(t.$style.listCategoriesColumn)
                }, [((0, i.wg)(!0), (0, i.iD)(i.HY, null, (0, i.Ko)(a.categoriesListColumns(e), (e => ((0, i.wg)(), (0, i.iD)("div", {
                    key: e.id,
                    class: (0, n.C_)(t.$style.linksRow)
                }, [(0, i.Wm)(r, {
                    class: (0, n.C_)(t.$style.link),
                    to: e.to,
                    onClick: o => {
                        a.sendNavigationEvent(t.$router.resolve(e.to).href)
                    }
                }, {
                    default: (0, i.w5)((() => [(0, i.Uk)((0, n.zw)(e.name), 1)])),
                    _: 2
                }, 1032, ["class", "to", "onClick"])], 2)))), 128))], 2)))), 128))], 2)], 2), (0, i._)("div", {
                    class: (0, n.C_)(t.$style.block)
                }, [(0, i._)("p", {
                    class: (0, n.C_)(t.$style.title)
                }, (0, n.zw)(a.text.other_title), 3), (0, i._)("div", null, [((0, i.wg)(!0), (0, i.iD)(i.HY, null, (0, i.Ko)(a.otherList, (e => ((0, i.wg)(), (0, i.iD)("div", {
                    key: e.id,
                    class: (0, n.C_)([t.$style.item, t.$style.linksRow])
                }, [(0, i._)("a", {
                    rel: "noopener noreferrer",
                    href: e.href,
                    target: e.target || "_blank",
                    class: (0, n.C_)(t.$style.link),
                    onClick: e.action
                }, (0, n.zw)(e.name), 11, Ao)], 2)))), 128))])], 2)], 2)
            }
            var Eo = Object.defineProperty,
                Mo = Object.defineProperties,
                Bo = Object.getOwnPropertyDescriptors,
                To = Object.getOwnPropertySymbols,
                Ro = Object.prototype.hasOwnProperty,
                Zo = Object.prototype.propertyIsEnumerable,
                Vo = (t, e, o) => e in t ? Eo(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: o
                }) : t[e] = o,
                Wo = (t, e) => {
                    for (var o in e || (e = {})) Ro.call(e, o) && Vo(t, o, e[o]);
                    if (To)
                        for (var o of To(e)) Zo.call(e, o) && Vo(t, o, e[o]);
                    return t
                },
                zo = (t, e) => Mo(t, Bo(e));
            const Ho = {
                    name: "NavigationSectionLS",
                    inject: ["$platform"],
                    setup() {
                        const {
                            isEntryPointToSportVisible: t
                        } = (0, We.v)();
                        return {
                            isEntryPointToSportVisible: t
                        }
                    },
                    computed: zo(Wo({}, (0, l.Se)(["currentLang", "isDesktopApp", "isPwaIgnored", "lang", "langCommon"])), {
                        numRows() {
                            return (0, Ue.WF)(this.otherList.length, {
                                min: this.categoriesList.length < 7 ? 3 : 4
                            })
                        },
                        numColumns() {
                            return Math.ceil(this.categoriesList.length / this.numRows)
                        },
                        text() {
                            return this.lang.footer
                        },
                        textNavigation() {
                            return this.lang.navigation
                        },
                        contacts() {
                            return d.appConfig.options.contacts.map((({
                                nameKey: t,
                                email: e
                            }) => ({
                                email: e,
                                nameKey: t,
                                name: this.langCommon.contacts[t]
                            })))
                        },
                        legalInformationList() {
                            const t = [{
                                id: "terms_of_service",
                                name: this.textNavigation.terms,
                                href: this.generateLinkPath("terms_of_service")
                            }, {
                                id: "privacy",
                                name: this.textNavigation.privacy,
                                href: this.generateLinkPath("privacy")
                            }, {
                                id: "responsible-gaming",
                                name: this.textNavigation["responsible-gaming-ls"],
                                href: this.generateLinkPath("responsible-gaming")
                            }, {
                                id: "self-exclusion",
                                name: this.textNavigation["self-exclusion"],
                                href: this.generateLinkPath("self-exclusion")
                            }, {
                                id: "dispute-resolution",
                                name: this.textNavigation["dispute-resolution"],
                                href: this.generateLinkPath("dispute-resolution")
                            }, {
                                id: "kyc-aml",
                                name: this.textNavigation["kyc-aml"],
                                href: this.generateLinkPath("kyc-aml")
                            }, {
                                id: "rng",
                                name: this.textNavigation.rng,
                                href: this.generateLinkPath("rng")
                            }, {
                                id: "accounts-bonuses",
                                name: this.textNavigation["accounts-bonuses"],
                                href: this.generateLinkPath("accounts-bonuses")
                            }];
                            return u.BOQ && t.push({
                                id: "risk_disclosure",
                                name: this.textNavigation.risk_disclosure,
                                href: "/rules/110591"
                            }), t
                        },
                        categoriesList() {
                            const t = [{
                                id: "live_games",
                                name: this.textNavigation["casino-live"],
                                to: {
                                    name: Ne.Z.CASINO,
                                    params: {
                                        preset: Ve.Py.LIVE_GAMES
                                    }
                                }
                            }, {
                                id: "casino",
                                name: this.textNavigation["casino-list"],
                                to: {
                                    name: Ne.Z.CASINO
                                }
                            }, {
                                id: "sport",
                                name: this.textNavigation.bets,
                                to: {
                                    name: Ze.qV.HOME
                                },
                                hidden: !this.isEntryPointToSportVisible
                            }, {
                                id: "cybersport",
                                name: this.textNavigation.esport,
                                to: {
                                    name: Ze.qV.CYBER_SPORT
                                },
                                hidden: !this.isEntryPointToSportVisible
                            }];
                            return t.filter((({
                                to: t,
                                hidden: e
                            }) => !e && this.$router.hasRoute(t.name)))
                        },
                        otherList() {
                            var t;
                            const e = null != (t = d.appConfig.layout.footer.informationBlock) ? t : [],
                                o = t => e.includes(t),
                                i = d.appConfig.modules.applications && !this.isPwaIgnored && !this.$platform.pwa.any && !this.isDesktopApp && o("mobile");
                            return [{
                                id: "promotions",
                                name: this.text.promotions,
                                action: () => {
                                    const t = {
                                        name: Ne.Z.BONUSES
                                    };
                                    this.$router.push(t), this.sendNavigationEvent(this.$router.resolve(t).href)
                                }
                            }, {
                                id: "affiliate",
                                name: this.text.affiliate_link,
                                href: d.appConfig.options.partnerUrl,
                                action: () => {
                                    this.sendNavigationEvent(d.appConfig.options.partnerUrl)
                                }
                            }, {
                                id: "mobile",
                                name: this.text.mobile_version,
                                action: () => {
                                    At.J_.set(At.pM, u.mvW), window.location.reload(), this.sendNavigationEvent("mobile")
                                }
                            }].filter((t => "mobile" !== t.id || i))
                        },
                        domainLinkRules() {
                            return {
                                default: {
                                    terms_of_service: "/rules/110507",
                                    privacy: "/rules/110509",
                                    "responsible-gaming": "/rules/110367",
                                    "self-exclusion": "/rules/110491",
                                    "dispute-resolution": "/rules/110515",
                                    "kyc-aml": "/rules/110516",
                                    rng: "/rules/110517",
                                    "accounts-bonuses": "/rules/110519"
                                },
                                "lucky-star.game": {
                                    terms_of_service: "/rules/110552",
                                    privacy: "/rules/110543",
                                    "responsible-gaming": "/rules/110524",
                                    "self-exclusion": "/rules/110542",
                                    "dispute-resolution": "/rules/110544",
                                    "kyc-aml": "/rules/110545",
                                    rng: "/rules/110546",
                                    "accounts-bonuses": "/rules/110549"
                                }
                            }
                        }
                    }),
                    methods: {
                        generateLinkPath(t) {
                            const e = d.appConfig.domain;
                            return this.domainLinkRules[e] ? this.domainLinkRules[e][t] : this.domainLinkRules.default[t]
                        },
                        categoriesListColumns(t) {
                            return this.categoriesList.slice((t - 1) * this.numRows, (t - 1) * this.numRows + this.numRows)
                        },
                        sendNavigationEvent(t) {
                            this.$googleTagManager.handleFooterEvent("navigation", {
                                link_url: t
                            })
                        }
                    }
                },
                qo = {
                    root: "NavigationSectionLS_root_VOHJk",
                    block: "NavigationSectionLS_block_DIxYu",
                    title: "NavigationSectionLS_title_Rbp3m",
                    link: "NavigationSectionLS_link_eUGpg",
                    emailsBlock: "NavigationSectionLS_emailsBlock_xhtSm",
                    listCategories: "NavigationSectionLS_listCategories_C_1u8",
                    listCategoriesColumn: "NavigationSectionLS_listCategoriesColumn_yRAKy",
                    linksRow: "NavigationSectionLS_linksRow_GJirE",
                    contacts: "NavigationSectionLS_contacts_lhEgA",
                    contactsRow: "NavigationSectionLS_contactsRow_af8uG",
                    contactsCell: "NavigationSectionLS_contactsCell_W82QP",
                    contactsCellName: "NavigationSectionLS_contactsCellName_dPrvS NavigationSectionLS_contactsCell_W82QP"
                },
                Uo = {};
            Uo["$style"] = qo;
            const Yo = (0, I.Z)(Ho, [
                    ["render", jo],
                    ["__cssModules", Uo]
                ]),
                Ko = Yo;

            function Go(t, e, o, s, l, a) {
                const r = (0, i.up)("VIcon");
                return (0, i.wg)(), (0, i.iD)("div", {
                    class: (0, n.C_)([t.$style.container, a.isCentered && t.$style.isCentered])
                }, [((0, i.wg)(!0), (0, i.iD)(i.HY, null, (0, i.Ko)(a.payments, (e => ((0, i.wg)(), (0, i.j4)(r, {
                    key: e.iconName,
                    size: 19,
                    class: (0, n.C_)(t.$style.icon),
                    icon: `payment-full/${e.iconName}`,
                    onClick: t => a.onButtonClick(e)
                }, null, 8, ["class", "icon", "onClick"])))), 128))], 2)
            }
            var Jo = o(878417),
                Qo = o(894710);
            const Xo = {
                    name: "PaymentSection",
                    components: {
                        VIcon: k.Z
                    },
                    inject: ["$modal"],
                    setup() {
                        const t = (0, l.oR)(),
                            e = (0, Jo.L)();
                        return {
                            store: t,
                            userStore: e
                        }
                    },
                    computed: {
                        payments() {
                            var t;
                            const e = null != (t = d.appConfig.layout.footer.paymentMethods) ? t : [],
                                o = [...u.JLJ, ...u.jdP, ...u.RaN, ...u.mYn].filter((({
                                    id: t
                                }) => e.includes(t)));
                            return this.store.getters.isOnlyCryptoGeo ? o.filter((({
                                paymentMethodShortValue: t
                            }) => "crypto" === t)) : o
                        },
                        isCentered() {
                            return this.payments.length < 8
                        }
                    },
                    methods: {
                        openDepositModal(t) {
                            this.$modal.open(Qo.bZ, {
                                props: t,
                                closeOnBackgroundClick: !1
                            })
                        },
                        onButtonClick({
                            paymentMethodShortValue: t,
                            cardType: e
                        }) {
                            const o = {
                                paymentDefaultAbbreviation: t,
                                defaultCardType: e
                            };
                            this.userStore.isAuthed ? this.openDepositModal(o) : this.$modal.open(Qo.bn, {
                                onClose: () => {
                                    this.userStore.isAuthed && this.openDepositModal(o)
                                }
                            })
                        }
                    }
                },
                ti = {
                    container: "PaymentSection_container_C_cBn",
                    isCentered: "PaymentSection_isCentered_qtJY4",
                    icon: "PaymentSection_icon_LlyCK"
                },
                ei = {};
            ei["$style"] = ti;
            const oi = (0, I.Z)(Xo, [
                    ["render", Go],
                    ["__cssModules", ei]
                ]),
                ii = oi;
            var ni = Object.defineProperty,
                si = Object.defineProperties,
                li = Object.getOwnPropertyDescriptors,
                ai = Object.getOwnPropertySymbols,
                ri = Object.prototype.hasOwnProperty,
                ci = Object.prototype.propertyIsEnumerable,
                pi = (t, e, o) => e in t ? ni(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: o
                }) : t[e] = o,
                ui = (t, e) => {
                    for (var o in e || (e = {})) ri.call(e, o) && pi(t, o, e[o]);
                    if (ai)
                        for (var o of ai(e)) ci.call(e, o) && pi(t, o, e[o]);
                    return t
                },
                gi = (t, e) => si(t, li(e));
            const _i = {
                    components: {
                        Logo: p.Z,
                        SocialList: j,
                        SportsPromotionSection: c.Z,
                        LicenseSection: Te,
                        ContactSection: ke,
                        PaymentSection: ii,
                        NavigationSection: Fo,
                        NavigationSectionLS: Ko,
                        ApplicationSection: Ft,
                        ChangeLanguageSection: Kt,
                        OwnerBlock: r.Z,
                        GamblingLinks: a.Z
                    },
                    props: {
                        rulesFooter: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    setup() {
                        const {
                            showLegalInformation: t
                        } = (0, m.U)(), {
                            isOwnerBlockVisible: e
                        } = (0, _.g)();
                        return {
                            showLegalInformation: t,
                            isOwnerBlockVisible: e
                        }
                    },
                    computed: gi(ui({}, (0, l.Se)(["socialLinks"])), {
                        customFooter() {
                            var t;
                            return null == (t = this.$route.meta) ? void 0 : t[u.VdB]
                        },
                        isLeaderboardPage() {
                            return this.customFooter === u.$s0
                        },
                        footerClass() {
                            return {
                                [this.$style.footer]: !0,
                                [this.$style.leaderboardTheme]: this.isLeaderboardPage
                            }
                        },
                        isSocialNetworksAvailable() {
                            return d.appConfig.options.socials && Object.keys(this.socialLinks).length > 0
                        }
                    }),
                    appConfig: d.appConfig,
                    isLuckyStarFooterDomains: g.JX
                },
                mi = {
                    footer: "Footer_footer_udF4C",
                    leaderboardTheme: "Footer_leaderboardTheme_cPZ47",
                    separator: "Footer_separator_MqAqa",
                    logoSeparator: "Footer_logoSeparator_HMHDL",
                    middleSeparator: "Footer_middleSeparator_vSDOp",
                    logoContainer: "Footer_logoContainer_ly0AN",
                    logoWrapper: "Footer_logoWrapper_hMoH_",
                    logo: "Footer_logo_DK4Zn",
                    sportsPromotion: "Footer_sportsPromotion_u0qdl",
                    leftSection: "Footer_leftSection_B2hYF",
                    contactSection: "Footer_contactSection_x51m9",
                    navigationSection: "Footer_navigationSection_al8q8",
                    navigationSectionLarge: "Footer_navigationSectionLarge_lnxq2",
                    rightSection: "Footer_rightSection_Qb0m2",
                    navSection: "Footer_navSection_AHVMG",
                    promotionSection: "Footer_promotionSection_yHP4L",
                    gamblingLinks: "Footer_gamblingLinks_TPyo2"
                },
                di = {};
            di["$style"] = mi;
            const yi = (0, I.Z)(_i, [
                    ["render", s],
                    ["__cssModules", di]
                ]),
                hi = yi
        }
    }
]);