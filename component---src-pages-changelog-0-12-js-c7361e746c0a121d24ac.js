(self.webpackChunkpurify_website=self.webpackChunkpurify_website||[]).push([[767],{5720:function(e,t,n){"use strict";n.r(t);var a=n(7294),l=n(9),r=n(8902),o=n(5656),i=n(5681),s=l.ZP.h1.withConfig({displayName:"sc-012__Title",componentId:"iq4yo1-0"})(["margin-bottom:0;"]),u=l.ZP.div.withConfig({displayName:"sc-012__Subtitle",componentId:"iq4yo1-1"})(["padding-bottom:30px;"]),c=l.ZP.h2.withConfig({displayName:"sc-012__Topic",componentId:"iq4yo1-2"})(["font-weight:normal;"]),h=l.ZP.div.withConfig({displayName:"sc-012__TopicDescription",componentId:"iq4yo1-3"})(["padding-right:15%;@media only screen and (max-width:768px){padding-right:0;}"]);t.default=function(e){return a.createElement(o.Z,{location:e.location},a.createElement(s,null,"Purify v0.12"),a.createElement(u,null,"January 30, 2019"),a.createElement("div",null,"Not sure what purify is? Check out the"," ",a.createElement(r.ZP,{to:"/getting-started"},"Getting Started")," page. Not sure if you want to introduce purify as a dependency to your project? Check out the new ",a.createElement(r.ZP,{to:"/faq"},"FAQ")," page!",a.createElement("br",null),a.createElement("br",null),"Before starting, I want to thank everyone that contributed to the project with bug reports, fixes and suggestions ⭐️."),a.createElement(c,null,"MaybeAsync and EitherAsync"),a.createElement(h,null,"Dealing with asynchronous values was a huge pain point and I've spent a lot of time prototyping different solutions.",a.createElement("br",null),"The general approach to error handling in imperative languages is to throw exceptions, which didn't fit into the functional nature of purify.",a.createElement("br",null),"At the same time, TypeScript's type system made expressing functional patterns cumbersome, which didn't leave me with a lot of options.",a.createElement("br",null),"Despite those challenges I believe the final APIs for"," ",a.createElement(r.ZP,{to:"/adts/MaybeAsync"},"MaybeAsync")," and"," ",a.createElement(r.ZP,{to:"/adts/EitherAsync"},"EitherAsync")," turned out fairly elegant and easy to use, please let me know your opinion!"),a.createElement(c,null,"Complete rewrite"),a.createElement(h,null,'Put simply, the library had too many issues mainly because of the "single-class" implementation of the ADTs, which have since been rewritten into plain functions and objects.',a.createElement("br",null),"This removed a whole class of errors (pun not intended), like a strange bug that prevented functions returning a Nothing to be annotated with the proper Maybe type (so strange I've filed"," ",a.createElement("a",{href:"https://github.com/Microsoft/TypeScript/issues/29354"},"an issue")," ",")",a.createElement("br",null),"This change is completely under the hood, the public API remains the same."),a.createElement(c,null,"Proper fantasy-land support"),a.createElement(h,null,"All data types provided by purify now include a proper implementation of the `constructor` property which points to the type representative.",a.createElement("br",null),"As a bonus, there is also a Foldable instance for Tuple now!"),a.createElement(c,null,"Typeclasses - scrapped.",a.createElement("br",null),"Id and Validation - removed."),a.createElement(h,null,"Old versions of purify exported interfaces which were designed to serve the purpose of typeclasses.",a.createElement("br",null),"There were numerous issues though - typeclasses like Monad could be easily represented as object methods, but functions like Applicative's `pure` (or `of` in fantasy-land) are meant to go on the type representative, not on the object. A Monad instance requires an Applicative instance which was unrepresentable in TypeScript's type system without resorting to techniques that don't fit into the \"interfaces with generics\" model. There's also the issues with typeclasses like Ord, Setoid and Semigroup which don't make much sense in JavaScript where you can compare all values.",a.createElement("br",null),a.createElement("br",null),"All of these things led to the removal of typeclasses from the library. With that went the Id datatype which serves no need anymore.",a.createElement("br",null),"Since typeclasses were also the justification for having folders in the library exports, now the folder structure is flat.",a.createElement("br",null),"This means that imports like"," ",a.createElement(i.HL,null,"import { Maybe } from 'purify-ts/adts/Maybe")," are now just"," ",a.createElement(i.HL,null,"import { Maybe } from 'purify-ts/Maybe'"),".",a.createElement("br",null),"The Validation module was removed for a completely different reason though - the API was just too limiting and ad-hoc, hopefully it will return soon in a better, more generic form."),a.createElement(c,null,"New Maybe methods"),a.createElement(h,null,"The original focus for this release was better JS interop and before the implementation of MaybeAsync and EitherAsync took most of my time working on this project, two new methods were added to the Maybe data type.",a.createElement("br",null),a.createElement("ul",null,a.createElement("li",null,a.createElement(i.HL,null,"Maybe#chainNullable")," - The same as Maybe#chain but for functions that return a nullable value instead of Maybe."),a.createElement("li",null,a.createElement(i.HL,null,"Maybe#extract")," - Now returns an undefined instead of null as undefined is used more often to reprent missing values."),a.createElement("li",null,a.createElement(i.HL,null,"Maybe#extractNullable")," - The new name of Maybe#extract from previous versions of purify"))),a.createElement(c,null,"Other changes"),a.createElement(h,null,a.createElement("ul",null,a.createElement("li",null,'There is now a "Guides" section for each data type which will hopefully include a lot of useful information in the near future. Stay tuned.'),a.createElement("li",null,"Docs are now part of the npm package, which means you should be getting more information in your editor during autocomplete."),a.createElement("li",null,"Fixed bug where ",a.createElement(i.HL,null,"Just(null)")," would be treated as"," ",a.createElement(i.HL,null,"Nothing"),"."))))}}}]);
//# sourceMappingURL=component---src-pages-changelog-0-12-js-c7361e746c0a121d24ac.js.map