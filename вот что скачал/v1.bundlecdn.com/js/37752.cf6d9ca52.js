(self["webpackChunk_1win_frontend_main"] = self["webpackChunk_1win_frontend_main"] || []).push([
    [37752], {
        726789: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => p
            });
            var n = i(166252),
                s = i(602262),
                o = i(644540);
            const r = () => o.A ? void 0 : "",
                a = () => {
                    const e = r();
                    if (!e) return;
                    const t = window[`apg_${e.replace(/-/g,"_")}`];
                    t ? t.init() : setTimeout((() => {
                        a()
                    }), 1e3)
                },
                l = ["id", "data-apg-seal-id"],
                c = (0, n.aZ)({
                    __name: "ApgSeal",
                    setup(e) {
                        const t = r();
                        return (0, n.bv)((() => {
                            a()
                        })), (e, i) => (0, s.SU)(t) ? ((0, n.wg)(), (0, n.iD)("div", {
                            key: 0,
                            id: `apg-${(0,s.SU)(t)}`,
                            "data-apg-seal-id": (0, s.SU)(t),
                            "data-apg-image-size": "256",
                            "data-apg-image-type": "basic-light-large"
                        }, null, 8, l)) : (0, n.kq)("", !0)
                    }
                }),
                g = c,
                p = g
        },
        672340: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => y
            });
            var n = i(166252),
                s = i(3577),
                o = i(602262),
                r = i(280894);
            const a = i.p + "img/gcb.2730976bb.svg",
                l = i.p + "img/gcb_green.c5a6f2097.svg";
            var c = i(384754),
                g = i(931338);
            const p = "use_gcb_validator",
                m = () => {
                    const {
                        value: e
                    } = (0, g.y)(p), t = (0, n.Fl)((() => "on" === e.value));
                    return {
                        isGcbEnabled: t
                    }
                };
            var d = i(909997),
                u = i(112808);
            const b = ["href"],
                h = ["src"],
                v = (0, n.aZ)({
                    __name: "GCB",
                    setup(e) {
                        const t = (0, r.oR)(),
                            {
                                isGcbEnabled: i
                            } = m(),
                            g = (0, n.Fl)((() => i.value ? c.lH.includes(u.appConfig.domain) ? {
                                image: l,
                                link: "https://cert.gcb.cw/certificate?id=ZXlKcGRpSTZJa2N2TlhkbmRGbG1lVmgyVGpKUlZGTk5VRWM1YWxFOVBTSXNJblpoYkhWbElqb2lhbGRYTWpsMGVqaEVRbkp2VW1NM1UxazNjVWcxZHowOUlpd2liV0ZqSWpvaU0ySmxNVEUwT0dSaE9XWXdZMk5rTVRObU1qZGpNMlZrWWpNM1pHSmxaalpoWW1SaE5EVTBOemRqTWpFNU1EY3hObU0wTTJRNFlXVTNaR0poTnpnek9DSXNJblJoWnlJNklpSjk="
                            } : c.nI.includes(u.appConfig.domain) ? {
                                image: a,
                                link: "https://cert.gcb.cw/certificate?id=ZXlKcGRpSTZJa05OWXpkTVpWTjFRMmhKTVRad1VFMU1kVnBOWm1jOVBTSXNJblpoYkhWbElqb2lVSGxXVUVKdGJFSTRiek0xSzFCMmNVSkRUMFZ5WnowOUlpd2liV0ZqSWpvaVkyRTFaVGszTWpnMU1EUTJZV1U0WVdObE9HWTJOVFJpTmpneE5qRTJaR1poTnpZMVlqaGpOV05sWmpGbU5tSmhZalEyT0dOaE5EY3laalJtTVRZd1ppSXNJblJoWnlJNklpSjk="
                            } : null : null)),
                            p = () => {
                                d.L_.handleFooterEvent("gcb_print", {})
                            };
                        return (e, i) => g.value ? ((0, n.wg)(), (0, n.iD)("div", {
                            key: 0,
                            class: (0, s.C_)([e.$style.root, (0, o.SU)(t).getters.isMobile && e.$style.mobile])
                        }, [(0, n._)("a", {
                            href: g.value.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: p
                        }, [(0, n._)("img", {
                            class: (0, s.C_)(e.$style.img),
                            loading: "lazy",
                            src: g.value.image
                        }, null, 10, h)], 8, b)], 2)) : (0, n.kq)("", !0)
                    }
                }),
                k = {
                    root: "GCB_root_wnCKF",
                    mobile: "GCB_mobile_PVpY5",
                    img: "GCB_img_jvTx2"
                };
            var _ = i(348118);
            const w = {};
            w["$style"] = k;
            const f = (0, _.Z)(v, [
                    ["__cssModules", w]
                ]),
                y = f
        },
        813082: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => u
            });
            var n = i(166252),
                s = i(3577),
                o = i(428490),
                r = i(112808);
            const a = ["href"],
                l = ["src", "alt"],
                c = (0, n.aZ)({
                    __name: "GamblingLinks",
                    setup(e) {
                        const t = (0, n.Fl)((() => o.CY.filter((({
                            id: e
                        }) => {
                            var t;
                            return (null != (t = r.appConfig.layout.footer.gamblings) ? t : []).includes(e)
                        }))));
                        return (e, o) => ((0, n.wg)(), (0, n.iD)("div", {
                            class: (0, s.C_)(e.$style.root)
                        }, [((0, n.wg)(!0), (0, n.iD)(n.HY, null, (0, n.Ko)(t.value, (t => ((0, n.wg)(), (0, n.iD)("a", {
                            key: t.id,
                            href: t.link,
                            class: (0, s.C_)(e.$style.link),
                            target: "_blank",
                            rel: "noopener"
                        }, [(0, n._)("img", {
                            loading: "lazy",
                            src: i(818962)(`./${t.id}.svg`),
                            class: (0, s.C_)(e.$style.image),
                            alt: t.id
                        }, null, 10, l)], 10, a)))), 128))], 2))
                    }
                }),
                g = {
                    root: "GamblingLinks_root_G9FFT",
                    link: "GamblingLinks_link_GCbOL",
                    image: "GamblingLinks_image_TijSO"
                };
            var p = i(348118);
            const m = {};
            m["$style"] = g;
            const d = (0, p.Z)(c, [
                    ["__cssModules", m]
                ]),
                u = d
        },
        378966: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => z
            });
            var n = i(166252),
                s = i(3577),
                o = i(602262),
                r = i(280894),
                a = i(41816),
                l = i.n(a),
                c = i(305570),
                g = i.n(c),
                p = i(281795),
                m = i.n(p);
            const d = i.p + "img/bookmaker-rating-en.e5dcc84dd.svg",
                u = i.p + "img/bookmaker-rating.6f4fa6b59.svg";
            var b = i(427813),
                h = i.n(b);
            const v = i.p + "img/casino-ru-white.c67251adc.svg";
            var k = i(374461),
                _ = i.n(k),
                w = i(500121),
                f = i.n(w),
                y = i(115237),
                S = i.n(y);
            const T = i.p + "img/gamban.08fef8ac0.svg";
            var C = i(723097),
                Z = i.n(C),
                O = i(726789),
                R = i(112808),
                G = Object.defineProperty,
                W = Object.defineProperties,
                U = Object.getOwnPropertyDescriptors,
                V = Object.getOwnPropertySymbols,
                F = Object.prototype.hasOwnProperty,
                I = Object.prototype.propertyIsEnumerable,
                L = (e, t, i) => t in e ? G(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i
                }) : e[t] = i,
                M = (e, t) => {
                    for (var i in t || (t = {})) F.call(t, i) && L(e, i, t[i]);
                    if (V)
                        for (var i of V(t)) I.call(t, i) && L(e, i, t[i]);
                    return e
                },
                $ = (e, t) => W(e, U(t));
            const B = ["src", "height", "width", "title"],
                E = (0, n.aZ)({
                    __name: "Listings",
                    props: {
                        desktop: Boolean
                    },
                    setup(e) {
                        var t;
                        const i = e,
                            a = (0, r.oR)(),
                            c = {
                                is: "span"
                            },
                            p = e => ({
                                is: "a",
                                href: e,
                                target: "_blank"
                            }),
                            b = null != (t = R.appConfig.layout.footer.trustees) ? t : [],
                            k = M($(M({}, "BY" === a.state.country && !a.getters.isBlockable && {
                                betonMobile: {
                                    img: g(),
                                    w: i.desktop ? 68 : 49,
                                    title: "betonmobile"
                                }
                            }), {
                                bookmaker: {
                                    img: "ru" === a.getters.currentLang ? u : d,
                                    h: i.desktop ? 42 : 24,
                                    w: i.desktop ? 42 : 24
                                },
                                betraja: {
                                    img: m(),
                                    w: i.desktop ? 25 : 18
                                },
                                casinoMentor: {
                                    img: h(),
                                    w: i.desktop ? 86 : 62
                                },
                                bestBitcoinCasino: {
                                    img: l(),
                                    w: i.desktop ? 25 : 18
                                },
                                casinosAnalyzer: {
                                    img: _(),
                                    w: i.desktop ? 91 : 66,
                                    blockRedirectCountries: ["RU"]
                                },
                                cricketBettingWali: {
                                    img: S(),
                                    w: i.desktop ? 22 : 16
                                },
                                cricketBettingGuru: {
                                    img: f(),
                                    w: i.desktop ? 25 : 18
                                },
                                gamban: {
                                    img: T,
                                    w: i.desktop ? 25 : 18
                                },
                                gamblock: {
                                    img: Z(),
                                    w: i.desktop ? 88 : 64
                                }
                            }), "RU" === a.state.country && !a.getters.isBlockable && {
                                casinoRu: {
                                    img: v,
                                    w: i.desktop ? 80 : 64
                                }
                            }),
                            w = (0, n.Fl)((() => i.desktop ? 25 : 18)),
                            y = (0, n.Fl)((() => b.filter((({
                                id: e
                            }) => k[e])).map((({
                                id: e,
                                link: t
                            }) => {
                                var i, n;
                                return $(M({}, k[e]), {
                                    id: e,
                                    listeners: t && !(null == (n = null == (i = k[e]) ? void 0 : i.blockRedirectCountries) ? void 0 : n.includes(a.state.country)) ? p(t) : c
                                })
                            }))));
                        return (t, r) => ((0, n.wg)(), (0, n.iD)("div", {
                            class: (0, s.C_)(i.desktop ? t.$style.desktop : t.$style.mobile)
                        }, [y.value.length > 0 ? ((0, n.wg)(!0), (0, n.iD)(n.HY, {
                            key: 0
                        }, (0, n.Ko)(y.value, ((e, i) => ((0, n.wg)(), (0, n.j4)((0, n.LL)(e.listeners.is), (0, n.dG)({
                            ref_for: !0
                        }, e.listeners, {
                            key: i,
                            class: t.$style.item
                        }), {
                            default: (0, n.w5)((() => [(0, n._)("img", {
                                class: (0, s.C_)(t.$style.img),
                                loading: "lazy",
                                src: e.img,
                                height: e.h || w.value,
                                width: e.w,
                                title: e.title
                            }, null, 10, B)])),
                            _: 2
                        }, 1040, ["class"])))), 128)) : (0, n.kq)("", !0), e.desktop ? ((0, n.wg)(), (0, n.j4)(O.Z, {
                            key: 1,
                            class: (0, s.C_)(t.$style.apg)
                        }, null, 8, ["class"])) : (0, n.kq)("", !0), (0, n._)("span", {
                            class: (0, s.C_)(t.$style.ageLimit)
                        }, (0, s.zw)((0, o.SU)(R.appConfig).options.ageLimit) + "+ ", 3)], 2))
                    }
                }),
                x = {
                    mobile: "Listings_mobile_cTBld",
                    desktop: "Listings_desktop_gMy4l Listings_mobile_cTBld",
                    ageLimit: "Listings_ageLimit_tzYRt",
                    apg: "Listings_apg_mlfS9"
                };
            var A = i(348118);
            const j = {};
            j["$style"] = x;
            const N = (0, A.Z)(E, [
                    ["__cssModules", j]
                ]),
                z = N
        },
        940850: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => f
            });
            var n = i(166252),
                s = i(3577),
                o = i(602262),
                r = i(827856),
                a = i.n(r),
                l = i(280894),
                c = i(920346),
                g = i(909997),
                p = i(112808),
                m = i(751275);
            const d = ["innerHTML"],
                u = ["innerHTML"],
                b = ["href", "onClick"],
                h = (0, n.aZ)({
                    __name: "OwnerBlock",
                    setup(e) {
                        var t, i;
                        const r = (0, l.oR)(),
                            h = (0, o.Vh)((() => r.getters.isMobile)),
                            v = (0, c.Jr)("common.footer.owner"),
                            k = [{
                                icon: m.TelegramWhite,
                                link: null != (i = null == (t = p.appConfig.layout.footer.ownerBlock) ? void 0 : t.telegram[r.getters.currentLang]) ? i : "https://t.me/+HMIHx8aK9sQ5ZDgy",
                                name: "telegram"
                            }, {
                                icon: m.XWhite,
                                link: "https://x.com/Owner1win",
                                name: "twitter"
                            }],
                            _ = e => {
                                g.L_.handleFooterEvent("social", {
                                    social_network_name: e
                                })
                            };
                        return (e, t) => {
                            var i, r;
                            return (0, n.wg)(), (0, n.iD)("div", {
                                class: (0, s.C_)([e.$style.root, h.value && e.$style.mobile])
                            }, [(0, n._)("div", null, [(0, n._)("div", {
                                class: (0, s.C_)(e.$style.title),
                                innerHTML: (0, o.SU)(a()).sanitize(null == (i = (0, o.SU)(v)) ? void 0 : i.title)
                            }, null, 10, d), (0, n._)("div", {
                                class: (0, s.C_)(e.$style.subtitle),
                                innerHTML: (0, o.SU)(a()).sanitize(null == (r = (0, o.SU)(v)) ? void 0 : r.subtitle)
                            }, null, 10, u)]), (0, n._)("div", {
                                class: (0, s.C_)(e.$style.buttons)
                            }, [((0, n.wg)(), (0, n.iD)(n.HY, null, (0, n.Ko)(k, (t => (0, n._)("a", {
                                key: t.link,
                                href: t.link,
                                class: (0, s.C_)(e.$style.icon),
                                rel: "noopener",
                                target: "_blank",
                                onClick: e => _(t.name)
                            }, [((0, n.wg)(), (0, n.j4)((0, n.LL)(t.icon)))], 10, b))), 64))], 2)], 2)
                        }
                    }
                }),
                v = {
                    root: "OwnerBlock_root_s3Eai",
                    mobile: "OwnerBlock_mobile_QOrdn",
                    title: "OwnerBlock_title_N9nQ6",
                    subtitle: "OwnerBlock_subtitle_RuoAJ",
                    buttons: "OwnerBlock_buttons_mT91e",
                    icon: "OwnerBlock_icon_HaXYw"
                };
            var k = i(348118);
            const _ = {};
            _["$style"] = v;
            const w = (0, k.Z)(h, [
                    ["__cssModules", _]
                ]),
                f = w
        },
        322820: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => k
            });
            var n = i(166252),
                s = i(602262),
                o = i(3577),
                r = i(749963),
                a = i(322201),
                l = i(996787),
                c = i(920346),
                g = i(112808),
                p = i(305653);
            const m = {
                    key: 0
                },
                d = (0, n.aZ)({
                    __name: "ResponsibleGaming",
                    setup(e) {
                        const t = (0, a.tv)(),
                            i = (0, c.Jr)("common.license.responsibleGaming"),
                            d = e => {
                                e && t.push({
                                    name: p.Z.RULES,
                                    params: {
                                        ruleId: e
                                    }
                                })
                            };
                        return (e, t) => {
                            var a;
                            return (null == (a = (0, s.SU)(g.appConfig).options.rules) ? void 0 : a.responsibleGamingRuleId) && (0, s.SU)(i) ? ((0, n.wg)(), (0, n.iD)("div", m, [(0, n.Wm)(l.Z, {
                                text: (0, s.SU)(i).text
                            }, {
                                0: (0, n.w5)((() => [(0, n._)("a", {
                                    class: (0, o.C_)(e.$style.link),
                                    onClick: t[0] || (t[0] = (0, r.iM)((() => {
                                        var e;
                                        return d(null == (e = (0, s.SU)(g.appConfig).options.rules) ? void 0 : e.responsibleGamingRuleId)
                                    }), ["stop", "prevent"]))
                                }, (0, o.zw)((0, s.SU)(i).link), 3)])),
                                _: 1
                            }, 8, ["text"])])) : (0, n.kq)("", !0)
                        }
                    }
                }),
                u = {
                    link: "ResponsibleGaming_link_PYIGN"
                };
            var b = i(348118);
            const h = {};
            h["$style"] = u;
            const v = (0, b.Z)(d, [
                    ["__cssModules", h]
                ]),
                k = v
        },
        714466: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => y
            });
            var n = i(166252),
                s = i(3577);
            const o = i.p + "img/atp.e87cf2801.svg",
                r = i.p + "img/fiba.4b405b699.svg",
                a = i.p + "img/fifa.604717ea7.svg",
                l = i.p + "img/itf.9b1402c42.svg",
                c = i.p + "img/nhl.9b1a4945d.svg",
                g = i.p + "img/uefa.093dd4fef.svg",
                p = i.p + "img/ufc.0ef6261ee.svg",
                m = i.p + "img/wta.c6d5e2ef3.svg";
            var d = i(112808);
            const u = ["height", "src", "width"],
                b = 15,
                h = 25,
                v = (0, n.aZ)({
                    __name: "SportsPromotionSection",
                    props: {
                        desktop: Boolean
                    },
                    setup(e) {
                        const t = e,
                            i = (0, n.Fl)((() => t.desktop ? h / b : 1)),
                            v = (0, n.Fl)((() => t.desktop ? h : b)),
                            k = [{
                                id: "uefa",
                                img: g,
                                w: 37
                            }, {
                                id: "ufc",
                                img: p,
                                w: 45
                            }, {
                                id: "wta",
                                img: m,
                                w: 20
                            }, {
                                id: "fiba",
                                img: r,
                                w: 33
                            }, {
                                id: "nhl",
                                img: c,
                                w: 15
                            }, {
                                id: "atp",
                                img: o,
                                w: 13
                            }, ...t.desktop ? [{
                                id: "itf",
                                img: l,
                                w: 34
                            }, {
                                id: "fifa",
                                img: a,
                                w: 46
                            }] : []],
                            _ = (0, n.Fl)((() => {
                                const e = d.appConfig.layout.footer.associations || [];
                                return k.filter((({
                                    id: t
                                }) => e.includes(t)))
                            }));
                        return (e, t) => ((0, n.wg)(), (0, n.iD)("div", {
                            class: (0, s.C_)(e.$style.root)
                        }, [((0, n.wg)(!0), (0, n.iD)(n.HY, null, (0, n.Ko)(_.value, ((e, t) => ((0, n.wg)(), (0, n.iD)("img", {
                            key: t,
                            loading: "lazy",
                            height: v.value,
                            src: e.img,
                            width: e.w * i.value
                        }, null, 8, u)))), 128))], 2))
                    }
                }),
                k = {
                    root: "SportsPromotionSection_root_R105a"
                };
            var _ = i(348118);
            const w = {};
            w["$style"] = k;
            const f = (0, _.Z)(v, [
                    ["__cssModules", w]
                ]),
                y = f
        },
        790408: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => p
            });
            var n = i(934405),
                s = i(370359);
            const o = {
                    [s.Z.TELEGRAM]: "telegram",
                    [s.Z.VKONTAKTE]: "vkontakte",
                    [s.Z.YOUTUBE]: "youtube",
                    [s.Z.INSTAGRAM]: "instagram",
                    [s.Z.FACEBOOK]: "facebook",
                    [s.Z.TWITTER]: "twitter",
                    [s.Z.TWITCH]: "twitch",
                    [s.Z.DISCORD]: "discord",
                    [s.Z.THREADS]: "threads",
                    [s.Z.WHATSAPP]: "whatsapp",
                    [s.Z.TIKTOK]: "tiktok"
                },
                r = {
                    props: {
                        social: {
                            required: !0,
                            type: String,
                            validator: (0, n.kw)(Object.values(s.Z))
                        }
                    },
                    render() {
                        return this.$slots.default({
                            gradientClassName: this.$style[o[this.social]],
                            iconName: s.I[this.social].icon,
                            text: s.I[this.social].text,
                            href: this.$store.getters.socialLinks[this.social]
                        })
                    }
                },
                a = {
                    telegram: "SocialItemWrapper_telegram_wnt9T",
                    vkontakte: "SocialItemWrapper_vkontakte_CBfTs",
                    instagram: "SocialItemWrapper_instagram_stOzm",
                    facebook: "SocialItemWrapper_facebook_Q5Xgq",
                    twitter: "SocialItemWrapper_twitter_BG81o",
                    youtube: "SocialItemWrapper_youtube_FcIAy",
                    twitch: "SocialItemWrapper_twitch_Atm4e",
                    discord: "SocialItemWrapper_discord_Hj75e",
                    whatsapp: "SocialItemWrapper_whatsapp_YV4oz",
                    tiktok: "SocialItemWrapper_tiktok_cMLx0",
                    threads: "SocialItemWrapper_threads_rVg1X"
                };
            var l = i(348118);
            const c = {};
            c["$style"] = a;
            const g = (0, l.Z)(r, [
                    ["__cssModules", c]
                ]),
                p = g
        },
        238678: (e, t, i) => {
            "use strict";
            i.d(t, {
                E: () => r
            });
            var n = i(166252),
                s = i(931338);
            const o = "footer_forum_enabled",
                r = () => {
                    const {
                        value: e
                    } = (0, s.y)(o), t = (0, n.Fl)((() => "on" === e.value));
                    return {
                        isForumLinkEnabled: t
                    }
                }
        },
        136629: (e, t, i) => {
            "use strict";
            i.d(t, {
                g: () => a
            });
            var n = i(602262),
                s = i(931338);
            const o = "route-3031-social-networks-in-footer",
                r = "on",
                a = () => {
                    const {
                        value: e
                    } = (0, s.y)(o), t = (0, n.Vh)((() => e.value === r && !0));
                    return {
                        isOwnerBlockVisible: t
                    }
                }
        },
        551543: (e, t, i) => {
            "use strict";
            i.d(t, {
                U: () => g
            });
            var n = i(166252),
                s = i(280894),
                o = i(384754);
            const r = {
                    userAgreement: "/rules/1352",
                    generalTermsConditions: "/rules/1353",
                    privacyPolicy: "/rules/1354",
                    rulesOnSports: "/rules/1355",
                    responsibleGaming: "/rules/1356",
                    cookieInformation: "/rules/1357",
                    winConversionFeatures: "",
                    deleteAccount: ""
                },
                a = {
                    userAgreement: "/rules/1180",
                    generalTermsConditions: "/rules/1184",
                    privacyPolicy: "/rules/1185",
                    rulesOnSports: "/rules/1186",
                    responsibleGaming: "/rules/1187",
                    cookieInformation: "/rules/1192",
                    winConversionFeatures: "/rules/1360",
                    deleteAccount: ""
                },
                l = {
                    userAgreement: "/rules/1344",
                    generalTermsConditions: "/rules/1346",
                    privacyPolicy: "/rules/1347",
                    rulesOnSports: "/rules/1345",
                    responsibleGaming: "/rules/1348",
                    cookieInformation: "/rules/1349",
                    winConversionFeatures: "/rules/1351",
                    deleteAccount: "/rules/1350"
                };
            var c = i(920346);
            const g = () => {
                const e = (0, s.oR)(),
                    t = (0, c.Jr)("common.footer.legalInformation"),
                    i = (0, n.Fl)((() => e.getters.isBlockable || o.Rb || o.iz)),
                    g = (0, n.Fl)((() => {
                        let e = r;
                        o.Rb ? e = l : o.iz && (e = a);
                        const i = [{
                            id: "userAgreement",
                            name: t.userAgreement,
                            href: e.userAgreement
                        }, {
                            id: "generalTermsConditions",
                            name: t.generalTermsConditions,
                            href: e.generalTermsConditions
                        }, {
                            id: "privacyPolicy",
                            name: t.privacyPolicy,
                            href: e.privacyPolicy
                        }, {
                            id: "rulesOnSports",
                            name: t.rulesOnSports,
                            href: e.rulesOnSports
                        }, {
                            id: "responsibleGaming",
                            name: t.responsibleGaming,
                            href: e.responsibleGaming
                        }, {
                            id: "cookieInformation",
                            name: t.cookieInformation,
                            href: e.cookieInformation
                        }];
                        return (o.Rb || o.iz) && i.push({
                            id: "winConversionFeatures",
                            name: t.winConversionFeatures,
                            href: e.winConversionFeatures
                        }), o.Rb && i.push({
                            id: "deleteAccount",
                            name: t.deleteAccount,
                            href: e.deleteAccount
                        }), i
                    }));
                return {
                    textLegalInformation: t,
                    legalInformationList: g,
                    showLegalInformation: i
                }
            }
        },
        41816: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/best-bitcoin-casino.9c1716b1a-50.png 50w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/best-bitcoin-casino.9c1716b1a-50.png",
                    width: 50,
                    height: 50
                }],
                src: "https://v1.bundlecdn.com/img/best-bitcoin-casino.9c1716b1a-50.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/best-bitcoin-casino.9c1716b1a-50.png"
                },
                width: 50,
                height: 50
            }
        },
        305570: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/betonmobile.06029de1b-1000.png 1000w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/betonmobile.06029de1b-1000.png",
                    width: 1e3,
                    height: 368
                }],
                src: "https://v1.bundlecdn.com/img/betonmobile.06029de1b-1000.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/betonmobile.06029de1b-1000.png"
                },
                width: 1e3,
                height: 368
            }
        },
        281795: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/betraja.5cf6f15c0-75.png 75w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/betraja.5cf6f15c0-75.png",
                    width: 75,
                    height: 75
                }],
                src: "https://v1.bundlecdn.com/img/betraja.5cf6f15c0-75.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/betraja.5cf6f15c0-75.png"
                },
                width: 75,
                height: 75
            }
        },
        427813: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/casino-mentor.f6b6387ac-172.png 172w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/casino-mentor.f6b6387ac-172.png",
                    width: 172,
                    height: 50
                }],
                src: "https://v1.bundlecdn.com/img/casino-mentor.f6b6387ac-172.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/casino-mentor.f6b6387ac-172.png"
                },
                width: 172,
                height: 50
            }
        },
        374461: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/casinos-analyzer.896bc5254-182.png 182w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/casinos-analyzer.896bc5254-182.png",
                    width: 182,
                    height: 50
                }],
                src: "https://v1.bundlecdn.com/img/casinos-analyzer.896bc5254-182.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/casinos-analyzer.896bc5254-182.png"
                },
                width: 182,
                height: 50
            }
        },
        500121: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/cricket-betting-guru.cfe7d4265-500.png 500w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/cricket-betting-guru.cfe7d4265-500.png",
                    width: 500,
                    height: 500
                }],
                src: "https://v1.bundlecdn.com/img/cricket-betting-guru.cfe7d4265-500.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/cricket-betting-guru.cfe7d4265-500.png"
                },
                width: 500,
                height: 500
            }
        },
        115237: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/cricket-betting-wali.5806a7feb-43.png 43w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/cricket-betting-wali.5806a7feb-43.png",
                    width: 43,
                    height: 50
                }],
                src: "https://v1.bundlecdn.com/img/cricket-betting-wali.5806a7feb-43.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/cricket-betting-wali.5806a7feb-43.png"
                },
                width: 43,
                height: 50
            }
        },
        723097: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/gamblock.977b71bae-315.png 315w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/gamblock.977b71bae-315.png",
                    width: 315,
                    height: 100
                }],
                src: "https://v1.bundlecdn.com/img/gamblock.977b71bae-315.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/gamblock.977b71bae-315.png"
                },
                width: 315,
                height: 100
            }
        },
        818962: (e, t, i) => {
            var n = {
                "./gamble-aware.svg": 280364,
                "./gamcare.svg": 307475
            };

            function s(e) {
                var t = o(e);
                return i(t)
            }

            function o(e) {
                if (!i.o(n, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return n[e]
            }
            s.keys = function() {
                return Object.keys(n)
            }, s.resolve = o, e.exports = s, s.id = 818962
        },
        280364: (e, t, i) => {
            "use strict";
            e.exports = i.p + "img/gamble-aware.fe4a43b79.svg"
        },
        307475: (e, t, i) => {
            "use strict";
            e.exports = i.p + "img/gamcare.1f1f885fe.svg"
        }
    }
]);