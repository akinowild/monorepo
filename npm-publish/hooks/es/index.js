import { ref as o, computed as f, onMounted as p } from "vue";
const m = (c, u, n = !0) => {
  const s = o(!1), l = o([]), r = o({
    size: 10,
    page: 0
  }), i = o({}), g = f(() => ({ ...r.value, ...u.value })), v = async () => {
    s.value = !0;
    try {
      const { data: e } = await c(g.value);
      l.value = [], e.content ? l.value = e.content : l.value = e, i.value = {
        pageSize: e.pageSize,
        page: e.pageNumber,
        total: e.totalElements,
        totalPages: e.totalPages
      }, s.value = !1;
    } catch {
      s.value = !1;
    }
  };
  return p(async () => {
    n && await v();
  }), {
    loading: s,
    tableList: l,
    getList: v,
    pageInfo: r,
    pagination: i
  };
};
function w(c) {
  const u = o({}), n = o(!1), s = o(null), l = o(null), r = async (t) => {
    n.value = !0;
    try {
      const a = await c.getEntityDetail(t);
      e(a);
    } catch (a) {
      y(a);
    }
  }, i = async (t, a) => {
    n.value = !0;
    try {
      const d = await c.updateEntityDetail(t, a);
      e(d);
    } catch (d) {
      y(d);
    }
  }, g = async (t) => {
    n.value = !0;
    try {
      const a = await c.saveNewEntity(t);
      e(a);
    } catch (a) {
      y(a);
    }
  }, v = async (t) => {
    n.value = !0;
    try {
      const a = await c.deleteEntity(t);
      e(a);
    } catch (a) {
      y(a);
    }
  }, e = (t) => {
    if (n.value = !1, t.code === "ok") {
      u.value = t.data, s.value = "success", l.value = t.msg || "操作成功！";
      return;
    }
    s.value = "error", l.value = t.msg || "操作失败！";
  }, y = (t) => {
    n.value = !1, s.value = "error", l.value = t.msg || "系统错误！";
  };
  return {
    entityDetail: u,
    loading: n,
    status: s,
    message: l,
    getEntityDetail: r,
    updateEntityDetail: i,
    saveNewEntity: g,
    deleteEntity: v
  };
}
const h = {};
export {
  h as default,
  w as useEntityHandler,
  m as useTableList
};
