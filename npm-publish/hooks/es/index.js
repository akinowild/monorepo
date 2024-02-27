import { ref as n, computed as g, onMounted as p } from "vue";
const f = (u, c, i = !0) => {
  const a = n(!1), t = n([]), s = n({
    size: 10,
    page: 0
  }), l = n({}), r = g(() => ({ ...s.value, ...c.value })), o = async () => {
    a.value = !0;
    try {
      const { data: e } = await u(r.value);
      t.value = [], e.content ? t.value = e.content : t.value = e, l.value = {
        pageSize: e.pageSize,
        page: e.pageNumber,
        total: e.totalElements,
        totalPages: e.totalPages
      }, a.value = !1;
    } catch {
      a.value = !1;
    }
  };
  return p(async () => {
    i && await o();
  }), {
    loading: a,
    tableList: t,
    getList: o,
    pageInfo: s,
    pagination: l
  };
}, d = {};
export {
  d as default,
  f as useTableList
};
