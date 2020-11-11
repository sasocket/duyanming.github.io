(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{100:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),b=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=b(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(t),u=a,m=l["".concat(c,".").concat(u)]||l[u]||d[u]||i;return t?r.a.createElement(m,o(o({ref:n},p),{},{components:t})):r.a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var p=2;p<i;p++)c[p]=t[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},101:function(e,n,t){"use strict";var a=t(0),r=t(20);n.a=function(){const e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},102:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return c}));var a=t(101),r=t(103);function i(){const{siteConfig:{baseUrl:e="/",url:n}={}}=Object(a.a)();return{withBaseUrl:(t,a)=>function(e,n,t,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if(Object(r.b)(t))return t;if(a)return n+t;const c=t.startsWith(n)?t:n+t.replace(/^\//,"");return i?e+c:c}(n,e,t,a)}}function c(e,n={}){const{withBaseUrl:t}=i();return t(e,n)}},103:function(e,n,t){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return r}))},78:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return l}));var a=t(2),r=t(6),i=(t(0),t(100)),c=t(102),o={id:"3_1_introduce",title:"3.1 \u670d\u52a1\u63d0\u4f9b\u8005ViperService\u6982\u8ff0",sidebar_label:"3.1 Provider\u6982\u8ff0"},s={unversionedId:"3_1_introduce",id:"3_1_introduce",isDocsHomePage:!1,title:"3.1 \u670d\u52a1\u63d0\u4f9b\u8005ViperService\u6982\u8ff0",description:"3.1.1 \u6e90\u7801\u7ed3\u6784",source:"@site/docs\\3.1viper-service.mdx",slug:"/3_1_introduce",permalink:"/docs/3_1_introduce",editUrl:"https://github.com/duyanming/duyanming.github.com/tree/master/viper/docs/3.1viper-service.mdx",version:"current",sidebar_label:"3.1 Provider\u6982\u8ff0",sidebar:"docs",previous:{title:"2.1 \u6ce8\u518c\u4e2d\u5fc3\u6982\u8ff0",permalink:"/docs/2_1_introduce"},next:{title:"4.1 \u7f51\u5173&\u76d1\u63a7",permalink:"/docs/4_1_introduce"}},p=[{value:"3.1.1 \u6e90\u7801\u7ed3\u6784",id:"311-\u6e90\u7801\u7ed3\u6784",children:[{value:"MySQL \u6570\u636e\u5e93",id:"mysql-\u6570\u636e\u5e93",children:[]}]},{value:"3.1.2 \u65b0\u5efa<code>.netcore3.1</code>\u63a7\u5236\u53f0\u7a0b\u5e8f",id:"312-\u65b0\u5efanetcore31\u63a7\u5236\u53f0\u7a0b\u5e8f",children:[{value:"1. \u53d6\u540d <code>ViperService</code>",id:"1-\u53d6\u540d-viperservice",children:[]},{value:"2. \u6dfb\u52a0Nuget\u5305",id:"2-\u6dfb\u52a0nuget\u5305",children:[]},{value:"3. \u914d\u7f6e\u6587\u4ef6",id:"3-\u914d\u7f6e\u6587\u4ef6",children:[]},{value:"4. \u7a0b\u5e8f\u6587\u4ef6",id:"4-\u7a0b\u5e8f\u6587\u4ef6",children:[]},{value:"5. \u63a5\u53e3\u6587\u6863\u5199\u5165 \u6ce8\u518c\u4e2d\u5fc3<code>ViperCenter</code>",id:"5-\u63a5\u53e3\u6587\u6863\u5199\u5165-\u6ce8\u518c\u4e2d\u5fc3vipercenter",children:[]},{value:"6 \u8fd0\u884c\u670d\u52a1\u5bbf\u4e3b\u7a0b\u5e8f",id:"6-\u8fd0\u884c\u670d\u52a1\u5bbf\u4e3b\u7a0b\u5e8f",children:[]}]}],b={rightToc:p};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"311-\u6e90\u7801\u7ed3\u6784"},"3.1.1 \u6e90\u7801\u7ed3\u6784"),Object(i.b)("div",{style:{width:"100%",textAlign:"center"}},Object(i.b)("img",{src:Object(c.a)("img/service01.jpg")})),Object(i.b)("h3",{id:"mysql-\u6570\u636e\u5e93"},"MySQL \u6570\u636e\u5e93"),Object(i.b)("p",null,"\u8fd0\u884c\u6570\u636e\u5e93\u811a\u672c\u521b\u5efa\u6570\u636e\u5e93"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"1\u3001Viper\\database\\Viper20200926184831.sql\n")),Object(i.b)("h2",{id:"312-\u65b0\u5efanetcore31\u63a7\u5236\u53f0\u7a0b\u5e8f"},"3.1.2 \u65b0\u5efa",Object(i.b)("inlineCode",{parentName:"h2"},".netcore3.1"),"\u63a7\u5236\u53f0\u7a0b\u5e8f"),Object(i.b)("h3",{id:"1-\u53d6\u540d-viperservice"},"1. \u53d6\u540d ",Object(i.b)("inlineCode",{parentName:"h3"},"ViperService")),Object(i.b)("h3",{id:"2-\u6dfb\u52a0nuget\u5305"},"2. \u6dfb\u52a0Nuget\u5305"),Object(i.b)("blockquote",null,Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"})," dotnet add package Anno.Rpc.Server --version 1.0.2.2\n dotnet add package Anno.EngineData --version 1.0.2.4\n"))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u5f00\u53d1\u8005\u53ef\u4ee5\u6839\u636e\u559c\u597d\u9009\u62e9\u5e95\u5c42",Object(i.b)("inlineCode",{parentName:"h5"},"RPC"),"\u901a\u8baf\u4e2d\u95f4\u4ef6")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\xa0","\xa0","\u76ee\u524d\u652f\u6301\u4e24\u79cd",Object(i.b)("inlineCode",{parentName:"p"},"Thrift"),"\u3001",Object(i.b)("inlineCode",{parentName:"p"},"Grpc"),",\u63a8\u8350",Object(i.b)("inlineCode",{parentName:"p"},"Thrift")),Object(i.b)("p",{parentName:"div"},"\xa0","\xa0",Object(i.b)("inlineCode",{parentName:"p"}," dotnet add package Anno.Rpc.Server --version 1.0.2.2")," \u4e3aThrift\u65b9\u5f0f"),Object(i.b)("p",{parentName:"div"},"\xa0","\xa0",Object(i.b)("inlineCode",{parentName:"p"},"dotnet add package Anno.Rpc.ClientGrpc --version 1.0.1.5")," \u4e3aGrpc\u65b9\u5f0f"))),Object(i.b)("h3",{id:"3-\u914d\u7f6e\u6587\u4ef6"},"3. \u914d\u7f6e\u6587\u4ef6"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"Viper\\ViperCenter\\bin\\Debug\\netcoreapp3.1\\Anno.config")),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'    <?xml version="1.0" encoding="utf-8" ?>\n    <configuration>\n    \x3c!--0,0 \u7b2c\u4e00\u4f4d\u662f \u5de5\u4f5c\u7ad9\uff0c\u7b2c\u4e8c\u4f4d\u6570\u636e\u4e2d\u5fc3\n    \uff08\u6240\u6709\u7684 AnnoService \u7684 \u4e24\u4f4d\u6570\u4e0d\u80fd\u91cd\u590d\u4f8b\u5982\u4e0d\u80fd\u5b58\u5728\u30101,2\u3011\u30101,2\u3011\uff09\n    \u53ef\u4ee5\u5b58\u5728\u30101,2\u3011\u30102,1\u3011\n    --\x3e\n    <IdWorker>0,0</IdWorker>\n    \x3c!--App\u540d\u79f0--\x3e\n    <AppName>ViperService-01</AppName>\n    \x3c!--\u76d1\u542c\u7aef\u53e3--\x3e\n    <Port>7011</Port>\n    \x3c!--\u6743\u91cd--\x3e\n    <Weight>1</Weight>\n    \x3c!--\u529f\u80fd \u975eAnno.Plugs  \u52a0\u5165\u65b9\u5f0f--\x3e\n    <FuncName></FuncName>\n    \x3c!--\u5ffd\u7565\u7684\u529f\u80fd Trace,Logic--\x3e\n    <IgnoreFuncName></IgnoreFuncName>\n    \x3c!--\u8d85\u65f6\u65f6\u95f4\u6beb\u79d2--\x3e\n    <TimeOut>20000</TimeOut>\n    \x3c!--\u6ce8\u518c\u5230\u7684\u76ee\u6807--\x3e\n    <Ts Ip="127.0.0.1" Port="7010"/>\n    <IocDll>\n        \x3c!-- IOC \u4ed3\u50a8--\x3e\x3c!--\n        <Assembly>Anno.Repository</Assembly>\n        --\x3e\x3c!-- \u9886\u57df--\x3e\x3c!--\n        <Assembly>Anno.Domain</Assembly>\n        --\x3e\x3c!-- \u67e5\u8be2\u670d\u52a1--\x3e\x3c!--\n        <Assembly>Anno.QueryServices</Assembly>\n        --\x3e\x3c!--\u4e8b\u4ef6Handler--\x3e\x3c!--\n        <Assembly>Anno.Command.Handler</Assembly>--\x3e\n    </IocDll>\n    <appSettings>\n        \x3c!-- \u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32 Mysql--\x3e\n        <add key="ConnStr" value="server=127.0.0.1;database=viper;uid=bif;pwd=123456;SslMode=None;"/>\n        \x3c!--\n        redisConn Redis \u8fde\u63a5\u5b57\u7b26\u4e32 127.0.0.1:6379,abortConnect=false,allowAdmin =true,keepAlive=180\n        redisPrefix Key \u524d\u7f00 Anno:\n        redisExpiryDate Key \u6709\u6548\u671f  \u5355\u4f4d\uff08\u5206\u949f\uff09 20\n        redisSwitch \u662f\u5426\u5f00\u542f\u6570\u636e\u5e93 false \u4e0d\u5f00\u542f false\n        --\x3e\n        <add key="redisConn" value=""/>\n        <add key="redisPrefix" value="SW:"/>\n        <add key="redisExpiryDate" value="20"/>\n        <add key="redisSwitch" value="false"/>\n    </appSettings>\n    </configuration>\n'))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u63d0\u793a")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"\u4e00\u822c\u60c5\u51b5\u4e0b\u53ea\u7528\u4fee\u6539 \u4e0b\u9762\u4e24\u884c\u914d\u7f6e"))),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),' \x3c!--\u6ce8\u518c\u5230\u7684\u76ee\u6807--\x3e\n  <Ts Ip="127.0.0.1" Port="7010"/>\n\n \x3c!-- \u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32 Mysql--\x3e\n  <add key="ConnStr" value="server=xxxx;"/>\n')))),Object(i.b)("h3",{id:"4-\u7a0b\u5e8f\u6587\u4ef6"},"4. \u7a0b\u5e8f\u6587\u4ef6"),Object(i.b)("p",null,"\u6b63\u5e38\u60c5\u51b5\u4e0b\u53ea\u9700\u8981\u4e00\u4e0b\u51e0\u884c\u4ee3\u7801\u5c31\u53ef\u4ee5\u5230\u9876\u670d\u52a1\u5bbf\u4e3b\u7a0b\u5e8f"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'using System;\nusing System.Linq;\nusing System.Reflection;\nusing System.Threading;\nusing Anno.Const.Attribute;\nusing Anno.Loader;\nusing Anno.Log;\nusing Autofac;\n\nnamespace ViperService\n{\n    using Anno.EngineData;\n    using Anno.Rpc.Server;\n    using System.Collections.Generic;\n    using Anno.Rpc.Storage;\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            if (args.Contains("-help"))\n            {\n                Log.ConsoleWriteLine(@"\n\u542f\u52a8\u53c2\u6570\uff1a\n    -p 6659     \u8bbe\u7f6e\u542f\u52a8\u7aef\u53e3\n    -xt 200     \u8bbe\u7f6e\u670d\u52a1\u6700\u5927\u7ebf\u7a0b\u6570\n    -t 20000        \u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4\uff08\u5355\u4f4d\u6beb\u79d2\uff09\n    -w 1        \u8bbe\u7f6e\u6743\u91cd\n    -h 192.168.0.2  \u8bbe\u7f6e\u670d\u52a1\u5728\u6ce8\u518c\u4e2d\u5fc3\u7684\u5730\u5740\n    -tr false       \u8bbe\u7f6e\u8c03\u7528\u94fe\u8ffd\u8e2a\u662f\u5426\u542f\u7528");\n                return;\n            }\n            Bootstrap.StartUp(args, () =>\n            {\n                //Anno.Const.SettingService.TraceOnOff = true;\n                var autofac = IocLoader.GetAutoFacContainerBuilder();\n                autofac.RegisterType(typeof(RpcConnectorImpl)).As(typeof(IRpcConnector)).SingleInstance();\n            });\n        }\n    }\n}\n\n')),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u670d\u52a1\u5bbf\u4e3b\u7a0b\u5e8f\u53ef\u4ee5\u6839\u636e\u9700\u8981\u5f00\u53d1\u8005\u81ea\u5df1\u9009\u62e9\u4f9d\u8d56\u6ce8\u5165\u4e2d\u95f4\u4ef6")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\xa0","\xa0","\u76ee\u524d\u652f\u6301\u4e24\u79cd",Object(i.b)("inlineCode",{parentName:"p"},"Autofac"),"\u3001",Object(i.b)("inlineCode",{parentName:"p"},"DependencyInjection"),",\u63a8\u8350",Object(i.b)("inlineCode",{parentName:"p"},"Autofac")),Object(i.b)("p",{parentName:"div"},"\xa0","\xa0",Object(i.b)("inlineCode",{parentName:"p"},"IocLoader.GetAutoFacContainerBuilder()")," \u4e3aAutofac\u65b9\u5f0f"),Object(i.b)("p",{parentName:"div"},"\xa0","\xa0",Object(i.b)("inlineCode",{parentName:"p"},"IocLoader.GetServiceDescriptors()")," \u4e3aDependencyInjection\u65b9\u5f0f ",Object(i.b)("sub",null,Object(i.b)("strong",{parentName:"p"},".netcore \u81ea\u5e26\u7684\u4f9d\u8d56\u6ce8\u5165\u4e2d\u95f4\u4ef6"))))),Object(i.b)("h3",{id:"5-\u63a5\u53e3\u6587\u6863\u5199\u5165-\u6ce8\u518c\u4e2d\u5fc3vipercenter"},"5. \u63a5\u53e3\u6587\u6863\u5199\u5165 \u6ce8\u518c\u4e2d\u5fc3",Object(i.b)("inlineCode",{parentName:"h3"},"ViperCenter")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:'{6-60} title="\u8fd9\u6bb5\u4ee3\u7801\u76f4\u63a5\u9ecf\u8d34\u5c31\u53ef\u4ee5\u4e0d\u7528\u4fee\u6539"',"{6-60}":!0,title:'"\u8fd9\u6bb5\u4ee3\u7801\u76f4\u63a5\u9ecf\u8d34\u5c31\u53ef\u4ee5\u4e0d\u7528\u4fee\u6539"'}),' Bootstrap.StartUp(args, () =>\n            {\n                //Anno.Const.SettingService.TraceOnOff = true;\n                var autofac = IocLoader.GetAutoFacContainerBuilder();\n                autofac.RegisterType(typeof(RpcConnectorImpl)).As(typeof(IRpcConnector)).SingleInstance();\n            }, () =>\n            { //startUp  CallBack\n                List<AnnoData> routings = new List<AnnoData>();\n                foreach (var item in Anno.EngineData.Routing.Routing.Router)\n                {\n                    if (item.Value.RoutMethod.Name == "get_ActionResult")\n                    {\n                        continue;\n                    }\n                    var parameters = item.Value.RoutMethod.GetParameters().ToList().Select(it =>\n                    {\n                        var parameter = new ParametersValue\n                        { Name = it.Name, Position = it.Position, ParameterType = it.ParameterType.FullName };\n                        var pa = it.GetCustomAttributes<AnnoInfoAttribute>().ToList();\n                        if (pa.Any())\n                        {\n                            parameter.Desc = pa.First().Desc;\n                        }\n                        return parameter;\n                    }).ToList();\n                    string methodDesc = String.Empty;\n                    var mAnnoInfoAttributes = item.Value.RoutMethod.GetCustomAttributes<AnnoInfoAttribute>().ToList();\n                    if (mAnnoInfoAttributes.Count > 0)\n                    {\n                        methodDesc = mAnnoInfoAttributes.First().Desc;\n                    }\n                    routings.Add(new AnnoData()\n                    {\n                        App = Anno.Const.SettingService.AppName,\n                        Id = $"{Anno.Const.SettingService.AppName}:{item.Key}",\n                        Value = Newtonsoft.Json.JsonConvert.SerializeObject(new DataValue { Desc = methodDesc, Name = item.Value.RoutMethod.Name, Parameters = parameters })\n                    });\n                }\n                Dictionary<string, string> input = new Dictionary<string, string>();\n                input.Add(CONST.Opt, CONST.DeleteByApp);\n                input.Add(CONST.App, Anno.Const.SettingService.AppName);\n                var del = Newtonsoft.Json.JsonConvert.DeserializeObject<AnnoDataResult>(StorageEngine.Invoke(input));\n                if (del.Status == false)\n                {\n                    Anno.Log.Log.Error(del);\n                }\n                input.Clear();\n                input.Add(CONST.Opt, CONST.UpsertBatch);\n                input.Add(CONST.Data, Newtonsoft.Json.JsonConvert.SerializeObject(routings));\n                var rlt = Newtonsoft.Json.JsonConvert.DeserializeObject<AnnoDataResult>(StorageEngine.Invoke(input));\n                if (rlt.Status == false)\n                {\n                    Anno.Log.Log.Error(rlt);\n                }\n            });\n')),Object(i.b)("h3",{id:"6-\u8fd0\u884c\u670d\u52a1\u5bbf\u4e3b\u7a0b\u5e8f"},"6 \u8fd0\u884c\u670d\u52a1\u5bbf\u4e3b\u7a0b\u5e8f"),Object(i.b)("img",{src:Object(c.a)("img/viper_service_start.jpg")}),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u8bf4\u660e")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\xa0","\xa0"," 1.\u770b\u5230\u4e0a\u56fe\u753b\u9762\u8bf4\u660e\u5df2\u7ecf\u8fd0\u884c\u6210\u529f\uff0c\u5f00\u59cb\u5f80\u6ce8\u518c\u4e2d\u5fc3\u6ce8\u518c")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\xa0","\xa0"," 2.\u56e0\u4e3a\u6211\u6ca1\u6709\u542f\u52a8\u6ce8\u518c\u4e2d\u5fc3\uff0c\u6240\u4ee5\u4e3a\u51fa\u73b0\u6ce8\u518c\u5931\u8d25\u7684\u63d0\u793a\u3002")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\xa0","\xa0"," 3.\u6ce8\u518c\u5931\u8d25\u4f1a",Object(i.b)("inlineCode",{parentName:"p"},"\u6bcf\u9694\u4e00\u79d2"),"\u91cd\u8bd5\u4e00\u6b21\uff0c\u91cd\u8bd5",Object(i.b)("inlineCode",{parentName:"p"},"60"),"(",Object(i.b)("sub",null,"\u9ed8\u8ba4",Object(i.b)("inlineCode",{parentName:"p"},"60"),"\u53ef\u4ee5\u81ea\u884c\u4fee\u6539"),")\u4ecd\u5931\u8d25\u5219\u4e0d\u518d\u6ce8\u518c\u3002"))))))}l.isMDXComponent=!0}}]);