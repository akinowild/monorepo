import{S as _,i as y,s as b,a as C,e as d,b as h,t as i,d as r,g as P,h as s,j as k,v as x,o as R}from"./index-941276af.js";function S(l){C(l,"svelte-zdeou5","div.svelte-zdeou5.svelte-zdeou5{display:flex;align-items:center;flex-direction:column;text-align:center}div.four04.svelte-zdeou5>.svelte-zdeou5{margin-top:1em}ul.svelte-zdeou5.svelte-zdeou5{padding:0}ul.svelte-zdeou5 li.svelte-zdeou5{opacity:75%;list-style-type:none;padding:0;margin:0}")}function U(l){let e,o,a,t,v,c,p,g,u,m,z;return{c(){e=d("div"),o=d("h1"),o.textContent="404 - Page Not Found",a=h(),t=d("p"),v=i("The page "),c=d("code"),p=i(l[0]),g=i(` could not be found. Please check the URL or go back to
        the `),u=d("a"),u.textContent="homepage",m=i("."),z=h(),r(o,"class","svelte-zdeou5"),r(u,"href","/"),r(t,"class","svelte-zdeou5"),r(e,"class","four04 svelte-zdeou5")},m(n,f){P(n,e,f),s(e,o),s(e,a),s(e,t),s(t,v),s(t,c),s(c,p),s(t,g),s(t,u),s(t,m),s(e,z)},p(n,[f]){f&1&&k(p,n[0])},i:x,o:x,d(n){n&&R(e)}}}const B=({route:l})=>({status:404,error:"[Routify] Page could not be found.",props:{url:l.url}});function j(l,e,o){let{url:a}=e;return l.$$set=t=>{"url"in t&&o(0,a=t.url)},[a]}class D extends _{constructor(e){super(),y(this,e,j,U,b,{url:0},S)}}export{D as default,B as load};