(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
	new MutationObserver((s) => {
		for (const i of s)
			if (i.type === "childList")
				for (const r of i.addedNodes)
					r.tagName === "LINK" && r.rel === "modulepreload" && o(r);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(s) {
		const i = {};
		return (
			s.integrity && (i.integrity = s.integrity),
			s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
			s.crossOrigin === "use-credentials"
				? (i.credentials = "include")
				: s.crossOrigin === "anonymous"
				? (i.credentials = "omit")
				: (i.credentials = "same-origin"),
			i
		);
	}
	function o(s) {
		if (s.ep) return;
		s.ep = !0;
		const i = n(s);
		fetch(s.href, i);
	}
})();
function Ms(e) {
	return {
		all: (e = e || new Map()),
		on: function (t, n) {
			var o = e.get(t);
			o ? o.push(n) : e.set(t, [n]);
		},
		off: function (t, n) {
			var o = e.get(t);
			o && (n ? o.splice(o.indexOf(n) >>> 0, 1) : e.set(t, []));
		},
		emit: function (t, n) {
			var o = e.get(t);
			o &&
				o.slice().map(function (s) {
					s(n);
				}),
				(o = e.get("*")) &&
					o.slice().map(function (s) {
						s(t, n);
					});
		},
	};
}
/**
 * @vue/shared v3.4.25
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Pn(e, t) {
	const n = new Set(e.split(","));
	return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const X = {},
	dt = [],
	je = () => {},
	Ls = () => !1,
	Wt = (e) =>
		e.charCodeAt(0) === 111 &&
		e.charCodeAt(1) === 110 &&
		(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
	jn = (e) => e.startsWith("onUpdate:"),
	le = Object.assign,
	In = (e, t) => {
		const n = e.indexOf(t);
		n > -1 && e.splice(n, 1);
	},
	Rs = Object.prototype.hasOwnProperty,
	U = (e, t) => Rs.call(e, t),
	k = Array.isArray,
	pt = (e) => Jt(e) === "[object Map]",
	Io = (e) => Jt(e) === "[object Set]",
	$ = (e) => typeof e == "function",
	ie = (e) => typeof e == "string",
	ct = (e) => typeof e == "symbol",
	Z = (e) => e !== null && typeof e == "object",
	Ao = (e) => (Z(e) || $(e)) && $(e.then) && $(e.catch),
	Mo = Object.prototype.toString,
	Jt = (e) => Mo.call(e),
	ks = (e) => Jt(e).slice(8, -1),
	Lo = (e) => Jt(e) === "[object Object]",
	An = (e) =>
		ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
	yt = Pn(
		",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
	),
	Gt = (e) => {
		const t = Object.create(null);
		return (n) => t[n] || (t[n] = e(n));
	},
	$s = /-(\w)/g,
	Ue = Gt((e) => e.replace($s, (t, n) => (n ? n.toUpperCase() : ""))),
	Ns = /\B([A-Z])/g,
	mt = Gt((e) => e.replace(Ns, "-$1").toLowerCase()),
	Yt = Gt((e) => e.charAt(0).toUpperCase() + e.slice(1)),
	rn = Gt((e) => (e ? `on${Yt(e)}` : "")),
	lt = (e, t) => !Object.is(e, t),
	ln = (e, t) => {
		for (let n = 0; n < e.length; n++) e[n](t);
	},
	Ro = (e, t, n) => {
		Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
	},
	Fs = (e) => {
		const t = parseFloat(e);
		return isNaN(t) ? e : t;
	};
let Xn;
const ko = () =>
	Xn ||
	(Xn =
		typeof globalThis < "u"
			? globalThis
			: typeof self < "u"
			? self
			: typeof window < "u"
			? window
			: typeof global < "u"
			? global
			: {});
function Xt(e) {
	if (k(e)) {
		const t = {};
		for (let n = 0; n < e.length; n++) {
			const o = e[n],
				s = ie(o) ? Vs(o) : Xt(o);
			if (s) for (const i in s) t[i] = s[i];
		}
		return t;
	} else if (ie(e) || Z(e)) return e;
}
const Hs = /;(?![^(]*\))/g,
	Ds = /:([^]+)/,
	Us = /\/\*[^]*?\*\//g;
function Vs(e) {
	const t = {};
	return (
		e
			.replace(Us, "")
			.split(Hs)
			.forEach((n) => {
				if (n) {
					const o = n.split(Ds);
					o.length > 1 && (t[o[0].trim()] = o[1].trim());
				}
			}),
		t
	);
}
function Mn(e) {
	let t = "";
	if (ie(e)) t = e;
	else if (k(e))
		for (let n = 0; n < e.length; n++) {
			const o = Mn(e[n]);
			o && (t += o + " ");
		}
	else if (Z(e)) for (const n in e) e[n] && (t += n + " ");
	return t.trim();
}
const qs =
		"itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
	zs = Pn(qs);
function $o(e) {
	return !!e || e === "";
}
const Pe = (e) =>
		ie(e)
			? e
			: e == null
			? ""
			: k(e) || (Z(e) && (e.toString === Mo || !$(e.toString)))
			? JSON.stringify(e, No, 2)
			: String(e),
	No = (e, t) =>
		t && t.__v_isRef
			? No(e, t.value)
			: pt(t)
			? {
					[`Map(${t.size})`]: [...t.entries()].reduce(
						(n, [o, s], i) => ((n[cn(o, i) + " =>"] = s), n),
						{}
					),
			  }
			: Io(t)
			? { [`Set(${t.size})`]: [...t.values()].map((n) => cn(n)) }
			: ct(t)
			? cn(t)
			: Z(t) && !k(t) && !Lo(t)
			? String(t)
			: t,
	cn = (e, t = "") => {
		var n;
		return ct(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
	};
/**
 * @vue/reactivity v3.4.25
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Me;
class Bs {
	constructor(t = !1) {
		(this.detached = t),
			(this._active = !0),
			(this.effects = []),
			(this.cleanups = []),
			(this.parent = Me),
			!t && Me && (this.index = (Me.scopes || (Me.scopes = [])).push(this) - 1);
	}
	get active() {
		return this._active;
	}
	run(t) {
		if (this._active) {
			const n = Me;
			try {
				return (Me = this), t();
			} finally {
				Me = n;
			}
		}
	}
	on() {
		Me = this;
	}
	off() {
		Me = this.parent;
	}
	stop(t) {
		if (this._active) {
			let n, o;
			for (n = 0, o = this.effects.length; n < o; n++) this.effects[n].stop();
			for (n = 0, o = this.cleanups.length; n < o; n++) this.cleanups[n]();
			if (this.scopes)
				for (n = 0, o = this.scopes.length; n < o; n++) this.scopes[n].stop(!0);
			if (!this.detached && this.parent && !t) {
				const s = this.parent.scopes.pop();
				s &&
					s !== this &&
					((this.parent.scopes[this.index] = s), (s.index = this.index));
			}
			(this.parent = void 0), (this._active = !1);
		}
	}
}
function Ks(e, t = Me) {
	t && t.active && t.effects.push(e);
}
function Ws() {
	return Me;
}
let it;
class Ln {
	constructor(t, n, o, s) {
		(this.fn = t),
			(this.trigger = n),
			(this.scheduler = o),
			(this.active = !0),
			(this.deps = []),
			(this._dirtyLevel = 4),
			(this._trackId = 0),
			(this._runnings = 0),
			(this._shouldSchedule = !1),
			(this._depsLength = 0),
			Ks(this, s);
	}
	get dirty() {
		if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
			(this._dirtyLevel = 1), Ze();
			for (let t = 0; t < this._depsLength; t++) {
				const n = this.deps[t];
				if (n.computed && (Js(n.computed), this._dirtyLevel >= 4)) break;
			}
			this._dirtyLevel === 1 && (this._dirtyLevel = 0), et();
		}
		return this._dirtyLevel >= 4;
	}
	set dirty(t) {
		this._dirtyLevel = t ? 4 : 0;
	}
	run() {
		if (((this._dirtyLevel = 0), !this.active)) return this.fn();
		let t = Xe,
			n = it;
		try {
			return (Xe = !0), (it = this), this._runnings++, Qn(this), this.fn();
		} finally {
			Zn(this), this._runnings--, (it = n), (Xe = t);
		}
	}
	stop() {
		var t;
		this.active &&
			(Qn(this),
			Zn(this),
			(t = this.onStop) == null || t.call(this),
			(this.active = !1));
	}
}
function Js(e) {
	return e.value;
}
function Qn(e) {
	e._trackId++, (e._depsLength = 0);
}
function Zn(e) {
	if (e.deps.length > e._depsLength) {
		for (let t = e._depsLength; t < e.deps.length; t++) Fo(e.deps[t], e);
		e.deps.length = e._depsLength;
	}
}
function Fo(e, t) {
	const n = e.get(t);
	n !== void 0 &&
		t._trackId !== n &&
		(e.delete(t), e.size === 0 && e.cleanup());
}
let Xe = !0,
	mn = 0;
const Ho = [];
function Ze() {
	Ho.push(Xe), (Xe = !1);
}
function et() {
	const e = Ho.pop();
	Xe = e === void 0 ? !0 : e;
}
function Rn() {
	mn++;
}
function kn() {
	for (mn--; !mn && _n.length; ) _n.shift()();
}
function Do(e, t, n) {
	if (t.get(e) !== e._trackId) {
		t.set(e, e._trackId);
		const o = e.deps[e._depsLength];
		o !== t ? (o && Fo(o, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
	}
}
const _n = [];
function Uo(e, t, n) {
	Rn();
	for (const o of e.keys()) {
		let s;
		o._dirtyLevel < t &&
			(s ?? (s = e.get(o) === o._trackId)) &&
			(o._shouldSchedule || (o._shouldSchedule = o._dirtyLevel === 0),
			(o._dirtyLevel = t)),
			o._shouldSchedule &&
				(s ?? (s = e.get(o) === o._trackId)) &&
				(o.trigger(),
				(!o._runnings || o.allowRecurse) &&
					o._dirtyLevel !== 2 &&
					((o._shouldSchedule = !1), o.scheduler && _n.push(o.scheduler)));
	}
	kn();
}
const Vo = (e, t) => {
		const n = new Map();
		return (n.cleanup = e), (n.computed = t), n;
	},
	bn = new WeakMap(),
	rt = Symbol(""),
	vn = Symbol("");
function we(e, t, n) {
	if (Xe && it) {
		let o = bn.get(e);
		o || bn.set(e, (o = new Map()));
		let s = o.get(n);
		s || o.set(n, (s = Vo(() => o.delete(n)))), Do(it, s);
	}
}
function qe(e, t, n, o, s, i) {
	const r = bn.get(e);
	if (!r) return;
	let c = [];
	if (t === "clear") c = [...r.values()];
	else if (n === "length" && k(e)) {
		const u = Number(o);
		r.forEach((f, p) => {
			(p === "length" || (!ct(p) && p >= u)) && c.push(f);
		});
	} else
		switch ((n !== void 0 && c.push(r.get(n)), t)) {
			case "add":
				k(e)
					? An(n) && c.push(r.get("length"))
					: (c.push(r.get(rt)), pt(e) && c.push(r.get(vn)));
				break;
			case "delete":
				k(e) || (c.push(r.get(rt)), pt(e) && c.push(r.get(vn)));
				break;
			case "set":
				pt(e) && c.push(r.get(rt));
				break;
		}
	Rn();
	for (const u of c) u && Uo(u, 4);
	kn();
}
const Gs = Pn("__proto__,__v_isRef,__isVue"),
	qo = new Set(
		Object.getOwnPropertyNames(Symbol)
			.filter((e) => e !== "arguments" && e !== "caller")
			.map((e) => Symbol[e])
			.filter(ct)
	),
	eo = Ys();
function Ys() {
	const e = {};
	return (
		["includes", "indexOf", "lastIndexOf"].forEach((t) => {
			e[t] = function (...n) {
				const o = B(this);
				for (let i = 0, r = this.length; i < r; i++) we(o, "get", i + "");
				const s = o[t](...n);
				return s === -1 || s === !1 ? o[t](...n.map(B)) : s;
			};
		}),
		["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
			e[t] = function (...n) {
				Ze(), Rn();
				const o = B(this)[t].apply(this, n);
				return kn(), et(), o;
			};
		}),
		e
	);
}
function Xs(e) {
	ct(e) || (e = String(e));
	const t = B(this);
	return we(t, "has", e), t.hasOwnProperty(e);
}
class zo {
	constructor(t = !1, n = !1) {
		(this._isReadonly = t), (this._isShallow = n);
	}
	get(t, n, o) {
		const s = this._isReadonly,
			i = this._isShallow;
		if (n === "__v_isReactive") return !s;
		if (n === "__v_isReadonly") return s;
		if (n === "__v_isShallow") return i;
		if (n === "__v_raw")
			return o === (s ? (i ? ui : Jo) : i ? Wo : Ko).get(t) ||
				Object.getPrototypeOf(t) === Object.getPrototypeOf(o)
				? t
				: void 0;
		const r = k(t);
		if (!s) {
			if (r && U(eo, n)) return Reflect.get(eo, n, o);
			if (n === "hasOwnProperty") return Xs;
		}
		const c = Reflect.get(t, n, o);
		return (ct(n) ? qo.has(n) : Gs(n)) || (s || we(t, "get", n), i)
			? c
			: Oe(c)
			? r && An(n)
				? c
				: c.value
			: Z(c)
			? s
				? Go(c)
				: Fn(c)
			: c;
	}
}
class Bo extends zo {
	constructor(t = !1) {
		super(!1, t);
	}
	set(t, n, o, s) {
		let i = t[n];
		if (!this._isShallow) {
			const u = qt(i);
			if (
				(!yn(o) && !qt(o) && ((i = B(i)), (o = B(o))), !k(t) && Oe(i) && !Oe(o))
			)
				return u ? !1 : ((i.value = o), !0);
		}
		const r = k(t) && An(n) ? Number(n) < t.length : U(t, n),
			c = Reflect.set(t, n, o, s);
		return (
			t === B(s) && (r ? lt(o, i) && qe(t, "set", n, o) : qe(t, "add", n, o)), c
		);
	}
	deleteProperty(t, n) {
		const o = U(t, n);
		t[n];
		const s = Reflect.deleteProperty(t, n);
		return s && o && qe(t, "delete", n, void 0), s;
	}
	has(t, n) {
		const o = Reflect.has(t, n);
		return (!ct(n) || !qo.has(n)) && we(t, "has", n), o;
	}
	ownKeys(t) {
		return we(t, "iterate", k(t) ? "length" : rt), Reflect.ownKeys(t);
	}
}
class Qs extends zo {
	constructor(t = !1) {
		super(!0, t);
	}
	set(t, n) {
		return !0;
	}
	deleteProperty(t, n) {
		return !0;
	}
}
const Zs = new Bo(),
	ei = new Qs(),
	ti = new Bo(!0);
const $n = (e) => e,
	Qt = (e) => Reflect.getPrototypeOf(e);
function Mt(e, t, n = !1, o = !1) {
	e = e.__v_raw;
	const s = B(e),
		i = B(t);
	n || (lt(t, i) && we(s, "get", t), we(s, "get", i));
	const { has: r } = Qt(s),
		c = o ? $n : n ? Un : Dn;
	if (r.call(s, t)) return c(e.get(t));
	if (r.call(s, i)) return c(e.get(i));
	e !== s && e.get(t);
}
function Lt(e, t = !1) {
	const n = this.__v_raw,
		o = B(n),
		s = B(e);
	return (
		t || (lt(e, s) && we(o, "has", e), we(o, "has", s)),
		e === s ? n.has(e) : n.has(e) || n.has(s)
	);
}
function Rt(e, t = !1) {
	return (
		(e = e.__v_raw), !t && we(B(e), "iterate", rt), Reflect.get(e, "size", e)
	);
}
function to(e) {
	e = B(e);
	const t = B(this);
	return Qt(t).has.call(t, e) || (t.add(e), qe(t, "add", e, e)), this;
}
function no(e, t) {
	t = B(t);
	const n = B(this),
		{ has: o, get: s } = Qt(n);
	let i = o.call(n, e);
	i || ((e = B(e)), (i = o.call(n, e)));
	const r = s.call(n, e);
	return (
		n.set(e, t), i ? lt(t, r) && qe(n, "set", e, t) : qe(n, "add", e, t), this
	);
}
function oo(e) {
	const t = B(this),
		{ has: n, get: o } = Qt(t);
	let s = n.call(t, e);
	s || ((e = B(e)), (s = n.call(t, e))), o && o.call(t, e);
	const i = t.delete(e);
	return s && qe(t, "delete", e, void 0), i;
}
function so() {
	const e = B(this),
		t = e.size !== 0,
		n = e.clear();
	return t && qe(e, "clear", void 0, void 0), n;
}
function kt(e, t) {
	return function (o, s) {
		const i = this,
			r = i.__v_raw,
			c = B(r),
			u = t ? $n : e ? Un : Dn;
		return (
			!e && we(c, "iterate", rt), r.forEach((f, p) => o.call(s, u(f), u(p), i))
		);
	};
}
function $t(e, t, n) {
	return function (...o) {
		const s = this.__v_raw,
			i = B(s),
			r = pt(i),
			c = e === "entries" || (e === Symbol.iterator && r),
			u = e === "keys" && r,
			f = s[e](...o),
			p = n ? $n : t ? Un : Dn;
		return (
			!t && we(i, "iterate", u ? vn : rt),
			{
				next() {
					const { value: h, done: b } = f.next();
					return b
						? { value: h, done: b }
						: { value: c ? [p(h[0]), p(h[1])] : p(h), done: b };
				},
				[Symbol.iterator]() {
					return this;
				},
			}
		);
	};
}
function We(e) {
	return function (...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function ni() {
	const e = {
			get(i) {
				return Mt(this, i);
			},
			get size() {
				return Rt(this);
			},
			has: Lt,
			add: to,
			set: no,
			delete: oo,
			clear: so,
			forEach: kt(!1, !1),
		},
		t = {
			get(i) {
				return Mt(this, i, !1, !0);
			},
			get size() {
				return Rt(this);
			},
			has: Lt,
			add: to,
			set: no,
			delete: oo,
			clear: so,
			forEach: kt(!1, !0),
		},
		n = {
			get(i) {
				return Mt(this, i, !0);
			},
			get size() {
				return Rt(this, !0);
			},
			has(i) {
				return Lt.call(this, i, !0);
			},
			add: We("add"),
			set: We("set"),
			delete: We("delete"),
			clear: We("clear"),
			forEach: kt(!0, !1),
		},
		o = {
			get(i) {
				return Mt(this, i, !0, !0);
			},
			get size() {
				return Rt(this, !0);
			},
			has(i) {
				return Lt.call(this, i, !0);
			},
			add: We("add"),
			set: We("set"),
			delete: We("delete"),
			clear: We("clear"),
			forEach: kt(!0, !0),
		};
	return (
		["keys", "values", "entries", Symbol.iterator].forEach((i) => {
			(e[i] = $t(i, !1, !1)),
				(n[i] = $t(i, !0, !1)),
				(t[i] = $t(i, !1, !0)),
				(o[i] = $t(i, !0, !0));
		}),
		[e, n, t, o]
	);
}
const [oi, si, ii, ri] = ni();
function Nn(e, t) {
	const n = t ? (e ? ri : ii) : e ? si : oi;
	return (o, s, i) =>
		s === "__v_isReactive"
			? !e
			: s === "__v_isReadonly"
			? e
			: s === "__v_raw"
			? o
			: Reflect.get(U(n, s) && s in o ? n : o, s, i);
}
const li = { get: Nn(!1, !1) },
	ci = { get: Nn(!1, !0) },
	ai = { get: Nn(!0, !1) };
const Ko = new WeakMap(),
	Wo = new WeakMap(),
	Jo = new WeakMap(),
	ui = new WeakMap();
function fi(e) {
	switch (e) {
		case "Object":
		case "Array":
			return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet":
			return 2;
		default:
			return 0;
	}
}
function di(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : fi(ks(e));
}
function Fn(e) {
	return qt(e) ? e : Hn(e, !1, Zs, li, Ko);
}
function pi(e) {
	return Hn(e, !1, ti, ci, Wo);
}
function Go(e) {
	return Hn(e, !0, ei, ai, Jo);
}
function Hn(e, t, n, o, s) {
	if (!Z(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
	const i = s.get(e);
	if (i) return i;
	const r = di(e);
	if (r === 0) return e;
	const c = new Proxy(e, r === 2 ? o : n);
	return s.set(e, c), c;
}
function wt(e) {
	return qt(e) ? wt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function qt(e) {
	return !!(e && e.__v_isReadonly);
}
function yn(e) {
	return !!(e && e.__v_isShallow);
}
function Yo(e) {
	return e ? !!e.__v_raw : !1;
}
function B(e) {
	const t = e && e.__v_raw;
	return t ? B(t) : e;
}
function hi(e) {
	return Object.isExtensible(e) && Ro(e, "__v_skip", !0), e;
}
const Dn = (e) => (Z(e) ? Fn(e) : e),
	Un = (e) => (Z(e) ? Go(e) : e);
class Xo {
	constructor(t, n, o, s) {
		(this.getter = t),
			(this._setter = n),
			(this.dep = void 0),
			(this.__v_isRef = !0),
			(this.__v_isReadonly = !1),
			(this.effect = new Ln(
				() => t(this._value),
				() => an(this, this.effect._dirtyLevel === 2 ? 2 : 3)
			)),
			(this.effect.computed = this),
			(this.effect.active = this._cacheable = !s),
			(this.__v_isReadonly = o);
	}
	get value() {
		const t = B(this);
		return (
			(!t._cacheable || t.effect.dirty) &&
				lt(t._value, (t._value = t.effect.run())) &&
				an(t, 4),
			mi(t),
			t.effect._dirtyLevel >= 2 && an(t, 2),
			t._value
		);
	}
	set value(t) {
		this._setter(t);
	}
	get _dirty() {
		return this.effect.dirty;
	}
	set _dirty(t) {
		this.effect.dirty = t;
	}
}
function gi(e, t, n = !1) {
	let o, s;
	const i = $(e);
	return (
		i ? ((o = e), (s = je)) : ((o = e.get), (s = e.set)),
		new Xo(o, s, i || !s, n)
	);
}
function mi(e) {
	var t;
	Xe &&
		it &&
		((e = B(e)),
		Do(
			it,
			(t = e.dep) != null
				? t
				: (e.dep = Vo(() => (e.dep = void 0), e instanceof Xo ? e : void 0))
		));
}
function an(e, t = 4, n) {
	e = B(e);
	const o = e.dep;
	o && Uo(o, t);
}
function Oe(e) {
	return !!(e && e.__v_isRef === !0);
}
function _i(e) {
	return Oe(e) ? e.value : e;
}
const bi = {
	get: (e, t, n) => _i(Reflect.get(e, t, n)),
	set: (e, t, n, o) => {
		const s = e[t];
		return Oe(s) && !Oe(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, o);
	},
};
function Qo(e) {
	return wt(e) ? e : new Proxy(e, bi);
}
/**
 * @vue/runtime-core v3.4.25
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Qe(e, t, n, o) {
	try {
		return o ? e(...o) : e();
	} catch (s) {
		Zt(s, t, n);
	}
}
function $e(e, t, n, o) {
	if ($(e)) {
		const s = Qe(e, t, n, o);
		return (
			s &&
				Ao(s) &&
				s.catch((i) => {
					Zt(i, t, n);
				}),
			s
		);
	}
	if (k(e)) {
		const s = [];
		for (let i = 0; i < e.length; i++) s.push($e(e[i], t, n, o));
		return s;
	}
}
function Zt(e, t, n, o = !0) {
	const s = t ? t.vnode : null;
	if (t) {
		let i = t.parent;
		const r = t.proxy,
			c = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; i; ) {
			const f = i.ec;
			if (f) {
				for (let p = 0; p < f.length; p++) if (f[p](e, r, c) === !1) return;
			}
			i = i.parent;
		}
		const u = t.appContext.config.errorHandler;
		if (u) {
			Ze(), Qe(u, null, 10, [e, r, c]), et();
			return;
		}
	}
	vi(e, n, s, o);
}
function vi(e, t, n, o = !0) {
	console.error(e);
}
let Ot = !1,
	wn = !1;
const de = [];
let De = 0;
const ht = [];
let Je = null,
	st = 0;
const Zo = Promise.resolve();
let Vn = null;
function yi(e) {
	const t = Vn || Zo;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function wi(e) {
	let t = De + 1,
		n = de.length;
	for (; t < n; ) {
		const o = (t + n) >>> 1,
			s = de[o],
			i = Tt(s);
		i < e || (i === e && s.pre) ? (t = o + 1) : (n = o);
	}
	return t;
}
function qn(e) {
	(!de.length || !de.includes(e, Ot && e.allowRecurse ? De + 1 : De)) &&
		(e.id == null ? de.push(e) : de.splice(wi(e.id), 0, e), es());
}
function es() {
	!Ot && !wn && ((wn = !0), (Vn = Zo.then(ns)));
}
function xi(e) {
	const t = de.indexOf(e);
	t > De && de.splice(t, 1);
}
function Si(e) {
	k(e)
		? ht.push(...e)
		: (!Je || !Je.includes(e, e.allowRecurse ? st + 1 : st)) && ht.push(e),
		es();
}
function io(e, t, n = Ot ? De + 1 : 0) {
	for (; n < de.length; n++) {
		const o = de[n];
		if (o && o.pre) {
			if (e && o.id !== e.uid) continue;
			de.splice(n, 1), n--, o();
		}
	}
}
function ts(e) {
	if (ht.length) {
		const t = [...new Set(ht)].sort((n, o) => Tt(n) - Tt(o));
		if (((ht.length = 0), Je)) {
			Je.push(...t);
			return;
		}
		for (Je = t, st = 0; st < Je.length; st++) Je[st]();
		(Je = null), (st = 0);
	}
}
const Tt = (e) => (e.id == null ? 1 / 0 : e.id),
	Ei = (e, t) => {
		const n = Tt(e) - Tt(t);
		if (n === 0) {
			if (e.pre && !t.pre) return -1;
			if (t.pre && !e.pre) return 1;
		}
		return n;
	};
function ns(e) {
	(wn = !1), (Ot = !0), de.sort(Ei);
	try {
		for (De = 0; De < de.length; De++) {
			const t = de[De];
			t && t.active !== !1 && Qe(t, null, 14);
		}
	} finally {
		(De = 0),
			(de.length = 0),
			ts(),
			(Ot = !1),
			(Vn = null),
			(de.length || ht.length) && ns();
	}
}
function Oi(e, t, ...n) {
	if (e.isUnmounted) return;
	const o = e.vnode.props || X;
	let s = n;
	const i = t.startsWith("update:"),
		r = i && t.slice(7);
	if (r && r in o) {
		const p = `${r === "modelValue" ? "model" : r}Modifiers`,
			{ number: h, trim: b } = o[p] || X;
		b && (s = n.map((x) => (ie(x) ? x.trim() : x))), h && (s = n.map(Fs));
	}
	let c,
		u = o[(c = rn(t))] || o[(c = rn(Ue(t)))];
	!u && i && (u = o[(c = rn(mt(t)))]), u && $e(u, e, 6, s);
	const f = o[c + "Once"];
	if (f) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		(e.emitted[c] = !0), $e(f, e, 6, s);
	}
}
function os(e, t, n = !1) {
	const o = t.emitsCache,
		s = o.get(e);
	if (s !== void 0) return s;
	const i = e.emits;
	let r = {},
		c = !1;
	if (!$(e)) {
		const u = (f) => {
			const p = os(f, t, !0);
			p && ((c = !0), le(r, p));
		};
		!n && t.mixins.length && t.mixins.forEach(u),
			e.extends && u(e.extends),
			e.mixins && e.mixins.forEach(u);
	}
	return !i && !c
		? (Z(e) && o.set(e, null), null)
		: (k(i) ? i.forEach((u) => (r[u] = null)) : le(r, i),
		  Z(e) && o.set(e, r),
		  r);
}
function en(e, t) {
	return !e || !Wt(t)
		? !1
		: ((t = t.slice(2).replace(/Once$/, "")),
		  U(e, t[0].toLowerCase() + t.slice(1)) || U(e, mt(t)) || U(e, t));
}
let Re = null,
	tn = null;
function zt(e) {
	const t = Re;
	return (Re = e), (tn = (e && e.type.__scopeId) || null), t;
}
function jt(e) {
	tn = e;
}
function It() {
	tn = null;
}
function Ti(e, t = Re, n) {
	if (!t || e._n) return e;
	const o = (...s) => {
		o._d && _o(-1);
		const i = zt(t);
		let r;
		try {
			r = e(...s);
		} finally {
			zt(i), o._d && _o(1);
		}
		return r;
	};
	return (o._n = !0), (o._c = !0), (o._d = !0), o;
}
function un(e) {
	const {
			type: t,
			vnode: n,
			proxy: o,
			withProxy: s,
			propsOptions: [i],
			slots: r,
			attrs: c,
			emit: u,
			render: f,
			renderCache: p,
			props: h,
			data: b,
			setupState: x,
			ctx: I,
			inheritAttrs: L,
		} = e,
		K = zt(e);
	let J, ee;
	try {
		if (n.shapeFlag & 4) {
			const G = s || o,
				oe = G;
			(J = He(f.call(oe, G, p, h, x, b, I))), (ee = c);
		} else {
			const G = t;
			(J = He(
				G.length > 1 ? G(h, { attrs: c, slots: r, emit: u }) : G(h, null)
			)),
				(ee = t.props ? c : Ci(c));
		}
	} catch (G) {
		(Et.length = 0), Zt(G, e, 1), (J = be(Ct));
	}
	let V = J;
	if (ee && L !== !1) {
		const G = Object.keys(ee),
			{ shapeFlag: oe } = V;
		G.length &&
			oe & 7 &&
			(i && G.some(jn) && (ee = Pi(ee, i)), (V = gt(V, ee)));
	}
	return (
		n.dirs && ((V = gt(V)), (V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs)),
		n.transition && (V.transition = n.transition),
		(J = V),
		zt(K),
		J
	);
}
const Ci = (e) => {
		let t;
		for (const n in e)
			(n === "class" || n === "style" || Wt(n)) && ((t || (t = {}))[n] = e[n]);
		return t;
	},
	Pi = (e, t) => {
		const n = {};
		for (const o in e) (!jn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
		return n;
	};
function ji(e, t, n) {
	const { props: o, children: s, component: i } = e,
		{ props: r, children: c, patchFlag: u } = t,
		f = i.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && u >= 0) {
		if (u & 1024) return !0;
		if (u & 16) return o ? ro(o, r, f) : !!r;
		if (u & 8) {
			const p = t.dynamicProps;
			for (let h = 0; h < p.length; h++) {
				const b = p[h];
				if (r[b] !== o[b] && !en(f, b)) return !0;
			}
		}
	} else
		return (s || c) && (!c || !c.$stable)
			? !0
			: o === r
			? !1
			: o
			? r
				? ro(o, r, f)
				: !0
			: !!r;
	return !1;
}
function ro(e, t, n) {
	const o = Object.keys(t);
	if (o.length !== Object.keys(e).length) return !0;
	for (let s = 0; s < o.length; s++) {
		const i = o[s];
		if (t[i] !== e[i] && !en(n, i)) return !0;
	}
	return !1;
}
function Ii({ vnode: e, parent: t }, n) {
	for (; t; ) {
		const o = t.subTree;
		if ((o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e))
			((e = t.vnode).el = n), (t = t.parent);
		else break;
	}
}
const ss = "components";
function ot(e, t) {
	return Mi(ss, e, !0, t) || e;
}
const Ai = Symbol.for("v-ndc");
function Mi(e, t, n = !0, o = !1) {
	const s = Re || pe;
	if (s) {
		const i = s.type;
		if (e === ss) {
			const c = Ar(i, !1);
			if (c && (c === t || c === Ue(t) || c === Yt(Ue(t)))) return i;
		}
		const r = lo(s[e] || i[e], t) || lo(s.appContext[e], t);
		return !r && o ? i : r;
	}
}
function lo(e, t) {
	return e && (e[t] || e[Ue(t)] || e[Yt(Ue(t))]);
}
const Li = (e) => e.__isSuspense;
function Ri(e, t) {
	t && t.pendingBranch
		? k(e)
			? t.effects.push(...e)
			: t.effects.push(e)
		: Si(e);
}
const ki = Symbol.for("v-scx"),
	$i = () => Ht(ki),
	Nt = {};
function fn(e, t, n) {
	return is(e, t, n);
}
function is(
	e,
	t,
	{ immediate: n, deep: o, flush: s, once: i, onTrack: r, onTrigger: c } = X
) {
	if (t && i) {
		const M = t;
		t = (...ce) => {
			M(...ce), oe();
		};
	}
	const u = pe,
		f = (M) => (o === !0 ? M : ft(M, o === !1 ? 1 : void 0));
	let p,
		h = !1,
		b = !1;
	if (
		(Oe(e)
			? ((p = () => e.value), (h = yn(e)))
			: wt(e)
			? ((p = () => f(e)), (h = !0))
			: k(e)
			? ((b = !0),
			  (h = e.some((M) => wt(M) || yn(M))),
			  (p = () =>
					e.map((M) => {
						if (Oe(M)) return M.value;
						if (wt(M)) return f(M);
						if ($(M)) return Qe(M, u, 2);
					})))
			: $(e)
			? t
				? (p = () => Qe(e, u, 2))
				: (p = () => (x && x(), $e(e, u, 3, [I])))
			: (p = je),
		t && o)
	) {
		const M = p;
		p = () => ft(M());
	}
	let x,
		I = (M) => {
			x = V.onStop = () => {
				Qe(M, u, 4), (x = V.onStop = void 0);
			};
		},
		L;
	if (sn)
		if (
			((I = je),
			t ? n && $e(t, u, 3, [p(), b ? [] : void 0, I]) : p(),
			s === "sync")
		) {
			const M = $i();
			L = M.__watcherHandles || (M.__watcherHandles = []);
		} else return je;
	let K = b ? new Array(e.length).fill(Nt) : Nt;
	const J = () => {
		if (!(!V.active || !V.dirty))
			if (t) {
				const M = V.run();
				(o || h || (b ? M.some((ce, H) => lt(ce, K[H])) : lt(M, K))) &&
					(x && x(),
					$e(t, u, 3, [M, K === Nt ? void 0 : b && K[0] === Nt ? [] : K, I]),
					(K = M));
			} else V.run();
	};
	J.allowRecurse = !!t;
	let ee;
	s === "sync"
		? (ee = J)
		: s === "post"
		? (ee = () => ye(J, u && u.suspense))
		: ((J.pre = !0), u && (J.id = u.uid), (ee = () => qn(J)));
	const V = new Ln(p, je, ee),
		G = Ws(),
		oe = () => {
			V.stop(), G && In(G.effects, V);
		};
	return (
		t
			? n
				? J()
				: (K = V.run())
			: s === "post"
			? ye(V.run.bind(V), u && u.suspense)
			: V.run(),
		L && L.push(oe),
		oe
	);
}
function Ni(e, t, n) {
	const o = this.proxy,
		s = ie(e) ? (e.includes(".") ? rs(o, e) : () => o[e]) : e.bind(o, o);
	let i;
	$(t) ? (i = t) : ((i = t.handler), (n = t));
	const r = At(this),
		c = is(s, i.bind(o), n);
	return r(), c;
}
function rs(e, t) {
	const n = t.split(".");
	return () => {
		let o = e;
		for (let s = 0; s < n.length && o; s++) o = o[n[s]];
		return o;
	};
}
function ft(e, t, n = 0, o) {
	if (!Z(e) || e.__v_skip) return e;
	if (t && t > 0) {
		if (n >= t) return e;
		n++;
	}
	if (((o = o || new Set()), o.has(e))) return e;
	if ((o.add(e), Oe(e))) ft(e.value, t, n, o);
	else if (k(e)) for (let s = 0; s < e.length; s++) ft(e[s], t, n, o);
	else if (Io(e) || pt(e))
		e.forEach((s) => {
			ft(s, t, n, o);
		});
	else if (Lo(e)) for (const s in e) ft(e[s], t, n, o);
	return e;
}
function tt(e, t, n, o) {
	const s = e.dirs,
		i = t && t.dirs;
	for (let r = 0; r < s.length; r++) {
		const c = s[r];
		i && (c.oldValue = i[r].value);
		let u = c.dir[o];
		u && (Ze(), $e(u, n, 8, [e.el, c, e, t]), et());
	}
}
const Ft = (e) => !!e.type.__asyncLoader,
	ls = (e) => e.type.__isKeepAlive;
function Fi(e, t) {
	cs(e, "a", t);
}
function Hi(e, t) {
	cs(e, "da", t);
}
function cs(e, t, n = pe) {
	const o =
		e.__wdc ||
		(e.__wdc = () => {
			let s = n;
			for (; s; ) {
				if (s.isDeactivated) return;
				s = s.parent;
			}
			return e();
		});
	if ((nn(t, o, n), n)) {
		let s = n.parent;
		for (; s && s.parent; )
			ls(s.parent.vnode) && Di(o, t, n, s), (s = s.parent);
	}
}
function Di(e, t, n, o) {
	const s = nn(t, e, o, !0);
	as(() => {
		In(o[t], s);
	}, n);
}
function nn(e, t, n = pe, o = !1) {
	if (n) {
		const s = n[e] || (n[e] = []),
			i =
				t.__weh ||
				(t.__weh = (...r) => {
					if (n.isUnmounted) return;
					Ze();
					const c = At(n),
						u = $e(t, n, e, r);
					return c(), et(), u;
				});
		return o ? s.unshift(i) : s.push(i), i;
	}
}
const Ke =
		(e) =>
		(t, n = pe) =>
			(!sn || e === "sp") && nn(e, (...o) => t(...o), n),
	Ui = Ke("bm"),
	Vi = Ke("m"),
	qi = Ke("bu"),
	zi = Ke("u"),
	Bi = Ke("bum"),
	as = Ke("um"),
	Ki = Ke("sp"),
	Wi = Ke("rtg"),
	Ji = Ke("rtc");
function Gi(e, t = pe) {
	nn("ec", e, t);
}
function Yi(e, t, n, o) {
	let s;
	const i = n && n[o];
	if (k(e) || ie(e)) {
		s = new Array(e.length);
		for (let r = 0, c = e.length; r < c; r++)
			s[r] = t(e[r], r, void 0, i && i[r]);
	} else if (typeof e == "number") {
		s = new Array(e);
		for (let r = 0; r < e; r++) s[r] = t(r + 1, r, void 0, i && i[r]);
	} else if (Z(e))
		if (e[Symbol.iterator])
			s = Array.from(e, (r, c) => t(r, c, void 0, i && i[c]));
		else {
			const r = Object.keys(e);
			s = new Array(r.length);
			for (let c = 0, u = r.length; c < u; c++) {
				const f = r[c];
				s[c] = t(e[f], f, c, i && i[c]);
			}
		}
	else s = [];
	return n && (n[o] = s), s;
}
const xn = (e) => (e ? (Ss(e) ? Wn(e) || e.proxy : xn(e.parent)) : null),
	xt = le(Object.create(null), {
		$: (e) => e,
		$el: (e) => e.vnode.el,
		$data: (e) => e.data,
		$props: (e) => e.props,
		$attrs: (e) => e.attrs,
		$slots: (e) => e.slots,
		$refs: (e) => e.refs,
		$parent: (e) => xn(e.parent),
		$root: (e) => xn(e.root),
		$emit: (e) => e.emit,
		$options: (e) => zn(e),
		$forceUpdate: (e) =>
			e.f ||
			(e.f = () => {
				(e.effect.dirty = !0), qn(e.update);
			}),
		$nextTick: (e) => e.n || (e.n = yi.bind(e.proxy)),
		$watch: (e) => Ni.bind(e),
	}),
	dn = (e, t) => e !== X && !e.__isScriptSetup && U(e, t),
	Xi = {
		get({ _: e }, t) {
			if (t === "__v_skip") return !0;
			const {
				ctx: n,
				setupState: o,
				data: s,
				props: i,
				accessCache: r,
				type: c,
				appContext: u,
			} = e;
			let f;
			if (t[0] !== "$") {
				const x = r[t];
				if (x !== void 0)
					switch (x) {
						case 1:
							return o[t];
						case 2:
							return s[t];
						case 4:
							return n[t];
						case 3:
							return i[t];
					}
				else {
					if (dn(o, t)) return (r[t] = 1), o[t];
					if (s !== X && U(s, t)) return (r[t] = 2), s[t];
					if ((f = e.propsOptions[0]) && U(f, t)) return (r[t] = 3), i[t];
					if (n !== X && U(n, t)) return (r[t] = 4), n[t];
					Sn && (r[t] = 0);
				}
			}
			const p = xt[t];
			let h, b;
			if (p) return t === "$attrs" && we(e.attrs, "get", ""), p(e);
			if ((h = c.__cssModules) && (h = h[t])) return h;
			if (n !== X && U(n, t)) return (r[t] = 4), n[t];
			if (((b = u.config.globalProperties), U(b, t))) return b[t];
		},
		set({ _: e }, t, n) {
			const { data: o, setupState: s, ctx: i } = e;
			return dn(s, t)
				? ((s[t] = n), !0)
				: o !== X && U(o, t)
				? ((o[t] = n), !0)
				: U(e.props, t) || (t[0] === "$" && t.slice(1) in e)
				? !1
				: ((i[t] = n), !0);
		},
		has(
			{
				_: {
					data: e,
					setupState: t,
					accessCache: n,
					ctx: o,
					appContext: s,
					propsOptions: i,
				},
			},
			r
		) {
			let c;
			return (
				!!n[r] ||
				(e !== X && U(e, r)) ||
				dn(t, r) ||
				((c = i[0]) && U(c, r)) ||
				U(o, r) ||
				U(xt, r) ||
				U(s.config.globalProperties, r)
			);
		},
		defineProperty(e, t, n) {
			return (
				n.get != null
					? (e._.accessCache[t] = 0)
					: U(n, "value") && this.set(e, t, n.value, null),
				Reflect.defineProperty(e, t, n)
			);
		},
	};
function co(e) {
	return k(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let Sn = !0;
function Qi(e) {
	const t = zn(e),
		n = e.proxy,
		o = e.ctx;
	(Sn = !1), t.beforeCreate && ao(t.beforeCreate, e, "bc");
	const {
		data: s,
		computed: i,
		methods: r,
		watch: c,
		provide: u,
		inject: f,
		created: p,
		beforeMount: h,
		mounted: b,
		beforeUpdate: x,
		updated: I,
		activated: L,
		deactivated: K,
		beforeDestroy: J,
		beforeUnmount: ee,
		destroyed: V,
		unmounted: G,
		render: oe,
		renderTracked: M,
		renderTriggered: ce,
		errorCaptured: H,
		serverPrefetch: he,
		expose: ae,
		inheritAttrs: C,
		components: E,
		directives: F,
		filters: A,
	} = t;
	if ((f && Zi(f, o, null), r))
		for (const q in r) {
			const D = r[q];
			$(D) && (o[q] = D.bind(n));
		}
	if (s) {
		const q = s.call(n, n);
		Z(q) && (e.data = Fn(q));
	}
	if (((Sn = !0), i))
		for (const q in i) {
			const D = i[q],
				ge = $(D) ? D.bind(n, n) : $(D.get) ? D.get.bind(n, n) : je,
				Ve = !$(D) && $(D.set) ? D.set.bind(n) : je,
				Ie = Lr({ get: ge, set: Ve });
			Object.defineProperty(o, q, {
				enumerable: !0,
				configurable: !0,
				get: () => Ie.value,
				set: (ue) => (Ie.value = ue),
			});
		}
	if (c) for (const q in c) us(c[q], o, n, q);
	if (u) {
		const q = $(u) ? u.call(n) : u;
		Reflect.ownKeys(q).forEach((D) => {
			ir(D, q[D]);
		});
	}
	p && ao(p, e, "c");
	function W(q, D) {
		k(D) ? D.forEach((ge) => q(ge.bind(n))) : D && q(D.bind(n));
	}
	if (
		(W(Ui, h),
		W(Vi, b),
		W(qi, x),
		W(zi, I),
		W(Fi, L),
		W(Hi, K),
		W(Gi, H),
		W(Ji, M),
		W(Wi, ce),
		W(Bi, ee),
		W(as, G),
		W(Ki, he),
		k(ae))
	)
		if (ae.length) {
			const q = e.exposed || (e.exposed = {});
			ae.forEach((D) => {
				Object.defineProperty(q, D, {
					get: () => n[D],
					set: (ge) => (n[D] = ge),
				});
			});
		} else e.exposed || (e.exposed = {});
	oe && e.render === je && (e.render = oe),
		C != null && (e.inheritAttrs = C),
		E && (e.components = E),
		F && (e.directives = F);
}
function Zi(e, t, n = je) {
	k(e) && (e = En(e));
	for (const o in e) {
		const s = e[o];
		let i;
		Z(s)
			? "default" in s
				? (i = Ht(s.from || o, s.default, !0))
				: (i = Ht(s.from || o))
			: (i = Ht(s)),
			Oe(i)
				? Object.defineProperty(t, o, {
						enumerable: !0,
						configurable: !0,
						get: () => i.value,
						set: (r) => (i.value = r),
				  })
				: (t[o] = i);
	}
}
function ao(e, t, n) {
	$e(k(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function us(e, t, n, o) {
	const s = o.includes(".") ? rs(n, o) : () => n[o];
	if (ie(e)) {
		const i = t[e];
		$(i) && fn(s, i);
	} else if ($(e)) fn(s, e.bind(n));
	else if (Z(e))
		if (k(e)) e.forEach((i) => us(i, t, n, o));
		else {
			const i = $(e.handler) ? e.handler.bind(n) : t[e.handler];
			$(i) && fn(s, i, e);
		}
}
function zn(e) {
	const t = e.type,
		{ mixins: n, extends: o } = t,
		{
			mixins: s,
			optionsCache: i,
			config: { optionMergeStrategies: r },
		} = e.appContext,
		c = i.get(t);
	let u;
	return (
		c
			? (u = c)
			: !s.length && !n && !o
			? (u = t)
			: ((u = {}), s.length && s.forEach((f) => Bt(u, f, r, !0)), Bt(u, t, r)),
		Z(t) && i.set(t, u),
		u
	);
}
function Bt(e, t, n, o = !1) {
	const { mixins: s, extends: i } = t;
	i && Bt(e, i, n, !0), s && s.forEach((r) => Bt(e, r, n, !0));
	for (const r in t)
		if (!(o && r === "expose")) {
			const c = er[r] || (n && n[r]);
			e[r] = c ? c(e[r], t[r]) : t[r];
		}
	return e;
}
const er = {
	data: uo,
	props: fo,
	emits: fo,
	methods: vt,
	computed: vt,
	beforeCreate: _e,
	created: _e,
	beforeMount: _e,
	mounted: _e,
	beforeUpdate: _e,
	updated: _e,
	beforeDestroy: _e,
	beforeUnmount: _e,
	destroyed: _e,
	unmounted: _e,
	activated: _e,
	deactivated: _e,
	errorCaptured: _e,
	serverPrefetch: _e,
	components: vt,
	directives: vt,
	watch: nr,
	provide: uo,
	inject: tr,
};
function uo(e, t) {
	return t
		? e
			? function () {
					return le(
						$(e) ? e.call(this, this) : e,
						$(t) ? t.call(this, this) : t
					);
			  }
			: t
		: e;
}
function tr(e, t) {
	return vt(En(e), En(t));
}
function En(e) {
	if (k(e)) {
		const t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function _e(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function vt(e, t) {
	return e ? le(Object.create(null), e, t) : t;
}
function fo(e, t) {
	return e
		? k(e) && k(t)
			? [...new Set([...e, ...t])]
			: le(Object.create(null), co(e), co(t ?? {}))
		: t;
}
function nr(e, t) {
	if (!e) return t;
	if (!t) return e;
	const n = le(Object.create(null), e);
	for (const o in t) n[o] = _e(e[o], t[o]);
	return n;
}
function fs() {
	return {
		app: null,
		config: {
			isNativeTag: Ls,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {},
		},
		mixins: [],
		components: {},
		directives: {},
		provides: Object.create(null),
		optionsCache: new WeakMap(),
		propsCache: new WeakMap(),
		emitsCache: new WeakMap(),
	};
}
let or = 0;
function sr(e, t) {
	return function (o, s = null) {
		$(o) || (o = le({}, o)), s != null && !Z(s) && (s = null);
		const i = fs(),
			r = new WeakSet();
		let c = !1;
		const u = (i.app = {
			_uid: or++,
			_component: o,
			_props: s,
			_container: null,
			_context: i,
			_instance: null,
			version: Rr,
			get config() {
				return i.config;
			},
			set config(f) {},
			use(f, ...p) {
				return (
					r.has(f) ||
						(f && $(f.install)
							? (r.add(f), f.install(u, ...p))
							: $(f) && (r.add(f), f(u, ...p))),
					u
				);
			},
			mixin(f) {
				return i.mixins.includes(f) || i.mixins.push(f), u;
			},
			component(f, p) {
				return p ? ((i.components[f] = p), u) : i.components[f];
			},
			directive(f, p) {
				return p ? ((i.directives[f] = p), u) : i.directives[f];
			},
			mount(f, p, h) {
				if (!c) {
					const b = be(o, s);
					return (
						(b.appContext = i),
						h === !0 ? (h = "svg") : h === !1 && (h = void 0),
						p && t ? t(b, f) : e(b, f, h),
						(c = !0),
						(u._container = f),
						(f.__vue_app__ = u),
						Wn(b.component) || b.component.proxy
					);
				}
			},
			unmount() {
				c && (e(null, u._container), delete u._container.__vue_app__);
			},
			provide(f, p) {
				return (i.provides[f] = p), u;
			},
			runWithContext(f) {
				const p = St;
				St = u;
				try {
					return f();
				} finally {
					St = p;
				}
			},
		});
		return u;
	};
}
let St = null;
function ir(e, t) {
	if (pe) {
		let n = pe.provides;
		const o = pe.parent && pe.parent.provides;
		o === n && (n = pe.provides = Object.create(o)), (n[e] = t);
	}
}
function Ht(e, t, n = !1) {
	const o = pe || Re;
	if (o || St) {
		const s = o
			? o.parent == null
				? o.vnode.appContext && o.vnode.appContext.provides
				: o.parent.provides
			: St._context.provides;
		if (s && e in s) return s[e];
		if (arguments.length > 1) return n && $(t) ? t.call(o && o.proxy) : t;
	}
}
const ds = {},
	ps = () => Object.create(ds),
	hs = (e) => Object.getPrototypeOf(e) === ds;
function rr(e, t, n, o = !1) {
	const s = {},
		i = ps();
	(e.propsDefaults = Object.create(null)), gs(e, t, s, i);
	for (const r in e.propsOptions[0]) r in s || (s[r] = void 0);
	n ? (e.props = o ? s : pi(s)) : e.type.props ? (e.props = s) : (e.props = i),
		(e.attrs = i);
}
function lr(e, t, n, o) {
	const {
			props: s,
			attrs: i,
			vnode: { patchFlag: r },
		} = e,
		c = B(s),
		[u] = e.propsOptions;
	let f = !1;
	if ((o || r > 0) && !(r & 16)) {
		if (r & 8) {
			const p = e.vnode.dynamicProps;
			for (let h = 0; h < p.length; h++) {
				let b = p[h];
				if (en(e.emitsOptions, b)) continue;
				const x = t[b];
				if (u)
					if (U(i, b)) x !== i[b] && ((i[b] = x), (f = !0));
					else {
						const I = Ue(b);
						s[I] = On(u, c, I, x, e, !1);
					}
				else x !== i[b] && ((i[b] = x), (f = !0));
			}
		}
	} else {
		gs(e, t, s, i) && (f = !0);
		let p;
		for (const h in c)
			(!t || (!U(t, h) && ((p = mt(h)) === h || !U(t, p)))) &&
				(u
					? n &&
					  (n[h] !== void 0 || n[p] !== void 0) &&
					  (s[h] = On(u, c, h, void 0, e, !0))
					: delete s[h]);
		if (i !== c) for (const h in i) (!t || !U(t, h)) && (delete i[h], (f = !0));
	}
	f && qe(e.attrs, "set", "");
}
function gs(e, t, n, o) {
	const [s, i] = e.propsOptions;
	let r = !1,
		c;
	if (t)
		for (let u in t) {
			if (yt(u)) continue;
			const f = t[u];
			let p;
			s && U(s, (p = Ue(u)))
				? !i || !i.includes(p)
					? (n[p] = f)
					: ((c || (c = {}))[p] = f)
				: en(e.emitsOptions, u) ||
				  ((!(u in o) || f !== o[u]) && ((o[u] = f), (r = !0)));
		}
	if (i) {
		const u = B(n),
			f = c || X;
		for (let p = 0; p < i.length; p++) {
			const h = i[p];
			n[h] = On(s, u, h, f[h], e, !U(f, h));
		}
	}
	return r;
}
function On(e, t, n, o, s, i) {
	const r = e[n];
	if (r != null) {
		const c = U(r, "default");
		if (c && o === void 0) {
			const u = r.default;
			if (r.type !== Function && !r.skipFactory && $(u)) {
				const { propsDefaults: f } = s;
				if (n in f) o = f[n];
				else {
					const p = At(s);
					(o = f[n] = u.call(null, t)), p();
				}
			} else o = u;
		}
		r[0] &&
			(i && !c ? (o = !1) : r[1] && (o === "" || o === mt(n)) && (o = !0));
	}
	return o;
}
function ms(e, t, n = !1) {
	const o = t.propsCache,
		s = o.get(e);
	if (s) return s;
	const i = e.props,
		r = {},
		c = [];
	let u = !1;
	if (!$(e)) {
		const p = (h) => {
			u = !0;
			const [b, x] = ms(h, t, !0);
			le(r, b), x && c.push(...x);
		};
		!n && t.mixins.length && t.mixins.forEach(p),
			e.extends && p(e.extends),
			e.mixins && e.mixins.forEach(p);
	}
	if (!i && !u) return Z(e) && o.set(e, dt), dt;
	if (k(i))
		for (let p = 0; p < i.length; p++) {
			const h = Ue(i[p]);
			po(h) && (r[h] = X);
		}
	else if (i)
		for (const p in i) {
			const h = Ue(p);
			if (po(h)) {
				const b = i[p],
					x = (r[h] = k(b) || $(b) ? { type: b } : le({}, b));
				if (x) {
					const I = mo(Boolean, x.type),
						L = mo(String, x.type);
					(x[0] = I > -1),
						(x[1] = L < 0 || I < L),
						(I > -1 || U(x, "default")) && c.push(h);
				}
			}
		}
	const f = [r, c];
	return Z(e) && o.set(e, f), f;
}
function po(e) {
	return e[0] !== "$" && !yt(e);
}
function ho(e) {
	return e === null
		? "null"
		: typeof e == "function"
		? e.name || ""
		: (typeof e == "object" && e.constructor && e.constructor.name) || "";
}
function go(e, t) {
	return ho(e) === ho(t);
}
function mo(e, t) {
	return k(t) ? t.findIndex((n) => go(n, e)) : $(t) && go(t, e) ? 0 : -1;
}
const _s = (e) => e[0] === "_" || e === "$stable",
	Bn = (e) => (k(e) ? e.map(He) : [He(e)]),
	cr = (e, t, n) => {
		if (t._n) return t;
		const o = Ti((...s) => Bn(t(...s)), n);
		return (o._c = !1), o;
	},
	bs = (e, t, n) => {
		const o = e._ctx;
		for (const s in e) {
			if (_s(s)) continue;
			const i = e[s];
			if ($(i)) t[s] = cr(s, i, o);
			else if (i != null) {
				const r = Bn(i);
				t[s] = () => r;
			}
		}
	},
	vs = (e, t) => {
		const n = Bn(t);
		e.slots.default = () => n;
	},
	ar = (e, t) => {
		const n = (e.slots = ps());
		if (e.vnode.shapeFlag & 32) {
			const o = t._;
			o ? (le(n, t), Ro(n, "_", o)) : bs(t, n);
		} else t && vs(e, t);
	},
	ur = (e, t, n) => {
		const { vnode: o, slots: s } = e;
		let i = !0,
			r = X;
		if (o.shapeFlag & 32) {
			const c = t._;
			c
				? n && c === 1
					? (i = !1)
					: (le(s, t), !n && c === 1 && delete s._)
				: ((i = !t.$stable), bs(t, s)),
				(r = t);
		} else t && (vs(e, t), (r = { default: 1 }));
		if (i) for (const c in s) !_s(c) && r[c] == null && delete s[c];
	};
function Tn(e, t, n, o, s = !1) {
	if (k(e)) {
		e.forEach((b, x) => Tn(b, t && (k(t) ? t[x] : t), n, o, s));
		return;
	}
	if (Ft(o) && !s) return;
	const i = o.shapeFlag & 4 ? Wn(o.component) || o.component.proxy : o.el,
		r = s ? null : i,
		{ i: c, r: u } = e,
		f = t && t.r,
		p = c.refs === X ? (c.refs = {}) : c.refs,
		h = c.setupState;
	if (
		(f != null &&
			f !== u &&
			(ie(f)
				? ((p[f] = null), U(h, f) && (h[f] = null))
				: Oe(f) && (f.value = null)),
		$(u))
	)
		Qe(u, c, 12, [r, p]);
	else {
		const b = ie(u),
			x = Oe(u);
		if (b || x) {
			const I = () => {
				if (e.f) {
					const L = b ? (U(h, u) ? h[u] : p[u]) : u.value;
					s
						? k(L) && In(L, i)
						: k(L)
						? L.includes(i) || L.push(i)
						: b
						? ((p[u] = [i]), U(h, u) && (h[u] = p[u]))
						: ((u.value = [i]), e.k && (p[e.k] = u.value));
				} else
					b
						? ((p[u] = r), U(h, u) && (h[u] = r))
						: x && ((u.value = r), e.k && (p[e.k] = r));
			};
			r ? ((I.id = -1), ye(I, n)) : I();
		}
	}
}
const ye = Ri;
function fr(e) {
	return dr(e);
}
function dr(e, t) {
	const n = ko();
	n.__VUE__ = !0;
	const {
			insert: o,
			remove: s,
			patchProp: i,
			createElement: r,
			createText: c,
			createComment: u,
			setText: f,
			setElementText: p,
			parentNode: h,
			nextSibling: b,
			setScopeId: x = je,
			insertStaticContent: I,
		} = e,
		L = (
			l,
			a,
			d,
			g = null,
			m = null,
			y = null,
			S = void 0,
			v = null,
			w = !!a.dynamicChildren
		) => {
			if (l === a) return;
			l && !bt(l, a) && ((g = te(l)), ue(l, m, y, !0), (l = null)),
				a.patchFlag === -2 && ((w = !1), (a.dynamicChildren = null));
			const { type: _, ref: O, shapeFlag: j } = a;
			switch (_) {
				case on:
					K(l, a, d, g);
					break;
				case Ct:
					J(l, a, d, g);
					break;
				case Dt:
					l == null && ee(a, d, g, S);
					break;
				case Le:
					E(l, a, d, g, m, y, S, v, w);
					break;
				default:
					j & 1
						? oe(l, a, d, g, m, y, S, v, w)
						: j & 6
						? F(l, a, d, g, m, y, S, v, w)
						: (j & 64 || j & 128) && _.process(l, a, d, g, m, y, S, v, w, me);
			}
			O != null && m && Tn(O, l && l.ref, y, a || l, !a);
		},
		K = (l, a, d, g) => {
			if (l == null) o((a.el = c(a.children)), d, g);
			else {
				const m = (a.el = l.el);
				a.children !== l.children && f(m, a.children);
			}
		},
		J = (l, a, d, g) => {
			l == null ? o((a.el = u(a.children || "")), d, g) : (a.el = l.el);
		},
		ee = (l, a, d, g) => {
			[l.el, l.anchor] = I(l.children, a, d, g, l.el, l.anchor);
		},
		V = ({ el: l, anchor: a }, d, g) => {
			let m;
			for (; l && l !== a; ) (m = b(l)), o(l, d, g), (l = m);
			o(a, d, g);
		},
		G = ({ el: l, anchor: a }) => {
			let d;
			for (; l && l !== a; ) (d = b(l)), s(l), (l = d);
			s(a);
		},
		oe = (l, a, d, g, m, y, S, v, w) => {
			a.type === "svg" ? (S = "svg") : a.type === "math" && (S = "mathml"),
				l == null ? M(a, d, g, m, y, S, v, w) : he(l, a, m, y, S, v, w);
		},
		M = (l, a, d, g, m, y, S, v) => {
			let w, _;
			const { props: O, shapeFlag: j, transition: P, dirs: R } = l;
			if (
				((w = l.el = r(l.type, y, O && O.is, O)),
				j & 8
					? p(w, l.children)
					: j & 16 && H(l.children, w, null, g, m, pn(l, y), S, v),
				R && tt(l, null, g, "created"),
				ce(w, l, l.scopeId, S, g),
				O)
			) {
				for (const z in O)
					z !== "value" &&
						!yt(z) &&
						i(w, z, null, O[z], y, l.children, g, m, ne);
				"value" in O && i(w, "value", null, O.value, y),
					(_ = O.onVnodeBeforeMount) && Fe(_, g, l);
			}
			R && tt(l, null, g, "beforeMount");
			const N = pr(m, P);
			N && P.beforeEnter(w),
				o(w, a, d),
				((_ = O && O.onVnodeMounted) || N || R) &&
					ye(() => {
						_ && Fe(_, g, l), N && P.enter(w), R && tt(l, null, g, "mounted");
					}, m);
		},
		ce = (l, a, d, g, m) => {
			if ((d && x(l, d), g)) for (let y = 0; y < g.length; y++) x(l, g[y]);
			if (m) {
				let y = m.subTree;
				if (a === y) {
					const S = m.vnode;
					ce(l, S, S.scopeId, S.slotScopeIds, m.parent);
				}
			}
		},
		H = (l, a, d, g, m, y, S, v, w = 0) => {
			for (let _ = w; _ < l.length; _++) {
				const O = (l[_] = v ? Ge(l[_]) : He(l[_]));
				L(null, O, a, d, g, m, y, S, v);
			}
		},
		he = (l, a, d, g, m, y, S) => {
			const v = (a.el = l.el);
			let { patchFlag: w, dynamicChildren: _, dirs: O } = a;
			w |= l.patchFlag & 16;
			const j = l.props || X,
				P = a.props || X;
			let R;
			if (
				(d && nt(d, !1),
				(R = P.onVnodeBeforeUpdate) && Fe(R, d, a, l),
				O && tt(a, l, d, "beforeUpdate"),
				d && nt(d, !0),
				_
					? ae(l.dynamicChildren, _, v, d, g, pn(a, m), y)
					: S || D(l, a, v, null, d, g, pn(a, m), y, !1),
				w > 0)
			) {
				if (w & 16) C(v, a, j, P, d, g, m);
				else if (
					(w & 2 && j.class !== P.class && i(v, "class", null, P.class, m),
					w & 4 && i(v, "style", j.style, P.style, m),
					w & 8)
				) {
					const N = a.dynamicProps;
					for (let z = 0; z < N.length; z++) {
						const Y = N[z],
							re = j[Y],
							Ae = P[Y];
						(Ae !== re || Y === "value") &&
							i(v, Y, re, Ae, m, l.children, d, g, ne);
					}
				}
				w & 1 && l.children !== a.children && p(v, a.children);
			} else !S && _ == null && C(v, a, j, P, d, g, m);
			((R = P.onVnodeUpdated) || O) &&
				ye(() => {
					R && Fe(R, d, a, l), O && tt(a, l, d, "updated");
				}, g);
		},
		ae = (l, a, d, g, m, y, S) => {
			for (let v = 0; v < a.length; v++) {
				const w = l[v],
					_ = a[v],
					O =
						w.el && (w.type === Le || !bt(w, _) || w.shapeFlag & 70)
							? h(w.el)
							: d;
				L(w, _, O, null, g, m, y, S, !0);
			}
		},
		C = (l, a, d, g, m, y, S) => {
			if (d !== g) {
				if (d !== X)
					for (const v in d)
						!yt(v) && !(v in g) && i(l, v, d[v], null, S, a.children, m, y, ne);
				for (const v in g) {
					if (yt(v)) continue;
					const w = g[v],
						_ = d[v];
					w !== _ && v !== "value" && i(l, v, _, w, S, a.children, m, y, ne);
				}
				"value" in g && i(l, "value", d.value, g.value, S);
			}
		},
		E = (l, a, d, g, m, y, S, v, w) => {
			const _ = (a.el = l ? l.el : c("")),
				O = (a.anchor = l ? l.anchor : c(""));
			let { patchFlag: j, dynamicChildren: P, slotScopeIds: R } = a;
			R && (v = v ? v.concat(R) : R),
				l == null
					? (o(_, d, g), o(O, d, g), H(a.children || [], d, O, m, y, S, v, w))
					: j > 0 && j & 64 && P && l.dynamicChildren
					? (ae(l.dynamicChildren, P, d, m, y, S, v),
					  (a.key != null || (m && a === m.subTree)) && ys(l, a, !0))
					: D(l, a, d, O, m, y, S, v, w);
		},
		F = (l, a, d, g, m, y, S, v, w) => {
			(a.slotScopeIds = v),
				l == null
					? a.shapeFlag & 512
						? m.ctx.activate(a, d, g, S, w)
						: A(a, d, g, m, y, S, w)
					: se(l, a, w);
		},
		A = (l, a, d, g, m, y, S) => {
			const v = (l.component = Tr(l, g, m));
			if ((ls(l) && (v.ctx.renderer = me), Cr(v), v.asyncDep)) {
				if ((m && m.registerDep(v, W), !l.el)) {
					const w = (v.subTree = be(Ct));
					J(null, w, a, d);
				}
			} else W(v, l, a, d, m, y, S);
		},
		se = (l, a, d) => {
			const g = (a.component = l.component);
			if (ji(l, a, d))
				if (g.asyncDep && !g.asyncResolved) {
					q(g, a, d);
					return;
				} else (g.next = a), xi(g.update), (g.effect.dirty = !0), g.update();
			else (a.el = l.el), (g.vnode = a);
		},
		W = (l, a, d, g, m, y, S) => {
			const v = () => {
					if (l.isMounted) {
						let { next: O, bu: j, u: P, parent: R, vnode: N } = l;
						{
							const ut = ws(l);
							if (ut) {
								O && ((O.el = N.el), q(l, O, S)),
									ut.asyncDep.then(() => {
										l.isUnmounted || v();
									});
								return;
							}
						}
						let z = O,
							Y;
						nt(l, !1),
							O ? ((O.el = N.el), q(l, O, S)) : (O = N),
							j && ln(j),
							(Y = O.props && O.props.onVnodeBeforeUpdate) && Fe(Y, R, O, N),
							nt(l, !0);
						const re = un(l),
							Ae = l.subTree;
						(l.subTree = re),
							L(Ae, re, h(Ae.el), te(Ae), l, m, y),
							(O.el = re.el),
							z === null && Ii(l, re.el),
							P && ye(P, m),
							(Y = O.props && O.props.onVnodeUpdated) &&
								ye(() => Fe(Y, R, O, N), m);
					} else {
						let O;
						const { el: j, props: P } = a,
							{ bm: R, m: N, parent: z } = l,
							Y = Ft(a);
						if (
							(nt(l, !1),
							R && ln(R),
							!Y && (O = P && P.onVnodeBeforeMount) && Fe(O, z, a),
							nt(l, !0),
							j && Se)
						) {
							const re = () => {
								(l.subTree = un(l)), Se(j, l.subTree, l, m, null);
							};
							Y
								? a.type.__asyncLoader().then(() => !l.isUnmounted && re())
								: re();
						} else {
							const re = (l.subTree = un(l));
							L(null, re, d, g, l, m, y), (a.el = re.el);
						}
						if ((N && ye(N, m), !Y && (O = P && P.onVnodeMounted))) {
							const re = a;
							ye(() => Fe(O, z, re), m);
						}
						(a.shapeFlag & 256 ||
							(z && Ft(z.vnode) && z.vnode.shapeFlag & 256)) &&
							l.a &&
							ye(l.a, m),
							(l.isMounted = !0),
							(a = d = g = null);
					}
				},
				w = (l.effect = new Ln(v, je, () => qn(_), l.scope)),
				_ = (l.update = () => {
					w.dirty && w.run();
				});
			(_.id = l.uid), nt(l, !0), _();
		},
		q = (l, a, d) => {
			a.component = l;
			const g = l.vnode.props;
			(l.vnode = a),
				(l.next = null),
				lr(l, a.props, g, d),
				ur(l, a.children, d),
				Ze(),
				io(l),
				et();
		},
		D = (l, a, d, g, m, y, S, v, w = !1) => {
			const _ = l && l.children,
				O = l ? l.shapeFlag : 0,
				j = a.children,
				{ patchFlag: P, shapeFlag: R } = a;
			if (P > 0) {
				if (P & 128) {
					Ve(_, j, d, g, m, y, S, v, w);
					return;
				} else if (P & 256) {
					ge(_, j, d, g, m, y, S, v, w);
					return;
				}
			}
			R & 8
				? (O & 16 && ne(_, m, y), j !== _ && p(d, j))
				: O & 16
				? R & 16
					? Ve(_, j, d, g, m, y, S, v, w)
					: ne(_, m, y, !0)
				: (O & 8 && p(d, ""), R & 16 && H(j, d, g, m, y, S, v, w));
		},
		ge = (l, a, d, g, m, y, S, v, w) => {
			(l = l || dt), (a = a || dt);
			const _ = l.length,
				O = a.length,
				j = Math.min(_, O);
			let P;
			for (P = 0; P < j; P++) {
				const R = (a[P] = w ? Ge(a[P]) : He(a[P]));
				L(l[P], R, d, null, m, y, S, v, w);
			}
			_ > O ? ne(l, m, y, !0, !1, j) : H(a, d, g, m, y, S, v, w, j);
		},
		Ve = (l, a, d, g, m, y, S, v, w) => {
			let _ = 0;
			const O = a.length;
			let j = l.length - 1,
				P = O - 1;
			for (; _ <= j && _ <= P; ) {
				const R = l[_],
					N = (a[_] = w ? Ge(a[_]) : He(a[_]));
				if (bt(R, N)) L(R, N, d, null, m, y, S, v, w);
				else break;
				_++;
			}
			for (; _ <= j && _ <= P; ) {
				const R = l[j],
					N = (a[P] = w ? Ge(a[P]) : He(a[P]));
				if (bt(R, N)) L(R, N, d, null, m, y, S, v, w);
				else break;
				j--, P--;
			}
			if (_ > j) {
				if (_ <= P) {
					const R = P + 1,
						N = R < O ? a[R].el : g;
					for (; _ <= P; )
						L(null, (a[_] = w ? Ge(a[_]) : He(a[_])), d, N, m, y, S, v, w), _++;
				}
			} else if (_ > P) for (; _ <= j; ) ue(l[_], m, y, !0), _++;
			else {
				const R = _,
					N = _,
					z = new Map();
				for (_ = N; _ <= P; _++) {
					const Ee = (a[_] = w ? Ge(a[_]) : He(a[_]));
					Ee.key != null && z.set(Ee.key, _);
				}
				let Y,
					re = 0;
				const Ae = P - N + 1;
				let ut = !1,
					Jn = 0;
				const _t = new Array(Ae);
				for (_ = 0; _ < Ae; _++) _t[_] = 0;
				for (_ = R; _ <= j; _++) {
					const Ee = l[_];
					if (re >= Ae) {
						ue(Ee, m, y, !0);
						continue;
					}
					let Ne;
					if (Ee.key != null) Ne = z.get(Ee.key);
					else
						for (Y = N; Y <= P; Y++)
							if (_t[Y - N] === 0 && bt(Ee, a[Y])) {
								Ne = Y;
								break;
							}
					Ne === void 0
						? ue(Ee, m, y, !0)
						: ((_t[Ne - N] = _ + 1),
						  Ne >= Jn ? (Jn = Ne) : (ut = !0),
						  L(Ee, a[Ne], d, null, m, y, S, v, w),
						  re++);
				}
				const Gn = ut ? hr(_t) : dt;
				for (Y = Gn.length - 1, _ = Ae - 1; _ >= 0; _--) {
					const Ee = N + _,
						Ne = a[Ee],
						Yn = Ee + 1 < O ? a[Ee + 1].el : g;
					_t[_] === 0
						? L(null, Ne, d, Yn, m, y, S, v, w)
						: ut && (Y < 0 || _ !== Gn[Y] ? Ie(Ne, d, Yn, 2) : Y--);
				}
			}
		},
		Ie = (l, a, d, g, m = null) => {
			const { el: y, type: S, transition: v, children: w, shapeFlag: _ } = l;
			if (_ & 6) {
				Ie(l.component.subTree, a, d, g);
				return;
			}
			if (_ & 128) {
				l.suspense.move(a, d, g);
				return;
			}
			if (_ & 64) {
				S.move(l, a, d, me);
				return;
			}
			if (S === Le) {
				o(y, a, d);
				for (let j = 0; j < w.length; j++) Ie(w[j], a, d, g);
				o(l.anchor, a, d);
				return;
			}
			if (S === Dt) {
				V(l, a, d);
				return;
			}
			if (g !== 2 && _ & 1 && v)
				if (g === 0) v.beforeEnter(y), o(y, a, d), ye(() => v.enter(y), m);
				else {
					const { leave: j, delayLeave: P, afterLeave: R } = v,
						N = () => o(y, a, d),
						z = () => {
							j(y, () => {
								N(), R && R();
							});
						};
					P ? P(y, N, z) : z();
				}
			else o(y, a, d);
		},
		ue = (l, a, d, g = !1, m = !1) => {
			const {
				type: y,
				props: S,
				ref: v,
				children: w,
				dynamicChildren: _,
				shapeFlag: O,
				patchFlag: j,
				dirs: P,
			} = l;
			if ((v != null && Tn(v, null, d, l, !0), O & 256)) {
				a.ctx.deactivate(l);
				return;
			}
			const R = O & 1 && P,
				N = !Ft(l);
			let z;
			if ((N && (z = S && S.onVnodeBeforeUnmount) && Fe(z, a, l), O & 6))
				Te(l.component, d, g);
			else {
				if (O & 128) {
					l.suspense.unmount(d, g);
					return;
				}
				R && tt(l, null, a, "beforeUnmount"),
					O & 64
						? l.type.remove(l, a, d, m, me, g)
						: _ && (y !== Le || (j > 0 && j & 64))
						? ne(_, a, d, !1, !0)
						: ((y === Le && j & 384) || (!m && O & 16)) && ne(w, a, d),
					g && xe(l);
			}
			((N && (z = S && S.onVnodeUnmounted)) || R) &&
				ye(() => {
					z && Fe(z, a, l), R && tt(l, null, a, "unmounted");
				}, d);
		},
		xe = (l) => {
			const { type: a, el: d, anchor: g, transition: m } = l;
			if (a === Le) {
				ve(d, g);
				return;
			}
			if (a === Dt) {
				G(l);
				return;
			}
			const y = () => {
				s(d), m && !m.persisted && m.afterLeave && m.afterLeave();
			};
			if (l.shapeFlag & 1 && m && !m.persisted) {
				const { leave: S, delayLeave: v } = m,
					w = () => S(d, y);
				v ? v(l.el, y, w) : w();
			} else y();
		},
		ve = (l, a) => {
			let d;
			for (; l !== a; ) (d = b(l)), s(l), (l = d);
			s(a);
		},
		Te = (l, a, d) => {
			const { bum: g, scope: m, update: y, subTree: S, um: v } = l;
			g && ln(g),
				m.stop(),
				y && ((y.active = !1), ue(S, l, a, d)),
				v && ye(v, a),
				ye(() => {
					l.isUnmounted = !0;
				}, a),
				a &&
					a.pendingBranch &&
					!a.isUnmounted &&
					l.asyncDep &&
					!l.asyncResolved &&
					l.suspenseId === a.pendingId &&
					(a.deps--, a.deps === 0 && a.resolve());
		},
		ne = (l, a, d, g = !1, m = !1, y = 0) => {
			for (let S = y; S < l.length; S++) ue(l[S], a, d, g, m);
		},
		te = (l) =>
			l.shapeFlag & 6
				? te(l.component.subTree)
				: l.shapeFlag & 128
				? l.suspense.next()
				: b(l.anchor || l.el);
	let Q = !1;
	const fe = (l, a, d) => {
			l == null
				? a._vnode && ue(a._vnode, null, null, !0)
				: L(a._vnode || null, l, a, null, null, null, d),
				Q || ((Q = !0), io(), ts(), (Q = !1)),
				(a._vnode = l);
		},
		me = {
			p: L,
			um: ue,
			m: Ie,
			r: xe,
			mt: A,
			mc: H,
			pc: D,
			pbc: ae,
			n: te,
			o: e,
		};
	let Ce, Se;
	return (
		t && ([Ce, Se] = t(me)), { render: fe, hydrate: Ce, createApp: sr(fe, Ce) }
	);
}
function pn({ type: e, props: t }, n) {
	return (n === "svg" && e === "foreignObject") ||
		(n === "mathml" &&
			e === "annotation-xml" &&
			t &&
			t.encoding &&
			t.encoding.includes("html"))
		? void 0
		: n;
}
function nt({ effect: e, update: t }, n) {
	e.allowRecurse = t.allowRecurse = n;
}
function pr(e, t) {
	return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function ys(e, t, n = !1) {
	const o = e.children,
		s = t.children;
	if (k(o) && k(s))
		for (let i = 0; i < o.length; i++) {
			const r = o[i];
			let c = s[i];
			c.shapeFlag & 1 &&
				!c.dynamicChildren &&
				((c.patchFlag <= 0 || c.patchFlag === 32) &&
					((c = s[i] = Ge(s[i])), (c.el = r.el)),
				n || ys(r, c)),
				c.type === on && (c.el = r.el);
		}
}
function hr(e) {
	const t = e.slice(),
		n = [0];
	let o, s, i, r, c;
	const u = e.length;
	for (o = 0; o < u; o++) {
		const f = e[o];
		if (f !== 0) {
			if (((s = n[n.length - 1]), e[s] < f)) {
				(t[o] = s), n.push(o);
				continue;
			}
			for (i = 0, r = n.length - 1; i < r; )
				(c = (i + r) >> 1), e[n[c]] < f ? (i = c + 1) : (r = c);
			f < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), (n[i] = o));
		}
	}
	for (i = n.length, r = n[i - 1]; i-- > 0; ) (n[i] = r), (r = t[r]);
	return n;
}
function ws(e) {
	const t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : ws(t);
}
const gr = (e) => e.__isTeleport,
	Le = Symbol.for("v-fgt"),
	on = Symbol.for("v-txt"),
	Ct = Symbol.for("v-cmt"),
	Dt = Symbol.for("v-stc"),
	Et = [];
let ke = null;
function ze(e = !1) {
	Et.push((ke = e ? null : []));
}
function mr() {
	Et.pop(), (ke = Et[Et.length - 1] || null);
}
let Pt = 1;
function _o(e) {
	Pt += e;
}
function _r(e) {
	return (
		(e.dynamicChildren = Pt > 0 ? ke || dt : null),
		mr(),
		Pt > 0 && ke && ke.push(e),
		e
	);
}
function Be(e, t, n, o, s, i) {
	return _r(T(e, t, n, o, s, i, !0));
}
function br(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function bt(e, t) {
	return e.type === t.type && e.key === t.key;
}
const xs = ({ key: e }) => e ?? null,
	Ut = ({ ref: e, ref_key: t, ref_for: n }) => (
		typeof e == "number" && (e = "" + e),
		e != null
			? ie(e) || Oe(e) || $(e)
				? { i: Re, r: e, k: t, f: !!n }
				: e
			: null
	);
function T(
	e,
	t = null,
	n = null,
	o = 0,
	s = null,
	i = e === Le ? 0 : 1,
	r = !1,
	c = !1
) {
	const u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && xs(t),
		ref: t && Ut(t),
		scopeId: tn,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: i,
		patchFlag: o,
		dynamicProps: s,
		dynamicChildren: null,
		appContext: null,
		ctx: Re,
	};
	return (
		c
			? (Kn(u, n), i & 128 && e.normalize(u))
			: n && (u.shapeFlag |= ie(n) ? 8 : 16),
		Pt > 0 &&
			!r &&
			ke &&
			(u.patchFlag > 0 || i & 6) &&
			u.patchFlag !== 32 &&
			ke.push(u),
		u
	);
}
const be = vr;
function vr(e, t = null, n = null, o = 0, s = null, i = !1) {
	if (((!e || e === Ai) && (e = Ct), br(e))) {
		const c = gt(e, t, !0);
		return (
			n && Kn(c, n),
			Pt > 0 &&
				!i &&
				ke &&
				(c.shapeFlag & 6 ? (ke[ke.indexOf(e)] = c) : ke.push(c)),
			(c.patchFlag |= -2),
			c
		);
	}
	if ((Mr(e) && (e = e.__vccOpts), t)) {
		t = yr(t);
		let { class: c, style: u } = t;
		c && !ie(c) && (t.class = Mn(c)),
			Z(u) && (Yo(u) && !k(u) && (u = le({}, u)), (t.style = Xt(u)));
	}
	const r = ie(e) ? 1 : Li(e) ? 128 : gr(e) ? 64 : Z(e) ? 4 : $(e) ? 2 : 0;
	return T(e, t, n, o, s, r, i, !0);
}
function yr(e) {
	return e ? (Yo(e) || hs(e) ? le({}, e) : e) : null;
}
function gt(e, t, n = !1) {
	const { props: o, ref: s, patchFlag: i, children: r } = e,
		c = t ? Sr(o || {}, t) : o;
	return {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: c,
		key: c && xs(c),
		ref:
			t && t.ref ? (n && s ? (k(s) ? s.concat(Ut(t)) : [s, Ut(t)]) : Ut(t)) : s,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: r,
		target: e.target,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== Le ? (i === -1 ? 16 : i | 16) : i,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: e.transition,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && gt(e.ssContent),
		ssFallback: e.ssFallback && gt(e.ssFallback),
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
	};
}
function wr(e = " ", t = 0) {
	return be(on, null, e, t);
}
function xr(e, t) {
	const n = be(Dt, null, e);
	return (n.staticCount = t), n;
}
function He(e) {
	return e == null || typeof e == "boolean"
		? be(Ct)
		: k(e)
		? be(Le, null, e.slice())
		: typeof e == "object"
		? Ge(e)
		: be(on, null, String(e));
}
function Ge(e) {
	return (e.el === null && e.patchFlag !== -1) || e.memo ? e : gt(e);
}
function Kn(e, t) {
	let n = 0;
	const { shapeFlag: o } = e;
	if (t == null) t = null;
	else if (k(t)) n = 16;
	else if (typeof t == "object")
		if (o & 65) {
			const s = t.default;
			s && (s._c && (s._d = !1), Kn(e, s()), s._c && (s._d = !0));
			return;
		} else {
			n = 32;
			const s = t._;
			!s && !hs(t)
				? (t._ctx = Re)
				: s === 3 &&
				  Re &&
				  (Re.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
		}
	else
		$(t)
			? ((t = { default: t, _ctx: Re }), (n = 32))
			: ((t = String(t)), o & 64 ? ((n = 16), (t = [wr(t)])) : (n = 8));
	(e.children = t), (e.shapeFlag |= n);
}
function Sr(...e) {
	const t = {};
	for (let n = 0; n < e.length; n++) {
		const o = e[n];
		for (const s in o)
			if (s === "class")
				t.class !== o.class && (t.class = Mn([t.class, o.class]));
			else if (s === "style") t.style = Xt([t.style, o.style]);
			else if (Wt(s)) {
				const i = t[s],
					r = o[s];
				r &&
					i !== r &&
					!(k(i) && i.includes(r)) &&
					(t[s] = i ? [].concat(i, r) : r);
			} else s !== "" && (t[s] = o[s]);
	}
	return t;
}
function Fe(e, t, n, o = null) {
	$e(e, t, 7, [n, o]);
}
const Er = fs();
let Or = 0;
function Tr(e, t, n) {
	const o = e.type,
		s = (t ? t.appContext : e.appContext) || Er,
		i = {
			uid: Or++,
			vnode: e,
			type: o,
			parent: t,
			appContext: s,
			root: null,
			next: null,
			subTree: null,
			effect: null,
			update: null,
			scope: new Bs(!0),
			render: null,
			proxy: null,
			exposed: null,
			exposeProxy: null,
			withProxy: null,
			provides: t ? t.provides : Object.create(s.provides),
			accessCache: null,
			renderCache: [],
			components: null,
			directives: null,
			propsOptions: ms(o, s),
			emitsOptions: os(o, s),
			emit: null,
			emitted: null,
			propsDefaults: X,
			inheritAttrs: o.inheritAttrs,
			ctx: X,
			data: X,
			props: X,
			attrs: X,
			slots: X,
			refs: X,
			setupState: X,
			setupContext: null,
			attrsProxy: null,
			slotsProxy: null,
			suspense: n,
			suspenseId: n ? n.pendingId : 0,
			asyncDep: null,
			asyncResolved: !1,
			isMounted: !1,
			isUnmounted: !1,
			isDeactivated: !1,
			bc: null,
			c: null,
			bm: null,
			m: null,
			bu: null,
			u: null,
			um: null,
			bum: null,
			da: null,
			a: null,
			rtg: null,
			rtc: null,
			ec: null,
			sp: null,
		};
	return (
		(i.ctx = { _: i }),
		(i.root = t ? t.root : i),
		(i.emit = Oi.bind(null, i)),
		e.ce && e.ce(i),
		i
	);
}
let pe = null,
	Kt,
	Cn;
{
	const e = ko(),
		t = (n, o) => {
			let s;
			return (
				(s = e[n]) || (s = e[n] = []),
				s.push(o),
				(i) => {
					s.length > 1 ? s.forEach((r) => r(i)) : s[0](i);
				}
			);
		};
	(Kt = t("__VUE_INSTANCE_SETTERS__", (n) => (pe = n))),
		(Cn = t("__VUE_SSR_SETTERS__", (n) => (sn = n)));
}
const At = (e) => {
		const t = pe;
		return (
			Kt(e),
			e.scope.on(),
			() => {
				e.scope.off(), Kt(t);
			}
		);
	},
	bo = () => {
		pe && pe.scope.off(), Kt(null);
	};
function Ss(e) {
	return e.vnode.shapeFlag & 4;
}
let sn = !1;
function Cr(e, t = !1) {
	t && Cn(t);
	const { props: n, children: o } = e.vnode,
		s = Ss(e);
	rr(e, n, s, t), ar(e, o);
	const i = s ? Pr(e, t) : void 0;
	return t && Cn(!1), i;
}
function Pr(e, t) {
	const n = e.type;
	(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Xi));
	const { setup: o } = n;
	if (o) {
		const s = (e.setupContext = o.length > 1 ? Ir(e) : null),
			i = At(e);
		Ze();
		const r = Qe(o, e, 0, [e.props, s]);
		if ((et(), i(), Ao(r))) {
			if ((r.then(bo, bo), t))
				return r
					.then((c) => {
						vo(e, c, t);
					})
					.catch((c) => {
						Zt(c, e, 0);
					});
			e.asyncDep = r;
		} else vo(e, r, t);
	} else Es(e, t);
}
function vo(e, t, n) {
	$(t)
		? e.type.__ssrInlineRender
			? (e.ssrRender = t)
			: (e.render = t)
		: Z(t) && (e.setupState = Qo(t)),
		Es(e, n);
}
let yo;
function Es(e, t, n) {
	const o = e.type;
	if (!e.render) {
		if (!t && yo && !o.render) {
			const s = o.template || zn(e).template;
			if (s) {
				const { isCustomElement: i, compilerOptions: r } = e.appContext.config,
					{ delimiters: c, compilerOptions: u } = o,
					f = le(le({ isCustomElement: i, delimiters: c }, r), u);
				o.render = yo(s, f);
			}
		}
		e.render = o.render || je;
	}
	{
		const s = At(e);
		Ze();
		try {
			Qi(e);
		} finally {
			et(), s();
		}
	}
}
const jr = {
	get(e, t) {
		return we(e, "get", ""), e[t];
	},
};
function Ir(e) {
	const t = (n) => {
		e.exposed = n || {};
	};
	return {
		attrs: new Proxy(e.attrs, jr),
		slots: e.slots,
		emit: e.emit,
		expose: t,
	};
}
function Wn(e) {
	if (e.exposed)
		return (
			e.exposeProxy ||
			(e.exposeProxy = new Proxy(Qo(hi(e.exposed)), {
				get(t, n) {
					if (n in t) return t[n];
					if (n in xt) return xt[n](e);
				},
				has(t, n) {
					return n in t || n in xt;
				},
			}))
		);
}
function Ar(e, t = !0) {
	return $(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Mr(e) {
	return $(e) && "__vccOpts" in e;
}
const Lr = (e, t) => gi(e, t, sn),
	Rr = "3.4.25";
/**
 * @vue/runtime-dom v3.4.25
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const kr = "http://www.w3.org/2000/svg",
	$r = "http://www.w3.org/1998/Math/MathML",
	Ye = typeof document < "u" ? document : null,
	wo = Ye && Ye.createElement("template"),
	Nr = {
		insert: (e, t, n) => {
			t.insertBefore(e, n || null);
		},
		remove: (e) => {
			const t = e.parentNode;
			t && t.removeChild(e);
		},
		createElement: (e, t, n, o) => {
			const s =
				t === "svg"
					? Ye.createElementNS(kr, e)
					: t === "mathml"
					? Ye.createElementNS($r, e)
					: Ye.createElement(e, n ? { is: n } : void 0);
			return (
				e === "select" &&
					o &&
					o.multiple != null &&
					s.setAttribute("multiple", o.multiple),
				s
			);
		},
		createText: (e) => Ye.createTextNode(e),
		createComment: (e) => Ye.createComment(e),
		setText: (e, t) => {
			e.nodeValue = t;
		},
		setElementText: (e, t) => {
			e.textContent = t;
		},
		parentNode: (e) => e.parentNode,
		nextSibling: (e) => e.nextSibling,
		querySelector: (e) => Ye.querySelector(e),
		setScopeId(e, t) {
			e.setAttribute(t, "");
		},
		insertStaticContent(e, t, n, o, s, i) {
			const r = n ? n.previousSibling : t.lastChild;
			if (s && (s === i || s.nextSibling))
				for (
					;
					t.insertBefore(s.cloneNode(!0), n),
						!(s === i || !(s = s.nextSibling));

				);
			else {
				wo.innerHTML =
					o === "svg"
						? `<svg>${e}</svg>`
						: o === "mathml"
						? `<math>${e}</math>`
						: e;
				const c = wo.content;
				if (o === "svg" || o === "mathml") {
					const u = c.firstChild;
					for (; u.firstChild; ) c.appendChild(u.firstChild);
					c.removeChild(u);
				}
				t.insertBefore(c, n);
			}
			return [
				r ? r.nextSibling : t.firstChild,
				n ? n.previousSibling : t.lastChild,
			];
		},
	},
	Fr = Symbol("_vtc");
function Hr(e, t, n) {
	const o = e[Fr];
	o && (t = (t ? [t, ...o] : [...o]).join(" ")),
		t == null
			? e.removeAttribute("class")
			: n
			? e.setAttribute("class", t)
			: (e.className = t);
}
const xo = Symbol("_vod"),
	Dr = Symbol("_vsh"),
	Ur = Symbol(""),
	Vr = /(^|;)\s*display\s*:/;
function qr(e, t, n) {
	const o = e.style,
		s = ie(n);
	let i = !1;
	if (n && !s) {
		if (t)
			if (ie(t))
				for (const r of t.split(";")) {
					const c = r.slice(0, r.indexOf(":")).trim();
					n[c] == null && Vt(o, c, "");
				}
			else for (const r in t) n[r] == null && Vt(o, r, "");
		for (const r in n) r === "display" && (i = !0), Vt(o, r, n[r]);
	} else if (s) {
		if (t !== n) {
			const r = o[Ur];
			r && (n += ";" + r), (o.cssText = n), (i = Vr.test(n));
		}
	} else t && e.removeAttribute("style");
	xo in e && ((e[xo] = i ? o.display : ""), e[Dr] && (o.display = "none"));
}
const So = /\s*!important$/;
function Vt(e, t, n) {
	if (k(n)) n.forEach((o) => Vt(e, t, o));
	else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
	else {
		const o = zr(e, t);
		So.test(n)
			? e.setProperty(mt(o), n.replace(So, ""), "important")
			: (e[o] = n);
	}
}
const Eo = ["Webkit", "Moz", "ms"],
	hn = {};
function zr(e, t) {
	const n = hn[t];
	if (n) return n;
	let o = Ue(t);
	if (o !== "filter" && o in e) return (hn[t] = o);
	o = Yt(o);
	for (let s = 0; s < Eo.length; s++) {
		const i = Eo[s] + o;
		if (i in e) return (hn[t] = i);
	}
	return t;
}
const Oo = "http://www.w3.org/1999/xlink";
function Br(e, t, n, o, s) {
	if (o && t.startsWith("xlink:"))
		n == null
			? e.removeAttributeNS(Oo, t.slice(6, t.length))
			: e.setAttributeNS(Oo, t, n);
	else {
		const i = zs(t);
		n == null || (i && !$o(n))
			? e.removeAttribute(t)
			: e.setAttribute(t, i ? "" : n);
	}
}
function Kr(e, t, n, o, s, i, r) {
	if (t === "innerHTML" || t === "textContent") {
		o && r(o, s, i), (e[t] = n ?? "");
		return;
	}
	const c = e.tagName;
	if (t === "value" && c !== "PROGRESS" && !c.includes("-")) {
		const f = c === "OPTION" ? e.getAttribute("value") || "" : e.value,
			p = n ?? "";
		(f !== p || !("_value" in e)) && (e.value = p),
			n == null && e.removeAttribute(t),
			(e._value = n);
		return;
	}
	let u = !1;
	if (n === "" || n == null) {
		const f = typeof e[t];
		f === "boolean"
			? (n = $o(n))
			: n == null && f === "string"
			? ((n = ""), (u = !0))
			: f === "number" && ((n = 0), (u = !0));
	}
	try {
		e[t] = n;
	} catch {}
	u && e.removeAttribute(t);
}
function Wr(e, t, n, o) {
	e.addEventListener(t, n, o);
}
function Jr(e, t, n, o) {
	e.removeEventListener(t, n, o);
}
const To = Symbol("_vei");
function Gr(e, t, n, o, s = null) {
	const i = e[To] || (e[To] = {}),
		r = i[t];
	if (o && r) r.value = o;
	else {
		const [c, u] = Yr(t);
		if (o) {
			const f = (i[t] = Zr(o, s));
			Wr(e, c, f, u);
		} else r && (Jr(e, c, r, u), (i[t] = void 0));
	}
}
const Co = /(?:Once|Passive|Capture)$/;
function Yr(e) {
	let t;
	if (Co.test(e)) {
		t = {};
		let o;
		for (; (o = e.match(Co)); )
			(e = e.slice(0, e.length - o[0].length)), (t[o[0].toLowerCase()] = !0);
	}
	return [e[2] === ":" ? e.slice(3) : mt(e.slice(2)), t];
}
let gn = 0;
const Xr = Promise.resolve(),
	Qr = () => gn || (Xr.then(() => (gn = 0)), (gn = Date.now()));
function Zr(e, t) {
	const n = (o) => {
		if (!o._vts) o._vts = Date.now();
		else if (o._vts <= n.attached) return;
		$e(el(o, n.value), t, 5, [o]);
	};
	return (n.value = e), (n.attached = Qr()), n;
}
function el(e, t) {
	if (k(t)) {
		const n = e.stopImmediatePropagation;
		return (
			(e.stopImmediatePropagation = () => {
				n.call(e), (e._stopped = !0);
			}),
			t.map((o) => (s) => !s._stopped && o && o(s))
		);
	} else return t;
}
const Po = (e) =>
		e.charCodeAt(0) === 111 &&
		e.charCodeAt(1) === 110 &&
		e.charCodeAt(2) > 96 &&
		e.charCodeAt(2) < 123,
	tl = (e, t, n, o, s, i, r, c, u) => {
		const f = s === "svg";
		t === "class"
			? Hr(e, o, f)
			: t === "style"
			? qr(e, n, o)
			: Wt(t)
			? jn(t) || Gr(e, t, n, o, r)
			: (
					t[0] === "."
						? ((t = t.slice(1)), !0)
						: t[0] === "^"
						? ((t = t.slice(1)), !1)
						: nl(e, t, o, f)
			  )
			? Kr(e, t, o, i, r, c, u)
			: (t === "true-value"
					? (e._trueValue = o)
					: t === "false-value" && (e._falseValue = o),
			  Br(e, t, o, f));
	};
function nl(e, t, n, o) {
	if (o)
		return !!(
			t === "innerHTML" ||
			t === "textContent" ||
			(t in e && Po(t) && $(n))
		);
	if (
		t === "spellcheck" ||
		t === "draggable" ||
		t === "translate" ||
		t === "form" ||
		(t === "list" && e.tagName === "INPUT") ||
		(t === "type" && e.tagName === "TEXTAREA")
	)
		return !1;
	if (t === "width" || t === "height") {
		const s = e.tagName;
		if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
			return !1;
	}
	return Po(t) && ie(n) ? !1 : t in e;
}
const ol = le({ patchProp: tl }, Nr);
let jo;
function sl() {
	return jo || (jo = fr(ol));
}
const il = (...e) => {
	const t = sl().createApp(...e),
		{ mount: n } = t;
	return (
		(t.mount = (o) => {
			const s = ll(o);
			if (!s) return;
			const i = t._component;
			!$(i) && !i.render && !i.template && (i.template = s.innerHTML),
				(s.innerHTML = "");
			const r = n(s, !1, rl(s));
			return (
				s instanceof Element &&
					(s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
				r
			);
		}),
		t
	);
};
function rl(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement)
		return "mathml";
}
function ll(e) {
	return ie(e) ? document.querySelector(e) : e;
}
const at = (e, t) => {
		const n = e.__vccOpts || e;
		for (const [o, s] of t) n[o] = s;
		return n;
	},
	cl = {
		name: "Header",
		data() {
			return {
				underlineWidth: null,
				underlineLeft: null,
				underlineRight: null,
				languageSelected: window.localStorage.getItem("languageSelected"),
			};
		},
		methods: {
			switchActiveLink({ target: e }) {
				this.scrollViewport(e.innerText);
				const { width: t, left: n, right: o } = e.getBoundingClientRect();
				(this.underlineWidth = t + "px"),
					(this.underlineLeft = n + "px"),
					(this.underlineRight = o + "px");
				let s = document.querySelectorAll(".nav-link");
				for (let i of s)
					i.innerText === e.innerText
						? i.classList.add("active-link")
						: i.classList.remove("active-link");
			},
			scrollViewport(e) {
				switch (e) {
					case "Projetos":
						document
							.querySelector(".oclock")
							.scrollIntoView({ behavior: "smooth" });
						break;
					case "Info":
						document
							.querySelector(".info-area")
							.scrollIntoView({ behavior: "smooth" });
						break;
				}
			},
			changeLanguage() {
				const e = document.getElementById("pt"),
					t = document.getElementById("en");
				this.languageSelected === "PT"
					? (t.classList.add("language-selected"),
					  window.localStorage.setItem("languageSelected", "EN"),
					  (this.languageSelected = "EN"),
					  e.classList.remove("language-selected"))
					: (e.classList.add("language-selected"),
					  window.localStorage.setItem("languageSelected", "PT"),
					  (this.languageSelected = "PT"),
					  t.classList.remove("language-selected")),
					this.emitter.emit("Language changed"),
					setTimeout(() => {
						this.organizeUnderlinePosition();
					}, 300);
			},
			organizeUnderlinePosition() {
				switch (document.location.hash) {
					case "#info":
						document.getElementById("info").click();
						break;
					case "#projects":
						document.getElementById("projects").click();
						break;
					case "#contact":
						document.getElementById("contact").click();
						break;
					default:
						document.getElementById("info").click();
				}
			},
		},
		computed: {
			underlineStyle() {
				return {
					border: "2px solid var(--action-color)",
					display: "flex",
					position: "fixed",
					width: this.underlineWidth || "40.921875px",
					left: this.underlineLeft || "48px",
					right: this.underlineRight || "88.921875px",
					transition: "all .5s",
					borderRadius: "1rem",
				};
			},
			navLinks() {
				return [
					{ text: "Info", href: "#info", id: "info" },
					{
						text: this.languageSelected === "PT" ? "Projetos" : "Projects",
						href: "#projects",
						id: "projects",
					},
				];
			},
		},
		beforeCreate() {
			window.localStorage.setItem("languageSelected", "PT");
		},
		mounted() {
			this.organizeUnderlinePosition(),
				window.addEventListener("resize", this.organizeUnderlinePosition),
				window.addEventListener("hashchange", this.organizeUnderlinePosition);
		},
	},
	al = { class: "header" },
	ul = ["id", "href"],
	fl = { id: "language-switcher" };
function dl(e, t, n, o, s, i) {
	return (
		ze(),
		Be("header", al, [
			T("nav", null, [
				T("ul", null, [
					(ze(!0),
					Be(
						Le,
						null,
						Yi(
							i.navLinks,
							(r) => (
								ze(),
								Be("li", { key: r.id }, [
									T(
										"a",
										{
											onClick:
												t[0] ||
												(t[0] = (...c) =>
													i.switchActiveLink && i.switchActiveLink(...c)),
											class: "nav-link",
											id: r.id,
											href: r.href,
										},
										Pe(r.text),
										9,
										ul
									),
								])
							)
						),
						128
					)),
					T("span", { style: Xt(i.underlineStyle) }, null, 4),
				]),
			]),
			T("div", fl, [
				T(
					"button",
					{
						onClick:
							t[1] ||
							(t[1] = (...r) => i.changeLanguage && i.changeLanguage(...r)),
						id: "pt",
						class: "languague-option language-selected",
					},
					" PT "
				),
				T(
					"button",
					{
						onClick:
							t[2] ||
							(t[2] = (...r) => i.changeLanguage && i.changeLanguage(...r)),
						id: "en",
						class: "languague-option",
					},
					" EN "
				),
			]),
		])
	);
}
const pl = at(cl, [
		["render", dl],
		["__scopeId", "data-v-2265abc6"],
	]),
	hl = "./assets/ey-D9B16O3g.jpg",
	gl = "./assets/linkedin-icon-BudYSSHB.png",
	ml = "./assets/github-icon-DrYpojTv.png",
	_l = {
		name: "Index",
		data() {
			return {
				languageSelected: window.localStorage.getItem("languageSelected"),
				en: {
					bioDescription: "Fullstack developer",
					greeting: "Hi",
					introduction: "my name is Fernando!",
					description:
						"Fullstack developer passionate about all stages of system development, from prototyping to production support",
				},
				pt: {
					bioDescription: "Desenvolvedor fullstack",
					greeting: "Olá",
					introduction: "eu sou o Fernando!",
					description:
						"Desenvolvedor Fullstack apaixonado por todas as fases do desenvolvimento de sistemas, desde a prototipação até o suporte em produção",
				},
			};
		},
		beforeCreate() {
			this.emitter.on(
				"Language changed",
				() =>
					(this.languageSelected =
						window.localStorage.getItem("languageSelected"))
			);
		},
	},
	Os = (e) => (jt("data-v-2b3da6c8"), (e = e()), It(), e),
	bl = { "data-aos": "zoom-in" },
	vl = { id: "info", class: "container info-area index" },
	yl = { class: "left" },
	wl = { class: "greeting" },
	xl = { class: "introduction" },
	Sl = Os(() =>
		T("div", { class: "holds-picture" }, [T("img", { src: hl, alt: "" })], -1)
	),
	El = { class: "bio" },
	Ol = Os(() => T("p", { class: "name" }, "Fernando Santos Ferreira", -1)),
	Tl = { class: "description" },
	Cl = { class: "text-center" },
	Pl = xr(
		'<div class="social-links-div" data-v-2b3da6c8><a class="social-link" href="https://www.linkedin.com/in/fernando-ferreira-52319918b/" data-v-2b3da6c8><img class="social-link-icon" src="' +
			gl +
			'" alt="Link para o perfil no LinkedIn" data-v-2b3da6c8></a><a class="social-link github" href="https://github.com/ffersants" data-v-2b3da6c8><img class="social-link-icon" src="' +
			ml +
			'" alt="Link para o perfil no LinkedIn" data-v-2b3da6c8></a></div>',
		1
	),
	jl = { class: "right" },
	Il = { class: "greeting" },
	Al = { class: "introduction" },
	Ml = { class: "description" },
	Ll = { class: "detailed-description" };
function Rl(e, t, n, o, s, i) {
	const r = ot("font-awesome-icon");
	return (
		ze(),
		Be("section", bl, [
			T("section", vl, [
				T("div", yl, [
					T(
						"p",
						wl,
						Pe(s.languageSelected === "PT" ? s.pt.greeting : s.en.greeting) +
							", ",
						1
					),
					T(
						"p",
						xl,
						Pe(
							s.languageSelected === "PT"
								? s.pt.introduction
								: s.en.introduction
						),
						1
					),
					Sl,
					T("div", El, [
						Ol,
						T("p", Tl, [
							T(
								"pre",
								Cl,
								Pe(
									s.languageSelected === "PT"
										? s.pt.bioDescription
										: s.en.bioDescription
								),
								1
							),
						]),
					]),
					Pl,
				]),
				T("div", jl, [
					T(
						"p",
						Il,
						Pe(s.languageSelected === "PT" ? s.pt.greeting : s.en.greeting) +
							", ",
						1
					),
					T(
						"p",
						Al,
						Pe(
							s.languageSelected === "PT"
								? s.pt.introduction
								: s.en.introduction
						),
						1
					),
					T(
						"p",
						Ml,
						Pe(
							s.languageSelected === "PT" ? s.pt.description : s.en.description
						),
						1
					),
					T(
						"p",
						Ll,
						Pe(
							s.languageSelected === "PT"
								? s.pt.detailedDescription
								: s.en.detailedDescription
						),
						1
					),
				]),
				T("footer", null, [
					T("i", null, [
						be(r, {
							class: "down",
							rotation: "180",
							size: "4x",
							icon: "sort-up",
						}),
					]),
				]),
			]),
		])
	);
}
const kl = at(_l, [
		["render", Rl],
		["__scopeId", "data-v-2b3da6c8"],
	]),
	$l = "./assets/oclock-DkvyUSlC.png",
	Nl = {
		name: "OClock",
		data() {
			return {
				languageSelected: window.localStorage.getItem("languageSelected"),
			};
		},
		beforeCreate() {
			this.emitter.on(
				"Language changed",
				() =>
					(this.languageSelected =
						window.localStorage.getItem("languageSelected"))
			);
		},
	},
	Ts = (e) => (jt("data-v-02eed223"), (e = e()), It(), e),
	Fl = {
		id: "projects",
		class: "container oclock project",
		"data-aos-anchor": ".oclock",
		"data-aos-once": "false",
		"data-aos": "zoom-in",
	},
	Hl = Ts(() =>
		T(
			"header",
			null,
			[
				T("p", { class: "projectTitle" }, " OClock "),
				T(
					"p",
					{ class: "projectTecnologies" },
					" AWS EC2 | .NET CORE | POSTGRESQL | REACTJS | MUI "
				),
			],
			-1
		)
	),
	Dl = Ts(() =>
		T("div", null, [T("img", { width: "500", src: $l, alt: "" })], -1)
	),
	Ul = { class: "project-description" };
function Vl(e, t, n, o, s, i) {
	return (
		ze(),
		Be("section", Fl, [
			Hl,
			T("main", null, [
				Dl,
				T(
					"p",
					Ul,
					Pe(
						s.languageSelected === "PT"
							? `Um Sistema para gerenciamento de horas trabalhadas
				com recurso de preenchimento automático da folha de ponto utilizando a fonte
				do usuário, que é a sua letra cursiva`
							: `A system for managing worked hours
				with an automatic timesheet filling feature using the user's handwriting
				font`
					),
					1
				),
			]),
		])
	);
}
const ql = at(Nl, [
		["render", Vl],
		["__scopeId", "data-v-02eed223"],
	]),
	zl = "./assets/jaqueline-soares-CnHTLrEU.png",
	Bl = {
		name: "JaquelinePsicologia",
		data() {
			return {
				languageSelected: window.localStorage.getItem("languageSelected"),
			};
		},
		beforeCreate() {
			this.emitter.on(
				"Language changed",
				() =>
					(this.languageSelected =
						window.localStorage.getItem("languageSelected"))
			);
		},
	},
	Cs = (e) => (jt("data-v-7639b306"), (e = e()), It(), e),
	Kl = {
		id: "projects",
		class: "container jaqueline-psicologia project",
		"data-aos-anchor": ".jaqueline-psicologia",
		"data-aos-once": "false",
		"data-aos": "zoom-in",
	},
	Wl = Cs(() =>
		T(
			"header",
			null,
			[
				T(
					"p",
					{ class: "projectTitle" },
					" Jaqueline Soares - Psicóloga Clínica "
				),
				T(
					"p",
					{ class: "projectTecnologies" },
					" REACTJS | VERCEL | NEXTJS | REACT MOTION "
				),
				T("div", { style: { "margin-top": "12px" } }, [
					T(
						"a",
						{
							style: { color: "#00ffba" },
							href: "https://www.jaquelinesoarespsi.com/",
							target: "_blank",
						},
						" Link "
					),
				]),
			],
			-1
		)
	),
	Jl = Cs(() =>
		T(
			"div",
			{ style: { "margin-top": "20px", "margin-bottom": "20px" } },
			[T("img", { width: "500", src: zl, alt: "" })],
			-1
		)
	),
	Gl = { class: "project-description" };
function Yl(e, t, n, o, s, i) {
	return (
		ze(),
		Be("section", Kl, [
			Wl,
			T("main", null, [
				Jl,
				T(
					"p",
					Gl,
					Pe(
						s.languageSelected === "PT"
							? "O site Jaqueline Soares - Psicóloga Clínica foi desenvolvido utilizando ReactJS, Next.js, Vercel e React Motion. Desde a prototipação do design até a construção de toda a estrutura da página, foram aplicadas técnicas para criar uma experiência visual serena e acolhedora, garantindo uma navegação fluida e eficiente"
							: "The Jaqueline Soares - Psychologist Clinic website was developed using ReactJS, Next.js, Vercel and React Motion. Techniques were applied from the design prototyping to the construction of the entire page structure to create a serene and welcoming visual experience, ensuring smooth and efficient navigation"
					),
					1
				),
			]),
		])
	);
}
const Xl = at(Bl, [
		["render", Yl],
		["__scopeId", "data-v-7639b306"],
	]),
	Ql = "./assets/siscoffee-1-DP8nG1oa.png",
	Zl = "./assets/siscoffee-2-Vz8n6RV4.png",
	ec = {
		name: "Siscoffee",
		data() {
			return {
				languageSelected: window.localStorage.getItem("languageSelected"),
			};
		},
		beforeCreate() {
			this.emitter.on(
				"Language changed",
				() =>
					(this.languageSelected =
						window.localStorage.getItem("languageSelected"))
			);
		},
	},
	Ps = (e) => (jt("data-v-70c7ceb5"), (e = e()), It(), e),
	tc = {
		class: "container siscoffee project",
		"data-aos-anchor": ".siscoffee",
		"data-aos-once": "false",
		"data-aos": "zoom-in",
	},
	nc = Ps(() =>
		T(
			"header",
			null,
			[
				T("p", { class: "projectTitle" }, "Siscoffee"),
				T(
					"p",
					{ class: "projectTecnologies" },
					" IIS | NODE.JS | POSTGRESQL | VUE.JS | CSS "
				),
				T("div", { style: { "margin-top": "12px" } }, [
					T(
						"a",
						{
							style: { color: "#00ffba" },
							href: "https://siscoffee.vercel.app/",
							target: "_blank",
						},
						" Link "
					),
				]),
			],
			-1
		)
	),
	oc = Ps(() =>
		T(
			"div",
			null,
			[
				T("img", { width: "500", src: Ql, alt: "" }),
				T("img", { width: "160", src: Zl, alt: "" }),
			],
			-1
		)
	),
	sc = { class: "project-description" };
function ic(e, t, n, o, s, i) {
	return (
		ze(),
		Be("section", tc, [
			nc,
			T("main", null, [
				oc,
				T(
					"p",
					sc,
					Pe(
						s.languageSelected === "PT"
							? "Controlar quem deve pagar o café do mês em uma seção de trabalho cheia de fãs de café pode ser bastante trabalhoso, não é mesmo? O Siscoffee foi criado para simplificar esse controle e garantir que nunca falte café no estoque"
							: "Managing who should pay for the coffee of the month in a coffee-loving work section can be quite laborious, right? Siscoffee was created to simplify this control and ensure that there is never a shortage of coffee in stock"
					),
					1
				),
			]),
		])
	);
}
const rc = at(ec, [
		["render", ic],
		["__scopeId", "data-v-70c7ceb5"],
	]),
	lc = "./assets/ditec-ajuda-XBOvoag7.png",
	cc = {
		name: "DitecAjuda",
		data() {
			return {
				languageSelected: window.localStorage.getItem("languageSelected"),
			};
		},
		beforeCreate() {
			this.emitter.on(
				"Language changed",
				() =>
					(this.languageSelected =
						window.localStorage.getItem("languageSelected"))
			);
		},
	},
	js = (e) => (jt("data-v-b1a057d7"), (e = e()), It(), e),
	ac = {
		class: "container ditec-ajuda project",
		"data-aos-anchor": ".ditec-ajuda",
		"data-aos-once": "false",
		"data-aos": "zoom-in",
	},
	uc = js(() =>
		T(
			"header",
			null,
			[
				T("p", { class: "projectTitle" }, "DITEC Ajuda"),
				T(
					"p",
					{ class: "projectTecnologies" },
					" .NET CORE | POSTGRESQL | DOCKER | KAFKA | REACT.JS "
				),
			],
			-1
		)
	),
	fc = js(() =>
		T("div", null, [T("img", { width: "500", src: lc, alt: "" })], -1)
	),
	dc = { class: "project-description" };
function pc(e, t, n, o, s, i) {
	return (
		ze(),
		Be("section", ac, [
			uc,
			T("main", null, [
				fc,
				T(
					"p",
					dc,
					Pe(
						s.languageSelected === "PT"
							? "Solução para possibilitar melhor serviço de suporte, onde o usuário encontra informações a partir de artigos escritos pelo time de suporte, podendo também entrar em contato com o time via chat, e também, obter notificações sobre incidentes que a equipe está tratando"
							: "Solution to enable better support service, where users find information from articles written by the support team, and users can also contact the team via chat and receive notifications about incidents the team is handling"
					),
					1
				),
			]),
		])
	);
}
const hc = at(cc, [
	["render", pc],
	["__scopeId", "data-v-b1a057d7"],
]);
var gc =
	typeof globalThis < "u"
		? globalThis
		: typeof window < "u"
		? window
		: typeof global < "u"
		? global
		: typeof self < "u"
		? self
		: {};
function mc(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
		? e.default
		: e;
}
var Is = { exports: {} };
(function (e, t) {
	(function (n, o) {
		e.exports = o();
	})(gc, function () {
		return (function (n) {
			function o(i) {
				if (s[i]) return s[i].exports;
				var r = (s[i] = { exports: {}, id: i, loaded: !1 });
				return (
					n[i].call(r.exports, r, r.exports, o), (r.loaded = !0), r.exports
				);
			}
			var s = {};
			return (o.m = n), (o.c = s), (o.p = "dist/"), o(0);
		})([
			function (n, o, s) {
				function i(A) {
					return A && A.__esModule ? A : { default: A };
				}
				var r =
						Object.assign ||
						function (A) {
							for (var se = 1; se < arguments.length; se++) {
								var W = arguments[se];
								for (var q in W)
									Object.prototype.hasOwnProperty.call(W, q) && (A[q] = W[q]);
							}
							return A;
						},
					c = s(1),
					u = (i(c), s(6)),
					f = i(u),
					p = s(7),
					h = i(p),
					b = s(8),
					x = i(b),
					I = s(9),
					L = i(I),
					K = s(10),
					J = i(K),
					ee = s(11),
					V = i(ee),
					G = s(14),
					oe = i(G),
					M = [],
					ce = !1,
					H = {
						offset: 120,
						delay: 0,
						easing: "ease",
						duration: 400,
						disable: !1,
						once: !1,
						startEvent: "DOMContentLoaded",
						throttleDelay: 99,
						debounceDelay: 50,
						disableMutationObserver: !1,
					},
					he = function () {
						var A =
							arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
						if ((A && (ce = !0), ce))
							return (M = (0, V.default)(M, H)), (0, J.default)(M, H.once), M;
					},
					ae = function () {
						(M = (0, oe.default)()), he();
					},
					C = function () {
						M.forEach(function (A, se) {
							A.node.removeAttribute("data-aos"),
								A.node.removeAttribute("data-aos-easing"),
								A.node.removeAttribute("data-aos-duration"),
								A.node.removeAttribute("data-aos-delay");
						});
					},
					E = function (A) {
						return (
							A === !0 ||
							(A === "mobile" && L.default.mobile()) ||
							(A === "phone" && L.default.phone()) ||
							(A === "tablet" && L.default.tablet()) ||
							(typeof A == "function" && A() === !0)
						);
					},
					F = function (A) {
						(H = r(H, A)), (M = (0, oe.default)());
						var se = document.all && !window.atob;
						return E(H.disable) || se
							? C()
							: (H.disableMutationObserver ||
									x.default.isSupported() ||
									(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
									(H.disableMutationObserver = !0)),
							  document
									.querySelector("body")
									.setAttribute("data-aos-easing", H.easing),
							  document
									.querySelector("body")
									.setAttribute("data-aos-duration", H.duration),
							  document
									.querySelector("body")
									.setAttribute("data-aos-delay", H.delay),
							  H.startEvent === "DOMContentLoaded" &&
							  ["complete", "interactive"].indexOf(document.readyState) > -1
									? he(!0)
									: H.startEvent === "load"
									? window.addEventListener(H.startEvent, function () {
											he(!0);
									  })
									: document.addEventListener(H.startEvent, function () {
											he(!0);
									  }),
							  window.addEventListener(
									"resize",
									(0, h.default)(he, H.debounceDelay, !0)
							  ),
							  window.addEventListener(
									"orientationchange",
									(0, h.default)(he, H.debounceDelay, !0)
							  ),
							  window.addEventListener(
									"scroll",
									(0, f.default)(function () {
										(0, J.default)(M, H.once);
									}, H.throttleDelay)
							  ),
							  H.disableMutationObserver || x.default.ready("[data-aos]", ae),
							  M);
					};
				n.exports = { init: F, refresh: he, refreshHard: ae };
			},
			function (n, o) {},
			,
			,
			,
			,
			function (n, o) {
				(function (s) {
					function i(E, F, A) {
						function se(a) {
							var d = ve,
								g = Te;
							return (ve = Te = void 0), (me = a), (te = E.apply(g, d));
						}
						function W(a) {
							return (me = a), (Q = setTimeout(ge, F)), Ce ? se(a) : te;
						}
						function q(a) {
							var d = a - fe,
								g = a - me,
								m = F - d;
							return Se ? ae(m, ne - g) : m;
						}
						function D(a) {
							var d = a - fe,
								g = a - me;
							return fe === void 0 || d >= F || d < 0 || (Se && g >= ne);
						}
						function ge() {
							var a = C();
							return D(a) ? Ve(a) : void (Q = setTimeout(ge, q(a)));
						}
						function Ve(a) {
							return (Q = void 0), l && ve ? se(a) : ((ve = Te = void 0), te);
						}
						function Ie() {
							Q !== void 0 && clearTimeout(Q),
								(me = 0),
								(ve = fe = Te = Q = void 0);
						}
						function ue() {
							return Q === void 0 ? te : Ve(C());
						}
						function xe() {
							var a = C(),
								d = D(a);
							if (((ve = arguments), (Te = this), (fe = a), d)) {
								if (Q === void 0) return W(fe);
								if (Se) return (Q = setTimeout(ge, F)), se(fe);
							}
							return Q === void 0 && (Q = setTimeout(ge, F)), te;
						}
						var ve,
							Te,
							ne,
							te,
							Q,
							fe,
							me = 0,
							Ce = !1,
							Se = !1,
							l = !0;
						if (typeof E != "function") throw new TypeError(b);
						return (
							(F = p(F) || 0),
							c(A) &&
								((Ce = !!A.leading),
								(Se = "maxWait" in A),
								(ne = Se ? he(p(A.maxWait) || 0, F) : ne),
								(l = "trailing" in A ? !!A.trailing : l)),
							(xe.cancel = Ie),
							(xe.flush = ue),
							xe
						);
					}
					function r(E, F, A) {
						var se = !0,
							W = !0;
						if (typeof E != "function") throw new TypeError(b);
						return (
							c(A) &&
								((se = "leading" in A ? !!A.leading : se),
								(W = "trailing" in A ? !!A.trailing : W)),
							i(E, F, { leading: se, maxWait: F, trailing: W })
						);
					}
					function c(E) {
						var F = typeof E > "u" ? "undefined" : h(E);
						return !!E && (F == "object" || F == "function");
					}
					function u(E) {
						return !!E && (typeof E > "u" ? "undefined" : h(E)) == "object";
					}
					function f(E) {
						return (
							(typeof E > "u" ? "undefined" : h(E)) == "symbol" ||
							(u(E) && H.call(E) == I)
						);
					}
					function p(E) {
						if (typeof E == "number") return E;
						if (f(E)) return x;
						if (c(E)) {
							var F = typeof E.valueOf == "function" ? E.valueOf() : E;
							E = c(F) ? F + "" : F;
						}
						if (typeof E != "string") return E === 0 ? E : +E;
						E = E.replace(L, "");
						var A = J.test(E);
						return A || ee.test(E)
							? V(E.slice(2), A ? 2 : 8)
							: K.test(E)
							? x
							: +E;
					}
					var h =
							typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
								? function (E) {
										return typeof E;
								  }
								: function (E) {
										return E &&
											typeof Symbol == "function" &&
											E.constructor === Symbol &&
											E !== Symbol.prototype
											? "symbol"
											: typeof E;
								  },
						b = "Expected a function",
						x = NaN,
						I = "[object Symbol]",
						L = /^\s+|\s+$/g,
						K = /^[-+]0x[0-9a-f]+$/i,
						J = /^0b[01]+$/i,
						ee = /^0o[0-7]+$/i,
						V = parseInt,
						G =
							(typeof s > "u" ? "undefined" : h(s)) == "object" &&
							s &&
							s.Object === Object &&
							s,
						oe =
							(typeof self > "u" ? "undefined" : h(self)) == "object" &&
							self &&
							self.Object === Object &&
							self,
						M = G || oe || Function("return this")(),
						ce = Object.prototype,
						H = ce.toString,
						he = Math.max,
						ae = Math.min,
						C = function () {
							return M.Date.now();
						};
					n.exports = r;
				}).call(
					o,
					(function () {
						return this;
					})()
				);
			},
			function (n, o) {
				(function (s) {
					function i(C, E, F) {
						function A(l) {
							var a = xe,
								d = ve;
							return (xe = ve = void 0), (fe = l), (ne = C.apply(d, a));
						}
						function se(l) {
							return (fe = l), (te = setTimeout(D, E)), me ? A(l) : ne;
						}
						function W(l) {
							var a = l - Q,
								d = l - fe,
								g = E - a;
							return Ce ? he(g, Te - d) : g;
						}
						function q(l) {
							var a = l - Q,
								d = l - fe;
							return Q === void 0 || a >= E || a < 0 || (Ce && d >= Te);
						}
						function D() {
							var l = ae();
							return q(l) ? ge(l) : void (te = setTimeout(D, W(l)));
						}
						function ge(l) {
							return (te = void 0), Se && xe ? A(l) : ((xe = ve = void 0), ne);
						}
						function Ve() {
							te !== void 0 && clearTimeout(te),
								(fe = 0),
								(xe = Q = ve = te = void 0);
						}
						function Ie() {
							return te === void 0 ? ne : ge(ae());
						}
						function ue() {
							var l = ae(),
								a = q(l);
							if (((xe = arguments), (ve = this), (Q = l), a)) {
								if (te === void 0) return se(Q);
								if (Ce) return (te = setTimeout(D, E)), A(Q);
							}
							return te === void 0 && (te = setTimeout(D, E)), ne;
						}
						var xe,
							ve,
							Te,
							ne,
							te,
							Q,
							fe = 0,
							me = !1,
							Ce = !1,
							Se = !0;
						if (typeof C != "function") throw new TypeError(h);
						return (
							(E = f(E) || 0),
							r(F) &&
								((me = !!F.leading),
								(Ce = "maxWait" in F),
								(Te = Ce ? H(f(F.maxWait) || 0, E) : Te),
								(Se = "trailing" in F ? !!F.trailing : Se)),
							(ue.cancel = Ve),
							(ue.flush = Ie),
							ue
						);
					}
					function r(C) {
						var E = typeof C > "u" ? "undefined" : p(C);
						return !!C && (E == "object" || E == "function");
					}
					function c(C) {
						return !!C && (typeof C > "u" ? "undefined" : p(C)) == "object";
					}
					function u(C) {
						return (
							(typeof C > "u" ? "undefined" : p(C)) == "symbol" ||
							(c(C) && ce.call(C) == x)
						);
					}
					function f(C) {
						if (typeof C == "number") return C;
						if (u(C)) return b;
						if (r(C)) {
							var E = typeof C.valueOf == "function" ? C.valueOf() : C;
							C = r(E) ? E + "" : E;
						}
						if (typeof C != "string") return C === 0 ? C : +C;
						C = C.replace(I, "");
						var F = K.test(C);
						return F || J.test(C)
							? ee(C.slice(2), F ? 2 : 8)
							: L.test(C)
							? b
							: +C;
					}
					var p =
							typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
								? function (C) {
										return typeof C;
								  }
								: function (C) {
										return C &&
											typeof Symbol == "function" &&
											C.constructor === Symbol &&
											C !== Symbol.prototype
											? "symbol"
											: typeof C;
								  },
						h = "Expected a function",
						b = NaN,
						x = "[object Symbol]",
						I = /^\s+|\s+$/g,
						L = /^[-+]0x[0-9a-f]+$/i,
						K = /^0b[01]+$/i,
						J = /^0o[0-7]+$/i,
						ee = parseInt,
						V =
							(typeof s > "u" ? "undefined" : p(s)) == "object" &&
							s &&
							s.Object === Object &&
							s,
						G =
							(typeof self > "u" ? "undefined" : p(self)) == "object" &&
							self &&
							self.Object === Object &&
							self,
						oe = V || G || Function("return this")(),
						M = Object.prototype,
						ce = M.toString,
						H = Math.max,
						he = Math.min,
						ae = function () {
							return oe.Date.now();
						};
					n.exports = i;
				}).call(
					o,
					(function () {
						return this;
					})()
				);
			},
			function (n, o) {
				function s(p) {
					var h = void 0,
						b = void 0;
					for (h = 0; h < p.length; h += 1)
						if (
							((b = p[h]),
							(b.dataset && b.dataset.aos) || (b.children && s(b.children)))
						)
							return !0;
					return !1;
				}
				function i() {
					return (
						window.MutationObserver ||
						window.WebKitMutationObserver ||
						window.MozMutationObserver
					);
				}
				function r() {
					return !!i();
				}
				function c(p, h) {
					var b = window.document,
						x = i(),
						I = new x(u);
					(f = h),
						I.observe(b.documentElement, {
							childList: !0,
							subtree: !0,
							removedNodes: !0,
						});
				}
				function u(p) {
					p &&
						p.forEach(function (h) {
							var b = Array.prototype.slice.call(h.addedNodes),
								x = Array.prototype.slice.call(h.removedNodes),
								I = b.concat(x);
							if (s(I)) return f();
						});
				}
				Object.defineProperty(o, "__esModule", { value: !0 });
				var f = function () {};
				o.default = { isSupported: r, ready: c };
			},
			function (n, o) {
				function s(b, x) {
					if (!(b instanceof x))
						throw new TypeError("Cannot call a class as a function");
				}
				function i() {
					return navigator.userAgent || navigator.vendor || window.opera || "";
				}
				Object.defineProperty(o, "__esModule", { value: !0 });
				var r = (function () {
						function b(x, I) {
							for (var L = 0; L < I.length; L++) {
								var K = I[L];
								(K.enumerable = K.enumerable || !1),
									(K.configurable = !0),
									"value" in K && (K.writable = !0),
									Object.defineProperty(x, K.key, K);
							}
						}
						return function (x, I, L) {
							return I && b(x.prototype, I), L && b(x, L), x;
						};
					})(),
					c =
						/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
					u =
						/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
					f =
						/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
					p =
						/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
					h = (function () {
						function b() {
							s(this, b);
						}
						return (
							r(b, [
								{
									key: "phone",
									value: function () {
										var x = i();
										return !(!c.test(x) && !u.test(x.substr(0, 4)));
									},
								},
								{
									key: "mobile",
									value: function () {
										var x = i();
										return !(!f.test(x) && !p.test(x.substr(0, 4)));
									},
								},
								{
									key: "tablet",
									value: function () {
										return this.mobile() && !this.phone();
									},
								},
							]),
							b
						);
					})();
				o.default = new h();
			},
			function (n, o) {
				Object.defineProperty(o, "__esModule", { value: !0 });
				var s = function (r, c, u) {
						var f = r.node.getAttribute("data-aos-once");
						c > r.position
							? r.node.classList.add("aos-animate")
							: typeof f < "u" &&
							  (f === "false" || (!u && f !== "true")) &&
							  r.node.classList.remove("aos-animate");
					},
					i = function (r, c) {
						var u = window.pageYOffset,
							f = window.innerHeight;
						r.forEach(function (p, h) {
							s(p, f + u, c);
						});
					};
				o.default = i;
			},
			function (n, o, s) {
				function i(f) {
					return f && f.__esModule ? f : { default: f };
				}
				Object.defineProperty(o, "__esModule", { value: !0 });
				var r = s(12),
					c = i(r),
					u = function (f, p) {
						return (
							f.forEach(function (h, b) {
								h.node.classList.add("aos-init"),
									(h.position = (0, c.default)(h.node, p.offset));
							}),
							f
						);
					};
				o.default = u;
			},
			function (n, o, s) {
				function i(f) {
					return f && f.__esModule ? f : { default: f };
				}
				Object.defineProperty(o, "__esModule", { value: !0 });
				var r = s(13),
					c = i(r),
					u = function (f, p) {
						var h = 0,
							b = 0,
							x = window.innerHeight,
							I = {
								offset: f.getAttribute("data-aos-offset"),
								anchor: f.getAttribute("data-aos-anchor"),
								anchorPlacement: f.getAttribute("data-aos-anchor-placement"),
							};
						switch (
							(I.offset && !isNaN(I.offset) && (b = parseInt(I.offset)),
							I.anchor &&
								document.querySelectorAll(I.anchor) &&
								(f = document.querySelectorAll(I.anchor)[0]),
							(h = (0, c.default)(f).top),
							I.anchorPlacement)
						) {
							case "top-bottom":
								break;
							case "center-bottom":
								h += f.offsetHeight / 2;
								break;
							case "bottom-bottom":
								h += f.offsetHeight;
								break;
							case "top-center":
								h += x / 2;
								break;
							case "bottom-center":
								h += x / 2 + f.offsetHeight;
								break;
							case "center-center":
								h += x / 2 + f.offsetHeight / 2;
								break;
							case "top-top":
								h += x;
								break;
							case "bottom-top":
								h += f.offsetHeight + x;
								break;
							case "center-top":
								h += f.offsetHeight / 2 + x;
						}
						return I.anchorPlacement || I.offset || isNaN(p) || (b = p), h + b;
					};
				o.default = u;
			},
			function (n, o) {
				Object.defineProperty(o, "__esModule", { value: !0 });
				var s = function (i) {
					for (
						var r = 0, c = 0;
						i && !isNaN(i.offsetLeft) && !isNaN(i.offsetTop);

					)
						(r += i.offsetLeft - (i.tagName != "BODY" ? i.scrollLeft : 0)),
							(c += i.offsetTop - (i.tagName != "BODY" ? i.scrollTop : 0)),
							(i = i.offsetParent);
					return { top: c, left: r };
				};
				o.default = s;
			},
			function (n, o) {
				Object.defineProperty(o, "__esModule", { value: !0 });
				var s = function (i) {
					return (
						(i = i || document.querySelectorAll("[data-aos]")),
						Array.prototype.map.call(i, function (r) {
							return { node: r };
						})
					);
				};
				o.default = s;
			},
		]);
	});
})(Is);
var _c = Is.exports;
const bc = mc(_c),
	vc = {
		name: "App",
		data() {
			return {};
		},
		components: {
			Header: pl,
			Index: kl,
			Oclock: ql,
			Siscoffee: rc,
			DitecAjuda: hc,
			JaquelinePsicologia: Xl,
		},
		mounted() {
			bc.init();
		},
	},
	yc = { class: "content" },
	wc = { class: "content", id: "projects-area" };
function xc(e, t, n, o, s, i) {
	const r = ot("Header"),
		c = ot("Index"),
		u = ot("JaquelinePsicologia"),
		f = ot("Oclock"),
		p = ot("Siscoffee"),
		h = ot("DitecAjuda");
	return (
		ze(),
		Be(
			Le,
			null,
			[
				be(r),
				T("div", yc, [be(c), T("div", wc, [be(u), be(f), be(p), be(h)])]),
			],
			64
		)
	);
}
const Sc = at(vc, [["render", xc]]),
	Ec = Ms(),
	As = il(Sc);
As.config.globalProperties.emitter = Ec;
As.mount("#app");
