!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{kEuc:function(e,i,o){"use strict";o.r(i),o.d(i,"SignUpModule",function(){return N});var r=o("PCNd"),a=o("tyNb"),s=o("3Pt+"),p=o("l7P3"),c=o("quSY"),l=o("IzEk"),g=o("52fi");function m(n){var t=n.get("password"),e=n.get("confirm_password");return e.errors&&!e.errors.mustMatch?{mustMatch:!0}:t.value!==e.value?(e.setErrors({mustMatch:!0}),{mustMatch:!0}):(e.setErrors(null),null)}var u=o("iGis"),f=o("fXoL"),d=o("dJ3e"),b=o("ofXK"),C=o("arFO"),h=o("7zfz");function w(n,t){if(1&n&&(f.Vb(0,"div",24),f.Lc(1),f.Ub()),2&n){var e=t.ngIf;f.Cb(1),f.Mc(null==e||null==e.error?null:e.error.message)}}function x(n,t){if(1&n){var e=f.Wb();f.Vb(0,"form",13),f.fc("ngSubmit",function(){return f.Cc(e),f.jc().onEmailFormSubmit()}),f.Vb(1,"div",14),f.Vb(2,"div",15),f.Qb(3,"input",16),f.Ub(),f.Ub(),f.Vb(4,"button",17),f.Lc(5,"Sign Up"),f.Ub(),f.Jc(6,w,2,1,"div",18),f.kc(7,"async"),f.Vb(8,"span",19),f.Lc(9,"By signing up you accept our "),f.Vb(10,"a",20),f.fc("click",function(){return f.Cc(e),f.jc().redirectToPP("terms-of-use-for-saas/92a0127e-4514-43a6-88d3-0abf3bfb265e")}),f.Lc(11,"Terms of Use"),f.Ub(),f.Lc(12," & "),f.Vb(13,"span",21),f.fc("click",function(){return f.Cc(e),f.jc().redirectToPP("privacy-policy/894b347a-429d-4c8f-bae4-ca8bc41969b6")}),f.Lc(14,"Privacy Policy"),f.Ub(),f.Ub(),f.Vb(15,"p",22),f.Lc(16,"I already have an account. "),f.Vb(17,"span",23),f.Lc(18,"Login \u2192"),f.Ub(),f.Ub(),f.Ub()}if(2&n){var i=f.jc();f.oc("formGroup",i.emailForm),f.Cb(4),f.oc("disabled",i.emailForm.invalid),f.Cb(2),f.oc("ngIf",f.lc(7,3,i.error$))}}function P(n,t){if(1&n&&(f.Vb(0,"span",38),f.Lc(1),f.Ub()),2&n){var e=t.$implicit;f.Cb(1),f.Mc(e.label)}}function _(n,t){1&n&&f.Lc(0),2&n&&f.Nc(" ",t.$implicit.label," ")}function M(n,t){if(1&n&&(f.Vb(0,"div",24),f.Lc(1),f.Ub()),2&n){var e=t.ngIf;f.Cb(1),f.Mc(null==e||null==e.error?null:e.error.message)}}function v(n,t){if(1&n){var e=f.Wb();f.Vb(0,"form",25),f.fc("ngSubmit",function(){return f.Cc(e),f.jc().onInviteDetailsFormSubmit()}),f.Vb(1,"div",26),f.Vb(2,"div",15),f.Vb(3,"label",27),f.Lc(4,"Full Name"),f.Ub(),f.Qb(5,"input",28),f.Ub(),f.Ub(),f.Vb(6,"div",14),f.Vb(7,"div",15),f.Vb(8,"label",29),f.Lc(9,"Job Title"),f.Ub(),f.Vb(10,"p-dropdown",30),f.Jc(11,P,2,1,"ng-template",31),f.Jc(12,_,1,1,"ng-template",32),f.Ub(),f.Ub(),f.Ub(),f.Vb(13,"div",14),f.Vb(14,"div",33),f.Vb(15,"label",34),f.Lc(16,"Password"),f.Ub(),f.Qb(17,"input",35),f.Ub(),f.Vb(18,"div",33),f.Vb(19,"label",36),f.Lc(20,"Confirm Password"),f.Ub(),f.Qb(21,"input",37),f.Ub(),f.Ub(),f.Vb(22,"button",17),f.Lc(23,"Continue"),f.Ub(),f.Jc(24,M,2,1,"div",18),f.kc(25,"async"),f.Ub()}if(2&n){var i=f.jc();f.oc("formGroup",i.invitedDetailsForm),f.Cb(10),f.oc("options",i.jobs),f.Cb(12),f.oc("disabled",i.invitedDetailsForm.invalid),f.Cb(2),f.oc("ngIf",f.lc(25,4,i.error$))}}function O(n,t){1&n&&(f.Vb(0,"div",14),f.Vb(1,"div",15),f.Vb(2,"label",40),f.Lc(3,"Organization"),f.Ub(),f.Qb(4,"input",41),f.Ub(),f.Ub())}function y(n,t){if(1&n&&(f.Vb(0,"span",38),f.Lc(1),f.Ub()),2&n){var e=t.$implicit;f.Cb(1),f.Mc(e.label)}}function k(n,t){1&n&&f.Lc(0),2&n&&f.Nc(" ",t.$implicit.label," ")}function V(n,t){if(1&n&&(f.Vb(0,"div",24),f.Lc(1),f.Ub()),2&n){var e=t.ngIf;f.Cb(1),f.Mc(null==e||null==e.error?null:e.error.message)}}function U(n,t){if(1&n){var e=f.Wb();f.Vb(0,"form",25),f.fc("ngSubmit",function(){return f.Cc(e),f.jc().onDetailsFormSubmit()}),f.Vb(1,"div",26),f.Vb(2,"div",15),f.Vb(3,"label",27),f.Lc(4,"Full Name"),f.Ub(),f.Qb(5,"input",28),f.Ub(),f.Ub(),f.Jc(6,O,5,0,"div",39),f.Vb(7,"div",14),f.Vb(8,"div",15),f.Vb(9,"label",29),f.Lc(10,"Job Title"),f.Ub(),f.Vb(11,"p-dropdown",30),f.Jc(12,y,2,1,"ng-template",31),f.Jc(13,k,1,1,"ng-template",32),f.Ub(),f.Ub(),f.Ub(),f.Vb(14,"div",14),f.Vb(15,"div",33),f.Vb(16,"label",34),f.Lc(17,"Password"),f.Ub(),f.Qb(18,"input",35),f.Ub(),f.Vb(19,"div",33),f.Vb(20,"label",36),f.Lc(21,"Confirm Password"),f.Ub(),f.Qb(22,"input",37),f.Ub(),f.Ub(),f.Vb(23,"button",17),f.Lc(24,"Continue"),f.Ub(),f.Jc(25,V,2,1,"div",18),f.kc(26,"async"),f.Ub()}if(2&n){var i=f.jc();f.oc("formGroup",i.detailsForm),f.Cb(6),f.oc("ngIf",i.step===i.steps.DETAILS),f.Cb(5),f.oc("options",i.jobs),f.Cb(12),f.oc("disabled",i.detailsForm.invalid),f.Cb(2),f.oc("ngIf",f.lc(26,5,i.error$))}}var I,F,L,S=function(n){return n.EMAIL="email",n.DETAILS="details",n.INVITE="invite",n.INVITES="invites",n}({}),j=((I=function(){function e(t,i,o,r){n(this,e),this.store=t,this.formBuilder=i,this.route=o,this.userService=r,this.steps=S,this.emailConfirmationSent=!1,this.step=S.EMAIL,this.phoneCodes=[],this.jobs=[],this.subscription=new c.a,this.error$=t.pipe(Object(p.q)("error"))}var i,o,r;return i=e,(o=[{key:"ngOnInit",value:function(){var n=this.route.snapshot;if(n.url[0]){if(this.step=n.url[0].path,this.step===S.DETAILS){var t=n.params.token;this.getAllJobs(),this.initDetailsForm(t)}else if(this.step===S.INVITE)this.initInviteTeamMembersForm();else if(this.step===S.INVITES){var e=n.params.inviteToken;this.getAllJobs(),this.initInvitedDetailsForm(e)}}else this.initEmailForm()}},{key:"ngOnDestroy",value:function(){this.store.dispatch(new g.c(null)),this.subscription.unsubscribe()}},{key:"getAllJobs",value:function(){var n=this;this.subscription.add(this.userService.getAllJobs().pipe(Object(l.a)(1)).subscribe(function(t){n.jobs=t.map(function(n){return{label:n.jobTitle,value:n._id}})}))}},{key:"onEmailFormSubmit",value:function(){var n=this;this.emailForm.invalid?this.emailForm.markAsTouched():this.store.dispatch(new u.i({email:this.emailForm.value.email,successCallback:function(){n.emailConfirmationSent=!0,n.store.dispatch(new g.c(null))}}))}},{key:"onDetailsFormSubmit",value:function(){if(this.detailsForm.invalid)return this.detailsForm.controls.password.markAsDirty(),this.detailsForm.controls.confirm_password.markAsDirty(),this.detailsForm.controls.job_id.markAsDirty(),void this.detailsForm.controls.organization.markAsDirty();this.store.dispatch(new u.b(this.detailsForm.value))}},{key:"onInviteDetailsFormSubmit",value:function(){if(this.invitedDetailsForm.invalid)return this.invitedDetailsForm.controls.password.markAsDirty(),this.invitedDetailsForm.controls.confirm_password.markAsDirty(),void this.invitedDetailsForm.controls.job_id.markAsDirty();this.store.dispatch(new u.h(this.invitedDetailsForm.value))}},{key:"onInviteFormSubmit",value:function(){}},{key:"initEmailForm",value:function(){this.emailForm=this.formBuilder.group({email:["",[s.s.required,s.s.email]]})}},{key:"initDetailsForm",value:function(n){this.detailsForm=new s.f({token:new s.d(n),full_name:new s.d(""),organization:new s.d("",s.s.required),job_id:new s.d("",s.s.required),password:new s.d("",[s.s.compose([s.s.required,s.s.minLength(8)])]),confirm_password:new s.d("",s.s.required)},{validators:m})}},{key:"initInvitedDetailsForm",value:function(n){this.invitedDetailsForm=new s.f({invite_id:new s.d(n),full_name:new s.d(""),job_id:new s.d("",s.s.required),password:new s.d("",[s.s.compose([s.s.required,s.s.minLength(8)])]),confirm_password:new s.d("",s.s.required)},{validators:m})}},{key:"initInviteTeamMembersForm",value:function(){this.inviteForm=this.formBuilder.group({emails:this.formBuilder.array(["","",""])})}},{key:"redirectToPP",value:function(n){window.open("https://app.termly.io/document/"+n,"_blank")}},{key:"inviteFormEmails",get:function(){return this.inviteForm.get("emails")}}])&&t(i.prototype,o),r&&t(i,r),e}()).\u0275fac=function(n){return new(n||I)(f.Pb(p.h),f.Pb(s.c),f.Pb(a.a),f.Pb(d.f))},I.\u0275cmp=f.Jb({type:I,selectors:[["sk-sign-up"]],decls:17,vars:7,consts:[[1,"sign-up-wrapper",3,"ngClass"],["src","../../assets/img/logo.svg","routerLink","",1,"sign-up-logo"],[1,"email-confirmation-box",3,"ngClass"],["src","../../assets/img/confirm-email-img.svg","alt","confirm-email"],[1,"sign-up-title"],[1,"sign-up-subtitle"],[1,"sign-up-form-wrapper",3,"ngClass"],["class","sign-up-form step-one",3,"formGroup","ngSubmit",4,"ngIf"],["class","sign-up-form step-three",3,"formGroup","ngSubmit",4,"ngIf"],[1,"sign-up-image-wrapper",3,"ngClass"],[1,"image-container"],[1,"right-side-text"],["src","../../assets/img/login-ill.svg"],[1,"sign-up-form","step-one",3,"formGroup","ngSubmit"],[1,"form-group"],[1,"form-item"],["type","email","id","email","placeholder","e.g. johnsmith@company.com","formControlName","email"],["type","submit",1,"sign-up-next-btn",3,"disabled"],["class","error",4,"ngIf"],[1,"accept-pp"],["target","_blank",1,"text-decoration",3,"click"],[1,"text-decoration",3,"click"],["routerLink","/sign-in",1,"redirect-link"],[1,"redirect-link-login"],[1,"error"],[1,"sign-up-form","step-three",3,"formGroup","ngSubmit"],[1,"form-group","m-0"],["for","full-name"],["id","full-name","type","text","placeholder","Full Name","formControlName","full_name"],["for","job"],["id","job","placeholder","Job Title","panelStyleClass","column-select-dropdown","formControlName","job_id",1,"form-select",3,"options"],["pTemplate","selectedItem"],["pTemplate","item"],[1,"form-item","half-width-item"],["for","password"],["id","password","type","password","placeholder","8 letters minimum","formControlName","password"],["for","confirm-password"],["id","confirm-password","type","password","placeholder","Re-type your Password","formControlName","confirm_password"],[1,"selected"],["class","form-group",4,"ngIf"],["for","organization"],["id","organization","type","text","placeholder","Organization","formControlName","organization"]],template:function(n,t){1&n&&(f.Vb(0,"div",0),f.Qb(1,"img",1),f.Vb(2,"div",2),f.Qb(3,"img",3),f.Vb(4,"span",4),f.Lc(5,"Please check your email."),f.Ub(),f.Vb(6,"span",5),f.Lc(7,"Confirm your email address to start onboarding."),f.Ub(),f.Ub(),f.Vb(8,"div",6),f.Jc(9,x,19,5,"form",7),f.Jc(10,v,26,6,"form",8),f.Jc(11,U,27,7,"form",8),f.Ub(),f.Vb(12,"div",9),f.Vb(13,"div",10),f.Vb(14,"span",11),f.Lc(15,"Start your free\xa030-day trial"),f.Ub(),f.Qb(16,"img",12),f.Ub(),f.Ub(),f.Ub()),2&n&&(f.oc("ngClass",t.emailConfirmationSent?"confirm-email":""),f.Cb(2),f.oc("ngClass",t.emailConfirmationSent?"":"d-none"),f.Cb(6),f.oc("ngClass",t.emailConfirmationSent?"d-none":""),f.Cb(1),f.oc("ngIf",t.step===t.steps.EMAIL),f.Cb(1),f.oc("ngIf",t.step===t.steps.INVITES),f.Cb(1),f.oc("ngIf",t.step===t.steps.DETAILS),f.Cb(1),f.oc("ngClass",t.emailConfirmationSent?"d-none":""))},directives:[b.j,a.g,b.l,s.u,s.m,s.g,s.b,s.l,s.e,C.a,h.b],pipes:[b.b],styles:['.sign-up-wrapper[_ngcontent-%COMP%]{min-height:100vh;display:flex;position:relative}@media (max-width:767px){.sign-up-wrapper[_ngcontent-%COMP%]{flex-direction:column}}.sign-up-wrapper.confirm-email[_ngcontent-%COMP%]{box-shadow:0 5px 15px 0 rgba(40,106,221,.4);background-color:#286add;display:flex;align-items:center;justify-content:center}.sign-up-wrapper[_ngcontent-%COMP%]   .sign-up-logo[_ngcontent-%COMP%]{position:absolute;left:50%;transform:translateX(-50%);top:-10px;z-index:2;cursor:pointer;outline:none}.sign-up-wrapper[_ngcontent-%COMP%]   .sign-up-form-wrapper[_ngcontent-%COMP%], .sign-up-wrapper[_ngcontent-%COMP%]   .sign-up-image-wrapper[_ngcontent-%COMP%]{width:50%;min-height:100vh}@media (max-width:767px){.sign-up-wrapper[_ngcontent-%COMP%]   .sign-up-form-wrapper[_ngcontent-%COMP%], .sign-up-wrapper[_ngcontent-%COMP%]   .sign-up-image-wrapper[_ngcontent-%COMP%]{width:100%;min-height:auto}}.sign-up-wrapper[_ngcontent-%COMP%]   .sign-up-image-wrapper[_ngcontent-%COMP%]{background:#fff;display:flex;justify-content:flex-end;align-items:center}.sign-up-wrapper[_ngcontent-%COMP%]   .sign-up-image-wrapper[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;margin-top:90px;overflow:hidden}@media (max-width:767px){.sign-up-wrapper[_ngcontent-%COMP%]   .sign-up-image-wrapper[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{margin-top:30px}}.sign-up-wrapper[_ngcontent-%COMP%]   .sign-up-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;margin-top:40px;transform:translateX(6.3%)}@media (max-width:1220px){.sign-up-wrapper[_ngcontent-%COMP%]   .sign-up-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:825px;transform:translateX(0)}}@media (max-width:767px){.sign-up-wrapper[_ngcontent-%COMP%]   .sign-up-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:655px;transform:translateX(-68px);margin-top:20px}}.sign-up-wrapper[_ngcontent-%COMP%]   .sign-up-image-wrapper[_ngcontent-%COMP%]   .right-side-text[_ngcontent-%COMP%]{justify-content:center;padding-left:25.2%;font-family:Nunito Sans,sans-serif;font-size:34px;font-weight:400;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;color:#5f779c}@media (max-width:1225px){.sign-up-wrapper[_ngcontent-%COMP%]   .sign-up-image-wrapper[_ngcontent-%COMP%]   .right-side-text[_ngcontent-%COMP%]{font-size:28px;padding-left:127px}}@media (max-width:1023px){.sign-up-wrapper[_ngcontent-%COMP%]   .sign-up-image-wrapper[_ngcontent-%COMP%]   .right-side-text[_ngcontent-%COMP%]{font-size:18px}}@media (max-width:767px){.sign-up-wrapper[_ngcontent-%COMP%]   .sign-up-image-wrapper[_ngcontent-%COMP%]   .right-side-text[_ngcontent-%COMP%]{font-size:22px;padding-left:55px}}.sign-up-wrapper[_ngcontent-%COMP%]   .sign-up-image-wrapper[_ngcontent-%COMP%]   .right-side-text[_ngcontent-%COMP%]   .right-side-text-bold[_ngcontent-%COMP%]{font-weight:800}.sign-up-wrapper[_ngcontent-%COMP%]   .sign-up-form-wrapper[_ngcontent-%COMP%]{box-shadow:0 5px 15px 0 rgba(40,106,221,.4);background-color:#286add;position:relative;display:flex;align-items:center;justify-content:center;padding:140px 113px 50px}@media (max-width:1155px){.sign-up-wrapper[_ngcontent-%COMP%]   .sign-up-form-wrapper[_ngcontent-%COMP%]{padding:200px 50px 50px;justify-content:center}}@media (max-width:1155px) and (max-width:767px){.sign-up-wrapper[_ngcontent-%COMP%]   .sign-up-form-wrapper[_ngcontent-%COMP%]{padding:130px 40px 60px}}.sign-up-wrapper[_ngcontent-%COMP%]   .email-confirmation-box[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.sign-up-form[_ngcontent-%COMP%]{text-align:center;max-width:404px;width:100%}.sign-up-form.step-one[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-top:60px}.sign-up-form[_ngcontent-%COMP%]   .sign-up-title[_ngcontent-%COMP%]   .logo-in-text[_ngcontent-%COMP%]{color:#fff}.sign-up-form[_ngcontent-%COMP%]   .sign-up-title[_ngcontent-%COMP%]   .logo-in-text[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%]{color:#a0baf4}.sign-up-form[_ngcontent-%COMP%]   .sign-up-subtitle[_ngcontent-%COMP%]{font-family:Reem Kufi,sans-serif;font-size:22px;color:#fff;display:inline-block;margin:10px 0 80px}.sign-up-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;width:100%;border-radius:6px;box-shadow:0 6px 20px 0 rgba(16,50,109,.6);background-color:#fff;padding:13px 12px 12px;font-size:14px;font-weight:800;font-family:Nunito Sans,sans-serif;margin-top:60px}.sign-up-form[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{opacity:.5}.sign-up-form[_ngcontent-%COMP%]   .google-sign-up[_ngcontent-%COMP%]{color:#286add;position:relative;margin-top:0}.sign-up-form[_ngcontent-%COMP%]   .google-sign-up[_ngcontent-%COMP%]:before{content:"";width:20px;height:20px;display:block;position:absolute;left:12px;top:50%;transform:translateY(-50%);background-image:url(icon-google.f15aa014b870b1454c65.svg);background-size:cover}.sign-up-form[_ngcontent-%COMP%]   .sign-up-next-btn[_ngcontent-%COMP%]{position:relative;margin-bottom:20px}.sign-up-form[_ngcontent-%COMP%]   .sign-up-next-btn[_ngcontent-%COMP%]:before{content:url(multiple-white.3f07be3315d80b83b511.svg);width:22px;height:22px;display:block;position:absolute;left:12px;top:50%;transform:translateY(-50%);background-size:contain;background-color:#286add;border-radius:3px;box-shadow:0 1px 5px 0 rgba(95,119,156,.2980392156862745)}.sign-up-form[_ngcontent-%COMP%]   .send-invite-btn[_ngcontent-%COMP%]{position:relative}.sign-up-form[_ngcontent-%COMP%]   .send-invite-btn[_ngcontent-%COMP%]:before{content:url(icon-send-invite.7e85e52044c0a5cfc323.svg);width:22px;height:22px;position:absolute;left:12px;top:50%;transform:translateY(-50%);background-size:contain;background-color:#286add;border-radius:3px;box-shadow:0 1px 5px 0 rgba(95,119,156,.2980392156862745);display:flex;align-items:center;justify-content:center}.sign-up-form[_ngcontent-%COMP%]   .form-help-text[_ngcontent-%COMP%]{font-size:14px;font-style:italic;text-align:center;color:#9bbdf7;display:block;margin:60px 0 0}.sign-up-form[_ngcontent-%COMP%]   .skip-test[_ngcontent-%COMP%]{color:#fff!important}.sign-up-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-item[_ngcontent-%COMP%]{text-align:left}.sign-up-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#fff;font-size:16px;min-height:22px}.sign-up-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:13px 20px;border:2px solid #679af3}.sign-up-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-item[_ngcontent-%COMP%]     .form-select .ui-dropdown{border:2px solid #679af3}.sign-up-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-item[_ngcontent-%COMP%]     .form-select .ui-dropdown .ui-dropdown-label{font-weight:800;padding:13px 25px 13px 15px}.sign-up-title[_ngcontent-%COMP%]{font-size:26px;font-weight:700;text-align:center;color:#0a3682}.sign-up-subtitle[_ngcontent-%COMP%], .sign-up-title[_ngcontent-%COMP%]{font-family:Nunito Sans,sans-serif}.sign-up-subtitle[_ngcontent-%COMP%]{font-size:16px;font-weight:300;color:#fff;display:inline-block;margin:10px 0 80px}input.ng-dirty.ng-invalid[_ngcontent-%COMP%]{border:2px solid red!important}.error[_ngcontent-%COMP%]{text-align:center;color:#fff;margin-top:15px}.redirect-link[_ngcontent-%COMP%]{margin-top:80px;font-family:Nunito Sans,sans-serif;font-size:14px;font-weight:800;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;color:#9bbdf7}.redirect-link[_ngcontent-%COMP%]:focus{outline-width:0}.redirect-link-login[_ngcontent-%COMP%]{color:#fff;cursor:pointer}.accept-pp[_ngcontent-%COMP%]{font-family:Nunito Sans,sans-serif;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;color:#9bbdf7}.accept-pp[_ngcontent-%COMP%]   .text-decoration[_ngcontent-%COMP%]{cursor:pointer;text-decoration:underline;color:#a0bbf4}']}),I),D=[{path:"",component:j},{path:S.DETAILS+"/:token",component:j},{path:S.INVITES+"/:inviteToken",component:j},{path:S.INVITE,component:j}],T=((L=function t(){n(this,t)}).\u0275mod=f.Nb({type:L}),L.\u0275inj=f.Mb({factory:function(n){return new(n||L)},imports:[[a.j.forChild(D)],a.j]}),L),N=((F=function t(){n(this,t)}).\u0275mod=f.Nb({type:F}),F.\u0275inj=f.Mb({factory:function(n){return new(n||F)},imports:[[r.a,T]]}),F)}}])}();