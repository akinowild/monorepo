function u(t, e) {
  let n = 1 / 0, r = -1, a = -1 / 0, s = -1;
  for (let o = 0; o < t.length; o++) {
    const l = parseFloat(t[o]);
    l < n && (n = l, r = o), l > a && (a = l, s = o);
  }
  return e === "min" ? { value: n, index: r } : e === "max" ? { value: a, index: s } : null;
}
function c(t) {
  return (t.reduce((r, a) => r * 1 + a * 1, 0) / t.length).toFixed(2);
}
const i = (t) => [...new Set(t)], d = (t) => Array.isArray(t) && t.length > 0, f = (t, e) => [...t, ...e];
function y(t) {
  return t.map((e) => {
    var n;
    return {
      name: e == null ? void 0 : e.name,
      url: (n = e == null ? void 0 : e.response) == null ? void 0 : n.data
    };
  });
}
function g(t, e) {
  return t.map((n) => n.url.replace(new RegExp(`.*${e}`), e)).join(",");
}
function b(t, e) {
  return Array.isArray(t) ? t.map((r) => {
    var a;
    return (a = r == null ? void 0 : r.response) != null && a.data ? r.response.data : r != null && r.url ? r.url.startsWith(e) ? r.url.slice(e.length) : r.url : null;
  }).filter((r) => r !== null).join(",") : t;
}
function p(t, e) {
  return Array.isArray(t) ? t.map((n) => {
    var r;
    return (r = n == null ? void 0 : n.response) != null && r.data ? n.response.data : n != null && n.url ? n.url.startsWith(e) ? n.url.slice(e.length) : n.url : null;
  }).filter((n) => n !== null) : t;
}
const j = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayTransformFileList: y,
  arrayTransformFileListToArray: p,
  arrayTransformFileListToString: b,
  calculateAverage: c,
  convertUrlsToString: g,
  findValueAndIndex: u,
  isNotEmpty: d,
  merge: f,
  uniqueArray: i
}, Symbol.toStringTag, { value: "Module" }));
function O(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
const h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isObject: O
}, Symbol.toStringTag, { value: "Module" })), S = (t) => t.getDay() % 6 !== 0;
function T(t, e) {
  const n = Math.abs(e - t);
  return Math.floor(n / (1e3 * 60 * 60 * 24));
}
const _ = (t) => Math.floor((t - new Date(t.getFullYear(), 0, 0)) / 1e3 / 60 / 60 / 24);
function m(t, e) {
  const r = new Date(t), a = new Date(e), s = [];
  for (let o = r; o <= a; o.setTime(o.getTime() + 864e5)) {
    const l = `${(o.getMonth() + 1).toString().padStart(2, "0")}-${o.getDate().toString().padStart(2, "0")}`;
    s.push(l);
  }
  return s;
}
function w(t) {
  const e = JSON.parse(JSON.stringify(t));
  return e.rangeTime && (e.startTime = e.rangeTime[0], e.endTime = e.rangeTime[1], delete e.rangeTime), e;
}
function D(t = 7) {
  const e = /* @__PURE__ */ new Date(), n = new Date(e);
  return n.setDate(e.getDate() - t), {
    currentDay: e.getTime(),
    beforeDay: n.getTime()
  };
}
const v = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dateDiffInDays: T,
  dayOfYear: _,
  generateDateRange: m,
  getBetween: D,
  isWeekday: S,
  splitTime: w
}, Symbol.toStringTag, { value: "Module" }));
function A(t) {
  return new URL(t);
}
function L(t) {
  return /^(https?|ftp):\/\/[^\s/$.?#].\S*$/.test(t);
}
function M(t = window.location.search) {
  let e;
  t ? e = new URLSearchParams(t.split("?")[1]) : e = new URLSearchParams(window.location.search);
  const n = {};
  return e.forEach(function(r, a) {
    n[a] = r;
  }), n;
}
const x = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  etURLParameters: M,
  getUrl: A,
  isValidUrl: L
}, Symbol.toStringTag, { value: "Module" }));
async function R(t) {
  const { data: e } = await t(), n = new Blob([e], { type: "application/vnd.ms-excel" }), r = window.URL.createObjectURL(n), a = document.createElement("a");
  a.href = r, a.download = "数据模板.xlsx", a.style.display = "none", document.body.appendChild(a), a.click(), window.URL.revokeObjectURL(r), document.body.removeChild(a);
}
const U = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  downloadFileFromStream: R
}, Symbol.toStringTag, { value: "Module" }));
class P {
  constructor(e) {
    this.enumObj = e;
  }
  // 转换输出下拉框数据
  toArray() {
    return Object.keys(this.enumObj).map((e) => this.enumObj[e]);
  }
  getLabelByValue(e) {
    const n = Object.entries(this.enumObj).find((r) => r[1].value === e);
    return n ? n[1].label : void 0;
  }
  getValueByLabel(e) {
    return Object.entries(this.enumObj).find((n) => n[1].label === e);
  }
}
const F = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EnumHelper: P
}, Symbol.toStringTag, { value: "Module" })), I = {
  ...j,
  // ...common,
  ...h,
  ...v,
  ...x,
  ...U,
  ...F
};
export {
  I as default
};
