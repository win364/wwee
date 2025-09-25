"use strict";
(self["webpackChunk_1win_frontend_main"] = self["webpackChunk_1win_frontend_main"] || []).push([
    [39048], {
        726789: (e, t, o) => {
            o.d(t, {
                Z: () => u
            });
            var n = o(166252),
                i = o(602262),
                l = o(644540);
            const s = () => l.A ? void 0 : "",
                a = () => {
                    const e = s();
                    if (!e) return;
                    const t = window[`apg_${e.replace(/-/g,"_")}`];
                    t ? t.init() : setTimeout((() => {
                        a()
                    }), 1e3)
                },
                r = ["id", "data-apg-seal-id"],
                c = (0, n.aZ)({
                    __name: "ApgSeal",
                    setup(e) {
                        const t = s();
                        return (0, n.bv)((() => {
                            a()
                        })), (e, o) => (0, i.SU)(t) ? ((0, n.wg)(), (0, n.iD)("div", {
                            key: 0,
                            id: `apg-${(0,i.SU)(t)}`,
                            "data-apg-seal-id": (0, i.SU)(t),
                            "data-apg-image-size": "256",
                            "data-apg-image-type": "basic-light-large"
                        }, null, 8, r)) : (0, n.kq)("", !0)
                    }
                }),
                d = c,
                u = d
        },
        789174: (e, t, o) => {
            o.d(t, {
                Z: () => j
            });
            var n = o(166252),
                i = o(749963);
            const l = {
                    class: "modal-payments-aside"
                },
                s = {
                    key: 0,
                    class: "withdrawal-management"
                },
                a = {
                    class: "payments-container"
                },
                r = {
                    key: 1,
                    class: "payments"
                };

            function c(e, t, o, c, d, u) {
                const p = (0, n.up)("WithdrawalCancellation"),
                    _ = (0, n.up)("DepositBonusList"),
                    m = (0, n.up)("DepositFreeSpin"),
                    g = (0, n.up)("MoneyCountrySelect"),
                    h = (0, n.up)("VLoader"),
                    y = (0, n.up)("PaymentTile");
                return (0, n.wg)(), (0, n.iD)("div", l, [o.isActiveWithdrawals && o.isDeposit ? ((0, n.wg)(), (0, n.iD)("div", s, [(0, n.Wm)(p)])) : (0, n.kq)("", !0), u.showDepositBonusList ? ((0, n.wg)(), (0, n.j4)(_, {
                    key: 1,
                    "current-bonuses": u.currentBonuses,
                    onActivateBonus: t[0] || (t[0] = t => e.$emit("activateBonus"))
                }, null, 8, ["current-bonuses"])) : (0, n.kq)("", !0), (0, n.Wm)(i.uT, {
                    name: "deposit-free-spin"
                }, {
                    default: (0, n.w5)((() => [o.promoCashierVisible && o.isDeposit ? ((0, n.wg)(), (0, n.j4)(m, {
                        key: 0,
                        "deposit-currency": o.depositCurrency
                    }, null, 8, ["deposit-currency"])) : (0, n.kq)("", !0)])),
                    _: 1
                }), (0, n.Wm)(g, {
                    class: "payments-country-select",
                    onClickOnRegionOpenButton: u.clickOnRegionOpenButton,
                    onClickOnRegionChangeButton: u.clickOnRegionChangeButton
                }, null, 8, ["onClickOnRegionOpenButton", "onClickOnRegionChangeButton"]), (0, n._)("div", a, [o.isFetchingPayments ? ((0, n.wg)(), (0, n.j4)(h, {
                    key: 0,
                    class: "loader"
                })) : ((0, n.wg)(), (0, n.iD)("div", r, [((0, n.wg)(!0), (0, n.iD)(n.HY, null, (0, n.Ko)(u.filteredCards, ((e, t) => ((0, n.wg)(), (0, n.j4)(y, {
                    key: `${e.value}${t}`,
                    class: "payment",
                    payment: e,
                    active: u.isActivePayment(e),
                    recommended: c.isRecommended(e),
                    badges: c.getBadges(e, o.isDeposit),
                    onToggle: t => u.onSelectPayment(e)
                }, null, 8, ["payment", "active", "recommended", "badges", "onToggle"])))), 128))]))])])
            }
            var d = o(280894),
                u = o(45490),
                p = o(680573),
                _ = o(427405),
                m = o(433375),
                g = o(260840),
                h = o(945436),
                y = o(890636),
                w = o(212628),
                v = o(228843),
                k = o(723852),
                f = Object.defineProperty,
                b = Object.defineProperties,
                B = Object.getOwnPropertyDescriptors,
                C = Object.getOwnPropertySymbols,
                S = Object.prototype.hasOwnProperty,
                O = Object.prototype.propertyIsEnumerable,
                D = (e, t, o) => t in e ? f(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: o
                }) : e[t] = o,
                $ = (e, t) => {
                    for (var o in t || (t = {})) S.call(t, o) && D(e, o, t[o]);
                    if (C)
                        for (var o of C(t)) O.call(t, o) && D(e, o, t[o]);
                    return e
                },
                T = (e, t) => b(e, B(t)),
                P = (e, t, o) => new Promise(((n, i) => {
                    var l = e => {
                            try {
                                a(o.next(e))
                            } catch (t) {
                                i(t)
                            }
                        },
                        s = e => {
                            try {
                                a(o.throw(e))
                            } catch (t) {
                                i(t)
                            }
                        },
                        a = e => e.done ? n(e.value) : Promise.resolve(e.value).then(l, s);
                    a((o = o.apply(e, t)).next())
                }));
            const A = {
                components: {
                    DepositFreeSpin: p.J,
                    PaymentTile: v.Z,
                    MoneyCountrySelect: _.Z,
                    WithdrawalCancellation: m.Z,
                    DepositBonusList: u.Z,
                    VLoader: k.Z
                },
                inject: ["$notify"],
                props: {
                    value: {
                        type: Object,
                        default: null
                    },
                    cards: {
                        type: Array,
                        required: !0
                    },
                    requisites: {
                        type: String,
                        default: ""
                    },
                    isDeposit: Boolean,
                    paymentDefaultAbbreviation: {
                        type: String,
                        default: ""
                    },
                    depositCurrency: {
                        type: String,
                        default: null
                    },
                    isActiveWithdrawals: {
                        type: Boolean,
                        default: !1
                    },
                    promoCashierVisible: Boolean,
                    isFetchingPayments: Boolean
                },
                emits: ["cardSelect", "paymentSelect", "clickOnRegionOpenButton", "clickOnPaymentMethod", "clickOnRegionChangeButton", "activateBonus"],
                setup() {
                    const e = (0, h.gD)(),
                        {
                            isRecommended: t,
                            getBadges: o
                        } = (0, g.F)();
                    return {
                        bonusStore: e,
                        isRecommended: t,
                        getBadges: o
                    }
                },
                computed: T($({}, (0, d.Se)(["lang", "langCommon"])), {
                    payments() {
                        return this.cards.filter((e => !e.payments))
                    },
                    excludesCategories() {
                        return this.cards.filter((e => e.groupCategory)).map((({
                            groupCategory: e
                        }) => e))
                    },
                    filteredCards() {
                        return this.cards.filter((e => !e.tag || !this.excludesCategories.includes(e.tag)))
                    },
                    text() {
                        return $($({}, this.lang.payments.tags), this.lang.deposit.modal)
                    },
                    currentBonuses() {
                        var e;
                        const t = null != (e = this.bonusStore.additionalCurrencyBonuses) ? e : this.bonusStore.availableBonuses;
                        return t.filter((e => e.depositRequired && e.currency === this.depositCurrency))
                    },
                    showDepositBonusList() {
                        const e = this.currentBonuses.length > 0;
                        return this.bonusStore.isNewBonusBalance && e && this.isDeposit
                    }
                }),
                mounted() {
                    return P(this, null, (function*() {
                        let e = (0, y.o)(this.cards, this.paymentDefaultAbbreviation);
                        if (!e) {
                            const t = this.$store.getters.countryDefaultPayment;
                            e = this.payments.find((({
                                value: e
                            }) => e === t))
                        }
                        this.onSelectPayment(null != e ? e : this.cards[0])
                    }))
                },
                methods: {
                    isActivePayment(e) {
                        return !!this.value && e.value === this.value.value
                    },
                    onSelectPayment(e) {
                        this.isActivePayment(e) || ((null == e ? void 0 : e.payments) ? this.$emit("cardSelect", e) : this.$emit("paymentSelect", e), this.$emit("clickOnPaymentMethod", e))
                    },
                    clickOnRegionOpenButton() {
                        this.$emit("clickOnRegionOpenButton")
                    },
                    clickOnRegionChangeButton(e) {
                        this.$emit("clickOnRegionChangeButton", e)
                    }
                },
                PAYMENT_P2P: w.R$
            };
            var q = o(348118);
            const L = (0, q.Z)(A, [
                    ["render", c],
                    ["__scopeId", "data-v-066f960e"]
                ]),
                j = L
        },
        542137: (e, t, o) => {
            o.d(t, {
                Z: () => A
            });
            var n = o(166252),
                i = o(3577),
                l = o(749963);
            const s = {
                    key: 0,
                    class: "modal-banner"
                },
                a = {
                    class: "modal-content"
                },
                r = {
                    key: 0,
                    class: "modal-content__header"
                },
                c = {
                    class: "modal-content__header__row"
                },
                d = {
                    class: "modal-content__header__row__cell"
                },
                u = {
                    key: 0,
                    class: "modal-button-login"
                },
                p = {
                    class: "modal-content__header__row__account-number"
                },
                _ = {
                    class: "modal-content__header__row__cell__cell"
                },
                m = {
                    key: 0,
                    class: "modal-content__header__row"
                },
                g = {
                    class: "modal-content__header__row__cell"
                },
                h = {
                    key: 0,
                    class: "modal-content__footer"
                },
                y = {
                    key: 1,
                    class: "modal-footer"
                },
                w = {
                    key: 0,
                    class: "modal-additional-block"
                },
                v = {
                    key: 1,
                    class: "modal-signature"
                };

            function k(e, t, o, k, f, b) {
                const B = (0, n.up)("VIcon");
                return (0, n.wg)(), (0, n.iD)("div", {
                    class: (0, i.C_)(["modal-container", [o.withCustomBackdrop && "modal-container-backdrop"]]),
                    style: (0, i.j5)(b.modalStyles),
                    onClick: t[0] || (t[0] = (...e) => b.onBackdropClick && b.onBackdropClick(...e))
                }, [e.$slots.banner ? ((0, n.wg)(), (0, n.iD)("div", s, [(0, n.WI)(e.$slots, "banner", {}, void 0, !0)])) : (0, n.kq)("", !0), (0, n._)("div", {
                    class: (0, i.C_)(["modal-container-wrapper", {
                        "has-additional-block": e.$slots.additionalBlock,
                        "dynamic-height": o.dynamicHeight,
                        "not-scroll": o.notScroll,
                        "not-scroll-body": o.notScrollBody,
                        "overflow-visible": o.overflowVisible,
                        "not-user-select": o.notUserSelect,
                        "no-content": !e.$slots.default
                    }])
                }, [e.$slots.aside ? (0, n.WI)(e.$slots, "aside", {
                    key: 0
                }, void 0, !0) : (0, n.kq)("", !0), (0, n._)("div", a, [o.title || o.additionalTitle || o.closeable ? ((0, n.wg)(), (0, n.iD)("div", r, [(0, n._)("div", c, [(0, n._)("div", d, [(0, n._)("div", {
                    class: (0, i.C_)(["modal-content__header__row__cell__title", {
                        "pre-line": o.breakTitle,
                        [`size_${o.sizeTitle}`]: !0
                    }]),
                    "data-pw": "MODAL-TITLE"
                }, (0, i.zw)(o.title), 3)]), t[1] || (t[1] = (0, n._)("div", {
                    class: "modal-content__header__row__cell"
                }, null, -1)), e.$slots.headerCenter ? ((0, n.wg)(), (0, n.iD)("div", u, [(0, n.WI)(e.$slots, "headerCenter", {}, void 0, !0)])) : (0, n.kq)("", !0), (0, n._)("div", p, [(0, n._)("div", _, (0, i.zw)(o.additionalTitle), 1), o.closeable ? ((0, n.wg)(), (0, n.j4)(B, {
                    key: 0,
                    class: "modal-content__header__row__cell__overlay",
                    icon: "close-thin",
                    size: 24,
                    "data-pw": "MODAL-CLOSE-BUTTON",
                    onClick: (0, l.iM)(b.close, ["prevent"])
                }, null, 8, ["onClick"])) : (0, n.kq)("", !0)])]), o.subtitle ? ((0, n.wg)(), (0, n.iD)("div", m, [(0, n._)("div", g, [(0, n._)("div", {
                    class: (0, i.C_)(["modal-content__header__row__cell__sub-title", `size_${o.sizeSubtitle}`]),
                    "data-pw": "MODAL-SUBTITLE"
                }, (0, i.zw)(o.subtitle), 3)])])) : (0, n.kq)("", !0)])) : (0, n.kq)("", !0), (0, n._)("div", {
                    class: (0, i.C_)(["modal-content__container", {
                        "not-scroll": o.notScrollBody
                    }])
                }, [(0, n.WI)(e.$slots, "body", {}, (() => [(0, n._)("div", {
                    class: (0, i.C_)(["modal-content__body", {
                        "not-scroll": o.notScrollBody
                    }])
                }, [(0, n.WI)(e.$slots, "default", {}, void 0, !0)], 2)]), !0), e.$slots.footer ? ((0, n.wg)(), (0, n.iD)("div", h, [(0, n.WI)(e.$slots, "footer", {}, void 0, !0)])) : (0, n.kq)("", !0)], 2)])], 2), e.$slots.additionalBlock || e.$slots.signature ? ((0, n.wg)(), (0, n.iD)("div", y, [e.$slots.additionalBlock ? ((0, n.wg)(), (0, n.iD)("div", w, [(0, n.WI)(e.$slots, "additionalBlock", {}, void 0, !0)])) : (0, n.kq)("", !0), e.$slots.signature ? ((0, n.wg)(), (0, n.iD)("div", v, [(0, n.WI)(e.$slots, "signature", {}, void 0, !0)])) : (0, n.kq)("", !0)])) : (0, n.kq)("", !0)], 6)
            }
            var f = o(559166),
                b = Object.defineProperty,
                B = Object.getOwnPropertySymbols,
                C = Object.prototype.hasOwnProperty,
                S = Object.prototype.propertyIsEnumerable,
                O = (e, t, o) => t in e ? b(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: o
                }) : e[t] = o,
                D = (e, t) => {
                    for (var o in t || (t = {})) C.call(t, o) && O(e, o, t[o]);
                    if (B)
                        for (var o of B(t)) S.call(t, o) && O(e, o, t[o]);
                    return e
                };
            const $ = {
                name: "VModalWhite",
                components: {
                    VIcon: f.Z
                },
                props: {
                    isDesktopApp: {
                        type: Boolean,
                        required: !1,
                        default: !1
                    },
                    closeable: {
                        type: Boolean,
                        required: !1,
                        default: !0
                    },
                    showClose: {
                        type: Boolean,
                        required: !1,
                        default: !1
                    },
                    className: {
                        type: Object,
                        required: !1,
                        default: () => ({})
                    },
                    title: {
                        type: String,
                        default: null
                    },
                    sizeTitle: {
                        type: String,
                        default: "default",
                        validator: e => ["default", "small", "medium", "big"].includes(e)
                    },
                    additionalTitle: {
                        type: String,
                        default: null
                    },
                    subtitle: {
                        type: String,
                        default: null
                    },
                    sizeSubtitle: {
                        type: String,
                        default: "default",
                        validator: e => ["default", "medium"].includes(e)
                    },
                    closeOnBackgroundClick: {
                        type: Boolean,
                        default: !0
                    },
                    dynamicHeight: {
                        type: Boolean,
                        default: !1
                    },
                    notScroll: {
                        type: Boolean,
                        default: !1
                    },
                    notScrollBody: {
                        type: Boolean,
                        default: !1
                    },
                    overflowVisible: {
                        type: Boolean,
                        default: !1
                    },
                    notUserSelect: {
                        type: Boolean,
                        default: !1
                    },
                    breakTitle: {
                        type: Boolean,
                        default: !1
                    },
                    width: {
                        type: [Number, String],
                        default: null
                    },
                    height: {
                        type: [Number, String],
                        default: null
                    },
                    withCustomBackdrop: {
                        type: Boolean,
                        default: !1
                    }
                },
                emits: ["clickClose", "close", "closeOnBackdrop"],
                computed: {
                    modalClasses() {
                        return D({
                            "is-desktop-app-modal": this.isDesktopApp
                        }, this.className)
                    },
                    modalStyles() {
                        const e = {};
                        return this.width && (e["--white-modal-width"] = Number.isInteger(this.width) ? `${this.width}px` : this.width), this.height && (e["--white-modal-height"] = Number.isInteger(this.height) ? `${this.height}px` : this.height), e
                    }
                },
                methods: {
                    close() {
                        this.showClose && this.$emit("clickClose"), this.closeable && this.$emit("close")
                    },
                    onBackdropClick(e) {
                        this.withCustomBackdrop && (!e.target || e.target.closest(".modal-container") && !e.target.closest(".modal-container-wrapper")) && this.$emit("closeOnBackdrop")
                    }
                }
            };
            var T = o(348118);
            const P = (0, T.Z)($, [
                    ["render", k],
                    ["__scopeId", "data-v-73acdce5"]
                ]),
                A = P
        },
        431940: (e, t, o) => {
            o.d(t, {
                Z: () => b
            });
            var n = o(166252),
                i = o(3577),
                l = o(749963);
            const s = {
                    class: "licence__top"
                },
                a = {
                    class: "licence__top__one-win-info-container"
                },
                r = {
                    class: "licence__top__one-win-info"
                },
                c = {
                    class: "licence__top__one-win-info__row"
                },
                d = {
                    key: 0,
                    class: "licence__top__one-win-info__row"
                },
                u = {
                    class: "licence__top__one-win-info__row"
                },
                p = {
                    key: 0,
                    class: "licence__main"
                },
                _ = ["innerHTML"];

            function m(e, t, o, m, g, h) {
                const y = (0, n.up)("ApgSeal");
                return (0, n.wg)(), (0, n.iD)("div", {
                    class: (0, i.C_)(["licence", {
                        "white-theme": o.whiteTheme
                    }])
                }, [(0, n._)("div", s, [o.showApgSeal ? ((0, n.wg)(), (0, n.j4)(y, {
                    key: 0,
                    class: "licence__top__apg"
                })) : (0, n.kq)("", !0), (0, n._)("div", a, [(0, n._)("div", r, [(0, n._)("div", c, (0, i.zw)(h.$filters.format(e.$store.getters.lang.deposit.modal.copyright, (new Date).getFullYear())), 1), h.legalAddress ? ((0, n.wg)(), (0, n.iD)("div", d, (0, i.zw)(h.legalAddress), 1)) : (0, n.kq)("", !0), (0, n._)("div", u, (0, i.zw)(e.$store.getters.lang.footer.copyright), 1)]), o.dropdown ? ((0, n.wg)(), (0, n.iD)("div", {
                    key: 0,
                    class: (0, i.C_)(["licence__top__button-more", {
                        opened: e.showLicenseText
                    }]),
                    onClick: t[0] || (t[0] = (...e) => h.toggleShowLicenseText && h.toggleShowLicenseText(...e))
                }, null, 2)) : (0, n.kq)("", !0)])]), o.dropdown ? ((0, n.wg)(), (0, n.j4)(l.uT, {
                    key: 0,
                    name: "slide-down"
                }, {
                    default: (0, n.w5)((() => [e.showLicenseText ? ((0, n.wg)(), (0, n.iD)("div", p, [(0, n._)("div", {
                        class: "licence__main__row",
                        innerHTML: m.DOMPurify.sanitize(h.licenseText, {
                            ADD_ATTR: ["target"]
                        })
                    }, null, 8, _)])) : (0, n.kq)("", !0)])),
                    _: 1
                })) : (0, n.kq)("", !0)], 2)
            }
            var g = o(827856),
                h = o.n(g),
                y = o(726789),
                w = o(112808);
            const v = {
                components: {
                    ApgSeal: y.Z
                },
                inject: ["$filters"],
                props: {
                    whiteTheme: Boolean,
                    dropdown: Boolean,
                    showApgSeal: {
                        type: Boolean,
                        default: !0
                    }
                },
                setup() {
                    return {
                        DOMPurify: h()
                    }
                },
                data: () => ({
                    showLicenseText: !1
                }),
                computed: {
                    licenseText() {
                        return this.$store.getters.licenseText
                    },
                    legalAddress() {
                        var e;
                        return null == (e = w.appConfig.modules.payments) ? void 0 : e.companyLegalAddress
                    }
                },
                methods: {
                    toggleShowLicenseText() {
                        this.showLicenseText = !this.showLicenseText
                    }
                }
            };
            var k = o(348118);
            const f = (0, k.Z)(v, [
                    ["render", m],
                    ["__scopeId", "data-v-0b1d11cd"]
                ]),
                b = f
        }
    }
]);