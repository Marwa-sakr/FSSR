"use strict";(self.webpackChunkspire=self.webpackChunkspire||[]).push([[289],{2289:(O,h,o)=>{o.r(h),o.d(h,{SemesterComponent:()=>Y});var T=o(4933),m=o(6286),D=o(1388),c=o(8381),f=o(4755),i=o(9401),d=o(9114),M=o(6737),g=o(8097),C=o(1728),u=o(8280),e=o(2223),S=o(4242);function k(a,s){1&a&&(e.TgZ(0,"mat-error"),e._uU(1,"Name is required"),e.qZA())}function I(a,s){1&a&&(e.TgZ(0,"mat-error"),e._uU(1," start Date is required "),e.qZA())}function E(a,s){1&a&&(e.TgZ(0,"mat-error"),e._uU(1," End Date Date is required "),e.qZA())}function J(a,s){1&a&&(e.TgZ(0,"mat-error"),e._uU(1," The last Enrollment date for the course is required "),e.qZA())}function w(a,s){1&a&&(e.TgZ(0,"mat-error"),e._uU(1," The last Withdrawal Date for the course is required "),e.qZA())}function U(a,s){if(1&a){const t=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.Add())}),e._uU(1," Add "),e.qZA()}if(2&a){const t=e.oxw();e.Q6J("disabled",t.form.invalid)}}function q(a,s){if(1&a){const t=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.Edit())}),e._uU(1," Edit "),e.qZA()}if(2&a){const t=e.oxw();e.Q6J("disabled",t.form.invalid)}}let _=(()=>{class a{constructor(t,r,n,l,p){this.fb=t,this.dialogRef=r,this.semesterService=n,this.datePipe=l,this.data=p,this.form=this.fb.group({id:[0],semester_Name:["",i.kI.required],start_Date:[new Date,i.kI.required],end_Date:[new Date,i.kI.required],lastCourseEnrollmentDate:[new Date,i.kI.required],lastCourseWithdrawalDate:[new Date,i.kI.required]}),this.action="add",this.errorStateMatcher=new M.o}ngOnInit(){if(this.action=this.data.action,"edit"==this.action){let t={...this.data.obj};t.end_Date=this.datePipe.transform(t.end_Date,"yyyy-MM-dd"),t.start_Date=this.datePipe.transform(t.start_Date,"yyyy-MM-dd"),t.lastCourseEnrollmentDate=this.datePipe.transform(t.lastCourseEnrollmentDate,"yyyy-MM-dd"),t.lastCourseWithdrawalDate=this.datePipe.transform(t.lastCourseWithdrawalDate,"yyyy-MM-dd"),this.form.patchValue(t)}}Add(){this.semesterService.add(c.KG.Add,this.form.value).subscribe({next:t=>{this.dialogRef.close()},error:t=>{console.log(t)}})}Edit(){this.semesterService.Update(c.KG.Update,this.form.value).subscribe({next:t=>this.dialogRef.close(),error:t=>console.log(t)})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(i.qu),e.Y36(m.so),e.Y36(S.v),e.Y36(f.uU),e.Y36(m.WI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-semester-dialog"]],standalone:!0,features:[e.jDz],decls:46,vars:21,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"row","mt-2",3,"formGroup"],["appearance","outline",1,"col-md-6"],["matInput","","type","text","formControlName","semester_Name",3,"errorStateMatcher"],[4,"ngIf"],["matInput","","formControlName","start_Date",3,"matDatepicker","errorStateMatcher"],["matIconSuffix","",3,"for"],["Statr_picker",""],["matInput","","formControlName","end_Date",3,"matDatepicker","errorStateMatcher"],["picker",""],["matInput","","formControlName","lastCourseEnrollmentDate",3,"matDatepicker","errorStateMatcher"],["lastEnrol",""],["matInput","","formControlName","lastCourseWithdrawalDate",3,"matDatepicker","errorStateMatcher"],["lastWithdrawal",""],["mat-dialog-actions","",1,"d-flex","w-100","justify-content-center","gap-2"],["mat-raised-button","","color","primary",3,"disabled","click",4,"ngIf"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary",3,"disabled","click"]],template:function(t,r){if(1&t&&(e.TgZ(0,"h1",0),e._uU(1,"Semester Form"),e.qZA(),e.TgZ(2,"div",1)(3,"form",2)(4,"mat-form-field",3)(5,"mat-label"),e._uU(6,"Semester Name"),e.qZA(),e._UZ(7,"input",4),e.YNc(8,k,2,0,"mat-error",5),e.qZA(),e.TgZ(9,"mat-form-field",3)(10,"mat-label"),e._uU(11,"Start Date"),e.qZA(),e._UZ(12,"input",6)(13,"mat-datepicker-toggle",7)(14,"mat-datepicker",null,8),e.YNc(16,I,2,0,"mat-error",5),e.qZA(),e.TgZ(17,"mat-form-field",3)(18,"mat-label"),e._uU(19,"End Date"),e.qZA(),e._UZ(20,"input",9)(21,"mat-datepicker-toggle",7)(22,"mat-datepicker",null,10),e.YNc(24,E,2,0,"mat-error",5),e.qZA(),e.TgZ(25,"mat-form-field",3)(26,"mat-label"),e._uU(27,"Last Enrollment Date"),e.qZA(),e._UZ(28,"input",11)(29,"mat-datepicker-toggle",7)(30,"mat-datepicker",null,12),e.YNc(32,J,2,0,"mat-error",5),e.qZA(),e.TgZ(33,"mat-form-field",3)(34,"mat-label"),e._uU(35,"Last Withdrawal Date"),e.qZA(),e._UZ(36,"input",13)(37,"mat-datepicker-toggle",7)(38,"mat-datepicker",null,14),e.YNc(40,w,2,0,"mat-error",5),e.qZA()()(),e.TgZ(41,"div",15),e.YNc(42,U,2,1,"button",16),e.YNc(43,q,2,1,"button",16),e.TgZ(44,"button",17),e.NdJ("click",function(){return r.dialogRef.close()}),e._uU(45," Cancel "),e.qZA()()),2&t){const n=e.MAs(15),l=e.MAs(23),p=e.MAs(31),A=e.MAs(39);let Z,N,b,y,v;e.xp6(3),e.Q6J("formGroup",r.form),e.xp6(4),e.Q6J("errorStateMatcher",r.errorStateMatcher),e.xp6(1),e.Q6J("ngIf",null==(Z=r.form.get("semster_Name"))?null:Z.hasError("required")),e.xp6(4),e.Q6J("matDatepicker",n)("errorStateMatcher",r.errorStateMatcher),e.xp6(1),e.Q6J("for",n),e.xp6(3),e.Q6J("ngIf",null==(N=r.form.get("start_Date"))?null:N.hasError("required")),e.xp6(4),e.Q6J("matDatepicker",l)("errorStateMatcher",r.errorStateMatcher),e.xp6(1),e.Q6J("for",l),e.xp6(3),e.Q6J("ngIf",null==(b=r.form.get("end_Date"))?null:b.hasError("required")),e.xp6(4),e.Q6J("matDatepicker",p)("errorStateMatcher",r.errorStateMatcher),e.xp6(1),e.Q6J("for",p),e.xp6(3),e.Q6J("ngIf",null==(y=r.form.get("lastCourseEnrollmentDate"))?null:y.hasError("required")),e.xp6(4),e.Q6J("matDatepicker",A)("errorStateMatcher",r.errorStateMatcher),e.xp6(1),e.Q6J("for",A),e.xp6(3),e.Q6J("ngIf",null==(v=r.form.get("lastCourseWithdrawalDate"))?null:v.hasError("required")),e.xp6(2),e.Q6J("ngIf","add"==r.action),e.xp6(1),e.Q6J("ngIf","edit"==r.action)}},dependencies:[f.O5,d.lN,d.KE,d.hX,d.TO,d.R9,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,g.c,g.Nt,C.ot,C.lW,u.FA,u.Mq,u.hl,u.nW,m.Is,m.uh,m.xY,m.H8],encapsulation:2}),a})();var x=o(823);const Q=function(){return["Home"]};let Y=(()=>{class a{constructor(t,r,n,l){this.SemesterService=t,this.datePipe=r,this.dialog=n,this.SwalService=l,this.dataSource=[],this.displayedColumnsForGeneric=[{propertyName:"id",ColumnName:"Id"},{propertyName:"semester_Name",ColumnName:"Name"},{propertyName:"start_Date",ColumnName:"start Date"},{propertyName:"end_Date",ColumnName:"end Date"},{propertyName:"lastCourseEnrollmentDate",ColumnName:"Last enroll date"},{propertyName:"lastCourseWithdrawalDate",ColumnName:"Last drop date"}]}ngOnInit(){this.SemesterService.getAll(c.KG.getAll).subscribe({next:t=>{this.dataSource=t,this.dataSource.forEach(r=>{r.end_Date=this.datePipe.transform(r.end_Date,"mediumDate"),r.start_Date=this.datePipe.transform(r.start_Date,"mediumDate"),r.lastCourseEnrollmentDate=this.datePipe.transform(r.lastCourseEnrollmentDate,"mediumDate"),r.lastCourseWithdrawalDate=this.datePipe.transform(r.lastCourseWithdrawalDate,"mediumDate")})},error:t=>{console.log(t)}})}Add(){this.dialog.open(_,{width:"50%",data:new D.A2}).afterClosed().subscribe(r=>this.ngOnInit())}edit(t){this.dialog.open(_,{width:"50%",data:new D.A2("edit",t)}).afterClosed().subscribe(n=>this.ngOnInit())}Delete(t){t.swalResponse&&this.SemesterService.Delete(c.KG.Delete,t.element.id).subscribe({next:r=>{this.ngOnInit(),this.SwalService.Success()},error:r=>this.SwalService.Fail(r.error.message)})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(S.v),e.Y36(f.uU),e.Y36(m.uw),e.Y36(x.J))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-academic-semester"]],standalone:!0,features:[e.jDz],decls:1,vars:5,consts:[["BreadCrumbTitle","Semester",3,"dataSource","ColumnDefs","BreadCrumbActive_item","BreadCrumbItems","OnAddNewClick","OnEditClick","OnDeleteClick"]],template:function(t,r){1&t&&(e.TgZ(0,"my-table",0),e.NdJ("OnAddNewClick",function(){return r.Add()})("OnEditClick",function(l){return r.edit(l)})("OnDeleteClick",function(l){return r.Delete(l)}),e.qZA()),2&t&&e.Q6J("dataSource",r.dataSource)("ColumnDefs",r.displayedColumnsForGeneric)("BreadCrumbActive_item","Semester")("BreadCrumbItems",e.DdM(4,Q))},dependencies:[T.bC,m.Is],encapsulation:2}),a})()}}]);