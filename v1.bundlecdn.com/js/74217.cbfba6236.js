(self["webpackChunk_1win_frontend_main"] = self["webpackChunk_1win_frontend_main"] || []).push([
    [74217], {
        105576: (a, e, t) => {
            "use strict";
            t.d(e, {
                Z: () => i
            });
            var s = t(166252),
                l = t(3577),
                u = t(262884);
            const d = (0, s.aZ)({
                    __name: "DetailingMoney",
                    props: {
                        value: {},
                        currency: {}
                    },
                    setup(a) {
                        const e = a,
                            t = (0, s.Fl)((() => {
                                var a;
                                const t = e.value.toString(),
                                    [, s] = t.split("."),
                                    l = null != (a = null == s ? void 0 : s.length) ? a : 0;
                                return {
                                    minimumFractionDigits: l,
                                    maximumFractionDigits: l
                                }
                            })),
                            d = (0, u.Kq)(void 0, (() => e.currency), t),
                            n = (0, s.Fl)((() => d.value.format(Number(e.value))));
                        return (a, e) => ((0, s.wg)(), (0, s.iD)("div", {
                            class: (0, l.C_)(a.$style.root)
                        }, (0, l.zw)(n.value), 3))
                    }
                }),
                n = {
                    root: "DetailingMoney_root_CO3y3"
                };
            var f = t(348118);
            const g = {};
            g["$style"] = n;
            const v = (0, f.Z)(d, [
                    ["__cssModules", g]
                ]),
                i = v
        },
        79417: (a, e, t) => {
            "use strict";
            t.d(e, {
                Z: () => z
            });
            var s = t(166252),
                l = t(3577),
                u = t(602262),
                d = t(280894),
                n = t(105576),
                f = t(682703),
                g = t(428490),
                v = t(262884),
                i = Object.defineProperty,
                o = Object.getOwnPropertySymbols,
                r = Object.prototype.hasOwnProperty,
                c = Object.prototype.propertyIsEnumerable,
                _ = (a, e, t) => e in a ? i(a, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : a[e] = t,
                p = (a, e) => {
                    for (var t in e || (e = {})) r.call(e, t) && _(a, t, e[t]);
                    if (o)
                        for (var t of o(e)) c.call(e, t) && _(a, t, e[t]);
                    return a
                };
            const b = {
                    key: 0
                },
                m = (0, s.aZ)({
                    __name: "PaymentInfo",
                    props: {
                        amount: {
                            default: ""
                        },
                        iconName: {
                            default: "bank_transfer_onewin"
                        },
                        currency: {
                            default: ""
                        },
                        cryptoCurrency: {
                            default: ""
                        },
                        isCrypto: {
                            type: Boolean,
                            default: !1
                        },
                        txid: {
                            default: ""
                        },
                        blockchain: {
                            default: "TRON"
                        },
                        hideTxId: {
                            type: Boolean,
                            default: !1
                        },
                        finalAmount: {
                            default: ""
                        }
                    },
                    setup(a) {
                        const e = a,
                            t = (0, d.oR)(),
                            i = (0, u.Vh)((() => t.getters.currentLang)),
                            o = (0, s.Fl)((() => (new Date).toLocaleDateString(i.value))),
                            r = (0, s.Fl)((() => (new Date).toLocaleString(i.value, {
                                hour: "numeric",
                                minute: "numeric"
                            }))),
                            c = (0, s.Fl)((() => e.txid.length <= 10 ? e.txid : `${e.txid.slice(0,5)}…${e.txid.slice(-5)}`)),
                            _ = (0, s.Fl)((() => e.isCrypto ? `${r.value} ${o.value}` : o.value)),
                            m = (0, s.Fl)((() => e.isCrypto ? c.value : r.value)),
                            y = `${g.sU[e.blockchain]}${e.txid}`,
                            k = p({}, e.isCrypto && {
                                href: y,
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }),
                            h = (0, v.Kq)(void 0, (() => e.currency), {
                                minimumFractionDigits: 0
                            }),
                            w = (0, s.Fl)((() => h.value.format(Number(e.amount)))),
                            z = (0, s.Fl)((() => e.isCrypto && e.cryptoCurrency !== e.currency && Number(e.amount) > 0));
                        return (a, e) => ((0, s.wg)(), (0, s.iD)("div", {
                            class: (0, l.C_)(a.$style.paymentInfo)
                        }, [(0, s._)("div", {
                            class: (0, l.C_)(a.$style.header)
                        }, [(0, s._)("div", null, (0, l.zw)(_.value), 1), a.hideTxId ? (0, s.kq)("", !0) : ((0, s.wg)(), (0, s.j4)((0, s.LL)(a.isCrypto ? "a" : "div"), (0, s.dG)({
                            key: 0
                        }, k, {
                            class: a.isCrypto && a.$style.txIdLink
                        }), {
                            default: (0, s.w5)((() => [(0, s.Uk)((0, l.zw)(m.value), 1)])),
                            _: 1
                        }, 16, ["class"]))], 2), (0, s._)("div", {
                            class: (0, l.C_)(a.$style.paymentType)
                        }, [(0, s.Wm)(f.Z, {
                            type: "color",
                            class: (0, l.C_)(a.$style.paymentIcon),
                            name: a.iconName,
                            size: 32
                        }, null, 8, ["class", "name"]), (0, s._)("div", {
                            class: (0, l.C_)(a.$style.sum)
                        }, [(0, s._)("span", {
                            class: (0, l.C_)(a.$style.sumTopItem)
                        }, [a.isCrypto ? ((0, s.wg)(), (0, s.iD)("span", b, "+")) : (0, s.kq)("", !0), (0, s.Wm)(n.Z, {
                            value: a.isCrypto ? a.finalAmount : a.amount,
                            currency: a.isCrypto ? a.cryptoCurrency : a.currency
                        }, null, 8, ["value", "currency"])], 2), z.value ? ((0, s.wg)(), (0, s.iD)("span", {
                            key: 0,
                            class: (0, l.C_)(a.$style.sumBottomItem)
                        }, (0, l.zw)(w.value), 3)) : (0, s.kq)("", !0)], 2)], 2)], 2))
                    }
                }),
                y = {
                    header: "PaymentInfo_header_i18m4",
                    paymentInfo: "PaymentInfo_paymentInfo_ha2uK",
                    paymentType: "PaymentInfo_paymentType_Hte70",
                    paymentIcon: "PaymentInfo_paymentIcon_jgfSi",
                    sum: "PaymentInfo_sum_FF0d8",
                    txIdLink: "PaymentInfo_txIdLink_p1SXJ",
                    sumTopItem: "PaymentInfo_sumTopItem_6_LpV",
                    sumBottomItem: "PaymentInfo_sumBottomItem_Jvu6E"
                };
            var k = t(348118);
            const h = {};
            h["$style"] = y;
            const w = (0, k.Z)(m, [
                    ["__cssModules", h]
                ]),
                z = w
        },
        274217: (a, e, t) => {
            "use strict";
            t.d(e, {
                Z: () => C
            });
            var s = t(166252),
                l = t(3577),
                u = t(322201),
                d = t(280894),
                n = t(559166),
                f = t(79417),
                g = t(583582),
                v = t(920346),
                i = t(63619),
                o = t(212628),
                r = t(894710),
                c = t(531047),
                _ = t(173870),
                p = Object.defineProperty,
                b = Object.getOwnPropertySymbols,
                m = Object.prototype.hasOwnProperty,
                y = Object.prototype.propertyIsEnumerable,
                k = (a, e, t) => e in a ? p(a, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : a[e] = t,
                h = (a, e) => {
                    for (var t in e || (e = {})) m.call(e, t) && k(a, t, e[t]);
                    if (b)
                        for (var t of b(e)) y.call(e, t) && k(a, t, e[t]);
                    return a
                };
            const w = (0, s.aZ)({
                    __name: "PaymentStatus",
                    props: {
                        amount: {
                            default: ""
                        },
                        paymentName: {
                            default: ""
                        },
                        currency: {
                            default: ""
                        },
                        cryptoCurrency: {
                            default: ""
                        },
                        isPlayButton: {
                            type: Boolean,
                            default: !0
                        },
                        status: {},
                        title: {},
                        info: {},
                        buttonText: {},
                        buttonAction: {
                            default: "play"
                        },
                        isCrypto: {
                            type: Boolean,
                            default: !1
                        },
                        txid: {
                            default: ""
                        },
                        blockchain: {
                            default: "TRON"
                        },
                        finalAmount: {
                            default: ""
                        }
                    },
                    emits: ["clickActionButton", "clickOnDetailingButton"],
                    setup(a, {
                        emit: e
                    }) {
                        const t = e,
                            p = a,
                            b = (0, d.oR)(),
                            m = (0, u.tv)(),
                            y = (0, v.dd)(),
                            k = (0, s.Fl)((() => {
                                switch (p.status) {
                                    case "success":
                                        return "check-rounded-fill";
                                    case "failure":
                                        return "info-circle-blue";
                                    default:
                                        return "clock"
                                }
                            })),
                            w = (0, s.Fl)((() => {
                                var a;
                                return null == (a = b.getters) ? void 0 : a.isMobile
                            })),
                            z = (0, s.Fl)((() => o.g5[p.paymentName] ? p.paymentName : "bank_transfer_onewin")),
                            x = (0, s.Fl)((() => {
                                if (p.amount) return h({
                                    iconName: z.value,
                                    amount: p.amount,
                                    currency: p.currency
                                }, p.isCrypto && {
                                    isCrypto: !0,
                                    cryptoCurrency: p.cryptoCurrency,
                                    txid: p.txid,
                                    blockchain: p.blockchain,
                                    finalAmount: p.finalAmount,
                                    hideTxId: "failure" === p.status
                                })
                            })),
                            j = () => {
                                var a;
                                t("clickActionButton");
                                const e = y.isModalOpened(r.bZ),
                                    s = y.isModalOpened(r.$M);
                                if (y.closeAll(), "repeatDeposit" !== p.buttonAction)
                                    if ("repeatWithdrawal" !== p.buttonAction) {
                                        if (w.value && !e && !s) switch (null == (a = i.g.value) ? void 0 : a.name) {
                                            case _.Z.WALLET_WITHDRAWAL:
                                            case _.Z.WALLET_DEPOSIT:
                                            case "profile":
                                            case void 0:
                                                m.push({
                                                    name: _.Z.HOME
                                                });
                                                break;
                                            default:
                                                i.g.value && m.push(i.g.value);
                                                break
                                        }
                                    } else w.value ? m.push({
                                        name: _.Z.WALLET_WITHDRAWAL
                                    }) : y.open(r.$M);
                                else w.value ? m.push({
                                    name: _.Z.WALLET_DEPOSIT
                                }) : y.open(r.bZ)
                            },
                            I = () => {
                                t("clickOnDetailingButton"), w.value ? m.push({
                                    name: _.Z.DETAILING
                                }) : y.openOver(r.pg)
                            };
                        return (a, e) => ((0, s.wg)(), (0, s.iD)("div", {
                            class: (0, l.C_)(a.$style.container)
                        }, [(0, s._)("div", {
                            class: (0, l.C_)(a.$style.acceptedBox)
                        }, [(0, s._)("div", {
                            class: (0, l.C_)(a.$style.header)
                        }, [(0, s.Wm)(n.Z, {
                            class: (0, l.C_)(a.$style.icon),
                            icon: k.value
                        }, null, 8, ["class", "icon"]), (0, s._)("h2", {
                            class: (0, l.C_)(a.$style.title)
                        }, (0, l.zw)(a.title), 3), (0, s._)("p", {
                            class: (0, l.C_)(a.$style.details)
                        }, (0, l.zw)(a.info), 3)], 2), x.value ? ((0, s.wg)(), (0, s.j4)(f.Z, (0, s.dG)({
                            key: 0
                        }, x.value, {
                            class: w.value ? "paymentInfoMobile" : "paymentInfo"
                        }), null, 16, ["class"])) : (0, s.kq)("", !0), a.isPlayButton ? ((0, s.wg)(), (0, s.j4)(g.Z, {
                            key: 1,
                            class: (0, l.C_)([a.$style.button, a.$style.disableBoxShadow]),
                            size: "xl",
                            theme: "blue",
                            wide: "",
                            onClick: j
                        }, {
                            default: (0, s.w5)((() => [(0, s.Uk)((0, l.zw)(a.buttonText), 1)])),
                            _: 1
                        }, 8, ["class"])) : (0, s.kq)("", !0), (0, s.Wm)(c.Z, {
                            class: (0, l.C_)(a.$style.detailingButton),
                            "white-theme": "",
                            onClick: I
                        }, null, 8, ["class"])], 2)], 2))
                    }
                }),
                z = {
                    container: "PaymentStatus_container__FpbO",
                    acceptedBox: "PaymentStatus_acceptedBox_uKlpc",
                    header: "PaymentStatus_header_cCIJw",
                    icon: "PaymentStatus_icon_L6CTw",
                    title: "PaymentStatus_title_iCnKW",
                    details: "PaymentStatus_details_PrYqV",
                    button: "PaymentStatus_button_mOgoG",
                    disableBoxShadow: "PaymentStatus_disableBoxShadow_jPmWq",
                    detailingButton: "PaymentStatus_detailingButton_Epd8r",
                    paymentInfo: "PaymentStatus_paymentInfo_EAjii",
                    paymentInfoMobile: "PaymentStatus_paymentInfoMobile__PE73"
                };
            var x = t(348118);
            const j = {};
            j["$style"] = z;
            const I = (0, x.Z)(w, [
                    ["__cssModules", j]
                ]),
                C = I
        },
        682703: (a, e, t) => {
            "use strict";
            t.d(e, {
                Z: () => b
            });
            var s = t(166252),
                l = t(3577),
                u = t(602262),
                d = t(280894),
                n = t(66894),
                f = t(431970),
                g = t(212628),
                v = (a, e, t) => new Promise(((s, l) => {
                    var u = a => {
                            try {
                                n(t.next(a))
                            } catch (e) {
                                l(e)
                            }
                        },
                        d = a => {
                            try {
                                n(t.throw(a))
                            } catch (e) {
                                l(e)
                            }
                        },
                        n = a => a.done ? s(a.value) : Promise.resolve(a.value).then(u, d);
                    n((t = t.apply(a, e)).next())
                }));
            const i = ["src"],
                o = {
                    __name: "PaymentIcon",
                    props: {
                        blur: Boolean,
                        circle: Boolean,
                        compact: Boolean,
                        name: {
                            required: !0,
                            type: String
                        },
                        s3GatewayObjectId: {
                            type: String,
                            default: void 0
                        },
                        type: {
                            required: !0,
                            type: String,
                            validator: a => ["color", "mono"].includes(a)
                        },
                        size: {
                            type: Number,
                            required: !0
                        },
                        autoWidth: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    setup(a) {
                        const e = a,
                            o = (0, d.oR)(),
                            r = (0, s.Fl)((() => o.getters.moneyCountry || o.state.country)),
                            c = (0, u.XI)(),
                            _ = (0, s.Fl)((() => `${e.circle?18:e.size}px`)),
                            p = a => r.value === a,
                            b = a => [g.R$, g.Uc].includes(a),
                            m = (0, s.Fl)((() => e.s3GatewayObjectId ? (0, f.dW)(e.s3GatewayObjectId) : null));
                        return (0, s.YP)([() => e.name, () => e.s3GatewayObjectId], (a => v(this, [a], (function*([a, s]) {
                            if (s) return;
                            const l = !p("RU") && b(a) ? "card_p2p" : a,
                                u = (0, g.cO)(l),
                                d = `${e.circle?"circle":"default"}/${u}`;
                            try {
                                c.value = yield t(501801)(`./${d}.svg`).then((a => a.default))
                            } catch (n) {
                                console.log(`Error loading icon ${d}`)
                            }
                        }))), {
                            immediate: !0
                        }), (t, u) => c.value || m.value ? ((0, s.wg)(), (0, s.j4)(n.Z, {
                            key: 0,
                            amount: 12,
                            disabled: !a.blur,
                            power: "color" === a.type ? .3 : 0,
                            style: (0, l.j5)({
                                height: _.value
                            })
                        }, {
                            default: (0, s.w5)((() => [(0, s._)("div", {
                                class: (0, l.C_)(t.$style.container)
                            }, [m.value ? ((0, s.wg)(), (0, s.iD)("img", {
                                key: 1,
                                src: m.value,
                                style: (0, l.j5)({
                                    height: _.value
                                })
                            }, null, 12, i)) : ((0, s.wg)(), (0, s.j4)((0, s.LL)(c.value), {
                                key: 0,
                                id: e.name,
                                class: (0, l.C_)([t.$style.color, a.autoWidth && t.$style.autoWidth]),
                                style: (0, l.j5)({
                                    height: _.value
                                })
                            }, null, 8, ["id", "class", "style"]))], 2)])),
                            _: 1
                        }, 8, ["disabled", "power", "style"])) : ((0, s.wg)(), (0, s.iD)("span", {
                            key: 1,
                            style: (0, l.j5)({
                                height: _.value
                            })
                        }, null, 4))
                    }
                },
                r = {
                    container: "PaymentIcon_container_l0fnI",
                    icon: "PaymentIcon_icon_tinGf",
                    autoWidth: "PaymentIcon_autoWidth_U7810",
                    color: "PaymentIcon_color_CcKvf PaymentIcon_icon_tinGf"
                };
            var c = t(348118);
            const _ = {};
            _["$style"] = r;
            const p = (0, c.Z)(o, [
                    ["__cssModules", _]
                ]),
                b = p
        },
        66894: (a, e, t) => {
            "use strict";
            t.d(e, {
                Z: () => i
            });
            var s = t(166252),
                l = t(3577);
            const u = {
                    class: "WithSelfBlurGlow"
                },
                d = {
                    class: "WithSelfBlurGlow__content-wrapper"
                };

            function n(a, e, t, n, f, g) {
                return (0, s.wg)(), (0, s.iD)("div", u, [t.disabled ? (0, s.kq)("", !0) : ((0, s.wg)(), (0, s.iD)("div", {
                    key: 0,
                    class: "WithSelfBlurGlow__glow-surrogate",
                    style: (0, l.j5)(g.glowSurrogateWrapperStyle)
                }, [(0, s.WI)(a.$slots, "default", {}, void 0, !0)], 4)), (0, s._)("div", d, [(0, s.WI)(a.$slots, "default", {}, void 0, !0)])])
            }
            const f = {
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
            var g = t(348118);
            const v = (0, g.Z)(f, [
                    ["render", n],
                    ["__scopeId", "data-v-0ea06900"]
                ]),
                i = v
        },
        531047: (a, e, t) => {
            "use strict";
            t.d(e, {
                Z: () => k
            });
            var s = t(166252),
                l = t(3577);
            const u = {
                key: 0,
                class: "withdrawal-limit"
            };

            function d(a, e, t, d, n, f) {
                return (0, s.wg)(), (0, s.iD)("div", {
                    class: (0, l.C_)(["container", {
                        "white-theme": t.whiteTheme
                    }])
                }, [t.headerHint || !t.whiteTheme ? ((0, s.wg)(), (0, s.iD)("div", u, (0, l.zw)(t.headerHint), 1)) : (0, s.kq)("", !0), (0, s._)("button", {
                    class: "detailing-button",
                    type: "button",
                    onClick: e[0] || (e[0] = (...a) => f.click && f.click(...a))
                }, (0, l.zw)(t.whiteTheme ? f.text.detailing : f.text.openDetailing), 1)], 2)
            }
            var n = t(280894),
                f = Object.defineProperty,
                g = Object.defineProperties,
                v = Object.getOwnPropertyDescriptors,
                i = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                r = Object.prototype.propertyIsEnumerable,
                c = (a, e, t) => e in a ? f(a, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : a[e] = t,
                _ = (a, e) => {
                    for (var t in e || (e = {})) o.call(e, t) && c(a, t, e[t]);
                    if (i)
                        for (var t of i(e)) r.call(e, t) && c(a, t, e[t]);
                    return a
                },
                p = (a, e) => g(a, v(e));
            const b = {
                name: "DetailingButton",
                props: {
                    headerHint: {
                        type: String,
                        default: ""
                    },
                    whiteTheme: {
                        type: Boolean
                    }
                },
                emits: ["click"],
                computed: p(_({}, (0, n.Se)(["langCommon"])), {
                    text() {
                        return this.langCommon.withdrawal.detailingButton
                    }
                }),
                methods: {
                    click() {
                        this.$emit("click")
                    }
                }
            };
            var m = t(348118);
            const y = (0, m.Z)(b, [
                    ["render", d],
                    ["__scopeId", "data-v-d3174eb0"]
                ]),
                k = y
        },
        501801: (a, e, t) => {
            var s = {
                "./circle/btc.svg": [111518, 94998, 11518],
                "./circle/ethereum.svg": [577323, 94998, 77323],
                "./circle/tether.svg": [733460, 94998, 33460],
                "./default/1buy.svg": [1470, 94998, 1470],
                "./default/1kassa_kg.svg": [433887, 94998, 33887],
                "./default/a_bank.svg": [645224, 94998, 45224],
                "./default/ababank.svg": [676455, 94998, 76455],
                "./default/abb.svg": [942738, 94998, 42738],
                "./default/abk_wallet.svg": [645022, 94998, 45022],
                "./default/acb_bank.svg": [679886, 94998, 79886],
                "./default/access-bank-nigeria.svg": [683862, 94998, 83862],
                "./default/access-bank-plc.svg": [371591, 94998, 71591],
                "./default/account_transfer_cis.svg": [722203, 94998, 22203],
                "./default/account_transfer_cis_h2h.svg": [290302, 94998, 90302],
                "./default/acleda.svg": [110819, 94998, 10819],
                "./default/activ.svg": [537776, 94998, 37776],
                "./default/activa_western_union.svg": [465560, 94998, 65560],
                "./default/activo.svg": [725433, 94998, 25433],
                "./default/acuenta.svg": [421314, 94998, 21314],
                "./default/adcb_wallet.svg": [70805, 94998, 70805],
                "./default/advcash.svg": [4680, 94998, 4680],
                "./default/affin_bank_berhad_malaysia.svg": [361989, 94998, 61989],
                "./default/africa-mobile-grouped.svg": [390514, 94998, 90514],
                "./default/african_bank.svg": [928620, 94998, 28620],
                "./default/africell.svg": [525063, 94998, 25063],
                "./default/agent.svg": [731560, 94998, 31560],
                "./default/agent_bb.svg": [799736, 94998, 99736],
                "./default/agent_bc.svg": [158658, 94998, 58658],
                "./default/agent_bm.svg": [782089, 94998, 82089],
                "./default/agent_cp.svg": [50746, 94998, 50746],
                "./default/agent_d17.svg": [701474, 94998, 1474],
                "./default/agent_dp.svg": [865789, 94998, 65789],
                "./default/agent_et.svg": [934723, 94998, 34723],
                "./default/agent_fl.svg": [801680, 94998, 1680],
                "./default/agent_fp.svg": [107589, 94998, 7589],
                "./default/agent_ip.svg": [887427, 94998, 87427],
                "./default/agent_ji.svg": [228774, 94998, 28774],
                "./default/agent_mtn.svg": [84723, 94998, 84723],
                "./default/agent_on.svg": [562682, 94998, 62682],
                "./default/agent_orange.svg": [961148, 94998, 61148],
                "./default/agent_vo.svg": [793669, 94998, 93669],
                "./default/agent_vodafone.svg": [950840, 94998, 50840],
                "./default/agent_wave.svg": [898846, 94998, 98846],
                "./default/agent_wb.svg": [772498, 94998, 72498],
                "./default/agrario.svg": [738600, 94998, 38600],
                "./default/agri_wallet.svg": [635310, 94998, 35310],
                "./default/agricola.svg": [359060, 94998, 59060],
                "./default/agriculture_bank.svg": [521630, 94998, 21630],
                "./default/aib_wallet.svg": [646307, 94998, 46307],
                "./default/airtel.svg": [774637, 94998, 74637],
                "./default/airtel_money.svg": [771892, 94998, 71892],
                "./default/airtel_tigo.svg": [568836, 94998, 68836],
                "./default/airtel_tz.svg": [996830, 94998, 96830],
                "./default/airtm.svg": [975137, 94998, 75137],
                "./default/akisi_cash.svg": [963045, 94998, 63045],
                "./default/akisi_cash_gtq.svg": [886175, 94998, 86175],
                "./default/alfa-click.svg": [195795, 94998, 95795],
                "./default/alfa_one_click.svg": [243248, 94998, 43248],
                "./default/alianspay.svg": [603850, 94998, 3850],
                "./default/alif_bank.svg": [792165, 94998, 92165],
                "./default/alipay.svg": [294791, 94998, 94791],
                "./default/alliance_bank_malaysia.svg": [992602, 94998, 92602],
                "./default/almacenes_exito.svg": [709765, 94998, 9765],
                "./default/alsuper.svg": [993207, 94998, 93207],
                "./default/altel.svg": [657006, 94998, 57006],
                "./default/am_bank.svg": [353946, 94998, 53946],
                "./default/amazon_pay.svg": [19779, 94998, 19779],
                "./default/ameen.svg": [869390, 94998, 69390],
                "./default/american_express.svg": [631941, 94998, 31941],
                "./default/amonat_bank.svg": [530961, 94998, 30961],
                "./default/anz_bank.svg": [890286, 94998, 90286],
                "./default/apay.svg": [971537, 94998, 71537],
                "./default/apay_py_wa.svg": [45683, 94998, 45683],
                "./default/apple-pay.svg": [587504, 94998, 87504],
                "./default/apple_pay_paystack.svg": [630363, 94998, 30363],
                "./default/applepay_mastercard.svg": [870893, 94998, 70893],
                "./default/argentina-online-banking.svg": [348620, 94998, 48620],
                "./default/argospay.svg": [387460, 94998, 87460],
                "./default/astropay.svg": [302317, 94998, 2317],
                "./default/astropay_bank_transfer.svg": [737048, 94998, 37048],
                "./default/astropay_webpay.svg": [258768, 94998, 58768],
                "./default/atf24.svg": [864704, 94998, 64704],
                "./default/attijariwafa_bank.svg": [555147, 94998, 55147],
                "./default/audi2pay.svg": [89811, 94998, 89811],
                "./default/av-villas.svg": [921950, 94998, 21950],
                "./default/azerturkbank.svg": [483975, 94998, 83975],
                "./default/b-kash.svg": [97290, 94998, 97290],
                "./default/bakai_bank.svg": [368205, 94998, 68205],
                "./default/bam.svg": [903840, 94998, 3840],
                "./default/ban100.svg": [926159, 94998, 26159],
                "./default/banbif.svg": [848231, 94998, 48231],
                "./default/bancamia.svg": [192696, 94998, 92696],
                "./default/banco_afirme.svg": [301635, 94998, 1635],
                "./default/banco_amazonas.svg": [558467, 94998, 58467],
                "./default/banco_azteca.svg": [124207, 94998, 24207],
                "./default/banco_coopnacional.svg": [475467, 94998, 75467],
                "./default/banco_davivienda.svg": [327917, 94998, 27917],
                "./default/banco_de_credito.svg": [257906, 94998, 57906],
                "./default/banco_de_oro.svg": [715799, 94998, 15799],
                "./default/banco_del_barrio.svg": [350853, 94998, 50853],
                "./default/banco_gt_continental.svg": [145953, 94998, 45953],
                "./default/banco_industrial_bt.svg": [885028, 94998, 85028],
                "./default/banco_internacional.svg": [257976, 94998, 57976],
                "./default/banco_national_bt.svg": [545137, 94998, 45137],
                "./default/banco_national_cash.svg": [568682, 94998, 68682],
                "./default/banco_pacifico.svg": [750635, 94998, 50635],
                "./default/banco_pichincha.svg": [154679, 94998, 54679],
                "./default/banco_popular.svg": [367049, 94998, 67049],
                "./default/banco_promerica.svg": [779367, 94998, 79367],
                "./default/banco_provincia_argentina.svg": [496299, 94998, 96299],
                "./default/banco_ripley.svg": [701583, 94998, 1583],
                "./default/banco_santander_colombia.svg": [873093, 94998, 73093],
                "./default/bancolombia.svg": [67581, 94998, 67581],
                "./default/bancomer.svg": [834060, 94998, 34060],
                "./default/bancoomeva.svg": [658074, 94998, 58074],
                "./default/banesco.svg": [238323, 94998, 38323],
                "./default/banfanb.svg": [855747, 94998, 55747],
                "./default/bangkok_bank.svg": [797099, 94998, 97099],
                "./default/bank-of-baroda.svg": [388648, 94998, 88648],
                "./default/bank-of-india.svg": [150424, 94998, 50424],
                "./default/bank-of-maharashtra.svg": [901961, 94998, 1961],
                "./default/bank-transfer.svg": [62305, 94998, 62305],
                "./default/bank_account_flutterwave.svg": [530696, 94998, 30696],
                "./default/bank_islam_malaysia.svg": [831758, 94998, 31758],
                "./default/bank_of_africa.svg": [388013, 94998, 88013],
                "./default/bank_of_georgia.svg": [49468, 94998, 49468],
                "./default/bank_rakyat_malaysia.svg": [527994, 94998, 27994],
                "./default/bank_simpanan_nasional.svg": [359402, 94998, 59402],
                "./default/bank_syariah_indonesia.svg": [574012, 94998, 74012],
                "./default/bank_tranfsfer_mad.svg": [794840, 94998, 94840],
                "./default/bank_transfer.svg": [753188, 94998, 53188],
                "./default/bank_transfer_ars.svg": [919293, 94998, 19293],
                "./default/bank_transfer_blue.svg": [265642, 94998, 65642],
                "./default/bank_transfer_flutterwave.svg": [761301, 94998, 61301],
                "./default/bank_transfer_main.svg": [388700, 94998, 88700],
                "./default/bank_transfer_no_words.svg": [143837, 94998, 43837],
                "./default/bank_transfer_peru.svg": [674008, 94998, 74008],
                "./default/bankalfalah.svg": [703539, 94998, 3539],
                "./default/banki_wallet.svg": [120204, 94998, 20204],
                "./default/banko_guayaquil.svg": [993788, 94998, 93788],
                "./default/banks-of-the-philippines.svg": [894412, 94998, 94412],
                "./default/banorte.svg": [201074, 94998, 1074],
                "./default/banplus.svg": [765495, 94998, 65495],
                "./default/banque_populaire.svg": [459147, 94998, 59147],
                "./default/baridimob.svg": [889398, 94998, 89398],
                "./default/baz_super_app.svg": [160390, 94998, 60390],
                "./default/bbva-colombia.svg": [743612, 94998, 43612],
                "./default/bbva.svg": [320937, 94998, 20937],
                "./default/bca_bank.svg": [289960, 94998, 89960],
                "./default/bcp.svg": [90473, 94998, 90473],
                "./default/bdl_nation_argentina.svg": [181410, 94998, 81410],
                "./default/bdt_trabajadores.svg": [126632, 94998, 26632],
                "./default/beeline.svg": [458728, 94998, 58728],
                "./default/bemovil.svg": [872815, 94998, 72815],
                "./default/benefit_pay.svg": [2368, 94998, 2368],
                "./default/beshoy_al_wazer.svg": [720374, 94998, 20374],
                "./default/bharatpe.svg": [468361, 94998, 68361],
                "./default/bhim.svg": [260537, 94998, 60537],
                "./default/bicentenario.svg": [980956, 94998, 80956],
                "./default/bidv_bank.svg": [497995, 94998, 97995],
                "./default/bigpay.svg": [731889, 94998, 31889],
                "./default/binance.svg": [203358, 94998, 3358],
                "./default/biopago.svg": [120227, 94998, 20227],
                "./default/bitcoin_cash.svg": [24439, 94998, 24439],
                "./default/bkash.svg": [43194, 94998, 43194],
                "./default/blik.svg": [740137, 94998, 40137],
                "./default/blom_wallet.svg": [896189, 94998, 96189],
                "./default/bm_wallet.svg": [225255, 94998, 25255],
                "./default/bnb.svg": [608931, 94998, 8931],
                "./default/bnb_bep20.svg": [142465, 94998, 42465],
                "./default/bnb_dex.svg": [294684, 94998, 94684],
                "./default/bni_bank.svg": [289474, 94998, 89474],
                "./default/bodega_aurrera.svg": [780161, 94998, 80161],
                "./default/bogota.svg": [677455, 94998, 77455],
                "./default/boleto.svg": [729318, 94998, 29318],
                "./default/boleto_v2.svg": [359796, 94998, 59796],
                "./default/bolivia_bank_transfer.svg": [975312, 94998, 38830],
                "./default/boost.svg": [38187, 94998, 38187],
                "./default/brazil-online-banking.svg": [359493, 94998, 59493],
                "./default/brubank.svg": [410595, 94998, 10595],
                "./default/btb_bank.svg": [238165, 94998, 38165],
                "./default/btc.svg": [632073, 94998, 32073],
                "./default/btvoucher.svg": [313352, 94998, 13352],
                "./default/busd_bep20.svg": [400316, 94998, 316],
                "./default/busd_erc20.svg": [167229, 94998, 67229],
                "./default/bybit_pay.svg": [894113, 94998, 94113],
                "./default/c_voucher.svg": [236986, 94998, 36986],
                "./default/caja-social.svg": [523883, 94998, 23883],
                "./default/caja_arequipa.svg": [590300, 94998, 90300],
                "./default/caja_desarrollo.svg": [453535, 94998, 53535],
                "./default/caja_huancayo.svg": [20762, 94998, 20762],
                "./default/caja_paita.svg": [797162, 94998, 97162],
                "./default/caja_tacna.svg": [411744, 94998, 11744],
                "./default/caja_trujillo.svg": [308997, 94998, 8997],
                "./default/calimax.svg": [800723, 94998, 723],
                "./default/cambodian_banks.svg": [357272, 94998, 57272],
                "./default/canara-bank.svg": [404329, 94998, 4329],
                "./default/capitec_pay_me.svg": [926707, 94998, 26707],
                "./default/capitron_bank.svg": [942886, 94998, 42886],
                "./default/card-p2p-tjs.svg": [96835, 94998, 96835],
                "./default/card-p2p_m10.svg": [794429, 94998, 94429],
                "./default/card.svg": [488196, 94998, 88196],
                "./default/card2card.svg": [19670, 94998, 19670],
                "./default/card_flutterwave.svg": [891672, 94998, 91672],
                "./default/card_p2p.svg": [632428, 94998, 32428],
                "./default/card_paystack.svg": [190243, 94998, 90243],
                "./default/card_sberpay.svg": [536812, 94998, 36812],
                "./default/card_sberpay_one_click.svg": [43774, 94998, 43774],
                "./default/card_transfer.svg": [544276, 94998, 44276],
                "./default/card_ua.svg": [247983, 94998, 47983],
                "./default/card_unionpay.svg": [384391, 94998, 84391],
                "./default/cardano.svg": [415714, 94998, 15714],
                "./default/cards_peru.svg": [822931, 94998, 22931],
                "./default/cargavirtual.svg": [439272, 94998, 39272],
                "./default/caribe.svg": [296402, 94998, 96402],
                "./default/carnet.svg": [480472, 94998, 80472],
                "./default/caroni.svg": [299023, 94998, 99023],
                "./default/carulla.svg": [602279, 94998, 2279],
                "./default/cash-guatemala-grouped.svg": [966095, 94998, 66095],
                "./default/cash-mexico-online.svg": [53210, 94998, 53210],
                "./default/cash-peruvian-astropay.svg": [674636, 94998, 74636],
                "./default/cash.svg": [10466, 94998, 10466],
                "./default/cash_agente.svg": [166632, 94998, 66632],
                "./default/cash_astropay_chile.svg": [197837, 94998, 97837],
                "./default/cash_astropay_colombia.svg": [718345, 94998, 18345],
                "./default/cash_caja_cusco.svg": [623449, 94998, 23449],
                "./default/cash_caja_ica.svg": [793689, 94998, 93689],
                "./default/cash_caja_piura.svg": [106578, 94998, 6578],
                "./default/cash_chile_grouped.svg": [510413, 94998, 10413],
                "./default/cash_methods.svg": [454546, 94998, 54546],
                "./default/cash_peru.svg": [142868, 94998, 42868],
                "./default/cash_speed.svg": [391024, 94998, 91024],
                "./default/cashati.svg": [948275, 94998, 48275],
                "./default/cashmaal.svg": [545692, 94998, 45692],
                "./default/cashplus.svg": [581989, 94998, 81989],
                "./default/cashtocode.svg": [251343, 94998, 51343],
                "./default/cbe_birr.svg": [364418, 94998, 64418],
                "./default/cellpay.svg": [12706, 94998, 12706],
                "./default/celtiis.svg": [973729, 94998, 73729],
                "./default/central-bank-of-india.svg": [159235, 94998, 59235],
                "./default/cepbank.svg": [918548, 94998, 18548],
                "./default/cfa.svg": [968821, 94998, 68821],
                "./default/chaabi_cash.svg": [719977, 94998, 19977],
                "./default/chek.svg": [166769, 94998, 66769],
                "./default/china-union-pay.svg": [533632, 94998, 33632],
                "./default/china_thailand_bank.svg": [251520, 94998, 51520],
                "./default/cib_smart_wallet.svg": [208850, 94998, 8850],
                "./default/cih.svg": [223788, 94998, 23788],
                "./default/cimb.svg": [564272, 94998, 64272],
                "./default/cimb_bank.svg": [1460, 94998, 1460],
                "./default/cimb_niaga_bank.svg": [340129, 94998, 40129],
                "./default/circulo_k.svg": [460957, 94998, 60957],
                "./default/citi_bank.svg": [124858, 94998, 24858],
                "./default/city-union-bank.svg": [859166, 94998, 59166],
                "./default/city_club.svg": [765448, 94998, 65448],
                "./default/clapay.svg": [746112, 94998, 46112],
                "./default/cleo.svg": [544242, 94998, 44242],
                "./default/click.svg": [896703, 94998, 96703],
                "./default/cmt-cuzdan.svg": [129724, 94998, 29724],
                "./default/codi_mexico.svg": [927744, 94998, 27744],
                "./default/coins.svg": [48002, 94998, 48002],
                "./default/comercial_mexicana.svg": [924287, 94998, 24287],
                "./default/commercial_bank.svg": [815337, 94998, 15337],
                "./default/community-bank-transfer.svg": [209488, 94998, 9488],
                "./default/coofiner.svg": [514285, 94998, 14285],
                "./default/cooperativo-coopcentral.svg": [175287, 94998, 75287],
                "./default/cosmos-bank.svg": [55113, 94998, 55113],
                "./default/credit_agricole.svg": [183729, 94998, 83729],
                "./default/cv_rpdt.svg": [276119, 94998, 76119],
                "./default/d17.svg": [989524, 94998, 89524],
                "./default/dale.svg": [197489, 94998, 97489],
                "./default/dana.svg": [663506, 94998, 63506],
                "./default/dana_grouped.svg": [244265, 94998, 44265],
                "./default/dana_qr.svg": [872808, 94998, 72808],
                "./default/danamon_bank.svg": [213444, 94998, 13444],
                "./default/dash.svg": [739037, 94998, 39037],
                "./default/daviplata.svg": [101098, 94998, 1098],
                "./default/dc_next.svg": [489037, 94998, 89037],
                "./default/dcb_bank.svg": [900466, 94998, 466],
                "./default/debin.svg": [20431, 94998, 20431],
                "./default/delsur.svg": [943867, 94998, 43867],
                "./default/demir_bank.svg": [489496, 94998, 89496],
                "./default/desarrollo.svg": [281286, 94998, 81286],
                "./default/deuna.svg": [825209, 94998, 25209],
                "./default/deutsche-bank.svg": [181890, 94998, 81890],
                "./default/development-credit-bank.svg": [834661, 94998, 34661],
                "./default/dhanlaxmi-bank.svg": [894804, 94998, 94804],
                "./default/diners_club.svg": [951442, 94998, 51442],
                "./default/discover.svg": [708519, 94998, 8519],
                "./default/doge.svg": [342305, 94998, 42305],
                "./default/doku.svg": [362791, 94998, 62791],
                "./default/donga_bank.svg": [564347, 94998, 64347],
                "./default/duitnow.svg": [820886, 94998, 20886],
                "./default/dushanbe_bank.svg": [531337, 94998, 31337],
                "./default/e-wallet-cashu.svg": [234079, 94998, 34079],
                "./default/e_pocket.svg": [373418, 94998, 73418],
                "./default/easy_cash.svg": [686498, 94998, 86498],
                "./default/easy_pay_bd_tg.svg": [73091, 94998, 73091],
                "./default/easy_pay_bd_wa.svg": [327389, 94998, 27389],
                "./default/easypaisa.svg": [108960, 94998, 8960],
                "./default/ebirr.svg": [884840, 94998, 84840],
                "./default/eco-voucher.svg": [47810, 94998, 47810],
                "./default/ecopayz-in-out.svg": [427237, 94998, 27237],
                "./default/ecuador_cash_grouped.svg": [896750, 94998, 96750],
                "./default/edeq.svg": [143889, 94998, 43889],
                "./default/edpyme_alternativa.svg": [442307, 94998, 42307],
                "./default/efecty.svg": [817222, 94998, 17222],
                "./default/efecty_cash_astropay.svg": [670924, 94998, 70924],
                "./default/ekono_stores.svg": [91010, 94998, 91010],
                "./default/el_asturiano.svg": [726594, 94998, 26594],
                "./default/el_cart.svg": [146285, 94998, 46285],
                "./default/el_machetazo.svg": [878392, 94998, 78392],
                "./default/elo.svg": [901739, 94998, 1739],
                "./default/emanat.svg": [470286, 94998, 70286],
                "./default/emola.svg": [479789, 94998, 79789],
                "./default/emoney.svg": [533633, 94998, 33633],
                "./default/emprededora.svg": [449106, 94998, 49106],
                "./default/enat_bank.svg": [869817, 94998, 69817],
                "./default/enpara.svg": [824885, 94998, 24885],
                "./default/eos.svg": [582508, 94998, 82508],
                "./default/epay_bg.svg": [820022, 94998, 83283],
                "./default/eps.svg": [818099, 94998, 18099],
                "./default/equitel.svg": [227094, 94998, 27094],
                "./default/esewa_direct.svg": [318309, 94998, 18309],
                "./default/eshata_bank.svg": [783647, 94998, 83647],
                "./default/eth_arb.svg": [799176, 94998, 99176],
                "./default/eth_base.svg": [195555, 94998, 95555],
                "./default/ethereum.svg": [704832, 94998, 4832],
                "./default/etisalat.svg": [902706, 94998, 2706],
                "./default/etisalat_cash.svg": [673682, 94998, 73682],
                "./default/exim_bank.svg": [976221, 94998, 76221],
                "./default/exito.svg": [126072, 94998, 26072],
                "./default/express-havale.svg": [651931, 94998, 51931],
                "./default/expresso.svg": [136317, 94998, 36317],
                "./default/exterior.svg": [12980, 94998, 12980],
                "./default/eziopay-crypto.svg": [239376, 94998, 39376],
                "./default/facilito.svg": [665140, 94998, 65140],
                "./default/faisal_cash.svg": [869320, 94998, 69320],
                "./default/farmacia_bomba.svg": [110442, 94998, 10442],
                "./default/farmacia_fischel.svg": [333232, 94998, 33232],
                "./default/farmacias911.svg": [355117, 94998, 55117],
                "./default/farmacias_benavides.svg": [183501, 94998, 83501],
                "./default/farmacias_del_ahorro.svg": [914782, 94998, 14782],
                "./default/farmacias_economicas.svg": [402683, 94998, 2683],
                "./default/farmacias_la_mas_barata.svg": [693523, 94998, 93523],
                "./default/farmacias_medicity.svg": [414486, 94998, 14486],
                "./default/farmacias_roma.svg": [799946, 94998, 99946],
                "./default/farmacias_santa_maria.svg": [201116, 94998, 1116],
                "./default/fast_pay_bd_tg.svg": [700976, 94998, 976],
                "./default/fast_pay_bd_wa.svg": [154179, 94998, 54179],
                "./default/fast_payment_np_tg.svg": [918781, 94998, 18781],
                "./default/fast_payment_np_wa.svg": [613996, 94998, 13996],
                "./default/fawry.svg": [279003, 94998, 1869],
                "./default/federal-bank.svg": [306767, 94998, 6767],
                "./default/ficohsa.svg": [586302, 94998, 86302],
                "./default/fidelity-bank.svg": [159934, 94998, 59934],
                "./default/financiera_qapaq.svg": [755411, 94998, 55411],
                "./default/first-bank-nigeria.svg": [660605, 94998, 60605],
                "./default/first-bank-of-nigeria.svg": [158436, 94998, 58436],
                "./default/fixturka.svg": [504861, 94998, 16174],
                "./default/fk-wallet.svg": [800364, 94998, 364],
                "./default/flouci.svg": [26374, 94998, 26374],
                "./default/floussy.svg": [766911, 94998, 66911],
                "./default/fnb.svg": [729147, 94998, 29147],
                "./default/fondo_comun.svg": [843832, 94998, 43832],
                "./default/fpay.svg": [720766, 94998, 20766],
                "./default/free_money.svg": [404112, 94998, 4112],
                "./default/freecharge.svg": [125138, 94998, 25138],
                "./default/fundacion_genesis.svg": [960821, 94998, 60821],
                "./default/gana.svg": [179003, 94998, 79003],
                "./default/garanti_bbva.svg": [245005, 94998, 45005],
                "./default/garpa.svg": [622409, 94998, 22409],
                "./default/garpa_h2h.svg": [72567, 94998, 72567],
                "./default/gcash_direct.svg": [535191, 94998, 35191],
                "./default/gebe.svg": [393790, 94998, 93790],
                "./default/ghanem_pay.svg": [381054, 94998, 81054],
                "./default/giropay.svg": [995001, 94998, 95001],
                "./default/globepay.svg": [916074, 94998, 16074],
                "./default/googlepay_mastercard.svg": [625353, 94998, 25353],
                "./default/gopay.svg": [349097, 94998, 49097],
                "./default/gotyme.svg": [533442, 94998, 33442],
                "./default/government_housing_bank.svg": [917276, 94998, 17276],
                "./default/gpay-eazepe.svg": [965981, 94998, 65981],
                "./default/gpay.svg": [563267, 94998, 63267],
                "./default/grabpay.svg": [577709, 94998, 25661],
                "./default/gsb_bank.svg": [102092, 94998, 2092],
                "./default/gtbank-plc.svg": [959989, 94998, 59989],
                "./default/guaranty-trust-bank.svg": [37405, 94998, 37405],
                "./default/halan_cash.svg": [265084, 94998, 65084],
                "./default/halopesa_tz.svg": [558496, 94998, 58496],
                "./default/halyk_bank.svg": [972487, 94998, 72487],
                "./default/hatton_national_bank.svg": [467006, 94998, 67006],
                "./default/hay_hay.svg": [47155, 94998, 47155],
                "./default/hdfc-bank.svg": [439557, 94998, 39557],
                "./default/hipercard.svg": [806557, 94998, 6557],
                "./default/hites.svg": [805195, 94998, 5195],
                "./default/hizliqr.svg": [191985, 94998, 91985],
                "./default/homebank.svg": [993229, 94998, 93229],
                "./default/hongleong_bank.svg": [681037, 94998, 81037],
                "./default/hostapay_mongolia.svg": [107224, 94998, 7224],
                "./default/hot_voucher.svg": [980321, 94998, 80321],
                "./default/hsbc_bank.svg": [538271, 94998, 38271],
                "./default/humo_card.svg": [776675, 94998, 76675],
                "./default/icbc.svg": [738739, 94998, 38739],
                "./default/icici-bank.svg": [906259, 94998, 6259],
                "./default/ideal.svg": [775068, 94998, 75068],
                "./default/idfc-bank.svg": [315612, 94998, 15612],
                "./default/ila_bank.svg": [590075, 94998, 90075],
                "./default/imepay.svg": [737315, 94998, 37315],
                "./default/imps.svg": [123886, 94998, 23886],
                "./default/indian-bank.svg": [965714, 94998, 40150],
                "./default/indian-overseas-bank.svg": [763935, 94998, 63935],
                "./default/indonesia_uni.svg": [941812, 94998, 41812],
                "./default/indonesia_va.svg": [201561, 94998, 1561],
                "./default/indusind-bank.svg": [547721, 94998, 47721],
                "./default/industrial-development-bank-of-india.svg": [870315, 94998, 70315],
                "./default/innopay.svg": [157e3, 94998, 57e3],
                "./default/instant-qr.svg": [203055, 94998, 3055],
                "./default/instapay.svg": [456672, 94998, 56672],
                "./default/interac-ach.svg": [680623, 94998, 80623],
                "./default/interac-eto.svg": [953009, 94998, 53009],
                "./default/interac.svg": [904128, 94998, 4128],
                "./default/interbanco_bt.svg": [590397, 94998, 90397],
                "./default/interbanco_cash.svg": [304289, 94998, 4289],
                "./default/interbank.svg": [121460, 94998, 21460],
                "./default/interbanking.svg": [147446, 94998, 47446],
                "./default/intertelecom.svg": [811980, 94998, 11980],
                "./default/inwi_money.svg": [299445, 94998, 99445],
                "./default/ipay.svg": [381651, 94998, 81651],
                "./default/iris.svg": [229749, 94998, 29749],
                "./default/islamic_bank.svg": [22723, 94998, 22723],
                "./default/itau.svg": [65369, 94998, 65369],
                "./default/izi_bank.svg": [963818, 94998, 63818],
                "./default/jammu-and-kashmir-bank.svg": [619452, 94998, 19452],
                "./default/japan_online_banking.svg": [205320, 94998, 5320],
                "./default/jazzcash.svg": [743536, 94998, 43536],
                "./default/jazzcash_v2.svg": [618058, 94998, 18058],
                "./default/jcb.svg": [336447, 94998, 36447],
                "./default/jetonWalletV3.svg": [128030, 94998, 28030],
                "./default/jibi.svg": [845115, 94998, 45115],
                "./default/kacha.svg": [10278, 94998, 10278],
                "./default/kakaopay.svg": [839464, 94998, 39464],
                "./default/kakaopay_fast_transfer.svg": [164071, 94998, 64071],
                "./default/kapital_bank.svg": [776697, 94998, 76697],
                "./default/karnatka-bank.svg": [462792, 94998, 62792],
                "./default/karurvysya-bank.svg": [615310, 94998, 15310],
                "./default/kashio.svg": [494210, 94998, 94210],
                "./default/kasikornbank.svg": [993282, 94998, 93282],
                "./default/kasnet.svg": [552961, 94998, 52961],
                "./default/kassa24.svg": [890359, 94998, 89676],
                "./default/kassa_tj.svg": [566391, 94998, 66391],
                "./default/kassatj_tg.svg": [195324, 94998, 95324],
                "./default/katarun_3altayer.svg": [155635, 94998, 55635],
                "./default/kbzpay.svg": [209350, 94998, 9350],
                "./default/kcell.svg": [964971, 94998, 64971],
                "./default/keremet_bank.svg": [226137, 94998, 26137],
                "./default/khalti.svg": [631299, 94998, 31299],
                "./default/khan_bank.svg": [730973, 94998, 30973],
                "./default/khipu.svg": [31883, 94998, 31883],
                "./default/khqr.svg": [550380, 94998, 50380],
                "./default/kiatnakin_phatra_bank.svg": [371789, 94998, 71789],
                "./default/kicb_logo.svg": [405296, 94998, 5296],
                "./default/kiosko.svg": [455183, 94998, 55183],
                "./default/klap_bank_transfer.svg": [122437, 94998, 22437],
                "./default/klap_cash.svg": [637442, 94998, 37442],
                "./default/klarna.svg": [219335, 94998, 19335],
                "./default/kompanion_bank.svg": [941972, 94998, 41972],
                "./default/korti_milli.svg": [881888, 94998, 81888],
                "./default/kotak-bank.svg": [478445, 94998, 78445],
                "./default/krung_thai_bank.svg": [888861, 94998, 88861],
                "./default/krungsri_bank.svg": [961807, 94998, 61807],
                "./default/kuchinga.svg": [673e3, 94998, 73e3],
                "./default/kuda-micro-finance-bank.svg": [269083, 94998, 69083],
                "./default/kyivstar.svg": [470768, 94998, 70768],
                "./default/lakshmi-vilas-bank.svg": [803515, 94998, 3515],
                "./default/landbank.svg": [29336, 94998, 29336],
                "./default/lemoncash.svg": [53435, 94998, 53435],
                "./default/leobank.svg": [110586, 94998, 10586],
                "./default/lh_bank.svg": [463683, 94998, 63683],
                "./default/lider.svg": [867431, 94998, 67431],
                "./default/lider_express.svg": [155108, 94998, 55108],
                "./default/lifecell.svg": [52585, 94998, 52585],
                "./default/ligdicash.svg": [680035, 94998, 80035],
                "./default/linepay.svg": [734532, 94998, 34532],
                "./default/link.svg": [582992, 94998, 82992],
                "./default/linkaja.svg": [922339, 94998, 22339],
                "./default/litecoin.svg": [325682, 94998, 25682],
                "./default/loterica.svg": [3045, 94998, 3045],
                "./default/lottery.svg": [240714, 94998, 40714],
                "./default/luckystar.svg": [121907, 94998, 21907],
                "./default/lulo.svg": [530648, 94998, 30648],
                "./default/m10.svg": [494710, 94998, 94710],
                "./default/m10_QR.svg": [370763, 94998, 70763],
                "./default/m10_p2p.svg": [457749, 94998, 57749],
                "./default/m10_qr.svg": [260140, 94998, 60140],
                "./default/m_bank.svg": [71368, 94998, 71368],
                "./default/ma7fazty.svg": [561591, 94998, 61591],
                "./default/mach.svg": [993233, 94998, 93233],
                "./default/macro_argentina.svg": [574452, 94998, 74452],
                "./default/magna.svg": [624020, 94998, 24020],
                "./default/magna_rewards.svg": [698460, 94998, 98460],
                "./default/malitel.svg": [385111, 94998, 85111],
                "./default/mandiri_bank.svg": [974579, 94998, 74579],
                "./default/maritime_bank.svg": [539780, 94998, 39780],
                "./default/mastercard.svg": [660983, 94998, 60983],
                "./default/mastercard_astropay.svg": [397101, 94998, 97101],
                "./default/matchpay.svg": [265364, 94998, 65364],
                "./default/maybank.svg": [836091, 94998, 36091],
                "./default/mb_bank.svg": [741666, 94998, 41666],
                "./default/mbway.svg": [60664, 94998, 60664],
                "./default/megafon.svg": [957331, 94998, 57331],
                "./default/mercado_pago.svg": [193004, 94998, 93004],
                "./default/mercado_pago_astropay.svg": [317636, 94998, 17636],
                "./default/mercadopago.svg": [764367, 94998, 64367],
                "./default/mercadopago_v2.svg": [578701, 94998, 78701],
                "./default/mercantil.svg": [89939, 94998, 89939],
                "./default/metrobank.svg": [529224, 94998, 29224],
                "./default/mexico-online-banking.svg": [517318, 94998, 17318],
                "./default/mft.svg": [20855, 94998, 20855],
                "./default/mi_comisariato.svg": [955901, 94998, 55901],
                "./default/mi_negocio_efectivo.svg": [656671, 94998, 56671],
                "./default/mick_bet.svg": [855854, 94998, 55854],
                "./default/mickbet_bo_wa.svg": [477640, 94998, 77640],
                "./default/microfinanc.svg": [228358, 94998, 28358],
                "./default/microfinancero.svg": [718916, 94998, 18916],
                "./default/mir.svg": [546366, 94998, 46366],
                "./default/mizuho_bank.svg": [950387, 94998, 50387],
                "./default/mkesh.svg": [781825, 94998, 81825],
                "./default/mobicash.svg": [338397, 94998, 38397],
                "./default/mobifone_vnd_giftcard.svg": [838191, 94998, 38191],
                "./default/mobikwik.svg": [262132, 94998, 62132],
                "./default/mobile.svg": [449762, 94998, 49762],
                "./default/mobile_wallets_grouped.svg": [281137, 94998, 81137],
                "./default/momo_phone_payok.svg": [376854, 94998, 76854],
                "./default/momopay.svg": [317818, 94998, 17818],
                "./default/monero.svg": [721660, 94998, 21660],
                "./default/monetix.svg": [480749, 94998, 80749],
                "./default/money_go.svg": [463780, 94998, 63780],
                "./default/mono_bank.svg": [920274, 94998, 20274],
                "./default/moov-burkina.svg": [996747, 94998, 96747],
                "./default/moov_gabon.svg": [196085, 94998, 96085],
                "./default/moov_money.svg": [802777, 94998, 2777],
                "./default/morocco_bank_transfer_grouped.svg": [926768, 94998, 26768],
                "./default/movii.svg": [144021, 94998, 44021],
                "./default/mpay.svg": [989956, 94998, 89956],
                "./default/mpay_qr.svg": [448519, 94998, 48519],
                "./default/mpesa.svg": [380174, 94998, 80174],
                "./default/mpesa_mz.svg": [747811, 94998, 47811],
                "./default/mtc.svg": [186355, 94998, 86355],
                "./default/mtc_mobile.svg": [476250, 94998, 76250],
                "./default/mtcash.svg": [892241, 94998, 92241],
                "./default/mtn.svg": [844604, 94998, 44604],
                "./default/mtn_cm_astropay.svg": [348497, 94998, 48497],
                "./default/mtn_cm_cash.svg": [320635, 94998, 20635],
                "./default/mts.svg": [235031, 94998, 35031],
                "./default/muchbetter.svg": [794881, 94998, 94881],
                "./default/multibanco.svg": [978689, 94998, 78689],
                "./default/mvola.svg": [402825, 94998, 2825],
                "./default/mybank.svg": [466532, 94998, 66532],
                "./default/mybux_voucher.svg": [124790, 94998, 24790],
                "./default/mypay.svg": [367001, 94998, 67001],
                "./default/mypayz.svg": [814193, 94998, 14193],
                "./default/n26.svg": [600354, 94998, 354],
                "./default/nacional_credito.svg": [176140, 94998, 76140],
                "./default/nagad.svg": [24052, 94998, 24052],
                "./default/naverpay.svg": [9125, 94998, 9125],
                "./default/nayapay.svg": [8234, 94998, 8234],
                "./default/nbi.svg": [328575, 94998, 28575],
                "./default/nbk_wallet.svg": [884068, 94998, 84068],
                "./default/nem.svg": [932650, 94998, 32650],
                "./default/neo.svg": [735022, 94998, 35022],
                "./default/neosurf.svg": [703484, 94998, 16850],
                "./default/nequi.svg": [31485, 94998, 31485],
                "./default/neteller.svg": [125269, 94998, 25269],
                "./default/neteller_ftd.svg": [907521, 94998, 7521],
                "./default/new_zealand_banks.svg": [361723, 94998, 61723],
                "./default/nganluong.svg": [773122, 94998, 73122],
                "./default/nigerian_bank_transfer_paystack.svg": [474640, 94998, 74640],
                "./default/nigerian_banks_paystack.svg": [112850, 94998, 12850],
                "./default/nigerian_virtual_accounts.svg": [947113, 94998, 47113],
                "./default/niubiz_agents.svg": [377709, 94998, 77709],
                "./default/o_bank.svg": [83019, 94998, 83019],
                "./default/o_money.svg": [472873, 94998, 72873],
                "./default/ocbc_bank.svg": [608100, 94998, 8100],
                "./default/occidente.svg": [172139, 94998, 72139],
                "./default/ola_money.svg": [998474, 94998, 98474],
                "./default/omnipay.svg": [480515, 94998, 80515],
                "./default/omniswitch.svg": [55767, 94998, 55767],
                "./default/one-pay-transbank.svg": [382025, 94998, 82025],
                "./default/one_click_kgs.svg": [980718, 94998, 80718],
                "./default/onebuyio.svg": [84857, 94998, 84857],
                "./default/onebuyio_new.svg": [790154, 94998, 90154],
                "./default/online-australia-banks.svg": [620022, 94998, 20022],
                "./default/online-austria-banks.svg": [30947, 94998, 3484],
                "./default/online-belgium-banks.svg": [350499, 94998, 50499],
                "./default/online-cameroon-banks.svg": [503722, 94998, 3722],
                "./default/online-chile-banks.svg": [531147, 94998, 31147],
                "./default/online-colombian-wallets.svg": [543089, 94998, 43089],
                "./default/online-costa-rica-banking.svg": [579068, 94998, 79068],
                "./default/online-czech-banks.svg": [810157, 94998, 10157],
                "./default/online-denmark-banks.svg": [565714, 94998, 65714],
                "./default/online-eastern-europe-banks.svg": [210208, 94998, 10208],
                "./default/online-ecuador-banks.svg": [866138, 94998, 66138],
                "./default/online-estonia-banks.svg": [55522, 94998, 55522],
                "./default/online-finland-banks.svg": [228158, 94998, 28158],
                "./default/online-france-banks.svg": [447120, 94998, 47120],
                "./default/online-germany-banks.svg": [37781, 94998, 37781],
                "./default/online-ghana-banks.svg": [285252, 94998, 85252],
                "./default/online-india-banks.svg": [771841, 94998, 71841],
                "./default/online-indonesian-banks-grouped.svg": [267475, 94998, 67475],
                "./default/online-indonesian-banks.svg": [358821, 94998, 58821],
                "./default/online-italian-banks.svg": [361810, 94998, 61810],
                "./default/online-kenya-banks.svg": [798830, 94998, 98830],
                "./default/online-latvia-banks.svg": [94942, 94998, 94942],
                "./default/online-lithuania-banks.svg": [918520, 94998, 18520],
                "./default/online-malaysian-banks-grouped.svg": [792853, 94998, 92853],
                "./default/online-malaysian-banks.svg": [396060, 94998, 96060],
                "./default/online-malaysian-fpx.svg": [839209, 94998, 39209],
                "./default/online-netherlands-banks.svg": [527426, 94998, 27426],
                "./default/online-nigerian-banks.svg": [885592, 94998, 85592],
                "./default/online-norway-banks.svg": [333493, 94998, 33493],
                "./default/online-pakistan-banks.svg": [766719, 94998, 66719],
                "./default/online-peruvian-banks.svg": [314833, 94998, 14833],
                "./default/online-poland-banks.svg": [182408, 94998, 82408],
                "./default/online-portugal-banks.svg": [940267, 94998, 40267],
                "./default/online-senegal-banks.svg": [547767, 94998, 47767],
                "./default/online-slovakia-banks.svg": [711210, 94998, 11210],
                "./default/online-south-africa-banks.svg": [473694, 94998, 73694],
                "./default/online-southern-europe-banks.svg": [411873, 94998, 11873],
                "./default/online-southkorea-banks.svg": [988185, 94998, 88185],
                "./default/online-spain-banks.svg": [364712, 94998, 64712],
                "./default/online-sweden-banks.svg": [374923, 94998, 74923],
                "./default/online-switzerland-banks.svg": [591086, 94998, 91086],
                "./default/online-thailand-banks-grouped.svg": [108203, 94998, 8203],
                "./default/online-thailand-banks-qr-grouped.svg": [85478, 94998, 85478],
                "./default/online-thailand-banks.svg": [995514, 94998, 95514],
                "./default/online-thailand-qr-banks.svg": [950037, 94998, 50037],
                "./default/online-uk-banks.svg": [713760, 94998, 13760],
                "./default/online-vietnam-banks-grouped.svg": [183521, 94998, 83521],
                "./default/online-vietnam-banks.svg": [390864, 94998, 90864],
                "./default/online_guatemala_banks.svg": [912517, 94998, 12517],
                "./default/online_pakistan_banks.svg": [282847, 94998, 82847],
                "./default/online_venezuela_banks.svg": [267265, 94998, 67265],
                "./default/opay_paystack.svg": [537664, 94998, 37664],
                "./default/open_banking.svg": [937765, 94998, 37765],
                "./default/open_finance.svg": [116718, 94998, 16718],
                "./default/optima_bank.svg": [80189, 94998, 80189],
                "./default/orange-burkina.svg": [731757, 94998, 31757],
                "./default/orange_cash.svg": [311880, 94998, 11880],
                "./default/orange_cm_astropay.svg": [594099, 94998, 94099],
                "./default/orange_cm_cash.svg": [916866, 94998, 16866],
                "./default/orange_money.svg": [813507, 94998, 13507],
                "./default/other_bank.svg": [358589, 94998, 58589],
                "./default/otp.svg": [135444, 94998, 35444],
                "./default/ouipay.svg": [447129, 94998, 47129],
                "./default/ovo.svg": [346248, 94998, 46248],
                "./default/oxxo.svg": [617367, 94998, 17367],
                "./default/oxxo_pay.svg": [252646, 94998, 52646],
                "./default/ozon_one_click.svg": [637269, 94998, 37269],
                "./default/ozow.svg": [994666, 94998, 94666],
                "./default/p2p-methods-tajikistan.svg": [622225, 94998, 22225],
                "./default/p2p.svg": [331836, 94998, 31836],
                "./default/p2p_humo_card.svg": [352083, 94998, 52083],
                "./default/p2p_market.svg": [463685, 94998, 63685],
                "./default/p2p_methods_kyrgyzstan.svg": [225729, 94998, 25729],
                "./default/p2p_methods_russia_banks.svg": [955981, 94998, 55981],
                "./default/p2p_methods_ukraine.svg": [153142, 94998, 53142],
                "./default/p2p_russia.svg": [891043, 94998, 91043],
                "./default/p2p_uzcard.svg": [381493, 94998, 81493],
                "./default/pago.svg": [334699, 94998, 34699],
                "./default/pago46_cash.svg": [894560, 94998, 94560],
                "./default/pago_agil.svg": [937497, 94998, 37497],
                "./default/pago_efectivo.svg": [744856, 94998, 44856],
                "./default/pago_efectivo_astropay.svg": [98857, 94998, 98857],
                "./default/pago_movil.svg": [132642, 94998, 32642],
                "./default/pago_movil_direct.svg": [120252, 94998, 20252],
                "./default/pagofacil.svg": [104028, 94998, 4028],
                "./default/pagstar.svg": [526234, 94998, 26234],
                "./default/pak_deposit_wa.svg": [562396, 94998, 62396],
                "./default/palmpay_paystack.svg": [318177, 94998, 18177],
                "./default/papara-wallet.svg": [67062, 94998, 67062],
                "./default/papel.svg": [312854, 94998, 12854],
                "./default/paratim.svg": [107665, 94998, 7665],
                "./default/parazula.svg": [524738, 94998, 24738],
                "./default/parolapara.svg": [372061, 94998, 72061],
                "./default/partner.svg": [749608, 94998, 49608],
                "./default/pay-wafe.svg": [232172, 94998, 32172],
                "./default/pay4fun.svg": [655485, 94998, 55485],
                "./default/pay_attitude.svg": [246988, 94998, 46988],
                "./default/pay_fas.svg": [665697, 94998, 65697],
                "./default/pay_go_kg.svg": [383266, 94998, 83266],
                "./default/pay_now.svg": [943670, 94998, 43670],
                "./default/pay_zapp.svg": [988842, 94998, 88842],
                "./default/payattitude_paystack.svg": [932469, 94998, 32469],
                "./default/paybol.svg": [611598, 94998, 11598],
                "./default/paycash.svg": [661257, 94998, 61257],
                "./default/paycell.svg": [539391, 94998, 39391],
                "./default/payco.svg": [104268, 94998, 4268],
                "./default/payco_south_korea.svg": [178390, 94998, 78390],
                "./default/paydoewallet.svg": [72108, 94998, 72108],
                "./default/payeer.svg": [43479, 94998, 43479],
                "./default/payid_aud.svg": [166238, 94998, 66238],
                "./default/payin_qr.svg": [159548, 94998, 59548],
                "./default/paymaya.svg": [184624, 94998, 84624],
                "./default/payme.svg": [349246, 94998, 49246],
                "./default/payme_h2h.svg": [1672, 94998, 1672],
                "./default/paynet.svg": [174977, 94998, 74977],
                "./default/paypal.svg": [581168, 94998, 81168],
                "./default/paypay.svg": [90991, 94998, 90991],
                "./default/payphone.svg": [676644, 94998, 76644],
                "./default/payplus.svg": [447844, 94998, 47844],
                "./default/paysafecard.svg": [56229, 94998, 56229],
                "./default/paysafecash.svg": [179328, 94998, 79328],
                "./default/payser.svg": [860163, 94998, 60163],
                "./default/paytgstar.svg": [98692, 94998, 98692],
                "./default/paytm-eazepe.svg": [975423, 94998, 75423],
                "./default/paytm-gate2way.svg": [355288, 94998, 55288],
                "./default/paytm.svg": [772373, 94998, 72373],
                "./default/paytm_upi.svg": [678584, 94998, 78584],
                "./default/payvalida.svg": [224206, 94998, 24206],
                "./default/peple.svg": [902483, 94998, 2483],
                "./default/perfect-money.svg": [438410, 94998, 38410],
                "./default/permata_bank.svg": [312685, 94998, 12685],
                "./default/philippines_banks.svg": [484107, 94998, 84107],
                "./default/philippines_qr.svg": [329533, 94998, 29533],
                "./default/philippines_va.svg": [58895, 94998, 58895],
                "./default/phone-pe-eazepe.svg": [261180, 94998, 61180],
                "./default/phone-pe.svg": [494788, 94998, 94788],
                "./default/phone_cash.svg": [764101, 94998, 64101],
                "./default/phonepe-gate2way.svg": [51133, 94998, 51133],
                "./default/phonepe.svg": [481134, 94998, 81134],
                "./default/piastrix.svg": [760350, 94998, 60350],
                "./default/pichincha.svg": [725321, 94998, 25321],
                "./default/pichincha_mi_vecino.svg": [160463, 94998, 60463],
                "./default/picpay.svg": [665148, 94998, 65148],
                "./default/pipay.svg": [677576, 94998, 77576],
                "./default/pix.svg": [978023, 94998, 78023],
                "./default/pix_open_finance.svg": [430005, 94998, 30005],
                "./default/plaza.svg": [34090, 94998, 34090],
                "./default/plin.svg": [796005, 94998, 96005],
                "./default/pol.svg": [660918, 94998, 60918],
                "./default/poli.svg": [109988, 94998, 9988],
                "./default/popular.svg": [203738, 94998, 3738],
                "./default/popypara.svg": [801085, 94998, 1085],
                "./default/portmanat.svg": [178955, 94998, 78955],
                "./default/premium_voucher.svg": [717058, 94998, 17058],
                "./default/prex.svg": [523865, 94998, 23865],
                "./default/privat_bank.svg": [209656, 94998, 9656],
                "./default/promptpay.svg": [884096, 94998, 84096],
                "./default/provincial_sa.svg": [451859, 94998, 51859],
                "./default/provincianet.svg": [120929, 94998, 20929],
                "./default/przelewy24.svg": [596711, 94998, 96711],
                "./default/pse.svg": [135258, 94998, 35258],
                "./default/pse_astropay.svg": [384171, 94998, 84171],
                "./default/public_bank.svg": [434422, 94998, 34422],
                "./default/pumb_bank.svg": [815777, 94998, 15777],
                "./default/punjab-and-sind-bank.svg": [478092, 94998, 78092],
                "./default/punjab-national-bank.svg": [636980, 94998, 36980],
                "./default/punto_pago.svg": [133944, 94998, 33944],
                "./default/punto_xpress.svg": [182620, 94998, 82620],
                "./default/puntos_hey.svg": [214711, 94998, 14711],
                "./default/qahera_cash.svg": [167213, 94998, 67213],
                "./default/qiwi.svg": [943027, 94998, 43027],
                "./default/qnb_wallet.svg": [682885, 94998, 82885],
                "./default/qr_flutterwave.svg": [809846, 94998, 9846],
                "./default/qr_universal.svg": [357342, 94998, 57342],
                "./default/qr_universal_h2h.svg": [554814, 94998, 54814],
                "./default/qris.svg": [993296, 94998, 93296],
                "./default/rabita_bank.svg": [398011, 94998, 98011],
                "./default/raifaisen_bank.svg": [273368, 94998, 73368],
                "./default/rakyat_bank.svg": [435047, 94998, 35047],
                "./default/rapi_activo.svg": [645109, 94998, 45109],
                "./default/rapid_transfer.svg": [968464, 94998, 68464],
                "./default/rapipago.svg": [567539, 94998, 67539],
                "./default/rappipay.svg": [295682, 94998, 95682],
                "./default/rbk-bank-kz.svg": [417683, 94998, 17683],
                "./default/rcgcard_pc_groupes_category.svg": [437155, 94998, 37155],
                "./default/rechcompt.svg": [11215, 94998, 11215],
                "./default/red_activa.svg": [634429, 94998, 34429],
                "./default/red_compra.svg": [368869, 94998, 68869],
                "./default/red_compra_bank_payments.svg": [133161, 94998, 33161],
                "./default/red_digital.svg": [260213, 94998, 60213],
                "./default/redotpay.svg": [565284, 94998, 65284],
                "./default/reliance_jio.svg": [296813, 94998, 96813],
                "./default/revolut_pay.svg": [350771, 94998, 50771],
                "./default/rhb_bank.svg": [598079, 94998, 98079],
                "./default/rianxeira.svg": [948502, 94998, 48502],
                "./default/ripley.svg": [834201, 94998, 34201],
                "./default/ripple.svg": [824546, 94998, 24546],
                "./default/rocket.svg": [297017, 94998, 97017],
                "./default/ru_sber.svg": [499246, 94998, 99246],
                "./default/ru_tinkoff.svg": [666900, 94998, 66900],
                "./default/rupay.svg": [106322, 94998, 6322],
                "./default/saca.svg": [998439, 94998, 98439],
                "./default/sacom_bank.svg": [822862, 94998, 22862],
                "./default/safaricom.svg": [233752, 94998, 33752],
                "./default/safetypay.svg": [414846, 94998, 14846],
                "./default/sahabat_bank.svg": [77329, 94998, 77329],
                "./default/sakuku.svg": [465575, 94998, 65575],
                "./default/sams_club.svg": [431675, 94998, 31675],
                "./default/santander_cash.svg": [932640, 94998, 32640],
                "./default/sber.svg": [6323, 94998, 6323],
                "./default/sberpay.svg": [492752, 94998, 92752],
                "./default/sbp.svg": [2574, 94998, 2574],
                "./default/sbp_t_bank_sber.svg": [362934, 94998, 62934],
                "./default/scb_bank.svg": [809374, 94998, 9374],
                "./default/scb_e_wallet.svg": [77412, 94998, 77412],
                "./default/scotiabank.svg": [68165, 94998, 68165],
                "./default/secpay.svg": [684930, 94998, 84930],
                "./default/sencillito.svg": [229843, 94998, 29843],
                "./default/sense.svg": [852336, 94998, 52336],
                "./default/sepa.svg": [725376, 94998, 25376],
                "./default/serfinanza.svg": [716003, 94998, 16003],
                "./default/service_rapide.svg": [619219, 94998, 19219],
                "./default/servifacil_cash.svg": [40507, 94998, 40507],
                "./default/servipagos.svg": [441656, 94998, 41656],
                "./default/settlepay_wallet.svg": [169557, 94998, 69557],
                "./default/seven_eleven.svg": [658823, 94998, 58823],
                "./default/shamrao-vithal-cooperative-bank.svg": [175786, 94998, 75786],
                "./default/shopee_pay.svg": [495995, 94998, 95995],
                "./default/sinarmas_bank.svg": [424273, 94998, 24273],
                "./default/sinpe.svg": [784352, 94998, 84352],
                "./default/sinpe_movil.svg": [77529, 94998, 77529],
                "./default/skrill.svg": [506502, 94998, 6502],
                "./default/skrill_ftd.svg": [241550, 94998, 41550],
                "./default/skypay.svg": [74996, 94998, 74996],
                "./default/skypay_rub.svg": [546605, 94998, 46605],
                "./default/skypay_v2.svg": [200431, 94998, 431],
                "./default/smartpay.svg": [831983, 94998, 31983],
                "./default/smartpay_card.svg": [305263, 94998, 5263],
                "./default/smbc_bank.svg": [438910, 94998, 38910],
                "./default/snapscan.svg": [933661, 94998, 33661],
                "./default/societe_generale.svg": [347038, 94998, 47038],
                "./default/sofitasa.svg": [388575, 94998, 88575],
                "./default/sofort.svg": [362352, 94998, 62352],
                "./default/soriana.svg": [379440, 94998, 79440],
                "./default/south-indian-bank.svg": [373807, 94998, 73807],
                "./default/south-korea-bank-transfer.svg": [943511, 94998, 43511],
                "./default/south_korea_va.svg": [627037, 94998, 27037],
                "./default/spei.svg": [37974, 94998, 37974],
                "./default/stanbic-ibtc-bank.svg": [243745, 94998, 43745],
                "./default/standard-chartered-bank.svg": [846908, 94998, 46908],
                "./default/standard_chartered_bank_malaysia.svg": [661455, 94998, 61455],
                "./default/state-bank-of-india.svg": [231720, 94998, 31720],
                "./default/state_bank.svg": [831411, 94998, 31411],
                "./default/steam_coin.svg": [89265, 94998, 89265],
                "./default/steamcoin_mobile.svg": [176102, 94998, 76102],
                "./default/stellar.svg": [319165, 94998, 19165],
                "./default/sterling-bank.svg": [487500, 94998, 87500],
                "./default/sticpay.svg": [194322, 94998, 94322],
                "./default/sudameris.svg": [891125, 94998, 91125],
                "./default/super24.svg": [186722, 94998, 86722],
                "./default/super_farmacia.svg": [978480, 94998, 78480],
                "./default/super_norte.svg": [609877, 94998, 9877],
                "./default/super_xtra.svg": [728969, 94998, 28969],
                "./default/superama.svg": [112100, 94998, 12100],
                "./default/sured.svg": [912844, 94998, 12844],
                "./default/surtimax.svg": [670537, 94998, 70537],
                "./default/swiffy_eft.svg": [195743, 94998, 95743],
                "./default/sys_tienda.svg": [845555, 94998, 45555],
                "./default/t_bank.svg": [514059, 94998, 14059],
                "./default/tambo.svg": [776, 94998, 776],
                "./default/tamilnad-mercantile-bank.svg": [901134, 94998, 1134],
                "./default/tbc_bank.svg": [134493, 94998, 34493],
                "./default/tcr_bank.svg": [140485, 94998, 40485],
                "./default/techcom_bank.svg": [530353, 94998, 30353],
                "./default/ted.svg": [196714, 94998, 96714],
                "./default/tele2.svg": [185812, 94998, 85812],
                "./default/telebirr.svg": [576430, 94998, 76430],
                "./default/telecel.svg": [397783, 94998, 97783],
                "./default/telecomm.svg": [348184, 94998, 48184],
                "./default/telegram.svg": [852874, 94998, 52874],
                "./default/terminals.svg": [401322, 94998, 1322],
                "./default/tesoro.svg": [470736, 94998, 70736],
                "./default/tether.svg": [429001, 94998, 29001],
                "./default/tether_arb.svg": [962285, 94998, 62285],
                "./default/tether_bep20.svg": [283115, 94998, 83115],
                "./default/tether_erc20.svg": [166512, 94998, 66512],
                "./default/tether_pol.svg": [823274, 94998, 23274],
                "./default/tether_ton.svg": [953054, 94998, 53054],
                "./default/tether_trc20.svg": [748306, 94998, 48306],
                "./default/tg_wallet.svg": [433264, 94998, 33264],
                "./default/thai_qr.svg": [86596, 94998, 86596],
                "./default/tia.svg": [527379, 94998, 27379],
                "./default/tiendas_extra.svg": [611629, 94998, 11629],
                "./default/tiger_pay.svg": [957997, 94998, 57997],
                "./default/tigo.svg": [228418, 94998, 28418],
                "./default/tigo_tz.svg": [253366, 94998, 53366],
                "./default/tisco_bank.svg": [739587, 94998, 39587],
                "./default/tmb_bank.svg": [701429, 94998, 1429],
                "./default/tmoney_tg.svg": [416240, 94998, 16240],
                "./default/tnm_mobile_money.svg": [73281, 94998, 73281],
                "./default/todito.svg": [657645, 94998, 57645],
                "./default/togocom.svg": [702368, 94998, 45079],
                "./default/ton.svg": [700031, 94998, 31],
                "./default/toss_fast_transfer.svg": [604425, 94998, 4425],
                "./default/touchngo.svg": [9634, 94998, 9634],
                "./default/tp_bank.svg": [316811, 94998, 16811],
                "./default/tpaga.svg": [100104, 94998, 104],
                "./default/tpay_one_click.svg": [645553, 94998, 45553],
                "./default/transfer_by_sber.svg": [138755, 94998, 38755],
                "./default/transfiya.svg": [79902, 94998, 79902],
                "./default/tron.svg": [651101, 94998, 51101],
                "./default/troy.svg": [648040, 94998, 48040],
                "./default/true_money.svg": [177194, 94998, 77194],
                "./default/trustly.svg": [222529, 94998, 22529],
                "./default/ttb_internet_banking.svg": [967935, 94998, 67935],
                "./default/tunki_pagsmile.svg": [653358, 94998, 53358],
                "./default/turkiye_finans.svg": [373560, 94998, 73560],
                "./default/u-mob.svg": [228332, 94998, 28332],
                "./default/ub_wallet.svg": [708084, 94998, 8084],
                "./default/ubp_bank_philippines.svg": [104151, 94998, 4151],
                "./default/uco-bank.svg": [817138, 94998, 17138],
                "./default/unibank.svg": [71329, 94998, 71329],
                "./default/union-bank-of-india.svg": [290359, 94998, 90359],
                "./default/union-giros.svg": [196047, 94998, 96047],
                "./default/uob_bank.svg": [738480, 94998, 38480],
                "./default/upay.svg": [32830, 94998, 32830],
                "./default/upay_manual.svg": [363535, 94998, 63535],
                "./default/upi.svg": [267944, 94998, 67944],
                "./default/usdc.svg": [728361, 94998, 28361],
                "./default/usdc_arb.svg": [287502, 94998, 87502],
                "./default/usdc_base.svg": [607434, 94998, 7434],
                "./default/usdc_bep20.svg": [662097, 94998, 62097],
                "./default/usdc_erc20.svg": [486458, 94998, 86458],
                "./default/usdc_pol.svg": [120342, 94998, 20342],
                "./default/usdc_trc20.svg": [275173, 94998, 75173],
                "./default/ussd_flutterwave.svg": [504351, 94998, 4351],
                "./default/ussd_paystack.svg": [444751, 94998, 44751],
                "./default/uzcard.svg": [771060, 94998, 71060],
                "./default/va_indonesia.svg": [535492, 94998, 35492],
                "./default/venezolano_de_credito.svg": [952904, 94998, 52904],
                "./default/venezuela_bank_transfer.svg": [703927, 94998, 3927],
                "./default/verve.svg": [209985, 94998, 9985],
                "./default/via.svg": [375623, 94998, 75623],
                "./default/vib_bank.svg": [873249, 94998, 73249],
                "./default/viet_qr.svg": [60988, 94998, 60988],
                "./default/viet_qr_payok.svg": [318722, 94998, 18722],
                "./default/vietcombank.svg": [385712, 94998, 85712],
                "./default/vietin_bank.svg": [37994, 94998, 37994],
                "./default/vietnam-bank-transfer.svg": [938143, 94998, 38143],
                "./default/vietnam_banks_payok.svg": [568228, 94998, 68228],
                "./default/vietnammobile_vnd_giftcard.svg": [171757, 94998, 71757],
                "./default/viettel_vnd_giftcard.svg": [293412, 94998, 93412],
                "./default/viettelpay.svg": [717144, 94998, 17144],
                "./default/viettelpay_payok.svg": [911067, 94998, 41592],
                "./default/vinaphone_vnd_giftcard.svg": [166685, 94998, 66685],
                "./default/vip-havale.svg": [524906, 94998, 24906],
                "./default/virtual-account-korea.svg": [405896, 94998, 5896],
                "./default/virtual_account.svg": [401907, 94998, 1907],
                "./default/virtual_accounts.svg": [647028, 94998, 47028],
                "./default/visa.svg": [426194, 94998, 26194],
                "./default/visa_astropay.svg": [220106, 94998, 20106],
                "./default/visa_mastercard.svg": [429642, 94998, 29642],
                "./default/visa_qr_paystack.svg": [690091, 94998, 90091],
                "./default/vodacom_tz.svg": [250277, 94998, 50277],
                "./default/vodafone.svg": [942996, 94998, 42996],
                "./default/vodafone_cash.svg": [482550, 94998, 82550],
                "./default/volt.svg": [376770, 94998, 76770],
                "./default/voucher.svg": [950713, 94998, 50713],
                "./default/vp_bank.svg": [784962, 94998, 84962],
                "./default/vtb.svg": [877686, 94998, 77686],
                "./default/vtb_one_click.svg": [547995, 94998, 47995],
                "./default/waldos.svg": [160570, 94998, 60570],
                "./default/wallet_co.svg": [401685, 94998, 1685],
                "./default/walmart.svg": [406874, 94998, 6874],
                "./default/walmart_express.svg": [467423, 94998, 67423],
                "./default/wave.svg": [361902, 94998, 61902],
                "./default/wavepay.svg": [979717, 94998, 79717],
                "./default/we_pay_egp.svg": [552837, 94998, 52837],
                "./default/webmoney.svg": [997540, 94998, 97540],
                "./default/webmoney_uah.svg": [24572, 94998, 24572],
                "./default/webpay.svg": [53906, 94998, 53906],
                "./default/wechatpay.svg": [516942, 94998, 16942],
                "./default/wema-bank.svg": [403278, 94998, 3278],
                "./default/wepay.svg": [114464, 94998, 14464],
                "./default/western_union.svg": [313068, 94998, 13068],
                "./default/western_union_v2.svg": [245046, 94998, 45046],
                "./default/whatsapp_pay.svg": [278781, 94998, 78781],
                "./default/winbalance.svg": [524214, 94998, 24214],
                "./default/wing.svg": [533592, 94998, 33592],
                "./default/wise.svg": [143216, 94998, 43216],
                "./default/wizall.svg": [892756, 94998, 92756],
                "./default/world_ep.svg": [589484, 94998, 89484],
                "./default/yandex.svg": [511067, 94998, 11067],
                "./default/yape.svg": [511695, 94998, 11695],
                "./default/yes-bank.svg": [683698, 94998, 83698],
                "./default/zalopay.svg": [252275, 94998, 52275],
                "./default/zamani.svg": [154102, 94998, 54102],
                "./default/zamani_cash.svg": [939842, 94998, 39842],
                "./default/zamtel.svg": [347309, 94998, 47309],
                "./default/zapper.svg": [840321, 94998, 40321],
                "./default/zazer_pay_tg.svg": [690177, 94998, 90177],
                "./default/zazer_pay_whatsapp.svg": [443676, 94998, 43676],
                "./default/zcash.svg": [538774, 94998, 38774],
                "./default/zenith-bank-plc.svg": [876985, 94998, 76985],
                "./default/ziraat.svg": [578119, 94998, 78119],
                "./default/zona_pago.svg": [345592, 94998, 45592]
            };

            function l(a) {
                if (!t.o(s, a)) return Promise.resolve().then((() => {
                    var e = new Error("Cannot find module '" + a + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }));
                var e = s[a],
                    l = e[0];
                return Promise.all(e.slice(1).map(t.e)).then((() => t(l)))
            }
            l.keys = () => Object.keys(s), l.id = 501801, a.exports = l
        }
    }
]);