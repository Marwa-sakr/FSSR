"use strict";(self.webpackChunkspire=self.webpackChunkspire||[]).push([[536],{8536:(Q,M,n)=>{n.d(M,{P:()=>er});var U=n(4755),_=n(9114),a=n(9401),P=n(8097),Z=n(1728),c=n(6286),v=n(6737),g=n(8280),u=n(4867),T=n(727),d=n(7188),m=n(8381),p=n(787),f=n(430),r=n(2223),h=n(4242),S=n(823),A=n(1217);function x(e,i){1&e&&(r.TgZ(0,"mat-error"),r._uU(1,"UserName is required"),r.qZA())}function O(e,i){1&e&&(r.TgZ(0,"mat-error"),r._uU(1,"Email is required"),r.qZA())}function y(e,i){1&e&&(r.TgZ(0,"mat-error"),r._uU(1,"Email is not correct"),r.qZA())}function J(e,i){1&e&&(r.TgZ(0,"mat-error"),r._uU(1,"Phone number is required"),r.qZA())}function Y(e,i){1&e&&(r.TgZ(0,"mat-error"),r._uU(1,"password is required"),r.qZA())}function R(e,i){1&e&&(r.TgZ(0,"mat-error"),r._uU(1,"SSN is required"),r.qZA())}function B(e,i){1&e&&(r.TgZ(0,"mat-error"),r._uU(1,"First name is required"),r.qZA())}function K(e,i){1&e&&(r.TgZ(0,"mat-error"),r._uU(1,"Last name is required"),r.qZA())}function L(e,i){1&e&&(r.TgZ(0,"mat-error"),r._uU(1," Birth Date is required "),r.qZA())}function k(e,i){if(1&e&&(r.TgZ(0,"mat-option",29),r._uU(1),r.qZA()),2&e){const o=i.$implicit;r.Q6J("value",o.id),r.xp6(1),r.hij(" ",o.dep_Name," ")}}function w(e,i){1&e&&(r.TgZ(0,"mat-error"),r._uU(1," Department is required "),r.qZA())}function W(e,i){1&e&&(r.TgZ(0,"mat-error"),r._uU(1,"qualification is required"),r.qZA())}function j(e,i){if(1&e&&(r.ynx(0),r.TgZ(1,"form",30)(2,"mat-form-field",31)(3,"mat-label"),r._uU(4,"Qualification"),r.qZA(),r._UZ(5,"input",32),r.YNc(6,W,2,0,"mat-error",5),r.qZA()(),r.BQk()),2&e){const o=i.$implicit,t=i.index,s=r.oxw(2);let l;r.xp6(1),r.Q6J("formGroupName",t),r.xp6(4),r.Q6J("errorStateMatcher",s.errorStateMatcher),r.xp6(1),r.Q6J("ngIf",null==(l=o.get("qualification"))?null:l.hasError("required"))}}function G(e,i){if(1&e){const o=r.EpF();r.TgZ(0,"form",2)(1,"mat-form-field",22)(2,"mat-label"),r._uU(3,"Department"),r.qZA(),r.TgZ(4,"mat-select",23),r.YNc(5,k,2,2,"mat-option",24),r.qZA(),r.YNc(6,w,2,0,"mat-error",5),r.qZA(),r._UZ(7,"hr")(8,"br"),r.TgZ(9,"p"),r._uU(10,"Add Qaultification"),r.qZA(),r.TgZ(11,"button",25),r.NdJ("click",function(){r.CHM(o);const s=r.oxw();return r.KtG(s.addProfQuality())}),r.TgZ(12,"mat-icon")(13,"span",26),r._uU(14," add_circle "),r.qZA()()(),r.ynx(15,27),r.YNc(16,j,7,3,"ng-container",28),r.BQk(),r.qZA()}if(2&e){const o=r.oxw();let t;r.Q6J("formGroup",o.porfForm),r.xp6(5),r.Q6J("ngForOf",o.departments),r.xp6(1),r.Q6J("ngIf",null==(t=o.porfForm.get("departmentId"))?null:t.hasError("required")),r.xp6(10),r.Q6J("ngForOf",o.profQualificationsFormArray.controls)}}function V(e,i){1&e&&(r.TgZ(0,"mat-error"),r._uU(1,"Status is required"),r.qZA())}function H(e,i){1&e&&(r.TgZ(0,"mat-error"),r._uU(1,"Qualification is required"),r.qZA())}function $(e,i){if(1&e&&(r.TgZ(0,"mat-option",29),r._uU(1),r.qZA()),2&e){const o=i.$implicit;r.Q6J("value",o.id),r.xp6(1),r.hij(" ",o.program_Name," ")}}function X(e,i){1&e&&(r.TgZ(0,"mat-error"),r._uU(1," Please choose academic program "),r.qZA())}function z(e,i){if(1&e&&(r.TgZ(0,"form",2)(1,"mat-form-field",33)(2,"mat-label"),r._uU(3,"status"),r.qZA(),r._UZ(4,"input",34),r.YNc(5,V,2,0,"mat-error",5),r.qZA(),r.TgZ(6,"mat-form-field",33)(7,"mat-label"),r._uU(8,"Qualification"),r.qZA(),r._UZ(9,"input",32),r.YNc(10,H,2,0,"mat-error",5),r.qZA(),r.TgZ(11,"mat-form-field",35)(12,"mat-label"),r._uU(13,"Program"),r.qZA(),r.TgZ(14,"mat-select",36),r.YNc(15,$,2,2,"mat-option",24),r.qZA(),r.YNc(16,X,2,0,"mat-error",5),r.qZA()()),2&e){const o=r.oxw();let t,s,l;r.Q6J("formGroup",o.studentForm),r.xp6(4),r.Q6J("errorStateMatcher",o.errorStateMatcher),r.xp6(1),r.Q6J("ngIf",null==(t=o.studentForm.get("status"))?null:t.hasError("required")),r.xp6(4),r.Q6J("errorStateMatcher",o.errorStateMatcher),r.xp6(1),r.Q6J("ngIf",null==(s=o.studentForm.get("qualification"))?null:s.hasError("required")),r.xp6(5),r.Q6J("ngForOf",o.academicPrograms),r.xp6(1),r.Q6J("ngIf",null==(l=o.studentForm.get("academicProgramId"))?null:l.hasError("required"))}}function rr(e,i){if(1&e){const o=r.EpF();r.TgZ(0,"button",37),r.NdJ("click",function(){r.CHM(o);const s=r.oxw();return r.KtG(s.Add())}),r._uU(1,"Add"),r.qZA()}if(2&e){const o=r.oxw();r.Q6J("disabled",o.disableAddOrEditButton())}}function tr(e,i){if(1&e){const o=r.EpF();r.TgZ(0,"button",37),r.NdJ("click",function(){r.CHM(o);const s=r.oxw();return r.KtG(s.Edit())}),r._uU(1,"Edit"),r.qZA()}if(2&e){const o=r.oxw();r.Q6J("disabled",o.disableAddOrEditButton())}}let er=(()=>{class e{get profQualificationsFormArray(){return this.porfForm.get("professor_QualificationDTO")}addProfQuality(){const o=this.fb.group({id:[0],qualification:["",a.kI.required]});this.profQualificationsFormArray.push(o)}constructor(o,t,s,l,D,E,q,I){this.fb=o,this.dialogRef=t,this.ProgramService=s,this.departmentService=l,this.professorService=D,this.studentService=E,this.SwalService=q,this.data=I,this.type="Professor",this.action="add",this.errorStateMatcher=new v.o,this.Subscription=new T.w0,this.departments=[],this.academicPrograms=[],this.appUserForm=this.fb.group({id:[0],userName:["",a.kI.required],email:["",[a.kI.required,a.kI.email]],phoneNumber:["",a.kI.required],password:["",a.kI.required],ssn:[0,a.kI.required],fName:["",a.kI.required],lName:["",a.kI.required],birthDate:[new Date,a.kI.required],gender:["",a.kI.required]}),this.porfForm=this.fb.group({profId:[0],enrol_Date:[new Date,a.kI.required],departmentId:[0,a.kI.required],applicationUserId:[0,a.kI.required],professor_QualificationDTO:this.fb.array([])}),this.studentForm=this.fb.group({studentId:[0],status:["",a.kI.required],qualification:["",a.kI.required],academicProgramId:[0,a.kI.required],applicationUserId:[0,a.kI.required]})}ngOnDestroy(){this.Subscription.unsubscribe()}ngOnInit(){this.type=this.data.type,this.action=this.data.action,"edit"===this.action&&("Professor"===this.type?(this.data.obj.professor_Qualifications.forEach(o=>this.addProfQuality()),this.data.obj.professor_QualificationDTO=this.data.obj.professor_Qualifications,this.appUserForm.patchValue(this.data.obj),this.porfForm.patchValue(this.data.obj)):(this.appUserForm.patchValue(this.data.obj),this.studentForm.patchValue(this.data.obj))),(0,d.$)(this.departmentService.getAll(m.yy.getAll),this.ProgramService.getAll(m.c0.getAll)).subscribe(([o,t])=>{this.departments=o,this.academicPrograms=t})}Add(){if("Professor"===this.type){const o={...this.appUserForm.value,...this.porfForm.value};this.Subscription.add(this.professorService.add(m.NY.Add,o).subscribe({next:t=>{this.dialogRef.close(),this.SwalService.Success("Professor Added Successfully")},error:t=>{if(450==t.status){let s=t.error.errors.map(l=>l.description).join("\n");this.SwalService.Fail(s)}}}))}else{const o={...this.appUserForm.value,...this.studentForm.value};this.Subscription.add(this.studentService.add(m.qO.Add,o).subscribe({next:t=>{this.dialogRef.close(),this.SwalService.Success("Student Added Successfully")},error:t=>{if(450==t.status){let s=t.error.errors.map(l=>l.description).join("\n");this.SwalService.Fail(s)}}}))}}Edit(){if("Professor"===this.type){const o={...this.appUserForm.value,...this.porfForm.value};this.Subscription.add(this.professorService.Update(m.NY.Update,o).subscribe({next:t=>{this.dialogRef.close(),this.SwalService.Success("Professor Updated Successfully")},error:t=>{if(450==t.status){let s=t.error.errors.map(l=>l.description).join("\n");this.SwalService.Fail(s)}else this.SwalService.Fail(t.error.message)}}))}else{const o={...this.appUserForm.value,...this.studentForm.value};this.Subscription.add(this.studentService.Update(m.qO.Update,o).subscribe({next:t=>{this.dialogRef.close(),this.SwalService.Success("Professor Updated Successfully")},error:t=>{if(450==t.status){let s=t.error.errors.map(l=>l.description).join("\n");this.SwalService.Fail(s)}else this.SwalService.Fail(t.error.message)}}))}}disableAddOrEditButton(){return"Professor"===this.type?this.appUserForm.invalid||this.porfForm.invalid||this.profQualificationsFormArray.invalid||0===this.profQualificationsFormArray.controls.length:this.appUserForm.invalid||this.studentForm.invalid}}return e.\u0275fac=function(o){return new(o||e)(r.Y36(a.qu),r.Y36(c.so),r.Y36(h.v),r.Y36(h.v),r.Y36(h.v),r.Y36(h.v),r.Y36(S.J),r.Y36(c.WI))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-student-professor-dialog"]],standalone:!0,features:[r.jDz],decls:60,vars:25,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"row","mt-2",3,"formGroup"],["appearance","outline",1,"col-md-4"],["matInput","","type","text","formControlName","userName",3,"errorStateMatcher"],[4,"ngIf"],["matInput","","type","email","formControlName","email",3,"errorStateMatcher"],["matInput","","type","text","formControlName","phoneNumber",3,"errorStateMatcher"],["matInput","","type","password","formControlName","password",3,"errorStateMatcher"],["matInput","","type","number","formControlName","ssn",3,"errorStateMatcher"],["matInput","","type","text","formControlName","fName",3,"errorStateMatcher"],["matInput","","type","text","formControlName","lName",3,"errorStateMatcher"],["matInput","","formControlName","birthDate",3,"matDatepicker","errorStateMatcher"],["matIconSuffix","",3,"for"],["birthDate",""],["formControlName","gender","aria-label","Select an option",1,"col-md-4"],["value","M"],["value","F"],["class","row mt-2",3,"formGroup",4,"ngIf"],["mat-dialog-actions","",1,"d-flex","w-100","justify-content-center","gap-2"],["mat-raised-button","","color","primary",3,"disabled","click",4,"ngIf"],["mat-raised-button","","color","warn",3,"click"],["appearance","outline",1,"col-md-4","mb-2"],["formControlName","departmentId"],[3,"value",4,"ngFor","ngForOf"],["color","primary","mat-icon-button","","aria-label","Example icon button with a vertical three dot icon",3,"click"],[1,"material-symbols-outlined"],["formArrayName","professor_QualificationDTO"],[4,"ngFor","ngForOf"],[3,"value"],[3,"formGroupName"],["appearance","outline",1,"col"],["matInput","","type","text","formControlName","qualification",3,"errorStateMatcher"],["appearance","outline",1,"col-md-6"],["matInput","","type","text","formControlName","status",3,"errorStateMatcher"],["appearance","outline",1,"col-md-5","mb-2"],["formControlName","academicProgramId"],["mat-raised-button","","color","primary",3,"disabled","click"]],template:function(o,t){if(1&o&&(r.TgZ(0,"h1",0),r._uU(1),r.qZA(),r.TgZ(2,"div",1)(3,"form",2)(4,"mat-form-field",3)(5,"mat-label"),r._uU(6,"User name"),r.qZA(),r._UZ(7,"input",4),r.YNc(8,x,2,0,"mat-error",5),r.qZA(),r.TgZ(9,"mat-form-field",3)(10,"mat-label"),r._uU(11,"Email"),r.qZA(),r._UZ(12,"input",6),r.YNc(13,O,2,0,"mat-error",5),r.YNc(14,y,2,0,"mat-error",5),r.qZA(),r.TgZ(15,"mat-form-field",3)(16,"mat-label"),r._uU(17,"Phone number"),r.qZA(),r._UZ(18,"input",7),r.YNc(19,J,2,0,"mat-error",5),r.qZA(),r.TgZ(20,"mat-form-field",3)(21,"mat-label"),r._uU(22,"Password"),r.qZA(),r._UZ(23,"input",8),r.YNc(24,Y,2,0,"mat-error",5),r.qZA(),r.TgZ(25,"mat-form-field",3)(26,"mat-label"),r._uU(27,"SSN"),r.qZA(),r._UZ(28,"input",9),r.YNc(29,R,2,0,"mat-error",5),r.qZA(),r.TgZ(30,"mat-form-field",3)(31,"mat-label"),r._uU(32,"First Name"),r.qZA(),r._UZ(33,"input",10),r.YNc(34,B,2,0,"mat-error",5),r.qZA(),r.TgZ(35,"mat-form-field",3)(36,"mat-label"),r._uU(37,"Last Name"),r.qZA(),r._UZ(38,"input",11),r.YNc(39,K,2,0,"mat-error",5),r.qZA(),r.TgZ(40,"mat-form-field",3)(41,"mat-label"),r._uU(42,"Start Date"),r.qZA(),r._UZ(43,"input",12)(44,"mat-datepicker-toggle",13)(45,"mat-datepicker",null,14),r.YNc(47,L,2,0,"mat-error",5),r.qZA(),r.TgZ(48,"mat-radio-group",15)(49,"mat-radio-button",16),r._uU(50,"Male"),r.qZA(),r.TgZ(51,"mat-radio-button",17),r._uU(52,"Female"),r.qZA()()(),r.YNc(53,G,17,4,"form",18),r.YNc(54,z,17,7,"form",18),r.qZA(),r.TgZ(55,"div",19),r.YNc(56,rr,2,1,"button",20),r.YNc(57,tr,2,1,"button",20),r.TgZ(58,"button",21),r.NdJ("click",function(){return t.dialogRef.close()}),r._uU(59,"Cancel"),r.qZA()()),2&o){const s=r.MAs(46);let l,D,E,q,I,C,F,b,N;r.xp6(1),r.hij("",t.type," Form"),r.xp6(2),r.Q6J("formGroup",t.appUserForm),r.xp6(4),r.Q6J("errorStateMatcher",t.errorStateMatcher),r.xp6(1),r.Q6J("ngIf",null==(l=t.appUserForm.get("userName"))?null:l.hasError("required")),r.xp6(4),r.Q6J("errorStateMatcher",t.errorStateMatcher),r.xp6(1),r.Q6J("ngIf",null==(D=t.appUserForm.get("email"))?null:D.hasError("required")),r.xp6(1),r.Q6J("ngIf",null==(E=t.appUserForm.get("email"))?null:E.hasError("email")),r.xp6(4),r.Q6J("errorStateMatcher",t.errorStateMatcher),r.xp6(1),r.Q6J("ngIf",null==(q=t.appUserForm.get("phoneNumber"))?null:q.hasError("required")),r.xp6(4),r.Q6J("errorStateMatcher",t.errorStateMatcher),r.xp6(1),r.Q6J("ngIf",null==(I=t.appUserForm.get("password"))?null:I.hasError("required")),r.xp6(4),r.Q6J("errorStateMatcher",t.errorStateMatcher),r.xp6(1),r.Q6J("ngIf",null==(C=t.appUserForm.get("ssn"))?null:C.hasError("required")),r.xp6(4),r.Q6J("errorStateMatcher",t.errorStateMatcher),r.xp6(1),r.Q6J("ngIf",null==(F=t.appUserForm.get("fName"))?null:F.hasError("required")),r.xp6(4),r.Q6J("errorStateMatcher",t.errorStateMatcher),r.xp6(1),r.Q6J("ngIf",null==(b=t.appUserForm.get("lName"))?null:b.hasError("required")),r.xp6(4),r.Q6J("matDatepicker",s)("errorStateMatcher",t.errorStateMatcher),r.xp6(1),r.Q6J("for",s),r.xp6(3),r.Q6J("ngIf",null==(N=t.appUserForm.get("birthDate"))?null:N.hasError("required")),r.xp6(6),r.Q6J("ngIf","Professor"===t.type),r.xp6(1),r.Q6J("ngIf","Student"===t.type),r.xp6(2),r.Q6J("ngIf","add"==t.action),r.xp6(1),r.Q6J("ngIf","edit"==t.action)}},dependencies:[U.O5,_.lN,_.KE,_.hX,_.TO,_.R9,a.UX,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.sg,a.u,a.x0,a.CE,P.c,P.Nt,u.Fk,u.VQ,u.U0,U.ax,p.LD,p.gD,A.ey,f.Ps,f.Hw,Z.ot,Z.lW,Z.RK,c.Is,c.uh,c.xY,c.H8,g.FA,g.Mq,g.hl,g.nW],encapsulation:2}),e})()},7188:(Q,M,n)=>{n.d(M,{$:()=>g});var U=n(9751),_=n(8421);const{isArray:a}=Array;var Z=n(515),c=n(5403),v=n(3269);function g(...u){const T=(0,v.jO)(u),d=function P(u){return 1===u.length&&a(u[0])?u[0]:u}(u);return d.length?new U.y(m=>{let p=d.map(()=>[]),f=d.map(()=>!1);m.add(()=>{p=f=null});for(let r=0;!m.closed&&r<d.length;r++)(0,_.Xf)(d[r]).subscribe((0,c.x)(m,h=>{if(p[r].push(h),p.every(S=>S.length)){const S=p.map(A=>A.shift());m.next(T?T(...S):S),p.some((A,x)=>!A.length&&f[x])&&m.complete()}},()=>{f[r]=!0,!p[r].length&&m.complete()}));return()=>{p=f=null}}):Z.E}}}]);