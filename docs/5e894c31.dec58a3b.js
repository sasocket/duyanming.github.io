(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{112:function(n,e,t){"use strict";t.d(e,"a",(function(){return g}));var r=t(0),o=t.n(r);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var u=o.a.createContext({}),s=function(n){var e=o.a.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},p={inlineCode:"code",wrapper:function(n){var e=n.children;return o.a.createElement(o.a.Fragment,{},e)}},d=o.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,a=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),d=s(t),g=r,m=d["".concat(a,".").concat(g)]||d[g]||p[g]||i;return t?o.a.createElement(m,c(c({ref:e},u),{},{components:t})):o.a.createElement(m,c({ref:e},u))}));function g(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=n,c.mdxType="string"==typeof n?n:r,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},113:function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"a",(function(){return a}));var r=t(21),o=t(114);function i(){const{siteConfig:{baseUrl:n="/",url:e}={}}=Object(r.default)();return{withBaseUrl:(t,r)=>function(n,e,t,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if(Object(o.b)(t))return t;if(r)return e+t;const a=t.startsWith(e)?t:e+t.replace(/^\//,"");return i?n+a:a}(e,n,t,r)}}function a(n,e={}){const{withBaseUrl:t}=i();return t(n,e)}},114:function(n,e,t){"use strict";function r(n){return!0===/^(\w*:|\/\/)/.test(n)}function o(n){return void 0!==n&&!r(n)}t.d(e,"b",(function(){return r})),t.d(e,"a",(function(){return o}))},79:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return a})),t.d(e,"metadata",(function(){return c})),t.d(e,"rightToc",(function(){return l})),t.d(e,"default",(function(){return s}));var r=t(3),o=(t(0),t(112)),i=t(113);const a={id:"7_2_introduce",title:"7.2 \u7f16\u5199\u4e00\u4e2a\u63d2\u4ef6",sidebar_label:"7.2 \u7f16\u5199\u4e00\u4e2a\u63d2\u4ef6"},c={unversionedId:"7_2_introduce",id:"7_2_introduce",isDocsHomePage:!1,title:"7.2 \u7f16\u5199\u4e00\u4e2a\u63d2\u4ef6",description:"\u524d\u9762\u7ae0\u8282\u6211\u4eec\u5df2\u7ecf\u521b\u5efa\u597d\u4e86\u4e00\u4e2aHelloWorldService \u670d\u52a1\uff0c\u8fd9\u4e00\u5c0f\u8282\u6211\u4eec\u6765\u7f16\u5199\u4e00\u4e2aHelloWorld\u63d2\u4ef6\u3002\u542f\u52a8\u6ce8\u518c\u4e2d\u5fc3ViperCenter",source:"@site/docs\\7.2.hello-world-plugs.mdx",slug:"/7_2_introduce",permalink:"/docs/7_2_introduce",editUrl:"https://github.com/duyanming/duyanming.github.com/tree/main/viper/docs/7.2.hello-world-plugs.mdx",version:"current",sidebar_label:"7.2 \u7f16\u5199\u4e00\u4e2a\u63d2\u4ef6",sidebar:"docs",previous:{title:"7.1 Hello World",permalink:"/docs/7_1_introduce"},next:{title:"7.3 \u63d2\u4ef6ApiDoc\u6587\u6863",permalink:"/docs/7_3_introduce"}},l=[{value:"7.2 \u65b0\u5efa\u4e00\u4e2aHelloWorld\u63d2\u4ef6",id:"72-\u65b0\u5efa\u4e00\u4e2ahelloworld\u63d2\u4ef6",children:[]}],u={rightToc:l};function s({components:n,...e}){return Object(o.a)("wrapper",Object(r.a)({},u,e,{components:n,mdxType:"MDXLayout"}),Object(o.a)("p",null,"\u3000\u3000\u3000\u3000\u524d\u9762\u7ae0\u8282\u6211\u4eec\u5df2\u7ecf\u521b\u5efa\u597d\u4e86\u4e00\u4e2aHelloWorldService \u670d\u52a1\uff0c\u8fd9\u4e00\u5c0f\u8282\u6211\u4eec\u6765\u7f16\u5199\u4e00\u4e2aHelloWorld\u63d2\u4ef6\u3002\u542f\u52a8\u6ce8\u518c\u4e2d\u5fc3",Object(o.a)("inlineCode",{parentName:"p"},"ViperCenter"),"\n\u4fee\u6539",Object(o.a)("inlineCode",{parentName:"p"},"HelloWorldService")," \u6ce8\u518c\u4e2d\u5fc3\u5730\u5740\u3002"),Object(o.a)("h3",{id:"72-\u65b0\u5efa\u4e00\u4e2ahelloworld\u63d2\u4ef6"},"7.2 \u65b0\u5efa\u4e00\u4e2aHelloWorld\u63d2\u4ef6"),Object(o.a)("p",null,"\u3000\u3000\u3000\u65b0\u5efa\u4e00\u4e2aHelloWorld\u529f\u80fd\u63d2\u4ef6\uff0c \u7a0d\u540e\u6211\u4eec\u4ee5\u540c\u6837\u7684\u65b9\u5f0f\u6dfb\u52a0\u4e00\u4e2aSoEasy\u529f\u80fd\u63d2\u4ef6\u3002\u6700\u540e\u6211\u4eec\u8ba9\u4e24\u4e2a\u63d2\u4ef6\u76f8\u4e92\u8c03\u7528\u5e76\u8f93\u51fa\u7ed3\u679c\u3002"),Object(o.a)("div",{style:{width:"100%",textAlign:"center"}},Object(o.a)("img",{src:Object(i.a)("img/helloworldPlug01.jpg")})),Object(o.a)("br",null),"\u6dfb\u52a0Anno\u529f\u80fd\u63d2\u4ef6\u4f9d\u8d56",Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"Install-Package Anno.EngineData -Version 1.0.2.6\n")),Object(o.a)("p",null,"\u589e\u52a0\u4e00\u4e2a\u63d2\u4ef6\u542f\u52a8\u521d\u59cb\u5316\u914d\u7f6e\u7c7b",Object(o.a)("inlineCode",{parentName:"p"},"HelloWorldBootStrap")),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"using Anno.EngineData;\nusing System;\n\nnamespace Anno.Plugs.HelloWorldService\n{\n    public class HelloWorldBootStrap : IPlugsConfigurationBootstrap\n    {\n        public void ConfigurationBootstrap()\n        {\n            //throw new NotImplementedException();\n        }\n\n        public void PreConfigurationBootstrap()\n        {\n            //throw new NotImplementedException();\n        }\n    }\n}\n")),Object(o.a)("p",null,"\u589e\u52a0\u4e00\u4e2a\u4e1a\u52a1\u6a21\u5757 ",Object(o.a)("inlineCode",{parentName:"p"},"HelloWorldViperModule")),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'/****************************************************** \nWriter:Du YanMing\nMail:dym880@163.com\nCreate Date:2020/10/30 13:15:24 \nFunctional description\uff1a HelloWorldViperModule\n******************************************************/\nusing System;\nusing System.Collections.Generic;\nusing System.Text;\n\nnamespace Anno.Plugs.HelloWorldService\n{\n    using Anno.Const.Attribute;\n    using Anno.EngineData;\n    using HelloWorldDto;\n\n    public class HelloWorldViperModule: BaseModule\n    {\n        [AnnoInfo(Desc = "\u4e16\u754c\u4f60\u597d\u554aSayHi")]\n        public dynamic SayHello([AnnoInfo(Desc = "\u79f0\u547c")] string name,[AnnoInfo(Desc = "\u5e74\u9f84")] int age)\n        {\n            Dictionary<string, string> input = new Dictionary<string, string>();\n            input.Add("vName",name);\n            input.Add("vAge", age.ToString());\n            var soEasyMsg = Newtonsoft.Json.JsonConvert\n            .DeserializeObject<ActionResult<string>>\n            (this.InvokeProcessor("Anno.Plugs.SoEasy", "AnnoSoEasy", "SayHi", input))\n            .OutputData;\n            return new { HelloWorldViperMsg = $"{name}\u4f60\u597d\u554a\uff0c\u4eca\u5e74{age}\u5c81\u4e86",\n             SoEasyMsg= soEasyMsg };\n        }\n\n        [AnnoInfo(Desc = "\u4e24\u4e2a\u6574\u6570\u76f8\u51cf\u7b49\u4e8e\u51e0\uff1f\u6211\u6765\u5e2e\u4f60\u7b97\uff08x-y=?\uff09")]\n        public int Subtraction([AnnoInfo(Desc = "\u6574\u6570X")] int x,\n         [AnnoInfo(Desc = "\u6574\u6570Y")] int y)\n        {\n            return x - y;\n        }\n        [AnnoInfo(Desc = "\u4e70\u4e2a\u5546\u54c1\u5427\uff0c\u53cc\u5341\u4e00\u9a6c\u4e0a\u5c31\u6765\u4e86")]\n        public ProductDto BuyProduct([AnnoInfo(Desc = "\u5546\u54c1\u540d\u79f0")] string productName,\n         [AnnoInfo(Desc = "\u5546\u54c1\u6570\u91cf")] int number)\n        {\n            double price = new Random().Next(2, 90);\n            Dictionary<string, string> input = new Dictionary<string, string>();\n            input.Add("productName", productName);\n            input.Add("number", number.ToString());\n            var product = Newtonsoft.Json.JsonConvert.\n            DeserializeObject<ActionResult<ProductDto>>(this.InvokeProcessor\n            ("Anno.Plugs.SoEasy", "AnnoSoEasy", "BuyProduct", input)).OutputData;\n            product.CountryOfOrigin = $"\u4e2d\u56fd\u5317\u4eac\u4e2d\u8f6c--{ product.CountryOfOrigin}";\n            return product;\n        }\n    }\n}\n\n')),Object(o.a)("p",null,"\u589e\u52a0\u4e00\u4e2a\u4e1a\u52a1\u6a21\u5757 ",Object(o.a)("inlineCode",{parentName:"p"},"Anno.Plugs.SoEasyService")," ",Object(o.a)("inlineCode",{parentName:"p"},"AnnoSoEasyModule")),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'/****************************************************** \nWriter:Du YanMing\nMail:dym880@163.com\nCreate Date:2020/10/30 13:16:23 \nFunctional description\uff1a AnnoSoEasyModule\n******************************************************/\nusing Anno.EngineData;\nusing System;\nusing System.Collections.Generic;\nusing System.Text;\n\nnamespace Anno.Plugs.SoEasyService\n{\n    using Anno.Const.Attribute;\n    using Anno.EngineData;\n    using HelloWorldDto;\n\n    public class AnnoSoEasyModule : BaseModule\n    {\n        [AnnoInfo(Desc = "AnnoSoEasy\u4f60\u597d\u554aSayHi")]\n        public dynamic SayHi([AnnoInfo(Desc = "\u79f0\u547c")] string vname, [AnnoInfo(Desc = "\u5e74\u9f84")] int vage)\n        {\n            var msg = string.Empty;\n            if (vage < 12)\n            {\n                msg = "\u5c0f\u670b\u53cb\u5e74\u7eaa\u8f7b\u8f7b\u5c31\u5c31\u5f00\u59cb\u73a9\u53d8\u6210\u4e86\u554a\uff01\u52a0\u6cb9Baby\uff01";\n            }else if (vage < 23)\n            {\n                msg = "\u5c0f\u5144\u5f1f\uff0c\u627e\u5973\u670b\u53cb\u4e86\u5417\uff1f\u6ca1\u6709\u7684\u8bdd\u8d76\u7d27\u627e\u4e00\u4e2a\u5427\u3002\u522b\u628a\u5fc3\u601d\u90fd\u653e\u5728\u5199\u4ee3\u7801\u4e0a\uff01";\n            }\n            else if (vage < 30)\n            {\n                msg = "\u5144\u5f1f\uff0c\u4f60\u5bb6\u5c0f\u5b69\u51e0\u5c81\u4e86\uff1f\u5f00\u59cb\u5b66\u7f16\u7a0b\u4e86\u5417\uff1f";\n            }\n            else if (vage < 45)\n            {\n                msg = "\u5927\u54e5\uff0c\u4f60\u597d\u80fd\u7ed9\u6211\u4ecb\u7ecd\u4e2a\u5bf9\u8c61\u5417\uff1f";\n            }\n            else if (vage < 55)\n            {\n                msg = "\u5927\u53d4\uff0c\u4f60\u5bb6\u90bb\u5c45\u6709\u5c0f\u59b9\u59b9\u4ecb\u7ecd\u5417\uff1f";\n            }\n            else\n            {\n                msg = "\u8fd8\u4e0d\u9000\u4f11\uff1f\u522b\u5199\u4ee3\u7801\u4e86\uff01";\n            }\n            return $"{vname}:\u4f60\u597d\uff0c\u6211\u662fSoEasy\uff0c{msg}";\n        }\n\n        [AnnoInfo(Desc = "\u4e24\u4e2a\u6574\u6570\u76f8\u52a0\u7b49\u4e8e\u51e0\uff1f\u6211\u6765\u5e2e\u4f60\u7b97")]\n        public int Add([AnnoInfo(Desc = "\u6574\u6570X")] int x, [AnnoInfo(Desc = "\u6574\u6570Y")] int y)\n        {\n            return x + y;\n        }\n        [AnnoInfo(Desc = "\u4e70\u4e2a\u5546\u54c1\u5427\uff0c\u53cc\u5341\u4e00\u9a6c\u4e0a\u5c31\u6765\u4e86")]\n        public ProductDto BuyProduct([AnnoInfo(Desc = "\u5546\u54c1\u540d\u79f0")] string productName\n        , [AnnoInfo(Desc = "\u5546\u54c1\u6570\u91cf")] int number)\n        {\n            double price = new Random().Next(2, 90);\n            return new ProductDto() { Name=productName,Price=price ,Number=number, CountryOfOrigin="\u4e2d\u56fd\u53f0\u6e7e"};\n        }\n    }\n}\n\n')))}s.isMDXComponent=!0}}]);