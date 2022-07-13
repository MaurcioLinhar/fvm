(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{100:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,d=p["".concat(a,".").concat(m)]||p[m]||f[m]||o;return r?i.a.createElement(d,c(c({ref:t},s),{},{components:r})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(8),o=(r(0),r(100)),a={id:"tools",title:"Tools",sidebar_position:4},c={unversionedId:"tools",id:"tools",isDocsHomePage:!1,title:"Tools",description:"There are a few tools that make it easier to implement or use FVM in your workflow. Below is a non-exhaustive list. If there is a tool which is not listed feel free to open a pull-request with it.",source:"@site/docs/tools.md",sourceDirName:".",slug:"/tools",permalink:"/docs/tools",editUrl:"https://github.com/leoafarias/fvm/edit/master/website/docs/tools.md",version:"current",sidebarPosition:4,frontMatter:{id:"tools",title:"Tools",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Release In Multiple Channels",permalink:"/docs/advanced/release_multiple_channels"}},l=[{value:"Desktop Apps",id:"desktop-apps",children:[{value:"Sidekick",id:"sidekick",children:[]}]},{value:"Github Actions",id:"github-actions",children:[{value:"fvm-config-action",id:"fvm-config-action",children:[]}]},{value:"Docker Images",id:"docker-images",children:[{value:"Official Images",id:"official-images",children:[]},{value:"daniellampl/flutter-fvm",id:"daniellamplflutter-fvm",children:[]}]}],s={toc:l};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are a few tools that make it easier to implement or use FVM in your workflow. Below is a non-exhaustive list. If there is a tool which is not listed feel free to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/leoafarias/fvm/pulls"},"open a pull-request")," with it."),Object(o.b)("h2",{id:"desktop-apps"},"Desktop Apps"),Object(o.b)("h3",{id:"sidekick"},Object(o.b)("a",{parentName:"h3",href:"https://github.com/leoafarias/sidekick"},"Sidekick")),Object(o.b)("p",null,"Sidekick is an app that provides a simple desktop interface to tools that enhance Flutter development experience to make it even more delightful."),Object(o.b)("h2",{id:"github-actions"},"Github Actions"),Object(o.b)("h3",{id:"fvm-config-action"},Object(o.b)("a",{parentName:"h3",href:"https://github.com/kuhnroyal/flutter-fvm-config-action"},"fvm-config-action")),Object(o.b)("p",null,"An action that parses an FVM config file into environment variables which can then be used to configure the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/subosito/flutter-action"},"https://github.com/subosito/flutter-action"),"."),Object(o.b)("h2",{id:"docker-images"},"Docker Images"),Object(o.b)("h3",{id:"official-images"},Object(o.b)("a",{parentName:"h3",href:"https://github.com/leoafarias/fvm/tree/main/.docker"},"Official Images")),Object(o.b)("p",null,"We have some official Docker images which can be a starting point for customization."),Object(o.b)("h3",{id:"daniellamplflutter-fvm"},Object(o.b)("a",{parentName:"h3",href:"https://hub.docker.com/r/daniellampl/flutter-fvm"},"daniellampl/flutter-fvm")),Object(o.b)("p",null,"Allows you to build your mobile #flutter applications using fvm (Flutter Version Management) inside a Docker container \ud83d\udc33"))}u.isMDXComponent=!0}}]);