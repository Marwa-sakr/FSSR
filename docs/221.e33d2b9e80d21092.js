"use strict";(self.webpackChunkspire=self.webpackChunkspire||[]).push([[221],{5221:(y,d,n)=>{n.r(d),n.d(d,{AuthenticationModule:()=>U});var c=n(4755),r=n(9401),m=n(2480),g=n(9186);let h=(()=>{class e{}return e.loginFormInvalid="Email and Password are required !",e})();var t=n(2223),p=n(3825),f=n(823),v=n(1728),l=n(9114),Z=n(430),S=n(8097);function A(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Email is required "),t.qZA())}function T(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Password is required "),t.qZA())}function b(e,a){if(1&e&&(t.TgZ(0,"div",24),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Oqu(o.error)}}const w=[{path:"",redirectTo:"signin",pathMatch:"full"},{path:"signin",component:(()=>{class e extends g.n{constructor(o,i,s,u){super(),this.formBuilder=o,this.router=i,this.authService=s,this.SwalService=u,this.authForm=new r.cw({}),this.submitted=!1,this.loading=!1,this.error="",this.hide=!0}ngOnInit(){this.authForm=this.formBuilder.group({email:["",r.kI.required],password:["",r.kI.required]})}onSubmit(){this.submitted=!0,this.loading=!0,this.error="",this.authForm.invalid?this.error=h.loginFormInvalid:this.subs.sink=this.authService.login(this.authForm.value.email,this.authForm.value.password).subscribe({next:o=>{let i=o.user;localStorage.getItem("token")?i.roles.toLowerCase().includes("admin")?this.router.navigate(["/restriction-types"]):i.roles.toLowerCase().includes("professor")?this.router.navigate(["/courses-teached"]):this.router.navigate(["/student-courses"]):this.error=h.loginFormInvalid},error:o=>{this.error=o.error,this.submitted=!1,this.loading=!1,console.log(o)}})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(r.qu),t.Y36(m.F0),t.Y36(p.e8),t.Y36(f.J))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-signin"]],features:[t.qOj],decls:36,vars:11,consts:[[1,"auth-container"],[1,"row","auth-main"],[1,"col-sm-6","px-0","d-none","d-sm-block"],[1,"left-img",2,"background-image","url(assets/images/pages/home-3.png)"],[1,"col-sm-6","auth-form-section"],[1,"form-section"],[1,"auth-wrapper"],[1,"welcome-msg"],[1,"login-title"],[1,"validate-form",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","mb-2"],["appearance","outline",1,"example-full-width"],["matInput","","formControlName","email"],["matSuffix","",1,"material-icons-two-tone","color-icon","p-3"],[4,"ngIf"],[1,"col-xl-12col-lg-12","col-md-12","col-sm-12","mb-2"],["matInput","","formControlName","password",3,"type"],["href","#","onClick","return false;","matSuffix","",3,"click"],["matSuffix","",1,"material-icons-two-tone","color-icon","m-3"],["class","alert alert-danger mt-3 mb-0",4,"ngIf"],[1,"container-auth-form-btn"],[2,"text-align","center"],["mat-raised-button","","color","primary","type","submit",1,"auth-form-btn",3,"disabled"],[1,"alert","alert-danger","mt-3","mb-0"]],template:function(o,i){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"div",3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"h2",7),t._uU(8," Welcome to FSSR "),t.qZA(),t.TgZ(9,"h2",8),t._uU(10,"Sign in"),t.qZA(),t.TgZ(11,"form",9),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(12,"div",10)(13,"div",11)(14,"mat-form-field",12)(15,"mat-label"),t._uU(16,"Email"),t.qZA(),t._UZ(17,"input",13),t.TgZ(18,"mat-icon",14),t._uU(19,"face"),t.qZA(),t.YNc(20,A,2,0,"mat-error",15),t.qZA()()(),t.TgZ(21,"div",10)(22,"div",16)(23,"mat-form-field",12)(24,"mat-label"),t._uU(25,"Password"),t.qZA(),t._UZ(26,"input",17),t.TgZ(27,"a",18),t.NdJ("click",function(){return i.hide=!i.hide}),t.TgZ(28,"mat-icon",19),t._uU(29),t.qZA()(),t.YNc(30,T,2,0,"mat-error",15),t.qZA()()(),t.YNc(31,b,2,1,"div",20),t.TgZ(32,"div",21)(33,"div",22)(34,"button",23),t._uU(35,"Login"),t.qZA()()()()()()()()()),2&o){let s,u;t.xp6(11),t.Q6J("formGroup",i.authForm),t.xp6(9),t.Q6J("ngIf",null==(s=i.authForm.get("email"))?null:s.hasError("required")),t.xp6(6),t.Q6J("type",i.hide?"password":"text"),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",i.hide),t.xp6(2),t.hij(" ",i.hide?"visibility_off":"visibility",""),t.xp6(1),t.Q6J("ngIf",null==(u=i.authForm.get("password"))?null:u.hasError("required")),t.xp6(1),t.Q6J("ngIf",i.error),t.xp6(3),t.ekj("auth-spinner",i.loading),t.Q6J("disabled",i.loading||i.authForm.invalid)}},dependencies:[c.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,v.lW,l.KE,l.hX,l.TO,l.R9,Z.Hw,S.Nt]}),e})()},{path:"page404",component:n(1991).J}];let I=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.Bz.forChild(w),m.Bz]}),e})();var J=n(4683);let U=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,r.u5,r.UX,I,J.m]}),e})()}}]);