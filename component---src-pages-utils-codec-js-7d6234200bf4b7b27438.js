(self.webpackChunkpurify_website=self.webpackChunkpurify_website||[]).push([[856],{1180:function(e,t,n){"use strict";var i=n(7294),o=n(9),a=n(5681),l=o.ZP.div.withConfig({displayName:"DataTypeMethod__Container",componentId:"sc-1ku8je9-0"})(["padding:15px 0px;border-bottom:1px solid #b8d1e2;border-style:dashed;border-left:0;border-top:0;border-right:0;"]),r=o.ZP.a.withConfig({displayName:"DataTypeMethod__MethodName",componentId:"sc-1ku8je9-1"})(["font-size:19px;color:#3b74d7;text-decoration:none;&:hover{text-decoration:underline;}@media only screen and (max-width:768px){display:block;text-align:center;padding-bottom:5px;}"]),d=o.ZP.span.withConfig({displayName:"DataTypeMethod__MethodSignature",componentId:"sc-1ku8je9-2"})(["display:inline-block;font-family:Consolas,Menlo,monospace;background-color:#e7edf1;border-radius:4px;font-size:0.8rem;margin-right:10px;margin-bottom:10px;&:before{content:",";background-color:",";color:white;border-bottom-left-radius:4px;border-top-left-radius:4px;padding:3px 5px;display:inline-block;min-width:13px;text-align:center;letter-spacing:",";}@media only screen and (max-width:768px){position:relative;text-align:center;width:100%;margin-bottom:0;padding:5px;border-top-right-radius:0;border-bottom-right-radius:0;border-top:1px solid #dfe4e6;font-size:13px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;&:before{position:absolute;left:0;padding:5px 5px;margin-top:-5px;}}"],(function(e){return e.ml?"'λ'":"'TS'"}),(function(e){return e.ml?"#9756f3":"#3b74d7"}),(function(e){return e.ts?"-1px":"0"})),p=o.ZP.span.withConfig({displayName:"DataTypeMethod__MethodSignatureText",componentId:"sc-1ku8je9-3"})(["padding:0 6px;"]),m=o.ZP.div.withConfig({displayName:"DataTypeMethod__MethodExample",componentId:"sc-1ku8je9-4"})(["display:flex;background-color:#f0f4ff;border-left:4px solid #8acefb;padding:5px;margin:5px 0;overflow-x:scroll;max-width:calc(95vw - 200px);@media only screen and (max-width:768px){white-space:nowrap;text-overflow:ellipsis;max-width:100vw;}"]),c=o.ZP.div.withConfig({displayName:"DataTypeMethod__MethodExampleColumn",componentId:"sc-1ku8je9-5"})(["display:flex;flex-direction:column;pre{border-radius:2px;min-height:20px;display:flex !important;justify-content:center;flex-direction:column;margin-bottom:5px;margin-top:0;background:#f1f5ff !important;padding:0.3em 0.4em !important;&:last-child{margin-bottom:0;}}"]),s=o.ZP.div.withConfig({displayName:"DataTypeMethod__MethodDescription",componentId:"sc-1ku8je9-6"})(["width:70%;@media only screen and (max-width:768px){width:100%;}@media only screen and (max-width:768px){padding:10px 0;}"]);t.Z=function(e,t){return i.createElement(l,{key:t.name},i.createElement(r,{id:e+"-"+t.name,href:"#"+e+"-"+t.name},t.name),i.createElement("div",null,t.signatureML&&i.createElement(d,{ml:!0},i.createElement(p,null,t.signatureML)),t.signatureTS&&i.createElement(d,{ts:!0},i.createElement(p,null,t.signatureTS)),i.createElement(s,null,t.description),t.examples.length>0&&i.createElement(m,null,i.createElement(c,null,t.examples.map((function(e){return i.createElement(a.y,{key:e.input},e.input)}))),i.createElement(c,null,t.examples.map((function(e){return i.createElement(a.y,{key:e.input},"➔")}))),i.createElement(c,null,t.examples.map((function(e){return i.createElement(a.y,{key:e.input},e.output)}))))))}},9709:function(e,t,n){"use strict";var i=n(7294),o=n(9),a=n(1180),l=n(9731),r=n(3904),d=n(5656),p=o.ZP.div.withConfig({displayName:"UtilContent__Container",componentId:"po4cio-0"})([""]),m=o.ZP.h1.withConfig({displayName:"UtilContent__Title",componentId:"po4cio-1"})(["font-weight:inherit;@media only screen and (max-width:768px){text-align:center;margin-top:0;}"]),c=o.ZP.div.withConfig({displayName:"UtilContent__Description",componentId:"po4cio-2"})(["padding-right:15%;font-size:1.05em;@media only screen and (max-width:768px){padding-right:0;text-align:center;}"]),s=o.ZP.h2.withConfig({displayName:"UtilContent__TopicHeader",componentId:"po4cio-3"})(["font-weight:inherit;margin-bottom:0;@media only screen and (max-width:768px){text-align:center;}"]),u=o.ZP.div.withConfig({displayName:"UtilContent__ExamplesContainer",componentId:"po4cio-4"})(["pre{margin:0;}"]),x=o.ZP.div.withConfig({displayName:"UtilContent__ExampleHeader",componentId:"po4cio-5"})(["text-align:center;background-color:#f9f4f4;padding:4px;"]),f=o.ZP.div.withConfig({displayName:"UtilContent__Example",componentId:"po4cio-6"})(["max-width:650px;margin:10px 0;border:1px solid #f3eeee;"]);t.Z=function(e){return function(t){return i.createElement(d.Z,{location:t.location},i.createElement(p,null,i.createElement(m,null,e.name),i.createElement(c,null,e.description),i.createElement(u,null,i.createElement(f,null,i.createElement(x,null,"How to import"),i.createElement(l.Z,{language:"javascript",style:r.Z},e.example.import)),e.example.before&&i.createElement(f,null,i.createElement(x,null,"Without ",e.name),i.createElement(l.Z,{language:"javascript",style:r.Z},e.example.before.join("\n"))),e.example.after&&i.createElement(f,null,i.createElement(x,null,"With ",e.name),i.createElement(l.Z,{language:"javascript",style:r.Z},e.example.after.join("\n")))),e.content.map((function(e){return i.createElement(i.Fragment,null,i.createElement(s,null,e.title),e.methods.map((function(t){return(0,a.Z)(e.id,t)})))}))))}}},2708:function(e,t,n){"use strict";n.r(t);var i=n(9709),o=n(4521);t.default=(0,i.Z)(o.Z.utils.find((function(e){return"Codec"===e.name})))}}]);
//# sourceMappingURL=component---src-pages-utils-codec-js-7d6234200bf4b7b27438.js.map