import{A as wt,B as It,Ba as rt,C as ht,Ca as Nt,D as V,Da as vt,Ea as Lt,G as c,Ga as Bt,H as _,Ha as Rt,I as K,J as qt,Ja as At,K as Z,Ka as Ht,L as Dt,M as h,Ma as Wt,N as p,O as F,Oa as Ut,P as z,Pa as $t,Q as d,Qa as Qt,R as a,S as f,T as x,Ta as Gt,U as C,Ua as Jt,V as m,W as Vt,Wa as Kt,X as Y,Y as X,a as xt,aa as ft,ba as g,c as Et,ca as tt,d as yt,da as w,e as dt,f as ct,fa as A,g as kt,ga as H,h as $,ha as W,ia as Ft,j as ut,ja as et,k as Pt,l as k,m as P,ma as gt,n as q,na as zt,o as St,oa as it,p as M,pa as nt,q as O,r as Q,ra as j,s as G,sa as _t,t as D,ta as jt,u as Tt,v as mt,w as pt,x as R,xa as I,y as S,z as J,za as ot}from"./chunk-K5ROMSWM.js";import{a as L,b as B,f as lt}from"./chunk-6HHDAJ7S.js";var st=(()=>{let n=class n{constructor(t){this._http=t}addTask(t){return this._http.post("https://kanban-board-1448e-default-rtdb.firebaseio.com/tasks.json",t).pipe(dt(e=>{let i=e.name;return B(L({},t),{id:i})}))}fetchAllTasks(){return this._http.get("https://kanban-board-1448e-default-rtdb.firebaseio.com/tasks.json").pipe(dt(t=>{let e=[];for(let i in t)e.push(B(L({},t[i]),{id:i}));return e}))}updateTask(t,e){return this._http.put("https://kanban-board-1448e-default-rtdb.firebaseio.com/tasks/"+t+".json",e)}getCertienTask(t){return this._http.get("https://kanban-board-1448e-default-rtdb.firebaseio.com/tasks/"+t+".json")}deleteCetienTask(t){return this._http.delete("https://kanban-board-1448e-default-rtdb.firebaseio.com/tasks/"+t+".json")}};n.\u0275fac=function(e){return new(e||n)(R(jt))},n.\u0275prov=G({token:n,factory:n.\u0275fac,providedIn:"root"});let o=n;return o})();function se(o,n){if(o&1){let s=x();d(0,"div",24)(1,"i",25),C("click",function(){M(s);let e=m(2).$implicit,i=m();return O(i.onEditTask(e.id,e.status))}),a()()}}function ae(o,n){if(o&1){let s=x();d(0,"div",26)(1,"button",27),C("click",function(){M(s);let e=m(2),i=e.$implicit,r=e.index,l=m();return O(l.onDeleteTask(i.id,r))}),g(2," Delete Task "),a()()}}function le(o,n){if(o&1){let s=x();d(0,"div")(1,"div",12),C("dragstart",function(){M(s);let e=m().$implicit,i=m();return O(i.onDragStart(e))}),d(2,"div",13)(3,"h3",14),g(4),a()(),d(5,"div",15),f(6,"p",16),a(),d(7,"div",17)(8,"div",18)(9,"p"),g(10),a()(),d(11,"div",19)(12,"div",20),f(13,"i",21),a(),h(14,se,2,0,"div",22),a()(),h(15,ae,3,0,"div",23),a()()}if(o&2){let s=m().$implicit,t=m();c(),F("background-color",s.color),c(3),tt(s.title),c(2),p("innerHTML",t.getSanitizedHtml(s.description),V),c(4),w("Due Date: ",s.dueDate,""),c(4),p("ngIf",s.userId===t.currentUserId),c(),p("ngIf",s.userId===t.currentUserId)}}function de(o,n){if(o&1&&(d(0,"div"),h(1,le,16,7,"div",11),a()),o&2){let s=n.$implicit;c(),p("ngIf",s.status=="toDo")}}function ce(o,n){if(o&1){let s=x();d(0,"div",24)(1,"i",25),C("click",function(){M(s);let e=m(2).$implicit,i=m();return O(i.onEditTask(e.id,e.status))}),a()()}}function ue(o,n){if(o&1){let s=x();d(0,"div",26)(1,"button",27),C("click",function(){M(s);let e=m(2),i=e.$implicit,r=e.index,l=m();return O(l.onDeleteTask(i.id,r))}),g(2," Delete Task "),a()()}}function me(o,n){if(o&1){let s=x();d(0,"div")(1,"div",12),C("dragstart",function(){M(s);let e=m().$implicit,i=m();return O(i.onDragStart(e))}),d(2,"div",13)(3,"h3",14),g(4),a()(),d(5,"div",15),f(6,"p",16),a(),d(7,"div",17)(8,"div",18)(9,"p"),g(10),a()(),d(11,"div",19)(12,"div",20),f(13,"i",21),a(),h(14,ce,2,0,"div",22),a()(),h(15,ue,3,0,"div",23),a()()}if(o&2){let s=m().$implicit,t=m();c(),F("background-color",s.color),c(3),tt(s.title),c(2),p("innerHTML",t.getSanitizedHtml(s.description),V),c(4),w("Due Date: ",s.dueDate,""),c(4),p("ngIf",s.userId===t.currentUserId),c(),p("ngIf",s.userId===t.currentUserId)}}function pe(o,n){if(o&1&&(d(0,"div"),h(1,me,16,7,"div",11),a()),o&2){let s=n.$implicit;c(),p("ngIf",s.status=="inProgress")}}function he(o,n){if(o&1){let s=x();d(0,"div",24)(1,"i",25),C("click",function(){M(s);let e=m(2).$implicit,i=m();return O(i.onEditTask(e.id,e.status))}),a()()}}function fe(o,n){if(o&1){let s=x();d(0,"div",26)(1,"button",27),C("click",function(){M(s);let e=m(2),i=e.$implicit,r=e.index,l=m();return O(l.onDeleteTask(i.id,r))}),g(2," Delete Task "),a()()}}function ge(o,n){if(o&1){let s=x();d(0,"div")(1,"div",12),C("dragstart",function(){M(s);let e=m().$implicit,i=m();return O(i.onDragStart(e))}),d(2,"div",13)(3,"h3",14),g(4),a()(),d(5,"div",15),f(6,"p",16),a(),d(7,"div",17)(8,"div",18)(9,"p"),g(10),a()(),d(11,"div",19)(12,"div",20),f(13,"i",21),a(),h(14,he,2,0,"div",22),a()(),h(15,fe,3,0,"div",23),a()()}if(o&2){let s=m().$implicit,t=m();c(),F("background-color",s.color),c(3),tt(s.title),c(2),p("innerHTML",t.getSanitizedHtml(s.description),V),c(4),w("Due Date: ",s.dueDate,""),c(4),p("ngIf",s.userId===t.currentUserId),c(),p("ngIf",s.userId===t.currentUserId)}}function _e(o,n){if(o&1&&(d(0,"div"),h(1,ge,16,7,"div",11),a()),o&2){let s=n.$implicit;c(),p("ngIf",s.status=="done")}}var Xt=(()=>{let n=class n{constructor(t,e,i,r){this._router=t,this._route=e,this.boardService=i,this._sanitizer=r,this.tasks=[],this.currentUserId=""}ngOnInit(){this.getAllTasks(),this.getCurrentUserId()}getAllTasks(){return this.boardService.fetchAllTasks().subscribe(t=>(this.tasks=t,t))}getCurrentUserId(){return this.currentUserId=JSON.parse(localStorage.getItem("userData")).id}getSanitizedHtml(t){return this._sanitizer.bypassSecurityTrustHtml(t)}onAddTask(t){this._router.navigate(["new",t],{relativeTo:this._route})}onEditTask(t,e){this._router.navigate(["edit",t],{relativeTo:this._route})}onDeleteTask(t,e){this.boardService.deleteCetienTask(t).subscribe()}onDragStart(t){this.currentItem=t}onDrop(t,e){t.preventDefault();let i=this.tasks.find(r=>r.id==this.currentItem.id);if(i!=null){let r=i;i.status=e,this.currentItem=null,r.status=e,this.boardService.updateTask(r.id,r).subscribe()}}onDragOver(t){t.preventDefault()}};n.\u0275fac=function(e){return new(e||n)(_(rt),_(ot),_(st),_(I))},n.\u0275cmp=P({type:n,selectors:[["app-board"]],decls:31,vars:3,consts:[["id","board"],[1,"container"],[1,"columns"],[1,"row","ms-0","me-0"],[1,"col-md-4","p-0"],[1,"column","border-column",3,"dragover","drop"],[1,"column-title"],["type","button",1,"btn",3,"click"],[1,"fa-solid","fa-plus"],[1,"column-content","toDoColumn"],[4,"ngFor","ngForOf"],[4,"ngIf"],["draggable","true",1,"card","mb-3",2,"max-width","18rem",3,"dragstart"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"card-content",3,"innerHTML"],[1,"card-footer"],[1,"date"],[1,"controls"],[1,"task-details"],[1,"fa-regular","fa-share-from-square"],["class","task-edit",4,"ngIf"],["class","deleteBtn",4,"ngIf"],[1,"task-edit"],[1,"fa-regular","fa-pen-to-square",3,"click"],[1,"deleteBtn"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(e,i){e&1&&(d(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),C("dragover",function(l){return i.onDragOver(l)})("drop",function(l){return i.onDrop(l,"toDo")}),d(6,"div",6)(7,"h3"),g(8,"To Do"),a(),d(9,"button",7),C("click",function(){return i.onAddTask("toDo")}),f(10,"i",8),a()(),d(11,"div",9),h(12,de,2,1,"div",10),a()()(),d(13,"div",4)(14,"div",5),C("dragover",function(l){return i.onDragOver(l)})("drop",function(l){return i.onDrop(l,"inProgress")}),d(15,"div",6)(16,"h3"),g(17,"In Progress"),a(),d(18,"button",7),C("click",function(){return i.onAddTask("inProgress")}),f(19,"i",8),a()(),d(20,"div",9),h(21,pe,2,1,"div",10),a()()(),d(22,"div",4)(23,"div",5),C("dragover",function(l){return i.onDragOver(l)})("drop",function(l){return i.onDrop(l,"done")}),d(24,"div",6)(25,"h3"),g(26,"Done"),a(),d(27,"button",7),C("click",function(){return i.onAddTask("done")}),f(28,"i",8),a()(),d(29,"div",9),h(30,_e,2,1,"div",10),a()()()()()()()),e&2&&(c(12),p("ngForOf",i.tasks),c(9),p("ngForOf",i.tasks),c(9),p("ngForOf",i.tasks))},dependencies:[it,nt],styles:["#board[_ngcontent-%COMP%]{margin-block:20px}#board[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]{border-right:1px solid #d3cfd0;border-left:1px solid #d3cfd0;border-bottom:1px solid #d3cfd0}#board[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{border-top:1px solid #d3cfd0;height:100%}#board[_ngcontent-%COMP%]   .column.border-column[_ngcontent-%COMP%]{border-right:1px solid #d3cfd0}#board[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .column-title[_ngcontent-%COMP%]{background-color:#f4f4f4;border-bottom:1px solid #d3cfd0;padding:5px 15px;display:flex;justify-content:space-between;align-items:center}#board[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .column-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:22px;color:#9ba3e1;margin:0}#board[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .column-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fe73b4;font-weight:900;font-size:22px}#board[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin:10px auto}#board[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-transform:capitalize;margin:0;text-align:center}#board[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0!important}#board[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#board[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%], #board[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}#board[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{cursor:pointer}#board[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .task-edit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-inline-start:10px}#board[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}#board[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .deleteBtn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;border-top-left-radius:0;border-top-right-radius:0}"]});let o=n;return o})();var te=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=P({type:n,selectors:[["app-task-details"]],decls:2,vars:0,template:function(e,i){e&1&&(d(0,"p"),g(1,"task-details works!"),a())}});let o=n;return o})();var at={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"],["table"]]},Ct=new Tt("config",{providedIn:"root",factory:()=>({modules:at})});function ve(o,n){o&1&&f(0,"pre",0)}function Ce(o,n){o&1&&f(0,"div",0)}function be(o,n){if(o&1&&h(0,ve,1,0,"pre",0)(1,Ce,1,0),o&2){let s=m();z(0,s.preserve?0:1)}}function Me(o,n){o&1&&f(0,"pre",0)}function Oe(o,n){o&1&&f(0,"div",0)}function xe(o,n){if(o&1&&h(0,Me,1,0,"pre",0)(1,Oe,1,0),o&2){let s=m();z(0,s.preserve?0:1)}}var Ee=[[["","above-quill-editor-toolbar",""]],[["","quill-editor-toolbar",""]],[["","below-quill-editor-toolbar",""]]],ye=["[above-quill-editor-toolbar]","[quill-editor-toolbar]","[below-quill-editor-toolbar]"];function ke(o,n){o&1&&f(0,"pre",0)}function Pe(o,n){o&1&&f(0,"div",0)}var U=(o,n)=>o||n||"html",bt=(()=>{let n=class n{constructor(t,e){this.config=e,this.quill$=kt(()=>lt(this,null,function*(){if(!this.Quill){let i=this.document.addEventListener;this.document.addEventListener=this.document.__zone_symbol__addEventListener||this.document.addEventListener;let r=yield import("./chunk-GDRFYCCW.js");this.document.addEventListener=i,this.Quill=r.default?.default??r.default??r}return this.config.customOptions?.forEach(i=>{let r=this.Quill.import(i.import);r.whitelist=i.whitelist,this.Quill.register(r,!0,this.config.suppressGlobalRegisterWarning)}),yield this.registerCustomModules(this.Quill,this.config.customModules,this.config.suppressGlobalRegisterWarning)})).pipe(Pt({bufferSize:1,refCount:!0})),this.document=t.get(gt),this.config||(this.config={modules:at})}getQuill(){return this.quill$}registerCustomModules(t,e,i){return lt(this,null,function*(){if(Array.isArray(e))for(let{implementation:r,path:l}of e)Et(r)&&(r=yield yt(r)),t.register(l,r,i);return t})}};n.\u0275fac=function(e){return new(e||n)(R(It),R(Ct,8))},n.\u0275prov=G({token:n,factory:n.\u0275fac,providedIn:"root"});let o=n;return o})(),Se=(()=>{let n=class n{constructor(){this.required=!1,this.customToolbarPosition="top",this.styles=null,this.customOptions=[],this.customModules=[],this.preserveWhitespace=!1,this.trimOnValidation=!1,this.compareValues=!1,this.filterNull=!1,this.defaultEmptyValue=null,this.onEditorCreated=new k,this.onEditorChanged=new k,this.onContentChanged=new k,this.onSelectionChanged=new k,this.onFocus=new k,this.onBlur=new k,this.onNativeFocus=new k,this.onNativeBlur=new k,this.disabled=!1,this.preserve=!1,this.toolbarPosition="top",this.subscription=null,this.quillSubscription=null,this.elementRef=S(Q),this.document=S(gt),this.cd=S(qt),this.domSanitizer=S(I),this.platformId=S(mt),this.renderer=S(K),this.zone=S(Z),this.service=S(bt),this.valueGetter=(t,e)=>{let i=e.querySelector(".ql-editor").innerHTML;(i==="<p><br></p>"||i==="<div><br></div>")&&(i=this.defaultEmptyValue);let r=i,l=U(this.format,this.service.config.format);if(l==="text")r=t.getText();else if(l==="object")r=t.getContents();else if(l==="json")try{r=JSON.stringify(t.getContents())}catch{r=t.getText()}return r},this.valueSetter=(t,e)=>{let i=U(this.format,this.service.config.format);if(i==="html")return([!0,!1].includes(this.sanitize)?this.sanitize:this.service.config.sanitize||!1)&&(e=this.domSanitizer.sanitize(ht.HTML,e)),t.clipboard.convert({html:e});if(i==="json")try{return JSON.parse(e)}catch{return[{insert:e}]}return e},this.selectionChangeHandler=(t,e,i)=>{let r=this.trackChanges||this.service.config.trackChanges,l=!t&&!!this.onModelTouched&&(i==="user"||r&&r==="all");!this.onBlur.observed&&!this.onFocus.observed&&!this.onSelectionChanged.observed&&!l||this.zone.run(()=>{t===null?this.onBlur.emit({editor:this.quillEditor,source:i}):e===null&&this.onFocus.emit({editor:this.quillEditor,source:i}),this.onSelectionChanged.emit({editor:this.quillEditor,oldRange:e,range:t,source:i}),l&&this.onModelTouched(),this.cd.markForCheck()})},this.textChangeHandler=(t,e,i)=>{let r=this.quillEditor.getText(),l=this.quillEditor.getContents(),u=this.editorElem.querySelector(".ql-editor").innerHTML;(u==="<p><br></p>"||u==="<div><br></div>")&&(u=this.defaultEmptyValue);let v=this.trackChanges||this.service.config.trackChanges,E=(i==="user"||v&&v==="all")&&!!this.onModelChange;!this.onContentChanged.observed&&!E||this.zone.run(()=>{E&&this.onModelChange(this.valueGetter(this.quillEditor,this.editorElem)),this.onContentChanged.emit({content:l,delta:t,editor:this.quillEditor,html:u,oldDelta:e,source:i,text:r}),this.cd.markForCheck()})},this.editorChangeHandler=(t,e,i,r)=>{if(this.onEditorChanged.observed)if(t==="text-change"){let l=this.quillEditor.getText(),u=this.quillEditor.getContents(),v=this.editorElem.querySelector(".ql-editor").innerHTML;(v==="<p><br></p>"||v==="<div><br></div>")&&(v=this.defaultEmptyValue),this.zone.run(()=>{this.onEditorChanged.emit({content:u,delta:e,editor:this.quillEditor,event:t,html:v,oldDelta:i,source:r,text:l}),this.cd.markForCheck()})}else this.zone.run(()=>{this.onEditorChanged.emit({editor:this.quillEditor,event:t,oldRange:i,range:e,source:r}),this.cd.markForCheck()})}}static normalizeClassNames(t){return t.trim().split(" ").reduce((i,r)=>{let l=r.trim();return l&&i.push(l),i},[])}ngOnInit(){this.preserve=this.preserveWhitespace,this.toolbarPosition=this.customToolbarPosition}ngAfterViewInit(){_t(this.platformId)||(this.quillSubscription=this.service.getQuill().pipe(ct(t=>{let e=[this.service.registerCustomModules(t,this.customModules)],i=this.beforeRender??this.service.config.beforeRender;return i&&e.push(i()),Promise.all(e).then(()=>t)})).subscribe(t=>{this.editorElem=this.elementRef.nativeElement.querySelector("[quill-editor-element]");let e=this.elementRef.nativeElement.querySelector("[quill-editor-toolbar]"),i=Object.assign({},this.modules||this.service.config.modules);e?i.toolbar=e:i.toolbar===void 0&&(i.toolbar=at.toolbar);let r=this.placeholder!==void 0?this.placeholder:this.service.config.placeholder;r===void 0&&(r="Insert text here ..."),this.styles&&Object.keys(this.styles).forEach(b=>{this.renderer.setStyle(this.editorElem,b,this.styles[b])}),this.classes&&this.addClasses(this.classes),this.customOptions.forEach(b=>{let y=t.import(b.import);y.whitelist=b.whitelist,t.register(y,!0)});let l=this.bounds&&this.bounds==="self"?this.editorElem:this.bounds;l||(l=this.service.config.bounds?this.service.config.bounds:this.document.body);let u=this.debug;!u&&u!==!1&&this.service.config.debug&&(u=this.service.config.debug);let v=this.readOnly;!v&&this.readOnly!==!1&&(v=this.service.config.readOnly!==void 0?this.service.config.readOnly:!1);let E=this.defaultEmptyValue;this.service.config.hasOwnProperty("defaultEmptyValue")&&(E=this.service.config.defaultEmptyValue);let T=this.formats;if(!T&&T===void 0&&(T=this.service.config.formats?[...this.service.config.formats]:this.service.config.formats===null?null:void 0),this.zone.runOutsideAngular(()=>{if(this.quillEditor=new t(this.editorElem,{bounds:l,debug:u,formats:T,modules:i,placeholder:r,readOnly:v,defaultEmptyValue:E,registry:this.registry,theme:this.theme||(this.service.config.theme?this.service.config.theme:"snow")}),this.onNativeBlur.observed&&(this.quillEditor.scroll.domNode.addEventListener("blur",()=>this.onNativeBlur.next({editor:this.quillEditor,source:"dom"})),this.quillEditor.getModule("toolbar").container?.addEventListener("mousedown",y=>y.preventDefault())),this.onNativeFocus.observed&&this.quillEditor.scroll.domNode.addEventListener("focus",()=>this.onNativeFocus.next({editor:this.quillEditor,source:"dom"})),this.linkPlaceholder){let y=this.quillEditor?.theme?.tooltip?.root?.querySelector("input[data-link]");y?.dataset&&(y.dataset.link=this.linkPlaceholder)}}),this.content){if(U(this.format,this.service.config.format)==="text")this.quillEditor.setText(this.content,"silent");else{let ne=this.valueSetter(this.quillEditor,this.content);this.quillEditor.setContents(ne,"silent")}this.quillEditor.getModule("history").clear()}this.setDisabledState(),this.addQuillEventListeners(),!(!this.onEditorCreated.observed&&!this.onValidatorChanged)&&requestAnimationFrame(()=>{this.onValidatorChanged&&this.onValidatorChanged(),this.onEditorCreated.emit(this.quillEditor),this.onEditorCreated.complete()})}))}ngOnDestroy(){this.dispose(),this.quillSubscription?.unsubscribe(),this.quillSubscription=null}ngOnChanges(t){if(this.quillEditor){if(t.readOnly&&this.quillEditor.enable(!t.readOnly.currentValue),t.placeholder&&(this.quillEditor.root.dataset.placeholder=t.placeholder.currentValue),t.defaultEmptyValue&&(this.quillEditor.root.dataset.defaultEmptyValue=t.defaultEmptyValue.currentValue),t.styles){let e=t.styles.currentValue,i=t.styles.previousValue;i&&Object.keys(i).forEach(r=>{this.renderer.removeStyle(this.editorElem,r)}),e&&Object.keys(e).forEach(r=>{this.renderer.setStyle(this.editorElem,r,this.styles[r])})}if(t.classes){let e=t.classes.currentValue,i=t.classes.previousValue;i&&this.removeClasses(i),e&&this.addClasses(e)}t.debounceTime&&this.addQuillEventListeners()}}addClasses(t){n.normalizeClassNames(t).forEach(e=>{this.renderer.addClass(this.editorElem,e)})}removeClasses(t){n.normalizeClassNames(t).forEach(e=>{this.renderer.removeClass(this.editorElem,e)})}writeValue(t){if(this.filterNull&&t===null||(this.content=t,!this.quillEditor))return;let e=U(this.format,this.service.config.format),i=this.valueSetter(this.quillEditor,t);if(this.compareValues){let r=this.quillEditor.getContents();if(JSON.stringify(r)===JSON.stringify(i))return}if(t){e==="text"?this.quillEditor.setText(t):this.quillEditor.setContents(i);return}this.quillEditor.setText("")}setDisabledState(t=this.disabled){this.disabled=t,this.quillEditor&&(t?(this.quillEditor.disable(),this.renderer.setAttribute(this.elementRef.nativeElement,"disabled","disabled")):(this.readOnly||this.quillEditor.enable(),this.renderer.removeAttribute(this.elementRef.nativeElement,"disabled")))}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}registerOnValidatorChange(t){this.onValidatorChanged=t}validate(){if(!this.quillEditor)return null;let t={},e=!0,i=this.quillEditor.getText(),r=this.trimOnValidation?i.trim().length:i.length===1&&i.trim().length===0?0:i.length-1,l=this.quillEditor.getContents().ops,u=!!l&&l.length===1&&[`
`,""].includes(l[0].insert?.toString());return this.minLength&&r&&r<this.minLength&&(t.minLengthError={given:r,minLength:this.minLength},e=!1),this.maxLength&&r>this.maxLength&&(t.maxLengthError={given:r,maxLength:this.maxLength},e=!1),this.required&&!r&&u&&(t.requiredError={empty:!0},e=!1),e?null:t}addQuillEventListeners(){this.dispose(),this.zone.runOutsideAngular(()=>{this.subscription=new xt,this.subscription.add($(this.quillEditor,"selection-change").subscribe(([i,r,l])=>{this.selectionChangeHandler(i,r,l)}));let t=$(this.quillEditor,"text-change"),e=$(this.quillEditor,"editor-change");typeof this.debounceTime=="number"&&(t=t.pipe(ut(this.debounceTime)),e=e.pipe(ut(this.debounceTime))),this.subscription.add(t.subscribe(([i,r,l])=>{this.textChangeHandler(i,r,l)})),this.subscription.add(e.subscribe(([i,r,l,u])=>{this.editorChangeHandler(i,r,l,u)}))})}dispose(){this.subscription!==null&&(this.subscription.unsubscribe(),this.subscription=null)}};n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=St({type:n,inputs:{format:"format",theme:"theme",modules:"modules",debug:"debug",readOnly:"readOnly",placeholder:"placeholder",maxLength:"maxLength",minLength:"minLength",required:"required",formats:"formats",customToolbarPosition:"customToolbarPosition",sanitize:"sanitize",beforeRender:"beforeRender",styles:"styles",registry:"registry",bounds:"bounds",customOptions:"customOptions",customModules:"customModules",trackChanges:"trackChanges",preserveWhitespace:"preserveWhitespace",classes:"classes",trimOnValidation:"trimOnValidation",linkPlaceholder:"linkPlaceholder",compareValues:"compareValues",filterNull:"filterNull",debounceTime:"debounceTime",defaultEmptyValue:"defaultEmptyValue",valueGetter:"valueGetter",valueSetter:"valueSetter"},outputs:{onEditorCreated:"onEditorCreated",onEditorChanged:"onEditorChanged",onContentChanged:"onContentChanged",onSelectionChanged:"onSelectionChanged",onFocus:"onFocus",onBlur:"onBlur",onNativeFocus:"onNativeFocus",onNativeBlur:"onNativeBlur"},features:[J]});let o=n;return o})(),Mt=(()=>{let n=class n extends Se{};n.\u0275fac=(()=>{let t;return function(i){return(t||(t=wt(n)))(i||n)}})(),n.\u0275cmp=P({type:n,selectors:[["quill-editor"]],standalone:!0,features:[Ft([{multi:!0,provide:Lt,useExisting:pt(()=>n)},{multi:!0,provide:Rt,useExisting:pt(()=>n)}]),Dt,et],ngContentSelectors:ye,decls:5,vars:2,consts:[["quill-editor-element",""]],template:function(e,i){e&1&&(Vt(Ee),h(0,be,2,1),Y(1),Y(2,1),Y(3,2),h(4,xe,2,1)),e&2&&(z(0,i.toolbarPosition!=="top"?0:-1),c(4),z(4,i.toolbarPosition==="top"?4:-1))},dependencies:[j],styles:["[_nghost-%COMP%]{display:inline-block}"]});let o=n;return o})(),Te=(()=>{let n=class n{constructor(t,e){this.sanitizer=t,this.service=e,this.content="",this.innerHTML="",this.themeClass="ql-snow"}ngOnChanges(t){if(t.theme){let e=t.theme.currentValue||(this.service.config.theme?this.service.config.theme:"snow");this.themeClass=`ql-${e} ngx-quill-view-html`}else if(!this.theme){let e=this.service.config.theme?this.service.config.theme:"snow";this.themeClass=`ql-${e} ngx-quill-view-html`}if(t.content){let e=t.content.currentValue,i=[!0,!1].includes(this.sanitize)?this.sanitize:this.service.config.sanitize||!1;this.innerHTML=i?e:this.sanitizer.bypassSecurityTrustHtml(e)}}};n.\u0275fac=function(e){return new(e||n)(_(I),_(bt))},n.\u0275cmp=P({type:n,selectors:[["quill-view-html"]],inputs:{content:"content",theme:"theme",sanitize:"sanitize"},standalone:!0,features:[J,et],decls:2,vars:2,consts:[[1,"ql-container",3,"ngClass"],[1,"ql-editor",3,"innerHTML"]],template:function(e,i){e&1&&(d(0,"div",0),f(1,"div",1),a()),e&2&&(p("ngClass",i.themeClass),c(),p("innerHTML",i.innerHTML,V))},dependencies:[j,zt],styles:[`.ql-container.ngx-quill-view-html{border:0}
`],encapsulation:2});let o=n;return o})(),we=(()=>{let n=class n{constructor(t,e,i,r,l,u){this.elementRef=t,this.renderer=e,this.zone=i,this.service=r,this.domSanitizer=l,this.platformId=u,this.strict=!0,this.customModules=[],this.customOptions=[],this.preserveWhitespace=!1,this.onEditorCreated=new k,this.preserve=!1,this.quillSubscription=null,this.valueSetter=(v,E)=>{let T=U(this.format,this.service.config.format),b=E;if(T==="text")v.setText(b);else{if(T==="html")([!0,!1].includes(this.sanitize)?this.sanitize:this.service.config.sanitize||!1)&&(E=this.domSanitizer.sanitize(ht.HTML,E)),b=v.clipboard.convert({html:E});else if(T==="json")try{b=JSON.parse(E)}catch{b=[{insert:E}]}v.setContents(b)}}}ngOnInit(){this.preserve=this.preserveWhitespace}ngOnChanges(t){this.quillEditor&&t.content&&this.valueSetter(this.quillEditor,t.content.currentValue)}ngAfterViewInit(){_t(this.platformId)||(this.quillSubscription=this.service.getQuill().pipe(ct(t=>{let e=[this.service.registerCustomModules(t,this.customModules)],i=this.beforeRender??this.service.config.beforeRender;return i&&e.push(i()),Promise.all(e).then(()=>t)})).subscribe(t=>{let e=Object.assign({},this.modules||this.service.config.modules);e.toolbar=!1,this.customOptions.forEach(u=>{let v=t.import(u.import);v.whitelist=u.whitelist,t.register(v,!0)});let i=this.debug;!i&&i!==!1&&this.service.config.debug&&(i=this.service.config.debug);let r=this.formats;!r&&r===void 0&&(r=this.service.config.formats?Object.assign({},this.service.config.formats):this.service.config.formats===null?null:void 0);let l=this.theme||(this.service.config.theme?this.service.config.theme:"snow");this.editorElem=this.elementRef.nativeElement.querySelector("[quill-view-element]"),this.zone.runOutsideAngular(()=>{this.quillEditor=new t(this.editorElem,{debug:i,formats:r,modules:e,readOnly:!0,strict:this.strict,theme:l})}),this.renderer.addClass(this.editorElem,"ngx-quill-view"),this.content&&this.valueSetter(this.quillEditor,this.content),this.onEditorCreated.observers.length&&requestAnimationFrame(()=>{this.onEditorCreated.emit(this.quillEditor),this.onEditorCreated.complete()})}))}ngOnDestroy(){this.quillSubscription?.unsubscribe(),this.quillSubscription=null}};n.\u0275fac=function(e){return new(e||n)(_(Q),_(K),_(Z),_(bt),_(I),_(mt))},n.\u0275cmp=P({type:n,selectors:[["quill-view"]],inputs:{format:"format",theme:"theme",modules:"modules",debug:"debug",formats:"formats",sanitize:"sanitize",beforeRender:"beforeRender",strict:"strict",content:"content",customModules:"customModules",customOptions:"customOptions",preserveWhitespace:"preserveWhitespace"},outputs:{onEditorCreated:"onEditorCreated"},standalone:!0,features:[J,et],decls:2,vars:1,consts:[["quill-view-element",""]],template:function(e,i){e&1&&h(0,ke,1,0,"pre",0)(1,Pe,1,0),e&2&&z(0,i.preserve?0:1)},dependencies:[j],styles:[`.ql-container.ngx-quill-view{border:0}
`],encapsulation:2});let o=n;return o})(),ee=(()=>{let n=class n{static forRoot(t){return{ngModule:n,providers:[{provide:Ct,useValue:t}]}}};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=q({type:n}),n.\u0275inj=D({imports:[Mt,we,Te]});let o=n;return o})();function qe(o,n){o&1&&(d(0,"div",23)(1,"p"),g(2,"Title is Required"),a()())}function De(o,n){o&1&&(d(0,"div",23)(1,"p"),g(2,"Title is Required"),a()())}function Ve(o,n){if(o&1){let s=x();d(0,"div",24)(1,"input",25),W("ngModelChange",function(e){M(s);let i=m();return H(i.color,e)||(i.color=e),O(e)}),a(),f(2,"label",26),a()}if(o&2){let s=n.$implicit,t=m();c(),X("id",s),X("value",s),A("ngModel",t.color),c(),F("background-color",s),X("for",s)}}function Fe(o,n){if(o&1&&(d(0,"div",27),g(1),a()),o&2){let s=m();c(),w(" Due Date: ",s.currentDate," ")}}function ze(o,n){o&1&&f(0,"i",28)}var Ot=(()=>{let n=class n{constructor(t,e,i,r){this._route=t,this.authService=e,this.boardService=i,this._router=r,this.colors={color1:"#e1d2f1",color2:"#ddffc2",color3:"#fdfede",color4:"#fde6ba",color5:"#fcccd8",color6:"#fee8ff",color7:"#dffff4",color8:"#c9ddfe"},this.colorsArr=Object.values(this.colors),this.editMode=!1,this.description="",this.loadSpinner=!1,this.quillConfig={toolbar:{container:[["bold","italic","underline","strike"],[{size:["xsmall","small","medium","large","xlarge"]}],[{align:[]}],["clean"],["link"]]}},this.todos=[],this.newTodo="",this.isConnected=!1,this.currentDate=this.currentDateForamt(new Date);let l=new Date;this.minDate=l.toISOString().split("T")[0]}ngOnInit(){this.getCurrentUser(),this.getMode(),this.initForm()}initForm(){this.editMode?(this.taskId=this._route.snapshot.params.id,this.boardService.getCertienTask(this.taskId).subscribe(t=>{this.title=t.title,this.description=t.description,this.color=t.color,this.currentDate=t.dueDate,this.currentStatus=t.status})):this.currentStatus=this._route.snapshot.params.status}getMode(){this._route.snapshot.params.id?this.editMode=!0:this.editMode=!1}getCurrentUser(){this.authService.userData.subscribe(t=>{this.currentUser=t})}currentDateForamt(t){let e=t.getFullYear(),i=(t.getMonth()+1).toString().padStart(2,"0");return`${t.getDate().toString().padStart(2,"0")}-${i}-${e}`}onSubmit(t){this.loadSpinner=!0;let e=B(L({},t.value),{status:this.currentStatus,createdBy:this.currentUser.displayName,userId:this.currentUser.userId});this.editMode?this.boardService.updateTask(this.taskId,e).subscribe(i=>{this.loadSpinner=!1,this._router.navigate(["/board"])},i=>{this.loadSpinner=!1,alert(i.error.error.message)}):this.boardService.addTask(e).subscribe(i=>{this.loadSpinner=!1,this._router.navigate(["/board"])},i=>{this.loadSpinner=!1,alert(i.error.error.message)})}};n.\u0275fac=function(e){return new(e||n)(_(ot),_(Kt),_(st),_(rt))},n.\u0275cmp=P({type:n,selectors:[["app-task-edit"]],decls:36,vars:12,consts:[["id","task-edit"],[1,"container"],[1,"row"],[3,"ngSubmit"],["taskForm","ngForm"],[1,"col-12"],[1,"input"],[1,"form-floating","mb-3"],["type","text","id","floatingInput","placeholder","Title","name","title","required","",1,"form-control",3,"ngModel","ngModelChange"],["for","floatingInput"],["class","error",4,"ngIf"],["placeholder","Enter Text","name","description",1,"w-100",3,"modules","ngModel","ngModelChange"],[1,"row","colorAndDate"],[1,"col-6"],[1,"input","input-radio"],["class","form-check",4,"ngFor","ngForOf"],[1,"input","date-picker"],["type","date","name","dueDate","placeholder","Select a date","required","",3,"ngModel","min","ngModelChange"],["class","selected-date",4,"ngIf"],["type","submit",1,"btn","button",3,"disabled"],["class","fas fa-spinner fa-spin ms-4",4,"ngIf"],["type","button","routerLink","/board",1,"back","btn"],[1,"fa-solid","fa-rotate-left"],[1,"error"],[1,"form-check"],["type","radio","name","color","required","",3,"id","value","ngModel","ngModelChange"],[3,"for"],[1,"selected-date"],[1,"fas","fa-spinner","fa-spin","ms-4"]],template:function(e,i){if(e&1){let r=x();d(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3"),g(4," Add Task "),f(5,"span"),a(),d(6,"form",3,4),C("ngSubmit",function(){M(r);let u=ft(7);return O(i.onSubmit(u))}),d(8,"div",5)(9,"div",6)(10,"div",7)(11,"input",8),W("ngModelChange",function(u){return H(i.title,u)||(i.title=u),u}),a(),d(12,"label",9),g(13,"Title"),a(),h(14,qe,3,0,"div",10),a()()(),d(15,"div",5)(16,"div",6)(17,"div",7)(18,"quill-editor",11),W("ngModelChange",function(u){return H(i.description,u)||(i.description=u),u}),a(),h(19,De,3,0,"div",10),a()()(),d(20,"div",5)(21,"div",12)(22,"div",13)(23,"div",14),h(24,Ve,3,6,"div",15),a()(),d(25,"div",13)(26,"div",16)(27,"input",17),W("ngModelChange",function(u){return H(i.currentDate,u)||(i.currentDate=u),u}),a(),h(28,Fe,2,1,"div",18),a()()()(),d(29,"div",5)(30,"button",19),g(31),h(32,ze,1,0,"i",20),a()()()(),d(33,"button",21),g(34,"Back To Board"),f(35,"i",22),a()()()}if(e&2){let r=ft(7);c(11),A("ngModel",i.title),c(3),p("ngIf",(r.controls.title==null?null:r.controls.title.errors)!==null&&r.controls.title.touched),c(4),p("modules",i.quillConfig),A("ngModel",i.description),c(),p("ngIf",i.description===null),c(5),p("ngForOf",i.colorsArr),c(3),A("ngModel",i.currentDate),p("min",i.minDate),c(),p("ngIf",i.currentDate),c(2),p("disabled",i.description===null||!r.valid||i.loadSpinner),c(),w(" ",i.editMode?"Edit ":"Add"," Task "),c(),p("ngIf",i.loadSpinner)}},dependencies:[it,nt,$t,Bt,Qt,At,Ht,Gt,Ut,Wt,Mt,Nt],styles:['#task-edit[_ngcontent-%COMP%]{margin-block:30px}#task-edit[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-block-end:20px;position:relative;width:fit-content;padding-block-end:20px;font-size:30px;color:#9ba3e1}#task-edit[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:0;height:2px;width:40%;background-color:#fe73b4}#task-edit[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:0;right:0;height:2px;width:40%;background-color:#fe73b4}#task-edit[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;left:50%;bottom:0;width:7px;height:7px;transform:translate(-50%,calc(50% - 1px));border-radius:50%;background-color:#9ba3e1}#task-edit[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#58151c;margin:0}#task-edit[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .box-color[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:5px}#task-edit[_ngcontent-%COMP%]   .input.date-picker[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;border:1px solid #dee2e6!important;width:fit-content;padding:5px 50px;border-radius:5px;margin-left:auto}#task-edit[_ngcontent-%COMP%]   .input.date-picker[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-bottom:10px;padding:8px;font-size:16px}#task-edit[_ngcontent-%COMP%]   .input.date-picker[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]{padding:0!important;border:0;margin-bottom:0!important;margin-inline-end:20px!important}#task-edit[_ngcontent-%COMP%]   .input.date-picker[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]:focus-visible{border:0;outline:0}#task-edit[_ngcontent-%COMP%]   .input.date-picker[_ngcontent-%COMP%]   .selected-date[_ngcontent-%COMP%]{font-weight:700}#task-edit[_ngcontent-%COMP%]   .input.input-radio[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));gap:10px}#task-edit[_ngcontent-%COMP%]   .input.input-radio[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]{display:none}#task-edit[_ngcontent-%COMP%]   .input.input-radio[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{position:relative;cursor:pointer;width:80px;height:30px}#task-edit[_ngcontent-%COMP%]   .input.input-radio[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%}#task-edit[_ngcontent-%COMP%]   .input.input-radio[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:before{border:2px solid #007BFF;background-color:transparent;box-shadow:0 0 0 4px #007bff33}#task-edit[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{margin-block-start:40px;background-color:#fe73b4;width:100%;font-size:20px;border:2px solid #fe73b4;color:#fff;transition:.5s;padding-block:10px}#task-edit[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover{background-color:#fff;color:#fe73b4;border:2px solid #fe73b4}#task-edit[_ngcontent-%COMP%]   .colorAndDate[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.back[_ngcontent-%COMP%]{background-color:#fe73b4;font-size:20px;margin-left:auto;display:block;margin-block-start:50px}.back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px;margin-inline-start:20px}[_ngcontent-%COMP%]::-webkit-datetime-edit{display:none}[_ngcontent-%COMP%]::-webkit-calendar-picker-indicator{font-size:50px}']});let o=n;return o})();var je=[{path:"",children:[{path:"",component:Xt},{path:"details",component:te},{path:"edit/:id",component:Ot},{path:"new/:status",component:Ot}]}],ie=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=q({type:n}),n.\u0275inj=D({imports:[vt.forChild(je),vt]});let o=n;return o})();var Di=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=q({type:n}),n.\u0275inj=D({imports:[j,Jt,ee.forRoot(),ie]});let o=n;return o})();export{Di as BoardModule};
