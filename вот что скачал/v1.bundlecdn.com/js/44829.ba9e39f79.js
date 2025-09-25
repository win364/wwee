"use strict";
(self["webpackChunk_1win_frontend_main"] = self["webpackChunk_1win_frontend_main"] || []).push([
    [44829], {
        444829: (e, a, s) => {
            s.d(a, {
                Z: () => F
            });
            var i = s(166252),
                o = s(3577),
                t = s(602262),
                n = s(749963),
                l = s(66037),
                r = s(185983);

            function m(e, a, s, t, n, l) {
                const r = (0, i.up)("VIcon");
                return (0, i.wg)(), (0, i.iD)("div", {
                    class: (0, o.C_)(e.$style.root),
                    style: (0, o.j5)(l.styles)
                }, [(0, i.Wm)(r, {
                    class: (0, o.C_)(e.$style.icon),
                    icon: l.icon
                }, null, 8, ["class", "icon"]), s.name ? ((0, i.wg)(), (0, i.iD)("span", {
                    key: 0,
                    class: (0, o.C_)([e.$style.name, s.smallText && e.$style.small])
                }, (0, o.zw)(s.name), 3)) : (0, i.kq)("", !0)], 6)
            }
            var g = s(559166);
            const c = ["cherries-with-stem", "dice", "gamepad", "noun-joystick"],
                d = {
                    components: {
                        VIcon: g.Z
                    },
                    props: {
                        id: {
                            type: String,
                            required: !0
                        },
                        name: {
                            type: String,
                            default: null
                        },
                        smallText: Boolean
                    },
                    computed: {
                        isGreen() {
                            return this.id.length % 2 === 0
                        },
                        icon() {
                            const e = Number(this.id.replace(/\D/g, "")),
                                a = this.isGreen ? "_2" : "";
                            return `casino/${c[e%c.length]}${a}`
                        },
                        styles() {
                            return {
                                "--game-stub__color": this.isGreen ? "#00a858" : "#ff1764"
                            }
                        }
                    }
                },
                _ = {
                    root: "CasinoGameStub_root_WxoVA",
                    icon: "CasinoGameStub_icon_yYrnQ",
                    name: "CasinoGameStub_name_biEcz",
                    small: "CasinoGameStub_small_ikezk"
                };
            var u = s(348118);
            const C = {};
            C["$style"] = _;
            const v = (0, u.Z)(d, [
                    ["render", m],
                    ["__cssModules", C]
                ]),
                p = v;
            var y = s(753154),
                w = s(845919);
            const G = {
                    __name: "CasinoImage",
                    props: {
                        src: {
                            type: String,
                            required: !0
                        },
                        imagePreset: {
                            type: Object,
                            required: !0,
                            validator: w.X
                        },
                        useSrcsetWidth: Boolean
                    },
                    emits: ["error", "load"],
                    setup(e) {
                        return (a, s) => ((0, i.wg)(), (0, i.j4)(y.Z, {
                            "fallback-image-dpr": 2,
                            src: e.src,
                            type: e.imagePreset,
                            "scale-sizes": [1, 2],
                            formats: ["avif", "webp"],
                            "use-srcset-width": e.useSrcsetWidth,
                            loading: "lazy",
                            onLoad: s[0] || (s[0] = e => a.$emit("load")),
                            onError: s[1] || (s[1] = e => a.$emit("error"))
                        }, null, 8, ["src", "type", "use-srcset-width"]))
                    }
                },
                k = G,
                $ = k;
            var P = s(550418),
                f = s(262626),
                E = s(716082);
            const b = (0, i.aZ)({
                    __name: "CasinoGamePreview",
                    props: {
                        game: {},
                        isSmallLangTag: {
                            type: Boolean
                        },
                        userCount: {},
                        gameName: {},
                        isFavorite: {
                            type: Boolean
                        },
                        imagePreset: {}
                    },
                    setup(e) {
                        const a = (0, t.iH)(!1),
                            s = (0, t.iH)(!0),
                            n = (0, t.iH)(!1),
                            l = () => {
                                a.value = !1, s.value = !1
                            };
                        return (e, r) => {
                            var m, c;
                            return (0, i.wg)(), (0, i.iD)("div", {
                                class: (0, o.C_)([e.$style.root, e.isFavorite && e.$style.active]),
                                "data-pw": "GAME-CARD-PREVIEW"
                            }, [e.game.lang || void 0 !== e.userCount ? ((0, i.wg)(), (0, i.iD)(i.HY, {
                                key: 0
                            }, [(0, i._)("div", {
                                class: (0, o.C_)([e.$style.gradient, e.game.lang && void 0 !== e.userCount && e.$style.double])
                            }, null, 2), (0, i._)("div", {
                                class: (0, o.C_)(e.$style.wrapper)
                            }, [e.game.lang ? ((0, i.wg)(), (0, i.iD)("div", {
                                key: 0,
                                class: (0, o.C_)([e.$style.tag, e.game.lang && void 0 === e.userCount && e.$style.single, e.isSmallLangTag && e.$style.small])
                            }, [n.value ? (0, i.kq)("", !0) : ((0, i.wg)(), (0, i.j4)(P.Z, {
                                key: 0,
                                rounded: "",
                                code: null != (c = null == (m = (0, t.SU)(E.bP).getByIsoKey(e.game.lang, null)) ? void 0 : m.flag) ? c : e.game.lang,
                                class: (0, o.C_)(e.$style.icon),
                                size: e.isSmallLangTag ? 14 : 16,
                                onError: r[0] || (r[0] = e => n.value = !0)
                            }, null, 8, ["code", "class", "size"])), (0, i._)("p", {
                                class: (0, o.C_)(e.$style.lang)
                            }, (0, o.zw)(e.game.lang.toUpperCase()), 3)], 2)) : (0, i.kq)("", !0), e.userCount ? ((0, i.wg)(), (0, i.iD)("div", {
                                key: 1,
                                class: (0, o.C_)(e.$style.count)
                            }, [(0, i.Wm)(g.Z, {
                                class: (0, o.C_)(e.$style.icon),
                                icon: "user-count"
                            }, null, 8, ["class"]), (0, i._)("span", {
                                class: (0, o.C_)(e.$style.text)
                            }, (0, o.zw)(e.userCount), 3)], 2)) : (0, i.kq)("", !0)], 2)], 64)) : (0, i.kq)("", !0), s.value ? ((0, i.wg)(), (0, i.j4)(f.Z, {
                                key: 1,
                                class: (0, o.C_)(e.$style.skeleton)
                            }, null, 8, ["class"])) : (0, i.kq)("", !0), e.game.imageUrl && !a.value ? ((0, i.wg)(), (0, i.j4)($, {
                                key: `image-${e.game.id}`,
                                src: e.game.imageUrl,
                                "image-preset": e.imagePreset,
                                class: (0, o.C_)(e.$style.image),
                                onError: r[1] || (r[1] = e => a.value = !0),
                                onLoad: l
                            }, null, 8, ["src", "image-preset", "class"])) : ((0, i.wg)(), (0, i.j4)(p, {
                                id: e.game.id,
                                key: `stub-${e.game.id}`,
                                name: e.gameName
                            }, null, 8, ["id", "name"]))], 2)
                        }
                    }
                }),
                S = {
                    root: "CasinoGamePreview_root_wJSck",
                    active: "CasinoGamePreview_active_RoKTz",
                    image: "CasinoGamePreview_image_CL57L",
                    skeleton: "CasinoGamePreview_skeleton_GNEGL",
                    wrapper: "CasinoGamePreview_wrapper_yq45K",
                    count: "CasinoGamePreview_count_Sgy5a",
                    icon: "CasinoGamePreview_icon_VnkBQ",
                    text: "CasinoGamePreview_text_V7P4h",
                    tag: "CasinoGamePreview_tag_Iw1_o",
                    lang: "CasinoGamePreview_lang_RXj1f",
                    single: "CasinoGamePreview_single_KaBrd",
                    small: "CasinoGamePreview_small_smno_",
                    gradient: "CasinoGamePreview_gradient_D8o_s",
                    double: "CasinoGamePreview_double_tkm8L"
                },
                D = {};
            D["$style"] = S;
            const N = (0, u.Z)(b, [
                    ["__cssModules", D]
                ]),
                A = N;
            var R = s(382369),
                h = s(920346),
                B = s(7473);
            const I = ["data-pw"],
                T = ["onMouseenter", "onClick"],
                V = (0, i.aZ)({
                    __name: "CasinoGameCard",
                    props: {
                        game: {},
                        userCount: {
                            default: void 0
                        },
                        imagePreset: {
                            default: () => w.ResponsivePictureTypesEnum.CASINO_LIST_BIG
                        },
                        isSmallLangTag: {
                            type: Boolean
                        },
                        isSingleLineName: {
                            type: Boolean
                        },
                        isExtendedView: {
                            type: Boolean,
                            default: !0
                        },
                        isFavorite: {
                            type: Boolean
                        },
                        isProviderVisible: {
                            type: Boolean,
                            default: !0
                        },
                        isFavoriteButtonVisible: {
                            type: Boolean
                        },
                        isBonusIconVisible: {
                            type: Boolean
                        },
                        gameNameFormatter: {
                            type: Function,
                            default: void 0
                        },
                        providerLogoUrl: {
                            default: void 0
                        }
                    },
                    emits: ["toggleFavorite"],
                    setup(e, {
                        emit: a
                    }) {
                        const s = a,
                            m = (0, h.Jr)("common.casino.bonusAccount");
                        return (e, a) => {
                            var c, d, _, u, C;
                            return (0, i.wg)(), (0, i.iD)("div", {
                                class: (0, o.C_)(e.$style.root),
                                "data-pw": `GAME-CARD-${e.game.nameEn}`
                            }, [e.isBonusIconVisible && (null == (c = e.game.attributes) ? void 0 : c.canUseBonusBalance) ? ((0, i.wg)(), (0, i.j4)(B.Z, {
                                key: 0,
                                teleport: "",
                                overlay: !1,
                                middleware: [(0, t.SU)(l.uY)(), (0, t.SU)(r.cv)(8)]
                            }, {
                                tooltip: (0, i.w5)((() => [(0, i._)("div", {
                                    class: (0, o.C_)(e.$style.text)
                                }, (0, o.zw)((0, t.SU)(m)), 3)])),
                                default: (0, i.w5)((({
                                    toggle: a,
                                    open: s,
                                    ref: t
                                }) => [(0, i._)("div", {
                                    ref: t,
                                    class: (0, o.C_)(e.$style.bonus),
                                    onMouseenter: () => s(),
                                    onClick: (0, n.iM)((() => a()), ["stop"])
                                }, [(0, i.Wm)(g.Z, {
                                    icon: "bonus-tag",
                                    size: 30
                                })], 42, T)])),
                                _: 1
                            }, 8, ["middleware"])) : (0, i.kq)("", !0), (0, i.Wm)(A, {
                                game: e.game,
                                "is-favorite": e.isFavorite,
                                "game-name": e.isExtendedView ? void 0 : null != (_ = null == (d = e.gameNameFormatter) ? void 0 : d.call(e, e.game.name)) ? _ : e.game.nameEn,
                                "image-preset": e.imagePreset,
                                "user-count": e.userCount,
                                "is-small-lang-tag": e.isSmallLangTag
                            }, null, 8, ["game", "is-favorite", "game-name", "image-preset", "user-count", "is-small-lang-tag"]), e.isExtendedView ? ((0, i.wg)(), (0, i.iD)("div", {
                                key: 1,
                                class: (0, o.C_)([e.$style.info, e.isProviderVisible && e.game.gameOwnerName && e.$style.withProvider]),
                                "data-pw": "GAME-CARD-INFO-CONTAINER"
                            }, [e.isProviderVisible && e.game.gameOwnerName ? ((0, i.wg)(), (0, i.iD)("div", {
                                key: 0,
                                class: (0, o.C_)(e.$style.provider),
                                "data-pw": "GAME-CARD-PROVIDER-CONTAINER"
                            }, [(0, i.Wm)(R.Z, {
                                class: (0, o.C_)(e.$style.icon),
                                "provider-name": e.game.gameOwnerName,
                                logo: e.providerLogoUrl,
                                "data-pw": "GAME-CARD-PROVIDER-ICON"
                            }, null, 8, ["class", "provider-name", "logo"]), (0, i._)("p", {
                                class: (0, o.C_)(e.$style.name),
                                "data-pw": "GAME-CARD-PROVIDER-TITLE"
                            }, (0, o.zw)(e.game.gameOwnerName), 3)], 2)) : (0, i.kq)("", !0), (0, i._)("p", {
                                class: (0, o.C_)([e.$style.gameName, e.isSingleLineName && e.$style.single]),
                                "data-pw": "GAME-CARD-GAME-TITLE"
                            }, (0, o.zw)(null != (C = null == (u = e.gameNameFormatter) ? void 0 : u.call(e, e.game.name)) ? C : e.game.nameEn), 3), e.isFavoriteButtonVisible ? ((0, i.wg)(), (0, i.iD)("button", {
                                key: 1,
                                type: "button",
                                class: (0, o.C_)(e.$style.favorite),
                                "data-pw": "GAME-CARD-FAVORITE-BUTTON",
                                onClick: a[0] || (a[0] = (0, n.iM)((e => s("toggleFavorite")), ["stop", "prevent"]))
                            }, [(0, i.Wm)(g.Z, {
                                icon: "favorite-star",
                                class: (0, o.C_)([e.$style.icon, e.isFavorite && e.$style.active]),
                                "data-pw": "GAME-CARD-FAVORITE-ICON"
                            }, null, 8, ["class"])], 2)) : (0, i.kq)("", !0)], 2)) : (0, i.kq)("", !0)], 10, I)
                        }
                    }
                }),
                M = {
                    bonus: "CasinoGameCard_bonus_QoG86",
                    text: "CasinoGameCard_text_fBmGG",
                    root: "CasinoGameCard_root_H2CrR",
                    info: "CasinoGameCard_info_S8KkG",
                    provider: "CasinoGameCard_provider_N040T",
                    icon: "CasinoGameCard_icon_cp9SD",
                    name: "CasinoGameCard_name_FuMdc",
                    favorite: "CasinoGameCard_favorite_DO1_k",
                    active: "CasinoGameCard_active_gDYNa",
                    gameName: "CasinoGameCard_gameName_dhYOm",
                    single: "CasinoGameCard_single_Sl9gR",
                    withProvider: "CasinoGameCard_withProvider_qrmah"
                },
                O = {};
            O["$style"] = M;
            const L = (0, u.Z)(V, [
                    ["__cssModules", O]
                ]),
                F = L
        },
        262626: (e, a, s) => {
            s.d(a, {
                Z: () => c
            });
            var i = s(166252),
                o = s(3577);

            function t(e, a) {
                return (0, i.wg)(), (0, i.iD)("div", {
                    class: (0, o.C_)(e.$style.root)
                }, null, 2)
            }
            const n = {
                root: "SkeletonPlaceholder_root_kmrJR",
                shimmer: "SkeletonPlaceholder_shimmer_j0qiN"
            };
            var l = s(348118);
            const r = {},
                m = {};
            m["$style"] = n;
            const g = (0, l.Z)(r, [
                    ["render", t],
                    ["__cssModules", m]
                ]),
                c = g
        }
    }
]);