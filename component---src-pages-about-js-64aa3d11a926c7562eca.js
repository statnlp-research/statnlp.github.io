(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{235:function(e,t,a){"use strict";a.r(t);a(16),a(134),a(7),a(8),a(3),a(23);var n=a(0),o=a.n(n),r=a(245),i=a(270),c=a(320),l=a(271),s=a(251),d=a(249),p=a(269),u={alibaba:{padding:"45px",marginTop:"-50px"},dso:{justifyContent:"center",marginTop:"-85px"},mindef:{justifyContent:"center",marginTop:"-50px"},moe:{padding:"55px",marginTop:"-90px"},nrf:{padding:"25px",marginTop:"-30px"},nsfc:{padding:"75px",marginTop:"-100px"}};t.default=function(){return o.a.createElement("div",{style:{margin:"5rem auto",maxWidth:1e3}},o.a.createElement(r.a,null),o.a.createElement("h1",null,"Our Research Philosophy"),o.a.createElement(i.a,{style:{padding:"25px"}},"Advancing the state of Natural Language Processing by focusing on fundamental research."),o.a.createElement("h1",null,"Our Partners"),o.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},Object.keys(p).map(function(e,t){return o.a.createElement(i.a,{key:e,style:{width:310,height:220,margin:"10px"}},o.a.createElement(c.a,{action:o.a.createElement(l.a,{"aria-label":e,size:"small",style:{color:"#232F34",background:"#ffff",fontSize:"14px"},href:p[e].link,target:"_blank",rel:"noopener"},o.a.createElement(s.a,{icon:d.c}))}),o.a.createElement("img",{alt:e,src:a(273)("./"+e+".webp"),style:u[e]}))})))}},242:function(e,t,a){var n;e.exports=(n=a(244))&&n.default||n},244:function(e,t,a){"use strict";a.r(t);a(40);var n=a(0),o=a.n(n),r=a(125);t.default=function(e){var t=e.location,a=e.pageResources;return a?o.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},245:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(94),i=a.n(r);a(242),a(17).default.enqueue,o.a.createContext({});var c=a(315),l={color:"#344955",background:"#f5f5f5",textDecoration:"none"},s={color:"#232F34",fontWeight:"bold"},d=function(e){return o.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},o.a.createElement(i.a,{to:e.to,style:l,activeStyle:s},e.children))};t.a=function(){return o.a.createElement(c.a,{color:"default",style:{height:64}},o.a.createElement("div",{style:{margin:"1rem"}},o.a.createElement(i.a,{to:"/",style:{textShadow:"none",backgroundImage:"none"}},o.a.createElement("h3",{style:{display:"inline"}},"StatNLP")),o.a.createElement("ul",{style:{listStyle:"none",float:"right"}},o.a.createElement(d,{to:"/about/"},"About"),o.a.createElement(d,{to:"/people/"},"People"),o.a.createElement(d,{to:"/publications/"},"Publications"))))}},269:function(e){e.exports={alibaba:{link:"https://www.alibabagroup.com/en/global/home"},dso:{link:"https://www.dso.org.sg/"},mindef:{link:"https://www.mindef.gov.sg/web/portal/mindef/home"},moe:{link:"https://www.moe.gov.sg/"},nrf:{link:"https://www.nrf.gov.sg/"},nsfc:{link:"http://www.nsfc.gov.cn/"}}},271:function(e,t,a){"use strict";a(172);var n=a(1),o=a(18),r=a(0),i=a.n(r),c=(a(27),a(95)),l=a(243),s=a(248),d=a(318),p=a(246),u=i.a.forwardRef(function(e,t){var a=e.edge,r=void 0!==a&&a,l=e.children,s=e.classes,u=e.className,b=e.color,f=void 0===b?"default":b,m=e.disabled,g=void 0!==m&&m,h=e.disableFocusRipple,w=void 0!==h&&h,y=e.size,v=void 0===y?"medium":y,x=Object(o.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return i.a.createElement(d.a,Object(n.a)({className:Object(c.a)(s.root,u,"default"!==f&&s["color".concat(Object(p.a)(f))],g&&s.disabled,{small:s["size".concat(Object(p.a)(v))]}[v],{start:s.edgeStart,end:s.edgeEnd}[r]),centerRipple:!0,focusRipple:!w,disabled:g,ref:t},x),i.a.createElement("span",{className:s.label},l))});t.a=Object(l.a)(function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(s.c)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}},{name:"MuiIconButton"})(u)},273:function(e,t,a){var n={"./alibaba.webp":274,"./dso.webp":275,"./mindef.webp":276,"./moe.webp":277,"./nrf.webp":278,"./nsfc.webp":279};function o(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=273},274:function(e,t,a){e.exports=a.p+"static/alibaba-a96be54ccb1594ecfdd8dbf598e0e712.webp"},275:function(e,t,a){e.exports=a.p+"static/dso-cd95039b5b96e78b7ca8b0f738eeb637.webp"},276:function(e,t,a){e.exports=a.p+"static/mindef-3ce5fd229cea883628c1c1892125938f.webp"},277:function(e,t,a){e.exports=a.p+"static/moe-8415dcabe7fdb4b85408687955f1be3d.webp"},278:function(e,t,a){e.exports=a.p+"static/nrf-dd5bb3d78a812c904dcd3be087ff2a43.webp"},279:function(e,t,a){e.exports=a.p+"static/nsfc-53722032aa4cf765f77609aa05be546b.webp"}}]);
//# sourceMappingURL=component---src-pages-about-js-64aa3d11a926c7562eca.js.map