(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{hDSD:function(n,t,o){"use strict";o.r(t),o.d(t,"EducationModule",(function(){return l}));var c=o("ofXK"),e=o("tyNb"),i=o("fXoL"),a=o("gu4S");function r(n,t){if(1&n&&(i.Ib(0,"a",17),i.bc(1,"Demo"),i.Hb()),2&n){const n=i.Qb().$implicit;i.Sb("href",n.demo,i.Xb)}}function d(n,t){if(1&n&&(i.Ib(0,"a",17),i.bc(1,"Github"),i.Hb()),2&n){const n=i.Qb().$implicit;i.Sb("href",n["github url"],i.Xb)}}function s(n,t){if(1&n&&(i.Ib(0,"div"),i.Ib(1,"div",10),i.Ib(2,"div",11),i.Gb(3,"img",12),i.Hb(),i.Ib(4,"div",13),i.Ib(5,"div",14),i.bc(6),i.Hb(),i.Ib(7,"div"),i.ac(8,r,2,1,"a",15),i.ac(9,d,2,1,"a",15),i.Hb(),i.Ib(10,"div",16),i.bc(11),i.Hb(),i.Hb(),i.Hb(),i.Hb()),2&n){const n=t.$implicit;i.wb(3),i.Tb("src","assets/",n.image,"",i.Xb),i.Sb("alt",n.title),i.wb(3),i.dc(" ",n.title," "),i.wb(2),i.Rb("ngIf",n.demo),i.wb(1),i.Rb("ngIf",n["github url"]),i.wb(2),i.dc(" ",n.about," ")}}function b(n,t){if(1&n&&(i.Ib(0,"div",24),i.bc(1),i.Hb()),2&n){const n=t.$implicit;i.wb(1),i.dc(" ",n," ")}}function g(n,t){if(1&n&&(i.Ib(0,"div",18),i.Ib(1,"div",19),i.Ib(2,"div",10),i.Ib(3,"div"),i.bc(4),i.Hb(),i.Gb(5,"div",11),i.Ib(6,"div",20),i.bc(7),i.Hb(),i.Hb(),i.Ib(8,"div",14),i.bc(9),i.Hb(),i.Ib(10,"div",21),i.ac(11,b,2,1,"div",22),i.Hb(),i.Ib(12,"div",23),i.bc(13),i.Hb(),i.Hb(),i.Hb()),2&n){const n=t.$implicit,o=i.Qb();i.wb(4),i.cc(n.duration),i.wb(3),i.cc(n.score),i.wb(2),i.cc(n["Education Level"]),i.wb(2),i.Rb("ngForOf",o.split(n["Key Courses"])),i.wb(2),i.cc(n.desc)}}const u=[{path:"",component:(()=>{class n{constructor(n){this.portfolioService=n,this.data={}}ngOnInit(){this.portfolioService.fetchPortfolioData().subscribe(n=>{this.data=n})}split(n){return n.trim().split(",")}keys(n){return Object.keys(n)}}return n.\u0275fac=function(t){return new(t||n)(i.Fb(a.a))},n.\u0275cmp=i.zb({type:n,selectors:[["app-education"]],decls:16,vars:2,consts:[[1,"education-container"],[1,"container"],[1,"academics-container"],[1,"projects-container"],[1,"heading"],[1,"fas","fa-tasks"],[4,"ngFor","ngForOf"],[1,"fas","fa-book-reader"],[1,"schools-container"],["class","education",4,"ngFor","ngForOf"],[1,"is-flex"],[1,"flex-space"],["srcset","",1,"project-img",3,"src","alt"],[1,"flex-2","padding"],[1,"title"],[3,"href",4,"ngIf"],[1,"desc"],[3,"href"],[1,"education"],[1,"school-inner-container"],["title","score"],[1,"courses"],["class","course",4,"ngFor","ngForOf"],[1,"edu-desc"],[1,"course"]],template:function(n,t){1&n&&(i.Ib(0,"div",0),i.Ib(1,"div",1),i.Ib(2,"div",2),i.Ib(3,"div"),i.Ib(4,"div",3),i.Ib(5,"div",4),i.Gb(6,"i",5),i.bc(7," Projects"),i.Hb(),i.Ib(8,"div"),i.ac(9,s,12,6,"div",6),i.Hb(),i.Hb(),i.Hb(),i.Ib(10,"div"),i.Ib(11,"div",4),i.Gb(12,"i",7),i.bc(13," Education"),i.Hb(),i.Ib(14,"div",8),i.ac(15,g,14,5,"div",9),i.Hb(),i.Hb(),i.Hb(),i.Hb(),i.Hb()),2&n&&(i.wb(9),i.Rb("ngForOf",t.data.projects),i.wb(6),i.Rb("ngForOf",t.data.education))},directives:[c.i,c.j],styles:[".education-container[_ngcontent-%COMP%]{background-color:#e8edea}@media only screen and (max-width:768px){.education-container[_ngcontent-%COMP%]{padding:8px}}.education-container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{padding:32px 16px 16px 0;font-size:32px;font-weight:500}.education-container[_ngcontent-%COMP%]   .projects-container[_ngcontent-%COMP%]   .project-img[_ngcontent-%COMP%]{height:30vh;width:30vw}@media only screen and (max-width:768px){.education-container[_ngcontent-%COMP%]   .projects-container[_ngcontent-%COMP%]   .project-img[_ngcontent-%COMP%]{width:auto}}.education-container[_ngcontent-%COMP%]   .projects-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:18px;font-weight:600}.education-container[_ngcontent-%COMP%]   .academics-container[_ngcontent-%COMP%]{flex:2}.education-container[_ngcontent-%COMP%]   .schools-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.education-container[_ngcontent-%COMP%]   .schools-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]{width:30%;padding:16px}@media only screen and (max-width:768px){.education-container[_ngcontent-%COMP%]   .schools-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]{width:100%}}.education-container[_ngcontent-%COMP%]   .schools-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .school-inner-container[_ngcontent-%COMP%]{box-shadow:2px 2px 16px #f1f2f3;padding:16px;background-color:#ccccc6;border-radius:8px;border-bottom:8px solid #e33d3d}.education-container[_ngcontent-%COMP%]   .schools-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:24px;font-weight:500;margin-top:8px}.education-container[_ngcontent-%COMP%]   .schools-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]{display:inline-flex;flex-wrap:wrap;gap:8px;margin-top:16px}.education-container[_ngcontent-%COMP%]   .schools-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]{padding:8px;background-color:#f1f2f3;border-radius:16px;font-size:12px}.education-container[_ngcontent-%COMP%]   .schools-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]:first-child{margin-left:0}.education-container[_ngcontent-%COMP%]   .schools-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .edu-desc[_ngcontent-%COMP%]{margin:32px 0}.education-container[_ngcontent-%COMP%]   .skills-container[_ngcontent-%COMP%]{flex:1}.education-container[_ngcontent-%COMP%]   .skills-container[_ngcontent-%COMP%]   .skill-heading[_ngcontent-%COMP%]{font-size:20px;font-weight:500;margin:16px 0 6px}"]}),n})()}];let p=(()=>{class n{}return n.\u0275mod=i.Db({type:n}),n.\u0275inj=i.Cb({factory:function(t){return new(t||n)},imports:[[e.c.forChild(u)],e.c]}),n})(),l=(()=>{class n{}return n.\u0275mod=i.Db({type:n}),n.\u0275inj=i.Cb({factory:function(t){return new(t||n)},imports:[[c.b,p]]}),n})()}}]);