"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[183],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(m,s(s({ref:t},u),{},{components:n})):o.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7973:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),s=["components"],i={sidebar_position:4,title:"Credentials Cache",hide_title:!0},c=void 0,l={unversionedId:"credentials-cache",id:"credentials-cache",title:"Credentials Cache",description:"Credentials Cache",source:"@site/docs/credentials-cache.md",sourceDirName:".",slug:"/credentials-cache",permalink:"/gsudo/docs/credentials-cache",editUrl:"https://github.com/gerardog/gsudo/blob/docs/docs/docs/credentials-cache.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Credentials Cache",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Usage from Bash for Windows",permalink:"/gsudo/docs/usage/bash-for-windows"},next:{title:"Security Considerations",permalink:"/gsudo/docs/security"}},u={},p=[{value:"Credentials Cache",id:"credentials-cache",level:2},{value:"Cache Modes",id:"cache-modes",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"credentials-cache"},"Credentials Cache"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Credentials Cache")," allows to elevate several times from a parent process with only one UAC pop-up.  "),(0,r.kt)("p",null,"An active credentials cache session is just an elevated instance of gsudo that stays running and allows the invoker process to elevate again. No windows service or setup involved."),(0,r.kt)("p",null,"It is convenient, but it's safe only if you are not already hosting a malicious process: No matter how secure gsudo itself is, a malicious process could ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/DLL_injection#Approaches_on_Microsoft_Windows"},"trick")," the allowed process (Cmd/Powershell) and force a running ",(0,r.kt)("inlineCode",{parentName:"p"},"gsudo")," cache instance to elevate silently."),(0,r.kt)("h2",{id:"cache-modes"},"Cache Modes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Explicit: (default)")," Every elevation shows a UAC popup, unless a cache session is started explicitly with ",(0,r.kt)("inlineCode",{parentName:"li"},"gsudo cache on"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"gsudo command1 # 1st UAC Popup shown\ngsudo command2 # 2nd UAC Popup shown\ngsudo cache on # 3rd UAC Popup shown, cache session started\ngsudo command3 # Elevation without popup \ngsudo command4 # Elevation without popup \ngsudo cache off # (or gsudo -k) Ends the cache session. Next elevation will show a UAC popup.\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Auto:")," Simil-unix-sudo. The first elevation shows a UAC Popup and starts a cache session automatically.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"gsudo command1 # 1st UAC Popup shown, cache session started\ngsudo command2 # Elevation without popup\ngsudo command3 # Elevation without popup \ngsudo cache off # (or gsudo -k) Ends the cache session. Next elevation will show a UAC popup.\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Disabled:")," Every elevation request shows a UAC popup. Attempts to start a Cache Session throws error. ")),(0,r.kt)("p",null,"The cache mode can be set with ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"gsudo config CacheMode auto|explicit|disabled"))),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"gsudo cache on|off")," to start/stop a cache session manually (i.e. allow/disallow elevation of the current process with no additional UAC popups)."),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"gsudo -k")," to terminate all cache sessions. (Use this before leaving your computer unattended to someone else.)"),(0,r.kt)("p",null,"The cache session ends automatically when the allowed process ends or if no elevations requests are received for 5 minutes (configurable via ",(0,r.kt)("inlineCode",{parentName:"p"},"gsudo config CacheDuration"),")."))}h.isMDXComponent=!0}}]);