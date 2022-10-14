"use strict";(self.webpackChunkarccorp_vars=self.webpackChunkarccorp_vars||[]).push([[370],{"./src/stories/ProductQuote.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BackgroundColor:()=>BackgroundColor,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ProductQuote_stories});var react=__webpack_require__("./node_modules/react/index.js"),lazyload_min=__webpack_require__("./node_modules/vanilla-lazyload/dist/lazyload.min.js"),lazyload_min_default=__webpack_require__.n(lazyload_min),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}document.lazyLoadInstance||(document.lazyLoadInstance=new(lazyload_min_default())({elements_selector:".lazy"}));var ProductQuote=function(_Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(ProductQuote,_Component);var _super=_createSuper(ProductQuote);function ProductQuote(props){return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ProductQuote),_super.call(this,props)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(ProductQuote,[{key:"componentDidMount",value:function componentDidMount(){document.lazyLoadInstance.update()}},{key:"componentDidUpdate",value:function componentDidUpdate(){document.lazyLoadInstance.update()}},{key:"render",value:function render(){return(0,jsx_runtime.jsx)("div",{className:this.props.className?this.props.className+" fluid product-quote product-quote-bg lazy":"fluid product-quote product-quote-bg lazy",id:this.props.id,"data-bg":this.props.backgroundImage,children:(0,jsx_runtime.jsx)("div",{className:"container",children:(0,jsx_runtime.jsx)("div",{className:"row",children:(0,jsx_runtime.jsx)("div",{className:"col-lg-12",children:(0,jsx_runtime.jsx)("div",{className:"product-quote-container",children:(0,jsx_runtime.jsx)("div",{className:"row",children:(0,jsx_runtime.jsx)("div",{className:"col-lg-12",children:(0,jsx_runtime.jsxs)("div",{className:"d-flex",children:[(0,jsx_runtime.jsx)("div",{className:"product-quote-mark",children:"“"}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("div",{className:"product-quote-copy",style:{maxWidth:"575px"},children:[this.props.quote," ”"]}),(0,jsx_runtime.jsxs)("div",{className:"product-quote-name",children:[(0,jsx_runtime.jsx)("strong",{children:this.props.author}),(0,jsx_runtime.jsx)("br",{}),this.props.title,(0,jsx_runtime.jsx)("br",{}),this.props.company]})]})]})})})})})})})})}}]),ProductQuote}(react.Component);ProductQuote.displayName="ProductQuote",ProductQuote.__docgenInfo={description:"",methods:[],displayName:"ProductQuote"};const components_ProductQuote=ProductQuote;__webpack_require__("./src/stories/main.scss");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const ProductQuote_stories={title:"Example/ProductQuote",component:components_ProductQuote};var Template=function Template(args){return(0,jsx_runtime.jsx)(components_ProductQuote,_objectSpread({},args))};Template.displayName="Template";var Primary=Template.bind({});Primary.args={id:"",className:"",backgroundImage:"https://www2.arccorp.com/globalassets/destination-gateway/dg-bg-2.png",quote:"I am often confronted with questions such as, ‘How’s the season picking up?’, ‘How are we ranked vs. other competitors?’,or ‘What’s our air service capacity like for the summer?’. I can now confidently showcase our direction and performance based on real-time data monitored and shared via ARC and ForwardKeys.",author:"Miles Mercera",title:"CEO",company:"Tourism Corporation Bonaire"};var BackgroundColor=Template.bind({});BackgroundColor.args={id:"",className:"bg-color-teal",backgroundImage:"",quote:"I am often confronted with questions such as, ‘How’s the season picking up?’, ‘How are we ranked vs. other competitors?’,or ‘What’s our air service capacity like for the summer?’. I can now confidently showcase our direction and performance based on real-time data monitored and shared via ARC and ForwardKeys.",author:"Miles Mercera",title:"CEO",company:"Tourism Corporation Bonaire"},Primary.parameters=_objectSpread({storySource:{source:"(args) => <ProductQuote {...args} />"}},Primary.parameters),BackgroundColor.parameters=_objectSpread({storySource:{source:"(args) => <ProductQuote {...args} />"}},BackgroundColor.parameters);var __namedExportsOrder=["Primary","BackgroundColor"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stories/main.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/cssWithMappingToString.js"),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://www2.arccorp.com/globalassets/static/style.css?a3834s721982a73);"]),___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://arccorp-script-test.netlify.app/main.min.css);"]),___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://use.fontawesome.com/releases/v5.1.0/css/all.css);"]),___CSS_LOADER_EXPORT___.push([module.id,'@font-face{font-family:SourceSansPro-Regular;src:url("https://www2.arccorp.com/static/fonts/SourceSansPro-Regular.ttf");src:url("https://www2.arccorp.com/static/fonts/SourceSansPro-Regular.ttf") format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:SourceSansPro-SemiboldItalic;src:url("https://www2.arccorp.com/static/fonts/SourceSansPro-SemiboldItalic.ttf");src:url("https://www2.arccorp.com/static/fonts/SourceSansPro-SemiboldItalic.ttf") format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:SourceSansPro-Bold;src:url("https://www2.arccorp.com/static/fonts/SourceSansPro-Bold.ttf");src:url("https://www2.arccorp.com/static/fonts/SourceSansPro-Bold.ttf") format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:SourceSansPro-Black;src:url("https://www2.arccorp.com/static/fonts/SourceSansPro-Black.ttf");src:url("https://www2.arccorp.com/static/fonts/SourceSansPro-Black.ttf") format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:SourceSansPro-Light;src:url("https://www2.arccorp.com/globalassets/style/fonts/SourceSansPro-Light.ttf");src:url("https://www2.arccorp.com/globalassets/style/fonts/SourceSansPro-Light.ttf") format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:SourceSansPro-SemiBold;src:url("https://www2.arccorp.com/globalassets/style/fonts/SourceSansPro-SemiBold.ttf");src:url("https://www2.arccorp.com/globalassets/style/fonts/SourceSansPro-SemiBold.ttf") format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"icomoon";src:url("https://www2.arccorp.com/globalassets/style/fonts//icomoon.eot?3p9rfka");src:url("https://www2.arccorp.com/globalassets/style/fonts//icomoon.eot?3p9rfka#iefix") format("embedded-opentype"),url("https://www2.arccorp.com/globalassets/style/fonts//icomoon.ttf?3p9rfka") format("truetype"),url("https://www2.arccorp.com/globalassets/style/fonts//icomoon.woff?3p9rfka") format("woff"),url("https://www2.arccorp.com/globalassets/style/fonts//icomoon.svg?3p9rfka#icomoon") format("svg");font-weight:normal;font-style:normal}[class^=icon-],[class*=" icon-"]{font-family:"icomoon" !important;speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;outline:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-twitter:before{content:""}.icon-linkedin:before{content:""}.icon-search:before{content:""}.icon-menu:before{content:""}.icon-facebook:before{content:""}.icon-download:before{content:""}.icon-arc-logo:before{content:""}.icon-zoom:before{content:""}.icon-x-close:before{content:""}.icon-rightarrow-circle:before{content:""}.icon-right-arrow:before{content:""}.icon-quote:before{content:""}.icon-airplane:before{content:""}.icon-down-arrow:before{content:""}.icon-up-arrow:before{content:""}.icon-left-arrow:before{content:""}.icon-file-pdf-etc:before{content:""}.icon-training-video:before{content:""}.icon-upcoming-webinar:before{content:""}.icon-recorded-webinar:before{content:""}.icon-newsletter:before{content:""}.icon-check:before{content:""}.icon-radio:before{content:""}.icon-instagram:before{content:""}.icon-travelconnect-logo:before{content:""}.icon-iso_logo:before{content:""}.arc-sticky-container{height:56px}.arc-sticky-inner{height:100%;background:#189bb0}.arc-sticky-nav{display:flex;max-width:1170px;margin:0 auto;height:100%}.arc-sticky-menu{height:100%}.arc-sticky-links{height:100%;margin:0 auto}a.arc-sticky-title,.arc-sticky-title{font-family:SourceSansPro-Regular,Arial,Helvetica,sans-serif;font-size:20px;margin-left:0px;color:#fff}a.arc-sticky-title:hover,a.arc-sticky-title:active,.arc-sticky-title:hover,.arc-sticky-title:active{color:#fff;opacity:.8}a.arc-sticky-link,a.arc-sticky-link-right{font-family:SourceSansPro-SemiBold,Arial,Helvetica,sans-serif;font-size:16px;padding:0 10px;color:#fff}a.arc-sticky-link:hover,a.arc-sticky-link:active,a.arc-sticky-link:focus,a.arc-sticky-link-right:hover,a.arc-sticky-link-right:active,a.arc-sticky-link-right:focus{color:#fff;opacity:.9}a.arc-sticky-link-right,a.arc-sticky-link-right:active,a.arc-sticky-link-right:focus,a.arc-sticky-link-right:hover{color:#fff;padding-right:0}a.arc-sticky-link-right i,a.arc-sticky-link-right svg{font-size:10px;margin-left:5px;margin-bottom:0}.arc-sticky-brand img{height:16px;margin-right:5px;margin-left:10px}.arc-sticky-title{font-family:SourceSansPro-Regular,Arial,Helvetica,sans-serif;font-size:20px;margin-left:0px;color:#fff}@media(max-width: 990px){.arc-sticky-container{display:none}}#storybook-root,#root{width:100%}.sbdocs{max-width:100% !important}',"",{version:3,sources:["webpack://./src/scss/partials/fonts.scss","webpack://./src/scss/partials/stickynav.scss","webpack://./src/scss/partials/colors.scss","webpack://./src/stories/main.scss"],names:[],mappings:"AAiDQ,WAjDR,iCACE,CAAA,0EACA,CAAA,6FACA,CAAA,kBAEA,CAAA,iBACA,CAAA,WAEF,wCACE,CAAA,iFACA,CAAA,oGACA,CAAA,kBAEA,CAAA,iBACA,CAAA,WAEF,8BACE,CAAA,uEACA,CAAA,0FACA,CAAA,kBAEA,CAAA,iBACA,CAAA,WAEF,+BACE,CAAA,wEACA,CAAA,2FACA,CAAA,kBAEA,CAAA,iBACA,CAAA,WAEF,+BACE,CAAA,oFACA,CAAA,uGACA,CAAA,kBAEA,CAAA,iBACA,CAAA,WAEF,kCACE,CAAA,uFACA,CAAA,0GACA,CAAA,kBAEA,CAAA,iBACA,CAAA,WAKF,qBACE,CAAA,iFACA,CAAA,sZACA,CAAA,kBAQA,CAAA,iBACA,CAAA,iCAEF,gCAEE,CAAA,UACA,CAAA,iBACA,CAAA,kBACA,CAAA,mBACA,CAAA,mBACA,CAAA,aACA,CAAA,SACA,CAAA,kCACA,CAAA,iCACA,CAAA,qBAEF,WACE,CAAA,sBAEF,WACE,CAAA,oBAEF,WACE,CAAA,kBAEF,WACE,CAAA,sBAEF,WACE,CAAA,sBAEF,WACE,CAAA,sBAEF,WACE,CAAA,kBAEF,WACE,CAAA,qBAEF,WACE,CAAA,+BAEF,WACE,CAAA,yBAEF,WACE,CAAA,mBAEF,WACE,CAAA,sBAEF,WACE,CAAA,wBAEF,WACE,CAAA,sBAEF,WACE,CAAA,wBAEF,WACE,CAAA,0BAEF,WACE,CAAA,4BAEF,WACE,CAAA,8BAEF,WACE,CAAA,8BAEF,WACE,CAAA,wBAEF,WACE,CAAA,mBAEF,WACE,CAAA,mBAEF,WACE,CAAA,uBAEF,WACE,CAAA,gCAEF,WACE,CAAA,sBAEF,WACE,CAAA,sBCtJF,WACE,CAAA,kBAGF,WACE,CAAA,kBCRS,CAAA,gBDYX,YACE,CAAA,gBACA,CAAA,aACA,CAAA,WACA,CAAA,iBAGF,WACE,CAAA,kBAGF,WACE,CAAA,aACA,CAAA,qCAGF,4DAEE,CAAA,cACA,CAAA,eACA,CAAA,UChBW,CAAA,oGDmBX,UAEE,CAAA,UACA,CAAA,0CAIJ,6DAEE,CAAA,cACA,CAAA,cACA,CAAA,UACA,CAAA,oKAEA,UAGE,CAAA,UACA,CAAA,mHAIJ,UAIE,CAAA,eACA,CAAA,sDAGF,cAEE,CAAA,eACA,CAAA,eACA,CAAA,sBAGF,WACE,CAAA,gBACA,CAAA,gBACA,CAAA,kBAGF,4DACE,CAAA,cACA,CAAA,eACA,CAAA,UACA,CAAA,yBAGF,sBACE,YACE,CAAA,CAAA,sBElFJ,UAAA,CAAA,QAEA,yBACE",sourcesContent:['@font-face {\n  font-family: SourceSansPro-Regular;\n  src: url("https://www2.arccorp.com/static/fonts/SourceSansPro-Regular.ttf");\n  src: url("https://www2.arccorp.com/static/fonts/SourceSansPro-Regular.ttf")\n    format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: SourceSansPro-SemiboldItalic;\n  src: url("https://www2.arccorp.com/static/fonts/SourceSansPro-SemiboldItalic.ttf");\n  src: url("https://www2.arccorp.com/static/fonts/SourceSansPro-SemiboldItalic.ttf")\n    format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: SourceSansPro-Bold;\n  src: url("https://www2.arccorp.com/static/fonts/SourceSansPro-Bold.ttf");\n  src: url("https://www2.arccorp.com/static/fonts/SourceSansPro-Bold.ttf")\n    format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: SourceSansPro-Black;\n  src: url("https://www2.arccorp.com/static/fonts/SourceSansPro-Black.ttf");\n  src: url("https://www2.arccorp.com/static/fonts/SourceSansPro-Black.ttf")\n    format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: SourceSansPro-Light;\n  src: url("https://www2.arccorp.com/globalassets/style/fonts/SourceSansPro-Light.ttf");\n  src: url("https://www2.arccorp.com/globalassets/style/fonts/SourceSansPro-Light.ttf")\n    format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: SourceSansPro-SemiBold;\n  src: url("https://www2.arccorp.com/globalassets/style/fonts/SourceSansPro-SemiBold.ttf");\n  src: url("https://www2.arccorp.com/globalassets/style/fonts/SourceSansPro-SemiBold.ttf")\n    format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@import url("https://use.fontawesome.com/releases/v5.1.0/css/all.css");\n\n@font-face {\n  font-family: "icomoon";\n  src: url("https://www2.arccorp.com/globalassets/style/fonts//icomoon.eot?3p9rfka");\n  src: url("https://www2.arccorp.com/globalassets/style/fonts//icomoon.eot?3p9rfka#iefix")\n      format("embedded-opentype"),\n    url("https://www2.arccorp.com/globalassets/style/fonts//icomoon.ttf?3p9rfka")\n      format("truetype"),\n    url("https://www2.arccorp.com/globalassets/style/fonts//icomoon.woff?3p9rfka")\n      format("woff"),\n    url("https://www2.arccorp.com/globalassets/style/fonts//icomoon.svg?3p9rfka#icomoon")\n      format("svg");\n  font-weight: normal;\n  font-style: normal;\n}\n[class^="icon-"],\n[class*=" icon-"] {\n  font-family: "icomoon" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  outline: 0;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-twitter:before {\n  content: "\\e900";\n}\n.icon-linkedin:before {\n  content: "\\eaca";\n}\n.icon-search:before {\n  content: "\\e901";\n}\n.icon-menu:before {\n  content: "\\e902";\n}\n.icon-facebook:before {\n  content: "\\e903";\n}\n.icon-download:before {\n  content: "\\e904";\n}\n.icon-arc-logo:before {\n  content: "\\e905";\n}\n.icon-zoom:before {\n  content: "\\e906";\n}\n.icon-x-close:before {\n  content: "\\e907";\n}\n.icon-rightarrow-circle:before {\n  content: "\\e908";\n}\n.icon-right-arrow:before {\n  content: "\\e909";\n}\n.icon-quote:before {\n  content: "\\e90a";\n}\n.icon-airplane:before {\n  content: "\\e90b";\n}\n.icon-down-arrow:before {\n  content: "\\e90c";\n}\n.icon-up-arrow:before {\n  content: "\\e90d";\n}\n.icon-left-arrow:before {\n  content: "\\e90e";\n}\n.icon-file-pdf-etc:before {\n  content: "\\e90f";\n}\n.icon-training-video:before {\n  content: "\\e910";\n}\n.icon-upcoming-webinar:before {\n  content: "\\e910";\n}\n.icon-recorded-webinar:before {\n  content: "\\e910";\n}\n.icon-newsletter:before {\n  content: "\\e911";\n}\n.icon-check:before {\n  content: "\\e912";\n}\n.icon-radio:before {\n  content: "\\e913";\n}\n.icon-instagram:before {\n  content: "\\e914";\n}\n.icon-travelconnect-logo:before {\n  content: "\\e920";\n}\n.icon-iso_logo:before {\n  content: "\\e925";\n}\n\n$arc-font-regular: SourceSansPro-Regular, arial, helvetica, sans-serif;\n$arc-font-light: SourceSansPro-Light, SourceSansPro-Regular, arial, helvetica,\n  sans-serif;\n$arc-font-semibold: SourceSansPro-SemiBold, SourceSansPro-Regular, arial,\n  helvetica, sans-serif;\n$arc-font-bold: SourceSansPro-Bold, SourceSansPro-Regular, arial, helvetica,\n  sans-serif;\n$arc-font-black: SourceSansPro-SemiBold, SourceSansPro-Regular, arial, helvetica,\n  sans-serif;\n','//import all arccorp vars\n@use "./colors.scss";\n@use "./fonts.scss";\n\n.arc-sticky-container {\n  height: 56px;\n}\n\n.arc-sticky-inner {\n  height: 100%;\n  background: colors.$arc-teal;\n}\n\n.arc-sticky-nav {\n  display: flex;\n  max-width: 1170px;\n  margin: 0 auto;\n  height: 100%;\n}\n\n.arc-sticky-menu {\n  height: 100%;\n}\n\n.arc-sticky-links {\n  height: 100%;\n  margin: 0 auto;\n}\n\na.arc-sticky-title,\n.arc-sticky-title {\n  font-family: SourceSansPro-Regular, Arial, Helvetica, sans-serif;\n  font-size: 20px;\n  margin-left: 0px;\n  color: colors.$white;\n\n  &:hover,\n  &:active {\n    color: #ffffff;\n    opacity: 0.8;\n  }\n}\n\na.arc-sticky-link,\na.arc-sticky-link-right {\n  font-family: SourceSansPro-SemiBold, Arial, Helvetica, sans-serif;\n  font-size: 16px;\n  padding: 0 10px;\n  color: #ffffff;\n\n  &:hover,\n  &:active,\n  &:focus {\n    color: #ffffff;\n    opacity: 0.9;\n  }\n}\n\na.arc-sticky-link-right,\na.arc-sticky-link-right:active,\na.arc-sticky-link-right:focus,\na.arc-sticky-link-right:hover {\n  color: #ffffff;\n  padding-right: 0;\n}\n\na.arc-sticky-link-right i,\na.arc-sticky-link-right svg {\n  font-size: 10px;\n  margin-left: 5px;\n  margin-bottom: 0;\n}\n\n.arc-sticky-brand img {\n  height: 16px;\n  margin-right: 5px;\n  margin-left: 10px;\n}\n\n.arc-sticky-title {\n  font-family: SourceSansPro-Regular, Arial, Helvetica, sans-serif;\n  font-size: 20px;\n  margin-left: 0px;\n  color: #ffffff;\n}\n\n@media (max-width: 990px) {\n  .arc-sticky-container {\n    display: none;\n  }\n}\n',"//Brand Colors\n$arc-teal: #189bb0;\n$tarmac: #2a2b2c;\n$altitude-gray: #d4d4d4;\n\n$concourse: #316677;\n$flap3: #c6b593;\n$fuselage: #6d6e71;\n\n$nightshade: #383552;\n$signalorange: #f77f00;\n$airfield: #8ac926;\n\n$flare: #ff1b71;\n$beacon: #fcbf49;\n$nowboarding: #ef233c;\n\n$clearskies: #ffffff;\n$fog: #f7f5f5;\n$overcast: #aaaaaa;\n$landing: #888888;\n$autopilot: #000000;\n\n//additional modifiers\n$black: $autopilot;\n$white: $clearskies;",'@import url("https://www2.arccorp.com/globalassets/static/style.css?a3834s721982a73");\n\n@import url("https://arccorp-script-test.netlify.app/main.min.css");\n\n@import "../scss/main.scss";\n\n#storybook-root, #root {width: 100%}\n\n.sbdocs {\n  max-width: 100% !important;\n}'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/stories/main.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stories/main.scss"),options={insert:"head",singleton:!1};_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.Z,options),_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.Z.locals}}]);