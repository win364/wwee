"use strict";
(self["webpackChunk_1win_frontend_main"] = self["webpackChunk_1win_frontend_main"] || []).push([
    [33375], {
        466465: (e, l, t) => {
            t.d(l, {
                Z: () => c
            });
            var a = t(349038),
                s = t(77224),
                n = t(348118);
            const o = {};
            o["$style"] = s.Z;
            const i = (0, n.Z)(a.Z, [
                    ["__cssModules", o]
                ]),
                c = i
        },
        192069: (e, l, t) => {
            t.d(l, {
                Z: () => c
            });
            var a = t(705674),
                s = t(879420),
                n = t(348118);
            const o = {};
            o["$style"] = s.Z;
            const i = (0, n.Z)(a.Z, [
                    ["__cssModules", o]
                ]),
                c = i
        },
        433375: (e, l, t) => {
            t.d(l, {
                Z: () => c
            });
            var a = t(850555),
                s = t(386726),
                n = t(348118);
            const o = {};
            o["$style"] = s.Z;
            const i = (0, n.Z)(a.Z, [
                    ["__cssModules", o]
                ]),
                c = i
        },
        349038: (e, l, t) => {
            t.d(l, {
                Z: () => a.Z
            });
            var a = t(41306)
        },
        705674: (e, l, t) => {
            t.d(l, {
                Z: () => a.Z
            });
            var a = t(742131)
        },
        850555: (e, l, t) => {
            t.d(l, {
                Z: () => a.Z
            });
            var a = t(890081)
        },
        77224: (e, l, t) => {
            t.d(l, {
                Z: () => a.Z
            });
            var a = t(163489)
        },
        879420: (e, l, t) => {
            t.d(l, {
                Z: () => a.Z
            });
            var a = t(687953)
        },
        386726: (e, l, t) => {
            t.d(l, {
                Z: () => a.Z
            });
            var a = t(596708)
        },
        41306: (e, l, t) => {
            t.d(l, {
                Z: () => c
            });
            var a = t(166252),
                s = t(3577),
                n = t(105576),
                o = t(559166),
                i = t(682703);
            const c = (0, a.aZ)({
                __name: "Cell",
                props: {
                    id: {},
                    text: {},
                    amount: {},
                    icon: {},
                    date: {},
                    currency: {},
                    statusIcon: {
                        default: void 0
                    },
                    theme: {
                        default: "default"
                    }
                },
                setup(e) {
                    return (e, l) => ((0, a.wg)(), (0, a.iD)("div", {
                        class: (0, s.C_)([e.$style.cell, "success" === e.theme && e.$style.success])
                    }, [(0, a._)("div", {
                        class: (0, s.C_)(e.$style.leftIcon)
                    }, [(0, a.Wm)(i.Z, {
                        class: (0, s.C_)(e.$style.icon),
                        name: e.icon,
                        size: 40,
                        type: "color",
                        "auto-width": ""
                    }, null, 8, ["class", "name"])], 2), (0, a._)("div", {
                        class: (0, s.C_)(e.$style.content)
                    }, [(0, a._)("div", {
                        class: (0, s.C_)(e.$style.titleRow)
                    }, [(0, a.Wm)(n.Z, {
                        class: (0, s.C_)(e.$style.title),
                        value: Number(e.amount),
                        currency: e.currency
                    }, null, 8, ["class", "value", "currency"]), e.statusIcon ? ((0, a.wg)(), (0, a.j4)(o.Z, {
                        key: 0,
                        class: (0, s.C_)(e.$style.statusIcon),
                        icon: e.statusIcon
                    }, null, 8, ["class", "icon"])) : (0, a.kq)("", !0)], 2), (0, a._)("div", {
                        class: (0, s.C_)(e.$style.subtitleRow)
                    }, [(0, a._)("span", {
                        class: (0, s.C_)(e.$style.subtitle)
                    }, (0, s.zw)(e.text), 3), (0, a._)("span", {
                        class: (0, s.C_)(e.$style.time)
                    }, (0, s.zw)(e.date), 3)], 2)], 2)], 2))
                }
            })
        },
        742131: (e, l, t) => {
            t.d(l, {
                Z: () => r
            });
            var a = t(166252),
                s = t(3577),
                n = t(602262),
                o = t(280894),
                i = t(105576),
                c = t(559166);
            const r = (0, a.aZ)({
                __name: "SuccessWithdrawal",
                setup(e) {
                    const l = (0, o.oR)(),
                        t = (0, n.Vh)((() => l.getters.langCommon.depositWithdrawalManagement));
                    return (e, o) => ((0, a.wg)(), (0, a.iD)("div", {
                        class: (0, s.C_)(e.$style.successWithdrawal)
                    }, [(0, a.Wm)(c.Z, {
                        class: (0, s.C_)(e.$style.icon),
                        size: 36,
                        icon: "success-icon"
                    }, null, 8, ["class"]), (0, a._)("h4", {
                        class: (0, s.C_)(e.$style.title)
                    }, (0, s.zw)(t.value.successTitle), 3), (0, a._)("p", {
                        class: (0, s.C_)(e.$style.description)
                    }, (0, s.zw)(t.value.successDescription), 3), (0, a._)("div", {
                        class: (0, s.C_)(e.$style.balanceInfo)
                    }, [(0, a._)("p", {
                        class: (0, s.C_)(e.$style.balanceText)
                    }, (0, s.zw)(t.value.balance), 3), (0, a.Wm)(i.Z, {
                        class: (0, s.C_)(e.$style.balanceValue),
                        value: (0, n.SU)(l).getters.balance,
                        currency: (0, n.SU)(l).getters.currency
                    }, null, 8, ["class", "value", "currency"])], 2)], 2))
                }
            })
        },
        890081: (e, l, t) => {
            t.d(l, {
                Z: () => M
            });
            var a = t(166252),
                s = t(3577),
                n = t(602262),
                o = t(322201),
                i = t(280894),
                c = t(583582),
                r = t(932256),
                u = t(920346),
                d = t(262884),
                _ = t(431554),
                w = t(909997),
                h = t(63619),
                y = t(894710),
                v = t(59394),
                p = t(173870),
                C = t(466465),
                m = t(192069),
                b = Object.defineProperty,
                f = Object.getOwnPropertySymbols,
                g = Object.prototype.hasOwnProperty,
                S = Object.prototype.propertyIsEnumerable,
                k = (e, l, t) => l in e ? b(e, l, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[l] = t,
                W = (e, l) => {
                    for (var t in l || (l = {})) g.call(l, t) && k(e, t, l[t]);
                    if (f)
                        for (var t of f(l)) S.call(l, t) && k(e, t, l[t]);
                    return e
                },
                Z = (e, l, t) => new Promise(((a, s) => {
                    var n = e => {
                            try {
                                i(t.next(e))
                            } catch (l) {
                                s(l)
                            }
                        },
                        o = e => {
                            try {
                                i(t.throw(e))
                            } catch (l) {
                                s(l)
                            }
                        },
                        i = e => e.done ? a(e.value) : Promise.resolve(e.value).then(n, o);
                    i((t = t.apply(e, l)).next())
                }));
            const $ = {
                    key: 0
                },
                D = {
                    key: 1
                },
                A = {
                    key: 2
                },
                x = {
                    key: 2
                },
                M = (0, a.aZ)({
                    __name: "WithdrawalCancellation",
                    props: {
                        detectMode: {
                            type: Function,
                            default: () => {}
                        },
                        isModal: {
                            type: Boolean,
                            default: !1
                        },
                        mode: {
                            default: r.oSm.MAIN
                        }
                    },
                    setup(e) {
                        const l = {
                                MOT_AVAILABLE_FILLED: "not-available-filled",
                                CLOCK: "clock",
                                PLUS_FILLED: "plus-filled"
                            },
                            t = (0, i.oR)(),
                            b = (0, u.lm)(),
                            f = (0, u.dd)(),
                            g = (0, _.p)(),
                            S = (0, o.tv)(),
                            k = (0, n.iH)(!1),
                            M = (0, n.iH)([]),
                            L = (0, a.Fl)((() => {
                                var e;
                                return null == (e = t.getters) ? void 0 : e.isMobile
                            })),
                            I = e,
                            z = (0, d.$0)(void 0, {
                                hour: "2-digit",
                                minute: "2-digit"
                            }),
                            B = e => e.reduce(((e, l) => {
                                if (0 !== l.status) return e;
                                const {
                                    amount: a,
                                    currency: s,
                                    text: n,
                                    paymentSystem: o,
                                    time: i,
                                    id: c
                                } = l, r = new Date(i), u = z.value.format(r), d = "ru" === t.getters.lang ? null == n ? void 0 : n.ru : null == n ? void 0 : n.en, _ = {
                                    id: c,
                                    amount: a,
                                    currency: s,
                                    text: null != d ? d : "",
                                    icon: o,
                                    date: u
                                };
                                return [...e, _]
                            }), []),
                            U = (0, a.Fl)((() => B(g.withdrawalHistoryData))),
                            T = (0, a.Fl)((() => {
                                const {
                                    annulled: e = []
                                } = g.cancelWithdrawalsData;
                                return B(e)
                            })),
                            O = (0, a.Fl)((() => {
                                const {
                                    notAnnulled: e = []
                                } = g.cancelWithdrawalsData;
                                return B(e)
                            })),
                            E = (0, a.Fl)((() => {
                                const e = [...T.value, ...O.value, ...U.value];
                                return e.map((e => e.icon)).join(", ")
                            })),
                            H = e => {
                                const l = e.slice(0, e.indexOf("%s")),
                                    t = e.slice(e.indexOf("%d") + 2),
                                    a = e.slice(e.indexOf("%s") + 2, e.indexOf("%d"));
                                return {
                                    part1: l,
                                    part2: t,
                                    buttonText: a
                                }
                            },
                            R = (0, a.Fl)((() => {
                                const {
                                    partialSuccessDescription: e = "",
                                    depositButton: l = "",
                                    playButton: a = "",
                                    buttonCancelWithdrawals: s = "",
                                    buttonCancelWithdrawal: n = "",
                                    showAllButton: o = "",
                                    failureDescription: i = "",
                                    failureDescriptionPlural: c = "",
                                    mainTitlePlural: r = "",
                                    mainTitle: u = "",
                                    separatorText: d = "",
                                    showLessButton: _ = ""
                                } = t.getters.langCommon.depositWithdrawalManagement, w = H(e), h = H(i), y = H(c);
                                return {
                                    playButton: a,
                                    depositButton: l,
                                    separatorText: d.toLowerCase(),
                                    partialSuccessDescription: w,
                                    mainTitle: U.value.length > 1 ? r : u,
                                    showAllButton: M.value.length > 2 ? _ : o,
                                    failureDescription: U.value.length > 1 ? y : h,
                                    buttonCancelWithdrawals: U.value.length > 1 ? s : n
                                }
                            })),
                            q = () => {
                                M.value = U.value.length > 2 && L.value ? U.value.slice(0, 2) : U.value
                            },
                            F = e => {
                                w.L_.handleWithdrawalModalEvent(W({
                                    currency: t.getters.currency.toLowerCase(),
                                    payment_region: t.state.country.toLowerCase()
                                }, e))
                            },
                            P = () => {
                                F({
                                    event_name: "to_deposit",
                                    withdrawal_method: E.value
                                }), g.clearHistory(), f.close("withdrawal-cancellation")
                            },
                            j = () => {
                                var e;
                                const l = f.isModalOpened(v.bZ);
                                if (g.clearHistory(), f.closeAll(), L.value && !l) switch (null == (e = h.g.value) ? void 0 : e.name) {
                                    case "deposit":
                                    case "profile":
                                    case void 0:
                                        S.push({
                                            name: p.Z.HOME
                                        });
                                        break;
                                    default:
                                        h.g.value && S.push(h.g.value);
                                        break
                                }
                            },
                            Y = () => {
                                const e = I.mode === r.oSm.SUCCESS ? "Done" : "A portion of the amount has been credited to the account";
                                w.L_.handleWithdrawalModalEvent({
                                    event_name: "play",
                                    form_title: e
                                }), j()
                            },
                            V = () => {
                                M.value = M.value.length > 2 ? U.value.slice(0, 2) : U.value
                            },
                            G = () => Z(this, null, (function*() {
                                if (!k.value) {
                                    k.value = !0, F({
                                        event_name: "cancel",
                                        withdrawal_method: E.value
                                    });
                                    try {
                                        const e = g.withdrawalHistoryData;
                                        if (yield g.cancelWithdrawals(e), yield t.dispatch("requestBalance"), !I.isModal) return void f.openOver("withdrawal-cancellation", {
                                            closeOnBackgroundClick: !1
                                        });
                                        const {
                                            annulled: l,
                                            notAnnulled: a
                                        } = g.cancelWithdrawalsData;
                                        I.detectMode(l.length, a.length)
                                    } catch (e) {
                                        b.error(e)
                                    } finally {
                                        k.value = !1
                                    }
                                }
                            })),
                            K = () => {
                                const e = I.mode === r.oSm.PARTIAL_SUCCESS ? "A portion of the amount has been credited to the account" : "Unable to cancel withdrawal";
                                F({
                                    event_name: "detailing",
                                    withdrawal_method: E.value,
                                    form_title: e
                                }), j(), L.value ? S.push({
                                    name: p.Z.DETAILING
                                }) : f.open(y.pg, {
                                    closeOnBackgroundClick: !1
                                })
                            };
                        return (0, a.YP)(U, (() => {
                            q()
                        }), {
                            immediate: !0
                        }), (e, t) => ((0, a.wg)(), (0, a.iD)("div", {
                            class: (0, s.C_)([e.$style.root, L.value && e.$style.isMobile])
                        }, [e.mode === (0, n.SU)(r.oSm).SUCCESS ? ((0, a.wg)(), (0, a.iD)("div", $, [(0, a.Wm)(m.Z)])) : (0, a.kq)("", !0), e.mode === (0, n.SU)(r.oSm).PARTIAL_SUCCESS ? ((0, a.wg)(), (0, a.iD)("div", D, [((0, a.wg)(!0), (0, a.iD)(a.HY, null, (0, a.Ko)(T.value, (l => ((0, a.wg)(), (0, a.j4)(C.Z, (0, a.dG)({
                            key: l.id,
                            class: e.$style.cell,
                            theme: "success",
                            ref_for: !0
                        }, l), null, 16, ["class"])))), 128)), (0, a._)("div", {
                            class: (0, s.C_)(e.$style.cellSeparator)
                        }, null, 2), (0, a._)("div", {
                            class: (0, s.C_)(e.$style.subtitleContainer)
                        }, [(0, a._)("span", {
                            class: (0, s.C_)(e.$style.subtitle)
                        }, (0, s.zw)(R.value.partialSuccessDescription.part1), 3), (0, a._)("button", {
                            class: (0, s.C_)(e.$style.fakeLink),
                            type: "button",
                            onClick: K
                        }, (0, s.zw)(R.value.partialSuccessDescription.buttonText), 3), R.value.partialSuccessDescription.part2 ? ((0, a.wg)(), (0, a.iD)("span", {
                            key: 0,
                            class: (0, s.C_)(e.$style.subtitle)
                        }, (0, s.zw)(R.value.partialSuccessDescription.part2), 3)) : (0, a.kq)("", !0)], 2), ((0, a.wg)(!0), (0, a.iD)(a.HY, null, (0, a.Ko)(O.value, (t => ((0, a.wg)(), (0, a.j4)(C.Z, (0, a.dG)({
                            key: t.id,
                            class: e.$style.cell,
                            ref_for: !0
                        }, t, {
                            "status-icon": l.MOT_AVAILABLE_FILLED
                        }), null, 16, ["class", "status-icon"])))), 128))])) : (0, a.kq)("", !0), e.mode === (0, n.SU)(r.oSm).FAILURE ? ((0, a.wg)(), (0, a.iD)("div", A, [(0, a._)("div", {
                            class: (0, s.C_)(e.$style.subtitleContainer)
                        }, [(0, a._)("span", {
                            class: (0, s.C_)(e.$style.subtitle)
                        }, (0, s.zw)(R.value.failureDescription.part1), 3), (0, a._)("button", {
                            class: (0, s.C_)(e.$style.fakeLink),
                            type: "button",
                            onClick: K
                        }, (0, s.zw)(R.value.failureDescription.buttonText), 3), R.value.failureDescription.part2 ? ((0, a.wg)(), (0, a.iD)("span", {
                            key: 0,
                            class: (0, s.C_)(e.$style.subtitle)
                        }, (0, s.zw)(R.value.failureDescription.part2), 3)) : (0, a.kq)("", !0)], 2), ((0, a.wg)(!0), (0, a.iD)(a.HY, null, (0, a.Ko)(O.value, (t => ((0, a.wg)(), (0, a.j4)(C.Z, (0, a.dG)({
                            key: t.id,
                            class: e.$style.cell,
                            ref_for: !0
                        }, t, {
                            "status-icon": l.MOT_AVAILABLE_FILLED
                        }), null, 16, ["class", "status-icon"])))), 128))])) : (0, a.kq)("", !0), e.mode !== (0, n.SU)(r.oSm).MAIN ? ((0, a.wg)(), (0, a.j4)(c.Z, {
                            key: 3,
                            class: (0, s.C_)([e.$style.buttonReturnMoney, e.$style.disableBoxShadow]),
                            wide: "",
                            theme: "green",
                            size: "xl",
                            onClick: P
                        }, {
                            default: (0, a.w5)((() => [(0, a.Uk)((0, s.zw)(R.value.depositButton), 1)])),
                            _: 1
                        }, 8, ["class"])) : (0, a.kq)("", !0), e.mode !== (0, n.SU)(r.oSm).MAIN && e.mode !== (0, n.SU)(r.oSm).FAILURE ? ((0, a.wg)(), (0, a.j4)(c.Z, {
                            key: 4,
                            class: (0, s.C_)([e.$style.buttonCloseModals, e.$style.disableBoxShadow]),
                            wide: "",
                            theme: "secondary",
                            size: "xl",
                            onClick: Y
                        }, {
                            default: (0, a.w5)((() => [(0, a.Uk)((0, s.zw)(R.value.playButton), 1)])),
                            _: 1
                        }, 8, ["class"])) : (0, a.kq)("", !0), e.mode === (0, n.SU)(r.oSm).MAIN ? ((0, a.wg)(), (0, a.iD)("div", {
                            key: 5,
                            class: (0, s.C_)([e.$style.mainContainer, M.value.length > 2 && e.$style.isShowAll])
                        }, [e.isModal ? (0, a.kq)("", !0) : ((0, a.wg)(), (0, a.iD)("h4", {
                            key: 0,
                            class: (0, s.C_)(e.$style.title)
                        }, (0, s.zw)(R.value.mainTitle), 3)), (0, a._)("div", {
                            class: (0, s.C_)(e.$style.cells)
                        }, [((0, a.wg)(!0), (0, a.iD)(a.HY, null, (0, a.Ko)(M.value, (t => ((0, a.wg)(), (0, a.j4)(C.Z, (0, a.dG)({
                            key: t.id,
                            class: e.$style.cell,
                            ref_for: !0
                        }, t, {
                            "status-icon": l.CLOCK
                        }), null, 16, ["class", "status-icon"])))), 128))], 2), U.value.length > 2 && L.value ? ((0, a.wg)(), (0, a.j4)(c.Z, {
                            key: 1,
                            class: (0, s.C_)([e.$style.showMore, e.$style.disableBoxShadow]),
                            wide: "",
                            theme: "secondary",
                            size: "xl",
                            onClick: V
                        }, {
                            default: (0, a.w5)((() => [(0, a.Uk)((0, s.zw)(R.value.showAllButton), 1)])),
                            _: 1
                        }, 8, ["class"])) : (0, a.kq)("", !0), (0, a.Wm)(c.Z, {
                            class: (0, s.C_)([e.$style.buttonReturnMoney, e.$style.disableBoxShadow]),
                            wide: "",
                            theme: "green",
                            size: "xl",
                            onClick: G
                        }, {
                            default: (0, a.w5)((() => [(0, a.Uk)((0, s.zw)(R.value.buttonCancelWithdrawals), 1)])),
                            _: 1
                        }, 8, ["class"]), (0, a._)("div", {
                            class: (0, s.C_)(e.$style.separator)
                        }, [(0, a._)("div", {
                            class: (0, s.C_)(e.$style.line)
                        }, null, 2), (0, a._)("span", {
                            class: (0, s.C_)(e.$style.text)
                        }, (0, s.zw)(R.value.separatorText), 3), (0, a._)("div", {
                            class: (0, s.C_)(e.$style.line)
                        }, null, 2)], 2), e.isModal ? ((0, a.wg)(), (0, a.iD)("div", x, [(0, a.Wm)(c.Z, {
                            class: (0, s.C_)([e.$style.buttonDeposit, e.$style.disableBoxShadow]),
                            wide: "",
                            theme: "secondary",
                            size: "xl",
                            icon: l.PLUS_FILLED,
                            onClick: P
                        }, {
                            default: (0, a.w5)((() => [(0, a.Uk)((0, s.zw)(R.value.depositButton), 1)])),
                            _: 1
                        }, 8, ["class", "icon"])])) : (0, a.kq)("", !0)], 2)) : (0, a.kq)("", !0)], 2))
                    }
                })
        },
        431554: (e, l, t) => {
            t.d(l, {
                p: () => u
            });
            var a = t(567476),
                s = t(602262),
                n = t(920346),
                o = t(800231),
                i = t(95575),
                c = t(656459),
                r = (e, l, t) => new Promise(((a, s) => {
                    var n = e => {
                            try {
                                i(t.next(e))
                            } catch (l) {
                                s(l)
                            }
                        },
                        o = e => {
                            try {
                                i(t.throw(e))
                            } catch (l) {
                                s(l)
                            }
                        },
                        i = e => e.done ? a(e.value) : Promise.resolve(e.value).then(n, o);
                    i((t = t.apply(e, l)).next())
                }));
            const u = (0, a.Q_)("withdrawalCancellation", (() => {
                const e = (0, n.lm)(),
                    l = (0, o.u)(),
                    t = (0, o.u)(),
                    a = (0, s.iH)({
                        annulled: [],
                        notAnnulled: []
                    }),
                    u = (0, s.iH)([]),
                    d = () => {
                        a.value = {
                            annulled: [],
                            notAnnulled: []
                        }
                    },
                    _ = ({
                        annulled: e,
                        notAnnulled: l
                    }) => {
                        const t = {
                            annulled: [],
                            notAnnulled: []
                        };
                        for (const a of u.value) e.includes(a.id) && t.annulled.push(a), l.includes(a.id) && t.notAnnulled.push(a);
                        u.value = [], a.value = t
                    },
                    w = l => r(void 0, null, (function*() {
                        const a = l.map((e => e.id));
                        try {
                            const e = yield t({
                                name: (0, c.YT)("withdrawal-cancel"),
                                payload: {
                                    withdrawalIds: a
                                }
                            });
                            _({
                                annulled: e.annulled,
                                notAnnulled: e.not_annulled
                            })
                        } catch (s) {
                            console.error(s), e.error(s)
                        }
                    })),
                    h = () => r(void 0, null, (function*() {
                        const t = {
                            language: i.vuexStore.getters.currentLang,
                            status: 0,
                            currency: i.vuexStore.getters.currency
                        };
                        try {
                            const {
                                items: e
                            } = yield l({
                                name: (0, c.YT)("withdrawal-history"),
                                payload: t
                            });
                            u.value = e
                        } catch (a) {
                            console.error(a), e.error(a)
                        }
                    }));
                return {
                    cancelWithdrawals: w,
                    cancelWithdrawalsData: a,
                    withdrawalHistoryData: u,
                    getHistory: h,
                    clearHistory: d
                }
            }))
        },
        163489: (e, l, t) => {
            t.d(l, {
                Z: () => a
            });
            const a = {
                cell: "Cell_cell_mhm0_",
                leftIcon: "Cell_leftIcon_30kOf",
                icon: "Cell_icon_BXh1f",
                content: "Cell_content_zAppD",
                statusIcon: "Cell_statusIcon_hjdY4",
                titleRow: "Cell_titleRow_OqAdq",
                subtitleRow: "Cell_subtitleRow_I32EG",
                title: "Cell_title_D1v1C",
                success: "Cell_success_Z2W3S",
                subtitle: "Cell_subtitle_C560t",
                time: "Cell_time_WJIqM"
            }
        },
        687953: (e, l, t) => {
            t.d(l, {
                Z: () => a
            });
            const a = {
                successWithdrawal: "SuccessWithdrawal_successWithdrawal_Ay6vH",
                icon: "SuccessWithdrawal_icon_V5vA1",
                title: "SuccessWithdrawal_title_A7AhI",
                description: "SuccessWithdrawal_description_jg4R5",
                balanceInfo: "SuccessWithdrawal_balanceInfo_h6tbL",
                balanceText: "SuccessWithdrawal_balanceText__KvZr",
                balanceValue: "SuccessWithdrawal_balanceValue_tLVrM"
            }
        },
        596708: (e, l, t) => {
            t.d(l, {
                Z: () => a
            });
            const a = {
                root: "WithdrawalCancellation_root_JdwWX",
                buttonReturnMoney: "WithdrawalCancellation_buttonReturnMoney_oolTU",
                disableBoxShadow: "WithdrawalCancellation_disableBoxShadow_XyDoz",
                buttonDeposit: "WithdrawalCancellation_buttonDeposit_UZJb5",
                showMore: "WithdrawalCancellation_showMore_mtA0Z",
                buttonCloseModals: "WithdrawalCancellation_buttonCloseModals_ysSMF",
                mainContainer: "WithdrawalCancellation_mainContainer_cY4Py",
                title: "WithdrawalCancellation_title_k9Uxe",
                subtitleContainer: "WithdrawalCancellation_subtitleContainer_Xf4nz",
                subtitle: "WithdrawalCancellation_subtitle__cMHX",
                cell: "WithdrawalCancellation_cell_RHxXc",
                separator: "WithdrawalCancellation_separator_N08EG",
                line: "WithdrawalCancellation_line_KtqJw",
                text: "WithdrawalCancellation_text_Yt0lh",
                cellSeparator: "WithdrawalCancellation_cellSeparator_H4eQT",
                cells: "WithdrawalCancellation_cells_ptTkP",
                fakeLink: "WithdrawalCancellation_fakeLink_w6Fs_",
                isMobile: "WithdrawalCancellation_isMobile_R9fWh",
                isShowAll: "WithdrawalCancellation_isShowAll_GHAhI"
            }
        }
    }
]);