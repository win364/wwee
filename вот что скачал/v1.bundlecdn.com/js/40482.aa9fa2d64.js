(self["webpackChunk_1win_frontend_main"] = self["webpackChunk_1win_frontend_main"] || []).push([
    [40482], {
        296861: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => b
            });
            var i = n(602262),
                s = n(166252),
                c = n(3577),
                r = n(749963),
                o = n(280894),
                a = n(920346),
                u = n(534862),
                d = n(59394);
            const l = {
                    __name: "NotifyLayout",
                    setup(e) {
                        const t = (0, a.lm)(),
                            l = (0, o.oR)(),
                            h = (0, a.dd)(),
                            {
                                notificationsPosition: p
                            } = (0, u.u)(),
                            g = (0, i.Vh)((() => l.getters.isMobile)),
                            m = (0, i.Vh)((() => h.isModalOpened(d.Ko))),
                            b = (0, s.Fl)((() => g.value && "top" === p.value && m.value)),
                            f = (0, s.RC)((() => n.e(64268).then(n.bind(n, 764268))));
                        return (e, n) => (0, i.SU)(t).store.notifications.length > 0 ? ((0, s.wg)(), (0, s.iD)("div", {
                            key: 0,
                            class: (0, c.C_)([e.$style.root, (0, i.SU)(t).store.notifications.length > 0 && e.$style.visible, !g.value && e.$style.desktop, b.value && e.$style.mobileTop])
                        }, [(0, s.Wm)(r.W3, {
                            name: "notify",
                            tag: "div",
                            "enter-active-class": e.$style.transition,
                            "leave-active-class": e.$style.transition,
                            "enter-from-class": e.$style.transitionEnter,
                            "leave-from-class": e.$style.transitionLeaveFrom,
                            "leave-to-class": e.$style.transitionLeaveTo,
                            "move-class": e.$style.transition,
                            class: (0, c.C_)(e.$style.notificationsContainer)
                        }, {
                            default: (0, s.w5)((() => [((0, s.wg)(!0), (0, s.iD)(s.HY, null, (0, s.Ko)((0, i.SU)(t).store.notifications, (n => {
                                var c, r;
                                return (0, s.wg)(), (0, s.j4)((0, s.LL)(null != (c = n.options.component) ? c : (0, i.SU)(f)), (0, s.dG)({
                                    key: n.id,
                                    ref_for: !0
                                }, n.options.props, {
                                    class: n.options.deleted && e.$style.deleted
                                }, (0, s.mx)(null != (r = n.options.listeners) ? r : {}), {
                                    onClose: e => (0, i.SU)(t).close(n.id)
                                }), null, 16, ["class", "onClose"])
                            })), 128))])),
                            _: 1
                        }, 8, ["enter-active-class", "leave-active-class", "enter-from-class", "leave-from-class", "leave-to-class", "move-class", "class"]), n[0] || (n[0] = (0, s._)("div", null, null, -1))], 2)) : (0, s.kq)("", !0)
                    }
                },
                h = {
                    root: "NotifyLayout_root_pzv5J",
                    desktop: "NotifyLayout_desktop_HN13V",
                    mobileTop: "NotifyLayout_mobileTop_W0kBS",
                    notificationsContainer: "NotifyLayout_notificationsContainer_kH8Gb",
                    deleted: "NotifyLayout_deleted_ItNjY",
                    transitionEnter: "NotifyLayout_transitionEnter_aqCzN",
                    transitionLeaveTo: "NotifyLayout_transitionLeaveTo_uZh78",
                    transitionLeaveFrom: "NotifyLayout_transitionLeaveFrom_a71Fh",
                    transition: "NotifyLayout_transition_PL_RG"
                };
            var p = n(348118);
            const g = {};
            g["$style"] = h;
            const m = (0, p.Z)(l, [
                    ["__cssModules", g]
                ]),
                b = m
        },
        535382: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => g
            });
            var i = n(166252),
                s = n(749963),
                c = n(602262),
                r = n(3577),
                o = n(280894),
                a = n(615459);
            const u = (0, i.aZ)({
                    __name: "TopNotification",
                    setup(e) {
                        (0, s.sj)((e => ({
                            "6fe3e974": (0, c.SU)(d),
                            b79832f8: (0, c.SU)(n)
                        })));
                        const t = (0, o.oR)(),
                            {
                                height: n,
                                isVisible: u,
                                position: d
                            } = (0, a.j)();
                        return (e, n) => ((0, i.wg)(), (0, i.iD)("div", {
                            class: (0, r.C_)([e.$style.root, !(0, c.SU)(t).getters.isMobile && e.$style.desktop, (0, c.SU)(u) && e.$style.visible])
                        }, [(0, i.Wm)(s.uT, {
                            name: "slide-" + ((0, c.SU)(t).getters.isMobile ? "mobile" : "desktop")
                        }, {
                            default: (0, i.w5)((() => [(0, c.SU)(u) ? ((0, i.wg)(), (0, i.iD)("div", {
                                key: 0,
                                class: (0, r.C_)(e.$style.messageContainer)
                            }, (0, r.zw)((0, c.SU)(t).getters.langCommon.notify.no_connection), 3)) : (0, i.kq)("", !0)])),
                            _: 1
                        }, 8, ["name"])], 2))
                    }
                }),
                d = {
                    root: "TopNotification_root_pj4Qx",
                    visible: "TopNotification_visible_QkcJq",
                    desktop: "TopNotification_desktop_krl9m",
                    messageContainer: "TopNotification_messageContainer_XVhIE"
                };
            var l = n(348118);
            const h = {};
            h["$style"] = d;
            const p = (0, l.Z)(u, [
                    ["__cssModules", h]
                ]),
                g = p
        },
        634030: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                activeBalanceSecondaryList: () => N,
                activeCurrencySecondaryList: () => R,
                appHashData: () => xe,
                availableCurrencies: () => I,
                availableMulticurrency: () => B,
                balance: () => C,
                balanceCurrentEmpty: () => x,
                balanceSecondaryList: () => Q,
                balanceTotalEmpty: () => M,
                bonusAmount: () => ae,
                bonusCasino: () => ue,
                casinoAllowed: () => H,
                country: () => O,
                countryDefaultPayment: () => Z,
                countrySubdivision: () => D,
                currency: () => A,
                currencySecondaryList: () => T,
                currencySymbol: () => q,
                favourites: () => $,
                fullscreen: () => W,
                hasBonus: () => ie,
                hideDownloadMobileApp: () => fe,
                inactiveBalanceSecondaryList: () => E,
                inactiveCurrencySecondaryList: () => U,
                ip: () => Me,
                isAllowedInvest: () => me,
                isAllowedTv: () => Ge,
                isBlockable: () => Oe,
                isCoeffChangeable: () => oe,
                isCountryAllowed: () => Fe,
                isDesktopApp: () => Y,
                isDisabledFastsport: () => Ie,
                isMobile: () => z,
                isOnlyCryptoGeo: () => L,
                isPwaCardAllowed: () => qe,
                isPwaIgnored: () => ve,
                isRegLs: () => Le,
                isRuCountry: () => Qe,
                isShowDepositModalAfterLogin: () => ne,
                isSiteForbidden: () => K,
                isSiteFullyForbidden: () => V,
                isSitePartiallyForbidden: () => j,
                isThreeSymbolsCurrency: () => ge,
                isTradingAllowed: () => Pe,
                isTwoSymbolsCurrency: () => pe,
                isUACountry: () => Te,
                isVipUser: () => de,
                lastDeposits: () => J,
                licenseText: () => De,
                locale: () => ye,
                localeCode: () => ke,
                navMenuOpened: () => X,
                profileInfo: () => be,
                registrationCurrency: () => F,
                responsibleGamingText: () => Ae,
                rightMenu: () => ee,
                showBalance: () => te,
                showLocaleFlag: () => Ce,
                showVipDomain: () => le,
                socialLinks: () => _e,
                socialsWithLinks: () => Se,
                supportNumber: () => we,
                timeZone: () => se,
                user: () => ce,
                userId: () => re,
                viewCurrency: () => P,
                viewCurrencySymbol: () => G,
                vipDomain: () => he
            });
            var i = n(381711),
                s = n(479697),
                c = n(932256),
                r = n(438643),
                o = n(384754),
                a = n(370359),
                u = n(631526),
                d = n(893279),
                l = n(643422),
                h = n(153415),
                p = n(135058),
                g = n(878417),
                m = n(142291),
                b = n(644540),
                f = n(112808),
                v = Object.defineProperty,
                y = Object.getOwnPropertySymbols,
                w = Object.prototype.hasOwnProperty,
                _ = Object.prototype.propertyIsEnumerable,
                S = (e, t, n) => t in e ? v(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                k = (e, t) => {
                    for (var n in t || (t = {})) w.call(t, n) && S(e, n, t[n]);
                    if (y)
                        for (var n of y(t)) _.call(t, n) && S(e, n, t[n]);
                    return e
                };
            const C = (e, t) => {
                    var n, i, s;
                    return (null == (s = null == (n = t.user) ? void 0 : n.balanceMap) ? void 0 : s[null == (i = t.user) ? void 0 : i.currency]) || 0
                },
                x = (e, t) => 0 === t.balance,
                M = (e, t) => {
                    var n;
                    return !(null == (n = t.user) ? void 0 : n.balanceMap) || 0 === Object.values(t.user.balanceMap).reduce(((e, t) => e + t), 0)
                },
                O = e => e.country,
                L = e => {
                    var t;
                    return (0, m.c)((null == (t = f.appConfig.options.geoRestrictions) ? void 0 : t.onlyCrypto) || [], e.country, e.countrySubdivision)
                },
                D = e => e.countrySubdivision,
                A = (e, t) => {
                    var n, s;
                    return (null == (n = t.user) ? void 0 : n.currency) ? null == (s = t.user) ? void 0 : s.currency : f.appConfig.options.defaultCurrency ? f.appConfig.options.defaultCurrency : t.currentLang === c.AOg ? i.xn : i.qY
                },
                F = (e, t) => {
                    var n;
                    return t.isOnlyCryptoGeo ? i.NE.USDT : null != (n = f.appConfig.options.defaultCurrency) ? n : t.availableCurrencies[0]
                },
                P = (e, t) => (0, h.oS)(t.currency) ? i.NE.USD : t.currency,
                q = (e, t) => r.wO[t.currency],
                G = (e, t) => r.wO[t.viewCurrency],
                I = (e, t, n) => {
                    var s, c;
                    const o = (0, g.L)(),
                        {
                            isCryptoRegistrationAllowed: a
                        } = (0, u.p)(),
                        {
                            isTonAvailable: l
                        } = (0, d.a)();
                    let h = null != (s = f.appConfig.options.currencies) ? s : r.Hw;
                    if (t["permissions/isTester"] || (h = h.filter((e => e !== i.NE.USDC))), o.isAuthed || t.isOnlyCryptoGeo || a.value || (h = h.filter((e => !r.Mf[e].crypto))), t.isOnlyCryptoGeo && (h = h.filter((e => {
                            var n, i;
                            const s = o.isAuthed && (null == (i = null == (n = t.user) ? void 0 : n.balanceMap) ? void 0 : i[e]);
                            return r.Mf[e].crypto || s
                        }))), !l.value) {
                        const e = new Set([i.NE.TON]);
                        h = h.filter((t => !e.has(t)))
                    }
                    t.isUACountry && (h = h.filter((e => {
                        var n, s;
                        const c = ![i.NE.RUB, i.NE.BYN].includes(e),
                            r = o.isAuthed && (null == (s = null == (n = t.user) ? void 0 : n.balanceMap) ? void 0 : s[e]);
                        return c || r
                    }))), !o.isAuthed && t.isRuCountry && (h = h.filter((e => i.NE.UAH !== e)));
                    const p = new Set(null != (c = f.appConfig.options.disabledInactiveCurrencies) ? c : []);
                    return h = h.filter((e => {
                        var n, i;
                        return !p.has(e) || (null == (i = null == (n = t.user) ? void 0 : n.activatedMap) ? void 0 : i[e])
                    })), t.isOnlyCryptoGeo && (h = h.filter((e => r.Mf[e].crypto))), h
                },
                T = (e, t) => t.availableCurrencies.filter((e => e !== t.currency)),
                Q = ({
                    user: e
                }, t) => t.currencySecondaryList.map((t => {
                    var n, i;
                    return {
                        currency: t,
                        amount: (null == (n = null == e ? void 0 : e.balanceMap) ? void 0 : n[t]) || 0,
                        activated: (null == (i = null == e ? void 0 : e.activatedMap) ? void 0 : i[t]) || !1
                    }
                })),
                N = (e, t) => t.balanceSecondaryList.filter((e => e.activated)),
                E = (e, t) => t.balanceSecondaryList.filter((e => !e.activated)),
                R = (e, t) => t.activeBalanceSecondaryList.map((e => e.currency)),
                U = (e, t) => {
                    const {
                        isLimitationOfFiatCurrencies: n
                    } = (0, l.I)();
                    let i = t.inactiveBalanceSecondaryList.map((e => e.currency));
                    const s = !r.Mf[t.currency].crypto,
                        c = t.activeCurrencySecondaryList.filter((e => !r.Mf[e].crypto)).length,
                        o = Number(s) + c;
                    return (n.value && o >= 2 && !t["permissions/isTester"] || t.isOnlyCryptoGeo) && (i = i.filter((e => r.Mf[e].crypto))), i
                },
                B = (e, t) => {
                    var n;
                    return t.availableCurrencies.length > 1 || t.inactiveBalanceSecondaryList.length > 0 || !t.availableCurrencies.includes(null == (n = t.user) ? void 0 : n.currency)
                },
                K = e => {
                    var t, n, i, s, r, a, u, d, l, h, b, v;
                    const y = (0, g.L)();
                    return !!o.Rb || !(0, m.c)([], e.country, e.countrySubdivision) && ((!(0, m.c)([...null != (n = null == (t = f.appConfig.options.geoRestrictions) ? void 0 : t.partiallyForbiddenExceptAuthed) ? n : [], ...null != (s = null == (i = f.appConfig.options.geoRestrictions) ? void 0 : i.fullyForbiddenExceptAuthed) ? s : []], e.country, e.countrySubdivision) || !y.isAuthedByToken) && (!c.UgI.includes(window.location.hostname) && (!p.oC.value.isPrerender && (!p.oC.value.isSearchBot && (("1wscju.top" !== window.location.hostname || !["KZ", "UA", "PE"].includes(e.country) || !y.isAuthed) && (0, m.c)([...null != (a = null == (r = f.appConfig.options.geoRestrictions) ? void 0 : r.partiallyForbidden) ? a : [], ...null != (d = null == (u = f.appConfig.options.geoRestrictions) ? void 0 : u.partiallyForbiddenExceptAuthed) ? d : [], ...null != (h = null == (l = f.appConfig.options.geoRestrictions) ? void 0 : l.fullyForbidden) ? h : [], ...null != (v = null == (b = f.appConfig.options.geoRestrictions) ? void 0 : b.fullyForbiddenExceptAuthed) ? v : []], e.country, e.countrySubdivision))))))
                },
                V = (e, t) => {
                    var n, i, s, c;
                    return !!o.Rb || !!t.isSiteForbidden && (0, m.c)([...null != (i = null == (n = f.appConfig.options.geoRestrictions) ? void 0 : n.fullyForbidden) ? i : [], ...null != (c = null == (s = f.appConfig.options.geoRestrictions) ? void 0 : s.fullyForbiddenExceptAuthed) ? c : []], e.country, e.countrySubdivision)
                },
                j = (e, t) => t.isSiteForbidden && !t.isSiteFullyForbidden,
                Z = e => c.h0b[e.country],
                H = e => !0,
                $ = e => t => e.favourites[t] || [],
                W = e => e.fullscreen,
                Y = e => e.isDesktopApp,
                z = e => e.isMobile,
                J = e => e.lastDeposits,
                X = e => e.navMenuOpened,
                ee = e => e.rightMenu,
                te = e => e.showBalance,
                ne = (e, t) => {
                    var n;
                    return "B" === (null == (n = t.user) ? void 0 : n.toDepPaymentFormGroup)
                },
                ie = () => !0,
                se = () => -1 * (new Date).getTimezoneOffset(),
                ce = (e, t) => t.isSiteForbidden ? {} : e.user,
                re = (e, t) => {
                    var n, i;
                    return null != (i = null == (n = t.user) ? void 0 : n.id) ? i : null
                },
                oe = (e, t) => {
                    var n, i;
                    return null == (i = null == (n = t.user) ? void 0 : n.is_coeff_changeable) || i
                },
                ae = (e, t) => {
                    var n;
                    return (null == (n = t.user) ? void 0 : n.bonus_amount) || 0
                },
                ue = (e, t) => {
                    var n;
                    return (null == (n = t.user) ? void 0 : n.bonus_casino) || 0
                },
                de = (e, t) => {
                    var n;
                    return !1 === (null == (n = t.user) ? void 0 : n.is_vip_domain) && t.vipDomain
                },
                le = (e, t) => !(0, p.So)() && t.isVipUser && f.appConfig.modules.vipDomain,
                he = (e, t) => {
                    var n;
                    return null == (n = t.user) ? void 0 : n.personal_domain
                },
                pe = (e, t) => 2 === t.viewCurrency.length,
                ge = (e, t) => 3 === t.viewCurrency.length,
                me = (e, t, n, i) => f.appConfig.modules.invest && !i.isBlockable && i.user.has_investments && ["ru"].includes(i.currentLang),
                be = ({
                    user: {
                        name: e,
                        country: t,
                        phone: n,
                        email: i,
                        birthday: s
                    }
                }) => ({
                    name: e,
                    country: t,
                    phone: n,
                    email: i,
                    birthday: Number.parseInt(s, 10)
                }),
                fe = (e, t) => {
                    const n = (0, g.L)();
                    return b.A || t.isPwaIgnored || n.isAuthed && t.currency !== i.xn
                },
                ve = e => e.isPwaIgnored,
                ye = e => e.locale && e.localeData ? Object.values(e.localeData).find((({
                    id: t
                }) => e.locale === t)) : null,
                we = (e, t) => t.locale ? t.locale.supportNumber : t.currentLang === c.AOg ? f.appConfig.phone : null,
                _e = (e, t) => {
                    var n, i, r, o, a, u, d, l, h, p;
                    const g = c.bPV.isoKeysByLang.en,
                        m = (e = {}, n = t.currentLang) => Object.fromEntries(Object.entries(e).map((([e, {
                            lang: t
                        }]) => {
                            var i;
                            const s = null != (i = t[c.bPV.isoKeysByLang[n]]) ? i : t[n];
                            return [e, s]
                        })).filter((([, e]) => !!e)));
                    if (f.appConfig.options.socialsOnlyLocal) return m(null == (i = null == (n = e.localeData) ? void 0 : n.local) ? void 0 : i.social);
                    const b = k(k({}, m(null == (o = null == (r = e.localeData) ? void 0 : r.global) ? void 0 : o.social)), m(null == (u = null == (a = e.localeData) ? void 0 : a.local) ? void 0 : u.social)),
                        v = k(k({}, m(null == (l = null == (d = e.localeData) ? void 0 : d.global) ? void 0 : l.social, g)), m(null == (p = null == (h = e.localeData) ? void 0 : h.local) ? void 0 : p.social, g));
                    return (0, s.Z)(b) ? v : b
                },
                Se = (e, t) => Object.values(a.Z).filter((e => t.socialLinks[e])),
                ke = (e, t) => {
                    var n, i;
                    return null == (i = null == (n = t.locale) ? void 0 : n.code) ? void 0 : i.toLowerCase()
                },
                Ce = (e, t) => {
                    var n, i;
                    return Boolean((null == (n = t.locale) ? void 0 : n.id) !== c.guZ && (null == (i = t.locale) ? void 0 : i.code))
                },
                xe = e => e.appHashData,
                Me = e => e.ip,
                Oe = e => {
                    var t;
                    return c.lHM.includes(null == (t = e.appHashData) ? void 0 : t.domain)
                },
                Le = () => !1,
                De = (e, t) => {
                    if (o.nI.includes(f.appConfig.domain)) return t.langCommon.license.game;
                    const n = t.isBlockable;
                    return n ? t.langCommon.license.blockable : t.langCommon.license.description
                },
                Ae = (e, t) => {
                    if (o.nI.includes(f.appConfig.domain)) return t.langCommon.responsibleGaming.game;
                    const n = t.isBlockable;
                    return n ? t.langCommon.responsibleGaming.blockable : ""
                },
                Fe = e => t => t.includes(e.country),
                Pe = (e, t) => t.isCountryAllowed(c.v4t),
                qe = (e, t) => !(b.A || (0, p.So)() || t.isPwaIgnored || t.isDesktopApp),
                Ge = (e, t) => f.appConfig.modules.tv && !t.isBlockable && c.flK.includes(t.currentLang),
                Ie = (e, t) => t.isCountryAllowed(c.l3u),
                Te = e => "UA" === e.country,
                Qe = e => "RU" === e.country
        },
        228513: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                checkSlide: () => O,
                clearProfile: () => _,
                clearTelegramHash: () => y,
                setAppHashData: () => B,
                setBalance: () => k,
                setBalanceData: () => S,
                setBalanceForCurrency: () => C,
                setCountry: () => A,
                setCountrySubdivision: () => P,
                setCurrency: () => T,
                setFullscreen: () => G,
                setIp: () => F,
                setIsDesktopApp: () => f,
                setIsMobile: () => I,
                setIsPwaIgnored: () => N,
                setLastDeposits: () => q,
                setLocale: () => U,
                setLocaleData: () => R,
                setShowBalance: () => Q,
                setTelegramHash: () => v,
                setUserCountry: () => x,
                setUserPhoneVerification: () => K,
                setUserPokerNickname: () => M,
                setUserPreferCollapsedOddsGroups: () => E,
                showNavMenu: () => L,
                showRightMenu: () => D,
                userProfile: () => w
            });
            var i = n(836808),
                s = n.n(i),
                c = n(932256),
                r = n(884297),
                o = Object.defineProperty,
                a = Object.defineProperties,
                u = Object.getOwnPropertyDescriptors,
                d = Object.getOwnPropertySymbols,
                l = Object.prototype.hasOwnProperty,
                h = Object.prototype.propertyIsEnumerable,
                p = (e, t, n) => t in e ? o(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                g = (e, t) => {
                    for (var n in t || (t = {})) l.call(t, n) && p(e, n, t[n]);
                    if (d)
                        for (var n of d(t)) h.call(t, n) && p(e, n, t[n]);
                    return e
                },
                m = (e, t) => a(e, u(t)),
                b = (e, t) => {
                    var n = {};
                    for (var i in e) l.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                    if (null != e && d)
                        for (var i of d(e)) t.indexOf(i) < 0 && h.call(e, i) && (n[i] = e[i]);
                    return n
                };
            const f = (e, t) => {
                    e.isDesktopApp = !!t
                },
                v = (e, t) => {
                    r.J_.set(r.sW, t), e.telegramHash = t
                },
                y = e => {
                    e.telegramHash = null
                },
                w = (e, t) => {
                    const n = t,
                        {
                            meta: i = {},
                            balanceData: s = {}
                        } = n,
                        c = b(n, ["meta", "balanceData"]),
                        r = s,
                        {
                            primary: {
                                currency: o,
                                amount: a
                            } = {}
                        } = r,
                        u = b(r, ["primary"]),
                        d = g(g(g(g({}, e.user.balanceMap), u), o && {
                            [o]: a
                        }), t.balanceMap),
                        l = m(g(g(g({}, e.user), c), i), {
                            balanceMap: d
                        }),
                        {
                            country: h
                        } = l,
                        p = b(l, ["country"]);
                    e.user = m(g({}, p), {
                        country: null == h ? void 0 : h.toLowerCase()
                    }), void 0 !== t.match_groups_collapsed && (e.userPreferCollapsedOddsGroups = t.match_groups_collapsed)
                },
                _ = e => {
                    e.user = {}
                },
                S = (e, t) => {
                    for (const [n, i] of Object.entries(t))
                        for (const [t, s] of Object.entries(i)) e.user[n] || (e.user[n] = {}), e.user[n][t] = s
                },
                k = ({
                    user: e
                }, t, n = e.currency) => {
                    e.balanceMap[n] = t
                },
                C = ({
                    user: e
                }, {
                    amount: t,
                    currency: n,
                    timestamp: i
                }) => {
                    var s;
                    const c = null == (s = e.balanceTimestampMap) ? void 0 : s[n];
                    c && i && c > i || (e.balanceMap[n] = t)
                },
                x = ({
                    user: e
                }, t) => {
                    e.country = t.toLowerCase()
                },
                M = (e, t) => {
                    e.user.poker_nickname = t
                },
                O = (e, t) => {
                    e.components.slider.init = !0, e.components.slider.active = t
                },
                L = (e, t) => {
                    e.navMenuOpened = t
                },
                D = (e, t) => {
                    e.rightMenu = t
                },
                A = (e, t) => {
                    e.country || (e.country = t)
                },
                F = (e, t) => {
                    e.ip = t
                },
                P = (e, t) => {
                    e.countrySubdivision = t
                },
                q = (e, t) => {
                    e.lastDeposits = t
                },
                G = (e, t) => {
                    e.fullscreen = void 0 === t ? !e.fullscreen : t
                },
                I = (e, t) => {
                    e.isMobile = t
                },
                T = (e, t) => {
                    e.user.currency = t
                },
                Q = (e, t) => {
                    e.showBalance = t
                },
                N = (e, t) => {
                    r.J_.set(r.te, t), e.isPwaIgnored = t
                },
                E = (e, t) => {
                    e.userPreferCollapsedOddsGroups = t
                },
                R = (e, t) => {
                    e.localeData = t
                },
                U = (e, t) => {
                    const n = Number(s().get(c.S7x));
                    t !== n && r.J_.remove(r.Jj), e.locale = t
                },
                B = (e, t) => {
                    e.appHashData = t
                },
                K = (e, t) => {
                    e.user.phone_verification = t
                }
        },
        46452: (e, t, n) => {
            "use strict";
            n.d(t, {
                NC: () => o,
                fZ: () => r,
                n2: () => c,
                o_: () => a
            });
            var i = n(932256);
            const s = new WeakMap,
                c = (e, t, n, c) => {
                    var r, o;
                    return null != (o = s.get(c)) ? o : s.set(c, new e(null != (r = i.bPV.isoKeysByLang[n]) ? r : n, c)[t]).get(c)
                },
                r = {},
                o = {
                    maximumFractionDigits: 2
                },
                a = {
                    numberingSystem: "latn",
                    style: "currency"
                }
        },
        753931: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                initLang: () => w,
                loadLanguages: () => S,
                setCurrentLanguage: () => _,
                switchLanguage: () => k
            });
            var i = n(932256),
                s = n(479810),
                c = n(495119),
                r = n(878417),
                o = n(606982),
                a = n(377823),
                u = n(470781),
                d = n(112808),
                l = Object.defineProperty,
                h = Object.getOwnPropertySymbols,
                p = Object.prototype.hasOwnProperty,
                g = Object.prototype.propertyIsEnumerable,
                m = (e, t, n) => t in e ? l(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                b = (e, t) => {
                    for (var n in t || (t = {})) p.call(t, n) && m(e, n, t[n]);
                    if (h)
                        for (var n of h(t)) g.call(t, n) && m(e, n, t[n]);
                    return e
                },
                f = (e, t, n) => new Promise(((i, s) => {
                    var c = e => {
                            try {
                                o(n.next(e))
                            } catch (t) {
                                s(t)
                            }
                        },
                        r = e => {
                            try {
                                o(n.throw(e))
                            } catch (t) {
                                s(t)
                            }
                        },
                        o = e => e.done ? i(e.value) : Promise.resolve(e.value).then(c, r);
                    o((n = n.apply(e, t)).next())
                }));
            const v = e => f(void 0, null, (function*() {
                    var t;
                    const n = () => f(void 0, null, (function*() {
                        return yield(0, o.g)(1e3), v(e)
                    }));
                    try {
                        const i = `/fss/translations/${e}?domain=${d.appConfig.domain}&appName=web`,
                            c = yield s.apiClient.get(i);
                        return null != (t = c.data) ? t : n()
                    } catch (i) {
                        console.error("Unable to fetch lang data", {
                            originalError: i
                        })
                    }
                    return n()
                })),
                y = (e, t) => {
                    (0, a.Wi)("lang");
                    const n = (0, r.L)();
                    n.isAuthed && t.dispatch("updateLocale", e, {
                        root: !0
                    }), t.commit("resolvePromiseByName", c.l.LANG, {
                        root: !0
                    })
                },
                w = e => f(void 0, null, (function*() {
                    try {
                        const t = e.rootGetters.currentLang;
                        if (e.dispatch("setCurrentLanguage", {
                                lang: t,
                                isInitial: !0
                            }), e.state.text) return void y(t, e);
                        const n = yield v(t);
                        e.commit("setLangData", n), y(t, e)
                    } catch (t) {
                        console.error("Unable to load lang", {
                            originalError: t
                        })
                    }
                })),
                _ = (e, t) => {
                    const {
                        lang: n,
                        isInitial: s = !1
                    } = (() => (null == t ? void 0 : t.ignoreAvailability) ? b({}, t) : t.lang === i.bPV.LANG_RU.lang && i.BOQ ? {
                        lang: i.bPV.DEFAULT.lang
                    } : (0, u.Mv)(t.lang) ? b({}, t) : {
                        lang: d.appConfig.options.defaultLang || i.bPV.DEFAULT.lang
                    })();
                    window.lang.save(n), e.state.current = n, s ? document.documentElement.setAttribute("lang", i.bPV.isoKeysByLang[n]) : e.dispatch("updateLocale").then((() => {
                        window.location.reload()
                    }))
                },
                S = e => f(void 0, [e], (function*({
                    commit: e,
                    rootGetters: t
                }) {
                    const {
                        data: n = []
                    } = yield t.socket.send("LOCALIZATION:languages-get");
                    e("setLanguages", n)
                })),
                k = (e, t) => f(void 0, null, (function*() {
                    e.dispatch("setCurrentLanguage", {
                        lang: t,
                        isInitial: !0
                    });
                    const n = yield v(t);
                    e.commit("setLangData", n), y(t, e)
                }))
        },
        576386: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                currentLang: () => P,
                currentLangIsoCode: () => q,
                dateTimeFormat: () => T,
                declensionWord: () => x,
                formatLanguageMessage: () => j,
                formatPercent: () => E,
                getCommonLangObjectByKey: () => K,
                getCommonWordByKey: () => B,
                getDesktopWordByKey: () => U,
                getNamespacedWordByKey: () => R,
                getWordByKey: () => V,
                isSNGCountryLanguage: () => G,
                lang: () => F,
                langCommon: () => D,
                langDesktop: () => O,
                langMobile: () => L,
                langPaymentMethods: () => A,
                langText: () => M,
                languages: () => Z,
                localeFormat: () => I,
                numberCurrencyFormat: () => N,
                numberFormat: () => Q
            });
            var i = n(934405),
                s = n(845542),
                c = n(932256),
                r = n(438643),
                o = n(56101),
                a = n(72258),
                u = n(773145),
                d = n(563637),
                l = n(470781),
                h = n(112808),
                p = n(46452),
                g = Object.defineProperty,
                m = Object.defineProperties,
                b = Object.getOwnPropertyDescriptors,
                f = Object.getOwnPropertySymbols,
                v = Object.prototype.hasOwnProperty,
                y = Object.prototype.propertyIsEnumerable,
                w = (e, t, n) => t in e ? g(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                _ = (e, t) => {
                    for (var n in t || (t = {})) v.call(t, n) && w(e, n, t[n]);
                    if (f)
                        for (var n of f(t)) y.call(t, n) && w(e, n, t[n]);
                    return e
                },
                S = (e, t) => m(e, b(t));
            const k = (e, t, n = !0) => {
                    const i = t.split(".");
                    let s = e;
                    for (const c of i)
                        if (s = s[c], !s) return n ? t : null;
                    return "string" === typeof s ? s : n ? t : null
                },
                C = (e, t) => {
                    const n = t.split(".");
                    let i = e;
                    for (const s of n)
                        if (i = i[s], !i) return;
                    return i
                },
                x = (e, t) => (e, n) => {
                    if ("string" === typeof n) return n;
                    let i = Number(1 !== e);
                    return t.currentLang !== c.hnV && (e % 10 === 1 && e % 100 !== 11 && (i = 0), e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) && (i = 1), i = 2), n[i]
                },
                M = e => e.text,
                O = e => {
                    var t;
                    return null == (t = e.text) ? void 0 : t.desktop
                },
                L = e => {
                    var t;
                    return null == (t = e.text) ? void 0 : t.mobile
                },
                D = e => {
                    var t;
                    return null == (t = e.text) ? void 0 : t.common
                },
                A = e => {
                    var t;
                    return null == (t = e.text) ? void 0 : t.paymentMethods
                },
                F = (e, t, n, i) => i.isMobile ? t.langMobile : t.langDesktop,
                P = e => {
                    var t;
                    return null != (t = e.current) ? t : c.bPV.DEFAULT.lang
                },
                q = (e, t) => c.bPV.isoKeysByLang[t.currentLang],
                G = (e, t) => c.Rmi.includes(t.currentLang),
                I = ({
                    current: e
                }) => (t = "") => {
                    var n, s;
                    return (0, i.Kn)(t) ? null != (s = null != (n = t[e]) ? n : t[c.hnV]) ? s : "" : null != t ? t : ""
                },
                T = ({
                    current: e
                }) => (t = p.fZ) => (0, p.n2)(Intl.DateTimeFormat, "format", e, t),
                Q = ({
                    current: e
                }) => (t = p.NC) => (0, p.n2)(Intl.NumberFormat, "format", e, t),
                N = ({
                    current: e
                }) => (t, n = {}) => i => {
                    var s, c;
                    const o = Intl.NumberFormat(e, S(_(_({}, p.o_), n), {
                        currency: t
                    }));
                    return null != (c = null == (s = o.formatToParts) ? void 0 : s.call(o, i).map((({
                        type: e,
                        value: n
                    }) => {
                        var i;
                        return "currency" === e ? null != (i = r.wO[t]) ? i : t : n
                    })).join("")) ? c : o.format(i)
                },
                E = (e, t) => e => Number(e).toLocaleString(t.currentLang, {
                    style: "percent"
                }),
                R = e => (t, n) => {
                    const i = [...t.split("."), ...n.split(".")];
                    return i.reduce(((e, t) => null == e ? void 0 : e[t]), e.text) || n
                },
                U = (e, t) => (e, n = !0) => k(t.langDesktop, e, n),
                B = (e, t) => (e, n = !0) => k(t.langCommon, e, n),
                K = (e, t) => e => C(t.langCommon, e),
                V = (e, t) => (e, n = !0) => k(t.langText, e, n),
                j = (e, t) => ({
                    key: e,
                    args: n,
                    returnCode: i = !0
                }) => {
                    const s = t.getDesktopWordByKey(e, i),
                        c = (n || []).map((e => e.langKey ? t.formatLanguageMessage({
                            key: e.langKey,
                            args: e.langArgs,
                            returnCode: i
                        }) : e));
                    return (0, d.Uw)(s, ...c)
                },
                Z = (e, t, n, i) => {
                    const r = new Set(e.languages.map((e => e.language))),
                        {
                            isNewLanguagesEnabled: d,
                            newLanguages: p
                        } = (0, a.e)(),
                        {
                            isTagalLanguagesEnabled: g
                        } = (0, u.C)(),
                        {
                            exclusionLanguages: m
                        } = (0, o.e)(),
                        b = c.bPV.items.filter((({
                            lang: e
                        }) => {
                            if (!(0, l.Mv)(e)) return !1;
                            if (e === c.bPV.LANG_TL.isoKey && !g.value && !i["permissions/isTester"]) return !1;
                            const t = d.value || i["permissions/isTester"] || !p.has(e);
                            return !!t && (!c.BOQ || e !== c.bPV.LANG_RU.lang)
                        })),
                        f = b.reduce(((e, n) => {
                            const i = r.has(n.lang) && !h.appConfig.options.hideSuggestedLanguages ? e.popular : e.others;
                            return i.push(S(_({}, n), {
                                name: t.langCommon.languages.list[n.lang]
                            })), e
                        }), {
                            popular: [],
                            others: []
                        }),
                        {
                            popular: v
                        } = f,
                        {
                            others: y
                        } = f,
                        w = new Map(e.languages.map((e => [e.language, e.index])));
                    return v.sort(((e, t) => w.get(e.lang) - w.get(t.lang))), y.sort(((e, t) => e.name.localeCompare(t.name, void 0, {
                        sensitivity: "base"
                    }))), t.isUACountry && (0, s.Z)(v, (e => e.lang === c.AOg)), {
                        popular: v,
                        others: y,
                        langs: b
                    }
                }
        },
        445069: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                setLangData: () => i,
                setLanguages: () => s
            });
            const i = (e, t) => {
                    e.text = t
                },
                s = (e, t) => {
                    e.languages = [...t.languages]
                }
        },
        513962: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var i = n(753931),
                s = n(576386),
                c = n(445069);
            const r = {
                    state() {
                        const {
                            lang: e,
                            translations: t
                        } = window.lang.defaultState;
                        return {
                            current: e,
                            text: t,
                            languages: []
                        }
                    },
                    mutations: c,
                    actions: i,
                    getters: s
                },
                o = r
        },
        606982: (e, t, n) => {
            "use strict";
            n.d(t, {
                g: () => i
            });
            const i = e => new Promise((t => {
                setTimeout(t, e)
            }))
        },
        82223: (e, t, n) => {
            "use strict";
            var i = n(757893),
                s = n.n(i),
                c = n(637924),
                r = n.n(c),
                o = n(869349),
                a = n.n(o),
                u = n(992197),
                d = n.n(u),
                l = n(295016),
                h = n.n(l),
                p = n(753101),
                g = n.n(p),
                m = n(202008),
                b = n.n(m),
                f = n(779915),
                v = n.n(f),
                y = n(874418),
                w = n.n(y),
                _ = n(599119);
            const S = n.p + "img/luckystar-white.6008c50b9.svg";
            var k = n(669926),
                C = n.n(k),
                x = n(495140),
                M = n.n(x),
                O = n(959549),
                L = n.n(O),
                D = n(309138),
                A = n.n(D),
                F = n(24587),
                P = n.n(F),
                q = n(940881),
                G = n.n(q),
                I = n(298947),
                T = n.n(I),
                Q = n(987137),
                N = n.n(Q),
                E = n(640271),
                R = n.n(E),
                U = n(537604),
                B = n.n(U),
                K = n(268084),
                V = n.n(K),
                j = n(833707),
                Z = n.n(j),
                H = n(132887),
                $ = n.n(H),
                W = n(47096),
                Y = n.n(W),
                z = n(803679),
                J = n.n(z),
                X = n(698424),
                ee = n.n(X),
                te = n(277083),
                ne = n.n(te),
                ie = n(925205),
                se = n.n(ie),
                ce = n(715764),
                re = n(494515),
                oe = n.n(re),
                ae = n(649737),
                ue = n.n(ae),
                de = n(155677),
                le = n.n(de),
                he = n(594088),
                pe = n.n(he),
                ge = n(129664),
                me = n.n(ge),
                be = n(357523),
                fe = n.n(be),
                ve = n(5792),
                ye = n.n(ve),
                we = n(319771);
            const _e = n.p + "media/pwa-ios-luckystar-en.hevc.fea45098.mp4",
                Se = n.p + "media/pwa-ios-luckystar-en.be28330c.mp4",
                ke = n.p + "media/pwa-ios-luckystar-ru.hevc.9b4cad06.mp4",
                Ce = n.p + "media/pwa-ios-luckystar-ru.d5c502ae.mp4",
                xe = n.p + "img/logo-luckystar.0b86b0d62.svg";
            ce.p.PLATFORM_ANDROID, pe(), le(), ce.p.PLATFORM_IOS, fe(), me(), ye(), v(), w(), h(), g(), a(), d(), b(), se(), V(), Z(), $(), Y(), J(), ee(), ne(), B(), R(), N(), T(), P(), G(), L(), A(), s(), r(), C(), M(), ue(), oe()
        },
        276826: (e, t, n) => {
            "use strict";
            n.d(t, {
                mainAssets: () => ot
            });
            const i = n.p + "img/1win-normal.5a6f93b4b.svg",
                s = n.p + "img/1win-white.23d8929b3.svg";
            var c = n(475781),
                r = n.n(c),
                o = n(588490),
                a = n.n(o),
                u = n(293693),
                d = n.n(u),
                l = n(582576),
                h = n.n(l),
                p = n(251972),
                g = n.n(p),
                m = n(903588),
                b = n.n(m),
                f = n(187722),
                v = n.n(f),
                y = n(409948),
                w = n.n(y),
                _ = n(242835),
                S = n.n(_),
                k = n(309443),
                C = n.n(k),
                x = n(759456),
                M = n.n(x),
                O = n(31716),
                L = n.n(O),
                D = n(906349),
                A = n.n(D),
                F = n(604955),
                P = n.n(F),
                q = n(149592),
                G = n.n(q),
                I = n(902327),
                T = n.n(I),
                Q = n(745751),
                N = n.n(Q),
                E = n(992815),
                R = n.n(E),
                U = n(846570),
                B = n.n(U),
                K = n(640600),
                V = n.n(K),
                j = n(126850),
                Z = n.n(j),
                H = n(930472),
                $ = n.n(H),
                W = n(185084),
                Y = n.n(W),
                z = n(659486),
                J = n.n(z),
                X = n(278504),
                ee = n.n(X),
                te = n(32429),
                ne = n.n(te),
                ie = n(15940),
                se = n.n(ie),
                ce = n(830046),
                re = n.n(ce),
                oe = n(226475),
                ae = n.n(oe),
                ue = n(96629),
                de = n.n(ue),
                le = n(788873),
                he = n.n(le),
                pe = n(996903),
                ge = n.n(pe),
                me = n(124202),
                be = n.n(me),
                fe = n(923771),
                ve = n.n(fe),
                ye = n(109869),
                we = n.n(ye),
                _e = n(276766),
                Se = n.n(_e),
                ke = n(466032),
                Ce = n.n(ke),
                xe = n(974936),
                Me = n.n(xe),
                Oe = n(890741),
                Le = n.n(Oe),
                De = n(781993),
                Ae = n.n(De),
                Fe = n(715764),
                Pe = n(139107),
                qe = n.n(Pe),
                Ge = n(600708),
                Ie = n.n(Ge);
            const Te = n.p + "img/logo.1d22c4a43.svg";
            var Qe = n(814488),
                Ne = n.n(Qe),
                Ee = n(316456),
                Re = n.n(Ee),
                Ue = n(531560),
                Be = n.n(Ue),
                Ke = n(335240),
                Ve = n.n(Ke),
                je = n(723204),
                Ze = n.n(je),
                He = n(319771),
                $e = n(931701),
                We = n.n($e),
                Ye = n(533800),
                ze = n.n(Ye),
                Je = n(407127),
                Xe = n.n(Je),
                et = n(852829),
                tt = n.n(et);
            const nt = n.p + "media/pwa-ios-en.hevc.edb2e5a3.mp4",
                it = n.p + "media/pwa-ios-en.70e8c8c1.mp4",
                st = n.p + "media/pwa-ios-ru.hevc.e2942e43.mp4",
                ct = n.p + "media/pwa-ios-ru.30cdac5e.mp4",
                rt = n.p + "img/logo.f3c0d4bc3.svg",
                ot = {
                    logo: {
                        white: s,
                        normal: i
                    },
                    iosInstructionVideo: {
                        default: [{
                            src: nt,
                            type: "video/mp4; codecs=hevc"
                        }, {
                            src: it,
                            type: "video/mp4"
                        }],
                        ru: [{
                            src: st,
                            type: "video/mp4; codecs=hevc"
                        }, {
                            src: ct,
                            type: "video/mp4"
                        }]
                    },
                    mobilePWATooltipImages: {
                        [Fe.p.PLATFORM_ANDROID]: {
                            ru: Re(),
                            en: Ne()
                        },
                        [Fe.p.PLATFORM_IOS]: {
                            ru: Ve(),
                            en: Be()
                        }
                    },
                    burgerPwaImage: Ze(),
                    cashbackTimerBackground: T(),
                    cashbackTimerTight: N(),
                    casinoCashbackModal: {
                        header: [h(), g()],
                        footer: [b(), v()],
                        outsidePic: d()
                    },
                    vipDomain: {
                        logo: rt
                    },
                    freeMoney: {
                        stepsModal: {
                            coinImage: Ae()
                        },
                        coins: {
                            coinIcon: be(),
                            coinModalMain: ve()
                        },
                        background: {
                            bear: we()
                        },
                        pwaBonus: {
                            phonesEn: Se(),
                            phonesRu: Se(),
                            phonesMobileEn: Ce(),
                            phonesMobileRu: Ce()
                        },
                        cashback: {
                            machine: de(),
                            machineMobile: ae(),
                            coin: re(),
                            coinMobile: se()
                        },
                        loyalty: {
                            background: ne(),
                            backgroundMobile: ee()
                        },
                        lottery: {
                            icon: "lotteryLogo"
                        },
                        clicker: {
                            image: he(),
                            imageMobile: ge()
                        },
                        referral: {
                            image: Me(),
                            imageMobile: Le()
                        }
                    },
                    poker: {
                        pokerTable: R(),
                        logo: Te
                    },
                    forbiddenAuth: {
                        image: {
                            webp: Z(),
                            png: $()
                        },
                        imageWoman: {
                            webp: J(),
                            png: Y()
                        }
                    },
                    bonuses: {
                        bonus500: r(),
                        expressBonus: G(),
                        cashback: a(),
                        expressCoins: {
                            expressCoin1: w(),
                            expressCoin2: S(),
                            expressCoin3: C(),
                            expressCoin4: L(),
                            expressCoin5: P(),
                            expressCoin4m: M(),
                            expressCoin5m: A()
                        },
                        notificationPopup: {
                            imageDesktop: B(),
                            imageMobile: V()
                        }
                    },
                    banners: {
                        cashback: Ie(),
                        bonus: qe()
                    },
                    cybersport: {
                        logoForStream: "cybersport-team-stub"
                    },
                    slider: {
                        increaseBonusImagesByBrand: {
                            en: {
                                png: We(),
                                webp: ze()
                            },
                            ru: {
                                png: Xe(),
                                webp: tt()
                            }
                        }
                    },
                    installAndroid: {
                        notification: He
                    }
                }
        },
        631526: (e, t, n) => {
            "use strict";
            n.d(t, {
                p: () => r
            });
            var i = n(166252),
                s = n(931338);
            const c = "registration_form_crypto_enabled",
                r = () => {
                    const {
                        value: e
                    } = (0, s.y)(c), t = (0, i.Fl)((() => "on" === e.value));
                    return {
                        isCryptoRegistrationAllowed: t
                    }
                }
        },
        893279: (e, t, n) => {
            "use strict";
            n.d(t, {
                a: () => r
            });
            var i = n(166252),
                s = n(931338);
            const c = "new_currency_ton",
                r = () => {
                    const {
                        value: e
                    } = (0, s.y)(c), t = (0, i.Fl)((() => "on" === e.value));
                    return {
                        isTonAvailable: t
                    }
                }
        },
        643422: (e, t, n) => {
            "use strict";
            n.d(t, {
                I: () => r
            });
            var i = n(166252),
                s = n(931338);
            const c = "ff-limitation-of-fiat-currencies",
                r = () => {
                    const {
                        value: e
                    } = (0, s.y)(c), t = (0, i.Fl)((() => "on" === e.value));
                    return {
                        isLimitationOfFiatCurrencies: t
                    }
                }
        },
        56101: (e, t, n) => {
            "use strict";
            n.d(t, {
                e: () => b
            });
            var i = n(166252),
                s = n(716082),
                c = n(931338);
            const r = "ff-azeri-lang-enable-ls",
                o = "ff-turkish-lang-enable-ls",
                a = "ff-uzbek-lang-enable-ls",
                u = "ff-thailand-lang-enable-ls",
                d = "ff-bengali-lang-enable-ls",
                l = "ff-indonesian-lang-enable-ls",
                h = "ff-melayu-lang-enable-ls",
                p = "ls-ff-route-2705-chinese-lang-enable",
                g = "ls-ff-route-2705-kazakh-lang-enable",
                m = "on",
                b = () => {
                    const e = [{
                            flag: r,
                            lang: s.bP.LANG_AZ.lang
                        }, {
                            flag: o,
                            lang: s.bP.LANG_TR.lang
                        }, {
                            flag: a,
                            lang: s.bP.LANG_UZ.lang
                        }, {
                            flag: u,
                            lang: s.bP.LANG_TH.lang
                        }, {
                            flag: d,
                            lang: s.bP.LANG_BD.lang
                        }, {
                            flag: l,
                            lang: s.bP.LANG_ID.lang
                        }, {
                            flag: h,
                            lang: s.bP.LANG_MS.lang
                        }, {
                            flag: p,
                            lang: s.bP.LANG_CN.lang
                        }, {
                            flag: g,
                            lang: s.bP.LANG_KZ.lang
                        }],
                        t = e.map((({
                            flag: e
                        }) => (0, c.y)(e))),
                        n = (0, i.Fl)((() => new Set(e.map(((e, n) => {
                            var i;
                            return (null == (i = t[n]) ? void 0 : i.value.value) === m ? void 0 : e.lang
                        })).filter(Boolean))));
                    return {
                        exclusionLanguages: n
                    }
                }
        },
        72258: (e, t, n) => {
            "use strict";
            n.d(t, {
                e: () => o
            });
            var i = n(166252),
                s = n(716082),
                c = n(931338);
            const r = "new_langs_enabled",
                o = () => {
                    const {
                        value: e
                    } = (0, c.y)(r), t = (0, i.Fl)((() => "on" === e.value)), n = new Set([s.bP.LANG_VI.isoKey]);
                    return {
                        isNewLanguagesEnabled: t,
                        newLanguages: n
                    }
                }
        },
        773145: (e, t, n) => {
            "use strict";
            n.d(t, {
                C: () => r
            });
            var i = n(166252),
                s = n(931338);
            const c = "route-2134-tagal-language-on",
                r = () => {
                    const {
                        value: e
                    } = (0, s.y)(c), t = (0, i.Fl)((() => "on" === e.value));
                    return {
                        isTagalLanguagesEnabled: t
                    }
                }
        },
        615459: (e, t, n) => {
            "use strict";
            n.d(t, {
                j: () => c
            });
            var i = n(166252),
                s = n(280894);
            const c = () => {
                const e = (0, s.oR)(),
                    t = (0, i.Fl)((() => e.getters.isMobile ? "30px" : "40px")),
                    n = (0, i.Fl)((() => !e.getters.socketAlive)),
                    c = (0, i.Fl)((() => e.getters.isMobile ? "static" : "absolute")),
                    r = (0, i.Fl)((() => n.value && !["static", "absolute"].includes(c.value) ? t.value : "0px"));
                return {
                    isVisible: n,
                    position: c,
                    indent: r,
                    height: t
                }
            }
        },
        142291: (e, t, n) => {
            "use strict";
            n.d(t, {
                c: () => s
            });
            var i = n(934405);
            const s = (e, t, n) => e.find((e => {
                const s = (0, i.HD)(e) ? e : e.countryCode,
                    c = !(0, i.HD)(e) && e.subdivisions || [],
                    r = !(0, i.HD)(e) && e.notSubdivisions || [];
                return t === s && (!r.includes(n) && (!(c.length > 0 && !c.includes(n)) && !(r.length > 0 && r.includes(n))))
            }))
        },
        998643: (e, t, n) => {
            "use strict";
            n.d(t, {
                Q: () => i
            });
            const i = {
                queryClientConfig: {
                    defaultOptions: {
                        queries: {
                            refetchOnMount: !1,
                            refetchOnReconnect: !1,
                            refetchOnWindowFocus: !1,
                            staleTime: Number.POSITIVE_INFINITY,
                            refetchInterval: Number.POSITIVE_INFINITY
                        }
                    }
                }
            }
        },
        992815: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/poker-table.e2769cd43-900.png 900w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/poker-table.e2769cd43-900.png",
                    width: 900,
                    height: 559
                }],
                src: "https://v1.bundlecdn.com/img/poker-table.e2769cd43-900.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/poker-table.e2769cd43-900.png"
                },
                width: 900,
                height: 559
            }
        },
        757893: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/bonus-500-luckystar.b97722060-274.png 274w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/bonus-500-luckystar.b97722060-274.png",
                    width: 274,
                    height: 337
                }],
                src: "https://v1.bundlecdn.com/img/bonus-500-luckystar.b97722060-274.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/bonus-500-luckystar.b97722060-274.png"
                },
                width: 274,
                height: 337
            }
        },
        475781: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/bonus-500.ff9ad472c-477.png 477w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/bonus-500.ff9ad472c-477.png",
                    width: 477,
                    height: 588
                }],
                src: "https://v1.bundlecdn.com/img/bonus-500.ff9ad472c-477.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/bonus-500.ff9ad472c-477.png"
                },
                width: 477,
                height: 588
            }
        },
        637924: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/cashback-luckystar.4d7d3b80a-274.png 274w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/cashback-luckystar.4d7d3b80a-274.png",
                    width: 274,
                    height: 337
                }],
                src: "https://v1.bundlecdn.com/img/cashback-luckystar.4d7d3b80a-274.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/cashback-luckystar.4d7d3b80a-274.png"
                },
                width: 274,
                height: 337
            }
        },
        588490: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/cashback.092c124f0-477.png 477w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/cashback.092c124f0-477.png",
                    width: 477,
                    height: 588
                }],
                src: "https://v1.bundlecdn.com/img/cashback.092c124f0-477.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/cashback.092c124f0-477.png"
                },
                width: 477,
                height: 588
            }
        },
        293693: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/chip-1.b186aa8f8-630.png 630w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/chip-1.b186aa8f8-630.png",
                    width: 630,
                    height: 468
                }],
                src: "https://v1.bundlecdn.com/img/chip-1.b186aa8f8-630.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/chip-1.b186aa8f8-630.png"
                },
                width: 630,
                height: 468
            }
        },
        582576: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/chip-2.80f51199c-399.png 399w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/chip-2.80f51199c-399.png",
                    width: 399,
                    height: 529
                }],
                src: "https://v1.bundlecdn.com/img/chip-2.80f51199c-399.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/chip-2.80f51199c-399.png"
                },
                width: 399,
                height: 529
            }
        },
        251972: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/chip-3.2b98465b0-549.png 549w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/chip-3.2b98465b0-549.png",
                    width: 549,
                    height: 599
                }],
                src: "https://v1.bundlecdn.com/img/chip-3.2b98465b0-549.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/chip-3.2b98465b0-549.png"
                },
                width: 549,
                height: 599
            }
        },
        903588: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/chip-4.91eccfc49-285.png 285w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/chip-4.91eccfc49-285.png",
                    width: 285,
                    height: 326
                }],
                src: "https://v1.bundlecdn.com/img/chip-4.91eccfc49-285.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/chip-4.91eccfc49-285.png"
                },
                width: 285,
                height: 326
            }
        },
        187722: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/chip-5.c807a1a5c-391.png 391w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/chip-5.c807a1a5c-391.png",
                    width: 391,
                    height: 391
                }],
                src: "https://v1.bundlecdn.com/img/chip-5.c807a1a5c-391.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/chip-5.c807a1a5c-391.png"
                },
                width: 391,
                height: 391
            }
        },
        869349: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/footer-1.b8f2e8566-127.png 127w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/footer-1.b8f2e8566-127.png",
                    width: 127,
                    height: 148
                }],
                src: "https://v1.bundlecdn.com/img/footer-1.b8f2e8566-127.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/footer-1.b8f2e8566-127.png"
                },
                width: 127,
                height: 148
            }
        },
        992197: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/footer-2.ddd5d6706-180.png 180w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/footer-2.ddd5d6706-180.png",
                    width: 180,
                    height: 180
                }],
                src: "https://v1.bundlecdn.com/img/footer-2.ddd5d6706-180.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/footer-2.ddd5d6706-180.png"
                },
                width: 180,
                height: 180
            }
        },
        295016: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/header-1.dfddc18dc-184.png 184w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/header-1.dfddc18dc-184.png",
                    width: 184,
                    height: 249
                }],
                src: "https://v1.bundlecdn.com/img/header-1.dfddc18dc-184.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/header-1.dfddc18dc-184.png"
                },
                width: 184,
                height: 249
            }
        },
        753101: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/header-2.92ca75eb4-275.png 275w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/header-2.92ca75eb4-275.png",
                    width: 275,
                    height: 300
                }],
                src: "https://v1.bundlecdn.com/img/header-2.92ca75eb4-275.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/header-2.92ca75eb4-275.png"
                },
                width: 275,
                height: 300
            }
        },
        202008: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/outside-pic.ea001d549-315.png 315w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/outside-pic.ea001d549-315.png",
                    width: 315,
                    height: 234
                }],
                src: "https://v1.bundlecdn.com/img/outside-pic.ea001d549-315.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/outside-pic.ea001d549-315.png"
                },
                width: 315,
                height: 234
            }
        },
        149592: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/express-bonus.8f63e79b8-477.png 477w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/express-bonus.8f63e79b8-477.png",
                    width: 477,
                    height: 588
                }],
                src: "https://v1.bundlecdn.com/img/express-bonus.8f63e79b8-477.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/express-bonus.8f63e79b8-477.png"
                },
                width: 477,
                height: 588
            }
        },
        409948: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/express-coupon-1.90f9143ac-651.png 651w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/express-coupon-1.90f9143ac-651.png",
                    width: 651,
                    height: 610
                }],
                src: "https://v1.bundlecdn.com/img/express-coupon-1.90f9143ac-651.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/express-coupon-1.90f9143ac-651.png"
                },
                width: 651,
                height: 610
            }
        },
        242835: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/express-coupon-2.b0a9246f8-482.png 482w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/express-coupon-2.b0a9246f8-482.png",
                    width: 482,
                    height: 334
                }],
                src: "https://v1.bundlecdn.com/img/express-coupon-2.b0a9246f8-482.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/express-coupon-2.b0a9246f8-482.png"
                },
                width: 482,
                height: 334
            }
        },
        309443: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/express-coupon-3.e0cdba214-796.png 796w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/express-coupon-3.e0cdba214-796.png",
                    width: 796,
                    height: 384
                }],
                src: "https://v1.bundlecdn.com/img/express-coupon-3.e0cdba214-796.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/express-coupon-3.e0cdba214-796.png"
                },
                width: 796,
                height: 384
            }
        },
        759456: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/express-coupon-4-m.99cf57f5c-237.png 237w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/express-coupon-4-m.99cf57f5c-237.png",
                    width: 237,
                    height: 471
                }],
                src: "https://v1.bundlecdn.com/img/express-coupon-4-m.99cf57f5c-237.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/express-coupon-4-m.99cf57f5c-237.png"
                },
                width: 237,
                height: 471
            }
        },
        31716: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/express-coupon-4.ffbacc8e3-658.png 658w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/express-coupon-4.ffbacc8e3-658.png",
                    width: 658,
                    height: 536
                }],
                src: "https://v1.bundlecdn.com/img/express-coupon-4.ffbacc8e3-658.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/express-coupon-4.ffbacc8e3-658.png"
                },
                width: 658,
                height: 536
            }
        },
        906349: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/express-coupon-5-m.36c37f6c3-330.png 330w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/express-coupon-5-m.36c37f6c3-330.png",
                    width: 330,
                    height: 573
                }],
                src: "https://v1.bundlecdn.com/img/express-coupon-5-m.36c37f6c3-330.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/express-coupon-5-m.36c37f6c3-330.png"
                },
                width: 330,
                height: 573
            }
        },
        604955: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/express-coupon-5.b84584333-908.png 908w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/express-coupon-5.b84584333-908.png",
                    width: 908,
                    height: 344
                }],
                src: "https://v1.bundlecdn.com/img/express-coupon-5.b84584333-908.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/express-coupon-5.b84584333-908.png"
                },
                width: 908,
                height: 344
            }
        },
        779915: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/cashback-circle-luckystar.5bcd9ac73-164.png 164w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/cashback-circle-luckystar.5bcd9ac73-164.png",
                    width: 164,
                    height: 172
                }],
                src: "https://v1.bundlecdn.com/img/cashback-circle-luckystar.5bcd9ac73-164.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/cashback-circle-luckystar.5bcd9ac73-164.png"
                },
                width: 164,
                height: 172
            }
        },
        902327: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/cashback-circle.42f6ae9c8-140.png 140w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/cashback-circle.42f6ae9c8-140.png",
                    width: 140,
                    height: 152
                }],
                src: "https://v1.bundlecdn.com/img/cashback-circle.42f6ae9c8-140.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/cashback-circle.42f6ae9c8-140.png"
                },
                width: 140,
                height: 152
            }
        },
        874418: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/cashback-img-luckystar.71547b5f6-232.png 232w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/cashback-img-luckystar.71547b5f6-232.png",
                    width: 232,
                    height: 268
                }],
                src: "https://v1.bundlecdn.com/img/cashback-img-luckystar.71547b5f6-232.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/cashback-img-luckystar.71547b5f6-232.png"
                },
                width: 232,
                height: 268
            }
        },
        745751: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/cashback-img.0a9e09fba-232.png 232w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/cashback-img.0a9e09fba-232.png",
                    width: 232,
                    height: 268
                }],
                src: "https://v1.bundlecdn.com/img/cashback-img.0a9e09fba-232.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/cashback-img.0a9e09fba-232.png"
                },
                width: 232,
                height: 268
            }
        },
        846570: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/imageDesktop.70271e338-426.png 426w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/imageDesktop.70271e338-426.png",
                    width: 426,
                    height: 273
                }],
                src: "https://v1.bundlecdn.com/img/imageDesktop.70271e338-426.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/imageDesktop.70271e338-426.png"
                },
                width: 426,
                height: 273
            }
        },
        669926: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/imageDesktopLuckystar.92a9facd2-426.png 426w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/imageDesktopLuckystar.92a9facd2-426.png",
                    width: 426,
                    height: 273
                }],
                src: "https://v1.bundlecdn.com/img/imageDesktopLuckystar.92a9facd2-426.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/imageDesktopLuckystar.92a9facd2-426.png"
                },
                width: 426,
                height: 273
            }
        },
        640600: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/imageMobile.7de97808d-352.png 352w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/imageMobile.7de97808d-352.png",
                    width: 352,
                    height: 278
                }],
                src: "https://v1.bundlecdn.com/img/imageMobile.7de97808d-352.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/imageMobile.7de97808d-352.png"
                },
                width: 352,
                height: 278
            }
        },
        495140: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/imageMobileLuckystar.34057305f-352.png 352w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/imageMobileLuckystar.34057305f-352.png",
                    width: 352,
                    height: 278
                }],
                src: "https://v1.bundlecdn.com/img/imageMobileLuckystar.34057305f-352.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/imageMobileLuckystar.34057305f-352.png"
                },
                width: 352,
                height: 278
            }
        },
        126850: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/bear.7b736fe37-290.webp 290w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/bear.7b736fe37-290.webp",
                    width: 290,
                    height: 250
                }],
                src: "https://v1.bundlecdn.com/img/bear.7b736fe37-290.webp",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/bear.7b736fe37-290.webp"
                },
                width: 290,
                height: 250
            }
        },
        930472: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/bear.2291b4b10-290.png 290w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/bear.2291b4b10-290.png",
                    width: 290,
                    height: 250
                }],
                src: "https://v1.bundlecdn.com/img/bear.2291b4b10-290.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/bear.2291b4b10-290.png"
                },
                width: 290,
                height: 250
            }
        },
        959549: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/clover.d8ff2b176-234.webp 234w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/clover.d8ff2b176-234.webp",
                    width: 234,
                    height: 243
                }],
                src: "https://v1.bundlecdn.com/img/clover.d8ff2b176-234.webp",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/clover.d8ff2b176-234.webp"
                },
                width: 234,
                height: 243
            }
        },
        309138: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/clover.fb691d276-234.png 234w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/clover.fb691d276-234.png",
                    width: 234,
                    height: 243
                }],
                src: "https://v1.bundlecdn.com/img/clover.fb691d276-234.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/clover.fb691d276-234.png"
                },
                width: 234,
                height: 243
            }
        },
        185084: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/woman.bfd6b6540-780.png 780w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/woman.bfd6b6540-780.png",
                    width: 780,
                    height: 370
                }],
                src: "https://v1.bundlecdn.com/img/woman.bfd6b6540-780.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/woman.bfd6b6540-780.png"
                },
                width: 780,
                height: 370
            }
        },
        659486: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/woman.bcda85a02-780.webp 780w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/woman.bcda85a02-780.webp",
                    width: 780,
                    height: 370
                }],
                src: "https://v1.bundlecdn.com/img/woman.bcda85a02-780.webp",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/woman.bcda85a02-780.webp"
                },
                width: 780,
                height: 370
            }
        },
        24587: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/bg-luckystar.3b4569bc4-1019.png 1019w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/bg-luckystar.3b4569bc4-1019.png",
                    width: 1019,
                    height: 902
                }],
                src: "https://v1.bundlecdn.com/img/bg-luckystar.3b4569bc4-1019.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/bg-luckystar.3b4569bc4-1019.png"
                },
                width: 1019,
                height: 902
            }
        },
        940881: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/bg-mobile-luckystar.d3f461157-690.png 690w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/bg-mobile-luckystar.d3f461157-690.png",
                    width: 690,
                    height: 902
                }],
                src: "https://v1.bundlecdn.com/img/bg-mobile-luckystar.d3f461157-690.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/bg-mobile-luckystar.d3f461157-690.png"
                },
                width: 690,
                height: 902
            }
        },
        278504: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/bg-mobile.1279d7351-690.png 690w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/bg-mobile.1279d7351-690.png",
                    width: 690,
                    height: 902
                }],
                src: "https://v1.bundlecdn.com/img/bg-mobile.1279d7351-690.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/bg-mobile.1279d7351-690.png"
                },
                width: 690,
                height: 902
            }
        },
        32429: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/bg.51f8fae5b-1019.png 1019w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/bg.51f8fae5b-1019.png",
                    width: 1019,
                    height: 902
                }],
                src: "https://v1.bundlecdn.com/img/bg.51f8fae5b-1019.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/bg.51f8fae5b-1019.png"
                },
                width: 1019,
                height: 902
            }
        },
        15940: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/coin-mobile.13c177c02-314.png 314w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/coin-mobile.13c177c02-314.png",
                    width: 314,
                    height: 343
                }],
                src: "https://v1.bundlecdn.com/img/coin-mobile.13c177c02-314.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/coin-mobile.13c177c02-314.png"
                },
                width: 314,
                height: 343
            }
        },
        298947: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/coin-mobile_luckystar.ea1bc44b6-312.png 312w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/coin-mobile_luckystar.ea1bc44b6-312.png",
                    width: 312,
                    height: 340
                }],
                src: "https://v1.bundlecdn.com/img/coin-mobile_luckystar.ea1bc44b6-312.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/coin-mobile_luckystar.ea1bc44b6-312.png"
                },
                width: 312,
                height: 340
            }
        },
        830046: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/coin.05d04a569-479.png 479w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/coin.05d04a569-479.png",
                    width: 479,
                    height: 479
                }],
                src: "https://v1.bundlecdn.com/img/coin.05d04a569-479.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/coin.05d04a569-479.png"
                },
                width: 479,
                height: 479
            }
        },
        987137: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/coin_luckystar.29aaba59e-480.png 480w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/coin_luckystar.29aaba59e-480.png",
                    width: 480,
                    height: 480
                }],
                src: "https://v1.bundlecdn.com/img/coin_luckystar.29aaba59e-480.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/coin_luckystar.29aaba59e-480.png"
                },
                width: 480,
                height: 480
            }
        },
        226475: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/machine-mobile.05749859d-462.png 462w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/machine-mobile.05749859d-462.png",
                    width: 462,
                    height: 596
                }],
                src: "https://v1.bundlecdn.com/img/machine-mobile.05749859d-462.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/machine-mobile.05749859d-462.png"
                },
                width: 462,
                height: 596
            }
        },
        640271: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/machine-mobile_luckystar.2e0900109-690.png 690w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/machine-mobile_luckystar.2e0900109-690.png",
                    width: 690,
                    height: 598
                }],
                src: "https://v1.bundlecdn.com/img/machine-mobile_luckystar.2e0900109-690.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/machine-mobile_luckystar.2e0900109-690.png"
                },
                width: 690,
                height: 598
            }
        },
        96629: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/machine.5215290ed-998.png 998w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/machine.5215290ed-998.png",
                    width: 998,
                    height: 798
                }],
                src: "https://v1.bundlecdn.com/img/machine.5215290ed-998.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/machine.5215290ed-998.png"
                },
                width: 998,
                height: 798
            }
        },
        537604: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/machine_luckystar.9d7000595-1420.png 1420w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/machine_luckystar.9d7000595-1420.png",
                    width: 1420,
                    height: 798
                }],
                src: "https://v1.bundlecdn.com/img/machine_luckystar.9d7000595-1420.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/machine_luckystar.9d7000595-1420.png"
                },
                width: 1420,
                height: 798
            }
        },
        788873: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/image.ddb0a49ea-920.png 920w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/image.ddb0a49ea-920.png",
                    width: 920,
                    height: 712
                }],
                src: "https://v1.bundlecdn.com/img/image.ddb0a49ea-920.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/image.ddb0a49ea-920.png"
                },
                width: 920,
                height: 712
            }
        },
        996903: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/imageMobile.69a846d55-790.png 790w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/imageMobile.69a846d55-790.png",
                    width: 790,
                    height: 1086
                }],
                src: "https://v1.bundlecdn.com/img/imageMobile.69a846d55-790.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/imageMobile.69a846d55-790.png"
                },
                width: 790,
                height: 1086
            }
        },
        124202: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/coinIcon.a2a446529-111.png 111w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/coinIcon.a2a446529-111.png",
                    width: 111,
                    height: 111
                }],
                src: "https://v1.bundlecdn.com/img/coinIcon.a2a446529-111.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/coinIcon.a2a446529-111.png"
                },
                width: 111,
                height: 111
            }
        },
        268084: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/coinIconLuckystar.694466c56-111.png 111w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/coinIconLuckystar.694466c56-111.png",
                    width: 111,
                    height: 106
                }],
                src: "https://v1.bundlecdn.com/img/coinIconLuckystar.694466c56-111.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/coinIconLuckystar.694466c56-111.png"
                },
                width: 111,
                height: 106
            }
        },
        923771: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/coinModalMain.dcf56194c-260.png 260w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/coinModalMain.dcf56194c-260.png",
                    width: 260,
                    height: 261
                }],
                src: "https://v1.bundlecdn.com/img/coinModalMain.dcf56194c-260.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/coinModalMain.dcf56194c-260.png"
                },
                width: 260,
                height: 261
            }
        },
        833707: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/coinModalMainLuckystar.35401e03c-260.png 260w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/coinModalMainLuckystar.35401e03c-260.png",
                    width: 260,
                    height: 247
                }],
                src: "https://v1.bundlecdn.com/img/coinModalMainLuckystar.35401e03c-260.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/coinModalMainLuckystar.35401e03c-260.png"
                },
                width: 260,
                height: 247
            }
        },
        47096: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/phones-en_luckystar.e8314f1e8-1286.png 1286w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/phones-en_luckystar.e8314f1e8-1286.png",
                    width: 1286,
                    height: 1046
                }],
                src: "https://v1.bundlecdn.com/img/phones-en_luckystar.e8314f1e8-1286.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/phones-en_luckystar.e8314f1e8-1286.png"
                },
                width: 1286,
                height: 1046
            }
        },
        803679: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/phones-ru_luckystar.5cc6a9deb-1286.png 1286w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/phones-ru_luckystar.5cc6a9deb-1286.png",
                    width: 1286,
                    height: 1046
                }],
                src: "https://v1.bundlecdn.com/img/phones-ru_luckystar.5cc6a9deb-1286.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/phones-ru_luckystar.5cc6a9deb-1286.png"
                },
                width: 1286,
                height: 1046
            }
        },
        276766: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/phones.2d1888519-1286.png 1286w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/phones.2d1888519-1286.png",
                    width: 1286,
                    height: 1046
                }],
                src: "https://v1.bundlecdn.com/img/phones.2d1888519-1286.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/phones.2d1888519-1286.png"
                },
                width: 1286,
                height: 1046
            }
        },
        466032: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/phonesMobile.2373da0ed-790.png 790w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/phonesMobile.2373da0ed-790.png",
                    width: 790,
                    height: 722
                }],
                src: "https://v1.bundlecdn.com/img/phonesMobile.2373da0ed-790.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/phonesMobile.2373da0ed-790.png"
                },
                width: 790,
                height: 722
            }
        },
        698424: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/phonesMobileEn_luckystar.6c7a14cd2-967.png 967w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/phonesMobileEn_luckystar.6c7a14cd2-967.png",
                    width: 967,
                    height: 906
                }],
                src: "https://v1.bundlecdn.com/img/phonesMobileEn_luckystar.6c7a14cd2-967.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/phonesMobileEn_luckystar.6c7a14cd2-967.png"
                },
                width: 967,
                height: 906
            }
        },
        277083: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/phonesMobileRu_luckystar.0549f5c8c-979.png 979w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/phonesMobileRu_luckystar.0549f5c8c-979.png",
                    width: 979,
                    height: 904
                }],
                src: "https://v1.bundlecdn.com/img/phonesMobileRu_luckystar.0549f5c8c-979.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/phonesMobileRu_luckystar.0549f5c8c-979.png"
                },
                width: 979,
                height: 904
            }
        },
        109869: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/bear.a11bc64c8-968.png 968w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/bear.a11bc64c8-968.png",
                    width: 968,
                    height: 1143
                }],
                src: "https://v1.bundlecdn.com/img/bear.a11bc64c8-968.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/bear.a11bc64c8-968.png"
                },
                width: 968,
                height: 1143
            }
        },
        132887: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/bear_luckystar.8b6d02f2c-704.png 704w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/bear_luckystar.8b6d02f2c-704.png",
                    width: 704,
                    height: 736
                }],
                src: "https://v1.bundlecdn.com/img/bear_luckystar.8b6d02f2c-704.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/bear_luckystar.8b6d02f2c-704.png"
                },
                width: 704,
                height: 736
            }
        },
        974936: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/desktop.3464f55ef-1020.png 1020w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/desktop.3464f55ef-1020.png",
                    width: 1020,
                    height: 776
                }],
                src: "https://v1.bundlecdn.com/img/desktop.3464f55ef-1020.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/desktop.3464f55ef-1020.png"
                },
                width: 1020,
                height: 776
            }
        },
        890741: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/mobile.4fd2cb8f8-426.png 426w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/mobile.4fd2cb8f8-426.png",
                    width: 426,
                    height: 361
                }],
                src: "https://v1.bundlecdn.com/img/mobile.4fd2cb8f8-426.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/mobile.4fd2cb8f8-426.png"
                },
                width: 426,
                height: 361
            }
        },
        781993: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/1win-coin.911927093-35.png 35w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/1win-coin.911927093-35.png",
                    width: 35,
                    height: 36
                }],
                src: "https://v1.bundlecdn.com/img/1win-coin.911927093-35.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/1win-coin.911927093-35.png"
                },
                width: 35,
                height: 36
            }
        },
        925205: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/lucky-coin.d8890e9d9-35.png 35w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/lucky-coin.d8890e9d9-35.png",
                    width: 35,
                    height: 33
                }],
                src: "https://v1.bundlecdn.com/img/lucky-coin.d8890e9d9-35.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/lucky-coin.d8890e9d9-35.png"
                },
                width: 35,
                height: 33
            }
        },
        494515: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/bonus-luckystar.faa29716f-540.png 540w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/bonus-luckystar.faa29716f-540.png",
                    width: 540,
                    height: 640
                }],
                src: "https://v1.bundlecdn.com/img/bonus-luckystar.faa29716f-540.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/bonus-luckystar.faa29716f-540.png"
                },
                width: 540,
                height: 640
            }
        },
        139107: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/bonus.8be9e8f98-362.png 362w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/bonus.8be9e8f98-362.png",
                    width: 362,
                    height: 429
                }],
                src: "https://v1.bundlecdn.com/img/bonus.8be9e8f98-362.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/bonus.8be9e8f98-362.png"
                },
                width: 362,
                height: 429
            }
        },
        649737: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/cashback-luckystar.afac8af9d-540.png 540w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/cashback-luckystar.afac8af9d-540.png",
                    width: 540,
                    height: 640
                }],
                src: "https://v1.bundlecdn.com/img/cashback-luckystar.afac8af9d-540.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/cashback-luckystar.afac8af9d-540.png"
                },
                width: 540,
                height: 640
            }
        },
        600708: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/cashback.f5a548e68-399.png 399w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/cashback.f5a548e68-399.png",
                    width: 399,
                    height: 472
                }],
                src: "https://v1.bundlecdn.com/img/cashback.f5a548e68-399.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/cashback.f5a548e68-399.png"
                },
                width: 399,
                height: 472
            }
        },
        814488: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/pwa_android_en.b229a444a-690.png 690w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/pwa_android_en.b229a444a-690.png",
                    width: 690,
                    height: 450
                }],
                src: "https://v1.bundlecdn.com/img/pwa_android_en.b229a444a-690.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/pwa_android_en.b229a444a-690.png"
                },
                width: 690,
                height: 450
            }
        },
        155677: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/pwa_android_en_luckystar.f5d1ec15e-609.png 609w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/pwa_android_en_luckystar.f5d1ec15e-609.png",
                    width: 609,
                    height: 408
                }],
                src: "https://v1.bundlecdn.com/img/pwa_android_en_luckystar.f5d1ec15e-609.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/pwa_android_en_luckystar.f5d1ec15e-609.png"
                },
                width: 609,
                height: 408
            }
        },
        316456: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/pwa_android_ru.fe3cd4bac-690.png 690w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/pwa_android_ru.fe3cd4bac-690.png",
                    width: 690,
                    height: 450
                }],
                src: "https://v1.bundlecdn.com/img/pwa_android_ru.fe3cd4bac-690.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/pwa_android_ru.fe3cd4bac-690.png"
                },
                width: 690,
                height: 450
            }
        },
        594088: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/pwa_android_ru_luckystar.37341d9b8-609.png 609w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/pwa_android_ru_luckystar.37341d9b8-609.png",
                    width: 609,
                    height: 408
                }],
                src: "https://v1.bundlecdn.com/img/pwa_android_ru_luckystar.37341d9b8-609.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/pwa_android_ru_luckystar.37341d9b8-609.png"
                },
                width: 609,
                height: 408
            }
        },
        531560: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/pwa_ios_en.f08ddb1e6-690.png 690w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/pwa_ios_en.f08ddb1e6-690.png",
                    width: 690,
                    height: 450
                }],
                src: "https://v1.bundlecdn.com/img/pwa_ios_en.f08ddb1e6-690.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/pwa_ios_en.f08ddb1e6-690.png"
                },
                width: 690,
                height: 450
            }
        },
        129664: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/pwa_ios_en_luckystar.589bac9fe-609.png 609w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/pwa_ios_en_luckystar.589bac9fe-609.png",
                    width: 609,
                    height: 408
                }],
                src: "https://v1.bundlecdn.com/img/pwa_ios_en_luckystar.589bac9fe-609.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/pwa_ios_en_luckystar.589bac9fe-609.png"
                },
                width: 609,
                height: 408
            }
        },
        335240: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/pwa_ios_ru.7693e541d-690.png 690w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/pwa_ios_ru.7693e541d-690.png",
                    width: 690,
                    height: 450
                }],
                src: "https://v1.bundlecdn.com/img/pwa_ios_ru.7693e541d-690.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/pwa_ios_ru.7693e541d-690.png"
                },
                width: 690,
                height: 450
            }
        },
        357523: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/pwa_ios_ru_luckystar.aed244bb7-609.png 609w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/pwa_ios_ru_luckystar.aed244bb7-609.png",
                    width: 609,
                    height: 408
                }],
                src: "https://v1.bundlecdn.com/img/pwa_ios_ru_luckystar.aed244bb7-609.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/pwa_ios_ru_luckystar.aed244bb7-609.png"
                },
                width: 609,
                height: 408
            }
        },
        723204: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/burger_pwa_card.a1ca62b40-195.png 195w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/burger_pwa_card.a1ca62b40-195.png",
                    width: 195,
                    height: 198
                }],
                src: "https://v1.bundlecdn.com/img/burger_pwa_card.a1ca62b40-195.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/burger_pwa_card.a1ca62b40-195.png"
                },
                width: 195,
                height: 198
            }
        },
        5792: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/burger_pwa_card_luckystar.0881e48e1-266.png 266w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/burger_pwa_card_luckystar.0881e48e1-266.png",
                    width: 266,
                    height: 224
                }],
                src: "https://v1.bundlecdn.com/img/burger_pwa_card_luckystar.0881e48e1-266.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/burger_pwa_card_luckystar.0881e48e1-266.png"
                },
                width: 266,
                height: 224
            }
        },
        931701: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/increase_bonus_en.6d0fd63a5-1024.png 1024w,https://v1.bundlecdn.com/img/increase_bonus_en.50f23d97f-760.png 760w,https://v1.bundlecdn.com/img/increase_bonus_en.ca28e80a6-400.png 400w,https://v1.bundlecdn.com/img/increase_bonus_en.f2603f395-320.png 320w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/increase_bonus_en.6d0fd63a5-1024.png",
                    width: 1024,
                    height: 331
                }, {
                    path: "https://v1.bundlecdn.com/img/increase_bonus_en.50f23d97f-760.png",
                    width: 760,
                    height: 246
                }, {
                    path: "https://v1.bundlecdn.com/img/increase_bonus_en.ca28e80a6-400.png",
                    width: 400,
                    height: 129
                }, {
                    path: "https://v1.bundlecdn.com/img/increase_bonus_en.f2603f395-320.png",
                    width: 320,
                    height: 103
                }],
                src: "https://v1.bundlecdn.com/img/increase_bonus_en.f2603f395-320.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/increase_bonus_en.f2603f395-320.png"
                },
                width: 320,
                height: 103
            }
        },
        533800: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/increase_bonus_en.9db42071f-1024.webp 1024w,https://v1.bundlecdn.com/img/increase_bonus_en.e4b6d1253-760.webp 760w,https://v1.bundlecdn.com/img/increase_bonus_en.80525e9fe-400.webp 400w,https://v1.bundlecdn.com/img/increase_bonus_en.36f6dd58c-320.webp 320w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/increase_bonus_en.9db42071f-1024.webp",
                    width: 1024,
                    height: 331
                }, {
                    path: "https://v1.bundlecdn.com/img/increase_bonus_en.e4b6d1253-760.webp",
                    width: 760,
                    height: 246
                }, {
                    path: "https://v1.bundlecdn.com/img/increase_bonus_en.80525e9fe-400.webp",
                    width: 400,
                    height: 129
                }, {
                    path: "https://v1.bundlecdn.com/img/increase_bonus_en.36f6dd58c-320.webp",
                    width: 320,
                    height: 103
                }],
                src: "https://v1.bundlecdn.com/img/increase_bonus_en.36f6dd58c-320.webp",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/increase_bonus_en.36f6dd58c-320.webp"
                },
                width: 320,
                height: 103
            }
        },
        407127: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/increase_bonus_ru.5b8a27bea-1024.png 1024w,https://v1.bundlecdn.com/img/increase_bonus_ru.e36209704-760.png 760w,https://v1.bundlecdn.com/img/increase_bonus_ru.6bdb3c512-400.png 400w,https://v1.bundlecdn.com/img/increase_bonus_ru.1f2ebceae-320.png 320w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/increase_bonus_ru.5b8a27bea-1024.png",
                    width: 1024,
                    height: 331
                }, {
                    path: "https://v1.bundlecdn.com/img/increase_bonus_ru.e36209704-760.png",
                    width: 760,
                    height: 246
                }, {
                    path: "https://v1.bundlecdn.com/img/increase_bonus_ru.6bdb3c512-400.png",
                    width: 400,
                    height: 129
                }, {
                    path: "https://v1.bundlecdn.com/img/increase_bonus_ru.1f2ebceae-320.png",
                    width: 320,
                    height: 103
                }],
                src: "https://v1.bundlecdn.com/img/increase_bonus_ru.1f2ebceae-320.png",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/increase_bonus_ru.1f2ebceae-320.png"
                },
                width: 320,
                height: 103
            }
        },
        852829: e => {
            e.exports = {
                srcSet: "https://v1.bundlecdn.com/img/increase_bonus_ru.fd279aff4-1024.webp 1024w,https://v1.bundlecdn.com/img/increase_bonus_ru.574f22fbc-760.webp 760w,https://v1.bundlecdn.com/img/increase_bonus_ru.a744a09de-400.webp 400w,https://v1.bundlecdn.com/img/increase_bonus_ru.4473fdbe5-320.webp 320w",
                images: [{
                    path: "https://v1.bundlecdn.com/img/increase_bonus_ru.fd279aff4-1024.webp",
                    width: 1024,
                    height: 331
                }, {
                    path: "https://v1.bundlecdn.com/img/increase_bonus_ru.574f22fbc-760.webp",
                    width: 760,
                    height: 246
                }, {
                    path: "https://v1.bundlecdn.com/img/increase_bonus_ru.a744a09de-400.webp",
                    width: 400,
                    height: 129
                }, {
                    path: "https://v1.bundlecdn.com/img/increase_bonus_ru.4473fdbe5-320.webp",
                    width: 320,
                    height: 103
                }],
                src: "https://v1.bundlecdn.com/img/increase_bonus_ru.4473fdbe5-320.webp",
                toString: function() {
                    return "https://v1.bundlecdn.com/img/increase_bonus_ru.4473fdbe5-320.webp"
                },
                width: 320,
                height: 103
            }
        },
        599119: (e, t, n) => {
            "use strict";
            e.exports = n.p + "img/luckystar-normal.c57ea566b.svg"
        },
        319771: (e, t, n) => {
            "use strict";
            e.exports = n.p + "img/notification.0311d6bd4.svg"
        },
        95260: (e, t, n) => {
            "use strict";

            function i(e) {
                if (e) return s(e)
            }

            function s(e) {
                for (var t in i.prototype) e[t] = i.prototype[t];
                return e
            }
            n.d(t, {
                Q: () => i
            }), i.prototype.on = i.prototype.addEventListener = function(e, t) {
                return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
            }, i.prototype.once = function(e, t) {
                function n() {
                    this.off(e, n), t.apply(this, arguments)
                }
                return n.fn = t, this.on(e, n), this
            }, i.prototype.off = i.prototype.removeListener = i.prototype.removeAllListeners = i.prototype.removeEventListener = function(e, t) {
                if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                var n, i = this._callbacks["$" + e];
                if (!i) return this;
                if (1 == arguments.length) return delete this._callbacks["$" + e], this;
                for (var s = 0; s < i.length; s++)
                    if (n = i[s], n === t || n.fn === t) {
                        i.splice(s, 1);
                        break
                    }
                return 0 === i.length && delete this._callbacks["$" + e], this
            }, i.prototype.emit = function(e) {
                this._callbacks = this._callbacks || {};
                for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                if (n) {
                    n = n.slice(0);
                    i = 0;
                    for (var s = n.length; i < s; ++i) n[i].apply(this, t)
                }
                return this
            }, i.prototype.emitReserved = i.prototype.emit, i.prototype.listeners = function(e) {
                return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
            }, i.prototype.hasListeners = function(e) {
                return !!this.listeners(e).length
            }
        },
        570576: (e, t, n) => {
            "use strict";
            n.d(t, {
                P: () => C
            });
            var i = n(686121),
                s = n(432161),
                c = n(602262),
                r = n(430819),
                o = n(130081),
                a = n(772379),
                u = n(789643);
            class d extends u.F {
                constructor(e) {
                    super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || r._, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || l(this.options), this.state = this.initialState, this.scheduleGc()
                }
                get meta() {
                    return this.options.meta
                }
                setOptions(e) {
                    this.options = { ...this.defaultOptions,
                        ...e
                    }, this.updateCacheTime(this.options.cacheTime)
                }
                optionalRemove() {
                    this.observers.length || "idle" !== this.state.fetchStatus || this.cache.remove(this)
                }
                setData(e, t) {
                    const n = (0, s.oE)(this.state.data, e, this.options);
                    return this.dispatch({
                        data: n,
                        type: "success",
                        dataUpdatedAt: null == t ? void 0 : t.updatedAt,
                        manual: null == t ? void 0 : t.manual
                    }), n
                }
                setState(e, t) {
                    this.dispatch({
                        type: "setState",
                        state: e,
                        setStateOptions: t
                    })
                }
                cancel(e) {
                    var t;
                    const n = this.promise;
                    return null == (t = this.retryer) || t.cancel(e), n ? n.then(s.ZT).catch(s.ZT) : Promise.resolve()
                }
                destroy() {
                    super.destroy(), this.cancel({
                        silent: !0
                    })
                }
                reset() {
                    this.destroy(), this.setState(this.initialState)
                }
                isActive() {
                    return this.observers.some((e => !1 !== e.options.enabled))
                }
                isDisabled() {
                    return this.getObserversCount() > 0 && !this.isActive()
                }
                isStale() {
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((e => e.getCurrentResult().isStale))
                }
                isStaleByTime(e = 0) {
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || !(0, s.Kp)(this.state.dataUpdatedAt, e)
                }
                onFocus() {
                    var e;
                    const t = this.observers.find((e => e.shouldFetchOnWindowFocus()));
                    t && t.refetch({
                        cancelRefetch: !1
                    }), null == (e = this.retryer) || e.continue()
                }
                onOnline() {
                    var e;
                    const t = this.observers.find((e => e.shouldFetchOnReconnect()));
                    t && t.refetch({
                        cancelRefetch: !1
                    }), null == (e = this.retryer) || e.continue()
                }
                addObserver(e) {
                    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.cache.notify({
                        type: "observerAdded",
                        query: this,
                        observer: e
                    }))
                }
                removeObserver(e) {
                    this.observers.includes(e) && (this.observers = this.observers.filter((t => t !== e)), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
                        revert: !0
                    }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
                        type: "observerRemoved",
                        query: this,
                        observer: e
                    }))
                }
                getObserversCount() {
                    return this.observers.length
                }
                invalidate() {
                    this.state.isInvalidated || this.dispatch({
                        type: "invalidate"
                    })
                }
                fetch(e, t) {
                    var n, i;
                    if ("idle" !== this.state.fetchStatus)
                        if (this.state.dataUpdatedAt && null != t && t.cancelRefetch) this.cancel({
                            silent: !0
                        });
                        else if (this.promise) {
                        var c;
                        return null == (c = this.retryer) || c.continueRetry(), this.promise
                    }
                    if (e && this.setOptions(e), !this.options.queryFn) {
                        const e = this.observers.find((e => e.options.queryFn));
                        e && this.setOptions(e.options)
                    }
                    const r = (0, s.G9)(),
                        o = {
                            queryKey: this.queryKey,
                            pageParam: void 0,
                            meta: this.meta
                        },
                        u = e => {
                            Object.defineProperty(e, "signal", {
                                enumerable: !0,
                                get: () => {
                                    if (r) return this.abortSignalConsumed = !0, r.signal
                                }
                            })
                        };
                    u(o);
                    const d = () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(o)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'"),
                        l = {
                            fetchOptions: t,
                            options: this.options,
                            queryKey: this.queryKey,
                            state: this.state,
                            fetchFn: d
                        };
                    var h;
                    (u(l), null == (n = this.options.behavior) || n.onFetch(l), this.revertState = this.state, "idle" === this.state.fetchStatus || this.state.fetchMeta !== (null == (i = l.fetchOptions) ? void 0 : i.meta)) && this.dispatch({
                        type: "fetch",
                        meta: null == (h = l.fetchOptions) ? void 0 : h.meta
                    });
                    const p = e => {
                        var t, n, i, s;
                        ((0, a.DV)(e) && e.silent || this.dispatch({
                            type: "error",
                            error: e
                        }), (0, a.DV)(e)) || (null == (t = (n = this.cache.config).onError) || t.call(n, e, this), null == (i = (s = this.cache.config).onSettled) || i.call(s, this.state.data, e, this));
                        this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                    };
                    return this.retryer = (0, a.Mz)({
                        fn: l.fetchFn,
                        abort: null == r ? void 0 : r.abort.bind(r),
                        onSuccess: e => {
                            var t, n, i, s;
                            "undefined" !== typeof e ? (this.setData(e), null == (t = (n = this.cache.config).onSuccess) || t.call(n, e, this), null == (i = (s = this.cache.config).onSettled) || i.call(s, e, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1) : p(new Error(this.queryHash + " data is undefined"))
                        },
                        onError: p,
                        onFail: (e, t) => {
                            this.dispatch({
                                type: "failed",
                                failureCount: e,
                                error: t
                            })
                        },
                        onPause: () => {
                            this.dispatch({
                                type: "pause"
                            })
                        },
                        onContinue: () => {
                            this.dispatch({
                                type: "continue"
                            })
                        },
                        retry: l.options.retry,
                        retryDelay: l.options.retryDelay,
                        networkMode: l.options.networkMode
                    }), this.promise = this.retryer.promise, this.promise
                }
                dispatch(e) {
                    const t = t => {
                        var n, i;
                        switch (e.type) {
                            case "failed":
                                return { ...t,
                                    fetchFailureCount: e.failureCount,
                                    fetchFailureReason: e.error
                                };
                            case "pause":
                                return { ...t,
                                    fetchStatus: "paused"
                                };
                            case "continue":
                                return { ...t,
                                    fetchStatus: "fetching"
                                };
                            case "fetch":
                                return { ...t,
                                    fetchFailureCount: 0,
                                    fetchFailureReason: null,
                                    fetchMeta: null != (n = e.meta) ? n : null,
                                    fetchStatus: (0, a.Kw)(this.options.networkMode) ? "fetching" : "paused",
                                    ...!t.dataUpdatedAt && {
                                        error: null,
                                        status: "loading"
                                    }
                                };
                            case "success":
                                return { ...t,
                                    data: e.data,
                                    dataUpdateCount: t.dataUpdateCount + 1,
                                    dataUpdatedAt: null != (i = e.dataUpdatedAt) ? i : Date.now(),
                                    error: null,
                                    isInvalidated: !1,
                                    status: "success",
                                    ...!e.manual && {
                                        fetchStatus: "idle",
                                        fetchFailureCount: 0,
                                        fetchFailureReason: null
                                    }
                                };
                            case "error":
                                const s = e.error;
                                return (0, a.DV)(s) && s.revert && this.revertState ? { ...this.revertState,
                                    fetchStatus: "idle"
                                } : { ...t,
                                    error: s,
                                    errorUpdateCount: t.errorUpdateCount + 1,
                                    errorUpdatedAt: Date.now(),
                                    fetchFailureCount: t.fetchFailureCount + 1,
                                    fetchFailureReason: s,
                                    fetchStatus: "idle",
                                    status: "error"
                                };
                            case "invalidate":
                                return { ...t,
                                    isInvalidated: !0
                                };
                            case "setState":
                                return { ...t,
                                    ...e.state
                                }
                        }
                    };
                    this.state = t(this.state), o.V.batch((() => {
                        this.observers.forEach((t => {
                            t.onQueryUpdate(e)
                        })), this.cache.notify({
                            query: this,
                            type: "updated",
                            action: e
                        })
                    }))
                }
            }

            function l(e) {
                const t = "function" === typeof e.initialData ? e.initialData() : e.initialData,
                    n = "undefined" !== typeof t,
                    i = n ? "function" === typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
                return {
                    data: t,
                    dataUpdateCount: 0,
                    dataUpdatedAt: n ? null != i ? i : Date.now() : 0,
                    error: null,
                    errorUpdateCount: 0,
                    errorUpdatedAt: 0,
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchMeta: null,
                    isInvalidated: !1,
                    status: n ? "success" : "loading",
                    fetchStatus: "idle"
                }
            }
            var h = n(133989);
            class p extends h.l {
                constructor(e) {
                    super(), this.config = e || {}, this.queries = [], this.queriesMap = {}
                }
                build(e, t, n) {
                    var i;
                    const c = t.queryKey,
                        r = null != (i = t.queryHash) ? i : (0, s.Rm)(c, t);
                    let o = this.get(r);
                    return o || (o = new d({
                        cache: this,
                        logger: e.getLogger(),
                        queryKey: c,
                        queryHash: r,
                        options: e.defaultQueryOptions(t),
                        state: n,
                        defaultOptions: e.getQueryDefaults(c)
                    }), this.add(o)), o
                }
                add(e) {
                    this.queriesMap[e.queryHash] || (this.queriesMap[e.queryHash] = e, this.queries.push(e), this.notify({
                        type: "added",
                        query: e
                    }))
                }
                remove(e) {
                    const t = this.queriesMap[e.queryHash];
                    t && (e.destroy(), this.queries = this.queries.filter((t => t !== e)), t === e && delete this.queriesMap[e.queryHash], this.notify({
                        type: "removed",
                        query: e
                    }))
                }
                clear() {
                    o.V.batch((() => {
                        this.queries.forEach((e => {
                            this.remove(e)
                        }))
                    }))
                }
                get(e) {
                    return this.queriesMap[e]
                }
                getAll() {
                    return this.queries
                }
                find(e, t) {
                    const [n] = (0, s.I6)(e, t);
                    return "undefined" === typeof n.exact && (n.exact = !0), this.queries.find((e => (0, s._x)(n, e)))
                }
                findAll(e, t) {
                    const [n] = (0, s.I6)(e, t);
                    return Object.keys(n).length > 0 ? this.queries.filter((e => (0, s._x)(n, e))) : this.queries
                }
                notify(e) {
                    o.V.batch((() => {
                        this.listeners.forEach((({
                            listener: t
                        }) => {
                            t(e)
                        }))
                    }))
                }
                onFocus() {
                    o.V.batch((() => {
                        this.queries.forEach((e => {
                            e.onFocus()
                        }))
                    }))
                }
                onOnline() {
                    o.V.batch((() => {
                        this.queries.forEach((e => {
                            e.onOnline()
                        }))
                    }))
                }
            }
            var g = n(389886);
            class m extends h.l {
                constructor(e) {
                    super(), this.config = e || {}, this.mutations = [], this.mutationId = 0
                }
                build(e, t, n) {
                    const i = new g.m({
                        mutationCache: this,
                        logger: e.getLogger(),
                        mutationId: ++this.mutationId,
                        options: e.defaultMutationOptions(t),
                        state: n,
                        defaultOptions: t.mutationKey ? e.getMutationDefaults(t.mutationKey) : void 0
                    });
                    return this.add(i), i
                }
                add(e) {
                    this.mutations.push(e), this.notify({
                        type: "added",
                        mutation: e
                    })
                }
                remove(e) {
                    this.mutations = this.mutations.filter((t => t !== e)), this.notify({
                        type: "removed",
                        mutation: e
                    })
                }
                clear() {
                    o.V.batch((() => {
                        this.mutations.forEach((e => {
                            this.remove(e)
                        }))
                    }))
                }
                getAll() {
                    return this.mutations
                }
                find(e) {
                    return "undefined" === typeof e.exact && (e.exact = !0), this.mutations.find((t => (0, s.X7)(e, t)))
                }
                findAll(e) {
                    return this.mutations.filter((t => (0, s.X7)(e, t)))
                }
                notify(e) {
                    o.V.batch((() => {
                        this.listeners.forEach((({
                            listener: t
                        }) => {
                            t(e)
                        }))
                    }))
                }
                resumePausedMutations() {
                    var e;
                    return this.resuming = (null != (e = this.resuming) ? e : Promise.resolve()).then((() => {
                        const e = this.mutations.filter((e => e.state.isPaused));
                        return o.V.batch((() => e.reduce(((e, t) => e.then((() => t.continue().catch(s.ZT)))), Promise.resolve())))
                    })).then((() => {
                        this.resuming = void 0
                    })), this.resuming
                }
            }
            var b = n(115761),
                f = n(896474),
                v = n(209499);
            class y {
                constructor(e = {}) {
                    this.queryCache = e.queryCache || new p, this.mutationCache = e.mutationCache || new m, this.logger = e.logger || r._, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0
                }
                mount() {
                    this.mountCount++, 1 === this.mountCount && (this.unsubscribeFocus = b.j.subscribe((() => {
                        b.j.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus())
                    })), this.unsubscribeOnline = f.N.subscribe((() => {
                        f.N.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline())
                    })))
                }
                unmount() {
                    var e, t;
                    this.mountCount--, 0 === this.mountCount && (null == (e = this.unsubscribeFocus) || e.call(this), this.unsubscribeFocus = void 0, null == (t = this.unsubscribeOnline) || t.call(this), this.unsubscribeOnline = void 0)
                }
                isFetching(e, t) {
                    const [n] = (0, s.I6)(e, t);
                    return n.fetchStatus = "fetching", this.queryCache.findAll(n).length
                }
                isMutating(e) {
                    return this.mutationCache.findAll({ ...e,
                        fetching: !0
                    }).length
                }
                getQueryData(e, t) {
                    var n;
                    return null == (n = this.queryCache.find(e, t)) ? void 0 : n.state.data
                }
                ensureQueryData(e, t, n) {
                    const i = (0, s._v)(e, t, n),
                        c = this.getQueryData(i.queryKey);
                    return c ? Promise.resolve(c) : this.fetchQuery(i)
                }
                getQueriesData(e) {
                    return this.getQueryCache().findAll(e).map((({
                        queryKey: e,
                        state: t
                    }) => {
                        const n = t.data;
                        return [e, n]
                    }))
                }
                setQueryData(e, t, n) {
                    const i = this.queryCache.find(e),
                        c = null == i ? void 0 : i.state.data,
                        r = (0, s.SE)(t, c);
                    if ("undefined" === typeof r) return;
                    const o = (0, s._v)(e),
                        a = this.defaultQueryOptions(o);
                    return this.queryCache.build(this, a).setData(r, { ...n,
                        manual: !0
                    })
                }
                setQueriesData(e, t, n) {
                    return o.V.batch((() => this.getQueryCache().findAll(e).map((({
                        queryKey: e
                    }) => [e, this.setQueryData(e, t, n)]))))
                }
                getQueryState(e, t) {
                    var n;
                    return null == (n = this.queryCache.find(e, t)) ? void 0 : n.state
                }
                removeQueries(e, t) {
                    const [n] = (0, s.I6)(e, t), i = this.queryCache;
                    o.V.batch((() => {
                        i.findAll(n).forEach((e => {
                            i.remove(e)
                        }))
                    }))
                }
                resetQueries(e, t, n) {
                    const [i, c] = (0, s.I6)(e, t, n), r = this.queryCache, a = {
                        type: "active",
                        ...i
                    };
                    return o.V.batch((() => (r.findAll(i).forEach((e => {
                        e.reset()
                    })), this.refetchQueries(a, c))))
                }
                cancelQueries(e, t, n) {
                    const [i, c = {}] = (0, s.I6)(e, t, n);
                    "undefined" === typeof c.revert && (c.revert = !0);
                    const r = o.V.batch((() => this.queryCache.findAll(i).map((e => e.cancel(c)))));
                    return Promise.all(r).then(s.ZT).catch(s.ZT)
                }
                invalidateQueries(e, t, n) {
                    const [i, c] = (0, s.I6)(e, t, n);
                    return o.V.batch((() => {
                        var e, t;
                        if (this.queryCache.findAll(i).forEach((e => {
                                e.invalidate()
                            })), "none" === i.refetchType) return Promise.resolve();
                        const n = { ...i,
                            type: null != (e = null != (t = i.refetchType) ? t : i.type) ? e : "active"
                        };
                        return this.refetchQueries(n, c)
                    }))
                }
                refetchQueries(e, t, n) {
                    const [i, c] = (0, s.I6)(e, t, n), r = o.V.batch((() => this.queryCache.findAll(i).filter((e => !e.isDisabled())).map((e => {
                        var t;
                        return e.fetch(void 0, { ...c,
                            cancelRefetch: null == (t = null == c ? void 0 : c.cancelRefetch) || t,
                            meta: {
                                refetchPage: i.refetchPage
                            }
                        })
                    }))));
                    let a = Promise.all(r).then(s.ZT);
                    return null != c && c.throwOnError || (a = a.catch(s.ZT)), a
                }
                fetchQuery(e, t, n) {
                    const i = (0, s._v)(e, t, n),
                        c = this.defaultQueryOptions(i);
                    "undefined" === typeof c.retry && (c.retry = !1);
                    const r = this.queryCache.build(this, c);
                    return r.isStaleByTime(c.staleTime) ? r.fetch(c) : Promise.resolve(r.state.data)
                }
                prefetchQuery(e, t, n) {
                    return this.fetchQuery(e, t, n).then(s.ZT).catch(s.ZT)
                }
                fetchInfiniteQuery(e, t, n) {
                    const i = (0, s._v)(e, t, n);
                    return i.behavior = (0, v.Gm)(), this.fetchQuery(i)
                }
                prefetchInfiniteQuery(e, t, n) {
                    return this.fetchInfiniteQuery(e, t, n).then(s.ZT).catch(s.ZT)
                }
                resumePausedMutations() {
                    return this.mutationCache.resumePausedMutations()
                }
                getQueryCache() {
                    return this.queryCache
                }
                getMutationCache() {
                    return this.mutationCache
                }
                getLogger() {
                    return this.logger
                }
                getDefaultOptions() {
                    return this.defaultOptions
                }
                setDefaultOptions(e) {
                    this.defaultOptions = e
                }
                setQueryDefaults(e, t) {
                    const n = this.queryDefaults.find((t => (0, s.yF)(e) === (0, s.yF)(t.queryKey)));
                    n ? n.defaultOptions = t : this.queryDefaults.push({
                        queryKey: e,
                        defaultOptions: t
                    })
                }
                getQueryDefaults(e) {
                    if (!e) return;
                    const t = this.queryDefaults.find((t => (0, s.to)(e, t.queryKey)));
                    return null == t ? void 0 : t.defaultOptions
                }
                setMutationDefaults(e, t) {
                    const n = this.mutationDefaults.find((t => (0, s.yF)(e) === (0, s.yF)(t.mutationKey)));
                    n ? n.defaultOptions = t : this.mutationDefaults.push({
                        mutationKey: e,
                        defaultOptions: t
                    })
                }
                getMutationDefaults(e) {
                    if (!e) return;
                    const t = this.mutationDefaults.find((t => (0, s.to)(e, t.mutationKey)));
                    return null == t ? void 0 : t.defaultOptions
                }
                defaultQueryOptions(e) {
                    if (null != e && e._defaulted) return e;
                    const t = { ...this.defaultOptions.queries,
                        ...this.getQueryDefaults(null == e ? void 0 : e.queryKey),
                        ...e,
                        _defaulted: !0
                    };
                    return !t.queryHash && t.queryKey && (t.queryHash = (0, s.Rm)(t.queryKey, t)), "undefined" === typeof t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), "undefined" === typeof t.useErrorBoundary && (t.useErrorBoundary = !!t.suspense), t
                }
                defaultMutationOptions(e) {
                    return null != e && e._defaulted ? e : { ...this.defaultOptions.mutations,
                        ...this.getMutationDefaults(null == e ? void 0 : e.mutationKey),
                        ...e,
                        _defaulted: !0
                    }
                }
                clear() {
                    this.queryCache.clear(), this.mutationCache.clear()
                }
            }
            var w = n(59680);
            class _ extends p {
                find(e, t) {
                    const n = (0, w.G5)(e),
                        i = (0, w.G5)(t);
                    return super.find(n, i)
                }
                findAll(e, t) {
                    const n = (0, w.G5)(e),
                        i = (0, w.G5)(t);
                    return (0, w.es)(n) ? super.findAll(n, i) : super.findAll(n)
                }
            }
            class S extends m {
                find(e) {
                    return super.find((0, w.G5)(e))
                }
                findAll(e) {
                    return super.findAll((0, w.G5)(e))
                }
            }
            class k extends y {
                constructor(e = {}) {
                    const t = (0, w.G5)(e),
                        n = {
                            logger: (0, w.G5)(t.logger),
                            defaultOptions: (0, w.G5)(t.defaultOptions),
                            queryCache: t.queryCache || new _,
                            mutationCache: t.mutationCache || new S
                        };
                    super(n), this.isRestoring = (0, c.iH)(!1)
                }
                isFetching(e, t) {
                    const n = (0, w.G5)(e),
                        i = (0, w.G5)(t);
                    return (0, w.es)(n) ? super.isFetching(n, i) : super.isFetching(n)
                }
                isMutating(e) {
                    return super.isMutating((0, w.G5)(e))
                }
                getQueryData(e, t) {
                    return super.getQueryData((0, w.G5)(e), (0, w.G5)(t))
                }
                getQueriesData(e) {
                    const t = (0, w.G5)(e);
                    return (0, w.es)(t), super.getQueriesData(t)
                }
                setQueryData(e, t, n) {
                    return super.setQueryData((0, w.G5)(e), t, (0, w.G5)(n))
                }
                setQueriesData(e, t, n) {
                    const i = (0, w.G5)(e),
                        s = (0, w.G5)(n);
                    return (0, w.es)(i), super.setQueriesData(i, t, s)
                }
                getQueryState(e, t) {
                    return super.getQueryState((0, w.G5)(e), (0, w.G5)(t))
                }
                removeQueries(e, t) {
                    const n = (0, w.G5)(e);
                    return (0, w.es)(n) ? super.removeQueries(n, (0, w.G5)(t)) : super.removeQueries(n)
                }
                resetQueries(e, t, n) {
                    const i = (0, w.G5)(e),
                        s = (0, w.G5)(t);
                    return (0, w.es)(i) ? super.resetQueries(i, s, (0, w.G5)(n)) : super.resetQueries(i, s)
                }
                cancelQueries(e, t, n) {
                    const i = (0, w.G5)(e),
                        s = (0, w.G5)(t);
                    return (0, w.es)(i) ? super.cancelQueries(i, s, (0, w.G5)(n)) : super.cancelQueries(i, s)
                }
                invalidateQueries(e, t, n) {
                    const i = (0, w.G5)(e),
                        s = (0, w.G5)(t);
                    return (0, w.es)(i) ? super.invalidateQueries(i, s, (0, w.G5)(n)) : super.invalidateQueries(i, s)
                }
                refetchQueries(e, t, n) {
                    const i = (0, w.G5)(e),
                        s = (0, w.G5)(t);
                    return (0, w.es)(i) ? super.refetchQueries(i, s, (0, w.G5)(n)) : super.refetchQueries(i, s)
                }
                fetchQuery(e, t, n) {
                    const i = (0, w.G5)(e),
                        s = (0, w.G5)(t);
                    return (0, w.es)(i) ? super.fetchQuery(i, s, (0, w.G5)(n)) : super.fetchQuery(i)
                }
                prefetchQuery(e, t, n) {
                    return super.prefetchQuery((0, w.G5)(e), (0, w.G5)(t), (0, w.G5)(n))
                }
                fetchInfiniteQuery(e, t, n) {
                    const i = (0, w.G5)(e),
                        s = (0, w.G5)(t);
                    return (0, w.es)(i) ? super.fetchInfiniteQuery(i, s, (0, w.G5)(n)) : super.fetchInfiniteQuery(i)
                }
                prefetchInfiniteQuery(e, t, n) {
                    return super.prefetchInfiniteQuery((0, w.G5)(e), (0, w.G5)(t), (0, w.G5)(n))
                }
                setDefaultOptions(e) {
                    super.setDefaultOptions((0, w.G5)(e))
                }
                setQueryDefaults(e, t) {
                    super.setQueryDefaults((0, w.G5)(e), (0, w.G5)(t))
                }
                getQueryDefaults(e) {
                    return super.getQueryDefaults((0, w.G5)(e))
                }
                setMutationDefaults(e, t) {
                    super.setMutationDefaults((0, w.G5)(e), (0, w.G5)(t))
                }
                getMutationDefaults(e) {
                    return super.getMutationDefaults((0, w.G5)(e))
                }
            }
            const C = {
                install: (e, t = {}) => {
                    const n = (0, w.LM)(t.queryClientKey);
                    let c;
                    if ("queryClient" in t && t.queryClient) c = t.queryClient;
                    else if (t.contextSharing && "undefined" !== typeof window)
                        if (window.__VUE_QUERY_CONTEXT__) c = window.__VUE_QUERY_CONTEXT__;
                        else {
                            const e = "queryClientConfig" in t ? t.queryClientConfig : void 0;
                            c = new k(e), window.__VUE_QUERY_CONTEXT__ = c
                        }
                    else {
                        const e = "queryClientConfig" in t ? t.queryClientConfig : void 0;
                        c = new k(e)
                    }
                    s.sk || c.mount();
                    let r = () => {};
                    if (t.clientPersister) {
                        c.isRestoring.value = !0;
                        const [e, n] = t.clientPersister(c);
                        r = e, n.then((() => {
                            c.isRestoring.value = !1, null == t.clientPersisterOnSuccess || t.clientPersisterOnSuccess(c)
                        }))
                    }
                    const o = () => {
                        c.unmount(), r()
                    };
                    if (e.onUnmount) e.onUnmount(o);
                    else {
                        const t = e.unmount;
                        e.unmount = function() {
                            o(), t()
                        }
                    }
                    i.$Qs ? e.mixin({
                        beforeCreate() {
                            if (!this._provided) {
                                const e = {};
                                Object.defineProperty(this, "_provided", {
                                    get: () => e,
                                    set: t => Object.assign(e, t)
                                })
                            }
                            this._provided[n] = c
                        }
                    }) : e.provide(n, c)
                }
            }
        },
        279180: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var i = n(60337),
                s = n(856009),
                c = Array.prototype,
                r = c.splice;

            function o(e, t) {
                var n = e ? t.length : 0,
                    c = n - 1;
                while (n--) {
                    var o = t[n];
                    if (n == c || o !== a) {
                        var a = o;
                        (0, s.Z)(o) ? r.call(e, o, 1): (0, i.Z)(e, o)
                    }
                }
                return e
            }
            const a = o
        },
        845542: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            var i = n(369162),
                s = n(279180);

            function c(e, t) {
                var n = [];
                if (!e || !e.length) return n;
                var c = -1,
                    r = [],
                    o = e.length;
                t = (0, i.Z)(t, 3);
                while (++c < o) {
                    var a = e[c];
                    t(a, c, e) && (n.push(a), r.push(c))
                }
                return (0, s.Z)(e, r), n
            }
            const r = c
        }
    }
]);