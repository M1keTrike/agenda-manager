"use strict";(self.webpackChunkagend_manager=self.webpackChunkagend_manager||[]).push([[855],{4855:(D,m,r)=>{r.r(m),r.d(m,{AgendsModuleModule:()=>R});var g=r(177),u=r(517),e=r(3953),h=r(963),b=r(3130),v=r(1562);let A=(()=>{class t{http;apiUrl=`${b.c.apiUrl}/agendas`;constructor(n){this.http=n}createAgend(n){return this.http.post(this.apiUrl,n)}getAgends(){return this.http.get(this.apiUrl)}getAgendById(n){return this.http.get(`${this.apiUrl}/${n}`)}updateAgend(n,d){return this.http.put(`${this.apiUrl}/${n}`,d)}deleteAgend(n){return this.http.delete(`${this.apiUrl}/${n}`)}getAgendsByPersonaId(n){return this.http.get(`${this.apiUrl}/persona/${n}`)}static \u0275fac=function(d){return new(d||t)(e.KVO(v.Qq))};static \u0275prov=e.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),_=(()=>{class t{agenda;select=new e.bkB;selectAgend(){this.agenda&&this.select.emit(this.agenda)}static \u0275fac=function(d){return new(d||t)};static \u0275cmp=e.VBU({type:t,selectors:[["app-agends-agend-card"]],inputs:{agenda:"agenda"},outputs:{select:"select"},decls:8,vars:5,consts:[[1,"bg-white","rounded-lg","shadow-md","p-4","m-2","transition-shadow","hover:shadow-lg","cursor-pointer"],[1,"text-lg","font-semibold"]],template:function(d,s){1&d&&(e.j41(0,"div",0)(1,"h2",1),e.EFF(2),e.k0s(),e.j41(3,"p"),e.EFF(4),e.k0s(),e.j41(5,"p"),e.EFF(6),e.nI1(7,"date"),e.k0s()()),2&d&&(e.R7$(2),e.JRh(null==s.agenda?null:s.agenda.nombre),e.R7$(2),e.SpI("Tipo: ",null==s.agenda?null:s.agenda.tipo_agenda,""),e.R7$(2),e.SpI("Creado: ",e.bMT(7,3,null==s.agenda?null:s.agenda.fecha_creacion),""))},dependencies:[g.vh]})}return t})();var F=r(3753),w=r(6591);function E(t,l){if(1&t){const n=e.RV6();e.j41(0,"div",1)(1,"h2",2),e.EFF(2),e.k0s(),e.j41(3,"p",3),e.EFF(4),e.k0s(),e.j41(5,"p",4),e.EFF(6),e.nI1(7,"date"),e.k0s(),e.j41(8,"p",5),e.EFF(9),e.nI1(10,"date"),e.k0s(),e.j41(11,"div",6)(12,"button",7),e.EFF(13," Ver Detalles "),e.k0s(),e.j41(14,"button",8),e.bIt("click",function(){e.eBV(n);const s=e.XpG();return e.Njj(s.toDeleteAgend())}),e.EFF(15," Eliminar "),e.k0s(),e.j41(16,"button",9),e.bIt("click",function(){e.eBV(n);const s=e.XpG();return e.Njj(s.toEditAgend())}),e.EFF(17," Editar "),e.k0s()()()}if(2&t){const n=e.XpG();e.R7$(2),e.SpI(" ",n.selectedAgend.nombre," "),e.R7$(2),e.SpI("Tipo de agenda: ",n.selectedAgend.tipo_agenda,""),e.R7$(2),e.SpI(" Creado: ",e.bMT(7,4,n.selectedAgend.fecha_creacion)," "),e.R7$(3),e.SpI(" Actualizado: ",e.bMT(10,6,n.selectedAgend.fecha_modificacion)," ")}}let C=(()=>{class t{dialog;router;sharedService;selectedAgend;deleteAgend=new e.bkB;editAgend=new e.bkB;constructor(n,d,s){this.dialog=n,this.router=d,this.sharedService=s}toDeleteAgend(){this.selectedAgend?this.dialog.open(F.w).afterClosed().subscribe(d=>{d?this.deleteAgend.emit(this.selectedAgend):console.log("No se elimin\xf3 ninguna agenda")}):console.error("No hay agenda seleccionada para eliminar")}toEditAgend(){this.selectedAgend?this.editAgend.emit(this.selectedAgend):console.error("No hay agenda seleccionada para editar")}static \u0275fac=function(d){return new(d||t)(e.rXU(w.bZ),e.rXU(u.Ix),e.rXU(h.d))};static \u0275cmp=e.VBU({type:t,selectors:[["app-agends-agend-details-card"]],inputs:{selectedAgend:"selectedAgend"},outputs:{deleteAgend:"deleteAgend",editAgend:"editAgend"},decls:1,vars:1,consts:[["class","bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow",4,"ngIf"],[1,"bg-white","rounded-lg","shadow-md","p-6","hover:shadow-lg","transition-shadow"],[1,"text-lg","font-semibold","text-gray-800","mb-2"],[1,"text-gray-600"],[1,"text-gray-400","text-xs","mt-2"],[1,"text-gray-400","text-xs"],[1,"flex","m-2"],[1,"bg-blue-500","text-white","p-2","rounded","m-0.5","w-1/2","hover:bg-blue-600","transition"],[1,"bg-red-400","text-white","p-2","rounded","m-0.5","w-1/4","hover:bg-red-600","transition",3,"click"],[1,"bg-green-600","text-white","p-2","rounded","m-0.5","w-1/4","hover:bg-green-700","transition",3,"click"]],template:function(d,s){1&d&&e.DNE(0,E,18,8,"div",0),2&d&&e.Y8G("ngIf",s.selectedAgend)},dependencies:[g.bT,g.vh]})}return t})();var o=r(4341);const f=t=>({"border-red-500":t});function k(t,l){1&t&&(e.j41(0,"div",11),e.EFF(1," El nombre de la agenda es obligatorio. "),e.k0s())}function j(t,l){1&t&&(e.j41(0,"div",11),e.EFF(1," El tipo de agenda es obligatorio. "),e.k0s())}let y=(()=>{class t{fb;agendService;toEditAgend;personOwner;agendAdded=new e.bkB;editedAgend=new e.bkB;agendaForm;titleAgendForm="Agregar agenda";constructor(n,d){this.fb=n,this.agendService=d}ngOnInit(){this.loadForm()}ngOnChanges(n){n.toEditAgend&&this.loadForm()}loadForm(){this.toEditAgend?(this.titleAgendForm="Editar agenda",this.agendaForm=this.fb.group({nombre:[this.toEditAgend.nombre,o.k0.required],tipo_agenda:[this.toEditAgend.tipo_agenda,o.k0.required]})):this.agendaForm=this.fb.group({nombre:["",o.k0.required],tipo_agenda:["",o.k0.required]})}onSubmit(){if(this.toEditAgend&&this.toEditAgend._id){const n={...this.agendaForm.value};this.agendService.updateAgend(this.toEditAgend._id,n).subscribe(()=>{this.agendaForm.reset(),this.titleAgendForm="Agregar agenda",this.editedAgend.emit(!0)})}else if(this.agendaForm.valid&&this.personOwner){const n={...this.agendaForm.value,persona_id:this.personOwner._id};this.agendService.createAgend(n).subscribe(d=>{this.agendAdded.emit(d),this.agendaForm.reset()})}}static \u0275fac=function(d){return new(d||t)(e.rXU(o.ok),e.rXU(A))};static \u0275cmp=e.VBU({type:t,selectors:[["app-agends-agend-form"]],inputs:{toEditAgend:"toEditAgend",personOwner:"personOwner"},outputs:{agendAdded:"agendAdded",editedAgend:"editedAgend"},features:[e.OA$],decls:17,vars:11,consts:[[1,"max-w-lg","mx-auto","mt-8","bg-white","p-6","rounded","m-4"],[1,"text-2xl","font-bold","mb-6","text-center"],[3,"ngSubmit","formGroup"],[1,"mb-4"],["for","nombre",1,"block","text-gray-700"],["id","nombre","type","text","formControlName","nombre",1,"w-full","p-2","border","border-gray-300","rounded",3,"ngClass"],["class","text-red-500",4,"ngIf"],["for","tipo_agenda",1,"block","text-gray-700"],["id","tipo_agenda","type","text","formControlName","tipo_agenda",1,"w-full","p-2","border","border-gray-300","rounded",3,"ngClass"],[1,"flex","justify-center"],["type","submit",1,"bg-blue-500","text-white","p-2","rounded","m-0.5","w-8/12","hover:bg-blue-600","transition",3,"disabled"],[1,"text-red-500"]],template:function(d,s){if(1&d&&(e.j41(0,"div",0)(1,"h2",1),e.EFF(2),e.k0s(),e.j41(3,"form",2),e.bIt("ngSubmit",function(){return s.onSubmit()}),e.j41(4,"div",3)(5,"label",4),e.EFF(6,"Nombre de la Agenda"),e.k0s(),e.nrm(7,"input",5),e.DNE(8,k,2,0,"div",6),e.k0s(),e.j41(9,"div",3)(10,"label",7),e.EFF(11,"Tipo de Agenda"),e.k0s(),e.nrm(12,"input",8),e.DNE(13,j,2,0,"div",6),e.k0s(),e.j41(14,"div",9)(15,"button",10),e.EFF(16," Agregar Agenda "),e.k0s()()()()),2&d){let a,i,c,p;e.R7$(2),e.JRh(s.titleAgendForm),e.R7$(),e.Y8G("formGroup",s.agendaForm),e.R7$(4),e.Y8G("ngClass",e.eq3(7,f,(null==(a=s.agendaForm.get("nombre"))?null:a.invalid)&&(null==(a=s.agendaForm.get("nombre"))?null:a.touched))),e.R7$(),e.Y8G("ngIf",(null==(i=s.agendaForm.get("nombre"))?null:i.invalid)&&(null==(i=s.agendaForm.get("nombre"))?null:i.touched)),e.R7$(4),e.Y8G("ngClass",e.eq3(9,f,(null==(c=s.agendaForm.get("tipo_agenda"))?null:c.invalid)&&(null==(c=s.agendaForm.get("tipo_agenda"))?null:c.touched))),e.R7$(),e.Y8G("ngIf",(null==(p=s.agendaForm.get("tipo_agenda"))?null:p.invalid)&&(null==(p=s.agendaForm.get("tipo_agenda"))?null:p.touched)),e.R7$(2),e.Y8G("disabled",s.agendaForm.invalid)}},dependencies:[g.YU,g.bT,o.qT,o.me,o.BC,o.cb,o.j4,o.JD]})}return t})();function $(t,l){if(1&t){const n=e.RV6();e.j41(0,"div",7),e.bIt("click",function(){const s=e.eBV(n).$implicit,a=e.XpG();return e.Njj(a.selectAgend(s))}),e.j41(1,"app-agends-agend-card",8),e.bIt("select",function(s){e.eBV(n);const a=e.XpG();return e.Njj(a.selectAgend(s))}),e.k0s()()}if(2&t){const n=l.$implicit;e.R7$(),e.Y8G("agenda",n)}}let I=(()=>{class t{agendService;personOwner;agends_list=[];isLoading=!1;errorMessage=null;selectedAgend;toEditAgend;constructor(n){this.agendService=n}ngOnInit(){this.personOwner&&this.loadAgendas()}loadAgendas(){this.personOwner&&this.personOwner._id&&(this.isLoading=!0,this.agendService.getAgendsByPersonaId(this.personOwner._id).subscribe(n=>{this.agends_list=n,this.isLoading=!1,this.errorMessage=null},n=>{this.isLoading=!1,this.errorMessage="Error al cargar las agendas. Por favor, int\xe9ntelo de nuevo.",console.error("Error al cargar las agendas:",n)}))}onAgendAdded(n){this.agends_list.push(n)}onAgendDeleted(n){n&&n._id?this.agendService.deleteAgend(n._id).subscribe(()=>{this.loadAgendas(),this.selectedAgend=void 0},d=>{console.error(d)}):console.log("Invalid agenda to delete")}onAgendEdited(n){n&&(this.toEditAgend=n)}onAgendEditedSuccess(n){n&&(this.loadAgendas(),this.selectedAgend=void 0,this.toEditAgend=void 0)}selectAgend(n){this.selectedAgend=n}static \u0275fac=function(d){return new(d||t)(e.rXU(A))};static \u0275cmp=e.VBU({type:t,selectors:[["app-agends-dashboard"]],inputs:{personOwner:"personOwner"},decls:7,vars:4,consts:[[1,"min-h-screen","flex","flex-col","items-center","justify-between","bg-blue-500","p-4"],[1,"flex","mb-8","w-full"],[1,"w-1/2","justify-center"],[3,"deleteAgend","editAgend","selectedAgend"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","lg:grid-cols-4","gap-6","mb-8","w-full","max-w-6xl","px-4"],[3,"click",4,"ngFor","ngForOf"],[3,"editedAgend","agendAdded","toEditAgend","personOwner"],[3,"click"],[3,"select","agenda"]],template:function(d,s){1&d&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"app-agends-agend-details-card",3),e.bIt("deleteAgend",function(i){return s.onAgendDeleted(i)})("editAgend",function(i){return s.onAgendEdited(i)}),e.k0s()()(),e.j41(4,"div",4),e.DNE(5,$,2,1,"div",5),e.k0s(),e.j41(6,"app-agends-agend-form",6),e.bIt("editedAgend",function(i){return s.onAgendEditedSuccess(i)})("agendAdded",function(i){return s.onAgendAdded(i)}),e.k0s()()),2&d&&(e.R7$(3),e.Y8G("selectedAgend",s.selectedAgend),e.R7$(2),e.Y8G("ngForOf",s.agends_list),e.R7$(),e.Y8G("toEditAgend",s.toEditAgend)("personOwner",s.personOwner))},dependencies:[g.Sq,_,C,y]})}return t})();const O=[{path:"",component:(()=>{class t{sharedService;personOwner;constructor(n){this.sharedService=n}ngOnInit(){this.personOwner=this.sharedService.getData()}static \u0275fac=function(d){return new(d||t)(e.rXU(h.d))};static \u0275cmp=e.VBU({type:t,selectors:[["app-agends-agends-page"]],decls:4,vars:2,consts:[[1,"min-h-screen","flex","flex-col","items-center","justify-between","bg-blue-500"],[1,"text-4xl","font-bold","mb-8","text-white"],[3,"personOwner"]],template:function(d,s){1&d&&(e.j41(0,"div",0)(1,"h1",1),e.EFF(2),e.k0s(),e.nrm(3,"app-agends-dashboard",2),e.k0s()),2&d&&(e.R7$(2),e.SpI(" Agendas de ",null==s.personOwner?null:s.personOwner.nombrecompleto," "),e.R7$(),e.Y8G("personOwner",s.personOwner))},dependencies:[I]})}return t})()}];let S=(()=>{class t{static \u0275fac=function(d){return new(d||t)};static \u0275mod=e.$C({type:t});static \u0275inj=e.G2t({imports:[u.iI.forChild(O),u.iI]})}return t})(),R=(()=>{class t{static \u0275fac=function(d){return new(d||t)};static \u0275mod=e.$C({type:t});static \u0275inj=e.G2t({imports:[g.MD,S,o.X1]})}return t})()}}]);