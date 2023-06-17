"use strict";(self.webpackChunkspire=self.webpackChunkspire||[]).push([[423],{4242:(A,f,a)=>{a.d(f,{v:()=>_});var g=a(2223),e=a(3144);let _=(()=>{class n{constructor(o){this.http=o}getAll(o){return this.http.get(o)}add(o,u){return this.http.post(o,u)}Delete(o,u){return this.http.delete(`${o}/${u}`)}GetById(o,u){return this.http.get(`${o}/${u}`)}Update(o,u){return this.http.put(o,u)}}return n.\u0275fac=function(o){return new(o||n)(g.LFG(e.eN))},n.\u0275prov=g.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},8381:(A,f,a)=>{a.d(f,{IH:()=>h,KG:()=>P,NY:()=>U,QC:()=>M,UD:()=>B,_W:()=>$,c0:()=>O,jC:()=>E,qO:()=>I,yy:()=>b});var g=a(2340);function e(C){return`${g.N.apiUrl}/${C}`}const _="RestrcatioType",n="Department",l="MaterialType",o="Course",u="Semester",s="Professor",d="Student",m="AcademicProgram",p="Task",y="Material";class B{static get getAll(){return`${e(_)}/GetRestricationTypes`}static get getById(){return`${e(_)}/GetRestricationTypeById`}static get Delete(){return`${e(_)}/DeleteRestricationType`}static get Add(){return`${e(_)}/AddRestricationType`}static get Update(){return`${e(_)}/UpdateRestricationType`}}class b{static get getAll(){return`${e(n)}/GetDepartments`}static get getById(){return`${e(n)}/GetDepartmentById`}static get Delete(){return`${e(n)}/DeleteDepatment`}static get Add(){return`${e(n)}/AddDepartments`}static get Update(){return`${e(n)}/UpdateDepartment`}}class h{static get getAll(){return`${e(l)}/GetMaterialTypes`}static get getById(){return`${e(l)}/GetMaterialTypeById`}static get Delete(){return`${e(l)}/DeleteMaterialType`}static get Add(){return`${e(l)}/AddMaterialType`}static get Update(){return`${e(l)}/UpdateMaterialType`}}class M{static get getAll(){return`${e(p)}/GetTasks`}static get getById(){return`${e(p)}/GetTaskById`}static get Delete(){return`${e(p)}/DeleteTask`}static get Add(){return`${e(p)}/AddTask`}static get Update(){return`${e(p)}/UpdateTask`}static get DeleteTaskFromCourse(){return`${e(p)}/DeleteTaskFromCourse`}static get AddTaskToCourse(){return`${e(p)}/AddTaskToCourse`}}class ${static get getAll(){return`${e(o)}/GetCourses`}static get getById(){return`${e(o)}/GetCourseById`}static get Delete(){return`${e(o)}/DeleteCourse`}static get Add(){return`${e(o)}/AddCourse`}static get Update(){return`${e(o)}/UpdateCourse`}static get GetCourseRestrictionsByCourseId(){return`${e(o)}/GetCourseRestrictionsByCourseId`}}class P{static get getAll(){return`${e(u)}/GetSemesters`}static get getById(){return`${e(u)}/GetSemesterById`}static get Delete(){return`${e(u)}/DeleteSemester`}static get Add(){return`${e(u)}/AddSemester`}static get Update(){return`${e(u)}/UpdateSemester`}static get GetCurrentSemester(){return`${e(u)}/GetCurrentSemester`}}class U{static get getAll(){return`${e(s)}/GetProfs`}static get getById(){return`${e(s)}/GetProfById`}static get Delete(){return`${e(s)}/DeleteProfessor`}static get Add(){return`${e(s)}/AddProfessor`}static get Update(){return`${e(s)}/UpdateProfessor`}static get AssignCourseToProfessorInSemester(){return`${e(s)}/AssignCourseToProfessorInSemester`}static get RemoveCourseFromProfessorInSemester(){return`${e(s)}/RemoveCourseFromProfessorInSemester`}static get GetCoursesAssignedToProfessorsBySemester(){return`${e(s)}/GetCoursesAssignedToProfessorsBySemester`}static get GetProfessorsByCourseId(){return`${e(s)}/GetProfessorsByCourseId`}static get GetSemesterCourseProgramInCurrentSemester(){return`${e(s)}/GetSemesterCourseProgramInCurrentSemester`}static get GetSemesterCourseProfessorByProfessorId(){return`${e(s)}/GetSemesterCourseProfessorByProfessorId`}static get GetSemesterCourseProfessorById(){return`${e(s)}/GetSemesterCourseProfessorById`}}class I{static get getAll(){return`${e(d)}/GetStudents`}static get getById(){return`${e(d)}/GetStudentById`}static get Delete(){return`${e(d)}/DeleteStudent`}static get Add(){return`${e(d)}/AddStudent`}static get Update(){return`${e(d)}/UpdateStudent`}static get AddSem_Course_Prof_Student(){return`${e(d)}/AddSem_Course_Prof_Student`}static get GetSem_Course_Prof_StudentByStudentId(){return`${e(d)}/GetSem_Course_Prof_StudentByStudentId`}static get DeleteSem_Course_Prof_Student(){return`${e(d)}/DeleteSem_Course_Prof_Student`}static get GetStudentCoursesForCurrentSemesterByStudentId(){return`${e(d)}/GetStudentCoursesForCurrentSemesterByStudentId`}static get AddFinalGradeToStudent(){return`${e(d)}/AddFinalGradeToStudent`}}class O{static get getAll(){return`${e(m)}/GetAcademicPrograms`}static get getById(){return`${e(m)}/GetAcademicProgramById`}static get Delete(){return`${e(m)}/DeleteAcademicProgram`}static get Add(){return`${e(m)}/AddAcademicProgram`}static get Update(){return`${e(m)}/UpdateAcademicProgram`}}class E{static get AddCourseMaterial(){return`${e(y)}/AddCourseMaterial`}static get GetCourseMaterials(){return`${e(y)}/GetCourseMaterials`}static get DeleteCourseMaterial(){return`${e(y)}/DeleteCourseMaterial`}}},1299:(A,f,a)=>{a.d(f,{L:()=>u});var g=a(2480),e=a(6482),_=a(4755),n=a(2223),l=a(1676);function o(s,d){if(1&s&&(n.TgZ(0,"li",11),n._uU(1),n.qZA()),2&s){const m=d.$implicit;n.xp6(1),n.Oqu(m)}}let u=(()=>{class s{constructor(){}}return s.\u0275fac=function(m){return new(m||s)},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-breadcrumb"]],inputs:{title:"title",items:"items",active_item:"active_item"},standalone:!0,features:[n.jDz],decls:14,vars:7,consts:[[1,"breadcrumb-main"],[1,"row"],[1,"col-6"],[1,"breadcrumb-title"],[1,"page-title"],[1,"breadcrumb-list"],[1,"breadcrumb-item","bcrumb-1"],[3,"routerLink"],[3,"icon"],["class","breadcrumb-item",4,"ngFor","ngForOf"],[1,"breadcrumb-item","active"],[1,"breadcrumb-item"]],template:function(m,p){1&m&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),n._uU(5),n.qZA()()(),n.TgZ(6,"div",2)(7,"ul",5)(8,"li",6)(9,"a",7),n._UZ(10,"app-feather-icons",8),n.qZA()(),n.YNc(11,o,2,1,"li",9),n.TgZ(12,"li",10),n._uU(13),n.qZA()()()()()),2&m&&(n.xp6(5),n.Oqu(p.title),n.xp6(4),n.Q6J("routerLink","/admin/dashboard/main"),n.xp6(1),n.Tol("breadcrumb-icon"),n.Q6J("icon","home"),n.xp6(1),n.Q6J("ngForOf",p.items),n.xp6(2),n.Oqu(p.active_item))},dependencies:[g.rH,e.u,l.A,_.ax]}),s})()},4933:(A,f,a)=>{a.d(f,{bC:()=>x});var g=a(4755),e=a(2223),_=a(1728),n=a(430),l=a(3627),o=a(5326),u=a(1299);function s(r,i){1&r&&e.GkF(0)}function d(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"div",9)(1,"button",10),e.NdJ("click",function(){e.CHM(t);const T=e.oxw(2);return e.KtG(T.addNewClick())}),e._uU(2,"Ad new"),e.qZA()()}}function m(r,i){1&r&&e.GkF(0)}function p(r,i){if(1&r&&(e.TgZ(0,"section",3)(1,"div",4)(2,"div",5),e._UZ(3,"app-breadcrumb",6),e.qZA(),e.YNc(4,s,1,0,"ng-container",7),e.YNc(5,d,3,0,"div",8),e.YNc(6,m,1,0,"ng-container",7),e.qZA()()),2&r){const t=e.oxw(),c=e.MAs(4);e.xp6(3),e.Q6J("title",t.BreadCrumbTitle)("items",t.BreadCrumbItems)("active_item",t.BreadCrumbActive_item),e.xp6(1),e.Q6J("ngTemplateOutlet",t.outsideTemplate),e.xp6(1),e.Q6J("ngIf",t.UseAddNewButton),e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function y(r,i){if(1&r&&(e.TgZ(0,"th",20),e._uU(1),e.qZA()),2&r){const t=e.oxw().$implicit;e.xp6(1),e.hij("",t.ColumnName," ")}}function B(r,i){if(1&r&&e._UZ(0,"td",21),2&r){const t=i.$implicit,c=e.oxw().$implicit;e.Q6J("innerHtml",t[c.propertyName],e.oJD)}}function b(r,i){1&r&&(e.ynx(0,17),e.YNc(1,y,2,1,"th",18),e.YNc(2,B,1,1,"td",19),e.BQk()),2&r&&e.Q6J("matColumnDef",i.$implicit.propertyName)}function h(r,i){1&r&&(e.TgZ(0,"th",20),e._uU(1," Edit "),e.qZA())}function M(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"td",24)(1,"button",25),e.NdJ("click",function(){const D=e.CHM(t).$implicit,S=e.oxw(3);return e.KtG(S.editClick(D))}),e.TgZ(2,"mat-icon"),e._uU(3,"edit"),e.qZA()()()}}function $(r,i){1&r&&(e.ynx(0,22),e.YNc(1,h,2,0,"th",18),e.YNc(2,M,4,0,"td",23),e.BQk())}function P(r,i){1&r&&(e.TgZ(0,"th",20),e._uU(1," Delete "),e.qZA())}const U=function(){return{title:"Are you sure?",icon:"question",showCancelButton:!0}};function I(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"td",24)(1,"button",27),e.NdJ("confirm",function(T){const S=e.CHM(t).$implicit,G=e.oxw(3);return e.KtG(G.DeleteClick(T,S))}),e.TgZ(2,"mat-icon"),e._uU(3,"delete"),e.qZA()()()}2&r&&(e.xp6(1),e.Q6J("swal",e.DdM(1,U)))}function O(r,i){1&r&&(e.ynx(0,26),e.YNc(1,P,2,0,"th",18),e.YNc(2,I,4,2,"td",23),e.BQk())}function E(r,i){1&r&&e._UZ(0,"tr",28)}function C(r,i){1&r&&e._UZ(0,"tr",29)}function v(r,i){if(1&r&&(e.TgZ(0,"table",11),e.YNc(1,b,3,1,"ng-container",12),e.YNc(2,$,3,0,"ng-container",13),e.YNc(3,O,3,0,"ng-container",14),e.YNc(4,E,1,0,"tr",15),e.YNc(5,C,1,0,"tr",16),e.qZA()),2&r){const t=e.oxw();e.Q6J("dataSource",t.dataSource),e.xp6(1),e.Q6J("ngForOf",t._columnsDev),e.xp6(1),e.Q6J("ngIf",t._useEditButton),e.xp6(1),e.Q6J("ngIf",t._useDeleteButton),e.xp6(1),e.Q6J("matHeaderRowDef",t.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",t.displayedColumns)}}let x=(()=>{class r{constructor(){this.displayedColumns=[],this._columnsDev=[],this._useEditButton=!0,this._useDeleteButton=!0,this.dataSource=[],this.BreadCrumbItems=[],this.BreadCrumbTitle="",this.BreadCrumbActive_item="",this.UseAddNewButton=!0,this.TableOnly=!1,this.OnAddNewClick=new e.vpe,this.OnEditClick=new e.vpe,this.OnDeleteClick=new e.vpe}ngOnChanges(t){console.log(t),t.UseDeleteButton&&(this.UseDeleteButton=t.UseDeleteButton.currentValue),t.UseEditButton&&(this.UseEditButton=t.UseEditButton.currentValue)}set ColumnDefs(t){console.log(this.displayedColumns),this._columnsDev=t,this.displayedColumns=t.map(c=>c.propertyName),this.displayedColumns.push("edit"),this.displayedColumns.push("delete")}set UseEditButton(t){this._useEditButton=t,0==t?this.displayedColumns=this.displayedColumns.filter(c=>"edit"!=c):(this.displayedColumns=this.displayedColumns.filter(c=>"edit"!=c),this.displayedColumns.push("edit"))}set UseDeleteButton(t){this._useDeleteButton=t,0==t?this.displayedColumns=this.displayedColumns.filter(c=>"delete"!=c):(this.displayedColumns=this.displayedColumns.filter(c=>"delete"!=c),this.displayedColumns.push("delete"))}addNewClick(){this.OnAddNewClick.emit(!0)}editClick(t){this.OnEditClick.emit(t)}DeleteClick(t,c){this.OnDeleteClick.emit({swalResponse:t,element:c})}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["my-table"]],inputs:{dataSource:"dataSource",ColumnDefs:"ColumnDefs",UseEditButton:"UseEditButton",UseDeleteButton:"UseDeleteButton",BreadCrumbItems:"BreadCrumbItems",BreadCrumbTitle:"BreadCrumbTitle",BreadCrumbActive_item:"BreadCrumbActive_item",UseAddNewButton:"UseAddNewButton",outsideTemplate:"outsideTemplate",TableOnly:"TableOnly"},outputs:{OnAddNewClick:"OnAddNewClick",OnEditClick:"OnEditClick",OnDeleteClick:"OnDeleteClick"},standalone:!0,features:[e.TTD,e.jDz],decls:5,vars:1,consts:[[3,"ngTemplateOutlet"],["allPage",""],["table",""],[1,"content"],[1,"content-block"],[1,"block-header"],[3,"title","items","active_item"],[4,"ngTemplateOutlet"],["class","w-100 d-flex justify-content-end",4,"ngIf"],[1,"w-100","d-flex","justify-content-end"],["mat-raised-button","","color","primary",1,"mb-2",3,"click"],["mat-table","",1,"mat-elevation-z2",3,"dataSource"],[3,"matColumnDef",4,"ngFor","ngForOf"],["matColumnDef","edit",4,"ngIf"],["matColumnDef","delete",4,"ngIf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"matColumnDef"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",3,"innerHtml",4,"matCellDef"],["mat-header-cell",""],["mat-cell","",3,"innerHtml"],["matColumnDef","edit"],["mat-cell","",4,"matCellDef"],["mat-cell",""],["mat-icon-button","","color","primary",3,"click"],["matColumnDef","delete"],["mat-icon-button","","color","warn",3,"swal","confirm"],["mat-header-row",""],["mat-row",""]],template:function(t,c){if(1&t&&(e.GkF(0,0),e.YNc(1,p,7,6,"ng-template",null,1,e.W1O),e.YNc(3,v,6,6,"ng-template",null,2,e.W1O)),2&t){const T=e.MAs(2),D=e.MAs(4);e.Q6J("ngTemplateOutlet",c.TableOnly?D:T)}},dependencies:[l.p0,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,_.ot,_.lW,_.RK,n.Ps,n.Hw,o.ii,o.iL,g.ax,g.O5,u.L,g.tP],encapsulation:2}),r})()}}]);