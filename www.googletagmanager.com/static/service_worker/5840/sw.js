'use strict';
var aa = {},
    ba = function(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    },
    h = function(a) {
        return ba(a())
    };
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var l = null,
    p = function(a) {
        const b = a.length;
        let c = b * 3 / 4;
        c % 3 ? c = Math.floor(c) : "=.".indexOf(a[b - 1]) != -1 && (c = "=.".indexOf(a[b - 2]) != -1 ? c - 2 : c - 1);
        const d = new Uint8Array(c);
        let e = 0;
        ca(a, function(f) {
            d[e++] = f
        });
        return e !== c ? d.subarray(0, e) : d
    },
    ca = function(a, b) {
        function c(e) {
            for (; d < a.length;) {
                const f = a.charAt(d++),
                    g = l[f];
                if (g != null) return g;
                if (!/^[\s\xa0]*$/.test(f)) throw Error("Unknown base64 encoding at char: " + f);
            }
            return e
        }
        da();
        let d = 0;
        for (;;) {
            const e = c(-1),
                f = c(0),
                g = c(64),
                k = c(64);
            if (k === 64 && e === -1) break;
            b(e <<
                2 | f >> 4);
            g != 64 && (b(f << 4 & 240 | g >> 2), k != 64 && b(g << 6 & 192 | k))
        }
    },
    da = function() {
        if (!l) {
            l = {};
            var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
                b = ["+/=", "+/", "-_=", "-_.", "-_"];
            for (let c = 0; c < 5; c++) {
                const d = a.concat(b[c].split(""));
                for (let e = 0; e < d.length; e++) {
                    const f = d[e];
                    l[f] === void 0 && (l[f] = e)
                }
            }
        }
    };
