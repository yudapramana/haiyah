"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[126],{2598:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(9669),s=r.n(a);function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(s=a.key,o=void 0,o=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(s,"string"),"symbol"===n(o)?o:String(o)),a)}var s,o}const i=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,a;return t=e,(r=[{key:"get",value:function(){return s().get("/api/guest").then((function(e){return console.log("response getGuests"),console.log(e),e}))}},{key:"store",value:function(e){return e.post("api/guest").then((function(e){return console.log("response storeGuest"),console.log(e),e}))}}])&&o(t.prototype,r),a&&o(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}())},8002:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(3645),s=r.n(a)()((function(e){return e[1]}));s.push([e.id,".content-wrapper[data-v-59a40c8c],.main-footer[data-v-59a40c8c],.main-header[data-v-59a40c8c]{margin-left:0!important}.main-header[data-v-59a40c8c]{--bs-navbar-padding-x:1rem!important}",""]);const n=s},3645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,a){"string"==typeof e&&(e=[[null,e,""]]);var s={};if(a)for(var n=0;n<this.length;n++){var o=this[n][0];null!=o&&(s[o]=!0)}for(var i=0;i<e.length;i++){var c=[].concat(e[i]);a&&s[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},3379:(e,t,r)=>{var a,s=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},n=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),o=[];function i(e){for(var t=-1,r=0;r<o.length;r++)if(o[r].identifier===e){t=r;break}return t}function c(e,t){for(var r={},a=[],s=0;s<e.length;s++){var n=e[s],c=t.base?n[0]+t.base:n[0],l=r[c]||0,u="".concat(c," ").concat(l);r[c]=l+1;var d=i(u),f={css:n[1],media:n[2],sourceMap:n[3]};-1!==d?(o[d].references++,o[d].updater(f)):o.push({identifier:u,updater:v(f,t),references:1}),a.push(u)}return a}function l(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var s=r.nc;s&&(a.nonce=s)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var o=n(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,r,a){var s=r?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=d(t,s);else{var n=document.createTextNode(s),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(n,o[t]):e.appendChild(n)}}function h(e,t,r){var a=r.css,s=r.media,n=r.sourceMap;if(s?e.setAttribute("media",s):e.removeAttribute("media"),n&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var p=null,m=0;function v(e,t){var r,a,s;if(t.singleton){var n=m++;r=p||(p=l(t)),a=f.bind(null,r,n,!1),s=f.bind(null,r,n,!0)}else r=l(t),a=h.bind(null,r,t),s=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else s()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=s());var r=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<r.length;a++){var s=i(r[a]);o[s].references--}for(var n=c(e,t),l=0;l<r.length;l++){var u=i(r[l]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}r=n}}}},5714:(e,t,r)=>{r.d(t,{ZP:()=>S});var a=r(9669),s=r.n(a),n=Object.defineProperty,o=Object.prototype.hasOwnProperty,i=Object.getOwnPropertySymbols,c=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&l(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&l(e,r,t[r]);return e};const d=e=>void 0===e,f=e=>Array.isArray(e),h=e=>e&&"number"==typeof e.size&&"string"==typeof e.type&&"function"==typeof e.slice,p=(e,t,r,a)=>((t=t||{}).indices=!d(t.indices)&&t.indices,t.nullsAsUndefineds=!d(t.nullsAsUndefineds)&&t.nullsAsUndefineds,t.booleansAsIntegers=!d(t.booleansAsIntegers)&&t.booleansAsIntegers,t.allowEmptyArrays=!d(t.allowEmptyArrays)&&t.allowEmptyArrays,r=r||new FormData,d(e)||(null===e?t.nullsAsUndefineds||r.append(a,""):(e=>"boolean"==typeof e)(e)?t.booleansAsIntegers?r.append(a,e?1:0):r.append(a,e):f(e)?e.length?e.forEach(((e,s)=>{const n=a+"["+(t.indices?s:"")+"]";p(e,t,r,n)})):t.allowEmptyArrays&&r.append(a+"[]",""):(e=>e instanceof Date)(e)?r.append(a,e.toISOString()):!(e=>e===Object(e))(e)||(e=>h(e)&&"string"==typeof e.name&&("object"==typeof e.lastModifiedDate||"number"==typeof e.lastModified))(e)||h(e)?r.append(a,e):Object.keys(e).forEach((s=>{const n=e[s];if(f(n))for(;s.length>2&&s.lastIndexOf("[]")===s.length-2;)s=s.substring(0,s.length-2);p(n,t,r,a?a+"["+s+"]":s)}))),r);var m={serialize:p};function v(e){if(null===e||"object"!=typeof e)return e;const t=Array.isArray(e)?[]:{};return Object.keys(e).forEach((r=>{t[r]=v(e[r])})),t}function y(e){return Array.isArray(e)?e:[e]}function b(e){return e instanceof File||e instanceof Blob||e instanceof FileList||"object"==typeof e&&null!==e&&void 0!==Object.values(e).find((e=>b(e)))}class g{constructor(){this.errors={},this.errors={}}set(e,t){"object"==typeof e?this.errors=e:this.set(u(u({},this.errors),{[e]:y(t)}))}all(){return this.errors}has(e){return Object.prototype.hasOwnProperty.call(this.errors,e)}hasAny(...e){return e.some((e=>this.has(e)))}any(){return Object.keys(this.errors).length>0}get(e){if(this.has(e))return this.getAll(e)[0]}getAll(e){return y(this.errors[e]||[])}only(...e){const t=[];return e.forEach((e=>{const r=this.get(e);r&&t.push(r)})),t}flatten(){return Object.values(this.errors).reduce(((e,t)=>e.concat(t)),[])}clear(e){const t={};e&&Object.keys(this.errors).forEach((r=>{r!==e&&(t[r]=this.errors[r])})),this.set(t)}}class k{constructor(e={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new g,this.progress=void 0,this.update(e)}static make(e){return new this(e)}update(e){this.originalData=Object.assign({},this.originalData,v(e)),Object.assign(this,e)}fill(e={}){this.keys().forEach((t=>{this[t]=e[t]}))}data(){return this.keys().reduce(((e,t)=>u(u({},e),{[t]:this[t]})),{})}keys(){return Object.keys(this).filter((e=>!k.ignore.includes(e)))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout((()=>{this.recentlySuccessful=!1}),k.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter((e=>!k.ignore.includes(e))).forEach((e=>{this[e]=v(this.originalData[e])}))}get(e,t={}){return this.submit("get",e,t)}post(e,t={}){return this.submit("post",e,t)}patch(e,t={}){return this.submit("patch",e,t)}put(e,t={}){return this.submit("put",e,t)}delete(e,t={}){return this.submit("delete",e,t)}submit(e,t,r={}){return this.startProcessing(),r=u({data:{},params:{},url:this.route(t),method:e,onUploadProgress:this.handleUploadProgress.bind(this)},r),"get"===e.toLowerCase()?r.params=u(u({},this.data()),r.params):(r.data=u(u({},this.data()),r.data),b(r.data)&&!r.transformRequest&&(r.transformRequest=[e=>m.serialize(e)])),new Promise(((e,t)=>{(k.axios||s()).request(r).then((t=>{this.finishProcessing(),e(t)})).catch((e=>{this.handleErrors(e),t(e)}))}))}handleErrors(e){this.busy=!1,this.progress=void 0,e.response&&this.errors.set(this.extractErrors(e.response))}extractErrors(e){return e.data&&"object"==typeof e.data?e.data.errors?u({},e.data.errors):e.data.message?{error:e.data.message}:u({},e.data):{error:k.errorMessage}}handleUploadProgress(e){this.progress={total:e.total,loaded:e.loaded,percentage:Math.round(100*e.loaded/e.total)}}route(e,t={}){let r=e;return Object.prototype.hasOwnProperty.call(k.routes,e)&&(r=decodeURI(k.routes[e])),"object"!=typeof t&&(t={id:t}),Object.keys(t).forEach((e=>{r=r.replace(`{${e}}`,t[e])})),r}onKeydown(e){const t=e.target;t.name&&this.errors.clear(t.name)}}k.routes={},k.errorMessage="Something went wrong. Please try again.",k.recentlySuccessfulTimeout=2e3,k.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"];const S=k},8065:(e,t,r)=>{r.d(t,{ne:()=>p,qz:()=>i});var a=r(821);Boolean;var s=r(3744);const n=["innerHTML"];const o={name:"HasError",extends:{props:{form:{type:Object,required:!0},field:{type:String,required:!0}}}},i=(0,s.Z)(o,[["render",function(e,t,r,s,o,i){return e.form.errors.has(e.field)?((0,a.openBlock)(),(0,a.createElementBlock)("div",{key:0,class:"invalid-feedback d-block",innerHTML:e.form.errors.get(e.field)},null,8,n)):(0,a.createCommentVNode)("",!0)}]]),c={key:0,class:"alert alert-danger alert-dismissible",role:"alert"},l=["innerHTML"],u=["innerHTML"],d=["innerHTML"];const f={props:{form:{type:Object,required:!0},dismissible:{type:Boolean,default:!0}},methods:{dismiss(){this.dismissible&&this.form.clear()}}},h={name:"AlertError",extends:{extends:f,props:{message:{type:String,default:"There were some problems with your input."}}}},p=(0,s.Z)(h,[["render",function(e,t,r,s,n,o){return e.form.errors.any()?((0,a.openBlock)(),(0,a.createElementBlock)("div",c,[e.dismissible?((0,a.openBlock)(),(0,a.createElementBlock)("button",{key:0,type:"button",class:"btn-close","aria-label":"Dismiss",onClick:t[0]||(t[0]=(...t)=>e.dismiss&&e.dismiss(...t))})):(0,a.createCommentVNode)("",!0),(0,a.renderSlot)(e.$slots,"default",{},(()=>[e.form.errors.has("error")?((0,a.openBlock)(),(0,a.createElementBlock)("div",{key:0,innerHTML:e.form.errors.get("error")},null,8,l)):e.form.errors.has("message")?((0,a.openBlock)(),(0,a.createElementBlock)("div",{key:1,innerHTML:e.form.errors.get("message")},null,8,u)):((0,a.openBlock)(),(0,a.createElementBlock)("div",{key:2,innerHTML:e.message},null,8,d))]))])):(0,a.createCommentVNode)("",!0)}]])},9126:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var a=(0,r(821).createStaticVNode)('<div class="content-header" data-v-59a40c8c><div class="container" data-v-59a40c8c><div class="row mb-2 justify-content-md-center" data-v-59a40c8c><div class="col-sm-5" data-v-59a40c8c><h1 class="m-0" data-v-59a40c8c> Kontak <strong data-v-59a40c8c>SIKM KemenagPessel</strong></h1></div><div class="col-sm-5" data-v-59a40c8c><ol class="breadcrumb float-sm-right" data-v-59a40c8c><li class="breadcrumb-item" data-v-59a40c8c><a href="#" data-v-59a40c8c>SIKM KemenagPessel</a></li><li class="breadcrumb-item" data-v-59a40c8c><a href="#" data-v-59a40c8c>Kontak</a></li><li class="breadcrumb-item active" data-v-59a40c8c>Index</li></ol></div></div></div></div><div class="content" data-v-59a40c8c><div class="container" data-v-59a40c8c><div class="row justify-content-md-center" data-v-59a40c8c><div class="col-lg-10" data-v-59a40c8c><div class="card" data-v-59a40c8c><div class="card-header text-center" data-v-59a40c8c><h4 class="card-title m-0 text-center" data-v-59a40c8c>Kontak / Pengaduan </h4></div><div class="card-body text-center" data-v-59a40c8c><div class="text-center" data-v-59a40c8c><p style="font-size:x-large;" data-v-59a40c8c><i data-v-59a40c8c><b data-v-59a40c8c> “Untuk Pengaduan, Laporan, Konsultasi mengenai Masalah, Bug, atau Saran pada Aplikasi Silahkan Langsung Hubungi Admin” </b></i></p><p style="font-size:large;" data-v-59a40c8c> ADMIN : Pramana Yuda Sayeti, S.Kom <br data-v-59a40c8c> Kontak : 0896 7754 2744 <br data-v-59a40c8c></p><br data-v-59a40c8c><small data-v-59a40c8c>(CPNS Pranata Komputer di Subbagian Tata Usaha Kantor Kementerian Agama Kab. Pesisir Selatan)</small></div></div></div></div></div></div></div>',2);r(2598);var s=r(5714),n=(r(6455),r(8065));const o={name:"Kontak",components:{"has-error":n.qz,"alert-error":n.ne},data:function(){return{loading:!1,disabled:!1,editModal:!1,form:new s.ZP({id:"",name:"",gender:"",no_hp:"",email:"",address:"",organisasi:"",jabatan:"",keperluan:"",tujuan:""})}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")},submitAnother:function(){return this.$router.push({name:"Landing"})}},created:function(){this.$Progress.start()},mounted:function(){this.$Progress.finish()}};var i=r(3379),c=r.n(i),l=r(8002),u={insert:"head",singleton:!1};c()(l.Z,u);l.Z.locals;const d=(0,r(3744).Z)(o,[["render",function(e,t,r,s,n,o){return a}],["__scopeId","data-v-59a40c8c"]])}}]);