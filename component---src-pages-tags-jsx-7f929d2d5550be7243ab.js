(self.webpackChunk_2win9_2win9_github_io=self.webpackChunk_2win9_2win9_github_io||[]).push([[898],{5608:function(e,t,r){"use strict";var n=r(7350),o=r.n(n),a=r(6540),i=r(2568),c=r(4794),s=r(2912),l=r(3173),u=r(786);const p=i.default.div.withConfig({displayName:"PostList__PostListWrapper",componentId:"sc-1oqnm6-0"})(["@media (max-width:768px){padding:0 10px;}"]),d=i.default.div.withConfig({displayName:"PostList__PostWrapper",componentId:"sc-1oqnm6-1"})(["position:relative;top:0;transition:all 0.5s;@media (max-width:768px){padding:0 5px;}"]),m=i.default.p.withConfig({displayName:"PostList__Date",componentId:"sc-1oqnm6-2"})(["margin-bottom:16px;font-size:14.4px;color:",";"],(e=>e.theme.colors.tertiaryText)),f=i.default.p.withConfig({displayName:"PostList__Excerpt",componentId:"sc-1oqnm6-3"})(["margin-bottom:32px;line-height:1.7;font-size:15px;color:",";word-break:break-all;"],(e=>e.theme.colors.secondaryText));t.A=e=>{let{postList:t}=e;const{0:r,1:n}=(0,a.useState)(10),i=o()((()=>{document.documentElement.scrollHeight-document.documentElement.scrollTop<=document.documentElement.clientHeight+100&&r<t.length&&setTimeout((()=>n(r+10)),300)}),250);return(0,a.useEffect)((()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)})),[r,t]),(0,a.useEffect)((()=>{n(10)}),[t]),a.createElement(p,null,t.slice(0,r).map(((e,n)=>{const{title:o,date:i,tags:p}=e.frontmatter,{excerpt:g}=e,{slug:y}=e.fields;return a.createElement(a.Fragment,null,a.createElement(d,null,a.createElement(s.A,{size:"bg"},a.createElement(c.Link,{to:y},o)),a.createElement(m,null,i),a.createElement(f,null,g),a.createElement(u.A,{tagList:p})),r-1!==n&&t.length-1!==n&&a.createElement(l.A,{mt:"48px",mb:"32px"}))})))}},786:function(e,t,r){"use strict";var n=r(6540),o=r(2568),a=r(4794);const i=o.default.div.withConfig({displayName:"TagList__TagListWrapper",componentId:"sc-s1uz5f-0"})(["margin-bottom:16px;word-break:break-all;"]),c=o.default.div.withConfig({displayName:"TagList__TagLink",componentId:"sc-s1uz5f-1"})(["display:inline-block;padding:9.6px 11.2px;margin-right:8px;margin-bottom:8px;border-radius:50px;background-color:",";color:",";text-decoration:none;font-size:14.4px;transition:all 0.2s;&:hover{background-color:",";}"],(e=>e.selected?e.theme.colors.selectedTagBackground:e.theme.colors.tagBackground),(e=>e.selected?e.theme.colors.selectedTagText:e.theme.colors.tagText),(e=>e.selected?e.theme.colors.hoveredSelectedTagBackground:e.theme.colors.hoveredTagBackground)),s=e=>e.replace(/\s+/g,"-");t.A=e=>{let{tagList:t,count:r,selected:o}=e;return t?r?n.createElement(i,null,t.map(((e,t)=>n.createElement(a.Link,{key:JSON.stringify({tag:e,i:t}),to:o===e.fieldValue?"/tags":`/tags?q=${e.fieldValue}`},n.createElement(c,{selected:e.fieldValue===o},s(e.fieldValue)," (",e.totalCount,")"))))):n.createElement(i,null,t.map(((e,t)=>n.createElement(a.Link,{key:JSON.stringify({tag:e,i:t}),to:`/tags?q=${e}`},n.createElement(c,null,s(e)))))):null}},7989:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return D}});var n={};r.r(n),r.d(n,{exclude:function(){return $},extract:function(){return N},parse:function(){return S},parseUrl:function(){return O},pick:function(){return T},stringify:function(){return I},stringifyUrl:function(){return _}});var o=r(3031),a=r.n(o),i=r(6540),c=r(2568),s=r(5482),l=r(7612),u=r.n(l),p=r(4794);const d="%[a-f0-9]{2}",m=new RegExp("("+d+")|([^%]+?)","gi"),f=new RegExp("("+d+")+","gi");function g(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(1===e.length)return e;t=t||1;const r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],g(r),g(n))}function y(e){try{return decodeURIComponent(e)}catch{let t=e.match(m)||[];for(let r=1;r<t.length;r++)t=(e=g(t,r).join("")).match(m)||[];return e}}function h(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){const t={"%FE%FF":"��","%FF%FE":"��"};let r=f.exec(e);for(;r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{const e=y(r[0]);e!==r[0]&&(t[r[0]]=e)}r=f.exec(e)}t["%C2"]="�";const n=Object.keys(t);for(const o of n)e=e.replace(new RegExp(o,"g"),t[o]);return e}(e)}}function b(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];const r=e.indexOf(t);return-1===r?[]:[e.slice(0,r),e.slice(r+t.length)]}function k(e,t){const r={};if(Array.isArray(t))for(const n of t){const t=Object.getOwnPropertyDescriptor(e,n);t?.enumerable&&Object.defineProperty(r,n,t)}else for(const n of Reflect.ownKeys(e)){const o=Object.getOwnPropertyDescriptor(e,n);if(o.enumerable){t(n,e[n],e)&&Object.defineProperty(r,n,o)}}return r}const x=e=>null==e,E=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)),w=Symbol("encodeFragmentIdentifier");function v(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function j(e,t){return t.encode?t.strict?E(e):encodeURIComponent(e):e}function F(e,t){return t.decode?h(e):e}function A(e){return Array.isArray(e)?e.sort():"object"==typeof e?A(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function C(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function L(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function N(e){const t=(e=C(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function S(e,t){v((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&F(r,e).includes(e.arrayFormatSeparator);r=a?F(r,e):r;const i=o||a?r.split(e.arrayFormatSeparator).map((t=>F(t,e))):null===r?r:F(r,e);n[t]=i};case"bracket-separator":return(t,r,n)=>{const o=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!o)return void(n[t]=r?F(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>F(t,e)));void 0!==n[t]?n[t]=[...n[t],...a]:n[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[...[r[e]].flat(),t]:r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;const e=t.decode?o.replace(/\+/g," "):o;let[a,i]=b(e,"=");void 0===a&&(a=e),i=void 0===i?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?i:F(i,t),r(F(a,t),i,n)}for(const[o,a]of Object.entries(n))if("object"==typeof a&&null!==a)for(const[e,r]of Object.entries(a))a[e]=L(r,t);else n[o]=L(a,t);return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return e[t]=Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?A(r):r,e}),Object.create(null))}function I(e,t){if(!e)return"";v((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);const r=r=>t.skipNull&&x(e[r])||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[j(t,e),"[",o,"]"].join("")]:[...r,[j(t,e),"[",j(o,e),"]=",j(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[j(t,e),"[]"].join("")]:[...r,[j(t,e),"[]=",j(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[j(t,e),":list="].join("")]:[...r,[j(t,e),":list=",j(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[j(r,e),t,j(o,e)].join("")]:[[n,j(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,j(t,e)]:[...r,[j(t,e),"=",j(n,e)].join("")]}}(t),o={};for(const[i,c]of Object.entries(e))r(i)||(o[i]=c);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const o=e[r];return void 0===o?"":null===o?j(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?j(r,t)+"[]":o.reduce(n(r),[]).join("&"):j(r,t)+"="+j(o,t)})).filter((e=>e.length>0)).join("&")}function O(e,t){t={decode:!0,...t};let[r,n]=b(e,"#");return void 0===r&&(r=e),{url:r?.split("?")?.[0]??"",query:S(N(e),t),...t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:F(n,t)}:{}}}function _(e,t){t={encode:!0,strict:!0,[w]:!0,...t};const r=C(e.url).split("?")[0]||"";let n=I({...S(N(e.url),{sort:!1}),...e.query},t);n&&(n=`?${n}`);let o=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);if(e.fragmentIdentifier){const n=new URL(r);n.hash=e.fragmentIdentifier,o=t[w]?n.hash:`#${e.fragmentIdentifier}`}return`${r}${n}${o}`}function T(e,t,r){r={parseFragmentIdentifier:!0,[w]:!1,...r};const{url:n,query:o,fragmentIdentifier:a}=O(e,r);return _({url:n,query:k(o,t),fragmentIdentifier:a},r)}function $(e,t,r){return T(e,Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r),r)}var R=n,U=r(1283),q=r(2912),z=r(786),P=r(5608),B=r(698),V=r(1960);const W=c.default.div.withConfig({displayName:"tags__TagListWrapper",componentId:"sc-1p0kse9-0"})(["margin-top:20px;@media (max-width:768px){padding:0 15px;}"]);var D=e=>{let{data:t}=e;const r=a()(t.allMarkdownRemark.group,["totalCount"]).reverse(),n=t.allMarkdownRemark.nodes,{0:o,1:c}=(0,i.useState)(),{0:l,1:d}=(0,i.useState)([]);let m=null;return"undefined"!=typeof document&&(m=document.location.search),(0,i.useEffect)((()=>{d(o?u()(n,(e=>-1!==e.frontmatter.tags.indexOf(o))):n)}),[o]),(0,i.useEffect)((()=>{const e=R.parse(m).q;c(e)}),[m]),i.createElement(U.A,null,i.createElement(s.A,{title:V.title,description:V.description,url:V.siteUrl}),i.createElement(W,null,o?i.createElement(q.A,{size:"sm"},"There are ",l.length," post",l.length>1&&"s"," that match #",o,"."):i.createElement(q.A,{size:"sm"},"There are ",r.length," tag",r.length>1&&"s","."),i.createElement(z.A,{count:!0,tagList:r,selected:o,onClick:e=>{console.log(e,o),e===o?((0,p.navigate)("/tags"),alert("zz")):c(e)}})),i.createElement(B.A,{size:32}),i.createElement(P.A,{postList:l}))}},6574:function(e,t,r){var n=r(909);e.exports=function(e,t){var r=[];return n(e,(function(e,n,o){t(e,n,o)&&r.push(e)})),r}},7612:function(e,t,r){var n=r(9770),o=r(6574),a=r(5389),i=r(6449);e.exports=function(e,t){return(i(e)?n:o)(e,a(t,3))}}}]);
//# sourceMappingURL=component---src-pages-tags-jsx-7f929d2d5550be7243ab.js.map