// Knockout Mapping plugin v2.2.3
// (c) 2012 Steven Sanderson, Roy Jacobs - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function(e){"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?e(require("knockout"),exports):"function"===typeof define&&define.amd?define(["knockout","exports"],e):e(ko,ko.mapping={})})(function(e,f){function u(a,c){for(var b in c)c.hasOwnProperty(b)&&c[b]&&(b&&a[b]&&"array"!==f.getType(a[b])?u(a[b],c[b]):a[b]=c[b])}function F(a,c){var b={};u(b,a);u(b,c);return b}function G(a,c){a=a||{};if(a.create instanceof Function||a.update instanceof Function||a.key instanceof
Function||a.arrayChanged instanceof Function)a={"":a};c&&(a.ignore=i(c.ignore,a.ignore),a.include=i(c.include,a.include),a.copy=i(c.copy,a.copy));a.ignore=i(a.ignore,g.ignore);a.include=i(a.include,g.include);a.copy=i(a.copy,g.copy);a.mappedProperties=a.mappedProperties||{};return a}function i(a,c){"array"!==f.getType(a)&&(a="undefined"===f.getType(a)?[]:[a]);"array"!==f.getType(c)&&(c="undefined"===f.getType(c)?[]:[c]);return e.utils.arrayGetDistinctValues(a.concat(c))}function O(a,c){var b=e.dependentObservable;
e.dependentObservable=function(b,c,d){d=d||{};b&&"object"==typeof b&&(d=b);var f=d.deferEvaluation,l=!1,k=function(b){return H({read:function(){l||(e.utils.arrayRemoveItem(a,b),l=!0);return b.apply(b,arguments)},write:function(a){return b(a)},deferEvaluation:!0})};d.deferEvaluation=!0;b=new H(b,c,d);f||(b=k(b),a.push(b));return b};e.dependentObservable.fn=H.fn;e.computed=e.dependentObservable;var d=c();e.dependentObservable=b;e.computed=e.dependentObservable;return d}function B(a,c,b,d,w,x){var A=
"array"===f.getType(e.utils.unwrapObservable(c)),x=x||"";if(f.isMapped(a))var j=e.utils.unwrapObservable(a)[o],b=F(j,b);var l=function(){return b[d]&&b[d].create instanceof Function},k=function(a){return O(C,function(){return b[d].create({data:a||c,parent:w})})},g=function(){return b[d]&&b[d].update instanceof Function},r=function(a,f){var g={data:f||c,parent:w,target:e.utils.unwrapObservable(a)};e.isWriteableObservable(a)&&(g.observable=a);return b[d].update(g)};if(j=D.get(c))return j;d=d||"";if(A){var A=
[],p=!1,h=function(a){return a};b[d]&&b[d].key&&(h=b[d].key,p=!0);e.isObservable(a)||(a=e.observableArray([]),a.mappedRemove=function(b){var c=typeof b=="function"?b:function(a){return a===h(b)};return a.remove(function(a){return c(h(a))})},a.mappedRemoveAll=function(b){var c=y(b,h);return a.remove(function(a){return e.utils.arrayIndexOf(c,h(a))!=-1})},a.mappedDestroy=function(b){var c=typeof b=="function"?b:function(a){return a===h(b)};return a.destroy(function(a){return c(h(a))})},a.mappedDestroyAll=
function(b){var c=y(b,h);return a.destroy(function(a){return e.utils.arrayIndexOf(c,h(a))!=-1})},a.mappedIndexOf=function(b){var c=y(a(),h),b=h(b);return e.utils.arrayIndexOf(c,b)},a.mappedCreate=function(b){if(a.mappedIndexOf(b)!==-1)throw Error("There already is an object with the key that you specified.");var c=l()?k(b):b;if(g()){b=r(c,b);e.isWriteableObservable(c)?c(b):c=b}a.push(c);return c});var j=y(e.utils.unwrapObservable(a),h).sort(),m=y(c,h);p&&m.sort();var p=e.utils.compareArrays(j,m),
j={},i,v=e.utils.unwrapObservable(c),t={},u=!0,m=0;for(i=v.length;m<i;m++){var n=h(v[m]);if(void 0===n||n instanceof Object){u=!1;break}t[n]=v[m]}v=[];m=0;for(i=p.length;m<i;m++){var n=p[m],q,s=x+"["+m+"]";switch(n.status){case "added":var z=u?t[n.value]:E(e.utils.unwrapObservable(c),n.value,h);q=B(void 0,z,b,d,a,s);l()||(q=e.utils.unwrapObservable(q));s=J(e.utils.unwrapObservable(c),z,j);v[s]=q;j[s]=!0;break;case "retained":z=u?t[n.value]:E(e.utils.unwrapObservable(c),n.value,h);q=E(a,n.value,h);
B(q,z,b,d,a,s);s=J(e.utils.unwrapObservable(c),z,j);v[s]=q;j[s]=!0;break;case "deleted":q=E(a,n.value,h)}A.push({event:n.status,item:q})}a(v);b[d]&&b[d].arrayChanged&&e.utils.arrayForEach(A,function(a){b[d].arrayChanged(a.event,a.item)})}else if(K(c)){a=e.utils.unwrapObservable(a);if(!a){if(l())return p=k(),g()&&(p=r(p)),p;if(g())return r(p);a={}}g()&&(a=r(a));D.save(c,a);L(c,function(d){var f=x.length?x+"."+d:d;if(-1==e.utils.arrayIndexOf(b.ignore,f))if(-1!=e.utils.arrayIndexOf(b.copy,f))a[d]=c[d];
else{var w=D.get(c[d])||B(a[d],c[d],b,d,a,f);if(e.isWriteableObservable(a[d]))a[d](e.utils.unwrapObservable(w));else a[d]=w;b.mappedProperties[f]=!0}})}else switch(f.getType(c)){case "function":g()?e.isWriteableObservable(c)?(c(r(c)),a=c):a=r(c):a=c;break;default:e.isWriteableObservable(a)?g()?a(r(a)):a(e.utils.unwrapObservable(c)):(a=l()?k():e.observable(e.utils.unwrapObservable(c)),g()&&a(r(a)))}return a}function J(a,c,b){for(var d=0,e=a.length;d<e;d++)if(!0!==b[d]&&a[d]===c)return d;return null}
function M(a,c){var b;c&&(b=c(a));"undefined"===f.getType(b)&&(b=a);return e.utils.unwrapObservable(b)}function E(a,c,b){for(var a=e.utils.unwrapObservable(a),d=0,f=a.length;d<f;d++){var g=a[d];if(M(g,b)===c)return g}throw Error("When calling ko.update*, the key '"+c+"' was not found!");}function y(a,c){return e.utils.arrayMap(e.utils.unwrapObservable(a),function(a){return c?M(a,c):a})}function L(a,c){if("array"===f.getType(a))for(var b=0;b<a.length;b++)c(b);else for(b in a)c(b)}function K(a){var c=
f.getType(a);return("object"===c||"array"===c)&&null!==a}function P(){var a=[],c=[];this.save=function(b,d){var f=e.utils.arrayIndexOf(a,b);0<=f?c[f]=d:(a.push(b),c.push(d))};this.get=function(b){b=e.utils.arrayIndexOf(a,b);return 0<=b?c[b]:void 0}}function N(){var a={},c=function(b){var c;try{c=JSON.stringify(b)}catch(e){c="$$$"}b=a[c];void 0===b&&(b=new P,a[c]=b);return b};this.save=function(a,d){c(a).save(a,d)};this.get=function(a){return c(a).get(a)}}var o="__ko_mapping__",H=e.dependentObservable,
I=0,C,D,t={include:["_destroy"],ignore:[],copy:[]},g=t;f.isMapped=function(a){return(a=e.utils.unwrapObservable(a))&&a[o]};f.fromJS=function(a){if(0==arguments.length)throw Error("When calling ko.fromJS, pass the object you want to convert.");window.setTimeout(function(){I=0},0);I++||(C=[],D=new N);var c,b;2==arguments.length&&(arguments[1][o]?b=arguments[1]:c=arguments[1]);3==arguments.length&&(c=arguments[1],b=arguments[2]);b&&(c=F(c,b[o]));c=G(c);var d=B(b,a,c);b&&(d=b);--I||window.setTimeout(function(){for(;C.length;){var a=
C.pop();a&&a()}},0);d[o]=F(d[o],c);return d};f.fromJSON=function(a){var c=e.utils.parseJson(a);arguments[0]=c;return f.fromJS.apply(this,arguments)};f.updateFromJS=function(){throw Error("ko.mapping.updateFromJS, use ko.mapping.fromJS instead. Please note that the order of parameters is different!");};f.updateFromJSON=function(){throw Error("ko.mapping.updateFromJSON, use ko.mapping.fromJSON instead. Please note that the order of parameters is different!");};f.toJS=function(a,c){g||f.resetDefaultOptions();
if(0==arguments.length)throw Error("When calling ko.mapping.toJS, pass the object you want to convert.");if("array"!==f.getType(g.ignore))throw Error("ko.mapping.defaultOptions().ignore should be an array.");if("array"!==f.getType(g.include))throw Error("ko.mapping.defaultOptions().include should be an array.");if("array"!==f.getType(g.copy))throw Error("ko.mapping.defaultOptions().copy should be an array.");c=G(c,a[o]);return f.visitModel(a,function(a){return e.utils.unwrapObservable(a)},c)};f.toJSON=
function(a,c){var b=f.toJS(a,c);return e.utils.stringifyJson(b)};f.defaultOptions=function(){if(0<arguments.length)g=arguments[0];else return g};f.resetDefaultOptions=function(){g={include:t.include.slice(0),ignore:t.ignore.slice(0),copy:t.copy.slice(0)}};f.getType=function(a){if(a&&"object"===typeof a){if(a.constructor==(new Date).constructor)return"date";if("[object Array]"===Object.prototype.toString.call(a))return"array"}return typeof a};f.visitModel=function(a,c,b){b=b||{};b.visitedObjects=b.visitedObjects||
new N;var d,g=e.utils.unwrapObservable(a);if(K(g))b=G(b,g[o]),c(a,b.parentName),d="array"===f.getType(g)?[]:{};else return c(a,b.parentName);b.visitedObjects.save(a,d);var i=b.parentName;L(g,function(a){if(!(b.ignore&&-1!=e.utils.arrayIndexOf(b.ignore,a))){var j=g[a],l=b,k=i||"";"array"===f.getType(g)?i&&(k+="["+a+"]"):(i&&(k+="."),k+=a);l.parentName=k;if(!(-1===e.utils.arrayIndexOf(b.copy,a)&&-1===e.utils.arrayIndexOf(b.include,a)&&g[o]&&g[o].mappedProperties&&!g[o].mappedProperties[a]&&"array"!==
f.getType(g)))switch(f.getType(e.utils.unwrapObservable(j))){case "object":case "array":case "undefined":l=b.visitedObjects.get(j);d[a]="undefined"!==f.getType(l)?l:f.visitModel(j,c);break;default:d[a]=c(j,b.parentName)}}});return d}});
