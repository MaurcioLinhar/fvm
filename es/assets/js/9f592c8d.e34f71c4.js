(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{100:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),s=function(e){var a=r.a.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},b=function(e){var a=s(e.components);return r.a.createElement(d.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},p=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=s(t),p=n,m=b["".concat(o,".").concat(p)]||b[p]||u[p]||i;return t?r.a.createElement(m,c(c({ref:a},d),{},{components:t})):r.a.createElement(m,c({ref:a},d))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},87:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return s}));var n=t(3),r=t(8),i=(t(0),t(100)),o={id:"configuration",title:"Configuraci\xf3n",sidebar_position:2},c={unversionedId:"getting_started/configuration",id:"getting_started/configuration",isDocsHomePage:!1,title:"Configuraci\xf3n",description:"Configure FVM e IDE para una mejor compatibilidad con diferentes entornos de desarrollo.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/getting_started/configuration.mdx",sourceDirName:"getting_started",slug:"/getting_started/configuration",permalink:"/es/docs/getting_started/configuration",editUrl:"https://github.com/leoafarias/fvm/edit/master/website/i18n/es/docusaurus-plugin-content-docs/current/getting_started/configuration.mdx",version:"current",sidebarPosition:2,frontMatter:{id:"configuration",title:"Configuraci\xf3n",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Instalaci\xf3n",permalink:"/es/docs/getting_started/installation"},next:{title:"Comandos B\xe1sicos",permalink:"/es/docs/guides/basic_commands"}},l=[{value:"Proyecto",id:"proyecto",children:[]},{value:"FVM",id:"fvm",children:[{value:"Directorio de cach\xe9",id:"directorio-de-cach\xe9",children:[]},{value:"Configurar",id:"configurar",children:[]},{value:"Repositorio de Flutter Diferente",id:"repositorio-de-flutter-diferente",children:[]}]},{value:"IDE",id:"ide",children:[{value:"VS Code",id:"vs-code",children:[]},{value:"Android Studio",id:"android-studio",children:[]}]}],d={toc:l};function s(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Configure FVM e IDE para una mejor compatibilidad con diferentes entornos de desarrollo."),Object(i.b)("h2",{id:"proyecto"},"Proyecto"),Object(i.b)("p",null,"FVM crear\xe1 un enlace simb\xf3lico relativo en su proyecto desde ",Object(i.b)("inlineCode",{parentName:"p"},".fvm/flutter_sdk")," al cach\xe9 de la versi\xf3n seleccionada. Agr\xe9galo a tu ",Object(i.b)("inlineCode",{parentName:"p"},".gitignore")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".gitignore"',title:'".gitignore"'},".fvm/flutter_sdk\n")),Object(i.b)("h2",{id:"fvm"},"FVM"),Object(i.b)("h3",{id:"directorio-de-cach\xe9"},"Directorio de cach\xe9"),Object(i.b)("p",null,"Puede configurar el directorio de cach\xe9 ",Object(i.b)("strong",{parentName:"p"},"fvm")," configurando la variable de entorno ",Object(i.b)("inlineCode",{parentName:"p"},"FVM_HOME"),". Si no se establece nada, se utilizar\xe1 la ruta ",Object(i.b)("strong",{parentName:"p"},"fvm")," predeterminada. Tambi\xe9n puede cambiar el directorio configurando ",Object(i.b)("inlineCode",{parentName:"p"},"--cache-path")," en la configuraci\xf3n. Vea abajo"),Object(i.b)("h3",{id:"configurar"},"Configurar"),Object(i.b)("p",null,"Hay algunas configuraciones que puede cambiar en FVM. ",Object(i.b)("strong",{parentName:"p"},"Todas las configuraciones establecidas en CLI son compatibles con Sidekick (GUI)"),"."),Object(i.b)("h3",{id:"repositorio-de-flutter-diferente"},"Repositorio de Flutter Diferente"),Object(i.b)("p",null,"Puedes usar un repositorio de Flutter diferente, una fork o como un cach\xe9 local, configurando la variable de entorno ",Object(i.b)("inlineCode",{parentName:"p"},"FVM_GIT_CACHE"),"."),Object(i.b)("h4",{id:"configuraci\xf3n-de-lista"},"Configuraci\xf3n de lista"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"> fvm config\n")),Object(i.b)("h4",{id:"establecer-la-ruta-de-cach\xe9"},"Establecer la ruta de cach\xe9"),Object(i.b)("p",null,"Ubicaci\xf3n donde se almacenar\xe1n las versiones del SDK de Flutter. Si no se establece nada, se utilizar\xe1 el valor predeterminado."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"> fvm config --cache-path <CACHE_PATH>\n")),Object(i.b)("h2",{id:"ide"},"IDE"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Informaci\xf3n")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Es posible que deba reiniciar su IDE y el depurador de Flutter para asegurarse de que use la \xfaltima versi\xf3n de las configuraciones en algunas situaciones."))),Object(i.b)("h3",{id:"vs-code"},"VS Code"),Object(i.b)("h4",{id:"opci\xf3n-1-cambio-autom\xe1tico-recomendado"},"Opci\xf3n 1: Cambio Autom\xe1tico (recomendado)"),Object(i.b)("p",null,"Puedes agregar el enlace simb\xf3lico de la versi\xf3n para un cambio din\xe1mico. VS Code siempre usar\xe1 la versi\xf3n seleccionada dentro del proyecto para todas las herramientas IDE. Adem\xe1s, elimine el SDK de flutter de la b\xfasqueda para facilitar las cosas."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:'title=".vscode/settings.json"',title:'".vscode/settings.json"'},'{\n  "dart.flutterSdkPath": ".fvm/flutter_sdk",\n  //Eliminar archivos .fvm de b\xfasqueda\n  "search.exclude": {\n    "**/.fvm": true\n  },\n  // Eliminar de la observaci\xf3n de archivos\n  "files.watcherExclude": {\n    "**/.fvm": true\n  }\n}\n')),Object(i.b)("h4",{id:"opci\xf3n-2---ver-todos-los-sdks-cambio-manual"},"Opci\xf3n 2 - Ver todos los SDKs (Cambio manual)"),Object(i.b)("p",null,"VSCode tiene la capacidad de cambiar entre todos los SDK de Flutter almacenados en cach\xe9 usando ",Object(i.b)("inlineCode",{parentName:"p"},"Flutter: Change SDK"),"."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Informaci\xf3n")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Use el comando ",Object(i.b)("inlineCode",{parentName:"p"},"fvm list")," para mostrar la ruta de cach\xe9 a las versiones."))),Object(i.b)("h4",{id:"listar-todas-las-versiones-instaladas-por-fvm"},"Listar todas las versiones instaladas por FVM"),Object(i.b)("p",null,"Puedes ver todas las versiones instaladas por FVM en VS Code simplemente proporcionando la ruta al directorio de ",Object(i.b)("inlineCode",{parentName:"p"},"versions"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "dart.flutterSdkPaths": ["/Users/usr/fvm/versions"]\n}\n')),Object(i.b)("p",null,"Como alternativa, puede especificar solo las versiones seleccionadas. El siguiente fragmento har\xe1 que VS Code muestre solo versiones ",Object(i.b)("inlineCode",{parentName:"p"},"stable")," y ",Object(i.b)("inlineCode",{parentName:"p"},"dev")," de Flutter."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "dart.flutterSdkPaths": [\n    "/Users/usr/fvm/versions/stable",\n    "/Users/usr/fvm/versions/dev"\n  ]\n}\n')),Object(i.b)("p",null,"Para cambiar la versi\xf3n actual de Flutter, abra un proyecto y seleccione ",Object(i.b)("inlineCode",{parentName:"p"},"Flutter: Change SDK")," en la paleta de comandos. Deber\xedas de ver todas las versiones como se muestra en la siguiente captura de pantalla."),Object(i.b)("h3",{id:"android-studio"},"Android Studio"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Ve a ",Object(i.b)("inlineCode",{parentName:"li"},"Languages & Frameworks > Flutter")," o busque Flutter y cambie la ruta del SDK de Flutter."),Object(i.b)("li",{parentName:"ol"},"Copie la ruta ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"absoluta"))," del enlace simb\xf3lico fvm en el directorio de su proyecto ra\xedz. Ejemplo ",Object(i.b)("inlineCode",{parentName:"li"},"/absolute-project-path/.fvm/flutter_sdk")),Object(i.b)("li",{parentName:"ol"},"Aplicar los cambios."),Object(i.b)("li",{parentName:"ol"},"Reinicie Android Studio para ver la nueva configuraci\xf3n aplicada.")),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANTE")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Para que Android Studio detecte el cambio din\xe1mico de los SDK, el SDK instalado debe haber finalizado la configuraci\xf3n."),Object(i.b)("p",{parentName:"div"},"El uso de ",Object(i.b)("inlineCode",{parentName:"p"},"fvm install <VERSION>")," garantizar\xe1 la configuraci\xf3n durante la instalaci\xf3n."),Object(i.b)("p",{parentName:"div"},"Si ha instalado a trav\xe9s de otro comando y la configuraci\xf3n no se complet\xf3. Puedes terminar simplemente ejecutando ",Object(i.b)("inlineCode",{parentName:"p"},"fvm flutter --version")),Object(i.b)("p",{parentName:"div"},"Android Studio puede tardar unos segundos en detectar el cambio de SDK din\xe1mico."))),Object(i.b)("p",null,"Si deseas ignorar el directorio ra\xedz del SDK de Flutter dentro de Android Studio, puede agregar lo siguiente a ",Object(i.b)("inlineCode",{parentName:"p"},".idea/workspace.xml"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<component name="VcsManagerConfiguration">\n  <ignored-roots>\n    <path value="$PROJECT_DIR$/.fvm/flutter_sdk" />\n  </ignored-roots>\n...\n')))}s.isMDXComponent=!0}}]);