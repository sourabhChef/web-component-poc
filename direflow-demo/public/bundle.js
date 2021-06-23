(()=>{"use strict";var t={};function e(t,e,r,o){var i,n=arguments.length,s=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(n<3?i(s):n>3?i(e,r,s):i(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s}t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}();class r{createCSS(){return""}createBehavior(){}}const o=function(){if("undefined"!=typeof globalThis)return globalThis;if(void 0!==t.g)return t.g;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(t){return{}}}();void 0===o.trustedTypes&&(o.trustedTypes={createPolicy:(t,e)=>e});const i=Object.freeze([]),n=[],s=o.trustedTypes.createPolicy("fast-html",{createHTML:t=>t});let a=s;function l(){let t=0;for(;t<n.length;)if(n[t].call(),t++,t>1024){for(let e=0,r=n.length-t;e<r;e++)n[e]=n[e+t];n.length-=t,t=0}n.length=0}const c=`fast-${Math.random().toString(36).substring(2,8)}`,u=`${c}{`,h=`}${c}`,d=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(t){if(a!==s)throw new Error("The HTML policy can only be set once.");a=t},createHTML:t=>a.createHTML(t),isMarker:t=>t&&8===t.nodeType&&t.data.startsWith(c),extractDirectiveIndexFromMarker:t=>parseInt(t.data.replace(`${c}:`,"")),createInterpolationPlaceholder:t=>`${u}${t}${h}`,createCustomAttributePlaceholder(t,e){return`${t}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder:t=>`\x3c!--${c}:${t}--\x3e`,queueUpdate(t){n.length<1&&window.requestAnimationFrame(l),n.push(t)},nextUpdate:()=>new Promise((t=>{d.queueUpdate(t)})),setAttribute(t,e,r){null==r?t.removeAttribute(e):t.setAttribute(e,r)},setBooleanAttribute(t,e,r){r?t.setAttribute(e,""):t.removeAttribute(e)},removeChildNodes(t){for(let e=t.firstChild;null!==e;e=t.firstChild)t.removeChild(e)},createTemplateWalker:t=>document.createTreeWalker(t,133,null,!1)});class p{constructor(){this.targets=new WeakSet,this.behaviors=null}addStylesTo(t){this.targets.add(t)}removeStylesFrom(t){this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=null===this.behaviors?t:this.behaviors.concat(t),this}}function f(t){return t.map((t=>t instanceof p?f(t.styles):[t])).reduce(((t,e)=>t.concat(e)),[])}function g(t){return t.map((t=>t instanceof p?t.behaviors:null)).reduce(((t,e)=>null===e?t:(null===t&&(t=[]),t.concat(e))),null)}p.create=(()=>{if(d.supportsAdoptedStyleSheets){const t=new Map;return e=>new v(e,t)}return t=>new y(t)})();class v extends p{constructor(t,e){super(),this.styles=t,this.styleSheetCache=e,this._styleSheets=void 0,this.behaviors=g(t)}get styleSheets(){if(void 0===this._styleSheets){const t=this.styles,e=this.styleSheetCache;this._styleSheets=f(t).map((t=>{if(t instanceof CSSStyleSheet)return t;let r=e.get(t);return void 0===r&&(r=new CSSStyleSheet,r.replaceSync(t),e.set(t,r)),r}))}return this._styleSheets}addStylesTo(t){t.adoptedStyleSheets=[...t.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(t)}removeStylesFrom(t){const e=this.styleSheets;t.adoptedStyleSheets=t.adoptedStyleSheets.filter((t=>-1===e.indexOf(t))),super.removeStylesFrom(t)}}let b=0;class y extends p{constructor(t){super(),this.styles=t,this.behaviors=null,this.behaviors=g(t),this.styleSheets=f(t),this.styleClass="fast-style-class-"+ ++b}addStylesTo(t){const e=this.styleSheets,r=this.styleClass;t=this.normalizeTarget(t);for(let o=e.length-1;o>-1;--o){const i=document.createElement("style");i.innerHTML=e[o],i.className=r,t.prepend(i)}super.addStylesTo(t)}removeStylesFrom(t){const e=(t=this.normalizeTarget(t)).querySelectorAll(`.${this.styleClass}`);for(let r=0,o=e.length;r<o;++r)t.removeChild(e[r]);super.removeStylesFrom(t)}isAttachedTo(t){return super.isAttachedTo(this.normalizeTarget(t))}normalizeTarget(t){return t===document?document.body:t}}function m(t,...e){const{styles:o,behaviors:i}=function(t,e){const o=[];let i="";const n=[];for(let s=0,a=t.length-1;s<a;++s){i+=t[s];let a=e[s];if(a instanceof r){const t=a.createBehavior();a=a.createCSS(),t&&n.push(t)}a instanceof p||a instanceof CSSStyleSheet?(""!==i.trim()&&(o.push(i),i=""),o.push(a)):i+=a}return i+=t[t.length-1],""!==i.trim()&&o.push(i),{styles:o,behaviors:n}}(t,e),n=p.create(o);return i.length&&n.withBehaviors(...i),n}function C(t){const e=this.spillover;-1===e.indexOf(t)&&e.push(t)}function w(t){const e=this.spillover,r=e.indexOf(t);-1!==r&&e.splice(r,1)}function F(t){const e=this.spillover,r=this.source;for(let o=0,i=e.length;o<i;++o)e[o].handleChange(r,t)}function x(t){return-1!==this.spillover.indexOf(t)}class P{constructor(t,e){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=t,this.sub1=e}has(t){return this.sub1===t||this.sub2===t}subscribe(t){this.has(t)||(void 0!==this.sub1?void 0!==this.sub2?(this.spillover=[this.sub1,this.sub2,t],this.subscribe=C,this.unsubscribe=w,this.notify=F,this.has=x,this.sub1=void 0,this.sub2=void 0):this.sub2=t:this.sub1=t)}unsubscribe(t){this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0)}notify(t){const e=this.sub1,r=this.sub2,o=this.source;void 0!==e&&e.handleChange(o,t),void 0!==r&&r.handleChange(o,t)}}class D{constructor(t){this.subscribers={},this.source=t}notify(t){const e=this.subscribers[t];void 0!==e&&e.notify(t)}subscribe(t,e){let r=this.subscribers[e];void 0===r&&(this.subscribers[e]=r=new P(this.source)),r.subscribe(t)}unsubscribe(t,e){const r=this.subscribers[e];void 0!==r&&r.unsubscribe(t)}}const S=/(:|&&|\|\||if)/,$=new WeakMap,k=new WeakMap;let B,A=t=>{throw new Error("Must call enableArrayObservation before observing arrays.")};class T{constructor(t){this.name=t,this.field=`_${t}`,this.callback=`${t}Changed`}getValue(t){return void 0!==B&&B.watch(t,this.name),t[this.field]}setValue(t,e){const r=this.field,o=t[r];if(o!==e){t[r]=e;const i=t[this.callback];"function"==typeof i&&i.call(t,o,e),N(t).notify(this.name)}}}const E=Object.freeze({setArrayObserverFactory(t){A=t},getNotifier(t){let e=t.$fastController||$.get(t);return void 0===e&&(Array.isArray(t)?e=A(t):$.set(t,e=new D(t))),e},track(t,e){void 0!==B&&B.watch(t,e)},trackVolatile(){void 0!==B&&(B.needsRefresh=!0)},notify(t,e){N(t).notify(e)},defineProperty(t,e){"string"==typeof e&&(e=new T(e)),this.getAccessors(t).push(e),Reflect.defineProperty(t,e.name,{enumerable:!0,get:function(){return e.getValue(this)},set:function(t){e.setValue(this,t)}})},getAccessors(t){let e=k.get(t);if(void 0===e){let r=Reflect.getPrototypeOf(t);for(;void 0===e&&null!==r;)e=k.get(r),r=Reflect.getPrototypeOf(r);e=void 0===e?[]:e.slice(0),k.set(t,e)}return e},binding(t,e,r=this.isVolatileBinding(t)){return new V(t,e,r)},isVolatileBinding:t=>S.test(t.toString())}),N=E.getNotifier,L=(E.trackVolatile,d.queueUpdate);function R(t,e){E.defineProperty(t,e)}let H=null;function M(t){H=t}class O{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return H}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}}E.defineProperty(O.prototype,"index"),E.defineProperty(O.prototype,"length");const _=Object.seal(new O);class V extends P{constructor(t,e,r=!1){super(t,e),this.binding=t,this.isVolatileBinding=r,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(t,e){this.needsRefresh&&null!==this.last&&this.disconnect();const r=B;B=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const o=this.binding(t,e);return B=r,o}disconnect(){if(null!==this.last){let t=this.first;for(;void 0!==t;)t.notifier.unsubscribe(this,t.propertyName),t=t.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(t,e){const r=this.last,o=N(t),i=null===r?this.first:{};if(i.propertySource=t,i.propertyName=e,i.notifier=o,o.subscribe(this,e),null!==r){if(!this.needsRefresh){B=void 0;const e=r.propertySource[r.propertyName];B=this,t===e&&(this.needsRefresh=!0)}r.next=i}this.last=i}handleChange(){this.needsQueue&&(this.needsQueue=!1,L(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let t=this.first;return{next:()=>{const e=t;return void 0===e?{value:void 0,done:!0}:(t=t.next,{value:e,done:!1})},[Symbol.iterator]:function(){return this}}}}const j={toView:t=>t?"true":"false",fromView:t=>null!=t&&"false"!==t&&!1!==t&&0!==t},z={toView(t){if(null==t)return null;const e=1*t;return isNaN(e)?null:e.toString()},fromView(t){if(null==t)return null;const e=1*t;return isNaN(e)?null:e}};class I{constructor(t,e,r=e.toLowerCase(),o="reflect",i){this.guards=new Set,this.Owner=t,this.name=e,this.attribute=r,this.mode=o,this.converter=i,this.fieldName=`_${e}`,this.callbackName=`${e}Changed`,this.hasCallback=this.callbackName in t.prototype,"boolean"===o&&void 0===i&&(this.converter=j)}setValue(t,e){const r=t[this.fieldName],o=this.converter;void 0!==o&&(e=o.fromView(e)),r!==e&&(t[this.fieldName]=e,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](r,e),t.$fastController.notify(this.name))}getValue(t){return E.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,e){this.guards.has(t)||(this.guards.add(t),this.setValue(t,e),this.guards.delete(t))}tryReflectToAttribute(t){const e=this.mode,r=this.guards;r.has(t)||"fromView"===e||d.queueUpdate((()=>{r.add(t);const o=t[this.fieldName];switch(e){case"reflect":const e=this.converter;d.setAttribute(t,this.attribute,void 0!==e?e.toView(o):o);break;case"boolean":d.setBooleanAttribute(t,this.attribute,o)}r.delete(t)}))}static collect(t,...e){const r=[];e.push(t.attributes);for(let o=0,i=e.length;o<i;++o){const i=e[o];if(void 0!==i)for(let e=0,o=i.length;e<o;++e){const o=i[e];"string"==typeof o?r.push(new I(t,o)):r.push(new I(t,o.property,o.attribute,o.mode,o.converter))}}return r}}function q(t,e){let r;function o(t,e){arguments.length>1&&(r.property=e);const o=t.constructor.attributes||(t.constructor.attributes=[]);o.push(r)}return arguments.length>1?(r={},void o(t,e)):(r=void 0===t?{}:t,o)}class G{constructor(t,e,r){this.name=t,this.value=e,this.host=r,this.propertyName=`--${t}`,this.var=`var(${this.propertyName})`}bind(t){const e=this.host(t);null!==e&&("function"==typeof e.registerCSSCustomProperty?e.registerCSSCustomProperty(this):(Array.isArray(e.disconnectedCSSCustomPropertyRegistry)||(e.disconnectedCSSCustomPropertyRegistry=[]),e.disconnectedCSSCustomPropertyRegistry.push(this)))}unbind(t){const e=this.host(t);null!==e&&"function"==typeof e.unregisterCSSCustomProperty&&e.unregisterCSSCustomProperty(this)}}function U(t,e,r){return new G(t,e,r)}class W extends class{constructor(t){this.listenerCache=new WeakMap,this.query=t}bind(t){const{query:e}=this,r=this.constructListener(t);r.bind(e)(),e.addListener(r),this.listenerCache.set(t,r)}unbind(t){const e=this.listenerCache.get(t);e&&(this.query.removeListener(e),this.listenerCache.delete(t))}}{constructor(t,e){super(t),this.styles=e}static with(t){return e=>new W(t,e)}constructListener(t){let e=!1;const r=this.styles;return function(){const{matches:o}=this;o&&!e?(t.$fastController.addStyles(r),e=o):!o&&e&&(t.$fastController.removeStyles(r),e=o)}}unbind(t){super.unbind(t),t.$fastController.removeStyles(this.styles)}}const Q=W.with(window.matchMedia("(forced-colors)")),X=(W.with(window.matchMedia("(prefers-color-scheme: dark)")),W.with(window.matchMedia("(prefers-color-scheme: light)")),{mode:"open"}),Y={},Z=new Map;class K{constructor(t,e=t.definition){"string"==typeof e&&(e={name:e}),this.type=t,this.name=e.name,this.template=e.template;const r=I.collect(t,e.attributes),o=new Array(r.length),i={},n={};for(let t=0,e=r.length;t<e;++t){const e=r[t];o[t]=e.attribute,i[e.name]=e,n[e.attribute]=e}this.attributes=r,this.observedAttributes=o,this.propertyLookup=i,this.attributeLookup=n,this.shadowOptions=void 0===e.shadowOptions?X:null===e.shadowOptions?void 0:Object.assign(Object.assign({},X),e.shadowOptions),this.elementOptions=void 0===e.elementOptions?Y:Object.assign(Object.assign({},Y),e.elementOptions),this.styles=void 0===e.styles?void 0:Array.isArray(e.styles)?p.create(e.styles):e.styles instanceof p?e.styles:p.create([e.styles])}define(t=customElements){const e=this.type;if(!this.isDefined){const t=this.attributes,r=e.prototype;for(let e=0,o=t.length;e<o;++e)E.defineProperty(r,t[e]);Reflect.defineProperty(e,"observedAttributes",{value:this.observedAttributes,enumerable:!0}),Z.set(e,this),this.isDefined=!0}return t.get(this.name)||t.define(this.name,e,this.elementOptions),this}static forType(t){return Z.get(t)}}const J=new WeakMap,tt={bubbles:!0,composed:!0,cancelable:!0};function et(t){return t.shadowRoot||J.get(t)||null}class rt extends D{constructor(t,e){super(t),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.view=null,this.element=t,this.definition=e;const r=e.shadowOptions;if(void 0!==r){const e=t.attachShadow(r);"closed"===r.mode&&J.set(t,e)}const o=E.getAccessors(t);if(o.length>0){const e=this.boundObservables=Object.create(null);for(let r=0,i=o.length;r<i;++r){const i=o[r].name,n=t[i];void 0!==n&&(delete t[i],e[i]=n)}}}get isConnected(){return E.track(this,"isConnected"),this._isConnected}setIsConnected(t){this._isConnected=t,E.notify(this,"isConnected")}get template(){return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get styles(){return this._styles}set styles(t){this._styles!==t&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=t,this.needsInitialization||null===t||this.addStyles(t))}addStyles(t){const e=et(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.prepend(t);else if(!t.isAttachedTo(e)){const r=t.behaviors;t.addStylesTo(e),null!==r&&this.addBehaviors(r)}}removeStyles(t){const e=et(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.removeChild(t);else if(t.isAttachedTo(e)){const r=t.behaviors;t.removeStylesFrom(e),null!==r&&this.removeBehaviors(r)}}addBehaviors(t){const e=this.behaviors||(this.behaviors=new Map),r=t.length,o=[];for(let i=0;i<r;++i){const r=t[i];e.has(r)?e.set(r,e.get(r)+1):(e.set(r,1),o.push(r))}if(this._isConnected){const t=this.element;for(let e=0;e<o.length;++e)o[e].bind(t,_)}}removeBehaviors(t,e=!1){const r=this.behaviors;if(null===r)return;const o=t.length,i=[];for(let n=0;n<o;++n){const o=t[n];if(r.has(o)){const t=r.get(o)-1;0===t||e?r.delete(o)&&i.push(o):r.set(o,t)}}if(this._isConnected){const t=this.element;for(let e=0;e<i.length;++e)i[e].unbind(t)}}onConnectedCallback(){if(this._isConnected)return;const t=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(t,_);const e=this.behaviors;if(null!==e)for(const[r]of e)r.bind(t,_);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const t=this.view;null!==t&&t.unbind();const e=this.behaviors;if(null!==e){const t=this.element;for(const[r]of e)r.unbind(t)}}onAttributeChangedCallback(t,e,r){const o=this.definition.attributeLookup[t];void 0!==o&&o.onAttributeChangedCallback(this.element,r)}emit(t,e,r){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:e},tt),r)))}finishInitialization(){const t=this.element,e=this.boundObservables;if(null!==e){const r=Object.keys(e);for(let o=0,i=r.length;o<i;++o){const i=r[o];t[i]=e[i]}this.boundObservables=null}const r=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():r.template&&(this._template=r.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():r.styles&&(this._styles=r.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(t){const e=this.element,r=et(e)||e;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||d.removeChildNodes(r),t&&(this.view=t.render(e,r,e))}static forCustomElement(t){const e=t.$fastController;if(void 0!==e)return e;const r=K.forType(t.constructor);if(void 0===r)throw new Error("Missing FASTElement definition.");return t.$fastController=new rt(t,r)}}function ot(t){return class extends t{constructor(){super(),rt.forCustomElement(this)}$emit(t,e,r){return this.$fastController.emit(t,e,r)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(t,e,r){this.$fastController.onAttributeChangedCallback(t,e,r)}}}const it=Object.assign(ot(HTMLElement),{from:t=>ot(t),define:(t,e)=>new K(t,e).define().type});function nt(t){return function(e){new K(e,t).define()}}const st=":host{}";class at{constructor(){this.queue=new Set,this.customPropertyTarget=null,this._owner=null,this.ticking=!1,this.cssCustomPropertyDefinitions=new Map}get owner(){return this._owner}register(t){const e=this.cssCustomPropertyDefinitions.get(t.name);e?e.count+=1:(this.cssCustomPropertyDefinitions.set(t.name,Object.assign(Object.assign({},t),{count:1})),this.set(t))}unregister(t){const e=this.cssCustomPropertyDefinitions.get(t);e&&(e.count-=1,0===e.count&&(this.cssCustomPropertyDefinitions.delete(t),this.remove(t)))}set(t){this.owner&&(this.customPropertyTarget?this.customPropertyTarget.setProperty(`--${t.name}`,this.owner.evaluate(t)):this.queue.add(this.set.bind(this,t)))}remove(t){this.customPropertyTarget?this.customPropertyTarget.removeProperty(`--${t}`):this.queue.add(this.remove.bind(this,t))}setAll(){this.ticking||(this.ticking=!0,d.queueUpdate((()=>{this.ticking=!1,this.cssCustomPropertyDefinitions.forEach((t=>{this.set(t)}))})))}}class lt extends at{constructor(t){super(),this.subscribers=new Set,this.sheet=t,this.styles=p.create([t]),this.customPropertyTarget=t.cssRules[t.insertRule(st)].style}subscribe(t){this.subscribers.add(t),1===this.subscribers.size&&(this._owner=t),t.cssCustomPropertyDefinitions.forEach((t=>{this.register(t)})),t.$fastController.addStyles(this.styles)}unsubscribe(t){this.subscribers.delete(t),t.cssCustomPropertyDefinitions.forEach((t=>this.unregister(t.name))),this.owner===t&&(this._owner=this.subscribers.size?this.subscribers.values().next().value:null),!this.sheet.ownerNode&&this.styles&&t.$fastController.removeStyles(this.styles)}isSubscribed(t){return this.subscribers.has(t)}}class ct extends at{constructor(t,e){super(),this._sheet=null,this.handleConnection={handleChange:()=>{var t;this._sheet=this.styles.sheet;const e=this.sheet.insertRule(st);this.customPropertyTarget=this.sheet.rules[e].style,E.getNotifier(null===(t=this._owner)||void 0===t?void 0:t.$fastController).unsubscribe(this.handleConnection,"isConnected")}};const r=e.$fastController;r.addStyles(t),this.styles=t,this._owner=e,e.isConnected?this.handleConnection.handleChange():E.getNotifier(r).subscribe(this.handleConnection,"isConnected"),e.cssCustomPropertyDefinitions.forEach((t=>{this.register(t)}))}get sheet(){return this._sheet}customPropertyTargetChanged(t,e){!t&&this.queue.size&&(this.queue.forEach((t=>t())),this.queue.clear())}}function ut(t){const e=t.parentElement;if(e)return e;{const e=t.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}function ht(t){const e=t.provider;return null!=e&&pt.isDesignSystemProvider(e)}e([R],ct.prototype,"customPropertyTarget",void 0);const dt={bind(t){t.provider=pt.findProvider(t)},unbind(t){}};class pt extends it{constructor(){super(),this.isDesignSystemProvider=!0,this.designSystem={},this.useDefaults=!1,this.provider=null,this.cssCustomPropertyDefinitions=new Map,this.attributeChangeHandler={handleChange:(t,e)=>{const r=this[e],o=this.customPropertyManager;if(this.isValidDesignSystemValue(r)){this.designSystem[e]=r;const t=this.designSystemProperties[e];t&&t.cssCustomProperty&&o&&o.set({name:t.cssCustomProperty,value:r})}else{this.syncDesignSystemWithProvider();const t=this.designSystemProperties[e].cssCustomProperty;o&&("string"==typeof t&&o.remove(t),o.setAll())}}},this.localDesignSystemChangeHandler={handleChange:()=>{const t=this.customPropertyManager;t&&t.owner===this&&t.setAll()}},this.providerDesignSystemChangeHandler={handleChange:(t,e)=>{t[e]===this.designSystem[e]||this.isValidDesignSystemValue(this[e])||(this.designSystem[e]=t[e])}},d.supportsAdoptedStyleSheets?this.customPropertyManager=new lt(new CSSStyleSheet):this.customPropertyManager=new ct(document.createElement("style"),this),void 0===this.designSystemProperties&&(this.designSystemProperties={}),this.$fastController.addBehaviors([dt])}static get tagNames(){return pt._tagNames}static isDesignSystemProvider(t){return t.isDesignSystemProvider||-1!==pt.tagNames.indexOf(t.tagName)}static findProvider(t){if(ht(t))return t.provider;let e=ut(t);for(;null!==e;){if(pt.isDesignSystemProvider(e))return t.provider=e,e;if(ht(e))return t.provider=e.provider,e.provider;e=ut(e)}return null}static registerTagName(t){const e=t.toUpperCase();-1===pt.tagNames.indexOf(e)&&pt._tagNames.push(e)}useDefaultsChanged(){if(this.useDefaults){const t=this.designSystemProperties;Object.keys(t).forEach((e=>{void 0===this[e]&&(this[e]=t[e].default)}))}}providerChanged(t,e){if(t instanceof HTMLElement){const e=E.getNotifier(t.designSystem);E.getAccessors(t.designSystem).forEach((t=>{e.unsubscribe(this.providerDesignSystemChangeHandler,t.name)}))}if(e instanceof HTMLElement&&pt.isDesignSystemProvider(e)){const t=E.getNotifier(e.designSystem),r=E.getAccessors(this.designSystem).reduce(((t,e)=>Object.assign(Object.assign({},t),{[e.name]:e})),{}),o=E.getNotifier(this.designSystem);E.getAccessors(e.designSystem).forEach((e=>{t.subscribe(this.providerDesignSystemChangeHandler,e.name),r[e.name]||(R(this.designSystem,e.name),o.subscribe(this.localDesignSystemChangeHandler,e.name))})),this.syncDesignSystemWithProvider()}}customPropertyManagerChanged(t,e){t&&t.unsubscribe&&t.unsubscribe(this),e.subscribe&&e.subscribe(this)}connectedCallback(){super.connectedCallback(),this.customPropertyManager.subscribe&&this.customPropertyManager.isSubscribed&&!this.customPropertyManager.isSubscribed(this)&&this.customPropertyManager.subscribe(this);const t=E.getNotifier(this),e=E.getNotifier(this.designSystem);if(Object.keys(this.designSystemProperties).forEach((r=>{R(this.designSystem,r),t.subscribe(this.attributeChangeHandler,r),e.subscribe(this.localDesignSystemChangeHandler,r);const o=this[r];if(this.isValidDesignSystemValue(o)){this.designSystem[r]=o;const{cssCustomProperty:t}=this.designSystemProperties[r];"string"==typeof t&&this.customPropertyManager&&this.customPropertyManager.owner===this&&this.customPropertyManager.set({name:t,value:this[r]})}})),Array.isArray(this.disconnectedCSSCustomPropertyRegistry)){for(let t=0;t<this.disconnectedCSSCustomPropertyRegistry.length;t++)this.registerCSSCustomProperty(this.disconnectedCSSCustomPropertyRegistry[t]);delete this.disconnectedCSSCustomPropertyRegistry}if(Array.isArray(this.disconnectedRegistry)){for(let t=0;t<this.disconnectedRegistry.length;t++)this.disconnectedRegistry[t](this);delete this.disconnectedRegistry}}disconnectedCallback(){super.disconnectedCallback(),this.customPropertyManager.unsubscribe&&this.customPropertyManager.unsubscribe(this)}registerCSSCustomProperty(t){this.cssCustomPropertyDefinitions.set(t.name,t),this.customPropertyManager.register(t)}unregisterCSSCustomProperty(t){this.cssCustomPropertyDefinitions.delete(t.name),this.customPropertyManager.unregister(t.name)}evaluate(t){return"function"==typeof t.value?t.value(Object.assign({},this.designSystem)):t.value}syncDesignSystemWithProvider(){if(this.provider){const t=E.getAccessors(this.designSystem).reduce(((t,e)=>(t[e.name]=e,t)),{});E.getAccessors(this.provider.designSystem).forEach((e=>{var r;this.designSystemProperties.hasOwnProperty(e.name)&&this.isValidDesignSystemValue(this[e.name])||!this.isValidDesignSystemValue(null===(r=this.provider)||void 0===r?void 0:r.designSystem[e.name])||(t[e.name]||E.defineProperty(this.designSystem,e.name),this.designSystem[e.name]=this.provider.designSystem[e.name])}))}}isValidDesignSystemValue(t){return null!=t}}pt._tagNames=[],e([q({attribute:"use-defaults",mode:"boolean"})],pt.prototype,"useDefaults",void 0),e([R],pt.prototype,"provider",void 0),e([R],pt.prototype,"customPropertyManager",void 0);function ft(t){return(e,r)=>{((t,e,r)=>{const{cssCustomProperty:o,attribute:i}=r;t.designSystemProperties||(t.designSystemProperties={}),!1===i?R(t,e):(void 0===r.mode&&(r=Object.assign(Object.assign({},r),{mode:"fromView"})),q(r)(t,e)),t.designSystemProperties[e]={cssCustomProperty:!1!==o&&("string"==typeof o?o:"string"==typeof i?i:e),default:r.default}})(e,r,t)}}class gt{constructor(){this.targetIndex=0}}class vt extends gt{constructor(){super(...arguments),this.createPlaceholder=d.createInterpolationPlaceholder}}class bt extends gt{constructor(t,e,r){super(),this.name=t,this.behavior=e,this.options=r}createPlaceholder(t){return d.createCustomAttributePlaceholder(this.name,t)}createBehavior(t){return new this.behavior(t,this.options)}}function yt(t,e){this.source=t,this.context=e,null===this.bindingObserver&&(this.bindingObserver=E.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(t,e))}function mt(t,e){this.source=t,this.context=e,this.target.addEventListener(this.targetName,this)}function Ct(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function wt(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.unbind(),t.needsBindOnly=!0)}function Ft(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function xt(t){d.setAttribute(this.target,this.targetName,t)}function Pt(t){d.setBooleanAttribute(this.target,this.targetName,t)}function Dt(t){if(null==t&&(t=""),t.create){this.target.textContent="";let e=this.target.$fastView;void 0===e?e=t.create():this.target.$fastTemplate!==t&&(e.isComposed&&(e.remove(),e.unbind()),e=t.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=t)}else{const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=t}}function St(t){this.target[this.targetName]=t}function $t(t){const e=this.classVersions||Object.create(null),r=this.target;let o=this.version||0;if(null!=t&&t.length){const i=t.split(/\s+/);for(let t=0,n=i.length;t<n;++t){const n=i[t];""!==n&&(e[n]=o,r.classList.add(n))}}if(this.classVersions=e,this.version=o+1,0!==o){o-=1;for(const t in e)e[t]===o&&r.classList.remove(t)}}class kt extends vt{constructor(t){super(),this.binding=t,this.bind=yt,this.unbind=Ct,this.updateTarget=xt,this.isBindingVolatile=E.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(t){if(this.originalTargetName=t,void 0!==t)switch(t[0]){case":":if(this.cleanedTargetName=t.substr(1),this.updateTarget=St,"innerHTML"===this.cleanedTargetName){const t=this.binding;this.binding=(e,r)=>d.createHTML(t(e,r))}break;case"?":this.cleanedTargetName=t.substr(1),this.updateTarget=Pt;break;case"@":this.cleanedTargetName=t.substr(1),this.bind=mt,this.unbind=Ft;break;default:this.cleanedTargetName=t,"class"===t&&(this.updateTarget=$t)}}targetAtContent(){this.updateTarget=Dt,this.unbind=wt}createBehavior(t){return new Bt(t,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Bt{constructor(t,e,r,o,i,n,s){this.source=null,this.context=null,this.bindingObserver=null,this.target=t,this.binding=e,this.isBindingVolatile=r,this.bind=o,this.unbind=i,this.updateTarget=n,this.targetName=s}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(t){M(t);const e=this.binding(this.source,this.context);M(null),!0!==e&&t.preventDefault()}}let At=null;class Tt{addFactory(t){t.targetIndex=this.targetIndex,this.behaviorFactories.push(t)}captureContentBinding(t){t.targetAtContent(),this.addFactory(t)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){At=this}static borrow(t){const e=At||new Tt;return e.directives=t,e.reset(),At=null,e}}function Et(t){if(1===t.length)return t[0];let e;const r=t.length,o=t.map((t=>"string"==typeof t?()=>t:(e=t.targetName||e,t.binding))),i=new kt(((t,e)=>{let i="";for(let n=0;n<r;++n)i+=o[n](t,e);return i}));return i.targetName=e,i}const Nt=h.length;function Lt(t,e){const r=e.split(u);if(1===r.length)return null;const o=[];for(let e=0,i=r.length;e<i;++e){const i=r[e],n=i.indexOf(h);let s;if(-1===n)s=i;else{const e=parseInt(i.substring(0,n));o.push(t.directives[e]),s=i.substring(n+Nt)}""!==s&&o.push(s)}return o}function Rt(t,e,r=!1){const o=e.attributes;for(let i=0,n=o.length;i<n;++i){const s=o[i],a=s.value,l=Lt(t,a);let c=null;null===l?r&&(c=new kt((()=>a)),c.targetName=s.name):c=Et(l),null!==c&&(e.removeAttributeNode(s),i--,n--,t.addFactory(c))}}function Ht(t,e,r){const o=Lt(t,e.textContent);if(null!==o){let i=e;for(let n=0,s=o.length;n<s;++n){const s=o[n],a=0===n?e:i.parentNode.insertBefore(document.createTextNode(""),i.nextSibling);"string"==typeof s?a.textContent=s:(a.textContent=" ",t.captureContentBinding(s)),i=a,t.targetIndex++,a!==e&&r.nextNode()}t.targetIndex--}}const Mt=document.createRange();class Ot{constructor(t,e){this.fragment=t,this.behaviors=e,this.source=null,this.context=null,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const e=t.parentNode,r=this.lastChild;let o,i=this.firstChild;for(;i!==r;)o=i.nextSibling,e.insertBefore(i,t),i=o;e.insertBefore(r,t)}}remove(){const t=this.fragment,e=this.lastChild;let r,o=this.firstChild;for(;o!==e;)r=o.nextSibling,t.appendChild(o),o=r;t.appendChild(e)}dispose(){const t=this.firstChild.parentNode,e=this.lastChild;let r,o=this.firstChild;for(;o!==e;)r=o.nextSibling,t.removeChild(o),o=r;t.removeChild(e);const i=this.behaviors,n=this.source;for(let t=0,e=i.length;t<e;++t)i[t].unbind(n)}bind(t,e){const r=this.behaviors;if(this.source!==t)if(null!==this.source){const o=this.source;this.source=t,this.context=e;for(let i=0,n=r.length;i<n;++i){const n=r[i];n.unbind(o),n.bind(t,e)}}else{this.source=t,this.context=e;for(let o=0,i=r.length;o<i;++o)r[o].bind(t,e)}}unbind(){if(null===this.source)return;const t=this.behaviors,e=this.source;for(let r=0,o=t.length;r<o;++r)t[r].unbind(e);this.source=null}static disposeContiguousBatch(t){if(0!==t.length){Mt.setStartBefore(t[0].firstChild),Mt.setEndAfter(t[t.length-1].lastChild),Mt.deleteContents();for(let e=0,r=t.length;e<r;++e){const r=t[e],o=r.behaviors,i=r.source;for(let t=0,e=o.length;t<e;++t)o[t].unbind(i)}}}}class _t{constructor(t,e){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=t,this.directives=e}create(t){if(null===this.fragment){let t;const e=this.html;if("string"==typeof e){t=document.createElement("template"),t.innerHTML=d.createHTML(e);const r=t.content.firstElementChild;null!==r&&"TEMPLATE"===r.tagName&&(t=r)}else t=e;const r=function(t,e){const r=t.content;document.adoptNode(r);const o=Tt.borrow(e);Rt(o,t,!0);const i=o.behaviorFactories;o.reset();const n=d.createTemplateWalker(r);let s;for(;s=n.nextNode();)switch(o.targetIndex++,s.nodeType){case 1:Rt(o,s);break;case 3:Ht(o,s,n);break;case 8:d.isMarker(s)&&o.addFactory(e[d.extractDirectiveIndexFromMarker(s)])}let a=0;(d.isMarker(r.firstChild)||1===r.childNodes.length&&e.length)&&(r.insertBefore(document.createComment(""),r.firstChild),a=-1);const l=o.behaviorFactories;return o.release(),{fragment:r,viewBehaviorFactories:l,hostBehaviorFactories:i,targetOffset:a}}(t,this.directives);this.fragment=r.fragment,this.viewBehaviorFactories=r.viewBehaviorFactories,this.hostBehaviorFactories=r.hostBehaviorFactories,this.targetOffset=r.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const e=this.fragment.cloneNode(!0),r=this.viewBehaviorFactories,o=new Array(this.behaviorCount),i=d.createTemplateWalker(e);let n=0,s=this.targetOffset,a=i.nextNode();for(let t=r.length;n<t;++n){const t=r[n],e=t.targetIndex;for(;null!==a;){if(s===e){o[n]=t.createBehavior(a);break}a=i.nextNode(),s++}}if(this.hasHostBehaviors){const e=this.hostBehaviorFactories;for(let r=0,i=e.length;r<i;++r,++n)o[n]=e[r].createBehavior(t)}return new Ot(e,o)}render(t,e,r){"string"==typeof e&&(e=document.getElementById(e)),void 0===r&&(r=e);const o=this.create(r);return o.bind(t,_),o.appendTo(e),o}}const Vt=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function jt(t,...e){const r=[];let o="";for(let i=0,n=t.length-1;i<n;++i){const n=t[i];let s=e[i];if(o+=n,s instanceof _t){const t=s;s=()=>t}if("function"==typeof s&&(s=new kt(s)),s instanceof vt){const t=Vt.exec(n);null!==t&&(s.targetName=t[2])}s instanceof gt?(o+=s.createPlaceholder(r.length),r.push(s)):o+=s}return o+=t[t.length-1],new _t(o,r)}const zt=jt`
    <slot></slot>
`;var It,qt;!function(t){t.Canvas="Canvas",t.CanvasText="CanvasText",t.LinkText="LinkText",t.VisitedText="VisitedText",t.ActiveText="ActiveText",t.ButtonFace="ButtonFace",t.ButtonText="ButtonText",t.Field="Field",t.FieldText="FieldText",t.Highlight="Highlight",t.HighlightText="HighlightText",t.GrayText="GrayText"}(It||(It={})),function(t){t.ltr="ltr",t.rtl="rtl"}(qt||(qt={}));const Gt={typeRampMinus2FontSize:"10px",typeRampMinus2LineHeight:"16px",typeRampMinus1FontSize:"12px",typeRampMinus1LineHeight:"16px",typeRampBaseFontSize:"14px",typeRampBaseLineHeight:"20px",typeRampPlus1FontSize:"16px",typeRampPlus1LineHeight:"24px",typeRampPlus2FontSize:"20px",typeRampPlus2LineHeight:"28px",typeRampPlus3FontSize:"28px",typeRampPlus3LineHeight:"36px",typeRampPlus4FontSize:"34px",typeRampPlus4LineHeight:"44px",typeRampPlus5FontSize:"46px",typeRampPlus5LineHeight:"56px",typeRampPlus6FontSize:"60px",typeRampPlus6LineHeight:"72px",accentBaseColor:"#DA1A5F",accentPalette:["#FFFFFF","#FEFBFC","#FEF7FA","#FDF4F7","#FDF0F5","#FCECF2","#FBE8EF","#FBE5ED","#FAE1EA","#FADDE7","#F9D9E5","#F8D6E2","#F8D2E0","#F7CEDD","#F7CADA","#F6C7D8","#F5C3D5","#F5BFD2","#F4BBD0","#F3B8CD","#F3B4CB","#F2B0C8","#F2ACC5","#F1A9C3","#F0A5C0","#F0A1BD","#EF9DBB","#EF9AB8","#EE96B6","#ED92B3","#ED8EB0","#EC8BAE","#EC87AB","#EB83A8","#EA7FA6","#EA7CA3","#E978A1","#E9749E","#E8709B","#E76D99","#E76996","#E66593","#E66191","#E55E8E","#E45A8C","#E45689","#E35286","#E24F84","#E24B81","#E1477E","#E1437C","#E04079","#DF3C77","#DF3874","#DE3471","#DE316F","#DD2D6C","#DC2969","#DC2567","#DB2264","#DB1E62","#DA1A5F","#D4195C","#CD1859","#C71857","#C01754","#BA1651","#B3154E","#AD154B","#A71449","#A01346","#9A1243","#931240","#8D113D","#86103B","#800F38","#7A0F35","#730E32","#6D0D2F","#660C2D","#600B2A","#590B27","#530A24","#4D0921","#46081F","#40081C","#3B071A","#350617","#300615","#2B0513","#260511","#21040E","#1C030C","#000000"],backgroundColor:"#181818",baseHeightMultiplier:10,baseHorizontalSpacingMultiplier:3,cornerRadius:3,density:0,designUnit:4,direction:qt.ltr,disabledOpacity:.3,focusOutlineWidth:2,neutralPalette:["#FFFFFF","#FCFCFC","#FAFAFA","#F7F7F7","#F5F5F5","#F2F2F2","#EFEFEF","#EDEDED","#EAEAEA","#E8E8E8","#E5E5E5","#E2E2E2","#E0E0E0","#DDDDDD","#DBDBDB","#D8D8D8","#D6D6D6","#D3D3D3","#D0D0D0","#CECECE","#CBCBCB","#C9C9C9","#C6C6C6","#C3C3C3","#C1C1C1","#BEBEBE","#BCBCBC","#B9B9B9","#B6B6B6","#B4B4B4","#B1B1B1","#AFAFAF","#ACACAC","#A9A9A9","#A7A7A7","#A4A4A4","#A2A2A2","#9F9F9F","#9D9D9D","#9A9A9A","#979797","#959595","#929292","#909090","#8D8D8D","#8A8A8A","#888888","#858585","#838383","#808080","#7D7D7D","#7B7B7B","#787878","#767676","#737373","#717171","#6E6E6E","#6B6B6B","#696969","#666666","#646464","#616161","#5F5F5F","#5C5C5C","#5A5A5A","#575757","#545454","#525252","#4F4F4F","#4D4D4D","#4A4A4A","#484848","#454545","#424242","#404040","#3D3D3D","#3B3B3B","#383838","#363636","#333333","#313131","#2E2E2E","#2B2B2B","#292929","#262626","#242424","#212121","#1E1E1E","#1B1B1B","#181818","#151515","#121212","#101010","#000000"],outlineWidth:1,accentFillRestDelta:0,accentFillHoverDelta:4,accentFillActiveDelta:-5,accentFillFocusDelta:0,accentFillSelectedDelta:12,accentForegroundRestDelta:0,accentForegroundHoverDelta:6,accentForegroundActiveDelta:-4,accentForegroundFocusDelta:0,neutralFillRestDelta:7,neutralFillHoverDelta:10,neutralFillActiveDelta:5,neutralFillFocusDelta:0,neutralFillSelectedDelta:7,neutralFillInputRestDelta:0,neutralFillInputHoverDelta:0,neutralFillInputActiveDelta:0,neutralFillInputFocusDelta:0,neutralFillInputSelectedDelta:0,neutralFillStealthRestDelta:0,neutralFillStealthHoverDelta:5,neutralFillStealthActiveDelta:3,neutralFillStealthFocusDelta:0,neutralFillStealthSelectedDelta:7,neutralFillToggleHoverDelta:8,neutralFillToggleActiveDelta:-5,neutralFillToggleFocusDelta:0,baseLayerLuminance:-1,neutralFillCardDelta:3,neutralForegroundHoverDelta:0,neutralForegroundActiveDelta:0,neutralForegroundFocusDelta:0,neutralDividerRestDelta:8,neutralOutlineRestDelta:25,neutralOutlineHoverDelta:40,neutralOutlineActiveDelta:16,neutralOutlineFocusDelta:25,neutralContrastFillRestDelta:0,neutralContrastFillHoverDelta:-3,neutralContrastFillActiveDelta:7,neutralContrastFillFocusDelta:0};function Ut(t,e){return"function"==typeof t?t(e):t}function Wt(t){return e=>e&&void 0!==e[t]?e[t]:Gt[t]}const Qt=Wt("backgroundColor"),Xt=Wt("accentBaseColor"),Yt=(Wt("cornerRadius"),Wt("neutralPalette")),Zt=Wt("accentPalette"),Kt=(Wt("designUnit"),Wt("baseHeightMultiplier"),Wt("baseHorizontalSpacingMultiplier"),Wt("outlineWidth"),Wt("focusOutlineWidth"),Wt("disabledOpacity"),Wt("direction"),Wt("accentFillRestDelta"),Wt("accentFillHoverDelta")),Jt=Wt("accentFillActiveDelta"),te=Wt("accentFillFocusDelta"),ee=Wt("accentFillSelectedDelta"),re=Wt("accentForegroundRestDelta"),oe=Wt("accentForegroundHoverDelta"),ie=Wt("accentForegroundActiveDelta"),ne=Wt("accentForegroundFocusDelta"),se=Wt("neutralFillRestDelta"),ae=Wt("neutralFillHoverDelta"),le=Wt("neutralFillActiveDelta"),ce=Wt("neutralFillFocusDelta"),ue=Wt("neutralFillSelectedDelta"),he=Wt("neutralFillInputRestDelta"),de=Wt("neutralFillInputHoverDelta"),pe=Wt("neutralFillInputActiveDelta"),fe=Wt("neutralFillInputFocusDelta"),ge=Wt("neutralFillInputSelectedDelta"),ve=Wt("neutralFillStealthRestDelta"),be=Wt("neutralFillStealthHoverDelta"),ye=Wt("neutralFillStealthActiveDelta"),me=Wt("neutralFillStealthFocusDelta"),Ce=Wt("neutralFillStealthSelectedDelta"),we=Wt("neutralFillToggleHoverDelta"),Fe=Wt("neutralFillToggleActiveDelta"),xe=Wt("neutralFillToggleFocusDelta"),Pe=Wt("baseLayerLuminance"),De=Wt("neutralFillCardDelta"),Se=Wt("neutralForegroundHoverDelta"),$e=Wt("neutralForegroundActiveDelta"),ke=Wt("neutralForegroundFocusDelta"),Be=Wt("neutralDividerRestDelta"),Ae=Wt("neutralOutlineRestDelta"),Te=Wt("neutralOutlineHoverDelta"),Ee=Wt("neutralOutlineActiveDelta"),Ne=Wt("neutralOutlineFocusDelta"),Le=(Wt("neutralContrastFillRestDelta"),Wt("neutralContrastFillHoverDelta")),Re=Wt("neutralContrastFillActiveDelta"),He=Wt("neutralContrastFillFocusDelta");function Me(t,e,r){return isNaN(t)||t<=e?e:t>=r?r:t}function Oe(t,e,r){return isNaN(t)||t<=e?0:t>=r?1:t/(r-e)}function _e(t,e,r){return isNaN(t)?e:e+t*(r-e)}function Ve(t){return t*(Math.PI/180)}function je(t,e,r){return isNaN(t)||t<=0?e:t>=1?r:e+t*(r-e)}function ze(t,e,r){if(t<=0)return e%360;if(t>=1)return r%360;const o=(e-r+360)%360;return o<=(r-e+360)%360?(e-o*t+360)%360:(e+o*t+360)%360}function Ie(t,e){const r=Math.pow(10,e);return Math.round(t*r)/r}Math.PI;class qe{constructor(t,e,r,o){this.r=t,this.g=e,this.b=r,this.a="number"!=typeof o||isNaN(o)?1:o}static fromObject(t){return!t||isNaN(t.r)||isNaN(t.g)||isNaN(t.b)?null:new qe(t.r,t.g,t.b,t.a)}equalValue(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(_e(this.r,0,255))},${Math.round(_e(this.g,0,255))},${Math.round(_e(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(_e(this.r,0,255))},${Math.round(_e(this.g,0,255))},${Math.round(_e(this.b,0,255))},${Me(this.a,0,1)})`}roundToPrecision(t){return new qe(Ie(this.r,t),Ie(this.g,t),Ie(this.b,t),Ie(this.a,t))}clamp(){return new qe(Me(this.r,0,1),Me(this.g,0,1),Me(this.b,0,1),Me(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(t){return function(t){const e=Math.round(Me(t,0,255)).toString(16);return 1===e.length?"0"+e:e}(_e(t,0,255))}}const Ge=/^rgb\(\s*((?:(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*,\s*){2}(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*)\)$/i,Ue=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function We(t){const e=Ue.exec(t);if(null===e)return null;let r=e[1];if(3===r.length){const t=r.charAt(0),e=r.charAt(1),o=r.charAt(2);r=t.concat(t,e,e,o,o)}const o=parseInt(r,16);return isNaN(o)?null:new qe(Oe((16711680&o)>>>16,0,255),Oe((65280&o)>>>8,0,255),Oe(255&o,0,255),1)}class Qe{constructor(t,e,r){this.h=t,this.s=e,this.l=r}static fromObject(t){return!t||isNaN(t.h)||isNaN(t.s)||isNaN(t.l)?null:new Qe(t.h,t.s,t.l)}equalValue(t){return this.h===t.h&&this.s===t.s&&this.l===t.l}roundToPrecision(t){return new Qe(Ie(this.h,t),Ie(this.s,t),Ie(this.l,t))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class Xe{constructor(t,e,r){this.h=t,this.s=e,this.v=r}static fromObject(t){return!t||isNaN(t.h)||isNaN(t.s)||isNaN(t.v)?null:new Xe(t.h,t.s,t.v)}equalValue(t){return this.h===t.h&&this.s===t.s&&this.v===t.v}roundToPrecision(t){return new Xe(Ie(this.h,t),Ie(this.s,t),Ie(this.v,t))}toObject(){return{h:this.h,s:this.s,v:this.v}}}class Ye{constructor(t,e,r){this.l=t,this.a=e,this.b=r}static fromObject(t){return!t||isNaN(t.l)||isNaN(t.a)||isNaN(t.b)?null:new Ye(t.l,t.a,t.b)}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new Ye(Ie(this.l,t),Ie(this.a,t),Ie(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}}Ye.epsilon=216/24389,Ye.kappa=24389/27;class Ze{constructor(t,e,r){this.l=t,this.c=e,this.h=r}static fromObject(t){return!t||isNaN(t.l)||isNaN(t.c)||isNaN(t.h)?null:new Ze(t.l,t.c,t.h)}equalValue(t){return this.l===t.l&&this.c===t.c&&this.h===t.h}roundToPrecision(t){return new Ze(Ie(this.l,t),Ie(this.c,t),Ie(this.h,t))}toObject(){return{l:this.l,c:this.c,h:this.h}}}class Ke{constructor(t,e,r){this.x=t,this.y=e,this.z=r}static fromObject(t){return!t||isNaN(t.x)||isNaN(t.y)||isNaN(t.z)?null:new Ke(t.x,t.y,t.z)}equalValue(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}roundToPrecision(t){return new Ke(Ie(this.x,t),Ie(this.y,t),Ie(this.z,t))}toObject(){return{x:this.x,y:this.y,z:this.z}}}function Je(t){return.2126*t.r+.7152*t.g+.0722*t.b}function tr(t){function e(t){return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}return Je(new qe(e(t.r),e(t.g),e(t.b),1))}Ke.whitePoint=new Ke(.95047,1,1.08883);const er=(t,e)=>(t+.05)/(e+.05);function rr(t,e){const r=tr(t),o=tr(e);return r>o?er(r,o):er(o,r)}function or(t){const e=Math.max(t.r,t.g,t.b),r=Math.min(t.r,t.g,t.b),o=e-r;let i=0;0!==o&&(i=e===t.r?(t.g-t.b)/o%6*60:e===t.g?60*((t.b-t.r)/o+2):60*((t.r-t.g)/o+4)),i<0&&(i+=360);const n=(e+r)/2;let s=0;return 0!==o&&(s=o/(1-Math.abs(2*n-1))),new Qe(i,s,n)}function ir(t,e=1){const r=(1-Math.abs(2*t.l-1))*t.s,o=r*(1-Math.abs(t.h/60%2-1)),i=t.l-r/2;let n=0,s=0,a=0;return t.h<60?(n=r,s=o,a=0):t.h<120?(n=o,s=r,a=0):t.h<180?(n=0,s=r,a=o):t.h<240?(n=0,s=o,a=r):t.h<300?(n=o,s=0,a=r):t.h<360&&(n=r,s=0,a=o),new qe(n+i,s+i,a+i,e)}function nr(t){const e=Math.max(t.r,t.g,t.b),r=e-Math.min(t.r,t.g,t.b);let o=0;0!==r&&(o=e===t.r?(t.g-t.b)/r%6*60:e===t.g?60*((t.b-t.r)/r+2):60*((t.r-t.g)/r+4)),o<0&&(o+=360);let i=0;return 0!==e&&(i=r/e),new Xe(o,i,e)}function sr(t){function e(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}const r=e(t.r),o=e(t.g),i=e(t.b);return new Ke(.4124564*r+.3575761*o+.1804375*i,.2126729*r+.7151522*o+.072175*i,.0193339*r+.119192*o+.9503041*i)}function ar(t,e=1){function r(t){return t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055}const o=r(3.2404542*t.x-1.5371385*t.y-.4985314*t.z),i=r(-.969266*t.x+1.8760108*t.y+.041556*t.z),n=r(.0556434*t.x-.2040259*t.y+1.0572252*t.z);return new qe(o,i,n,e)}function lr(t){return function(t){function e(t){return t>Ye.epsilon?Math.pow(t,1/3):(Ye.kappa*t+16)/116}const r=e(t.x/Ke.whitePoint.x),o=e(t.y/Ke.whitePoint.y),i=e(t.z/Ke.whitePoint.z);return new Ye(116*o-16,500*(r-o),200*(o-i))}(sr(t))}function cr(t,e=1){return ar(function(t){const e=(t.l+16)/116,r=e+t.a/500,o=e-t.b/200,i=Math.pow(r,3),n=Math.pow(e,3),s=Math.pow(o,3);let a=0;a=i>Ye.epsilon?i:(116*r-16)/Ye.kappa;let l=0;l=t.l>Ye.epsilon*Ye.kappa?n:t.l/Ye.kappa;let c=0;return c=s>Ye.epsilon?s:(116*o-16)/Ye.kappa,a=Ke.whitePoint.x*a,l=Ke.whitePoint.y*l,c=Ke.whitePoint.z*c,new Ke(a,l,c)}(t),e)}function ur(t){return function(t){let e=0;(Math.abs(t.b)>.001||Math.abs(t.a)>.001)&&(e=Math.atan2(t.b,t.a)*(180/Math.PI)),e<0&&(e+=360);const r=Math.sqrt(t.a*t.a+t.b*t.b);return new Ze(t.l,r,e)}(lr(t))}function hr(t,e=1){return cr(function(t){let e=0,r=0;return 0!==t.h&&(e=Math.cos(Ve(t.h))*t.c,r=Math.sin(Ve(t.h))*t.c),new Ye(t.l,e,r)}(t),e)}const dr="object"==typeof global&&global&&global.Object===Object&&global;var pr="object"==typeof self&&self&&self.Object===Object&&self;const fr=dr||pr||Function("return this")(),gr=fr.Symbol;var vr=Object.prototype,br=vr.hasOwnProperty,yr=vr.toString,mr=gr?gr.toStringTag:void 0;var Cr=Object.prototype.toString;var wr=gr?gr.toStringTag:void 0;const Fr=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":wr&&wr in Object(t)?function(t){var e=br.call(t,mr),r=t[mr];try{t[mr]=void 0;var o=!0}catch(t){}var i=yr.call(t);return o&&(e?t[mr]=r:delete t[mr]),i}(t):function(t){return Cr.call(t)}(t)},xr=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},Pr=fr["__core-js_shared__"];var Dr,Sr=(Dr=/[^.]+$/.exec(Pr&&Pr.keys&&Pr.keys.IE_PROTO||""))?"Symbol(src)_1."+Dr:"";var $r=Function.prototype.toString;var kr=/^\[object .+?Constructor\]$/,Br=Function.prototype,Ar=Object.prototype,Tr=Br.toString,Er=Ar.hasOwnProperty,Nr=RegExp("^"+Tr.call(Er).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Lr=function(t){return!(!xr(t)||(e=t,Sr&&Sr in e))&&(function(t){if(!xr(t))return!1;var e=Fr(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}(t)?Nr:kr).test(function(t){if(null!=t){try{return $r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e},Rr=function(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Lr(r)?r:void 0},Hr=Rr(Object,"create");var Mr=Object.prototype.hasOwnProperty;var Or=Object.prototype.hasOwnProperty;function _r(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}_r.prototype.clear=function(){this.__data__=Hr?Hr(null):{},this.size=0},_r.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},_r.prototype.get=function(t){var e=this.__data__;if(Hr){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return Mr.call(e,t)?e[t]:void 0},_r.prototype.has=function(t){var e=this.__data__;return Hr?void 0!==e[t]:Or.call(e,t)},_r.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=Hr&&void 0===e?"__lodash_hash_undefined__":e,this};const Vr=_r,jr=function(t,e){for(var r=t.length;r--;)if((o=t[r][0])===(i=e)||o!=o&&i!=i)return r;var o,i;return-1};var zr=Array.prototype.splice;function Ir(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}Ir.prototype.clear=function(){this.__data__=[],this.size=0},Ir.prototype.delete=function(t){var e=this.__data__,r=jr(e,t);return!(r<0||(r==e.length-1?e.pop():zr.call(e,r,1),--this.size,0))},Ir.prototype.get=function(t){var e=this.__data__,r=jr(e,t);return r<0?void 0:e[r][1]},Ir.prototype.has=function(t){return jr(this.__data__,t)>-1},Ir.prototype.set=function(t,e){var r=this.__data__,o=jr(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this};const qr=Ir,Gr=Rr(fr,"Map"),Ur=function(t,e){var r,o,i=t.__data__;return("string"==(o=typeof(r=e))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==r:null===r)?i["string"==typeof e?"string":"hash"]:i.map};function Wr(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}Wr.prototype.clear=function(){this.size=0,this.__data__={hash:new Vr,map:new(Gr||qr),string:new Vr}},Wr.prototype.delete=function(t){var e=Ur(this,t).delete(t);return this.size-=e?1:0,e},Wr.prototype.get=function(t){return Ur(this,t).get(t)},Wr.prototype.has=function(t){return Ur(this,t).has(t)},Wr.prototype.set=function(t,e){var r=Ur(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this};const Qr=Wr;function Xr(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var o=arguments,i=e?e.apply(this,o):o[0],n=r.cache;if(n.has(i))return n.get(i);var s=t.apply(this,o);return r.cache=n.set(i,s)||n,s};return r.cache=new(Xr.Cache||Qr),r}Xr.Cache=Qr;const Yr=Xr;var Zr;function Kr(t){const e=Yr(t);return function(t){return"function"==typeof t||"string"==typeof t?r=>e(Object.assign({},r,{backgroundColor:"function"==typeof t?t(r):t})):e(t)}}function Jr(t,e){const r=Yr(e);return e=>"function"==typeof e||"string"==typeof e?o=>r(Object.assign({},o,{backgroundColor:"function"==typeof e?e(o):e}))[t]:r(e)[t]}!function(t){t.rest="rest",t.hover="hover",t.active="active",t.focus="focus",t.selected="selected"}(Zr||(Zr={}));const to=Yr((t=>{let e=We(t);if(null!==e)return e;if(e=function(t){const e=Ge.exec(t);if(null===e)return null;const r=e[1].split(",");return new qe(Oe(Number(r[0]),0,255),Oe(Number(r[1]),0,255),Oe(Number(r[2]),0,255),1)}(t),null!==e)return e;throw new Error(`${t} cannot be converted to a ColorRGBA64. Color strings must be one of the following formats: "#RGB", "#RRGGBB", or "rgb(r, g, b)"`)}));function eo(t){return e=t,Ue.test(e)||function(t){return Ge.test(t)}(t);var e}const ro=Yr(((t,e)=>rr(to(t),to(e))),((t,e)=>t+e));function oo(t){return tr(to(t))}function io(...t){return e=>Math.max.apply(null,t.map((t=>t(e))))}const no=(t,e,r)=>Math.min(Math.max(t,e),r);var so;function ao(t,e){return r=>{if(!eo(e))return-1;const o=Ut(t,r),i=o.indexOf(e);return-1!==i?i:o.findIndex((t=>{return eo(t)&&(r=t,to(e).equalValue(to(r)));var r}))}}function lo(t,e){return r=>{const o=Ut(t,r),i=Ut(e,r),n=ao(o,i)(r);let s;if(-1!==n)return n;try{s=oo(i)}catch(t){s=-1}return-1===s?0:o.map(((t,e)=>({luminance:oo(t),index:e}))).reduce(((t,e)=>Math.abs(e.luminance-s)<Math.abs(t.luminance-s)?e:t)).index}}function co(t){return oo(Qt(t))<=(-.1+Math.sqrt(.21))/2}function uo(t,e){return"function"==typeof t?r=>e(r)[no(t(r),0,e(r).length-1)]:e[no(t,0,e.length-1)]}function ho(t){return(e,r)=>o=>uo(co(o)?Ut(r,o):Ut(e,o),t(o))}function po(t,e,r=0,o=t.length-1){if(o===r)return t[r];const i=Math.floor((o-r)/2)+r;return e(t[i])?po(t,e,r,i):po(t,e,i+1,o)}function fo(t){return e=>r=>o=>i=>n=>{const s=Ut(t,n),a=Ut(e,n),l=a.length,c=no(r(s,a,n),0,l-1),u=o(c,a,n),h=[].concat(a),d=l-1;let p=c;return-1===u&&(h.reverse(),p=d-p),po(h,(function(t){return i(ro(s,t))}),p,d)}}function go(t,e,r){return lo(e,t)(r)}function vo(t){return lo(Yt,Qt(t))(t)}function bo(t,e,r,o,i,n){return s=>{const a=Ut(t,s),l=co(s)?-1:1,c=fo(Qt)(a)(go)((()=>l))((u=Ut(e,s),t=>t>=u))(s);var u;const h=ao(t,c)(s),d=Ut(r,s),p=Ut(o,s),f=Ut(i,s),g=Ut(n,s);return function(t,e,r,o,i,n,s){const a=t+r*Math.abs(o-i),l=1===r?o<i:r*o>r*i,c=l?t:a,u=l?a:t,h=c+r*n,d=c+r*s;return{rest:uo(c,e),hover:uo(u,e),active:uo(h,e),focus:uo(d,e)}}(h,a,l,d,p,f,g)}}!function(t){t.neutral="neutral",t.accent="accent"}(so||(so={}));const yo=Kr(bo(Yt,14,0,Se,$e,ke)),mo=Jr(Zr.rest,yo);function Co(t){return`:host([hidden]){display:none}:host{display:${t}}`}Jr(Zr.hover,yo),Jr(Zr.active,yo),Jr(Zr.focus,yo);const wo=m`
    ${Co("block")};
`,Fo=new G("neutral-foreground-rest",mo,(t=>t)),xo=m`
    :host {
        background-color: var(--background-color);
        color: ${Fo.var};
    }
`.withBehaviors(Fo,Q(m`
            :host {
                background-color: ${It.ButtonFace};
                box-shadow: 0 0 0 1px ${It.CanvasText};
                color: ${It.ButtonText};
            }
        `));let Po=class extends pt{constructor(){super(...arguments),this.noPaint=!1}noPaintChanged(){this.noPaint||void 0===this.backgroundColor?this.$fastController.removeStyles(xo):this.$fastController.addStyles(xo)}backgroundColorChanged(){this.noPaintChanged()}};var Do;e([q({attribute:"no-paint",mode:"boolean"})],Po.prototype,"noPaint",void 0),e([ft({attribute:"background-color",default:Gt.backgroundColor})],Po.prototype,"backgroundColor",void 0),e([ft({attribute:"accent-base-color",cssCustomProperty:!1,default:Gt.accentBaseColor})],Po.prototype,"accentBaseColor",void 0),e([ft({attribute:!1,cssCustomProperty:!1,default:Gt.neutralPalette})],Po.prototype,"neutralPalette",void 0),e([ft({attribute:!1,cssCustomProperty:!1,default:Gt.accentPalette})],Po.prototype,"accentPalette",void 0),e([ft({default:Gt.density,converter:z})],Po.prototype,"density",void 0),e([ft({attribute:"design-unit",converter:z,default:Gt.designUnit})],Po.prototype,"designUnit",void 0),e([ft({attribute:"direction",cssCustomProperty:!1,default:Gt.direction})],Po.prototype,"direction",void 0),e([ft({attribute:"base-height-multiplier",default:Gt.baseHeightMultiplier,converter:z})],Po.prototype,"baseHeightMultiplier",void 0),e([ft({attribute:"base-horizontal-spacing-multiplier",converter:z,default:Gt.baseHorizontalSpacingMultiplier})],Po.prototype,"baseHorizontalSpacingMultiplier",void 0),e([ft({attribute:"corner-radius",converter:z,default:Gt.cornerRadius})],Po.prototype,"cornerRadius",void 0),e([ft({attribute:"outline-width",converter:z,default:Gt.outlineWidth})],Po.prototype,"outlineWidth",void 0),e([ft({attribute:"focus-outline-width",converter:z,default:Gt.focusOutlineWidth})],Po.prototype,"focusOutlineWidth",void 0),e([ft({attribute:"disabled-opacity",converter:z,default:Gt.disabledOpacity})],Po.prototype,"disabledOpacity",void 0),e([ft({attribute:"type-ramp-minus-2-font-size",default:Gt.typeRampMinus2FontSize})],Po.prototype,"typeRampMinus2FontSize",void 0),e([ft({attribute:"type-ramp-minus-2-line-height",default:Gt.typeRampMinus2LineHeight})],Po.prototype,"typeRampMinus2LineHeight",void 0),e([ft({attribute:"type-ramp-minus-1-font-size",default:Gt.typeRampMinus1FontSize})],Po.prototype,"typeRampMinus1FontSize",void 0),e([ft({attribute:"type-ramp-minus-1-line-height",default:Gt.typeRampMinus1LineHeight})],Po.prototype,"typeRampMinus1LineHeight",void 0),e([ft({attribute:"type-ramp-base-font-size",default:Gt.typeRampBaseFontSize})],Po.prototype,"typeRampBaseFontSize",void 0),e([ft({attribute:"type-ramp-base-line-height",default:Gt.typeRampBaseLineHeight})],Po.prototype,"typeRampBaseLineHeight",void 0),e([ft({attribute:"type-ramp-plus-1-font-size",default:Gt.typeRampPlus1FontSize})],Po.prototype,"typeRampPlus1FontSize",void 0),e([ft({attribute:"type-ramp-plus-1-line-height",default:Gt.typeRampPlus1LineHeight})],Po.prototype,"typeRampPlus1LineHeight",void 0),e([ft({attribute:"type-ramp-plus-2-font-size",default:Gt.typeRampPlus2FontSize})],Po.prototype,"typeRampPlus2FontSize",void 0),e([ft({attribute:"type-ramp-plus-2-line-height",default:Gt.typeRampPlus2LineHeight})],Po.prototype,"typeRampPlus2LineHeight",void 0),e([ft({attribute:"type-ramp-plus-3-font-size",default:Gt.typeRampPlus3FontSize})],Po.prototype,"typeRampPlus3FontSize",void 0),e([ft({attribute:"type-ramp-plus-3-line-height",default:Gt.typeRampPlus3LineHeight})],Po.prototype,"typeRampPlus3LineHeight",void 0),e([ft({attribute:"type-ramp-plus-4-font-size",default:Gt.typeRampPlus4FontSize})],Po.prototype,"typeRampPlus4FontSize",void 0),e([ft({attribute:"type-ramp-plus-4-line-height",default:Gt.typeRampPlus4LineHeight})],Po.prototype,"typeRampPlus4LineHeight",void 0),e([ft({attribute:"type-ramp-plus-5-font-size",default:Gt.typeRampPlus5FontSize})],Po.prototype,"typeRampPlus5FontSize",void 0),e([ft({attribute:"type-ramp-plus-5-line-height",default:Gt.typeRampPlus5LineHeight})],Po.prototype,"typeRampPlus5LineHeight",void 0),e([ft({attribute:"type-ramp-plus-6-font-size",default:Gt.typeRampPlus6FontSize})],Po.prototype,"typeRampPlus6FontSize",void 0),e([ft({attribute:"type-ramp-plus-6-line-height",default:Gt.typeRampPlus6LineHeight})],Po.prototype,"typeRampPlus6LineHeight",void 0),e([ft({attribute:"accent-fill-rest-delta",converter:z,cssCustomProperty:!1,default:Gt.accentFillRestDelta})],Po.prototype,"accentFillRestDelta",void 0),e([ft({attribute:"accent-fill-hover-delta",cssCustomProperty:!1,converter:z,default:Gt.accentFillHoverDelta})],Po.prototype,"accentFillHoverDelta",void 0),e([ft({attribute:"accent-fill-active-delta",cssCustomProperty:!1,converter:z,default:Gt.accentFillActiveDelta})],Po.prototype,"accentFillActiveDelta",void 0),e([ft({attribute:"accent-fill-focus-delta",converter:z,cssCustomProperty:!1,default:Gt.accentFillFocusDelta})],Po.prototype,"accentFillFocusDelta",void 0),e([ft({attribute:"accent-fill-selected-delta",converter:z,cssCustomProperty:!1,default:Gt.accentFillSelectedDelta})],Po.prototype,"accentFillSelectedDelta",void 0),e([ft({attribute:"accent-foreground-rest-delta",converter:z,cssCustomProperty:!1,default:Gt.accentForegroundRestDelta})],Po.prototype,"accentForegroundRestDelta",void 0),e([ft({attribute:"accent-foreground-hover-delta",converter:z,cssCustomProperty:!1,default:Gt.accentForegroundHoverDelta})],Po.prototype,"accentForegroundHoverDelta",void 0),e([ft({attribute:"accent-foreground-active-delta",converter:z,cssCustomProperty:!1,default:Gt.accentForegroundActiveDelta})],Po.prototype,"accentForegroundActiveDelta",void 0),e([ft({attribute:"accent-foreground-focus-delta",converter:z,cssCustomProperty:!1,default:Gt.accentForegroundFocusDelta})],Po.prototype,"accentForegroundFocusDelta",void 0),e([ft({attribute:"neutral-fill-rest-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralFillRestDelta})],Po.prototype,"neutralFillRestDelta",void 0),e([ft({attribute:"neutral-fill-hover-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralFillHoverDelta})],Po.prototype,"neutralFillHoverDelta",void 0),e([ft({attribute:"neutral-fill-active-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralFillActiveDelta})],Po.prototype,"neutralFillActiveDelta",void 0),e([ft({attribute:"neutral-fill-focus-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralFillFocusDelta})],Po.prototype,"neutralFillFocusDelta",void 0),e([ft({attribute:"neutral-fill-selected-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralFillSelectedDelta})],Po.prototype,"neutralFillSelectedDelta",void 0),e([ft({attribute:"neutral-fill-input-rest-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralFillInputRestDelta})],Po.prototype,"neutralFillInputRestDelta",void 0),e([ft({attribute:"neutral-fill-input-hover-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralFillInputHoverDelta})],Po.prototype,"neutralFillInputHoverDelta",void 0),e([ft({attribute:"neutral-fill-input-active-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralFillInputActiveDelta})],Po.prototype,"neutralFillInputActiveDelta",void 0),e([ft({attribute:"neutral-fill-input-focus-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralFillInputFocusDelta})],Po.prototype,"neutralFillInputFocusDelta",void 0),e([ft({attribute:"neutral-fill-input-selected-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralFillInputSelectedDelta})],Po.prototype,"neutralFillInputSelectedDelta",void 0),e([ft({attribute:"neutral-fill-stealth-rest-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralFillStealthRestDelta})],Po.prototype,"neutralFillStealthRestDelta",void 0),e([ft({attribute:"neutral-fill-stealth-hover-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralFillStealthHoverDelta})],Po.prototype,"neutralFillStealthHoverDelta",void 0),e([ft({attribute:"neutral-fill-stealth-active-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralFillStealthActiveDelta})],Po.prototype,"neutralFillStealthActiveDelta",void 0),e([ft({attribute:"neutral-fill-stealth-focus-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralFillStealthFocusDelta})],Po.prototype,"neutralFillStealthFocusDelta",void 0),e([ft({attribute:"neutral-fill-stealth-selected-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralFillStealthSelectedDelta})],Po.prototype,"neutralFillStealthSelectedDelta",void 0),e([ft({attribute:"neutral-fill-toggle-hover-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralFillToggleHoverDelta})],Po.prototype,"neutralFillToggleHoverDelta",void 0),e([ft({attribute:"neutral-fill-toggle-active-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralFillToggleActiveDelta})],Po.prototype,"neutralFillToggleActiveDelta",void 0),e([ft({attribute:"neutral-fill-toggle-focus-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralFillToggleFocusDelta})],Po.prototype,"neutralFillToggleFocusDelta",void 0),e([ft({attribute:"base-layer-luminance",converter:z,cssCustomProperty:!1,default:Gt.baseLayerLuminance})],Po.prototype,"baseLayerLuminance",void 0),e([ft({attribute:"neutral-fill-card-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralFillCardDelta})],Po.prototype,"neutralFillCardDelta",void 0),e([ft({attribute:"neutral-foreground-hover-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralForegroundHoverDelta})],Po.prototype,"neutralForegroundHoverDelta",void 0),e([ft({attribute:"neutral-foreground-active-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralForegroundActiveDelta})],Po.prototype,"neutralForegroundActiveDelta",void 0),e([ft({attribute:"neutral-foreground-focus-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralForegroundFocusDelta})],Po.prototype,"neutralForegroundFocusDelta",void 0),e([ft({attribute:"neutral-divider-rest-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralDividerRestDelta})],Po.prototype,"neutralDividerRestDelta",void 0),e([ft({attribute:"neutral-outline-rest-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralOutlineRestDelta})],Po.prototype,"neutralOutlineRestDelta",void 0),e([ft({attribute:"neutral-outline-hover-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralOutlineHoverDelta})],Po.prototype,"neutralOutlineHoverDelta",void 0),e([ft({attribute:"neutral-outline-active-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralOutlineActiveDelta})],Po.prototype,"neutralOutlineActiveDelta",void 0),e([ft({attribute:"neutral-outline-focus-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralOutlineFocusDelta})],Po.prototype,"neutralOutlineFocusDelta",void 0),e([ft({attribute:"neutral-contrast-fill-rest-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralContrastFillRestDelta})],Po.prototype,"neutralContrastFillRestDelta",void 0),e([ft({attribute:"neutral-contrast-fill-hover-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralContrastFillHoverDelta})],Po.prototype,"neutralContrastFillHoverDelta",void 0),e([ft({attribute:"neutral-contrast-fill-active-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralContrastFillActiveDelta})],Po.prototype,"neutralContrastFillActiveDelta",void 0),e([ft({attribute:"neutral-contrast-fill-focus-delta",converter:z,cssCustomProperty:!1,default:Gt.neutralContrastFillFocusDelta})],Po.prototype,"neutralContrastFillFocusDelta",void 0),Po=e([(Do={name:"fast-design-system-provider",template:zt,styles:wo},t=>{nt(Do)(t),t.registerTagName("string"==typeof Do?Do:Do.name)})],Po);const So=jt`
    <slot></slot>
`;function $o(t,e,r=18){const o=ur(t);let i=o.c+e*r;return i<0&&(i=0),hr(new Ze(o.l,i,o.h))}function ko(t,e){return t*e}function Bo(t,e){return new qe(ko(t.r,e.r),ko(t.g,e.g),ko(t.b,e.b),1)}function Ao(t,e){return Me(t<.5?2*e*t:1-2*(1-e)*(1-t),0,1)}function To(t,e){return new qe(Ao(t.r,e.r),Ao(t.g,e.g),Ao(t.b,e.b),1)}var Eo,No;function Lo(t,e,r,o){if(isNaN(t)||t<=0)return r;if(t>=1)return o;switch(e){case No.HSL:return ir(function(t,e,r){return isNaN(t)||t<=0?e:t>=1?r:new Qe(ze(t,e.h,r.h),je(t,e.s,r.s),je(t,e.l,r.l))}(t,or(r),or(o)));case No.HSV:return function(t,e=1){const r=t.s*t.v,o=r*(1-Math.abs(t.h/60%2-1)),i=t.v-r;let n=0,s=0,a=0;return t.h<60?(n=r,s=o,a=0):t.h<120?(n=o,s=r,a=0):t.h<180?(n=0,s=r,a=o):t.h<240?(n=0,s=o,a=r):t.h<300?(n=o,s=0,a=r):t.h<360&&(n=r,s=0,a=o),new qe(n+i,s+i,a+i,e)}(function(t,e,r){return isNaN(t)||t<=0?e:t>=1?r:new Xe(ze(t,e.h,r.h),je(t,e.s,r.s),je(t,e.v,r.v))}(t,nr(r),nr(o)));case No.XYZ:return ar(function(t,e,r){return isNaN(t)||t<=0?e:t>=1?r:new Ke(je(t,e.x,r.x),je(t,e.y,r.y),je(t,e.z,r.z))}(t,sr(r),sr(o)));case No.LAB:return cr(function(t,e,r){return isNaN(t)||t<=0?e:t>=1?r:new Ye(je(t,e.l,r.l),je(t,e.a,r.a),je(t,e.b,r.b))}(t,lr(r),lr(o)));case No.LCH:return hr(function(t,e,r){return isNaN(t)||t<=0?e:t>=1?r:new Ze(je(t,e.l,r.l),je(t,e.c,r.c),ze(t,e.h,r.h))}(t,ur(r),ur(o)));default:return function(t,e,r){return isNaN(t)||t<=0?e:t>=1?r:new qe(je(t,e.r,r.r),je(t,e.g,r.g),je(t,e.b,r.b),je(t,e.a,r.a))}(t,r,o)}}!function(t){t[t.Burn=0]="Burn",t[t.Color=1]="Color",t[t.Darken=2]="Darken",t[t.Dodge=3]="Dodge",t[t.Lighten=4]="Lighten",t[t.Multiply=5]="Multiply",t[t.Overlay=6]="Overlay",t[t.Screen=7]="Screen"}(Eo||(Eo={})),function(t){t[t.RGB=0]="RGB",t[t.HSL=1]="HSL",t[t.HSV=2]="HSV",t[t.XYZ=3]="XYZ",t[t.LAB=4]="LAB",t[t.LCH=5]="LCH"}(No||(No={}));class Ro{constructor(t){if(null==t||0===t.length)throw new Error("The stops argument must be non-empty");this.stops=this.sortColorScaleStops(t)}static createBalancedColorScale(t){if(null==t||0===t.length)throw new Error("The colors argument must be non-empty");const e=new Array(t.length);for(let r=0;r<t.length;r++)0===r?e[r]={color:t[r],position:0}:r===t.length-1?e[r]={color:t[r],position:1}:e[r]={color:t[r],position:r*(1/(t.length-1))};return new Ro(e)}getColor(t,e=No.RGB){if(1===this.stops.length)return this.stops[0].color;if(t<=0)return this.stops[0].color;if(t>=1)return this.stops[this.stops.length-1].color;let r=0;for(let e=0;e<this.stops.length;e++)this.stops[e].position<=t&&(r=e);let o=r+1;return o>=this.stops.length&&(o=this.stops.length-1),Lo((t-this.stops[r].position)*(1/(this.stops[o].position-this.stops[r].position)),e,this.stops[r].color,this.stops[o].color)}trim(t,e,r=No.RGB){if(t<0||e>1||e<t)throw new Error("Invalid bounds");if(t===e)return new Ro([{color:this.getColor(t,r),position:0}]);const o=[];for(let r=0;r<this.stops.length;r++)this.stops[r].position>=t&&this.stops[r].position<=e&&o.push(this.stops[r]);if(0===o.length)return new Ro([{color:this.getColor(t),position:t},{color:this.getColor(e),position:e}]);o[0].position!==t&&o.unshift({color:this.getColor(t),position:t}),o[o.length-1].position!==e&&o.push({color:this.getColor(e),position:e});const i=e-t,n=new Array(o.length);for(let e=0;e<o.length;e++)n[e]={color:o[e].color,position:(o[e].position-t)/i};return new Ro(n)}findNextColor(t,e,r=!1,o=No.RGB,i=.005,n=32){isNaN(t)||t<=0?t=0:t>=1&&(t=1);const s=this.getColor(t,o),a=r?0:1;if(rr(s,this.getColor(a,o))<=e)return a;let l=r?0:t,c=r?t:0,u=a,h=0;for(;h<=n;){u=Math.abs(c-l)/2+l;const t=rr(s,this.getColor(u,o));if(Math.abs(t-e)<=i)return u;t>e?r?l=u:c=u:r?c=u:l=u,h++}return u}clone(){const t=new Array(this.stops.length);for(let e=0;e<t.length;e++)t[e]={color:this.stops[e].color,position:this.stops[e].position};return new Ro(t)}sortColorScaleStops(t){return t.sort(((t,e)=>{const r=t.position,o=e.position;return r<o?-1:r>o?1:0}))}}class Ho{constructor(t){this.config=Object.assign({},Ho.defaultPaletteConfig,t),this.palette=[],this.updatePaletteColors()}updatePaletteGenerationValues(t){let e=!1;for(const r in t)this.config[r]&&(this.config[r].equalValue?this.config[r].equalValue(t[r])||(this.config[r]=t[r],e=!0):t[r]!==this.config[r]&&(this.config[r]=t[r],e=!0));return e&&this.updatePaletteColors(),e}updatePaletteColors(){const t=this.generatePaletteColorScale();for(let e=0;e<this.config.steps;e++)this.palette[e]=t.getColor(e/(this.config.steps-1),this.config.interpolationMode)}generatePaletteColorScale(){const t=or(this.config.baseColor),e=new Ro([{position:0,color:this.config.scaleColorLight},{position:.5,color:this.config.baseColor},{position:1,color:this.config.scaleColorDark}]).trim(this.config.clipLight,1-this.config.clipDark);let r=e.getColor(0),o=e.getColor(1);if(t.s>=this.config.saturationAdjustmentCutoff&&(r=$o(r,this.config.saturationLight),o=$o(o,this.config.saturationDark)),0!==this.config.multiplyLight){const t=Bo(this.config.baseColor,r);r=Lo(this.config.multiplyLight,this.config.interpolationMode,r,t)}if(0!==this.config.multiplyDark){const t=Bo(this.config.baseColor,o);o=Lo(this.config.multiplyDark,this.config.interpolationMode,o,t)}if(0!==this.config.overlayLight){const t=To(this.config.baseColor,r);r=Lo(this.config.overlayLight,this.config.interpolationMode,r,t)}if(0!==this.config.overlayDark){const t=To(this.config.baseColor,o);o=Lo(this.config.overlayDark,this.config.interpolationMode,o,t)}return this.config.baseScalePosition?this.config.baseScalePosition<=0?new Ro([{position:0,color:this.config.baseColor},{position:1,color:o.clamp()}]):this.config.baseScalePosition>=1?new Ro([{position:0,color:r.clamp()},{position:1,color:this.config.baseColor}]):new Ro([{position:0,color:r.clamp()},{position:this.config.baseScalePosition,color:this.config.baseColor},{position:1,color:o.clamp()}]):new Ro([{position:0,color:r.clamp()},{position:.5,color:this.config.baseColor},{position:1,color:o.clamp()}])}}Ho.defaultPaletteConfig={baseColor:We("#808080"),steps:11,interpolationMode:No.RGB,scaleColorLight:new qe(1,1,1,1),scaleColorDark:new qe(0,0,0,1),clipLight:.185,clipDark:.16,saturationAdjustmentCutoff:.05,saturationLight:.35,saturationDark:1.25,overlayLight:0,overlayDark:.25,multiplyLight:0,multiplyDark:0,baseScalePosition:.5},Ho.greyscalePaletteConfig={baseColor:We("#808080"),steps:11,interpolationMode:No.RGB,scaleColorLight:new qe(1,1,1,1),scaleColorDark:new qe(0,0,0,1),clipLight:0,clipDark:0,saturationAdjustmentCutoff:0,saturationLight:0,saturationDark:0,overlayLight:0,overlayDark:0,multiplyLight:0,multiplyDark:0,baseScalePosition:.5},Ho.defaultPaletteConfig.scaleColorLight,Ho.defaultPaletteConfig.scaleColorDark;class Mo{constructor(t){this.palette=[],this.config=Object.assign({},Mo.defaultPaletteConfig,t),this.regenPalettes()}regenPalettes(){let t=this.config.steps;(isNaN(t)||t<3)&&(t=3);const e=.14,r=new qe(e,e,e,1),o=new Ho(Object.assign(Object.assign({},Ho.greyscalePaletteConfig),{baseColor:r,baseScalePosition:86/94,steps:t})).palette,i=(Je(this.config.baseColor)+or(this.config.baseColor).l)/2,n=this.matchRelativeLuminanceIndex(i,o)/(t-1),s=this.matchRelativeLuminanceIndex(e,o)/(t-1),a=or(this.config.baseColor),l=ir(Qe.fromObject({h:a.h,s:a.s,l:e})),c=ir(Qe.fromObject({h:a.h,s:a.s,l:.06})),u=new Array(5);u[0]={position:0,color:new qe(1,1,1,1)},u[1]={position:n,color:this.config.baseColor},u[2]={position:s,color:l},u[3]={position:.99,color:c},u[4]={position:1,color:new qe(0,0,0,1)};const h=new Ro(u);this.palette=new Array(t);for(let e=0;e<t;e++){const r=h.getColor(e/(t-1),No.RGB);this.palette[e]=r}}matchRelativeLuminanceIndex(t,e){let r=Number.MAX_VALUE,o=0,i=0;const n=e.length;for(;i<n;i++){const n=Math.abs(Je(e[i])-t);n<r&&(r=n,o=i)}return o}}function Oo(t){return new Mo({baseColor:t}).palette.map((t=>t.toStringHexRGB().toUpperCase()))}Mo.defaultPaletteConfig={baseColor:We("#808080"),steps:94};const _o=t=>{const e=De(t),r=lo(Yt,Qt(t))(t);return uo(r-(r<e?-1*e:e),Yt(t))};function Vo(t){return"function"==typeof t?e=>_o(Object.assign({},e,{backgroundColor:t(e)})):_o(t)}const jo=m`
    ${Co("block")} :host {
        --elevation: 4;
        display: block;
        contain: content;
        height: var(--card-height, 100%);
        width: var(--card-width, 100%);
        box-sizing: border-box;
        background: var(--background-color);
        border-radius: calc(var(--corner-radius) * 1px);
        ${"box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))));"}
    }
`.withBehaviors(Q(m`
            :host {
                forced-color-adjust: none;
                background: ${It.Canvas};
                box-shadow: 0 0 0 1px ${It.CanvasText};
            }
        `)),zo=new Map;let Io=class extends pt{cardBackgroundColorChanged(t,e){if(e){const t=We(this.cardBackgroundColor);if(null!==t){if(zo.has(t))this.neutralPalette=zo.get(t);else{const e=Oo(t);zo.set(t,e),this.neutralPalette=e}this.backgroundColor=this.cardBackgroundColor}}else this.provider&&this.provider.designSystem&&this.handleChange(this.provider.designSystem,"backgroundColor")}handleChange(t,e){this.cardBackgroundColor||(this.backgroundColor=Vo(t))}connectedCallback(){var t,e;super.connectedCallback();const r=E.getNotifier(null===(t=this.provider)||void 0===t?void 0:t.designSystem);r.subscribe(this,"backgroundColor"),r.subscribe(this,"neutralPalette"),this.handleChange(null===(e=this.provider)||void 0===e?void 0:e.designSystem,"backgroundColor")}};e([ft({attribute:!1,cssCustomProperty:"background-color",default:"#FFFFFF"})],Io.prototype,"backgroundColor",void 0),e([q({attribute:"card-background-color"})],Io.prototype,"cardBackgroundColor",void 0),e([ft({attribute:!1,default:Oo(We("#FFFFFF")),cssCustomProperty:!1})],Io.prototype,"neutralPalette",void 0),Io=e([nt({name:"fast-card",template:So,styles:jo})],Io);class qo{}e([q({attribute:"aria-atomic",mode:"fromView"})],qo.prototype,"ariaAtomic",void 0),e([q({attribute:"aria-busy",mode:"fromView"})],qo.prototype,"ariaBusy",void 0),e([q({attribute:"aria-controls",mode:"fromView"})],qo.prototype,"ariaControls",void 0),e([q({attribute:"aria-current",mode:"fromView"})],qo.prototype,"ariaCurrent",void 0),e([q({attribute:"aria-describedby",mode:"fromView"})],qo.prototype,"ariaDescribedby",void 0),e([q({attribute:"aria-details",mode:"fromView"})],qo.prototype,"ariaDetails",void 0),e([q({attribute:"aria-disabled",mode:"fromView"})],qo.prototype,"ariaDisabled",void 0),e([q({attribute:"aria-errormessage",mode:"fromView"})],qo.prototype,"ariaErrormessage",void 0),e([q({attribute:"aria-flowto",mode:"fromView"})],qo.prototype,"ariaFlowto",void 0),e([q({attribute:"aria-haspopup",mode:"fromView"})],qo.prototype,"ariaHaspopup",void 0),e([q({attribute:"aria-hidden",mode:"fromView"})],qo.prototype,"ariaHidden",void 0),e([q({attribute:"aria-invalid",mode:"fromView"})],qo.prototype,"ariaInvalid",void 0),e([q({attribute:"aria-keyshortcuts",mode:"fromView"})],qo.prototype,"ariaKeyshortcuts",void 0),e([q({attribute:"aria-label",mode:"fromView"})],qo.prototype,"ariaLabel",void 0),e([q({attribute:"aria-labelledby",mode:"fromView"})],qo.prototype,"ariaLabelledby",void 0),e([q({attribute:"aria-live",mode:"fromView"})],qo.prototype,"ariaLive",void 0),e([q({attribute:"aria-owns",mode:"fromView"})],qo.prototype,"ariaOwns",void 0),e([q({attribute:"aria-relevant",mode:"fromView"})],qo.prototype,"ariaRelevant",void 0),e([q({attribute:"aria-roledescription",mode:"fromView"})],qo.prototype,"ariaRoledescription",void 0);class Go{constructor(t,e){this.target=t,this.propertyName=e}bind(t){t[this.propertyName]=this.target}unbind(){}}function Uo(t){return new bt("fast-ref",Go,t)}const Wo=jt`
    <span part="end" ${Uo("endContainer")}>
        <slot
            name="end"
            ${Uo("end")}
            @slotchange="${t=>t.handleEndContentChange()}"
        ></slot>
    </span>
`,Qo=jt`
    <span part="start" ${Uo("startContainer")}>
        <slot
            name="start"
            ${Uo("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        ></slot>
    </span>
`;function Xo(t,...e){e.forEach((e=>{if(Object.getOwnPropertyNames(e.prototype).forEach((r=>{Object.defineProperty(t.prototype,r,Object.getOwnPropertyDescriptor(e.prototype,r))})),e.attributes){const r=t.attributes||[];t.attributes=r.concat(e.attributes)}}))}var Yo;!function(t){t[t.alt=18]="alt",t[t.arrowDown=40]="arrowDown",t[t.arrowLeft=37]="arrowLeft",t[t.arrowRight=39]="arrowRight",t[t.arrowUp=38]="arrowUp",t[t.back=8]="back",t[t.backSlash=220]="backSlash",t[t.break=19]="break",t[t.capsLock=20]="capsLock",t[t.closeBracket=221]="closeBracket",t[t.colon=186]="colon",t[t.colon2=59]="colon2",t[t.comma=188]="comma",t[t.ctrl=17]="ctrl",t[t.delete=46]="delete",t[t.end=35]="end",t[t.enter=13]="enter",t[t.equals=187]="equals",t[t.equals2=61]="equals2",t[t.equals3=107]="equals3",t[t.escape=27]="escape",t[t.forwardSlash=191]="forwardSlash",t[t.function1=112]="function1",t[t.function10=121]="function10",t[t.function11=122]="function11",t[t.function12=123]="function12",t[t.function2=113]="function2",t[t.function3=114]="function3",t[t.function4=115]="function4",t[t.function5=116]="function5",t[t.function6=117]="function6",t[t.function7=118]="function7",t[t.function8=119]="function8",t[t.function9=120]="function9",t[t.home=36]="home",t[t.insert=45]="insert",t[t.menu=93]="menu",t[t.minus=189]="minus",t[t.minus2=109]="minus2",t[t.numLock=144]="numLock",t[t.numPad0=96]="numPad0",t[t.numPad1=97]="numPad1",t[t.numPad2=98]="numPad2",t[t.numPad3=99]="numPad3",t[t.numPad4=100]="numPad4",t[t.numPad5=101]="numPad5",t[t.numPad6=102]="numPad6",t[t.numPad7=103]="numPad7",t[t.numPad8=104]="numPad8",t[t.numPad9=105]="numPad9",t[t.numPadDivide=111]="numPadDivide",t[t.numPadDot=110]="numPadDot",t[t.numPadMinus=109]="numPadMinus",t[t.numPadMultiply=106]="numPadMultiply",t[t.numPadPlus=107]="numPadPlus",t[t.openBracket=219]="openBracket",t[t.pageDown=34]="pageDown",t[t.pageUp=33]="pageUp",t[t.period=190]="period",t[t.print=44]="print",t[t.quote=222]="quote",t[t.scrollLock=145]="scrollLock",t[t.shift=16]="shift",t[t.space=32]="space",t[t.tab=9]="tab",t[t.tilde=192]="tilde",t[t.windowsLeft=91]="windowsLeft",t[t.windowsOpera=219]="windowsOpera",t[t.windowsRight=92]="windowsRight"}(Yo||(Yo={}));const Zo="form-associated-proxy",Ko="ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype,Jo=new Map;class ti extends it{}class ei extends(function(t){const e=class extends t{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.formDisabledCallback=t=>{this.disabled=t},this.formResetCallback=()=>{this.value=this.initialValue,this.dirtyValue=!1},this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||""}static get formAssociated(){return Ko}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const t=this.proxy.labels,e=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),r=t?e.concat(Array.from(t)):e;return Object.freeze(r)}return i}valueChanged(t,e){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.setFormValue(this.value),this.validate()}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),d.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),d.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!Ko)return null;let t=Jo.get(this);return t||(t=this.attachInternals(),Jo.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback)}disconnectedCallback(){this.proxyEventsToBlock.forEach((t=>this.proxy.removeEventListener(t,this.stopPropagation))),this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,e,r){this.elementInternals?this.elementInternals.setValidity(t,e,r):"string"==typeof e&&this.proxy.setCustomValidity(e)}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((t=>this.proxy.addEventListener(t,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Zo),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Zo)),null===(t=this.shadowRoot)||void 0===t||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),null===(t=this.shadowRoot)||void 0===t||t.removeChild(this.proxySlot)}validate(){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage)}setFormValue(t,e){this.elementInternals&&this.elementInternals.setFormValue(t,e||t)}_keypressHandler(t){switch(t.keyCode){case 13:if(this.form instanceof HTMLFormElement){const t=this.form.querySelector("[type=submit]");null==t||t.click()}}}stopPropagation(t){t.stopPropagation()}};return q({mode:"boolean"})(e.prototype,"disabled"),q({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),q(e.prototype,"name"),q({mode:"boolean"})(e.prototype,"required"),R(e.prototype,"value"),e}(ti)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class ri extends ei{constructor(){super(...arguments),this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;null===(t=this.form)||void 0===t||t.reset()}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,e){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===e&&this.addEventListener("click",this.handleSubmission),"submit"===t&&this.removeEventListener("click",this.handleSubmission),"reset"===e&&this.addEventListener("click",this.handleFormReset),"reset"===t&&this.removeEventListener("click",this.handleFormReset)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type)}get root(){return this.control}}e([q({mode:"boolean"})],ri.prototype,"autofocus",void 0),e([q({attribute:"form"})],ri.prototype,"formId",void 0),e([q],ri.prototype,"formaction",void 0),e([q],ri.prototype,"formenctype",void 0),e([q],ri.prototype,"formmethod",void 0),e([q({mode:"boolean"})],ri.prototype,"formnovalidate",void 0),e([q],ri.prototype,"formtarget",void 0),e([q],ri.prototype,"type",void 0),e([R],ri.prototype,"defaultSlottedContent",void 0);class oi{}e([q({attribute:"aria-expanded",mode:"fromView"})],oi.prototype,"ariaExpanded",void 0),e([q({attribute:"aria-pressed",mode:"fromView"})],oi.prototype,"ariaPressed",void 0),Xo(oi,qo),Xo(ri,class{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}},oi);const ii=jt`
    <button
        class="control"
        part="control"
        ?autofocus="${t=>t.autofocus}"
        ?disabled="${t=>t.disabled}"
        form="${t=>t.formId}"
        formaction="${t=>t.formaction}"
        formenctype="${t=>t.formenctype}"
        formmethod="${t=>t.formmethod}"
        formnovalidate="${t=>t.formnovalidate}"
        formtarget="${t=>t.formtarget}"
        name="${t=>t.name}"
        type="${t=>t.type}"
        value="${t=>t.value}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedBy="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-pressed="${t=>t.ariaPressed}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${Uo("control")}
    >
        ${Qo}
        <span class="content" part="content">
            <slot ${ni="defaultSlottedContent","string"==typeof ni&&(ni={property:ni}),new bt("fast-slotted",class extends class{constructor(t,e){this.target=t,this.options=e,this.source=null}bind(t){const e=this.options.property;this.shouldUpdate=E.getAccessors(t).some((t=>t.name===e)),this.source=t,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(i),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let t=this.getNodes();return void 0!==this.options.filter&&(t=t.filter(this.options.filter)),t}updateTarget(t){this.source[this.options.property]=t}}{constructor(t,e){super(t,e)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}},ni)}></slot>
        </span>
        ${Wo}
    </button>
`;var ni;const si="not-allowed",ai="#FFFFFF",li="#000000",ci=Kr(bo(Yt,4.5,0,we,Fe,xe)),ui=Jr(Zr.rest,ci),hi=(Jr(Zr.hover,ci),Jr(Zr.active,ci),Jr(Zr.focus,ci),(t,e)=>ro(ai,t)>=e?ai:li);function di(t){return function(e){return"function"==typeof e||"string"==typeof e?r=>hi("function"==typeof e?e(r):e,t):hi(ui(e),t)}}const pi=di(4.5),fi=di(3);function gi(t){return bo(Yt,t,0,0,0,0)}const vi=Jr(Zr.rest,Kr(gi(4.5))),bi=Jr(Zr.rest,Kr(gi(3)));function yi(t){return e=>{const r=Zt(e),o=Xt(e),i=lo(Zt,o)(e),n={rest:re(e),hover:oe(e),active:ie(e),focus:ne(e)},s=co(e)?-1:1,a=i+(1===s?Math.min(n.rest,n.hover):Math.max(s*n.rest,s*n.hover)),l=fo(Qt)(Zt)((()=>a))((()=>s))((e=>e>=t))(e),c=ao(Zt,l)(e),u=c+s*Math.abs(n.rest-n.hover),h=1===s?n.rest<n.hover:s*n.rest>s*n.hover,d=h?c:u,p=h?u:c,f=d+s*n.active,g=d+s*n.focus;return{rest:uo(d,r),hover:uo(p,r),active:uo(f,r),focus:uo(g,r)}}}const mi=Kr(yi(4.5)),Ci=Kr(yi(3)),wi=(Jr(Zr.rest,mi),Jr(Zr.hover,mi),Jr(Zr.active,mi),Jr(Zr.focus,mi),Jr(Zr.rest,Ci),Jr(Zr.hover,Ci),Jr(Zr.active,Ci),Jr(Zr.focus,Ci),(t,e)=>ro(ai,t)>=e?ai:li);function Fi(t){return function(e){return"function"==typeof e||"string"==typeof e?r=>wi("function"==typeof e?e(r):e,t):wi(Xt(e),t)}}const xi=Fi(4.5),Pi=(Fi(3),io(se,ae,le,ce));function Di(t){return e=>{const r=vo(e);return uo(r+(r>=Pi(e)?-1:1)*t(e),Yt(e))}}const Si=Kr(Di(se)),$i=Kr(Di(ae)),ki=Kr(Di(le)),Bi=Kr(Di(ce)),Ai=Kr(Di(ue)),Ti=Kr((t=>({rest:Si(t),hover:$i(t),active:ki(t),focus:Bi(t),selected:Ai(t)}))),Ei=io(se,ae,le,ce,ve,be,ye,me);function Ni(t){return e=>{const r=vo(e);return uo(r+(r>=Ei(e)?-1:1)*t(e),Yt(e))}}const Li=Kr(Ni(ve)),Ri=Kr(Ni(be)),Hi=Kr(Ni(ye)),Mi=Kr(Ni(me)),Oi=Kr(Ni(Ce)),_i=Kr((t=>({rest:Li(t),hover:Ri(t),active:Hi(t),focus:Mi(t),selected:Oi(t)})));function Vi(t){return e=>{const r=co(e)?-1:1;return uo(vo(e)-t(e)*r,Yt(e))}}const ji=Kr(Vi(he)),zi=Kr(Vi(de)),Ii=Kr(Vi(pe)),qi=Kr(Vi(fe)),Gi=Kr(Vi(ge)),Ui=Kr((t=>({rest:ji(t),hover:zi(t),active:Ii(t),focus:qi(t),selected:Gi(t)})));var Wi=Math.max,Qi=Math.min;var Xi=/\s/;var Yi=/^\s+/;const Zi=function(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&Xi.test(t.charAt(e)););return e}(t)+1).replace(Yi,""):t},Ki=function(t){return null!=t&&"object"==typeof t};var Ji=/^[-+]0x[0-9a-f]+$/i,tn=/^0b[01]+$/i,en=/^0o[0-7]+$/i,rn=parseInt;const on=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||Ki(t)&&"[object Symbol]"==Fr(t)}(t))return NaN;if(xr(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=xr(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=Zi(t);var r=tn.test(t);return r||en.test(t)?rn(t.slice(2),r?2:8):Ji.test(t)?NaN:+t};const nn=function(t){return t?Infinity===(t=on(t))||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0},sn=function(t,e,r){return e=nn(e),void 0===r?(r=e,e=0):r=nn(r),function(t,e,r){return t>=Qi(e,r)&&t<Wi(e,r)}(t=on(t),e,r)},an=io(se,ae,le);function ln(t){return e=>{const r=Zt(e),o=r.length,i=Xt(e),n=xi(Object.assign({},e,{backgroundColor:i})),s=Kt(e),a=vo(e)>=an(e)?-1:1,l=o-1,c=lo(Zt,i)(e);let u=0;for(;u<a*s&&sn(c+u+a,0,o)&&ro(r[c+u+a],n)>=t&&sn(c+u+a+a,0,l);)u+=a;const h=c+u,d=h+-1*a*s,p=d+a*Jt(e),f=d+a*te(e);return{rest:uo(d,r),hover:uo(h,r),active:uo(p,r),focus:uo(f,r),selected:uo(d+(co(e)?-1*ee(e):ee(e)),r)}}}const cn=Kr(ln(4.5)),un=Kr(ln(3)),hn=(Jr(Zr.rest,cn),Jr(Zr.hover,cn),Jr(Zr.active,cn),Jr(Zr.focus,cn),Jr(Zr.selected,cn),Jr(Zr.rest,un),Jr(Zr.hover,un),Jr(Zr.active,un),Jr(Zr.focus,un),Jr(Zr.selected,un),Kr((t=>{const e=Yt(t),r=vo(t),o=co(t)?-1:1,i=Ae(t),n=r+o*i,s=n+o*(Te(t)-i),a=n+o*(Ee(t)-i),l=n+o*(Ne(t)-i);return{rest:uo(n,e),hover:uo(s,e),active:uo(a,e),focus:uo(l,e)}}))),dn=(Jr(Zr.rest,hn),Jr(Zr.hover,hn),Jr(Zr.active,hn),Jr(Zr.focus,hn),Kr((t=>{const e=Yt(t),r=vo(t),o=Be(t);return uo(r+(co(t)?-1:1)*o,e)})));function pn(t){return(...e)=>r=>{const o=e[0];let i="function"==typeof o?o(r):o;for(let o=1;o<e.length;o++){const n=e[o];i=t(i,"function"==typeof n?n(r):n)}return i}}const fn=pn(((t,e)=>t+e)),gn=pn(((t,e)=>t-e)),vn=pn(((t,e)=>t*e));function bn(...t){return fn.apply(this,t)}function yn(...t){return gn.apply(this,t)}function mn(...t){return vn.apply(this,t)}var Cn;function wn(t,e){return r=>-1===Pe(r)?e(r):t(r)}pn(((t,e)=>t/e)),function(t){t[t.LightMode=1]="LightMode",t[t.DarkMode=.23]="DarkMode"}(Cn||(Cn={}));const Fn=lo(Yt,(t=>{const e=Pe(t);return new qe(e,e,e,1).toStringHexRGB()})),xn=t=>Me(yn(Fn,De)(t),0,Yt(t).length-1),Pn=io(se,ae,le),Dn=io(bn(Fn,De),Pn),Sn=t=>{const e=.14,r=new qe(e,e,e,1);return lo(Yt,r.toStringHexRGB())(t)},$n=Kr(wn(uo(yn(xn,De),Yt),ho(Yt)(0,yn(Sn,mn(De,5))))),kn=Kr(wn(uo(xn,Yt),ho(Yt)(0,yn(Sn,mn(De,4))))),Bn=Kr(wn(uo(bn(xn,De),Yt),ho(Yt)(De,yn(Sn,mn(De,3))))),An=Kr(wn(uo(Fn,Yt),ho(Yt)(0,yn(Sn,mn(De,3))))),Tn=Bn,En=Kr(wn(uo(Dn,Yt),ho(Yt)(Pn,yn(Sn,mn(De,2))))),Nn=Kr(wn(uo(bn(Dn,De),Yt),ho(Yt)(bn(Pn,De),yn(Sn,De)))),Ln=Kr(wn(uo(bn(Dn,mn(De,2)),Yt),ho(Yt)(bn(Pn,mn(De,2)),Sn)));function Rn(t){return t>3.5}const Hn=Kr(fo(Qt)(Yt)((function(t,e,r){return lo(Yt,t)(r)}))((function(t,e,r){return co(r)?-1:1}))(Rn));const Mn=Kr(bo(Yt,14,0,Le,Re,He)),On=Jr(Zr.rest,Mn),_n=(Jr(Zr.hover,Mn),Jr(Zr.active,Mn),Jr(Zr.focus,Mn),U("neutral-foreground-rest",(t=>yo(t).rest),Po.findProvider)),Vn=(U("neutral-foreground-hover",(t=>yo(t).hover),Po.findProvider),U("neutral-foreground-active",(t=>yo(t).active),Po.findProvider),U("neutral-foreground-focus",(t=>yo(t).focus),Po.findProvider),U("neutral-foreground-toggle",pi,Po.findProvider),U("neutral-foreground-toggle-large",fi,Po.findProvider),U("neutral-foreground-hint",vi,Po.findProvider),U("neutral-foreground-hint-large",bi,Po.findProvider),U("accent-foreground-rest",(t=>mi(t).rest),Po.findProvider)),jn=U("accent-foreground-hover",(t=>mi(t).hover),Po.findProvider),zn=U("accent-foreground-active",(t=>mi(t).active),Po.findProvider),In=(U("accent-foreground-focus",(t=>mi(t).focus),Po.findProvider),U("accent-foreground-cut-rest",(t=>xi(t)),Po.findProvider)),qn=(U("accent-foreground-large-rest",(t=>Ci(t).rest),Po.findProvider),U("accent-foreground-large-hover",(t=>Ci(t).hover),Po.findProvider),U("accent-foreground-large-active",(t=>Ci(t).active),Po.findProvider),U("accent-foreground-large-focus",(t=>Ci(t).focus),Po.findProvider),U("neutral-fill-rest",(t=>Ti(t).rest),Po.findProvider)),Gn=U("neutral-fill-hover",(t=>Ti(t).hover),Po.findProvider),Un=U("neutral-fill-active",(t=>Ti(t).active),Po.findProvider),Wn=(U("neutral-fill-focus",(t=>Ti(t).focus),Po.findProvider),U("neutral-fill-selected",(t=>Ti(t).selected),Po.findProvider),U("neutral-fill-stealth-rest",(t=>_i(t).rest),Po.findProvider)),Qn=U("neutral-fill-stealth-hover",(t=>_i(t).hover),Po.findProvider),Xn=U("neutral-fill-stealth-active",(t=>_i(t).active),Po.findProvider),Yn=(U("neutral-fill-stealth-focus",(t=>_i(t).focus),Po.findProvider),U("neutral-fill-stealth-selected",(t=>_i(t).selected),Po.findProvider),U("neutral-fill-toggle-rest",(t=>ci(t).rest),Po.findProvider),U("neutral-fill-toggle-hover",(t=>ci(t).hover),Po.findProvider),U("neutral-fill-toggle-active",(t=>ci(t).active),Po.findProvider),U("neutral-fill-toggle-focus",(t=>ci(t).focus),Po.findProvider),U("neutral-fill-input-rest",(t=>Ui(t).rest),Po.findProvider),U("neutral-fill-input-hover",(t=>Ui(t).hover),Po.findProvider),U("neutral-fill-input-active",(t=>Ui(t).active),Po.findProvider),U("neutral-fill-input-selected",(t=>Ui(t).selected),Po.findProvider),U("neutral-fill-input-focus",(t=>Ui(t).focus),Po.findProvider),U("accent-fill-rest",(t=>cn(t).rest),Po.findProvider)),Zn=U("accent-fill-hover",(t=>cn(t).hover),Po.findProvider),Kn=U("accent-fill-active",(t=>cn(t).active),Po.findProvider),Jn=(U("accent-fill-focus",(t=>cn(t).focus),Po.findProvider),U("accent-fill-selected",(t=>cn(t).selected),Po.findProvider),U("accent-fill-large-rest",(t=>un(t).rest),Po.findProvider),U("accent-fill-large-hover",(t=>un(t).hover),Po.findProvider),U("accent-fill-large-active",(t=>un(t).active),Po.findProvider),U("accent-fill-large-focus",(t=>un(t).focus),Po.findProvider),U("accent-fill-large-selected",(t=>un(t).selected),Po.findProvider),U("neutral-fill-card-rest",(t=>Vo(t)),Po.findProvider),U("neutral-outline-rest",(t=>hn(t).rest),Po.findProvider),U("neutral-outline-hover",(t=>hn(t).hover),Po.findProvider),U("neutral-outline-active",(t=>hn(t).active),Po.findProvider),U("neutral-outline-focus",(t=>hn(t).focus),Po.findProvider),U("neutral-divider-rest",dn,Po.findProvider),U("neutral-layer-floating",$n,Po.findProvider),U("neutral-layer-card",kn,Po.findProvider),U("neutral-layer-card-container",Bn,Po.findProvider),U("neutral-layer-l1",An,Po.findProvider),U("neutral-layer-l1-alt",Tn,Po.findProvider),U("neutral-layer-l2",En,Po.findProvider),U("neutral-layer-l3",Nn,Po.findProvider),U("neutral-layer-l4",Ln,Po.findProvider),U("neutral-focus",Hn,Po.findProvider)),ts=U("neutral-focus-inner-accent",(es=Xt,fo(Hn)(Zt)(function(t){return(e,r,o)=>r.indexOf(t(o))}(es))((function(t,e,r){return co(r)?1:-1}))(Rn)),Po.findProvider);var es;U("neutral-contrast-foreground-rest",(t=>mo(On)(t)),Po.findProvider),U("neutral-contrast-fill-rest",(t=>Mn(t).rest),Po.findProvider),U("neutral-contrast-fill-hover",(t=>Mn(t).hover),Po.findProvider),U("neutral-contrast-fill-active",(t=>Mn(t).active),Po.findProvider),U("neutral-contrast-fill-focus",(t=>Mn(t).focus),Po.findProvider);let rs;const os=function(){if(!0===(t=rs)||!1===t||Ki(t)&&"[object Boolean]"==Fr(t))return rs;var t;if("undefined"==typeof window||!window.document||!window.document.createElement)return rs=!1,rs;const e=document.createElement("style"),r=function(){const t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}();null!==r&&e.setAttribute("nonce",r),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),rs=!0}catch(t){rs=!1}finally{document.head.removeChild(e)}return rs}()?"focus-visible":"focus",is="(var(--base-height-multiplier) + var(--density)) * var(--design-unit)",ns=m`
    ${Co("inline-flex")} :host {
        font-family: var(--body-font);
        outline: none;
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
        height: calc(${is} * 1px);
        min-width: calc(${is} * 1px);
        background-color: ${qn.var};
        color: ${_n.var};
        border-radius: calc(var(--corner-radius) * 1px);
        fill: currentcolor;
        cursor: pointer;
    }

    .control {
        background: transparent;
        height: inherit;
        flex-grow: 1;
        box-sizing: border-box;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0 calc((10 + (var(--design-unit) * 2 * var(--density))) * 1px);
        white-space: nowrap;
        outline: none;
        text-decoration: none;
        border: calc(var(--outline-width) * 1px) solid transparent;
        color: inherit;
        border-radius: inherit;
        fill: inherit;
        cursor: inherit;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    :host(:hover) {
        background-color: ${Gn.var};
    }

    :host(:active) {
        background-color: ${Un.var};
    }

    .control:${os} {
        border: calc(var(--outline-width) * 1px) solid ${Jn.var};
        box-shadow: 0 0 0 calc((var(--focus-outline-width) - var(--outline-width)) * 1px) ${Jn.var};
    }

    .control::-moz-focus-inner {
        border: 0;
    }

    .start,
    .end {
        display: flex;
    }

    .control.icon-only {
        padding: 0;
        line-height: 0;
    }

    ::slotted(svg) {
        ${""} width: 16px;
        height: 16px;
        pointer-events: none;
    }

    .start {
        margin-inline-end: 11px;
    }

    .end {
        margin-inline-start: 11px;
    }
`.withBehaviors(qn,_n,Gn,Un,Q(m`
            :host .control {
              background-color: ${It.ButtonFace};
              border-color: ${It.ButtonText};
              color: ${It.ButtonText};
              fill: currentColor;
            }
    
            :host(:hover) .control {
              forced-color-adjust: none;
              background-color: ${It.Highlight};
              color: ${It.HighlightText};
            }

            .control:${os} {
              forced-color-adjust: none;
              background-color: ${It.Highlight};
              border-color: ${It.ButtonText};
              box-shadow: 0 0 0 calc((var(--focus-outline-width) - var(--outline-width)) * 1px) ${It.ButtonText};
              color: ${It.HighlightText};
            }

            .control:hover,
            :host([appearance="outline"]) .control:hover {
              border-color: ${It.ButtonText};
            }

            :host([href]) .control {
                border-color: ${It.LinkText};
                color: ${It.LinkText};
            }

            :host([href]) .control:hover,
            :host([href]) .control:${os}{
              forced-color-adjust: none;
              background: ${It.ButtonFace};
              border-color: ${It.LinkText};
              box-shadow: 0 0 0 1px ${It.LinkText} inset;
              color: ${It.LinkText};
              fill: currentColor;
            }
        `)),ss=m`
    :host([appearance="accent"]) {
        background: ${Yn.var};
        color: ${In.var};
    }

    :host([appearance="accent"]:hover) {
        background: ${Zn.var};
    }

    :host([appearance="accent"]:active) .control:active {
        background: ${Kn.var};
    }

    :host([appearance="accent"]) .control:${os} {
        box-shadow: 0 0 0 calc(var(--focus-outline-width) * 1px) inset ${ts.var};
    }
`.withBehaviors(Yn,In,Zn,Kn,ts,Q(m`
            :host([appearance="accent"]) .control {
                forced-color-adjust: none;
                background: ${It.Highlight};
                color: ${It.HighlightText};
            }

            :host([appearance="accent"]) .control:hover {
                background: ${It.HighlightText};
                border-color: ${It.Highlight};
                color: ${It.Highlight};
            }

            :host([appearance="accent"]) .control:${os} {
                border-color: ${It.ButtonText};
                box-shadow: 0 0 0 2px ${It.HighlightText} inset;
            }

            :host([appearance="accent"][href]) .control{
                background: ${It.LinkText};
                color: ${It.HighlightText};
            }

            :host([appearance="accent"][href]) .control:hover {
                background: ${It.ButtonFace};
                border-color: ${It.LinkText};
                box-shadow: none;
                color: ${It.LinkText};
                fill: currentColor;
            }

            :host([appearance="accent"][href]) .control:${os} {
                border-color: ${It.LinkText};
                box-shadow: 0 0 0 2px ${It.HighlightText} inset;
            }
        `)),as=(m`
    :host([appearance="hypertext"]) {
        font-size: inherit;
        line-height: inherit;
        height: auto;
        min-width: 0;
        background: transparent;
    }

    :host([appearance="hypertext"]) .control {
        display: inline;
        padding: 0;
        border: none;
        box-shadow: none;
        border-radius: 0;
        line-height: 1;
    }

    :host a.control:not(:link) {
        background-color: transparent;
        cursor: default;
    }
    :host([appearance="hypertext"]) .control:link,
    :host([appearance="hypertext"]) .control:visited {
        background: transparent;
        color: ${Vn.var};
        border-bottom: calc(var(--outline-width) * 1px) solid ${Vn.var};
    }

    :host([appearance="hypertext"]:hover),
    :host([appearance="hypertext"]) .control:hover {
        background: transparent;
        border-bottom-color: ${jn.var};
    }

    :host([appearance="hypertext"]:active),
    :host([appearance="hypertext"]) .control:active {
        background: transparent;
        border-bottom-color: ${zn.var};
    }

    :host([appearance="hypertext"]) .control:${os} {
        border-bottom: calc(var(--focus-outline-width) * 1px) solid ${Jn.var};
        margin-bottom: calc(calc(var(--outline-width) - var(--focus-outline-width)) * 1px);
    }
`.withBehaviors(Vn,jn,zn,Jn,Q(m`
            :host([appearance="hypertext"]:hover) {
                background-color: ${It.ButtonFace};
                color: ${It.ButtonText};
            }
            :host([appearance="hypertext"][href]) .control:hover,
            :host([appearance="hypertext"][href]) .control:active,
            :host([appearance="hypertext"][href]) .control:${os} {
                color: ${It.LinkText};
                border-bottom-color: ${It.LinkText};
                box-shadow: none;
            }
        `)),m`
    :host([appearance="lightweight"]) {
        background: transparent;
        color: ${Vn.var};
    }

    :host([appearance="lightweight"]) .control {
        padding: 0;
        height: initial;
        border: none;
        box-shadow: none;
        border-radius: 0;
    }

    :host([appearance="lightweight"]:hover) {
        background: transparent;
        color: ${jn.var};
    }

    :host([appearance="lightweight"]:active) {
        background: transparent;
        color: ${zn.var};
    }

    :host([appearance="lightweight"]) .content {
        position: relative;
    }

    :host([appearance="lightweight"]) .content::before {
        content: "";
        display: block;
        height: calc(var(--outline-width) * 1px);
        position: absolute;
        top: calc(1em + 4px);
        width: 100%;
    }

    :host([appearance="lightweight"]:hover) .content::before {
        background: ${jn.var};
    }

    :host([appearance="lightweight"]:active) .content::before {
        background: ${zn.var};
    }

    :host([appearance="lightweight"]) .control:${os} .content::before {
        background: ${_n.var};
        height: calc(var(--focus-outline-width) * 1px);
    }
`.withBehaviors(Vn,jn,zn,jn,_n,Q(m`
            :host([appearance="lightweight"]) .control:hover,
            :host([appearance="lightweight"]) .control:${os} {
                forced-color-adjust: none;
                background: ${It.ButtonFace};
                color: ${It.Highlight};
            }
            :host([appearance="lightweight"]) .control:hover .content::before,
            :host([appearance="lightweight"]) .control:${os} .content::before {
                background: ${It.Highlight};
            }

            :host([appearance="lightweight"][href]) .control:hover,
            :host([appearance="lightweight"][href]) .control:${os} {
                background: ${It.ButtonFace};
                box-shadow: none;
                color: ${It.LinkText};
            }

            :host([appearance="lightweight"][href]) .control:hover .content::before,
            :host([appearance="lightweight"][href]) .control:${os} .content::before {
                background: ${It.LinkText};
            }
        `))),ls=m`
    :host([appearance="outline"]) {
        background: transparent;
        border-color: ${Yn.var};
    }

    :host([appearance="outline"]:hover) {
        border-color: ${Zn.var};
    }

    :host([appearance="outline"]:active) {
        border-color: ${Kn.var};
    }

    :host([appearance="outline"]) .control {
        border-color: inherit;
    }

    :host([appearance="outline"]) .control:${os} {
        box-shadow: 0 0 0 calc((var(--focus-outline-width) - var(--outline-width)) * 1px) ${Jn.var};
        border-color: ${Jn.var};
    }
`.withBehaviors(Yn,Zn,Kn,Jn,Q(m`
            :host([appearance="outline"]) .control {
                border-color: ${It.ButtonText};
            }
            :host([appearance="outline"]) .control:${os} {
              forced-color-adjust: none;
              background-color: ${It.Highlight};
              border-color: ${It.ButtonText};
              box-shadow: 0 0 0 calc((var(--focus-outline-width) - var(--outline-width)) * 1px) ${It.ButtonText};
              color: ${It.HighlightText};
              fill: currentColor;
            }
            :host([appearance="outline"][href]) .control {
                background: ${It.ButtonFace};
                border-color: ${It.LinkText};
                color: ${It.LinkText};
                fill: currentColor;
            }
            :host([appearance="outline"][href]) .control:hover,
            :host([appearance="outline"][href]) .control:${os} {
              forced-color-adjust: none;
              border-color: ${It.LinkText};
              box-shadow: 0 0 0 1px ${It.LinkText} inset;
            }
        `)),cs=m`
    :host([appearance="stealth"]) {
        background: ${Wn.var};
    }

    :host([appearance="stealth"]:hover) {
        background: ${Qn.var};
    }

    :host([appearance="stealth"]:active) {
        background: ${Xn.var};
    }
`.withBehaviors(Wn,Qn,Xn,Q(m`
            :host([appearance="stealth"]),
            :host([appearance="stealth"]) .control {
                forced-color-adjust: none;
                background: ${It.ButtonFace};
                border-color: transparent;
                color: ${It.ButtonText};
                fill: currentColor;
            }

            :host([appearance="stealth"]:hover) .control {
                background: ${It.Highlight};
                border-color: ${It.Highlight};
                color: ${It.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"]:${os}) .control {
                background: ${It.Highlight};
                box-shadow: 0 0 0 1px ${It.Highlight};
                color: ${It.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"][href]) .control {
                color: ${It.LinkText};
            }

            :host([appearance="stealth"][href]:hover) .control,
            :host([appearance="stealth"][href]:${os}) .control {
                background: ${It.LinkText};
                border-color: ${It.LinkText};
                color: ${It.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"][href]:${os}) .control {
                forced-color-adjust: none;
                box-shadow: 0 0 0 1px ${It.LinkText};
            }
        `));class us{constructor(t,e,r){this.propertyName=t,this.value=e,this.styles=r}bind(t){E.getNotifier(t).subscribe(this,this.propertyName),this.handleChange(t,this.propertyName)}unbind(t){E.getNotifier(t).unsubscribe(this,this.propertyName),t.$fastController.removeStyles(this.styles)}handleChange(t,e){t[e]===this.value?t.$fastController.addStyles(this.styles):t.$fastController.removeStyles(this.styles)}}function hs(t,e){return new us("appearance",t,e)}const ds=m`
    :host([disabled]),
    :host([disabled]:hover),
    :host([disabled]:active) {
        opacity: var(--disabled-opacity);
        background-color: ${qn.var};
        cursor: ${si};
    }

    ${ns}
`.withBehaviors(Q(m`
            :host([disabled]),
            :host([disabled]) .control {
                forced-color-adjust: none;
                background-color: ${It.ButtonFace};
                border-color: ${It.GrayText};
                color: ${It.GrayText};
                cursor: ${si};
                opacity: 1;
            }
        `),hs("accent",m`
            :host([appearance="accent"][disabled]),
            :host([appearance="accent"][disabled]:hover),
            :host([appearance="accent"][disabled]:active) {
                background: ${Yn.var};
            }

            ${ss}
        `.withBehaviors(Q(m`
                    :host([appearance="accent"][disabled]) .control,
                    :host([appearance="accent"][disabled]) .control:hover {
                        background: ${It.ButtonFace};
                        border-color: ${It.GrayText};
                        color: ${It.GrayText};
                    }
                `))),hs("lightweight",m`
            :host([appearance="lightweight"][disabled]:hover),
            :host([appearance="lightweight"][disabled]:active) {
                background-color: transparent;
                color: ${Vn.var};
            }

            :host([appearance="lightweight"][disabled]) .content::before,
            :host([appearance="lightweight"][disabled]:hover) .content::before,
            :host([appearance="lightweight"][disabled]:active) .content::before {
                background: transparent;
            }

            ${as}
        `.withBehaviors(Q(m`
                    :host([appearance="lightweight"].disabled) .control {
                        forced-color-adjust: none;
                        color: ${It.GrayText};
                    }

                    :host([appearance="lightweight"].disabled)
                        .control:hover
                        .content::before {
                        background: none;
                    }
                `))),hs("outline",m`
            :host([appearance="outline"][disabled]),
            :host([appearance="outline"][disabled]:hover),
            :host([appearance="outline"][disabled]:active) {
                background: transparent;
                border-color: ${Yn.var};
            }

            ${ls}
        `.withBehaviors(Q(m`
                    :host([appearance="outline"][disabled]) .control {
                        border-color: ${It.GrayText};
                    }
                `))),hs("stealth",m`
            :host([appearance="stealth"][disabled]),
            :host([appearance="stealth"][disabled]:hover),
            :host([appearance="stealth"][disabled]:active) {
                background: ${Wn.var};
            }

            ${cs}
        `.withBehaviors(Q(m`
                    :host([appearance="stealth"][disabled]) {
                        background: ${It.ButtonFace};
                    }

                    :host([appearance="stealth"][disabled]) .control {
                        background: ${It.ButtonFace};
                        border-color: transparent;
                        color: ${It.GrayText};
                    }
                `))));let ps=class extends ri{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(t,e){const r=this.defaultSlottedContent.filter((t=>t.nodeType===Node.ELEMENT_NODE));1===r.length&&r[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}};e([q],ps.prototype,"appearance",void 0),ps=e([nt({name:"fast-button",template:ii,styles:ds,shadowOptions:{delegatesFocus:!0}})],ps)})();
//# sourceMappingURL=bundle.js.map