(this["webpackJsonpcfg-parser"]=this["webpackJsonpcfg-parser"]||[]).push([[0],{114:function(e,t,n){e.exports=n(127)},119:function(e,t,n){},127:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(42),o=n.n(r),c=(n(119),n(63)),i=n(89),s=n(84),u=n(145),m=n(141),d=n(139),p=n(140),h=n(147),f=n(144),E=n(11),g=n(20),v=n(143),b=n(128);function y(e){return l.a.createElement(b.a,Object.assign({type:"button",basic:!0},e))}var C=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).loadFile=function(){a.props.onItemsChange([]);var e=new FileReader;e.onload=function(){var t,n=Object(g.a)(e.result.split(/\r\n|[\n\v\f\r\x85\u2028\u2029]/));try{for(n.s();!(t=n.n()).done;){var l=t.value;""!==l&&a.props.onItemsChange([].concat(Object(E.a)(a.props.items),[l]))}}catch(r){n.e(r)}finally{n.f()}},e.readAsText(a.refFileInput.current.files[0])},a.addNewOne=function(){""===a.state.newOne||a.props.items.includes(a.state.newOne)||(a.props.onItemsChange([].concat(Object(E.a)(a.props.items),[a.state.newOne])),a.setState({newOne:""}))},a.render=function(){return l.a.createElement(m.a.Pane,null,a.props.children,l.a.createElement("input",{ref:a.refFileInput,type:"file",accept:"text/plain",style:{display:"none"},onChange:function(e){return a.setState({fileName:e.target.files[0].name})}}),l.a.createElement(v.a,{compact:"very"},l.a.createElement(v.a.Header,null,l.a.createElement(v.a.Row,null,l.a.createElement(v.a.HeaderCell,null,l.a.createElement(d.a,{fluid:!0,readOnly:!0,placeholder:a.props.kind[0].toUpperCase()+a.props.kind.slice(1)+" file",value:a.state.fileName,onClick:function(){return a.refFileInput.current.click()}})),l.a.createElement(v.a.HeaderCell,{collapsing:!0},l.a.createElement(y,{positive:!0,fluid:!0,onClick:a.loadFile,disabled:""===a.state.fileName},"Load "+a.props.kind+" file")),l.a.createElement(v.a.HeaderCell,{collapsing:!0},l.a.createElement(y,{negative:!0,fluid:!0,onClick:function(){return a.props.onItemsChange([])},disabled:0===a.props.items.length},"Remove all")))),l.a.createElement(v.a.Body,null,a.props.items.map((function(e,t){return l.a.createElement(v.a.Row,{key:t},l.a.createElement(v.a.Cell,null,l.a.createElement(d.a,{fluid:!0,value:e,onChange:function(e){return a.props.onItemsChange([].concat(Object(E.a)(a.props.items.slice(0,t)),[e.target.value],Object(E.a)(a.props.items.slice(t+1))))}})),l.a.createElement(v.a.Cell,null,l.a.createElement(b.a.Group,null,l.a.createElement(y,{icon:"angle double up",onClick:function(){return a.props.onItemsChange([a.props.items[t]].concat(Object(E.a)(a.props.items.slice(0,t)),Object(E.a)(a.props.items.slice(t+1))))},disabled:0===t}),l.a.createElement(y,{icon:"angle up",onClick:function(){return a.props.onItemsChange([].concat(Object(E.a)(a.props.items.slice(0,t-1)),[a.props.items[t],a.props.items[t-1]],Object(E.a)(a.props.items.slice(t+1))))},disabled:0===t}),l.a.createElement(y,{icon:"angle down",onClick:function(){return a.props.onItemsChange([].concat(Object(E.a)(a.props.items.slice(0,t)),[a.props.items[t+1],a.props.items[t]],Object(E.a)(a.props.items.slice(t+2))))},disabled:t===a.props.items.length-1}),l.a.createElement(y,{icon:"angle double down",onClick:function(){return a.props.onItemsChange([].concat(Object(E.a)(a.props.items.slice(0,t)),Object(E.a)(a.props.items.slice(t+1)),[a.props.items[t]]))},disabled:t===a.props.items.length-1}))),l.a.createElement(v.a.Cell,null,l.a.createElement(y,{negative:!0,fluid:!0,onClick:function(){return a.props.onItemsChange([].concat(Object(E.a)(a.props.items.slice(0,t)),Object(E.a)(a.props.items.slice(t+1))))}},"Remove")))}))),l.a.createElement(v.a.Footer,null,l.a.createElement(v.a.Row,null,l.a.createElement(v.a.HeaderCell,null,l.a.createElement(d.a,{fluid:!0,placeholder:"New "+a.props.kind,value:a.state.newOne,onChange:function(e){return a.setState({newOne:e.target.value})}})),l.a.createElement(v.a.HeaderCell,null,l.a.createElement(y,{positive:!0,fluid:!0,onClick:a.addNewOne,disabled:""===a.state.newOne},"Add new "+a.props.kind)),l.a.createElement(v.a.HeaderCell,null,l.a.createElement(y,{negative:!0,fluid:!0,onClick:function(){return a.props.onItemsChange([])},disabled:0===a.props.items.length},"Remove all"))))))},a.state={fileName:"",newOne:""},a.refFileInput=l.a.createRef(),a}return n}(a.Component),N=n(142);function O(e){var t=e.rootNode;function n(){for(var e=0,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];for(var l=0,r=n;l<r.length;l++){var o=r[l];o>e&&(e=o)}return e}(function e(t,a){if(t.depth=a,null===t.yNode)return t.children=[],a;if(null===t.zNode)return t.children=[t.yNode],t.yNode.isFirstChild=!0,t.yNode.isLastChild=!0,n(a,e(t.yNode,a+1));if("_"===t.xStr[0])return n(a,e(t.yNode,a),e(t.zNode,a));var l=t.yNode;for(t.children=[t.zNode],t.zNode.isFirstChild=!1,t.zNode.isLastChild=!0;"_"===l.xStr[0];)t.children=[l.zNode].concat(Object(E.a)(t.children)),l.zNode.isFirstChild=!1,l.zNode.isLastChild=!1,l=l.yNode;return t.from=l.from,t.children=[l].concat(Object(E.a)(t.children)),l.isFirstChild=!0,l.isLastChild=!1,n(a,e(t.yNode,a+1),e(t.zNode,a+1))})(t,0);for(var a=[t],r=[],o=[],c=0;c<a.length;){void 0===r[a[c].depth]&&(r[a[c].depth]=l.a.createElement(l.a.Fragment,null),o[a[c].depth]=0),"_"!==a[c].xStr[0]&&(o[a[c].depth]<a[c].from&&(r[a[c].depth]=l.a.createElement(l.a.Fragment,null,r[a[c].depth],l.a.createElement("td",{colSpan:a[c].from-o[a[c].depth]}))),r[a[c].depth]=l.a.createElement(l.a.Fragment,null,r[a[c].depth],l.a.createElement("td",{key:c,colSpan:a[c].to-a[c].from,style:{textAlign:"center",verticalAlign:"top",padding:"0"}},0===a[c].depth?l.a.createElement(l.a.Fragment,null):l.a.createElement("table",{style:{width:"100%",height:"1em",borderSpacing:"0"}},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{style:{width:"50%",borderTop:a[c].isFirstChild?"none":"1px solid",borderRight:"1px solid"}}),l.a.createElement("td",{style:{width:"50%",borderTop:a[c].isLastChild?"none":"1px solid"}})))),l.a.createElement("div",null,"\u2003",0===a[c].children.length?a[c].xStr.slice(1,-1):a[c].xStr,"\u2003"),0===a[c].children.length?l.a.createElement(l.a.Fragment,null):l.a.createElement("table",{style:{width:"100%",height:"1em",borderSpacing:"0"}},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{style:{width:"50%",borderRight:"1px solid"}}),l.a.createElement("td",{style:{width:"50%"}})))))),o[a[c].depth]=a[c].to);var i,s=Object(g.a)(a[c].children);try{for(s.s();!(i=s.n()).done;){var u=i.value;a.push(u)}}catch(m){s.e(m)}finally{s.f()}c++}return l.a.createElement("table",{style:{margin:"auto",borderSpacing:"0"}},l.a.createElement("tbody",null,r.map((function(e,t){return l.a.createElement("tr",{key:t},e)}))))}function w(e){var t,n=[],r=Object(g.a)(e.rules);try{for(r.s();!(t=r.n()).done;){var o,c=t.value.split(" -> "),i=c[0],s=Object(g.a)(c[1].split(" | "));try{for(s.s();!(o=s.n()).done;){var u=o.value;n.push([i,u])}}catch(C){s.e(C)}finally{s.f()}}}catch(C){r.e(C)}finally{r.f()}var d=[];n.forEach((function(e,t){var n=e[1].split(" ");if(1===n.length)d.push([e[0],n[0],""]);else{var a=n[0];n.slice(1,-1).forEach((function(e,n){var l="_".concat(t,"_").concat(n);d.push([l,a,e]),a=l})),d.push([e[0],a,n[n.length-1]])}}));var p=function(e){for(var t=[e],n=0;n<t.length;){var a,l=Object(g.a)(d);try{for(l.s();!(a=l.n()).done;){var r=a.value;r[1]===t[n].xStr&&""===r[2]&&t.push({xStr:r[0],yNode:t[n],zNode:null,from:e.from,to:e.to})}}catch(C){l.e(C)}finally{l.f()}n++}return t},h=function e(t){return null===t.yNode?l.a.createElement(l.a.Fragment,null,t.xStr.slice(1,-1)):null===t.zNode?l.a.createElement(l.a.Fragment,null,"[",l.a.createElement("sub",null,l.a.createElement("em",null,t.xStr))," ",e(t.yNode),"]"):"_"===t.xStr[0]?l.a.createElement(l.a.Fragment,null,e(t.yNode)," ",e(t.zNode)):l.a.createElement(l.a.Fragment,null,"[",l.a.createElement("sub",null,l.a.createElement("em",null,t.xStr))," ",e(t.yNode)," ",e(t.zNode),"]")},f=[],b=[];return e.samples.forEach((function(t,n){for(var a=t.split(" "),r=[],o=1;o<=a.length;o++){r[o-1]=[],r[o-1][o]=p({xStr:'"'.concat(a[o-1],'"'),yNode:null,zNode:null,from:o-1,to:o});for(var c=o-2;c>=0;c--){r[c][o]=[];for(var i=c+1;i<o;i++){var s,u=Object(g.a)(d);try{var m=function(){var e,t=s.value,n=Object(g.a)(r[c][i].filter((function(e){return e.xStr===t[1]})));try{for(n.s();!(e=n.n()).done;){var a,l=e.value,u=Object(g.a)(r[i][o].filter((function(e){return e.xStr===t[2]})));try{for(u.s();!(a=u.n()).done;){var m,d=a.value;(m=r[c][o]).push.apply(m,Object(E.a)(p({xStr:t[0],yNode:l,zNode:d,from:c,to:o})))}}catch(C){u.e(C)}finally{u.f()}}}catch(C){n.e(C)}finally{n.f()}};for(u.s();!(s=u.n()).done;)m()}catch(C){u.e(C)}finally{u.f()}}}}f[n]=[],b[n]=[];var v,y=Object(g.a)(r[0][a.length].filter((function(t){return t.xStr===e.root})));try{for(y.s();!(v=y.n()).done;){var N=v.value;f[n].push(h(N)),b[n].push(l.a.createElement(O,{rootNode:N}))}}catch(C){y.e(C)}finally{y.f()}})),l.a.createElement(m.a.Pane,null,l.a.createElement(v.a,{compact:"very"},l.a.createElement(v.a.Body,null,e.samples.map((function(e,t){return l.a.createElement(a.Fragment,{key:t},l.a.createElement(v.a.Row,{positive:f[t].length>0,negative:0===f[t].length},l.a.createElement(v.a.Cell,null,e),l.a.createElement(v.a.Cell,null,0===f[t].length?"No":f[t].length," result",1===f[t].length?"":"s")),f[t].map((function(e,n){return l.a.createElement(v.a.Row,{key:n},l.a.createElement(v.a.Cell,null,e),l.a.createElement(v.a.Cell,null,l.a.createElement(N.a,{basic:!0,size:"fullscreen",trigger:l.a.createElement(y,null,"Show tree"),content:b[t][n],actions:["Close"]})))})))})))))}var S=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).isTerm=function(e){return'"'===e[0]&&'"'===e[e.length-1]},a.getTerm=function(e){return e.slice(1,e.length-1)},a.handleRulesChange=function(e){a.setState({rules:e})},a.handleSamplesChange=function(e){a.setState({samples:e})},a.rulePaneRender=function(){return l.a.createElement(C,{key:"rule",kind:"rule",items:a.state.rules,onItemsChange:a.handleRulesChange},l.a.createElement(u.a,{header:"N.b.",list:[l.a.createElement("li",{key:"0"},'Non-terminal symbols should be wrapped in ASCII quotation marks ("), e.g. ',l.a.createElement("code",null,'DP -> "the" NP'),"."),l.a.createElement("li",{key:"1"},"Multiple rules with the same left-hand side can be joined with vertical lines (|), e.g. ",l.a.createElement("code",null,"NP -> N | AdjP N | N PP | AdjP N PP"),".")]}))},a.samplePaneRender=function(){return l.a.createElement(C,{key:"sample",kind:"sample",items:a.state.samples,onItemsChange:a.handleSamplesChange},l.a.createElement(u.a,{header:"N.b.",list:[l.a.createElement("li",{key:"0"},"Terminal symbols should be space-separated, e.g. ",l.a.createElement("code",null,"\u738b\u5195 \u6b7b \u4e86 \u7236\u4eb2"),".")]}))},a.rootPaneRender=function(){return l.a.createElement(m.a.Pane,null,l.a.createElement(d.a,{label:"Start symbol",value:a.state.root,onChange:function(e){return a.setState({root:e.target.value})}}))},a.resultPaneRender=function(){return l.a.createElement(w,{rules:a.state.rules,samples:a.state.samples,root:a.state.root})},a.render=function(){return l.a.createElement(p.a,null,l.a.createElement("br",null),l.a.createElement(h.a,{as:"h1"},"CFG parser"),l.a.createElement(m.a,{panes:[{menuItem:"Set rules",render:a.rulePaneRender},{menuItem:"Set samples",render:a.samplePaneRender},{menuItem:"Set start symbol",render:a.rootPaneRender},{menuItem:"Parse",render:a.resultPaneRender}]}),l.a.createElement(p.a,{textAlign:"center"},l.a.createElement("br",null),l.a.createElement(f.a,{link:!0,horizontal:!0,items:["Version 201009"]})))},a.state={rules:[],samples:[],root:"S"},a}return n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(126);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[114,1,2]]]);
//# sourceMappingURL=main.cddb919d.chunk.js.map