/*

 Copyright 2020 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var u = class extends Error {
    constructor(a) {
        super(a);
        Object.setPrototypeOf(this, u.prototype)
    }
};
u.prototype.name = "SecurityException";
var v = class extends Error {
    constructor(a) {
        super(a);
        Object.setPrototypeOf(this, v.prototype)
    }
};
v.prototype.name = "InvalidArgumentsException";

function A(...a) {
    let b = 0;
    for (let e = 0; e < arguments.length; e++) b += arguments[e].length;
    const c = new Uint8Array(b);
    let d = 0;
    for (let e = 0; e < arguments.length; e++) c.set(arguments[e], d), d += arguments[e].length;
    return c
}

function C(a) {
    const b = a.replace(/-/g, "+").replace(/_/g, "/");
    return D(globalThis.atob(b))
}

function F(a) {
    let b = "";
    for (let c = 0; c < a.length; c += 1) b += String.fromCharCode(a[c]);
    return globalThis.btoa(b).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
}

function D(a) {
    const b = [];
    let c = 0;
    for (let d = 0; d < a.length; d++) {
        const e = a.charCodeAt(d);
        b[c++] = e
    }
    return new Uint8Array(b)
};
/*

 Copyright 2022 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var ea = function(a, b, c, d) {
        return h(function*() {
            if (c.length < (a.o ? 28 : 16)) throw new u("ciphertext too short");
            if (b.length !== 12) throw new u("IV must be 12 bytes");
            const e = {
                name: "AES-GCM",
                iv: b,
                tagLength: 128
            };
            d && (e.additionalData = d);
            const f = a.o ? new Uint8Array(c.subarray(12)) : c;
            try {
                return new Uint8Array(yield globalThis.crypto.subtle.decrypt(e, a.key, f))
            } catch (g) {
                throw new u(g.toString());
            }
        })
    },
    fa = class {
        constructor({
            key: a,
            o: b
        }) {
            this.key = a;
            this.o = b
        }
        encrypt(a, b, c) {
            const d = this;
            return h(function*() {
                if (a.length !==
                    12) throw new u("IV must be 12 bytes");
                const e = {
                    name: "AES-GCM",
                    iv: a,
                    tagLength: 128
                };
                c && (e.additionalData = c);
                const f = yield globalThis.crypto.subtle.encrypt(e, d.key, b);
                return d.o ? A(a, new Uint8Array(f)) : new Uint8Array(f)
            })
        }
    };

function G({
    key: a,
    o: b
}) {
    return h(function*() {
        if (![16, 32].includes(a.length)) throw new v("unsupported AES key size: ${n}");
        const c = yield globalThis.crypto.subtle.importKey("raw", a, {
            name: "AES-GCM",
            length: a.length
        }, !1, ["encrypt", "decrypt"]);
        return new fa({
            key: c,
            o: b
        })
    })
};

function H(a) {
    switch (a) {
        case 1:
            return "P-256";
        case 2:
            return "P-384";
        case 3:
            return "P-521"
    }
}

function I(a) {
    switch (a) {
        case "P-256":
            return 1;
        case "P-384":
            return 2;
        case "P-521":
            return 3
    }
    throw new v("unknown curve: " + a);
}

function K(a) {
    switch (a) {
        case 1:
            return 32;
        case 2:
            return 48;
        case 3:
            return 66
    }
}

function ha(a, b) {
    return h(function*() {
        const c = a.algorithm.namedCurve;
        if (!c) throw new v("namedCurve must be provided");
        const d = Object.assign({}, {
                "public": b
            }, a.algorithm),
            e = 8 * K(I(c)),
            f = yield globalThis.crypto.subtle.deriveBits(d, a, e);
        return new Uint8Array(f)
    })
}

function ia(a) {
    return h(function*() {
        return yield globalThis.crypto.subtle.generateKey({
            name: "ECDH",
            namedCurve: a
        }, !0, ["deriveKey", "deriveBits"])
    })
}

function ja(a) {
    return h(function*() {
        const b = yield globalThis.crypto.subtle.exportKey("jwk", a);
        if (b.crv === void 0) throw new v("crv must be provided");
        const c = K(I(b.crv));
        if (b.x === void 0) throw new v("x must be provided");
        if (b.y === void 0) throw new v("y must be provided");
        const d = C(b.x);
        if (d.length !== c) throw new v(`x-coordinate byte-length is invalid (got: ${d.length}, want: ${c}).`);
        const e = C(b.y);
        if (e.length !== c) throw new v(`y-coordinate byte-length is invalid (got: ${e.length}, want: ${c}).`);
        return b
    })
}

function ka(a) {
    return h(function*() {
        const b = a.crv;
        if (!b) throw new v("crv must be provided");
        return yield globalThis.crypto.subtle.importKey("jwk", a, {
            name: "ECDH",
            namedCurve: b
        }, !0, [])
    })
};
var la = N(1, 0),
    ma = N(2, 16),
    na = N(2, 18),
    oa = N(2, 1),
    pa = N(2, 3),
    ra = N(2, 1),
    sa = N(2, 2),
    ta = D("KEM"),
    ua = D("HPKE"),
    O = D("HPKE-v1");

function N(a, b) {
    const c = new Uint8Array(a);
    for (let d = 0; d < a; d++) c[d] = b >> 8 * (a - d - 1) & 255;
    return c
}

function va({
    K: a,
    J: b,
    G: c
}) {
    return A(ua, a, b, c)
}

function P({
    m: a,
    l: b,
    j: c
}) {
    return A(O, c, D(a), b)
}

function wa({
    u: a,
    info: b,
    j: c,
    length: d
}) {
    return A(N(2, d), O, c, D(a), b)
}

function xa(a, b) {
    return h(function*() {
        var c; {
            const d = K(I(a));
            if (b.length !== 1 + 2 * d || b[0] !== 4) throw new u("invalid point");
            c = {
                kty: "EC",
                crv: a,
                x: F(new Uint8Array(b.subarray(1, 1 + d))),
                y: F(new Uint8Array(b.subarray(1 + d, b.length))),
                ext: !0
            }
        }
        return yield ka(c)
    })
}

function ya(a) {
    return h(function*() {
        const b = a.algorithm,
            c = yield ja(a);
        if (!c.crv) throw new u("Curve has to be defined.");
        var d; {
            const e = K(I(b.namedCurve)),
                f = c.x,
                g = c.y;
            if (f === void 0) throw new v("x must be provided");
            if (g === void 0) throw new v("y must be provided");
            const k = new Uint8Array(1 + 2 * e),
                n = C(g),
                q = C(f);
            k.set(n, 1 + 2 * e - n.length);
            k.set(q, 1 + e - q.length);
            k[0] = 4;
            d = k
        }
        return d
    })
};
var za = class {
    constructor(a) {
        this.B = a
    }
    seal({
        key: a,
        nonce: b,
        M: c,
        C: d
    }) {
        const e = this;
        return h(function*() {
            if (a.length !== e.B) throw new u("Unexpected key length: " + a.length.toString());
            return yield(yield G({
                key: a,
                o: !1
            })).encrypt(b, c, d)
        })
    }
    open({
        key: a,
        nonce: b,
        H: c,
        C: d
    }) {
        const e = this;
        return h(function*() {
            if (a.length !== e.B) throw new u("Unexpected key length: " + a.length.toString());
            return ea(yield G({
                key: a,
                o: !1
            }), b, c, d)
        })
    }
};
var Aa = class {};

function Q(a) {
    if (a == null || !(a instanceof Uint8Array)) throw new v("input must be a non null Uint8Array");
};
var Ba = function(a, b) {
        return h(function*() {
            Q(b);
            const c = yield globalThis.crypto.subtle.sign({
                name: "HMAC",
                hash: {
                    name: a.hash
                }
            }, a.key, b);
            return new Uint8Array(c.slice(0, a.g))
        })
    },
    Ca = class extends Aa {
        constructor(a, b, c) {
            super();
            this.hash = a;
            this.key = b;
            this.g = c
        }
    };

function Da(a, b, c) {
    return h(function*() {
        Q(b);
        if (!Number.isInteger(c)) throw new v("invalid tag size, must be an integer");
        if (c < 10) throw new v("tag too short, must be at least " + (10).toString() + " bytes");
        switch (a) {
            case "SHA-1":
                if (c > 20) throw new v("tag too long, must not be larger than 20 bytes");
                break;
            case "SHA-256":
                if (c > 32) throw new v("tag too long, must not be larger than 32 bytes");
                break;
            case "SHA-384":
                if (c > 48) throw new v("tag too long, must not be larger than 48 bytes");
                break;
            case "SHA-512":
                if (c >
                    64) throw new v("tag too long, must not be larger than 64 bytes");
                break;
            default:
                throw new v(a + " is not supported");
        }
        const d = yield globalThis.crypto.subtle.importKey("raw", b, {
            name: "HMAC",
            hash: {
                name: a
            },
            length: b.length * 8
        }, !1, ["sign", "verify"]);
        return new Ca(a, d, c)
    })
};
var Ea = function(a, b, c) {
        return h(function*() {
            Q(b);
            const d = U(a);
            let e;
            ((e = c) == null ? 0 : e.length) || (c = new Uint8Array(d));
            Q(c);
            return yield Ba(yield Da(a.v, c, d), b)
        })
    },
    V = function(a, {
        l: b,
        m: c,
        j: d,
        salt: e
    }) {
        return h(function*() {
            return yield Ea(a, P({
                m: c,
                l: b,
                j: d
            }), e)
        })
    },
    Fa = function(a, b, c, d) {
        return h(function*() {
            if (!Number.isInteger(d)) throw new u("length must be an integer");
            if (d <= 0) throw new u("length must be positive");
            const e = U(a);
            if (d > 255 * e) throw new u("length too large");
            Q(c);
            const f = yield Da(a.v, b, e);
            let g =
                1,
                k = 0,
                n = new Uint8Array(0);
            const q = new Uint8Array(d);
            for (;;) {
                const r = new Uint8Array(n.length + c.length + 1);
                r.set(n, 0);
                r.set(c, n.length);
                r[r.length - 1] = g;
                n = yield Ba(f, r);
                if (k + n.length < d) q.set(n, k), k += n.length, g++;
                else {
                    q.set(n.subarray(0, d - k), k);
                    break
                }
            }
            return q
        })
    },
    Ga = function(a, {
        F: b,
        info: c,
        u: d,
        j: e,
        length: f
    }) {
        return h(function*() {
            return yield Fa(a, b, wa({
                u: d,
                info: c,
                j: e,
                length: f
            }), f)
        })
    },
    Ha = function(a, {
        l: b,
        m: c,
        info: d,
        u: e,
        j: f,
        length: g,
        salt: k
    }) {
        return h(function*() {
            const n = yield Ea(a, P({
                m: c,
                l: b,
                j: f
            }), k);
            return yield Fa(a,
                n, wa({
                    u: e,
                    info: d,
                    j: f,
                    length: g
                }), g)
        })
    },
    U = function(a) {
        switch (a.v) {
            case "SHA-256":
                return 32;
            case "SHA-512":
                return 64
        }
    },
    W = class {
        constructor(a) {
            this.v = a
        }
    };
var Ia = function(a) {
        var b = a.g;
        const c = new Uint8Array(12);
        for (let f = 0; f < 12; f++) c[f] = Number(b >> BigInt(8 * (12 - f - 1))) & 255;
        var d = a.h;
        if (d.length !== c.length) throw new v("Both byte arrays should be of the same length");
        const e = new Uint8Array(d.length);
        for (let f = 0; f < e.length; f++) e[f] = d[f] ^ c[f];
        if (a.g >= a.i) throw new u("message limit reached");
        a.g += BigInt(1);
        return e
    },
    Ja = class {
        constructor(a, b, c, d) {
            this.D = a;
            this.key = b;
            this.h = c;
            this.aead = d;
            this.g = BigInt(0);
            this.i = (BigInt(1) << BigInt(96)) - BigInt(1)
        }
        seal(a, b) {
            const c =
                this;
            return h(function*() {
                const d = Ia(c);
                return yield c.aead.seal({
                    key: c.key,
                    nonce: d,
                    M: a,
                    C: b
                })
            })
        }
        open(a, b) {
            const c = this;
            return h(function*() {
                const d = Ia(c);
                return c.aead.open({
                    key: c.key,
                    nonce: d,
                    H: a,
                    C: b
                })
            })
        }
    };

function Ka(a, b, c, d, e, f) {
    return h(function*() {
        var g;
        a: {
            switch (e.B) {
                case 16:
                    g = ra;
                    break a;
                case 32:
                    g = sa;
                    break a
            }
            g = void 0
        }
        var k;
        a: {
            switch (d.v) {
                case "SHA-256":
                    k = oa;
                    break a;
                case "SHA-512":
                    k = pa;
                    break a
            }
            k = void 0
        }
        const n = va({
                K: La(c),
                J: k,
                G: g
            }),
            q = V(d, {
                l: new Uint8Array(0),
                m: "psk_id_hash",
                j: n
            }),
            r = yield V(d, {
                l: f,
                m: "info_hash",
                j: n
            }), E = yield q, B = A(la, E, r), J = yield V(d, {
                l: new Uint8Array(0),
                m: "secret",
                j: n,
                salt: b
            }), z = Ga(d, {
                F: J,
                info: B,
                u: "key",
                j: n,
                length: e.B
            }), m = yield Ga(d, {
                    F: J,
                    info: B,
                    u: "base_nonce",
                    j: n,
                    length: 12
                }), t =
                yield z;
        return new Ja(a, t, m, e)
    })
}

function Ma(a, b, c, d, e) {
    return h(function*() {
        const f = yield Na(b, a);
        return yield Ka(f.D, f.N, b, c, d, e)
    })
};
var Oa = function(a) {
        return h(function*() {
            return yield ya(a.publicKey)
        })
    },
    Pa = class {
        constructor(a, b) {
            this.privateKey = a;
            this.publicKey = b
        }
    };

function Qa(a) {
    return h(function*() {
        Ra(a.privateKey, "private");
        Ra(a.publicKey, "public");
        return new Pa(a.privateKey, a.publicKey)
    })
}

function Ra(a, b) {
    if (b !== a.type) throw new v(`keyPair ${b} key was of type ${a.type}`);
    const c = a.algorithm;
    if ("ECDH" !== c.name) throw new v(`keyPair ${b} key should be ECDH but found ${c.name}`);
};
var Ta = function(a) {
        switch (a) {
            case 1:
                return new Sa(new W("SHA-256"), 1);
            case 3:
                return new Sa(new W("SHA-512"), 3)
        }
    },
    La = function(a) {
        switch (a.g) {
            case 1:
                return ma;
            case 3:
                return na
        }
    },
    Na = function(a, b) {
        return h(function*() {
            const c = yield ia(H(a.g));
            return yield a.h(b, yield Qa(c))
        })
    },
    Ua = function(a, b, c, d) {
        return h(function*() {
            const e = A(c, d),
                f = A(ta, La(a));
            return yield Ha(a.i, {
                l: b,
                m: "eae_prk",
                info: e,
                u: "shared_secret",
                j: f,
                length: U(a.i)
            })
        })
    },
    Sa = class {
        constructor(a, b) {
            this.i = a;
            this.g = b;
            this.TEST_ONLY = this.h
        }
        h(a, b) {
            const c =
                this;
            return h(function*() {
                const d = yield xa(H(c.g), a), e = ha(b.privateKey, d), f = yield Oa(b), g = yield e;
                return {
                    N: yield Ua(c, g, f, a), D: f
                }
            })
        }
    };
/*

 Copyright 2024 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
function Va(a, b) {
    var c;
    c || (c = new Uint8Array(0));
    let d, e, f;
    switch (a) {
        case 1:
            d = Ta(1);
            e = new W("SHA-256");
            f = new za(16);
            break;
        case 2:
            d = Ta(3);
            e = new W("SHA-512");
            f = new za(32);
            break;
        default:
            throw new u(`Unknown HPKE parameters: ${a}`);
    }
    let g = Ma(b, d, e, f, c);
    return k => h(function*() {
        if (!g) throw new u("Context has already been used");
        const n = g;
        g = null;
        const q = yield n, r = yield q.seal(k, new Uint8Array(0));
        return A(q.D, r)
    })
};
var Wa = function(a, b) {
        return h(function*() {
            if (a.status) return X(a.status);
            try {
                const e = p(a.i(b)),
                    f = yield a.context(e);
                var c;
                if (f.length <= 8192) c = String.fromCharCode.apply(null, f);
                else {
                    var d = "";
                    for (let k = 0; k < f.length; k += 8192) d += String.fromCharCode.apply(null, Array.prototype.slice.call(f, k, k + 8192));
                    c = d
                }
                let g = a.i(c);
                g = g.replace(/\//g, "_");
                g = g.replace(/\+/g, "-");
                return X(0, g)
            } catch (e) {
                return X(6)
            }
        })
    },
    Ya = class {
        constructor(a, b) {
            this.g = 0;
            this.context = () => h(function*() {
                return new Uint8Array(0)
            });
            this.i = e => b(e);
            if (a) {
                this.L = a.id;
                var c = a.hpkePublicKey.params.kdf,
                    d = a.hpkePublicKey.params.aead;
                if (a.hpkePublicKey.params.kem === "DHKEM_P256_HKDF_SHA256" && c === "HKDF_SHA256" && d === "AES_128_GCM") {
                    this.h = 1;
                    this.A = a;
                    try {
                        let e;
                        const f = p((e = this.A) == null ? void 0 : e.hpkePublicKey.publicKey);
                        f && this.h ? this.context = Va(this.h, f) : this.status = 11
                    } catch (e) {
                        this.status = 6
                    }
                } else this.status = 7
            } else this.status = 8
        }
        setTimeout(a) {
            this.g = a
        }
        encrypt(a) {
            const b = Wa(this, a);
            return this.g ? Promise.race([b, Xa(this.g).then(() => X(14))]) : b
        }
        getEncryptionKeyId() {
            return this.L
        }
    };

function X(a, b) {
    return a === 0 ? {
        cipherText: b,
        status: a
    } : {
        status: a
    }
}

function Xa(a) {
    return new Promise(b => void setTimeout(b, a))
};

function Za(a) {
    switch (a) {
        case 0:
            break;
        case 9:
            return "e4";
        case 6:
            return "e5";
        case 14:
            return "e6";
        default:
            return "e7"
    }
};
const $a = /^[0-9A-Fa-f]{64}$/;

function ab(a) {
    try {
        return (new TextEncoder).encode(a)
    } catch (b) {
        const c = [];
        for (let d = 0; d < a.length; d++) {
            let e = a.charCodeAt(d);
            e < 128 ? c.push(e) : e < 2048 ? c.push(192 | e >> 6, 128 | e & 63) : e < 55296 || e >= 57344 ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
        }
        return new Uint8Array(c)
    }
}

function bb(a, b) {
    if (a === "" || a === "e0") return Promise.resolve(a);
    let c;
    if ((c = b.crypto) == null ? 0 : c.subtle) {
        if ($a.test(a)) return Promise.resolve(a);
        try {
            const d = ab(a);
            return b.crypto.subtle.digest("SHA-256", d).then(e => cb(e, b)).catch(() => "e2")
        } catch (d) {
            return Promise.resolve("e2")
        }
    } else return Promise.resolve("e1")
}

function cb(a, b) {
    const c = Array.from(new Uint8Array(a)).map(d => String.fromCharCode(d)).join("");
    return b.btoa(c).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
};
/*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
var db = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    eb = function(a) {
        var b;
        if (!(b = !a)) {
            var c;
            if (a == null) c = String(a);
            else {
                var d = db.exec(Object.prototype.toString.call(Object(a)));
                c = d ? d[1].toLowerCase() : "object"
            }
            b = c != "object"
        }
        if (b || a.nodeType || a == a.window) return !1;
        try {
            if (a.constructor && !Object.prototype.hasOwnProperty.call(Object(a), "constructor") && !Object.prototype.hasOwnProperty.call(Object(a.constructor.prototype), "isPrototypeOf")) return !1
        } catch (f) {
            return !1
        }
        for (var e in a);
        return e ===
            void 0 || Object.prototype.hasOwnProperty.call(Object(a), e)
    };
var fb = function(a, b) {
        a.h = b;
        return a
    },
    gb = function(a, b) {
        b && (Y(b.send_pixel, b.options, a.i), Y(b.create_iframe, b.options, a.A), Y(b.fetch, b.options, a.h))
    },
    hb = function(a, b) {
        b = a.g + b;
        let c = b.indexOf("\n\n");
        for (; c !== -1;) {
            var d = a,
                e;
            a: {
                const [f, g] = b.substring(0, c).split("\n");
                if (f.indexOf("event: message") === 0 && g.indexOf("data: ") === 0) try {
                    e = JSON.parse(g.substring(g.indexOf(":") + 1));
                    break a
                } catch (k) {}
                e = void 0
            }
            gb(d, e);
            b = b.substring(c + 2);
            c = b.indexOf("\n\n")
        }
        a.g = b
    },
    ib = function(a, b) {
        return () => {
            b.fallback_url && b.fallback_url_method &&
                gb(a, {
                    [b.fallback_url_method]: [b.fallback_url],
                    options: {}
                })
        }
    },
    jb = class {
        constructor(a) {
            this.i = a;
            this.g = ""
        }
    };

function Y(a, b, c) {
    if (a && c) {
        var d = a || [];
        if (Array.isArray(d)) {
            var e = eb(b) ? b : {};
            for (const f of d) c(f, e)
        }
    }
};
var kb = {
    O: 0,
    P: 1,
    0: "GET",
    1: "POST"
};
var mb = function(a, b, c) {
        return h(function*() {
            var d;
            a: {
                try {
                    const g = JSON.parse(c.encryptionKeyString || "").keys,
                        k = g[Math.floor(Math.random() * g.length)];
                    d = k && k.hpkePublicKey && k.hpkePublicKey.params && k.hpkePublicKey.params.kem && k.hpkePublicKey.params.kdf && k.hpkePublicKey.params.aead && k.hpkePublicKey.version !== void 0 && k.id && k.hpkePublicKey.publicKey ? k : void 0;
                    break a
                } catch (g) {}
                d = void 0
            }
            const e = d,
                f = new Ya(e, a.g.btoa);
            return lb(a, a.g.performance.now(), (e == null ? void 0 : e.id) || "undefined", f.encrypt(b))
        })
    },
    Z = function(a,
        b, c) {
        return h(function*() {
            if (!b.url) return {
                failureType: 9,
                command: 0,
                data: "url required."
            };
            const d = yield nb(a, b, c);
            if ("failureType" in d) return d;
            yield ob(a, d, b);
            return d
        })
    },
    pb = function(a, b, c, d) {
        h(function*() {
            let e;
            const f = b.commandType,
                g = b.params;
            switch (f) {
                case 0:
                    e = yield Z(a, g);
                    break;
                default:
                    e = {
                        failureType: 8,
                        command: f,
                        data: `Command with type ${f} unknown.`
                    }
            }
            "failureType" in e ? d(e) : g.suppressSuccessCallback || c(e)
        })
    },
    nb = function(a, b, c) {
        return h(function*() {
            function d(m) {
                return h(function*() {
                    const [t, w] =
                    m.split("|");
                    let [R, L] = t.split("."), x = L, y = n[R];
                    y || (y = t, x = "");
                    const T = M => h(function*() {
                        try {
                            return yield J(w)(M)
                        } catch (S) {
                            throw new qb(S.message);
                        }
                    });
                    if (!x) {
                        if (typeof y === "string") return yield T(y);
                        const M = y,
                            S = Object.keys(M).map(qa => h(function*() {
                                const rb = yield T(M[qa]);
                                return `${qa}=${rb}`
                            }));
                        return (yield Promise.all(S)).join("&")
                    }
                    return typeof y === "object" && y[x] ? yield T(y[x]): m
                })
            }

            function e(m) {
                return h(function*() {
                    let t, w = "";
                    for (; m.match(B) && w !== m;) {
                        w = m;
                        t = m.matchAll(B);
                        const R = [...t].map(x => d(x[1])),
                            L = yield Promise.all(R);
                        L.length !== 0 && (m = m.replace(B, x => L.shift() || x))
                    }
                    return m
                })
            }
            let {
                url: f,
                body: g
            } = b;
            const {
                attributionReporting: k,
                templates: n,
                processResponse: q,
                method: r = 0,
                referer: E
            } = b, B = RegExp("\\${([^${}]*?)}", "g"), J = m => {
                if (m == null) return w => h(function*() {
                    return w
                });
                const t = a.h[m];
                if (t == null) throw Error(`Unknown filter: ${m}`);
                return w => h(function*() {
                    return yield t(w, b)
                })
            };
            try {
                f = yield e(f), g = g ? yield e(g): void 0
            } catch (m) {
                return c == null || c(), {
                    failureType: 9,
                    command: 0,
                    data: `Failed to inject template values: ${m}`
                }
            }
            const z = {
                method: kb[r],
                credentials: "include",
                body: r === 1 ? g : void 0,
                keepalive: !0,
                redirect: "follow"
            };
            if (E) try {
                z.headers = {
                    "X-Effective-Origin": (new URL(E)).origin,
                    "X-Effective-Referer": E
                }
            } catch (m) {}
            q || (z.mode = "no-cors");
            k && (z.attributionReporting = {
                eventSourceEligible: !1,
                triggerEligible: !0
            });
            try {
                const m = yield a.g.fetch(f, z);
                return z.mode === "no-cors" || m.ok ? {
                    data: q ? yield m.text(): f
                } : (c == null || c(), {
                    failureType: 9,
                    command: 0,
                    data: "Fetch failed"
                })
            } catch (m) {
                return c == null || c(), {
                    failureType: 9,
                    command: 0,
                    data: `Fetch failed: ${m}`
                }
            }
        })
    },
    ob = function(a, b, c) {
        return h(function*() {
            if (c.processResponse) {
                var d = [],
                    e;
                e = fb(new jb((f, g) => {
                    d.push(Z(a, {
                        url: f,
                        method: 0,
                        templates: c.templates,
                        processResponse: !1,
                        attributionReporting: g.attribution_reporting
                    }, ib(e, g)))
                }), (f, g) => {
                    d.push(Z(a, {
                        url: f,
                        method: 0,
                        templates: c.templates,
                        processResponse: g.process_response || !1,
                        attributionReporting: g.attribution_reporting
                    }, ib(e, g)))
                });
                hb(e, b.data);
                return Promise.all(d)
            }
        })
    },
    lb = function(a, b, c, d) {
        return d.then(e => {
            const f = a.g.performance.now(),
                g = [`emkid.${c}~`, `ev.${encodeURIComponent(e.cipherText||
"")}`, `&_es=${e.status}`];
            b && f && g.push(`&_est=${Math.round(f)-Math.round(b)}`);
            return g.join("")
        }, () => [`ec.${Za(15)}`, "&_es=15"].join("")).catch(() => [`ec.${Za(16)}`, "&_es=16"].join(""))
    },
    sb = class {
        constructor(a) {
            this.g = a;
            this.h = {
                sha256: b => {
                    const c = this;
                    return h(function*() {
                        return yield bb(b, c.g)
                    })
                },
                encode: b => h(function*() {
                    return encodeURIComponent(b)
                }),
                encrypt: (b, c) => {
                    const d = this;
                    return h(function*() {
                        return yield mb(d, b, c)
                    })
                }
            }
        }
    };
class qb extends Error {
    constructor(a) {
        super(a)
    }
};
var tb = function(a, b, c) {
    a.g[b] == null && (a.g[b] = 0, a.h[b] = c, a.i++);
    a.g[b]++;
    return {
        targetId: a.id,
        clientCount: a.i,
        totalLifeMs: Math.round(c - a.A),
        heartbeatCount: a.g[b],
        clientLifeMs: Math.round(c - a.h[b])
    }
};
class ub {
    constructor(a) {
        this.A = a;
        this.g = {};
        this.h = {};
        this.i = 0;
        this.id = String(Math.floor(Number.MAX_SAFE_INTEGER * Math.random()))
    }
}

function vb(a) {
    return a.performance && a.performance.now() || Date.now()
}
var wb = function(a, b) {
    class c {
        constructor(d, e) {
            this.h = d;
            this.g = e;
            this.i = new ub(vb(e))
        }
        I(d, e) {
            const f = d.clientId;
            if (d.type === 0) d.stats = tb(this.i, f, vb(this.g)), e(d);
            else if (d.type === 1) try {
                this.h(d.command, g => {
                    d.result = g;
                    e(d)
                }, g => {
                    d.failure = g;
                    e(d)
                })
            } catch (g) {
                d.failure = {
                    failureType: 11,
                    data: g.toString()
                }, e(d)
            }
        }
    }
    return new c(a, b)
};
(new class {
    constructor(a) {
        this.g = a;
        const b = new sb(a);
        this.h = wb((c, d, e) => {
            pb(b, c, d, e)
        }, a)
    }
    init() {
        this.g.addEventListener("install", () => {
            this.g.skipWaiting()
        });
        this.g.addEventListener("activate", a => {
            a.waitUntil(this.g.clients.claim())
        });
        this.g.addEventListener("message", a => {
            const b = a.source;
            if (b) {
                var c = a.data,
                    d = new Promise(e => {
                        this.h.I(c, f => {
                            b.postMessage(f);
                            e(void 0)
                        })
                    });
                a.waitUntil(d)
            }
        })
    }
}(self)).init();