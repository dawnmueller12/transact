"use strict";(self.webpackChunkxtreme_admin_angular=self.webpackChunkxtreme_admin_angular||[]).push([[240],{7240:(ot,Z,u)=>{u.r(Z),u.d(Z,{AdministrationModule:()=>nt});var T=u(4406),d=u(9808),s=u(3075),_=u(4946),t=u(6435),a=u(6259),m=u(520);let g=(()=>{class o{constructor(e){this.http=e}createTenant(e){return this.http.post(a.pU.bohoTenantsApi.endpoint,e)}getTenants(){return this.http.get(a.pU.bohoTenantsApi.endpoint)}getTenant(e){return this.http.get(a.pU.bohoTenantsApi.endpoint+"/"+e)}updateTenant(e){return this.http.put(a.pU.bohoTenantsApi.endpoint,e)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(m.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})();function A(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._UZ(2,"ngb-highlight",17),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"ngb-highlight",17),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"ngb-highlight",17),t.qZA(),t.TgZ(7,"td"),t._UZ(8,"ngb-highlight",17),t.qZA(),t.TgZ(9,"td"),t._UZ(10,"ngb-highlight",17),t.qZA(),t.TgZ(11,"td"),t.TgZ(12,"em",18),t.NdJ("click",function(){const l=t.CHM(e).$implicit,c=t.oxw(),p=t.MAs(30);return c.openModal(p,l)}),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=i.$implicit,n=t.oxw();t.xp6(2),t.Q6J("result",e.OrganizationName)("term",n.csearchTerm),t.xp6(2),t.Q6J("result",e.OrganizationAddress)("term",n.csearchTerm),t.xp6(2),t.Q6J("result",e.State)("term",n.csearchTerm),t.xp6(2),t.Q6J("result",e.City)("term",n.csearchTerm),t.xp6(2),t.Q6J("result",e.Pincode)("term",n.csearchTerm)}}function b(o,i){if(1&o&&(t.TgZ(0,"span",41),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.formsErrors.organizationName," ")}}function q(o,i){if(1&o&&(t.TgZ(0,"span",41),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.formsErrors.organizationAddress," ")}}function x(o,i){if(1&o&&(t.TgZ(0,"span",41),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.formsErrors.state," ")}}function U(o,i){if(1&o&&(t.TgZ(0,"span",41),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.formsErrors.city," ")}}function C(o,i){if(1&o&&(t.TgZ(0,"span",41),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.formsErrors.pincode," ")}}function N(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",19),t.TgZ(1,"h5",20),t._uU(2),t.qZA(),t.TgZ(3,"button",21),t.NdJ("click",function(){return t.CHM(e),t.oxw().closeBtnClick()}),t.TgZ(4,"span",22),t._uU(5,"\xd7"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"div",23),t.TgZ(7,"form",24),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().onSubmit()}),t.TgZ(8,"div",25),t.TgZ(9,"label",26),t._uU(10,"Organization Name"),t.qZA(),t.TgZ(11,"div",27),t.TgZ(12,"input",28),t.NdJ("blur",function(){t.CHM(e);const r=t.oxw();return r.logValidationErrors(r.editClient)}),t.qZA(),t.YNc(13,b,2,1,"span",29),t.qZA(),t.qZA(),t.TgZ(14,"div",25),t.TgZ(15,"label",30),t._uU(16,"Organization Address"),t.qZA(),t.TgZ(17,"div",27),t.TgZ(18,"input",31),t.NdJ("blur",function(){t.CHM(e);const r=t.oxw();return r.logValidationErrors(r.editClient)}),t.qZA(),t.YNc(19,q,2,1,"span",29),t.qZA(),t.qZA(),t.TgZ(20,"div",25),t.TgZ(21,"label",32),t._uU(22,"State"),t.qZA(),t.TgZ(23,"div",27),t.TgZ(24,"input",33),t.NdJ("blur",function(){t.CHM(e);const r=t.oxw();return r.logValidationErrors(r.editClient)}),t.qZA(),t.YNc(25,x,2,1,"span",29),t.qZA(),t.qZA(),t.TgZ(26,"div",25),t.TgZ(27,"label",34),t._uU(28,"City"),t.qZA(),t.TgZ(29,"div",27),t.TgZ(30,"input",35),t.NdJ("blur",function(){t.CHM(e);const r=t.oxw();return r.logValidationErrors(r.editClient)}),t.qZA(),t.YNc(31,U,2,1,"span",29),t.qZA(),t.qZA(),t.TgZ(32,"div",25),t.TgZ(33,"label",36),t._uU(34,"Pincode"),t.qZA(),t.TgZ(35,"div",27),t.TgZ(36,"input",37),t.NdJ("blur",function(){t.CHM(e);const r=t.oxw();return r.logValidationErrors(r.editClient)}),t.qZA(),t.YNc(37,C,2,1,"span",29),t.qZA(),t.qZA(),t.TgZ(38,"div",38),t.TgZ(39,"button",39),t.NdJ("click",function(){return t.CHM(e),t.oxw().closeBtnClick()}),t._uU(40," Close "),t.qZA(),t.TgZ(41,"button",40),t._uU(42," Save "),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(2),t.hij("",e.editAddLabel," Tenant"),t.xp6(5),t.Q6J("formGroup",e.editTenant),t.xp6(6),t.Q6J("ngIf",e.formsErrors.organizationName),t.xp6(6),t.Q6J("ngIf",e.formsErrors.organizationAddress),t.xp6(6),t.Q6J("ngIf",e.formsErrors.state),t.xp6(6),t.Q6J("ngIf",e.formsErrors.city),t.xp6(6),t.Q6J("ngIf",e.formsErrors.pincode),t.xp6(4),t.Q6J("disabled",e.editTenant.invalid)}}const v={asc:"desc",desc:"","":"asc"};let w=(()=>{class o{constructor(){this.sortable=null,this.direction="",this.sort=new t.vpe}rotate(){this.direction=v[this.direction],this.sort.emit({column:this.sortable,direction:this.direction})}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275dir=t.lG2({type:o,selectors:[["th","sortable",""]],hostVars:4,hostBindings:function(e,n){1&e&&t.NdJ("click",function(){return n.rotate()}),2&e&&t.ekj("asc","asc"===n.direction)("desc","desc"===n.direction)},inputs:{sortable:"sortable",direction:"direction"},outputs:{sort:"sort"}}),o})(),J=(()=>{class o{constructor(e,n,r){this.tenantsService=e,this.fb=n,this.modalService=r,this.sortTenantList=null,this.filterTenant=null,this.cfilterTenant=null,this.page=1,this.pageSize=2,this.editTenant=Object.create(null),this.editAddLabel="Add",this.tenantDetail=null,this.totalLengthOfCollection=0,this.cpage=1,this.cpageSize=4,this.headers=Object.create(null),this.ValidationMessage={fullName:{required:"full Name is required."},UserName:{required:"User Name is required."},email:{required:"Email is required.",Email:"Not a email"}},this.formsErrors={}}ngOnInit(){this.editTenant=this.fb.group({id:[null],organizationName:["",s.kI.required],organizationAddress:["",s.kI.required],state:["",[s.kI.required]],city:["",[s.kI.required]],pincode:["",[s.kI.required]]}),this.tenantsService.getTenants().subscribe(({IS_SUCCESS:e,RESPONSE:n})=>{e&&(this.filterTenant=n,this.cfilterTenant=n,this.sortTenantList=n,this.totalLengthOfCollection=this.cpageSize=this.cfilterTenant.length)},e=>{console.log(e)})}onSort({column:e}){this.headers.forEach(r=>{r.sortable!==e&&(r.direction="")})}logValidationErrors(e){}openModal(e,n){this.modalService.open(e,{centered:!0,backdrop:"static"}),null==n&&(this.editAddLabel="Add"),null!=n&&(this.tenantDetail=n,this.editAddLabel="Edit",this.editTenant.patchValue({id:n.Id,organizationName:n.OrganizationName,organizationAddress:n.OrganizationAddress,state:n.State,city:n.City,pincode:n.Pincode}))}closeBtnClick(){this.modalService.dismissAll(),this.ngOnInit()}onSubmit(){let e;e="Add"===this.editAddLabel?this.tenantsService.createTenant(this.editTenant.value):this.tenantsService.updateTenant(this.editTenant.value),e.subscribe(n=>{this.closeBtnClick()},n=>{console.log(n)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g),t.Y36(s.qu),t.Y36(_.FF))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-tenants"]],viewQuery:function(e,n){if(1&e&&t.Gf(w,5),2&e){let r;t.iGM(r=t.CRH())&&(n.headers=r)}},decls:31,vars:5,consts:[[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-body"],[1,"card-title","mb-0"],[1,"lstick"],[1,"d-flex","mt-3"],["type","button",1,"btn","btn-primary","ml-auto",3,"click"],[1,"table","table-striped","border","mt-4"],["sortable","organizationName",3,"sort"],["sortable","organizationAddress",3,"sort"],["sortable","state",3,"sort"],["sortable","city",3,"sort"],["sortable","pincode",3,"sort"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between","p-2"],["editModal",""],[3,"result","term"],[1,"ti-pencil","text-info","m-r-10","pointer",3,"click"],[1,"modal-header"],["id","editLabel",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"form-group","row"],["for","organizationName",1,"col-sm-4","col-form-label"],[1,"col-sm-8"],["type","text","formControlName","organizationName","id","organizationName",1,"form-control",3,"blur"],["class","help-block",4,"ngIf"],["for","organizationAddress",1,"col-sm-4","col-form-label"],["type","text","formControlName","organizationAddress","id","organizationAddress",1,"form-control",3,"blur"],["for","state",1,"col-sm-4","col-form-label"],["type","text","formControlName","state","id","state",1,"form-control",3,"blur"],["for","city",1,"col-sm-4","col-form-label"],["type","text","formControlName","city","id","city",1,"form-control",3,"blur"],["for","pincode",1,"col-sm-4","col-form-label"],["type","text","formControlName","pincode","id","pincode",1,"form-control",3,"blur"],[1,"modal-footer"],["type","button",1,"btn","btn-dark",3,"click"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"help-block"]],template:function(e,n){if(1&e){const r=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"h4",4),t._UZ(5,"span",5),t._uU(6,"Tenants"),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){t.CHM(r);const c=t.MAs(30);return n.openModal(c,null)}),t._uU(9," + Add Tenants "),t.qZA(),t.qZA(),t.TgZ(10,"table",8),t.TgZ(11,"thead"),t.TgZ(12,"tr"),t.TgZ(13,"th",9),t.NdJ("sort",function(c){return n.onSort(c)}),t._uU(14,"Name"),t.qZA(),t.TgZ(15,"th",10),t.NdJ("sort",function(c){return n.onSort(c)}),t._uU(16," Address "),t.qZA(),t.TgZ(17,"th",11),t.NdJ("sort",function(c){return n.onSort(c)}),t._uU(18,"State"),t.qZA(),t.TgZ(19,"th",12),t.NdJ("sort",function(c){return n.onSort(c)}),t._uU(20,"City"),t.qZA(),t.TgZ(21,"th",13),t.NdJ("sort",function(c){return n.onSort(c)}),t._uU(22,"Pincode"),t.qZA(),t.TgZ(23,"th"),t._uU(24,"Action"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(25,"tbody"),t.YNc(26,A,13,10,"tr",14),t.ALo(27,"slice"),t.qZA(),t.qZA(),t._UZ(28,"div",15),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(29,N,43,8,"ng-template",null,16,t.W1O)}2&e&&(t.xp6(26),t.Q6J("ngForOf",t.Dn7(27,1,n.cfilterTenant,(n.cpage-1)*n.cpageSize,(n.cpage-1)*n.cpageSize+n.cpageSize)))},directives:[d.sg,_._h,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,d.O5],pipes:[d.OU],styles:[""]}),o})(),h=(()=>{class o{constructor(e){this.http=e}createUser(e){return this.http.post(a.pU.bohoUsersApi.endpoint,e)}getUsers(){return this.http.get(a.pU.bohoUsersApi.endpoint)}getUser(e){return this.http.get(a.pU.bohoUsersApi.endpoint+"/"+e)}updateUser(e){return this.http.put(a.pU.bohoUsersApi.endpoint,e)}getRoles(){return this.http.get(a.pU.bohoRolesApi.endpoint)}getTenantsByUserId(e){return this.http.get(a.pU.bohoUsersApi.endpoint+"/"+e+"/tenants")}addTenantsToUser(e){return this.http.post(a.pU.bohoUsersApi.endpoint+"/AddTenants",{userId:e.userId,tenantIds:[e.tenantId]})}deleteUserTenants(e){const n={headers:new m.WM({"Content-Type":"application/json"}),body:{userId:e.userId,tenantIds:[e.tenantId]}};return this.http.delete(a.pU.bohoUsersApi.endpoint+"/DeleteTenants",n)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(m.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})();function I(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._UZ(2,"ngb-highlight",16),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"ngb-highlight",16),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"ngb-highlight",16),t.qZA(),t.TgZ(7,"td"),t._UZ(8,"ngb-highlight",16),t.qZA(),t.TgZ(9,"td"),t.TgZ(10,"em",17),t.NdJ("click",function(){const l=t.CHM(e).$implicit,c=t.oxw(),p=t.MAs(28);return c.openModal(p,l)}),t.qZA(),t.TgZ(11,"em",18),t.NdJ("click",function(){const l=t.CHM(e).$implicit,c=t.oxw(),p=t.MAs(30);return c.openModal(p,l.Id)}),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=i.$implicit,n=t.oxw();t.xp6(2),t.Q6J("result",e.FirstName)("term",n.csearchTerm),t.xp6(2),t.Q6J("result",e.LastName)("term",n.csearchTerm),t.xp6(2),t.Q6J("result",e.MiddleName)("term",n.csearchTerm),t.xp6(2),t.Q6J("result",n.findRoleName(e.RoleId))("term",n.csearchTerm)}}function y(o,i){if(1&o&&(t.TgZ(0,"span",41),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.formsErrors.firstName," ")}}function S(o,i){if(1&o&&(t.TgZ(0,"span",41),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.formsErrors.lastName," ")}}function k(o,i){if(1&o&&(t.TgZ(0,"span",41),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.formsErrors.middleName," ")}}function M(o,i){if(1&o&&(t.TgZ(0,"option",42),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e.Id),t.xp6(1),t.hij(" ",e.Name," ")}}function H(o,i){if(1&o&&(t.TgZ(0,"span",41),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.formsErrors.roleId," ")}}function E(o,i){if(1&o&&(t.TgZ(0,"span",41),t._uU(1),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.hij(" ",e.formsErrors.email," ")}}function F(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",25),t.TgZ(1,"label",43),t._uU(2,"Email"),t.qZA(),t.TgZ(3,"div",27),t.TgZ(4,"input",44),t.NdJ("blur",function(){t.CHM(e);const r=t.oxw(2);return r.logValidationErrors(r.editUserAccount)}),t.qZA(),t.YNc(5,E,2,1,"span",29),t.qZA(),t.qZA()}if(2&o){const e=t.oxw(2);t.xp6(5),t.Q6J("ngIf",e.formsErrors.email)}}function Q(o,i){if(1&o&&(t.TgZ(0,"span",41),t._uU(1),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.hij(" ",e.formsErrors.password," ")}}function W(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",25),t.TgZ(1,"label",45),t._uU(2,"Password"),t.qZA(),t.TgZ(3,"div",27),t.TgZ(4,"input",46),t.NdJ("blur",function(){t.CHM(e);const r=t.oxw(2);return r.logValidationErrors(r.editUserAccount)}),t.qZA(),t.YNc(5,Q,2,1,"span",29),t.qZA(),t.qZA()}if(2&o){const e=t.oxw(2);t.xp6(5),t.Q6J("ngIf",e.formsErrors.password)}}function O(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",19),t.TgZ(1,"h5",20),t._uU(2),t.qZA(),t.TgZ(3,"button",21),t.NdJ("click",function(){return t.CHM(e),t.oxw().closeBtnClick()}),t.TgZ(4,"span",22),t._uU(5,"\xd7"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"div",23),t.TgZ(7,"form",24),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().onSubmit()}),t.TgZ(8,"div",25),t.TgZ(9,"label",26),t._uU(10,"First Name"),t.qZA(),t.TgZ(11,"div",27),t.TgZ(12,"input",28),t.NdJ("blur",function(){t.CHM(e);const r=t.oxw();return r.logValidationErrors(r.editUserAccount)}),t.qZA(),t.YNc(13,y,2,1,"span",29),t.qZA(),t.qZA(),t.TgZ(14,"div",25),t.TgZ(15,"label",30),t._uU(16,"Last Name"),t.qZA(),t.TgZ(17,"div",27),t.TgZ(18,"input",31),t.NdJ("blur",function(){t.CHM(e);const r=t.oxw();return r.logValidationErrors(r.editUserAccount)}),t.qZA(),t.YNc(19,S,2,1,"span",29),t.qZA(),t.qZA(),t.TgZ(20,"div",25),t.TgZ(21,"label",32),t._uU(22,"Middle Name"),t.qZA(),t.TgZ(23,"div",27),t.TgZ(24,"input",33),t.NdJ("blur",function(){t.CHM(e);const r=t.oxw();return r.logValidationErrors(r.editUserAccount)}),t.qZA(),t.YNc(25,k,2,1,"span",29),t.qZA(),t.qZA(),t.TgZ(26,"div",25),t.TgZ(27,"label",34),t._uU(28,"Role"),t.qZA(),t.TgZ(29,"div",27),t.TgZ(30,"select",35),t.NdJ("blur",function(){t.CHM(e);const r=t.oxw();return r.logValidationErrors(r.editUserAccount)}),t.YNc(31,M,2,2,"option",36),t.qZA(),t.YNc(32,H,2,1,"span",29),t.qZA(),t.qZA(),t.YNc(33,F,6,1,"div",37),t.YNc(34,W,6,1,"div",37),t.TgZ(35,"div",38),t.TgZ(36,"button",39),t.NdJ("click",function(){return t.CHM(e),t.oxw().closeBtnClick()}),t._uU(37," Close "),t.qZA(),t.TgZ(38,"button",40),t._uU(39," Save "),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(2),t.hij("",e.editAddLabel," User Account"),t.xp6(5),t.Q6J("formGroup",e.editUserAccount),t.xp6(6),t.Q6J("ngIf",e.formsErrors.firstName),t.xp6(6),t.Q6J("ngIf",e.formsErrors.lastName),t.xp6(6),t.Q6J("ngIf",e.formsErrors.middleName),t.xp6(6),t.Q6J("ngForOf",e.roles),t.xp6(1),t.Q6J("ngIf",e.formsErrors.roleId),t.xp6(1),t.Q6J("ngIf","Add"===e.editAddLabel),t.xp6(1),t.Q6J("ngIf","Add"===e.editAddLabel),t.xp6(4),t.Q6J("disabled",e.editUserAccount.invalid)}}function z(o,i){if(1&o&&(t.TgZ(0,"option",42),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e.Id),t.xp6(1),t.hij(" ",e.OrganizationName," ")}}function Y(o,i){if(1&o&&(t.TgZ(0,"span",41),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.formsErrors.tenantId," ")}}function L(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._UZ(2,"ngb-highlight",16),t.qZA(),t.TgZ(3,"td"),t.TgZ(4,"em",50),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(2).associationTenant(l.Id)}),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=i.$implicit,n=t.oxw(2);t.xp6(2),t.Q6J("result",e.OrganizationName)("term",n.csearchTerm)}}function R(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",19),t.TgZ(1,"h5",20),t._uU(2,"User Associated Tenants"),t.qZA(),t.TgZ(3,"button",21),t.NdJ("click",function(){return t.CHM(e),t.oxw().closeBtnClick()}),t.TgZ(4,"span",22),t._uU(5,"\xd7"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"div",23),t.TgZ(7,"form",24),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().associationTenant()}),t.TgZ(8,"div",25),t.TgZ(9,"label",47),t._uU(10,"Tenants"),t.qZA(),t.TgZ(11,"div",27),t.TgZ(12,"select",48),t.NdJ("blur",function(){t.CHM(e);const r=t.oxw();return r.logValidationErrors(r.userTenants)}),t.YNc(13,z,2,2,"option",36),t.qZA(),t.YNc(14,Y,2,1,"span",29),t.qZA(),t.TgZ(15,"button",49),t._uU(16," Add "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"table",8),t.TgZ(18,"thead"),t.TgZ(19,"tr"),t.TgZ(20,"th",9),t.NdJ("sort",function(r){return t.CHM(e),t.oxw().onSort(r)}),t._uU(21,"Associated Tenant"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Action"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"tbody"),t.YNc(25,L,5,2,"tr",12),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(7),t.Q6J("formGroup",e.userTenants),t.xp6(6),t.Q6J("ngForOf",e.tenants),t.xp6(1),t.Q6J("ngIf",e.formsErrors.tenantId),t.xp6(1),t.Q6J("disabled",e.userTenants.invalid),t.xp6(10),t.Q6J("ngForOf",e.cfilterTenants)}}const j={asc:"desc",desc:"","":"asc"};let B=(()=>{class o{constructor(){this.sortable=null,this.direction="",this.sort=new t.vpe}rotate(){this.direction=j[this.direction],this.sort.emit({column:this.sortable,direction:this.direction})}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275dir=t.lG2({type:o,selectors:[["th","sortable",""]],hostVars:4,hostBindings:function(e,n){1&e&&t.NdJ("click",function(){return n.rotate()}),2&e&&t.ekj("asc","asc"===n.direction)("desc","desc"===n.direction)},inputs:{sortable:"sortable",direction:"direction"},outputs:{sort:"sort"}}),o})(),V=(()=>{class o{constructor(e,n,r,l){this.userAccountsService=e,this.tenantsServ=n,this.fb=r,this.modalService=l,this.sortUserAccountList=null,this.filterUserAccount=null,this.cfilterUserAccount=null,this.page=1,this.pageSize=2,this.editUserAccount=Object.create(null),this.userTenants=Object.create(null),this.editAddLabel="Edit",this.userAccountDetail=null,this.totalLengthOfCollection=0,this.roles=[],this.tenants=[],this.cfilterTenants=[],this.cpage=1,this.cpageSize=4,this.headers=Object.create(null),this.ValidationMessage={fullName:{required:"full Name is required."},UserName:{required:"User Name is required."},email:{required:"Email is required.",Email:"Not a email"}},this.formsErrors={}}ngOnInit(){this.editUserAccount=this.fb.group({id:[null],firstName:["",s.kI.required],password:["","Add"===this.editAddLabel&&s.kI.required],lastName:["",s.kI.required],middleName:[""],roleId:["",[s.kI.required]],email:["","Add"===this.editAddLabel&&s.kI.required]}),this.userTenants=this.fb.group({userId:[""],tenantId:["",s.kI.required]}),this.userAccountsService.getRoles().subscribe(({IS_SUCCESS:e,RESPONSE:n})=>{e&&(this.roles=n)},e=>{console.log(e)}),this.userAccountsService.getUsers().subscribe(({IS_SUCCESS:e,RESPONSE:n})=>{e&&(this.filterUserAccount=n,this.cfilterUserAccount=n,this.sortUserAccountList=n,this.totalLengthOfCollection=this.cpageSize=this.cfilterUserAccount.length)},e=>{console.log(e)}),this.tenantsServ.getTenants().subscribe(({IS_SUCCESS:e,RESPONSE:n})=>{e&&(this.tenants=n)},e=>{console.log(e)})}onSort({column:e}){this.headers.forEach(r=>{r.sortable!==e&&(r.direction="")})}logValidationErrors(e){}openModal(e,n){this.modalService.open(e,{centered:!0,backdrop:"static"}),"string"==typeof n?(this.userTenants.patchValue({userId:n}),this.associatedTenantsRefresh(n)):n&&"object"==typeof n?(this.editAddLabel="Edit",this.editUserAccount.patchValue({firstName:n.FirstName,lastName:n.LastName,middleName:n.MiddleName,id:n.Id,roleId:n.RoleId})):this.editAddLabel="Add"}closeBtnClick(){this.modalService.dismissAll(),this.ngOnInit(),this.cfilterTenants=[]}onSubmit(){let e;if("Add"===this.editAddLabel)e=this.userAccountsService.createUser(this.editUserAccount.value);else{const n=this.editUserAccount.value;delete n.password,delete n.email,e=this.userAccountsService.updateUser(n)}e.subscribe(n=>{this.closeBtnClick()},n=>{console.log(n)})}findRoleName(e){var n;return null===(n=this.roles.find(r=>r.Id===e))||void 0===n?void 0:n.Name}associationTenant(e){let n;n=e?this.userAccountsService.deleteUserTenants({userId:this.userTenants.value.userId,tenantId:e}):this.userAccountsService.addTenantsToUser(this.userTenants.value),n.subscribe(r=>{this.associatedTenantsRefresh(this.userTenants.value.userId)},r=>{console.log(r)})}associatedTenantsRefresh(e){this.userAccountsService.getTenantsByUserId(e).subscribe(({IS_SUCCESS:n,RESPONSE:r})=>{n&&r.Tenants&&(this.cfilterTenants=r.Tenants)},n=>{console.log(n)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(h),t.Y36(g),t.Y36(s.qu),t.Y36(_.FF))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-useraccounts"]],viewQuery:function(e,n){if(1&e&&t.Gf(B,5),2&e){let r;t.iGM(r=t.CRH())&&(n.headers=r)}},decls:31,vars:5,consts:[[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-body"],[1,"card-title","mb-0"],[1,"lstick"],[1,"d-flex","mt-3"],["type","button",1,"btn","btn-primary","ml-auto",3,"click"],[1,"table","table-striped","border","mt-4"],["sortable","Name",3,"sort"],["sortable","UserName",3,"sort"],["sortable","Email",3,"sort"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between","p-2"],["editModal",""],["tenantAssociation",""],[3,"result","term"],[1,"ti-pencil","text-info","m-r-10","pointer",3,"click"],[1,"ti-layers","text-info","pointer",3,"click"],[1,"modal-header"],["id","editLabel",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"form-group","row"],["for","firstName",1,"col-sm-4","col-form-label"],[1,"col-sm-8"],["type","text","formControlName","firstName","id","firstName",1,"form-control",3,"blur"],["class","help-block",4,"ngIf"],["for","lastName",1,"col-sm-4","col-form-label"],["type","text","formControlName","lastName","id","lastName",1,"form-control",3,"blur"],["for","middleName",1,"col-sm-4","col-form-label"],["type","text","formControlName","middleName","id","middleName",1,"form-control",3,"blur"],["for","roleId",1,"col-sm-4","col-form-label"],["formControlName","roleId","id","roleId",1,"form-control",3,"blur"],[3,"value",4,"ngFor","ngForOf"],["class","form-group row",4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-dark",3,"click"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"help-block"],[3,"value"],["for","email",1,"col-sm-4","col-form-label"],["type","text","formControlName","email","id","email",1,"form-control",3,"blur"],["for","password",1,"col-sm-4","col-form-label"],["type","password","formControlName","password","id","password",1,"form-control",3,"blur"],["for","tenantId",1,"col-sm-2","col-form-label"],["formControlName","tenantId","id","tenantId",1,"form-control",3,"blur"],["type","submit",1,"btn","btn-primary","col-sm-2",3,"disabled"],[1,"ti-trash","text-info","m-r-10","pointer",3,"click"]],template:function(e,n){if(1&e){const r=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"h4",4),t._UZ(5,"span",5),t._uU(6,"User Accounts "),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){t.CHM(r);const c=t.MAs(28);return n.openModal(c,null)}),t._uU(9," + Add User Account "),t.qZA(),t.qZA(),t.TgZ(10,"table",8),t.TgZ(11,"thead"),t.TgZ(12,"tr"),t.TgZ(13,"th",9),t.NdJ("sort",function(c){return n.onSort(c)}),t._uU(14,"First Name"),t.qZA(),t.TgZ(15,"th",10),t.NdJ("sort",function(c){return n.onSort(c)}),t._uU(16,"Last Name"),t.qZA(),t.TgZ(17,"th",11),t.NdJ("sort",function(c){return n.onSort(c)}),t._uU(18,"Middle Name"),t.qZA(),t.TgZ(19,"th",11),t.NdJ("sort",function(c){return n.onSort(c)}),t._uU(20,"Role"),t.qZA(),t.TgZ(21,"th"),t._uU(22,"Action"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"tbody"),t.YNc(24,I,12,8,"tr",12),t.ALo(25,"slice"),t.qZA(),t.qZA(),t._UZ(26,"div",13),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(27,O,40,10,"ng-template",null,14,t.W1O),t.YNc(29,R,26,5,"ng-template",null,15,t.W1O)}2&e&&(t.xp6(24),t.Q6J("ngForOf",t.Dn7(25,1,n.cfilterUserAccount,(n.cpage-1)*n.cpageSize,(n.cpage-1)*n.cpageSize+n.cpageSize)))},directives:[d.sg,_._h,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,d.O5,s.EJ,s.YN,s.Kr],pipes:[d.OU],styles:[""]}),o})(),f=(()=>{class o{constructor(e){this.http=e}getWidgets(){return this.http.get(a.pU.bohoWidgetsApi.endpoint)}getRolesByWidgetId(e){return this.http.get(a.pU.bohoWidgetsApi.endpoint+"/"+e+"/roles")}addRoleToWidget(e){return this.http.post(a.pU.bohoWidgetsApi.endpoint+"/AddRoles",{widgetId:e.widgetId,roleIds:[e.roleId]})}deleteWidgetRole(e){const n={headers:new m.WM({"Content-Type":"application/json"}),body:{widgetId:e.widgetId,roleIds:[e.roleId]}};return this.http.delete(a.pU.bohoWidgetsApi.endpoint+"/DeleteRoles",n)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(m.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})();function G(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"ngb-highlight",11),t.qZA(),t.TgZ(5,"td"),t.TgZ(6,"i",12),t.NdJ("click",function(){const l=t.CHM(e).$implicit,c=t.oxw(),p=t.MAs(21);return c.openModal(p,l.Id)}),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=i.$implicit,n=t.oxw();t.xp6(2),t.Oqu(e.Id),t.xp6(2),t.Q6J("result",e.Name)("term",n.csearchTerm)}}function D(o,i){if(1&o&&(t.TgZ(0,"option",26),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e.Id),t.xp6(1),t.hij(" ",e.Name," ")}}function $(o,i){if(1&o&&(t.TgZ(0,"span",27),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.formsErrors.roleId," ")}}function X(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._UZ(2,"ngb-highlight",11),t.qZA(),t.TgZ(3,"td"),t.TgZ(4,"em",28),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(2).associatedRoles(l.Id)}),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=i.$implicit,n=t.oxw(2);t.xp6(2),t.Q6J("result",e.Name)("term",n.csearchTerm)}}function K(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"h5",14),t._uU(2,"Roles Association"),t.qZA(),t.TgZ(3,"button",15),t.NdJ("click",function(){return t.CHM(e),t.oxw().closeBtnClick()}),t.TgZ(4,"span",16),t._uU(5,"\xd7"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"div",17),t.TgZ(7,"div",17),t.TgZ(8,"form",18),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().associatedRoles()}),t.TgZ(9,"div",19),t.TgZ(10,"label",20),t._uU(11,"Roles"),t.qZA(),t.TgZ(12,"div",21),t.TgZ(13,"select",22),t.NdJ("blur",function(){t.CHM(e);const r=t.oxw();return r.logValidationErrors(r.widgetRoles)}),t.YNc(14,D,2,2,"option",23),t.qZA(),t.YNc(15,$,2,1,"span",24),t.qZA(),t.TgZ(16,"button",25),t._uU(17," Add "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"table",6),t.TgZ(19,"thead"),t.TgZ(20,"tr"),t.TgZ(21,"th",7),t.NdJ("sort",function(r){return t.CHM(e),t.oxw().onSort(r)}),t._uU(22,"Associated Role"),t.qZA(),t.TgZ(23,"th"),t._uU(24,"Action"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(25,"tbody"),t.YNc(26,X,5,2,"tr",8),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(8),t.Q6J("formGroup",e.widgetRoles),t.xp6(6),t.Q6J("ngForOf",e.roles),t.xp6(1),t.Q6J("ngIf",e.formsErrors.roleId),t.xp6(1),t.Q6J("disabled",e.widgetRoles.invalid),t.xp6(10),t.Q6J("ngForOf",e.cfilterRoles)}}const P={asc:"desc",desc:"","":"asc"};let tt=(()=>{class o{constructor(){this.sortable=null,this.direction="",this.sort=new t.vpe}rotate(){this.direction=P[this.direction],this.sort.emit({column:this.sortable,direction:this.direction})}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275dir=t.lG2({type:o,selectors:[["th","sortable",""]],hostVars:4,hostBindings:function(e,n){1&e&&t.NdJ("click",function(){return n.rotate()}),2&e&&t.ekj("asc","asc"===n.direction)("desc","desc"===n.direction)},inputs:{sortable:"sortable",direction:"direction"},outputs:{sort:"sort"}}),o})();const et=[{path:"",children:[{path:"tenants",component:J,data:{title:"Tenants",urls:[{title:"Tenant",url:"/tenants"}]}},{path:"useraccounts",component:V,data:{title:"UserAccounts",urls:[{title:"UserAccount",url:"/useraccounts"}]}},{path:"widgets",component:(()=>{class o{constructor(e,n,r,l){this.widgetsService=e,this.fb=n,this.modalService=r,this.userAccountsService=l,this.widgetList=this.widgetsService.getWidgets(),this.sortWidgetList=null,this.filterWidget=null,this.cfilterWidget=null,this.page=1,this.pageSize=2,this.editUserAccount=Object.create(null),this.widgetRoles=Object.create(null),this.editAddLabel="Edit",this.widgetDetail=null,this.totalLengthOfCollection=0,this.cfilterRoles=[],this.roles=[],this.cpage=1,this.cpageSize=4,this.headers=Object.create(null),this.ValidationMessage={fullName:{required:"full Name is required."},UserName:{required:"User Name is required."},email:{required:"Email is required.",Email:"Not a email"}},this.formsErrors={}}ngOnInit(){this.editUserAccount=this.fb.group({Name:["",s.kI.required]}),this.widgetRoles=this.fb.group({widgetId:[""],roleId:["",s.kI.required]}),this.userAccountsService.getRoles().subscribe(({IS_SUCCESS:e,RESPONSE:n})=>{e&&(this.roles=n)},e=>{console.log(e)}),this.widgetsService.getWidgets().subscribe(({IS_SUCCESS:e,RESPONSE:n})=>{e&&(this.filterWidget=n,this.cfilterWidget=n,this.sortWidgetList=n,this.totalLengthOfCollection=this.cpageSize=this.cfilterWidget.length)},e=>{console.log(e)})}onSort({column:e}){this.headers.forEach(r=>{r.sortable!==e&&(r.direction="")})}logValidationErrors(e){}openModal(e,n){this.modalService.open(e,{centered:!0,backdrop:"static"}),"string"==typeof n&&(this.widgetRoles.patchValue({widgetId:n}),this.associatedRolesRefresh(n))}closeBtnClick(){this.modalService.dismissAll(),this.ngOnInit()}onSubmit(){this.ngOnInit()}associatedRoles(e){let n;n=e?this.widgetsService.deleteWidgetRole({widgetId:this.widgetRoles.value.widgetId,roleId:e}):this.widgetsService.addRoleToWidget(this.widgetRoles.value),n.subscribe(r=>{this.associatedRolesRefresh(this.widgetRoles.value.widgetId)},r=>{console.log(r)})}associatedRolesRefresh(e){this.widgetsService.getRolesByWidgetId(e).subscribe(({IS_SUCCESS:n,RESPONSE:r})=>{n&&r.Roles&&(this.cfilterRoles=r.Roles)},n=>{console.log(n)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f),t.Y36(s.qu),t.Y36(_.FF),t.Y36(h))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-widgets"]],viewQuery:function(e,n){if(1&e&&t.Gf(tt,5),2&e){let r;t.iGM(r=t.CRH())&&(n.headers=r)}},decls:22,vars:5,consts:[[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-body"],[1,"card-title","mb-0"],[1,"lstick"],[1,"table","table-striped","border","mt-4"],["sortable","Name",3,"sort"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between","p-2"],["editModal",""],[3,"result","term"],[1,"ti-layers","text-info","m-r-10","pointer",3,"click"],[1,"modal-header"],["id","editLabel",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"form-group","row"],["for","roleId",1,"col-sm-2","col-form-label"],[1,"col-sm-8"],["formControlName","roleId","id","roleId",1,"form-control",3,"blur"],[3,"value",4,"ngFor","ngForOf"],["class","help-block",4,"ngIf"],["type","submit",1,"btn","btn-primary","col-sm-2",3,"disabled"],[3,"value"],[1,"help-block"],[1,"ti-trash","text-info","m-r-10","pointer",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"h4",4),t._UZ(5,"span",5),t._uU(6,"Widgets"),t.qZA(),t.TgZ(7,"table",6),t.TgZ(8,"thead"),t.TgZ(9,"tr"),t.TgZ(10,"th"),t._uU(11,"ID"),t.qZA(),t.TgZ(12,"th",7),t.NdJ("sort",function(l){return n.onSort(l)}),t._uU(13,"Name"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Action"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"tbody"),t.YNc(17,G,7,3,"tr",8),t.ALo(18,"slice"),t.qZA(),t.qZA(),t._UZ(19,"div",9),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(20,K,27,5,"ng-template",null,10,t.W1O)),2&e&&(t.xp6(17),t.Q6J("ngForOf",t.Dn7(18,1,n.cfilterWidget,(n.cpage-1)*n.cpageSize,(n.cpage-1)*n.cpageSize+n.cpageSize)))},directives:[d.sg,_._h,s._Y,s.JL,s.sg,s.EJ,s.JJ,s.u,d.O5,s.YN,s.Kr],pipes:[d.OU],styles:[""]}),o})(),data:{title:"Widgets",urls:[{title:"Widgets",url:"/widgets"}]}}]}];let nt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[g,h,f],imports:[[d.ez,T.Bz.forChild(et),s.u5,s.UX,_.IJ]]}),o})()}}]);