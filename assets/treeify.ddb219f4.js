import{ad as E,au as K}from"./index.a1beb9a2.js";var b=function(o){for(var u=new E.Buffer(o.length),t=0,i=o.length-1;t<=i;++t,--i)u[t]=o[i],u[i]=o[t];return u},P={exports:{}};(function(l,o){(function(u,t){l.exports=t()})(K,function(){function u(n,e){var f=e?"\u2514":"\u251C";return n?f+="\u2500 ":f+="\u2500\u2500\u2510",f}function t(n,e){var f=[];for(var r in n)!n.hasOwnProperty(r)||e&&typeof n[r]=="function"||f.push(r);return f}function i(n,e,f,r,a,y,g){var c="",w=0,x,v,m=r.slice(0);if(m.push([e,f])&&r.length>0&&(r.forEach(function(s,B){B>0&&(c+=(s[1]?" ":"\u2502")+"  "),!v&&s[0]===e&&(v=!0)}),c+=u(n,f)+n,a&&(typeof e!="object"||e instanceof Date)&&(c+=": "+e),v&&(c+=" (circular ref.)"),g(c)),!v&&typeof e=="object"){var h=t(e,y);h.forEach(function(s){x=++w===h.length,i(s,e[s],x,m,a,y,g)})}}var p={};return p.asLines=function(n,e,f,r){var a=typeof f!="function"?f:!1;i(".",n,!1,[],e,a,r||f)},p.asTree=function(n,e,f){var r="";return i(".",n,!1,[],e,f,function(a){r+=a+`
`}),r},p})})(P);export{b,P as t};
