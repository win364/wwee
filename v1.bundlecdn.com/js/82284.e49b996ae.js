"use strict";
(self["webpackChunk_1win_frontend_main"] = self["webpackChunk_1win_frontend_main"] || []).push([
    [82284], {
        182284: (t, e, o) => {
            o.d(e, {
                Z: () => Y
            });
            var a = o(166252),
                n = o(3577),
                l = o(602262),
                u = o(322201),
                i = o(280894),
                s = o(79417),
                r = o(428490),
                d = o(920346),
                c = o(563637),
                y = o(968847),
                p = o(879669);
            const v = (0, a.aZ)({
                    __name: "LoadingState",
                    props: {
                        paymentSystem: {},
                        currency: {},
                        cryptoCurrency: {},
                        isCrypto: {
                            type: Boolean
                        },
                        txid: {},
                        alias: {},
                        blockchain: {},
                        finalAmount: {}
                    },
                    setup(t) {
                        const e = t,
                            o = (0, i.oR)(),
                            u = (0, d.Jr)("common.depositStatus.loadingState"),
                            v = (0, a.Fl)((() => e.blockchain && r.Cf.has(e.blockchain) ? {
                                value: r.MN / r.ZY,
                                intervalDuration: r.ZY
                            } : {
                                value: r.MN / r.ko,
                                intervalDuration: r.ko
                            })),
                            m = new y.Z(v.value),
                            S = new y.Z({
                                value: r.MN / 1e3
                            }),
                            _ = S.state,
                            f = (0, l.Vh)((() => o.getters.isMobile)),
                            C = (0, a.Fl)((() => v.value.value - m.value)),
                            h = (0, a.Fl)((() => e.isCrypto ? u.crypto.title : u.title)),
                            b = (0, a.Fl)((() => e.isCrypto ? (0, c.Uw)(u.crypto.subtitle, C.value, v.value.value) : u.subtitle)),
                            D = (0, a.Fl)((() => ({
                                iconName: e.paymentSystem,
                                cryptoCurrency: e.cryptoCurrency,
                                finalAmount: e.finalAmount,
                                currency: e.currency,
                                isCrypto: e.isCrypto,
                                txid: e.txid
                            })));
                        return e.isCrypto && ((0, a.YP)((() => 0 === _.value), (() => {
                            S.stop(), m.stop()
                        })), (0, a.bv)((() => {
                            S.start(), m.start()
                        })), (0, a.Ah)((() => {
                            S.stop(), m.stop()
                        }))), (t, e) => ((0, a.wg)(), (0, a.iD)("div", {
                            class: (0, n.C_)(t.$style.root)
                        }, [(0, a.Wm)((0, l.SU)(p.aN), {
                            class: (0, n.C_)(t.$style.loader)
                        }, null, 8, ["class"]), (0, a._)("h2", {
                            class: (0, n.C_)(t.$style.title)
                        }, (0, n.zw)(h.value), 3), (0, a._)("p", {
                            class: (0, n.C_)(t.$style.subtitle)
                        }, (0, n.zw)(b.value), 3), t.isCrypto ? ((0, a.wg)(), (0, a.j4)(s.Z, (0, a.dG)({
                            key: 0
                        }, D.value, {
                            class: f.value ? t.$style.paymentInfoMobile : t.$style.paymentInfo
                        }), null, 16, ["class"])) : (0, a.kq)("", !0)], 2))
                    }
                }),
                m = {
                    root: "LoadingState_root_UsOYC",
                    loader: "LoadingState_loader_v6tnH",
                    title: "LoadingState_title_RBee8",
                    subtitle: "LoadingState_subtitle_ZFrJX",
                    paymentInfo: "LoadingState_paymentInfo_Oy9WN",
                    paymentInfoMobile: "LoadingState_paymentInfoMobile_W7kcU"
                };
            var S = o(348118);
            const _ = {};
            _["$style"] = m;
            const f = (0, S.Z)(v, [
                    ["__cssModules", _]
                ]),
                C = f;
            var h = o(274217),
                b = o(931338);
            const D = "analytics-14452_ab_test_custom_declines",
                g = "treatment",
                I = () => {
                    const {
                        value: t
                    } = (0, b.y)(D), e = (0, l.Vh)((() => t.value === g));
                    return {
                        isCustomError: e
                    }
                };
            var w = o(800231),
                k = o(656459),
                E = (t, e, o) => new Promise(((a, n) => {
                    var l = t => {
                            try {
                                i(o.next(t))
                            } catch (e) {
                                n(e)
                            }
                        },
                        u = t => {
                            try {
                                i(o.throw(t))
                            } catch (e) {
                                n(e)
                            }
                        },
                        i = t => t.done ? a(t.value) : Promise.resolve(t.value).then(l, u);
                    i((o = o.apply(t, e)).next())
                }));

            function x() {
                const t = new Date,
                    e = {
                        timeZone: "Europe/Moscow",
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: !1
                    },
                    o = t.toLocaleString("ru-RU", e),
                    [a, n] = o.split(", "),
                    [l, u, i] = (null != a ? a : "").split(".");
                return `${i}-${u}-${l} ${n}`
            }
            const M = ({
                paymentSystem: t,
                pollingTimeoutMs: e,
                immediate: o,
                onReceived: n
            }) => {
                const l = (0, w.u)();
                let u, i;
                const s = () => E(void 0, null, (function*() {
                        if (!t.value) return null;
                        try {
                            return yield l({
                                name: (0, k.YT)("deposit-crypto-get-info"),
                                payload: {
                                    time: i,
                                    paymentSystem: t.value || ""
                                }
                            })
                        } catch (e) {
                            return null
                        }
                    })),
                    r = () => {
                        u && (clearTimeout(u), u = void 0)
                    },
                    d = (t = 0) => {
                        r(), u = setTimeout((() => E(void 0, null, (function*() {
                            const t = yield s();
                            (null == t ? void 0 : t.id) ? (n(t), r()) : d(e)
                        }))), t)
                    };
                return (0, a.bv)((() => {
                    i = x(), d(o ? 0 : e)
                })), (0, a.Jd)((() => {
                    r()
                })), {
                    stopCryptoDepositPolling: r
                }
            };
            var N = o(735037),
                P = o(909997),
                A = o(894710),
                L = o(173870),
                $ = Object.defineProperty,
                R = Object.getOwnPropertySymbols,
                F = Object.prototype.hasOwnProperty,
                Z = Object.prototype.propertyIsEnumerable,
                U = (t, e, o) => e in t ? $(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: o
                }) : t[e] = o,
                G = (t, e) => {
                    for (var o in e || (e = {})) F.call(e, o) && U(t, o, e[o]);
                    if (R)
                        for (var o of R(e)) Z.call(e, o) && U(t, o, e[o]);
                    return t
                },
                T = (t, e, o) => new Promise(((a, n) => {
                    var l = t => {
                            try {
                                i(o.next(t))
                            } catch (e) {
                                n(e)
                            }
                        },
                        u = t => {
                            try {
                                i(o.throw(t))
                            } catch (e) {
                                n(e)
                            }
                        },
                        i = t => t.done ? a(t.value) : Promise.resolve(t.value).then(l, u);
                    i((o = o.apply(t, e)).next())
                }));
            const B = (0, a.aZ)({
                    __name: "DepositStatus",
                    props: {
                        amount: {
                            default: void 0
                        },
                        currency: {
                            default: void 0
                        },
                        depositId: {
                            default: void 0
                        },
                        noDepositIdMode: {
                            type: Boolean,
                            default: !1
                        },
                        paymentSystem: {
                            default: void 0
                        },
                        isPlayButton: {
                            type: Boolean,
                            default: !0
                        },
                        isCrypto: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    emits: ["onLoaded"],
                    setup(t, {
                        emit: e
                    }) {
                        var o, s, c, y, p, v, m, S, _, f, b;
                        const D = e,
                            g = t,
                            E = (0, u.tv)(),
                            x = (0, d.dd)(),
                            $ = (0, i.oR)(),
                            R = (0, w.u)(),
                            F = (0, N.E)(),
                            {
                                isCustomError: Z
                            } = I(),
                            U = (0, l.iH)(!0),
                            B = (0, l.iH)();
                        let H, O, j;
                        const Y = (0, l.iH)(""),
                            J = (0, l.Vh)((() => $.getters.isMobile)),
                            q = (0, a.Fl)((() => {
                                switch (E.currentRoute.value.query.s) {
                                    case "0":
                                        return r.i3.PENDING;
                                    case "1":
                                        return r.i3.SUCCESS;
                                    case "2":
                                        return r.i3.FAILURE;
                                    default:
                                        return
                                }
                            })),
                            V = (0, a.Fl)((() => {
                                const {
                                    failure: t,
                                    pending: e,
                                    success: o
                                } = $.getters.langCommon.depositStatus, {
                                    goHome: a = "",
                                    repeat: n = ""
                                } = $.getters.langCommon.buttons;
                                return {
                                    failure: t,
                                    pending: e,
                                    success: o,
                                    buttonGoHome: a,
                                    buttonRepeat: n
                                }
                            })),
                            W = t => q.value && q.value !== t ? r.i3.PENDING : t,
                            X = t => W(r.i3[r.t5[t]]),
                            z = t => {
                                var e, o, a, n;
                                const l = X(t.status),
                                    u = l === r.i3.FAILURE ? V.value.buttonRepeat : V.value.buttonGoHome;
                                let i, s;
                                return B.value = t.depositId, l === r.i3.FAILURE ? (Z.value && t.errorCode && r.MX.includes(t.errorCode) ? (i = V.value[l][`error_${t.errorCode}`].title, s = V.value[l][`error_${t.errorCode}`].info) : (i = V.value[l].error_2000.title, s = V.value[l].error_2000.info), P.L_.handleStatusErrorEvent(G({}, t.errorCode ? {
                                    error_code: t.errorCode
                                } : {
                                    error_text: "General decline"
                                }))) : (i = V.value[l].title, s = V.value[l].info), G({
                                    amount: t.amount,
                                    paymentName: t.paymentSystem,
                                    currency: t.currency,
                                    title: i,
                                    info: s,
                                    status: l,
                                    buttonText: u,
                                    buttonAction: l === r.i3.FAILURE ? "repeatDeposit" : "play",
                                    isPlayButton: g.isPlayButton
                                }, g.isCrypto && {
                                    isCrypto: !0,
                                    cryptoCurrency: null == (e = F.depositStatusData) ? void 0 : e.cryptoCurrency,
                                    txid: null == (o = F.depositStatusData) ? void 0 : o.txid,
                                    blockchain: null == (a = F.depositStatusData) ? void 0 : a.blockchain,
                                    finalAmount: null == (n = F.depositStatusData) ? void 0 : n.finalAmount
                                })
                            },
                            K = (0, l.iH)(z({
                                amount: null != (o = g.amount) ? o : "",
                                currency: null != (s = g.currency) ? s : "",
                                paymentSystem: null != (c = g.paymentSystem) ? c : "",
                                status: 0
                            })),
                            Q = (0, l.iH)(G({}, g.isCrypto && {
                                isCrypto: !0,
                                amount: null == (y = F.depositStatusData) ? void 0 : y.amount,
                                currency: null == (p = F.depositStatusData) ? void 0 : p.currency,
                                cryptoCurrency: null == (v = F.depositStatusData) ? void 0 : v.cryptoCurrency,
                                paymentSystem: null == (m = F.depositStatusData) ? void 0 : m.paymentSystem,
                                txid: null == (S = F.depositStatusData) ? void 0 : S.txid,
                                alias: null == (_ = F.depositStatusData) ? void 0 : _.alias,
                                blockchain: null == (f = F.depositStatusData) ? void 0 : f.blockchain,
                                finalAmount: null == (b = F.depositStatusData) ? void 0 : b.finalAmount
                            })),
                            tt = t => T(this, null, (function*() {
                                try {
                                    return yield R({
                                        name: (0, k.YT)("deposit-get-info"),
                                        payload: t
                                    })
                                } catch (e) {
                                    return
                                }
                            })),
                            et = t => {
                                const e = K.value.status === r.i3.FAILURE ? "error" : K.value.status;
                                P.L_.handleDepositStatusEvent(G({
                                    status_title: e,
                                    txid: String(B.value)
                                }, t))
                            },
                            ot = () => {
                                J.value ? E.push({
                                    name: L.Z.HOME
                                }) : x.close(A.xX)
                            },
                            at = () => {
                                et({
                                    button_text: "detailing",
                                    event_name: "button"
                                }), ot()
                            },
                            nt = () => {
                                const t = K.value.status === r.i3.FAILURE ? "repeat" : "home";
                                et({
                                    button_text: t,
                                    event_name: "button"
                                })
                            },
                            lt = () => {
                                clearTimeout(H), clearTimeout(O), null == j || j()
                            },
                            ut = () => {
                                lt(), U.value = !1, D("onLoaded"), et({
                                    event_name: "view"
                                })
                            },
                            it = () => {
                                var t, e, o;
                                K.value = z({
                                    amount: null != (t = g.amount) ? t : "",
                                    depositId: void 0,
                                    paymentSystem: null != (e = g.paymentSystem) ? e : "",
                                    currency: null != (o = g.currency) ? o : "",
                                    status: 0
                                })
                            },
                            st = (t, e) => T(this, null, (function*() {
                                var o;
                                const {
                                    id: a,
                                    uuid: n
                                } = E.currentRoute.value.query, l = null != n ? n : a, u = null != (o = g.depositId) ? o : Y.value;
                                if (!l && !u) return;
                                let i;
                                l ? i = yield tt({
                                    depositUuid: String(l)
                                }): u && (i = yield tt({
                                    depositId: String(u)
                                }));
                                const s = !i || X(i.status) === r.i3.PENDING;
                                if (t && s) e && ct();
                                else {
                                    if (!i) return ot(), void ut();
                                    K.value = z({
                                        amount: i.amount,
                                        depositId: i.depositId,
                                        paymentSystem: i.paymentSystem,
                                        currency: i.currency,
                                        status: i.status,
                                        errorCode: i.errorCode
                                    }), ut()
                                }
                            })),
                            rt = t => {
                                var e, o, a, n, l, u, i, s, r, d, c, y, p, v, m;
                                K.value = z({
                                    amount: null != (o = null == (e = F.depositStatusData) ? void 0 : e.amount) ? o : "",
                                    depositId: null == (a = F.depositStatusData) ? void 0 : a.depositId,
                                    paymentSystem: null != (l = null == (n = F.depositStatusData) ? void 0 : n.paymentSystem) ? l : "",
                                    currency: null != (i = null == (u = F.depositStatusData) ? void 0 : u.currency) ? i : "",
                                    cryptoCurrency: null != (r = null == (s = F.depositStatusData) ? void 0 : s.cryptoCurrency) ? r : "",
                                    status: void 0 === t ? null != (c = null == (d = F.depositStatusData) ? void 0 : d.status) ? c : 0 : t,
                                    txid: null == (y = F.depositStatusData) ? void 0 : y.txid,
                                    blockchain: null == (p = F.depositStatusData) ? void 0 : p.blockchain,
                                    finalAmount: null == (v = F.depositStatusData) ? void 0 : v.finalAmount,
                                    errorCode: null == (m = F.depositStatusData) ? void 0 : m.errorCode
                                })
                            },
                            dt = () => T(this, null, (function*() {
                                g.noDepositIdMode ? it() : g.isCrypto ? rt() : yield st()
                            })),
                            ct = () => {
                                clearTimeout(O), O = setTimeout((() => T(this, null, (function*() {
                                    yield st(!0, !0)
                                }))), r.$h)
                            };
                        return g.isCrypto && ({
                            stopCryptoDepositPolling: j
                        } = M({
                            paymentSystem: (0, a.Fl)((() => K.value.paymentName)),
                            immediate: !0,
                            pollingTimeoutMs: r.$h,
                            onReceived({
                                id: t,
                                status: e
                            }) {
                                var o;
                                Y.value = t, e !== (null == (o = F.depositStatusData) ? void 0 : o.status) && rt(e), X(e) === r.i3.PENDING ? ct() : ut()
                            }
                        })), (0, a.YP)((() => F.depositStatusData), (t => {
                            t && (K.value = z(t), ut())
                        })), (0, a.bv)((() => T(this, null, (function*() {
                            E.isReady().then((() => {
                                st(!0)
                            })), g.noDepositIdMode && (U.value = !1), g.isCrypto && rt(), K.value.status === r.i3.PENDING ? H = setTimeout((() => T(this, null, (function*() {
                                yield dt(), ut()
                            }))), g.isCrypto ? r.MN : r.Gy) : (yield dt(), g.isCrypto && ut())
                        })))), (0, a.Jd)((() => {
                            lt()
                        })), (t, e) => ((0, a.wg)(), (0, a.iD)("div", {
                            class: (0, n.C_)(t.$style.root)
                        }, [U.value ? ((0, a.wg)(), (0, a.j4)(C, (0, n.vs)((0, a.dG)({
                            key: 0
                        }, Q.value)), null, 16)) : ((0, a.wg)(), (0, a.j4)(h.Z, (0, a.dG)({
                            key: 1,
                            class: t.$style.paymentStatus
                        }, K.value, {
                            onClickOnDetailingButton: at,
                            onClickActionButton: nt
                        }), null, 16, ["class"]))], 2))
                    }
                }),
                H = {
                    root: "DepositStatus_root_guh_t",
                    paymentStatus: "DepositStatus_paymentStatus_tn6g8"
                },
                O = {};
            O["$style"] = H;
            const j = (0, S.Z)(B, [
                    ["__cssModules", O]
                ]),
                Y = j
        }
    }
]);