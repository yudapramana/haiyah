"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[831],{2598:(e,t,r)=>{r.d(t,{Z:()=>i});var s=r(9669),n=r.n(s);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function o(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,(n=s.key,o=void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!==a(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(n,"string"),"symbol"===a(o)?o:String(o)),s)}var n,o}const i=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,s;return t=e,(r=[{key:"get",value:function(){return n().get("/api/guest").then((function(e){return console.log("response getGuests"),console.log(e),e}))}},{key:"store",value:function(e){return e.post("api/guest").then((function(e){return console.log("response storeGuest"),console.log(e),e}))}}])&&o(t.prototype,r),s&&o(t,s),Object.defineProperty(t,"prototype",{writable:!1}),e}())},4562:(e,t,r)=>{r.d(t,{Z:()=>a});var s=r(3645),n=r.n(s)()((function(e){return e[1]}));n.push([e.id,".content-wrapper[data-v-fed3a932],.main-footer[data-v-fed3a932],.main-header[data-v-fed3a932]{margin-left:0!important}.main-header[data-v-fed3a932]{--bs-navbar-padding-x:1rem!important}",""]);const a=n},3645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,s){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(s)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(n[o]=!0)}for(var i=0;i<e.length;i++){var c=[].concat(e[i]);s&&n[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},3379:(e,t,r)=>{var s,n=function(){return void 0===s&&(s=Boolean(window&&document&&document.all&&!window.atob)),s},a=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),o=[];function i(e){for(var t=-1,r=0;r<o.length;r++)if(o[r].identifier===e){t=r;break}return t}function c(e,t){for(var r={},s=[],n=0;n<e.length;n++){var a=e[n],c=t.base?a[0]+t.base:a[0],l=r[c]||0,d="".concat(c," ").concat(l);r[c]=l+1;var u=i(d),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(o[u].references++,o[u].updater(f)):o.push({identifier:d,updater:v(f,t),references:1}),s.push(d)}return s}function l(e){var t=document.createElement("style"),s=e.attributes||{};if(void 0===s.nonce){var n=r.nc;n&&(s.nonce=n)}if(Object.keys(s).forEach((function(e){t.setAttribute(e,s[e])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,r,s){var n=r?"":s.media?"@media ".concat(s.media," {").concat(s.css,"}"):s.css;if(e.styleSheet)e.styleSheet.cssText=u(t,n);else{var a=document.createTextNode(n),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function h(e,t,r){var s=r.css,n=r.media,a=r.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}var p=null,m=0;function v(e,t){var r,s,n;if(t.singleton){var a=m++;r=p||(p=l(t)),s=f.bind(null,r,a,!1),n=f.bind(null,r,a,!0)}else r=l(t),s=h.bind(null,r,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n());var r=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var s=0;s<r.length;s++){var n=i(r[s]);o[n].references--}for(var a=c(e,t),l=0;l<r.length;l++){var d=i(r[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}r=a}}}},5714:(e,t,r)=>{r.d(t,{ZP:()=>w});var s=r(9669),n=r.n(s),a=Object.defineProperty,o=Object.prototype.hasOwnProperty,i=Object.getOwnPropertySymbols,c=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&l(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&l(e,r,t[r]);return e};const u=e=>void 0===e,f=e=>Array.isArray(e),h=e=>e&&"number"==typeof e.size&&"string"==typeof e.type&&"function"==typeof e.slice,p=(e,t,r,s)=>((t=t||{}).indices=!u(t.indices)&&t.indices,t.nullsAsUndefineds=!u(t.nullsAsUndefineds)&&t.nullsAsUndefineds,t.booleansAsIntegers=!u(t.booleansAsIntegers)&&t.booleansAsIntegers,t.allowEmptyArrays=!u(t.allowEmptyArrays)&&t.allowEmptyArrays,r=r||new FormData,u(e)||(null===e?t.nullsAsUndefineds||r.append(s,""):(e=>"boolean"==typeof e)(e)?t.booleansAsIntegers?r.append(s,e?1:0):r.append(s,e):f(e)?e.length?e.forEach(((e,n)=>{const a=s+"["+(t.indices?n:"")+"]";p(e,t,r,a)})):t.allowEmptyArrays&&r.append(s+"[]",""):(e=>e instanceof Date)(e)?r.append(s,e.toISOString()):!(e=>e===Object(e))(e)||(e=>h(e)&&"string"==typeof e.name&&("object"==typeof e.lastModifiedDate||"number"==typeof e.lastModified))(e)||h(e)?r.append(s,e):Object.keys(e).forEach((n=>{const a=e[n];if(f(a))for(;n.length>2&&n.lastIndexOf("[]")===n.length-2;)n=n.substring(0,n.length-2);p(a,t,r,s?s+"["+n+"]":n)}))),r);var m={serialize:p};function v(e){if(null===e||"object"!=typeof e)return e;const t=Array.isArray(e)?[]:{};return Object.keys(e).forEach((r=>{t[r]=v(e[r])})),t}function y(e){return Array.isArray(e)?e:[e]}function g(e){return e instanceof File||e instanceof Blob||e instanceof FileList||"object"==typeof e&&null!==e&&void 0!==Object.values(e).find((e=>g(e)))}class b{constructor(){this.errors={},this.errors={}}set(e,t){"object"==typeof e?this.errors=e:this.set(d(d({},this.errors),{[e]:y(t)}))}all(){return this.errors}has(e){return Object.prototype.hasOwnProperty.call(this.errors,e)}hasAny(...e){return e.some((e=>this.has(e)))}any(){return Object.keys(this.errors).length>0}get(e){if(this.has(e))return this.getAll(e)[0]}getAll(e){return y(this.errors[e]||[])}only(...e){const t=[];return e.forEach((e=>{const r=this.get(e);r&&t.push(r)})),t}flatten(){return Object.values(this.errors).reduce(((e,t)=>e.concat(t)),[])}clear(e){const t={};e&&Object.keys(this.errors).forEach((r=>{r!==e&&(t[r]=this.errors[r])})),this.set(t)}}class k{constructor(e={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new b,this.progress=void 0,this.update(e)}static make(e){return new this(e)}update(e){this.originalData=Object.assign({},this.originalData,v(e)),Object.assign(this,e)}fill(e={}){this.keys().forEach((t=>{this[t]=e[t]}))}data(){return this.keys().reduce(((e,t)=>d(d({},e),{[t]:this[t]})),{})}keys(){return Object.keys(this).filter((e=>!k.ignore.includes(e)))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout((()=>{this.recentlySuccessful=!1}),k.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter((e=>!k.ignore.includes(e))).forEach((e=>{this[e]=v(this.originalData[e])}))}get(e,t={}){return this.submit("get",e,t)}post(e,t={}){return this.submit("post",e,t)}patch(e,t={}){return this.submit("patch",e,t)}put(e,t={}){return this.submit("put",e,t)}delete(e,t={}){return this.submit("delete",e,t)}submit(e,t,r={}){return this.startProcessing(),r=d({data:{},params:{},url:this.route(t),method:e,onUploadProgress:this.handleUploadProgress.bind(this)},r),"get"===e.toLowerCase()?r.params=d(d({},this.data()),r.params):(r.data=d(d({},this.data()),r.data),g(r.data)&&!r.transformRequest&&(r.transformRequest=[e=>m.serialize(e)])),new Promise(((e,t)=>{(k.axios||n()).request(r).then((t=>{this.finishProcessing(),e(t)})).catch((e=>{this.handleErrors(e),t(e)}))}))}handleErrors(e){this.busy=!1,this.progress=void 0,e.response&&this.errors.set(this.extractErrors(e.response))}extractErrors(e){return e.data&&"object"==typeof e.data?e.data.errors?d({},e.data.errors):e.data.message?{error:e.data.message}:d({},e.data):{error:k.errorMessage}}handleUploadProgress(e){this.progress={total:e.total,loaded:e.loaded,percentage:Math.round(100*e.loaded/e.total)}}route(e,t={}){let r=e;return Object.prototype.hasOwnProperty.call(k.routes,e)&&(r=decodeURI(k.routes[e])),"object"!=typeof t&&(t={id:t}),Object.keys(t).forEach((e=>{r=r.replace(`{${e}}`,t[e])})),r}onKeydown(e){const t=e.target;t.name&&this.errors.clear(t.name)}}k.routes={},k.errorMessage="Something went wrong. Please try again.",k.recentlySuccessfulTimeout=2e3,k.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"];const w=k},8065:(e,t,r)=>{r.d(t,{ne:()=>p,qz:()=>i});var s=r(821);Boolean;var n=r(3744);const a=["innerHTML"];const o={name:"HasError",extends:{props:{form:{type:Object,required:!0},field:{type:String,required:!0}}}},i=(0,n.Z)(o,[["render",function(e,t,r,n,o,i){return e.form.errors.has(e.field)?((0,s.openBlock)(),(0,s.createElementBlock)("div",{key:0,class:"invalid-feedback d-block",innerHTML:e.form.errors.get(e.field)},null,8,a)):(0,s.createCommentVNode)("",!0)}]]),c={key:0,class:"alert alert-danger alert-dismissible",role:"alert"},l=["innerHTML"],d=["innerHTML"],u=["innerHTML"];const f={props:{form:{type:Object,required:!0},dismissible:{type:Boolean,default:!0}},methods:{dismiss(){this.dismissible&&this.form.clear()}}},h={name:"AlertError",extends:{extends:f,props:{message:{type:String,default:"There were some problems with your input."}}}},p=(0,n.Z)(h,[["render",function(e,t,r,n,a,o){return e.form.errors.any()?((0,s.openBlock)(),(0,s.createElementBlock)("div",c,[e.dismissible?((0,s.openBlock)(),(0,s.createElementBlock)("button",{key:0,type:"button",class:"btn-close","aria-label":"Dismiss",onClick:t[0]||(t[0]=(...t)=>e.dismiss&&e.dismiss(...t))})):(0,s.createCommentVNode)("",!0),(0,s.renderSlot)(e.$slots,"default",{},(()=>[e.form.errors.has("error")?((0,s.openBlock)(),(0,s.createElementBlock)("div",{key:0,innerHTML:e.form.errors.get("error")},null,8,l)):e.form.errors.has("message")?((0,s.openBlock)(),(0,s.createElementBlock)("div",{key:1,innerHTML:e.form.errors.get("message")},null,8,d)):((0,s.openBlock)(),(0,s.createElementBlock)("div",{key:2,innerHTML:e.message},null,8,u))]))])):(0,s.createCommentVNode)("",!0)}]])},1831:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var s=(0,r(821).createStaticVNode)('<div class="content-header" data-v-fed3a932><div class="container" data-v-fed3a932><div class="row mb-2 justify-content-md-center" data-v-fed3a932><div class="col-sm-5" data-v-fed3a932><h1 class="m-0" data-v-fed3a932> Kontak <strong data-v-fed3a932>SIKM KemenagPessel</strong></h1></div><div class="col-sm-5" data-v-fed3a932><ol class="breadcrumb float-sm-right" data-v-fed3a932><li class="breadcrumb-item" data-v-fed3a932><a href="#" data-v-fed3a932>SIKM KemenagPessel</a></li><li class="breadcrumb-item" data-v-fed3a932><a href="#" data-v-fed3a932>Kontak</a></li><li class="breadcrumb-item active" data-v-fed3a932>Index</li></ol></div></div></div></div><div class="content" data-v-fed3a932><div class="container" data-v-fed3a932><div class="row justify-content-md-center" data-v-fed3a932><div class="col-lg-10" data-v-fed3a932><div class="card" data-v-fed3a932><div class="card-header text-center" data-v-fed3a932><h4 class="card-title m-0 text-center" data-v-fed3a932>Kontak / Pengaduan </h4></div><div class="card-body text-center" data-v-fed3a932><div class="text-center" data-v-fed3a932><p style="font-size:x-large;" data-v-fed3a932><i data-v-fed3a932><b data-v-fed3a932> “Untuk Pengaduan, Laporan, Konsultasi mengenai Masalah, Bug, atau Saran pada Aplikasi Silahkan Langsung Hubungi Admin” </b></i></p></div></div></div></div></div></div></div>',2);r(2598);var n=r(5714),a=(r(6455),r(8065));const o={name:"Kontak",components:{"has-error":a.qz,"alert-error":a.ne},data:function(){return{loading:!1,disabled:!1,editModal:!1,form:new n.ZP({id:"",name:"",gender:"",no_hp:"",email:"",address:"",organisasi:"",jabatan:"",keperluan:"",tujuan:""})}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")},submitAnother:function(){return this.$router.push({name:"Landing"})}},created:function(){this.$Progress.start()},mounted:function(){this.$Progress.finish()}};var i=r(3379),c=r.n(i),l=r(4562),d={insert:"head",singleton:!1};c()(l.Z,d);l.Z.locals;const u=(0,r(3744).Z)(o,[["render",function(e,t,r,n,a,o){return s}],["__scopeId","data-v-fed3a932"]])}}]);