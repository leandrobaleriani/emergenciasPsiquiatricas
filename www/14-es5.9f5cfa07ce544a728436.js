!function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{QMpC:function(n,o,r){"use strict";r.r(o),r.d(o,"TurnoPageModule",(function(){return J}));var i,a,c,s=r("ofXK"),u=r("3Pt+"),l=r("TEn/"),b=r("tyNb"),d=r("mrSG"),f=function e(){t(this,e)},m=r("fXoL"),p=r("ZsGT"),h=r("e8h1"),v=[{path:"",component:(i=function(){function n(e,o,r,i,a,c){var s=this;t(this,n),this.formBuilder=e,this.navCtrl=o,this.tService=r,this.loadingController=i,this.toastController=a,this.storage=c,this.turno=this.formBuilder.group({fecha:"",nombre:"",detalle:"",tipo:"",deviceId:"",telefono:""}),this.storage.get("user").then((function(e){s.turno.controls.nombre.setValue(e.nombre),s.turno.controls.deviceId.setValue(e.id)})),this.storage.get("fecha").then((function(e){s.turno.controls.fecha.setValue(e)})),this.storage.get("tipo").then((function(e){s.turno.controls.tipo.setValue(e)}))}var o,r,i;return o=n,(r=[{key:"ngOnInit",value:function(){}},{key:"saveTurno",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,o,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new f).tur_fecha=this.turno.controls.fecha.value,t.tur_hora="",t.tur_nombre=this.turno.controls.nombre.value,t.tur_detalle=this.turno.controls.detalle.value,t.tur_tipo=this.turno.controls.tipo.value,t.tur_estado="PENDIENTE",t.device_id=this.turno.controls.deviceId.value,t.tur_telefono=this.turno.controls.telefono.value,e.next=4,this.loadingController.create({message:"Espere...",spinner:"crescent"});case 4:return n=e.sent,e.next=7,this.toastController.create({color:"primary",message:"Se registr\xf3 el pedido! <br> En breve nos comunicaremos con usted.",duration:2e3});case 7:return o=e.sent,e.next=10,n.present();case 10:return e.next=12,this.tService.saveTurno(t).subscribe((function(e){o.present(),n.dismiss(),r.navigateBack()}),(function(e){n.dismiss()}));case 12:case"end":return e.stop()}}),e,this)})))}},{key:"navigateBack",value:function(){this.navCtrl.back()}}])&&e(o.prototype,r),i&&e(o,i),n}(),i.\u0275fac=function(e){return new(e||i)(m.Hb(u.a),m.Hb(l.D),m.Hb(p.a),m.Hb(l.C),m.Hb(l.H),m.Hb(h.b))},i.\u0275cmp=m.Bb({type:i,selectors:[["app-turno"]],decls:35,vars:3,consts:[["color","primary"],["slot","start"],[3,"click"],["name","arrow-back"],[1,"background",3,"fullscreen"],[3,"formGroup","ngSubmit"],["position","stacked"],["cancelText","Cancelar","doneText","Listo","display-format","DD/MM/YYYY","picker-format","DD/MM/YYYY","formControlName","fecha","required",""],["value","URGENCIA","okText","Listo","cancelText","Cancelar","formControlName","tipo"],["value","URGENCIA"],["value","PROGRAMADA"],["type","text","formControlName","nombre","required",""],["formControlName","detalle","required",""],["type","text","formControlName","telefono","required",""],["type","submit","expand","full",3,"disabled"]],template:function(e,t){1&e&&(m.Kb(0,"ion-header"),m.Kb(1,"ion-toolbar",0),m.Kb(2,"ion-buttons",1),m.Kb(3,"ion-button",2),m.Sb("click",(function(){return t.navigateBack()})),m.Ib(4,"ion-icon",3),m.Jb(),m.Jb(),m.Kb(5,"ion-title"),m.dc(6,"Solicitar Turno"),m.Jb(),m.Jb(),m.Jb(),m.Kb(7,"ion-content",4),m.Kb(8,"form",5),m.Sb("ngSubmit",(function(){return t.saveTurno()})),m.Kb(9,"ion-item"),m.Kb(10,"ion-label",6),m.dc(11,"Fecha:"),m.Jb(),m.Ib(12,"ion-datetime",7),m.Jb(),m.Kb(13,"ion-item"),m.Kb(14,"ion-label",6),m.dc(15,"Tipo de Turno:"),m.Jb(),m.Kb(16,"ion-select",8),m.Kb(17,"ion-select-option",9),m.dc(18,"URGENCIA"),m.Jb(),m.Kb(19,"ion-select-option",10),m.dc(20,"PROGRAMADA"),m.Jb(),m.Jb(),m.Jb(),m.Kb(21,"ion-item"),m.Kb(22,"ion-label",6),m.dc(23,"Nombre:"),m.Jb(),m.Ib(24,"ion-input",11),m.Jb(),m.Kb(25,"ion-item"),m.Kb(26,"ion-label",6),m.dc(27,"Descripci\xf3n:"),m.Jb(),m.Ib(28,"ion-textarea",12),m.Jb(),m.Kb(29,"ion-item"),m.Kb(30,"ion-label",6),m.dc(31,"Telefono:"),m.Jb(),m.Ib(32,"ion-input",13),m.Jb(),m.Kb(33,"ion-button",14),m.dc(34,"Solicitar"),m.Jb(),m.Jb(),m.Jb()),2&e&&(m.xb(7),m.Xb("fullscreen",!0),m.xb(1),m.Xb("formGroup",t.turno),m.xb(25),m.Xb("disabled",!t.turno.valid))},directives:[l.j,l.y,l.e,l.d,l.k,l.x,l.g,u.k,u.h,u.c,l.m,l.o,l.h,l.F,u.g,u.b,u.j,l.r,l.s,l.l,l.G,l.w],styles:[""]}),i)}],g=((c=function e(){t(this,e)}).\u0275mod=m.Fb({type:c}),c.\u0275inj=m.Eb({factory:function(e){return new(e||c)},imports:[[b.i.forChild(v)],b.i]}),c),J=((a=function e(){t(this,e)}).\u0275mod=m.Fb({type:a}),a.\u0275inj=m.Eb({factory:function(e){return new(e||a)},imports:[[s.b,u.d,l.A,g,u.i]]}),a)}}])}();