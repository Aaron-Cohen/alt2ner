(this["webpackJsonpstring-theory"]=this["webpackJsonpstring-theory"]||[]).push([[0],{37:function(t,e,n){},38:function(t,e,n){},52:function(t,e,n){"use strict";n.r(e);var i=n(1),r=(n(37),n(18)),c=n(19),o=n(21),a=n(20),s=(n(38),n(27)),u=n(4),j=n(2),l=n.n(j),b=n(5);function d(){var t=Object(u.a)(["\n  display: flex;\n  width: 75vw;\n  max-height: 15vh;\n"]);return d=function(){return t},t}function f(){var t=Object(u.a)(["\n  display: inline-flex;\n  margin: 4% 15% 5% 20%;\n  justify-content: center;\n  align-content: center;\n  font-size: 3rem;\n  overflow: hidden;\n"]);return f=function(){return t},t}function x(){var t=Object(u.a)(["\n  display: inline;\n  margin-top: 15px;\n  font-size: 2rem;\n"]);return x=function(){return t},t}function h(){var t=Object(u.a)(["\n  background-color: ","\n  border: 3px solid #dcdcdc;\n  border-radius:6px;\n  font-size: 15px;\n  font-weight: bold;\n  width: 25px;\n  min-width: 10px;\n"]);return h=function(){return t},t}var p=b.a.div(h(),(function(t){return t.hideNut?"transparent;":"#e0955c;"})),O=b.a.div(x()),g=b.a.div(f()),v=b.a.div(d());function m(){var t=Object(u.a)(["\n  margin: 33px;\n  line-height: 2.5rem;\n"]);return m=function(){return t},t}var y=b.a.p(m()),w=function(t){return Object(i.jsx)("a",{href:t.to,target:"_blank",rel:"noreferrer",style:{display:"inline",color:"blue",margin:".25em"},children:t.text})},C=function(){return Object(i.jsx)(g,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{style:{textAlign:"center",marginBottom:"5%"},children:Object(i.jsx)("h2",{children:"About String Theory"})}),Object(i.jsxs)(O,{children:[Object(i.jsxs)(y,{children:["I built this program to make alternative tunings on guitar more accessible without needing a strong music theory background. For more information on this topic, check out the Wikipedia page for",Object(i.jsx)(w,{to:"https://en.wikipedia.org/wiki/Scordatura",text:"Scordatura."})]}),Object(i.jsxs)(y,{children:["This is my first project using the React framework. You can find the source code",Object(i.jsx)(w,{to:"https://github.com/Aaron-Cohen/String-Theory",text:"here."})]}),Object(i.jsxs)(y,{children:["If you have any improvements to the source code, or notice any bugs, please send me a message on",Object(i.jsx)(w,{to:"https://www.reddit.com/user/MidwestSegovia/",text:"Reddit"}),"or",Object(i.jsx)(w,{to:"https://www.linkedin.com/in/-aaroncohen/",text:"LinkedIn."}),"I love hearing feedback from users, even if it is just that you enjoyed using String Theory."]}),Object(i.jsx)(y,{children:"Thank you for using String Theory. Happy strumming!"})]})]})})},S=n(16);function k(t){if("string"!==typeof(t=t.trim())||0===t.length||t.length>2)return-1;var e=null;switch(t.toUpperCase().charAt(0)){case"A":e=1;break;case"B":e=3;break;case"C":e=4;break;case"D":e=6;break;case"E":e=8;break;case"F":e=9;break;case"G":e=11;break;default:return-2}if(2===t.length)switch(t.toLowerCase().charAt(1)){case"#":case"s":e+=1;break;case"b":e-=1;break;default:return-3}return e%12}function N(t,e){if("number"!==typeof(t%=12))throw new Error("Invalid input: must be number");switch(t){case 0:return"Flats"===e?"Ab":"G#";case 1:return"A";case 2:return"Flats"===e?"Bb":"A#";case 3:return"B";case 4:return"C";case 5:return"Flats"===e?"Db":"C#";case 6:return"D";case 7:return"Flats"===e?"Eb":"D#";case 8:return"E";case 9:return"F";case 10:return"Flats"===e?"Gb":"F#";case 11:return"G";default:throw new Error("Unable to map note to numerical value")}}var A=function(t){return[0,2,4,5,7,9,11].map((function(e){return(e+t)%12}))},D=["E","B","G","D","A","E"].map((function(t){return k(t)})),F=["/","/About/"],T=l.a.createContext(),M=T;function E(){var t=Object(u.a)(["\n  margin-left: 16px;\n  padding: 20px;\n  font-size: 16: px;\n"]);return E=function(){return t},t}function G(){var t=Object(u.a)(["\n  background: "," \n  padding-left: 3rem;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: #f5f5f5;\n  font-size: 18px;\n\n  &:hover {\n    background: #632ce4;\n    cursor: pointer;\n  }\n"]);return G=function(){return t},t}function B(){var t=Object(u.a)(["\n  overflow-y: auto;\n  max-height: 50vh;\n"]);return B=function(){return t},t}function L(){var t=Object(u.a)(["\n  display: flex;\n  color: #e1e9fc;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  list-style: none;\n  height: 55px;\n  text-decoration: none;\n  font-size: 18px;\n\n  &:hover {\n    background: #252831;\n    border-left: 4px solid #632ce4;\n    cursor: pointer;\n  }\n"]);return L=function(){return t},t}var z=Object(b.a)(S.b)(L()),I=b.a.div(B()),P=b.a.div(G(),(function(t){return t.selected?"#632ce4;":"#414757;"})),R=b.a.span(E()),H=function(t){Object(o.a)(n,t);var e=Object(a.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).state={list:[],showSubNavigation:!1},i}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=new Array(this.props.item.subNav.length).fill(!1);t[0]=!this.props.item.editable,this.setState({list:t})}},{key:"render",value:function(){var t=this,e=this.props.item;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(z,{to:e.path,onClick:e.path?function(){return t.context.updateSidebar(!1)}:function(){return t.setState({showSubNavigation:!t.state.showSubNavigation})},children:[Object(i.jsxs)("div",{children:[e.icon,Object(i.jsx)(R,{children:e.title})]}),Object(i.jsx)("div",{children:this.state.showSubNavigation?e.iconOpened:e.iconClosed})]}),Object(i.jsx)(I,{children:this.state.showSubNavigation&&e.subNav.map((function(n,r){return Object(i.jsxs)(P,{selected:!0===t.state.list[r],onClick:function(){e.action(n),t.setState({list:e.updateList(t.state.list,r,n.title)})},children:[n.icon,Object(i.jsx)(R,{contentEditable:e.editable,spellCheck:!1,onBlur:function(t){t.currentTarget.textContent=e.updateTuning(t.currentTarget.textContent,r)||n.title},onKeyDown:function(t){return("Enter"===t.code||"Tab"===t.code)&&t.currentTarget.blur()},children:n.title})]},r)}))})]})}}]),n}(j.Component);H.contextType=T;var U=n(3),Y=n(15),J=n(32),K=n(11),W=n(8);function _(t,e){return(t=new Array(t.length).fill(!1))[e]=!0,t}var q=function(t){return[{title:"Sharp/Flat Mode",icon:Object(i.jsx)(U.h,{}),iconClosed:Object(i.jsx)(W.a,{}),iconOpened:Object(i.jsx)(W.b,{}),page:"/",subNav:[{title:"Sharps",icon:Object(i.jsx)(U.e,{})},{title:"Flats",icon:Object(i.jsx)(J.CgTrendingDown,{})}],action:function(e){return t.updateMode(e.title)},updateList:function(t,e){return _(t,e)}},{title:"Custom Tuning",icon:Object(i.jsx)(U.d,{}),iconClosed:Object(i.jsx)(W.a,{}),iconOpened:Object(i.jsx)(W.b,{}),page:"/",subNav:[{title:N(t.tuning[0],t.mode),icon:Object(i.jsx)(Y.a,{}),iconClosed:Object(i.jsx)(W.a,{}),iconOpened:Object(i.jsx)(W.b,{}),subNav:[{title:"inner level",icon:Object(i.jsx)(U.d,{})},{title:"inner level",icon:Object(i.jsx)(U.d,{})}]},{title:N(t.tuning[1],t.mode),icon:Object(i.jsx)(Y.a,{})},{title:N(t.tuning[2],t.mode),icon:Object(i.jsx)(Y.a,{})},{title:N(t.tuning[3],t.mode),icon:Object(i.jsx)(Y.a,{})},{title:N(t.tuning[4],t.mode),icon:Object(i.jsx)(Y.a,{})},{title:N(t.tuning[5],t.mode),icon:Object(i.jsx)(Y.a,{})}],editable:!0,action:function(){},updateList:function(t){return t},updateTuning:function(e,n){if((e=e.trim().toLowerCase()).length<1)return!1;e.length>2&&(e=e.substring(0,2));var i=k(e=e.toUpperCase().charAt(0)+e.slice(1));return!(i<0)&&(t.updateTuning(n,i),e)}},{title:"Tuning Presets",icon:Object(i.jsx)(U.k,{}),iconClosed:Object(i.jsx)(W.a,{}),iconOpened:Object(i.jsx)(W.b,{}),page:"/",subNav:[{title:"Standard",tuning:["E","B","G","D","A","E"],icon:Object(i.jsx)(U.j,{})},{title:"Open G",tuning:["D","B","G","D","G","D"],icon:Object(i.jsx)(U.j,{})},{title:"Open D",tuning:["D","A","F#","D","A","D"],icon:Object(i.jsx)(U.j,{})},{title:"Drop D",tuning:["E","B","G","D","A","D"],icon:Object(i.jsx)(U.j,{})},{title:"Drop C",tuning:["E","B","G","D","A","C"],icon:Object(i.jsx)(U.j,{})},{title:"E C G C A C\n(Mumford & Sons)",tuning:["E","C","G","C","A","C"],icon:Object(i.jsx)(U.j,{})},{title:"E C G C A F\n(American Football)",tuning:["E","C","G","C","A","F"],icon:Object(i.jsx)(U.j,{})},{title:"E A G C A F\n(Yvette Young)",tuning:["E","A","G","C","A","F"],icon:Object(i.jsx)(U.j,{})}],action:function(e){return t.setTuning(e.tuning.map((function(t){return k(t)})))},updateList:function(t,e){return _(t,e)}},{title:"Root Note / Key",icon:Object(i.jsx)(U.i,{}),iconClosed:Object(i.jsx)(W.a,{}),iconOpened:Object(i.jsx)(W.b,{}),page:"/",subNav:[{title:"A",icon:Object(i.jsx)(U.f,{})},{title:"Sharps"===t.mode?"A#":"Bb",icon:Object(i.jsx)(U.f,{})},{title:"B",icon:Object(i.jsx)(U.f,{})},{title:"C",icon:Object(i.jsx)(U.f,{})},{title:"Sharps"===t.mode?"C#":"Db",icon:Object(i.jsx)(U.f,{})},{title:"D",icon:Object(i.jsx)(U.f,{})},{title:"Sharps"===t.mode?"D#":"Eb",icon:Object(i.jsx)(U.f,{})},{title:"E",icon:Object(i.jsx)(U.f,{})},{title:"F",icon:Object(i.jsx)(U.f,{})},{title:"Sharps"===t.mode?"F#":"Gb",icon:Object(i.jsx)(U.f,{})},{title:"G",icon:Object(i.jsx)(U.f,{})},{title:"Sharps"===t.mode?"G#":"Ab",icon:Object(i.jsx)(U.f,{})}],action:function(e){var n=k(e=e.title),i=t.noteSet[0]-n,r=t.noteSet.map((function(t){return(t-i+12)%12}));t.updateRoot(n),t.updateNoteSet(r)},updateList:function(t,e){return _(t,e)}},{title:"Pattern Type",icon:Object(i.jsx)(U.l,{}),iconClosed:Object(i.jsx)(W.a,{}),iconOpened:Object(i.jsx)(W.b,{}),page:"/",subNav:[{title:"Natural Major",icon:Object(i.jsx)(K.b,{})},{title:"Natural Minor",icon:Object(i.jsx)(K.b,{})},{title:"Major Pentatonic",icon:Object(i.jsx)(K.b,{})},{title:"Minor Pentatonic",icon:Object(i.jsx)(K.b,{})},{title:"Major",icon:Object(i.jsx)(K.b,{})},{title:"Major 7",icon:Object(i.jsx)(K.b,{})},{title:"Minor",icon:Object(i.jsx)(K.b,{})},{title:"Minor 7",icon:Object(i.jsx)(K.b,{})},{title:"Dominant 7",icon:Object(i.jsx)(K.b,{})},{title:"Augmented",icon:Object(i.jsx)(K.b,{})},{title:"Diminished",icon:Object(i.jsx)(K.b,{})}],action:function(e){var n=t.root,i=e.title.includes("Minor")?function(t){return[0,2,3,5,7,8,10].map((function(e){return(e+t)%12}))}(n):A(n);return t.updateNoteSet(function(){switch(e.title){case"Major Pentatonic":case"Minor Pentatonic":return[i[0],i[1],i[2],i[4],i[5]];case"Major":case"Minor":return[i[0],i[2],i[4]];case"Major 7":case"Minor 7":return[i[0],i[2],i[4],i[6]];case"Dominant 7":return[i[0],i[2],i[4],i[6]-1];case"Augmented":return[i[0],i[2],i[4]+1];case"Diminished":return[i[0],i[2]-1,i[4]-1];case"Natural Major":case"Natural Minor":default:return i}}())},updateList:function(t,e){return _(t,e)}},{title:"Settings",icon:Object(i.jsx)(U.c,{}),iconClosed:Object(i.jsx)(W.a,{}),iconOpened:Object(i.jsx)(W.b,{}),page:"/",subNav:[{title:"Dots / Fret Numbers",icon:Object(i.jsx)(U.b,{})},{title:"Dot Inlays",icon:Object(i.jsx)(U.b,{})},{title:"Fret Numbers",icon:Object(i.jsx)(U.b,{})},{title:"Nothing",icon:Object(i.jsx)(U.b,{})},{title:"Left Handed",icon:Object(i.jsx)(U.b,{})}],action:function(e){var n=e.title;n.includes("Handed")?t.updateLefty(!t.lefty):(t.updateInlays(n.includes("Dot")),t.updateFretNumbers(n.includes("Numbers")))},updateList:function(t,e,n){var i=t.slice();return n.includes("Handed")?i[e]=!t[e]:(i.fill(!1),i[e]=!0,i[i.length-1]=t[t.length-1]),i}},{title:"Project Info",icon:Object(i.jsx)(K.a,{}),path:"/About/",page:"/",subNav:[]},{title:"String Theory",icon:Object(i.jsx)(U.d,{}),path:"",page:"/About/",subNav:[]}]},Q=n(33),V=n(0),X=n(6);function Z(){var t=Object(u.a)(["\n  width: 100%;\n"]);return Z=function(){return t},t}function $(){var t=Object(u.a)(["\n  background: #15171c;\n  width: 19rem;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: ",";\n  transition: 350ms;\n  z-index: 10;\n"]);return $=function(){return t},t}function tt(){var t=Object(u.a)(["\n  margin-left: 2rem;\n  font-size: 2rem;\n  height: 80px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"]);return tt=function(){return t},t}function et(){var t=Object(u.a)(["\n  background: #15171c;\n  height: max(10vh, 75px);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"]);return et=function(){return t},t}var nt=b.a.div(et()),it=Object(b.a)(S.b)(tt()),rt=b.a.nav($(),(function(t){return t.visible?"0":"-100%"})),ct=b.a.div(Z()),ot=function(){var t=Object(X.f)().pathname,e=Object(j.useContext)(M),n=e.sidebar,r=F.includes(t),c=function(t){return e.updateSidebar(t)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(V.IconContext.Provider,{value:{color:"#fff"},children:[Object(i.jsx)(nt,{children:r&&Object(i.jsx)(it,{to:"#",children:Object(i.jsx)(U.a,{onClick:function(){return c(!n)}})})}),Object(i.jsx)(rt,{visible:n&&r,children:Object(i.jsxs)(ct,{children:[Object(i.jsx)(it,{to:"#",children:Object(i.jsx)(Q.a,{onClick:function(){return c(!n)}})}),q(e).map((function(e,n){return e.page===t&&Object(i.jsx)(H,{item:e},n)}))]})})]})})};function at(){var t=Object(u.a)(["\n  margin: 33px;\n  line-height: 2.5rem;\n  text-align: center;\n"]);return at=function(){return t},t}var st=b.a.p(at()),ut=function(t){return Object(i.jsx)("a",{href:t.to,style:{display:"inline",color:"blue",margin:".25em"},children:t.text})},jt=function(){return Object(i.jsx)(g,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{style:{textAlign:"center",marginBottom:"5%"},children:Object(i.jsx)("h2",{children:"Page Not Found"})}),Object(i.jsxs)(O,{children:[Object(i.jsxs)(st,{children:["It looks like you are trying to access a page that does not exist. Click",Object(i.jsx)(ut,{to:"#/",text:"here"}),"to return to String Theory."]}),Object(i.jsx)("div",{style:{textAlign:"center",fontSize:"33vh"},children:Object(i.jsx)(U.g,{})})]})]})})};function lt(){var t=Object(u.a)(["\n  box-shadow: inset 0px 1px 0px 0px #ffffff;\n  background-color: ","\n  border-radius: 6px;\n  border: 3px solid #dcdcdc;\n  display: flex;\n  color: #666666;\n  font-family: Arial;\n  font-size: 15px;\n  font-weight: bold;\n  height: 10vh;\n  min-height: 32px;\n  width: calc(150px - ","px);\n  min-width: 30px;\n  text-shadow: 0px 1px 0px #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return lt=function(){return t},t}var bt=b.a.div(lt(),(function(t){return t.text?"#e0ebff;":"transparent;"}),(function(t){return 5*t.fret})),dt=function(t){return Object(i.jsx)(bt,{fret:t.fret,text:t.text,children:t.text})},ft=function(t){for(var e=Object(j.useContext)(T),n=[],r=t.rootNote;r<=21+t.rootNote;r+=1)n.push(Object(i.jsx)(dt,{text:e.noteSet.includes(r%12)?N(r,e.mode):"",fret:r-t.rootNote}));return n.splice(1,0,Object(i.jsx)(p,{})),e.lefty&&n.reverse(),Object(i.jsx)(v,{children:n})};function xt(){var t=Object(u.a)(["\n  box-shadow:inset 0px 1px 0px 0px #ffffff;\n  background-color: transparent;\n  border-radius:6px;\n  border:3px solid #dcdcdc;\n  display: flex;\n  color:#666666;\n  font-family:Arial;\n  font-size: 12px;\n  font-weight:bold;\n  height: 5vh;\n  min-height: 32px;\n  width: calc(150px - ","px);\n  min-width: 30px;\n  text-shadow: 0px 1px 0px #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return xt=function(){return t},t}var ht=b.a.div(xt(),(function(t){return 5*t.fret})),pt=function(){return Object(i.jsx)("div",{style:{padding:4,display:"inline-block",backgroundColor:"black",borderRadius:"50%"}})},Ot=function(t){return t.text?Object(i.jsx)(ht,{fret:t.fret,style:{fontSize:"15px"},children:t.text}):12===t.fret?Object(i.jsx)(ht,{fret:t.fret,children:Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)(pt,{})}),Object(i.jsx)("div",{children:Object(i.jsx)(pt,{})})]})}):11===t.fret||13===t.fret?Object(i.jsx)(ht,{fret:t.fret}):t.fret%2&&t.fret>1?Object(i.jsxs)(ht,{fret:t.fret,children:[" ",Object(i.jsx)(pt,{})," "]}):Object(i.jsx)(ht,{fret:t.fret,children:" "})},gt=function(t){for(var e=Object(j.useContext)(T),n=[],r=0;r<=21;r+=1)n.push(Object(i.jsx)(Ot,{fret:r,text:t.text?r:""}));return n.splice(1,0,Object(i.jsx)(p,{hideNut:t.text})),e.lefty&&n.reverse(),Object(i.jsx)(v,{children:n})};function vt(){var t=Object(u.a)(["\n  ","\n  margin-right: 3vw;\n  transition: 350ms ease;\n"]);return vt=function(){return t},t}var mt=b.a.div(vt(),(function(t){return t.sidebar?"margin-left: 22vw; ":"margin-left: 12.5vw;"})),yt=function(){var t=Object(j.useContext)(T);return Object(i.jsx)(mt,{sidebar:t.sidebar,children:Object(i.jsxs)("div",{style:{overflow:"auto",marginTop:"20px"},children:[Object(i.jsx)(ft,{rootNote:t.tuning[0]}),Object(i.jsx)(ft,{rootNote:t.tuning[1]}),Object(i.jsx)(ft,{rootNote:t.tuning[2]}),t.inlays&&Object(i.jsx)(gt,{}),Object(i.jsx)(ft,{rootNote:t.tuning[3]}),Object(i.jsx)(ft,{rootNote:t.tuning[4]}),Object(i.jsx)(ft,{rootNote:t.tuning[5]}),t.fretNumbers&&Object(i.jsx)(gt,{text:!0})]})})},wt=function(){return Object(i.jsx)(yt,{})},Ct=function(t){Object(o.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(r.a)(this,n);for(var i=arguments.length,c=new Array(i),o=0;o<i;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={mode:"Sharps",root:1,inlays:!0,noteSet:A(1),fretNumbers:!0,sidebar:!1,lefty:!1,tuning:D,updateMode:function(e){return t.setState({mode:e})},updateRoot:function(e){return t.setState({root:e})},updateInlays:function(e){return t.setState({inlays:e})},updateNoteSet:function(e){return t.setState({noteSet:e})},updateFretNumbers:function(e){return t.setState({fretNumbers:e})},updateSidebar:function(e){return t.setState({sidebar:e})},updateLefty:function(e){return t.setState({lefty:e})},updateTuning:function(e,n){var i=t.state.tuning.slice();i[e]=n,t.setState({tuning:i})},setTuning:function(e){return t.setState({tuning:e})}},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){s.a.initialize("UA-187525938-1"),s.a.pageview(window.location.pathname+window.location.search)}},{key:"render",value:function(){return Object(i.jsx)(T.Provider,{value:this.state,children:Object(i.jsxs)(S.a,{children:[Object(i.jsx)(ot,{}),Object(i.jsxs)(X.c,{children:[Object(i.jsx)(X.a,{path:"/",exact:!0,component:wt}),Object(i.jsx)(X.a,{path:"/About/",exact:!0,component:C}),Object(i.jsx)(X.a,{path:"*",component:jt})]})]})})}}]),n}(j.Component),St=n(34),kt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),i(t),r(t),c(t),o(t)}))};n.n(St).a.render(Object(i.jsx)(l.a.StrictMode,{children:Object(i.jsx)(Ct,{})}),document.getElementById("root")),kt()}},[[52,1,2]]]);
//# sourceMappingURL=main.5dafec69.chunk.js.map