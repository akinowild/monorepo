import { inject as g, createVNode as l, defineComponent as a, openBlock as h, createBlock as j, unref as v, createElementBlock as x, toDisplayString as y } from "vue";
var w = {
  size: "1em",
  strokeWidth: 4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  rtl: !1,
  theme: "outline",
  colors: {
    outline: {
      fill: "#333",
      background: "transparent"
    },
    filled: {
      fill: "#333",
      background: "#FFF"
    },
    twoTone: {
      fill: "#333",
      twoTone: "#2F88FF"
    },
    multiColor: {
      outStrokeColor: "#333",
      outFillColor: "#2F88FF",
      innerStrokeColor: "#FFF",
      innerFillColor: "#43CCF8"
    }
  },
  prefix: "i"
};
function W() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function b(t, n, r) {
  var e = typeof n.fill == "string" ? [n.fill] : n.fill || [], o = [], i = n.theme || r.theme;
  switch (i) {
    case "outline":
      o.push(typeof e[0] == "string" ? e[0] : "currentColor"), o.push("none"), o.push(typeof e[0] == "string" ? e[0] : "currentColor"), o.push("none");
      break;
    case "filled":
      o.push(typeof e[0] == "string" ? e[0] : "currentColor"), o.push(typeof e[0] == "string" ? e[0] : "currentColor"), o.push("#FFF"), o.push("#FFF");
      break;
    case "two-tone":
      o.push(typeof e[0] == "string" ? e[0] : "currentColor"), o.push(typeof e[1] == "string" ? e[1] : r.colors.twoTone.twoTone), o.push(typeof e[0] == "string" ? e[0] : "currentColor"), o.push(typeof e[1] == "string" ? e[1] : r.colors.twoTone.twoTone);
      break;
    case "multi-color":
      o.push(typeof e[0] == "string" ? e[0] : "currentColor"), o.push(typeof e[1] == "string" ? e[1] : r.colors.multiColor.outFillColor), o.push(typeof e[2] == "string" ? e[2] : r.colors.multiColor.innerStrokeColor), o.push(typeof e[3] == "string" ? e[3] : r.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: n.size || r.size,
    strokeWidth: n.strokeWidth || r.strokeWidth,
    strokeLinecap: n.strokeLinecap || r.strokeLinecap,
    strokeLinejoin: n.strokeLinejoin || r.strokeLinejoin,
    colors: o,
    id: t
  };
}
var z = Symbol("icon-context");
function I(t, n, r) {
  var e = {
    name: "icon-" + t,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(i) {
      var k = W(), s = g(z, w);
      return function() {
        var f = i.size, p = i.strokeWidth, d = i.strokeLinecap, C = i.strokeLinejoin, m = i.theme, _ = i.fill, F = i.spin, L = b(k, {
          size: f,
          strokeWidth: p,
          strokeLinecap: d,
          strokeLinejoin: C,
          theme: m,
          fill: _
        }, s), c = [s.prefix + "-icon"];
        return c.push(s.prefix + "-icon-" + t), n && s.rtl && c.push(s.prefix + "-icon-rtl"), F && c.push(s.prefix + "-icon-spin"), l("span", {
          class: c.join(" ")
        }, [r(L)]);
      };
    }
  };
  return e;
}
const S = I("camera", !1, function(t) {
  return l("svg", {
    width: t.size,
    height: t.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [l("path", {
    d: "M15 12L18 6H30L33 12H15Z",
    fill: t.colors[1],
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linejoin": t.strokeLinejoin
  }, null), l("rect", {
    x: "4",
    y: "12",
    width: "40",
    height: "30",
    rx: "3",
    fill: t.colors[1],
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linejoin": t.strokeLinejoin
  }, null), l("path", {
    d: "M24 35C28.4183 35 32 31.4183 32 27C32 22.5817 28.4183 19 24 19C19.5817 19 16 22.5817 16 27C16 31.4183 19.5817 35 24 35Z",
    fill: t.colors[3],
    stroke: t.colors[2],
    "stroke-width": t.strokeWidth,
    "stroke-linejoin": t.strokeLinejoin
  }, null)]);
}), O = a({
  name: "Icon"
}), T = /* @__PURE__ */ Object.assign(O, {
  setup(t) {
    return (n, r) => (h(), j(v(S), {
      theme: "outline",
      size: "16",
      fill: "#36464d",
      strokeWidth: 2
    }));
  }
}), B = (t, n) => {
  const r = t.__vccOpts || t;
  for (const [e, o] of n)
    r[e] = o;
  return r;
}, N = a({
  name: "Button"
}), E = /* @__PURE__ */ Object.assign(N, {
  props: {
    text: String,
    default: "按钮"
  },
  setup(t) {
    const n = t;
    return (r, e) => (h(), x("button", null, y(n.text) + "22", 1));
  }
}), M = /* @__PURE__ */ B(E, [["__scopeId", "data-v-e7dc9799"]]), u = [M, T], G = {
  install(t) {
    u.forEach((n, r) => {
      t.component(n.name, u[r]);
    });
  }
};
export {
  G as default
};
