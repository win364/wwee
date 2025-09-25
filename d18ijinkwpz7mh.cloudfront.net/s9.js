((e, t) => {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("sm-tracker-smartico-cf9", t) : (e = "undefined" != typeof globalThis ? globalThis : e || self)._smartico = t()
})(this, function() {
    var __assign = function() {
        return (__assign = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }).apply(this, arguments)
    };

    function __rest(e, t) {
        var n = {};
        for (r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    }

    function __awaiter(e, s, o, c) {
        return new(o = o || Promise)(function(n, t) {
            function i(e) {
                try {
                    a(c.next(e))
                } catch (e) {
                    t(e)
                }
            }

            function r(e) {
                try {
                    a(c.throw(e))
                } catch (e) {
                    t(e)
                }
            }

            function a(e) {
                var t;
                e.done ? n(e.value) : ((t = e.value) instanceof o ? t : new o(function(e) {
                    e(t)
                })).then(i, r)
            }
            a((c = c.apply(e, s || [])).next())
        })
    }

    function __generator(i, r) {
        var a, s, o, c = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            },
            e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            };
        return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
            return this
        }), e;

        function t(n) {
            return function(e) {
                var t = [n, e];
                if (a) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (a = 1, s && (o = 2 & t[0] ? s.return : t[0] ? s.throw || ((o = s.return) && o.call(s), 0) : s.next) && !(o = o.call(s, t[1])).done) return o;
                    switch (s = 0, (t = o ? [2 & t[0], o.value] : t)[0]) {
                        case 0:
                        case 1:
                            o = t;
                            break;
                        case 4:
                            return c.label++, {
                                value: t[1],
                                done: !1
                            };
                        case 5:
                            c.label++, s = t[1], t = [0];
                            continue;
                        case 7:
                            t = c.ops.pop(), c.trys.pop();
                            continue;
                        default:
                            if (!(o = 0 < (o = c.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) c.label = t[1];
                            else if (6 === t[0] && c.label < o[1]) c.label = o[1], o = t;
                            else {
                                if (!(o && c.label < o[2])) {
                                    o[2] && c.ops.pop(), c.trys.pop();
                                    continue
                                }
                                c.label = o[2], c.ops.push(t)
                            }
                    }
                    t = r.call(i, c)
                } catch (e) {
                    t = [6, e], s = 0
                } finally {
                    a = o = 0
                }
                if (5 & t[0]) throw t[1];
                return {
                    value: t[0] ? t[1] : void 0,
                    done: !0
                }
            }
        }
    }

    function __spreadArray(e, t) {
        for (var n = 0, i = t.length, r = e.length; n < i; n++, r++) e[r] = t[n];
        return e
    }
    var extendStatics = function(e, t) {
        return (extendStatics = Object.setPrototypeOf || ({
                __proto__: []
            }
            instanceof Array ? function(e, t) {
                e.__proto__ = t
            } : function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            }))(e, t)
    };

    function __extends(e, t) {
        function n() {
            this.constructor = e
        }
        extendStatics(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }

    function __values(e) {
        var t = "function" == typeof Symbol && e[Symbol.iterator],
            n = 0;
        return t ? t.call(e) : {
            next: function() {
                return {
                    value: (e = e && n >= e.length ? void 0 : e) && e[n++],
                    done: !e
                }
            }
        }
    }

    function __read(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var i, r, a = n.call(e),
            s = [];
        try {
            for (;
                (void 0 === t || 0 < t--) && !(i = a.next()).done;) s.push(i.value)
        } catch (e) {
            r = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (n = a.return) && n.call(a)
            } finally {
                if (r) throw r.error
            }
        }
        return s
    }

    function __spread() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
        return e
    }
    var Event$1 = function(e, t) {
            this.target = t, this.type = e
        },
        ErrorEvent = (n => {
            function e(e, t) {
                t = n.call(this, "error", t) || this;
                return t.message = e.message, t.error = e, t
            }
            return __extends(e, n), e
        })(Event$1),
        CloseEvent = (i => {
            function e(e, t, n) {
                void 0 === e && (e = 1e3), void 0 === t && (t = "");
                n = i.call(this, "close", n) || this;
                return n.wasClean = !0, n.code = e, n.reason = t, n
            }
            return __extends(e, i), e
        })(Event$1),
        getGlobalWebSocket = function() {
            if ("undefined" != typeof WebSocket) return WebSocket
        },
        isWebSocket = function(e) {
            return void 0 !== e && !!e && 2 === e.CLOSING
        },
        DEFAULT = {
            maxReconnectionDelay: 1e4,
            minReconnectionDelay: 1e3 + 4e3 * Math.random(),
            minUptime: 5e3,
            reconnectionDelayGrowFactor: 1.3,
            connectionTimeout: 4e3,
            maxRetries: 1 / 0,
            maxEnqueuedMessages: 1 / 0,
            startClosed: !1,
            debug: !1
        },
        ReconnectingWebSocket = (() => {
            function e(e, t, n) {
                var i = this;
                void 0 === n && (n = {}), this._listeners = {
                    error: [],
                    message: [],
                    open: [],
                    close: []
                }, this._retryCount = -1, this._shouldReconnect = !0, this._connectLock = !1, this._binaryType = "blob", this._closeCalled = !1, this._messageQueue = [], this.onclose = null, this.onerror = null, this.onmessage = null, this.onopen = null, this._handleOpen = function(t) {
                    i._debug("open event");
                    var e = i._options.minUptime,
                        e = void 0 === e ? DEFAULT.minUptime : e;
                    clearTimeout(i._connectTimeout), i._uptimeTimeout = setTimeout(function() {
                        return i._acceptOpen()
                    }, e), i._ws.binaryType = i._binaryType, i._messageQueue.forEach(function(e) {
                        return i._ws.send(e)
                    }), i._messageQueue = [], i.onopen && i.onopen(t), i._listeners.open.forEach(function(e) {
                        return i._callEventListener(t, e)
                    })
                }, this._handleMessage = function(t) {
                    i._debug("message event"), i.onmessage && i.onmessage(t), i._listeners.message.forEach(function(e) {
                        return i._callEventListener(t, e)
                    })
                }, this._handleError = function(t) {
                    i._debug("error event", t.message), i._disconnect(void 0, "TIMEOUT" === t.message ? "timeout" : void 0), i.onerror && i.onerror(t), i._debug("exec error listeners"), i._listeners.error.forEach(function(e) {
                        return i._callEventListener(t, e)
                    }), i._connect()
                }, this._handleClose = function(t) {
                    i._debug("close event"), i._clearTimeouts(), i._shouldReconnect && i._connect(), i.onclose && i.onclose(t), i._listeners.close.forEach(function(e) {
                        return i._callEventListener(t, e)
                    })
                }, this._url = e, this._protocols = t, this._options = n, this._options.startClosed && (this._shouldReconnect = !1), this._connect()
            }
            return Object.defineProperty(e, "CONNECTING", {
                get: function() {
                    return 0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "OPEN", {
                get: function() {
                    return 1
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "CLOSING", {
                get: function() {
                    return 2
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "CLOSED", {
                get: function() {
                    return 3
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "CONNECTING", {
                get: function() {
                    return e.CONNECTING
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "OPEN", {
                get: function() {
                    return e.OPEN
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "CLOSING", {
                get: function() {
                    return e.CLOSING
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "CLOSED", {
                get: function() {
                    return e.CLOSED
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "binaryType", {
                get: function() {
                    return this._ws ? this._ws.binaryType : this._binaryType
                },
                set: function(e) {
                    this._binaryType = e, this._ws && (this._ws.binaryType = e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "retryCount", {
                get: function() {
                    return Math.max(this._retryCount, 0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "bufferedAmount", {
                get: function() {
                    return this._messageQueue.reduce(function(e, t) {
                        return "string" == typeof t ? e += t.length : t instanceof Blob ? e += t.size : e += t.byteLength, e
                    }, 0) + (this._ws ? this._ws.bufferedAmount : 0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "extensions", {
                get: function() {
                    return this._ws ? this._ws.extensions : ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "protocol", {
                get: function() {
                    return this._ws ? this._ws.protocol : ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "readyState", {
                get: function() {
                    return this._ws ? this._ws.readyState : this._options.startClosed ? e.CLOSED : e.CONNECTING
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "url", {
                get: function() {
                    return this._ws ? this._ws.url : ""
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.close = function(e, t) {
                void 0 === e && (e = 1e3), this._closeCalled = !0, this._shouldReconnect = !1, this._clearTimeouts(), this._ws ? this._ws.readyState === this.CLOSED ? this._debug("close: already closed") : this._ws.close(e, t) : this._debug("close enqueued: no ws instance")
            }, e.prototype.reconnect = function(e, t) {
                this._shouldReconnect = !0, this._closeCalled = !1, this._retryCount = -1, this._ws && this._ws.readyState !== this.CLOSED && this._disconnect(e, t), this._connect()
            }, e.prototype.send = function(e) {
                var t;
                this._ws && this._ws.readyState === this.OPEN ? (this._debug("send", e), this._ws.send(e)) : (t = void 0 === (t = this._options.maxEnqueuedMessages) ? DEFAULT.maxEnqueuedMessages : t, this._messageQueue.length < t && (this._debug("enqueue", e), this._messageQueue.push(e)))
            }, e.prototype.addEventListener = function(e, t) {
                this._listeners[e] && this._listeners[e].push(t)
            }, e.prototype.dispatchEvent = function(e) {
                var t, n, i = this._listeners[e.type];
                if (i) try {
                    for (var r = __values(i), a = r.next(); !a.done; a = r.next()) {
                        var s = a.value;
                        this._callEventListener(e, s)
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        a && !a.done && (n = r.return) && n.call(r)
                    } finally {
                        if (t) throw t.error
                    }
                }
                return !0
            }, e.prototype.removeEventListener = function(e, t) {
                this._listeners[e] && (this._listeners[e] = this._listeners[e].filter(function(e) {
                    return e !== t
                }))
            }, e.prototype._debug = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._options.debug && console.log.apply(console, __spread(["RWS>"], e))
            }, e.prototype._getNextDelay = function() {
                var e = this._options,
                    t = e.reconnectionDelayGrowFactor,
                    t = void 0 === t ? DEFAULT.reconnectionDelayGrowFactor : t,
                    n = e.minReconnectionDelay,
                    n = void 0 === n ? DEFAULT.minReconnectionDelay : n,
                    e = e.maxReconnectionDelay,
                    e = void 0 === e ? DEFAULT.maxReconnectionDelay : e,
                    i = 0;
                return 0 < this._retryCount && e < (i = n * Math.pow(t, this._retryCount - 1)) && (i = e), this._debug("next delay", i), i
            }, e.prototype._wait = function() {
                var t = this;
                return new Promise(function(e) {
                    setTimeout(e, t._getNextDelay())
                })
            }, e.prototype._getNextUrl = function(e) {
                if ("string" == typeof e) return Promise.resolve(e);
                if ("function" == typeof e) {
                    e = e();
                    if ("string" == typeof e) return Promise.resolve(e);
                    if (e.then) return e
                }
                throw Error("Invalid URL")
            }, e.prototype._connect = function() {
                var t = this;
                if (!this._connectLock && this._shouldReconnect) {
                    this._connectLock = !0;
                    var e = this._options,
                        n = e.maxRetries,
                        n = void 0 === n ? DEFAULT.maxRetries : n,
                        i = e.connectionTimeout,
                        r = void 0 === i ? DEFAULT.connectionTimeout : i,
                        i = e.WebSocket,
                        a = void 0 === i ? getGlobalWebSocket() : i;
                    if (this._retryCount >= n) this._debug("max retries reached", this._retryCount, ">=", n);
                    else {
                        if (this._retryCount++, this._debug("connect", this._retryCount), this._removeListeners(), !isWebSocket(a)) throw Error("No valid WebSocket class provided");
                        this._wait().then(function() {
                            return t._getNextUrl(t._url)
                        }).then(function(e) {
                            t._closeCalled || (t._debug("connect", {
                                url: e,
                                protocols: t._protocols
                            }), t._ws = t._protocols ? new a(e, t._protocols) : new a(e), t._ws.binaryType = t._binaryType, t._connectLock = !1, t._addListeners(), t._connectTimeout = setTimeout(function() {
                                return t._handleTimeout()
                            }, r))
                        })
                    }
                }
            }, e.prototype._handleTimeout = function() {
                this._debug("timeout event"), this._handleError(new ErrorEvent(Error("TIMEOUT"), this))
            }, e.prototype._disconnect = function(e, t) {
                if (void 0 === e && (e = 1e3), this._clearTimeouts(), this._ws) {
                    this._removeListeners();
                    try {
                        this._ws.close(e, t), this._handleClose(new CloseEvent(e, t, this))
                    } catch (e) {}
                }
            }, e.prototype._acceptOpen = function() {
                this._debug("accept open"), this._retryCount = 0
            }, e.prototype._callEventListener = function(e, t) {
                "handleEvent" in t ? t.handleEvent(e) : t(e)
            }, e.prototype._removeListeners = function() {
                this._ws && (this._debug("removeListeners"), this._ws.removeEventListener("open", this._handleOpen), this._ws.removeEventListener("close", this._handleClose), this._ws.removeEventListener("message", this._handleMessage), this._ws.removeEventListener("error", this._handleError))
            }, e.prototype._addListeners = function() {
                this._ws && (this._debug("addListeners"), this._ws.addEventListener("open", this._handleOpen), this._ws.addEventListener("close", this._handleClose), this._ws.addEventListener("message", this._handleMessage), this._ws.addEventListener("error", this._handleError))
            }, e.prototype._clearTimeouts = function() {
                clearTimeout(this._connectTimeout), clearTimeout(this._uptimeTimeout)
            }, e
        })();

    function __async(o) {
        return new Promise(function(i, r) {
            function a(e, t) {
                try {
                    var n = o[t ? "throw" : "next"](e)
                } catch (e) {
                    return void r(e)
                }
                n.done ? i(n.value) : Promise.resolve(n.value).then(a, s)
            }

            function s(e) {
                a(e, 1)
            }
            a()
        })
    }
    var commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function unwrapExports(e) {
        e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") && e.default
    }

    function createCommonjsModule(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    var typescriptMap = createCommonjsModule(function(e, t) {
            var r = commonjsGlobal && commonjsGlobal.__spreadArrays || function() {
                    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                    for (var i = Array(e), r = 0, t = 0; t < n; t++)
                        for (var a = arguments[t], s = 0, o = a.length; s < o; s++, r++) i[r] = a[s];
                    return i
                },
                n = (Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.TSMap = void 0, a.prototype.fromJSON = function(t, n) {
                    var i = this,
                        r = function(e) {
                            return null !== e && "object" == typeof e && n ? (new a).fromJSON(e, !0) : Array.isArray(e) && n ? e.map(function(e) {
                                return r(e)
                            }) : e
                        };
                    return Object.keys(t).forEach(function(e) {
                        t.hasOwnProperty(e) && i.set(e, r(t[e]))
                    }), i
                }, a.prototype.toJSON = function() {
                    var t = {},
                        n = this,
                        i = function(e) {
                            return e instanceof a ? e.toJSON() : Array.isArray(e) ? e.map(function(e) {
                                return i(e)
                            }) : e
                        };
                    return n.keys().forEach(function(e) {
                        t[String(e)] = i(n.get(e))
                    }), t
                }, a.prototype.entries = function() {
                    var t = this;
                    return [].slice.call(this.keys().map(function(e) {
                        return [e, t.get(e)]
                    }))
                }, a.prototype.keys = function() {
                    return [].slice.call(this._keys)
                }, a.prototype.values = function() {
                    return [].slice.call(this._values)
                }, a.prototype.has = function(e) {
                    return -1 < this._keys.indexOf(e)
                }, a.prototype.get = function(e) {
                    e = this._keys.indexOf(e);
                    return -1 < e ? this._values[e] : void 0
                }, a.prototype.deepGet = function(e) {
                    var n;
                    return e && e.length ? (n = function(e, t) {
                        return null == e ? null : t.length ? n(e instanceof a ? e.get(t[0]) : e[t[0]], t.slice(1)) : e
                    })(this.get(e[0]), e.slice(1)) : null
                }, a.prototype.set = function(e, t) {
                    var n = this,
                        i = this._keys.indexOf(e);
                    return -1 < i ? n._values[i] = t : (n._keys.push(e), n._values.push(t), n.length = n._values.length), this
                }, a.prototype.sortedSet = function(e, t, n, i) {
                    var r = this._keys.length,
                        n = n || 0,
                        i = void 0 !== i ? i : r - 1;
                    return 0 == r ? (this._keys.push(e), this._values.push(t), this) : e == this._keys[n] ? (this._values[n] = t, this) : e == this._keys[i] ? (this._values[i] = t, this) : e > this._keys[i] ? (this._keys.splice(i + 1, 0, e), this._values.splice(i + 1, 0, t), this) : e < this._keys[n] ? (this._values.splice(n, 0, t), this._keys.splice(n, 0, e), this) : i <= n ? this : (r = n + Math.floor((i - n) / 2), e < this._keys[r] ? this.sortedSet(e, t, n, r - 1) : e > this._keys[r] ? this.sortedSet(e, t, r + 1, i) : this)
                }, a.prototype.size = function() {
                    return this.length
                }, a.prototype.clear = function() {
                    return this._keys.length = this.length = this._values.length = 0, this
                }, a.prototype.delete = function(e) {
                    var t = this,
                        e = t._keys.indexOf(e);
                    return -1 < e && (t._keys.splice(e, 1), t._values.splice(e, 1), t.length = t._keys.length, !0)
                }, a.prototype.forEach = function(n) {
                    var i = this;
                    this._keys.forEach(function(e, t) {
                        n(i.get(e), e, t)
                    })
                }, a.prototype.map = function(n) {
                    var i = this;
                    return this.keys().map(function(e, t) {
                        return n(i.get(e), e, t)
                    })
                }, a.prototype.filter = function(n) {
                    var i = this;
                    return r(i._keys).forEach(function(e, t) {
                        !1 === n(i.get(e), e, t) && i.delete(e)
                    }), this
                }, a.prototype.clone = function() {
                    return new a(this.entries())
                }, a);

            function a(e) {
                var n = this;
                n._keys = [], n._values = [], n.length = 0, e && e.forEach(function(e, t) {
                    n.set(e[0], e[1])
                })
            }
            t.TSMap = n
        }),
        typescriptMap_1 = (unwrapExports(typescriptMap), typescriptMap.TSMap),
        ClassId, SAWBuyInType, SAWBuyInTypeName, SAWAcknowledgeType, SAWAcknowledgeTypeName, SAWAskForUsername, SAWGameType, SAWGameTypeName, SAWPrizeType, MiniGamePrizeTypeName, SAWSpinErrorCode, SAWWinSoundType, SAWGameLayout, PrizeModifiers, SAWWheelLayout, ECacheContext, ActivityTypeLimited, PublicLabelSettings, TranslationArea, InboxMessageType, OpenLinksType, InboxCategories, BuyStoreItemErrorCode, StoreItemPurchaseType, StoreItemType, StoreItemTypeName, AchievementStatus, AchievementTaskType, AchievementType, AchievementAvailabilityStatus, _class, ScheduledMissionType, TournamentRegistrationType, TournamentRegistrationStatus, TournamentRegistrationStatusName, TournamentInstanceStatus, TournamentRegistrationError, TournamentType, LeaderBoardPeriodType, RaffleDrawInstanceState, RaffleDrawTypeExecution, onUpdateContextKey, AchCustomSectionType, AchCustomLayoutTheme, AchMissionsTabsOptions, AchOverviewMissionsFilter, BonusStatus, QuizSportType, SAWGPMarketType, QuizAnswersValueType, JackpotContributionType, JackPotTemparature, JackpotType, _a;

    function _extends() {
        return (_extends = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n, i = arguments[t];
                for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        }).apply(this, arguments)
    }(e => {
        e[e.PING = 1] = "PING", e[e.PONG = 2] = "PONG", e[e.INIT = 3] = "INIT", e[e.INIT_RESPONSE = 4] = "INIT_RESPONSE", e[e.IDENTIFY = 5] = "IDENTIFY", e[e.IDENTIFY_RESPONSE = 6] = "IDENTIFY_RESPONSE", e[e.LOGIN = 7] = "LOGIN", e[e.LOGOUT = 8] = "LOGOUT", e[e.EVENT = 9] = "EVENT", e[e.EVENT_RESPONSE = 10] = "EVENT_RESPONSE", e[e.LOGIN_RESPONSE = 11] = "LOGIN_RESPONSE", e[e.LOGOUT_RESPONSE = 12] = "LOGOUT_RESPONSE", e[e.GET_TRANSLATIONS_REQUEST = 13] = "GET_TRANSLATIONS_REQUEST", e[e.GET_TRANSLATIONS_RESPONSE = 14] = "GET_TRANSLATIONS_RESPONSE", e[e.CLIENT_ENGAGEMENT_IMPRESSION_REQUEST = 103] = "CLIENT_ENGAGEMENT_IMPRESSION_REQUEST", e[e.CLIENT_ENGAGEMENT_ACTION_REQUEST = 104] = "CLIENT_ENGAGEMENT_ACTION_REQUEST", e[e.CLIENT_EXECUTE_DEEPLINK_EVENT = 105] = "CLIENT_EXECUTE_DEEPLINK_EVENT", e[e.CLIENT_ENGAGEMENT_FAILED_REQUEST = 106] = "CLIENT_ENGAGEMENT_FAILED_REQUEST", e[e.CLIENT_EXECUTE_JS_EVENT = 107] = "CLIENT_EXECUTE_JS_EVENT", e[e.CLIENT_PUBLIC_PROPERTIES_CHANGED_EVENT = 108] = "CLIENT_PUBLIC_PROPERTIES_CHANGED_EVENT", e[e.CLIENT_ENGAGEMENT_EVENT_NEW = 110] = "CLIENT_ENGAGEMENT_EVENT_NEW", e[e.CLIENT_TRACK_ACTIVITY_REQUEST = 155] = "CLIENT_TRACK_ACTIVITY_REQUEST", e[e.CLIENT_SET_AVATAR_REQUEST = 157] = "CLIENT_SET_AVATAR_REQUEST", e[e.CLIENT_SET_AVATAR_RESPONSE = 158] = "CLIENT_SET_AVATAR_RESPONSE", e[e.CLIENT_SET_CUSTOM_USERNAME_REQUEST = 159] = "CLIENT_SET_CUSTOM_USERNAME_REQUEST", e[e.CLIENT_SET_CUSTOM_USERNAME_RESPONSE = 160] = "CLIENT_SET_CUSTOM_USERNAME_RESPONSE", e[e.CHECK_SEGMENT_MATCH_REQUEST = 161] = "CHECK_SEGMENT_MATCH_REQUEST", e[e.CHECK_SEGMENT_MATCH_RESPONSE = 162] = "CHECK_SEGMENT_MATCH_RESPONSE", e[e.GET_LEVEL_MAP_REQUEST = 500] = "GET_LEVEL_MAP_REQUEST", e[e.GET_LEVEL_MAP_RESPONSE = 501] = "GET_LEVEL_MAP_RESPONSE", e[e.GET_ACHIEVEMENT_MAP_REQUEST = 502] = "GET_ACHIEVEMENT_MAP_REQUEST", e[e.GET_ACHIEVEMENT_MAP_RESPONSE = 503] = "GET_ACHIEVEMENT_MAP_RESPONSE", e[e.RELOAD_ACHIEVEMENTS_EVENT = 504] = "RELOAD_ACHIEVEMENTS_EVENT", e[e.GET_LEADERS_BOARD_REQUEST = 505] = "GET_LEADERS_BOARD_REQUEST", e[e.GET_LEADERS_BOARD_RESPONSE = 506] = "GET_LEADERS_BOARD_RESPONSE", e[e.GET_SHOP_ITEMS_REQUEST = 509] = "GET_SHOP_ITEMS_REQUEST", e[e.GET_SHOP_ITEMS_RESPONSE = 510] = "GET_SHOP_ITEMS_RESPONSE", e[e.BUY_SHOP_ITEM_REQUEST = 511] = "BUY_SHOP_ITEM_REQUEST", e[e.BUY_SHOP_ITEM_RESPONSE = 512] = "BUY_SHOP_ITEM_RESPONSE", e[e.GET_INBOX_MESSAGES_REQUEST = 513] = "GET_INBOX_MESSAGES_REQUEST", e[e.GET_INBOX_MESSAGES_RESPONSE = 514] = "GET_INBOX_MESSAGES_RESPONSE", e[e.GET_SHOP_CATEGORIES_REQUEST = 515] = "GET_SHOP_CATEGORIES_REQUEST", e[e.GET_SHOP_CATEGORIES_RESPONSE = 516] = "GET_SHOP_CATEGORIES_RESPONSE", e[e.GET_TOURNAMENT_LOBBY_REQUEST = 517] = "GET_TOURNAMENT_LOBBY_REQUEST", e[e.GET_TOURNAMENT_LOBBY_RESPONSE = 518] = "GET_TOURNAMENT_LOBBY_RESPONSE", e[e.GET_TOURNAMENT_INFO_REQUEST = 519] = "GET_TOURNAMENT_INFO_REQUEST", e[e.GET_TOURNAMENT_INFO_RESPONSE = 520] = "GET_TOURNAMENT_INFO_RESPONSE", e[e.TOURNAMENT_REGISTER_REQUEST = 521] = "TOURNAMENT_REGISTER_REQUEST", e[e.TOURNAMENT_REGISTER_RESPONSE = 522] = "TOURNAMENT_REGISTER_RESPONSE", e[e.GET_CUSTOM_SECTIONS_REQUEST = 523] = "GET_CUSTOM_SECTIONS_REQUEST", e[e.GET_CUSTOM_SECTIONS_RESPONSE = 524] = "GET_CUSTOM_SECTIONS_RESPONSE", e[e.MISSION_OPTIN_REQUEST = 525] = "MISSION_OPTIN_REQUEST", e[e.MISSION_OPTIN_RESPONSE = 526] = "MISSION_OPTIN_RESPONSE", e[e.GET_ACHIEVEMENT_USER_REQUEST = 527] = "GET_ACHIEVEMENT_USER_REQUEST", e[e.GET_ACHIEVEMENT_USER_RESPONSE = 528] = "GET_ACHIEVEMENT_USER_RESPONSE", e[e.MARK_INBOX_READ_REQUEST = 529] = "MARK_INBOX_READ_REQUEST", e[e.MARK_INBOX_READ_RESPONSE = 530] = "MARK_INBOX_READ_RESPONSE", e[e.MARK_INBOX_STARRED_REQUEST = 531] = "MARK_INBOX_STARRED_REQUEST", e[e.MARK_INBOX_STARRED_RESPONSE = 532] = "MARK_INBOX_STARRED_RESPONSE", e[e.MARK_INBOX_DELETED_REQUEST = 535] = "MARK_INBOX_DELETED_REQUEST", e[e.MARK_INBOX_DELETED_RESPONSE = 536] = "MARK_INBOX_DELETED_RESPONSE", e[e.GET_ACH_CATEGORIES_REQUEST = 537] = "GET_ACH_CATEGORIES_REQUEST", e[e.GET_ACH_CATEGORIES_RESPONSE = 538] = "GET_ACH_CATEGORIES_RESPONSE", e[e.ACHIEVEMENT_CLAIM_PRIZE_REQUEST = 539] = "ACHIEVEMENT_CLAIM_PRIZE_REQUEST", e[e.ACHIEVEMENT_CLAIM_PRIZE_RESPONSE = 540] = "ACHIEVEMENT_CLAIM_PRIZE_RESPONSE", e[e.ACH_SHOP_ITEM_HISTORY_REQUEST = 541] = "ACH_SHOP_ITEM_HISTORY_REQUEST", e[e.ACH_SHOP_ITEM_HISTORY_RESPONSE = 542] = "ACH_SHOP_ITEM_HISTORY_RESPONSE", e[e.GET_RELATED_ACH_N_TOURNAMENTS_REQUEST = 543] = "GET_RELATED_ACH_N_TOURNAMENTS_REQUEST", e[e.GET_RELATED_ACH_N_TOURNAMENTS_RESPONSE = 544] = "GET_RELATED_ACH_N_TOURNAMENTS_RESPONSE", e[e.GET_BONUSES_REQUEST = 600] = "GET_BONUSES_REQUEST", e[e.GET_BONUSES_RESPONSE = 601] = "GET_BONUSES_RESPONSE", e[e.CLAIM_BONUS_REQUEST = 602] = "CLAIM_BONUS_REQUEST", e[e.CLAIM_BONUS_RESPONSE = 603] = "CLAIM_BONUS_RESPONSE", e[e.SAW_GET_SPINS_REQUEST = 700] = "SAW_GET_SPINS_REQUEST", e[e.SAW_GET_SPINS_RESPONSE = 701] = "SAW_GET_SPINS_RESPONSE", e[e.SAW_DO_SPIN_REQUEST = 702] = "SAW_DO_SPIN_REQUEST", e[e.SAW_DO_SPIN_RESPONSE = 703] = "SAW_DO_SPIN_RESPONSE", e[e.SAW_AKNOWLEDGE_REQUEST = 704] = "SAW_AKNOWLEDGE_REQUEST", e[e.SAW_AKNOWLEDGE_RESPONSE = 705] = "SAW_AKNOWLEDGE_RESPONSE", e[e.SAW_SPINS_COUNT_PUSH = 706] = "SAW_SPINS_COUNT_PUSH", e[e.SAW_SHOW_SPIN_PUSH = 707] = "SAW_SHOW_SPIN_PUSH", e[e.SAW_PRIZE_DROP_WIN_PUSH = 708] = "SAW_PRIZE_DROP_WIN_PUSH", e[e.SAW_PRIZE_DROP_WIN_AKNOWLEDGE_REQUEST = 709] = "SAW_PRIZE_DROP_WIN_AKNOWLEDGE_REQUEST", e[e.SAW_PRIZE_DROP_WIN_AKNOWLEDGE_RESPONSE = 710] = "SAW_PRIZE_DROP_WIN_AKNOWLEDGE_RESPONSE", e[e.SAW_AKNOWLEDGE_SPIN_PUSH = 711] = "SAW_AKNOWLEDGE_SPIN_PUSH", e[e.SAW_DO_SPIN_BATCH_REQUEST = 712] = "SAW_DO_SPIN_BATCH_REQUEST", e[e.SAW_DO_SPIN_BATCH_RESPONSE = 713] = "SAW_DO_SPIN_BATCH_RESPONSE", e[e.SAW_AKNOWLEDGE_BATCH_REQUEST = 714] = "SAW_AKNOWLEDGE_BATCH_REQUEST", e[e.SAW_AKNOWLEDGE_BATCH_RESPONSE = 715] = "SAW_AKNOWLEDGE_BATCH_RESPONSE", e[e.GET_SAW_HISTORY_REQUEST = 716] = "GET_SAW_HISTORY_REQUEST", e[e.GET_SAW_HISTORY_RESPONSE = 717] = "GET_SAW_HISTORY_RESPONSE", e[e.JP_GET_JACKPOTS_REQUEST = 800] = "JP_GET_JACKPOTS_REQUEST", e[e.JP_GET_JACKPOTS_RESPONSE = 801] = "JP_GET_JACKPOTS_RESPONSE", e[e.JP_GET_LATEST_POTS_REQUEST = 802] = "JP_GET_LATEST_POTS_REQUEST", e[e.JP_GET_LATEST_POTS_RESPONSE = 803] = "JP_GET_LATEST_POTS_RESPONSE", e[e.JP_OPTIN_REQUEST = 804] = "JP_OPTIN_REQUEST", e[e.JP_OPTIN_RESPONSE = 805] = "JP_OPTIN_RESPONSE", e[e.JP_OPTOUT_REQUEST = 806] = "JP_OPTOUT_REQUEST", e[e.JP_OPTOUT_RESPONSE = 807] = "JP_OPTOUT_RESPONSE", e[e.JP_WIN_PUSH = 808] = "JP_WIN_PUSH", e[e.JP_GET_WINNERS_REQUEST = 809] = "JP_GET_WINNERS_REQUEST", e[e.JP_GET_WINNERS_RESPONSE = 810] = "JP_GET_WINNERS_RESPONSE", e[e.JP_GET_ELIGIBLE_GAMES_REQUEST = 811] = "JP_GET_ELIGIBLE_GAMES_REQUEST", e[e.JP_GET_ELIGIBLE_GAMES_RESPONSE = 812] = "JP_GET_ELIGIBLE_GAMES_RESPONSE", e[e.RAF_GET_RAFFLES_REQUEST = 902] = "RAF_GET_RAFFLES_REQUEST", e[e.RAF_GET_RAFFLES_RESPONSE = 903] = "RAF_GET_RAFFLES_RESPONSE", e[e.RAF_GET_DRAW_RUN_REQUEST = 904] = "RAF_GET_DRAW_RUN_REQUEST", e[e.RAF_GET_DRAW_RUN_RESPONSE = 905] = "RAF_GET_DRAW_RUN_RESPONSE", e[e.RAF_GET_DRAW_HISTORY_REQUEST = 906] = "RAF_GET_DRAW_HISTORY_REQUEST", e[e.RAF_GET_DRAW_HISTORY_RESPONSE = 907] = "RAF_GET_DRAW_HISTORY_RESPONSE", e[e.RAF_CLAIM_PRIZE_REQUEST = 908] = "RAF_CLAIM_PRIZE_REQUEST", e[e.RAF_CLAIM_PRIZE_RESPONSE = 909] = "RAF_CLAIM_PRIZE_RESPONSE", e[e.REGISTER_PUSH_NOTIFICATIONS_TOKEN_REQ = 1003] = "REGISTER_PUSH_NOTIFICATIONS_TOKEN_REQ", e[e.REGISTER_PUSH_NOTIFICATIONS_TOKEN_RESP = 2003] = "REGISTER_PUSH_NOTIFICATIONS_TOKEN_RESP", e[e.CLIENT_DEBUG_REQUEST = 77777] = "CLIENT_DEBUG_REQUEST", e[e.UNSUPPORTED_COMMAND = 99999] = "UNSUPPORTED_COMMAND"
    })(ClassId = ClassId || {});
    class IntUtils {
        static uuid() {
            let e, t;
            for (t = e = ""; e++ < 36; t += 51 * e & 52 ? (15 ^ e ? 8 ^ Math.random() * (20 ^ e ? 16 : 4) : 4).toString(16) : "-");
            return t
        }
        static isNotNull(e) {
            return null != e
        }
        static isNotEmpty(e) {
            return null != e && 0 < e.length
        }
        static replaceAll(e, t, n) {
            return IntUtils.isNotNull(e) ? e.replace(new RegExp(IntUtils.escapeRegExp(t), "g"), null == n ? void 0 : n.toString()) : e
        }
        static escapeRegExp(e) {
            return IntUtils.isNotEmpty(e) ? e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") : e
        }
    }
    IntUtils.JsonOrText = t => {
        if (t && t.includes && (t.includes("{") || t.includes("["))) try {
            return JSON.parse(t)
        } catch (e) {
            return t
        }
        return t || {}
    }, IntUtils.isWithinPeriod = (e, t) => {
        var n = new Date,
            i = new Date(e);
        switch (t) {
            case "today":
                return n.getFullYear() === i.getFullYear() && n.getMonth() === i.getMonth() && n.getDate() === i.getDate();
            case "thisWeek":
                var r = new Date(n),
                    a = (r.setDate(n.getDate() - n.getDay()), r.setHours(0, 0, 0, 0), new Date(r));
                return a.setDate(r.getDate() + 6), a.setHours(23, 59, 59, 999), r <= i && i <= a;
            case "thisMonth":
                return n.getFullYear() === i.getFullYear() && n.getMonth() === i.getMonth();
            default:
                return !1
        }
    }, (e => {
        e[e.Free = 1] = "Free", e[e.Points = 2] = "Points", e[e.Spins = 3] = "Spins", e[e.Gems = 4] = "Gems", e[e.Diamonds = 5] = "Diamonds"
    })(SAWBuyInType = SAWBuyInType || {}), (e => {
        e.Free = "free", e.Points = "points", e.Spins = "spins", e.Unknown = "unknown", e.Gems = "gems", e.Diamonds = "diamonds"
    })(SAWBuyInTypeName = SAWBuyInTypeName || {});
    let SAWBuyInTypeNamed = e => ({
            [SAWBuyInType.Free]: SAWBuyInTypeName.Free,
            [SAWBuyInType.Points]: SAWBuyInTypeName.Points,
            [SAWBuyInType.Spins]: SAWBuyInTypeName.Spins,
            [SAWBuyInType.Gems]: SAWBuyInTypeName.Gems,
            [SAWBuyInType.Diamonds]: SAWBuyInTypeName.Diamonds
        })[e] || SAWBuyInTypeName.Unknown,
        SAWAcknowledgeTypeNamed = ((e => {
            e[e.Silent = 1] = "Silent", e[e.QuickMessage = 2] = "QuickMessage", e[e.FullMessage = 3] = "FullMessage", e[e.ExplicityAcknowledge = 4] = "ExplicityAcknowledge"
        })(SAWAcknowledgeType = SAWAcknowledgeType || {}), (e => {
            e.Silent = "silent", e.QuickMessage = "quick-message", e.FullMessage = "full-message", e.ExplicityAcknowledge = "explicity-acknowledge"
        })(SAWAcknowledgeTypeName = SAWAcknowledgeTypeName || {}), e => ({
            [SAWAcknowledgeType.Silent]: SAWAcknowledgeTypeName.Silent,
            [SAWAcknowledgeType.QuickMessage]: SAWAcknowledgeTypeName.QuickMessage,
            [SAWAcknowledgeType.FullMessage]: SAWAcknowledgeTypeName.FullMessage,
            [SAWAcknowledgeType.ExplicityAcknowledge]: SAWAcknowledgeTypeName.ExplicityAcknowledge
        })[e]),
        SAWGameTypeNamed = ((e => {
            e.NOASK = "no-ask", e.ONSUMBIT = "on-submit"
        })(SAWAskForUsername = SAWAskForUsername || {}), (e => {
            e[e.SpinAWheel = 1] = "SpinAWheel", e[e.ScratchCard = 2] = "ScratchCard", e[e.MatchX = 3] = "MatchX", e[e.GiftBox = 4] = "GiftBox", e[e.PrizeDrop = 5] = "PrizeDrop", e[e.Quiz = 6] = "Quiz", e[e.LootboxWeekdays = 7] = "LootboxWeekdays", e[e.LootboxCalendarDays = 8] = "LootboxCalendarDays", e[e.TreasureHunt = 9] = "TreasureHunt", e[e.Voyager = 10] = "Voyager"
        })(SAWGameType = SAWGameType || {}), (e => {
            e.SpinAWheel = "wheel", e.ScratchCard = "scratch", e.MatchX = "matchx", e.GiftBox = "giftbox", e.PrizeDrop = "prizedrop", e.Quiz = "quiz", e.LootboxWeekdays = "lootbox_weekdays", e.LootboxCalendarDays = "lootbox_calendar_days", e.TreasureHunt = "treasure_hunt", e.Voyager = "voyager", e.Unknown = "unknown"
        })(SAWGameTypeName = SAWGameTypeName || {}), e => ({
            [SAWGameType.SpinAWheel]: SAWGameTypeName.SpinAWheel,
            [SAWGameType.ScratchCard]: SAWGameTypeName.ScratchCard,
            [SAWGameType.MatchX]: SAWGameTypeName.MatchX,
            [SAWGameType.GiftBox]: SAWGameTypeName.GiftBox,
            [SAWGameType.PrizeDrop]: SAWGameTypeName.PrizeDrop,
            [SAWGameType.Quiz]: SAWGameTypeName.Quiz,
            [SAWGameType.LootboxWeekdays]: SAWGameTypeName.LootboxWeekdays,
            [SAWGameType.LootboxCalendarDays]: SAWGameTypeName.LootboxCalendarDays,
            [SAWGameType.TreasureHunt]: SAWGameTypeName.TreasureHunt,
            [SAWGameType.Voyager]: SAWGameTypeName.Voyager
        })[e] || SAWGameTypeName.Unknown),
        MiniGamePrizeTypeNamed = ((e => {
            e[e.NO_PRIZE = 1] = "NO_PRIZE", e[e.POINTS = 2] = "POINTS", e[e.BONUS = 3] = "BONUS", e[e.MANUAL = 4] = "MANUAL", e[e.SPIN = 5] = "SPIN", e[e.JACKPOT = 6] = "JACKPOT", e[e.CHANGE_LEVEL = 7] = "CHANGE_LEVEL", e[e.MISSION = 8] = "MISSION", e[e.RAFFLE_TICKET = 9] = "RAFFLE_TICKET", e[e.GEMS_AND_DIAMONDS = 10] = "GEMS_AND_DIAMONDS"
        })(SAWPrizeType = SAWPrizeType || {}), (e => {
            e.NO_PRIZE = "no-prize", e.POINTS = "points", e.BONUS = "bonus", e.MANUAL = "manual", e.SPIN = "spin", e.JACKPOT = "jackpot", e.CHANGE_LEVEL = "change-level", e.MISSION = "mission", e.RAFFLE_TICKET = "raffle-ticket", e.GEMS_AND_DIAMONDS = "gems-and-diamonds", e.UNKNOWN = "unknown"
        })(MiniGamePrizeTypeName = MiniGamePrizeTypeName || {}), e => ({
            [SAWPrizeType.NO_PRIZE]: MiniGamePrizeTypeName.NO_PRIZE,
            [SAWPrizeType.POINTS]: MiniGamePrizeTypeName.POINTS,
            [SAWPrizeType.BONUS]: MiniGamePrizeTypeName.BONUS,
            [SAWPrizeType.MANUAL]: MiniGamePrizeTypeName.MANUAL,
            [SAWPrizeType.SPIN]: MiniGamePrizeTypeName.SPIN,
            [SAWPrizeType.JACKPOT]: MiniGamePrizeTypeName.JACKPOT,
            [SAWPrizeType.CHANGE_LEVEL]: MiniGamePrizeTypeName.CHANGE_LEVEL,
            [SAWPrizeType.MISSION]: MiniGamePrizeTypeName.MISSION,
            [SAWPrizeType.RAFFLE_TICKET]: MiniGamePrizeTypeName.RAFFLE_TICKET,
            [SAWPrizeType.GEMS_AND_DIAMONDS]: MiniGamePrizeTypeName.GEMS_AND_DIAMONDS
        })[e] || MiniGamePrizeTypeName.UNKNOWN),
        SAWTemplatesTransform = e => e.map(e => {
            var t;
            return _extends({
                id: e.saw_template_id,
                name: e.saw_template_ui_definition.name,
                description: e.saw_template_ui_definition.description,
                thumbnail: e.saw_template_ui_definition.thumbnail || (null != (t = e.saw_skin_ui_definition) && t.skin_folder ? e.saw_skin_ui_definition.skin_folder + "/ico.png" : `https://d312ucx3huj7iy.cloudfront.net/gf/images/saw/${e.saw_skin_key}/ico.png`),
                over_limit_message: e.saw_template_ui_definition.over_limit_message,
                no_attempts_message: e.saw_template_ui_definition.no_attempts_message,
                jackpot_symbol: e.saw_template_ui_definition.jackpot_symbol,
                saw_game_type: SAWGameTypeNamed(e.saw_game_type_id),
                saw_buyin_type: SAWBuyInTypeNamed(e.saw_buyin_type_id)
            }, e.saw_buyin_type_id === SAWBuyInType.Points ? {
                buyin_cost_points: e.buyin_cost_points
            } : {}, e.saw_buyin_type_id === SAWBuyInType.Gems ? {
                buyin_cost_gems: e.buyin_cost_points
            } : {}, e.saw_buyin_type_id === SAWBuyInType.Diamonds ? {
                buyin_cost_diamonds: e.buyin_cost_points
            } : {}, {
                jackpot_add_on_attempt: e.jackpot_add_on_attempt,
                jackpot_current: e.jackpot_current,
                spin_count: e.spin_count,
                promo_image: e.saw_template_ui_definition.promo_image,
                promo_text: e.saw_template_ui_definition.promo_text,
                custom_data: IntUtils.JsonOrText(e.saw_template_ui_definition.custom_data),
                expose_game_stat_on_api: e.expose_game_stat_on_api,
                relative_period_timezone: e.relative_period_timezone,
                activeFromDate: e.activeFromDate,
                activeTillDate: e.activeTillDate,
                next_available_spin_ts: e.next_available_spin_ts,
                steps_to_finish_game: e.saw_template_ui_definition.steps_to_finish_game,
                custom_section_id: e.saw_template_ui_definition.custom_section_id,
                saw_template_ui_definition: e.saw_template_ui_definition,
                show_prize_history: e.show_prize_history,
                prizes: e.prizes.map(e => {
                    var t;
                    return {
                        id: e.saw_prize_id,
                        name: e.saw_prize_ui_definition.name,
                        prize_type: MiniGamePrizeTypeNamed(e.prize_type_id),
                        prize_value: e.prize_value,
                        font_size: e.saw_prize_ui_definition.font_size,
                        font_size_mobile: e.saw_prize_ui_definition.font_size_mobile,
                        icon: e.saw_prize_ui_definition.icon,
                        position: e.saw_prize_ui_definition.position,
                        sectors: e.saw_prize_ui_definition.sectors,
                        acknowledge_type: SAWAcknowledgeTypeNamed(e.saw_prize_ui_definition.acknowledge_type),
                        aknowledge_message: e.saw_prize_ui_definition.aknowledge_message,
                        acknowledge_dp: e.saw_prize_ui_definition.acknowledge_dp,
                        acknowledge_action_title: e.saw_prize_ui_definition.acknowledge_action_title,
                        acknowledge_dp_additional: e.saw_prize_ui_definition.acknowledge_dp_additional,
                        acknowledge_action_title_additional: e.saw_prize_ui_definition.acknowledge_action_title_additional,
                        out_of_stock_message: e.saw_prize_ui_definition.out_of_stock_message,
                        pool: e.pool,
                        pool_initial: e.pool_initial,
                        wins_count: e.wins_count,
                        weekdays: e.weekdays,
                        active_from_ts: e.active_from_ts,
                        active_till_ts: e.active_till_ts,
                        relative_period_timezone: e.relative_period_timezone,
                        is_surcharge: e.is_surcharge,
                        is_deleted: e.is_deleted,
                        custom_data: IntUtils.JsonOrText(null == (t = e.saw_prize_ui_definition) ? void 0 : t.custom_data),
                        prize_modifiers: e.saw_prize_ui_definition.prize_modifiers,
                        allow_split_decimal: e.saw_prize_ui_definition.allow_split_decimal,
                        hide_prize_from_history: e.saw_prize_ui_definition.hide_prize_from_history,
                        requirements_to_get_prize: e.saw_prize_ui_definition.requirements_to_get_prize
                    }
                })
            })
        }),
        SAWWinSoundFiles = ((e => {
            e[e.SAW_OK = 0] = "SAW_OK", e[e.SAW_NO_SPINS = 40001] = "SAW_NO_SPINS", e[e.SAW_PRIZE_POOL_EMPTY = 40002] = "SAW_PRIZE_POOL_EMPTY", e[e.SAW_NOT_ENOUGH_POINTS = 40003] = "SAW_NOT_ENOUGH_POINTS", e[e.SAW_FAILED_MAX_SPINS_REACHED = 40004] = "SAW_FAILED_MAX_SPINS_REACHED", e[e.SAW_TEMPLATE_NOT_ACTIVE = 40007] = "SAW_TEMPLATE_NOT_ACTIVE", e[e.SAW_VISITOR_STOP_SPIN_REQUEST = -40001] = "SAW_VISITOR_STOP_SPIN_REQUEST", e[e.SAW_NOT_IN_SEGMENT = 40009] = "SAW_NOT_IN_SEGMENT", e[e.SAW_NO_BALANCE_GEMS = 40011] = "SAW_NO_BALANCE_GEMS", e[e.SAW_NO_BALANCE_DIAMONDS = 40012] = "SAW_NO_BALANCE_DIAMONDS"
        })(SAWSpinErrorCode = SAWSpinErrorCode || {}), (e => {
            e[e.Disappointing = 1] = "Disappointing", e[e.Positive = 2] = "Positive", e[e.HighlyPositive = 3] = "HighlyPositive", e[e.NoSound = 4] = "NoSound", e[e.Custom = 5] = "Custom"
        })(SAWWinSoundType = SAWWinSoundType || {}), {
            [SAWWinSoundType.NoSound]: null,
            [SAWWinSoundType.Disappointing]: "saw-disappointed.m4a",
            [SAWWinSoundType.Positive]: "saw-positive.m4a",
            [SAWWinSoundType.HighlyPositive]: "saw-highly-positive.m4a"
        }),
        SAWHistoryTransform = e => e.map(e => ({
            template: e.template,
            saw_template_id: e.saw_template_id,
            saw_prize_id: e.saw_prize_id,
            prize_amount: e.prize_amount,
            client_request_id: e.client_request_id,
            is_claimed: e.is_claimed,
            create_date_ts: e.create_date_ts,
            acknowledge_date_ts: e.acknowledge_date_ts
        })),
        PrizeModifiersKeysNames = ((e => {
            e[e.Horizontal = 1] = "Horizontal", e[e.VerticalMap = 2] = "VerticalMap"
        })(SAWGameLayout = SAWGameLayout || {}), (e => {
            e[e["2x"] = 1] = "2x", e[e["5x"] = 2] = "5x", e[e["10x"] = 3] = "10x", e[e["/2"] = 4] = "/2", e[e["/5"] = 5] = "/5", e[e["/10"] = 6] = "/10", e[e["0x"] = 7] = "0x", e[e.reset = 8] = "reset"
        })(PrizeModifiers = PrizeModifiers || {}), {
            [PrizeModifiers["2x"]]: "2x",
            [PrizeModifiers["5x"]]: "5x",
            [PrizeModifiers["10x"]]: "10x",
            [PrizeModifiers["/2"]]: "/2",
            [PrizeModifiers["/5"]]: "/5",
            [PrizeModifiers["/10"]]: "/10",
            [PrizeModifiers["0x"]]: "0",
            [PrizeModifiers.reset]: "Reset to 0"
        });
    (e => {
        e[e.Centered = 1] = "Centered", e[e.LeftAligned = 2] = "LeftAligned", e[e.RightAligned = 3] = "RightAligned", e[e.BottomAligned = 4] = "BottomAligned"
    })(SAWWheelLayout = SAWWheelLayout || {});
    class NodeCache {
        constructor() {
            this.ttlChecker = void 0, this.cache = {}, void 0 === this.ttlChecker && (this.ttlChecker = setInterval(() => {
                var e, t = (new Date).getTime();
                for (e in this.cache) this.cache.hasOwnProperty(e) && this.cache[e].ttl < t && delete this.cache[e]
            }, 1e3))
        }
        get(e) {
            e = this.cache[e];
            if (void 0 !== e && e.ttl > (new Date).getTime()) return e.value
        }
        set(e, t, n = 60) {
            this.cache[e] = {
                value: t,
                ttl: (new Date).getTime() + 1e3 * n
            }
        }
        remove(e) {
            this.cache.hasOwnProperty(e) && delete this.cache[e]
        }
        flushAll() {
            this.cache = {}, this.ttlChecker && (clearInterval(this.ttlChecker), this.ttlChecker = void 0)
        }
    }(e => {
        e[e.Translations = 0] = "Translations", e[e.LabelInfo = 1] = "LabelInfo", e[e.WSAPI = 2] = "WSAPI"
    })(ECacheContext = ECacheContext || {});
    class OCache {
        static init(e) {
            void 0 === this.cache[e] && (this.cache[e] = new NodeCache)
        }
        static get(e, t) {
            e = t.toString() + "_" + JSON.stringify(e);
            return this.init(t), deepClone(this.cache[t].get(e))
        }
        static set(e, t, n, i = 60) {
            e = n.toString() + "_" + JSON.stringify(e);
            this.init(n), this.cache[n].set(e, deepClone(t), i)
        }
        static use(t, n, i, r = 60) {
            return __async(function*() {
                if (r <= 0) return yield i(); {
                    let e = OCache.get(t, n);
                    return void 0 === e && (e = yield i(), OCache.set(t, e, n, r)), e
                }
            }())
        }
        static clear(t, n) {
            return __async(function*() {
                var e = t.toString() + "_" + JSON.stringify(n);
                this.cache[t] && this.cache[t].remove(e)
            }.call(this))
        }
        static clearContext(e) {
            return __async(function*() {
                this.cache[e] && this.cache[e].flushAll()
            }.call(this))
        }
        static clearAll() {
            return __async(function*() {
                for (var e in this.cache) this.cache.hasOwnProperty(e) && this.cache[e].flushAll();
                this.cache = {}
            }.call(this))
        }
    }
    OCache.cache = {};
    let deepClone = e => e && JSON.parse(JSON.stringify(e));
    (e => {
        e[e.DoNothing = 8] = "DoNothing", e[e.Points = 12] = "Points", e[e.GiveMission = 14] = "GiveMission", e[e.StartAnotherCampaign = 15] = "StartAnotherCampaign", e[e.MiniGameAttempt = 16] = "MiniGameAttempt", e[e.DeductPoints = 21] = "DeductPoints", e[e.ResetPoints = 22] = "ResetPoints", e[e.AddGemsAndDiamonds = 25] = "AddGemsAndDiamonds", e[e.DeductGemsAndDiamonds = 26] = "DeductGemsAndDiamonds", e[e.ResetGemsAndDiamonds = 27] = "ResetGemsAndDiamonds", e[e.Popup = 30] = "Popup", e[e.Inbox = 31] = "Inbox", e[e.Slack = 70] = "Slack", e[e.Email_To_Customer_Support = 80] = "Email_To_Customer_Support", e[e.Email_To_Risk_Operator = 90] = "Email_To_Risk_Operator", e[e.Bonus = 100] = "Bonus", e[e.WebHook = 200] = "WebHook", e[e.TagCustomer = 504] = "TagCustomer", e[e.UnTagCustomer = 505] = "UnTagCustomer"
    })(ActivityTypeLimited = ActivityTypeLimited || {});
    class CoreUtils {
        static currencySymbol(e) {
            return {
                [null == e ? void 0 : e.toUpperCase()]: null == e ? void 0 : e.toUpperCase(),
                USD: "$",
                EUR: "€",
                JPY: "¥",
                GBP: "£",
                AUD: "A$",
                CAD: "C$",
                CHF: "CHF",
                CNY: "¥",
                SEK: "kr",
                NZD: "NZ$",
                MXN: "MX$",
                SGD: "S$",
                HKD: "HK$",
                NOK: "kr",
                KRW: "₩",
                TRY: "₺",
                INR: "₹",
                RUB: "₽",
                BRL: "R$",
                ZAR: "R"
            }[null == e ? void 0 : e.toUpperCase()]
        }
    }
    CoreUtils.avatarUrl = (e, t) => !t || null == e || e.startsWith && e.startsWith("http") ? e : t.endsWith("/") ? t.slice(0, -1) + "/avatar/" + e : t + "/avatar/" + e, (e => {
        e.PUBLIC_API_URL = "PUBLIC_API_URL", e.RECORDING_ENABLED_FOR_ALL_USERS = "RECORDING_ENABLED_FOR_ALL_USERS", e.JS_INJECTION = "JS_INJECTION", e.GAMIFICATION_UI_MAIN = "GAMIFICATION_UI_MAIN", e.GAMIFICATION_UI_WIDGET = "GAMIFICATION_UI_WIDGET", e.GAMIFICATION_UI_MINI_GAME = "GAMIFICATION_UI_MINI_GAME", e.GAMIFICATION_UI_SETTINGS = "GAMIFICATION_UI_SETTINGS", e.GAMIFICATION_UI_MAIN_TEST = "GAMIFICATION_UI_MAIN_TEST", e.GAMIFICATION_UI_WIDGET_TEST = "GAMIFICATION_UI_WIDGET_TEST", e.GAMIFICATION_UI_SETTINGS_TEST = "GAMIFICATION_UI_SETTINGS_TEST", e.FRONT_END_ALLOWED_LANGUAGES = "FRONT_END_ALLOWED_LANGUAGES", e.FRONT_END_ALLOW_DOMAINS = "FRONT_END_ALLOW_DOMAINS", e.DELAY_ENGAGEMENT_EXECUTION_ON_LOGIN_MS = "DELAY_ENGAGEMENT_EXECUTION_ON_LOGIN_MS", e.SHADOW_LABEL_PUBLIC_KEY = "SHADOW_LABEL_PUBLIC_KEY", e.DYNAMIC_IMAGE_DOMAIN = "DYNAMIC_IMAGE_DOMAIN", e.GAMIFICATION_UI_LEVEL_ENABLED = "GAMIFICATION_UI_LEVEL_ENABLED", e.GAMIFICATION_UI_LEVEL_IMAGE_MOB = "GAMIFICATION_UI_LEVEL_IMAGE_MOB", e.GAMIFICATION_UI_LEVEL_IMAGE_DESK = "GAMIFICATION_UI_LEVEL_IMAGE_DESK", e.GAMIFICATION_LEVELS_LOGIC2 = "GAMIFICATION_LEVELS_LOGIC2", e.GAMIFICATION_LEVELS_LOGIC3 = "GAMIFICATION_LEVELS_LOGIC2", e.AVATAR_CUSTOM_IMAGE_MAX_ID = "AVATAR_CUSTOM_IMAGE_MAX_ID", e.AVATAR_CUSTOM_IMAGE_FOLDER = "AVATAR_CUSTOM_IMAGE_FOLDER", e.GAMIFICATION_SHOW_POWERED_BY = "GAMIFICATION_SHOW_POWERED_BY", e._system_leader_board_mask_username = "_system_leader_board_mask_username", e.INBOX_PUBLIC_CDN = "INBOX_PUBLIC_CDN"
    })(PublicLabelSettings = PublicLabelSettings || {}), (e => {
        e[e.Casino = 1] = "Casino", e[e.Gamification = 2] = "Gamification", e[e.Trading = 3] = "Trading", e[e.Archived = 4] = "Archived", e[e.Affiliation = 5] = "Affiliation", e[e.RetentionGames = 6] = "RetentionGames", e[e.AffIliateAdminNew = 7] = "AffIliateAdminNew"
    })(TranslationArea = TranslationArea || {});
    let InboxMessagesTransform = e => e.map(e => ({
            sent_date: e.createDate,
            message_guid: e.engagement_uid,
            read: e.is_read,
            favorite: e.is_starred,
            category_id: e.category_id
        })),
        InboxMessageBodyTransform = e => {
            var t = {
                action: e.action,
                icon: e.image,
                title: e.title,
                preview_body: e.body
            };
            return "dp:inbox" === e.action && (e.additional_buttons && e.additional_buttons.length && (t.buttons = e.additional_buttons.map(e => ({
                action: e.action,
                text: e.inbox_cta_text
            }))), t.html_body = (null == e ? void 0 : e.html_body) || null), t
        },
        StoreCategoryTransform = ((e => {
            e[e.Custom = 0] = "Custom", e[e.MissionCompleted = 1] = "MissionCompleted", e[e.MissionUnlocked = 2] = "MissionUnlocked", e[e.LeaderboardWon = 3] = "LeaderboardWon", e[e.LevelChanged = 4] = "LevelChanged", e[e.BonusGiven = 5] = "BonusGiven", e[e.PointsAdded = 6] = "PointsAdded", e[e.PointsUsed = 7] = "PointsUsed", e[e.PersonalMessage = 8] = "PersonalMessage"
        })(InboxMessageType = InboxMessageType || {}), (e => {
            e[e.NewWindow = 1] = "NewWindow", e[e.CurrentWindow = 2] = "CurrentWindow"
        })(OpenLinksType = OpenLinksType || {}), (e => {
            e[e.General = 0] = "General", e[e.Platform = 1] = "Platform", e[e.Personal = 2] = "Personal"
        })(InboxCategories = InboxCategories || {}), (e => {
            e[e.SHOP_NO_BALANCE = 11e3] = "SHOP_NO_BALANCE", e[e.SHOP_WRONG_LABEL = 11001] = "SHOP_WRONG_LABEL", e[e.SHOP_FAILED_TO_BUY_BONUS = 11002] = "SHOP_FAILED_TO_BUY_BONUS", e[e.SHOP_FAILED_TO_BUY_SHOP_ITEM_CONDITION = 11003] = "SHOP_FAILED_TO_BUY_SHOP_ITEM_CONDITION", e[e.SHOP_FAILED_TO_BUY_SHOP_ITEM_CONDITION_PURSHASE = 11004] = "SHOP_FAILED_TO_BUY_SHOP_ITEM_CONDITION_PURSHASE", e[e.SHOP_FAILED_TO_BUY_MATCHING_BONUS = 11005] = "SHOP_FAILED_TO_BUY_MATCHING_BONUS", e[e.SHOP_FAILED_MAX_BOUGHT_ITEMS_REACHED = 11006] = "SHOP_FAILED_MAX_BOUGHT_ITEMS_REACHED", e[e.SHOP_FAILED_POOL_EMPTY = 11009] = "SHOP_FAILED_POOL_EMPTY", e[e.SHOP_NO_BALANCE_GEMS = 11011] = "SHOP_NO_BALANCE_GEMS", e[e.SHOP_NO_BALANCE_DIAMONDS = 11012] = "SHOP_NO_BALANCE_DIAMONDS"
        })(BuyStoreItemErrorCode = BuyStoreItemErrorCode || {}), e => e.map(e => {
            var t;
            return {
                id: e.id,
                name: null == (t = e.publicMeta) ? void 0 : t.name,
                order: null == (t = e.publicMeta) ? void 0 : t.order
            }
        })),
        StoreItemTypeNamed = ((e => {
            e[e.Points = 0] = "Points", e[e.Gems = 1] = "Gems", e[e.Diamonds = 2] = "Diamonds"
        })(StoreItemPurchaseType = StoreItemPurchaseType || {}), (e => {
            e[e.Bonus = 1] = "Bonus", e[e.Tangible = 2] = "Tangible", e[e.MiniGameSpin = 3] = "MiniGameSpin", e[e.ChangeLevel = 4] = "ChangeLevel", e[e.PrizeDrop = 5] = "PrizeDrop", e[e.RaffleTicket = 6] = "RaffleTicket"
        })(StoreItemType = StoreItemType || {}), (e => {
            e.Bonus = "bonus", e.Tangible = "tangible", e.MiniGameSpin = "minigamespin", e.ChangeLevel = "changelevel", e.PrizeDrop = "prizedrop", e.RaffleTicket = "raffleticket", e.Unknown = "unknown"
        })(StoreItemTypeName = StoreItemTypeName || {}), e => ({
            [StoreItemType.Bonus]: StoreItemTypeName.Bonus,
            [StoreItemType.Tangible]: StoreItemTypeName.Bonus,
            [StoreItemType.MiniGameSpin]: StoreItemTypeName.MiniGameSpin,
            [StoreItemType.ChangeLevel]: StoreItemTypeName.ChangeLevel,
            [StoreItemType.PrizeDrop]: StoreItemTypeName.PrizeDrop,
            [StoreItemType.RaffleTicket]: StoreItemTypeName.RaffleTicket
        })[e] || StoreItemTypeName.Unknown),
        mapPurchaseType$1 = e => e === StoreItemPurchaseType.Points ? "points" : e === StoreItemPurchaseType.Gems ? "gems" : e === StoreItemPurchaseType.Diamonds ? "diamonds" : "points",
        StoreItemTransform = e => e.filter(e => 1 <= e.id).map(e => {
            var t;
            return {
                id: e.id,
                name: e.itemPublicMeta.name,
                purchase_type: mapPurchaseType$1(e.itemPublicMeta.purchase_type),
                price: e.itemPublicMeta.price,
                image: e.itemPublicMeta.image_url,
                description: e.itemPublicMeta.description,
                ribbon: "custom" === e.itemPublicMeta.label_tag ? e.itemPublicMeta.custom_label_tag : e.itemPublicMeta.label_tag,
                limit_message: e.itemPublicMeta.limit_message,
                priority: null != (t = e.itemPublicMeta.priority) ? t : 0,
                related_item_ids: e.itemPublicMeta.related_items,
                hint_text: e.itemPublicMeta.hint_text,
                type: StoreItemTypeNamed(e.itemTypeId),
                can_buy: e.canBuy,
                category_ids: null != (t = e.categoryIds) ? t : [],
                pool: e.shopPool,
                custom_data: IntUtils.JsonOrText(e.itemPublicMeta.custom_data),
                active_till_date: e.activeTillDate,
                discounted_price: e.itemPublicMeta.discount_prize,
                discount_price_ribbon: e.itemPublicMeta.discount_prize_ribbon,
                custom_ribbon_image: e.itemPublicMeta.custom_ribbon_image
            }
        }),
        mapPurchaseType = e => e === StoreItemPurchaseType.Points ? "points" : e === StoreItemPurchaseType.Gems ? "gems" : e === StoreItemPurchaseType.Diamonds ? "diamonds" : "points",
        StoreItemPurchasedTransform = e => e.filter(e => 1 <= e.id).map(e => {
            var t, n = !!e.purchase_ts && IntUtils.isWithinPeriod(e.purchase_ts, "today"),
                i = !!e.purchase_ts && IntUtils.isWithinPeriod(e.purchase_ts, "thisWeek"),
                r = !!e.purchase_ts && IntUtils.isWithinPeriod(e.purchase_ts, "thisMonth");
            return {
                id: e.id,
                name: e.itemPublicMeta.name,
                price: e.itemPublicMeta.price,
                purchase_type: mapPurchaseType(e.itemPublicMeta.purchase_type),
                image: e.itemPublicMeta.image_url,
                description: e.itemPublicMeta.description,
                ribbon: "custom" === e.itemPublicMeta.label_tag ? e.itemPublicMeta.custom_label_tag : e.itemPublicMeta.label_tag,
                limit_message: e.itemPublicMeta.limit_message,
                priority: null != (t = e.itemPublicMeta.priority) ? t : 0,
                related_item_ids: e.itemPublicMeta.related_items,
                hint_text: e.itemPublicMeta.hint_text,
                type: StoreItemTypeNamed(e.itemTypeId),
                can_buy: e.canBuy,
                category_ids: null != (t = e.categoryIds) ? t : [],
                pool: e.shopPool,
                purchase_ts: e.purchase_ts,
                purchase_points_amount: e.purchase_points_amount,
                purchased_today: n,
                purchased_this_week: i,
                purchased_this_month: r,
                custom_data: e.itemPublicMeta.custom_data
            }
        });
    (e => {
        e[e.Draft = 1] = "Draft", e[e.AvailableUnlocked = 2] = "AvailableUnlocked", e[e.AvailableLocked = 3] = "AvailableLocked", e[e.Archived = 4] = "Archived", e[e.FeaturedManually = 5] = "FeaturedManually", e[e.FeaturedAI = 6] = "FeaturedAI", e[e.Recurring = 7] = "Recurring", e[e.RecurringUponCompletion = 8] = "RecurringUponCompletion"
    })(AchievementStatus = AchievementStatus || {}), (e => {
        e[e.CompleteAchievement = 1] = "CompleteAchievement", e[e.UnlockAchievement = 2] = "UnlockAchievement"
    })(AchievementTaskType = AchievementTaskType || {}), (e => {
        e[e.Mission = 1] = "Mission", e[e.Badge = 2] = "Badge"
    })(AchievementType = AchievementType || {}), (e => {
        e[e.Available = 0] = "Available", e[e.AvailableInactive = 1] = "AvailableInactive", e[e.AvailableActive = 2] = "AvailableActive", e[e.UnavailableWithActiveFrom = 3] = "UnavailableWithActiveFrom", e[e.AvailableWithActiveTill = 4] = "AvailableWithActiveTill", e[e.AvailableWithActiveTillInactive = 5] = "AvailableWithActiveTillInactive", e[e.AvailableWithActiveTillActive = 6] = "AvailableWithActiveTillActive", e[e.AvailableLimited = 7] = "AvailableLimited", e[e.AvailableLimitedInactive = 8] = "AvailableLimitedInactive", e[e.AvailableLimitedActive = 9] = "AvailableLimitedActive", e[e.AvailableFullyLimited = 10] = "AvailableFullyLimited", e[e.AvailableFullyLimitedInactive = 11] = "AvailableFullyLimitedInactive", e[e.AvailableFullyLimitedActive = 12] = "AvailableFullyLimitedActive", e[e.MissedByActiveTill = 13] = "MissedByActiveTill", e[e.MissedByLimitInTime = 14] = "MissedByLimitInTime"
    })(AchievementAvailabilityStatus = AchievementAvailabilityStatus || {});
    class MissionUtils {}
    _class = MissionUtils, MissionUtils.getAvailabilityStatus = e => {
        var t, n, i, r, a, s, o;
        return e ? (t = e.active_from_ts ? _class.getMs(e.active_from_ts) : null, n = e.active_till_ts ? _class.getMs(e.active_till_ts) : null, i = e.start_date_ts ? _class.getMs(e.start_date_ts) : null, r = e.time_limit_ms, a = e.requiresOptin, s = e.isOptedIn, o = e.ach_status_id === AchievementStatus.AvailableLocked, e = e.isLocked, t || n || r ? t && t > Date.now() ? AchievementAvailabilityStatus.UnavailableWithActiveFrom : t && t < Date.now() || !t ? n || r ? n && !r ? n > Date.now() ? a ? s ? AchievementAvailabilityStatus.AvailableWithActiveTillActive : AchievementAvailabilityStatus.AvailableWithActiveTillInactive : o ? e ? AchievementAvailabilityStatus.AvailableWithActiveTillInactive : AchievementAvailabilityStatus.AvailableWithActiveTillActive : AchievementAvailabilityStatus.AvailableWithActiveTill : AchievementAvailabilityStatus.MissedByActiveTill : r && !n ? a ? s ? i + r > Date.now() ? AchievementAvailabilityStatus.AvailableLimitedActive : AchievementAvailabilityStatus.MissedByLimitInTime : AchievementAvailabilityStatus.AvailableLimitedInactive : o ? e ? AchievementAvailabilityStatus.AvailableLimitedInactive : i + r > Date.now() ? AchievementAvailabilityStatus.AvailableLimitedActive : AchievementAvailabilityStatus.MissedByLimitInTime : (t && i < t ? t + r : i + r) > Date.now() ? AchievementAvailabilityStatus.AvailableLimited : AchievementAvailabilityStatus.MissedByLimitInTime : r && n ? n > Date.now() ? a ? s ? i + r > Date.now() ? AchievementAvailabilityStatus.AvailableFullyLimitedActive : AchievementAvailabilityStatus.MissedByLimitInTime : AchievementAvailabilityStatus.AvailableFullyLimitedInactive : o ? e ? AchievementAvailabilityStatus.AvailableFullyLimitedInactive : i + r > Date.now() ? AchievementAvailabilityStatus.AvailableFullyLimitedActive : AchievementAvailabilityStatus.MissedByLimitInTime : (t && i < t ? t + r : i + r) > Date.now() ? AchievementAvailabilityStatus.AvailableFullyLimited : AchievementAvailabilityStatus.MissedByLimitInTime : AchievementAvailabilityStatus.MissedByActiveTill : void 0 : a ? s ? AchievementAvailabilityStatus.AvailableActive : AchievementAvailabilityStatus.AvailableInactive : o ? e ? AchievementAvailabilityStatus.AvailableInactive : AchievementAvailabilityStatus.AvailableActive : AchievementAvailabilityStatus.Available : void 0 : a ? s ? AchievementAvailabilityStatus.AvailableActive : AchievementAvailabilityStatus.AvailableInactive : o ? e ? AchievementAvailabilityStatus.AvailableInactive : AchievementAvailabilityStatus.AvailableActive : AchievementAvailabilityStatus.Available) : null
    }, MissionUtils.getMs = e => new Date(e).getTime();
    let UserAchievementTransform = e => e.filter(e => 1 <= e.ach_id).map(e => {
            var t = !!e.complete_date_ts && IntUtils.isWithinPeriod(e.complete_date_ts, "today"),
                n = !!e.complete_date_ts && IntUtils.isWithinPeriod(e.complete_date_ts, "thisWeek"),
                i = !!e.complete_date_ts && IntUtils.isWithinPeriod(e.complete_date_ts, "thisMonth"),
                r = {
                    id: e.ach_id,
                    name: e.ach_public_meta.name,
                    description: e.ach_public_meta.description,
                    hint_text: e.ach_public_meta.hint_text,
                    unlock_mission_description: e.ach_public_meta.unlock_mission_description,
                    image: e.ach_public_meta.image_url,
                    is_completed: e.isCompleted,
                    is_locked: e.isLocked,
                    is_requires_optin: e.requiresOptin,
                    is_opted_in: e.isOptedIn,
                    time_limit_ms: e.time_limit_ms,
                    active_from_ts: e.active_from_ts,
                    active_till_ts: e.active_till_ts,
                    dt_start: e.start_date_ts,
                    reward: e.ach_public_meta.reward,
                    progress: e.progress,
                    type: e.ach_type_id === AchievementType.Mission ? "mission" : "badge",
                    cta_action: e.ach_public_meta.cta_action,
                    cta_text: e.ach_public_meta.cta_text,
                    custom_section_id: e.ach_public_meta.custom_section_id,
                    only_in_custom_section: e.ach_public_meta.only_in_custom_section,
                    custom_data: IntUtils.JsonOrText(e.ach_public_meta.custom_data),
                    position: e.ach_public_meta.position,
                    ribbon: "custom" === e.ach_public_meta.label_tag ? e.ach_public_meta.custom_label_tag : e.ach_public_meta.label_tag,
                    tasks: (e.achievementTasks || []).filter(e => e.task_type_id === AchievementTaskType.CompleteAchievement).map(e => {
                        var t;
                        return {
                            id: e.task_id,
                            name: null == (t = e.task_public_meta) ? void 0 : t.name,
                            points_reward: e.points_reward,
                            is_completed: e.isCompleted,
                            progress: e.userProgress,
                            execution_count_expected: e.executionCount,
                            execution_count_actual: e.userExecutedCount,
                            display_progress_as_count: e.task_public_meta.display_progress_as_count,
                            stage_image: e.task_public_meta.stage_image
                        }
                    }),
                    related_games: (e.related_games || []).map(e => ({
                        ext_game_id: e.ext_game_id,
                        game_public_meta: {
                            name: e.game_public_meta.name,
                            link: e.game_public_meta.link,
                            image: e.game_public_meta.image,
                            enabled: e.game_public_meta.enabled,
                            game_categories: e.game_public_meta.game_categories,
                            game_provider: e.game_public_meta.game_provider,
                            mobile_spec_link: e.game_public_meta.mobile_spec_link
                        }
                    })),
                    category_ids: null != (r = e.ach_categories) ? r : [],
                    ach_completed_id: e.ach_completed_id,
                    requires_prize_claim: e.requires_prize_claim,
                    prize_claimed_date_ts: e.prize_claimed_date_ts,
                    complete_date: e.complete_date,
                    complete_date_ts: e.complete_date_ts,
                    completed_today: t,
                    completed_this_week: n,
                    completed_this_month: i,
                    custom_section_type_id: e.ach_public_meta.custom_section_type_id,
                    availability_status: MissionUtils.getAvailabilityStatus(e)
                };
            return e.ach_status_id === AchievementStatus.Recurring && (r.next_recurrence_date_ts = e.next_recurrence_date_ts), e.ach_status_id === AchievementStatus.RecurringUponCompletion && (r.completion_count = e.completed_count, r.max_completion_count = e.recurring_quantity), r
        }),
        AchCategoryTransform = ((e => {
            e[e.Future = 1] = "Future", e[e.Past = 2] = "Past", e[e.Present = 3] = "Present"
        })(ScheduledMissionType = ScheduledMissionType || {}), e => e.map(e => {
            var t;
            return {
                id: e.id,
                name: null == (t = e.publicMeta) ? void 0 : t.name,
                order: null == (t = e.publicMeta) ? void 0 : t.order
            }
        })),
        TournamentRegistrationTypeGetName = ((e => {
            e[e.AUTO = 1] = "AUTO", e[e.OPT_IN = 2] = "OPT_IN", e[e.BUY_IN_POINTS = 3] = "BUY_IN_POINTS", e[e.MANUAL_APPROVAL = 4] = "MANUAL_APPROVAL", e[e.REQUIRES_QUALIFICATION = 5] = "REQUIRES_QUALIFICATION", e[e.BUY_IN_GEMS = 6] = "BUY_IN_GEMS", e[e.BUY_IN_DIAMONDS = 7] = "BUY_IN_DIAMONDS"
        })(TournamentRegistrationType = TournamentRegistrationType || {}), e => ({
            [TournamentRegistrationType.AUTO]: "AUTO",
            [TournamentRegistrationType.BUY_IN_POINTS]: "BUY_IN_POINTS",
            [TournamentRegistrationType.MANUAL_APPROVAL]: "MANUAL_APPROVAL",
            [TournamentRegistrationType.OPT_IN]: "OPT_IN",
            [TournamentRegistrationType.REQUIRES_QUALIFICATION]: "REQUIRES_QUALIFICATION",
            [TournamentRegistrationType.BUY_IN_GEMS]: "BUY_IN_GEMS",
            [TournamentRegistrationType.BUY_IN_DIAMONDS]: "BUY_IN_DIAMONDS"
        })[e] || "UNKNOWN"),
        TournamentRegistrationStatusNamed = ((e => {
            e[e.NOT_REGISTERED = 0] = "NOT_REGISTERED", e[e.REGISTERED = 1] = "REGISTERED", e[e.FINISHED = 2] = "FINISHED", e[e.PENDING = 3] = "PENDING", e[e.CANCELLED = 4] = "CANCELLED", e[e.REGISTERED_PENDING_QUALIFICATION = 5] = "REGISTERED_PENDING_QUALIFICATION", e[e.QUALIFIED_PENDING_REGISTRATION = 6] = "QUALIFIED_PENDING_REGISTRATION"
        })(TournamentRegistrationStatus = TournamentRegistrationStatus || {}), (e => {
            e.NOT_REGISTERED = "NOT_REGISTERED", e.REGISTERED = "REGISTERED", e.FINISHED = "FINISHED", e.PENDING = "PENDING", e.CANCELLED = "CANCELLED", e.REGISTERED_PENDING_QUALIFICATION = "REGISTERED_PENDING_QUALIFICATION", e.QUALIFIED_PENDING_REGISTRATION = "QUALIFIED_PENDING_REGISTRATION", e.UNKNOWN = "UNKNOWN"
        })(TournamentRegistrationStatusName = TournamentRegistrationStatusName || {}), e => ({
            [TournamentRegistrationStatus.CANCELLED]: TournamentRegistrationStatusName.CANCELLED,
            [TournamentRegistrationStatus.FINISHED]: TournamentRegistrationStatusName.FINISHED,
            [TournamentRegistrationStatus.NOT_REGISTERED]: TournamentRegistrationStatusName.NOT_REGISTERED,
            [TournamentRegistrationStatus.PENDING]: TournamentRegistrationStatusName.PENDING,
            [TournamentRegistrationStatus.QUALIFIED_PENDING_REGISTRATION]: TournamentRegistrationStatusName.QUALIFIED_PENDING_REGISTRATION,
            [TournamentRegistrationStatus.REGISTERED]: TournamentRegistrationStatusName.REGISTERED,
            [TournamentRegistrationStatus.REGISTERED_PENDING_QUALIFICATION]: TournamentRegistrationStatusName.REGISTERED_PENDING_QUALIFICATION
        })[e] || TournamentRegistrationStatusName.UNKNOWN),
        tournamentPrizeTypeToPrizeName = ((e => {
            e[e.PUBLISHED = 1] = "PUBLISHED", e[e.REGISTER = 2] = "REGISTER", e[e.STARTED = 3] = "STARTED", e[e.FINISHED = 4] = "FINISHED", e[e.CANCELLED = 5] = "CANCELLED", e[e.FAILED = 6] = "FAILED", e[e.FINALIZING = 7] = "FINALIZING"
        })(TournamentInstanceStatus = TournamentInstanceStatus || {}), e => ({
            [ActivityTypeLimited.DoNothing]: "TANGIBLE",
            [ActivityTypeLimited.Points]: "POINTS_ADD",
            [ActivityTypeLimited.DeductPoints]: "POINTS_DEDUCT",
            [ActivityTypeLimited.ResetPoints]: "POINTS_RESET",
            [ActivityTypeLimited.MiniGameAttempt]: "MINI_GAME_ATTEMPT",
            [ActivityTypeLimited.Bonus]: "BONUS",
            [ActivityTypeLimited.AddGemsAndDiamonds]: "GEMS_AND_DIAMONDS_ADD",
            [ActivityTypeLimited.DeductGemsAndDiamonds]: "GEMS_AND_DIAMONDS_DEDUCT",
            [ActivityTypeLimited.ResetGemsAndDiamonds]: "GEMS_AND_DIAMONDS_RESET"
        })[e]);
    class TournamentUtils {}
    TournamentUtils.isCanRegister = e => !!e && (e.tournamentRegistrationStatus === TournamentRegistrationStatus.QUALIFIED_PENDING_REGISTRATION || !e.isUserRegistered && (e.playersMaxCount !== e.registrationCount || null === e.playersMaxCount || 0 === e.playersMaxCount) && e.registrationType !== TournamentRegistrationType.AUTO && (e.tournamentInstanceStatus === TournamentInstanceStatus.REGISTER || e.tournamentInstanceStatus === TournamentInstanceStatus.STARTED && e.allowLateRegistration)), TournamentUtils.isInProgress = e => !!e && e.tournamentInstanceStatus === TournamentInstanceStatus.STARTED, TournamentUtils.isActive = e => !!e && (e.tournamentInstanceStatus === TournamentInstanceStatus.PUBLISHED || e.tournamentInstanceStatus === TournamentInstanceStatus.REGISTER || e.tournamentInstanceStatus === TournamentInstanceStatus.STARTED), TournamentUtils.isFinished = e => !!e && (e.tournamentInstanceStatus === TournamentInstanceStatus.FINISHED || e.tournamentInstanceStatus === TournamentInstanceStatus.CANCELLED || e.tournamentInstanceStatus === TournamentInstanceStatus.FINALIZING), TournamentUtils.isCancelled = e => !!e && e.tournamentInstanceStatus === TournamentInstanceStatus.CANCELLED, TournamentUtils.isUpcoming = e => !!e && (e.tournamentInstanceStatus === TournamentInstanceStatus.PUBLISHED || e.tournamentInstanceStatus === TournamentInstanceStatus.REGISTER), TournamentUtils.getPlayerTransformed = (e, t) => e ? (e = {
        public_username: e.userAltName,
        avatar_url: e.avatar_url,
        position: e.position,
        scores: e.scores,
        is_me: e.isMe
    }, t && delete e.is_me, e) : null, TournamentUtils.getPrizeTransformed = e => e ? _extends({}, e, {
        type: tournamentPrizeTypeToPrizeName(e.type)
    }) : null;
    let TournamentItemsTransform = e => e.filter(e => 1 <= e.tournamentId).map(e => {
            var t = _extends({
                instance_id: e.tournamentInstanceId,
                tournament_id: e.tournamentId,
                name: e.publicMeta.name,
                description: e.publicMeta.description,
                segment_dont_match_message: e.publicMeta.segment_dont_match_message,
                image1: e.publicMeta.image_url,
                image2: e.publicMeta.image_url2,
                image2_mobile: e.publicMeta.image_url2_mobile,
                prize_pool_short: e.publicMeta.prize_pool_short,
                custom_price_text: e.publicMeta.custom_price_text,
                custom_section_id: e.publicMeta.custom_section_id,
                custom_data: IntUtils.JsonOrText(e.publicMeta.custom_data),
                is_featured: e.publicMeta.featured,
                ribbon: "custom" === e.publicMeta.label_tag ? e.publicMeta.custom_label_tag : e.publicMeta.label_tag,
                priority: e.publicMeta.position,
                start_time: e.startTimeTs,
                end_time: e.endTimeTs,
                registration_count: e.registrationCount,
                is_user_registered: e.isUserRegistered,
                players_min_count: e.playersMinCount,
                players_max_count: e.playersMaxCount,
                registration_status: TournamentRegistrationStatusNamed(e.tournamentRegistrationStatus),
                registration_type: TournamentRegistrationTypeGetName(e.registrationType)
            }, e.registrationType === TournamentRegistrationType.BUY_IN_POINTS ? {
                registration_cost_points: e.buyInAmount
            } : {}, e.registrationType === TournamentRegistrationType.BUY_IN_GEMS ? {
                registration_cost_gems: e.buyInAmount
            } : {}, e.registrationType === TournamentRegistrationType.BUY_IN_DIAMONDS ? {
                registration_cost_diamonds: e.buyInAmount
            } : {}, {
                duration_ms: e.durationMs,
                is_active: TournamentUtils.isActive(e),
                is_can_register: TournamentUtils.isCanRegister(e),
                is_cancelled: TournamentUtils.isCancelled(e),
                is_finished: TournamentUtils.isFinished(e),
                is_in_progress: TournamentUtils.isInProgress(e),
                is_upcoming: TournamentUtils.isUpcoming(e),
                min_scores_win: e.minScoreToWin,
                hide_leaderboard_min_scores: e.hideLeaderboardsMinScores
            });
            return e.prizeStructure && (t.prizes = e.prizeStructure.prizes.map(e => TournamentUtils.getPrizeTransformed(e))), e.tournamentPlayer && (t.me = TournamentUtils.getPlayerTransformed(e.tournamentPlayer, !0)), t
        }),
        tournamentInfoItemTransform = e => {
            var t = _extends({}, TournamentItemsTransform([e.tournamentInfo.tournamentLobbyInfo])[0], {
                related_games: (e.tournamentInfo.tournamentLobbyInfo.related_games || []).map(e => ({
                    ext_game_id: e.ext_game_id,
                    game_public_meta: {
                        name: e.game_public_meta.name,
                        link: e.game_public_meta.link,
                        image: e.game_public_meta.image,
                        enabled: e.game_public_meta.enabled,
                        game_categories: e.game_public_meta.game_categories,
                        game_provider: e.game_public_meta.game_provider,
                        mobile_spec_link: e.game_public_meta.mobile_spec_link
                    }
                })),
                players: e.tournamentInfo.players.map(e => TournamentUtils.getPlayerTransformed(e))
            });
            return e.prizeStructure && (t.prizes = e.prizeStructure.prizes.map(e => TournamentUtils.getPrizeTransformed(e))), e.userPosition && (t.me = TournamentUtils.getPlayerTransformed(e.userPosition, !0)), t
        },
        pointsRewardTransform = ((e => {
            e[e.NO_ERROR = 0] = "NO_ERROR", e[e.TOURNAMENT_INSTANCE_NOT_FOUND = 30001] = "TOURNAMENT_INSTANCE_NOT_FOUND", e[e.TOURNAMENT_REGISTRATION_NOT_ENOUGH_POINTS = 30002] = "TOURNAMENT_REGISTRATION_NOT_ENOUGH_POINTS", e[e.TOURNAMENT_INSTANCE_NOT_IN_STATE = 30003] = "TOURNAMENT_INSTANCE_NOT_IN_STATE", e[e.TOURNAMENT_ALREADY_REGISTERED = 30004] = "TOURNAMENT_ALREADY_REGISTERED", e[e.TOURNAMENT_USER_DONT_MATCH_CONDITIONS = 30005] = "TOURNAMENT_USER_DONT_MATCH_CONDITIONS", e[e.TOURNAMENT_USER_NOT_REGISTERED = 30006] = "TOURNAMENT_USER_NOT_REGISTERED", e[e.TOURNAMENT_CANT_CHANGE_REGISTRATION_STATUS = 30007] = "TOURNAMENT_CANT_CHANGE_REGISTRATION_STATUS", e[e.TOURNAMENT_MAX_REGISTRATIONS_REACHED = 30008] = "TOURNAMENT_MAX_REGISTRATIONS_REACHED"
        })(TournamentRegistrationError = TournamentRegistrationError || {}), (e => {
            e[e.SCHEDULED = 1] = "SCHEDULED", e[e.SNG = 2] = "SNG", e[e.TEST = 3] = "TEST"
        })(TournamentType = TournamentType || {}), (e => {
            e[e.DAILY = 1] = "DAILY", e[e.WEEKLY = 2] = "WEEKLY", e[e.MONTHLY = 3] = "MONTHLY"
        })(LeaderBoardPeriodType = LeaderBoardPeriodType || {}), e => e && e.length ? e.map((e, t) => ({
            place: t + 1,
            points: e
        })) : null),
        getLeaderBoardPlayerTransformed = (e, t) => e ? (e = {
            public_username: (null == e ? void 0 : e.public_username) || e.user_alt_name,
            avatar_url: e.avatar_url,
            position: e.position_in_board,
            points: e.points_accumulated,
            is_me: e.is_me
        }, t && delete e.is_me, e) : null,
        getLeaderBoardTransform = e => e ? {
            board_id: e.board_id,
            name: e.board_public_meta.name,
            description: e.board_public_meta.description,
            rules: e.board_public_meta.rules,
            period_type_id: e.period_type_id,
            rewards: pointsRewardTransform(e.reward_points),
            users: e.positions.map(e => getLeaderBoardPlayerTransformed(e)),
            me: getLeaderBoardPlayerTransformed(e.userPosition, !0)
        } : null,
        GetLevelMapResponseTransform = e => null == e ? void 0 : e.levels.map(e => ({
            id: e.level_id,
            name: e.level_public_meta.name,
            description: e.level_public_meta.description,
            image: e.level_public_meta.image_url,
            required_points: e.required_points,
            visibility_points: e.level_public_meta.visibility_points ? parseInt(e.level_public_meta.visibility_points) : null,
            required_level_counter_1: e.required_level_counter_1,
            required_level_counter_2: e.required_level_counter_2,
            custom_data: IntUtils.JsonOrText(null == (e = e.level_public_meta) ? void 0 : e.custom_data)
        })),
        ticketsTransform = e => e.map(e => ({
            ticekt_id: e.id,
            ticket_id_string: e.s
        })),
        winnersTransform = e => e.map(e => ({
            id: e.user_id,
            username: e.public_username,
            avatar_url: e.avatar_url,
            ticket: {
                ticekt_id: e.ticket.id,
                ticket_id_string: e.ticket.s
            },
            raf_won_id: e.raf_won_id,
            claimed_date: e.claimed_date
        })),
        prizeTransform = e => e.map(e => ({
            id: e.prize_id,
            name: e.public_meta.name,
            description: e.public_meta.description,
            image_url: e.public_meta.image_url,
            prizes_per_run: e.prizes_per_run,
            prizes_per_run_actual: e.prizes_per_run_actual,
            chances_to_win_perc: e.chances_to_win_perc,
            min_required_total_tickets: e.min_required_total_tickets,
            cap_prizes_per_run: e.cap_prizes_per_run,
            priority: e.priority,
            stock_items_per_draw: e.stock_items_per_draw,
            should_claim: e.should_claim,
            winners: winnersTransform(e.winners),
            requires_claim: e.requires_claim,
            min_required_tickets_for_user: e.min_required_tickets_for_user
        })),
        drawTransform = e => e.map(e => ({
            id: e.draw_id,
            name: e.public_meta.name,
            description: e.public_meta.description,
            image_url: e.public_meta.image_url,
            image_url_mobile: e.public_meta.image_url_mobile,
            icon_url: e.public_meta.icon_url,
            background_image_url: e.public_meta.background_image_url,
            background_image_url_mobile: e.public_meta.background_image_url_mobile,
            is_grand: e.public_meta.is_grand,
            prizes: prizeTransform(e.prizes),
            current_state: e.current_state,
            run_id: e.run_id,
            execution_type: e.execution_type,
            execution_ts: e.execution_ts,
            previous_run_ts: e.previous_run_ts,
            previous_run_id: e.previous_run_id,
            ticket_start_ts: e.ticket_start_ts,
            allow_multi_prize_per_ticket: e.allow_multi_prize_per_ticket,
            total_tickets_count: e.total_tickets_count,
            my_tickets_count: e.my_tickets_count,
            my_last_tickets: ticketsTransform(e.my_last_tickets)
        })),
        raffleTransform = e => e.map(e => ({
            id: e.raffle_id,
            name: e.public_meta.name,
            description: e.public_meta.description,
            custom_section_id: e.public_meta.custom_section_id,
            image_url: e.public_meta.image_url,
            image_url_mobile: e.public_meta.image_url_mobile,
            custom_data: e.public_meta.custom_data,
            start_date: e.start_date_ts,
            end_date: e.end_date_ts,
            max_tickets_count: e.max_tickets_count,
            current_tickets_count: e.current_tickets_count,
            draws: drawTransform(e.draws)
        })),
        drawRunTransform = e => ({
            id: e.draw.draw_id,
            name: e.draw.public_meta.name,
            description: e.draw.public_meta.description,
            image_url: e.draw.public_meta.image_url,
            image_url_mobile: e.draw.public_meta.image_url_mobile,
            icon_url: e.draw.public_meta.icon_url,
            background_image_url: e.draw.public_meta.background_image_url,
            background_image_url_mobile: e.draw.public_meta.background_image_url_mobile,
            is_grand: e.draw.public_meta.is_grand,
            prizes: prizeTransform(e.draw.prizes),
            current_state: e.draw.current_state,
            run_id: e.draw.run_id,
            execution_type: e.draw.execution_type,
            execution_ts: e.draw.execution_ts,
            previous_run_ts: e.draw.previous_run_ts,
            previous_run_id: e.draw.previous_run_id,
            ticket_start_ts: e.draw.ticket_start_ts,
            allow_multi_prize_per_ticket: e.draw.allow_multi_prize_per_ticket,
            total_tickets_count: e.draw.total_tickets_count,
            my_tickets_count: e.draw.my_tickets_count,
            my_last_tickets: ticketsTransform(e.draw.my_last_tickets)
        }),
        drawRunHistoryTransform = ((e => {
            e[e.Open = 1] = "Open", e[e.WinnerSelection = 2] = "WinnerSelection", e[e.Executed = 3] = "Executed"
        })(RaffleDrawInstanceState = RaffleDrawInstanceState || {}), (e => {
            e[e.ExecDate = 0] = "ExecDate", e[e.Recurring = 1] = "Recurring", e[e.Grand = 2] = "Grand"
        })(RaffleDrawTypeExecution = RaffleDrawTypeExecution || {}), e => e.draw_runs.map(e => ({
            id: e.draw_id,
            run_id: e.run_id,
            name: e.public_meta.name,
            description: e.public_meta.description,
            image_url: e.public_meta.image_url,
            image_url_mobile: e.public_meta.image_url_mobile,
            icon_url: e.public_meta.icon_url,
            background_image_url: e.public_meta.background_image_url,
            background_image_url_mobile: e.public_meta.background_image_url_mobile,
            is_grand: e.public_meta.is_grand,
            execution_ts: e.execution_ts,
            actual_execution_ts: e.actual_execution_ts,
            ticket_start_ts: e.ticket_start_ts,
            is_winner: e.is_winner,
            has_unclaimed_prize: e.has_unclaimed_prize
        }))),
        raffleClaimPrizeResponseTransform = e => ({
            errorCode: e.errCode,
            errorMessage: e.errMsg
        }),
        CACHE_DATA_SEC = 30,
        JACKPOT_TEMPLATE_CACHE_SEC = 30,
        JACKPOT_POT_CACHE_SEC = 1,
        JACKPOT_WINNERS_CACHE_SEC = 30,
        JACKPOT_ELIGIBLE_GAMES_CACHE_SEC = 30;
    (e => {
        e.Saw = "saw", e.Missions = "missions", e.TournamentList = "tournamentList", e.InboxMessages = "inboxMessages", e.Badges = "badges", e.Levels = "levels", e.StoreItems = "storeItems", e.StoreCategories = "storeCategories", e.AchCategories = "achCategories", e.LeaderBoards = "leaderBoards", e.LevelExtraCounters = "levelExtraCounters", e.Segments = "segments", e.StoreHistory = "storeHistory", e.Jackpots = "jackpots", e.Pots = "Pots", e.CustomSections = "customSections", e.Bonuses = "bonuses", e.SAWHistory = "sawHistory", e.JackpotWinners = "jackpotWinners", e.Raffles = "raffles", e.JackpotEligibleGames = "jackpotEligibleGames", e.CurrentLevel = "currentLevel"
    })(onUpdateContextKey = onUpdateContextKey || {});
    class WSAPI {
        constructor(e) {
            this.api = void 0, this.onUpdateCallback = new Map, this.jackpotGetSignature = "", this.api = e, OCache.clearAll(), this.api.tracker && ((e = this.api.tracker.on)(ClassId.SAW_SPINS_COUNT_PUSH, e => this.updateOnSpin(e)), e(ClassId.SAW_SHOW_SPIN_PUSH, () => this.reloadMiniGameTemplate()), e(ClassId.SAW_AKNOWLEDGE_RESPONSE, () => {
                this.reloadMiniGameTemplate(), OCache.clear(ECacheContext.WSAPI, onUpdateContextKey.SAWHistory)
            }), e(ClassId.SAW_DO_SPIN_RESPONSE, () => {
                this.reloadMiniGameTemplate(), OCache.clear(ECacheContext.WSAPI, onUpdateContextKey.SAWHistory)
            }), e(ClassId.MISSION_OPTIN_RESPONSE, () => this.updateMissions()), e(ClassId.ACHIEVEMENT_CLAIM_PRIZE_RESPONSE, () => this.updateMissions()), e(ClassId.RELOAD_ACHIEVEMENTS_EVENT, () => this.updateMissions()), e(ClassId.TOURNAMENT_REGISTER_RESPONSE, () => this.updateTournaments()), e(ClassId.BUY_SHOP_ITEM_RESPONSE, () => this.updateStorePurchasedItems()), e(ClassId.CLIENT_ENGAGEMENT_EVENT_NEW, () => this.updateInboxMessages()), e(ClassId.LOGOUT_RESPONSE, () => OCache.clearContext(ECacheContext.WSAPI)), e(ClassId.IDENTIFY_RESPONSE, () => OCache.clearContext(ECacheContext.WSAPI)), e(ClassId.JP_WIN_PUSH, e => this.jackpotClearCache()), e(ClassId.JP_OPTOUT_RESPONSE, e => this.jackpotClearCache()), e(ClassId.JP_OPTIN_RESPONSE, e => this.jackpotClearCache()), e(ClassId.CLAIM_BONUS_RESPONSE, () => this.updateBonuses()), e(ClassId.SAW_DO_SPIN_BATCH_RESPONSE, () => {
                this.reloadMiniGameTemplate(), OCache.clear(ECacheContext.WSAPI, onUpdateContextKey.SAWHistory)
            }), e(ClassId.RAF_CLAIM_PRIZE_RESPONSE, () => {
                this.updateRaffles(), OCache.clear(ECacheContext.WSAPI, onUpdateContextKey.Raffles)
            }))
        }
        clearCaches() {
            OCache.clearAll()
        }
        getUserProfile() {
            var e;
            if (this.api.tracker) return (e = Object.assign({}, this.api.tracker.userPublicProps)).avatar_url = CoreUtils.avatarUrl(this.api.tracker.userPublicProps.avatar_id, this.api.avatarDomain), e;
            throw new Error("Tracker is not initialized, cannot getUserProfile")
        }
        checkSegmentMatch(t) {
            return __async(function*() {
                var e = yield this.api.coreCheckSegments(null, [t]);
                return !(!e || !e.find(e => e.segment_id === t && e.is_matching))
            }.call(this))
        }
        checkSegmentListMatch(e) {
            return __async(function*() {
                return yield this.api.coreCheckSegments(null, Array.isArray(e) ? e : [e])
            }.call(this))
        }
        getLevels() {
            return __async(function*() {
                return OCache.use(onUpdateContextKey.Levels, ECacheContext.WSAPI, () => this.api.levelsGetT(null), CACHE_DATA_SEC)
            }.call(this))
        }
        getCurrentLevel() {
            return __async(function*() {
                return OCache.use(onUpdateContextKey.CurrentLevel, ECacheContext.WSAPI, () => this.api.getLevelCurrent(null), CACHE_DATA_SEC)
            }.call(this))
        }
        getMissions({
            onUpdate: e
        } = {}) {
            return __async(function*() {
                return e && this.onUpdateCallback.set(onUpdateContextKey.Missions, e), OCache.use(onUpdateContextKey.Missions, ECacheContext.WSAPI, () => this.api.missionsGetItemsT(null), CACHE_DATA_SEC)
            }.call(this))
        }
        getBadges() {
            return __async(function*() {
                return OCache.use(onUpdateContextKey.Badges, ECacheContext.WSAPI, () => this.api.badgetsGetItemsT(null), CACHE_DATA_SEC)
            }.call(this))
        }
        getBonuses({
            onUpdate: e
        } = {}) {
            return __async(function*() {
                return e && this.onUpdateCallback.set(onUpdateContextKey.Bonuses, e), OCache.use(onUpdateContextKey.Bonuses, ECacheContext.WSAPI, () => this.api.bonusesGetItemsT(null), CACHE_DATA_SEC)
            }.call(this))
        }
        claimBonus(t) {
            return __async(function*() {
                var e = yield this.api.bonusClaimItem(null, t);
                return {
                    err_code: e.errCode,
                    err_message: e.errMsg,
                    success: e.success
                }
            }.call(this))
        }
        getUserLevelExtraCounters() {
            return __async(function*() {
                return OCache.use(onUpdateContextKey.LevelExtraCounters, ECacheContext.WSAPI, () => this.api.getUserGamificationInfoT(null), CACHE_DATA_SEC)
            }.call(this))
        }
        getStoreItems() {
            return __async(function*() {
                return OCache.use(onUpdateContextKey.StoreItems, ECacheContext.WSAPI, () => this.api.storeGetItemsT(null), CACHE_DATA_SEC)
            }.call(this))
        }
        buyStoreItem(t) {
            return __async(function*() {
                var e = yield this.api.buyStoreItem(null, t);
                return {
                    err_code: e.errCode,
                    err_message: e.errMsg
                }
            }.call(this))
        }
        getStoreCategories() {
            return __async(function*() {
                return OCache.use(onUpdateContextKey.StoreCategories, ECacheContext.WSAPI, () => this.api.storeGetCategoriesT(null), CACHE_DATA_SEC)
            }.call(this))
        }
        getStorePurchasedItems({
            limit: e,
            offset: t,
            onUpdate: n
        } = {}) {
            return __async(function*() {
                return n && this.onUpdateCallback.set(onUpdateContextKey.StoreHistory, n), OCache.use(onUpdateContextKey.StoreHistory, ECacheContext.WSAPI, () => this.api.storeGetPurchasedItemsT(null, e, t), CACHE_DATA_SEC)
            }.call(this))
        }
        getAchCategories() {
            return __async(function*() {
                return OCache.use(onUpdateContextKey.AchCategories, ECacheContext.WSAPI, () => this.api.achGetCategoriesT(null), CACHE_DATA_SEC)
            }.call(this))
        }
        getCustomSections() {
            return __async(function*() {
                return OCache.use(onUpdateContextKey.CustomSections, ECacheContext.WSAPI, () => this.api.customSectionsGetT(null), CACHE_DATA_SEC)
            }.call(this))
        }
        getMiniGames({
            onUpdate: e
        } = {}) {
            return __async(function*() {
                return e && this.onUpdateCallback.set(onUpdateContextKey.Saw, e), OCache.use(onUpdateContextKey.Saw, ECacheContext.WSAPI, () => this.api.sawGetTemplatesT(null), CACHE_DATA_SEC)
            }.call(this))
        }
        getMiniGamesHistory({
            limit: e,
            offset: t,
            saw_template_id: n
        }) {
            return __async(function*() {
                return OCache.use(onUpdateContextKey.SAWHistory, ECacheContext.WSAPI, () => this.api.getSawWinningHistoryT(null, e, t, n), CACHE_DATA_SEC)
            }.call(this))
        }
        playMiniGame(t, {
            onUpdate: n
        } = {}) {
            return __async(function*() {
                n && this.onUpdateCallback.set(onUpdateContextKey.Saw, n);
                var e = yield this.api.sawSpinRequest(null, t), e = (this.api.doAcknowledgeRequest(null, e.request_id), {
                    err_code: e.errCode,
                    err_message: e.errMsg,
                    prize_id: e.saw_prize_id
                });
                return e
            }.call(this))
        }
        miniGameWinAcknowledgeRequest(e) {
            return __async(function*() {
                return this.api.doAcknowledgeRequest(null, e)
            }.call(this))
        }
        playMiniGameBatch(n, i, {
            onUpdate: r
        } = {}) {
            return __async(function*() {
                r && this.onUpdateCallback.set(onUpdateContextKey.Saw, r);
                var e = yield this.api.sawSpinBatchRequest(null, n, i), t = e.results.map(e => e.request_id), t = (this.api.doAcknowledgeBatchRequest(null, t), e.results.map(e => ({
                    errCode: e.errCode,
                    errMessage: e.errMsg,
                    saw_prize_id: e.saw_prize_id,
                    jackpot_amount: e.jackpot_amount,
                    first_spin_in_period: e.first_spin_in_period
                })));
                return t
            }.call(this))
        }
        requestMissionOptIn(t) {
            return __async(function*() {
                var e = yield this.api.missionOptIn(null, t);
                return {
                    err_code: e.errCode,
                    err_message: e.errMsg
                }
            }.call(this))
        }
        requestMissionClaimReward(t, n) {
            return __async(function*() {
                var e = yield this.api.missionClaimPrize(null, t, n);
                return {
                    err_code: e.errCode,
                    err_message: e.errMsg
                }
            }.call(this))
        }
        getTournamentsList({
            onUpdate: e
        } = {}) {
            return __async(function*() {
                return e && this.onUpdateCallback.set(onUpdateContextKey.TournamentList, e), OCache.use(onUpdateContextKey.TournamentList, ECacheContext.WSAPI, () => this.api.tournamentsGetLobbyT(null), CACHE_DATA_SEC)
            }.call(this))
        }
        getTournamentInstanceInfo(e) {
            return __async(function*() {
                return this.api.tournamentsGetInfoT(null, e)
            }.call(this))
        }
        registerInTournament(t) {
            return __async(function*() {
                var e = yield this.api.registerInTournament(null, t);
                return {
                    err_code: e.errCode,
                    err_message: e.errMsg
                }
            }.call(this))
        }
        getLeaderBoard(e, t) {
            return __async(function*() {
                return OCache.use(onUpdateContextKey.LeaderBoards, ECacheContext.WSAPI, () => this.api.leaderboardsGetT(null, e, t), CACHE_DATA_SEC)
            }.call(this))
        }
        getInboxMessages({
            from: e,
            to: t,
            onlyFavorite: n,
            categoryId: i,
            onUpdate: r
        } = {}) {
            return __async(function*() {
                return r && this.onUpdateCallback.set(onUpdateContextKey.InboxMessages, r), yield this.api.getInboxMessagesT(null, e, t, n, i)
            }.call(this))
        }
        getInboxMessageBody(e) {
            return __async(function*() {
                return yield this.api.getInboxMessageBodyT(e)
            }.call(this))
        }
        markInboxMessageAsRead(t) {
            return __async(function*() {
                var e = yield this.api.markInboxMessageRead(null, t);
                return {
                    err_code: e.errCode,
                    err_message: e.errMsg
                }
            }.call(this))
        }
        markAllInboxMessagesAsRead() {
            return __async(function*() {
                var e = yield this.api.markAllInboxMessageRead(null);
                return {
                    err_code: e.errCode,
                    err_message: e.errMsg
                }
            }.call(this))
        }
        markUnmarkInboxMessageAsFavorite(t, n) {
            return __async(function*() {
                var e = yield this.api.markUnmarkInboxMessageAsFavorite(null, t, n);
                return {
                    err_code: e.errCode,
                    err_message: e.errMsg
                }
            }.call(this))
        }
        deleteInboxMessage(t) {
            return __async(function*() {
                var e = yield this.api.deleteInboxMessage(null, t);
                return {
                    err_code: e.errCode,
                    err_message: e.errMsg
                }
            }.call(this))
        }
        deleteAllInboxMessages() {
            return __async(function*() {
                var e = yield this.api.deleteAllInboxMessages(null);
                return {
                    err_code: e.errCode,
                    err_message: e.errMsg
                }
            }.call(this))
        }
        getTranslations(e) {
            return __async(function*() {
                return {
                    translations: (yield this.api.getTranslationsT(null, e, [])).translations
                }
            }.call(this))
        }
        updateOnSpin(n) {
            return __async(function*() {
                var e = yield OCache.use(onUpdateContextKey.Saw, ECacheContext.WSAPI, () => this.api.sawGetTemplatesT(null), CACHE_DATA_SEC), t = e.findIndex(e => e.id === n.saw_template_id);
                e[t].spin_count = n.spin_count, this.updateEntity(onUpdateContextKey.Saw, e)
            }.call(this))
        }
        reloadMiniGameTemplate() {
            return __async(function*() {
                var e = yield this.api.sawGetTemplatesT(null);
                this.updateEntity(onUpdateContextKey.Saw, e)
            }.call(this))
        }
        updateMissions() {
            return __async(function*() {
                var e = yield this.api.missionsGetItemsT(null);
                this.updateEntity(onUpdateContextKey.Missions, e)
            }.call(this))
        }
        updateBonuses() {
            return __async(function*() {
                var e = yield this.api.bonusesGetItemsT(null);
                this.updateEntity(onUpdateContextKey.Bonuses, e)
            }.call(this))
        }
        updateTournaments() {
            return __async(function*() {
                var e = yield this.api.tournamentsGetLobbyT(null);
                this.updateEntity(onUpdateContextKey.TournamentList, e)
            }.call(this))
        }
        updateStorePurchasedItems() {
            return __async(function*() {
                var e = yield this.api.storeGetPurchasedItemsT(null, 20, 0);
                this.updateEntity(onUpdateContextKey.StoreHistory, e)
            }.call(this))
        }
        updateInboxMessages() {
            return __async(function*() {
                var e = yield this.api.getInboxMessagesT(null);
                this.updateEntity(onUpdateContextKey.InboxMessages, e)
            }.call(this))
        }
        updateRaffles() {
            return __async(function*() {
                var e = yield this.api.getRafflesT(null);
                this.updateEntity(onUpdateContextKey.Raffles, e)
            }.call(this))
        }
        updateEntity(t, n) {
            return __async(function*() {
                OCache.set(t, n, ECacheContext.WSAPI);
                var e = this.onUpdateCallback.get(t);
                e && e(n)
            }.call(this))
        }
        jackpotClearCache() {
            return __async(function*() {
                OCache.clear(ECacheContext.WSAPI, onUpdateContextKey.Jackpots), OCache.clear(ECacheContext.WSAPI, onUpdateContextKey.Pots), OCache.clear(ECacheContext.WSAPI, onUpdateContextKey.JackpotWinners)
            }())
        }
        jackpotGet(r) {
            return __async(function*() {
                var n = this,
                    e = `${null==r?void 0:r.jp_template_id}:` + (null == r ? void 0 : r.related_game_id);
                e !== this.jackpotGetSignature && (this.jackpotGetSignature = e, this.jackpotClearCache());
                let t = [],
                    i = [];
                return 0 < (t = yield OCache.use(onUpdateContextKey.Jackpots, ECacheContext.WSAPI, function() {
                    return __async(function*() {
                        var e = yield n.api.jackpotGet(null, r), t = e.items.map(e => e.pot);
                        return e.items.forEach(e => {
                            e.jp_public_meta.custom_data = IntUtils.JsonOrText(e.jp_public_meta.custom_data)
                        }), OCache.set(onUpdateContextKey.Pots, t, ECacheContext.WSAPI, JACKPOT_POT_CACHE_SEC), e.items
                    }())
                }, JACKPOT_TEMPLATE_CACHE_SEC)).length && (i = yield OCache.use(onUpdateContextKey.Pots, ECacheContext.WSAPI, function() {
                    return __async(function*() {
                        var e = t.map(e => e.jp_template_id);
                        return (yield n.api.potGet(null, {
                            jp_template_ids: e
                        })).items
                    }())
                }, JACKPOT_POT_CACHE_SEC)), t.map(t => _extends({}, t, {
                    pot: i.find(e => e.jp_template_id === t.jp_template_id)
                }))
            }.call(this))
        }
        jackpotOptIn(e) {
            return __async(function*() {
                if (e.jp_template_id) return yield this.api.jackpotOptIn(null, e);
                throw new Error("jp_template_id is required in jackpotOptIn")
            }.call(this))
        }
        jackpotOptOut(e) {
            return __async(function*() {
                if (e.jp_template_id) return yield this.api.jackpotOptOut(null, e);
                throw new Error("jp_template_id is required in jackpotOptOut")
            }.call(this))
        }
        getJackpotWinners({
            limit: e,
            offset: t,
            jp_template_id: n
        }) {
            return __async(function*() {
                return OCache.use(onUpdateContextKey.JackpotWinners + n, ECacheContext.WSAPI, () => this.api.getJackpotWinnersT(null, e, t, n), JACKPOT_WINNERS_CACHE_SEC)
            }.call(this))
        }
        getJackpotEligibleGames({
            jp_template_id: e,
            onUpdate: t
        }) {
            return __async(function*() {
                return t && this.onUpdateCallback.set(onUpdateContextKey.JackpotEligibleGames, t), OCache.use(onUpdateContextKey.JackpotEligibleGames + e, ECacheContext.WSAPI, () => this.api.getJackpotEligibleGamesT(null, {
                    jp_template_id: e
                }), JACKPOT_ELIGIBLE_GAMES_CACHE_SEC)
            }.call(this))
        }
        getRelatedItemsForGame(e) {
            return __async(function*() {
                return yield this.api.getRelatedItemsForGame(null, e)
            }.call(this))
        }
        getRaffles({
            onUpdate: e
        } = {}) {
            return __async(function*() {
                return e && this.onUpdateCallback.set(onUpdateContextKey.Raffles, e), OCache.use(onUpdateContextKey.Raffles, ECacheContext.WSAPI, () => this.api.getRafflesT(null), CACHE_DATA_SEC)
            }.call(this))
        }
        getRaffleDrawRun(t) {
            return __async(function*() {
                var e = yield this.api.getRaffleDrawRun(null, t);
                if (t.raffle_id && t.run_id) return drawRunTransform(e);
                throw new Error("both raffle_id and run_id are required")
            }.call(this))
        }
        getRaffleDrawRunsHistory(t) {
            return __async(function*() {
                var e = yield this.api.getRaffleDrawRunsHistory(null, t);
                if (t.raffle_id) return drawRunHistoryTransform(e);
                throw new Error("raffle_id is required")
            }.call(this))
        }
        claimRafflePrize(t) {
            return __async(function*() {
                var e;
                if (t.won_id) return e = yield this.api.claimRafflePrize(null, {
                    won_id: t.won_id
                }), raffleClaimPrizeResponseTransform(e);
                throw new Error("won_id is required")
            }.call(this))
        }
    }(e => {
        e[e.HTML_PAGE = 1] = "HTML_PAGE", e[e.MISSIONS_CATEGORY = 2] = "MISSIONS_CATEGORY", e[e.TOURNAMENTS_CATEGORY = 3] = "TOURNAMENTS_CATEGORY", e[e.LEVELS = 4] = "LEVELS", e[e.MINI_GAMES = 5] = "MINI_GAMES", e[e.MISSION_CUSTOM_LAYOUT = 6] = "MISSION_CUSTOM_LAYOUT", e[e.MATCH_X_AND_QUIZ = 7] = "MATCH_X_AND_QUIZ", e[e.REDIRECT_LINK = 9] = "REDIRECT_LINK", e[e.LOOTBOX_WEEKLY = 10] = "LOOTBOX_WEEKLY", e[e.LOOTBOX_CALENDAR_DAYS = 11] = "LOOTBOX_CALENDAR_DAYS", e[e.TREASURE_HUNT = 12] = "TREASURE_HUNT"
    })(AchCustomSectionType = AchCustomSectionType || {}), (e => {
        e.VALENTINES_LIGHT = "valentines-light", e.VALENTINES_DARK = "valentines-dark", e.EURO_2024 = "euro-2024", e.GENERIC = "generic"
    })(AchCustomLayoutTheme = AchCustomLayoutTheme || {}), (e => {
        e[e.ONLY_OVERVIEW = 1] = "ONLY_OVERVIEW", e[e.NO_OVERVIEW = 2] = "NO_OVERVIEW", e[e.ALL = 3] = "ALL"
    })(AchMissionsTabsOptions = AchMissionsTabsOptions || {}), (e => {
        e[e.ANY = 1] = "ANY", e[e.ALL_MISSIONS = 2] = "ALL_MISSIONS", e[e.ALL_EXCEPT_COMPLETED = 3] = "ALL_EXCEPT_COMPLETED", e[e.ALL_EXCEPT_LOCKED = 4] = "ALL_EXCEPT_LOCKED", e[e.ALL_EXCEPT_COMPLETED_AND_LOCKED = 5] = "ALL_EXCEPT_COMPLETED_AND_LOCKED"
    })(AchOverviewMissionsFilter = AchOverviewMissionsFilter || {});
    let UICustomSectionTransform = n => {
            let i = [];
            return Object.keys(n.customSections || []).forEach(e => {
                var t = n.customSections[e],
                    e = parseInt(e);
                void 0 !== t.section_type_id && 1 <= t.section_type_id && (e = {
                    id: e,
                    body: t.body,
                    menu_img: t.menu_img,
                    menu_name: t.menu_name,
                    section_type_id: t.section_type_id,
                    custom_skin_images: t.custom_skin_images,
                    generic_custom_css: t.generic_custom_css,
                    mission_tabs_options: t.mission_tabs_options,
                    overview_missions_count: t.overview_missions_count,
                    overview_missions_filter: t.overview_missions_filter,
                    theme: t.theme
                }, i.push(e))
            }), i
        },
        BonusItemsTransform = e => e.filter(e => 1 <= e.id).map(e => ({
            bonus_id: e.id,
            is_redeemable: e.redeemable,
            create_date: e.createDate,
            redeem_date: e.redeemDate,
            label_bonus_template_id: e.labelBonusTemplateId,
            bonus_status_id: e.bonusStatusId,
            label_bonus_template_meta_map: e.labelBonusTemplateMetaMap,
            bonus_meta_map: e.bonusMetaMap
        })),
        GetJackpotWinnersResponseTransform = ((e => {
            e[e.New = 1] = "New", e[e.COUPON_ISSUED = 2] = "COUPON_ISSUED", e[e.REDEEMED = 3] = "REDEEMED", e[e.REDEEM_FAILED = 4] = "REDEEM_FAILED", e[e.COUPON_ISSUE_FAILED = 5] = "COUPON_ISSUE_FAILED", e[e.EXPIRED = 6] = "EXPIRED"
        })(BonusStatus = BonusStatus || {}), e => e.map(e => ({
            winner: e.winner,
            win_date_ts: e.win_date_ts,
            jp_pot_id: e.jp_pot_id
        }))),
        GetJackpotEligibleGamesResponseTransform = ({
            eligible_games: e
        }) => ({
            eligible_games: e.map(e => ({
                game_id: e.ach_game_id,
                ext_game_id: e.ext_game_id,
                name: e.game_public_meta.name,
                link: e.game_public_meta.link,
                image: e.game_public_meta.image,
                enabled: e.game_public_meta.enabled,
                game_categories: e.game_public_meta.game_categories,
                game_provider: e.game_public_meta.game_provider,
                mobile_spec_link: e.game_public_meta.mobile_spec_link
            }))
        }),
        PUBLIC_API_URL = "https://papi{ENV_ID}.smartico.ai/services/public",
        C_SOCKET_PROD = "wss://api{ENV_ID}.smartico.ai/websocket/services",
        AVATAR_DOMAIN = "https://img{ENV_ID}.smr.vc",
        DEFAULT_LANG_EN = "EN";
    class SmarticoAPI {
        constructor(e, t, n, i = {}) {
            this.label_api_key = void 0, this.brand_api_key = void 0, this.messageSender = void 0, this.publicUrl = void 0, this.wsUrl = void 0, this.inboxCdnUrl = void 0, this.partnerUrl = void 0, this.avatarDomain = void 0, this.logger = void 0, this.logCIDs = void 0, this.logHTTPTiming = void 0, this.tracker = void 0, this.label_api_key = e, this.brand_api_key = t, this.messageSender = n, this.logger = i.logger || console, void 0 === this.logger.always && (this.logger.always = this.logger.info), this.logCIDs = i.logCIDs || [], this.logHTTPTiming = i.logHTTPTiming || !1, this.tracker = i.tracker, this.publicUrl = SmarticoAPI.getPublicUrl(e), this.wsUrl = SmarticoAPI.getPublicWsUrl(e), this.avatarDomain = SmarticoAPI.getAvatarUrl(e || (null == (t = i.tracker) ? void 0 : t.label_api_key)), this.label_api_key = SmarticoAPI.getCleanLabelApiKey(e)
        }
        static getEnvDnsSuffix(e) {
            let t = 38 === e.length ? e.substring(37, 38) : "";
            return t = "1" !== t && "2" !== t ? t : ""
        }
        static replaceSmrDomainsWithCloudfront(t) {
            if (!t) return t;
            var e, n;
            let i = "string" == typeof t ? t : JSON.stringify(t);
            for ([e, n] of Object.entries({
                    "img.smr.vc": "d1am61onjxtys8.cloudfront.net",
                    "img3.smr.vc": "d3dubbodzd2q05.cloudfront.net",
                    "img4.smr.vc": "dvm0p9vsezqr2.cloudfront.net",
                    "img5.smr.vc": "d3gen1ksvxhac8.cloudfront.net",
                    "img6.smr.vc": "db1kmyg7iufeo.cloudfront.net",
                    "img7.smr.vc": "d36om2g86xefo6.cloudfront.net",
                    "img8.smr.vc": "d2zme31v54n5pb.cloudfront.net",
                    "static.smr.vc": "dtt380pweilws.cloudfront.net",
                    "static3.smr.vc": "d1qt8ake8g4imn.cloudfront.net",
                    "static4.smr.vc": "d146b4m7rkvjkw.cloudfront.net",
                    "static5.smr.vc": "d3l7suk1kl9rwh.cloudfront.net",
                    "static6.smr.vc": "d121pfj16xdfcq.cloudfront.net",
                    "static7.smr.vc": "d21deilz814qgl.cloudfront.net",
                    "static8.smr.vc": "d1uffsroxjy2ku.cloudfront.net"
                })) i = i.replace(new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), n);
            try {
                return "string" == typeof t ? i : JSON.parse(i)
            } catch (e) {
                return t
            }
        }
        static getEnvId(e) {
            return 38 === e.length ? parseInt(e.substring(37, 38), 10) : 2
        }
        static getCleanLabelApiKey(e) {
            return e.substring(0, 36)
        }
        static getPublicUrl(e) {
            return PUBLIC_API_URL.replace("{ENV_ID}", SmarticoAPI.getEnvDnsSuffix(e))
        }
        static getPublicWsUrl(e) {
            return C_SOCKET_PROD.replace("{ENV_ID}", SmarticoAPI.getEnvDnsSuffix(e))
        }
        static getAvatarUrl(e) {
            SmarticoAPI.getEnvDnsSuffix(e);
            e = AVATAR_DOMAIN.replace("{ENV_ID}", SmarticoAPI.getEnvDnsSuffix(e));
            return SmarticoAPI.replaceSmrDomainsWithCloudfront(e)
        }
        send(r, a, s) {
            return __async(function*() {
                this.logCIDs.includes(r.cid) && this.logger.info("REQ", r), s && (r.force_language = s);
                let e;
                try {
                    var t = (new Date).getTime();
                    if ((e = yield this.messageSender(r, this.publicUrl, a)).errCode && e.errSetup) throw new Error(e.errMessage);
                    e = SmarticoAPI.replaceSmrDomainsWithCloudfront(e);
                    var n = (new Date).getTime();
                    this.logHTTPTiming && this.logger.always("HTTP time, ms:" + (n - t))
                } catch (e) {
                    throw this.logger.warn("Failed to make request to smartico channel, L2. " + e.message, {
                        url: this.publicUrl,
                        request: r,
                        error: e.message
                    }), new Error("Failed to make request to smartico channel, L2 L1. " + e.message)
                }
                if (this.logCIDs.includes(r.cid) && this.logger.info("RES", e), !a) {
                    if (Array.isArray(e)) {
                        if (1 === e.length) return n = JSON.parse(e[0]), this.logCIDs.includes(n.cid) && this.logger.info("RES", e), n;
                        this.logger.error("Expected one response, but got array", {
                            request: r,
                            response: e
                        })
                    }
                    return e
                }
                if (!Array.isArray(e)) return e;
                for (var i of e) {
                    i = JSON.parse(i);
                    if (this.logCIDs.includes(i.cid) && this.logger.info("RES", e), i.cid === a) return i
                }
                this.logger.error("Cant find proper response in array, expected CID " + a, {
                    request: r,
                    response: e
                })
            }.call(this))
        }
        buildMessage(e, t, n = {}) {
            e = _extends({
                api_key: this.label_api_key,
                brand_key: this.brand_api_key,
                ext_user_id: e,
                cid: t,
                uuid: IntUtils.uuid(),
                ts: (new Date).getTime()
            }, n);
            return null == e.ext_user_id && delete e.ext_user_id, null == e.brand_key && delete e.brand_key, e
        }
        coreReportCustomEvent(t, n, i = {}) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.EVENT, {
                    eventType: n,
                    payload: i
                });
                return yield this.send(e, ClassId.EVENT_RESPONSE)
            }.call(this))
        }
        coreGetTranslations(r, a, s, t = 60) {
            return __async(function*() {
                var i = this,
                    e = ((null == a || a.trim && "" === a.trim()) && (a = DEFAULT_LANG_EN), yield OCache.use(`${a}-${this.label_api_key}-` + this.brand_api_key, ECacheContext.Translations, function() {
                        return __async(function*() {
                            var e = i.buildMessage(r, ClassId.GET_TRANSLATIONS_REQUEST, {
                                lang_code: DEFAULT_LANG_EN,
                                hash_code: null,
                                areas: s
                            });
                            let n = yield i.send(e, ClassId.GET_TRANSLATIONS_RESPONSE);
                            if (a !== DEFAULT_LANG_EN) {
                                var e = i.buildMessage(r, ClassId.GET_TRANSLATIONS_REQUEST, {
                                    lang_code: a,
                                    hash_code: null,
                                    areas: s
                                });
                                let t = yield i.send(e, ClassId.GET_TRANSLATIONS_RESPONSE);
                                Object.keys(null != (e = null == t ? void 0 : t.translations) ? e : {}).forEach(e => {
                                    n.translations[e] = t.translations[e]
                                })
                            }
                            return n
                        }())
                    }, t));
                return e
            }.call(this))
        }
        coreIdentifyLabel(n, e = 60) {
            return __async(function*() {
                var t = this;
                return OCache.use(this.label_api_key + " - " + this.brand_api_key, ECacheContext.LabelInfo, function() {
                    return __async(function*() {
                        var e = t.buildMessage(n, ClassId.INIT);
                        return t.send(e, ClassId.INIT_RESPONSE)
                    }())
                }, e)
            }.call(this))
        }
        coreIdentifyUser(t) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.IDENTIFY, {
                        request_id: IntUtils.uuid()
                    }),
                    e = yield this.send(e, ClassId.IDENTIFY_RESPONSE);
                return e.avatar_id = CoreUtils.avatarUrl(e.avatar_id, this.avatarDomain), e
            }.call(this))
        }
        coreChangeUsername(t, n) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.CLIENT_SET_CUSTOM_USERNAME_REQUEST, {
                    public_username_custom: n
                });
                return yield this.send(e, ClassId.CLIENT_SET_CUSTOM_USERNAME_RESPONSE)
            }.call(this))
        }
        coreCheckSegments(t, n) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.CHECK_SEGMENT_MATCH_REQUEST, {
                    segment_id: n
                });
                return (yield this.send(e, ClassId.CHECK_SEGMENT_MATCH_RESPONSE)).segments || []
            }.call(this))
        }
        jackpotGet(t, n, i) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.JP_GET_JACKPOTS_REQUEST, n);
                return yield this.send(e, ClassId.JP_GET_JACKPOTS_RESPONSE, i)
            }.call(this))
        }
        potGet(t, n) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.JP_GET_LATEST_POTS_REQUEST, n);
                return yield this.send(e, ClassId.JP_GET_LATEST_POTS_RESPONSE)
            }.call(this))
        }
        jackpotOptIn(t, n) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.JP_OPTIN_REQUEST, n);
                return yield this.send(e, ClassId.JP_OPTIN_RESPONSE)
            }.call(this))
        }
        jackpotOptOut(t, n) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.JP_OPTOUT_REQUEST, n);
                return yield this.send(e, ClassId.JP_OPTOUT_RESPONSE)
            }.call(this))
        }
        getJackpotWinners(t, n = 20, i = 0, r) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.JP_GET_WINNERS_REQUEST, {
                    limit: n,
                    offset: i,
                    jp_template_id: r
                });
                return yield this.send(e, ClassId.JP_GET_WINNERS_RESPONSE)
            }.call(this))
        }
        getJackpotWinnersT(e, t = 20, n = 0, i) {
            return __async(function*() {
                return GetJackpotWinnersResponseTransform((yield this.getJackpotWinners(e, t, n, i)).winners)
            }.call(this))
        }
        getJackpotEligibleGames(t, {
            jp_template_id: n
        }) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.JP_GET_ELIGIBLE_GAMES_REQUEST, {
                    jp_template_id: n
                });
                return yield this.send(e, ClassId.JP_GET_ELIGIBLE_GAMES_RESPONSE)
            }.call(this))
        }
        getJackpotEligibleGamesT(e, {
            jp_template_id: t
        }) {
            return __async(function*() {
                return GetJackpotEligibleGamesResponseTransform(yield this.getJackpotEligibleGames(e, {
                    jp_template_id: t
                }))
            }.call(this))
        }
        sawGetTemplates(t, n, i = !1) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.SAW_GET_SPINS_REQUEST, {
                        is_visitor_mode: i
                    }),
                    e = yield this.send(e, ClassId.SAW_GET_SPINS_RESPONSE, n);
                return e && e.templates && e.templates.forEach(i => {
                    if (null != i.jackpot_current) {
                        let e, t, n = i.jackpot_current + (null != (e = i.saw_template_ui_definition) && e.jackpot_symbol ? " " + (null == (t = i.saw_template_ui_definition) ? void 0 : t.jackpot_symbol) : "");
                        i.saw_template_ui_definition.name = IntUtils.replaceAll(i.saw_template_ui_definition.name, "{{jackpot}}", n), i.saw_template_ui_definition.description = IntUtils.replaceAll(i.saw_template_ui_definition.description, "{{jackpot}}", n), i.saw_template_ui_definition.promo_text = IntUtils.replaceAll(i.saw_template_ui_definition.promo_text, "{{jackpot}}", n), i.prizes.forEach(e => {
                            e.saw_prize_ui_definition.name = IntUtils.replaceAll(e.saw_prize_ui_definition.name, "{{jackpot}}", n), e.saw_prize_ui_definition.aknowledge_message = IntUtils.replaceAll(e.saw_prize_ui_definition.aknowledge_message, "{{jackpot}}", n)
                        })
                    }
                }), e
            }.call(this))
        }
        sawGetTemplatesT(e) {
            return __async(function*() {
                return SAWTemplatesTransform((yield this.sawGetTemplates(e)).templates)
            }.call(this))
        }
        doAcknowledgeRequest(t, n) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.SAW_AKNOWLEDGE_REQUEST, {
                    request_id: n
                });
                return yield this.send(e, ClassId.SAW_AKNOWLEDGE_RESPONSE)
            }.call(this))
        }
        sawSpinRequest(i, r, a) {
            return __async(function*() {
                var e, t, n;
                if (r) return e = IntUtils.uuid(), t = this.buildMessage(i, ClassId.SAW_DO_SPIN_REQUEST, {
                    saw_template_id: r,
                    request_id: e
                }), t = yield this.send(t, ClassId.SAW_DO_SPIN_RESPONSE), n = {
                    [SAWSpinErrorCode.SAW_OK]: "OK",
                    [SAWSpinErrorCode.SAW_NO_SPINS]: "NO SPINS AVAILABLE",
                    [SAWSpinErrorCode.SAW_PRIZE_POOL_EMPTY]: "PRIZE POOL IS EMPTY",
                    [SAWSpinErrorCode.SAW_NOT_ENOUGH_POINTS]: "NOT ENOUGH POINTS",
                    [SAWSpinErrorCode.SAW_FAILED_MAX_SPINS_REACHED]: "MAX SPIN ATTEMPTS REACHED",
                    [SAWSpinErrorCode.SAW_TEMPLATE_NOT_ACTIVE]: "MINIGAME IS NOT IN ACTIVE PERIOD",
                    [SAWSpinErrorCode.SAW_NOT_IN_SEGMENT]: "USER IS NOT IN SEGMENT",
                    [SAWSpinErrorCode.SAW_NO_BALANCE_GEMS]: "NOT ENOUGH GEMS",
                    [SAWSpinErrorCode.SAW_NO_BALANCE_DIAMONDS]: "NOT ENOUGH DIAMONDS"
                }[t.errCode] || "OTHER", yield this.coreReportCustomEvent(i, "minigame_attempt", {
                    saw_template_id: r,
                    status: n,
                    round_id: a
                }), _extends({}, t, {
                    request_id: e
                });
                throw new Error("Missing template id")
            }.call(this))
        }
        doAcknowledgeBatchRequest(t, n) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.SAW_AKNOWLEDGE_REQUEST, {
                    request_ids: n
                });
                return yield this.send(e, ClassId.SAW_AKNOWLEDGE_BATCH_RESPONSE)
            }.call(this))
        }
        sawSpinBatchRequest(r, a, s) {
            return __async(function*() {
                var t = [];
                for (let e = 0; e < s; e++) {
                    var n = IntUtils.uuid();
                    t.push({
                        request_id: n,
                        saw_template_id: a
                    })
                }
                var e = this.buildMessage(r, ClassId.SAW_DO_SPIN_BATCH_REQUEST, {
                        spins: t
                    }),
                    e = yield this.send(e, ClassId.SAW_DO_SPIN_BATCH_RESPONSE);
                let i = e.results.find(e => 0 === e.errCode) ? "OK" : "BATCH FAIL";
                return yield this.coreReportCustomEvent(r, "minigame_attempt", {
                    saw_template_id: a,
                    status: i,
                    spins_count: s
                }), _extends({}, e)
            }.call(this))
        }
        getSawWinningHistory(t, n = 20, i = 0, r) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.GET_SAW_HISTORY_REQUEST, {
                    limit: n,
                    offset: i,
                    saw_template_id: r
                });
                return yield this.send(e, ClassId.GET_SAW_HISTORY_RESPONSE)
            }.call(this))
        }
        getSawWinningHistoryT(e, t, n, i) {
            return __async(function*() {
                return SAWHistoryTransform((yield this.getSawWinningHistory(e, t, n, i)).prizes)
            }.call(this))
        }
        missionOptIn(t, n) {
            return __async(function*() {
                var e;
                if (n) return e = this.buildMessage(t, ClassId.MISSION_OPTIN_REQUEST, {
                    achievementId: n
                }), yield this.send(e, ClassId.MISSION_OPTIN_RESPONSE);
                throw new Error("Missing mission id")
            }.call(this))
        }
        missionClaimPrize(t, n, i) {
            return __async(function*() {
                var e;
                if (n) return e = this.buildMessage(t, ClassId.ACHIEVEMENT_CLAIM_PRIZE_REQUEST, {
                    ach_id: n,
                    ach_completed_id: i
                }), yield this.send(e, ClassId.ACHIEVEMENT_CLAIM_PRIZE_RESPONSE);
                throw new Error("Missing mission id")
            }.call(this))
        }
        registerInTournament(t, n) {
            return __async(function*() {
                var e;
                if (n) return e = this.buildMessage(t, ClassId.TOURNAMENT_REGISTER_REQUEST, {
                    tournamentInstanceId: n
                }), yield this.send(e, ClassId.TOURNAMENT_REGISTER_RESPONSE);
                throw new Error("Missing tournament instance id")
            }.call(this))
        }
        buyStoreItem(t, n) {
            return __async(function*() {
                var e;
                if (n) return e = this.buildMessage(t, ClassId.BUY_SHOP_ITEM_REQUEST, {
                    itemId: n
                }), yield this.send(e, ClassId.BUY_SHOP_ITEM_RESPONSE);
                throw new Error("Missing store item id")
            }.call(this))
        }
        inboxGetMessages(t, n = 10, i = 0) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.GET_INBOX_MESSAGES_REQUEST, {
                    limit: n,
                    offset: i
                });
                return yield this.send(e, ClassId.GET_INBOX_MESSAGES_RESPONSE)
            }.call(this))
        }
        storeGetItems(t, n) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.GET_SHOP_ITEMS_REQUEST);
                return yield this.send(e, ClassId.GET_SHOP_ITEMS_RESPONSE, n)
            }.call(this))
        }
        storeGetItemsT(e) {
            return __async(function*() {
                return StoreItemTransform((yield this.storeGetItems(e)).items)
            }.call(this))
        }
        storeGetCategories(t, n) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.GET_SHOP_CATEGORIES_REQUEST);
                return yield this.send(e, ClassId.GET_SHOP_CATEGORIES_RESPONSE, n)
            }.call(this))
        }
        storeGetCategoriesT(e) {
            return __async(function*() {
                return StoreCategoryTransform((yield this.storeGetCategories(e)).categories)
            }.call(this))
        }
        storeGetPurchasedItems(t, n = 20, i = 0) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.ACH_SHOP_ITEM_HISTORY_REQUEST, {
                    limit: n,
                    offset: i
                });
                return yield this.send(e, ClassId.ACH_SHOP_ITEM_HISTORY_RESPONSE)
            }.call(this))
        }
        storeGetPurchasedItemsT(e, t, n) {
            return __async(function*() {
                return StoreItemPurchasedTransform((yield this.storeGetPurchasedItems(e, t, n)).items)
            }.call(this))
        }
        missionsGetItems(t, n) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.GET_ACHIEVEMENT_MAP_REQUEST),
                    e = _extends({}, yield this.send(e, ClassId.GET_ACHIEVEMENT_MAP_RESPONSE, n));
                return e.achievements && (e.achievements = e.achievements.filter(e => e.ach_type_id === AchievementType.Mission)), e
            }.call(this))
        }
        missionsGetItemsT(e) {
            return __async(function*() {
                return UserAchievementTransform((yield this.missionsGetItems(e)).achievements)
            }.call(this))
        }
        getUserGamificationInfo(t) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.GET_ACHIEVEMENT_USER_REQUEST);
                return yield this.send(e, ClassId.GET_ACHIEVEMENT_USER_RESPONSE)
            }.call(this))
        }
        getUserGamificationInfoT(t) {
            return __async(function*() {
                var e = yield this.getUserGamificationInfo(t);
                return {
                    level_counter_1: e.level_counter_1,
                    level_counter_2: e.level_counter_2
                }
            }.call(this))
        }
        achGetCategories(t, n) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.GET_ACH_CATEGORIES_REQUEST);
                return yield this.send(e, ClassId.GET_ACH_CATEGORIES_RESPONSE, n)
            }.call(this))
        }
        achGetCategoriesT(e) {
            return __async(function*() {
                return AchCategoryTransform((yield this.achGetCategories(e)).categories)
            }.call(this))
        }
        badgetsGetItems(t, n) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.GET_ACHIEVEMENT_MAP_REQUEST),
                    e = _extends({}, yield this.send(e, ClassId.GET_ACHIEVEMENT_MAP_RESPONSE, n));
                return e.achievements && (e.achievements = e.achievements.filter(e => e.ach_type_id === AchievementType.Badge)), e
            }.call(this))
        }
        bonusesGetItems(t, n) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.GET_BONUSES_REQUEST);
                return _extends({}, yield this.send(e, ClassId.GET_BONUSES_RESPONSE, n))
            }.call(this))
        }
        bonusClaimItem(t, n) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.CLAIM_BONUS_REQUEST, {
                    bonusId: n
                });
                return _extends({}, yield this.send(e, ClassId.CLAIM_BONUS_RESPONSE))
            }.call(this))
        }
        bonusesGetItemsT(e) {
            return __async(function*() {
                return BonusItemsTransform((yield this.bonusesGetItems(e)).bonuses)
            }.call(this))
        }
        badgetsGetItemsT(e) {
            return __async(function*() {
                return UserAchievementTransform((yield this.badgetsGetItems(e)).achievements)
            }.call(this))
        }
        tournamentsGetLobby(t, n) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.GET_TOURNAMENT_LOBBY_REQUEST);
                return yield this.send(e, ClassId.GET_TOURNAMENT_LOBBY_RESPONSE, n)
            }.call(this))
        }
        tournamentsGetLobbyT(e) {
            return __async(function*() {
                return TournamentItemsTransform((yield this.tournamentsGetLobby(e)).tournaments)
            }.call(this))
        }
        tournamentsGetInfo(n, i, r) {
            return __async(function*() {
                var e, t = this.buildMessage(n, ClassId.GET_TOURNAMENT_INFO_REQUEST, {
                        tournamentInstanceId: i
                    }),
                    t = yield this.send(t, ClassId.GET_TOURNAMENT_INFO_RESPONSE, r);
                return null != (e = t.userPosition) && e.avatar_id && (t.userPosition.avatar_url = CoreUtils.avatarUrl(t.userPosition.avatar_id, this.avatarDomain)), null != (e = t.tournamentInfo) && null != (e = e.players) && e.length && t.tournamentInfo.players.forEach(e => {
                    e.avatar_url = CoreUtils.avatarUrl(e.avatar_id, this.avatarDomain)
                }), t
            }.call(this))
        }
        tournamentsGetInfoT(t, n) {
            return __async(function*() {
                var e;
                if (n) return e = yield this.tournamentsGetInfo(t, n), tournamentInfoItemTransform(e);
                throw new Error("Missing tournament instance id")
            }.call(this))
        }
        leaderboardGet(i, r, a = !1, s) {
            return __async(function*() {
                var e, t = this.buildMessage(i, ClassId.GET_LEADERS_BOARD_REQUEST, {
                        period_type_id: r,
                        snapshot_offset: a ? 1 : 0,
                        include_users: !0
                    }),
                    t = yield this.send(t, ClassId.GET_LEADERS_BOARD_RESPONSE, s), n = Object.keys(t.map || {}).find(e => void 0 === r || e === (null == r ? void 0 : r.toString()));
                if (void 0 !== n) return null != (e = t.map[n]) && null != (e = e.userPosition) && e.avatar_id && (t.map[n].userPosition.avatar_url = CoreUtils.avatarUrl(t.map[n].userPosition.avatar_id, this.avatarDomain)), null != (e = t.map[n]) && null != (e = e.positions) && e.length && t.map[n].positions.forEach(e => {
                    e.avatar_url = CoreUtils.avatarUrl(e.avatar_id, this.avatarDomain)
                }), t.map[n]
            }.call(this))
        }
        leaderboardsGetT(e, t = LeaderBoardPeriodType.DAILY, n = !1) {
            return __async(function*() {
                return getLeaderBoardTransform(yield this.leaderboardGet(e, t, n))
            }.call(this))
        }
        levelsGet(t, n) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.GET_LEVEL_MAP_REQUEST);
                return yield this.send(e, ClassId.GET_LEVEL_MAP_RESPONSE, n)
            }.call(this))
        }
        levelsGetT(e) {
            return __async(function*() {
                return GetLevelMapResponseTransform(yield this.levelsGet(e))
            }.call(this))
        }
        getLevelCurrent(a) {
            return __async(function*() {
                var e = yield this.levelsGetT(a), t = yield this.getUserGamificationInfo(a);
                if (!e || 0 === e.length) return null;
                let n = t.points_balance,
                    i = e.sort((e, t) => e.required_points - t.required_points),
                    r = i.findIndex((e, t) => {
                        t = i[t + 1];
                        return n >= e.required_points && (!t || n < t.required_points)
                    }); - 1 === r && (r = i.length - 1);
                t = i[r], e = i[r + 1], e = e ? (n - t.required_points) / (e.required_points - t.required_points) * 100 : 100;
                return _extends({}, t, {
                    ordinal_position: r + 1,
                    progress: Math.min(Math.max(e, 0), 100)
                })
            }.call(this))
        }
        customSectionsGet(t, n) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.GET_CUSTOM_SECTIONS_REQUEST);
                return yield this.send(e, ClassId.GET_CUSTOM_SECTIONS_RESPONSE, n)
            }.call(this))
        }
        customSectionsGetT(e) {
            return __async(function*() {
                return UICustomSectionTransform(yield this.customSectionsGet(e))
            }.call(this))
        }
        getTranslationsT(e, t, n, i = 0) {
            return __async(function*() {
                return yield this.coreGetTranslations(e, t, n, 30)
            }.call(this))
        }
        getInboxMessages(t, n = 20, i = 0, r, a) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.GET_INBOX_MESSAGES_REQUEST, {
                    limit: n,
                    offset: i,
                    starred_only: r,
                    category_id: a
                });
                return yield this.send(e, ClassId.GET_INBOX_MESSAGES_RESPONSE)
            }.call(this))
        }
        getInboxMessagesT(n, i = 0, r = 20, a = !1, s) {
            return __async(function*() {
                var e = 20 < r - i ? 20 : r - i,
                    t = i;
                return InboxMessagesTransform((yield this.getInboxMessages(n, e, t, a, s)).log)
            }.call(this))
        }
        getInboxMessageBody(e) {
            return __async(function*() {
                var t, n = this;
                return t = e, yield __async(function*() {
                    var e = n.tracker.getLabelSetting(PublicLabelSettings.INBOX_PUBLIC_CDN);
                    try {
                        return (yield(yield fetch("" + e + t + ".json", {
                            method: "GET",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                                "Access-Control-Allow-Origin": "*"
                            }
                        })).json()) || {}
                    } catch (e) {
                        return n.logger.error("Error fetching inbox message body:", e), null
                    }
                }())
            }.call(this))
        }
        getInboxMessageBodyT(t) {
            return __async(function*() {
                var e = yield this.getInboxMessageBody(t);
                return InboxMessageBodyTransform(e)
            }.call(this))
        }
        markInboxMessageRead(t, n) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.MARK_INBOX_READ_REQUEST, {
                    engagement_uid: n
                });
                return yield this.send(e, ClassId.MARK_INBOX_READ_RESPONSE)
            }.call(this))
        }
        markAllInboxMessageRead(t) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.MARK_INBOX_READ_REQUEST, {
                    all_read: !0
                });
                return yield this.send(e, ClassId.MARK_INBOX_READ_RESPONSE)
            }.call(this))
        }
        markUnmarkInboxMessageAsFavorite(t, n, i) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.MARK_INBOX_STARRED_REQUEST, {
                    engagement_uid: n,
                    is_starred: i
                });
                return yield this.send(e, ClassId.MARK_INBOX_STARRED_RESPONSE)
            }.call(this))
        }
        deleteInboxMessage(t, n) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.MARK_INBOX_DELETED_REQUEST, {
                    engagement_uid: n
                });
                return yield this.send(e, ClassId.MARK_INBOX_DELETED_RESPONSE)
            }.call(this))
        }
        deleteAllInboxMessages(t) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.MARK_INBOX_DELETED_REQUEST, {
                    all_deleted: !0
                });
                return yield this.send(e, ClassId.MARK_INBOX_DELETED_RESPONSE)
            }.call(this))
        }
        getWSCalls() {
            return new WSAPI(this)
        }
        getRelatedItemsForGame(t, n) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.GET_RELATED_ACH_N_TOURNAMENTS_REQUEST, {
                    related_game_id: n
                });
                return yield this.send(e, ClassId.GET_RELATED_ACH_N_TOURNAMENTS_RESPONSE)
            }.call(this))
        }
        getRafflesT(e) {
            return __async(function*() {
                return raffleTransform((yield this.getRaffles(e)).items)
            }.call(this))
        }
        getRaffles(t) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.RAF_GET_RAFFLES_REQUEST);
                return yield this.send(e, ClassId.RAF_GET_RAFFLES_RESPONSE)
            }.call(this))
        }
        getRaffleDrawRun(t, n) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.RAF_GET_DRAW_RUN_REQUEST, n);
                return yield this.send(e, ClassId.RAF_GET_DRAW_RUN_RESPONSE)
            }.call(this))
        }
        getRaffleDrawRunsHistory(t, n) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.RAF_GET_DRAW_HISTORY_REQUEST, n);
                return yield this.send(e, ClassId.RAF_GET_DRAW_HISTORY_RESPONSE)
            }.call(this))
        }
        claimRafflePrize(t, n) {
            return __async(function*() {
                var e = this.buildMessage(t, ClassId.RAF_CLAIM_PRIZE_REQUEST, n);
                return yield this.send(e, ClassId.RAF_CLAIM_PRIZE_RESPONSE)
            }.call(this))
        }
    }
    new typescriptMap_1, (e => {
        e[e.Soccer = 1] = "Soccer", e[e.Basketball = 2] = "Basketball", e[e.Tennis = 5] = "Tennis"
    })(QuizSportType = QuizSportType || {});
    let quizSupportedSports = [QuizSportType.Basketball, QuizSportType.Soccer, QuizSportType.Tennis],
        quizAnswerHomeTeamReplacementText = ((e => {
            e[e.TwoTeamsWithScore = 1] = "TwoTeamsWithScore", e[e.RedCard = 2] = "RedCard", e[e.OneXTwo = 3] = "OneXTwo", e[e.OneXTwoHalftime = 4] = "OneXTwoHalftime", e[e.FirstGoal = 6] = "FirstGoal", e[e.DoubleChance = 7] = "DoubleChance", e[e.OverUnder2_5 = 8] = "OverUnder2_5", e[e.OverUnder1_5Halftime = 9] = "OverUnder1_5Halftime", e[e.OverUnder1_5__2ndHalf = 10] = "OverUnder1_5__2ndHalf", e[e.TotalCorners8_5 = 11] = "TotalCorners8_5", e[e.TotalCorners9_5 = 12] = "TotalCorners9_5", e[e.Corners1x2 = 13] = "Corners1x2", e[e.One_Two = 14] = "One_Two", e[e.Overtime = 15] = "Overtime", e[e.OddEven = 16] = "OddEven", e[e.OddEvenHomeAway = 17] = "OddEvenHomeAway", e[e.FirstSet = 18] = "FirstSet", e[e.SecondSet = 19] = "SecondSet", e[e.ThirdSet = 20] = "ThirdSet", e[e.FourthSet = 21] = "FourthSet", e[e.FifthSet = 22] = "FifthSet", e[e.PlayerOneWinsOneSet = 23] = "PlayerOneWinsOneSet", e[e.PlayerTwoWinsOneSet = 24] = "PlayerTwoWinsOneSet", e[e.LastGoal = 25] = "LastGoal", e[e.CustomSport = 26] = "CustomSport", e[e.CustomNonSport = 27] = "CustomNonSport"
        })(SAWGPMarketType = SAWGPMarketType || {}), (e => {
            e.HomeTeam = "1", e.AwayTeam = "2", e.Draw = "x", e.HomeTeamHomeTeam = "1/1", e.HomeTeamDraw = "1/x", e.HomeTeamAwayTeam = "1/2", e.DrawHomeTeam = "x/1", e.DrawDraw = "x/x", e.DrawAwayTeam = "x/2", e.AwayTeamHomeTeam = "2/1", e.AwayTeamDraw = "2/x", e.AwayTeamAwayTeam = "2/2", e.Yes = "yes", e.No = "no", e.Odd = "odd", e.Even = "even", e.HomeOdd = "1/odd", e.HomeEven = "1/even", e.AwayOdd = "2/odd", e.AwayEven = "2/even"
        })(QuizAnswersValueType = QuizAnswersValueType || {}), "{quiz_home_team}"),
        quizAnswerAwayTeamReplacementText = "{quiz_away_team}",
        quizDrawReplacementText = "{quiz_draw}",
        quizYesReplacementText = "{yes}",
        quizNoReplacementText = "{no}",
        quizOddReplacementText = "{odd}",
        quizEvenReplacementText = "{even}",
        quizOrReplacementText = "{or}",
        quizNoGoalsReplacementText = "{quiz_no_goals}",
        yesNoAnswers = [{
            text: quizYesReplacementText,
            value: QuizAnswersValueType.Yes
        }, {
            text: quizNoReplacementText,
            value: QuizAnswersValueType.No
        }],
        homeAwayAnswers = [{
            text: quizAnswerHomeTeamReplacementText,
            value: QuizAnswersValueType.HomeTeam
        }, {
            text: quizAnswerAwayTeamReplacementText,
            value: QuizAnswersValueType.AwayTeam
        }],
        homeAwayDrawAnswers = [...homeAwayAnswers, {
            text: quizDrawReplacementText,
            value: QuizAnswersValueType.Draw
        }],
        homeAwayNoGoalsAnswers = [...homeAwayAnswers, {
            text: quizNoGoalsReplacementText,
            value: QuizAnswersValueType.Draw
        }],
        marketsInfo = [{
            type: SAWGPMarketType.OneXTwo,
            name: "1x2",
            question: {
                text: "Who will win the match ?",
                trKey: "quizQuestion_1x2"
            },
            answers: homeAwayDrawAnswers
        }, {
            type: SAWGPMarketType.OneXTwoHalftime,
            name: "1x2 Halftime",
            question: {
                text: "Who will lead the first half of the match ?",
                trKey: "quizQuestion_x2half"
            },
            answers: homeAwayDrawAnswers
        }, {
            type: SAWGPMarketType.FirstGoal,
            name: "First Goal",
            question: {
                text: "Who will score the first goal ?",
                trKey: "quizQuestion_firstGoal"
            },
            answers: homeAwayNoGoalsAnswers
        }, {
            type: SAWGPMarketType.LastGoal,
            name: "Last Goal",
            question: {
                text: "Who will score the last goal ?",
                trKey: "quizQuestion_lastGoal"
            },
            answers: homeAwayNoGoalsAnswers
        }, {
            type: SAWGPMarketType.DoubleChance,
            name: "Double Chance",
            question: {
                text: "Who will win the match? Choose a combination:",
                trKey: "quizQuestion_doubleChance"
            },
            answers: [{
                text: `${quizDrawReplacementText} ${quizOrReplacementText} ` + quizAnswerHomeTeamReplacementText,
                value: QuizAnswersValueType.HomeTeamDraw
            }, {
                text: `${quizAnswerHomeTeamReplacementText} ${quizOrReplacementText} ` + quizAnswerAwayTeamReplacementText,
                value: QuizAnswersValueType.HomeTeamAwayTeam
            }, {
                text: `${quizDrawReplacementText} ${quizOrReplacementText} ` + quizAnswerAwayTeamReplacementText,
                value: QuizAnswersValueType.AwayTeamDraw
            }]
        }, {
            type: SAWGPMarketType.OverUnder2_5,
            name: "Over/Under 2.5",
            question: {
                text: "Will there be 3 or more goals in the match?",
                trKey: "quizQuestion_overUnder2_5"
            },
            answers: yesNoAnswers
        }, {
            type: SAWGPMarketType.OverUnder1_5Halftime,
            name: "Over/Under 1.5 Halftime",
            question: {
                text: "Will there be 2 or more goals in the first half?",
                trKey: "quizQuestion_overUnder1_5Halftime"
            },
            answers: yesNoAnswers
        }, {
            type: SAWGPMarketType.OverUnder1_5__2ndHalf,
            name: "Over/Under 1.5 2nd Half",
            question: {
                text: "Will there be 2 or more goals in the second half?",
                trKey: "quizQuestion_overUnder1_5__2ndHalf"
            },
            answers: yesNoAnswers
        }, {
            type: SAWGPMarketType.RedCard,
            name: "Red Card",
            question: {
                text: "Will there be a red card in the match?",
                trKey: "quizQuestion_redCard"
            },
            answers: yesNoAnswers
        }, {
            type: SAWGPMarketType.TotalCorners8_5,
            name: "Total Corners 8.5",
            question: {
                text: "Will there be 9 or more corners in the match?",
                trKey: "quizQuestion_totalCorners8_5"
            },
            answers: yesNoAnswers
        }, {
            type: SAWGPMarketType.TotalCorners9_5,
            name: "Total Corners 9.5",
            question: {
                text: "Will there be 10 or more corners in the match?",
                trKey: "quizQuestion_totalCorners9_5"
            },
            answers: yesNoAnswers
        }, {
            type: SAWGPMarketType.Corners1x2,
            name: "Corners 1x2",
            question: {
                text: "Which team will have more corners in the match?",
                trKey: "quizQuestion_corners1x2"
            },
            answers: homeAwayDrawAnswers
        }, {
            type: SAWGPMarketType.One_Two,
            name: "1-2",
            question: {
                text: "Who will win the match ?",
                trKey: "quizQuestion_1-2"
            },
            answers: homeAwayAnswers
        }, {
            type: SAWGPMarketType.Overtime,
            name: "Overtime",
            question: {
                text: "Will there be overtime in the match?",
                trKey: "quizQuestion_overtime"
            },
            answers: yesNoAnswers
        }, {
            type: SAWGPMarketType.OddEven,
            name: "Odd/Even",
            question: {
                text: "Is the sum of all points scored in the game going to be an odd number or even?",
                trKey: "quizQuestion_oddEven"
            },
            answers: [{
                text: quizOddReplacementText,
                value: QuizAnswersValueType.Odd
            }, {
                text: quizEvenReplacementText,
                value: QuizAnswersValueType.Even
            }]
        }, {
            type: SAWGPMarketType.OddEvenHomeAway,
            name: "Odd/Even Home/Away",
            question: {
                text: "Which team will win and what will be the sum of the points (Odd or Even)?",
                trKey: "quizQuestion_oddEvenHomeAway"
            },
            answers: [{
                text: quizAnswerHomeTeamReplacementText + " - " + quizOddReplacementText,
                value: QuizAnswersValueType.HomeOdd
            }, {
                text: quizAnswerHomeTeamReplacementText + " - " + quizEvenReplacementText,
                value: QuizAnswersValueType.HomeEven
            }, {
                text: quizAnswerAwayTeamReplacementText + " - " + quizOddReplacementText,
                value: QuizAnswersValueType.AwayOdd
            }, {
                text: quizAnswerAwayTeamReplacementText + " - " + quizEvenReplacementText,
                value: QuizAnswersValueType.AwayEven
            }]
        }, {
            type: SAWGPMarketType.FirstSet,
            name: "First Set",
            question: {
                text: "Who will win the first set ?",
                trKey: "quizQuestion_firstSet"
            },
            answers: homeAwayAnswers
        }, {
            type: SAWGPMarketType.SecondSet,
            name: "Second Set",
            question: {
                text: "Who will win the second set ?",
                trKey: "quizQuestion_secondSet"
            },
            answers: homeAwayAnswers
        }, {
            type: SAWGPMarketType.ThirdSet,
            name: "Third Set",
            question: {
                text: "Who will win the third set ?",
                trKey: "quizQuestion_thirdSet"
            },
            answers: homeAwayAnswers
        }, {
            type: SAWGPMarketType.FourthSet,
            name: "Fourth Set",
            question: {
                text: "Who will win the fourth set ?",
                trKey: "quizQuestion_fourthSet"
            },
            answers: homeAwayAnswers
        }, {
            type: SAWGPMarketType.FifthSet,
            name: "Fifth Set",
            question: {
                text: "Who will win the fifth set ?",
                trKey: "quizQuestion_fifthSet"
            },
            answers: homeAwayAnswers
        }, {
            type: SAWGPMarketType.PlayerOneWinsOneSet,
            name: "Player One Wins One Set",
            question: {
                text: "Will Player One win at least one set?",
                trKey: "quizQuestion_playerOneWinsOneSet"
            },
            answers: yesNoAnswers
        }, {
            type: SAWGPMarketType.PlayerTwoWinsOneSet,
            name: "Player Two Wins One Set",
            question: {
                text: "Will Player Two win at least one set?",
                trKey: "quizQuestion_playerTwoWinsOneSet"
            },
            answers: yesNoAnswers
        }, {
            type: SAWGPMarketType.CustomNonSport,
            name: "Custom question (non sport)",
            question: null,
            answers: null
        }, {
            type: SAWGPMarketType.CustomSport,
            name: "Custom question (sport)",
            question: null,
            answers: null
        }],
        QuizMarketPerSport = {
            [QuizSportType.Basketball]: [SAWGPMarketType.One_Two, SAWGPMarketType.Overtime, SAWGPMarketType.OneXTwo, SAWGPMarketType.OddEven, SAWGPMarketType.OddEvenHomeAway, SAWGPMarketType.DoubleChance],
            [QuizSportType.Soccer]: [SAWGPMarketType.OneXTwo, SAWGPMarketType.OneXTwoHalftime, SAWGPMarketType.FirstGoal, SAWGPMarketType.LastGoal, SAWGPMarketType.DoubleChance, SAWGPMarketType.OverUnder2_5, SAWGPMarketType.OverUnder1_5Halftime, SAWGPMarketType.OverUnder1_5__2ndHalf, SAWGPMarketType.RedCard, SAWGPMarketType.TotalCorners8_5, SAWGPMarketType.TotalCorners9_5, SAWGPMarketType.Corners1x2],
            [QuizSportType.Tennis]: [SAWGPMarketType.One_Two, SAWGPMarketType.FirstSet, SAWGPMarketType.SecondSet, SAWGPMarketType.ThirdSet, SAWGPMarketType.FourthSet, SAWGPMarketType.FifthSet, SAWGPMarketType.PlayerOneWinsOneSet, SAWGPMarketType.PlayerTwoWinsOneSet, SAWGPMarketType.OddEven]
        };
    (e => {
        e[e.Fixed = 1] = "Fixed", e[e.Percentage = 2] = "Percentage"
    })(JackpotContributionType = JackpotContributionType || {}), (e => {
        e[e.COLD = 0] = "COLD", e[e.WARM = 1] = "WARM", e[e.HOT = 2] = "HOT", e[e.BURNING = 3] = "BURNING"
    })(JackPotTemparature = JackPotTemparature || {}), (e => {
        e[e.MultiUser = 1] = "MultiUser", e[e.Personal = 2] = "Personal"
    })(JackpotType = JackpotType || {});
    var SCRIPTS_LOCATION = "https://d18ijinkwpz7mh.cloudfront.net",
        PATH_TO_ACH = "https://d18ijinkwpz7mh.cloudfront.net/gf",
        C_WS_SOCKET_URL = "wss://api{ENV_ID}.abrws.club/websocket/services",
        isDev = function() {
            return "local" === "prod".toString()
        },
        C_MODULE_NAME = "_smartico",
        ERRS, Z_INDEX_BASE = ((e => {
            e[e.OK = 0] = "OK", e[e.NO_LABEL_FOUND = 1] = "NO_LABEL_FOUND", e[e.INIT_NOT_COMPLETED = 2] = "INIT_NOT_COMPLETED", e[e.FAILED_TO_IDENTIFY_USER = 3] = "FAILED_TO_IDENTIFY_USER", e[e.FAILED_TO_HANDE_EVENT_NO_USER = 4] = "FAILED_TO_HANDE_EVENT_NO_USER", e[e.FAILED_TO_HANDE_EVENT_UNKNOWN_NAME = 5] = "FAILED_TO_HANDE_EVENT_UNKNOWN_NAME", e[e.FAILED_TO_HANDE_EVENT = 6] = "FAILED_TO_HANDE_EVENT", e[e.INIT_FAILED_LABEL_IS_BLOCKED = 100] = "INIT_FAILED_LABEL_IS_BLOCKED"
        })(ERRS = ERRS || {}), 2147483600),
        Z_INDEX, CLASS_ID_IGNORE_FOR_SIMULATION = ((e => {
            e[e.PRIZE_DROP_N_JACKPOTS = Z_INDEX_BASE + 4] = "PRIZE_DROP_N_JACKPOTS", e[e.POPUPS = Z_INDEX_BASE + 3] = "POPUPS", e[e.GAMIFICATION_INBOX_SHORT = Z_INDEX_BASE + 2] = "GAMIFICATION_INBOX_SHORT", e[e.INBOX_BIG = Z_INDEX_BASE + 1] = "INBOX_BIG", e[e.GAMIFICATION_MAIN = Z_INDEX_BASE] = "GAMIFICATION_MAIN", e[e.OTHER = Z_INDEX_BASE] = "OTHER", e[e.LOADER = Z_INDEX_BASE - 1] = "LOADER"
        })(Z_INDEX = Z_INDEX || {}), [ClassId.LOGIN, ClassId.LOGOUT, ClassId.EVENT, ClassId.CLIENT_ENGAGEMENT_IMPRESSION_REQUEST, ClassId.CLIENT_ENGAGEMENT_ACTION_REQUEST, ClassId.CLIENT_ENGAGEMENT_FAILED_REQUEST, ClassId.CLIENT_TRACK_ACTIVITY_REQUEST, ClassId.REGISTER_PUSH_NOTIFICATIONS_TOKEN_REQ, ClassId.BUY_SHOP_ITEM_REQUEST, ClassId.CLAIM_BONUS_REQUEST, ClassId.SAW_SHOW_SPIN_PUSH, ClassId.CLIENT_SET_CUSTOM_USERNAME_REQUEST, ClassId.CLIENT_ENGAGEMENT_EVENT_NEW, ClassId.CLIENT_TRACK_ACTIVITY_REQUEST, ClassId.CLIENT_SET_AVATAR_REQUEST, ClassId.TOURNAMENT_REGISTER_REQUEST, ClassId.MISSION_OPTIN_REQUEST, ClassId.ACHIEVEMENT_CLAIM_PRIZE_REQUEST, ClassId.SAW_DO_SPIN_REQUEST, ClassId.SAW_AKNOWLEDGE_REQUEST, ClassId.MARK_INBOX_READ_REQUEST, ClassId.MARK_INBOX_STARRED_REQUEST, ClassId.MARK_INBOX_DELETED_REQUEST, ClassId.SAW_PRIZE_DROP_WIN_AKNOWLEDGE_REQUEST, ClassId.JP_OPTIN_REQUEST, ClassId.JP_OPTOUT_REQUEST, ClassId.RAF_CLAIM_PRIZE_REQUEST]),
        CLASS_ID_SUPPORTS_FORCE_LANG = [ClassId.SAW_GET_SPINS_REQUEST, ClassId.GET_SHOP_ITEMS_REQUEST, ClassId.GET_TOURNAMENT_LOBBY_REQUEST, ClassId.GET_TOURNAMENT_INFO_REQUEST, ClassId.GET_LEADERS_BOARD_REQUEST, ClassId.GET_LEVEL_MAP_REQUEST, ClassId.JP_GET_JACKPOTS_REQUEST, ClassId.GET_SHOP_CATEGORIES_REQUEST, ClassId.GET_ACHIEVEMENT_MAP_REQUEST, ClassId.GET_ACH_CATEGORIES_REQUEST, ClassId.RAF_GET_RAFFLES_REQUEST, ClassId.RAF_GET_DRAW_RUN_REQUEST, ClassId.RAF_GET_DRAW_HISTORY_REQUEST, ClassId.GET_CUSTOM_SECTIONS_REQUEST],
        CLASS_ID_IGNORE_FOR_GAMIFICATION_WRAPPER = [ClassId.LOGIN, ClassId.LOGOUT, ClassId.CLIENT_ENGAGEMENT_EVENT_NEW, ClassId.CLIENT_EXECUTE_DEEPLINK_EVENT, ClassId.CLIENT_EXECUTE_JS_EVENT, ClassId.SAW_SHOW_SPIN_PUSH],
        SmarticoClearParamsDefaults = {
            keepCallBacks: !1
        },
        POPUP_TEMPLATE_ENGINE, ENGAGEMENT_FAIL_REASONS, TrackerInstanceType, EWidgetType, EWidgetTypeHTMLFiles = ((e => {
            e[e.INTERACTION_PLUS = 1] = "INTERACTION_PLUS", e[e.SIMPLE_JS = 2] = "SIMPLE_JS"
        })(POPUP_TEMPLATE_ENGINE = POPUP_TEMPLATE_ENGINE || {}), (e => {
            e.ANOTHER_ENGAGEMENT_IS_STILL_IN_FOCUS = "ANOTHER_ENGAGEMENT_IS_STILL_IN_FOCUS", e.FAILED_TO_BUILD_POPUP_TEMPLATE = "FAILED_TO_BUILD_POPUP_TEMPLATE"
        })(ENGAGEMENT_FAIL_REASONS = ENGAGEMENT_FAIL_REASONS || {}), (e => {
            e[e.Master = 1] = "Master", e[e.Shadow = 2] = "Shadow"
        })(TrackerInstanceType = TrackerInstanceType || {}), (e => {
            e.Achievements = "achievements", e.ShortInfo = "short_info", e.Tournaments = "tournaments", e.Store = "store", e.Inbox = "inbox", e.Missions = "missions", e.MiniGame = "mini-game", e.MatchXNew = "match-x-2", e.Quiz = "quiz", e.CustomSection = "custom-section", e.InboxWidget = "inbox-widget", e.UIWidget = "ui-widget", e.Liquid = "liquid"
        })(EWidgetType = EWidgetType || {}), _a = {}, _a[EWidgetType.Achievements] = PATH_TO_ACH + "/Achievements3.html", _a[EWidgetType.ShortInfo] = PATH_TO_ACH + "/ShortInfoWidget2.html", _a[EWidgetType.MiniGame] = PATH_TO_ACH + "/Saw.html", _a[EWidgetType.Tournaments] = PATH_TO_ACH + "/Tournaments.html", _a[EWidgetType.Store] = PATH_TO_ACH + "/Store.html", _a[EWidgetType.Inbox] = PATH_TO_ACH + "/Inbox.html", _a[EWidgetType.Missions] = PATH_TO_ACH + "/Missions.html", _a[EWidgetType.MatchXNew] = isDev() ? "http://localhost:3012/index.html" : SCRIPTS_LOCATION + "/games/match-x-2/index.html", _a[EWidgetType.Quiz] = isDev() ? "http://localhost:3024/index.html" : SCRIPTS_LOCATION + "/games/quiz/index.html", _a[EWidgetType.CustomSection] = PATH_TO_ACH + "/CustomSection.html", _a[EWidgetType.InboxWidget] = PATH_TO_ACH + "/InboxWidget.html", _a[EWidgetType.Liquid] = PATH_TO_ACH + "/LiquidRoot.html", _a),
        avatarHost = function(e) {
            return isDev() ? "http://localhost:1028/" : SmarticoAPI.getAvatarUrl(e) + "/"
        },
        CJMActivityType, PublicLabelSettings$1, PushNotificationUserStatus, PushClientPlatform, guid = ((e => {
            e[e.Root = 0] = "Root", e[e.Journey_Started = 1] = "Journey_Started", e[e.Journey_Stopped = 2] = "Journey_Stopped", e[e.Journey_Converted = 3] = "Journey_Converted", e[e.Delay = 6] = "Delay", e[e.Control_Group = 7] = "Control_Group", e[e.Do_Nothing = 8] = "Do_Nothing", e[e.WaitForEvent = 9] = "WaitForEvent", e[e.DeepLink = 10] = "DeepLink", e[e.JSCode = 11] = "JSCode", e[e.Banner = 20] = "Banner", e[e.Popup = 30] = "Popup", e[e.Inbox = 31] = "Inbox", e[e.Push = 40] = "Push", e[e.Email = 50] = "Email", e[e.SMS = 60] = "SMS", e[e.Slack = 70] = "Slack", e[e.Email_To_Customer_Support = 80] = "Email_To_Customer_Support", e[e.Email_To_Risk_Operator = 90] = "Email_To_Risk_Operator", e[e.Give_Bonus = 100] = "Give_Bonus", e[e.WebHook = 200] = "WebHook", e[e.UserStateCheck = 201] = "UserStateCheck", e[e.Pixel = 300] = "Pixel", e[e.WhatsApp_Connect = 400] = "WhatsApp_Connect"
        })(CJMActivityType = CJMActivityType || {}), (e => {
            e.PUBLIC_API_URL = "PUBLIC_API_URL", e.FCM_CLIENT_CONFIG = "FCM_CLIENT_CONFIG", e.FCM_SW_URL_V2 = "FCM_SW_URL_V2", e.RECORDING_ENABLED_FOR_ALL_USERS = "RECORDING_ENABLED_FOR_ALL_USERS", e.JS_INJECTION = "JS_INJECTION", e.GAMIFICATION_UI_SETTINGS_V2 = "GAMIFICATION_UI_SETTINGS_V2", e.GAMIFICATION_UI_SETTINGS_TEST_V2 = "GAMIFICATION_UI_SETTINGS_TEST_V2", e.FRONT_END_ALLOWED_LANGUAGES = "FRONT_END_ALLOWED_LANGUAGES", e.FRONT_END_ALLOW_DOMAINS = "FRONT_END_ALLOW_DOMAINS", e.DELAY_ENGAGEMENT_EXECUTION_ON_LOGIN_MS = "DELAY_ENGAGEMENT_EXECUTION_ON_LOGIN_MS", e.SHADOW_LABEL_PUBLIC_KEY = "SHADOW_LABEL_PUBLIC_KEY", e.FRONT_ENABLE_POPUPS_QUEUE = "FRONT_ENABLE_POPUPS_QUEUE", e.GAMIFICATION_MATCHX_NEW_VERSION = "GAMIFICATION_MATCHX_NEW_VERSION", e.FRONT_DELAY_BETWEEN_POPUPS_MS = "FRONT_DELAY_BETWEEN_POPUPS_MS", e.GAMIFICATION_WIDGET_BG_OPACITY = "GAMIFICATION_WIDGET_BG_OPACITY", e.GAMIFICATION_POPUP_BG_OPACITY = "GAMIFICATION_POPUP_BG_OPACITY", e.GAMIFICATION_POPUP_BG_BLUR = "GAMIFICATION_POPUP_BG_BLUR", e.GAMIFICATION_UI_LEVEL_ENABLED = "GAMIFICATION_UI_LEVEL_ENABLED", e.GAMIFICATION_UI_LEVEL_IMAGE_MOB = "GAMIFICATION_UI_LEVEL_IMAGE_MOB", e.GAMIFICATION_UI_LEVEL_IMAGE_DESK = "GAMIFICATION_UI_LEVEL_IMAGE_DESK", e.GAMIFICATION_LEVELS_LOGIC2 = "GAMIFICATION_LEVELS_LOGIC2", e.GAMIFICATION_LEVELS_LOGIC3 = "GAMIFICATION_LEVELS_LOGIC3", e.AVATAR_CUSTOM_IMAGE_MAX_ID = "AVATAR_CUSTOM_IMAGE_MAX_ID", e.AVATAR_CUSTOM_IMAGE_FOLDER = "AVATAR_CUSTOM_IMAGE_FOLDER", e.GAMIFICATION_SHOW_POWERED_BY = "GAMIFICATION_SHOW_POWERED_BY", e.INBOX_PUBLIC_CDN = "INBOX_PUBLIC_CDN", e.GF_TOURNAMENT_LOBBY_NEW_UI_TEST_USERS = "GF_TOURNAMENT_LOBBY_NEW_UI_TEST_USERS", e.GF_TOURNAMENT_LOBBY_NEW_UI = "GF_TOURNAMENT_LOBBY_NEW_UI", e.GAMIFICATION_CUSTOM_JS = "GAMIFICATION_CUSTOM_JS", e.GAMIFICATION_DISABLE_FOR_BRAND = "GAMIFICATION_DISABLE_FOR_BRAND", e.GAMIFICATION_AVAILABLE_SKINS = "GAMIFICATION_AVAILABLE_SKINS", e.GF_ENABLE_RAFFLE_ON_CLIENT = "GF_ENABLE_RAFFLE_ON_CLIENT"
        })(PublicLabelSettings$1 = PublicLabelSettings$1 || {}), (e => {
            e[e.ALLOWED = 0] = "ALLOWED", e[e.ASK = 1] = "ASK", e[e.BLOCKED = 2] = "BLOCKED", e[e.SUSPENDED = 3] = "SUSPENDED", e[e.BROWSER_NOT_SUPPORTED = 4] = "BROWSER_NOT_SUPPORTED"
        })(PushNotificationUserStatus = PushNotificationUserStatus || {}), (e => {
            e[e.CHROME_DESKTOP = 0] = "CHROME_DESKTOP", e[e.FIREFOX_DESKTOP = 1] = "FIREFOX_DESKTOP", e[e.EDGE_DESKTOP = 2] = "EDGE_DESKTOP", e[e.OPERA_DESKTOP = 3] = "OPERA_DESKTOP", e[e.SAFARI_DESKTOP = 4] = "SAFARI_DESKTOP", e[e.OTHER = 5] = "OTHER", e[e.NATIVE_IOS = 6] = "NATIVE_IOS", e[e.NATIVE_ANDROID = 7] = "NATIVE_ANDROID", e[e.CHROME_MOBILE = 8] = "CHROME_MOBILE", e[e.FIREFOX_MOBILE = 9] = "FIREFOX_MOBILE", e[e.SAFARI_MOBILE = 10] = "SAFARI_MOBILE", e[e.OPERA_MOBILE = 11] = "OPERA_MOBILE"
        })(PushClientPlatform = PushClientPlatform || {}), function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            })
        }),
        InteractionBridgeType, Util = ((e => {
            e.GamificationWidget = "GamificationWidget", e.GamificationMain = "GamificationMain", e.MiniGame = "MiniGame", e.DepositCloseMe = "DepositCloseMe", e.InlineFrame = "InlineFrame", e.TournamentsLobby = "TournamentsLobby", e.CustomSection = "CustomSection", e.InboxWidget = "inboxWidget", e.LiquidPage = "Liquid"
        })(InteractionBridgeType = InteractionBridgeType || {}), (() => {
            function a() {}
            return a.isNumber = function(e) {
                return /^\d+$/.test(e)
            }, a.parseNumber = function(e) {
                return !a.isNotEmpty(e) || (e = parseFloat(e), isNaN(e)) ? null : e
            }, a.parseBoolean = function(e) {
                return "true" === e || !0 === e || "false" !== e && !1 !== e && null
            }, a.escapeRegExp = function(e) {
                return a.isNotEmpty(e) ? e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") : e
            }, a.nullToEmpty = function(e) {
                return this.isNotEmpty(e) ? e : ""
            }, a.nullTo0 = function(e) {
                return this.isNotNull(e) ? e : 0
            }, a.isNotEmpty = function(e) {
                return null != e && 0 < e.length
            }, a.isNotNull = function(e) {
                return null != e
            }, a.isNull = function(e) {
                return null == e
            }, a.isArrayNotEmpty = function(e) {
                return null != e && 0 < e.length
            }, a.isArrayEmpty = function(e) {
                return null == e || 0 === e.length
            }, a.isObjectEmpty = function(e) {
                return a.isNull(e) || 0 === Object.keys(e).length && e.constructor === Object
            }, a.isMapNotEmpty = function(e) {
                return null != e && (0 < e.size() || 0 < e.keys().length)
            }, a.isMapEmpty = function(e) {
                return null == e || 0 === e.size() || 0 === e.keys().length
            }, a.objectToMap = function(t) {
                var n;
                return a.isNotNull(t) ? (n = new typescriptMap_1, Object.keys(t).forEach(function(e) {
                    n.set(e, t[e])
                }), n) : null
            }, a.keyByValue = function(e, t) {
                for (var n in e)
                    if (e.hasOwnProperty(n) && e[n] === t) return n;
                return null
            }, a.greaterThen0 = function(e) {
                return this.isNotNull(e) && 0 < e
            }, a.not0 = function(e) {
                return this.isNotNull(e) && 0 !== e
            }, a.lessThen0 = function(e) {
                return this.isNotNull(e) && e < 0
            }, a.compareUndefined = function(e, t) {
                return this.isNotNull(e) && this.isNull(t) ? -1 : this.isNull(e) && this.isNotNull(t) ? 1 : 0
            }, a.compareArrayLength = function(e, t) {
                var n = a.compareUndefined(e, t);
                return 0 === n && a.isNotNull(e) && a.isNotNull(t) ? e.length < t.length ? -1 : e.length > t.length ? 1 : 0 : n
            }, a.compareObject = function(e, t) {
                for (var n in e)
                    if (!(n in t) || e[n] !== t[n]) return !1;
                for (var n in t)
                    if (!(n in e) || e[n] !== t[n]) return !1;
                return !0
            }, a.compareArrays = function(e, t, n) {
                a.checkNotNull(n);
                var i = this.compareArrayLength(e, t);
                if (0 === i && a.isNotNull(e) && a.isNotNull(t))
                    for (var r = 0; r < e.length && 0 === (i = n(e[r], t[r])); r++);
                return i
            }, a.compareBool = function(e, t) {
                var n = this.compareUndefined(e, t);
                return 0 === n && this.isNotNull(e) && this.isNotNull(t) ? Boolean(t) - Boolean(e) : n
            }, a.compareNumber = function(e, t) {
                var n = this.compareUndefined(e, t);
                return 0 === n && this.isNotNull(e) && this.isNotNull(t) ? e === t ? 0 : e < t ? -1 : 1 : n
            }, a.compareString = function(e, t) {
                var n = a.compareUndefined(e, t);
                return 0 === n && a.isNotNull(e) && a.isNotNull(t) ? e < t ? -1 : t < e ? 1 : 0 : n
            }, a.range = function(n, e) {
                return Array(e - n + 1).fill(null).map(function(e, t) {
                    return n + t
                })
            }, a.has = function(e, t) {
                if (a.isArrayNotEmpty(e) && a.isNotNull(t))
                    for (var n = 0; n < e.length; n++)
                        if (e[n] === t) return !0;
                return !1
            }, a.isEmpty = function(e) {
                return null == e || 0 === e.length
            }, a.checkNotNull = function(e, t) {
                if (a.isNull(e)) throw new ReferenceError(t);
                return e
            }, a.randomInt = function(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e
            }, a.randomArr = function(e) {
                if (!a.isArrayEmpty(e)) return e[a.randomInt(0, e.length - 1)]
            }, a.remove = function(e, t) {
                if (a.isArrayNotEmpty(e) && t)
                    for (var n = 0; n < e.length; n++)
                        if (e[n] === t) return e.splice(n, 1), !0;
                return !1
            }, a.replaceAll = function(e, t, n) {
                return a.isNotNull(e) ? e.replace(new RegExp(a.escapeRegExp(t), "g"), n) : e
            }, a.to = function(e, t) {
                return e.then(function(e) {
                    return [null, e]
                }).catch(function(e) {
                    return t && Object.assign(e, t), [e, void 0]
                })
            }, a.isObject = function(e) {
                return e && "object" == typeof e && !Array.isArray(e)
            }, a.merge = function(e) {
                for (var t, n, i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
                if (!i.length) return e;
                var a = i.shift();
                if (this.isObject(e) && this.isObject(a))
                    for (var s in a) this.isObject(a[s]) ? (e[s] || Object.assign(e, ((t = {})[s] = {}, t)), this.merge(e[s], a[s])) : Array.isArray(a[s]) ? Object.assign(e, ((t = {})[s] = __spreadArray([], a[s]), t)) : void 0 !== a[s] && Object.assign(e, ((n = {})[s] = a[s], n));
                return this.merge.apply(this, __spreadArray([e], i))
            }, a.deepCopy = function(e) {
                return JSON.parse(JSON.stringify(e))
            }, a.getStackTrace = function() {
                return (new Error).stack
            }, a.shuffleArray = function(e) {
                for (var t = e.length - 1; 0 < t; t--) {
                    var n = Math.floor(Math.random() * (t + 1)),
                        i = [e[n], e[t]];
                    e[t] = i[0], e[n] = i[1]
                }
                return e
            }, a.uuid = function() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                })
            }, a
        })()),
        WebUtil = (() => {
            function e() {}
            return e.parentWindow = function() {
                return window === window.parent && window !== window.opener ? window.opener : window.parent
            }, e.isFrame = function() {
                return window !== window.parent || window === window.opener
            }, e.addEventListener = function(e, t, n, i) {
                var r, a = this;
                Util.isNotNull(e) && (Util.isNotNull(e.addEventListener) ? (r = this._intervals.get(e), Util.isNotNull(r) && (this._intervals.delete(e), clearInterval(r)), e.addEventListener(t, n, i)) : this._intervals.set(e, setInterval(function() {
                    a.addEventListener(e, t, n, i)
                }, 50)))
            }, e.urlParam = function(e, t) {
                e = new RegExp("[?&]" + e + "=([^&#]*)").exec(t || window.location.href);
                return e && 0 < e.length ? decodeURIComponent(e[1]) : null
            }, e.href = function(e) {
                e = new RegExp(/href="(.*?)"/g).exec(e);
                return e && 0 < e.length ? e[1] : null
            }, e.addGetParam = function(e, t, n) {
                var i = e;
                return i = Util.isNotEmpty(e) ? e + (0 < e.indexOf("?") ? "&" : "?") + t + "=" + n : i
            }, e.addGetParams = function(e, t) {
                var n = e;
                return n = Util.isNotEmpty(e) && t && (n = e + (0 < e.indexOf("?") ? "&" : "?") + Object.keys(t).filter(function(e) {
                    return "noQuestionMark" !== e
                }).map(function(e) {
                    return null == t[e] || "undefined" === t[e] || "null" === t[e] ? "" : e + "=" + t[e]
                }).filter(function(e) {
                    return 0 < e.length
                }).join("&"), null != t) && t.noQuestionMark ? n.replace("?", "&") : n
            }, e.createFrame = function(e, t, n) {
                void 0 === t && (t = 2147483647);
                var i, r = document.getElementsByTagName("body")[0],
                    a = null != n && n.id ? n.id : "_sm_frame" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
                    s = document.createElement("style");
                return s.textContent = "\n        iframe#".concat(a, " { all: initial; color-scheme: auto; }\n        iframe#").concat(a, "[bridgeId=").concat(InteractionBridgeType.GamificationWidget, "] { display: block !important; }\n        "), null != r && r.append && r.append(s), n ? i = n : ((i = document.createElement("iframe")).style.display = "none", i.style.width = "1px", i.style.height = "1px", i.style.zIndex = t.toString(), i.setAttribute("delete-frame-on-close", "true"), r.appendChild(i)), i.id = a, i.setAttribute("allow", "camera;fullscreen"), i.setAttribute("scrolling", "no"), i.setAttribute("src", e), i
            }, e.removeFrame = function(e) {
                "true" === (null == e ? void 0 : e.getAttribute("delete-frame-on-close")) && e.parentElement.removeChild(e)
            }, e.isTablet = function() {
                var e = navigator.userAgent.toLowerCase(),
                    t = window.innerWidth || document.documentElement.clientWidth,
                    n = "ontouchstart" in window || 0 < navigator.maxTouchPoints,
                    t = 600 <= t && t <= 1200,
                    i = /ipad/.test(e),
                    r = /android/.test(e) && !/mobile/.test(e),
                    a = /windows/.test(e) && /touch/.test(e),
                    s = /kindle/.test(e),
                    e = /playbook/.test(e);
                return n && t || i || r || a || s || e
            }, e.isSafari = function() {
                return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)
            }, e.isMobile = function() {
                return e.isMobileCached = null === e.isMobileCached ? e.isMobileClean() || window.location.search.includes(e.forceMobileParam) : e.isMobileCached
            }, e.isMobileClean = function() {
                return (/Mobi/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent) || /iPod/i.test(navigator.userAgent) || /webOS/i.test(navigator.userAgent) || /BlackBerry/i.test(navigator.userAgent) || /Windows Phone/i.test(navigator.userAgent) || /Opera Mini/i.test(navigator.userAgent) || /IEMobile/i.test(navigator.userAgent) || /WPDesktop/i.test(navigator.userAgent)) && !e.isTablet()
            }, e.winCenter = function(e, t) {
                var n = [];
                return n.push("width=" + e), n.push("height=" + t), n.push(this.calculateWinLeft(e)), n.push(this.calculateWinTop(t)), n.join(",")
            }, e.calculateWinLeft = function(e) {
                var t = Util.isNotNull(window.screenLeft) ? window.screenLeft : screen.left,
                    n = window.innerWidth || document.documentElement.clientWidth || screen.width;
                return "left=" + Math.round((n - e) / 2 + t)
            }, e.calculateWinTop = function(e) {
                var t = Util.isNotNull(window.screenTop) ? window.screenTop : screen.top,
                    n = window.innerHeight || document.documentElement.clientHeight || screen.height;
                return "top=" + Math.round((n - e) / 2 + t)
            }, e.Least = function(e, t) {
                return t < e ? t : e
            }, e.Greatest = function(e, t) {
                return e < t ? t : e
            }, e.calculateFontSize = function(e, t, n, i, r) {
                var a = document.createElement("canvas").getContext("2d"),
                    i = (a.font = "".concat(16, "px ").concat(i), e.trim().split(/\s+/)),
                    e = a.measureText("a").width,
                    s = i.length - 1,
                    i = i.reduce(function(e, t) {
                        return e + a.measureText(t).width
                    }, s * e),
                    s = Math.min(t / i, n / 16),
                    e = Math.max(Math.min(16 * s, r), 4);
                return Math.round(e)
            }, e.forceMobileParam = "force_mobile", e.isMobileCached = null, e._intervals = new typescriptMap_1, e
        })(),
        Detector = (() => {
            function a() {}
            return a.info = function() {
                return this._info || (this._info = {
                    fp: a.fingerprint(),
                    agent: window.navigator.userAgent,
                    host: window.location.hostname,
                    device_type: a.getDeviceType(),
                    tzoffset: (new Date).getTimezoneOffset(),
                    browser: a.browserName(),
                    os: a.getOSName()
                }), this._info
            }, a.clear = function() {
                a._info = void 0
            }, a.getDeviceType = function() {
                return -1 !== navigator.userAgent.indexOf("SMTO-WRAPPER") ? "WRAPPER" : WebUtil.isMobile() ? "MOBILE" : "DESKTOP"
            }, a.hasLocalStorage = function() {
                try {
                    return !!window.localStorage
                } catch (e) {
                    return !0
                }
            }, a.hasSessionStorage = function() {
                try {
                    return !!window.sessionStorage
                } catch (e) {
                    return !0
                }
            }, a.hash = function(e) {
                var t, n = 0;
                if (0 !== e.length)
                    for (t = 0; t < e.length; t++) n = (n << 5) - n + e.charCodeAt(t), n |= 0;
                return n
            }, a.fingerprint = function() {
                var e = [window.navigator.userAgent, [window.screen.height, window.screen.width, window.screen.colorDepth].join("x"), (new Date).getTimezoneOffset(), a.hasLocalStorage(), a.hasSessionStorage()],
                    t = [];
                if (navigator.plugins)
                    for (var n = 0; n < navigator.plugins.length; n++)
                        if (navigator.plugins[n]) {
                            for (var i = [], r = 0; r < navigator.plugins[n].length; r++) i.push([navigator.plugins[n][r].type, navigator.plugins[n][r].suffixes]);
                            t.push([navigator.plugins[n].name + "::" + navigator.plugins[n].description, i.join("~")])
                        }
                return a.hash(e.join("###") + "###" + t.sort().join(";"))
            }, a.getOSName = function() {
                var e = window.navigator.userAgent,
                    t = window.navigator.platform,
                    n = "Other";
                return -1 !== ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(t) ? n = "Mac OS" : -1 !== ["iPhone", "iPad", "iPod"].indexOf(t) ? n = "iOS" : -1 !== ["Win32", "Win64", "Windows", "WinCE"].indexOf(t) ? n = "Windows" : /Android/.test(e) ? n = "Android" : !n && /Linux/.test(t) && (n = "Linux"), n
            }, a.browserName = function() {
                var e = window;
                return e.chrome && e.chrome.webstore || -1 != navigator.userAgent.indexOf("Chrome") ? -1 != navigator.userAgent.indexOf("Edg/") ? "Edge" : "Chrome" : void 0 !== e.InstallTrigger || -1 != navigator.userAgent.indexOf("Firefox") ? "Firefox" : e.opr && e.addons || e.opera || 0 <= navigator.userAgent.indexOf(" OPR/") ? "Opera" : !e.isIE && e.StyleMedia ? "Edge" : /constructor/i.test(e.HTMLElement) || -1 !== navigator.userAgent.toLowerCase().indexOf("safari") && -1 === navigator.userAgent.toLowerCase().indexOf("chrome") || "[object SafariRemoteNotification]" === (!e.safari || e.safari.pushNotification).toString() ? "Safari" : "Other"
            }, a.getClientPlatform = function() {
                var e = null == window ? void 0 : window._smartico_client_platform;
                return e || (WebUtil.isMobile() ? {
                    Chrome: PushClientPlatform.CHROME_MOBILE,
                    Firefox: PushClientPlatform.FIREFOX_MOBILE,
                    Safari: PushClientPlatform.SAFARI_MOBILE,
                    Opera: PushClientPlatform.OPERA_MOBILE,
                    Other: PushClientPlatform.OTHER,
                    Edge: PushClientPlatform.OTHER
                } : {
                    Chrome: PushClientPlatform.CHROME_DESKTOP,
                    Firefox: PushClientPlatform.FIREFOX_DESKTOP,
                    Edge: PushClientPlatform.EDGE_DESKTOP,
                    Opera: PushClientPlatform.OPERA_DESKTOP,
                    Safari: PushClientPlatform.SAFARI_DESKTOP,
                    Other: PushClientPlatform.OTHER
                })[a.browserName()]
            }, a
        })(),
        LogLevel;
    let stringToByteArray$1 = function(n) {
            var i = [];
            let r = 0;
            for (let t = 0; t < n.length; t++) {
                let e = n.charCodeAt(t);
                e < 128 ? i[r++] = e : (e < 2048 ? i[r++] = e >> 6 | 192 : (55296 == (64512 & e) && t + 1 < n.length && 56320 == (64512 & n.charCodeAt(t + 1)) ? (e = 65536 + ((1023 & e) << 10) + (1023 & n.charCodeAt(++t)), i[r++] = e >> 18 | 240, i[r++] = e >> 12 & 63 | 128) : i[r++] = e >> 12 | 224, i[r++] = e >> 6 & 63 | 128), i[r++] = 63 & e | 128)
            }
            return i
        },
        byteArrayToString = function(e) {
            var t = [];
            let n = 0,
                i = 0;
            for (; n < e.length;) {
                var r, a, s, o = e[n++];
                o < 128 ? t[i++] = String.fromCharCode(o) : 191 < o && o < 224 ? (r = e[n++], t[i++] = String.fromCharCode((31 & o) << 6 | 63 & r)) : 239 < o && o < 365 ? (r = ((7 & o) << 18 | (63 & e[n++]) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) - 65536, t[i++] = String.fromCharCode(55296 + (r >> 10)), t[i++] = String.fromCharCode(56320 + (1023 & r))) : (a = e[n++], s = e[n++], t[i++] = String.fromCharCode((15 & o) << 12 | (63 & a) << 6 | 63 & s))
            }
            return t.join("")
        },
        base64 = {
            byteToCharMap_: null,
            charToByteMap_: null,
            byteToCharMapWebSafe_: null,
            charToByteMapWebSafe_: null,
            ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            get ENCODED_VALS() {
                return this.ENCODED_VALS_BASE + "+/="
            },
            get ENCODED_VALS_WEBSAFE() {
                return this.ENCODED_VALS_BASE + "-_."
            },
            HAS_NATIVE_SUPPORT: "function" == typeof atob,
            encodeByteArray(i, e) {
                if (!Array.isArray(i)) throw Error("encodeByteArray takes an array as a parameter");
                this.init_();
                var r = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                    a = [];
                for (let n = 0; n < i.length; n += 3) {
                    var s = i[n],
                        o = n + 1 < i.length,
                        c = o ? i[n + 1] : 0,
                        l = n + 2 < i.length,
                        _ = l ? i[n + 2] : 0;
                    let e = (15 & c) << 2 | _ >> 6,
                        t = 63 & _;
                    l || (t = 64, o) || (e = 64), a.push(r[s >> 2], r[(3 & s) << 4 | c >> 4], r[e], r[t])
                }
                return a.join("")
            },
            encodeString(e, t) {
                return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(stringToByteArray$1(e), t)
            },
            decodeString(e, t) {
                return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : byteArrayToString(this.decodeStringToByteArray(e, t))
            },
            decodeStringToByteArray(t, e) {
                this.init_();
                var n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                    i = [];
                for (let e = 0; e < t.length;) {
                    var r = n[t.charAt(e++)],
                        a = e < t.length ? n[t.charAt(e)] : 0,
                        s = ++e < t.length ? n[t.charAt(e)] : 64,
                        o = ++e < t.length ? n[t.charAt(e)] : 64;
                    if (++e, null == r || null == a || null == s || null == o) throw new DecodeBase64StringError;
                    i.push(r << 2 | a >> 4), 64 !== s && (i.push(a << 4 & 240 | s >> 2), 64 !== o) && i.push(s << 6 & 192 | o)
                }
                return i
            },
            init_() {
                if (!this.byteToCharMap_) {
                    this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                    for (let e = 0; e < this.ENCODED_VALS.length; e++) this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e) >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
                }
            }
        };
    class DecodeBase64StringError extends Error {
        constructor() {
            super(...arguments), this.name = "DecodeBase64StringError"
        }
    }
    let base64Encode = function(e) {
            e = stringToByteArray$1(e);
            return base64.encodeByteArray(e, !0)
        },
        base64urlEncodeWithoutPadding = function(e) {
            return base64Encode(e).replace(/\./g, "")
        },
        base64Decode = function(e) {
            try {
                return base64.decodeString(e, !0)
            } catch (e) {
                console.error("base64Decode failed: ", e)
            }
            return null
        };

    function getGlobal() {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof global) return global;
        throw new Error("Unable to locate global object.")
    }
    let getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__,
        getDefaultsFromEnvVariable = () => {
            var e;
            return "undefined" != typeof process && void 0 !== process.env && (e = process.env.__FIREBASE_DEFAULTS__) ? JSON.parse(e) : void 0
        },
        getDefaultsFromCookie = () => {
            if ("undefined" != typeof document) {
                let e;
                try {
                    e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
                } catch (e) {
                    return
                }
                var t = e && base64Decode(e[1]);
                return t && JSON.parse(t)
            }
        },
        getDefaults = () => {
            try {
                return getDefaultsFromGlobal() || getDefaultsFromEnvVariable() || getDefaultsFromCookie()
            } catch (e) {
                console.info("Unable to get __FIREBASE_DEFAULTS__ due to: " + e)
            }
        },
        getDefaultAppConfig = () => {
            var e;
            return null == (e = getDefaults()) ? void 0 : e.config
        };
    class Deferred {
        constructor() {
            this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise((e, t) => {
                this.resolve = e, this.reject = t
            })
        }
        wrapCallback(n) {
            return (e, t) => {
                e ? this.reject(e) : this.resolve(t), "function" == typeof n && (this.promise.catch(() => {}), 1 === n.length ? n(e) : n(e, t))
            }
        }
    }

    function isIndexedDBAvailable() {
        try {
            return "object" == typeof indexedDB
        } catch (e) {
            return !1
        }
    }

    function validateIndexedDBOpenable() {
        return new Promise((i, r) => {
            try {
                let e = !0,
                    t = "validate-browser-context-for-indexeddb-analytics-module",
                    n = self.indexedDB.open(t);
                n.onsuccess = () => {
                    n.result.close(), e || self.indexedDB.deleteDatabase(t), i(!0)
                }, n.onupgradeneeded = () => {
                    e = !1
                }, n.onerror = () => {
                    var e;
                    r((null == (e = n.error) ? void 0 : e.message) || "")
                }
            } catch (e) {
                r(e)
            }
        })
    }

    function areCookiesEnabled() {
        return !("undefined" == typeof navigator || !navigator.cookieEnabled)
    }
    let ERROR_NAME = "FirebaseError";
    class FirebaseError extends Error {
        constructor(e, t, n) {
            super(t), this.code = e, this.customData = n, this.name = ERROR_NAME, Object.setPrototypeOf(this, FirebaseError.prototype), Error.captureStackTrace && Error.captureStackTrace(this, ErrorFactory.prototype.create)
        }
    }
    class ErrorFactory {
        constructor(e, t, n) {
            this.service = e, this.serviceName = t, this.errors = n
        }
        create(e, ...t) {
            var t = t[0] || {},
                n = this.service + "/" + e,
                e = this.errors[e],
                e = e ? replaceTemplate(e, t) : "Error",
                e = this.serviceName + `: ${e} (${n}).`;
            return new FirebaseError(n, e, t)
        }
    }

    function replaceTemplate(e, i) {
        return e.replace(PATTERN, (e, t) => {
            var n = i[t];
            return null != n ? String(n) : `<${t}?>`
        })
    }
    let PATTERN = /\{\$([^}]+)}/g;

    function deepEqual(e, t) {
        if (e !== t) {
            var n, i, r = Object.keys(e),
                a = Object.keys(t);
            for (n of r) {
                if (!a.includes(n)) return;
                var s = e[n],
                    o = t[n];
                if (isObject(s) && isObject(o)) {
                    if (!deepEqual(s, o)) return
                } else if (s !== o) return
            }
            for (i of a)
                if (!r.includes(i)) return
        }
        return 1
    }

    function isObject(e) {
        return null !== e && "object" == typeof e
    }

    function getModularInstance(e) {
        return e && e._delegate ? e._delegate : e
    }
    class Component {
        constructor(e, t, n) {
            this.name = e, this.instanceFactory = t, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
        }
        setInstantiationMode(e) {
            return this.instantiationMode = e, this
        }
        setMultipleInstances(e) {
            return this.multipleInstances = e, this
        }
        setServiceProps(e) {
            return this.serviceProps = e, this
        }
        setInstanceCreatedCallback(e) {
            return this.onInstanceCreated = e, this
        }
    }
    let DEFAULT_ENTRY_NAME = "[DEFAULT]";
    class Provider {
        constructor(e, t) {
            this.name = e, this.container = t, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
        }
        get(e) {
            e = this.normalizeInstanceIdentifier(e);
            if (!this.instancesDeferred.has(e)) {
                var t = new Deferred;
                if (this.instancesDeferred.set(e, t), this.isInitialized(e) || this.shouldAutoInitialize()) try {
                    var n = this.getOrInitializeService({
                        instanceIdentifier: e
                    });
                    n && t.resolve(n)
                } catch (e) {}
            }
            return this.instancesDeferred.get(e).promise
        }
        getImmediate(t) {
            var e = this.normalizeInstanceIdentifier(null == t ? void 0 : t.identifier),
                t = null != (t = null == t ? void 0 : t.optional) && t;
            if (!this.isInitialized(e) && !this.shouldAutoInitialize()) {
                if (t) return null;
                throw Error(`Service ${this.name} is not available`)
            }
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: e
                })
            } catch (e) {
                if (t) return null;
                throw e
            }
        }
        getComponent() {
            return this.component
        }
        setComponent(e) {
            if (e.name !== this.name) throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
            if (this.component) throw Error(`Component for ${this.name} has already been provided`);
            if (this.component = e, this.shouldAutoInitialize()) {
                if (isComponentEager(e)) try {
                    this.getOrInitializeService({
                        instanceIdentifier: DEFAULT_ENTRY_NAME
                    })
                } catch (e) {}
                for (var [t, n] of this.instancesDeferred.entries()) {
                    t = this.normalizeInstanceIdentifier(t);
                    try {
                        var i = this.getOrInitializeService({
                            instanceIdentifier: t
                        });
                        n.resolve(i)
                    } catch (e) {}
                }
            }
        }
        clearInstance(e = DEFAULT_ENTRY_NAME) {
            this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e)
        }
        delete() {
            return __async(function*() {
                var e = Array.from(this.instances.values());
                yield Promise.all([...e.filter(e => "INTERNAL" in e).map(e => e.INTERNAL.delete()), ...e.filter(e => "_delete" in e).map(e => e._delete())])
            }.call(this))
        }
        isComponentSet() {
            return null != this.component
        }
        isInitialized(e = DEFAULT_ENTRY_NAME) {
            return this.instances.has(e)
        }
        getOptions(e = DEFAULT_ENTRY_NAME) {
            return this.instancesOptions.get(e) || {}
        }
        initialize(e = {}) {
            var {
                options: t = {}
            } = e, n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
            if (this.isInitialized(n)) throw Error(this.name + `(${n}) has already been initialized`);
            if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
            var i, r, a = this.getOrInitializeService({
                instanceIdentifier: n,
                options: t
            });
            for ([i, r] of this.instancesDeferred.entries()) n === this.normalizeInstanceIdentifier(i) && r.resolve(a);
            return a
        }
        onInit(e, t) {
            t = this.normalizeInstanceIdentifier(t);
            let n = null != (i = this.onInitCallbacks.get(t)) ? i : new Set;
            n.add(e), this.onInitCallbacks.set(t, n);
            var i = this.instances.get(t);
            return i && e(i, t), () => {
                n.delete(e)
            }
        }
        invokeOnInitCallbacks(e, t) {
            var n = this.onInitCallbacks.get(t);
            if (n)
                for (var i of n) try {
                    i(e, t)
                } catch (e) {}
        }
        getOrInitializeService({
            instanceIdentifier: e,
            options: t = {}
        }) {
            let n = this.instances.get(e);
            if (!n && this.component && (n = this.component.instanceFactory(this.container, {
                    instanceIdentifier: normalizeIdentifierForFactory(e),
                    options: t
                }), this.instances.set(e, n), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(n, e), this.component.onInstanceCreated)) try {
                this.component.onInstanceCreated(this.container, e, n)
            } catch (e) {}
            return n || null
        }
        normalizeInstanceIdentifier(e = DEFAULT_ENTRY_NAME) {
            return !this.component || this.component.multipleInstances ? e : DEFAULT_ENTRY_NAME
        }
        shouldAutoInitialize() {
            return !!this.component && "EXPLICIT" !== this.component.instantiationMode
        }
    }

    function normalizeIdentifierForFactory(e) {
        return e === DEFAULT_ENTRY_NAME ? void 0 : e
    }

    function isComponentEager(e) {
        return "EAGER" === e.instantiationMode
    }
    class ComponentContainer {
        constructor(e) {
            this.name = e, this.providers = new Map
        }
        addComponent(e) {
            var t = this.getProvider(e.name);
            if (t.isComponentSet()) throw new Error(`Component ${e.name} has already been registered with ` + this.name);
            t.setComponent(e)
        }
        addOrOverwriteComponent(e) {
            this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e)
        }
        getProvider(e) {
            var t;
            return this.providers.has(e) ? this.providers.get(e) : (t = new Provider(e, this), this.providers.set(e, t), t)
        }
        getProviders() {
            return Array.from(this.providers.values())
        }
    }(e => {
        e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT"
    })(LogLevel = LogLevel || {});
    let levelStringToEnum = {
            debug: LogLevel.DEBUG,
            verbose: LogLevel.VERBOSE,
            info: LogLevel.INFO,
            warn: LogLevel.WARN,
            error: LogLevel.ERROR,
            silent: LogLevel.SILENT
        },
        defaultLogLevel = LogLevel.INFO,
        ConsoleMethod = {
            [LogLevel.DEBUG]: "log",
            [LogLevel.VERBOSE]: "log",
            [LogLevel.INFO]: "info",
            [LogLevel.WARN]: "warn",
            [LogLevel.ERROR]: "error"
        },
        defaultLogHandler = (e, t, ...n) => {
            if (!(t < e.logLevel)) {
                var i = (new Date).toISOString(),
                    r = ConsoleMethod[t];
                if (!r) throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);
                console[r](`[${i}]  ${e.name}:`, ...n)
            }
        };
    class Logger {
        constructor(e) {
            this.name = e, this._logLevel = defaultLogLevel, this._logHandler = defaultLogHandler, this._userLogHandler = null
        }
        get logLevel() {
            return this._logLevel
        }
        set logLevel(e) {
            if (!(e in LogLevel)) throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
            this._logLevel = e
        }
        setLogLevel(e) {
            this._logLevel = "string" == typeof e ? levelStringToEnum[e] : e
        }
        get logHandler() {
            return this._logHandler
        }
        set logHandler(e) {
            if ("function" != typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
            this._logHandler = e
        }
        get userLogHandler() {
            return this._userLogHandler
        }
        set userLogHandler(e) {
            this._userLogHandler = e
        }
        debug(...e) {
            this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...e), this._logHandler(this, LogLevel.DEBUG, ...e)
        }
        log(...e) {
            this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...e), this._logHandler(this, LogLevel.VERBOSE, ...e)
        }
        info(...e) {
            this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...e), this._logHandler(this, LogLevel.INFO, ...e)
        }
        warn(...e) {
            this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...e), this._logHandler(this, LogLevel.WARN, ...e)
        }
        error(...e) {
            this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...e), this._logHandler(this, LogLevel.ERROR, ...e)
        }
    }
    let instanceOfAny = (t, e) => e.some(e => t instanceof e),
        idbProxyableTypes, cursorAdvanceMethods;

    function getIdbProxyableTypes() {
        return idbProxyableTypes = idbProxyableTypes || [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]
    }

    function getCursorAdvanceMethods() {
        return cursorAdvanceMethods = cursorAdvanceMethods || [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey]
    }
    let cursorRequestMap = new WeakMap,
        transactionDoneMap = new WeakMap,
        transactionStoreNamesMap = new WeakMap,
        transformCache = new WeakMap,
        reverseTransformCache = new WeakMap;

    function promisifyRequest(a) {
        var e = new Promise((e, t) => {
            let n = () => {
                    a.removeEventListener("success", i), a.removeEventListener("error", r)
                },
                i = () => {
                    e(wrap(a.result)), n()
                },
                r = () => {
                    t(a.error), n()
                };
            a.addEventListener("success", i), a.addEventListener("error", r)
        });
        return e.then(e => {
            e instanceof IDBCursor && cursorRequestMap.set(e, a)
        }).catch(() => {}), reverseTransformCache.set(e, a), e
    }

    function cacheDonePromiseForTransaction(a) {
        var e;
        transactionDoneMap.has(a) || (e = new Promise((e, t) => {
            let n = () => {
                    a.removeEventListener("complete", i), a.removeEventListener("error", r), a.removeEventListener("abort", r)
                },
                i = () => {
                    e(), n()
                },
                r = () => {
                    t(a.error || new DOMException("AbortError", "AbortError")), n()
                };
            a.addEventListener("complete", i), a.addEventListener("error", r), a.addEventListener("abort", r)
        }), transactionDoneMap.set(a, e))
    }
    let idbProxyTraps = {
        get(e, t, n) {
            if (e instanceof IDBTransaction) {
                if ("done" === t) return transactionDoneMap.get(e);
                if ("objectStoreNames" === t) return e.objectStoreNames || transactionStoreNamesMap.get(e);
                if ("store" === t) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
            }
            return wrap(e[t])
        },
        set(e, t, n) {
            return e[t] = n, !0
        },
        has(e, t) {
            return e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
        }
    };

    function replaceTraps(e) {
        idbProxyTraps = e(idbProxyTraps)
    }

    function wrapFunction(n) {
        return n !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? getCursorAdvanceMethods().includes(n) ? function(...e) {
            return n.apply(unwrap(this), e), wrap(cursorRequestMap.get(this))
        } : function(...e) {
            return wrap(n.apply(unwrap(this), e))
        } : function(e, ...t) {
            t = n.call(unwrap(this), e, ...t);
            return transactionStoreNamesMap.set(t, e.sort ? e.sort() : [e]), wrap(t)
        }
    }

    function transformCachableValue(e) {
        return "function" == typeof e ? wrapFunction(e) : (e instanceof IDBTransaction && cacheDonePromiseForTransaction(e), instanceOfAny(e, getIdbProxyableTypes()) ? new Proxy(e, idbProxyTraps) : e)
    }

    function wrap(e) {
        var t;
        return e instanceof IDBRequest ? promisifyRequest(e) : transformCache.has(e) ? transformCache.get(e) : ((t = transformCachableValue(e)) !== e && (transformCache.set(e, t), reverseTransformCache.set(t, e)), t)
    }
    let unwrap = e => reverseTransformCache.get(e);

    function openDB(e, t, {
        blocked: n,
        upgrade: i,
        blocking: r,
        terminated: a
    } = {}) {
        let s = indexedDB.open(e, t);
        e = wrap(s);
        return i && s.addEventListener("upgradeneeded", e => {
            i(wrap(s.result), e.oldVersion, e.newVersion, wrap(s.transaction), e)
        }), n && s.addEventListener("blocked", e => n(e.oldVersion, e.newVersion, e)), e.then(e => {
            a && e.addEventListener("close", () => a()), r && e.addEventListener("versionchange", e => r(e.oldVersion, e.newVersion, e))
        }).catch(() => {}), e
    }

    function deleteDB(e, {
        blocked: t
    } = {}) {
        e = indexedDB.deleteDatabase(e);
        return t && e.addEventListener("blocked", e => t(e.oldVersion, e)), wrap(e).then(() => {})
    }
    let readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"],
        writeMethods = ["put", "add", "delete", "clear"],
        cachedMethods = new Map;

    function getMethod(e, t) {
        if (e instanceof IDBDatabase && !(t in e) && "string" == typeof t) {
            if (cachedMethods.get(t)) return cachedMethods.get(t);
            let r = t.replace(/FromIndex$/, ""),
                a = t !== r,
                s = writeMethods.includes(r);
            return r in (a ? IDBIndex : IDBObjectStore).prototype && (s || readMethods.includes(r)) ? (e = function(n, ...i) {
                return __async(function*() {
                    var e = this.transaction(n, s ? "readwrite" : "readonly");
                    let t = e.store;
                    return a && (t = t.index(i.shift())), (yield Promise.all([t[r](...i), s && e.done]))[0]
                }.call(this))
            }, cachedMethods.set(t, e), e) : void 0
        }
    }
    replaceTraps(i => ({ ...i,
        get: (e, t, n) => getMethod(e, t) || i.get(e, t, n),
        has: (e, t) => !!getMethod(e, t) || i.has(e, t)
    }));
    class PlatformLoggerServiceImpl {
        constructor(e) {
            this.container = e
        }
        getPlatformInfoString() {
            return this.container.getProviders().map(e => isVersionServiceProvider(e) ? (e = e.getImmediate()).library + "/" + e.version : null).filter(e => e).join(" ")
        }
    }

    function isVersionServiceProvider(e) {
        e = e.getComponent();
        return "VERSION" === (null == e ? void 0 : e.type)
    }
    let name$o = "@firebase/app",
        version$1 = "0.10.0",
        logger = new Logger("@firebase/app"),
        name$n = "@firebase/app-compat",
        name$m = "@firebase/analytics-compat",
        name$l = "@firebase/analytics",
        name$k = "@firebase/app-check-compat",
        name$j = "@firebase/app-check",
        name$i = "@firebase/auth",
        name$h = "@firebase/auth-compat",
        name$g = "@firebase/database",
        name$f = "@firebase/database-compat",
        name$e = "@firebase/functions",
        name$d = "@firebase/functions-compat",
        name$c = "@firebase/installations",
        name$b = "@firebase/installations-compat",
        name$a = "@firebase/messaging",
        name$9 = "@firebase/messaging-compat",
        name$8 = "@firebase/performance",
        name$7 = "@firebase/performance-compat",
        name$6 = "@firebase/remote-config",
        name$5 = "@firebase/remote-config-compat",
        name$4 = "@firebase/storage",
        name$3 = "@firebase/storage-compat",
        name$2 = "@firebase/firestore",
        name$1 = "@firebase/firestore-compat",
        name = "firebase",
        DEFAULT_ENTRY_NAME$1 = "[DEFAULT]",
        PLATFORM_LOG_STRING = {
            [name$o]: "fire-core",
            [name$n]: "fire-core-compat",
            [name$l]: "fire-analytics",
            [name$m]: "fire-analytics-compat",
            [name$j]: "fire-app-check",
            [name$k]: "fire-app-check-compat",
            [name$i]: "fire-auth",
            [name$h]: "fire-auth-compat",
            [name$g]: "fire-rtdb",
            [name$f]: "fire-rtdb-compat",
            [name$e]: "fire-fn",
            [name$d]: "fire-fn-compat",
            [name$c]: "fire-iid",
            [name$b]: "fire-iid-compat",
            [name$a]: "fire-fcm",
            [name$9]: "fire-fcm-compat",
            [name$8]: "fire-perf",
            [name$7]: "fire-perf-compat",
            [name$6]: "fire-rc",
            [name$5]: "fire-rc-compat",
            [name$4]: "fire-gcs",
            [name$3]: "fire-gcs-compat",
            [name$2]: "fire-fst",
            [name$1]: "fire-fst-compat",
            "fire-js": "fire-js",
            [name]: "fire-js-all"
        },
        _apps = new Map,
        _serverApps = new Map,
        _components = new Map;

    function _addComponent(t, n) {
        try {
            t.container.addComponent(n)
        } catch (e) {
            logger.debug(`Component ${n.name} failed to register with FirebaseApp ` + t.name, e)
        }
    }

    function _registerComponent(e) {
        var t = e.name;
        if (_components.has(t)) logger.debug(`There were multiple attempts to register component ${t}.`);
        else {
            _components.set(t, e);
            for (var n of _apps.values()) _addComponent(n, e);
            for (var i of _serverApps.values()) _addComponent(i, e)
        }
    }

    function _getProvider(e, t) {
        var n = e.container.getProvider("heartbeat").getImmediate({
            optional: !0
        });
        return n && n.triggerHeartbeat(), e.container.getProvider(t)
    }
    let ERRORS = {
            "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
            "bad-app-name": "Illegal App name: '{$appName}'",
            "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
            "app-deleted": "Firebase App named '{$appName}' already deleted",
            "server-app-deleted": "Firebase Server App has been deleted",
            "no-options": "Need to provide options, when not being deployed to hosting via source.",
            "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
            "invalid-log-argument": "First argument to `onLog` must be null or a function.",
            "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
            "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
            "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
            "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
            "finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
            "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments."
        },
        ERROR_FACTORY = new ErrorFactory("app", "Firebase", ERRORS);
    class FirebaseAppImpl {
        constructor(e, t, n) {
            this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, t), this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = n, this.container.addComponent(new Component("app", () => this, "PUBLIC"))
        }
        get automaticDataCollectionEnabled() {
            return this.checkDestroyed(), this._automaticDataCollectionEnabled
        }
        set automaticDataCollectionEnabled(e) {
            this.checkDestroyed(), this._automaticDataCollectionEnabled = e
        }
        get name() {
            return this.checkDestroyed(), this._name
        }
        get options() {
            return this.checkDestroyed(), this._options
        }
        get config() {
            return this.checkDestroyed(), this._config
        }
        get container() {
            return this._container
        }
        get isDeleted() {
            return this._isDeleted
        }
        set isDeleted(e) {
            this._isDeleted = e
        }
        checkDestroyed() {
            if (this.isDeleted) throw ERROR_FACTORY.create("app-deleted", {
                appName: this._name
            })
        }
    }

    function initializeApp(e, t = {}) {
        let n = e;
        if ("object" != typeof t) {
            let e = t;
            t = {
                name: e
            }
        }
        e = Object.assign({
            name: DEFAULT_ENTRY_NAME$1,
            automaticDataCollectionEnabled: !1
        }, t);
        let i = e.name;
        if ("string" != typeof i || !i) throw ERROR_FACTORY.create("bad-app-name", {
            appName: String(i)
        });
        if (!(n = n || getDefaultAppConfig())) throw ERROR_FACTORY.create("no-options");
        t = _apps.get(i);
        if (t) {
            if (deepEqual(n, t.options) && deepEqual(e, t.config)) return t;
            throw ERROR_FACTORY.create("duplicate-app", {
                appName: i
            })
        }
        var r, a = new ComponentContainer(i);
        for (r of _components.values()) a.addComponent(r);
        t = new FirebaseAppImpl(n, e, a);
        return _apps.set(i, t), t
    }

    function getApp(e = DEFAULT_ENTRY_NAME$1) {
        var t = _apps.get(e);
        if (!t && e === DEFAULT_ENTRY_NAME$1 && getDefaultAppConfig()) return initializeApp();
        if (t) return t;
        throw ERROR_FACTORY.create("no-app", {
            appName: e
        })
    }

    function getApps() {
        return Array.from(_apps.values())
    }

    function registerVersion(e, t, n) {
        let i, r = null != (i = PLATFORM_LOG_STRING[e]) ? i : e;
        n && (r += "-" + n);
        var a, e = r.match(/\s|\//),
            n = t.match(/\s|\//);
        e || n ? (a = [`Unable to register library "${r}" with version "${t}":`], e && a.push(`library name "${r}" contains illegal characters (whitespace or "/")`), e && n && a.push("and"), n && a.push(`version name "${t}" contains illegal characters (whitespace or "/")`), logger.warn(a.join(" "))) : _registerComponent(new Component(r + "-version", () => ({
            library: r,
            version: t
        }), "VERSION"))
    }
    let DB_NAME = "firebase-heartbeat-database",
        DB_VERSION = 1,
        STORE_NAME = "firebase-heartbeat-store",
        dbPromise = null;

    function getDbPromise() {
        return dbPromise = dbPromise || openDB(DB_NAME, DB_VERSION, {
            upgrade: (e, t) => {
                if (0 === t) try {
                    e.createObjectStore(STORE_NAME)
                } catch (e) {
                    console.warn(e)
                }
            }
        }).catch(e => {
            throw ERROR_FACTORY.create("idb-open", {
                originalErrorMessage: e.message
            })
        })
    }

    function readHeartbeatsFromIndexedDB(n) {
        return __async(function*() {
            try {
                var t = (yield getDbPromise()).transaction(STORE_NAME),
                    e = yield t.objectStore(STORE_NAME).get(computeKey(n));
                return yield t.done, e
            } catch (e) {
                e instanceof FirebaseError ? logger.warn(e.message) : (t = ERROR_FACTORY.create("idb-get", {
                    originalErrorMessage: null == e ? void 0 : e.message
                }), logger.warn(t.message))
            }
        }())
    }

    function writeHeartbeatsToIndexedDB(e, n) {
        return __async(function*() {
            try {
                var t = (yield getDbPromise()).transaction(STORE_NAME, "readwrite");
                yield t.objectStore(STORE_NAME).put(n, computeKey(e)), yield t.done
            } catch (e) {
                e instanceof FirebaseError ? logger.warn(e.message) : (t = ERROR_FACTORY.create("idb-set", {
                    originalErrorMessage: null == e ? void 0 : e.message
                }), logger.warn(t.message))
            }
        }())
    }

    function computeKey(e) {
        return e.name + "!" + e.options.appId
    }
    let MAX_HEADER_BYTES = 1024,
        STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 2592e6;
    class HeartbeatServiceImpl {
        constructor(e) {
            this.container = e, this._heartbeatsCache = null;
            e = this.container.getProvider("app").getImmediate();
            this._storage = new HeartbeatStorageImpl(e), this._heartbeatsCachePromise = this._storage.read().then(e => this._heartbeatsCache = e)
        }
        triggerHeartbeat() {
            return __async(function*() {
                var e, t = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString();
                let n = getUTCDateString();
                if ((null != (null == (e = this._heartbeatsCache) ? void 0 : e.heartbeats) || (this._heartbeatsCache = yield this._heartbeatsCachePromise, null != (null == (e = this._heartbeatsCache) ? void 0 : e.heartbeats))) && this._heartbeatsCache.lastSentHeartbeatDate !== n && !this._heartbeatsCache.heartbeats.some(e => e.date === n)) return this._heartbeatsCache.heartbeats.push({
                    date: n,
                    agent: t
                }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(e => {
                    e = new Date(e.date).valueOf();
                    return Date.now() - e <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS
                }), this._storage.overwrite(this._heartbeatsCache)
            }.call(this))
        }
        getHeartbeatsHeader() {
            return __async(function*() {
                var e, t, n;
                return null === this._heartbeatsCache && (yield this._heartbeatsCachePromise), null == (null == (e = this._heartbeatsCache) ? void 0 : e.heartbeats) || 0 === this._heartbeatsCache.heartbeats.length ? "" : (e = getUTCDateString(), {
                    heartbeatsToSend: n,
                    unsentEntries: t
                } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats), n = base64urlEncodeWithoutPadding(JSON.stringify({
                    version: 2,
                    heartbeats: n
                })), this._heartbeatsCache.lastSentHeartbeatDate = e, 0 < t.length ? (this._heartbeatsCache.heartbeats = t, yield this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), n)
            }.call(this))
        }
    }

    function getUTCDateString() {
        return (new Date).toISOString().substring(0, 10)
    }

    function extractHeartbeatsForHeader(e, n = MAX_HEADER_BYTES) {
        var i = [];
        let r = e.slice();
        for (let t of e) {
            var a = i.find(e => e.agent === t.agent);
            if (a) {
                if (a.dates.push(t.date), countBytes(i) > n) {
                    a.dates.pop();
                    break
                }
            } else if (i.push({
                    agent: t.agent,
                    dates: [t.date]
                }), countBytes(i) > n) {
                i.pop();
                break
            }
            r = r.slice(1)
        }
        return {
            heartbeatsToSend: i,
            unsentEntries: r
        }
    }
    class HeartbeatStorageImpl {
        constructor(e) {
            this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
        }
        runIndexedDBEnvironmentCheck() {
            return __async(function*() {
                return !!isIndexedDBAvailable() && validateIndexedDBOpenable().then(() => !0).catch(() => !1)
            }())
        }
        read() {
            return __async(function*() {
                var e;
                return (yield this._canUseIndexedDBPromise) && null != (e = yield readHeartbeatsFromIndexedDB(this.app)) && e.heartbeats ? e : {
                    heartbeats: []
                }
            }.call(this))
        }
        overwrite(n) {
            return __async(function*() {
                var e, t;
                if (yield this._canUseIndexedDBPromise) return t = yield this.read(), writeHeartbeatsToIndexedDB(this.app, {
                    lastSentHeartbeatDate: null != (e = n.lastSentHeartbeatDate) ? e : t.lastSentHeartbeatDate,
                    heartbeats: n.heartbeats
                })
            }.call(this))
        }
        add(n) {
            return __async(function*() {
                var e, t;
                if (yield this._canUseIndexedDBPromise) return t = yield this.read(), writeHeartbeatsToIndexedDB(this.app, {
                    lastSentHeartbeatDate: null != (e = n.lastSentHeartbeatDate) ? e : t.lastSentHeartbeatDate,
                    heartbeats: [...t.heartbeats, ...n.heartbeats]
                })
            }.call(this))
        }
    }

    function countBytes(e) {
        return base64urlEncodeWithoutPadding(JSON.stringify({
            version: 2,
            heartbeats: e
        })).length
    }

    function registerCoreComponents(e) {
        _registerComponent(new Component("platform-logger", e => new PlatformLoggerServiceImpl(e), "PRIVATE")), _registerComponent(new Component("heartbeat", e => new HeartbeatServiceImpl(e), "PRIVATE")), registerVersion(name$o, version$1, e), registerVersion(name$o, version$1, "esm2017"), registerVersion("fire-js", "")
    }
    registerCoreComponents("");
    var name$p = "firebase",
        version = "10.10.0",
        MessageType$1, MessageType;
    registerVersion(name$p, version, "app");
    let name$q = "@firebase/installations",
        version$2 = "0.6.6",
        PENDING_TIMEOUT_MS = 1e4,
        PACKAGE_VERSION = "w:" + version$2,
        INTERNAL_AUTH_VERSION = "FIS_v2",
        INSTALLATIONS_API_URL = "https://firebaseinstallations.googleapis.com/v1",
        TOKEN_EXPIRATION_BUFFER = 36e5,
        SERVICE = "installations",
        SERVICE_NAME = "Installations",
        ERROR_DESCRIPTION_MAP = {
            "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
            "not-registered": "Firebase Installation is not registered.",
            "installation-not-found": "Firebase Installation not found.",
            "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
            "app-offline": "Could not process request. Application offline.",
            "delete-pending-registration": "Can't delete installation while there is a pending registration request."
        },
        ERROR_FACTORY$1 = new ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);

    function isServerError(e) {
        return e instanceof FirebaseError && e.code.includes("request-failed")
    }

    function getInstallationsEndpoint({
        projectId: e
    }) {
        return INSTALLATIONS_API_URL + `/projects/${e}/installations`
    }

    function extractAuthTokenInfoFromResponse(e) {
        return {
            token: e.token,
            requestStatus: 2,
            expiresIn: getExpiresInFromResponseExpiresIn(e.expiresIn),
            creationTime: Date.now()
        }
    }

    function getErrorFromResponse(t, n) {
        return __async(function*() {
            var e = (yield n.json()).error;
            return ERROR_FACTORY$1.create("request-failed", {
                requestName: t,
                serverCode: e.code,
                serverMessage: e.message,
                serverStatus: e.status
            })
        }())
    }

    function getHeaders({
        apiKey: e
    }) {
        return new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-goog-api-key": e
        })
    }

    function getHeadersWithAuth(e, {
        refreshToken: t
    }) {
        e = getHeaders(e);
        return e.append("Authorization", getAuthorizationHeader(t)), e
    }

    function retryIfServerError(t) {
        return __async(function*() {
            var e = yield t();
            return 500 <= e.status && e.status < 600 ? t() : e
        }())
    }

    function getExpiresInFromResponseExpiresIn(e) {
        return Number(e.replace("s", "000"))
    }

    function getAuthorizationHeader(e) {
        return INTERNAL_AUTH_VERSION + " " + e
    }

    function createInstallationRequest({
        appConfig: r,
        heartbeatServiceProvider: a
    }, {
        fid: s
    }) {
        return __async(function*() {
            let e = getInstallationsEndpoint(r);
            var t = getHeaders(r),
                n = a.getImmediate({
                    optional: !0
                }),
                n = (n && (n = yield n.getHeartbeatsHeader()) && t.append("x-firebase-client", n), {
                    fid: s,
                    authVersion: INTERNAL_AUTH_VERSION,
                    appId: r.appId,
                    sdkVersion: PACKAGE_VERSION
                });
            let i = {
                method: "POST",
                headers: t,
                body: JSON.stringify(n)
            };
            t = yield retryIfServerError(() => fetch(e, i));
            if (t.ok) return {
                fid: (n = yield t.json()).fid || s,
                registrationStatus: 2,
                refreshToken: n.refreshToken,
                authToken: extractAuthTokenInfoFromResponse(n.authToken)
            };
            throw yield getErrorFromResponse("Create Installation", t)
        }())
    }

    function sleep(t) {
        return new Promise(e => {
            setTimeout(e, t)
        })
    }

    function bufferToBase64UrlSafe(e) {
        return btoa(String.fromCharCode(...e)).replace(/\+/g, "-").replace(/\//g, "_")
    }
    let VALID_FID_PATTERN = /^[cdef][\w-]{21}$/,
        INVALID_FID = "";

    function generateFid() {
        try {
            var e = new Uint8Array(17),
                t = ((self.crypto || self.msCrypto).getRandomValues(e), e[0] = 112 + e[0] % 16, encode(e));
            return VALID_FID_PATTERN.test(t) ? t : INVALID_FID
        } catch (e) {
            return INVALID_FID
        }
    }

    function encode(e) {
        return bufferToBase64UrlSafe(e).substr(0, 22)
    }

    function getKey(e) {
        return e.appName + "!" + e.appId
    }
    let fidChangeCallbacks = new Map;

    function fidChanged(e, t) {
        e = getKey(e);
        callFidChangeCallbacks(e, t), broadcastFidChange(e, t)
    }

    function callFidChangeCallbacks(e, t) {
        e = fidChangeCallbacks.get(e);
        if (e)
            for (var n of e) n(t)
    }

    function broadcastFidChange(e, t) {
        var n = getBroadcastChannel();
        n && n.postMessage({
            key: e,
            fid: t
        }), closeBroadcastChannel()
    }
    let broadcastChannel = null;

    function getBroadcastChannel() {
        return !broadcastChannel && "BroadcastChannel" in self && ((broadcastChannel = new BroadcastChannel("[Firebase] FID Change")).onmessage = e => {
            callFidChangeCallbacks(e.data.key, e.data.fid)
        }), broadcastChannel
    }

    function closeBroadcastChannel() {
        0 === fidChangeCallbacks.size && broadcastChannel && (broadcastChannel.close(), broadcastChannel = null)
    }
    let DATABASE_NAME = "firebase-installations-database",
        DATABASE_VERSION = 1,
        OBJECT_STORE_NAME = "firebase-installations-store",
        dbPromise$1 = null;

    function getDbPromise$1() {
        return dbPromise$1 = dbPromise$1 || openDB(DATABASE_NAME, DATABASE_VERSION, {
            upgrade: (e, t) => {
                0 === t && e.createObjectStore(OBJECT_STORE_NAME)
            }
        })
    }

    function set(r, a) {
        return __async(function*() {
            var e = getKey(r),
                t = (yield getDbPromise$1()).transaction(OBJECT_STORE_NAME, "readwrite"),
                n = t.objectStore(OBJECT_STORE_NAME),
                i = yield n.get(e);
            return yield n.put(a, e), yield t.done, i && i.fid === a.fid || fidChanged(r, a.fid), a
        }())
    }

    function remove(n) {
        return __async(function*() {
            var e = getKey(n),
                t = (yield getDbPromise$1()).transaction(OBJECT_STORE_NAME, "readwrite");
            yield t.objectStore(OBJECT_STORE_NAME).delete(e), yield t.done
        }())
    }

    function update(a, s) {
        return __async(function*() {
            var e = getKey(a),
                t = (yield getDbPromise$1()).transaction(OBJECT_STORE_NAME, "readwrite"),
                n = t.objectStore(OBJECT_STORE_NAME),
                i = yield n.get(e), r = s(i);
            return void 0 === r ? yield n.delete(e): yield n.put(r, e), yield t.done, !r || i && i.fid === r.fid || fidChanged(a, r.fid), r
        }())
    }

    function getInstallationEntry(n) {
        return __async(function*() {
            let t;
            var e = yield update(n.appConfig, e => {
                e = updateOrCreateInstallationEntry(e), e = triggerRegistrationIfNecessary(n, e);
                return t = e.registrationPromise, e.installationEntry
            });
            return e.fid === INVALID_FID ? {
                installationEntry: yield t
            } : {
                installationEntry: e,
                registrationPromise: t
            }
        }())
    }

    function updateOrCreateInstallationEntry(e) {
        return clearTimedOutRequest(e || {
            fid: generateFid(),
            registrationStatus: 0
        })
    }

    function triggerRegistrationIfNecessary(e, t) {
        var n;
        return 0 === t.registrationStatus ? navigator.onLine ? {
            installationEntry: n = {
                fid: t.fid,
                registrationStatus: 1,
                registrationTime: Date.now()
            },
            registrationPromise: registerInstallation(e, n)
        } : {
            installationEntry: t,
            registrationPromise: Promise.reject(ERROR_FACTORY$1.create("app-offline"))
        } : 1 === t.registrationStatus ? {
            installationEntry: t,
            registrationPromise: waitUntilFidRegistration(e)
        } : {
            installationEntry: t
        }
    }

    function registerInstallation(t, n) {
        return __async(function*() {
            try {
                var e = yield createInstallationRequest(t, n);
                return set(t.appConfig, e)
            } catch (e) {
                throw isServerError(e) && 409 === e.customData.serverCode ? yield remove(t.appConfig): yield set(t.appConfig, {
                    fid: n.fid,
                    registrationStatus: 0
                }), e
            }
        }())
    }

    function waitUntilFidRegistration(i) {
        return __async(function*() {
            let e = yield updateInstallationRequest(i.appConfig);
            for (; 1 === e.registrationStatus;) yield sleep(100), e = yield updateInstallationRequest(i.appConfig);
            var t, n;
            return 0 === e.registrationStatus ? ({
                installationEntry: t,
                registrationPromise: n
            } = yield getInstallationEntry(i), n || t) : e
        }())
    }

    function updateInstallationRequest(e) {
        return update(e, e => {
            if (e) return clearTimedOutRequest(e);
            throw ERROR_FACTORY$1.create("installation-not-found")
        })
    }

    function clearTimedOutRequest(e) {
        return hasInstallationRequestTimedOut(e) ? {
            fid: e.fid,
            registrationStatus: 0
        } : e
    }

    function hasInstallationRequestTimedOut(e) {
        return 1 === e.registrationStatus && e.registrationTime + PENDING_TIMEOUT_MS < Date.now()
    }

    function generateAuthTokenRequest({
        appConfig: r,
        heartbeatServiceProvider: a
    }, s) {
        return __async(function*() {
            let e = getGenerateAuthTokenEndpoint(r, s);
            var t = getHeadersWithAuth(r, s),
                n = a.getImmediate({
                    optional: !0
                }),
                n = (n && (n = yield n.getHeartbeatsHeader()) && t.append("x-firebase-client", n), {
                    installation: {
                        sdkVersion: PACKAGE_VERSION,
                        appId: r.appId
                    }
                });
            let i = {
                method: "POST",
                headers: t,
                body: JSON.stringify(n)
            };
            t = yield retryIfServerError(() => fetch(e, i));
            if (t.ok) return extractAuthTokenInfoFromResponse(yield t.json());
            throw yield getErrorFromResponse("Generate Auth Token", t)
        }())
    }

    function getGenerateAuthTokenEndpoint(e, {
        fid: t
    }) {
        return getInstallationsEndpoint(e) + `/${t}/authTokens:generate`
    }

    function refreshAuthToken(i, r = !1) {
        return __async(function*() {
            let n;
            var e = yield update(i.appConfig, e => {
                if (!isEntryRegistered(e)) throw ERROR_FACTORY$1.create("not-registered");
                var t = e.authToken;
                if (!r && isAuthTokenValid(t)) return e;
                if (1 === t.requestStatus) return n = waitUntilAuthTokenRequest(i, r), e;
                if (navigator.onLine) return t = makeAuthTokenRequestInProgressEntry(e), n = fetchAuthTokenFromServer(i, t), t;
                throw ERROR_FACTORY$1.create("app-offline")
            });
            return n ? yield n: e.authToken
        }())
    }

    function waitUntilAuthTokenRequest(n, i) {
        return __async(function*() {
            let e = yield updateAuthTokenRequest(n.appConfig);
            for (; 1 === e.authToken.requestStatus;) yield sleep(100), e = yield updateAuthTokenRequest(n.appConfig);
            var t = e.authToken;
            return 0 === t.requestStatus ? refreshAuthToken(n, i) : t
        }())
    }

    function updateAuthTokenRequest(e) {
        return update(e, e => {
            if (isEntryRegistered(e)) return hasAuthTokenRequestTimedOut(e.authToken) ? Object.assign(Object.assign({}, e), {
                authToken: {
                    requestStatus: 0
                }
            }) : e;
            throw ERROR_FACTORY$1.create("not-registered")
        })
    }

    function fetchAuthTokenFromServer(n, i) {
        return __async(function*() {
            try {
                var e = yield generateAuthTokenRequest(n, i), t = Object.assign(Object.assign({}, i), {
                    authToken: e
                });
                return yield set(n.appConfig, t), e
            } catch (e) {
                throw !isServerError(e) || 401 !== e.customData.serverCode && 404 !== e.customData.serverCode ? (t = Object.assign(Object.assign({}, i), {
                    authToken: {
                        requestStatus: 0
                    }
                }), yield set(n.appConfig, t)) : yield remove(n.appConfig), e
            }
        }())
    }

    function isEntryRegistered(e) {
        return void 0 !== e && 2 === e.registrationStatus
    }

    function isAuthTokenValid(e) {
        return 2 === e.requestStatus && !isAuthTokenExpired(e)
    }

    function isAuthTokenExpired(e) {
        var t = Date.now();
        return t < e.creationTime || e.creationTime + e.expiresIn < t + TOKEN_EXPIRATION_BUFFER
    }

    function makeAuthTokenRequestInProgressEntry(e) {
        var t = {
            requestStatus: 1,
            requestTime: Date.now()
        };
        return Object.assign(Object.assign({}, e), {
            authToken: t
        })
    }

    function hasAuthTokenRequestTimedOut(e) {
        return 1 === e.requestStatus && e.requestTime + PENDING_TIMEOUT_MS < Date.now()
    }

    function getId(i) {
        return __async(function*() {
            var e = i,
                {
                    installationEntry: t,
                    registrationPromise: n
                } = yield getInstallationEntry(e);
            return (n || refreshAuthToken(e)).catch(console.error), t.fid
        }())
    }

    function getToken(t, n = !1) {
        return __async(function*() {
            var e = t,
                e = (yield completeInstallationRegistration(e), yield refreshAuthToken(e, n));
            return e.token
        }())
    }

    function completeInstallationRegistration(t) {
        return __async(function*() {
            var e = (yield getInstallationEntry(t)).registrationPromise;
            e && (yield e)
        }())
    }

    function extractAppConfig(e) {
        if (!e || !e.options) throw getMissingValueError("App Configuration");
        if (!e.name) throw getMissingValueError("App Name");
        var t;
        for (t of ["projectId", "apiKey", "appId"])
            if (!e.options[t]) throw getMissingValueError(t);
        return {
            appName: e.name,
            projectId: e.options.projectId,
            apiKey: e.options.apiKey,
            appId: e.options.appId
        }
    }

    function getMissingValueError(e) {
        return ERROR_FACTORY$1.create("missing-app-config-values", {
            valueName: e
        })
    }
    let INSTALLATIONS_NAME = "installations",
        INSTALLATIONS_NAME_INTERNAL = "installations-internal",
        publicFactory = e => {
            e = e.getProvider("app").getImmediate();
            return {
                app: e,
                appConfig: extractAppConfig(e),
                heartbeatServiceProvider: _getProvider(e, "heartbeat"),
                _delete: () => Promise.resolve()
            }
        },
        internalFactory = e => {
            let t = _getProvider(e.getProvider("app").getImmediate(), INSTALLATIONS_NAME).getImmediate();
            return {
                getId: () => getId(t),
                getToken: e => getToken(t, e)
            }
        };

    function registerInstallations() {
        _registerComponent(new Component(INSTALLATIONS_NAME, publicFactory, "PUBLIC")), _registerComponent(new Component(INSTALLATIONS_NAME_INTERNAL, internalFactory, "PRIVATE"))
    }
    registerInstallations(), registerVersion(name$q, version$2), registerVersion(name$q, version$2, "esm2017");
    let DEFAULT_SW_PATH = "/firebase-messaging-sw.js",
        DEFAULT_SW_SCOPE = "/firebase-cloud-messaging-push-scope",
        DEFAULT_VAPID_KEY = "BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",
        ENDPOINT = "https://fcmregistrations.googleapis.com/v1",
        CONSOLE_CAMPAIGN_ID = "google.c.a.c_id",
        CONSOLE_CAMPAIGN_NAME = "google.c.a.c_l",
        CONSOLE_CAMPAIGN_TIME = "google.c.a.ts",
        CONSOLE_CAMPAIGN_ANALYTICS_ENABLED = "google.c.a.e";

    function arrayToBase64(e) {
        e = new Uint8Array(e);
        return btoa(String.fromCharCode(...e)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
    }

    function base64ToArray(e) {
        var e = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
            t = atob(e),
            n = new Uint8Array(t.length);
        for (let e = 0; e < t.length; ++e) n[e] = t.charCodeAt(e);
        return n
    }(e => {
        e[e.DATA_MESSAGE = 1] = "DATA_MESSAGE", e[e.DISPLAY_NOTIFICATION = 3] = "DISPLAY_NOTIFICATION"
    })(MessageType$1 = MessageType$1 || {}), (e => {
        e.PUSH_RECEIVED = "push-received", e.NOTIFICATION_CLICKED = "notification-clicked"
    })(MessageType = MessageType || {});
    let OLD_DB_NAME = "fcm_token_details_db",
        OLD_DB_VERSION = 5,
        OLD_OBJECT_STORE_NAME = "fcm_token_object_Store";

    function migrateOldDatabase(o) {
        return __async(function*() {
            if ("databases" in indexedDB && !(yield indexedDB.databases()).map(e => e.name).includes(OLD_DB_NAME)) return null;
            let s = null;
            return (yield openDB(OLD_DB_NAME, OLD_DB_VERSION, {
                upgrade: (i, r, e, a) => __async(function*() {
                    var e, t, n;
                    r < 2 || i.objectStoreNames.contains(OLD_OBJECT_STORE_NAME) && (e = yield(n = a.objectStore(OLD_OBJECT_STORE_NAME)).index("fcmSenderId").get(o), yield n.clear(), e) && (2 === r ? (n = e).auth && n.p256dh && n.endpoint && (s = {
                        token: n.fcmToken,
                        createTime: null != (t = n.createTime) ? t : Date.now(),
                        subscriptionOptions: {
                            auth: n.auth,
                            p256dh: n.p256dh,
                            endpoint: n.endpoint,
                            swScope: n.swScope,
                            vapidKey: "string" == typeof n.vapidKey ? n.vapidKey : arrayToBase64(n.vapidKey)
                        }
                    }) : 3 === r ? (t = e, s = {
                        token: t.fcmToken,
                        createTime: t.createTime,
                        subscriptionOptions: {
                            auth: arrayToBase64(t.auth),
                            p256dh: arrayToBase64(t.p256dh),
                            endpoint: t.endpoint,
                            swScope: t.swScope,
                            vapidKey: arrayToBase64(t.vapidKey)
                        }
                    }) : 4 === r && (n = e, s = {
                        token: n.fcmToken,
                        createTime: n.createTime,
                        subscriptionOptions: {
                            auth: arrayToBase64(n.auth),
                            p256dh: arrayToBase64(n.p256dh),
                            endpoint: n.endpoint,
                            swScope: n.swScope,
                            vapidKey: arrayToBase64(n.vapidKey)
                        }
                    }))
                }())
            })).close(), yield deleteDB(OLD_DB_NAME), yield deleteDB("fcm_vapid_details_db"), yield deleteDB("undefined"), checkTokenDetails(s) ? s : null
        }())
    }

    function checkTokenDetails(e) {
        var t;
        if (e && e.subscriptionOptions) return t = e.subscriptionOptions, "number" == typeof e.createTime && 0 < e.createTime && "string" == typeof e.token && 0 < e.token.length && "string" == typeof t.auth && 0 < t.auth.length && "string" == typeof t.p256dh && 0 < t.p256dh.length && "string" == typeof t.endpoint && 0 < t.endpoint.length && "string" == typeof t.swScope && 0 < t.swScope.length && "string" == typeof t.vapidKey && 0 < t.vapidKey.length
    }
    let DATABASE_NAME$1 = "firebase-messaging-database",
        DATABASE_VERSION$1 = 1,
        OBJECT_STORE_NAME$1 = "firebase-messaging-store",
        dbPromise$2 = null;

    function getDbPromise$2() {
        return dbPromise$2 = dbPromise$2 || openDB(DATABASE_NAME$1, DATABASE_VERSION$1, {
            upgrade: (e, t) => {
                0 === t && e.createObjectStore(OBJECT_STORE_NAME$1)
            }
        })
    }

    function dbGet(t) {
        return __async(function*() {
            var e = getKey$1(t),
                e = yield(yield getDbPromise$2()).transaction(OBJECT_STORE_NAME$1).objectStore(OBJECT_STORE_NAME$1).get(e);
            return e || ((e = yield migrateOldDatabase(t.appConfig.senderId)) ? (yield dbSet(t, e), e) : void 0)
        }())
    }

    function dbSet(n, i) {
        return __async(function*() {
            var e = getKey$1(n),
                t = (yield getDbPromise$2()).transaction(OBJECT_STORE_NAME$1, "readwrite");
            return yield t.objectStore(OBJECT_STORE_NAME$1).put(i, e), yield t.done, i
        }())
    }

    function dbRemove(n) {
        return __async(function*() {
            var e = getKey$1(n),
                t = (yield getDbPromise$2()).transaction(OBJECT_STORE_NAME$1, "readwrite");
            yield t.objectStore(OBJECT_STORE_NAME$1).delete(e), yield t.done
        }())
    }

    function getKey$1({
        appConfig: e
    }) {
        return e.appId
    }
    let ERROR_MAP = {
            "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
            "only-available-in-window": "This method is available in a Window context.",
            "only-available-in-sw": "This method is available in a service worker context.",
            "permission-default": "The notification permission was not granted and dismissed instead.",
            "permission-blocked": "The notification permission was not granted and blocked instead.",
            "unsupported-browser": "This browser doesn't support the API's required to use the Firebase SDK.",
            "indexed-db-unsupported": "This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",
            "failed-service-worker-registration": "We are unable to register the default service worker. {$browserErrorMessage}",
            "token-subscribe-failed": "A problem occurred while subscribing the user to FCM: {$errorInfo}",
            "token-subscribe-no-token": "FCM returned no token when subscribing the user to push.",
            "token-unsubscribe-failed": "A problem occurred while unsubscribing the user from FCM: {$errorInfo}",
            "token-update-failed": "A problem occurred while updating the user from FCM: {$errorInfo}",
            "token-update-no-token": "FCM returned no token when updating the user to push.",
            "use-sw-after-get-token": "The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",
            "invalid-sw-registration": "The input to useServiceWorker() must be a ServiceWorkerRegistration.",
            "invalid-bg-handler": "The input to setBackgroundMessageHandler() must be a function.",
            "invalid-vapid-key": "The public VAPID key must be a string.",
            "use-vapid-key-after-get-token": "The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."
        },
        ERROR_FACTORY$2 = new ErrorFactory("messaging", "Messaging", ERROR_MAP);

    function requestGetToken(r, a) {
        return __async(function*() {
            var e = yield getHeaders$1(r), t = getBody(a), e = {
                method: "POST",
                headers: e,
                body: JSON.stringify(t)
            };
            let n;
            try {
                var i = yield fetch(getEndpoint(r.appConfig), e);
                n = yield i.json()
            } catch (e) {
                throw ERROR_FACTORY$2.create("token-subscribe-failed", {
                    errorInfo: null == e ? void 0 : e.toString()
                })
            }
            if (n.error) throw t = n.error.message, ERROR_FACTORY$2.create("token-subscribe-failed", {
                errorInfo: t
            });
            if (n.token) return n.token;
            throw ERROR_FACTORY$2.create("token-subscribe-no-token")
        }())
    }

    function requestUpdateToken(r, a) {
        return __async(function*() {
            var e = yield getHeaders$1(r), t = getBody(a.subscriptionOptions), e = {
                method: "PATCH",
                headers: e,
                body: JSON.stringify(t)
            };
            let n;
            try {
                var i = yield fetch(getEndpoint(r.appConfig) + "/" + a.token, e);
                n = yield i.json()
            } catch (e) {
                throw ERROR_FACTORY$2.create("token-update-failed", {
                    errorInfo: null == e ? void 0 : e.toString()
                })
            }
            if (n.error) throw t = n.error.message, ERROR_FACTORY$2.create("token-update-failed", {
                errorInfo: t
            });
            if (n.token) return n.token;
            throw ERROR_FACTORY$2.create("token-update-no-token")
        }())
    }

    function requestDeleteToken(i, r) {
        return __async(function*() {
            var e = {
                method: "DELETE",
                headers: yield getHeaders$1(i)
            };
            try {
                var t, n = yield(yield fetch(getEndpoint(i.appConfig) + "/" + r, e)).json();
                if (n.error) throw t = n.error.message, ERROR_FACTORY$2.create("token-unsubscribe-failed", {
                    errorInfo: t
                })
            } catch (e) {
                throw ERROR_FACTORY$2.create("token-unsubscribe-failed", {
                    errorInfo: null == e ? void 0 : e.toString()
                })
            }
        }())
    }

    function getEndpoint({
        projectId: e
    }) {
        return ENDPOINT + `/projects/${e}/registrations`
    }

    function getHeaders$1({
        appConfig: t,
        installations: n
    }) {
        return __async(function*() {
            var e = yield n.getToken();
            return new Headers({
                "Content-Type": "application/json",
                Accept: "application/json",
                "x-goog-api-key": t.apiKey,
                "x-goog-firebase-installations-auth": "FIS " + e
            })
        }())
    }

    function getBody({
        p256dh: e,
        auth: t,
        endpoint: n,
        vapidKey: i
    }) {
        n = {
            web: {
                endpoint: n,
                auth: t,
                p256dh: e
            }
        };
        return i !== DEFAULT_VAPID_KEY && (n.web.applicationPubKey = i), n
    }
    let TOKEN_EXPIRATION_MS = 6048e5;

    function getTokenInternal(n) {
        return __async(function*() {
            var e = yield getPushSubscription(n.swRegistration, n.vapidKey), e = {
                vapidKey: n.vapidKey,
                swScope: n.swRegistration.scope,
                endpoint: e.endpoint,
                auth: arrayToBase64(e.getKey("auth")),
                p256dh: arrayToBase64(e.getKey("p256dh"))
            }, t = yield dbGet(n.firebaseDependencies);
            if (t) {
                if (isTokenValid(t.subscriptionOptions, e)) return Date.now() >= t.createTime + TOKEN_EXPIRATION_MS ? updateToken(n, {
                    token: t.token,
                    createTime: Date.now(),
                    subscriptionOptions: e
                }) : t.token;
                try {
                    yield requestDeleteToken(n.firebaseDependencies, t.token)
                } catch (e) {
                    console.warn(e)
                }
            }
            return getNewToken(n.firebaseDependencies, e)
        }())
    }

    function deleteTokenInternal(t) {
        return __async(function*() {
            var e = yield dbGet(t.firebaseDependencies), e = (e && (yield requestDeleteToken(t.firebaseDependencies, e.token), yield dbRemove(t.firebaseDependencies)), yield t.swRegistration.pushManager.getSubscription());
            return !e || e.unsubscribe()
        }())
    }

    function updateToken(n, i) {
        return __async(function*() {
            try {
                var e = yield requestUpdateToken(n.firebaseDependencies, i), t = Object.assign(Object.assign({}, i), {
                    token: e,
                    createTime: Date.now()
                });
                return yield dbSet(n.firebaseDependencies, t), e
            } catch (e) {
                throw yield deleteTokenInternal(n), e
            }
        }())
    }

    function getNewToken(t, n) {
        return __async(function*() {
            var e = {
                token: yield requestGetToken(t, n), createTime: Date.now(), subscriptionOptions: n
            };
            return yield dbSet(t, e), e.token
        }())
    }

    function getPushSubscription(t, n) {
        return __async(function*() {
            var e = yield t.pushManager.getSubscription();
            return e || t.pushManager.subscribe({
                userVisibleOnly: !0,
                applicationServerKey: base64ToArray(n)
            })
        }())
    }

    function isTokenValid(e, t) {
        return t.vapidKey === e.vapidKey && t.endpoint === e.endpoint && t.auth === e.auth && t.p256dh === e.p256dh
    }

    function externalizePayload(e) {
        var t = {
            from: e.from,
            collapseKey: e.collapse_key,
            messageId: e.fcmMessageId
        };
        return propagateNotificationPayload(t, e), propagateDataPayload(t, e), propagateFcmOptions(t, e), t
    }

    function propagateNotificationPayload(e, t) {
        var n;
        t.notification && (e.notification = {}, (n = t.notification.title) && (e.notification.title = n), (n = t.notification.body) && (e.notification.body = n), (n = t.notification.image) && (e.notification.image = n), n = t.notification.icon) && (e.notification.icon = n)
    }

    function propagateDataPayload(e, t) {
        t.data && (e.data = t.data)
    }

    function propagateFcmOptions(e, t) {
        var n;
        (t.fcmOptions || null != (n = t.notification) && n.click_action) && (e.fcmOptions = {}, (n = null != (n = null == (n = t.fcmOptions) ? void 0 : n.link) ? n : null == (n = t.notification) ? void 0 : n.click_action) && (e.fcmOptions.link = n), t = null == (n = t.fcmOptions) ? void 0 : n.analytics_label) && (e.fcmOptions.analyticsLabel = t)
    }

    function isConsoleMessage(e) {
        return "object" == typeof e && e && CONSOLE_CAMPAIGN_ID in e
    }

    function _mergeStrings(t, n) {
        var i = [];
        for (let e = 0; e < t.length; e++) i.push(t.charAt(e)), e < n.length && i.push(n.charAt(e));
        i.join("")
    }

    function extractAppConfig$1(e) {
        if (!e || !e.options) throw getMissingValueError$1("App Configuration Object");
        if (!e.name) throw getMissingValueError$1("App Name");
        var t, n = e.options;
        for (t of ["projectId", "apiKey", "appId", "messagingSenderId"])
            if (!n[t]) throw getMissingValueError$1(t);
        return {
            appName: e.name,
            projectId: n.projectId,
            apiKey: n.apiKey,
            appId: n.appId,
            senderId: n.messagingSenderId
        }
    }

    function getMissingValueError$1(e) {
        return ERROR_FACTORY$2.create("missing-app-config-values", {
            valueName: e
        })
    }
    _mergeStrings("hts/frbslgigp.ogepscmv/ieo/eaylg", "tp:/ieaeogn-agolai.o/1frlglgc/o"), _mergeStrings("AzSCbw63g1R0nCw85jG8", "Iaya3yLKwmgvh7cF0q4");
    class MessagingService {
        constructor(e, t, n) {
            this.deliveryMetricsExportedToBigQueryEnabled = !1, this.onBackgroundMessageHandler = null, this.onMessageHandler = null, this.logEvents = [], this.isLogServiceStarted = !1;
            var i = extractAppConfig$1(e);
            this.firebaseDependencies = {
                app: e,
                appConfig: i,
                installations: t,
                analyticsProvider: n
            }
        }
        _delete() {
            return Promise.resolve()
        }
    }

    function registerDefaultSw(e) {
        return __async(function*() {
            try {
                e.swRegistration = yield navigator.serviceWorker.register(DEFAULT_SW_PATH, {
                    scope: DEFAULT_SW_SCOPE
                }), e.swRegistration.update().catch(() => {})
            } catch (e) {
                throw ERROR_FACTORY$2.create("failed-service-worker-registration", {
                    browserErrorMessage: null == e ? void 0 : e.message
                })
            }
        }())
    }

    function updateSwReg(e, t) {
        return __async(function*() {
            if (t || e.swRegistration || (yield registerDefaultSw(e)), t || !e.swRegistration) {
                if (!(t instanceof ServiceWorkerRegistration)) throw ERROR_FACTORY$2.create("invalid-sw-registration");
                e.swRegistration = t
            }
        }())
    }

    function updateVapidKey(e, t) {
        return __async(function*() {
            t ? e.vapidKey = t : e.vapidKey || (e.vapidKey = DEFAULT_VAPID_KEY)
        }())
    }

    function getToken$1(e, t) {
        return __async(function*() {
            if (!navigator) throw ERROR_FACTORY$2.create("only-available-in-window");
            if ("default" === Notification.permission && (yield Notification.requestPermission()), "granted" !== Notification.permission) throw ERROR_FACTORY$2.create("permission-blocked");
            return yield updateVapidKey(e, null == t ? void 0 : t.vapidKey), yield updateSwReg(e, null == t ? void 0 : t.serviceWorkerRegistration), getTokenInternal(e)
        }())
    }

    function logToScion(t, n, i) {
        return __async(function*() {
            var e = getEventType(n);
            (yield t.firebaseDependencies.analyticsProvider.get()).logEvent(e, {
                message_id: i[CONSOLE_CAMPAIGN_ID],
                message_name: i[CONSOLE_CAMPAIGN_NAME],
                message_time: i[CONSOLE_CAMPAIGN_TIME],
                message_device_time: Math.floor(Date.now() / 1e3)
            })
        }())
    }

    function getEventType(e) {
        switch (e) {
            case MessageType.NOTIFICATION_CLICKED:
                return "notification_open";
            case MessageType.PUSH_RECEIVED:
                return "notification_foreground";
            default:
                throw new Error
        }
    }

    function messageEventListener(n, i) {
        return __async(function*() {
            var e, t = i.data;
            t.isFirebaseMessaging && (n.onMessageHandler && t.messageType === MessageType.PUSH_RECEIVED && ("function" == typeof n.onMessageHandler ? n.onMessageHandler(externalizePayload(t)) : n.onMessageHandler.next(externalizePayload(t))), isConsoleMessage(e = t.data)) && "1" === e[CONSOLE_CAMPAIGN_ANALYTICS_ENABLED] && (yield logToScion(n, t.messageType, e))
        }())
    }
    let name$r = "@firebase/messaging",
        version$3 = "0.12.7",
        WindowMessagingFactory = e => {
            let t = new MessagingService(e.getProvider("app").getImmediate(), e.getProvider("installations-internal").getImmediate(), e.getProvider("analytics-internal"));
            return navigator.serviceWorker.addEventListener("message", e => messageEventListener(t, e)), t
        },
        WindowMessagingInternalFactory = e => {
            let t = e.getProvider("messaging").getImmediate();
            return {
                getToken: e => getToken$1(t, e)
            }
        };

    function registerMessagingInWindow() {
        _registerComponent(new Component("messaging", WindowMessagingFactory, "PUBLIC")), _registerComponent(new Component("messaging-internal", WindowMessagingInternalFactory, "PRIVATE")), registerVersion(name$r, version$3), registerVersion(name$r, version$3, "esm2017")
    }

    function isWindowSupported() {
        return __async(function*() {
            try {
                yield validateIndexedDBOpenable()
            } catch (e) {
                return !1
            }
            return "undefined" != typeof window && isIndexedDBAvailable() && areCookiesEnabled() && "serviceWorker" in navigator && "PushManager" in window && "Notification" in window && "fetch" in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey")
        }())
    }

    function onMessage$1(e, t) {
        if (navigator) return e.onMessageHandler = t, () => {
            e.onMessageHandler = null
        };
        throw ERROR_FACTORY$2.create("only-available-in-window")
    }

    function getMessagingInWindow(e = getApp()) {
        return isWindowSupported().then(e => {
            if (!e) throw ERROR_FACTORY$2.create("unsupported-browser")
        }, e => {
            throw ERROR_FACTORY$2.create("indexed-db-unsupported")
        }), _getProvider(getModularInstance(e), "messaging").getImmediate()
    }

    function getToken$2(e, t) {
        return __async(function*() {
            return getToken$1(e = getModularInstance(e), t)
        }())
    }

    function onMessage(e, t) {
        onMessage$1(e = getModularInstance(e), t)
    }
    registerMessagingInWindow();
    var FCMMessaging = (() => {
            function e(e, t, n, i, r) {
                void 0 === r && (r = null);
                var a = this;
                if (this.messaging = null, this.bindToCustomWorkerDone = !1, "serviceWorker" in navigator && "PushManager" in window && "Notification" in window) {
                    this.log = e, this.PUBLIC_API_URL = n, this.serviceWorkerUrl = i, this.brand_key = r, this.FCM_CONFIG = t;
                    e = i.split("/"), n = (e.pop(), this.FCM_SCOPE_PATH = e.join("/"), this.log("FCM: init FCM with ", this.FCM_CONFIG.messagingSenderId, this.PUBLIC_API_URL, this.serviceWorkerUrl, this.brand_key), getApps(), initializeApp(__assign({}, t)));
                    try {
                        this.messaging = getMessagingInWindow(n)
                    } catch (e) {
                        this.messaging = null, this.log("FCM: Unable to get messaging object", e)
                    }
                    onMessage(this.messaging, function(n) {
                        return __awaiter(a, void 0, void 0, function() {
                            var t;
                            return __generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return this.log("Message received in foregraund", n), [4, navigator.serviceWorker.getRegistration(this.FCM_SCOPE_PATH + "/firebase-cloud-messaging-push-scope")];
                                    case 1:
                                        return t = e.sent(), this.log("Found ServiceWorker object", t), t.active.postMessage(n), [2]
                                }
                            })
                        })
                    })
                } else this.messaging = null
            }
            return e.prototype.getPushState = function() {
                return __awaiter(this, void 0, Promise, function() {
                    var t, n, i;
                    return __generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return null === this.messaging ? [2, {
                                    pushNotificationUserStatus: PushNotificationUserStatus.BROWSER_NOT_SUPPORTED,
                                    token: null,
                                    platform: Detector.getClientPlatform(),
                                    app_package_id: null
                                }] : (t = Notification ? {
                                    default: PushNotificationUserStatus.ASK,
                                    denied: PushNotificationUserStatus.BLOCKED,
                                    granted: PushNotificationUserStatus.ALLOWED
                                }[Notification.permission] : PushNotificationUserStatus.BROWSER_NOT_SUPPORTED, this.log("FCM: getPushState = ", PushNotificationUserStatus[t]), i = {
                                    pushNotificationUserStatus: t
                                }, t !== PushNotificationUserStatus.ALLOWED ? [3, 2] : [4, this.getPermissionAndToken(!0)]);
                            case 1:
                                return n = e.sent(), [3, 3];
                            case 2:
                                n = null, e.label = 3;
                            case 3:
                                return [2, (i.token = n, i.platform = Detector.getClientPlatform(), i.app_package_id = null, i)]
                        }
                    })
                })
            }, e.prototype.bindToCustomWorker = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var t;
                    return __generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return this.bindToCustomWorkerDone ? [3, 2] : (this.bindToCustomWorkerDone = !0, t = this.serviceWorkerUrl + "&senderId=".concat(this.FCM_CONFIG.messagingSenderId) + "&apiKey=".concat(this.FCM_CONFIG.apiKey) + "&appId=".concat(this.FCM_CONFIG.appId) + "&authDomain=".concat(this.FCM_CONFIG.authDomain) + "&databaseURL=".concat(this.FCM_CONFIG.databaseURL) + "&measurementId=".concat(this.FCM_CONFIG.measurementId) + "&storageBucket=".concat(this.FCM_CONFIG.storageBucket) + "&projectId=".concat(this.FCM_CONFIG.projectId) + (this.brand_key ? "&brand_key=" + this.brand_key : "") + "&reporting_url=".concat(encodeURIComponent(this.PUBLIC_API_URL)), this.log("FCM: registering service worker with url:", t), [4, navigator.serviceWorker.register(t, {
                                    scope: this.FCM_SCOPE_PATH + "/firebase-cloud-messaging-push-scope"
                                })]);
                            case 1:
                                t = e.sent(), this.log("FCM: bindToCustomWorker, service worker registered: ", t), this.workerRegistration = t, e.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            }, e.prototype.getPermissionAndToken = function(i) {
                return __awaiter(this, void 0, Promise, function() {
                    var t, n;
                    return __generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                if (null === this.messaging) return this.log("Unable to get permission in getPermissionAndToken"), [2, null];
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 8, , 9]), this.log("FCM: getPermissionAndToken, registering service worker.."), [4, this.bindToCustomWorker()];
                            case 2:
                                return (e.sent(), i) ? [3, 4] : (this.log("FCM: getPermissionAndToken, requestPermission"), [4, Notification.requestPermission()]);
                            case 3:
                                e.sent(), e.label = 4;
                            case 4:
                                return e.trys.push([4, 6, , 7]), this.log("FCM: getPermissionAndToken, getToken"), [4, getToken$2(this.messaging, {
                                    serviceWorkerRegistration: this.workerRegistration
                                })];
                            case 5:
                                return t = e.sent(), this.log("FCM: Token = ", t), [2, t];
                            case 6:
                                return t = e.sent(), this.log("Unable to get token", t), [2, null];
                            case 7:
                                return [3, 9];
                            case 8:
                                return n = e.sent(), this.log("Unable to get permission.", n), [2, null];
                            case 9:
                                return [2]
                        }
                    })
                })
            }, e
        })(),
        DpType, widgetShouldStayOpenDP = ((e => {
            e.AskPushPermissions = "ask_push_permissions", e.Ok = "ok", e.Cancel = "cancel", e.Close = "close", e.Go = "go", e.Inbox = "inbox", e.GfMain = "gf", e.Activity = "gf_activity", e.Missions = "gf_missions", e.Badges = "gf_badges", e.LeaderBoard = "gf_board", e.Tournaments = "gf_tournaments", e.LeaderBoardPrev = "gf_board_previous", e.LeaderBoardRules = "gf_board_rules", e.Bonuses = "gf_bonuses", e.Levels = "gf_levels", e.Saw = "gf_saw", e.MatchX = "gf_matchx", e.Store = "gf_store", e.Settings = "gf_settings", e.Section = "gf_section", e.GfClose = "gf_close", e.ChangeNickname = "gf_change_nickname", e.ChangeAvatar = "gf_change_avatar", e.Submit = "submit", e.Action = "action", e.Jackpots = "gf_jackpots", e.Raffle = "gf_raffle", e.Quiz = "gf_quiz", e.CustomDPNoClose = "no_close", e.Telegram = "telegram"
        })(DpType = DpType || {}), [DpType.GfMain, DpType.Activity, DpType.Missions, DpType.Badges, DpType.LeaderBoard, DpType.Tournaments, DpType.LeaderBoardPrev, DpType.LeaderBoardRules, DpType.Bonuses, DpType.Levels, DpType.Saw, DpType.MatchX, DpType.Quiz, DpType.Store, DpType.Jackpots, DpType.Settings, DpType.Section, DpType.GfClose, DpType.ChangeNickname, DpType.ChangeAvatar, DpType.Inbox, DpType.AskPushPermissions, DpType.Ok, DpType.Cancel, DpType.Close, DpType.CustomDPNoClose, DpType.Telegram, DpType.Raffle]),
        ClientEventTypes, CUSTOM_DP_HANDLER_F = ((e => {
            e.client_action = "client_action", e.update_sensitive_properties = "update_sensitive_properties", e.core_language_changed = "core_language_changed", e.core_cannot_open_gamification = "core_cannot_open_gamification", e.core_set_last_login_entry = "core_set_last_login_entry", e.gf_nickname_changed = "gf_nickname_changed", e.gf_avatar_changed = "gf_avatar_changed", e.update_profile = "update_profile", e.core_gamification_opened = "core_gamification_opened", e.core_gamification_closed = "core_gamification_closed"
        })(ClientEventTypes = ClientEventTypes || {}), "__smarticoDPCustom"),
        DeepLinks = (() => {
            function _() {}
            return _.doAskPushPermissions = function(e, t) {
                t.requestPushPermissions()
            }, _.doExecuteGfDp = function(e, t) {
                t.sendRow(ClassId.EVENT, !0, {
                    eventType: ClientEventTypes.core_gamification_opened,
                    payload: {}
                }), t.executeGfDp(e)
            }, _.doNavigateOutside = function(e, t) {
                var n = e.params.url,
                    i = e.params.target,
                    r = ["_blank", "_self", "_parent", "_top"];
                if (n && (e => {
                        try {
                            var t;
                            return e.startsWith("/") ? !0 : "http:" === (t = new URL(e)).protocol || "https:" === t.protocol
                        } catch (e) {
                            return !1
                        }
                    })(n))
                    if (i) {
                        if (!r.includes(i)) return console.error("SMARTICO: Invalid target value"), !1;
                        window.open(n, i)
                    } else setTimeout(function() {
                        return window.location.href = e.params.url
                    }, 100);
                else console.error("SMARTICO: Invalid or unsafe URL detected");
                return !1
            }, _.doSubmitForm = function(e, t) {
                t.sendRow(ClassId.EVENT, !0, {
                    eventType: ClientEventTypes.update_sensitive_properties,
                    payload: __assign({}, e.params)
                })
            }, _.doReportClientAction = function(e, t) {
                var n;
                null != (n = e.params) && n.action ? t.sendRow(ClassId.EVENT, !0, {
                    eventType: ClientEventTypes.client_action,
                    payload: {
                        action: e.params.action
                    }
                }) : this.error("Deep link dp:action is missing action parameter. Proper format is dp:action&action=test")
            }, _.doReportTelegramAuth = function(e, t) {
                t.reportTelegramChatStitching(e)
            }, _.doNothing = function(e, t) {}, _.actionHandler = function(e, t, n, i, r, a, s) {
                if (void 0 === n && (n = null), void 0 === i && (i = null), void 0 === r && (r = !1), void 0 === a && (a = !1), void 0 === s && (s = !1), null === t || "" === t || void 0 === t) this.error("Missing dp action value in DeepLinks.actionHandler call");
                else if (a) this.log("PromoBuilder: in preview mode, skipping engagement report and DP handling");
                else {
                    var a = null,
                        o = _.parse(t);
                    if (this.log("Got deep link to execute:", JSON.stringify(o)), o && !widgetShouldStayOpenDP.includes(o.action) && setTimeout(function() {
                            e.executeManualDP("dp:" + DpType.GfClose)
                        }, 100), DEEP_LINK_GAMIFICATION.includes(o.action) && e.getPublicProps && e.getLabelSetting && o.action !== DpType.GfClose && o.action !== DpType.Inbox) {
                        var c = e.getPublicProps(),
                            l = e.getLabelSetting(PublicLabelSettings$1.GAMIFICATION_DISABLE_FOR_BRAND);
                        if (null != c && c.ach_gamification_in_control_group || "true" === l) return this.log("Smartico user is in gamification control group or gamification is disabled for label/brand, deep link cannot be handled"), void e.sendRow(ClassId.EVENT, !0, {
                            eventType: ClientEventTypes.core_cannot_open_gamification,
                            payload: {
                                dp_action: o.action
                            }
                        })
                    }
                    if (DEEP_LINK_HANDLERS[o.action] ? (this.log("Found smartico managed deep link hander"), a = DEEP_LINK_HANDLERS[o.action]) : window[CUSTOM_DP_HANDLER_F] ? (this.log("Found custom deep link handler registered"), a = window[CUSTOM_DP_HANDLER_F]) : this.log("Unknown deep link client action: ", o), null !== n && (r ? a ? e.reportEngagmentAction({
                            engagement_uid: n,
                            action: o.actionToReport,
                            activityType: i
                        }) : e.reportEngagmentFail({
                            engagement_uid: n,
                            action: o.actionToReport,
                            activityType: i
                        }) : (o.actionToReport.startsWith("dp:inbox") && (o.actionToReport = "dp:inbox"), e.reportEngagmentAction({
                            engagement_uid: n,
                            action: o.actionToReport,
                            activityType: i
                        }))), a) {
                        this.log("Executing deep link with handler: ", a);
                        try {
                            s ? e.executeNativeDp(t) : a(o, e)
                        } catch (e) {
                            this.error("Failed to execute deep link", o, a, e)
                        }
                    } else this.warn("No handler for deep link", o)
                }
            }, _.parse = function(e) {
                var t, n, i = null,
                    r = null == (r = e && decodeURI(e)) ? void 0 : r.toLowerCase().trim();
                return e.startsWith("https://") || e.startsWith("http://") || e.startsWith("/") || e.startsWith("dp:/") ? this.parseGoLink(e, r) : ((i = (t = e.substring(3).split(/[&]/)).shift()) === DpType.Submit && (r = "dp:" + DpType.Submit), i === DpType.Go ? (n = (e = this.dpGoReplacer(e)).replacedText, e = e.matchValue, {
                    action: i,
                    params: {
                        url: null == (n = n.replace("dp:go", "").split("&url=").filter(Boolean)) ? void 0 : n[0],
                        target: e
                    },
                    actionToReport: r = this.dpGoReplacer(r).replacedText
                }) : (n = {}, t.length ? {
                    action: i,
                    params: t.reduce(function(e, t) {
                        var t = t.split("="),
                            n = t[0],
                            t = t.slice(1).join("=");
                        return void 0 === t && (t = "true"), e[n] = decodeURIComponent(t), e
                    }, n),
                    actionToReport: r
                } : {
                    action: i,
                    params: __assign({}, n),
                    actionToReport: r
                }))
            }, _.parseGoLink = function(e, t) {
                e.startsWith("dp:/") && (e = e.replace("dp:", ""));
                var e = this.dpGoReplacer(e),
                    n = e.replacedText,
                    e = e.matchValue,
                    t = this.dpGoReplacer(t).replacedText;
                return {
                    action: DpType.Go,
                    params: {
                        url: n,
                        target: e
                    },
                    actionToReport: t
                }
            }, _.dpGoReplacer = function(e) {
                var t = /&_sm_target=([^&]*)/,
                    n = /&target=([^&]*)/,
                    i = e.match(t),
                    r = e.match(n),
                    i = i ? i[1] : null,
                    r = r ? r[1] : null;
                return {
                    replacedText: e.replace(t, "").replace(n, ""),
                    matchValue: i || r
                }
            }, _.log = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                console.log.apply(console, __spreadArray(["SMARTICO, DPH:"], e))
            }, _.warn = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                console.warn.apply(console, __spreadArray(["SMARTICO, DPH:"], e))
            }, _.error = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                console.error.apply(console, __spreadArray(["SMARTICO, DPH:"], e))
            }, _
        })(),
        DEEP_LINK_GAMIFICATION = [DpType.GfMain, DpType.Activity, DpType.Missions, DpType.Badges, DpType.LeaderBoard, DpType.Tournaments, DpType.LeaderBoardPrev, DpType.LeaderBoardRules, DpType.Bonuses, DpType.Levels, DpType.Saw, DpType.Store, DpType.Settings, DpType.Section, DpType.GfClose, DpType.ChangeNickname, DpType.ChangeAvatar, DpType.Inbox, DpType.MatchX, DpType.Quiz, DpType.Jackpots, DpType.Raffle],
        DEEP_LINK_HANDLERS = {},
        InteractionMessageId, LogLevel$1, LogLevel$2 = (DEEP_LINK_HANDLERS[DpType.AskPushPermissions] = DeepLinks.doAskPushPermissions, DEEP_LINK_HANDLERS[DpType.Ok] = DeepLinks.doNothing, DEEP_LINK_HANDLERS[DpType.Cancel] = DeepLinks.doNothing, DEEP_LINK_HANDLERS[DpType.Close] = DeepLinks.doNothing, DEEP_LINK_HANDLERS[DpType.Go] = DeepLinks.doNavigateOutside, DEEP_LINK_HANDLERS[DpType.Submit] = DeepLinks.doSubmitForm, DEEP_LINK_HANDLERS[DpType.Action] = DeepLinks.doReportClientAction, DEEP_LINK_HANDLERS[DpType.Telegram] = DeepLinks.doReportTelegramAuth, DEEP_LINK_GAMIFICATION.forEach(function(e) {
            DEEP_LINK_HANDLERS[e] = DeepLinks.doExecuteGfDp
        }), (e => {
            e[e.Sys = -1] = "Sys", e[e.IamReady = 1] = "IamReady", e[e.PleaseInit = 2] = "PleaseInit", e[e.IamInitialized = 3] = "IamInitialized", e[e.PleaseCloseMe = 4] = "PleaseCloseMe", e[e.SetMyStyle = 5] = "SetMyStyle", e[e.SetUserInfo = 7] = "SetUserInfo", e[e.Levels = 8] = "Levels", e[e.ProtocolRequest = 9] = "ProtocolRequest", e[e.ProtocolResponse = 10] = "ProtocolResponse", e[e.ProtocolEvent = 11] = "ProtocolEvent", e[e.VerifyDp = 12] = "VerifyDp", e[e.ExecuteDp = 13] = "ExecuteDp", e[e.SetConnectionStatus = 15] = "SetConnectionStatus", e[e.OnUrlChanged = 16] = "OnUrlChanged", e[e.InjectCss = 17] = "InjectCss", e[e.ExecSmarticoFromFrame = 18] = "ExecSmarticoFromFrame", e[e.detectClickOutside = 19] = "detectClickOutside", e[e.ExternalCallback = 20] = "ExternalCallback", e[e.SetSkin = 21] = "SetSkin"
        })(InteractionMessageId = InteractionMessageId || {}), (e => {
            e[e.DISABLED = 0] = "DISABLED", e[e.ERROR = 1] = "ERROR", e[e.WARNING = 2] = "WARNING", e[e.INFO = 3] = "INFO", e[e.DEBUG = 4] = "DEBUG"
        })(LogLevel$1 = LogLevel$1 || {}), (t => {
            t.deserialize = function(e) {
                if (Util.isNotEmpty(e)) switch (e) {
                    case "disabled":
                        return t.DISABLED;
                    case "error":
                        return t.ERROR;
                    case "warn":
                        return t.WARNING;
                    case "info":
                        return t.INFO;
                    case "debug":
                        return t.DEBUG
                }
                return null
            }
        })(LogLevel$1 = LogLevel$1 || {}), LogLevel$1),
        Logger$1 = (() => {
            function i(e) {
                this.name = e
            }
            return i.Of = function(e) {
                return new i(e)
            }, i.setLogLevel = function(e) {
                i.SetLogLevel(LogLevel$2.deserialize(e))
            }, i.SetLogLevel = function(e) {
                Util.isNotNull(e) && (i.LOG_LEVEL = e)
            }, i.prototype.debug = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                i.LOG_LEVEL >= LogLevel$2.DEBUG && (Util.isArrayNotEmpty(t) ? console.debug(this.format(" D "), e, JSON.stringify(t)) : console.debug(this.format(" D "), e))
            }, i.prototype.info = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                i.LOG_LEVEL >= LogLevel$2.INFO && (Util.isArrayNotEmpty(t) ? console.info(this.format(" I "), e, JSON.stringify(t)) : console.info(this.format(" I "), e))
            }, i.prototype.warn = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                i.LOG_LEVEL >= LogLevel$2.WARNING && (Util.isArrayNotEmpty(t) ? console.warn(this.format(" W "), e, JSON.stringify(t)) : console.warn(this.format(" W "), e))
            }, i.prototype.error = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                i.LOG_LEVEL >= LogLevel$2.ERROR && (Util.isArrayNotEmpty(t) ? console.error(this.format(" E "), e, JSON.stringify(t)) : console.error(this.format(" E "), e))
            }, i.prototype.format = function(e) {
                return ["SMTKO", e, "[", this.name, "]", " "].join("")
            }, i.pad = function(e) {
                return ("0" + e).slice(-2)
            }, i.formatDate = function() {
                var e = new Date;
                return [this.pad(e.getDate()), this.pad(e.getMonth() + 1), e.getFullYear()].join("-") + " " + [this.pad(e.getHours()), this.pad(e.getMinutes()), this.pad(e.getSeconds())].join(":") + "." + e.getMilliseconds()
            }, i.LOG_LEVEL = LogLevel$2.ERROR, i
        })(),
        InteractionMessageBuilder = (() => {
            function e() {}
            return e.IamReady = function() {
                return {
                    id: InteractionMessageId.IamReady
                }
            }, e.IamInitialized = function() {
                return {
                    id: InteractionMessageId.IamInitialized
                }
            }, e.PleaseInit = function(e) {
                return {
                    id: InteractionMessageId.PleaseInit,
                    settings: e
                }
            }, e.PleaseCloseMe = function() {
                return {
                    id: InteractionMessageId.PleaseCloseMe
                }
            }, e.SetMyStyle = function(e) {
                return Util.checkNotNull(e), {
                    id: InteractionMessageId.SetMyStyle,
                    style: e
                }
            }, e.detectClickOutside = function() {
                return {
                    id: InteractionMessageId.detectClickOutside
                }
            }, e.InjectCss = function(e) {
                return Util.checkNotNull(e), {
                    id: InteractionMessageId.InjectCss,
                    css: e
                }
            }, e.SetUserInfo = function(e) {
                return {
                    id: InteractionMessageId.SetUserInfo,
                    userInfo: e
                }
            }, e.SetLevels = function(e) {
                return {
                    id: InteractionMessageId.Levels,
                    levels: e
                }
            }, e.SetSkin = function(e) {
                return {
                    id: InteractionMessageId.SetSkin,
                    skin_name: e
                }
            }, e.ProtocolRequest = function(e, t) {
                return void 0 === t && (t = !1), Util.checkNotNull(e), {
                    id: InteractionMessageId.ProtocolRequest,
                    request: e,
                    identified: t
                }
            }, e.ProtocolResponse = function(e) {
                return {
                    id: InteractionMessageId.ProtocolResponse,
                    response: e
                }
            }, e.ProtocolEvent = function(e) {
                return {
                    id: InteractionMessageId.ProtocolEvent,
                    event: e
                }
            }, e.VerifyDp = function(e, t, n) {
                return {
                    id: InteractionMessageId.VerifyDp,
                    dp: e,
                    engagementUid: t,
                    activityType: n
                }
            }, e.ExecSmarticoFromFrame = function(e, t) {
                return Util.checkNotNull(e), {
                    id: InteractionMessageId.ExecSmarticoFromFrame,
                    method: e,
                    arguments: t
                }
            }, e.ExecuteDp = function(e) {
                return {
                    id: InteractionMessageId.ExecuteDp,
                    dp: e
                }
            }, e.SetConnectionStatus = function(e) {
                return {
                    id: InteractionMessageId.SetConnectionStatus,
                    status: e
                }
            }, e.OnUrlChanged = function(e) {
                return {
                    id: InteractionMessageId.OnUrlChanged,
                    newUrl: e
                }
            }, e.CallBackTrigger = function(e, t) {
                return {
                    id: InteractionMessageId.ExternalCallback,
                    callbackKey: e,
                    body: t
                }
            }, e
        })(),
        InteractionBridgeImpl = (() => {
            function e(e) {
                var i = this;
                this.sendMessage = function(e) {
                    Util.checkNotNull(e), e.bridgeId = i._props.bridgeId;
                    var t, n = JSON.stringify(e);
                    try {
                        i._logger.debug("<-- Send message: " + e.id + " bridgeId: " + i._props.bridgeId + ", cid: " + (null == (t = e.response) ? void 0 : t.cid)), i._props.frame.contentWindow.postMessage(n, "*")
                    } catch (e) {
                        i._logger.debug("Error send post message: " + n + " Error: " + JSON.stringify(e))
                    }
                }, this.handleMessage = function(e) {
                    var t;
                    try {
                        if (t = JSON.parse(e.data), Util.isNotNull(t.id) && Util.isNotEmpty(t.bridgeId) && t.bridgeId === i._props.bridgeId) switch (i._logger.debug("--\x3e On message: " + t.id + " bridgeId: " + t.bridgeId), t.id) {
                            case InteractionMessageId.IamReady:
                                i._handleReady || (i._logger.debug("Page ready for bridge: " + i._props.bridgeId), i._handleReady = !0, i._props.lifeCycleListener(InteractionBridgePhase.PageReady), i.sendMessage(InteractionMessageBuilder.PleaseInit(i._props.settings)));
                                break;
                            case InteractionMessageId.IamInitialized:
                                i._logger.debug("Bridge initialized: " + i._props.bridgeId), i._handleReady = !1, i._props.lifeCycleListener(InteractionBridgePhase.PageInitialized);
                                break;
                            case InteractionMessageId.PleaseCloseMe:
                                i._props.lifeCycleListener(InteractionBridgePhase.BeforeClose), document.getElementsByTagName("body")[0].removeChild(i._props.frame);
                                break;
                            default:
                                Util.isNotNull(i._props.consumer) && i._props.consumer(t, i)
                        }
                    } catch (e) {}
                }, Util.checkNotNull(e), Util.checkNotNull(e.bridgeId), Util.checkNotNull(e.frame), Util.checkNotNull(e.consumer), Util.checkNotNull(e.lifeCycleListener), this._props = e, this._logger = Logger$1.Of(this.constructor.toString().match(/\w+/g)[1] + "-" + e.bridgeId), WebUtil.addEventListener(window, "message", this.handleMessage)
            }
            return e.prototype.close = function() {
                window.removeEventListener("message", this.handleMessage)
            }, e
        })(),
        InteractionBridgePhase, BridgeStatus, InteractionMaster = ((e => {
            e[e.PageReady = 0] = "PageReady", e[e.PageInitialized = 1] = "PageInitialized", e[e.BeforeClose = 2] = "BeforeClose"
        })(InteractionBridgePhase = InteractionBridgePhase || {}), (e => {
            e[e.NotReady = 0] = "NotReady", e[e.Initialized = 1] = "Initialized"
        })(BridgeStatus = BridgeStatus || {}), (() => {
            function a() {}
            return a.create = function(t) {
                var e, n = this,
                    i = (Util.checkNotNull(t), a.getBridgetKey(t.bridgeId, t.bridgeGUID)),
                    r = (this.hasBridge(t.bridgeId, t.bridgeGUID) && (this._logger.warn("Already has Bridge with id: " + i + " Closing it!!"), this.close(t.bridgeId, t.bridgeGUID)), t.frame.getAttribute("bridgeId") && t.frame.getAttribute("bridgeGUID") && (r = t.frame.getAttribute("bridgeId"), e = t.frame.getAttribute("bridgeGUID"), this.hasBridge(r, e)) && this.close(r, e, !0), t.frame.setAttribute("bridgeId", t.bridgeId), t.frame.setAttribute("bridgeGUID", t.bridgeGUID), this._logger.debug("Create bridge with id: " + i), {
                        frame: t.frame,
                        bridgeId: t.bridgeId,
                        bridgeGUID: t.bridgeGUID,
                        bridge: new InteractionBridgeImpl(Object.assign({}, t, {
                            bridgeId: i
                        }, {
                            lifeCycleListener: function(e) {
                                a.updateBridgeStatus(i, e), Util.isNotNull(t.lifeCycleListener) && t.lifeCycleListener(e), e === InteractionBridgePhase.BeforeClose && n.close(t.bridgeId, t.bridgeGUID)
                            }
                        })),
                        status: BridgeStatus.NotReady,
                        consumer: t.consumer
                    });
                this._bridges.set(i, r)
            }, a.close = function(e, t, n) {
                void 0 === n && (n = !1);
                e = a.getBridgetKey(e, t), t = this._bridges.get(e);
                Util.isNotNull(t) && (this._logger.debug("Closing bridge with id: " + e), t.bridge.close(), this._bridges.delete(e), n || WebUtil.removeFrame(t.frame))
            }, a.clear = function() {
                a._bridges.forEach(function(e, t) {
                    a.close(e.bridgeId, e.bridgeGUID)
                })
            }, a.sendMessage = function(e, t, n) {
                e = a.getBridgetKey(e, t), t = this._bridges.get(e);
                Util.isNotNull(t) && t.bridge.sendMessage(n)
            }, a.sendToAll = function(n, i) {
                var r = this;
                void 0 === i && (i = 0), this._bridges.forEach(function(e, t) {
                    a.bridgeStatus(e.bridgeId, e.bridgeGUID) === BridgeStatus.Initialized ? e.bridge.sendMessage(n) : i < 10 && n.id !== InteractionMessageId.detectClickOutside && (r._logger.warn("Bridge is not ready, try to resend message in 10 ms for bridge ".concat(t, ", cid ") + n.id), setTimeout(function() {
                        return a.sendToAll(n, i + 1)
                    }, 100))
                })
            }, a._logger = Logger$1.Of("InteractionMaster"), a._bridges = new typescriptMap_1, a.getBridgetKey = function(e, t) {
                return e + (t ? "_" + t : "")
            }, a.updateBridgeStatus = function(e, t) {
                e = a._bridges.get(e);
                Util.isNotNull(e) && t === InteractionBridgePhase.PageInitialized && (e.status = BridgeStatus.Initialized)
            }, a.hasBridge = function(e, t) {
                return a._bridges.has(a.getBridgetKey(e, t))
            }, a.bridgeStatus = function(e, t) {
                e = a._bridges.get(a.getBridgetKey(e, t));
                return Util.isNotNull(e) ? e.status : null
            }, a
        })()),
        PromoBuilderNew = (() => {
            function c() {}
            return c.showPromoMessage = function(n, i, r, a) {
                var t, s, e, o;
                void 0 === a && (a = !1), !(r = void 0 === r ? !1 : r) && c.engIdsShownInSession.includes(n.engagement_uid) && null === !n.engagement_uid || (c.engIdsShownInSession.push(n.engagement_uid), s = "", c.hasPopupOnScreen() && !r ? t = ENGAGEMENT_FAIL_REASONS.ANOTHER_ENGAGEMENT_IS_STILL_IN_FOCUS : (c.closePromoMessage(null), "fixed" === (null == (e = n.params) ? void 0 : e.counter_type) && (e = n.params.duration, e = new Date(Date.now() + Number(e)).toISOString(), n.params.date = e), e = n.template_engine === POPUP_TEMPLATE_ENGINE.INTERACTION_PLUS ? c.iframeContentInteractionPlus(n.template_html, n.params, r) : c.iframeContentFull(n.template_html, n.params, r), (o = _add({
                    id: "__btgPromo" + n.engagement_uid,
                    className: "__btgPromoHolder",
                    style: "width:100%; opacity: 0; height:100%;position: fixed;z-index: ".concat(Z_INDEX.POPUPS, "; border:0; color-scheme: none; top: 0; left: 0; backdrop-filter: blur(").concat((null == (o = n.params) ? void 0 : o.popup_bg_blur) || 0, "px); -webkit-backdrop-filter: blur(").concat((null == (o = n.params) ? void 0 : o.popup_bg_blur) || 0, "px)"),
                    srcdoc: e
                }, document.body, "iframe")).handeTemplateError = function(e) {
                    console.error("SMTKO: Failed to build popup template", e), t = ENGAGEMENT_FAIL_REASONS.FAILED_TO_BUILD_POPUP_TEMPLATE, s = e.toString(), c.closePromoMessage(i)
                }, o.handleDeepLink = function(e) {
                    var t;
                    DeepLinks.actionHandler(i, e, n.engagement_uid, n.activityType, !1, r, a), r || (c.closePromoMessage(i), t = null == (t = (e || "").match(/dp:([^&]+)/)) ? void 0 : t[1], e && !widgetShouldStayOpenDP.includes(t) && InteractionMaster.close(InteractionBridgeType.GamificationMain, null))
                }), r) || setTimeout(function() {
                    void 0 === t ? i.reportEngagmentImpression({
                        engagement_uid: n.engagement_uid,
                        activityType: n.activityType
                    }) : i.reportEngagmentFail({
                        engagement_uid: n.engagement_uid,
                        activityType: n.activityType,
                        reason: t,
                        error: s
                    })
                }, 1e3)
            }, c.hasPopupOnScreen = function() {
                return _exists(".__btgPromoHolder")
            }, c.closePromoMessage = function(e) {
                _remove(".__btgPromoHolder"), e && e.promoMessageClosed()
            }, c.clear = function(e) {
                c.closePromoMessage(e), c.engIdsShownInSession = []
            }, c.iframeContentFull = function(e, t, n) {
                return '\n            <!DOCTYPE html>\n            <html>\n                <head>\n                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n                    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n                    <meta name="viewport" content="width=device-width, initial-scale=1">\n                    <script src="'.concat(SCRIPTS_LOCATION, '/jsi/js/tmpl.min.js"><\/script>\n                    <script src="').concat(SCRIPTS_LOCATION, '/jsi/js/smtko-dp-common.js"><\/script>\n                    <script>\n                        window.onload = function() {\n                            var params = ').concat(JSON.stringify(t), ";\n                            var __root_centered = document.getElementById('__root_centered');\n                            __root_centered.innerHTML = tmpl('_template', params);\n\n\t\t\t\t\t\t\tconst scripts = __root_centered.querySelectorAll('script');\n\n\t\t\t\t\t\t\tscripts.forEach(oldScript => {\n\t\t\t\t\t\t\t\tconst newScript = document.createElement('script');\n\n\t\t\t\t\t\t\t\tfor (const attr of oldScript.attributes) {\n\t\t\t\t\t\t\t\t\tnewScript.setAttribute(attr.name, attr.value);\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tnewScript.text = oldScript.textContent;\n\n\t\t\t\t\t\t\t\toldScript.parentNode.replaceChild(newScript, oldScript);\n\t\t\t\t\t\t\t});\n\n                            // adjust size of popup to fit to the mobile screen\n                            setTimeout( function() {\n                                var widthRatio = 0.9;\n\n\t\t\t\t\t\t\t\tlet widthZoom = null;\n\t\t\t\t\t\t\t\tlet heightZoom = null;\n\n                                if (window.innerWidth * widthRatio < __root_centered.offsetWidth ) {\n                                    widthZoom = window.innerWidth * widthRatio / __root_centered.offsetWidth\n                                }\n\n\t\t\t\t\t\t\t\tif (window.innerHeight * widthRatio < __root_centered.offsetHeight ) {\n                                    heightZoom = window.innerHeight * widthRatio / __root_centered.offsetHeight\n                                }\n\n\t\t\t\t\t\t\t\tif (widthZoom || heightZoom) {\n\t\t\t\t\t\t\t\t\tif (widthZoom && ((heightZoom && widthZoom < heightZoom) || !heightZoom)) {\n\t\t\t\t\t\t\t\t\t\t__root_centered.style.zoom = widthZoom;\n\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\tif (heightZoom) {\n\t\t\t\t\t\t\t\t\t\t__root_centered.style.zoom = heightZoom;\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\n                            }, 500)\n                            attachDpHandlers(").concat(n, "); \n                        };\n                    <\/script>\n                    <style>\n                        body {\n                            margin:0; padding:0;\n                        }\n                        div#__root_centered {\n                            position: absolute;\n                            top: 50%;\n                            left: 50%;\n                            transform: translate(-50%, -50%);\n                            -ms-transform: translate(-50%, -50%); /* IE 9 */\n                            -webkit-transform: translate(-50%, -50%); /* Chrome, Safari, Opera */\n                        }\n                        div#__overlay {\n                            background-color:#000;\n                            opacity: ").concat(Number(t.popup_bg_opacity) ? t.popup_bg_opacity : .7, ";\n                            position: absolute;\n                            width:100%;\n                            height:100%;\n                        }\n                    </style>\n                </head>\n                <body>\n                    <div id='__overlay'></div>\n                    <div id='__root_centered' />\n                    <script type=\"text/x-tmpl\" id=\"_template\">").concat(e, "<\/script>\n                </body>\n            </html>")
            }, c.iframeContentInteractionPlus = function(e, t, n) {
                var i = Number(t.popup_bg_opacity) ? ".oa-window-fake-wrap > div.ao-animated:not(:has(div)):first-child {\n                opacity: ".concat(t.popup_bg_opacity || .7, " !important;\n            };") : "";
                return '\n            <!DOCTYPE html>\n            <html>\n                <head>\n                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n                    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n                    <meta name="viewport" content="width=device-width, initial-scale=1">\n                    <link href="'.concat(SCRIPTS_LOCATION, '/jsi/font-awesome/css/font-awesome.css" rel="stylesheet" type="text/css">\n                    <link href=\'https://fonts.googleapis.com/css?family=Allura&subset=latin\' rel=\'stylesheet\' type=\'text/css\'>\n                    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet">\n                    <link href="').concat(SCRIPTS_LOCATION, '/jsi/arund/css/arund.min.css" rel="stylesheet" type="text/css">\n                    <link href="').concat(SCRIPTS_LOCATION, '/jsi/arund/css/ao-countdown.css" rel="stylesheet" type="text/css">\n                    <script>\n                        var __template_params = ').concat(JSON.stringify(t), ";\n\t\t\t\t\t\tvar isPopupPreview = ").concat(n, ";\n                    <\/script>\n\n                    <style>\n                       ").concat(i, '\n                    </style>\n\n                </head>\n                <body class="ao-body">\n                    <div class="ao-page ao-font-lato">\n                        ').concat(-1 === e.indexOf("<script data-ao-template") ? '<script data-ao-template="x" data-ao-popup-on="init:load" type="text/x-tmpl">'.concat(e, "<\/script>") : e, '\n                    </div>\n                    <div class="ao-window-fake" data-ao-animaze-resize="windowSize:min 100%"></div>\n            \n                    <script src="').concat(SCRIPTS_LOCATION, '/jsi/js/jquery.min.js" type="text/javascript"><\/script>\n                    <script src="').concat(SCRIPTS_LOCATION, '/jsi/js/moment/moment.min.js"><\/script>\n                    <script src="').concat(SCRIPTS_LOCATION, '/jsi/js/js.cookie.min.js" type="text/javascript"><\/script>\n                    <script src="').concat(SCRIPTS_LOCATION, '/jsi/js/tmpl.min.js"><\/script>\n                    <script src="').concat(SCRIPTS_LOCATION, '/jsi/js/smtko-dp-common.js"><\/script>\n                    <script src="').concat(SCRIPTS_LOCATION, '/jsi/js/smtko-interactive-init.js"><\/script>\n                    <script src="').concat(SCRIPTS_LOCATION, '/jsi/arund/js/arund.min.js" type="text/javascript"><\/script>\n                    <script src="').concat(SCRIPTS_LOCATION, '/jsi/js/script.js" type="text/javascript"><\/script>\n                </body>\n            </html>')
            }, c.engIdsShownInSession = [], c
        })();

    function _exists(e, t) {
        return 0 < (t = void 0 === t ? document.body : t).querySelectorAll(e).length
    }

    function _add(t, e, n) {
        void 0 === t && (t = {}), void 0 === e && (e = document.body), void 0 === n && (n = "div");
        var i = document.createElement(n);
        return i.onload = function() {
            i.style.opacity = "1"
        }, Object.keys(t).map(function(e) {
            return i[e] = t[e]
        }), e.appendChild(i), i
    }

    function _remove(e) {
        document.querySelectorAll(e).forEach(function(e) {
            return e.parentNode.removeChild(e)
        })
    }
    var parseUrl = function() {
            for (var e = window.location.search, t = {}, n = ("?" === e[0] ? e.substr(1) : e).split("&"), i = 0; i < n.length; i++) {
                var r = n[i].split("=");
                "" !== r[0] && (t[decodeURIComponent(r[0])] = decodeURIComponent(r[1] || ""))
            }
            return t
        },
        parseUrlHash = function() {
            for (var e = {}, t = window.location.hash.substr(1).split(/\?|&/), n = 0; n < t.length; n++) {
                var i = t[n].split("=");
                "" !== i[0] && (e[decodeURIComponent(i[0])] = decodeURIComponent(i[1] || ""))
            }
            return e
        },
        hash32a = function(e) {
            for (var t = 2166136261, n = 0; n < e.length; ++n) t = (t ^= e.charCodeAt(n)) + ((t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24));
            return ("0000000" + (t >>> 0).toString(16)).substr(-8)
        },
        CacheKey;

    function findElementByIdDeep(e, t) {
        void 0 === t && (t = document);
        try {
            if (t === document) {
                var n = document.getElementById(e);
                if (n) return n
            } else if ("getElementById" in t) {
                var i = t.getElementById(e);
                if (i) return i
            }
        } catch (e) {
            console.warn("Direct access to getElementById failed:", e)
        }
        var r;
        try {
            r = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, null)
        } catch (e) {
            return console.warn("Failed to create TreeWalker:", e), null
        }
        for (var a = r.currentNode; a;) {
            try {
                if (a.shadowRoot) {
                    var s = findElementByIdDeep(e, a.shadowRoot);
                    if (s) return s
                }
            } catch (e) {
                console.warn("Error accessing shadow root:", e)
            }
            try {
                a = r.nextNode()
            } catch (e) {
                console.warn("Error walking to next node:", e);
                break
            }
        }
        return null
    }(e => {
        e.UserInfo = "UserInfo", e.Levels = "Levels"
    })(CacheKey = CacheKey || {});
    var Cache = (() => {
            function e() {}
            return e.clear = function() {
                e._cache = new typescriptMap_1
            }, e.set = function(e, t) {
                this._cache.set(e, t)
            }, e.get = function(e) {
                return this._cache.get(e)
            }, e.has = function(e) {
                return this._cache.has(e)
            }, e._cache = new typescriptMap_1, e
        })(),
        EXTERNAL_CALLBACK_KEY, DummyStorage = ((e => {
            e.INIT = "init", e.IDENTIFY = "identify", e.LOGIN = "login", e.LOGOUT = "logout", e.USER_PROPS_CHANGE = "props_change", e.SESSION_BASED_DP_DETECTED = "session_based_dp_detected", e.GF_CLOSING = "gf_closing", e.GF_STARTING = "gf_starting", e.GF_STARTED = "gf_started", e.SAW_STARTING = "saw_starting", e.INBOX_STARTING = "inbox_starting", e.PROTOCOL_ERROR = "protocol_error", e.MNIGAME_WIN = "mini_game_win", e.ACH_GAME_OPENING = "ach_game_opening", e.JACKPOT_WIN = "jackpot_win"
        })(EXTERNAL_CALLBACK_KEY = EXTERNAL_CALLBACK_KEY || {}), (() => {
            function e() {}
            return e.instance = function() {
                return this._instance || (this._instance = new this)
            }, e.prototype.supported = function() {
                return !1
            }, e.prototype.setItemT = function(e, t) {}, e.prototype.getItemT = function(e, t) {
                return null
            }, e.prototype.setItem = function(e, t) {}, e.prototype.getItem = function(e) {
                return null
            }, e.prototype.removeItem = function(e) {}, e.prototype.key = function(e) {
                return null
            }, e.prototype.clear = function() {}, e.prototype.length = function() {
                return 0
            }, e
        })()),
        LSKey, LStorage = ((e => {
            e.LangCode = "lang", e.AcceptCookie = "cookie", e.Translations = "tr", e.TrHash = "tr_hash"
        })(LSKey = LSKey || {}), function() {
            try {
                if (window.localStorage) return {
                    supported: function() {
                        return !0
                    },
                    setItem: function(e, t) {
                        try {
                            window.localStorage.setItem(e, t)
                        } catch (e) {}
                    },
                    getItem: function(e) {
                        try {
                            return window.localStorage.getItem(e)
                        } catch (e) {
                            return null
                        }
                    },
                    setItemT: function(e, t) {
                        try {
                            window.localStorage.setItem(e, JSON.stringify(t))
                        } catch (e) {}
                    },
                    getItemT: function(e, t) {
                        try {
                            var n = window.localStorage.getItem(e),
                                n = JSON.parse(n);
                            return n = t && "array" === t ? Array.isArray(n) ? n : null : n
                        } catch (e) {
                            return null
                        }
                    },
                    removeItem: function(e) {
                        window.localStorage.removeItem(e)
                    },
                    key: function(e) {
                        return window.localStorage.key(e)
                    },
                    clear: function() {
                        window.localStorage.clear()
                    },
                    length: function() {
                        return window.localStorage.length
                    }
                }
            } catch (e) {}
            return DummyStorage.instance()
        }),
        MessageQueue = (() => {
            function e() {
                this._messageQueue = new typescriptMap_1
            }
            return e.prototype.add = function(e, t, n) {
                e = InteractionMaster.getBridgetKey(e, t), t = this._messageQueue.get(e);
                Util.isNull(t) && this._messageQueue.set(e, t = []), t.push(n)
            }, e.prototype.flush = function(t, n) {
                var e = InteractionMaster.getBridgetKey(t, n),
                    i = this._messageQueue.get(e);
                Util.isNull(i) || (this._messageQueue.delete(e), i.forEach(function(e) {
                    InteractionMaster.sendMessage(t, n, e)
                }))
            }, e
        })(),
        Gamification = (() => {
            function _(e) {
                var l = this;
                this._logger = Logger$1.Of("Gamification"), this._messageQueue = new MessageQueue, this.executeDp = function(e) {
                    var t;
                    if (Util.isNotNull(e) && Util.isNotNull(e.action)) {
                        l._logger.debug("Execute dp: " + e.action);
                        var n = ((null == (t = Cache.get(CacheKey.UserInfo)) ? void 0 : t.core_is_test_account) || !1) && l._props.settingsTest ? l._props.settingsTest : l._props.settings,
                            i = InteractionMessageBuilder.ExecuteDp(e);
                        switch (e.action) {
                            case DpType.GfMain:
                            case DpType.Activity:
                            case DpType.Missions:
                            case DpType.Badges:
                            case DpType.LeaderBoard:
                            case DpType.Tournaments:
                            case DpType.LeaderBoardPrev:
                            case DpType.LeaderBoardRules:
                            case DpType.Bonuses:
                            case DpType.Levels:
                            case DpType.Saw:
                            case DpType.Store:
                            case DpType.Settings:
                            case DpType.ChangeNickname:
                            case DpType.ChangeAvatar:
                            case DpType.Section:
                            case DpType.Inbox:
                            case DpType.MatchX:
                            case DpType.Quiz:
                            case DpType.Jackpots:
                            case DpType.Raffle:
                                e.action === DpType.Saw && "true" === e.params.standalone && e.params.id && !e.params.with_games_list ? (l._tracker.triggerExternalCallBack(EXTERNAL_CALLBACK_KEY.SAW_STARTING), l.createFrame(l._props, n, InteractionBridgeType.MiniGame, null, {
                                    saw_template_id: e.params.id,
                                    pending_message_id: e.params.message_id,
                                    lang: e.params.lang
                                })) : e.action !== DpType.Inbox || InteractionMaster.hasBridge(InteractionBridgeType.GamificationMain, null) ? (l._tracker.triggerExternalCallBack(EXTERNAL_CALLBACK_KEY.GF_STARTING), l.sendDpToBridgetQueue(InteractionBridgeType.GamificationMain, null, i), InteractionMaster.hasBridge(InteractionBridgeType.GamificationMain, null) || (l.createFrame(l._props, n, InteractionBridgeType.GamificationMain, null), l.showPreloadingAnimation())) : (l.sendDpToBridgetQueue(InteractionBridgeType.InboxWidget, null, i), InteractionMaster.hasBridge(InteractionBridgeType.InboxWidget, null) || (l._tracker.triggerExternalCallBack(EXTERNAL_CALLBACK_KEY.INBOX_STARTING), l.createFrame(l._props, n, InteractionBridgeType.InboxWidget, null)));
                                break;
                            case DpType.GfClose:
                                var r = InteractionMaster.hasBridge(InteractionBridgeType.MiniGame, null) ? InteractionBridgeType.MiniGame : InteractionBridgeType.GamificationMain;
                                InteractionMaster.hasBridge(r, null) && (l._tracker.triggerExternalCallBack(EXTERNAL_CALLBACK_KEY.GF_CLOSING), _.blockScrollBehindFrame("recover"), InteractionMaster.close(r, null))
                        }
                    } else l._logger.warn("Can't execute DP without DpType.")
                }, this.sendDpToBridgetQueue = function(e, t, n) {
                    InteractionMaster.hasBridge(e, t) ? InteractionMaster.sendMessage(e, t, n) : (l._logger.debug("Bridge: " + e + " Not ready. Queuing message and create frame."), l._messageQueue.add(e, t, n))
                }, this.showPreloadingAnimation = function() {
                    _._gfLoadingFrameTimer = setTimeout(function() {
                        _._gfLoadingFrame = WebUtil.createFrame(SCRIPTS_LOCATION + "/loading.html", Z_INDEX.LOADER), _._gfLoadingFrame.style.width = "100%", _._gfLoadingFrame.style.height = "100%", _._gfLoadingFrame.style.display = "block", _._gfLoadingFrame.style.position = "fixed", _._gfLoadingFrame.style.top = "0", _._gfLoadingFrame.style.left = "0"
                    }, 100)
                }, this.openInlineFrame = function(e, t, n, i) {
                    t ? "IFRAME" !== t.tagName ? l._logger.error("The element to embed the content is not an iframe") : l.createFrame(l._props, l._props.settings, i, guid(), __assign({
                        url: e
                    }, n), t) : l._logger.error("Missing frame element")
                }, this.onIdentifyResponse = function(e) {
                    l._logger.debug("Handle identify response"), 0 === e.errCode && l.handlePublicProps({
                        userId: e.user_id,
                        extUserId: l._tracker.getExtUserId(),
                        public_username: e.public_username,
                        pubic_username_set: e.pubic_username_set,
                        avatar_id: e.avatar_id
                    }, e.props)
                }, this.onPublicPropertiesChanged = function(e) {
                    0 === e.errCode && Util.isNotNull(e.props) && l.handlePublicProps(Cache.get(CacheKey.UserInfo), e.props)
                }, this.handleAvatarChange = function(e) {
                    0 === e.errCode && l.handlePublicProps(Cache.get(CacheKey.UserInfo), {
                        avatar_id: e.avatar_id
                    })
                }, this.handleUsernameChange = function(e) {
                    0 === e.errCode && l.handlePublicProps(Cache.get(CacheKey.UserInfo), {
                        public_username: e.public_username_custom
                    })
                }, this.detectClickOutside = function() {
                    InteractionMaster.sendToAll(InteractionMessageBuilder.detectClickOutside())
                }, this.onEngagement = function(e) {
                    var t;
                    l._tracker.bSuspendInbox || e.activityType === CJMActivityType.Inbox && (InteractionMaster.hasBridge(InteractionBridgeType.GamificationWidget, null) || InteractionMaster.hasBridge(InteractionBridgeType.InboxWidget, null) ? l.dispatchProtocolEvent(e) : (l._logger.debug("Loading UI widget ..."), t = ((null == (t = Cache.get(CacheKey.UserInfo)) ? void 0 : t.core_is_test_account) || !1) && l._props.settingsTest ? l._props.settingsTest : l._props.settings, l.createFrame(l._props, t, InteractionBridgeType.GamificationWidget, null), l._messageQueue.add(InteractionBridgeType.GamificationWidget, null, InteractionMessageBuilder.ProtocolEvent(e))))
                }, this.handlePublicProps = function(e, t) {
                    Util.checkNotNull(e), Cache.set(CacheKey.UserInfo, Object.assign({}, e, t)), l.pushUserInfo(), Util.isNotNull(e.core_user_language) && Util.isNotNull(t.core_user_language) && e.core_user_language !== t.core_user_language && l._tracker.sendRow(ClassId.GET_LEVEL_MAP_REQUEST, !0)
                }, this.pushUserInfo = function() {
                    InteractionMaster.sendToAll(InteractionMessageBuilder.SetUserInfo(Cache.get(CacheKey.UserInfo)))
                }, this.onGetLevelMap = function(e) {
                    l._logger.debug("Received levels configuration. Levels size: " + e.levels.length), Cache.set(CacheKey.Levels, e.levels), InteractionMaster.sendToAll(InteractionMessageBuilder.SetLevels(e.levels))
                }, this.setSkin = function(e) {
                    l._props.settings.theme = e, l._props.settingsTest.theme = e, InteractionMaster.sendToAll(InteractionMessageBuilder.SetSkin(e))
                }, this.dispatchProtocolResponse = function(e) {
                    l._logger.debug("dispatchProtocolResponse: " + e.cid), InteractionMaster.sendToAll(InteractionMessageBuilder.ProtocolResponse(e))
                }, this.dispatchProtocolEvent = function(e) {
                    InteractionMaster.sendToAll(InteractionMessageBuilder.ProtocolEvent(e))
                }, this.createFrame = function(e, t, a, n, i, r) {
                    window.removeEventListener("click", l.detectClickOutside, !0), Cache.has(CacheKey.Levels) || l._tracker.sendRow(ClassId.GET_LEVEL_MAP_REQUEST, !0);
                    var s = l.buildUrl(e, a, i),
                        i = (Util.checkNotNull(s), null != i && i.noQuestionMark && (s = s.replace("?", "&")), WebUtil.addGetParam(s, "bridgeId", InteractionMaster.getBridgetKey(a, n))),
                        o = (WebUtil.urlParam(WebUtil.forceMobileParam) && (i = WebUtil.addGetParam(i, WebUtil.forceMobileParam, WebUtil.urlParam(WebUtil.forceMobileParam))), 0);
                    switch (a) {
                        case InteractionBridgeType.GamificationMain:
                            o = Z_INDEX.GAMIFICATION_MAIN;
                            break;
                        case InteractionBridgeType.GamificationWidget:
                            o = Z_INDEX.GAMIFICATION_INBOX_SHORT;
                            break;
                        case InteractionBridgeType.InboxWidget:
                            o = Z_INDEX.INBOX_BIG;
                            break;
                        default:
                            o = Z_INDEX.OTHER
                    }
                    var c = WebUtil.createFrame(i, o, r);
                    InteractionMaster.create({
                        bridgeId: a,
                        bridgeGUID: n,
                        frame: c,
                        consumer: function(e) {
                            switch (e.id) {
                                case InteractionMessageId.SetMyStyle:
                                    var t = e,
                                        n = (Object.keys(t.style).forEach(function(e) {
                                            c.style[e] = t.style[e]
                                        }), window.getComputedStyle(window.document.body).zoom);
                                    n && parseFloat(n) && (c.style.zoom = (1 / parseFloat(n)).toString()), a === InteractionBridgeType.GamificationMain && l._tracker.triggerExternalCallBack(EXTERNAL_CALLBACK_KEY.GF_STARTED), _._gfLoadingFrameTimer && clearTimeout(_._gfLoadingFrameTimer), _._gfLoadingFrame && _._gfLoadingFrame.remove(), _.blockScrollBehindFrame("remove", c);
                                    break;
                                case InteractionMessageId.ProtocolRequest:
                                    n = e;
                                    Util.checkNotNull(n.request), l._tracker.sendRow(n.request.cid, n.identified, n.request);
                                    break;
                                case InteractionMessageId.VerifyDp:
                                    var i, r, n = e;
                                    l._logger.debug("Ask execute dp: ", n), null != n.dp && (i = window._smartico_nb, r = DeepLinks.parse(n.dp), i && (e.bridgeId === InteractionBridgeType.InboxWidget || r.action === DpType.Go) ? i.tracker.executeNativeDp(n.dp, !1) : l._tracker.executeManualDP(n.dp, n.engagementUid, n.activityType, !0));
                                    break;
                                case InteractionMessageId.ExternalCallback:
                                    l._tracker.triggerExternalCallBack(e.callbackKey, e.body)
                            }
                        },
                        lifeCycleListener: l.lifeCycleListener(a, n),
                        settings: t
                    }), null != (i = null == (s = e.tracker) ? void 0 : s.getParams()) && i.gamification_wrapper_mode || Tracker.on(EXTERNAL_CALLBACK_KEY.ACH_GAME_OPENING, function(e) {
                        var t, e = WebUtil.isMobile() && e.game_public_meta.mobile_spec_link ? e.game_public_meta.mobile_spec_link : e.game_public_meta.link;
                        e && (e.startsWith("http://") || e.startsWith("https://") ? window.open(e, "_self") : (t = window.location.origin, window.open("".concat(t).concat(e.startsWith("/") ? "" : "/").concat(e), "_self")))
                    }), window.addEventListener("click", l.detectClickOutside, !0)
                }, this.buildUrl = function(e, t, n) {
                    var i, r;
                    Util.checkNotNull(t), null != (i = Cache.get(CacheKey.UserInfo)) && i.core_is_test_account;
                    switch (t) {
                        case InteractionBridgeType.GamificationWidget:
                            r = LStorage().getItem("override_widget_widgetUrl") || EWidgetTypeHTMLFiles[EWidgetType.ShortInfo];
                            break;
                        case InteractionBridgeType.GamificationMain:
                            r = LStorage().getItem("override_widget_mainUrl") || EWidgetTypeHTMLFiles[EWidgetType.Achievements];
                            break;
                        case InteractionBridgeType.MiniGame:
                            r = EWidgetTypeHTMLFiles[EWidgetType.MiniGame];
                            break;
                        case InteractionBridgeType.TournamentsLobby:
                            r = EWidgetTypeHTMLFiles[EWidgetType.Tournaments];
                            break;
                        case InteractionBridgeType.CustomSection:
                            r = EWidgetTypeHTMLFiles[EWidgetType.CustomSection];
                            break;
                        case InteractionBridgeType.InboxWidget:
                            r = EWidgetTypeHTMLFiles[EWidgetType.InboxWidget];
                            break;
                        case InteractionBridgeType.InlineFrame:
                        case InteractionBridgeType.LiquidPage:
                            r = n.url, delete n.url
                    }
                    return WebUtil.addGetParams(r, n)
                }, this.lifeCycleListener = function(t, n) {
                    return function(e) {
                        switch (e) {
                            case InteractionBridgePhase.PageInitialized:
                                InteractionMaster.sendMessage(t, n, InteractionMessageBuilder.SetConnectionStatus(l._tracker.connectionStatus)), Cache.has(CacheKey.UserInfo) && InteractionMaster.sendMessage(t, n, InteractionMessageBuilder.SetUserInfo(Cache.get(CacheKey.UserInfo))), Cache.has(CacheKey.Levels) && InteractionMaster.sendMessage(t, n, InteractionMessageBuilder.SetLevels(Cache.get(CacheKey.Levels))), l._messageQueue.flush(t, n);
                                break;
                            case InteractionBridgePhase.BeforeClose:
                                l._tracker.triggerExternalCallBack(EXTERNAL_CALLBACK_KEY.GF_CLOSING), _.blockScrollBehindFrame("recover")
                        }
                    }
                }, this._props = e, this._tracker = e.tracker, this._products = e.products, this._logger.debug("Start Gamification module."), this._tracker.registerHandler(ClassId.IDENTIFY_RESPONSE, this.onIdentifyResponse), this._tracker.registerHandler(ClassId.CLIENT_PUBLIC_PROPERTIES_CHANGED_EVENT, this.onPublicPropertiesChanged), this._tracker.registerHandler(ClassId.CLIENT_SET_AVATAR_RESPONSE, this.handleAvatarChange), this._tracker.registerHandler(ClassId.CLIENT_SET_CUSTOM_USERNAME_RESPONSE, this.handleUsernameChange), this._tracker.registerHandler(ClassId.CLIENT_ENGAGEMENT_EVENT_NEW, this.onEngagement), this._tracker.registerHandler(ClassId.GET_LEVEL_MAP_RESPONSE, this.onGetLevelMap), this._tracker.registerHandler(ClassId.GET_TRANSLATIONS_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.GET_ACHIEVEMENT_MAP_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.RELOAD_ACHIEVEMENTS_EVENT, this.dispatchProtocolEvent), this._tracker.registerHandler(ClassId.GET_LEADERS_BOARD_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.GET_INBOX_MESSAGES_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.GET_BONUSES_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.CLAIM_BONUS_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.GET_SHOP_ITEMS_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.BUY_SHOP_ITEM_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.GET_SHOP_CATEGORIES_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.GET_TOURNAMENT_LOBBY_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.GET_TOURNAMENT_INFO_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.TOURNAMENT_REGISTER_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.GET_CUSTOM_SECTIONS_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.CLIENT_SET_AVATAR_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.CLIENT_SET_CUSTOM_USERNAME_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.SAW_GET_SPINS_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.SAW_DO_SPIN_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.SAW_AKNOWLEDGE_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.SAW_SPINS_COUNT_PUSH, this.dispatchProtocolEvent), this._tracker.registerHandler(ClassId.MISSION_OPTIN_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.GET_ACHIEVEMENT_USER_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.MARK_INBOX_READ_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.MARK_INBOX_STARRED_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.GET_ACH_CATEGORIES_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.ACHIEVEMENT_CLAIM_PRIZE_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.ACH_SHOP_ITEM_HISTORY_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.JP_GET_JACKPOTS_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.JP_OPTIN_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.JP_OPTOUT_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.GET_SAW_HISTORY_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.RAF_GET_RAFFLES_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.RAF_GET_DRAW_HISTORY_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.RAF_GET_DRAW_RUN_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.RAF_CLAIM_PRIZE_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.JP_GET_ELIGIBLE_GAMES_RESPONSE, this.dispatchProtocolResponse), this._tracker.registerHandler(ClassId.JP_GET_WINNERS_RESPONSE, this.dispatchProtocolResponse)
            }
            return _.start = function(e) {
                return this._instance || (this._instance = new this(e))
            }, _.clear = function() {
                this._instance = void 0, InteractionMaster.clear()
            }, _.blockScrollBehindFrame = function(e, t) {
                "remove" === e && null === _._bodyOverflowCss && "100%" === t.style.width && "100%" === t.style.height && (t = window.getComputedStyle(document.body).overflowY || window.getComputedStyle(document.body).overflow) && "hidden" !== t && (_._bodyOverflowCss = t, document.body.style.overflowY = "hidden"), null !== _._bodyOverflowCss && "recover" === e && (document.body.style.overflowY = _._bodyOverflowCss || "auto", _._bodyOverflowCss = null)
            }, _._bodyOverflowCss = null, _
        })(),
        ProductType;

    function assign(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n, i = arguments[t];
            for (n in i) e[n] = i[n]
        }
        return e
    }(e => {
        e[e.GAMIFICATION = 100] = "GAMIFICATION", e[e.ACQUISITION = 115] = "ACQUISITION", e[e.INBOX = 117] = "INBOX"
    })(ProductType = ProductType || {});
    var defaultConverter = {
        read: function(e) {
            return (e = '"' === e[0] ? e.slice(1, -1) : e).replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        },
        write: function(e) {
            return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
        }
    };

    function init(o, a) {
        function n(e, t, n) {
            if ("undefined" != typeof document) {
                "number" == typeof(n = assign({}, a, n)).expires && (n.expires = new Date(Date.now() + 864e5 * n.expires)), n.expires && (n.expires = n.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                var i, r = "";
                for (i in n) n[i] && (r += "; " + i, !0 !== n[i]) && (r += "=" + n[i].split(";")[0]);
                return document.cookie = e + "=" + o.write(t, e) + r
            }
        }
        return Object.create({
            set: n,
            get: function(e) {
                if ("undefined" != typeof document && (!arguments.length || e)) {
                    for (var t = document.cookie ? document.cookie.split("; ") : [], n = {}, i = 0; i < t.length; i++) {
                        var r = t[i].split("="),
                            a = r.slice(1).join("=");
                        try {
                            var s = decodeURIComponent(r[0]);
                            if (n[s] = o.read(a, s), e === s) break
                        } catch (e) {}
                    }
                    return e ? n[e] : n
                }
            },
            remove: function(e, t) {
                n(e, "", assign({}, t, {
                    expires: -1
                }))
            },
            withAttributes: function(e) {
                return init(this.converter, assign({}, this.attributes, e))
            },
            withConverter: function(e) {
                return init(assign({}, this.converter, e), this.attributes)
            }
        }, {
            attributes: {
                value: Object.freeze(a)
            },
            converter: {
                value: Object.freeze(o)
            }
        })
    }
    var api = init(defaultConverter, {
            path: "/"
        }),
        ClientActivityRequestId, extendStatics$1 = ((e => {
            e[e.MINI_WIDGET_SHOWN = 1] = "MINI_WIDGET_SHOWN", e[e.MINI_WIDGET_HIDDEN = 2] = "MINI_WIDGET_HIDDEN", e[e.MINI_WIDGET_CLICKED = 3] = "MINI_WIDGET_CLICKED", e[e.INBOX_MESSAGE_SHOWN = 4] = "INBOX_MESSAGE_SHOWN", e[e.INBOX_MESSAGE_HIDDEN = 5] = "INBOX_MESSAGE_HIDDEN", e[e.INBOX_CLICKED = 6] = "INBOX_CLICKED", e[e.BIG_WIDGET_SHOWN = 7] = "BIG_WIDGET_SHOWN", e[e.BIG_WIDGET_HIDDEN = 8] = "BIG_WIDGET_HIDDEN", e[e.MISSIONS_SHOWN = 9] = "MISSIONS_SHOWN", e[e.BOARD_SHOWN = 10] = "BOARD_SHOWN", e[e.LEVELS_SHOWN = 11] = "LEVELS_SHOWN", e[e.BONUSES_SHOWN = 12] = "BONUSES_SHOWN", e[e.STORE_SHOWN = 13] = "STORE_SHOWN", e[e.ACTIVITY_LOG_SHOWN = 14] = "ACTIVITY_LOG_SHOWN", e[e.LOGOUT = 20] = "LOGOUT", e[e.LOGIN = 21] = "LOGIN", e[e.ENGAGEMENT_FAILED = 30] = "ENGAGEMENT_FAILED", e[e.ENGAGEMENT_ACTION = 31] = "ENGAGEMENT_ACTION", e[e.ENGAGEMENT_IMPRESSION = 32] = "ENGAGEMENT_IMPRESSION", e[e.MISSIONS_CLICK = 201] = "MISSIONS_CLICK"
        })(ClientActivityRequestId = ClientActivityRequestId || {}), function(e, t) {
            return (extendStatics$1 = Object.setPrototypeOf || ({
                    __proto__: []
                }
                instanceof Array ? function(e, t) {
                    e.__proto__ = t
                } : function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                }))(e, t)
        });

    function __extends$1(e, t) {
        function n() {
            this.constructor = e
        }
        extendStatics$1(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }
    var __assign$1 = function() {
            return (__assign$1 = Object.assign || function(e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }).apply(this, arguments)
        },
        Severity;

    function __read$1(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var i, r, a = n.call(e),
            s = [];
        try {
            for (;
                (void 0 === t || 0 < t--) && !(i = a.next()).done;) s.push(i.value)
        } catch (e) {
            r = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (n = a.return) && n.call(a)
            } finally {
                if (r) throw r.error
            }
        }
        return s
    }(e => {
        e.Fatal = "fatal", e.Error = "error", e.Warning = "warning", e.Log = "log", e.Info = "info", e.Debug = "debug", e.Critical = "critical"
    })(Severity = Severity || {});
    var __assign$2 = function() {
        return (__assign$2 = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }).apply(this, arguments)
    };

    function __read$2(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var i, r, a = n.call(e),
            s = [];
        try {
            for (;
                (void 0 === t || 0 < t--) && !(i = a.next()).done;) s.push(i.value)
        } catch (e) {
            r = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (n = a.return) && n.call(a)
            } finally {
                if (r) throw r.error
            }
        }
        return s
    }

    function __spread$1() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read$2(arguments[t]));
        return e
    }

    function forget(e) {
        e.then(null, function(e) {
            console.error(e)
        })
    }

    function isBrowserBundle() {
        return "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__
    }

    function isNodeEnv() {
        return !isBrowserBundle() && "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)
    }

    function dynamicRequire(e, t) {
        return e.require(t)
    }
    var fallbackGlobalObject = {};

    function getGlobalObject() {
        return isNodeEnv() ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : fallbackGlobalObject
    }

    function getGlobalSingleton(e, t, n) {
        n = n || getGlobalObject(), n = n.__SENTRY__ = n.__SENTRY__ || {};
        return n[e] || (n[e] = t())
    }
    var objectToString = Object.prototype.toString;

    function isError(e) {
        switch (objectToString.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return 1;
            default:
                return isInstanceOf(e, Error)
        }
    }

    function isBuiltin(e, t) {
        return objectToString.call(e) === "[object " + t + "]"
    }

    function isErrorEvent(e) {
        return isBuiltin(e, "ErrorEvent")
    }

    function isDOMError(e) {
        return isBuiltin(e, "DOMError")
    }

    function isDOMException(e) {
        return isBuiltin(e, "DOMException")
    }

    function isString(e) {
        return isBuiltin(e, "String")
    }

    function isPrimitive(e) {
        return null === e || "object" != typeof e && "function" != typeof e
    }

    function isPlainObject(e) {
        return isBuiltin(e, "Object")
    }

    function isEvent(e) {
        return "undefined" != typeof Event && isInstanceOf(e, Event)
    }

    function isElement(e) {
        return "undefined" != typeof Element && isInstanceOf(e, Element)
    }

    function isThenable(e) {
        return Boolean(e && e.then && "function" == typeof e.then)
    }

    function isSyntheticEvent(e) {
        return isPlainObject(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
    }

    function isNaN$1(e) {
        return "number" == typeof e && e != e
    }

    function isInstanceOf(e, t) {
        try {
            return e instanceof t
        } catch (e) {
            return !1
        }
    }

    function htmlTreeAsString(e, t) {
        try {
            for (var n, i = e, r = [], a = 0, s = 0, o = " > ".length; i && a++ < 5 && !("html" === (n = _htmlElementAsString(i, t)) || 1 < a && 80 <= s + r.length * o + n.length);) r.push(n), s += n.length, i = i.parentNode;
            return r.reverse().join(" > ")
        } catch (e) {
            return "<unknown>"
        }
    }

    function _htmlElementAsString(e, t) {
        var n, i, r, a = e,
            s = [];
        if (!a || !a.tagName) return "";
        s.push(a.tagName.toLowerCase());
        e = t && t.length ? t.filter(function(e) {
            return a.getAttribute(e)
        }).map(function(e) {
            return [e, a.getAttribute(e)]
        }) : null;
        if (e && e.length) e.forEach(function(e) {
            s.push("[" + e[0] + '="' + e[1] + '"]')
        });
        else if (a.id && s.push("#" + a.id), (t = a.className) && isString(t))
            for (n = t.split(/\s+/), c = 0; c < n.length; c++) s.push("." + n[c]);
        for (var o = ["type", "name", "title", "alt"], c = 0; c < o.length; c++)(r = a.getAttribute(i = o[c])) && s.push("[" + i + '="' + r + '"]');
        return s.join("")
    }
    var extendStatics$2 = function(e, t) {
        return (extendStatics$2 = Object.setPrototypeOf || ({
                __proto__: []
            }
            instanceof Array ? function(e, t) {
                e.__proto__ = t
            } : function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            }))(e, t)
    };

    function __extends$2(e, t) {
        function n() {
            this.constructor = e
        }
        extendStatics$2(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }
    var __assign$3 = function() {
        return (__assign$3 = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }).apply(this, arguments)
    };

    function __values$1(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            i = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return {
                    value: (e = e && i >= e.length ? void 0 : e) && e[i++],
                    done: !e
                }
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function __read$3(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var i, r, a = n.call(e),
            s = [];
        try {
            for (;
                (void 0 === t || 0 < t--) && !(i = a.next()).done;) s.push(i.value)
        } catch (e) {
            r = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (n = a.return) && n.call(a)
            } finally {
                if (r) throw r.error
            }
        }
        return s
    }

    function __spread$2() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read$3(arguments[t]));
        return e
    }
    var setPrototypeOf = Object.setPrototypeOf || ({
            __proto__: []
        }
        instanceof Array ? setProtoOf : mixinProperties);

    function setProtoOf(e, t) {
        return e.__proto__ = t, e
    }

    function mixinProperties(e, t) {
        for (var n in t) Object.prototype.hasOwnProperty.call(e, n) || (e[n] = t[n]);
        return e
    }
    var SentryError = (i => {
            function e(e) {
                var t = this.constructor,
                    n = i.call(this, e) || this;
                return n.message = e, n.name = t.prototype.constructor.name, setPrototypeOf(n, t.prototype), n
            }
            return __extends$2(e, i), e
        })(Error),
        IS_DEBUG_BUILD = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function isValidProtocol(e) {
        return "http" === e || "https" === e
    }

    function dsnToString(e, t) {
        var n = e.host,
            i = e.path,
            r = e.pass,
            a = e.port;
        return e.protocol + "://" + e.publicKey + ((t = void 0 === t ? !1 : t) && r ? ":" + r : "") + "@" + n + (a ? ":" + a : "") + "/" + (i && i + "/") + e.projectId
    }

    function dsnFromString(e) {
        var t, n, i, r, a, s, o, c = DSN_REGEX.exec(e);
        if (c) return t = (c = __read$3(c.slice(1), 6))[0], n = c[1], i = void 0 === (i = c[2]) ? "" : i, r = c[3], a = void 0 === (a = c[4]) ? "" : a, s = "", 1 < (o = (c = c[5]).split("/")).length && (s = o.slice(0, -1).join("/"), c = o.pop()), dsnFromComponents({
            host: r,
            pass: i,
            path: s,
            projectId: c = c && (o = c.match(/^\d+/)) ? o[0] : c,
            port: a,
            protocol: t,
            publicKey: n
        });
        throw new SentryError("Invalid Sentry Dsn: " + e)
    }

    function dsnFromComponents(e) {
        return "user" in e && !("publicKey" in e) && (e.publicKey = e.user), {
            user: e.publicKey || "",
            protocol: e.protocol,
            publicKey: e.publicKey || "",
            pass: e.pass || "",
            host: e.host,
            port: e.port || "",
            path: e.path || "",
            projectId: e.projectId
        }
    }

    function validateDsn(t) {
        if (IS_DEBUG_BUILD) {
            var e = t.port,
                n = t.projectId,
                i = t.protocol;
            if (["protocol", "publicKey", "host", "projectId"].forEach(function(e) {
                    if (!t[e]) throw new SentryError("Invalid Sentry Dsn: " + e + " missing")
                }), !n.match(/^\d+$/)) throw new SentryError("Invalid Sentry Dsn: Invalid projectId " + n);
            if (!isValidProtocol(i)) throw new SentryError("Invalid Sentry Dsn: Invalid protocol " + i);
            if (e && isNaN(parseInt(e, 10))) throw new SentryError("Invalid Sentry Dsn: Invalid port " + e)
        }
    }

    function makeDsn(e) {
        e = ("string" == typeof e ? dsnFromString : dsnFromComponents)(e);
        return validateDsn(e), e
    }
    var SeverityLevels = ["fatal", "error", "warning", "log", "info", "debug", "critical"],
        global$1 = getGlobalObject(),
        PREFIX = "Sentry Logger ",
        CONSOLE_LEVELS = ["debug", "info", "warn", "error", "log", "assert"],
        logger$1;

    function consoleSandbox(e) {
        var n = getGlobalObject();
        if (!("console" in n)) return e();
        var i = n.console,
            r = {};
        CONSOLE_LEVELS.forEach(function(e) {
            var t = i[e] && i[e].__sentry_original__;
            e in n.console && t && (r[e] = i[e], i[e] = t)
        });
        try {
            return e()
        } finally {
            Object.keys(r).forEach(function(e) {
                i[e] = r[e]
            })
        }
    }

    function makeLogger() {
        var i = !1,
            t = {
                enable: function() {
                    i = !0
                },
                disable: function() {
                    i = !1
                }
            };
        return IS_DEBUG_BUILD ? CONSOLE_LEVELS.forEach(function(n) {
            t[n] = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                i && consoleSandbox(function() {
                    var e;
                    (e = global$1.console)[n].apply(e, __spread$2([PREFIX + "[" + n + "]:"], t))
                })
            }
        }) : CONSOLE_LEVELS.forEach(function(e) {
            t[e] = function() {}
        }), t
    }

    function truncate(e, t) {
        return void 0 === t && (t = 0), "string" != typeof e || 0 === t || e.length <= t ? e : e.substr(0, t) + "..."
    }

    function safeJoin(e, t) {
        if (!Array.isArray(e)) return "";
        for (var n = [], i = 0; i < e.length; i++) {
            var r = e[i];
            try {
                n.push(String(r))
            } catch (e) {
                n.push("[value cannot be serialized]")
            }
        }
        return n.join(t)
    }

    function fill(e, t, n) {
        if (t in e) {
            var i = e[t],
                n = n(i);
            if ("function" == typeof n) try {
                markFunctionWrapped(n, i)
            } catch (e) {}
            e[t] = n
        }
    }

    function addNonEnumerableProperty(e, t, n) {
        Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0
        })
    }

    function markFunctionWrapped(e, t) {
        var n = t.prototype || {};
        e.prototype = t.prototype = n, addNonEnumerableProperty(e, "__sentry_original__", t)
    }

    function urlEncode(t) {
        return Object.keys(t).map(function(e) {
            return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
        }).join("&")
    }

    function convertToPlainObject(e) {
        var t, n = e;
        return isError(e) ? n = __assign$3({
            message: e.message,
            name: e.name,
            stack: e.stack
        }, getOwnProperties(e)) : isEvent(e) && (n = __assign$3({
            type: (t = e).type,
            target: serializeEventTarget(t.target),
            currentTarget: serializeEventTarget(t.currentTarget)
        }, getOwnProperties(t)), "undefined" != typeof CustomEvent) && isInstanceOf(e, CustomEvent) && (n.detail = t.detail), n
    }

    function serializeEventTarget(e) {
        try {
            return isElement(e) ? htmlTreeAsString(e) : Object.prototype.toString.call(e)
        } catch (e) {
            return "<unknown>"
        }
    }

    function getOwnProperties(e) {
        var t, n = {};
        for (t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
        return n
    }

    function extractExceptionKeysForMessage(e, t) {
        void 0 === t && (t = 40);
        var n = Object.keys(convertToPlainObject(e));
        if (n.sort(), !n.length) return "[object has no keys]";
        if (n[0].length >= t) return truncate(n[0], t);
        for (var i = n.length; 0 < i; i--) {
            var r = n.slice(0, i).join(", ");
            if (!(r.length > t)) return i === n.length ? r : truncate(r, t)
        }
        return ""
    }

    function dropUndefinedKeys(e) {
        var t, n;
        if (isPlainObject(e)) {
            var i = {};
            try {
                for (var r = __values$1(Object.keys(e)), a = r.next(); !a.done; a = r.next()) {
                    var s = a.value;
                    void 0 !== e[s] && (i[s] = dropUndefinedKeys(e[s]))
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (n = r.return) && n.call(r)
                } finally {
                    if (t) throw t.error
                }
            }
            return i
        }
        return Array.isArray(e) ? e.map(dropUndefinedKeys) : e
    }
    var logger$1 = IS_DEBUG_BUILD ? getGlobalSingleton("logger", makeLogger) : makeLogger(),
        STACKTRACE_LIMIT = 50;

    function createStackParser() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var p = e.sort(function(e, t) {
            return e[0] - t[0]
        }).map(function(e) {
            return e[1]
        });
        return function(e, t) {
            void 0 === t && (t = 0);
            var n, i, r, a, s = [];
            try {
                for (var o = __values$1(e.split("\n").slice(t)), c = o.next(); !c.done; c = o.next()) {
                    var l = c.value;
                    try {
                        r = void 0;
                        for (var _ = __values$1(p), u = _.next(); !u.done; u = _.next()) {
                            var d = (0, u.value)(l);
                            if (d) {
                                s.push(d);
                                break
                            }
                        }
                    } catch (e) {
                        r = {
                            error: e
                        }
                    } finally {
                        try {
                            u && !u.done && (a = _.return) && a.call(_)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                }
            } catch (e) {
                n = {
                    error: e
                }
            } finally {
                try {
                    c && !c.done && (i = o.return) && i.call(o)
                } finally {
                    if (n) throw n.error
                }
            }
            return stripSentryFramesAndReverse(s)
        }
    }

    function stripSentryFramesAndReverse(e) {
        var t, n;
        return e.length ? (e = (t = e)[0].function || "", n = t[t.length - 1].function || "", -1 === e.indexOf("captureMessage") && -1 === e.indexOf("captureException") || (t = t.slice(1)), (t = -1 !== n.indexOf("sentryWrapped") ? t.slice(0, -1) : t).slice(0, STACKTRACE_LIMIT).map(function(e) {
            return __assign$3(__assign$3({}, e), {
                filename: e.filename || t[0].filename,
                function: e.function || "?"
            })
        }).reverse()) : []
    }
    var defaultFunctionName = "<anonymous>";

    function getFunctionName(e) {
        try {
            return e && "function" == typeof e ? e.name || defaultFunctionName : defaultFunctionName
        } catch (e) {
            return defaultFunctionName
        }
    }

    function supportsFetch() {
        if ("fetch" in getGlobalObject()) try {
            return new Headers, new Request(""), new Response, 1
        } catch (e) {}
    }

    function isNativeFetch(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }

    function supportsNativeFetch() {
        if (supportsFetch()) {
            var e = getGlobalObject();
            if (isNativeFetch(e.fetch)) return 1;
            var t = !1,
                e = e.document;
            if (e && "function" == typeof e.createElement) try {
                var n = e.createElement("iframe");
                n.hidden = !0, e.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = isNativeFetch(n.contentWindow.fetch)), e.head.removeChild(n)
            } catch (e) {
                IS_DEBUG_BUILD && logger$1.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
            }
            return t
        }
    }

    function supportsReferrerPolicy() {
        if (supportsFetch()) try {
            return new Request("_", {
                referrerPolicy: "origin"
            }), 1
        } catch (e) {}
    }

    function supportsHistory() {
        var e = getGlobalObject(),
            t = e.chrome,
            t = t && t.app && t.app.runtime,
            e = "history" in e && !!e.history.pushState && !!e.history.replaceState;
        return !t && e
    }
    var global$2 = getGlobalObject(),
        handlers = {},
        instrumented = {},
        lastHref;

    function instrument(e) {
        if (!instrumented[e]) switch (instrumented[e] = !0, e) {
            case "console":
                instrumentConsole();
                break;
            case "dom":
                instrumentDOM();
                break;
            case "xhr":
                instrumentXHR();
                break;
            case "fetch":
                instrumentFetch();
                break;
            case "history":
                instrumentHistory();
                break;
            case "error":
                instrumentError();
                break;
            case "unhandledrejection":
                instrumentUnhandledRejection();
                break;
            default:
                IS_DEBUG_BUILD && logger$1.warn("unknown instrumentation type:", e)
        }
    }

    function addInstrumentationHandler(e, t) {
        handlers[e] = handlers[e] || [], handlers[e].push(t), instrument(e)
    }

    function triggerHandlers(t, e) {
        var n, i;
        if (t && handlers[t]) try {
            for (var r = __values$1(handlers[t] || []), a = r.next(); !a.done; a = r.next()) {
                var s = a.value;
                try {
                    s(e)
                } catch (e) {
                    IS_DEBUG_BUILD && logger$1.error("Error while triggering instrumentation handler.\nType: " + t + "\nName: " + getFunctionName(s) + "\nError:", e)
                }
            }
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                a && !a.done && (i = r.return) && i.call(r)
            } finally {
                if (n) throw n.error
            }
        }
    }

    function instrumentConsole() {
        "console" in global$2 && CONSOLE_LEVELS.forEach(function(i) {
            i in global$2.console && fill(global$2.console, i, function(n) {
                return function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    triggerHandlers("console", {
                        args: e,
                        level: i
                    }), n && n.apply(global$2.console, e)
                }
            })
        })
    }

    function instrumentFetch() {
        supportsNativeFetch() && fill(global$2, "fetch", function(i) {
            return function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = {
                    args: e,
                    fetchData: {
                        method: getFetchMethod(e),
                        url: getFetchUrl(e)
                    },
                    startTimestamp: Date.now()
                };
                return triggerHandlers("fetch", __assign$3({}, n)), i.apply(global$2, e).then(function(e) {
                    return triggerHandlers("fetch", __assign$3(__assign$3({}, n), {
                        endTimestamp: Date.now(),
                        response: e
                    })), e
                }, function(e) {
                    throw triggerHandlers("fetch", __assign$3(__assign$3({}, n), {
                        endTimestamp: Date.now(),
                        error: e
                    })), e
                })
            }
        })
    }

    function getFetchMethod(e) {
        return void 0 === e && (e = []), "Request" in global$2 && isInstanceOf(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
    }

    function getFetchUrl(e) {
        return "string" == typeof(e = void 0 === e ? [] : e)[0] ? e[0] : "Request" in global$2 && isInstanceOf(e[0], Request) ? e[0].url : String(e[0])
    }

    function instrumentXHR() {
        var e;
        "XMLHttpRequest" in global$2 && (fill(e = XMLHttpRequest.prototype, "open", function(s) {
            return function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];

                function i() {
                    if (4 === r.readyState) {
                        try {
                            a.status_code = r.status
                        } catch (e) {}
                        triggerHandlers("xhr", {
                            args: e,
                            endTimestamp: Date.now(),
                            startTimestamp: Date.now(),
                            xhr: r
                        })
                    }
                }
                var r = this,
                    n = e[1],
                    a = r.__sentry_xhr__ = {
                        method: isString(e[0]) ? e[0].toUpperCase() : e[0],
                        url: e[1]
                    };
                isString(n) && "POST" === a.method && n.match(/sentry_key/) && (r.__sentry_own_request__ = !0);
                return "onreadystatechange" in r && "function" == typeof r.onreadystatechange ? fill(r, "onreadystatechange", function(n) {
                    return function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return i(), n.apply(r, e)
                    }
                }) : r.addEventListener("readystatechange", i), s.apply(r, e)
            }
        }), fill(e, "send", function(n) {
            return function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return this.__sentry_xhr__ && void 0 !== e[0] && (this.__sentry_xhr__.body = e[0]), triggerHandlers("xhr", {
                    args: e,
                    startTimestamp: Date.now(),
                    xhr: this
                }), n.apply(this, e)
            }
        }))
    }

    function instrumentHistory() {
        var i;

        function e(r) {
            return function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n, i = 2 < e.length ? e[2] : void 0;
                return i && (n = lastHref, i = String(i), triggerHandlers("history", {
                    from: n,
                    to: lastHref = i
                })), r.apply(this, e)
            }
        }
        supportsHistory() && (i = global$2.onpopstate, global$2.onpopstate = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = global$2.location.href;
            if (triggerHandlers("history", {
                    from: lastHref,
                    to: lastHref = n
                }), i) try {
                return i.apply(this, e)
            } catch (e) {}
        }, fill(global$2.history, "pushState", e), fill(global$2.history, "replaceState", e))
    }
    var debounceDuration = 1e3,
        debounceTimerID, lastCapturedEvent;

    function shouldShortcircuitPreviousDebounce(e, t) {
        if (!e) return 1;
        if (e.type !== t.type) return 1;
        try {
            if (e.target !== t.target) return 1
        } catch (e) {}
    }

    function shouldSkipDOMEvent(e) {
        if ("keypress" === e.type) {
            try {
                var t = e.target;
                if (!t || !t.tagName) return 1;
                if ("INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable) return
            } catch (e) {}
            return 1
        }
    }

    function makeDOMEventHandler(n, i) {
        return void 0 === i && (i = !1),
            function(e) {
                var t;
                e && lastCapturedEvent !== e && !shouldSkipDOMEvent(e) && (t = "keypress" === e.type ? "input" : e.type, void 0 !== debounceTimerID && !shouldShortcircuitPreviousDebounce(lastCapturedEvent, e) || (n({
                    event: e,
                    name: t,
                    global: i
                }), lastCapturedEvent = e), clearTimeout(debounceTimerID), debounceTimerID = global$2.setTimeout(function() {
                    debounceTimerID = void 0
                }, debounceDuration))
            }
    }

    function instrumentDOM() {
        var o, e;
        "document" in global$2 && (e = makeDOMEventHandler(o = triggerHandlers.bind(null, "dom"), !0), global$2.document.addEventListener("click", e, !1), global$2.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach(function(e) {
            e = global$2[e] && global$2[e].prototype;
            e && e.hasOwnProperty && e.hasOwnProperty("addEventListener") && (fill(e, "addEventListener", function(s) {
                return function(e, t, n) {
                    if ("click" === e || "keypress" == e) try {
                        var i, r = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                            a = r[e] = r[e] || {
                                refCount: 0
                            };
                        a.handler || (i = makeDOMEventHandler(o), a.handler = i, s.call(this, e, i, n)), a.refCount += 1
                    } catch (e) {}
                    return s.call(this, e, t, n)
                }
            }), fill(e, "removeEventListener", function(a) {
                return function(e, t, n) {
                    if ("click" === e || "keypress" == e) try {
                        var i = this.__sentry_instrumentation_handlers__ || {},
                            r = i[e];
                        r && (--r.refCount, r.refCount <= 0 && (a.call(this, e, r.handler, n), r.handler = void 0, delete i[e]), 0 === Object.keys(i).length) && delete this.__sentry_instrumentation_handlers__
                    } catch (e) {}
                    return a.call(this, e, t, n)
                }
            }))
        }))
    }
    var _oldOnErrorHandler = null;

    function instrumentError() {
        _oldOnErrorHandler = global$2.onerror, global$2.onerror = function(e, t, n, i, r) {
            return triggerHandlers("error", {
                column: i,
                error: r,
                line: n,
                msg: e,
                url: t
            }), !!_oldOnErrorHandler && _oldOnErrorHandler.apply(this, arguments)
        }
    }
    var _oldOnUnhandledRejectionHandler = null;

    function instrumentUnhandledRejection() {
        _oldOnUnhandledRejectionHandler = global$2.onunhandledrejection, global$2.onunhandledrejection = function(e) {
            return triggerHandlers("unhandledrejection", e), !_oldOnUnhandledRejectionHandler || _oldOnUnhandledRejectionHandler.apply(this, arguments)
        }
    }

    function memoBuilder() {
        var n = "function" == typeof WeakSet,
            i = n ? new WeakSet : [];
        return [function(e) {
            if (n) return !!i.has(e) || (i.add(e), !1);
            for (var t = 0; t < i.length; t++)
                if (i[t] === e) return !0;
            return i.push(e), !1
        }, function(e) {
            if (n) i.delete(e);
            else
                for (var t = 0; t < i.length; t++)
                    if (i[t] === e) {
                        i.splice(t, 1);
                        break
                    }
        }]
    }

    function uuid4() {
        var e, t = getGlobalObject(),
            t = t.crypto || t.msCrypto;
        return void 0 !== t && t.getRandomValues ? (e = new Uint16Array(8), t.getRandomValues(e), e[3] = 4095 & e[3] | 16384, e[4] = 16383 & e[4] | 32768, (t = function(e) {
            for (var t = e.toString(16); t.length < 4;) t = "0" + t;
            return t
        })(e[0]) + t(e[1]) + t(e[2]) + t(e[3]) + t(e[4]) + t(e[5]) + t(e[6]) + t(e[7])) : "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16)
        })
    }

    function parseUrl$1(e) {
        var t;
        return (e = e && e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/)) ? (t = e[6] || "", {
            host: e[4],
            path: e[5],
            protocol: e[2],
            relative: e[5] + t + (e[8] || "")
        }) : {}
    }

    function getFirstException(e) {
        return e.exception && e.exception.values ? e.exception.values[0] : void 0
    }

    function getEventDescription(e) {
        var t = e.message,
            n = e.event_id;
        return t || ((t = getFirstException(e)) ? t.type && t.value ? t.type + ": " + t.value : t.type || t.value || n || "<unknown>" : n || "<unknown>")
    }

    function addExceptionTypeValue(e, t, n) {
        e = e.exception = e.exception || {}, e = e.values = e.values || [], e = e[0] = e[0] || {};
        e.value || (e.value = t || ""), e.type || (e.type = n || "Error")
    }

    function addExceptionMechanism(e, t) {
        var n, e = getFirstException(e);
        e && (n = e.mechanism, e.mechanism = __assign$3(__assign$3(__assign$3({}, {
            type: "generic",
            handled: !0
        }), n), t), t) && "data" in t && (n = __assign$3(__assign$3({}, n && n.data), t.data), e.mechanism.data = n)
    }

    function checkOrSetAlreadyCaught(e) {
        if (e && e.__sentry_captured__) return 1;
        try {
            addNonEnumerableProperty(e, "__sentry_captured__", !0)
        } catch (e) {}
    }

    function normalize(e, t, n) {
        void 0 === t && (t = 1 / 0), void 0 === n && (n = 1 / 0);
        try {
            return visit("", e, t, n)
        } catch (e) {
            return {
                ERROR: "**non-serializable** (" + e + ")"
            }
        }
    }

    function normalizeToSize(e, t, n) {
        void 0 === n && (n = 102400);
        var i = normalize(e, t = void 0 === t ? 3 : t);
        return jsonSize(i) > n ? normalizeToSize(e, t - 1, n) : i
    }

    function visit(e, t, n, i, r) {
        void 0 === n && (n = 1 / 0), void 0 === i && (i = 1 / 0);
        var a = __read$3(r = void 0 === r ? memoBuilder() : r, 2),
            s = a[0],
            a = a[1],
            o = t;
        if (o && "function" == typeof o.toJSON) try {
            return o.toJSON()
        } catch (e) {}
        if (null === t || ["number", "boolean", "string"].includes(typeof t) && !isNaN$1(t)) return t;
        o = stringifyValue(e, t);
        if (!o.startsWith("[object ")) return o;
        if (0 === n) return o.replace("object ", "");
        if (s(t)) return "[Circular ~]";
        var c, l = Array.isArray(t) ? [] : {},
            _ = 0,
            u = isError(t) || isEvent(t) ? convertToPlainObject(t) : t;
        for (c in u)
            if (Object.prototype.hasOwnProperty.call(u, c)) {
                if (i <= _) {
                    l[c] = "[MaxProperties ~]";
                    break
                }
                var d = u[c];
                l[c] = visit(c, d, n - 1, i, r), _ += 1
            }
        return a(t), l
    }

    function stringifyValue(e, t) {
        try {
            return "domain" === e && t && "object" == typeof t && t._events ? "[Domain]" : "domainEmitter" === e ? "[DomainEmitter]" : "undefined" != typeof global && t === global ? "[Global]" : "undefined" != typeof window && t === window ? "[Window]" : "undefined" != typeof document && t === document ? "[Document]" : isSyntheticEvent(t) ? "[SyntheticEvent]" : "number" == typeof t && t != t ? "[NaN]" : void 0 === t ? "[undefined]" : "function" == typeof t ? "[Function: " + getFunctionName(t) + "]" : "symbol" == typeof t ? "[" + String(t) + "]" : "bigint" == typeof t ? "[BigInt: " + String(t) + "]" : "[object " + Object.getPrototypeOf(t).constructor.name + "]"
        } catch (e) {
            return "**non-serializable** (" + e + ")"
        }
    }

    function utf8Length(e) {
        return ~-encodeURI(e).split(/%..|./).length
    }

    function jsonSize(e) {
        return utf8Length(JSON.stringify(e))
    }

    function resolvedSyncPromise(t) {
        return new SyncPromise(function(e) {
            e(t)
        })
    }

    function rejectedSyncPromise(n) {
        return new SyncPromise(function(e, t) {
            t(n)
        })
    }
    var SyncPromise = (() => {
        function t(e) {
            var n = this;
            this._state = 0, this._handlers = [], this._resolve = function(e) {
                n._setResult(1, e)
            }, this._reject = function(e) {
                n._setResult(2, e)
            }, this._setResult = function(e, t) {
                0 === n._state && (isThenable(t) ? t.then(n._resolve, n._reject) : (n._state = e, n._value = t, n._executeHandlers()))
            }, this._executeHandlers = function() {
                var e;
                0 !== n._state && (e = n._handlers.slice(), n._handlers = [], e.forEach(function(e) {
                    e[0] || (1 === n._state && e[1](n._value), 2 === n._state && e[2](n._value), e[0] = !0)
                }))
            };
            try {
                e(this._resolve, this._reject)
            } catch (e) {
                this._reject(e)
            }
        }
        return t.prototype.then = function(i, r) {
            var e = this;
            return new t(function(t, n) {
                e._handlers.push([!1, function(e) {
                    if (i) try {
                        t(i(e))
                    } catch (e) {
                        n(e)
                    } else t(e)
                }, function(e) {
                    if (r) try {
                        t(r(e))
                    } catch (e) {
                        n(e)
                    } else n(e)
                }]), e._executeHandlers()
            })
        }, t.prototype.catch = function(e) {
            return this.then(function(e) {
                return e
            }, e)
        }, t.prototype.finally = function(r) {
            var a = this;
            return new t(function(e, t) {
                var n, i;
                a.then(function(e) {
                    i = !1, n = e, r && r()
                }, function(e) {
                    i = !0, n = e, r && r()
                }).then(function() {
                    (i ? t : e)(n)
                })
            })
        }, t
    })();

    function makePromiseBuffer(n) {
        var a = [];

        function i(e) {
            return a.splice(a.indexOf(e), 1)[0]
        }
        return {
            $: a,
            add: function(e) {
                var t;
                return void 0 === n || a.length < n ? (t = e(), -1 === a.indexOf(t) && a.push(t), t.then(function() {
                    return i(t)
                }).then(null, function() {
                    return i(t).then(null, function() {})
                }), t) : rejectedSyncPromise(new SentryError("Not adding Promise due to buffer limit reached."))
            },
            drain: function(e) {
                return new SyncPromise(function(t, n) {
                    var i = a.length;
                    if (!i) return t(!0);
                    var r = setTimeout(function() {
                        e && 0 < e && t(!1)
                    }, e);
                    a.forEach(function(e) {
                        resolvedSyncPromise(e).then(function() {
                            --i || (clearTimeout(r), t(!0))
                        }, n)
                    })
                })
            }
        }
    }

    function isSupportedSeverity(e) {
        return -1 !== SeverityLevels.indexOf(e)
    }

    function severityFromString(e) {
        return "warn" === e ? Severity.Warning : isSupportedSeverity(e) ? e : Severity.Log
    }

    function eventStatusFromHttpCode(e) {
        return 200 <= e && e < 300 ? "success" : 429 === e ? "rate_limit" : 400 <= e && e < 500 ? "invalid" : 500 <= e ? "failed" : "unknown"
    }
    var dateTimestampSource = {
        nowSeconds: function() {
            return Date.now() / 1e3
        }
    };

    function getBrowserPerformance() {
        var e = getGlobalObject().performance;
        if (e && e.now) return {
            now: function() {
                return e.now()
            },
            timeOrigin: Date.now() - e.now()
        }
    }

    function getNodePerformance() {
        try {
            return dynamicRequire(module, "perf_hooks").performance
        } catch (e) {}
    }
    var platformPerformance = (isNodeEnv() ? getNodePerformance : getBrowserPerformance)(),
        timestampSource = void 0 === platformPerformance ? dateTimestampSource : {
            nowSeconds: function() {
                return (platformPerformance.timeOrigin + platformPerformance.now()) / 1e3
            }
        },
        dateTimestampInSeconds = dateTimestampSource.nowSeconds.bind(dateTimestampSource),
        timestampInSeconds = timestampSource.nowSeconds.bind(timestampSource),
        browserPerformanceTimeOrigin = (() => {
            var e, t, n, i, r, a = getGlobalObject().performance;
            if (a && a.now) return r = a.now(), e = Date.now(), n = (t = a.timeOrigin ? Math.abs(a.timeOrigin + r - e) : 36e5) < 36e5, r = "number" == typeof(i = a.timing && a.timing.navigationStart) ? Math.abs(i + r - e) : 36e5, n || r < 36e5 ? t <= r ? a.timeOrigin : i : e
        })();

    function createEnvelope(e, t) {
        return [e, t = void 0 === t ? [] : t]
    }

    function getEnvelopeType(e) {
        e = __read$3(e, 2), e = __read$3(e[1], 1);
        return __read$3(e[0], 1)[0].type
    }

    function serializeEnvelope(e) {
        var e = __read$3(e, 2),
            t = e[0],
            e = e[1],
            t = JSON.stringify(t);
        return e.reduce(function(e, t) {
            var t = __read$3(t, 2),
                n = t[0],
                t = t[1],
                t = isPrimitive(t) ? String(t) : JSON.stringify(t);
            return e + "\n" + JSON.stringify(n) + "\n" + t
        }, t)
    }

    function createClientReportEnvelope(e, t, n) {
        return createEnvelope(t ? {
            dsn: t
        } : {}, [
            [{
                type: "client_report"
            }, {
                timestamp: n || dateTimestampInSeconds(),
                discarded_events: e
            }]
        ])
    }
    var DEFAULT_RETRY_AFTER = 6e4;

    function parseRetryAfterHeader(e, t) {
        void 0 === t && (t = Date.now());
        var n = parseInt("" + e, 10);
        return isNaN(n) ? (e = Date.parse("" + e), isNaN(e) ? DEFAULT_RETRY_AFTER : e - t) : 1e3 * n
    }

    function disabledUntil(e, t) {
        return e[t] || e.all || 0
    }

    function isRateLimited(e, t, n) {
        return void 0 === n && (n = Date.now()), disabledUntil(e, t) > n
    }

    function updateRateLimits(e, t, n) {
        void 0 === n && (n = Date.now());
        var i, r, a, s, o = __assign$3({}, e),
            e = t["x-sentry-rate-limits"],
            t = t["retry-after"];
        if (e) try {
            for (var c = __values$1(e.trim().split(",")), l = c.next(); !l.done; l = c.next()) {
                var _ = l.value.split(":", 2),
                    u = parseInt(_[0], 10),
                    d = 1e3 * (isNaN(u) ? 60 : u);
                if (_[1]) try {
                    a = void 0;
                    for (var p = __values$1(_[1].split(";")), h = p.next(); !h.done; h = p.next()) o[h.value] = n + d
                } catch (e) {
                    a = {
                        error: e
                    }
                } finally {
                    try {
                        h && !h.done && (s = p.return) && s.call(p)
                    } finally {
                        if (a) throw a.error
                    }
                } else o.all = n + d
            }
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                l && !l.done && (r = c.return) && r.call(c)
            } finally {
                if (i) throw i.error
            }
        } else t && (o.all = n + parseRetryAfterHeader(t, n));
        return o
    }
    var MAX_BREADCRUMBS = 100,
        Scope = (() => {
            function n() {
                this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
            }
            return n.clone = function(e) {
                var t = new n;
                return e && (t._breadcrumbs = __spread$1(e._breadcrumbs), t._tags = __assign$2({}, e._tags), t._extra = __assign$2({}, e._extra), t._contexts = __assign$2({}, e._contexts), t._user = e._user, t._level = e._level, t._span = e._span, t._session = e._session, t._transactionName = e._transactionName, t._fingerprint = e._fingerprint, t._eventProcessors = __spread$1(e._eventProcessors), t._requestSession = e._requestSession), t
            }, n.prototype.addScopeListener = function(e) {
                this._scopeListeners.push(e)
            }, n.prototype.addEventProcessor = function(e) {
                return this._eventProcessors.push(e), this
            }, n.prototype.setUser = function(e) {
                return this._user = e || {}, this._session && this._session.update({
                    user: e
                }), this._notifyScopeListeners(), this
            }, n.prototype.getUser = function() {
                return this._user
            }, n.prototype.getRequestSession = function() {
                return this._requestSession
            }, n.prototype.setRequestSession = function(e) {
                return this._requestSession = e, this
            }, n.prototype.setTags = function(e) {
                return this._tags = __assign$2(__assign$2({}, this._tags), e), this._notifyScopeListeners(), this
            }, n.prototype.setTag = function(e, t) {
                var n;
                return this._tags = __assign$2(__assign$2({}, this._tags), ((n = {})[e] = t, n)), this._notifyScopeListeners(), this
            }, n.prototype.setExtras = function(e) {
                return this._extra = __assign$2(__assign$2({}, this._extra), e), this._notifyScopeListeners(), this
            }, n.prototype.setExtra = function(e, t) {
                var n;
                return this._extra = __assign$2(__assign$2({}, this._extra), ((n = {})[e] = t, n)), this._notifyScopeListeners(), this
            }, n.prototype.setFingerprint = function(e) {
                return this._fingerprint = e, this._notifyScopeListeners(), this
            }, n.prototype.setLevel = function(e) {
                return this._level = e, this._notifyScopeListeners(), this
            }, n.prototype.setTransactionName = function(e) {
                return this._transactionName = e, this._notifyScopeListeners(), this
            }, n.prototype.setTransaction = function(e) {
                return this.setTransactionName(e)
            }, n.prototype.setContext = function(e, t) {
                var n;
                return null === t ? delete this._contexts[e] : this._contexts = __assign$2(__assign$2({}, this._contexts), ((n = {})[e] = t, n)), this._notifyScopeListeners(), this
            }, n.prototype.setSpan = function(e) {
                return this._span = e, this._notifyScopeListeners(), this
            }, n.prototype.getSpan = function() {
                return this._span
            }, n.prototype.getTransaction = function() {
                var e = this.getSpan();
                return e && e.transaction
            }, n.prototype.setSession = function(e) {
                return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
            }, n.prototype.getSession = function() {
                return this._session
            }, n.prototype.update = function(e) {
                if (e) {
                    var t;
                    if ("function" == typeof e) return (t = e(this)) instanceof n ? t : this;
                    e instanceof n ? (this._tags = __assign$2(__assign$2({}, this._tags), e._tags), this._extra = __assign$2(__assign$2({}, this._extra), e._extra), this._contexts = __assign$2(__assign$2({}, this._contexts), e._contexts), e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession)) : isPlainObject(e) && (this._tags = __assign$2(__assign$2({}, this._tags), e.tags), this._extra = __assign$2(__assign$2({}, this._extra), e.extra), this._contexts = __assign$2(__assign$2({}, this._contexts), e.contexts), e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession) && (this._requestSession = e.requestSession)
                }
                return this
            }, n.prototype.clear = function() {
                return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this
            }, n.prototype.addBreadcrumb = function(e, t) {
                t = "number" == typeof t ? Math.min(t, MAX_BREADCRUMBS) : MAX_BREADCRUMBS;
                return t <= 0 || (e = __assign$2({
                    timestamp: dateTimestampInSeconds()
                }, e), this._breadcrumbs = __spread$1(this._breadcrumbs, [e]).slice(-t), this._notifyScopeListeners()), this
            }, n.prototype.clearBreadcrumbs = function() {
                return this._breadcrumbs = [], this._notifyScopeListeners(), this
            }, n.prototype.applyToEvent = function(e, t) {
                var n;
                return this._extra && Object.keys(this._extra).length && (e.extra = __assign$2(__assign$2({}, this._extra), e.extra)), this._tags && Object.keys(this._tags).length && (e.tags = __assign$2(__assign$2({}, this._tags), e.tags)), this._user && Object.keys(this._user).length && (e.user = __assign$2(__assign$2({}, this._user), e.user)), this._contexts && Object.keys(this._contexts).length && (e.contexts = __assign$2(__assign$2({}, this._contexts), e.contexts)), this._level && (e.level = this._level), this._transactionName && (e.transaction = this._transactionName), this._span && (e.contexts = __assign$2({
                    trace: this._span.getTraceContext()
                }, e.contexts), n = this._span.transaction && this._span.transaction.name) && (e.tags = __assign$2({
                    transaction: n
                }, e.tags)), this._applyFingerprint(e), e.breadcrumbs = __spread$1(e.breadcrumbs || [], this._breadcrumbs), e.breadcrumbs = 0 < e.breadcrumbs.length ? e.breadcrumbs : void 0, e.sdkProcessingMetadata = this._sdkProcessingMetadata, this._notifyEventProcessors(__spread$1(getGlobalEventProcessors(), this._eventProcessors), e, t)
            }, n.prototype.setSDKProcessingMetadata = function(e) {
                return this._sdkProcessingMetadata = __assign$2(__assign$2({}, this._sdkProcessingMetadata), e), this
            }, n.prototype._notifyEventProcessors = function(i, r, a, s) {
                var o = this;
                return void 0 === s && (s = 0), new SyncPromise(function(t, e) {
                    var n = i[s];
                    null === r || "function" != typeof n ? t(r) : (isThenable(n = n(__assign$2({}, r), a)) ? n.then(function(e) {
                        return o._notifyEventProcessors(i, e, a, s + 1).then(t)
                    }) : o._notifyEventProcessors(i, n, a, s + 1).then(t)).then(null, e)
                })
            }, n.prototype._notifyScopeListeners = function() {
                var t = this;
                this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(function(e) {
                    e(t)
                }), this._notifyingListeners = !1)
            }, n.prototype._applyFingerprint = function(e) {
                e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [], this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
            }, n
        })();

    function getGlobalEventProcessors() {
        return getGlobalSingleton("globalEventProcessors", function() {
            return []
        })
    }

    function addGlobalEventProcessor(e) {
        getGlobalEventProcessors().push(e)
    }
    var Session = (() => {
            function e(e) {
                this.errors = 0, this.sid = uuid4(), this.duration = 0, this.status = "ok", this.init = !0, this.ignoreDuration = !1;
                var t = timestampInSeconds();
                this.timestamp = t, this.started = t, e && this.update(e)
            }
            return e.prototype.update = function(e) {
                var t;
                (e = void 0 === e ? {} : e).user && (!this.ipAddress && e.user.ip_address && (this.ipAddress = e.user.ip_address), this.did || e.did || (this.did = e.user.id || e.user.email || e.user.username)), this.timestamp = e.timestamp || timestampInSeconds(), e.ignoreDuration && (this.ignoreDuration = e.ignoreDuration), e.sid && (this.sid = 32 === e.sid.length ? e.sid : uuid4()), void 0 !== e.init && (this.init = e.init), !this.did && e.did && (this.did = "" + e.did), "number" == typeof e.started && (this.started = e.started), this.ignoreDuration ? this.duration = void 0 : "number" == typeof e.duration ? this.duration = e.duration : (t = this.timestamp - this.started, this.duration = 0 <= t ? t : 0), e.release && (this.release = e.release), e.environment && (this.environment = e.environment), !this.ipAddress && e.ipAddress && (this.ipAddress = e.ipAddress), !this.userAgent && e.userAgent && (this.userAgent = e.userAgent), "number" == typeof e.errors && (this.errors = e.errors), e.status && (this.status = e.status)
            }, e.prototype.close = function(e) {
                e ? this.update({
                    status: e
                }) : "ok" === this.status ? this.update({
                    status: "exited"
                }) : this.update()
            }, e.prototype.toJSON = function() {
                return dropUndefinedKeys({
                    sid: "" + this.sid,
                    init: this.init,
                    started: new Date(1e3 * this.started).toISOString(),
                    timestamp: new Date(1e3 * this.timestamp).toISOString(),
                    status: this.status,
                    errors: this.errors,
                    did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
                    duration: this.duration,
                    attrs: {
                        release: this.release,
                        environment: this.environment,
                        ip_address: this.ipAddress,
                        user_agent: this.userAgent
                    }
                })
            }, e
        })(),
        IS_DEBUG_BUILD$1 = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        API_VERSION = 4,
        DEFAULT_BREADCRUMBS = 100,
        Hub = (() => {
            function e(e, t, n) {
                void 0 === t && (t = new Scope), this._version = n = void 0 === n ? API_VERSION : n, this._stack = [{}], this.getStackTop().scope = t, e && this.bindClient(e)
            }
            return e.prototype.isOlderThan = function(e) {
                return this._version < e
            }, e.prototype.bindClient = function(e) {
                (this.getStackTop().client = e) && e.setupIntegrations && e.setupIntegrations()
            }, e.prototype.pushScope = function() {
                var e = Scope.clone(this.getScope());
                return this.getStack().push({
                    client: this.getClient(),
                    scope: e
                }), e
            }, e.prototype.popScope = function() {
                return !(this.getStack().length <= 1 || !this.getStack().pop())
            }, e.prototype.withScope = function(e) {
                var t = this.pushScope();
                try {
                    e(t)
                } finally {
                    this.popScope()
                }
            }, e.prototype.getClient = function() {
                return this.getStackTop().client
            }, e.prototype.getScope = function() {
                return this.getStackTop().scope
            }, e.prototype.getStack = function() {
                return this._stack
            }, e.prototype.getStackTop = function() {
                return this._stack[this._stack.length - 1]
            }, e.prototype.captureException = function(e, t) {
                var n = this._lastEventId = t && t.event_id ? t.event_id : uuid4(),
                    i = t;
                if (!t) {
                    t = void 0;
                    try {
                        throw new Error("Sentry syntheticException")
                    } catch (e) {
                        t = e
                    }
                    i = {
                        originalException: e,
                        syntheticException: t
                    }
                }
                return this._invokeClient("captureException", e, __assign$2(__assign$2({}, i), {
                    event_id: n
                })), n
            }, e.prototype.captureMessage = function(e, t, n) {
                var i = this._lastEventId = n && n.event_id ? n.event_id : uuid4(),
                    r = n;
                if (!n) {
                    n = void 0;
                    try {
                        throw new Error(e)
                    } catch (e) {
                        n = e
                    }
                    r = {
                        originalException: e,
                        syntheticException: n
                    }
                }
                return this._invokeClient("captureMessage", e, t, __assign$2(__assign$2({}, r), {
                    event_id: i
                })), i
            }, e.prototype.captureEvent = function(e, t) {
                var n = t && t.event_id ? t.event_id : uuid4();
                return "transaction" !== e.type && (this._lastEventId = n), this._invokeClient("captureEvent", e, __assign$2(__assign$2({}, t), {
                    event_id: n
                })), n
            }, e.prototype.lastEventId = function() {
                return this._lastEventId
            }, e.prototype.addBreadcrumb = function(e, t) {
                var n, i, r, a = this.getStackTop(),
                    s = a.scope,
                    a = a.client;
                s && a && (r = (a = a.getOptions && a.getOptions() || {}).beforeBreadcrumb, n = void 0 === r ? null : r, (a = void 0 === (r = a.maxBreadcrumbs) ? DEFAULT_BREADCRUMBS : r) <= 0 || (r = dateTimestampInSeconds(), i = __assign$2({
                    timestamp: r
                }, e), null !== (r = n ? consoleSandbox(function() {
                    return n(i, t)
                }) : i) && s.addBreadcrumb(r, a)))
            }, e.prototype.setUser = function(e) {
                var t = this.getScope();
                t && t.setUser(e)
            }, e.prototype.setTags = function(e) {
                var t = this.getScope();
                t && t.setTags(e)
            }, e.prototype.setExtras = function(e) {
                var t = this.getScope();
                t && t.setExtras(e)
            }, e.prototype.setTag = function(e, t) {
                var n = this.getScope();
                n && n.setTag(e, t)
            }, e.prototype.setExtra = function(e, t) {
                var n = this.getScope();
                n && n.setExtra(e, t)
            }, e.prototype.setContext = function(e, t) {
                var n = this.getScope();
                n && n.setContext(e, t)
            }, e.prototype.configureScope = function(e) {
                var t = this.getStackTop(),
                    n = t.scope;
                n && t.client && e(n)
            }, e.prototype.run = function(e) {
                var t = makeMain(this);
                try {
                    e(this)
                } finally {
                    makeMain(t)
                }
            }, e.prototype.getIntegration = function(t) {
                var e = this.getClient();
                if (!e) return null;
                try {
                    return e.getIntegration(t)
                } catch (e) {
                    return IS_DEBUG_BUILD$1 && logger$1.warn("Cannot retrieve integration " + t.id + " from the current Hub"), null
                }
            }, e.prototype.startSpan = function(e) {
                return this._callExtensionMethod("startSpan", e)
            }, e.prototype.startTransaction = function(e, t) {
                return this._callExtensionMethod("startTransaction", e, t)
            }, e.prototype.traceHeaders = function() {
                return this._callExtensionMethod("traceHeaders")
            }, e.prototype.captureSession = function(e) {
                if (e = void 0 === e ? !1 : e) return this.endSession();
                this._sendSessionUpdate()
            }, e.prototype.endSession = function() {
                var e = this.getStackTop(),
                    e = e && e.scope,
                    t = e && e.getSession();
                t && t.close(), this._sendSessionUpdate(), e && e.setSession()
            }, e.prototype.startSession = function(e) {
                var t = this.getStackTop(),
                    n = t.scope,
                    t = t.client,
                    t = t && t.getOptions() || {},
                    i = t.release,
                    t = t.environment,
                    r = (getGlobalObject().navigator || {}).userAgent,
                    i = new Session(__assign$2(__assign$2(__assign$2({
                        release: i,
                        environment: t
                    }, n && {
                        user: n.getUser()
                    }), r && {
                        userAgent: r
                    }), e));
                return n && ((t = n.getSession && n.getSession()) && "ok" === t.status && t.update({
                    status: "exited"
                }), this.endSession(), n.setSession(i)), i
            }, e.prototype._sendSessionUpdate = function() {
                var e = this.getStackTop(),
                    t = e.scope,
                    e = e.client;
                t && (t = t.getSession && t.getSession()) && e && e.captureSession && e.captureSession(t)
            }, e.prototype._invokeClient = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                var i = this.getStackTop(),
                    r = i.scope,
                    i = i.client;
                i && i[e] && i[e].apply(i, __spread$1(t, [r]))
            }, e.prototype._callExtensionMethod = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                var i = getMainCarrier().__SENTRY__;
                if (i && i.extensions && "function" == typeof i.extensions[e]) return i.extensions[e].apply(this, t);
                IS_DEBUG_BUILD$1 && logger$1.warn("Extension method " + e + " couldn't be found, doing nothing.")
            }, e
        })();

    function getMainCarrier() {
        var e = getGlobalObject();
        return e.__SENTRY__ = e.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, e
    }

    function makeMain(e) {
        var t = getMainCarrier(),
            n = getHubFromCarrier(t);
        return setHubOnCarrier(t, e), n
    }

    function getCurrentHub() {
        var e = getMainCarrier();
        return hasHubOnCarrier(e) && !getHubFromCarrier(e).isOlderThan(API_VERSION) || setHubOnCarrier(e, new Hub), (isNodeEnv() ? getHubFromActiveDomain : getHubFromCarrier)(e)
    }

    function getHubFromActiveDomain(t) {
        try {
            var e, n = getMainCarrier().__SENTRY__,
                i = n && n.extensions && n.extensions.domain && n.extensions.domain.active;
            return i ? (hasHubOnCarrier(i) && !getHubFromCarrier(i).isOlderThan(API_VERSION) || (e = getHubFromCarrier(t).getStackTop(), setHubOnCarrier(i, new Hub(e.client, Scope.clone(e.scope)))), getHubFromCarrier(i)) : getHubFromCarrier(t)
        } catch (e) {
            return getHubFromCarrier(t)
        }
    }

    function hasHubOnCarrier(e) {
        return e && e.__SENTRY__ && e.__SENTRY__.hub
    }

    function getHubFromCarrier(e) {
        return getGlobalSingleton("hub", function() {
            return new Hub
        }, e)
    }

    function setHubOnCarrier(e, t) {
        e && ((e.__SENTRY__ = e.__SENTRY__ || {}).hub = t)
    }
    var SENTRY_API_VERSION = "7";

    function initAPIDetails(e, t, n) {
        return {
            initDsn: e,
            metadata: t || {},
            dsn: makeDsn(e),
            tunnel: n
        }
    }

    function getBaseApiEndpoint(e) {
        var t = e.protocol ? e.protocol + ":" : "",
            n = e.port ? ":" + e.port : "";
        return t + "//" + e.host + n + (e.path ? "/" + e.path : "") + "/api/"
    }

    function _getIngestEndpoint(e, t) {
        return "" + getBaseApiEndpoint(e) + e.projectId + "/" + t + "/"
    }

    function _encodedAuth(e) {
        return urlEncode({
            sentry_key: e.publicKey,
            sentry_version: SENTRY_API_VERSION
        })
    }

    function getStoreEndpoint(e) {
        return _getIngestEndpoint(e, "store")
    }

    function getStoreEndpointWithUrlEncodedAuth(e) {
        return getStoreEndpoint(e) + "?" + _encodedAuth(e)
    }

    function _getEnvelopeEndpoint(e) {
        return _getIngestEndpoint(e, "envelope")
    }

    function getEnvelopeEndpointWithUrlEncodedAuth(e, t) {
        return t || _getEnvelopeEndpoint(e) + "?" + _encodedAuth(e)
    }

    function getReportDialogEndpoint(e, t) {
        var n, e = makeDsn(e),
            i = getBaseApiEndpoint(e) + "embed/error-page/",
            r = "dsn=" + dsnToString(e);
        for (n in t) "dsn" !== n && ("user" === n ? t.user && (t.user.name && (r += "&name=" + encodeURIComponent(t.user.name)), t.user.email) && (r += "&email=" + encodeURIComponent(t.user.email)) : r += "&" + encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
        return i + "?" + r
    }
    var __assign$4 = function() {
        return (__assign$4 = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }).apply(this, arguments)
    };

    function __values$2(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            i = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return {
                    value: (e = e && i >= e.length ? void 0 : e) && e[i++],
                    done: !e
                }
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function __read$4(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var i, r, a = n.call(e),
            s = [];
        try {
            for (;
                (void 0 === t || 0 < t--) && !(i = a.next()).done;) s.push(i.value)
        } catch (e) {
            r = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (n = a.return) && n.call(a)
            } finally {
                if (r) throw r.error
            }
        }
        return s
    }

    function __spread$3() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read$4(arguments[t]));
        return e
    }
    var IS_DEBUG_BUILD$2 = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        installedIntegrations = [];

    function filterDuplicates(e) {
        return e.reduce(function(e, t) {
            return e.every(function(e) {
                return t.name !== e.name
            }) && e.push(t), e
        }, [])
    }

    function getIntegrationsToSetup(e) {
        var t = e.defaultIntegrations && __spread$3(e.defaultIntegrations) || [],
            n = e.integrations,
            e = __spread$3(filterDuplicates(t)),
            t = (Array.isArray(n) ? e = __spread$3(e.filter(function(t) {
                return n.every(function(e) {
                    return e.name !== t.name
                })
            }), filterDuplicates(n)) : "function" == typeof n && (e = n(e), e = Array.isArray(e) ? e : [e]), e.map(function(e) {
                return e.name
            }));
        return -1 !== t.indexOf("Debug") && e.push.apply(e, __spread$3(e.splice(t.indexOf("Debug"), 1))), e
    }

    function setupIntegration(e) {
        -1 === installedIntegrations.indexOf(e.name) && (e.setupOnce(addGlobalEventProcessor, getCurrentHub), installedIntegrations.push(e.name), IS_DEBUG_BUILD$2) && logger$1.log("Integration installed: " + e.name)
    }

    function setupIntegrations(e) {
        var t = {};
        return getIntegrationsToSetup(e).forEach(function(e) {
            setupIntegration(t[e.name] = e)
        }), addNonEnumerableProperty(t, "initialized", !0), t
    }
    var ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.",
        BaseClient = (() => {
            function e(e, t) {
                this._integrations = {}, this._numProcessing = 0, this._backend = new e(t), (this._options = t).dsn && (this._dsn = makeDsn(t.dsn))
            }
            return e.prototype.captureException = function(e, t, n) {
                var i, r = this;
                if (!checkOrSetAlreadyCaught(e)) return i = t && t.event_id, this._process(this._getBackend().eventFromException(e, t).then(function(e) {
                    return r._captureEvent(e, t, n)
                }).then(function(e) {
                    i = e
                })), i;
                IS_DEBUG_BUILD$2 && logger$1.log(ALREADY_SEEN_ERROR)
            }, e.prototype.captureMessage = function(e, t, n, i) {
                var r = this,
                    a = n && n.event_id,
                    t = isPrimitive(e) ? this._getBackend().eventFromMessage(String(e), t, n) : this._getBackend().eventFromException(e, n);
                return this._process(t.then(function(e) {
                    return r._captureEvent(e, n, i)
                }).then(function(e) {
                    a = e
                })), a
            }, e.prototype.captureEvent = function(e, t, n) {
                var i;
                if (!(t && t.originalException && checkOrSetAlreadyCaught(t.originalException))) return i = t && t.event_id, this._process(this._captureEvent(e, t, n).then(function(e) {
                    i = e
                })), i;
                IS_DEBUG_BUILD$2 && logger$1.log(ALREADY_SEEN_ERROR)
            }, e.prototype.captureSession = function(e) {
                this._isEnabled() ? "string" != typeof e.release ? IS_DEBUG_BUILD$2 && logger$1.warn("Discarded session because of missing or non-string release") : (this._sendSession(e), e.update({
                    init: !1
                })) : IS_DEBUG_BUILD$2 && logger$1.warn("SDK not enabled, will not capture session.")
            }, e.prototype.getDsn = function() {
                return this._dsn
            }, e.prototype.getOptions = function() {
                return this._options
            }, e.prototype.getTransport = function() {
                return this._getBackend().getTransport()
            }, e.prototype.flush = function(e) {
                var n = this;
                return this._isClientDoneProcessing(e).then(function(t) {
                    return n.getTransport().close(e).then(function(e) {
                        return t && e
                    })
                })
            }, e.prototype.close = function(e) {
                var t = this;
                return this.flush(e).then(function(e) {
                    return t.getOptions().enabled = !1, e
                })
            }, e.prototype.setupIntegrations = function() {
                this._isEnabled() && !this._integrations.initialized && (this._integrations = setupIntegrations(this._options))
            }, e.prototype.getIntegration = function(t) {
                try {
                    return this._integrations[t.id] || null
                } catch (e) {
                    return IS_DEBUG_BUILD$2 && logger$1.warn("Cannot retrieve integration " + t.id + " from the current Client"), null
                }
            }, e.prototype._updateSessionFromEvent = function(e, t) {
                var n, i, r = !1,
                    a = !1,
                    t = t.exception && t.exception.values;
                if (t) {
                    a = !0;
                    try {
                        for (var s = __values$2(t), o = s.next(); !o.done; o = s.next()) {
                            var c = o.value.mechanism;
                            if (c && !1 === c.handled) {
                                r = !0;
                                break
                            }
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (i = s.return) && i.call(s)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                }
                t = "ok" === e.status;
                (t && 0 === e.errors || t && r) && (e.update(__assign$4(__assign$4({}, r && {
                    status: "crashed"
                }), {
                    errors: e.errors || Number(a || r)
                })), this.captureSession(e))
            }, e.prototype._sendSession = function(e) {
                this._getBackend().sendSession(e)
            }, e.prototype._isClientDoneProcessing = function(i) {
                var r = this;
                return new SyncPromise(function(e) {
                    var t = 0,
                        n = setInterval(function() {
                            0 == r._numProcessing ? (clearInterval(n), e(!0)) : (t += 1, i && i <= t && (clearInterval(n), e(!1)))
                        }, 1)
                })
            }, e.prototype._getBackend = function() {
                return this._backend
            }, e.prototype._isEnabled = function() {
                return !1 !== this.getOptions().enabled && void 0 !== this._dsn
            }, e.prototype._prepareEvent = function(e, t, n) {
                var i = this,
                    r = this.getOptions(),
                    a = r.normalizeDepth,
                    s = void 0 === a ? 3 : a,
                    a = r.normalizeMaxBreadth,
                    o = void 0 === a ? 1e3 : a,
                    r = __assign$4(__assign$4({}, e), {
                        event_id: e.event_id || (n && n.event_id ? n.event_id : uuid4()),
                        timestamp: e.timestamp || dateTimestampInSeconds()
                    }),
                    a = (this._applyClientOptions(r), this._applyIntegrationsMetadata(r), t),
                    e = (n && n.captureContext && (a = Scope.clone(a).update(n.captureContext)), resolvedSyncPromise(r));
                return (e = a ? a.applyToEvent(r, n) : e).then(function(e) {
                    return e && (e.sdkProcessingMetadata = __assign$4(__assign$4({}, e.sdkProcessingMetadata), {
                        normalizeDepth: normalize(s) + " (" + typeof s + ")"
                    })), "number" == typeof s && 0 < s ? i._normalizeEvent(e, s, o) : e
                })
            }, e.prototype._normalizeEvent = function(e, t, n) {
                var i;
                return e ? (i = __assign$4(__assign$4(__assign$4(__assign$4(__assign$4({}, e), e.breadcrumbs && {
                    breadcrumbs: e.breadcrumbs.map(function(e) {
                        return __assign$4(__assign$4({}, e), e.data && {
                            data: normalize(e.data, t, n)
                        })
                    })
                }), e.user && {
                    user: normalize(e.user, t, n)
                }), e.contexts && {
                    contexts: normalize(e.contexts, t, n)
                }), e.extra && {
                    extra: normalize(e.extra, t, n)
                }), e.contexts && e.contexts.trace && (i.contexts.trace = e.contexts.trace), i.sdkProcessingMetadata = __assign$4(__assign$4({}, i.sdkProcessingMetadata), {
                    baseClientNormalized: !0
                }), i) : null
            }, e.prototype._applyClientOptions = function(e) {
                var t = this.getOptions(),
                    n = t.environment,
                    i = t.release,
                    r = t.dist,
                    a = t.maxValueLength,
                    a = void 0 === a ? 250 : a,
                    t = ("environment" in e || (e.environment = "environment" in t ? n : "production"), void 0 === e.release && void 0 !== i && (e.release = i), void 0 === e.dist && void 0 !== r && (e.dist = r), e.message && (e.message = truncate(e.message, a)), e.exception && e.exception.values && e.exception.values[0]),
                    n = (t && t.value && (t.value = truncate(t.value, a)), e.request);
                n && n.url && (n.url = truncate(n.url, a))
            }, e.prototype._applyIntegrationsMetadata = function(e) {
                var t = Object.keys(this._integrations);
                0 < t.length && (e.sdk = e.sdk || {}, e.sdk.integrations = __spread$3(e.sdk.integrations || [], t))
            }, e.prototype._sendEvent = function(e) {
                this._getBackend().sendEvent(e)
            }, e.prototype._captureEvent = function(e, t, n) {
                return this._processEvent(e, t, n).then(function(e) {
                    return e.event_id
                }, function(e) {
                    IS_DEBUG_BUILD$2 && logger$1.error(e)
                })
            }, e.prototype._processEvent = function(n, t, i) {
                var r, a = this,
                    e = this.getOptions(),
                    s = e.beforeSend,
                    e = e.sampleRate,
                    o = this.getTransport();

                function c(e, t) {
                    o.recordLostEvent && o.recordLostEvent(e, t)
                }
                return this._isEnabled() ? !(r = "transaction" === n.type) && "number" == typeof e && Math.random() > e ? (c("sample_rate", "event"), rejectedSyncPromise(new SentryError("Discarding event because it's not included in the random sample (sampling rate = " + e + ")"))) : this._prepareEvent(n, i, t).then(function(e) {
                    if (null === e) throw c("event_processor", n.type || "event"), new SentryError("An event processor returned null, will not send event.");
                    return t && t.data && !0 === t.data.__sentry__ || r || !s ? e : _ensureBeforeSendRv(s(e, t))
                }).then(function(e) {
                    if (null === e) throw c("before_send", n.type || "event"), new SentryError("`beforeSend` returned `null`, will not send event.");
                    var t = i && i.getSession && i.getSession();
                    return !r && t && a._updateSessionFromEvent(t, e), a._sendEvent(e), e
                }).then(null, function(e) {
                    if (e instanceof SentryError) throw e;
                    throw a.captureException(e, {
                        data: {
                            __sentry__: !0
                        },
                        originalException: e
                    }), new SentryError("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + e)
                }) : rejectedSyncPromise(new SentryError("SDK not enabled, will not capture event."))
            }, e.prototype._process = function(e) {
                var t = this;
                this._numProcessing += 1, e.then(function(e) {
                    return --t._numProcessing, e
                }, function(e) {
                    return --t._numProcessing, e
                })
            }, e
        })();

    function _ensureBeforeSendRv(e) {
        var t = "`beforeSend` method has to return `null` or a valid event.";
        if (isThenable(e)) return e.then(function(e) {
            if (isPlainObject(e) || null === e) return e;
            throw new SentryError(t)
        }, function(e) {
            throw new SentryError("beforeSend rejected with " + e)
        });
        if (isPlainObject(e) || null === e) return e;
        throw new SentryError(t)
    }

    function getSdkMetadataForEnvelopeHeader(e) {
        if (e.metadata && e.metadata.sdk) return {
            name: (e = e.metadata.sdk).name,
            version: e.version
        }
    }

    function enhanceEventWithSdkInfo(e, t) {
        t && (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || t.name, e.sdk.version = e.sdk.version || t.version, e.sdk.integrations = __spread$3(e.sdk.integrations || [], t.integrations || []), e.sdk.packages = __spread$3(e.sdk.packages || [], t.packages || []))
    }

    function createSessionEnvelope(e, t) {
        var n = getSdkMetadataForEnvelopeHeader(t),
            n = __assign$4(__assign$4({
                sent_at: (new Date).toISOString()
            }, n && {
                sdk: n
            }), !!t.tunnel && {
                dsn: dsnToString(t.dsn)
            }),
            t = "aggregates" in e ? "sessions" : "session";
        return [createEnvelope(n, [
            [{
                type: t
            }, e]
        ]), t]
    }

    function sessionToSentryRequest(e, t) {
        var e = __read$4(createSessionEnvelope(e, t), 2),
            n = e[0],
            e = e[1];
        return {
            body: serializeEnvelope(n),
            type: e,
            url: getEnvelopeEndpointWithUrlEncodedAuth(t.dsn, t.tunnel)
        }
    }

    function createEventEnvelope(e, t) {
        var n = getSdkMetadataForEnvelopeHeader(t),
            i = e.type || "event",
            r = (e.sdkProcessingMetadata || {}).transactionSampling || {},
            a = r.method,
            r = r.rate;
        return enhanceEventWithSdkInfo(e, t.metadata.sdk), e.tags = e.tags || {}, e.extra = e.extra || {}, e.sdkProcessingMetadata && e.sdkProcessingMetadata.baseClientNormalized || (e.tags.skippedNormalization = !0, e.extra.normalizeDepth = e.sdkProcessingMetadata ? e.sdkProcessingMetadata.normalizeDepth : "unset"), delete e.sdkProcessingMetadata, createEnvelope(__assign$4(__assign$4({
            event_id: e.event_id,
            sent_at: (new Date).toISOString()
        }, n && {
            sdk: n
        }), !!t.tunnel && {
            dsn: dsnToString(t.dsn)
        }), [
            [{
                type: i,
                sample_rates: [{
                    id: a,
                    rate: r
                }]
            }, e]
        ])
    }

    function eventToSentryRequest(t, e) {
        var n = getSdkMetadataForEnvelopeHeader(e),
            i = t.type || "event",
            r = "transaction" === i || !!e.tunnel,
            a = (t.sdkProcessingMetadata || {}).transactionSampling || {},
            s = a.method,
            a = a.rate;
        enhanceEventWithSdkInfo(t, e.metadata.sdk), t.tags = t.tags || {}, t.extra = t.extra || {}, t.sdkProcessingMetadata && t.sdkProcessingMetadata.baseClientNormalized || (t.tags.skippedNormalization = !0, t.extra.normalizeDepth = t.sdkProcessingMetadata ? t.sdkProcessingMetadata.normalizeDepth : "unset"), delete t.sdkProcessingMetadata;
        try {
            o = JSON.stringify(t)
        } catch (e) {
            t.tags.JSONStringifyError = !0, t.extra.JSONStringifyError = e;
            try {
                o = JSON.stringify(normalize(t))
            } catch (e) {
                var o = JSON.stringify({
                    message: "JSON.stringify error after renormalization",
                    extra: {
                        message: e.message,
                        stack: e.stack
                    }
                })
            }
        }
        o = {
            body: o,
            type: i,
            url: r ? getEnvelopeEndpointWithUrlEncodedAuth(e.dsn, e.tunnel) : getStoreEndpointWithUrlEncodedAuth(e.dsn)
        };
        return r && (r = createEnvelope(__assign$4(__assign$4({
            event_id: t.event_id,
            sent_at: (new Date).toISOString()
        }, n && {
            sdk: n
        }), !!e.tunnel && {
            dsn: dsnToString(e.dsn)
        }), [
            [{
                type: i,
                sample_rates: [{
                    id: s,
                    rate: a
                }]
            }, o.body]
        ]), o.body = serializeEnvelope(r)), o
    }
    var NoopTransport = (() => {
            function e() {}
            return e.prototype.sendEvent = function(e) {
                return resolvedSyncPromise({
                    reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                    status: "skipped"
                })
            }, e.prototype.close = function(e) {
                return resolvedSyncPromise(!0)
            }, e
        })(),
        BaseBackend = (() => {
            function e(e) {
                this._options = e, this._options.dsn || IS_DEBUG_BUILD$2 && logger$1.warn("No DSN provided, backend will not do anything."), this._transport = this._setupTransport()
            }
            return e.prototype.eventFromException = function(e, t) {
                throw new SentryError("Backend has to implement `eventFromException` method")
            }, e.prototype.eventFromMessage = function(e, t, n) {
                throw new SentryError("Backend has to implement `eventFromMessage` method")
            }, e.prototype.sendEvent = function(e) {
                var t;
                this._newTransport && this._options.dsn && this._options._experiments && this._options._experiments.newTransport ? (t = createEventEnvelope(e, initAPIDetails(this._options.dsn, this._options._metadata, this._options.tunnel)), this._newTransport.send(t).then(null, function(e) {
                    IS_DEBUG_BUILD$2 && logger$1.error("Error while sending event:", e)
                })) : this._transport.sendEvent(e).then(null, function(e) {
                    IS_DEBUG_BUILD$2 && logger$1.error("Error while sending event:", e)
                })
            }, e.prototype.sendSession = function(e) {
                var t;
                this._transport.sendSession ? this._newTransport && this._options.dsn && this._options._experiments && this._options._experiments.newTransport ? (t = __read$4(createSessionEnvelope(e, initAPIDetails(this._options.dsn, this._options._metadata, this._options.tunnel)), 1)[0], this._newTransport.send(t).then(null, function(e) {
                    IS_DEBUG_BUILD$2 && logger$1.error("Error while sending session:", e)
                })) : this._transport.sendSession(e).then(null, function(e) {
                    IS_DEBUG_BUILD$2 && logger$1.error("Error while sending session:", e)
                }) : IS_DEBUG_BUILD$2 && logger$1.warn("Dropping session because custom transport doesn't implement sendSession")
            }, e.prototype.getTransport = function() {
                return this._transport
            }, e.prototype._setupTransport = function() {
                return new NoopTransport
            }, e
        })(),
        DEFAULT_TRANSPORT_BUFFER_SIZE = 30;

    function createTransport(e, i, a) {
        void 0 === a && (a = makePromiseBuffer(e.bufferSize || DEFAULT_TRANSPORT_BUFFER_SIZE));
        var s = {};
        return {
            send: function(e) {
                var t = getEnvelopeType(e),
                    r = "event" === t ? "error" : t,
                    n = {
                        category: r,
                        body: serializeEnvelope(e)
                    };
                return isRateLimited(s, r) ? rejectedSyncPromise({
                    status: "rate_limit",
                    reason: getRateLimitReason(s, r)
                }) : a.add(function() {
                    return i(n).then(function(e) {
                        var t = e.body,
                            n = e.headers,
                            i = e.reason,
                            e = eventStatusFromHttpCode(e.statusCode);
                        return n && (s = updateRateLimits(s, n)), "success" === e ? resolvedSyncPromise({
                            status: e,
                            reason: i
                        }) : rejectedSyncPromise({
                            status: e,
                            reason: i || t || ("rate_limit" === e ? getRateLimitReason(s, r) : "Unknown transport error")
                        })
                    })
                })
            },
            flush: function(e) {
                return a.drain(e)
            }
        }
    }

    function getRateLimitReason(e, t) {
        return "Too many " + t + " requests, backing off until: " + new Date(disabledUntil(e, t)).toISOString()
    }
    var SDK_VERSION = "6.19.7",
        UNKNOWN_FUNCTION = "?",
        OPERA10_PRIORITY = 10,
        OPERA11_PRIORITY = 20,
        CHROME_PRIORITY = 30,
        WINJS_PRIORITY = 40,
        GECKO_PRIORITY = 50;

    function createFrame(e, t, n, i) {
        e = {
            filename: e,
            function: t,
            in_app: !0
        };
        return void 0 !== n && (e.lineno = n), void 0 !== i && (e.colno = i), e
    }
    var chromeRegex = /^\s*at (?:(.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        chromeEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        chrome = function(e) {
            var t, n, e = chromeRegex.exec(e);
            if (e) return e[2] && 0 === e[2].indexOf("eval") && (t = chromeEvalRegex.exec(e[2])) && (e[2] = t[1], e[3] = t[2], e[4] = t[3]), n = (t = __read$1(extractSafariExtensionDetails(e[1] || UNKNOWN_FUNCTION, e[2]), 2))[0], createFrame(t[1], n, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
        },
        chromeStackParser = [CHROME_PRIORITY, chrome],
        geckoREgex = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        gecko = function(e) {
            var t, n, i, e = geckoREgex.exec(e);
            if (e) return e[3] && -1 < e[3].indexOf(" > eval") && (i = geckoEvalRegex.exec(e[3])) && (e[1] = e[1] || "eval", e[3] = i[1], e[4] = i[2], e[5] = ""), i = e[3], n = e[1] || UNKNOWN_FUNCTION, n = (t = __read$1(extractSafariExtensionDetails(n, i), 2))[0], createFrame(i = t[1], n, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
        },
        geckoStackParser = [GECKO_PRIORITY, gecko],
        winjsRegex = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        winjs = function(e) {
            e = winjsRegex.exec(e);
            return e ? createFrame(e[2], e[1] || UNKNOWN_FUNCTION, +e[3], e[4] ? +e[4] : void 0) : void 0
        },
        winjsStackParser = [WINJS_PRIORITY, winjs],
        opera10Regex = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
        opera10 = function(e) {
            e = opera10Regex.exec(e);
            return e ? createFrame(e[2], e[3] || UNKNOWN_FUNCTION, +e[1]) : void 0
        },
        opera10StackParser = [OPERA10_PRIORITY, opera10],
        opera11Regex = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
        opera11 = function(e) {
            e = opera11Regex.exec(e);
            return e ? createFrame(e[5], e[3] || e[4] || UNKNOWN_FUNCTION, +e[1], +e[2]) : void 0
        },
        opera11StackParser = [OPERA11_PRIORITY, opera11],
        extractSafariExtensionDetails = function(e, t) {
            var n = -1 !== e.indexOf("safari-extension"),
                i = -1 !== e.indexOf("safari-web-extension");
            return n || i ? [-1 !== e.indexOf("@") ? e.split("@")[0] : UNKNOWN_FUNCTION, n ? "safari-extension:" + t : "safari-web-extension:" + t] : [e, t]
        };

    function exceptionFromError(e) {
        var t = parseStackFrames(e),
            e = {
                type: e && e.name,
                value: extractMessage(e)
            };
        return t.length && (e.stacktrace = {
            frames: t
        }), void 0 === e.type && "" === e.value && (e.value = "Unrecoverable error caught"), e
    }

    function eventFromPlainObject(e, t, n) {
        n = {
            exception: {
                values: [{
                    type: isEvent(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
                    value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + extractExceptionKeysForMessage(e)
                }]
            },
            extra: {
                __serialized__: normalizeToSize(e)
            }
        };
        return t && (e = parseStackFrames(t)).length && (n.stacktrace = {
            frames: e
        }), n
    }

    function eventFromError(e) {
        return {
            exception: {
                values: [exceptionFromError(e)]
            }
        }
    }

    function parseStackFrames(e) {
        var t = e.stacktrace || e.stack || "",
            e = getPopSize(e);
        try {
            return createStackParser(opera10StackParser, opera11StackParser, chromeStackParser, winjsStackParser, geckoStackParser)(t, e)
        } catch (e) {}
        return []
    }
    var reactMinifiedRegexp = /Minified React error #\d+;/i;

    function getPopSize(e) {
        if (e) {
            if ("number" == typeof e.framesToPop) return e.framesToPop;
            if (reactMinifiedRegexp.test(e.message)) return 1
        }
        return 0
    }

    function extractMessage(e) {
        e = e && e.message;
        return e ? e.error && "string" == typeof e.error.message ? e.error.message : e : "No error message"
    }

    function eventFromException(e, t, n) {
        e = eventFromUnknownInput(e, t && t.syntheticException || void 0, n);
        return addExceptionMechanism(e), e.level = Severity.Error, t && t.event_id && (e.event_id = t.event_id), resolvedSyncPromise(e)
    }

    function eventFromMessage(e, t, n, i) {
        void 0 === t && (t = Severity.Info);
        e = eventFromString(e, n && n.syntheticException || void 0, i);
        return e.level = t, n && n.event_id && (e.event_id = n.event_id), resolvedSyncPromise(e)
    }

    function eventFromUnknownInput(e, t, n, i) {
        var r, a, s;
        if (isErrorEvent(e) && e.error) return eventFromError(e.error);
        if (isDOMError(e) || isDOMException(e)) "stack" in (r = e) ? s = eventFromError(e) : (a = r.name || (isDOMError(r) ? "DOMError" : "DOMException"), addExceptionTypeValue(s = eventFromString(a = r.message ? a + ": " + r.message : a, t, n), a)), "code" in r && (s.tags = __assign$1(__assign$1({}, s.tags), {
            "DOMException.code": "" + r.code
        }));
        else {
            if (isError(e)) return eventFromError(e);
            isPlainObject(e) || isEvent(e) ? addExceptionMechanism(s = eventFromPlainObject(e, t, i), {
                synthetic: !0
            }) : (addExceptionTypeValue(s = eventFromString(e, t, n), "" + e, void 0), addExceptionMechanism(s, {
                synthetic: !0
            }))
        }
        return s
    }

    function eventFromString(e, t, n) {
        e = {
            message: e
        };
        return n && t && (n = parseStackFrames(t)).length && (e.stacktrace = {
            frames: n
        }), e
    }
    var IS_DEBUG_BUILD$3 = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        global$3 = getGlobalObject(),
        cachedFetchImpl;

    function getNativeFetchImplementation() {
        if (cachedFetchImpl) return cachedFetchImpl;
        if (isNativeFetch(global$3.fetch)) return cachedFetchImpl = global$3.fetch.bind(global$3);
        var e = global$3.document,
            t = global$3.fetch;
        if (e && "function" == typeof e.createElement) try {
            var n = e.createElement("iframe"),
                i = (n.hidden = !0, e.head.appendChild(n), n.contentWindow);
            i && i.fetch && (t = i.fetch), e.head.removeChild(n)
        } catch (e) {
            IS_DEBUG_BUILD$3 && logger$1.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
        }
        return cachedFetchImpl = t.bind(global$3)
    }

    function sendReport(e, t) {
        if ("[object Navigator]" === Object.prototype.toString.call(global$3 && global$3.navigator) && "function" == typeof global$3.navigator.sendBeacon) return global$3.navigator.sendBeacon.bind(global$3.navigator)(e, t);
        supportsFetch() && forget(getNativeFetchImplementation()(e, {
            body: t,
            method: "POST",
            credentials: "omit",
            keepalive: !0
        }))
    }

    function requestTypeToCategory(e) {
        return "event" === e ? "error" : e
    }
    var global$4 = getGlobalObject(),
        BaseTransport = (() => {
            function e(e) {
                var t = this;
                this.options = e, this._buffer = makePromiseBuffer(30), this._rateLimits = {}, this._outcomes = {}, this._api = initAPIDetails(e.dsn, e._metadata, e.tunnel), this.url = getStoreEndpointWithUrlEncodedAuth(this._api.dsn), this.options.sendClientReports && global$4.document && global$4.document.addEventListener("visibilitychange", function() {
                    "hidden" === global$4.document.visibilityState && t._flushOutcomes()
                })
            }
            return e.prototype.sendEvent = function(e) {
                return this._sendRequest(eventToSentryRequest(e, this._api), e)
            }, e.prototype.sendSession = function(e) {
                return this._sendRequest(sessionToSentryRequest(e, this._api), e)
            }, e.prototype.close = function(e) {
                return this._buffer.drain(e)
            }, e.prototype.recordLostEvent = function(e, t) {
                this.options.sendClientReports && (t = requestTypeToCategory(t) + ":" + e, IS_DEBUG_BUILD$3 && logger$1.log("Adding outcome: " + t), this._outcomes[t] = (null != (e = this._outcomes[t]) ? e : 0) + 1)
            }, e.prototype._flushOutcomes = function() {
                if (this.options.sendClientReports) {
                    var i = this._outcomes;
                    if (this._outcomes = {}, Object.keys(i).length) {
                        IS_DEBUG_BUILD$3 && logger$1.log("Flushing outcomes:\n" + JSON.stringify(i, null, 2));
                        var e = getEnvelopeEndpointWithUrlEncodedAuth(this._api.dsn, this._api.tunnel),
                            t = createClientReportEnvelope(Object.keys(i).map(function(e) {
                                var t = __read$1(e.split(":"), 2),
                                    n = t[0];
                                return {
                                    reason: t[1],
                                    category: n,
                                    quantity: i[e]
                                }
                            }), this._api.tunnel && dsnToString(this._api.dsn));
                        try {
                            sendReport(e, serializeEnvelope(t))
                        } catch (e) {
                            IS_DEBUG_BUILD$3 && logger$1.error(e)
                        }
                    } else IS_DEBUG_BUILD$3 && logger$1.log("No outcomes to flush")
                }
            }, e.prototype._handleResponse = function(e) {
                var t = e.requestType,
                    n = e.response,
                    i = e.headers,
                    r = e.resolve,
                    e = e.reject,
                    a = eventStatusFromHttpCode(n.status);
                this._rateLimits = updateRateLimits(this._rateLimits, i), this._isRateLimited(t) && IS_DEBUG_BUILD$3 && logger$1.warn("Too many " + t + " requests, backing off until: " + this._disabledUntil(t)), "success" === a ? r({
                    status: a
                }) : e(n)
            }, e.prototype._disabledUntil = function(e) {
                e = requestTypeToCategory(e);
                return new Date(disabledUntil(this._rateLimits, e))
            }, e.prototype._isRateLimited = function(e) {
                e = requestTypeToCategory(e);
                return isRateLimited(this._rateLimits, e)
            }, e
        })(),
        FetchTransport = (n => {
            function e(e, t) {
                void 0 === t && (t = getNativeFetchImplementation());
                e = n.call(this, e) || this;
                return e._fetch = t, e
            }
            return __extends$1(e, n), e.prototype._sendRequest = function(r, e) {
                var t, a = this;
                return this._isRateLimited(r.type) ? (this.recordLostEvent("ratelimit_backoff", r.type), Promise.reject({
                    event: e,
                    type: r.type,
                    reason: "Transport for " + r.type + " requests locked till " + this._disabledUntil(r.type) + " due to too many requests.",
                    status: 429
                })) : (t = {
                    body: r.body,
                    method: "POST",
                    referrerPolicy: supportsReferrerPolicy() ? "origin" : ""
                }, void 0 !== this.options.fetchParameters && Object.assign(t, this.options.fetchParameters), void 0 !== this.options.headers && (t.headers = this.options.headers), this._buffer.add(function() {
                    return new SyncPromise(function(n, i) {
                        a._fetch(r.url, t).then(function(e) {
                            var t = {
                                "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                                "retry-after": e.headers.get("Retry-After")
                            };
                            a._handleResponse({
                                requestType: r.type,
                                response: e,
                                headers: t,
                                resolve: n,
                                reject: i
                            })
                        }).catch(i)
                    })
                }).then(void 0, function(e) {
                    throw e instanceof SentryError ? a.recordLostEvent("queue_overflow", r.type) : a.recordLostEvent("network_error", r.type), e
                }))
            }, e
        })(BaseTransport),
        XHRTransport = (e => {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends$1(t, e), t.prototype._sendRequest = function(r, e) {
                var a = this;
                return this._isRateLimited(r.type) ? (this.recordLostEvent("ratelimit_backoff", r.type), Promise.reject({
                    event: e,
                    type: r.type,
                    reason: "Transport for " + r.type + " requests locked till " + this._disabledUntil(r.type) + " due to too many requests.",
                    status: 429
                })) : this._buffer.add(function() {
                    return new SyncPromise(function(t, n) {
                        var e, i = new XMLHttpRequest;
                        for (e in i.onreadystatechange = function() {
                                var e;
                                4 === i.readyState && (e = {
                                    "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                                    "retry-after": i.getResponseHeader("Retry-After")
                                }, a._handleResponse({
                                    requestType: r.type,
                                    response: i,
                                    headers: e,
                                    resolve: t,
                                    reject: n
                                }))
                            }, i.open("POST", r.url), a.options.headers) Object.prototype.hasOwnProperty.call(a.options.headers, e) && i.setRequestHeader(e, a.options.headers[e]);
                        i.send(r.body)
                    })
                }).then(void 0, function(e) {
                    throw e instanceof SentryError ? a.recordLostEvent("queue_overflow", r.type) : a.recordLostEvent("network_error", r.type), e
                })
            }, t
        })(BaseTransport);

    function makeNewFetchTransport(t, n) {
        return void 0 === n && (n = getNativeFetchImplementation()), createTransport({
            bufferSize: t.bufferSize
        }, function(e) {
            return e = __assign$1({
                body: e.body,
                method: "POST",
                referrerPolicy: "origin"
            }, t.requestOptions), n(t.url, e).then(function(t) {
                return t.text().then(function(e) {
                    return {
                        body: e,
                        headers: {
                            "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
                            "retry-after": t.headers.get("Retry-After")
                        },
                        reason: t.statusText,
                        statusCode: t.status
                    }
                })
            })
        })
    }
    var XHR_READYSTATE_DONE = 4;

    function makeNewXHRTransport(a) {
        return createTransport({
            bufferSize: a.bufferSize
        }, function(r) {
            return new SyncPromise(function(t, e) {
                var n, i = new XMLHttpRequest;
                for (n in i.onreadystatechange = function() {
                        var e;
                        i.readyState === XHR_READYSTATE_DONE && (e = {
                            body: i.response,
                            headers: {
                                "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                                "retry-after": i.getResponseHeader("Retry-After")
                            },
                            reason: i.statusText,
                            statusCode: i.status
                        }, t(e))
                    }, i.open("POST", a.url), a.headers) Object.prototype.hasOwnProperty.call(a.headers, n) && i.setRequestHeader(n, a.headers[n]);
                i.send(r.body)
            })
        })
    }
    var BrowserBackend = (i => {
            function e() {
                return null !== i && i.apply(this, arguments) || this
            }
            return __extends$1(e, i), e.prototype.eventFromException = function(e, t) {
                return eventFromException(e, t, this._options.attachStacktrace)
            }, e.prototype.eventFromMessage = function(e, t, n) {
                return eventFromMessage(e, t = void 0 === t ? Severity.Info : t, n, this._options.attachStacktrace)
            }, e.prototype._setupTransport = function() {
                var e, t, n;
                return this._options.dsn ? (t = getEnvelopeEndpointWithUrlEncodedAuth((t = initAPIDetails((e = __assign$1(__assign$1({}, this._options.transportOptions), {
                    dsn: this._options.dsn,
                    tunnel: this._options.tunnel,
                    sendClientReports: this._options.sendClientReports,
                    _metadata: this._options._metadata
                })).dsn, e._metadata, e.tunnel)).dsn, t.tunnel), new(this._options.transport || (supportsFetch() ? (n = __assign$1({}, e.fetchParameters), this._newTransport = makeNewFetchTransport({
                    requestOptions: n,
                    url: t
                }), FetchTransport) : (this._newTransport = makeNewXHRTransport({
                    url: t,
                    headers: e.headers
                }), XHRTransport)))(e)) : i.prototype._setupTransport.call(this)
            }, e
        })(BaseBackend),
        global$5 = getGlobalObject();

    function injectReportDialog(e) {
        var t;
        void 0 === e && (e = {}), global$5.document && (e.eventId ? e.dsn ? ((t = global$5.document.createElement("script")).async = !0, t.src = getReportDialogEndpoint(e.dsn, e), e.onLoad && (t.onload = e.onLoad), (e = global$5.document.head || global$5.document.body) && e.appendChild(t)) : IS_DEBUG_BUILD$3 && logger$1.error("Missing dsn option in showReportDialog call") : IS_DEBUG_BUILD$3 && logger$1.error("Missing eventId option in showReportDialog call"))
    }
    var Breadcrumbs = (() => {
        function t(e) {
            this.name = t.id, this._options = __assign$1({
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0
            }, e)
        }
        return t.prototype.addSentryBreadcrumb = function(e) {
            this._options.sentry && getCurrentHub().addBreadcrumb({
                category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
                event_id: e.event_id,
                level: e.level,
                message: getEventDescription(e)
            }, {
                event: e
            })
        }, t.prototype.setupOnce = function() {
            this._options.console && addInstrumentationHandler("console", _consoleBreadcrumb), this._options.dom && addInstrumentationHandler("dom", _domBreadcrumb(this._options.dom)), this._options.xhr && addInstrumentationHandler("xhr", _xhrBreadcrumb), this._options.fetch && addInstrumentationHandler("fetch", _fetchBreadcrumb), this._options.history && addInstrumentationHandler("history", _historyBreadcrumb)
        }, t.id = "Breadcrumbs", t
    })();

    function _domBreadcrumb(i) {
        return function(e) {
            var t, n = "object" == typeof i ? i.serializeAttribute : void 0;
            "string" == typeof n && (n = [n]);
            try {
                t = e.event.target ? htmlTreeAsString(e.event.target, n) : htmlTreeAsString(e.event, n)
            } catch (e) {
                t = "<unknown>"
            }
            0 !== t.length && getCurrentHub().addBreadcrumb({
                category: "ui." + e.name,
                message: t
            }, {
                event: e.event,
                name: e.name,
                global: e.global
            })
        }
    }

    function _consoleBreadcrumb(e) {
        var t = {
            category: "console",
            data: {
                arguments: e.args,
                logger: "console"
            },
            level: severityFromString(e.level),
            message: safeJoin(e.args, " ")
        };
        if ("assert" === e.level) {
            if (!1 !== e.args[0]) return;
            t.message = "Assertion failed: " + (safeJoin(e.args.slice(1), " ") || "console.assert"), t.data.arguments = e.args.slice(1)
        }
        getCurrentHub().addBreadcrumb(t, {
            input: e.args,
            level: e.level
        })
    }

    function _xhrBreadcrumb(e) {
        var t, n, i, r;
        e.endTimestamp && !e.xhr.__sentry_own_request__ && (t = (r = e.xhr.__sentry_xhr__ || {}).method, n = r.url, i = r.status_code, r = r.body, getCurrentHub().addBreadcrumb({
            category: "xhr",
            data: {
                method: t,
                url: n,
                status_code: i
            },
            type: "http"
        }, {
            xhr: e.xhr,
            input: r
        }))
    }

    function _fetchBreadcrumb(e) {
        !e.endTimestamp || e.fetchData.url.match(/sentry_key/) && "POST" === e.fetchData.method || (e.error ? getCurrentHub().addBreadcrumb({
            category: "fetch",
            data: e.fetchData,
            level: Severity.Error,
            type: "http"
        }, {
            data: e.error,
            input: e.args
        }) : getCurrentHub().addBreadcrumb({
            category: "fetch",
            data: __assign$1(__assign$1({}, e.fetchData), {
                status_code: e.response.status
            }),
            type: "http"
        }, {
            input: e.args,
            response: e.response
        }))
    }

    function _historyBreadcrumb(e) {
        var t = getGlobalObject(),
            n = e.from,
            e = e.to,
            t = parseUrl$1(t.location.href),
            i = parseUrl$1(n),
            r = parseUrl$1(e);
        i.path || (i = t), t.protocol === r.protocol && t.host === r.host && (e = r.relative), t.protocol === i.protocol && t.host === i.host && (n = i.relative), getCurrentHub().addBreadcrumb({
            category: "navigation",
            data: {
                from: n,
                to: e
            }
        })
    }
    var BrowserClient = (i => {
            function e(e) {
                return (e = void 0 === e ? {} : e)._metadata = e._metadata || {}, e._metadata.sdk = e._metadata.sdk || {
                    name: "sentry.javascript.browser",
                    packages: [{
                        name: "npm:@sentry/browser",
                        version: SDK_VERSION
                    }],
                    version: SDK_VERSION
                }, i.call(this, BrowserBackend, e) || this
            }
            return __extends$1(e, i), e.prototype.showReportDialog = function(e) {
                void 0 === e && (e = {}), getGlobalObject().document && (this._isEnabled() ? injectReportDialog(__assign$1(__assign$1({}, e), {
                    dsn: e.dsn || this.getDsn()
                })) : IS_DEBUG_BUILD$3 && logger$1.error("Trying to call showReportDialog with Sentry Client disabled"))
            }, e.prototype._prepareEvent = function(e, t, n) {
                return e.platform = e.platform || "javascript", i.prototype._prepareEvent.call(this, e, t, n)
            }, e.prototype._sendEvent = function(e) {
                var t = this.getIntegration(Breadcrumbs);
                t && t.addSentryBreadcrumb(e), i.prototype._sendEvent.call(this, e)
            }, e
        })(BaseClient),
        SERVER_REQUEST_STATE, ACTIVITY_CLASS_IDS = ((e => {
            e[e.NOT_SENT = 0] = "NOT_SENT", e[e.SENT = 1] = "SENT", e[e.LABEL_IS_BLOCKED = 2] = "LABEL_IS_BLOCKED"
        })(SERVER_REQUEST_STATE = SERVER_REQUEST_STATE || {}), [ClassId.SAW_PRIZE_DROP_WIN_PUSH, ClassId.JP_WIN_PUSH]),
        PrizeDropBuilder = (() => {
            function l() {}
            return l.show = function(t, n, e, i, r) {
                void 0 === i && (i = !1), void 0 === r && (r = !1);
                if (t.cid === ClassId.JP_WIN_PUSH) {
                    var a, s = !!(c = t).winners.find(function(e) {
                            return !0 === e.is_me
                        }),
                        o = (a = s) ? "" : "bottom: 0; right: 0; width: 350px; height: 200px;";
                    if (s && "0" === c.jackpot.jp_public_meta.winner_template.id) return;
                    if (!s && "0" === c.jackpot.jp_public_meta.not_winner_template.id) return
                }
                l.clear(n, t.cid);
                var c, s = l.iframeContent(t, e, !1 === a),
                    e = "opacity: 0; position: fixed; z-index: ".concat(Z_INDEX.PRIZE_DROP_N_JACKPOTS, "; border:0; color-scheme: none; backdrop-filter: blur(").concat(e.popup_bg_blur || 0, "px); -webkit-backdrop-filter: blur(").concat(e.popup_bg_blur || 0, "px);") + (o || "top: 0; left: 0; width: 100%; height: 100%;");
                !1 === a && setTimeout(function() {
                    l.clear(n, t.cid)
                }, 5e3), _add$1({
                    id: "__smarticoPrizeDrop" + t.cid,
                    className: "__smarticoPrizeDrop" + t.cid,
                    style: e,
                    srcdoc: s
                }, document.body, "iframe").handleDeepLink = function(e) {
                    DeepLinks.actionHandler(n, e, null, null, !1, i, r), l.clear(n, t.cid)
                }, t.cid === ClassId.SAW_PRIZE_DROP_WIN_PUSH && n && (o = {
                    cid: ClassId.SAW_PRIZE_DROP_WIN_AKNOWLEDGE_REQUEST,
                    request_id: (c = t).request_id,
                    pending_message_id: c.pending_message_id,
                    claim_required: c.saw_template.requires_prize_claim
                }, n.sendRow(ClassId.SAW_PRIZE_DROP_WIN_AKNOWLEDGE_REQUEST, !0, o), !0 === (null == (e = null == (a = c.saw_prize) ? void 0 : a.saw_prize_ui_definition) ? void 0 : e.hide_prize_popup)) && l.clear(n, t.cid)
            }, l.close = function(e, t) {
                _remove$1(".__smarticoPrizeDrop" + t), e && e.promoMessageClosed()
            }, l.clear = function(e, t) {
                l.close(e, t)
            }, l.clearAll = function(t) {
                ACTIVITY_CLASS_IDS.forEach(function(e) {
                    l.close(t, e)
                })
            }, l.getContent = function(e) {
                var t, n, i, r, a, s = "",
                    o = null;
                return e.cid === ClassId.JP_WIN_PUSH && (r = !!(n = (t = e).winners.find(function(e) {
                    return !0 === e.is_me
                })), s = null == (a = null == (a = null == (a = null == t ? void 0 : t.jackpot) ? void 0 : a.jp_public_meta) ? void 0 : a.winner_template) ? void 0 : a.content, r || (s = null == (a = t.jackpot.jp_public_meta) ? void 0 : a.not_winner_template.content, n = t.winners.reduce(function(e, t) {
                    return t.winning_amount_jp_currency > e.winning_amount_jp_currency ? t : e
                })), o = {
                    jp_public_name: function() {
                        return t.jackpot.jp_public_meta.name
                    },
                    jp_currency: function() {
                        return CoreUtils.currencySymbol(t.jackpot.jp_currency)
                    },
                    winning_amount: function() {
                        return Number(n.winning_amount_jp_currency.toFixed(2))
                    },
                    winner_public_name: function() {
                        return n.public_username
                    },
                    winner_hidden_name: function() {
                        return n.public_username
                    },
                    placeholder1: function() {
                        return t.jackpot.jp_public_meta.placeholder1
                    },
                    placeholder2: function() {
                        return t.jackpot.jp_public_meta.placeholder2
                    }
                }), e.cid === ClassId.SAW_PRIZE_DROP_WIN_PUSH && (s = (i = e).saw_template.saw_template_ui_definition.prize_drop_template.content, o = {
                    placeholder1: function() {
                        return i.saw_template.saw_template_ui_definition.placeholder1 || "Today is your lucky day!"
                    },
                    placeholder2: function() {
                        return i.saw_template.saw_template_ui_definition.placeholder2 || "Celebrate your win!"
                    },
                    "winning-message": function() {
                        var e;
                        return (null == (e = null == i ? void 0 : i.saw_prize.saw_prize_ui_definition) ? void 0 : e.aknowledge_message) || "Surprise! You’ve won a prize!"
                    },
                    "prize-name": function() {
                        var e;
                        return (null == (e = null == i ? void 0 : i.saw_prize.saw_prize_ui_definition) ? void 0 : e.name) || ""
                    },
                    "cta-title": function() {
                        var e;
                        return (null == (e = null == i ? void 0 : i.saw_prize.saw_prize_ui_definition) ? void 0 : e.acknowledge_action_title) || "OK"
                    },
                    "cta-action": function() {
                        var e;
                        return (null == (e = null == i ? void 0 : i.saw_prize.saw_prize_ui_definition) ? void 0 : e.acknowledge_dp) || ""
                    },
                    "prize-image": function() {
                        var e;
                        return (null == (e = null == i ? void 0 : i.saw_prize.saw_prize_ui_definition) ? void 0 : e.icon) || "https://static5.smr.vc/03110ffdb19044f51cb609-bonus1.png"
                    },
                    "prize-name-font-size": function() {
                        var e;
                        return (null == (e = null == i ? void 0 : i.saw_prize.saw_prize_ui_definition) ? void 0 : e.font_size) || ""
                    }
                }), Object.keys(o).forEach(function(e) {
                    var t = "function" == typeof o[e] ? o[e]() : o[e],
                        e = new RegExp("{{".concat(e, "}}"), "g");
                    s = s.replace(e, t)
                }), e.cid === ClassId.SAW_PRIZE_DROP_WIN_PUSH && void 0 !== e.saw_template.jackpot_current && (a = (r = e.saw_template).jackpot_current + (null != (a = r.saw_template_ui_definition) && a.jackpot_symbol ? " " + (null == (e = r.saw_template_ui_definition) ? void 0 : e.jackpot_symbol) : ""), s = s.replace(/{{\s*jackpot\s*}}/g, a)), s
            }, l.iframeContent = function(e, t, n) {
                t = n ? 0 : Number(t.popup_bg_opacity) ? t.popup_bg_opacity : .7, n = n ? "unset" : "#000";
                return '\n            <!DOCTYPE html>\n            <html>\n                <head>\n                    <meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />\n                    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n                    <meta name="viewport" content="width=device-width, initial-scale=1">\n                    <script src="'.concat(SCRIPTS_LOCATION, "/jsi/js/smtko-dp-common.js\"><\/script>\n                    <script>\n                        window.onload = function() {\n                            var __root_centered = document.getElementById('__root_centered');\n\n                            // adjust size of popup to fit to the mobile screen\n                            setTimeout( function() {\n                                var widthRatio = 0.9;\n                                if (window.innerWidth * widthRatio < __root_centered.offsetWidth ) {\n                                    __root_centered.style.zoom = window.innerWidth * widthRatio / __root_centered.offsetWidth\n                                }\n\t\t\t\t\t\t\t\tif (window.innerHeight * widthRatio < __root_centered.offsetHeight ) {\n                                    __root_centered.style.zoom = window.innerHeight * widthRatio / __root_centered.offsetHeight\n                                }\n                            }, 500)\n                            attachDpHandlers();\n                        };\n                    <\/script>\n                    <style>\n                        body {\n                            margin:0; padding:0;\n                        }\n                        div#__root_centered {\n                            position: absolute;\n                            top: 50%;\n                            left: 50%;\n                            width:100%;\n                            height:100%;\n                            overflow: hidden;\n                            transform: translate(-50%, -50%);\n                            -ms-transform: translate(-50%, -50%); /* IE 9 */\n                            -webkit-transform: translate(-50%, -50%); /* Chrome, Safari, Opera */\n                        }\n                        div#__overlay {\n                            background-color: ").concat(n, ";\n                            opacity: ").concat(t, ";\n                            position: absolute;\n                            width: 100%;\n                            height: 100%;\n                        }\n                    </style>\n                </head>\n                <body>\n                    <div id='__overlay'></div>\n                    <div id='__root_centered' />\n                    <div style=\"display: flex; align-items: center; justify-content: center; height: 100%;\">").concat(l.getContent(e), "</div>\n                </body>\n            </html>\n        ")
            }, l
        })(),
        ConnectionStatus, IdentifyRequestState;

    function _add$1(t, e, n) {
        void 0 === t && (t = {}), void 0 === e && (e = document.body), void 0 === n && (n = "div");
        var i = document.createElement(n);
        return i.onload = function() {
            i.style.opacity = "1"
        }, Object.keys(t).map(function(e) {
            return i[e] = t[e]
        }), e.appendChild(i), i
    }

    function _remove$1(e) {
        document.querySelectorAll(e).forEach(function(e) {
            return e.parentNode.removeChild(e)
        })
    }(e => {
        e[e.OPEN = 0] = "OPEN", e[e.CLOSED = 1] = "CLOSED"
    })(ConnectionStatus = ConnectionStatus || {}), (e => {
        e[e.NOT_SENT = 0] = "NOT_SENT", e[e.SENT_WAITING_FOR_RESPONSE = 1] = "SENT_WAITING_FOR_RESPONSE", e[e.SENT_GOT_RESPONSE = 2] = "SENT_GOT_RESPONSE"
    })(IdentifyRequestState = IdentifyRequestState || {});
    var NO_MESSAGE_TIMER = 29e3,
        DP_URL_IN_HASH = "_smartico_dp",
        DP_SESSION_STORAGE_KEY = "_smartico_dp",
        VISITOR_ID_IN_HASH = "_smartico_visitor_id",
        VISTIOR_ID_IN_STORAGE_KEY = "_smartico_visitor_id",
        FCM_DEFAULT_SW_URL = "/smartico-messaging-sw-v2.js",
        __lsDeviceIdKey = "__smartico_device_id",
        LOGIN_SESSION_MS = 18e5,
        SKIP_CJM_PROCESSING_FOR_IDENTIFY_MS = 6e4,
        wait = function(n) {
            return new Promise(function(e, t) {
                return setTimeout(e, n)
            })
        },
        TrackerParams = {
            brand_key: null,
            debug: !1,
            server: null,
            simulation_mode: !1,
            gamification_wrapper_mode: !1,
            generate_visit: !1,
            lang: "EN"
        },
        sentryClient = new BrowserClient({
            dsn: "https://1fbce2bb08464b11bded9708cfa299d4@o230566.ingest.sentry.io/6214573",
            release: "smartico@1.3.296",
            ignoreErrors: ["Loading CSS chunk", "Loading chunk", "https://translate.googleapis.com"],
            denyUrls: [/translate\.googleapis\.com/i, /extensions\//i, /^chrome:\/\//i]
        }),
        sentryHub = new Hub(sentryClient),
        Tracker = function() {
            function Tracker(e, t, n, i) {
                var o = this,
                    t = (this.handlers = [], this.initStatus = SERVER_REQUEST_STATE.NOT_SENT, this.identifyStatus = IdentifyRequestState.NOT_SENT, this._connectionStatus = ConnectionStatus.CLOSED, this.hadSuccessInit = !1, this.hadSuccessIdentify = !1, this.labelSettings = {}, this.labelProducts = [], this.ext_user_id = null, this.smarticoUserId = null, this.visitor_id = null, this.hash = null, this.identifyPayload = {}, this.label_api_key = null, this.queue = [], this.noMessageTimer = null, this.browserInfo = Detector.info(), this.queueInterval = null, this.identifyResponseTS = null, this.DELAY_ENGAGEMENT_EXECUTION_ON_LOGIN_MS = 0, this.DELAY_ENGAGEMENT_EXECUTION_DURING_UNLOAD_MS = 1e4, this.inPageUnloadPhase = !1, this.__lsDelayedLoginPayload = "__smartico_delayed_login_payload", this.__lsLoginTracker = "__smartico_login_tracker", this.__lsIdentifyLastTime = "__smartico_identify_last_time", this.__lsIdentifyLastHash = "__smartico_identify_last_hash", this.__lsTelegramChatAndUserId = "__smartico_telegram_chat_and_user_id", this.loginIsSent = !1, this.userPublicProps = {}, this.bSuspendPopups = !1, this.bSuspendInbox = !1, this.bSuspendMiniGames = !1, this.suspendEngagemensPopups = [], this.suspendEngagemensInbox = [], this.suspendEngagemensMiniGames = [], this.lastPopupClosedEpochMs = null, this.currentFrontLanguage = null, this.isOngoingFCMRequest = !1, this.inLogoutProcess = !1, this.executeGfDp = function(e) {
                        o.gamification && o.gamification.executeDp(e)
                    }, this.executeNativeDp = function(e) {
                        throw new Error("executeNativeDp is not implemented for the web presentation")
                    }, this.promoMessageClosed = function() {
                        o.lastPopupClosedEpochMs = (new Date).getTime()
                    }, this.miniGame = function(e, t, n, i) {
                        var r, a, s;
                        o.hadSuccessIdentify ? null != t && t.iframe && findElementByIdDeep(t.iframe) ? (s = (t.inline ? a = EWidgetTypeHTMLFiles[EWidgetType.MiniGame] + "?saw_template_id=".concat(e) + "&embeddableMode=true" : (s = "quiz" === (null == t ? void 0 : t.gameType) ? EWidgetTypeHTMLFiles[EWidgetType.Quiz] : EWidgetTypeHTMLFiles[EWidgetType.MatchXNew], r = "".concat(o.smarticoUserId, "|").concat(o.ext_user_id, "|").concat(e, "|").concat(SmarticoAPI.getEnvId(o.label_api_key), ":xxx"), r = hash32a(r), a = s + "?ext_user_id=".concat(o.smarticoUserId) + "&smartico_ext_user_id=".concat(encodeURIComponent(o.ext_user_id)) + "&ext_game_id=".concat(e) + "&lang=".concat(o.userPublicProps.core_user_language) + "&env_id=".concat(SmarticoAPI.getEnvId(o.label_api_key)) + "&customer_id=".concat(SmarticoAPI.getEnvId(o.label_api_key)) + "&label_api_key=".concat(o.label_api_key) + "&brand_key=".concat(o.params.brand_key) + "&zoom=".concat(t.zoom || 1) + "&height=".concat(t.height || "auto") + "&back_button=".concat("false") + "&simulation_mode=false" + "&theme=".concat(t.theme) + "&hash=".concat(r), null != t && t.force_mobile && (a += "&force_mobile=true")), findElementByIdDeep(t.iframe)), o.gamification.openInlineFrame(a, s, {}, InteractionBridgeType.InlineFrame)) : o.gamification && (i === SAWGameType.MatchX ? o.gamification.executeDp({
                            action: DpType.MatchX,
                            params: {
                                standalone: "true",
                                id: e,
                                message_id: n,
                                lang: o.userPublicProps.core_user_language
                            }
                        }) : i === SAWGameType.Quiz ? o.gamification.executeDp({
                            action: DpType.Quiz,
                            params: {
                                standalone: "true",
                                id: e,
                                message_id: n,
                                lang: o.userPublicProps.core_user_language
                            }
                        }) : o.gamification.executeDp({
                            action: DpType.Saw,
                            params: {
                                standalone: "true",
                                id: e,
                                message_id: n,
                                lang: o.userPublicProps.core_user_language
                            }
                        })) : setTimeout(function() {
                            return o.miniGame(e, t, n, i)
                        }, 200)
                    }, this.showWidget = function(e, t) {
                        var n, i, r;
                        o.hadSuccessIdentify ? null != t && t.iframe && findElementByIdDeep(t.iframe) ? (i = findElementByIdDeep(t.iframe), r = EWidgetTypeHTMLFiles[e], e === EWidgetType.UIWidget && (r = avatarHost(o.label_api_key) + "widget/" + t.wuuid + "/user_id=" + o.smarticoUserId + "&lang=" + o.userPublicProps.core_user_language, t.noQuestionMark = !0, delete t.wuuid), t.withBridge = !0, "MOBILE" !== (null == (n = o.browserInfo) ? void 0 : n.device_type) && "WRAPPER" !== (null == (n = o.browserInfo) ? void 0 : n.device_type) || (t.force_mobile = !0), o.gamification.openInlineFrame(r, i, __assign({
                            zoom: 1,
                            height: "auto"
                        }, t), e === EWidgetType.Liquid ? InteractionBridgeType.LiquidPage : InteractionBridgeType.InlineFrame), "auto" === (null == t ? void 0 : t.height) && (i.style.height = "1px")) : o.gamification && (e === EWidgetType.Tournaments && o.gamification.executeDp({
                            action: DpType.Tournaments
                        }), e === EWidgetType.CustomSection) && o.gamification.executeDp({
                            action: DpType.Section
                        }) : setTimeout(function() {
                            return o.showWidget(e, t)
                        }, 200)
                    }, this.sendAnalytics = function(e, t, n, i) {
                        o.sendRow(ClassId.CLIENT_TRACK_ACTIVITY_REQUEST, !0, {
                            activity_id: e,
                            view_time_sec: n = void 0 === n ? 0 : n
                        })
                    }, this.label_api_key = e, this.params = t, this.initShadowLabel = i, this.trackerInstanceType = n, this.__lsDelayedLoginPayload = this.__lsDelayedLoginPayload + n, this.__lsLoginTracker = this.__lsLoginTracker + n, this.__lsIdentifyLastTime = this.__lsIdentifyLastTime + n, this.__lsIdentifyLastHash = this.__lsIdentifyLastHash + n, this.deviceId = this.getDeviceId(), SmarticoAPI.getPublicWsUrl(e), SmarticoAPI.getEnvDnsSuffix(e));
                "" !== t || C_WS_SOCKET_URL.includes("smartico") || (t = "2"), i = C_WS_SOCKET_URL.replace("{ENV_ID}", t), this.ws = new ReconnectingWebSocket(i + "?" + (n === TrackerInstanceType.Master ? "master" : "shadow") + "&domain=" + window.location.hostname + "&version=1.3.296", [], {
                    connectionTimeout: 1e4
                }), window.__smartico_ws = this.ws, window.addEventListener("beforeunload", function() {
                    o.inPageUnloadPhase = !0
                }), this.queueInterval = setInterval(this.processQueue.bind(this), 10), this.registerHandler(ClassId.INIT_RESPONSE, function(e) {
                    return o.initResponse(e)
                }), this.registerHandler(ClassId.IDENTIFY_RESPONSE, function(e) {
                    return o.identifyResponse(e)
                }), this.registerHandler(ClassId.CLIENT_ENGAGEMENT_EVENT_NEW, function(e) {
                    return o.engagementEventHandler(e)
                }), this.registerHandler(ClassId.SAW_PRIZE_DROP_WIN_PUSH, function(e) {
                    return o.prizeDropWinHandler(e, ClassId.SAW_PRIZE_DROP_WIN_PUSH)
                }), this.registerHandler(ClassId.JP_WIN_PUSH, function(e) {
                    return o.prizeDropWinHandler(e, ClassId.JP_WIN_PUSH)
                }), this.registerHandler(ClassId.CLIENT_EXECUTE_DEEPLINK_EVENT, function(e) {
                    return o.serverTriggeredDPHandler(e)
                }), this.registerHandler(ClassId.CLIENT_EXECUTE_JS_EVENT, function(e) {
                    return o.executeJSCode(e)
                }), this.registerHandler(ClassId.CLIENT_PUBLIC_PROPERTIES_CHANGED_EVENT, function(e) {
                    return o.handlePublicPropsChange(e)
                }), this.registerHandler(ClassId.CLIENT_SET_AVATAR_RESPONSE, function(e) {
                    return o.handleAvatarChange(e)
                }), this.registerHandler(ClassId.CLIENT_SET_CUSTOM_USERNAME_RESPONSE, function(e) {
                    return o.handleUsernameChange(e)
                }), this.registerHandler(ClassId.LOGOUT_RESPONSE, function(e) {
                    return o.handleLogout(e)
                }), this.registerHandler(ClassId.LOGIN_RESPONSE, function(e) {
                    return o.handleLogin(e)
                }), this.registerHandler(ClassId.SAW_SHOW_SPIN_PUSH, function(e) {
                    return o.handleSawPushEvent(e)
                }), this.log("Init label " + e), this.init(this.label_api_key), this.ws.onclose = function(t) {
                    return __awaiter(o, void 0, void 0, function() {
                        return __generator(this, function(e) {
                            return this.warn("Connection closed. this reason from server: ", t), this.log("Connection lost. Has messages in the queue: ", this.queue.length), this.log("Queue content:", this.queue), this.log("Resetting queue.."), this.queue = [], this.hadSuccessIdentify = !1, this.noMessageTimer && (this.log("Stopping proactive client initiated ping.."), clearTimeout(this.noMessageTimer)), this.hadSuccessInit = !1, this.labelSettings = {}, this.labelProducts = [], this.initStatus !== SERVER_REQUEST_STATE.LABEL_IS_BLOCKED && (this.initStatus = SERVER_REQUEST_STATE.NOT_SENT, this.identifyStatus = IdentifyRequestState.NOT_SENT, this.init(this.label_api_key)), this._connectionStatus === ConnectionStatus.OPEN && (this._connectionStatus = ConnectionStatus.CLOSED, InteractionMaster.sendToAll(InteractionMessageBuilder.SetConnectionStatus(this._connectionStatus))), [2]
                        })
                    })
                }, this.ws.onerror = function(e) {
                    o.log("WebSocket error: ", e)
                }, this.ws.onopen = function() {
                    o.log("Connection setup. Has messages in the queue: ", o.queue.length), o._connectionStatus === ConnectionStatus.CLOSED && (o._connectionStatus = ConnectionStatus.OPEN, InteractionMaster.sendToAll(InteractionMessageBuilder.SetConnectionStatus(o._connectionStatus)))
                }, this.ws.onmessage = function(e) {
                    var n = e.data;
                    try {
                        var t = SmarticoAPI.replaceSmrDomainsWithCloudfront(JSON.parse(n));
                        if (t.cid === ClassId.PING && o.sendRow(ClassId.PONG, !1), t.cid !== ClassId.PONG && o.scheduledProactiveClientPing(), t.cid !== ClassId.PING && t.cid !== ClassId.PONG && o.log("IN", t), o.params.simulation_mode && CLASS_ID_IGNORE_FOR_SIMULATION.includes(t.cid)) o.log("Simulation mode, skipping incomming ".concat(t.cid));
                        else if (o.params.gamification_wrapper_mode && CLASS_ID_IGNORE_FOR_GAMIFICATION_WRAPPER.includes(t.cid)) o.log("Gamification wrapper mode, skipping incomming ".concat(t.cid));
                        else {
                            try {
                                o.handlers.filter(function(e) {
                                    return e.cid === t.uuid
                                }).map(function(e) {
                                    e = e.handler(t);
                                    return o.handlers = o.handlers.filter(function(e) {
                                        return e.cid !== t.uuid
                                    }), e
                                }), o.handlers.filter(function(e) {
                                    return e.cid === t.cid
                                }).map(function(e) {
                                    return e.handler(t)
                                })
                            } catch (e) {
                                throw o.error("Failed to process incoming socket message, message", e), e
                            }
                            o.triggerExternalCallBack(t.cid, t), t.cid === ClassId.UNSUPPORTED_COMMAND && o.triggerExternalCallBack(EXTERNAL_CALLBACK_KEY.PROTOCOL_ERROR, {
                                errCode: t.errCode,
                                errMsg: t.errMsg
                            })
                        }
                    } catch (t) {
                        var i = JSON.parse(n);
                        o.sendServerError("Failed to process server message ".concat(i.cid, " / ").concat(i.uuid, " / stack: ").concat(t.stack, " / error: ").concat(t.message, " / domain: ").concat(window.location.hostname)), o.error("IN-ERR", t), sentryHub.withScope(function(e) {
                            e.setTag("cid", i.cid), e.setExtra("message", n), sentryHub.captureException(t)
                        })
                    }
                }
            }
            return Tracker.prototype.fakeIncomingMessage = function(t, n) {
                this.handlers.filter(function(e) {
                    return e.cid === t
                }).map(function(e) {
                    return e.handler(n)
                })
            }, Object.defineProperty(Tracker.prototype, "connectionStatus", {
                get: function() {
                    return this._connectionStatus
                },
                enumerable: !1,
                configurable: !0
            }), Tracker.prototype.clear = function(e) {
                e = __assign(__assign({}, SmarticoClearParamsDefaults), e);
                this.ws && this.ws.close(1e3, "clear socket"), !(Tracker.fcmMessaging = null) !== e.keepCallBacks && (Tracker.externalCallbacks = []), this.executeManualDP("dp:" + DpType.GfClose), Gamification.clear(), PromoBuilderNew.clear(this), PrizeDropBuilder.clearAll(this), Cache.clear(), Detector.clear(), this.noMessageTimer && clearTimeout(this.noMessageTimer), this.queueInterval && clearInterval(this.queueInterval), this.isOngoingFCMRequest = !1
            }, Tracker.prototype.getDeviceId = function() {
                function t() {
                    null === (e = api.get(__lsDeviceIdKey)) && (e = guid(), api.set(__lsDeviceIdKey, e, {
                        expires: 9999
                    }))
                }
                var e = "";
                try {
                    LStorage().supported() ? null === (e = LStorage().getItem(__lsDeviceIdKey)) && (e = guid(), LStorage().setItem(__lsDeviceIdKey, e)) : t()
                } catch (e) {
                    t()
                }
                return e
            }, Tracker.getLogicSessionUUID = function() {
                var e = "__smartico_ls_id",
                    t = "__smartico_ls_create_t",
                    n = "__smartico_ls_use_t",
                    i = api.get(e) ? api.get(e) : null,
                    r = api.get(t) ? new Date(parseInt(api.get(t), 10)) : null,
                    a = api.get(n) ? new Date(parseInt(api.get(t), 10)) : null;
                return r && a && (r = (new Date).getTime() - r.getTime(), a = (new Date).getTime() - a.getTime(), 864e5 < r || 36e5 < a ? (api.remove(e), api.remove(t), i = null) : api.set(n, (new Date).getTime().toString())), i || (i = guid(), api.set(e, i, {
                    expires: 9999
                }), api.set(t, (new Date).getTime().toString()), api.set(n, (new Date).getTime().toString())), i
            }, Tracker.prototype.scheduledProactiveClientPing = function() {
                this.noMessageTimer && clearTimeout(this.noMessageTimer), this.noMessageTimer = setTimeout(this.sendClientProactivePing.bind(this), NO_MESSAGE_TIMER)
            }, Tracker.prototype.sendClientProactivePing = function() {
                this.sendRow(ClassId.PING, !1), this.scheduledProactiveClientPing()
            }, Tracker.prototype.init = function(t) {
                var e, n, i = this.params,
                    r = i.brand_key,
                    i = i.simulation_mode;
                sentryHub.configureScope(function(e) {
                    e.setExtra("label_api_key", t), e.setExtra("brand_key", r), e.setExtra("tracker_version", "1.3.296")
                }), this.initStatus === SERVER_REQUEST_STATE.NOT_SENT ? (e = {
                    page: window.location.href,
                    tracker_version: "1.3.296",
                    session_id: Tracker.getLogicSessionUUID()
                }, null == t && this.sendServerError("Init called with empty label_api_key"), n = null != r && "" !== r.trim() ? r : null, this.sendRow(ClassId.INIT, !1, __assign({
                    label_name: SmarticoAPI.getCleanLabelApiKey(t),
                    label_key: SmarticoAPI.getCleanLabelApiKey(t),
                    brand_key: n,
                    simulation_mode: i,
                    device_id: this.deviceId
                }, e)), this.initStatus = SERVER_REQUEST_STATE.SENT) : (this.sendServerError("Call to _smartico.init for already initialised session. Skipped"), this.warn("Call to _smartico.init for already initialised session. Skipped"))
            }, Tracker.prototype.initResponse = function(e) {
                var i = this;
                if (e.errCode === ERRS.OK) {
                    if (console.log("SMARTICO.AI SETUP CHECK: the label and brand are identified. OK"), this.hadSuccessInit = !0, this.labelSettings = e.settings, this.labelProducts = e.products, this.labelSettings[PublicLabelSettings$1.SHADOW_LABEL_PUBLIC_KEY] && this.initShadowLabel({
                            label_api_key: this.labelSettings[PublicLabelSettings$1.SHADOW_LABEL_PUBLIC_KEY]
                        }), void 0 !== this.labelSettings[PublicLabelSettings$1.DELAY_ENGAGEMENT_EXECUTION_ON_LOGIN_MS] && (this.DELAY_ENGAGEMENT_EXECUTION_ON_LOGIN_MS = parseInt(this.labelSettings[PublicLabelSettings$1.DELAY_ENGAGEMENT_EXECUTION_ON_LOGIN_MS], 10)), void 0 !== this.labelSettings[PublicLabelSettings$1.JS_INJECTION]) {
                        this.log("About to init label specific JS_INJECTION");
                        var t = window;
                        if (void 0 === t.__smarticoJSInjected) {
                            t.__smarticoJSInjected = !0;
                            try {
                                t.eval(this.labelSettings[PublicLabelSettings$1.JS_INJECTION])
                            } catch (e) {
                                this.sendServerError("Failed to inject JS_INJECTION: " + JSON.stringify(e)), this.warn("Failed to inject JS_INJECTION", e), sentryHub.captureException(e)
                            }
                        }
                    }
                    if (null === Tracker.fcmMessaging) try {
                        var n = this.labelSettings[PublicLabelSettings$1.FCM_SW_URL_V2],
                            r = "?version=1.1&public_api_key=" + SmarticoAPI.getCleanLabelApiKey(this.label_api_key),
                            a = (null == n || "" === n.trim() ? n = FCM_DEFAULT_SW_URL + r : (-1 !== n.indexOf("?") && (n = n.substring(0, n.indexOf("?"))), n += r), this.labelSettings[PublicLabelSettings$1.FCM_CLIENT_CONFIG]),
                            s = null;
                        try {
                            s = JSON.parse(a)
                        } catch (e) {
                            this.warn("Failed to parse FCM_CLIENT_CONFIG", e)
                        }
                        if (s) try {
                            Tracker.fcmMessaging = new FCMMessaging(this.log.bind(this), s, this.labelSettings[PublicLabelSettings$1.PUBLIC_API_URL], n, this.params.brand_key), console.log("SMARTICO.AI SETUP CHECK: push settings are applied. OK")
                        } catch (e) {
                            Tracker.fcmMessaging = null, console.log("SMARTICO.AI SETUP CHECK: push settings are not applied, crash on FCMMessaging init. Browser not supported", e)
                        } else console.log("SMARTICO.AI SETUP CHECK: push settings are not applied, please follow the guide on https://help.smartico.ai/welcome/technical-guides/front-end-integration/push-configurations and provide needed details to your account manager. FAIL")
                    } catch (e) {
                        this.warn("Failed to init push messaging service", e), Tracker.fcmMessaging = null, console.log("SMARTICO.AI SETUP CHECK: push settings are not applied, please contact support@smartico.ai or your account manager. FAIL")
                    }
                    null != this.ext_user_id && this.identifyDelayed(this.ext_user_id, this.hash, this.identifyPayload, this.visitor_id), Util.isArrayNotEmpty(e.products) && -1 < e.products.indexOf(ProductType.GAMIFICATION) && (t = {}, r = null, (t = (a = function(t) {
                        if (Util.isNotNull(t)) try {
                            var n = JSON.parse(t);
                            return Util.isNotNull(n) && Object.keys(n).length ? n : {}
                        } catch (e) {
                            i.error("Failed parse UI settings"), sentryHub.captureException(e, {
                                data: {
                                    parsed: n,
                                    original: t
                                }
                            })
                        }
                        return {}
                    })(this.labelSettings[PublicLabelSettings$1.GAMIFICATION_UI_SETTINGS_V2])).label_api_key = this.label_api_key, t.brand_key = null == (s = this.params) ? void 0 : s.brand_key, t.simulation_mode = !(null == (n = this.params) || !n.simulation_mode), t.widget_bg_opacity = this.labelSettings[PublicLabelSettings$1.GAMIFICATION_WIDGET_BG_OPACITY], t.avatar_domain = avatarHost(this.label_api_key), t.levelsMapEnabled = this.labelSettings[PublicLabelSettings$1.GAMIFICATION_UI_LEVEL_ENABLED], t.levelsLogic2Enabled = "true" === this.labelSettings[PublicLabelSettings$1.GAMIFICATION_LEVELS_LOGIC2], t.levelsLogic3Enabled = "true" === this.labelSettings[PublicLabelSettings$1.GAMIFICATION_LEVELS_LOGIC3], t.newLobbyForTournaments = "true" === this.labelSettings[PublicLabelSettings$1.GF_TOURNAMENT_LOBBY_NEW_UI], t.levelsBackgroundDeskUrl = this.labelSettings[PublicLabelSettings$1.GAMIFICATION_UI_LEVEL_IMAGE_DESK], t.levelsBackgroundMobUrl = this.labelSettings[PublicLabelSettings$1.GAMIFICATION_UI_LEVEL_IMAGE_MOB], t.AVATAR_CUSTOM_IMAGE_MAX_ID = this.labelSettings[PublicLabelSettings$1.AVATAR_CUSTOM_IMAGE_MAX_ID], t.AVATAR_CUSTOM_IMAGE_FOLDER = this.labelSettings[PublicLabelSettings$1.AVATAR_CUSTOM_IMAGE_FOLDER], t.INBOX_PUBLIC_CDN = this.labelSettings[PublicLabelSettings$1.INBOX_PUBLIC_CDN], t.GAMIFICATION_MATCHX_URL = EWidgetTypeHTMLFiles[EWidgetType.MatchXNew], t.GAMIFICATION_CUSTOM_JS = this.labelSettings[PublicLabelSettings$1.GAMIFICATION_CUSTOM_JS], t.GF_ENABLE_RAFFLE_ON_CLIENT = "true" === this.labelSettings[PublicLabelSettings$1.GF_ENABLE_RAFFLE_ON_CLIENT], t.label_id = e.label_id, t.theme_style_desktop = e.theme_style_desktop, this.labelSettings[PublicLabelSettings$1.GAMIFICATION_UI_SETTINGS_TEST_V2] && ((r = a(this.labelSettings[PublicLabelSettings$1.GAMIFICATION_UI_SETTINGS_TEST_V2])).label_api_key = this.label_api_key, r.brand_key = null == (s = this.params) ? void 0 : s.brand_key, r.simulation_mode = null == (n = this.params) ? void 0 : n.simulation_mode, r.widget_bg_opacity = this.labelSettings[PublicLabelSettings$1.GAMIFICATION_WIDGET_BG_OPACITY], r.avatar_domain = avatarHost(this.label_api_key), r.levelsMapEnabled = this.labelSettings[PublicLabelSettings$1.GAMIFICATION_UI_LEVEL_ENABLED], r.levelsLogic2Enabled = "true" === this.labelSettings[PublicLabelSettings$1.GAMIFICATION_LEVELS_LOGIC2], r.levelsLogic3Enabled = "true" === this.labelSettings[PublicLabelSettings$1.GAMIFICATION_LEVELS_LOGIC3], r.newLobbyForTournaments = "true" === this.labelSettings[PublicLabelSettings$1.GF_TOURNAMENT_LOBBY_NEW_UI_TEST_USERS], r.levelsBackgroundDeskUrl = this.labelSettings[PublicLabelSettings$1.GAMIFICATION_UI_LEVEL_IMAGE_DESK], r.levelsBackgroundMobUrl = this.labelSettings[PublicLabelSettings$1.GAMIFICATION_UI_LEVEL_IMAGE_MOB], r.AVATAR_CUSTOM_IMAGE_MAX_ID = this.labelSettings[PublicLabelSettings$1.AVATAR_CUSTOM_IMAGE_MAX_ID], r.AVATAR_CUSTOM_IMAGE_FOLDER = this.labelSettings[PublicLabelSettings$1.AVATAR_CUSTOM_IMAGE_FOLDER], r.GAMIFICATION_MATCHX_URL = EWidgetTypeHTMLFiles[EWidgetType.MatchXNew], r.INBOX_PUBLIC_CDN = this.labelSettings[PublicLabelSettings$1.INBOX_PUBLIC_CDN], r.GAMIFICATION_CUSTOM_JS = this.labelSettings[PublicLabelSettings$1.GAMIFICATION_CUSTOM_JS], r.theme_style_desktop = e.theme_style_desktop, r.label_id = e.label_id), this.gamification = Gamification.start({
                        settings: t,
                        tracker: this,
                        settingsTest: r,
                        products: e.products
                    }))
                } else console.error("SMARTICO.AI SETUP CHECK: failed to init label and brand - '".concat(e.errMsg, "'. FAIL")), this.sendServerError("Failed to init label, error code from server " + e.errCode + "/" + e.errMsg), e.errCode === ERRS.INIT_FAILED_LABEL_IS_BLOCKED ? this.initStatus = SERVER_REQUEST_STATE.LABEL_IS_BLOCKED : this.initStatus = SERVER_REQUEST_STATE.NOT_SENT;
                this.scheduledProactiveClientPing()
            }, Tracker.prototype.identify = function(t, n, i, r) {
                return void 0 === i && (i = {}), void 0 === r && (r = null), __awaiter(this, void 0, Promise, function() {
                    return __generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return null !== this.ext_user_id ? [3, 3] : (this.ext_user_id = t, this.visitor_id = r, this.hash = n, this.identifyPayload = i, this.hadSuccessInit ? [4, this.identifyDelayed(t, n, i, r)] : [3, 2]);
                            case 1:
                                e.sent(), e.label = 2;
                            case 2:
                                return [3, 4];
                            case 3:
                                t !== this.ext_user_id ? this.warn("double identify for ".concat(t, " skipped. Please check Smartico script initialisation is done properly. You have identified user with ID ").concat(this.ext_user_id, " before and second time trying to identify user with ID ").concat(t)) : this.warn("double identify with same user id ".concat(t, ". 2nd identify is skipped")), e.label = 4;
                            case 4:
                                return [2]
                        }
                    })
                })
            }, Tracker.prototype.identifyDelayed = function(c, l, _, u) {
                return void 0 === _ && (_ = {}), void 0 === u && (u = null), __awaiter(this, void 0, void 0, function() {
                    var t, n, i, r, a, s, o;
                    return __generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return this.params.generate_visit && -1 === this.labelProducts.indexOf(ProductType.ACQUISITION) ? (this.error("Abort identification of visitor ".concat(c, " because product ACQUISITION is not enabled for this label")), [2]) : ((r = (this.getLabelSetting(PublicLabelSettings$1.FRONT_END_ALLOW_DOMAINS) || "").split(",").map(function(e) {
                                    return e.trim()
                                }).filter(function(e) {
                                    return 0 < e.length
                                })).push(".csb.app"), "localhost" !== (t = window.location.hostname) || isDev() || r.includes("localhost") || window._smartico_allow_localhost ? "" !== t && "localhost" !== t && !t.includes(".smartico.ai") && 1 < r.length && !r.find(function(e) {
                                    return t.endsWith(e)
                                }) ? (this.error("Smartico script is not allowed to be loaded on ".concat(t, ". Please contact support@smartico.ai if you need to whitelist this domain")), [2]) : (sentryHub.configureScope(function(e) {
                                    e.setUser(__assign(__assign({}, e.getUser()), {
                                        username: c
                                    }))
                                }), this.identifyStatus !== IdentifyRequestState.NOT_SENT ? [3, 6] : (this.identifyStatus = IdentifyRequestState.SENT_WAITING_FOR_RESPONSE, n = void 0, (r = _.platform) !== PushClientPlatform.NATIVE_ANDROID && r !== PushClientPlatform.NATIVE_IOS ? [3, 1] : (delete(n = _).platform, delete _.token, delete _.pushNotificationUserStatus, [3, 5]))) : (this.error("Smartico script is not allowed to be loaded on localhost by default"), this.error("You can set _smartico_allow_localhost = true to allow localhost. Take it under your own responsibility"), [2]));
                            case 1:
                                return null !== Tracker.fcmMessaging ? [3, 2] : (i = {
                                    token: null,
                                    pushNotificationUserStatus: PushNotificationUserStatus.BROWSER_NOT_SUPPORTED,
                                    platform: Detector.getClientPlatform(),
                                    app_package_id: null
                                }, [3, 4]);
                            case 2:
                                return [4, Tracker.fcmMessaging.getPushState()];
                            case 3:
                                i = e.sent(), e.label = 4;
                            case 4:
                                n = i, e.label = 5;
                            case 5:
                                return r = "".concat(c, ":").concat(u, ":").concat(JSON.stringify(_)), a = (new Date).getTime(), o = LStorage().getItem(this.__lsIdentifyLastTime), s = LStorage().getItem(this.__lsIdentifyLastHash), o = !(null === o || null === s || o < a - SKIP_CJM_PROCESSING_FOR_IDENTIFY_MS || r !== s), null != _ && _._skipOnlineEventProcessing && (delete _._skipOnlineEventProcessing, o = !0), o || (LStorage().setItem(this.__lsIdentifyLastTime, a), LStorage().setItem(this.__lsIdentifyLastHash, r)), this.sendRow(ClassId.IDENTIFY, !1, __assign(__assign({
                                    ext_user_id: c,
                                    hash: l,
                                    visitor_id: this.labelProducts.includes(ProductType.ACQUISITION) ? null : u,
                                    ua: this.browserInfo,
                                    page: window.location.href,
                                    skip_cjm_processing: o
                                }, n), {
                                    payload: _
                                })), [3, 7];
                            case 6:
                                this.warn("Call to _smartico.identify for already identified session. Skipped"), e.label = 7;
                            case 7:
                                return [2]
                        }
                    })
                })
            }, Tracker.prototype.identifyResponse = function(t) {
                var e, n;
                this.identifyStatus = IdentifyRequestState.SENT_GOT_RESPONSE, t.errCode === ERRS.OK ? (console.log("SMARTICO.AI SETUP CHECK: the user is identified (smartico id: ".concat(t.user_id, "). OK")), Tracker.fcmMessaging && Tracker.fcmMessaging.getPushState().then(function(e) {
                    e.pushNotificationUserStatus === PushNotificationUserStatus.ALLOWED ? console.log("SMARTICO.AI SETUP CHECK: push token registered. OK") : e.pushNotificationUserStatus === PushNotificationUserStatus.BROWSER_NOT_SUPPORTED ? console.log("SMARTICO.AI SETUP CHECK: push token not-registered. This browser is not supported") : e.pushNotificationUserStatus === PushNotificationUserStatus.BLOCKED ? console.log("SMARTICO.AI SETUP CHECK: push token not registered. You blocked permissions") : console.log("SMARTICO.AI SETUP CHECK: push token not-registed. Execute _smartico.requestPushPermissions() to proceed with check")
                }), sentryHub.configureScope(function(e) {
                    e.setUser(__assign(__assign({}, e.getUser()), {
                        id: t.user_id
                    }))
                }), this.identifyResponseTS = (new Date).getTime(), this.hadSuccessIdentify = !0, (null === (e = LStorage().getItem(this.__lsLoginTracker)) || (e = JSON.parse(e)).dt < (new Date).getTime() - LOGIN_SESSION_MS || e.ext_user_id !== this.ext_user_id) && this.login(), LStorage().setItem(this.__lsLoginTracker, JSON.stringify({
                    dt: (new Date).getTime(),
                    ext_user_id: this.ext_user_id
                })), this.smarticoUserId = t.user_id, this.userPublicProps = t.props || {}, this.userPublicProps.user_id = t.user_id, this.userPublicProps.avatar_id = t.avatar_id, this.userPublicProps.public_username = t.public_username, this.triggerExternalCallBack(EXTERNAL_CALLBACK_KEY.IDENTIFY, t.errCode, t.props, t), this.reportPublicPropsChange(this.userPublicProps), this.labelProducts.includes(ProductType.ACQUISITION) || this.executeLocationBasedDP(), e = this.labelSettings[PublicLabelSettings$1.AVATAR_CUSTOM_IMAGE_MAX_ID], !(n = this.labelSettings[PublicLabelSettings$1.AVATAR_CUSTOM_IMAGE_FOLDER]) || "0" === e || t.avatar_id && isNaN(parseInt(t.avatar_id)) || (e = (Math.floor(Math.random() * parseInt(e, 10)) + 1).toString(), this.setAvatar(n + "/" + e + ".png", !0)), this.userPublicProps.core_user_language && (n = this.getAllowedLanguage(this.userPublicProps.core_user_language)) !== this.userPublicProps.core_user_language && (this.currentFrontLanguage = n)) : (this.triggerExternalCallBack(EXTERNAL_CALLBACK_KEY.IDENTIFY, t.errCode, {}), this.forgetUser(), console.error("SMARTICO.AI SETUP CHECK: failed to identify user ".concat(t.errMsg, ". FAIL")))
            }, Tracker.prototype.forgetUser = function() {
                this.ext_user_id = null, this.smarticoUserId = null, this.visitor_id = null, this.hash = null, this.identifyPayload = {}, this.identifyStatus = IdentifyRequestState.NOT_SENT, this.hadSuccessIdentify = !1, this.loginIsSent = !1, this.userPublicProps = {}, this.bSuspendPopups = !1, this.bSuspendInbox = !1, this.bSuspendMiniGames = !1, this.suspendEngagemensPopups = [], this.suspendEngagemensInbox = [], this.suspendEngagemensMiniGames = [], this.isOngoingFCMRequest = !1, this.inLogoutProcess = !1, Gamification.clear(), PromoBuilderNew.clear(this), PrizeDropBuilder.clearAll(this)
            }, Tracker.prototype.changeLanguage = function(i) {
                return __awaiter(this, void 0, void 0, function() {
                    var t, n = this;
                    return __generator(this, function(e) {
                        return t = {
                            ptb: "BR"
                        }, null != i && i.trim && 2 === (i = t[i] ? t[i] : i).length && (this.hadSuccessIdentify ? (i = this.getAllowedLanguage(i), this.currentFrontLanguage = i, (void 0 === (t = (this.userPublicProps || {}).core_user_language) || t && t.toLowerCase && t.toLowerCase() !== i.toLowerCase()) && this.sendRow(ClassId.EVENT, !0, {
                            eventType: ClientEventTypes.core_language_changed,
                            payload: {
                                language: i
                            }
                        })) : setTimeout(function() {
                            return n.changeLanguage(i)
                        }, 1e3)), [2]
                    })
                })
            }, Tracker.prototype.isIdenfitied = function() {
                return this.hadSuccessIdentify
            }, Tracker.prototype.convertVisitorGame = function(n) {
                return __awaiter(this, void 0, void 0, function() {
                    var t;
                    return __generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                if (window.visitor_game_converted) return [2];
                                window.visitor_game_converted = !0, e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]), t = avatarHost(this.label_api_key) + "visitorGame/".concat(this.label_api_key, "/").concat(this.params.brand_key, "/").concat(this.params.lang, "/0/").concat(n), [4, fetch(t, {
                                    method: "POST",
                                    body: JSON.stringify({
                                        visitor_win_uuid: n,
                                        user_id: this.smarticoUserId
                                    }),
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                })];
                            case 2:
                            case 3:
                                return e.sent(), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, Tracker.prototype.reportTelegramChatStitching = function(i) {
                return __awaiter(this, void 0, void 0, function() {
                    var t, n;
                    return __generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return i.params.chat_id ? [3, 1] : (n = avatarHost(this.label_api_key) + "telegram-get-link/".concat(this.label_api_key, "/").concat(this.params.brand_key, "/").concat(this.smarticoUserId, "/").concat(this.ext_user_id), window.open(n, "_blank"), [3, 5]);
                            case 1:
                                LStorage().getItem(this.__lsTelegramChatAndUserId), t = i.params.chat_id + "-" + this.smarticoUserId, e.label = 2;
                            case 2:
                                return e.trys.push([2, 4, , 5]), n = avatarHost(this.label_api_key) + "telegram-stitch/".concat(this.label_api_key, "/").concat(i.params.provider_id, "/").concat(this.smarticoUserId, "/").concat(i.params.chat_id, "/").concat(i.params.sign), [4, fetch(n, {
                                    method: "GET"
                                })];
                            case 3:
                                return e.sent(), LStorage().setItem(this.__lsTelegramChatAndUserId, t), [3, 5];
                            case 4:
                                return e.sent(), [3, 5];
                            case 5:
                                return [2]
                        }
                    })
                })
            }, Tracker.prototype.handlePublicPropsChange = function(e) {
                Object.assign(this.userPublicProps, e.props), this.reportPublicPropsChange(e.props)
            }, Tracker.prototype.handleAvatarChange = function(e) {
                Object.assign(this.userPublicProps, {
                    avatar_id: e.avatar_id
                }), this.reportPublicPropsChange({
                    avatar_id: e.avatar_id
                })
            }, Tracker.prototype.handleUsernameChange = function(e) {
                Object.assign(this.userPublicProps, {
                    public_username: e.public_username_custom
                }), this.reportPublicPropsChange({
                    public_username: e.public_username_custom
                }), this.sendRow(ClassId.EVENT, !0, {
                    eventType: ClientEventTypes.gf_nickname_changed,
                    payload: {}
                })
            }, Tracker.prototype.reportPublicPropsChange = function(e) {
                e = Object.assign({}, e);
                e.avatar_id && (e.avatar_id = CoreUtils.avatarUrl(e.avatar_id, avatarHost(this.label_api_key))), this.triggerExternalCallBack(EXTERNAL_CALLBACK_KEY.USER_PROPS_CHANGE, e)
            }, Tracker.prototype.getPublicProps = function() {
                return this.userPublicProps
            }, Tracker.prototype.handleLogout = function(e) {
                e.errCode === ERRS.OK && (this.log("Handling logout, going to forget user and start reconnect"), this.forgetUser(), this.triggerExternalCallBack(EXTERNAL_CALLBACK_KEY.LOGOUT), this.ws.reconnect())
            }, Tracker.prototype.handleLogin = function(e) {
                LStorage().getItem(this.__lsDelayedLoginPayload) && LStorage().removeItem(this.__lsDelayedLoginPayload), e.errCode === ERRS.OK && this.triggerExternalCallBack(EXTERNAL_CALLBACK_KEY.LOGIN)
            }, Tracker.prototype.serverTriggeredDPHandler = function(t) {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.delayEngagementAfterLogin()];
                            case 1:
                                return e.sent(), this.reportEngagmentImpression({
                                    engagement_uid: t.engagement_uid,
                                    activityType: CJMActivityType.DeepLink
                                }), [2, DeepLinks.actionHandler(this, t.payload.dp, t.engagement_uid, CJMActivityType.DeepLink, !0)]
                        }
                    })
                })
            }, Tracker.prototype.executeJSCode = function(inMessage) {
                return __awaiter(this, void 0, void 0, function() {
                    var outMessage;
                    return __generator(this, function(_a) {
                        switch (_a.label) {
                            case 0:
                                return [4, this.delayEngagementAfterLogin()];
                            case 1:
                                _a.sent(), outMessage = {
                                    engagement_uid: inMessage.engagement_uid,
                                    activityType: CJMActivityType.JSCode
                                }, this.reportEngagmentImpression(outMessage);
                                try {
                                    eval(inMessage.script), this.reportEngagmentAction(outMessage)
                                } catch (e) {
                                    this.sendServerError("Failed to execute server side triggered script: " + JSON.stringify(inMessage) + " / " + JSON.stringify(e)), this.error("Failed to execute server side triggered script", inMessage, e), this.reportEngagmentFail(outMessage)
                                }
                                return [2]
                        }
                    })
                })
            }, Tracker.prototype.handleSawPushEvent = function(t) {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(e) {
                        return this.bSuspendMiniGames ? (this.warn("Got request to show mini game, but mini game is suspended by host"), this.suspendEngagemensMiniGames.push(t)) : this.miniGame(t.saw_template_id, null, t.pending_message_id, t.saw_game_type_id), [2]
                    })
                })
            }, Tracker.prototype.delayEngagementAfterLogin = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var t, n;
                    return __generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return (t = (new Date).getTime(), n = this.inPageUnloadPhase ? this.DELAY_ENGAGEMENT_EXECUTION_DURING_UNLOAD_MS : this.DELAY_ENGAGEMENT_EXECUTION_ON_LOGIN_MS, t - this.identifyResponseTS < n) ? [4, wait(n - (t - this.identifyResponseTS))] : [3, 2];
                            case 1:
                                e.sent(), e.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            }, Tracker.prototype.engagementEventHandler = function(i) {
                return __awaiter(this, void 0, void 0, function() {
                    var t, n = this;
                    return __generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return this.isIdenfitied() ? this.bSuspendPopups && i.activityType === CJMActivityType.Popup ? (this.warn("Got request to show popup, but popup is suspended by host"), this.suspendEngagemensPopups.push(i), [2]) : this.bSuspendInbox && i.activityType === CJMActivityType.Inbox ? (this.warn("Got request to show inbox, but inbox is suspended by host"), this.suspendEngagemensInbox.push(i), [2]) : [4, this.delayEngagementAfterLogin()] : [2];
                            case 1:
                                if (e.sent(), i.activityType === CJMActivityType.Popup) {
                                    if ("true" === this.labelSettings[PublicLabelSettings$1.FRONT_ENABLE_POPUPS_QUEUE] && PromoBuilderNew.hasPopupOnScreen()) return setTimeout(function() {
                                        return n.engagementEventHandler(i)
                                    }, 1e3), [2];
                                    if (t = parseInt(this.labelSettings[PublicLabelSettings$1.FRONT_DELAY_BETWEEN_POPUPS_MS]), this.lastPopupClosedEpochMs && (new Date).getTime() - this.lastPopupClosedEpochMs < t) return setTimeout(function() {
                                        return n.engagementEventHandler(i)
                                    }, 1e3), [2];
                                    i.params.popup_bg_opacity = this.labelSettings[PublicLabelSettings$1.GAMIFICATION_POPUP_BG_OPACITY], i.params.popup_bg_blur = this.labelSettings[PublicLabelSettings$1.GAMIFICATION_POPUP_BG_BLUR], PromoBuilderNew.showPromoMessage(i, this)
                                }
                                return [2]
                        }
                    })
                })
            }, Tracker.prototype.prizeDropWinHandler = function(n, e) {
                return __awaiter(this, void 0, void 0, function() {
                    var t;
                    return __generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return n.cid === ClassId.JP_WIN_PUSH && this.triggerExternalCallBack(EXTERNAL_CALLBACK_KEY.JACKPOT_WIN, n), [4, this.delayEngagementAfterLogin()];
                            case 1:
                                return e.sent(), t = {
                                    popup_bg_opacity: this.labelSettings[PublicLabelSettings$1.GAMIFICATION_POPUP_BG_OPACITY],
                                    popup_bg_blur: this.labelSettings[PublicLabelSettings$1.GAMIFICATION_POPUP_BG_BLUR]
                                }, PrizeDropBuilder.show(n, this, t), [2]
                        }
                    })
                })
            }, Tracker.prototype.reportEngagmentAction = function(e) {
                null !== e.engagement_uid && this.sendRow(ClassId.CLIENT_ENGAGEMENT_ACTION_REQUEST, !0, e)
            }, Tracker.prototype.reportEngagmentFail = function(e) {
                null !== e.engagement_uid && this.sendRow(ClassId.CLIENT_ENGAGEMENT_FAILED_REQUEST, !0, e)
            }, Tracker.prototype.reportEngagmentImpression = function(e) {
                null !== e.engagement_uid && this.sendRow(ClassId.CLIENT_ENGAGEMENT_IMPRESSION_REQUEST, !0, e)
            }, Tracker.prototype.setLoginPayload = function(e) {
                void 0 === e && (e = {}), null === this.ext_user_id && this.error("SMARTICO: cannot call _smartico.login before _smartico.identify"), LStorage().setItem(this.__lsDelayedLoginPayload, JSON.stringify(e)), this.login()
            }, Tracker.prototype.login = function() {
                null === this.ext_user_id && this.error("SMARTICO: cannot call _smartico.login before _smartico.identify"), this.loginPostponed()
            }, Tracker.prototype.loginPostponed = function() {
                var e, t, n = this;
                this.loginIsSent || (e = LStorage().getItem(this.__lsDelayedLoginPayload), this.hadSuccessIdentify && (this.labelProducts.includes(ProductType.ACQUISITION) ? this.loginIsSent = !0 : (this.sendAnalytics(ClientActivityRequestId.LOGIN, "other"), this.loginIsSent = !0, t = {}, Object.keys(this.browserInfo).forEach(function(e) {
                    t["ua_" + e] = n.browserInfo[e]
                }), e ? this.sendRow(ClassId.LOGIN, !0, {
                    payload: __assign(__assign({}, JSON.parse(e)), t)
                }) : this.sendRow(ClassId.LOGIN, !0, {
                    payload: t
                }))))
            }, Tracker.prototype.logout = function(e) {
                void 0 === e && (e = {}), this.inLogoutProcess ? this.error("SMARTICO: cannot call _smartico.logout 2nd time while logout is already in progress") : (this.inLogoutProcess = !0, null === this.ext_user_id && this.error("SMARTICO: cannot call _smartico.logout before _smartico.identify"), LStorage().removeItem(this.__lsLoginTracker), this.executeManualDP("dp:" + DpType.GfClose), this.labelProducts.includes(ProductType.ACQUISITION) || (this.sendAnalytics(ClientActivityRequestId.LOGOUT, "other"), this.sendRow(ClassId.LOGOUT, !0, e)))
            }, Tracker.prototype.sendRow = function(t, e, n) {
                var i;
                return void 0 === n && (n = {}), t === ClassId.CLIENT_TRACK_ACTIVITY_REQUEST ? guid() : this.params.simulation_mode && CLASS_ID_IGNORE_FOR_SIMULATION.includes(t) ? (this.log("Simulation mode, skipping ".concat(t), n), guid()) : this.params.gamification_wrapper_mode && CLASS_ID_IGNORE_FOR_GAMIFICATION_WRAPPER.includes(t) ? (this.log("Gamification wrapper mode, skipping ".concat(t), n), guid()) : (t === ClassId.PING || t === ClassId.PONG) && this.queue && this.queue.find(function(e) {
                    return e.cid === t
                }) ? guid() : (CLASS_ID_SUPPORTS_FORCE_LANG.includes(t) && Util.isNull(n.force_language) && (i = this.currentFrontLanguage || this.userPublicProps.core_user_language, n.force_language = i), i = __assign({
                    cid: t,
                    toIdentified: e,
                    ts: (new Date).getTime(),
                    uuid: guid()
                }, n), this.queue.push(i), t === ClassId.CLIENT_SET_AVATAR_REQUEST && !0 !== (null == n ? void 0 : n.skip_change_event) && this.sendRow(ClassId.EVENT, !0, {
                    eventType: ClientEventTypes.gf_avatar_changed,
                    payload: {}
                }), i.uuid)
            }, Tracker.prototype.requestPushPermissions = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var t, n = this;
                    return __generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return this.hadSuccessIdentify ? this.isOngoingFCMRequest ? (this.log("FCM: Push permissions request is already in progress, skipping"), [2]) : (this.isOngoingFCMRequest = !0, Tracker.fcmMessaging ? this.hadSuccessIdentify ? [4, Tracker.fcmMessaging.getPermissionAndToken(!1)] : [3, 3] : [3, 5]) : (setTimeout(function() {
                                    return n.requestPushPermissions()
                                }, 200), [2]);
                            case 1:
                                return e.sent(), [4, Tracker.fcmMessaging.getPushState()];
                            case 2:
                                return t = e.sent(), this.sendRow(ClassId.REGISTER_PUSH_NOTIFICATIONS_TOKEN_REQ, !0, t), t.pushNotificationUserStatus === PushNotificationUserStatus.ALLOWED && console.log("SMARTICO.AI SETUP CHECK: push token registered. OK"), this.isOngoingFCMRequest = !1, [3, 4];
                            case 3:
                                throw this.isOngoingFCMRequest = !1, new Error("User not identified, you should call .identify first");
                            case 4:
                                return [3, 6];
                            case 5:
                                throw this.isOngoingFCMRequest = !1, new Error("Push notifications service is not initialized, either call done before .init or label is missing push notification settings");
                            case 6:
                                return this.isOngoingFCMRequest = !1, [2]
                        }
                    })
                })
            }, Tracker.prototype.registerNativePushToken = function(n, i, r) {
                return void 0 === i && (i = PushClientPlatform.OTHER), void 0 === r && (r = null), __awaiter(this, void 0, void 0, function() {
                    var t;
                    return __generator(this, function(e) {
                        return n && "" !== n.trim() ? (t = {
                            token: n,
                            platform: i,
                            pushNotificationUserStatus: PushNotificationUserStatus.ALLOWED,
                            app_package_id: r
                        }, this.sendRow(ClassId.REGISTER_PUSH_NOTIFICATIONS_TOKEN_REQ, !0, t)) : this.error("Cannot register empty push token"), [2]
                    })
                })
            }, Tracker.prototype.executeLocationBasedDP = function() {
                return __awaiter(this, void 0, Promise, function() {
                    return __generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return window.sessionStorage && window.sessionStorage.getItem(DP_SESSION_STORAGE_KEY) ? (this.triggerExternalCallBack(EXTERNAL_CALLBACK_KEY.SESSION_BASED_DP_DETECTED), [4, wait(1e3)]) : [3, 2];
                            case 1:
                                e.sent(), this.inPageUnloadPhase || (this.executeManualDP(window.sessionStorage.getItem(DP_SESSION_STORAGE_KEY)), window.sessionStorage.removeItem(DP_SESSION_STORAGE_KEY)), e.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            }, Tracker.saveLocationBasedDP = function() {
                var e, t, n = parseUrlHash(),
                    i = parseUrl(),
                    r = null;
                n[DP_URL_IN_HASH] ? (t = (e = window.location.hash.substr(1)).indexOf(DP_URL_IN_HASH) + DP_URL_IN_HASH.length + 1, r = decodeURIComponent(e.substr(t))) : i[DP_URL_IN_HASH] && (t = (e = window.location.search.substr(1)).indexOf(DP_URL_IN_HASH) + DP_URL_IN_HASH.length + 1, r = decodeURIComponent(e.substr(t))), r && window.sessionStorage && ((n = DeepLinks.parse(r)).action === DpType.Go || null != (i = n.params) && i.url || window.sessionStorage.setItem(DP_SESSION_STORAGE_KEY, r))
            }, Tracker.saveLocationBasedVisitorID = function() {
                var e, t, n, i = parseUrlHash(),
                    r = parseUrl();
                i[VISITOR_ID_IN_HASH] ? (t = (e = window.location.hash.substr(1)).indexOf(VISITOR_ID_IN_HASH) + VISITOR_ID_IN_HASH.length + 1, n = decodeURIComponent(e.substr(t)), window.localStorage && window.localStorage.setItem(VISTIOR_ID_IN_STORAGE_KEY, n)) : r[VISITOR_ID_IN_HASH] && (t = (e = window.location.search.substr(1)).indexOf(VISITOR_ID_IN_HASH) + VISITOR_ID_IN_HASH.length + 1, n = decodeURIComponent(e.substr(t)), window.localStorage) && window.localStorage.setItem(VISTIOR_ID_IN_STORAGE_KEY, n)
            }, Tracker.getSavedLocationBasedVisitorID = function() {
                if (window.localStorage) return window.localStorage.getItem(VISTIOR_ID_IN_STORAGE_KEY)
            }, Tracker.prototype.sendServerError = function(e) {
                this.sendRow(ClassId.CLIENT_DEBUG_REQUEST, !1, {
                    msg: e,
                    error: !0
                })
            }, Tracker.prototype.sendServerDebug = function(e) {
                this.sendRow(ClassId.CLIENT_DEBUG_REQUEST, !1, {
                    msg: e,
                    error: !1
                })
            }, Tracker.prototype.executeManualDP = function(e, t, n) {
                var i = this;
                if (void 0 === t && (t = null), void 0 === n && (n = null), this.hadSuccessIdentify) return DeepLinks.actionHandler(this, e, t, n);
                var r = setInterval(function() {
                    i.hadSuccessIdentify && (clearInterval(r), DeepLinks.actionHandler(i, e, t, n))
                }, 10)
            }, Tracker.prototype.registerHandler = function(e, t) {
                this.handlers.push({
                    cid: e,
                    handler: t
                })
            }, Tracker.prototype.getLabelSetting = function(e) {
                return this.labelSettings[e]
            }, Tracker.prototype.triggerExternalCallBack = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                e === EXTERNAL_CALLBACK_KEY.GF_CLOSING && this.sendRow(ClassId.EVENT, !0, {
                    eventType: ClientEventTypes.core_gamification_closed,
                    payload: {}
                }), Tracker.triggerExternalCallBackStatic.apply(Tracker, __spreadArray([e], t))
            }, Tracker.triggerExternalCallBackStatic = function(t) {
                for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
                Tracker.externalCallbacks.filter(function(e) {
                    return e.callBackKey === t
                }).map(function(e) {
                    return setTimeout(function() {
                        try {
                            e.handler.apply(e, n)
                        } catch (e) {
                            console.warn("SM: failed to execute external callback", e)
                        }
                    }, 0)
                })
            }, Tracker.prototype.getParams = function() {
                return this.params
            }, Tracker.prototype.setAvatar = function(e, t) {
                this.sendRow(ClassId.CLIENT_SET_AVATAR_REQUEST, !0, {
                    avatar_id: e,
                    skip_change_event: t = void 0 === t ? !1 : t
                })
            }, Tracker.prototype.setNickname = function(e) {
                this.sendRow(ClassId.CLIENT_SET_CUSTOM_USERNAME_REQUEST, !0, {
                    public_username_custom: e
                })
            }, Tracker.prototype.setSkin = function(e) {
                var t = this.getLabelSetting(PublicLabelSettings$1.GAMIFICATION_AVAILABLE_SKINS);
                (t && t.includes(e) || isDev() || window.location.href.includes("demo.smartico.ai")) && this.gamification.setSkin(e)
            }, Tracker.on = function(t, e, n) {
                null === e ? Tracker.externalCallbacks = Tracker.externalCallbacks.filter(function(e) {
                    return e.callBackKey !== t
                }) : Tracker.externalCallbacks.push({
                    callBackKey: t,
                    handler: e,
                    params: n
                })
            }, Tracker.off = function(t, n) {
                null !== n && (Tracker.externalCallbacks = Tracker.externalCallbacks.filter(function(e) {
                    return !(e.callBackKey === t && e.handler === n)
                }))
            }, Tracker.prototype.getExtUserId = function() {
                return this.ext_user_id
            }, Tracker.prototype.suspendPopups = function(e) {
                var t = this;
                !1 === (this.bSuspendPopups = e) && (this.suspendEngagemensPopups.forEach(function(e) {
                    t.engagementEventHandler(e)
                }), this.suspendEngagemensPopups = [])
            }, Tracker.prototype.suspendInbox = function(e) {
                var t = this;
                !1 === (this.bSuspendInbox = e) && (this.suspendEngagemensInbox.forEach(function(e) {
                    t.engagementEventHandler(e)
                }), this.suspendEngagemensInbox = [])
            }, Tracker.prototype.suspendMiniGames = function(e) {
                var t = this;
                !1 === (this.bSuspendMiniGames = e) && (this.suspendEngagemensMiniGames.forEach(function(e) {
                    t.handleSawPushEvent(e)
                }), this.suspendEngagemensMiniGames = [])
            }, Tracker.prototype.logPrefix = function() {
                return (this.trackerInstanceType === TrackerInstanceType.Master ? "SM:" : "SM-SHADOW:") + (new Date).toISOString().substring(11, 19) + " "
            }, Tracker.prototype.log = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this.params.debug && console.log.apply(console, __spreadArray([this.logPrefix()], e))
            }, Tracker.prototype.warn = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                console.warn.apply(console, __spreadArray([this.logPrefix()], e))
            }, Tracker.prototype.error = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                console.error.apply(console, __spreadArray([this.logPrefix()], e))
            }, Tracker.prototype.processQueue = function() {
                for (var e = 0 < this.queue.length; this.ws.readyState === ReconnectingWebSocket.OPEN && e;) {
                    for (var t = null, n = -1, i = 0; i < this.queue.length; i++)
                        if (!(t = this.queue[i]).toIdentified || this.hadSuccessIdentify) {
                            n = i;
                            break
                        }
                    e = null !== t && -1 !== n && (delete t.toIdentified, t.cid !== ClassId.PONG && t.cid !== ClassId.PING && this.log("OUT", t), this.ws.send(JSON.stringify(t)), this.queue.splice(n, 1), !0)
                }
            }, Tracker.prototype.getAllowedLanguage = function(e) {
                var t = [e.toLowerCase()],
                    n = this.getLabelSetting(PublicLabelSettings$1.FRONT_END_ALLOWED_LANGUAGES);
                return e = 0 < (t = n && "" !== n.trim() ? n.toLowerCase().trim().split(",") : t).length && !t.includes(e.toLowerCase()) && (e = t[0], t.find(function(e) {
                    return "en" === e
                })) ? "en" : e
            }, Tracker.externalCallbacks = [], Tracker.fcmMessaging = null, Tracker
        }(),
        PostMessage = (() => {
            function e(n, e, i) {
                var r = this;
                Util.checkNotNull(n), this._id = n, this._w = e, this._logger = Logger$1.Of(this.constructor.toString().match(/\w+/g)[1] + "-" + n), WebUtil.addEventListener(window, "message", this._handler = function(e) {
                    if (Util.isNotNull(i)) {
                        var t;
                        try {
                            t = JSON.parse(e.data), Util.isNotNull(t.id) && Util.isNotEmpty(t.bridgeId) && t.bridgeId === n && (r._logger.debug("--\x3e On message: " + e.data), i(t))
                        } catch (e) {}
                    }
                })
            }
            return e.prototype.destroy = function() {
                this._handler && (this._logger.debug("Destroy"), window.removeEventListener("message", this._handler), this._handler = null)
            }, e.prototype.send = function(e) {
                if (Util.isNotNull(this._w)) {
                    e.bridgeId = this._id;
                    var t = JSON.stringify(e);
                    try {
                        this._logger.debug("<-- Send message: " + e.id), this._w.postMessage(t, "*")
                    } catch (e) {
                        this._logger.debug("Error send post message: " + t + " Error: " + JSON.stringify(e))
                    }
                }
            }, e
        })(),
        REMOTE_INTEGRATION_ID = "_smartico_inframe_bridge",
        SmarticoInFrameIntegration = (() => {
            function e(e) {
                var t = this;
                this._logger = Logger$1.Of(this.constructor.toString().match(/\w+/g)[1]), Util.checkNotNull(e), this._smartico = e, this._connection = new PostMessage(REMOTE_INTEGRATION_ID, window, function(e) {
                    e.id === InteractionMessageId.ExecSmarticoFromFrame && (t._logger.debug("Execute smartico script from the iframe ", (e = e).method, e.arguments), t._smartico[e.method].apply(t._smartico, e.arguments))
                }), this._logger.info("Started", window.location.href)
            }
            return e.start = function(e) {
                return this._instance || (this._instance = new this(e))
            }, e.prototype.send = function(e) {
                Util.isNotNull(this._connection) && this._connection.send(e)
            }, e
        })(),
        TrackerVisitor = (() => {
            function r(e, t) {
                var i = this,
                    n = (this.label_api_key = null, this.handlers = [], this.ext_user_id = null, this.miniGame = function(e, t) {
                        var n = t.frame_id;
                        n && document.getElementById(t.frame_id) ? (t = EWidgetTypeHTMLFiles[EWidgetType.MiniGame] + "?saw_template_id=".concat(e) + "&embeddableMode=true", n = document.getElementById(n), i.gamification.openInlineFrame(t, n, {}, InteractionBridgeType.InlineFrame)) : i.gamification && i.executeManualDP("dp:gf_saw&id=".concat(e, "&standalone=true"))
                    }, this.executeGfDp = function(e) {
                        i.gamification && i.gamification.executeDp(e)
                    }, this.executeNativeDp = function(e) {}, this.promoMessageClosed = function() {}, this.label_api_key = e, this.params = t, this.gamification = Gamification.start({
                        settings: {
                            label_api_key: this.label_api_key,
                            brand_key: null == (e = this.params) ? void 0 : e.brand_key,
                            avatar_domain: avatarHost(this.label_api_key)
                        },
                        tracker: this,
                        settingsTest: {},
                        products: [ProductType.GAMIFICATION]
                    }), {
                        cid: ClassId.IDENTIFY_RESPONSE,
                        job: !1,
                        user_id: 1,
                        props: {
                            ach_points_ever: 0,
                            core_public_tags: [],
                            ach_level_current_id: 1,
                            ach_points_balance: 0,
                            ach_gamification_in_control_group: !1,
                            core_inbox_unread_count: 0,
                            core_user_language: t.lang,
                            core_is_test_account: !1,
                            is_visitor: !0
                        },
                        ext_user_id: "Visitor",
                        pubic_username_set: !1,
                        public_username: "Visitor",
                        avatar_id: "https://static.smr.vc/86faa642-3dd8-4734-8282-670c78a7d1a0/40.png",
                        errCode: 0,
                        errMsg: null,
                        ts: (new Date).getTime(),
                        uuid: guid()
                    });
                this.ext_user_id = n.ext_user_id, this.handlers.filter(function(e) {
                    return e.cid === n.cid
                }).map(function(e) {
                    return e.handler(n)
                })
            }
            return r.prototype.sendRow = function(e, t, n) {
                var i, r = this,
                    t = __assign(__assign({
                        cid: e,
                        toIdentified: t
                    }, n = void 0 === n ? {} : n), {
                        ts: (new Date).getTime(),
                        uuid: guid()
                    }),
                    a = t.saw_template_id,
                    n = (e === ClassId.SAW_DO_SPIN_REQUEST && this.onBeforePlay && !this.onBeforePlay() && (i = {
                        cid: ClassId.SAW_DO_SPIN_RESPONSE,
                        errCode: SAWSpinErrorCode.SAW_VISITOR_STOP_SPIN_REQUEST,
                        request_id: n.request_id,
                        saw_prize_id: null,
                        first_spin_in_period: null
                    }, this.handlers.filter(function(e) {
                        return e.cid === i.cid
                    }).map(function(e) {
                        return e.handler(i)
                    })), avatarHost(this.label_api_key) + "visitorGame/".concat(this.label_api_key, "/").concat(this.params.brand_key, "/").concat(this.params.lang, "/").concat(e) + "/is_visitor_mode/true" + (a ? "/".concat(a) : ""));
                return fetch(n, {
                    method: "POST",
                    body: JSON.stringify(t),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(function(e) {
                    return e.json()
                }).then(function(t) {
                    try {
                        r.handlers.filter(function(e) {
                            return e.cid === t.cid
                        }).map(function(e) {
                            return e.handler(t)
                        })
                    } catch (e) {
                        throw console.error("Failed to process incoming socket message, message", e), e
                    }
                }).catch(function(e) {
                    console.log(e)
                }), t.uuid
            }, r.prototype.getExtUserId = function() {
                return this.ext_user_id
            }, r.prototype.triggerExternalCallBack = function(t) {
                for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
                r.externalCallbacks.filter(function(e) {
                    return e.callBackKey === t
                }).map(function(e) {
                    return setTimeout(function() {
                        return e.handler.apply(e, n)
                    }, 0)
                })
            }, r.on = function(t, e, n) {
                null === e ? r.externalCallbacks = r.externalCallbacks.filter(function(e) {
                    return e.callBackKey !== t
                }) : r.externalCallbacks.push({
                    callBackKey: t,
                    handler: e,
                    params: n
                })
            }, r.prototype.showVisitorGame = function(e) {
                var t = e.template_id,
                    n = e.onBeforePlay,
                    i = e.onWin;
                this.miniGame(t, e), this.onBeforePlay = n, r.on(EXTERNAL_CALLBACK_KEY.MNIGAME_WIN, i)
            }, r.prototype.clear = function(e) {
                Gamification.clear()
            }, r.prototype.executeManualDP = function(e, t, n) {
                return DeepLinks.actionHandler(this, e, t = void 0 === t ? null : t, n = void 0 === n ? null : n)
            }, r.prototype.reportEngagmentAction = function(e) {}, r.prototype.reportEngagmentFail = function(e) {}, r.prototype.getPublicProps = function() {
                return null
            }, r.prototype.reportEngagmentImpression = function(e) {}, r.prototype.requestPushPermissions = function() {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(e) {
                        return [2]
                    })
                })
            }, r.prototype.registerHandler = function(e, t) {
                this.handlers.push({
                    cid: e,
                    handler: t
                })
            }, r.prototype.getParams = function() {
                return this.params
            }, r.prototype.logPrefix = function() {
                return "SM-VIS:"
            }, r.prototype.log = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this.params.debug && console.log.apply(console, __spreadArray([this.logPrefix()], e))
            }, r.prototype.warn = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                console.warn.apply(console, __spreadArray([this.logPrefix()], e))
            }, r.prototype.error = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                console.error.apply(console, __spreadArray([this.logPrefix()], e))
            }, r.externalCallbacks = [], r
        })(),
        GamificationEngine = (() => {
            function e(e) {
                var r = this;
                this._socketPromises = new typescriptMap_1, this._socketListeners = new typescriptMap_1, this.doGetLevels = function() {
                    return r.socketRequest({
                        cid: ClassId.GET_LEVEL_MAP_REQUEST
                    }, ClassId.GET_LEVEL_MAP_RESPONSE)
                }, this.doGetMissions = function() {
                    return r.socketRequest({
                        cid: ClassId.GET_ACHIEVEMENT_MAP_REQUEST
                    }, ClassId.GET_ACHIEVEMENT_MAP_RESPONSE)
                }, this.doOptinMission = function(e) {
                    return r.socketRequest({
                        cid: ClassId.MISSION_OPTIN_REQUEST,
                        achievementId: e
                    }, ClassId.MISSION_OPTIN_RESPONSE)
                }, this.doClaimRewardMission = function(e) {
                    return r.socketRequest({
                        cid: ClassId.ACHIEVEMENT_CLAIM_PRIZE_REQUEST,
                        achievementId: e
                    }, ClassId.ACHIEVEMENT_CLAIM_PRIZE_RESPONSE)
                }, this.doGetTournaments = function() {
                    return r.socketRequest({
                        cid: ClassId.GET_TOURNAMENT_LOBBY_REQUEST
                    }, ClassId.GET_TOURNAMENT_LOBBY_RESPONSE)
                }, this.doGetTournamentLobby = function(e) {
                    return r.socketRequest({
                        cid: ClassId.GET_TOURNAMENT_INFO_REQUEST,
                        tournamentInstanceId: e
                    }, ClassId.GET_TOURNAMENT_INFO_RESPONSE)
                }, this.doTournamentRegister = function(e) {
                    return r.socketRequest({
                        cid: ClassId.TOURNAMENT_REGISTER_REQUEST,
                        tournamentInstanceId: e
                    }, ClassId.TOURNAMENT_REGISTER_RESPONSE)
                }, this.socketRequest = function(n, i) {
                    return Util.checkNotNull(n.cid), Util.isNotNull(i) ? new Promise(function(e) {
                        var t = r._socketPromises.get(i);
                        Util.isArrayEmpty(t) && r._socketPromises.set(i, t = []), t.push(e), r._tracker.sendRow(n.cid, !0, n)
                    }) : new Promise(function(e) {
                        r._tracker.sendRow(n.cid, !0, n), e(null)
                    })
                }, this.socketResponse = function(e, t) {
                    var n, i = r._socketPromises.get(e.cid);
                    Util.isArrayNotEmpty(i) && (n = t(), i.forEach(function(e) {
                        return e(n)
                    }), r._socketPromises.set(e.cid, []))
                }, this.listen = function(e, t) {
                    var n = r._socketListeners.get(t);
                    Util.isArrayEmpty(n) && r._socketListeners.set(t, n = []), n.push(e)
                }, this.notify = function(e, t) {
                    var n, e = r._socketListeners.get(e.cid);
                    Util.isArrayNotEmpty(e) && (n = t(), e.forEach(function(e) {
                        return e(n)
                    }))
                }, Util.checkNotNull(e), this._tracker = e, this._tracker.registerHandler(ClassId.GET_LEVEL_MAP_RESPONSE, function(e) {
                    r.socketResponse(e, function() {
                        return e
                    })
                }), this._tracker.registerHandler(ClassId.GET_TOURNAMENT_LOBBY_RESPONSE, function(e) {
                    r.socketResponse(e, function() {
                        return e
                    })
                }), this._tracker.registerHandler(ClassId.GET_TOURNAMENT_INFO_RESPONSE, function(e) {
                    r.socketResponse(e, function() {
                        return e
                    })
                }), this._tracker.registerHandler(ClassId.TOURNAMENT_REGISTER_RESPONSE, function(e) {
                    r.socketResponse(e, function() {
                        return e
                    })
                }), this._tracker.registerHandler(ClassId.GET_ACHIEVEMENT_MAP_RESPONSE, function(e) {
                    r.socketResponse(e, function() {
                        return e
                    })
                }), this._tracker.registerHandler(ClassId.MISSION_OPTIN_RESPONSE, function(e) {
                    r.socketResponse(e, function() {
                        return e
                    })
                }), this._tracker.registerHandler(ClassId.ACHIEVEMENT_CLAIM_PRIZE_RESPONSE, function(e) {
                    r.socketResponse(e, function() {
                        return e
                    })
                })
            }
            return e.instance = function(e) {
                return this._instance || (this._instance = new this(e))
            }, e
        })(),
        smarticoLibNameWindowKey = "_smartico_lib_loaded_" + C_MODULE_NAME;
    if (window[smarticoLibNameWindowKey]) throw new Error("Smartico lib is already loaded. Please be sure that you are not including script multiple times");
    window[smarticoLibNameWindowKey] = !0;
    var CLASS_IDS_WITH_NEW_PROCESSING_LOGIC = [ClassId.GET_TOURNAMENT_INFO_RESPONSE, ClassId.CHECK_SEGMENT_MATCH_RESPONSE],
        IGNORE_ACTIONS = ["openModalForm", "setForm", "cashierSubmitClicked", "gameClicked", "openChat", "openModalIFrame", "openModalPopupForm"],
        NO_LABEL_KEY_ERROR = "Smartico lib is not initialized, missing label_key",
        BLOCKED_LABEL_KEYS = ["0ea282b9-b57e-4c13-92d5-672cd3ee27c7", "ffff202e-672a-4a94-a014-65b8beaab171", "2361c7bb-433f-4da1-be3a-8dbd56aeda1a", "a88ac5fc-df88-455e-a168-ad30a03eb779", "b4d7e50b-cab0-4c88-9da7-848cc4dc5f5e", "a84bb52d-fc4c-4ec6-84d6-27c44e8fa7bf", "5e4d0318-121a-4ebc-b9ea-dc2f4fb8b66f", "fbeb25d5-73ca-44d3-9c2a-0066a3a21137", "5e7cfe39-958a-4c89-b7fe-745f5355dac6", "2d6214d3-82f6-4ea0-8e17-fc77e9fa3376"],
        Smartico = (() => {
            function a() {}
            return a.startIntegrationWithIframe = function() {
                SmarticoInFrameIntegration.start(this)
            }, a.checkInit = function() {
                var e, t = this;
                return null == a.initLabelApiKey || "" === a.initLabelApiKey.trim() ? (console.error(NO_LABEL_KEY_ERROR), !1) : (a.tracker || (a.tracker = new Tracker(a.initLabelApiKey, a.initParams, TrackerInstanceType.Master, this.initShadowLabel), a.gf = GamificationEngine.instance(a.tracker), (e = this.tracker).on = Tracker.on, e.getLabelSetting = a.tracker.getLabelSetting, a.api = new SmarticoAPI(this.initLabelApiKey, null, function(i, e, r) {
                    return __awaiter(t, void 0, void 0, function() {
                        var n = this;
                        return __generator(this, function(e) {
                            return this.gf_api_handlers.find(function(e) {
                                return e === r
                            }) || (CLASS_IDS_WITH_NEW_PROCESSING_LOGIC.includes(r) ? (this.tracker.registerHandler(i.uuid, function(e) {
                                var t = n.gf_api_handlers_with_uuid_promises.get(i.uuid);
                                t && (t(e), n.gf_api_handlers_with_uuid_promises.set(i.uuid, null))
                            }), this.gf_api_handlers_with_uuid.push(i.uuid)) : (this.tracker.registerHandler(r, function(t) {
                                var e = n.gf_api_promises.get(r);
                                Util.isArrayNotEmpty(e) && (e.forEach(function(e) {
                                    return e(t)
                                }), n.gf_api_promises.set(t.cid, []))
                            }), this.gf_api_handlers.push(r))), i.src = "ws-api", Util.isNotNull(r) ? [2, new Promise(function(e) {
                                var t;
                                CLASS_IDS_WITH_NEW_PROCESSING_LOGIC.includes(r) ? n.gf_api_handlers_with_uuid_promises.get(i.uuid) || n.gf_api_handlers_with_uuid_promises.set(i.uuid, e) : (t = n.gf_api_promises.get(r), Util.isArrayEmpty(t) && n.gf_api_promises.set(r, t = []), t.push(e)), n.tracker.sendRow(i.cid, !0, i)
                            })] : [2, new Promise(function(e) {
                                n.tracker.sendRow(i.cid, !0, i), e(null)
                            })]
                        })
                    })
                }, {
                    tracker: e
                }).getWSCalls()), !0)
            }, a.checkSuccessfullyIdentify = function() {
                return a.checkInit() && a.tracker.isIdenfitied()
            }, a.initShadowLabel = function(e) {
                var t = e.label_api_key,
                    e = __rest(e, ["label_api_key"]);
                a.trackerShadow || (a.trackerShadow = new Tracker(t, __assign(__assign({}, a.initParams), e), TrackerInstanceType.Shadow), this.shadowInterval = setInterval(function() {
                    var e;
                    0 < a.shadowQueue.length && (e = a.shadowQueue[0], a.shadowQueue.splice(0, 1), e(a.trackerShadow))
                }, 10))
            }, a.getUserID = function() {
                return window[{
                    _btg: "_btg_user_id",
                    _smartico: "_smartico_user_id",
                    _smartico2: "_smartico_user_id2"
                }[C_MODULE_NAME]]
            }, a.getUserHash = function() {
                var e = window[{
                    _btg: "_btg_user_hash",
                    _smartico: "_smartico_user_hash",
                    _smartico2: "_smartico_user_hash2"
                }[C_MODULE_NAME]];
                return void 0 === e ? null : e
            }, a.getLanguage = function() {
                return window[{
                    _btg: "_btg_language",
                    _smartico: "_smartico_language",
                    _smartico2: "_smartico_language2"
                }[C_MODULE_NAME]]
            }, a.getVisitorGameWinUUID = function() {
                try {
                    var e = parseUrl(),
                        t = window._smartico_visitor_win_uuid || e._smartico_visitor_win_uuid || LStorage().getItem("_smartico_visitor_win_uuid");
                    return t && LStorage().setItem("_smartico_visitor_win_uuid", t), t
                } catch (e) {}
            }, a.getVisitorID = function() {
                return window[{
                    _btg: "_btg_visitor_id",
                    _smartico: "_smartico_visitor_id",
                    _smartico2: "_smartico_visitor_id2"
                }[C_MODULE_NAME]]
            }, a.onlinetrackerByInterval = function() {
                var e = a.getUserID(),
                    t = a.getUserHash(),
                    n = a.getLanguage(),
                    i = a.getVisitorGameWinUUID();
                e && null == a.onlineTrackerLastUserId && (a.onlineTrackerLastUserId = e, a.online(e, null, t)), e && n && n !== a.onlineTrackerLastLanguage && (a.onlineTrackerLastLanguage = n, a.changeLanguage(n)), i && null != (t = a.tracker) && t.isIdenfitied() && a.convertVisitorGame(i), null != e && "" !== e || !a.onlineTrackerLastUserId || (a.onlineTrackerLastUserId = null, a.onlineTrackerLastLanguage = null, a.logout())
            }, a.init = function(e, t) {
                var n;
                a.initLabelApiKey === e && "Visitor" !== (null == (n = a.tracker) ? void 0 : n.getExtUserId()) || a.clear(), BLOCKED_LABEL_KEYS.includes(null == e ? void 0 : e.substring(0, 36)) || (Tracker.saveLocationBasedDP(), Tracker.saveLocationBasedVisitorID(), a.tracker ? a.tracker.log("Init was alrady called") : (a.initLabelApiKey = e, a.initParams = __assign(__assign({}, TrackerParams), t), "true" === LStorage().getItem("_smartico_debug") && (a.initParams.debug = !0), "null" !== (null == (n = a.initParams) ? void 0 : n.brand_key) && "undefined" !== (null == (n = a.initParams) ? void 0 : n.brand_key) || (a.initParams.brand_key = null), null != t && t.generate_visit && ((n = LStorage().getItem("_smartico_generated_visitor_id")) || (n = "v-" + Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 9999) + 9999), LStorage().setItem("_smartico_generated_visitor_id", n)), window._smartico_user_id = n), Tracker.getSavedLocationBasedVisitorID() && (window._smartico_visitor_id = Tracker.getSavedLocationBasedVisitorID()), !window._smartico_visitor_id && LStorage().getItem("_smartico_generated_visitor_id") && (window._smartico_visitor_id = LStorage().getItem("_smartico_generated_visitor_id")), a.onlineTrackerInterval = setInterval(a.onlinetrackerByInterval, 100), setTimeout(function() {
                    return Tracker.triggerExternalCallBackStatic(EXTERNAL_CALLBACK_KEY.INIT, ERRS.OK)
                }, 100), a.customScripts(e, t)))
            }, a.initVisitorMode = function(e, t) {
                a.initLabelApiKey = e, a.initParams = __assign(__assign({}, TrackerParams), t), this.tracker = new TrackerVisitor(e, t)
            }, a.clear = function(e) {
                a.initParams = void 0, this.gf_api_handlers = [], this.gf_api_promises = new typescriptMap_1, a.api = null, a.onlineTrackerInterval && clearInterval(a.onlineTrackerInterval), a.onlineTrackerLastUserId = null, a.onlineTrackerLastLanguage = null, a.tracker && (a.tracker.clear(e), a.tracker = void 0), a.trackerShadow && (a.trackerShadow.clear(e), a.trackerShadow = void 0, a.shadowInterval) && clearInterval(a.shadowInterval)
            }, a.getPublicProps = function() {
                return a.checkInit() ? this.tracker.getPublicProps() : null
            }, a.sendServerError = function(e) {
                a.checkInit() && a.tracker.sendServerError(e)
            }, a.sendServerDebug = function(e) {
                a.checkInit() && a.tracker.sendServerDebug(e)
            }, a.requestPushPermissions = function() {
                a.checkInit() && (a.trackerShadow || a.tracker).requestPushPermissions()
            }, a.updatePublicTags = function(e, t) {
                if (a.checkInit()) {
                    var n = {
                        add: "+",
                        remove: "-",
                        replace: "",
                        clear: "!"
                    }[e];
                    if (void 0 === n) throw new Error("Smartico: unknown operation '".concat(e, "' in call to updatePublicTags"));
                    a.event(ClientEventTypes.update_profile, ((e = {})[n + "core_public_tags"] = t || null, e))
                }
            }, a.setUTMs = function(e, t) {
                a.checkInit() && a.event(ClientEventTypes.update_profile, {
                    core_utm_source: e,
                    core_utm_campaign: t
                })
            }, a.registerNativePushToken = function(e, t, n) {
                void 0 === t && (t = PushClientPlatform.OTHER), void 0 === n && (n = null), a.checkInit() && a.tracker.registerNativePushToken(e, t, n)
            }, a.identify = function(t, n, i) {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                if (!a.checkInit()) return [2];
                                if (null == t || t.trim && "" === t.trim()) throw new Error("SMARTICO: call to online with empty ext_user_id");
                                return a.shadowQueue.push(function(e) {
                                    return e.identify(t, n, i, a.getVisitorID())
                                }), [4, a.tracker.identify(t, n, i, a.getVisitorID())];
                            case 1:
                                return e.sent(), [2]
                        }
                    })
                })
            }, a.online = function(t, n, i, r) {
                return void 0 === r && (r = {}), __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                if (!a.checkInit()) return [2];
                                if (null == t || t.trim && "" === t.trim()) throw new Error("SMARTICO: call to online with empty ext_user_id");
                                return a.api && a.api.clearCaches(), a.shadowQueue.push(function(e) {
                                    return e.identify(t, i, r, a.getVisitorID())
                                }), [4, a.tracker.identify(t, i, r, a.getVisitorID())];
                            case 1:
                                return e.sent(), n && a.changeLanguage(n), [2]
                        }
                    })
                })
            }, a.login = function(e, t) {
                void 0 === e && (e = null), void 0 === t && (t = {}), a.checkInit() && (a.shadowQueue.push(function(e) {
                    return e.setLoginPayload(t)
                }), a.tracker.setLoginPayload(t), e) && a.changeLanguage(e)
            }, a.logout = function(t) {
                void 0 === t && (t = {}), a.checkInit() && (a.shadowQueue.push(function(e) {
                    return e.logout(t)
                }), a.tracker.logout(t))
            }, a.changeLanguage = function(e) {
                if (a.checkInit()) {
                    if (null == e) throw new Error("SMARTICO: missing language in the call to changeLanguage");
                    2 < (e = 1 < e.split(/[-_]/).length ? e.split("-")[0] : e).length && (e = e.substring(0, 2)), a.tracker.changeLanguage(e), a.trackerShadow && a.trackerShadow.changeLanguage(e), a.api && a.api.clearCaches()
                }
            }, a.event = function(t, n) {
                void 0 === n && (n = {}), !a.checkInit() || t === ClientEventTypes.client_action && n && n.action && IGNORE_ACTIONS.includes(n.action) || (a.shadowQueue.push(function(e) {
                    return e.sendRow(ClassId.EVENT, !0, {
                        eventType: t,
                        payload: __assign({}, n)
                    })
                }), a.tracker.sendRow(ClassId.EVENT, !0, {
                    eventType: t,
                    payload: __assign({}, n)
                }))
            }, a.sendRow = function(t, n) {
                void 0 === n && (n = {}), a.checkInit() && (a.shadowQueue.push(function(e) {
                    return e.sendRow(t, !1, n)
                }), a.tracker.sendRow(t, !1, n))
            }, a.action = function(e) {
                !a.checkInit() || e && IGNORE_ACTIONS.includes(e) || a.tracker.sendRow(ClassId.EVENT, !0, {
                    eventType: ClientEventTypes.client_action,
                    payload: {
                        action: e
                    }
                })
            }, a.setLoginEntry = function(e) {
                a.checkInit() && a.tracker.sendRow(ClassId.EVENT, !0, {
                    eventType: ClientEventTypes.core_set_last_login_entry,
                    payload: {
                        entry: JSON.stringify(e)
                    }
                })
            }, a.setAvatar = function(e) {
                a.checkInit() && (a.tracker.setAvatar(e), a.trackerShadow) && a.trackerShadow.setAvatar(e)
            }, a.setNickname = function(e) {
                a.checkInit() && (a.tracker.setNickname(e), a.trackerShadow) && a.trackerShadow.setNickname(e)
            }, a.setSkin = function(e) {
                a.checkInit() && (a.tracker.setSkin(e), a.trackerShadow) && a.trackerShadow.setSkin(e)
            }, a.dp = function(e) {
                a.checkInit() && a.tracker.executeManualDP(e)
            }, a.miniGame = function(e, t, n) {
                a.checkInit() && a.tracker.miniGame(e, t, n)
            }, a.showWidget = function(e, t) {
                a.checkInit() && a.tracker.showWidget(e, t)
            }, a.sendAnalytics = function(e, t) {
                void 0 === t && (t = 0), a.checkInit() && a.tracker.sendAnalytics(e, "other", t)
            }, a.on = function(e, t, n) {
                Tracker.on(e, t, n)
            }, a.off = function(e, t) {
                Tracker.off(e, t)
            }, a.suspendPopups = function(e) {
                a.checkInit() && a.tracker.suspendPopups(e)
            }, a.suspendInbox = function(e) {
                a.checkInit() && a.tracker.suspendInbox(e)
            }, a.suspendMiniGames = function(e) {
                a.checkInit() && a.tracker.suspendMiniGames(e)
            }, a.parseUrl = function() {
                return parseUrl()
            }, a.parseUrlHash = function() {
                return parseUrlHash()
            }, a.isMobile = function() {
                return WebUtil.isMobile()
            }, a.showVisitorGame = function(e) {
                a.checkInit() && a.tracker.showVisitorGame(e)
            }, a.convertVisitorGame = function(e) {
                a.checkInit() && a.tracker.convertVisitorGame(e)
            }, a.customScripts = function(e, s) {
                var t, n, i, r, a, o, c, l, _, u, d, p, h, E, g, m, f = window,
                    S = !1;
                "a0d5564c-4109-4fc8-bfe1-6b62bc289382" === e && (i = document, t = SCRIPTS_LOCATION + "/__smartico_rtg.js", n = i.getElementsByTagName("head")[0], (i = i.createElement("script")).onload = function() {
                    f.__smartico_rtg.init(true)
                }, i.src = t, n.appendChild(i), S = !0), "bd02fa5c-616f-4f7b-bb94-785816952bd3" === e && (t = document, n = SCRIPTS_LOCATION + "/__smartico_rtg_ext.js", i = t.getElementsByTagName("head")[0], (r = t.createElement("script")).onload = function() {
                    f.__smartico_rtg_ext.init(true)
                }, r.src = n, i.appendChild(r), S = !0), "41189bae-0d7d-4635-8bb3-862a793119d8-3" === e && (r = document, a = SCRIPTS_LOCATION + "/__smartico_rtg_ext.js", o = r.getElementsByTagName("head")[0], (c = r.createElement("script")).onload = function() {
                    f.__smartico_rtg_ext.init(false, {
                        missionsLabel: "Journey",
                        mobileFloating: false,
                        mobileBottom: true,
                        enableHover: true,
                        missionsIcon: "mdi-compass-outline",
                        desktopButtonStyle: "background-color: #00C070 !important;",
                        hoverButtonStyle: "#14C57B"
                    })
                }, c.src = a, o.appendChild(c), S = !0), "b5ff980e-b3ea-491b-a02a-1e02c5451178-3" === e && (a = document, o = SCRIPTS_LOCATION + "/__smartico_rtg_ext.js", c = a.getElementsByTagName("head")[0], (l = a.createElement("script")).onload = function() {
                    f.__smartico_rtg_ext.init(false, {
                        missionsLabel: "My Spinstopia",
                        mobileFloating: false,
                        mobileBottom: true,
                        enableHover: true,
                        missionsIcon: "mdi-compass-outline",
                        desktopButtonStyle: "background-color: #070E43 !important;color: #FFC72E !important;border: 1px solid #FFC72E !important;",
                        hoverButtonStyle: "#ECB82F"
                    })
                }, l.src = o, c.appendChild(l), S = !0), "58bdcc01-af57-4008-8cba-a4005ebcbd60-3" === e && (l = document, _ = SCRIPTS_LOCATION + "/__smartico_rtg_ext.js", u = l.getElementsByTagName("head")[0], (d = l.createElement("script")).onload = function() {
                    f.__smartico_rtg_ext.init(false, {
                        missionsLabel: "World of Fun",
                        mobileFloating: false,
                        mobileBottom: true,
                        missionsIcon: "mdi-rocket-launch-outline",
                        desktopButtonStyle: "background-color: #ffeb00 !important;"
                    })
                }, d.src = _, u.appendChild(d), S = !0), "16c0a9e3-c821-40c5-b3f0-8d64709960ca-4" === e && (_ = document, u = SCRIPTS_LOCATION + "/__smartico_rtg_ext.js", d = _.getElementsByTagName("head")[0], (p = _.createElement("script")).onload = function() {
                    var e = ["ecc47e6e", "aff7e384", "e43f84bc"].indexOf(s.brand_key) === -1,
                        a = "",
                        t;
                    Object.values({
                        casinoMidas: {
                            keys: ["e2f3ca5d", "4fd86165", "8d3f50ce", "eca166ce"],
                            color: "#eac966",
                            specialKey: "ecc47e6e",
                            specialColor: "#FFF"
                        },
                        jackMillion: {
                            keys: ["e43f84bc", "5f500794", "38dd4294", "f2aed545"],
                            color: "#ffc91e",
                            specialKey: "",
                            specialColor: ""
                        },
                        spinSamba: {
                            keys: ["aff7e384"],
                            color: "#f57400",
                            specialKey: "",
                            specialColor: ""
                        }
                    }).forEach(function(e) {
                        var t = e.keys,
                            n = e.color,
                            i = e.specialKey,
                            r = e.specialColor;
                        if (t.includes(s.brand_key)) {
                            a = "background-color: ".concat(n, " !important; color: var(--v-buttonTxt-base) !important;");
                            if (i && s.brand_key === i) a = "background-color: ".concat(r, " !important; color: var(--v-buttonTxt-base) !important;")
                        }
                    }), f.__smartico_rtg_ext.init(e, {
                        missionsLabel: "Missions",
                        mobileFloating: false,
                        mobileBottom: true,
                        desktopButtonStyle: a,
                        enableInboxButton: true
                    })
                }, p.src = u, d.appendChild(p), S = !0), "b67dbb28-8557-48c2-b7a2-14d14e7a4d90" !== e && "b67dbb28-8557-48c2-b7a2-14d14e7a4d90-2" !== e || (p = document, E = SCRIPTS_LOCATION + "/__smartico_rtg_zoro.js", g = p.getElementsByTagName("head")[0], (m = p.createElement("script")).onload = function() {
                    f.__smartico_rtg_zoro.init()
                }, m.src = E, g.appendChild(m), S = !0), "de43b865-d4f7-4725-b1dc-68e0b8271951-3" === e && (h = ["b7c3e2c6", "59a5894d", "48687177", "ce95c5db"].includes(s.brand_key), E = document, g = SCRIPTS_LOCATION + "/__smartico_rtg_ext.js", m = E.getElementsByTagName("head")[0], (e = E.createElement("script")).onload = function() {
                    f.__smartico_rtg_ext.init(h, {
                        mobileFloating: false,
                        mobileBottom: true
                    })
                }, e.src = g, m.appendChild(e), S = !0), S && this.checkInit()
            }, a.vapi = function(r) {
                var t = this;
                return a._vapi && r === a._vapi_last_language || (a._vapi_last_language = r, a._vapi = new SmarticoAPI(this.initLabelApiKey, null, function(i, e) {
                    return __awaiter(t, void 0, void 0, function() {
                        var t, n;
                        return __generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return i.src = "v-api", t = avatarHost(this.initLabelApiKey) + "visitorGame/".concat(this.initLabelApiKey, "/").concat(this.initParams.brand_key, "/").concat(r, "/") + i.cid, Object.keys(i).forEach(function(e) {
                                        ["cid", "ts", "uuid", "api_key", "src", "is_visitor_mode"].includes(e) || (t += "/".concat(e, "/").concat(i[e]))
                                    }), [4, fetch(t, {
                                        method: "POST",
                                        body: JSON.stringify(i),
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    })];
                                case 1:
                                    return [4, e.sent().text()];
                                case 2:
                                    return n = e.sent(), [2, JSON.parse(n)]
                            }
                        })
                    })
                }).getWSCalls()), a._vapi
            }, a.shadowQueue = [], a.gf_api_promises = new typescriptMap_1, a.gf_api_handlers = [], a.gf_api_handlers_with_uuid = [], a.gf_api_handlers_with_uuid_promises = new typescriptMap_1, a.onlineTrackerLastUserId = null, a.onlineTrackerLastLanguage = null, a
        })();
    return Smartico.startIntegrationWithIframe(), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function(e) {
            if (null == this) throw new TypeError("Array.prototype.find called on null or undefined");
            if ("function" != typeof e) throw new TypeError("predicate must be a function");
            for (var t, n = Object(this), i = n.length >>> 0, r = arguments[1], a = 0; a < i; a++)
                if (a in n && (t = n[a], e.call(r, t, a, n))) return t
        }
    }), Smartico
});