"use strict";(self.webpackChunkarccorp_vars=self.webpackChunkarccorp_vars||[]).push([[136],{"./src/stories/Stickynav.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Stickynav_stories});var react=__webpack_require__("./node_modules/react/index.js"),stickybits_es=__webpack_require__("./node_modules/stickybits/dist/stickybits.es.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var Stickynav=function(_Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Stickynav,_Component);var _super=_createSuper(Stickynav);function Stickynav(props){return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Stickynav),_super.call(this,props)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Stickynav,[{key:"componentDidMount",value:function componentDidMount(){(0,stickybits_es.Z)(".arc-sticky-container")}},{key:"render",value:function render(){return(0,jsx_runtime.jsx)("div",{className:"arc-sticky-container",style:{zIndex:"3"},children:(0,jsx_runtime.jsx)("div",{className:"arc-sticky-inner",children:(0,jsx_runtime.jsxs)("div",{className:"arc-sticky-nav",children:[(0,jsx_runtime.jsx)("div",{className:"arc-sticky-brand d-flex align-items-center",children:(0,jsx_runtime.jsx)("a",{href:"#top",className:"arc-sticky-title",style:{lineHeight:"20px"},children:this.props.title})}),(0,jsx_runtime.jsx)("div",{className:"arc-sticky-links d-flex align-items-center",children:this.props.links?this.props.links.map((function(link,i){return(0,jsx_runtime.jsx)("a",{href:link.url,className:"arc-sticky-link",children:link.title})})):""}),(0,jsx_runtime.jsx)("div",{className:"arc-sticky-menu d-flex align-items-center",children:(0,jsx_runtime.jsxs)("a",{href:this.props.rightLink?this.props.rightLink:"https://www2.arccorp.com/about-us/contact-us/",className:"arc-sticky-link-right",children:[this.props.contactUs?this.props.contactUs:"Contact Us"," ",(0,jsx_runtime.jsx)("i",{className:"fas fa-chevron-right"})]})})]})})})}}]),Stickynav}(react.Component);Stickynav.displayName="Stickynav",Stickynav.__docgenInfo={description:"",methods:[],displayName:"Stickynav"};const components_Stickynav=Stickynav;var ProductText=__webpack_require__("./src/components/ProductText.jsx");__webpack_require__("./src/stories/main.scss");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const Stickynav_stories={title:"Example/Stickynav",component:components_Stickynav};var Primary=function Template(args){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components_Stickynav,_objectSpread({},args)),"        ",(0,jsx_runtime.jsx)(ProductText.Z,{id:"overview",className:"bg-color-white overview",title:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Generate Demand ",(0,jsx_runtime.jsx)("br",{}),"for Your Destination"]}),subtitle:"Destination Gateway offers a powerful combination of airline ticketing, web search, airline schedules and capacity data to help drive long-term results for your community’s support and economic growth.",eyebrow:"Overview"}),(0,jsx_runtime.jsx)(ProductText.Z,{id:"partnership",className:"bg-color-black lightgray partnership",title:(0,jsx_runtime.jsxs)("span",{className:"type-color-white",children:["International and Cross-",(0,jsx_runtime.jsx)("br",{}),"Functional Collaboration"]}),subTitleClass:"lightgray light-font",subtitle:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("span",{children:"ARC and ForwardKeys"})," have partnered to offer a customized data intelligence tool for destination marketing organizations, tourism boards, and convention and visitors' bureaus to help you understand travel to your destinations and competing destinations."]}),eyebrow:"Partnership"})]})}.bind({});Primary.args={title:"Destination Gateway",links:[{title:"Overview",url:"#overview"},{title:"Partnership",url:"#partnership"},{title:"How It Works",url:"#howitworks"},{title:"Modules",url:"#modules"}]},Primary.parameters=_objectSpread({storySource:{source:'(args) => <><Stickynav {...args} />        <ProductText\nid="overview"\nclassName="bg-color-white overview"\ntitle={\n  <>\n    Generate Demand <br />\n    for Your Destination\n  </>\n}\nsubtitle={\n  "Destination Gateway offers a powerful combination of airline ticketing, web search, airline schedules and capacity data to help drive long-term results for your community’s support and economic growth."\n}\neyebrow={"Overview"}\n/>\n<ProductText\nid="partnership"\nclassName="bg-color-black lightgray partnership"\ntitle={\n  <span className="type-color-white">\n    International and Cross-\n    <br />\n    Functional Collaboration\n  </span>\n}\nsubTitleClass={"lightgray light-font"}\nsubtitle={\n  <>\n    <span>ARC and ForwardKeys</span> have partnered to offer a\n    customized data intelligence tool for destination marketing\n    organizations, tourism boards, and convention and visitors\'\n    bureaus to help you understand travel to your destinations and\n    competing destinations.\n  </>\n}\neyebrow={"Partnership"}\n/></>'}},Primary.parameters);var __namedExportsOrder=["Primary"]}}]);