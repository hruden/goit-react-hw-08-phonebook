"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[829],{829:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,a,o,i,c,u,s,l=t(9434),d=t(9439),p=t(2791),x=t(168),h=t(5867),m=h.ZP.form(r||(r=(0,x.Z)(["\n    display: flex;\n    flex-direction: column;\n    border: 1px solid black;\n    width: 400px;\n    padding: 15px;\n    margin-bottom: 15px;\n    gap: 5px;\n    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n    "]))),f=h.ZP.input(a||(a=(0,x.Z)(["\n    width: 100%;\n    margin-bottom: 15px;\n    "]))),b=h.ZP.button(o||(o=(0,x.Z)(["\n    width: 200px;\n    &:hover{\n        background-color: #6495ED;\n        border-color: #6495ED;\n        color: white;\n    }\n"]))),v=t(4849),g=t(6916),j=function(n){return n.contactsBook.contacts},Z=function(n){return n.contactsBook.filter},k=function(n){return n.contactsBook.isLoading},w=(0,g.P1)([j,Z],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),C=t(3634),y=t(184);function P(){var n=(0,p.useState)(""),e=(0,d.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)(""),o=(0,d.Z)(a,2),i=o[0],c=o[1],u=(0,l.v9)(j),s=(0,l.v9)(k),x=(0,l.I0)(),h=function(n){var e=n.target;switch(e.name){case"name":r(e.value);break;case"number":c(e.value);break;default:return}},g=function(){r(""),c("")};return(0,y.jsxs)(m,{onSubmit:function(n){n.preventDefault();var e={name:t,number:i};if(u.find((function(n){return n.name===e.name})))return alert("".concat(e.name," is already in contacts")),g();x((0,C.uK)(e)),g()},children:["Name",(0,y.jsx)(f,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0406\u0456\u0407\u0457\u0490\u0491' \\-\\u0400-\\u04FF]+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:h,value:t}),"Number",(0,y.jsx)(f,{type:"tel",name:"number",pattern:"^[+]?[0-9\\\\.\\\\-\\\\s]{1,15}$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:h,value:i}),s?(0,y.jsx)(v.Z,{animation:"grow",variant:"primary"}):(0,y.jsx)(b,{type:"submit",children:"add Contact"})]})}var D,L,F=h.ZP.ul(i||(i=(0,x.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding: 15px 5px;\n    width: 400px;\n"]))),B=h.ZP.li(c||(c=(0,x.Z)(["\n    position: relative;\n    display: flex;\n    align-items: center;\n    &::before{\n        content: '';\n        width: 3px;\n        height: 3px;\n        border: 1px solid black;\n        border-radius: 50%;\n        background-color: black;\n        margin-right: 5px;\n    }\n"]))),I=h.ZP.button(u||(u=(0,x.Z)(["\n    margin-left: auto;\n    &:hover{\n        border-color: #DC143C;\n        background-color: #DC143C;\n        color: white;\n    }\n"]))),N=(0,h.ZP)(v.Z)(s||(s=(0,x.Z)(["\n    margin-left: auto;\n"]))),S=function(){var n=(0,l.I0)(),e=(0,l.v9)(k),t=(0,l.v9)(w);return(0,y.jsx)(F,{children:t.map((function(t){var r=t.id,a=t.name,o=t.number;return(0,y.jsxs)(B,{children:[a,": ",o,e?(0,y.jsx)(N,{animation:"border",variant:"danger"}):(0,y.jsx)(I,{onClick:function(){return n((0,C.GK)(r))},children:"Delete"})]},r)}))})},_=t(5049),A=function(){var n=(0,l.v9)(Z),e=(0,l.I0)();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("p",{children:"Find contacts by name"}),(0,y.jsx)("input",{onChange:function(n){var t=n.target.value.trim().toLocaleLowerCase();e((0,_.x)(t))},value:n,name:"searchContact",type:"text",placeholder:"Search contact..."})]})},q=t(741),z=h.ZP.div(D||(D=(0,x.Z)(["\n    padding: 30px;\n"]))),E=(0,h.ZP)(q.Z)(L||(L=(0,x.Z)(["\n    margin-top: 15px;\n    width: 400px;\n"]))),K=t(9273),$=t(4217);function G(){var n=(0,l.v9)($.dy).name,e=(0,l.I0)();return(0,y.jsxs)("div",{children:[(0,y.jsx)("p",{children:n}),(0,y.jsx)("button",{type:"button",onClick:function(){return e((0,K.logOut)())},children:"Logout"})]})}function J(){var n=(0,l.v9)(w);return(0,y.jsxs)(z,{children:[(0,y.jsx)("h1",{children:"Phonebook"}),(0,y.jsx)(P,{}),(0,y.jsx)("h2",{children:"Contacts"}),(0,y.jsx)(A,{}),n.length?(0,y.jsx)(S,{}):(0,y.jsx)(E,{variant:"dark",children:"No matches found!"}),(0,y.jsx)(G,{})]})}function M(){return(0,y.jsx)("div",{children:(0,y.jsx)(J,{})})}}}]);
//# sourceMappingURL=829.6377c96a.chunk.js.map