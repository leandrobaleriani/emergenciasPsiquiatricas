!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{TUkU:function(n,i,r){"use strict";r.r(i),r.d(i,"Tab2PageModule",(function(){return J}));var o=r("TEn/"),c=r("ofXK"),a=r("3Pt+"),s=r("tyNb"),u=r("mrSG"),b=r("fXoL"),l=r("ZsGT"),f=r("e8h1");function m(e,t){1&e&&b.Ib(0,"ion-icon",11)}function d(e,t){1&e&&b.Ib(0,"ion-icon",12)}function p(e,t){if(1&e){var n=b.Lb();b.Kb(0,"ion-item-option",13),b.Sb("click",(function(){b.Zb(n);var e=b.Ub().$implicit;return b.Ub().verDetalle(e)})),b.dc(1),b.Jb()}if(2&e){var i=b.Ub().$implicit;b.xb(1),b.fc("",i.tur_estado," ")}}function v(e,t){if(1&e){var n=b.Lb();b.Kb(0,"ion-item-option",14),b.Sb("click",(function(){b.Zb(n);var e=b.Ub().$implicit;return b.Ub().verDetalle(e)})),b.dc(1),b.Jb()}if(2&e){var i=b.Ub().$implicit;b.xb(1),b.fc("",i.tur_estado," ")}}function h(e,t){if(1&e){var n=b.Lb();b.Kb(0,"ion-item-option",15),b.Sb("click",(function(){b.Zb(n);var e=b.Ub().$implicit;return b.Ub().verDetalle(e)})),b.dc(1),b.Jb()}if(2&e){var i=b.Ub().$implicit;b.xb(1),b.fc("",i.tur_estado," ")}}function g(e,t){if(1&e){var n=b.Lb();b.Kb(0,"ion-item-option",14),b.Sb("click",(function(){b.Zb(n);var e=b.Ub().$implicit;return b.Ub().verDetalle(e)})),b.dc(1),b.Jb()}if(2&e){var i=b.Ub().$implicit;b.xb(1),b.fc("",i.tur_estado," ")}}function x(e,t){if(1&e){var n=b.Lb();b.Kb(0,"ion-item",4),b.Sb("click",(function(){b.Zb(n);var e=t.$implicit;return b.Ub().verDetalle(e)})),b.Kb(1,"ion-avatar",5),b.cc(2,m,1,0,"ion-icon",6),b.cc(3,d,1,0,"ion-icon",7),b.Jb(),b.Kb(4,"ion-label"),b.Kb(5,"h2"),b.dc(6),b.Jb(),b.Kb(7,"h3"),b.dc(8),b.Jb(),b.Kb(9,"h3"),b.dc(10),b.Jb(),b.Jb(),b.cc(11,p,2,1,"ion-item-option",8),b.cc(12,v,2,1,"ion-item-option",9),b.cc(13,h,2,1,"ion-item-option",10),b.cc(14,g,2,1,"ion-item-option",9),b.Jb()}if(2&e){var i=t.$implicit;b.xb(2),b.Xb("ngIf","PROGRAMADA"==i.tur_tipo),b.xb(1),b.Xb("ngIf","URGENCIA"==i.tur_tipo),b.xb(3),b.ec(i.tur_fecha),b.xb(2),b.ec(i.tur_nombre),b.xb(2),b.ec(i.tur_hora),b.xb(1),b.Xb("ngIf","PENDIENTE"==i.tur_estado),b.xb(1),b.Xb("ngIf","REALIZADO"==i.tur_estado),b.xb(1),b.Xb("ngIf","CANCELADO"==i.tur_estado),b.xb(1),b.Xb("ngIf","CONFIRMADO"==i.tur_estado)}}var k,y,I,w=[{path:"",component:(k=function(){function n(t,i,r,o){e(this,n),this.tService=t,this.loadingController=i,this.alertController=r,this.storage=o}var i,r,o;return i=n,(r=[{key:"ionViewWillEnter",value:function(){this.getTurnos()}},{key:"ngOnInit",value:function(){}},{key:"getTurnos",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadingController.create({message:"Cargando...",spinner:"crescent"});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.next=7,this.storage.get("user").then((function(e){n.tService.getTurnosByDeviceId(e.id).subscribe((function(e){n.turnos=e,t.dismiss()}),(function(e){t.dismiss()}))}),(function(e){t.dismiss()}));case 7:case"end":return e.stop()}}),e,this)})))}},{key:"verDetalle",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="<b>Detalle: </b>"+e.tur_detalle+"<br>",t.next=3,this.alertController.create({header:"Detalle",subHeader:"Turno N\xb0: "+e.tur_id,message:n,buttons:[{text:"Salir",role:"cancel",cssClass:"secondary"},{text:"Cancelar Turno",cssClass:"primary",handler:function(){r.cancelarTurno(e.tur_id,"CANCELADO"),i.dismiss()}}]});case 3:return i=t.sent,t.next=6,i.present();case 6:case"end":return t.stop()}}),t,this)})))}},{key:"cancelarTurno",value:function(e,t){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i,r=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.loadingController.create({message:"Espere...",spinner:"crescent"});case 2:return i=n.sent,n.next=5,i.present();case 5:return n.next=7,this.tService.cancelarTurno(e,t).subscribe((function(e){r.getTurnos(),i.dismiss()}),(function(e){i.dismiss()}));case 7:case"end":return n.stop()}}),n,this)})))}}])&&t(i.prototype,r),o&&t(i,o),n}(),k.\u0275fac=function(e){return new(e||k)(b.Hb(l.a),b.Hb(o.C),b.Hb(o.a),b.Hb(f.b))},k.\u0275cmp=b.Bb({type:k,selectors:[["app-tab2"]],decls:7,vars:2,consts:[["color","primary"],[3,"fullscreen"],[3,"items"],[3,"click",4,"virtualItem"],[3,"click"],["slot","start"],["name","time",4,"ngIf"],["name","time","color","danger",4,"ngIf"],["color","primary",3,"click",4,"ngIf"],["color","success",3,"click",4,"ngIf"],["color","danger",3,"click",4,"ngIf"],["name","time"],["name","time","color","danger"],["color","primary",3,"click"],["color","success",3,"click"],["color","danger",3,"click"]],template:function(e,t){1&e&&(b.Kb(0,"ion-header"),b.Kb(1,"ion-toolbar",0),b.Kb(2,"ion-title"),b.dc(3,"Mis Solicitudes"),b.Jb(),b.Jb(),b.Jb(),b.Kb(4,"ion-content",1),b.Kb(5,"ion-virtual-scroll",2),b.cc(6,x,15,9,"ion-item",3),b.Jb(),b.Jb()),2&e&&(b.xb(4),b.Xb("fullscreen",!0),b.xb(1),b.Xb("items",t.turnos))},directives:[o.j,o.y,o.x,o.g,o.z,o.I,o.m,o.c,c.h,o.o,o.k,o.n],styles:[""]}),k)}],C=((I=function t(){e(this,t)}).\u0275mod=b.Fb({type:I}),I.\u0275inj=b.Eb({factory:function(e){return new(e||I)},imports:[[s.i.forChild(w)],s.i]}),I),J=((y=function t(){e(this,t)}).\u0275mod=b.Fb({type:y}),y.\u0275inj=b.Eb({factory:function(e){return new(e||y)},imports:[[o.A,c.b,a.d,C]]}),y)}}])}();