function e(e,t,s,r){Object.defineProperty(e,t,{get:s,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var s,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=r.parcelRequiref6c0;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},r.parcelRequiref6c0=i),i.register("j7mty",(function(t,s){var r,n;e(t.exports,"resolve",(function(){return r}),(function(e){return r=e})),e(t.exports,"register",(function(){return n}),(function(e){return n=e}));var a={};n=function(e){for(var t=Object.keys(e),s=0;s<t.length;s++)a[t[s]]=e[t[s]]},r=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("j7mty").register(JSON.parse('{"chac8":"auth.96a319b2.js","9fssg":"avatar.d36d91cd.jpg"}'));var o=new Uint8Array(16);function c(){if(!s&&!(s="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(o)}var d=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var l=function(e){return"string"==typeof e&&d.test(e)},u=[],p=0;p<256;++p)u.push((p+256).toString(16).substr(1));var h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase();if(!l(s))throw TypeError("Stringified UUID is invalid");return s};var v=function(e,t,s){var r=(e=e||{}).random||(e.rng||c)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){s=s||0;for(var n=0;n<16;++n)t[s+n]=r[n];return t}return h(r)};var f=class{on(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)}off(e,t){if(!this.listeners[e])throw new Error(`Нет события: ${e}`);this.listeners[e]=this.listeners[e].filter((e=>e!==t))}emit(e,...t){if(!this.listeners[e])throw new Error(`Нет события: ${e}`);this.listeners[e].forEach((e=>{e(...t)}))}constructor(){this.listeners={}}};class m{registerEvents(e){e.on(m.EVENTS.INIT,this.init.bind(this)),e.on(m.EVENTS.FLOW_CDM,this.componentDidMountIn.bind(this)),e.on(m.EVENTS.FLOW_CDU,this.componentDidUpdateIn.bind(this)),e.on(m.EVENTS.FLOW_RENDER,this.renderIn.bind(this))}bindBlockToEvents(e){const t={};return Object.entries(e).forEach((([e,s])=>{t[e]=e=>{s(e,this)}})),t}makePropsProxy(e){return new Proxy(e,{set:(e,t,s)=>{const r={...e};return"events"===t?(e[t]=this.bindBlockToEvents(s),!0):(e[t]=s,this.eventBus().emit(m.EVENTS.FLOW_CDU,r,e),!0)}})}init(){this.createResources(),this.eventBus().emit(m.EVENTS.FLOW_CDM)}createResources(){const{tagName:e}=this.meta;this.elementIn=document.createElement(e)}componentDidMountIn(){this.componentDidMount(),this.eventBus().emit(m.EVENTS.FLOW_RENDER)}renderBlocks(e){const t=document.createElement("template");return t.innerHTML=e,Object.values(this.props).reduce(((e,t)=>Array.isArray(t)&&t.every((e=>e instanceof m))?e.concat(t):(t instanceof m&&e.push(t),e)),[]).forEach((e=>{const s=t.content.querySelector(`[data-uuid="${e.id}"]`);s&&s.replaceWith(e.element)})),t.content}renderIn(){const e=this.render();this.removeEvents(),this.removeAttrs();const t=this.renderBlocks(e);this.elementIn.innerHTML="",this.elementIn.appendChild(t),this.addAttrs(),this.addEvents()}addAttrs(){Object.entries(this.attrs).forEach((([e,t])=>{this.elementIn.setAttribute(e,t)}))}removeAttrs(){Object.keys(this.attrs).forEach((e=>{this.elementIn.removeAttribute(e)}))}toString(){return`<div data-uuid = ${this.id}></div>`}removeEvents(){this.props.events&&Object.entries(this.props.events).forEach((([e,t])=>{this.element.removeEventListener(e,t)}))}addEvents(){this.props.events&&Object.entries(this.props.events).forEach((([e,t])=>{this.element.addEventListener(e,t)}))}componentDidUpdateIn(e,t){this.componentDidUpdate(e,t),e!==t&&this.eventBus().emit(m.EVENTS.FLOW_RENDER)}get element(){return this.elementIn}setProps(e){e&&Object.assign(this.props,e)}render(){return""}componentDidMount(){}componentDidUpdate(e,t){}constructor(e="div",t={},s={}){const r=new f;this.meta={tagName:e,props:s,attrs:t},this.id=v();const n={...s};n.events&&(n.events=this.bindBlockToEvents(n.events)),this.props=this.makePropsProxy(n),this.attrs=t,this.eventBus=()=>r,this.registerEvents(r),r.emit(m.EVENTS.INIT)}}m.EVENTS={INIT:"init",FLOW_CDM:"flow:component-did-mount",FLOW_CDU:"flow:component-did-update",FLOW_RENDER:"flow:render"};var g=m;var y=function(e){var t,s="",r={},n=e||{};return function(e){r.centering=t=function(){var e=this&&this.block;this&&this.attributes;s+='<div class="centering"> ',e&&e(),s+="</div>"},r.centering.call({block:function(){s=s+"<div> "+(null==(t=e)?"":t)+"</div>"}})}.call(this,"form"in n?n.form:"undefined"!=typeof form?form:void 0),s};var b=function(e){var t,s="",r=e||{};return function(e){s=s+'<span class="button__text">'+(null==(t=e)?"":t)+"</span>"}.call(this,"content"in r?r.content:"undefined"!=typeof content?content:void 0),s};var w=class extends g{setClass(){let e="button";this.props.fullWidth&&(e=`${e} button_fullWidth`),this.props.theme&&(e=`${e} button_theme_${this.props.theme}`),this.attrs.class=e}render(){return this.setClass(),b(this.props)}constructor(e){super("button",{},{fullWidth:e.fullWidth,content:e.content,theme:e.theme,events:{click:e.onclick}})}};var E=class extends g{setClass(){let e="input";this.props.wrong&&(e=`${e} input_wrong`),this.props.fullHeight&&(e=`${e} input_fullHeight`),this.attrs.class=e}render(){return this.setClass(),""}constructor(e){super("input",{class:"input",placeholder:e.placeholder,name:e.name,type:e.type},{events:e.events,wrong:!1,validFunc:e.validFunc,fullHeight:e.fullHeight})}};var _=class extends g{checkInput(e){if(!e.props.validFunc)return;const t=e.element;e.props.validFunc(t.value)||e.setProps({wrong:!0})}checkValidFields(){let e=!0;return this.props.fields.forEach((t=>{this.checkInput(t),!0===t.props.wrong&&(e=!1)})),e}getFormValues(){return this.props.fields.reduce(((e,t)=>({...e,[t.attrs.name]:t.element.value})),{})}constructor(e){super("div",{},{fields:e.fields.map((e=>new E({events:{blur:(e,t)=>{this.checkInput(t)},focus:(t,s)=>{e.validFunc&&s.setProps({wrong:!1})}},validFunc:e.validFunc,placeholder:e.placeholder,name:e.name,type:e.type}))),button:new w({content:e.buttonText,fullWidth:!0,onclick:()=>{const t=this.getFormValues();if(!e.valid)return void e.submit(t);this.checkValidFields()&&e.submit(t)}})})}};var k=/["&<>]/;var S=function(e){var t,s="",r=e||{};return function(e,r,n){s+='<div class="main-form_content">',function(){var e=n||["There are no values"];if("number"==typeof e.length)for(var r=0,a=e.length;r<a;r++){var i=e[r];s+=null==(t=i)?"":t}else{a=0;for(var r in e){a++;i=e[r];s+=null==(t=i)?"":t}}}.call(this),s=s+'</div><div class="main-form_button">'+(null==(t=e)?"":t)+"</div>",r&&(s=s+'<div class="main-form_error">'+function(e){var t=""+e,s=k.exec(t);if(!s)return e;var r,n,a,i="";for(r=s.index,n=0;r<t.length;r++){switch(t.charCodeAt(r)){case 34:a="&quot;";break;case 38:a="&amp;";break;case 60:a="&lt;";break;case 62:a="&gt;";break;default:continue}n!==r&&(i+=t.substring(n,r)),n=r+1,i+=a}return n!==r?i+t.substring(n,r):i}(null==(t=r)?"":t)+"</div>")}.call(this,"button"in r?r.button:"undefined"!=typeof button?button:void 0,"error"in r?r.error:"undefined"!=typeof error?error:void 0,"fields"in r?r.fields:"undefined"!=typeof fields?fields:void 0),s};var x=class extends _{render(){return S({button:this.props.button,fields:this.props.fields,error:this.props.error})}constructor(e){super({fields:e.fields,buttonText:e.buttonText,valid:e.valid,error:e.error,submit:e.submit})}};var T=/["&<>]/;var A=function(e){var t,s="",r=e||{};return function(e,r,n){s=s+'<div class="identification"><div class="identification_body"><div class="identification_title">'+function(e){var t=""+e,s=T.exec(t);if(!s)return e;var r,n,a,i="";for(r=s.index,n=0;r<t.length;r++){switch(t.charCodeAt(r)){case 34:a="&quot;";break;case 38:a="&amp;";break;case 60:a="&lt;";break;case 62:a="&gt;";break;default:continue}n!==r&&(i+=t.substring(n,r)),n=r+1,i+=a}return n!==r?i+t.substring(n,r):i}(null==(t=n)?"":t)+'</div><div class="identification_form">'+(null==(t=e)?"":t)+'</div></div><div class="identification_helper">'+(null==(t=r)?"":t)+"</div></div>"}.call(this,"form"in r?r.form:"undefined"!=typeof form?form:void 0,"helper"in r?r.helper:"undefined"!=typeof helper?helper:void 0,"title"in r?r.title:"undefined"!=typeof title?title:void 0),s};var C=class extends g{render(){return A({title:this.props.title,form:this.props.form,helper:this.props.helper})}constructor(e){super("div",{},{title:e.title,form:e.form,helper:e.helper})}};var F=/["&<>]/;var P=function(e){var t,s="",r=e||{};return function(e,r){s=s+'<div class="helper"><span class="helper__text">'+function(e){var t=""+e,s=F.exec(t);if(!s)return e;var r,n,a,i="";for(r=s.index,n=0;r<t.length;r++){switch(t.charCodeAt(r)){case 34:a="&quot;";break;case 38:a="&amp;";break;case 60:a="&lt;";break;case 62:a="&gt;";break;default:continue}n!==r&&(i+=t.substring(n,r)),n=r+1,i+=a}return n!==r?i+t.substring(n,r):i}(null==(t=r)?"":t)+'  <span class="helper__button">'+(null==(t=e)?"":t)+"</span></span></div>"}.call(this,"link"in r?r.link:"undefined"!=typeof link?link:void 0,"text"in r?r.text:"undefined"!=typeof text?text:void 0),s};var I=class extends g{render(){return P({text:this.props.text,link:this.props.link})}constructor(e){super("div",{},{text:e.text,link:new w({onclick:e.onclick,content:e.textLink,theme:"link"})})}};var L=class{match(e){return e===this.pathname}render(){this.block=new this.BlockClass,this.currentRoot.innerHTML="",this.currentRoot.appendChild(this.block.element)}constructor(e,t,s){this.pathname=e,this.BlockClass=t,this.block=null,this.currentRoot=s}};class R{use(e,t){const s=new L(e,t,this.currentRoot);return this.routes.push(s),this}start(){window.onpopstate=e=>{const t=e.target;this.onRoute(t.location.pathname)},this.onRoute(window.location.pathname)}onRoute(e){const t=this.getRoute(e);t&&t.render()}go(e){this.history.pushState({},e,e),this.onRoute(e)}back(){this.history.back()}forward(){this.history.forward()}getRoute(e){return this.routes.find((t=>t.match(e)))}constructor(e){if(R.instance)return R.instance;if(!e)throw Error("undefind root node");this.routes=[],this.history=window.history,this.currentRoot=e,R.instance=this}}var N=R;var U=class{};const D="GET",O="PUT",M="POST",$="DELETE";var B=class{get(e){const t=this.startUrl+e;return this.request(t,{method:D})}put(e,t){return this.request(this.startUrl+e,{data:t,method:O})}post(e,t){return this.request(this.startUrl+e,{data:t,method:M})}delete(e,t){return this.request(this.startUrl+e,{data:t,method:$})}request(e,t){const{method:s,data:r}=t;return new Promise(((t,n)=>{const a=new XMLHttpRequest;a.open(s,e),Object.entries(this.headers).forEach((e=>a.setRequestHeader(...e))),a.responseType="json",a.onload=()=>{a.status<400?t(a.response):n(a.response)},a.onabort=n,a.onerror=n,a.timeout=this.timeout,a.ontimeout=n,a.withCredentials=!0,a.setRequestHeader("Content-Type","application/json"),s!==D&&r?a.send(JSON.stringify(r)):a.send()}))}constructor(e,t={}){this.startUrl=e,this.timeout=t.timeout||1e4,this.headers=t.headers||{}}};const W=new B("https://ya-praktikum.tech/api/v2/auth");var V=class extends U{login(e){return W.post("/signin",e)}logout(){return W.post("/logout")}create(e){return W.post("/signup",e)}request(){return W.get("/user")}};var j=e=>({type:"errors/SETAUTH",payload:e});var q=e=>({type:"profile/SET",payload:e});var H=e=>({type:"errors/SETREG",payload:e});var Z=new class{addReducer(e,t){return this.reducers[e]=t,this.dispatch({type:"@@INIT"}),this}getState(){return this.state}dispatch(e){this.state=this.reducer(e),this.emitListeners()}emitListeners(){this.listeners.forEach((e=>e(this.state)))}subscribe(e){e(this.state),this.listeners.push(e)}reducer(e){const t={};return Object.entries(this.reducers).forEach((([s,r])=>{t[s]=r(this.state[s],e)})),t}constructor(){this.state={},this.listeners=[],this.reducers={}}};var z=new class{async login(e){try{await this.api.login(e),(new N).go("/")}catch(e){Z.dispatch(j(e))}}async logout(){try{await this.api.logout(),(new N).go("/auth/")}catch(e){console.log(e)}}async reg(e){try{await this.api.create(e),(new N).go("/")}catch(e){Z.dispatch(H(e))}}async getProfile(){try{const e=await this.api.request();Z.dispatch(q(e))}catch(e){(new N).go("/auth/")}}async checkNotAuth(){const e=await this.api.request();(new N).go("/"),Z.dispatch(q(e))}constructor(){this.api=new V}};function G(e){return function(e){return"object"==typeof e&&null!==e&&e.constructor===Object&&"[object Object]"===Object.prototype.toString.call(e)}(e)||function(e){return Array.isArray(e)}(e)}var J=function e(t,s){if(Object.keys(t).length!==Object.keys(s).length)return!1;for(const[r,n]of Object.entries(t)){const t=s[r];if(G(n)&&G(t)){if(e(n,t))continue;return!1}if(n!==t)return!1}return!0};var X=(e,t)=>{let s;return r=>{const n=e(r);J({a:n},{a:s})||(t(n),s=n)}};var K=e=>e.errors.reg;class Q extends g{componentDidMount(){z.checkNotAuth();const e=X((e=>K(e)),(e=>{e&&this.props.regForm.props.form.setProps({error:e.reason})}));Z.subscribe((t=>{e(t)}))}render(){return y({form:this.props.regForm})}constructor(){super("div",{},{regForm:new C({title:"Регистрация",form:new x({valid:!0,buttonText:"Зарегистрироваться",fields:[{placeholder:"Имя",name:"first_name",type:"text",validFunc:e=>/^[А-ЯA-Z][а-яёЁa-z]+$/.test(e)},{placeholder:"Фамилия",name:"second_name",type:"text",validFunc:e=>/^[А-ЯA-Z][а-яёЁa-z]+$/.test(e)},{placeholder:"Логин",name:"login",type:"text",validFunc:e=>/^(?=.*[a-zA-Z_-])[a-zA-Z0-9-_]{3,20}$/.test(e)},{placeholder:"Почта",name:"email",type:"text",validFunc:e=>/^(?=.*[a-zA-Z_@-])[a-zA-Z_@-]+@[a-zA-Z_-]+\.[a-zA-Z_-]+$/.test(e)},{placeholder:"Телефон",name:"phone",type:"text",validFunc:e=>/^[\d/+]\d{9,14}$/.test(e)},{placeholder:"Пароль",name:"password",type:"password",validFunc:e=>/^(?=.*[A-ZА-Я])(?=.*\d).{8,40}$/.test(e)}],submit:e=>{z.reg(e)}}),helper:new I({text:"Уже есть аккаун?",onclick:()=>{(new N).go("/auth/")},textLink:"Войти"})})})}}var Y=function(e){var t,s="",r={},n=e||{};return function(e){r.centering=t=function(){var e=this&&this.block;this&&this.attributes;s+='<div class="centering"> ',e&&e(),s+="</div>"},r.centering.call({block:function(){s=s+"<div> "+(null==(t=e)?"":t)+"</div>"}})}.call(this,"form"in n?n.form:"undefined"!=typeof form?form:void 0),s};var ee=e=>e.errors.auth;class te extends g{componentDidMount(){z.checkNotAuth();const e=X((e=>ee(e)),(e=>{e&&this.props.form.props.form.setProps({error:e.reason})}));Z.subscribe((t=>{e(t)}))}render(){return Y({form:this.props.form})}constructor(){super("div",{},{form:new C({title:"Вход",form:new x({valid:!0,buttonText:"Войти",fields:[{placeholder:"Логин",name:"login",type:"text"},{placeholder:"Пароль",name:"password",type:"password"}],submit:async e=>{await z.login(e)}}),helper:new I({text:"Нет аккаунта?",onclick:()=>{(new N).go("/reg/")},textLink:"Регистрация"})})})}}const se=new B("https://ya-praktikum.tech/api/v2/chats");var re=class extends U{request(){return se.get("/")}create(e){return se.post("/",e)}token(e){return se.post(`/token/${e}`)}};var ne=e=>({type:"currentChat/SETACTIVECHATID",payload:e});var ae=()=>({type:"popUp/SETCHATNAMEDISABLE"});var ie=e=>({type:"chats/SET",payload:e});var oe=(e,t)=>e.chats.find((e=>e.id===t));var ce=(e,t)=>({type:"chats/ADDNEWMESSAGES",payload:{chatId:e,messages:t}});var de=(e,t)=>({type:"chats/ADDOLDMESSAGES",payload:{chatId:e,messages:t}});var le=e=>e.chats.find((t=>t.id===e.currentChat.activeChatId));var ue=e=>e.profile;var pe=new class{async connect(e){const t=Z.getState(),s=ue(t);if(!s)return;const r=new re,{token:n}=await r.token(e),a=new WebSocket(`wss://ya-praktikum.tech/ws/chats/${s.id}/${e}/${n}`);this.sockets[e]=a,a.addEventListener("message",(t=>{this.get(t.data,e)}))}async get(e,t){const s=await JSON.parse(e);"message"===s.type&&Z.dispatch(ce(t,[s])),Array.isArray(s)&&Z.dispatch(de(t,s))}send(e){if(!e)return;const t=Z.getState(),s=le(t);s&&this.sockets[s.id].send(JSON.stringify({content:e,type:"message"}))}async getlastMessages(e,t=0){this.sockets[e].send(JSON.stringify({content:t,type:"get old"}))}constructor(){this.sockets={}}};var he=new class{async init(){try{const e=await this.api.request();Z.dispatch(ie(e)),e.forEach((e=>{pe.connect(e.id)}))}catch(e){console.log(e)}}async get(e){Z.dispatch(ne(e));const t=Z.getState(),s=oe(t,e);if(s&&(!s.messages||s.messages.length<20)){const t=s.messages?s.messages.length:0;pe.getlastMessages(e,t)}}async create(e){try{await this.api.create(e),Z.dispatch(ae()),this.init()}catch(e){console.log(e)}}constructor(){this.api=new re}};function ve(e){var t=""+e,s=fe.exec(t);if(!s)return e;var r,n,a,i="";for(r=s.index,n=0;r<t.length;r++){switch(t.charCodeAt(r)){case 34:a="&quot;";break;case 38:a="&amp;";break;case 60:a="&lt;";break;case 62:a="&gt;";break;default:continue}n!==r&&(i+=t.substring(n,r)),n=r+1,i+=a}return n!==r?i+t.substring(n,r):i}var fe=/["&<>]/;var me=function(e){var t,s="",r=e||{};return function(e,r,n,a,i){s=s+'<div class="chat-item__main"><div class="chat-item__img-container"><img class="chat-item__img"'+function(e,t,s,r){if(!1===t||null==t||!t&&("class"===e||"style"===e))return"";if(!0===t)return" "+(r?e:e+'="'+e+'"');var n=typeof t;return"object"!==n&&"function"!==n||"function"!=typeof t.toJSON||(t=t.toJSON()),"string"==typeof t||(t=JSON.stringify(t),s||-1===t.indexOf('"'))?(s&&(t=ve(t))," "+e+'="'+t+'"'):" "+e+"='"+t.replace(/'/g,"&#39;")+"'"}("src",a,!0,!1)+'/></div><div class="chat-item__content"><p class="chat-item__author">'+ve(null==(t=e)?"":t)+' </p><p class="chat-item__message">'+ve(null==(t=i)?"":t)+'</p></div></div><div class="chat-item__meta"><div class="chat-item__count">',0!==r&&(s=s+'<div class="chat-item__count-text">'+ve(null==(t=r)?"":t)+"</div>"),s=s+'</div><p class="chat-item__date">'+ve(null==(t=n)?"":t)+"</p></div>"}.call(this,"author"in r?r.author:"undefined"!=typeof author?author:void 0,"count"in r?r.count:"undefined"!=typeof count?count:void 0,"date"in r?r.date:"undefined"!=typeof date?date:void 0,"img"in r?r.img:"undefined"!=typeof img?img:void 0,"message"in r?r.message:"undefined"!=typeof message?message:void 0),s};var ge=class extends g{setClass(){let e="chat-item";this.props.active&&(e=`${e} chat-item_active`),this.attrs.class=e}componentDidMount(){const e=X((e=>le(e)),(e=>{e&&this.setProps({active:this.props.id===e.id})}));Z.subscribe((t=>{e(t)}))}render(){return this.setClass(),me(this.props)}constructor(e){super("div",{},{id:e.id,author:e.author,message:e.message,date:e.date,count:e.count,img:e.img,active:!1,events:{click:()=>{he.get(this.props.id)}}})}};function ye(e){var t=""+e,s=be.exec(t);if(!s)return e;var r,n,a,i="";for(r=s.index,n=0;r<t.length;r++){switch(t.charCodeAt(r)){case 34:a="&quot;";break;case 38:a="&amp;";break;case 60:a="&lt;";break;case 62:a="&gt;";break;default:continue}n!==r&&(i+=t.substring(n,r)),n=r+1,i+=a}return n!==r?i+t.substring(n,r):i}var be=/["&<>]/;var we=function(e){var t,s="",r=e||{};return function(e,r){s=s+'<div class="profile-button"><div class="profile-button__img-container"><img class="profile-button__img"'+function(e,t,s,r){if(!1===t||null==t||!t&&("class"===e||"style"===e))return"";if(!0===t)return" "+(r?e:e+'="'+e+'"');var n=typeof t;return"object"!==n&&"function"!==n||"function"!=typeof t.toJSON||(t=t.toJSON()),"string"==typeof t||(t=JSON.stringify(t),s||-1===t.indexOf('"'))?(s&&(t=ye(t))," "+e+'="'+t+'"'):" "+e+"='"+t.replace(/'/g,"&#39;")+"'"}("src",e,!0,!1)+'/></div><p class="profile-button__name">'+ye(null==(t=r)?"":t)+"</p></div>"}.call(this,"avatar"in r?r.avatar:"undefined"!=typeof avatar?avatar:void 0,"name"in r?r.name:"undefined"!=typeof name?name:void 0),s};var Ee=class extends g{render(){return we(this.props)}constructor(e){super("div",{},{avatar:e.avatar,name:e.name,link:e.link,events:{click:()=>{this.props.link&&(new N).go(this.props.link)}}})}};var _e=function(e){var t,s="",r=e||{};return function(e,r,n,a){s=s+'<div class="chat-list__search">'+(null==(t=a)?"":t)+'</div><div class="chat-list__bar">'+(null==(t=r)?"":t)+'</div><div class="chat-list__footer"> <div class="chat-list__profile">'+(null==(t=n)?"":t)+'</div><div class="chat-list__add">'+(null==(t=e)?"":t)+" </div></div>"}.call(this,"addChatButton"in r?r.addChatButton:"undefined"!=typeof addChatButton?addChatButton:void 0,"chatBar"in r?r.chatBar:"undefined"!=typeof chatBar?chatBar:void 0,"profile"in r?r.profile:"undefined"!=typeof profile?profile:void 0,"search"in r?r.search:"undefined"!=typeof search?search:void 0),s};var ke=e=>e.chats;var Se=()=>({type:"popUp/SETCHATNAMEACTIVE"});var xe=e=>{const t=new Date(Date.parse(e));return`${t.getHours()}:${t.getMinutes()}`};var Te=function(e){var t,s="",r=e||{};return function(e){(function(){var r=e||["There are no values"];if("number"==typeof r.length)for(var n=0,a=r.length;n<a;n++){var i=r[n];s+=null==(t=i)?"":t}else{a=0;for(var n in r){a++;i=r[n];s+=null==(t=i)?"":t}}}).call(this)}.call(this,"chats"in r?r.chats:"undefined"!=typeof chats?chats:void 0),s};var Ae,Ce=class extends g{render(){const e=this.props.chats.filter((e=>e.props.author.startsWith(this.props.searchValue)));return Te({chats:e})}constructor(){super("div",{},{chats:[],searchValue:""})}};Ae=new URL(i("j7mty").resolve("9fssg"),import.meta.url).toString();var Fe=e=>e?`https://ya-praktikum.tech/api/v2/resources${e}`:t(Ae);var Pe=class extends g{setClass(){this.attrs.class="chat-list"}componentDidMount(){const e=X((e=>ke(e)),(e=>{this.props.chatBar.setProps({chats:e.map((e=>{const t=e.messages?e.messages[0]:e.last_message;return new ge({id:e.id,author:e.title,message:t?t.content:"Пока нет сообщений",date:t?xe(t.time):"",count:e.unread_count,img:Fe(e.avatar)})}))})})),t=X((e=>ue(e)),(e=>{e&&this.props.profile.setProps({avatar:Fe(e.avatar),name:`${e.first_name} ${e.second_name}`})}));Z.subscribe((s=>{e(s),t(s)}))}render(){return this.setClass(),_e(this.props)}constructor(){super("div",{},{chatBar:new Ce,search:new E({placeholder:"Поиск по чатам",name:"search",type:"text",events:{input:e=>{if(!e.target)return;const t=e.target;this.props.chatBar.setProps({searchValue:t.value})}}}),addChatButton:new w({content:"Новый чат",onclick:()=>{Z.dispatch(Se())}}),profile:new Ee({avatar:"",link:"/profile/",name:""})})}};var Ie=function(e){var t,s="",r=e||{};return function(e,r,n,a){s=s+((null==(t=e)?"":t)+"\n")+(null==(t=a)?"":t)+"\n"+(null==(t=r)?"":t)+"\n"+(null==(t=n)?"":t)}.call(this,"chatList"in r?r.chatList:"undefined"!=typeof chatList?chatList:void 0,"chatNamePopUp"in r?r.chatNamePopUp:"undefined"!=typeof chatNamePopUp?chatNamePopUp:void 0,"chatSettingsPopUp"in r?r.chatSettingsPopUp:"undefined"!=typeof chatSettingsPopUp?chatSettingsPopUp:void 0,"chatWindow"in r?r.chatWindow:"undefined"!=typeof chatWindow?chatWindow:void 0),s};var Le=function(e){var t,s="",r=e||{};return function(e,r,n,a){s=s+'<div class="chat-window__header"> <div class="chat-window__profile"> '+(null==(t=a)?"":t)+'</div><div class="chat-window__settings-button"> '+(null==(t=e)?"":t)+'</div></div><div class="chat-window__messeges">'+(null==(t=n)?"":t)+'</div><div class="chat-window__input">'+(null==(t=r)?"":t)+"</div>"}.call(this,"chatSettingsButton"in r?r.chatSettingsButton:"undefined"!=typeof chatSettingsButton?chatSettingsButton:void 0,"message"in r?r.message:"undefined"!=typeof message?message:void 0,"messagesList"in r?r.messagesList:"undefined"!=typeof messagesList?messagesList:void 0,"profile"in r?r.profile:"undefined"!=typeof profile?profile:void 0),s};var Re=function(e){var t,s="",r=e||{};return function(e,r){s=s+'<div class="create-message"> <div class="create-message_input">'+(null==(t=e)?"":t)+'</div><div class="create-message_button">'+(null==(t=r)?"":t)+"</div></div>"}.call(this,"inputMessage"in r?r.inputMessage:"undefined"!=typeof inputMessage?inputMessage:void 0,"sendButton"in r?r.sendButton:"undefined"!=typeof sendButton?sendButton:void 0),s};var Ne=class extends g{sendMessage(){const e=this.props.inputMessage.element;pe.send(e.value),e.value=""}componentDidMount(){document.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),this.sendMessage())}))}render(){return Re(this.props)}constructor(){super("div",{},{sendButton:new w({content:"Отправить",onclick:()=>this.sendMessage()}),inputMessage:new E({placeholder:"Напишите сообщение",name:"message",type:"text",fullHeight:!0})})}};var Ue=e=>{const t=le(e);return t?t.messages:[]};var De=function(e){var t,s="",r=e||{};return function(e){(function(){var r=e||["There are no values"];if("number"==typeof r.length)for(var n=0,a=r.length;n<a;n++){var i=r[n];s+=null==(t=i)?"":t}else{a=0;for(var n in r){a++;i=r[n];s+=null==(t=i)?"":t}}}).call(this)}.call(this,"messages"in r?r.messages:"undefined"!=typeof messages?messages:void 0),s};function Oe(e){var t=""+e,s=Me.exec(t);if(!s)return e;var r,n,a,i="";for(r=s.index,n=0;r<t.length;r++){switch(t.charCodeAt(r)){case 34:a="&quot;";break;case 38:a="&amp;";break;case 60:a="&lt;";break;case 62:a="&gt;";break;default:continue}n!==r&&(i+=t.substring(n,r)),n=r+1,i+=a}return n!==r?i+t.substring(n,r):i}var Me=/["&<>]/;var $e=function(e){var t,s="",r=e||{};return function(e,r){s=s+'<div class="message_content"> '+Oe(null==(t=r)?"":t)+'</div><div class="message_footer"> <div class="message_author"> </div><div class="message_date"> '+Oe(null==(t=e)?"":t)+"</div></div>"}.call(this,"date"in r?r.date:"undefined"!=typeof date?date:void 0,"text"in r?r.text:"undefined"!=typeof text?text:void 0),s};var Be=class extends g{setClass(){let e="message";this.props.self&&(e=`${e} message__self`),this.attrs.class=e}render(){return this.setClass(),$e(this.props)}constructor(e){super("div",{},{id:e.id,text:e.text,date:e.date,self:e.self})}};var We=class extends g{componentDidMount(){const e=X((e=>({messages:Ue(e),profile:ue(e)})),(({messages:e,profile:t})=>{e&&t&&this.setProps({messages:e.map((e=>new Be({id:e.id,text:e.content,date:xe(e.time),self:e.user_id===t.id})))})}));Z.subscribe((t=>{e(t)}))}setClass(){this.attrs.class="messages-list"}render(){return this.setClass(),De(this.props)}constructor(){super("div",{},{messages:["dssdf","sdfsf"]})}};const Ve=new B("https://ya-praktikum.tech/api/v2/chats/users");var je=class extends U{request(e){return new B(`https://ya-praktikum.tech/api/v2/chats/${e}/users`).get("/")}create(e){return Ve.put("/",{users:[e.userId],chatId:e.chatId})}delete(e){return Ve.delete("/",{users:[e.userId],chatId:e.chatId})}};var qe=()=>({type:"popUp/SETCHATSETTINGACTIVE"});var He=e=>({type:"chats/SETMEMBERS",payload:e});var Ze=new class{openMembersPopUp(){Z.dispatch(qe());const e=le(Z.getState());e&&this.get(e.id)}async get(e){try{const t=await this.api.request(e);Z.dispatch(He({chatId:e,members:t}))}catch(e){console.log(e)}}async add(e){try{const t=le(Z.getState());if(!t)return;await this.api.create({userId:e,chatId:t.id}),this.get(t.id)}catch(e){console.log(e)}}async delete(e){try{const t=le(Z.getState());if(!t)return;await this.api.delete({userId:e,chatId:t.id}),this.get(t.id)}catch(e){console.log(e)}}constructor(){this.api=new je}};var ze=class extends g{setClass(){const e=`icon icon_name_${this.props.name}`;this.attrs.class=e}render(){return this.setClass(),""}constructor(e){super("div",{},{name:e.name})}};var Ge=class extends g{setClass(){this.attrs.class="chat-window"}componentDidMount(){Z.subscribe((e=>{const t=le(e);t&&this.props.profile.setProps({avatar:Fe(t.avatar),name:t.title})}))}render(){return this.setClass(),Le(this.props)}constructor(){super("div",{},{profile:new Ee({avatar:t(Ae),name:""}),chatSettingsButton:new w({content:new ze({name:"sliders"}),theme:"icon",onclick:()=>Ze.openMembersPopUp()}),message:new Ne,messagesList:new We})}};var Je=function(e){var t,s="",r=e||{};return function(e){s=s+'<div class="content">'+(null==(t=e)?"":t)+"</div>"}.call(this,"content"in r?r.content:"undefined"!=typeof content?content:void 0),s};var Xe=class extends g{setClass(){let e="pop-up";e=this.props.active?`${e} pop-up_active`:`${e} pop-up_disable`,this.attrs.class=e}render(){return this.setClass(),Je(this.props)}constructor(e){super("div",{},{content:e.content,events:{mousedown:t=>{t.target===t.currentTarget&&e.disableFunc()}},active:e.active})}};var Ke=function(e){var t,s="",r=e||{};return function(e){s=s+'<div class="create-chat_title">Новый чат</div><div class="create-chat_form"> '+(null==(t=e)?"":t)+"</div>"}.call(this,"form"in r?r.form:"undefined"!=typeof form?form:void 0),s};var Qe=class extends g{setClass(){this.attrs.class="create-chat"}render(){return this.setClass(),Ke(this.props)}constructor(){super("div",{},{form:new x({valid:!0,buttonText:"Создать чат",fields:[{placeholder:"Название чата",name:"name",type:"text"}],submit:async e=>{he.create({title:e.name})}})})}};var Ye=e=>e.popUp.chatName;var et=()=>({type:"popUp/SETCHATSETTINGDISABLE"});var tt=e=>e.popUp.chatSetting;const st=new B("https://ya-praktikum.tech/api/v2/user");var rt=class extends U{search(e){return st.post("/search",{login:e})}update(e){return st.put("/profile",e)}updatePassword(e){return st.put("/password",e)}};var nt=()=>({type:"errors/CLEARPASSWORD"});var at=()=>({type:"errors/CLEARPROFILE"});var it=e=>({type:"errors/SETPASSWORD",payload:e});var ot=e=>({type:"errors/SETPROFILE",payload:e});var ct=e=>({type:"searchUsers/SETUSERS",payload:e});var dt=e=>{const t=ue(e),s=le(e);return(null==t?void 0:t.id)===(null==s?void 0:s.created_by)};var lt=e=>e.searchUsers;var ut=new class{async search(e){try{const t=Z.getState(),s=dt(t);if(e.length<3||!s){return void(lt(t).length>0&&Z.dispatch(ct([])))}const r=await this.api.search(e);Z.dispatch(ct(r))}catch(e){console.log(e)}}async updateProfile(e){try{const t=await this.api.update(e);Z.dispatch(q(t)),Z.dispatch(at())}catch(e){Z.dispatch(ot(e))}}async updatePassword(e){try{await this.api.updatePassword(e),Z.dispatch(nt())}catch(e){Z.dispatch(it(e))}}constructor(){this.api=new rt}};var pt=function(e){const t=le(e);if(!t)return[];const s=t.members||[],r=s.map((e=>e.id)),n=lt(e).filter((e=>!r.includes(e.id))).map((e=>({...e,role:"none"})));return s.concat(n)};var ht=function(e){var t,s="",r=e||{};return function(e){s+='<div class="chat-settings-users">',function(){var r=e||["There are no values"];if("number"==typeof r.length)for(var n=0,a=r.length;n<a;n++){var i=r[n];s+=null==(t=i)?"":t}else{a=0;for(var n in r){a++;i=r[n];s+=null==(t=i)?"":t}}}.call(this),s+="</div>"}.call(this,"members"in r?r.members:"undefined"!=typeof members?members:void 0),s};var vt=class extends g{render(){const e=this.props.members.filter((e=>e.props.login.startsWith(this.props.searchValue)));return ht({members:e})}constructor(){super("div",{},{searchValue:"",members:[]})}};var ft=/["&<>]/;var mt=function(e){var t,s="",r=e||{};return function(e,r,n){s=s+'<div class="chat-settings_header">'+function(e){var t=""+e,s=ft.exec(t);if(!s)return e;var r,n,a,i="";for(r=s.index,n=0;r<t.length;r++){switch(t.charCodeAt(r)){case 34:a="&quot;";break;case 38:a="&amp;";break;case 60:a="&lt;";break;case 62:a="&gt;";break;default:continue}n!==r&&(i+=t.substring(n,r)),n=r+1,i+=a}return n!==r?i+t.substring(n,r):i}(null==(t=e)?"":t)+'</div><div class="chat-settings_search">'+(null==(t=n)?"":t)+'</div><div class="chat-settings_members">'+(null==(t=r)?"":t)+"</div>"}.call(this,"header"in r?r.header:"undefined"!=typeof header?header:void 0,"members"in r?r.members:"undefined"!=typeof members?members:void 0,"search"in r?r.search:"undefined"!=typeof search?search:void 0),s};var gt=function(e){var t,s="",r=e||{};return function(e,r){s=s+'<div class="member-itom"><div class="member-itom__profile">'+(null==(t=r)?"":t)+'</div><div class="member-itom__button">'+(null==(t=e)?"":t)+"</div></div>"}.call(this,"button"in r?r.button:"undefined"!=typeof button?button:void 0,"profile"in r?r.profile:"undefined"!=typeof profile?profile:void 0),s};var yt=class extends g{render(){return gt(this.props)}constructor(e){var t,s,r;super("div",{},{login:e.member.login,profile:new Ee({avatar:Fe(e.member.avatar),name:`${e.member.first_name} ${e.member.second_name} (${e.member.login})`,link:`/user/${e.member.login}`}),button:(t=e.member.role,s=e.member.id,r=e.root,r&&"admin"!==t?new w("none"===t?{content:new ze({name:"plus-square"}),theme:"icon",onclick:()=>Ze.add(s)}:{content:new ze({name:"trash-2"}),theme:"icon",onclick:()=>Ze.delete(s)}):"")})}};var bt=class extends g{setClass(){this.attrs.class="chat-settings"}componentDidMount(){const e=X((e=>le(e)),(e=>{e&&this.setProps({header:e.title})})),t=X((e=>({members:pt(e),root:dt(e)})),(({members:e,root:t})=>{this.props.members.setProps({members:e.map((e=>new yt({root:t,member:e})))})}));Z.subscribe((s=>{e(s),t(s)}))}render(){return this.setClass(),mt(this.props)}constructor(){super("div",{},{header:"",members:new vt,search:new E({placeholder:"Поиск пользователей",name:"searchUsers",type:"text",events:{input:e=>{if(!e.target)return;const t=e.target;this.props.members.setProps({searchValue:t.value}),ut.search(t.value)}}})})}};class wt extends g{setClass(){this.attrs.class="chat"}componentDidMount(){z.getProfile(),he.init();const e=X((e=>Ye(e)),(e=>{this.props.chatNamePopUp.setProps({active:e})})),t=X((e=>tt(e)),(e=>{this.props.chatSettingsPopUp.setProps({active:e})}));Z.subscribe((s=>{e(s),t(s)}))}render(){return this.setClass(),Ie({chatList:this.props.chatList,chatWindow:this.props.chatWindow,chatNamePopUp:this.props.chatNamePopUp,chatSettingsPopUp:this.props.chatSettingsPopUp})}constructor(){super("div",{},{chatList:new Pe,chatWindow:new Ge,chatNamePopUp:new Xe({disableFunc:()=>{Z.dispatch(ae())},content:new Qe,active:!0}),chatSettingsPopUp:new Xe({disableFunc:()=>{Z.dispatch(et())},content:new bt,active:!0})})}}var Et=function(e){var t,s="",r={},n=e||{};return function(e){r.centering=t=function(){var e=this&&this.block;this&&this.attributes;s+='<div class="centering"> ',e&&e(),s+="</div>"},r.centering.call({block:function(){s=s+"<div> "+(null==(t=e)?"":t)+"</div>"}})}.call(this,"form"in n?n.form:"undefined"!=typeof form?form:void 0),s};var _t=e=>e.errors.password;var kt=e=>e.errors.profile;var St=/["&<>]/;var xt=function(e){var t,s="",r=e||{};return function(e,r,n,a){s=s+'<div class="profile-editor"><div class="profile-editor_body"><div class="profile-editor_title">'+function(e){var t=""+e,s=St.exec(t);if(!s)return e;var r,n,a,i="";for(r=s.index,n=0;r<t.length;r++){switch(t.charCodeAt(r)){case 34:a="&quot;";break;case 38:a="&amp;";break;case 60:a="&lt;";break;case 62:a="&gt;";break;default:continue}n!==r&&(i+=t.substring(n,r)),n=r+1,i+=a}return n!==r?i+t.substring(n,r):i}(null==(t=a)?"":t)+'</div><div class="profile-editor_dataform">'+(null==(t=e)?"":t)+'</div><div class="profile-editor_passwordform">'+(null==(t=n)?"":t)+'</div></div><div class="profile-editor_helper">'+(null==(t=r)?"":t)+"</div></div>"}.call(this,"dataForm"in r?r.dataForm:"undefined"!=typeof dataForm?dataForm:void 0,"helper"in r?r.helper:"undefined"!=typeof helper?helper:void 0,"passwordForm"in r?r.passwordForm:"undefined"!=typeof passwordForm?passwordForm:void 0,"title"in r?r.title:"undefined"!=typeof title?title:void 0),s};var Tt=class extends g{componentDidMount(){const e=X((e=>kt(e)),(e=>{this.props.dataForm.setProps({error:e?e.reason:void 0})})),t=X((e=>_t(e)),(e=>{this.props.passwordForm.setProps({error:e?e.reason:void 0})}));Z.subscribe((s=>{e(s),t(s)}))}render(){return xt({title:this.props.title,dataForm:this.props.dataForm,passwordForm:this.props.passwordForm,helper:this.props.helper})}constructor(e){super("div",{},{title:e.title,dataForm:new x({valid:!0,buttonText:"Изменить данные",fields:[{placeholder:"Имя",name:"first_name",type:"text",validFunc:e=>/^[А-ЯA-Z][а-яёЁa-z]+$/.test(e)},{placeholder:"Фамилия",name:"second_name",type:"text",validFunc:e=>/^[А-ЯA-Z][а-яёЁa-z]+$/.test(e)},{placeholder:"Логин",name:"login",type:"text",validFunc:e=>/^(?=.*[a-zA-Z_-])[a-zA-Z0-9-_]{3,20}$/.test(e)},{placeholder:"Отображаемый ник",name:"display_name",type:"text"},{placeholder:"Почта",name:"email",type:"text",validFunc:e=>/^(?=.*[a-zA-Z_@-])[a-zA-Z_@-]+@[a-zA-Z_-]+\.[a-zA-Z_-]+$/.test(e)},{placeholder:"Телефон",name:"phone",type:"text",validFunc:e=>/^[\d/+]\d{9,14}$/.test(e)}],submit:e=>{ut.updateProfile(e)}}),passwordForm:new x({valid:!0,buttonText:"Изменить Пароль",fields:[{placeholder:"Старый пароль",name:"oldPassword",type:"password"},{placeholder:"Новый пароль",name:"newPassword",type:"password",validFunc:e=>/^(?=.*[A-ZА-Я])(?=.*\d).{8,40}$/.test(e)}],submit:e=>{ut.updatePassword(e)}}),helper:e.helper})}};var At=class extends g{componentDidMount(){z.getProfile()}render(){return Et({form:this.props.regForm})}constructor(){super("div",{},{regForm:new Tt({title:"Изменение профиля",helper:new I({text:"",onclick:async()=>{await z.logout()},textLink:"Выйти"})})})}};var Ct=(e={chatSetting:!1,chatName:!1},t)=>{switch(t.type){case"popUp/SETCHATSETTINGACTIVE":return{...e,chatSetting:!0};case"popUp/SETCHATSETTINGDISABLE":return{...e,chatSetting:!1};case"popUp/SETCHATNAMEACTIVE":return{...e,chatName:!0};case"popUp/SETCHATNAMEDISABLE":return{...e,chatName:!1};case"popUp/CLOSEALL":return Object.keys(e).reduce(((e,t)=>({...e,[t]:!1})),{});default:return e}};var Ft=(e=[],t)=>{switch(t.type){case"chats/SET":return t.payload;case"chats/SETMEMBERS":return e.map((e=>e.id===t.payload.chatId?{...e,members:t.payload.members}:{...e}));case"chats/ADDNEWMESSAGES":return e.map((e=>e.id===t.payload.chatId?{...e,messages:e.messages?t.payload.messages.concat(e.messages):t.payload.messages}:{...e}));case"chats/ADDOLDMESSAGES":return e.map((e=>e.id===t.payload.chatId?{...e,messages:e.messages?e.messages.concat(t.payload.messages):t.payload.messages}:{...e}));default:return e}};var Pt=(e={id:void 0},t)=>{switch(t.type){case"currentChat/SETACTIVECHATID":return{...e,activeChatId:t.payload};default:return e}};var It=(e=[],t)=>{switch(t.type){case"searchUsers/SETUSERS":return t.payload;default:return e}};var Lt=(e,t)=>{switch(t.type){case"profile/SET":return t.payload;default:return e}};var Rt=(e={},t)=>{switch(t.type){case"errors/SETAUTH":return{...e,auth:t.payload};case"errors/SETREG":return{...e,reg:t.payload};case"errors/SETPROFILE":return{...e,profile:t.payload};case"errors/CLEARPROFILE":return{...e,profile:void 0};case"errors/SETPASSWORD":return{...e,password:t.payload};case"errors/CLEARPASSWORD":return{...e,password:void 0};default:return e}};var Nt=()=>{Z.addReducer("popUp",Ct).addReducer("chats",Ft).addReducer("currentChat",Pt).addReducer("searchUsers",It).addReducer("profile",Lt).addReducer("errors",Rt)};document.addEventListener("DOMContentLoaded",(()=>{!function(e){const t=document.querySelector(e);if(null===t)return;Nt(),new N(t).use("/",wt).use("/auth/",te).use("/reg/",Q).use("/profile/",At).start()}(".root")}));
//# sourceMappingURL=auth.96a319b2.js.map
