import{$ as S,D as o,E as i,F as c,G as b,H as n,I as y,K as g,L as C,N as D,S as v,T as M,_ as u,l as r,n as l,o as f,p as a,v as h}from"./chunk-OSPYGLUV.js";var s=class e{authService=l(S);user=D(()=>this.authService.currentUser());onLogout(){this.authService.logout()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=f({type:e,selectors:[["ng-component"]],decls:11,vars:3,consts:[[3,"click"]],template:function(t,d){t&1&&(o(0,"h1"),n(1,"Dashboard"),i(),c(2,"hr"),o(3,"h3"),n(4,"User"),i(),o(5,"pre"),n(6),g(7,"json"),i(),c(8,"br"),o(9,"button",0),b("click",function(){return d.onLogout()}),n(10,` Cerrar Sesi\xF3n
`),i()),t&2&&(h(6),y(C(7,1,d.user())))},dependencies:[v]})};var j=[{path:"",component:s}],m=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=a({type:e});static \u0275inj=r({imports:[u.forChild(j),u]})};var x=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=a({type:e});static \u0275inj=r({imports:[M,m]})};export{x as DashboardModule};
