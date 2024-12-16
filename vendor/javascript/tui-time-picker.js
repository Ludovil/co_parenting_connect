// tui-time-picker@2.1.6 downloaded from https://ga.jspm.io/npm:tui-time-picker@2.1.6/dist/tui-time-picker.js

var e="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var t={};
/*!
 * TOAST UI Time Picker
 * @version 2.1.6
 * @license MIT
 */(function webpackUniversalModuleDefinition(e,i){t=i()})(window,(function(){return function(e){var t={};function __webpack_require__(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:false,exports:{}};e[i].call(n.exports,n,n.exports,__webpack_require__);n.l=true;return n.exports}__webpack_require__.m=e;__webpack_require__.c=t;__webpack_require__.d=function(e,t,i){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:true,get:i})};__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});Object.defineProperty(e,"__esModule",{value:true})};__webpack_require__.t=function(e,t){1&t&&(e=__webpack_require__(e));if(8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);__webpack_require__.r(i);Object.defineProperty(i,"default",{enumerable:true,value:e});if(2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(i,n,function(t){return e[t]}.bind(null,n));return i};__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};__webpack_require__.d(t,"a",t);return t};__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};__webpack_require__.p="dist";return __webpack_require__(__webpack_require__.s=20)}([function(e,t,i){var n=i(3);
/**
       * Returns the first index at which a given element can be found in the array
       * from start index(default 0), or -1 if it is not present.
       * It compares searchElement to elements of the Array using strict equality
       * (the same method used by the ===, or triple-equals, operator).
       * @param {*} searchElement Element to locate in the array
       * @param {Array} array Array that will be traversed.
       * @param {number} startIndex Start index in array for searching (default 0)
       * @returns {number} the First index at which a given element, or -1 if it is not present
       * @memberof module:array
       * @example
       * var inArray = require('tui-code-snippet/array/inArray'); // node, commonjs
       *
       * var arr = ['one', 'two', 'three', 'four'];
       * var idx1 = inArray('one', arr, 3); // -1
       * var idx2 = inArray('one', arr); // 0
       */function inArray(e,t,i){var r;var s;i=i||0;if(!n(t))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,i);s=t.length;for(r=i;i>=0&&r<s;r+=1)if(t[r]===e)return r;return-1}e.exports=inArray},function(e,t,i){
/**
       * Execute the provided callback once for each element present
       * in the array(or Array-like object) in ascending order.
       * If the callback function returns false, the loop will be stopped.
       * Callback function(iteratee) is invoked with three arguments:
       *  1) The value of the element
       *  2) The index of the element
       *  3) The array(or Array-like object) being traversed
       * @param {Array|Arguments|NodeList} arr The array(or Array-like object) that will be traversed
       * @param {function} iteratee Callback function
       * @param {Object} [context] Context(this) of callback function
       * @memberof module:collection
       * @example
       * var forEachArray = require('tui-code-snippet/collection/forEachArray'); // node, commonjs
       *
       * var sum = 0;
       *
       * forEachArray([1,2,3], function(value){
       *     sum += value;
       * });
       * alert(sum); // 6
       */
function forEachArray(e,t,i){var n=0;var r=e.length;i=i||null;for(;n<r;n+=1)if(false===t.call(i,e[n],n,e))break}e.exports=forEachArray},function(e,t,i){
/**
       * Extend the target object from other objects.
       * @param {object} target - Object that will be extended
       * @param {...object} objects - Objects as sources
       * @returns {object} Extended object
       * @memberof module:object
       */
function extend(e,t){var i=Object.prototype.hasOwnProperty;var n,r,s,a;for(s=1,a=arguments.length;s<a;s+=1){n=arguments[s];for(r in n)i.call(n,r)&&(e[r]=n[r])}return e}e.exports=extend},function(e,t,i){
/**
       * Check whether the given variable is an instance of Array or not.
       * If the given variable is an instance of Array, return true.
       * @param {*} obj - Target for checking
       * @returns {boolean} Is array instance?
       * @memberof module:type
       */
function isArray(e){return e instanceof Array}e.exports=isArray},function(e,t,i){var n=i(3);var r=i(1);var s=i(16);
/**
       * Execute the provided callback once for each property of object(or element of array) which actually exist.
       * If the object is Array-like object(ex-arguments object), It needs to transform to Array.(see 'ex2' of example).
       * If the callback function returns false, the loop will be stopped.
       * Callback function(iteratee) is invoked with three arguments:
       *  1) The value of the property(or The value of the element)
       *  2) The name of the property(or The index of the element)
       *  3) The object being traversed
       * @param {Object} obj The object that will be traversed
       * @param {function} iteratee Callback function
       * @param {Object} [context] Context(this) of callback function
       * @memberof module:collection
       * @example
       * var forEach = require('tui-code-snippet/collection/forEach'); // node, commonjs
       *
       * var sum = 0;
       *
       * forEach([1,2,3], function(value){
       *     sum += value;
       * });
       * alert(sum); // 6
       *
       * // In case of Array-like object
       * var array = Array.prototype.slice.call(arrayLike); // change to array
       * forEach(array, function(value){
       *     sum += value;
       * });
       */function forEach(e,t,i){n(e)?r(e,t,i):s(e,t,i)}e.exports=forEach},function(e,t,i){
/**
       * Check whether the given variable is undefined or not.
       * If the given variable is undefined, returns true.
       * @param {*} obj - Target for checking
       * @returns {boolean} Is undefined?
       * @memberof module:type
       */
function isUndefined(e){return void 0===e}e.exports=isUndefined},function(e,t,i){
/**
       * Check whether the given variable is a string or not.
       * If the given variable is a string, return true.
       * @param {*} obj - Target for checking
       * @returns {boolean} Is string?
       * @memberof module:type
       */
function isString(e){return"string"===typeof e||e instanceof String}e.exports=isString},function(e,t,i){var n=i(0);var r=i(4);var s=i(3);var a=i(6);var o=i(2);var u=/{{\s?|\s?}}/g;var l=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/;var c=/\[\s?|\s?\]/;var h=/^[a-zA-Z_]+\.[a-zA-Z_]+$/;var m=/\./;var f=/^["']\w+["']$/;var d=/"|'/g;var p=/^-?\d+\.?\d*$/;var v=2;var _={if:handleIf,each:handleEach,with:handleWith};var g=3==="a".split(/a/).length;
/**
       * Split by RegExp. (Polyfill for IE8)
       * @param {string} text - text to be splitted\
       * @param {RegExp} regexp - regular expression
       * @returns {Array.<string>}
       */var x=function(){return g?function(e,t){return e.split(t)}:function(e,t){var i=[];var n=0;var r,s;t.global||(t=new RegExp(t,"g"));r=t.exec(e);while(null!==r){s=r.index;i.push(e.slice(n,s));n=s+r[0].length;r=t.exec(e)}i.push(e.slice(n));return i}}();
/**
       * Find value in the context by an expression.
       * @param {string} exp - an expression
       * @param {object} context - context
       * @returns {*}
       * @private
       */function getValueFromContext(e,t){var i;var n=t[e];if("true"===e)n=true;else if("false"===e)n=false;else if(f.test(e))n=e.replace(d,"");else if(l.test(e)){i=e.split(c);n=getValueFromContext(i[0],t)[getValueFromContext(i[1],t)]}else if(h.test(e)){i=e.split(m);n=getValueFromContext(i[0],t)[i[1]]}else p.test(e)&&(n=parseFloat(e));return n}
/**
       * Extract elseif and else expressions.
       * @param {Array.<string>} ifExps - args of if expression
       * @param {Array.<string>} sourcesInsideBlock - sources inside if block
       * @returns {object} - exps: expressions of if, elseif, and else / sourcesInsideIf: sources inside if, elseif, and else block.
       * @private
       */function extractElseif(e,t){var i=[e];var n=[];var s=0;var a=0;r(t,(function(e,r){if(0===e.indexOf("if"))s+=1;else if("/if"===e)s-=1;else if(!s&&(0===e.indexOf("elseif")||"else"===e)){i.push("else"===e?["true"]:e.split(" ").slice(1));n.push(t.slice(a,r));a=r+1}}));n.push(t.slice(a));return{exps:i,sourcesInsideIf:n}}
/**
       * Helper function for "if". 
       * @param {Array.<string>} exps - array of expressions split by spaces
       * @param {Array.<string>} sourcesInsideBlock - array of sources inside the if block
       * @param {object} context - context
       * @returns {string}
       * @private
       */function handleIf(e,t,i){var n=extractElseif(e,t);var s=false;var a="";r(n.exps,(function(e,t){s=handleExpression(e,i);s&&(a=compile(n.sourcesInsideIf[t],i));return!s}));return a}
/**
       * Helper function for "each".
       * @param {Array.<string>} exps - array of expressions split by spaces
       * @param {Array.<string>} sourcesInsideBlock - array of sources inside the each block
       * @param {object} context - context
       * @returns {string}
       * @private
       */function handleEach(e,t,i){var n=handleExpression(e,i);var a=s(n)?"@index":"@key";var u={};var l="";r(n,(function(e,n){u[a]=n;u["@this"]=e;o(i,u);l+=compile(t.slice(),i)}));return l}
/**
       * Helper function for "with ... as"
       * @param {Array.<string>} exps - array of expressions split by spaces
       * @param {Array.<string>} sourcesInsideBlock - array of sources inside the with block
       * @param {object} context - context
       * @returns {string}
       * @private
       */function handleWith(e,t,i){var r=n("as",e);var s=e[r+1];var a=handleExpression(e.slice(0,r),i);var u={};u[s]=a;return compile(t,o(i,u))||""}
/**
       * Extract sources inside block in place.
       * @param {Array.<string>} sources - array of sources
       * @param {number} start - index of start block
       * @param {number} end - index of end block
       * @returns {Array.<string>}
       * @private
       */function extractSourcesInsideBlock(e,t,i){var n=e.splice(t+1,i-t);n.pop();return n}
/**
       * Handle block helper function
       * @param {string} helperKeyword - helper keyword (ex. if, each, with)
       * @param {Array.<string>} sourcesToEnd - array of sources after the starting block
       * @param {object} context - context
       * @returns {Array.<string>}
       * @private
       */function handleBlockHelper(e,t,i){var n=_[e];var r=1;var s=0;var o;var u=s+v;var l=t[u];while(r&&a(l)){if(0===l.indexOf(e))r+=1;else if(0===l.indexOf("/"+e)){r-=1;o=u}u+=v;l=t[u]}if(r)throw Error(e+" needs {{/"+e+"}} expression.");t[s]=n(t[s].split(" ").slice(1),extractSourcesInsideBlock(t,s,o),i);return t}
/**
       * Helper function for "custom helper".
       * If helper is not a function, return helper itself.
       * @param {Array.<string>} exps - array of expressions split by spaces (first element: helper)
       * @param {object} context - context
       * @returns {string}
       * @private
       */function handleExpression(e,t){var i=getValueFromContext(e[0],t);return i instanceof Function?executeFunction(i,e.slice(1),t):i}
/**
       * Execute a helper function.
       * @param {Function} helper - helper function
       * @param {Array.<string>} argExps - expressions of arguments
       * @param {object} context - context
       * @returns {string} - result of executing the function with arguments
       * @private
       */function executeFunction(e,t,i){var n=[];r(t,(function(e){n.push(getValueFromContext(e,i))}));return e.apply(null,n)}
/**
       * Get a result of compiling an expression with the context.
       * @param {Array.<string>} sources - array of sources split by regexp of expression.
       * @param {object} context - context
       * @returns {Array.<string>} - array of sources that bind with its context
       * @private
       */function compile(e,t){var i=1;var n=e[i];var r,s,o;while(a(n)){r=n.split(" ");s=r[0];if(_[s]){o=handleBlockHelper(s,e.splice(i,e.length-i),t);e=e.concat(o)}else e[i]=handleExpression(r,t);i+=v;n=e[i]}return e.join("")}
/**
       * Convert text by binding expressions with context.
       * <br>
       * If expression exists in the context, it will be replaced.
       * ex) '{{title}}' with context {title: 'Hello!'} is converted to 'Hello!'.
       * An array or object can be accessed using bracket and dot notation.
       * ex) '{{odds\[2\]}}' with context {odds: \[1, 3, 5\]} is converted to '5'.
       * ex) '{{evens\[first\]}}' with context {evens: \[2, 4\], first: 0} is converted to '2'.
       * ex) '{{project\["name"\]}}' and '{{project.name}}' with context {project: {name: 'CodeSnippet'}} is converted to 'CodeSnippet'.
       * <br>
       * If replaced expression is a function, next expressions will be arguments of the function.
       * ex) '{{add 1 2}}' with context {add: function(a, b) {return a + b;}} is converted to '3'.
       * <br>
       * It has 3 predefined block helpers '{{helper ...}} ... {{/helper}}': 'if', 'each', 'with ... as ...'.
       * 1) 'if' evaluates conditional statements. It can use with 'elseif' and 'else'.
       * 2) 'each' iterates an array or object. It provides '@index'(array), '@key'(object), and '@this'(current element).
       * 3) 'with ... as ...' provides an alias.
       * @param {string} text - text with expressions
       * @param {object} context - context
       * @returns {string} - text that bind with its context
       * @memberof module:domUtil
       * @example
       * var template = require('tui-code-snippet/domUtil/template');
       * 
       * var source = 
       *     '<h1>'
       *   +   '{{if isValidNumber title}}'
       *   +     '{{title}}th'
       *   +   '{{elseif isValidDate title}}'
       *   +     'Date: {{title}}'
       *   +   '{{/if}}'
       *   + '</h1>'
       *   + '{{each list}}'
       *   +   '{{with addOne @index as idx}}'
       *   +     '<p>{{idx}}: {{@this}}</p>'
       *   +   '{{/with}}'
       *   + '{{/each}}';
       * 
       * var context = {
       *   isValidDate: function(text) {
       *     return /^\d{4}-(0|1)\d-(0|1|2|3)\d$/.test(text);
       *   },
       *   isValidNumber: function(text) {
       *     return /^\d+$/.test(text);
       *   }
       *   title: '2019-11-25',
       *   list: ['Clean the room', 'Wash the dishes'],
       *   addOne: function(num) {
       *     return num + 1;
       *   }
       * };
       * 
       * var result = template(source, context);
       * console.log(result); // <h1>Date: 2019-11-25</h1><p>1: Clean the room</p><p>2: Wash the dishes</p>
       */function template(e,t){return compile(x(e,u),t)}e.exports=template},function(t,i,n){var r=n(2);var s=n(23);var a=n(6);var o=n(25);var u=n(3);var l=n(26);var c=n(4);var h=/\s+/g;function CustomEvents(){
/**
           * @type {HandlerItem[]}
           */
(this||e).events=null;
/**
           * only for checking specific context event was binded
           * @type {object[]}
           */(this||e).contexts=null}
/**
       * Mixin custom events feature to specific constructor
       * @param {function} func - constructor
       * @example
       * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
       *
       * var model;
       * function Model() {
       *     this.name = '';
       * }
       * CustomEvents.mixin(Model);
       *
       * model = new Model();
       * model.on('change', function() { this.name = 'model'; }, this);
       * model.fire('change');
       * alert(model.name); // 'model';
       */CustomEvents.mixin=function(e){r(e.prototype,CustomEvents.prototype)};
/**
       * Get HandlerItem object
       * @param {function} handler - handler function
       * @param {object} [context] - context for handler
       * @returns {HandlerItem} HandlerItem object
       * @private
       */CustomEvents.prototype._getHandlerItem=function(e,t){var i={handler:e};t&&(i.context=t);return i};
/**
       * Get event object safely
       * @param {string} [eventName] - create sub event map if not exist.
       * @returns {(object|array)} event object. if you supplied `eventName`
       *  parameter then make new array and return it
       * @private
       */CustomEvents.prototype._safeEvent=function(t){var i=(this||e).events;var n;i||(i=(this||e).events={});if(t){n=i[t];if(!n){n=[];i[t]=n}i=n}return i};
/**
       * Get context array safely
       * @returns {array} context array
       * @private
       */CustomEvents.prototype._safeContext=function(){var t=(this||e).contexts;t||(t=(this||e).contexts=[]);return t};
/**
       * Get index of context
       * @param {object} ctx - context that used for bind custom event
       * @returns {number} index of context
       * @private
       */CustomEvents.prototype._indexOfContext=function(e){var t=this._safeContext();var i=0;while(t[i]){if(e===t[i][0])return i;i+=1}return-1};
/**
       * Memorize supplied context for recognize supplied object is context or
       *  name: handler pair object when off()
       * @param {object} ctx - context object to memorize
       * @private
       */CustomEvents.prototype._memorizeContext=function(e){var t,i;if(s(e)){t=this._safeContext();i=this._indexOfContext(e);i>-1?t[i][1]+=1:t.push([e,1])}};
/**
       * Forget supplied context object
       * @param {object} ctx - context object to forget
       * @private
       */CustomEvents.prototype._forgetContext=function(e){var t,i;if(s(e)){t=this._safeContext();i=this._indexOfContext(e);if(i>-1){t[i][1]-=1;t[i][1]<=0&&t.splice(i,1)}}};
/**
       * Bind event handler
       * @param {(string|{name:string, handler:function})} eventName - custom
       *  event name or an object {eventName: handler}
       * @param {(function|object)} [handler] - handler function or context
       * @param {object} [context] - context for binding
       * @private
       */CustomEvents.prototype._bindEvent=function(e,t,i){var n=this._safeEvent(e);this._memorizeContext(i);n.push(this._getHandlerItem(t,i))};
/**
       * Bind event handlers
       * @param {(string|{name:string, handler:function})} eventName - custom
       *  event name or an object {eventName: handler}
       * @param {(function|object)} [handler] - handler function or context
       * @param {object} [context] - context for binding
       * //-- #1. Get Module --//
       * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
       *
       * //-- #2. Use method --//
       * // # 2.1 Basic Usage
       * CustomEvents.on('onload', handler);
       *
       * // # 2.2 With context
       * CustomEvents.on('onload', handler, myObj);
       *
       * // # 2.3 Bind by object that name, handler pairs
       * CustomEvents.on({
       *     'play': handler,
       *     'pause': handler2
       * });
       *
       * // # 2.4 Bind by object that name, handler pairs with context object
       * CustomEvents.on({
       *     'play': handler
       * }, myObj);
       */CustomEvents.prototype.on=function(t,i,n){var r=this||e;if(a(t)){t=t.split(h);c(t,(function(e){r._bindEvent(e,i,n)}))}else if(o(t)){n=i;c(t,(function(e,t){r.on(t,e,n)}))}};
/**
       * Bind one-shot event handlers
       * @param {(string|{name:string,handler:function})} eventName - custom
       *  event name or an object {eventName: handler}
       * @param {function|object} [handler] - handler function or context
       * @param {object} [context] - context for binding
       */CustomEvents.prototype.once=function(t,i,n){var r=this||e;if(o(t)){n=i;c(t,(function(e,t){r.once(t,e,n)}))}else this.on(t,onceHandler,n);function onceHandler(){i.apply(n,arguments);r.off(t,onceHandler,n)}};
/**
       * Splice supplied array by callback result
       * @param {array} arr - array to splice
       * @param {function} predicate - function return boolean
       * @private
       */CustomEvents.prototype._spliceMatches=function(e,t){var i=0;var n;if(u(e))for(n=e.length;i<n;i+=1)if(true===t(e[i])){e.splice(i,1);n-=1;i-=1}};
/**
       * Get matcher for unbind specific handler events
       * @param {function} handler - handler function
       * @returns {function} handler matcher
       * @private
       */CustomEvents.prototype._matchHandler=function(t){var i=this||e;return function(e){var n=t===e.handler;n&&i._forgetContext(e.context);return n}};
/**
       * Get matcher for unbind specific context events
       * @param {object} context - context
       * @returns {function} object matcher
       * @private
       */CustomEvents.prototype._matchContext=function(t){var i=this||e;return function(e){var n=t===e.context;n&&i._forgetContext(e.context);return n}};
/**
       * Get matcher for unbind specific hander, context pair events
       * @param {function} handler - handler function
       * @param {object} context - context
       * @returns {function} handler, context matcher
       * @private
       */CustomEvents.prototype._matchHandlerAndContext=function(t,i){var n=this||e;return function(e){var r=t===e.handler;var s=i===e.context;var a=r&&s;a&&n._forgetContext(e.context);return a}};
/**
       * Unbind event by event name
       * @param {string} eventName - custom event name to unbind
       * @param {function} [handler] - handler function
       * @private
       */CustomEvents.prototype._offByEventName=function(t,i){var n=this||e;var r=l(i);var s=n._matchHandler(i);t=t.split(h);c(t,(function(e){var t=n._safeEvent(e);if(r)n._spliceMatches(t,s);else{c(t,(function(e){n._forgetContext(e.context)}));n.events[e]=[]}}))};
/**
       * Unbind event by handler function
       * @param {function} handler - handler function
       * @private
       */CustomEvents.prototype._offByHandler=function(t){var i=this||e;var n=this._matchHandler(t);c(this._safeEvent(),(function(e){i._spliceMatches(e,n)}))};
/**
       * Unbind event by object(name: handler pair object or context object)
       * @param {object} obj - context or {name: handler} pair object
       * @param {function} handler - handler function
       * @private
       */CustomEvents.prototype._offByObject=function(t,i){var n=this||e;var r;if(this._indexOfContext(t)<0)c(t,(function(e,t){n.off(t,e)}));else if(a(i)){r=this._matchContext(t);n._spliceMatches(this._safeEvent(i),r)}else if(l(i)){r=this._matchHandlerAndContext(i,t);c(this._safeEvent(),(function(e){n._spliceMatches(e,r)}))}else{r=this._matchContext(t);c(this._safeEvent(),(function(e){n._spliceMatches(e,r)}))}};
/**
       * Unbind custom events
       * @param {(string|object|function)} eventName - event name or context or
       *  {name: handler} pair object or handler function
       * @param {(function)} handler - handler function
       * @example
       * //-- #1. Get Module --//
       * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
       *
       * //-- #2. Use method --//
       * // # 2.1 off by event name
       * CustomEvents.off('onload');
       *
       * // # 2.2 off by event name and handler
       * CustomEvents.off('play', handler);
       *
       * // # 2.3 off by handler
       * CustomEvents.off(handler);
       *
       * // # 2.4 off by context
       * CustomEvents.off(myObj);
       *
       * // # 2.5 off by context and handler
       * CustomEvents.off(myObj, handler);
       *
       * // # 2.6 off by context and event name
       * CustomEvents.off(myObj, 'onload');
       *
       * // # 2.7 off by an Object.<string, function> that is {eventName: handler}
       * CustomEvents.off({
       *   'play': handler,
       *   'pause': handler2
       * });
       *
       * // # 2.8 off the all events
       * CustomEvents.off();
       */CustomEvents.prototype.off=function(t,i){if(a(t))this._offByEventName(t,i);else if(arguments.length)l(t)?this._offByHandler(t):o(t)&&this._offByObject(t,i);else{(this||e).events={};(this||e).contexts=[]}};
/**
       * Fire custom event
       * @param {string} eventName - name of custom event
       */CustomEvents.prototype.fire=function(t){(this||e).invoke.apply(this||e,arguments)};
/**
       * Fire a event and returns the result of operation 'boolean AND' with all
       *  listener's results.
       *
       * So, It is different from {@link CustomEvents#fire}.
       *
       * In service code, use this as a before event in component level usually
       *  for notifying that the event is cancelable.
       * @param {string} eventName - Custom event name
       * @param {...*} data - Data for event
       * @returns {boolean} The result of operation 'boolean AND'
       * @example
       * var map = new Map();
       * map.on({
       *     'beforeZoom': function() {
       *         // It should cancel the 'zoom' event by some conditions.
       *         if (that.disabled && this.getState()) {
       *             return false;
       *         }
       *         return true;
       *     }
       * });
       *
       * if (this.invoke('beforeZoom')) {    // check the result of 'beforeZoom'
       *     // if true,
       *     // doSomething
       * }
       */CustomEvents.prototype.invoke=function(e){var t,i,n,r;if(!this.hasListener(e))return true;t=this._safeEvent(e);i=Array.prototype.slice.call(arguments,1);n=0;while(t[n]){r=t[n];if(false===r.handler.apply(r.context,i))return false;n+=1}return true};
/**
       * Return whether at least one of the handlers is registered in the given
       *  event name.
       * @param {string} eventName - Custom event name
       * @returns {boolean} Is there at least one handler in event name?
       */CustomEvents.prototype.hasListener=function(e){return this.getListenerLength(e)>0};
/**
       * Return a count of events registered.
       * @param {string} eventName - Custom event name
       * @returns {number} number of event
       */CustomEvents.prototype.getListenerLength=function(e){var t=this._safeEvent(e);return t.length};t.exports=CustomEvents},function(e,t,i){var n=i(27);var r=i(2);
/**
       * Help a constructor to be defined and to inherit from the other constructors
       * @param {*} [parent] Parent constructor
       * @param {Object} props Members of constructor
       *  @param {Function} props.init Initialization method
       *  @param {Object} [props.static] Static members of constructor
       * @returns {*} Constructor
       * @memberof module:defineClass
       * @example
       * var defineClass = require('tui-code-snippet/defineClass/defineClass'); // node, commonjs
       *
       * //-- #2. Use property --//
       * var Parent = defineClass({
       *     init: function() { // constuructor
       *         this.name = 'made by def';
       *     },
       *     method: function() {
       *         // ...
       *     },
       *     static: {
       *         staticMethod: function() {
       *              // ...
       *         }
       *     }
       * });
       *
       * var Child = defineClass(Parent, {
       *     childMethod: function() {}
       * });
       *
       * Parent.staticMethod();
       *
       * var parentInstance = new Parent();
       * console.log(parentInstance.name); //made by def
       * parentInstance.staticMethod(); // Error
       *
       * var childInstance = new Child();
       * childInstance.method();
       * childInstance.childMethod();
       */function defineClass(e,t){var i;if(!t){t=e;e=null}i=t.init||function(){};e&&n(i,e);if(t.hasOwnProperty("static")){r(i,t.static);delete t.static}r(i.prototype,t);return i}e.exports=defineClass},function(e,t,i){var n=i(6);var r=i(4);var s=i(17);
/**
       * Bind DOM events.
       * @param {HTMLElement} element - element to bind events
       * @param {(string|object)} types - Space splitted events names or eventName:handler object
       * @param {(function|object)} handler - handler function or context for handler method
       * @param {object} [context] context - context for handler method.
       * @memberof module:domEvent
       * @example
       * var div = document.querySelector('div');
       * 
       * // Bind one event to an element.
       * on(div, 'click', toggle);
       * 
       * // Bind multiple events with a same handler to multiple elements at once.
       * // Use event names splitted by a space.
       * on(div, 'mouseenter mouseleave', changeColor);
       * 
       * // Bind multiple events with different handlers to an element at once.
       * // Use an object which of key is an event name and value is a handler function.
       * on(div, {
       *   keydown: highlight,
       *   keyup: dehighlight
       * });
       * 
       * // Set a context for handler method.
       * var name = 'global';
       * var repository = {name: 'CodeSnippet'};
       * on(div, 'drag', function() {
       *  console.log(this.name);
       * }, repository);
       * // Result when you drag a div: "CodeSnippet"
       */function on(e,t,i,s){n(t)?r(t.split(/\s+/g),(function(t){bindEvent(e,t,i,s)})):r(t,(function(t,n){bindEvent(e,n,t,i)}))}
/**
       * Bind DOM events
       * @param {HTMLElement} element - element to bind events
       * @param {string} type - events name
       * @param {function} handler - handler function or context for handler method
       * @param {object} [context] context - context for handler method.
       * @private
       */function bindEvent(e,t,i,n){
/**
           * Event handler
           * @param {Event} e - event object
           */
function eventHandler(t){i.call(n||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,eventHandler):"attachEvent"in e&&e.attachEvent("on"+t,eventHandler);memorizeHandler(e,t,i,eventHandler)}
/**
       * Memorize DOM event handler for unbinding.
       * @param {HTMLElement} element - element to bind events
       * @param {string} type - events name
       * @param {function} handler - handler function that user passed at on() use
       * @param {function} wrappedHandler - handler function that wrapped by domevent for implementing some features
       * @private
       */function memorizeHandler(e,t,i,n){var a=s(e,t);var o=false;r(a,(function(e){if(e.handler===i){o=true;return false}return true}));o||a.push({handler:i,wrappedHandler:n})}e.exports=on},function(e,t,i){var n=i(6);var r=i(4);var s=i(17);
/**
       * Unbind DOM events
       * If a handler function is not passed, remove all events of that type.
       * @param {HTMLElement} element - element to unbind events
       * @param {(string|object)} types - Space splitted events names or eventName:handler object
       * @param {function} [handler] - handler function
       * @memberof module:domEvent
       * @example
       * // Following the example of domEvent#on
       * 
       * // Unbind one event from an element.
       * off(div, 'click', toggle);
       * 
       * // Unbind multiple events with a same handler from multiple elements at once.
       * // Use event names splitted by a space.
       * off(element, 'mouseenter mouseleave', changeColor);
       * 
       * // Unbind multiple events with different handlers from an element at once.
       * // Use an object which of key is an event name and value is a handler function.
       * off(div, {
       *   keydown: highlight,
       *   keyup: dehighlight
       * });
       * 
       * // Unbind events without handlers.
       * off(div, 'drag');
       */function off(e,t,i){n(t)?r(t.split(/\s+/g),(function(t){unbindEvent(e,t,i)})):r(t,(function(t,i){unbindEvent(e,i,t)}))}
/**
       * Unbind DOM events
       * If a handler function is not passed, remove all events of that type.
       * @param {HTMLElement} element - element to unbind events
       * @param {string} type - events name
       * @param {function} [handler] - handler function
       * @private
       */function unbindEvent(e,t,i){var n=s(e,t);var a;if(i){r(n,(function(n,r){if(i===n.handler){removeHandler(e,t,n.wrappedHandler);a=r;return false}return true}));n.splice(a,1)}else{r(n,(function(i){removeHandler(e,t,i.wrappedHandler)}));n.splice(0,n.length)}}
/**
       * Remove an event handler
       * @param {HTMLElement} element - An element to remove an event
       * @param {string} type - event type
       * @param {function} handler - event handler
       * @private
       */function removeHandler(e,t,i){"removeEventListener"in e?e.removeEventListener(t,i):"detachEvent"in e&&e.detachEvent("on"+t,i)}e.exports=off},function(e,t,i){var n=i(30);
/**
       * Find parent element recursively
       * @param {HTMLElement} element - base element to start find
       * @param {string} selector - selector string for find
       * @returns {HTMLElement} - element finded or null
       * @memberof module:domUtil
       */function closest(e,t){var i=e.parentNode;if(n(e,t))return e;while(i&&i!==document){if(n(i,t))return i;i=i.parentNode}return null}e.exports=closest},function(e,t,i){
/**
       * Remove element from parent node.
       * @param {HTMLElement} element - element to remove.
       * @memberof module:domUtil
       */
function removeElement(e){e&&e.parentNode&&e.parentNode.removeChild(e)}e.exports=removeElement},function(e,t,i){
/**
       * Check whether the given variable is a instance of HTMLNode or not.
       * If the given variables is a instance of HTMLNode, return true.
       * @param {*} html - Target for checking
       * @returns {boolean} Is HTMLNode ?
       * @memberof module:type
       */
function isHTMLNode(e){return"object"===typeof HTMLElement?e&&(e instanceof HTMLElement||!!e.nodeType):!!(e&&e.nodeType)}e.exports=isHTMLNode},function(t,i,n){var r=n(0);var s=n(1);var a=n(35);var o=0;var u={
/**
         * Returns unique id
         * @returns {number}
         */
getUniqueId:function(){o+=1;return o},
/**
         * Convert a value to meet the format
         * @param {number|string} value
         * @param {string} format - ex) hh, h, mm, m
         * @returns {string}
         */
formatTime:function(e,t){var i=["hh","mm"];e=String(e);return r(t,i)>=0&&1===e.length?"0"+e:e},
/**
         * Get meridiem hour
         * @param {number} hour - Original hour
         * @returns {number} Converted meridiem hour
         */
getMeridiemHour:function(e){e%=12;0===e&&(e=12);return e},
/**
         * Returns range arr
         * @param {number} start - Start value
         * @param {number} end - End value
         * @param {number} [step] - Step value
         * @returns {Array}
         */
getRangeArr:function(e,t,i){var n=[];var r;i=i||1;if(e>t)for(r=t;r>=e;r-=i)n.push(r);else for(r=e;r<=t;r+=i)n.push(r);return n},
/**
         * Returns array filled with selected value
         * @param {number} start - Start index of array to fill
         * @param {number} end - End index of array to fill
         * @param {number} value - Value to be filled
         * @param {Array} [target] - Array to fill
         * @returns {Array}
         */
fill:function(e,t,i,n){var r=n||[];var s=Math.min(r.length-1,t);var a;for(a=e;a<=s;a+=1)r[a]=i;for(a=s;a<=t;a+=1)r.push(i);return r},
/**
         * Get a target element
         * @param {Event} ev Event object
         * @returns {HTMLElement} An event target element
         */
getTarget:function(e){return e.target||e.srcElement},sendHostName:function(){a("time-picker","UA-129987462-1")},
/**
         * Get disabled minute array
         * @param {Array} enableRanges array of object which contains range
         */
getDisabledMinuteArr:function(t,i){var n=this.fill(0,Math.floor(60/i)-2,false);function setDisabled(e){var t=Math.ceil(e.begin/i);var r=Math.floor(e.end/i);n=this.fill(t,r,true,n)}s(t,setDisabled.bind(this||e));return n},
/**
         * Set disabled on target element
         * @param {HTMLInputElement} el target element
         * @param {boolean} isDisabled target element
         */
setDisabled:function(e,t){e.disabled=t}};t.exports=u},function(e,t,i){
/**
       * Execute the provided callback once for each property of object which actually exist.
       * If the callback function returns false, the loop will be stopped.
       * Callback function(iteratee) is invoked with three arguments:
       *  1) The value of the property
       *  2) The name of the property
       *  3) The object being traversed
       * @param {Object} obj The object that will be traversed
       * @param {function} iteratee  Callback function
       * @param {Object} [context] Context(this) of callback function
       * @memberof module:collection
       * @example
       * var forEachOwnProperties = require('tui-code-snippet/collection/forEachOwnProperties'); // node, commonjs
       *
       * var sum = 0;
       *
       * forEachOwnProperties({a:1,b:2,c:3}, function(value){
       *     sum += value;
       * });
       * alert(sum); // 6
       */
function forEachOwnProperties(e,t,i){var n;i=i||null;for(n in e)if(e.hasOwnProperty(n)&&false===t.call(i,e[n],n,e))break}e.exports=forEachOwnProperties},function(e,t,i){var n="_feEventKey";
/**
       * Get event collection for specific HTML element
       * @param {HTMLElement} element - HTML element
       * @param {string} type - event type
       * @returns {array}
       * @private
       */function safeEvent(e,t){var i=e[n];var r;i||(i=e[n]={});r=i[t];r||(r=i[t]=[]);return r}e.exports=safeEvent},function(e,t,i){var n=i(5);
/**
       * Get HTML element's design classes.
       * @param {(HTMLElement|SVGElement)} element target element
       * @returns {string} element css class name
       * @memberof module:domUtil
       */function getClass(e){return e&&e.className?n(e.className.baseVal)?e.className:e.className.baseVal:""}e.exports=getClass},function(e,t,i){var n=i(3);var r=i(5);
/**
       * Set className value
       * @param {(HTMLElement|SVGElement)} element - target element
       * @param {(string|string[])} cssClass - class names
       * @private
       */function setClassName(e,t){t=n(t)?t.join(" "):t;t=t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");r(e.className.baseVal)?e.className=t:e.className.baseVal=t}e.exports=setClassName},function(e,t,i){i(21);e.exports=i(22)},function(e,t,i){},function(t,i,n){var r=n(0);var s=n(1);var a=n(8);var o=n(9);var u=n(2);var l=n(10);var c=n(11);var h=n(29);var m=n(12);var f=n(13);var d=n(32);var p=n(14);var v=n(33);var _=n(34);var g=n(38);var x=n(15);var b=n(40);var E=n(41);var y=n(42);var I=".tui-timepicker-hour";var M=".tui-timepicker-minute";var k=".tui-timepicker-meridiem";var w="tui-has-left";var T="tui-hidden";var C="tui-timepicker-meridiem-checked";var H="spinbox";var S="selectbox";var V=0;var A=59;var N=23;var q=12;
/**
       * Merge default options
       * @ignore
       * @param {object} options - options
       * @returns {object} Merged options
       */var mergeDefaultOptions=function(e){return u({language:"en",initialHour:0,initialMinute:0,showMeridiem:true,inputType:"selectbox",hourStep:1,minuteStep:1,meridiemPosition:"right",format:"h:m",disabledHours:[],disabledMinutes:{},usageStatistics:true},e)};
/**
       * @class
       * @param {string|HTMLElement} container - Container element or selector
       * @param {Object} [options] - Options for initialization
       * @param {number} [options.initialHour = 0] - Initial setting value of hour
       * @param {number} [options.initialMinute = 0] - Initial setting value of minute
       * @param {number} [options.hourStep = 1] - Step value of hour
       * @param {number} [options.minuteStep = 1] - Step value of minute
       * @param {string} [options.inputType = 'selectbox'] - 'selectbox' or 'spinbox'
       * @param {string} [options.format = 'h:m'] - hour, minute format for display
       * @param {boolean} [options.showMeridiem = true] - Show meridiem expression?
       * @param {Array} [options.disabledHours = []] - Registered Hours is disabled.
       * @param {Object} [options.disabledMinutes = {}] - Registered Minutes of selected hours is disabled.
       * @param {Object} [options.disabledMinutes.hour] - Key must be hour(number).
       *                 Value is array which contains only true or false and must be 60 of length
       * @param {string} [options.meridiemPosition = 'right'] - Set location of the meridiem element.
       *                 If this option set 'left', the meridiem element is created in front of the hour element.
       * @param {string} [options.language = 'en'] Set locale texts
       * @param {Boolean} [options.usageStatistics=true|false] send hostname to google analytics [default value is true]
       * @example
       * // ES6
       * import TimePicker from 'tui-time-picker';
       *
       * // CommonJS
       * const TimePicker = require('tui-time-picker');
       *
       * // Browser
       * const TimePicker = tui.TimePicker;
       *
       * const timepicker = new TimePicker('#timepicker-container', {
       *     initialHour: 15,
       *     initialMinute: 13,
       *     inputType: 'selectbox',
       *     showMeridiem: false
       * });
       */var D=o({static:{
/**
           * Locale text data
           * @type {object}
           * @memberof TimePicker
           * @static
           * @example
           * TimePicker.localeTexts['customKey'] = {
           *     am: 'a.m.',
           *     pm: 'p.m.'
           * };
           *
           * const instance = new TimePicker('#timepicker-container', {
           *     language: 'customKey',
           * });
           */
localeTexts:b},init:function(t,i){i=mergeDefaultOptions(i);
/**
           * @type {number}
           * @private
           */(this||e).id=x.getUniqueId();
/**
           * @type {HTMLElement}
           * @private
           */(this||e).container=p(t)?t:document.querySelector(t);
/**
           * @type {HTMLElement}
           * @private
           */(this||e).element=null;
/**
           * @type {HTMLElement}
           * @private
           */(this||e).meridiemElement=null;
/**
           * @type {HTMLElement}
           * @private
           */(this||e).amEl=null;
/**
           * @type {HTMLElement}
           * @private
           */(this||e).pmEl=null;
/**
           * @type {boolean}
           * @private
           */(this||e).showMeridiem=i.showMeridiem;
/**
           * Meridiem postion
           * @type {'left'|'right'}
           * @private
           */(this||e).meridiemPosition=i.meridiemPosition;
/**
           * @type {Spinbox|Selectbox}
           * @private
           */(this||e).hourInput=null;
/**
           * @type {Spinbox|Selectbox}
           * @private
           */(this||e).minuteInput=null;
/**
           * @type {number}
           * @private
           */(this||e).hour=i.initialHour;
/**
           * @type {number}
           * @private
           */(this||e).minute=i.initialMinute;
/**
           * @type {number}
           * @private
           */(this||e).hourStep=i.hourStep;
/**
           * @type {number}
           * @private
           */(this||e).minuteStep=i.minuteStep;
/**
           * @type {Array}
           * @private
           */(this||e).disabledHours=i.disabledHours;
/**
           * @type {Object}
           * @private
           */(this||e).disabledMinutes=i.disabledMinutes;
/**
           * TimePicker inputType
           * @type {'spinbox'|'selectbox'}
           * @private
           */(this||e).inputType=i.inputType;
/**
           * Locale text for meridiem
           * @type {string}
           * @private
           */(this||e).localeText=b[i.language];
/**
           * Time format for output
           * @type {string}
           * @private
           */(this||e).format=this.getValidTimeFormat(i.format);this.render();this.setEvents();i.usageStatistics&&x.sendHostName()},setEvents:function(){(this||e).hourInput.on("change",(this||e).onChangeTimeInput,this||e);(this||e).minuteInput.on("change",(this||e).onChangeTimeInput,this||e);(this||e).showMeridiem&&((this||e).inputType===S?l((this||e).meridiemElement.querySelector("select"),"change",(this||e).onChangeMeridiem,this||e):(this||e).inputType===H&&l((this||e).meridiemElement,"click",(this||e).onChangeMeridiem,this||e))},removeEvents:function(){this.off();(this||e).hourInput.destroy();(this||e).minuteInput.destroy();(this||e).showMeridiem&&((this||e).inputType===S?c((this||e).meridiemElement.querySelector("select"),"change",(this||e).onChangeMeridiem,this||e):(this||e).inputType===H&&c((this||e).meridiemElement,"click",(this||e).onChangeMeridiem,this||e))},render:function(){var t={showMeridiem:(this||e).showMeridiem,isSpinbox:"spinbox"===(this||e).inputType};(this||e).showMeridiem&&u(t,{meridiemElement:this.makeMeridiemHTML()});(this||e).element&&f((this||e).element);(this||e).container.innerHTML=E(t);(this||e).element=(this||e).container.firstChild;this.renderTimeInputs();(this||e).showMeridiem&&this.setMeridiemElement()},setMeridiemElement:function(){"left"===(this||e).meridiemPosition&&h((this||e).element,w);(this||e).meridiemElement=(this||e).element.querySelector(k);(this||e).amEl=(this||e).meridiemElement.querySelector('[value="AM"]');(this||e).pmEl=(this||e).meridiemElement.querySelector('[value="PM"]');this.syncToMeridiemElements()},
/**
         * Make html for meridiem element
         * @returns {HTMLElement} Meridiem element
         * @private
         */
makeMeridiemHTML:function(){var t=(this||e).localeText;return y({am:t.am,pm:t.pm,radioId:(this||e).id,isSpinbox:"spinbox"===(this||e).inputType})},renderTimeInputs:function(){var t=(this||e).hour;var i=(this||e).showMeridiem;var n=(this||e).element.querySelector(I);var r=(this||e).element.querySelector(M);var s="selectbox"===(this||e).inputType.toLowerCase()?g:_;var a=(this||e).format.split(":");var o=this.getHourItems();i&&(t=x.getMeridiemHour(t));(this||e).hourInput=new s(n,{initialValue:t,items:o,format:a[0],disabledItems:this.makeDisabledStatItems(o)});(this||e).minuteInput=new s(r,{initialValue:(this||e).minute,items:this.getMinuteItems(),format:a[1]})},makeDisabledStatItems:function(t){var i=[];var n=(this||e).disabledHours.slice();(this||e).showMeridiem&&(n=this.meridiemableTime(n));s(t,(function(e){i.push(r(e,n)>=0)}));return i},meridiemableTime:function(t){var i=0;var n=0;var r=11;var a=[];if((this||e).hour>=12){i=12;n=12;r=23}s(t,(function(e){e>=n&&e<=r&&a.push(e-i===0?12:e-i)}));return a},
/**
         * Return formatted format.
         * @param {string} format - format option
         * @returns {string}
         * @private
         */
getValidTimeFormat:function(e){return e.match(/^[h]{1,2}:[m]{1,2}$/i)?e.toLowerCase():"h:m"},syncToMeridiemElements:function(){var t=(this||e).hour>=12?(this||e).pmEl:(this||e).amEl;var i=t===(this||e).pmEl?(this||e).amEl:(this||e).pmEl;t.setAttribute("selected",true);t.setAttribute("checked",true);h(t,C);i.removeAttribute("selected");i.removeAttribute("checked");d(i,C)},syncToInputs:function(){var t=(this||e).hour;var i=(this||e).minute;(this||e).showMeridiem&&(t=x.getMeridiemHour(t));(this||e).hourInput.setValue(t,true);(this||e).minuteInput.setValue(i,true)},
/**
         * DOM event handler
         * @param {Event} ev - Change event on meridiem element
         * @private
         */
onChangeMeridiem:function(t){var i=(this||e).hour;var n=x.getTarget(t);if(n.value&&m(n,k)){i=this.to24Hour("PM"===n.value,i);this.setTime(i,(this||e).minute);this.setDisabledHours();this.setDisabledMinutes(i)}},onChangeTimeInput:function(){var t=(this||e).hourInput.getValue();var i=(this||e).minuteInput.getValue();var n=(this||e).hour>=12;(this||e).showMeridiem&&(t=this.to24Hour(n,t));this.setTime(t,i);this.setDisabledMinutes(t)},
/**
         * 12Hour-expression to 24Hour-expression
         * @param {boolean} isPM - Is pm?
         * @param {number} hour - Hour
         * @returns {number}
         * @private
         */
to24Hour:function(e,t){t%=12;e&&(t+=12);return t},setDisabledHours:function(){var t=this.getHourItems();var i=this.makeDisabledStatItems(t);(this||e).hourInput.setDisabledItems(i)},setDisabledMinutes:function(t){var i;i=(this||e).disabledMinutes[t]||[];(this||e).minuteInput.setDisabledItems(i)},
/**
         * Get items of hour
         * @returns {array} Hour item list
         * @private
         */
getHourItems:function(){var t=(this||e).hourStep;return(this||e).showMeridiem?x.getRangeArr(1,12,t):x.getRangeArr(0,23,t)},
/**
         * Get items of minute
         * @returns {array} Minute item list
         * @private
         */
getMinuteItems:function(){return x.getRangeArr(0,59,(this||e).minuteStep)},
/**
         * Whether the hour and minute are in valid items or not
         * @param {number} hour - Hour value
         * @param {number} minute - Minute value
         * @returns {boolean} State
         * @private
         */
validItems:function(t,i){if(!v(t)||!v(i))return false;(this||e).showMeridiem&&(t=x.getMeridiemHour(t));return r(t,this.getHourItems())>-1&&r(i,this.getMinuteItems())>-1},
/**
         * Set step of hour
         * @param {array} step - Step to create items of hour
         */
setHourStep:function(t){(this||e).hourStep=t;(this||e).hourInput.fire("changeItems",this.getHourItems())},
/**
         * Get step of hour
         * @returns {number} Step of hour
         */
getHourStep:function(){return(this||e).hourStep},
/**
         * Set step of minute
         * @param {number} step - Step to create items of minute
         */
setMinuteStep:function(t){(this||e).minuteStep=t;(this||e).minuteInput.fire("changeItems",this.getMinuteItems())},
/**
         * Get step of minute
         * @returns {number} Step of minute
         */
getMinuteStep:function(){return(this||e).minuteStep},show:function(){d((this||e).element,T)},hide:function(){h((this||e).element,T)},
/**
         * Set hour
         * @param {number} hour for time picker - (0~23)
         * @returns {boolean} result of set time
         */
setHour:function(t){return this.setTime(t,(this||e).minute)},
/**
         * Set minute
         * @param {number} minute for time picker
         * @returns {boolean} result of set time
         */
setMinute:function(t){return this.setTime((this||e).hour,t)},
/**
         * Set time
         * @param {number} hour for time picker - (0~23)
         * @param {number} minute for time picker
         * @param {boolean} [silent] if it set true, 'change' event will not be fired.
         */
setTime:function(t,i,n){if(this.validItems(t,i)){(this||e).hour=t;(this||e).minute=i;this.syncToInputs();(this||e).showMeridiem&&this.syncToMeridiemElements()
/**
           * Change event - TimePicker
           * @event TimePicker#change
           * @type {object} event - Event object
           * @property {number} hour - changed hour
           * @property {number} minute - changed minute
           * @example
           * timepicker.on('change', (e) => {
           *   console.log(e.hour, e.minute);
           * });
           */;n||this.fire("change",{hour:(this||e).hour,minute:(this||e).minute})}},
/**
         * Set selectable range
         * @param {Object} begin - Contain begin hour and minute of range
         * @param {number} begin.hour - begin hour of range
         * @param {number} begin.minute - begin minute of range
         * @param {Object} [end] - Contain end hour and minute of range
         * @param {number} end.hour - end hour of range
         * @param {number} end.minute - end minute of range
         */
setRange:function(e,t){var i=e.hour;var n=e.minute;var r,s;if(this.isValidRange(e,t)){if(t){r=t.hour;s=t.minute}this.setRangeHour(i,r);this.setRangeMinute(i,n,r,s);this.applyRange(i,n,r)}},
/**
         * Set selectable range on hour
         * @param {number} beginHour - begin hour of range
         * @param {number} [endHour] - end hour of range
         * @private
         */
setRangeHour:function(t,i){var n=x.getRangeArr(V,t-1);i&&(n=n.concat(x.getRangeArr(i+1,N)));(this||e).disabledHours=n.slice()},
/**
         * Set selectable range on minute
         * @param {number} beginHour - begin hour of range
         * @param {number} beginMin - begin minute of range
         * @param {number} [endHour] - end hour of range
         * @param {number} [endMin] - end minute of range
         * @private
         */
setRangeMinute:function(t,i,n,r){var s=[];if(t||i){s.push({begin:V,end:i});if(n&&r){s.push({begin:r,end:A});if(t===n){(this||e).disabledMinutes[t]=x.getDisabledMinuteArr(s,(this||e).minuteStep).slice();return}(this||e).disabledMinutes[n]=x.getDisabledMinuteArr([s[1]],(this||e).minuteStep).slice()}(this||e).disabledMinutes[t]=x.getDisabledMinuteArr([s[0]],(this||e).minuteStep).slice()}},
/**
         * Apply range
         * @param {number} beginHour - begin hour of range
         * @param {number} beginMin - begin minute of range
         * @param {number} [endHour] - end hour of range
         * @private
         */
applyRange:function(t,i,n){var r=Math.ceil(i/(this||e).minuteStep);var s=t;var a=r*(this||e).minuteStep;var o;if(this.isLaterThanSetTime(t,i)){if((this||e).disabledMinutes[s][r]){o=(this||e).disabledMinutes[s].slice(r).findIndex((function(e){return!e}))*(this||e).minuteStep;a=o>=0?a+o:60}if(1!==(this||e).hourStep&&t%(this||e).hourStep!==1||a>=60){s=t+t%(this||e).hourStep+1;a=0}this.setTime(s,a)}this.setDisabledHours();this.setDisabledMinutes((this||e).hour);if((this||e).showMeridiem){this.syncToMeridiemElements();x.setDisabled((this||e).amEl,t>=q);x.setDisabled((this||e).pmEl,n<q)}},resetMinuteRange:function(){var t;(this||e).disabledMinutes={};for(t=0;t<=N;t+=1)this.setDisabledMinutes((this||e).hour)},
/**
         * Whether the given range a valid range
         * @param {Object} begin - Contain begin hour and minute of range
         * @param {number} begin.hour - begin hour of range
         * @param {number} begin.minute - begin minute of range
         * @param {Object} [end] - Contain end hour and minute of range
         * @param {number} end.hour - end hour of range
         * @param {number} end.minute - end minute of range
         * @returns {boolean} result of range validation
         * @private
         */
isValidRange:function(e,t){var i=e.hour;var n=e.minute;var r,s;if(!this.isValidTime(i,n))return false;if(!t)return true;r=t.hour;s=t.minute;return this.isValidTime(r,s)&&this.compareTimes(e,t)>0},
/**
         * Whether the given time a valid time
         * @param {number} hour - hour for validation
         * @param {number} minute - minute for validation
         * @returns {boolean} result of time validation
         * @private
         */
isValidTime:function(e,t){return e>=V&&e<=N&&t>=V&&t<=A},
/**
         * Compare given time with set time
         * @param {number} hour - given hour
         * @param {number} minute - given minute
         * @returns {boolean} result of compare
         * @private
         */
isLaterThanSetTime:function(t,i){return t>(this||e).hour||t===(this||e).hour&&i>(this||e).minute},
/**
         * Compare two times
         * it returns
         *  0: when begin equals end
         *  positive: when end later than begin
         *  negative: when begin later than end
         * @param {Object} begin - Contain begin hour and minute of range
         * @param {number} begin.hour - begin hour of range
         * @param {number} begin.minute - begin minute of range
         * @param {Object} end - Contain end hour and minute of range
         * @param {number} end.hour - end hour of range
         * @param {number} end.minute - end minute of range
         * @returns {boolean} result of range validation
         * @private
         */
compareTimes:function(e,t){var i=new Date(0);var n=new Date(0);i.setHours(e.hour,e.minute);n.setHours(t.hour,t.minute);return n.getTime()-i.getTime()},
/**
         * Get hour
         * @returns {number} hour - (0~23)
         */
getHour:function(){return(this||e).hour},
/**
         * Get minute
         * @returns {number} minute
         */
getMinute:function(){return(this||e).minute},
/**
         * Change locale text of meridiem by language code
         * @param {string} language - Language code
         */
changeLanguage:function(t){(this||e).localeText=b[t];this.render()},destroy:function(){this.removeEvents();f((this||e).element);(this||e).container=(this||e).showMeridiem=(this||e).hourInput=(this||e).minuteInput=(this||e).hour=(this||e).minute=(this||e).inputType=(this||e).element=(this||e).meridiemElement=(this||e).amEl=(this||e).pmEl=null}});a.mixin(D);t.exports=D},function(e,t,i){var n=i(5);var r=i(24);
/**
       * Check whether the given variable is existing or not.
       * If the given variable is not null and not undefined, returns true.
       * @param {*} param - Target for checking
       * @returns {boolean} Is existy?
       * @memberof module:type
       * @example
       * var isExisty = require('tui-code-snippet/type/isExisty'); // node, commonjs
       *
       * isExisty(''); //true
       * isExisty(0); //true
       * isExisty([]); //true
       * isExisty({}); //true
       * isExisty(null); //false
       * isExisty(undefined); //false
      */function isExisty(e){return!n(e)&&!r(e)}e.exports=isExisty},function(e,t,i){
/**
       * Check whether the given variable is null or not.
       * If the given variable(arguments[0]) is null, returns true.
       * @param {*} obj - Target for checking
       * @returns {boolean} Is null?
       * @memberof module:type
       */
function isNull(e){return null===e}e.exports=isNull},function(e,t,i){
/**
       * Check whether the given variable is an object or not.
       * If the given variable is an object, return true.
       * @param {*} obj - Target for checking
       * @returns {boolean} Is object?
       * @memberof module:type
       */
function isObject(e){return e===Object(e)}e.exports=isObject},function(e,t,i){
/**
       * Check whether the given variable is a function or not.
       * If the given variable is a function, return true.
       * @param {*} obj - Target for checking
       * @returns {boolean} Is function?
       * @memberof module:type
       */
function isFunction(e){return e instanceof Function}e.exports=isFunction},function(e,t,i){var n=i(28);
/**
       * Provide a simple inheritance in prototype-oriented.
       * Caution :
       *  Don't overwrite the prototype of child constructor.
       *
       * @param {function} subType Child constructor
       * @param {function} superType Parent constructor
       * @memberof module:inheritance
       * @example
       * var inherit = require('tui-code-snippet/inheritance/inherit'); // node, commonjs
       *
       * // Parent constructor
       * function Animal(leg) {
       *     this.leg = leg;
       * }
       * Animal.prototype.growl = function() {
       *     // ...
       * };
       *
       * // Child constructor
       * function Person(name) {
       *     this.name = name;
       * }
       *
       * // Inheritance
       * inherit(Person, Animal);
       *
       * // After this inheritance, please use only the extending of property.
       * // Do not overwrite prototype.
       * Person.prototype.walk = function(direction) {
       *     // ...
       * };
       */function inherit(e,t){var i=n(t.prototype);i.constructor=e;e.prototype=i}e.exports=inherit},function(e,t,i){
/**
       * Create a new object with the specified prototype object and properties.
       * @param {Object} obj This object will be a prototype of the newly-created object.
       * @returns {Object}
       * @memberof module:inheritance
       */
function createObject(e){function F(){}F.prototype=e;return new F}e.exports=createObject},function(e,t,i){var n=i(4);var r=i(0);var s=i(18);var a=i(19);
/**
       * Add css class to element
       * @param {(HTMLElement|SVGElement)} element - target element
       * @param {...string} cssClass - css classes to add
       * @memberof module:domUtil
       */function addClass(e){var t=Array.prototype.slice.call(arguments,1);var i=e.classList;var o=[];var u;if(i)n(t,(function(t){e.classList.add(t)}));else{u=s(e);u&&(t=[].concat(u.split(/\s+/),t));n(t,(function(e){r(e,o)<0&&o.push(e)}));a(e,o)}}e.exports=addClass},function(t,i,n){var r=n(0);var s=n(31);var a=Element.prototype;var o=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||function(t){var i=(this||e).document||(this||e).ownerDocument;return r(this||e,s(i.querySelectorAll(t)))>-1};
/**
       * Check element match selector
       * @param {HTMLElement} element - element to check
       * @param {string} selector - selector to check
       * @returns {boolean} is selector matched to element?
       * @memberof module:domUtil
       */function matches(e,t){return o.call(e,t)}t.exports=matches},function(e,t,i){var n=i(1);
/**
       * Transform the Array-like object to Array.
       * In low IE (below 8), Array.prototype.slice.call is not perfect. So, try-catch statement is used.
       * @param {*} arrayLike Array-like object
       * @returns {Array} Array
       * @memberof module:collection
       * @example
       * var toArray = require('tui-code-snippet/collection/toArray'); // node, commonjs
       *
       * var arrayLike = {
       *     0: 'one',
       *     1: 'two',
       *     2: 'three',
       *     3: 'four',
       *     length: 4
       * };
       * var result = toArray(arrayLike);
       *
       * alert(result instanceof Array); // true
       * alert(result); // one,two,three,four
       */function toArray(e){var t;try{t=Array.prototype.slice.call(e)}catch(i){t=[];n(e,(function(e){t.push(e)}))}return t}e.exports=toArray},function(e,t,i){var n=i(1);var r=i(0);var s=i(18);var a=i(19);
/**
       * Remove css class from element
       * @param {(HTMLElement|SVGElement)} element - target element
       * @param {...string} cssClass - css classes to remove
       * @memberof module:domUtil
       */function removeClass(e){var t=Array.prototype.slice.call(arguments,1);var i=e.classList;var o,u;if(i)n(t,(function(e){i.remove(e)}));else{o=s(e).split(/\s+/);u=[];n(o,(function(e){r(e,t)<0&&u.push(e)}));a(e,u)}}e.exports=removeClass},function(e,t,i){
/**
       * Check whether the given variable is a number or not.
       * If the given variable is a number, return true.
       * @param {*} obj - Target for checking
       * @returns {boolean} Is number?
       * @memberof module:type
       */
function isNumber(e){return"number"===typeof e||e instanceof Number}e.exports=isNumber},function(t,i,n){var r=n(0);var s=n(1);var a=n(8);var o=n(9);var u=n(2);var l=n(10);var c=n(11);var h=n(12);var m=n(13);var f=n(14);var d=n(15);var p=n(37);var v=".tui-timepicker-btn-up";var _=".tui-timepicker-btn-down";
/**
       * @class
       * @ignore
       * @param {String|HTMLElement} container - Container of spinbox or selector
       * @param {Object} [options] - Options for initialization
       * @param {number} [options.initialValue] - initial setting value
       * @param {Array.<number>} items - Items
       */var g=o({init:function(t,i){i=u({items:[]},i);
/**
           * @type {HTMLElement}
           * @private
           */(this||e)._container=f(t)?t:document.querySelector(t);
/**
           * Spinbox element
           * @type {HTMLElement}
           * @private
           */(this||e)._element=null;
/**
           * @type {HTMLElement}
           * @private
           */(this||e)._inputElement=null;
/**
           * Spinbox value items
           * @type {Array.<number>}
           * @private
           */(this||e)._items=i.items;
/**
           * Selectbox disabled items info
           * @type {Array.<number>}
           * @private
           */(this||e)._disabledItems=i.disabledItems||[];
/**
           * @type {number}
           * @private
           */(this||e)._selectedIndex=Math.max(0,r(i.initialValue,(this||e)._items));
/**
           * Time format for output
           * @type {string}
           * @private
           */(this||e)._format=i.format;this._render();this._setEvents()},_render:function(){var t=r(this.getValue(),(this||e)._items);var i;(this||e)._disabledItems[t]&&((this||e)._selectedIndex=this._findEnabledIndex());i={maxLength:this._getMaxLength(),initialValue:this.getValue(),format:(this||e)._format,formatTime:d.formatTime};(this||e)._container.innerHTML=p(i);(this||e)._element=(this||e)._container.firstChild;(this||e)._inputElement=(this||e)._element.querySelector("input")},
/**
         * Find the index of the enabled item
         * @returns {number} - find selected index
         * @private
         */
_findEnabledIndex:function(){return r(false,(this||e)._disabledItems)},
/**
         * Returns maxlength of value
         * @returns {number}
         * @private
         */
_getMaxLength:function(){var t=[];s((this||e)._items,(function(e){t.push(String(e).length)}));return Math.max.apply(null,t)},
/**
         * Set disabledItems
         * @param {object} disabledItems - disabled status of items
         */
setDisabledItems:function(t){(this||e)._disabledItems=t;this._changeToInputValue()},_setEvents:function(){l((this||e)._container,"click",(this||e)._onClickHandler,this||e);l((this||e)._inputElement,"keydown",(this||e)._onKeydownInputElement,this||e);l((this||e)._inputElement,"change",(this||e)._onChangeHandler,this||e);this.on("changeItems",(function(t){(this||e)._items=t;this._render()}),this||e)},_removeEvents:function(){this.off();c((this||e)._container,"click",(this||e)._onClickHandler,this||e);c((this||e)._inputElement,"keydown",(this||e)._onKeydownInputElement,this||e);c((this||e)._inputElement,"change",(this||e)._onChangeHandler,this||e)},
/**
         * Click event handler
         * @param {Event} ev - Change event on up/down buttons.
         */
_onClickHandler:function(e){var t=d.getTarget(e);h(t,_)?this._setNextValue(true):h(t,v)&&this._setNextValue(false)},
/**
         * Set input value
         * @param {boolean} isDown - From down-action?
         * @private
         */
_setNextValue:function(t){var i=(this||e)._selectedIndex;i=t?i?i-1:(this||e)._items.length-1:i<(this||e)._items.length-1?i+1:0;if((this||e)._disabledItems[i]){(this||e)._selectedIndex=i;this._setNextValue(t)}else this.setValue((this||e)._items[i])},
/**
         * DOM(Input element) Keydown Event handler
         * @param {Event} ev event-object
         * @private
         */
_onKeydownInputElement:function(e){var t=e.which||e.keyCode;var i;if(h(d.getTarget(e),"input")){switch(t){case 38:i=false;break;case 40:i=true;break;default:return}this._setNextValue(i)}},
/**
         * DOM(Input element) Change Event handler
         * @param {Event} ev Change event on an input element.
         * @private
         */
_onChangeHandler:function(e){h(d.getTarget(e),"input")&&this._changeToInputValue()},
/**
         * Change value to input-box if it is valid.
         * @private
         * @param {boolean} silent prevents firing 'change' event if it is true.
         */
_changeToInputValue:function(t){var i=Number((this||e)._inputElement.value);var n=r(i,(this||e)._items);if((this||e)._disabledItems[n]){n=this._findEnabledIndex();i=(this||e)._items[n]}else if(n===(this||e)._selectedIndex)return;if(-1===n)this.setValue((this||e)._items[(this||e)._selectedIndex],t);else{(this||e)._selectedIndex=n;t||this.fire("change",{value:i})}},
/**
         * Set value to input-box.
         * @param {number} value - Value
         * @param {boolean} silent - prevents firing 'change' event if it is true.
         */
setValue:function(t,i){(this||e)._inputElement.value=d.formatTime(t,(this||e)._format);this._changeToInputValue(i)},
/**
         * Returns current value
         * @returns {number}
         */
getValue:function(){return(this||e)._items[(this||e)._selectedIndex]},destroy:function(){this._removeEvents();m((this||e)._element);(this||e)._container=(this||e)._element=(this||e)._inputElement=(this||e)._items=(this||e)._selectedIndex=null}});a.mixin(g);t.exports=g},function(e,t,i){var n=i(5);var r=i(36);var s=6048e5;
/**
       * Check if the date has passed 7 days
       * @param {number} date - milliseconds
       * @returns {boolean}
       * @private
       */function isExpired(e){var t=(new Date).getTime();return t-e>s}
/**
       * Send hostname on DOMContentLoaded.
       * To prevent hostname set tui.usageStatistics to false.
       * @param {string} appName - application name
       * @param {string} trackingId - GA tracking ID
       * @ignore
       */function sendHostname(e,t){var i="https://www.google-analytics.com/collect";var s=location.hostname;var a="event";var o="use";var u="TOAST UI "+e+" for "+s+": Statistics";var l=window.localStorage.getItem(u);if((n(window.tui)||false!==window.tui.usageStatistics)&&(!l||isExpired(l))){window.localStorage.setItem(u,(new Date).getTime());setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||r(i,{v:1,t:a,tid:t,cid:s,dp:s,dh:e,el:e,ec:o})}),1e3)}}e.exports=sendHostname},function(e,t,i){var n=i(16);
/**
       * Request image ping.
       * @param {String} url url for ping request
       * @param {Object} trackingInfo infos for make query string
       * @returns {HTMLElement}
       * @memberof module:request
       * @example
       * var imagePing = require('tui-code-snippet/request/imagePing'); // node, commonjs
       *
       * imagePing('https://www.google-analytics.com/collect', {
       *     v: 1,
       *     t: 'event',
       *     tid: 'trackingid',
       *     cid: 'cid',
       *     dp: 'dp',
       *     dh: 'dh'
       * });
       */function imagePing(e,t){var i=document.createElement("img");var r="";n(t,(function(e,t){r+="&"+t+"="+e}));r=r.substring(1);i.src=e+"?"+r;i.style.display="none";document.body.appendChild(i);document.body.removeChild(i);return i}e.exports=imagePing},function(e,t,i){var n=i(7);e.exports=function(e){var t='<div class="tui-timepicker-btn-area">  <input type="text" class="tui-timepicker-spinbox-input"        maxlength="{{maxLength}}"        size="{{maxLength}}"        value="{{formatTime initialValue format}}"        aria-label="TimePicker spinbox value">  <button type="button" class="tui-timepicker-btn tui-timepicker-btn-up">    <span class="tui-ico-t-btn">Increase</span>  </button>  <button type="button" class="tui-timepicker-btn tui-timepicker-btn-down">    <span class="tui-ico-t-btn">Decrease</span>  </button></div>';return n(t,e)}},function(t,i,n){var r=n(0);var s=n(8);var a=n(9);var o=n(2);var u=n(10);var l=n(11);var c=n(12);var h=n(13);var m=n(14);var f=n(15);var d=n(39);
/**
       * @class
       * @ignore
       * @param {string|HTMLElement} container - Container element or selector
       * @param {object} options - Options
       * @param {Array.<number>} options.items - Items
       * @param {number} options.initialValue - Initial value
       */var p=a({init:function(t,i){i=o({items:[]},i);
/**
           * Container element
           * @type {HTMLElement}
           * @private
           */(this||e)._container=m(t)?t:document.querySelector(t);
/**
           * Selectbox items
           * @type {Array.<number>}
           * @private
           */(this||e)._items=i.items||[];
/**
           * Selectbox disabled items info
           * @type {Array.<number>}
           * @private
           */(this||e)._disabledItems=i.disabledItems||[];
/**
           * Selected index
           * @type {number}
           * @private
           */(this||e)._selectedIndex=Math.max(0,r(i.initialValue,(this||e)._items));
/**
           * Time format for output
           * @type {string}
           * @private
           */(this||e)._format=i.format;
/**
           * Select element
           * @type {HTMLElement}
           * @private
           */(this||e)._element=null;this._render();this._setEvents()},_render:function(){var t;this._changeEnabledIndex();t={items:(this||e)._items,format:(this||e)._format,initialValue:this.getValue(),disabledItems:(this||e)._disabledItems,formatTime:f.formatTime,equals:function(e,t){return e===t}};(this||e)._element&&this._removeElement();(this||e)._container.innerHTML=d(t);(this||e)._element=(this||e)._container.firstChild;u((this||e)._element,"change",(this||e)._onChangeHandler,this||e)},_changeEnabledIndex:function(){var t=r(this.getValue(),(this||e)._items);(this||e)._disabledItems[t]&&((this||e)._selectedIndex=r(false,(this||e)._disabledItems))},
/**
         * Set disabledItems
         * @param {object} disabledItems - disabled status of items
         * @private
         */
setDisabledItems:function(t){(this||e)._disabledItems=t;this._render()},_setEvents:function(){this.on("changeItems",(function(t){(this||e)._items=t;this._render()}),this||e)},_removeEvents:function(){this.off()},_removeElement:function(){l((this||e)._element,"change",(this||e)._onChangeHandler,this||e);h((this||e)._element)},
/**
         * Change event handler
         * @param {Event} ev Change event on a select element.
         * @private
         */
_onChangeHandler:function(e){c(f.getTarget(e),"select")&&this._setNewValue()},
/**
         * Set new value
         * @private
         * @param {boolean} silent prevents firing 'change' event if it is true.
         */
_setNewValue:function(t){var i=Number((this||e)._element.value);(this||e)._selectedIndex=r(i,(this||e)._items);t||this.fire("change",{value:i})},
/**
         * Returns current value
         * @returns {number}
         */
getValue:function(){return(this||e)._items[(this||e)._selectedIndex]},
/**
         * Set value
         * @param {number} value - New value
         * @param {boolean} silent - prevents firing 'change' event if it is true.
         */
setValue:function(t,i){var n=r(t,(this||e)._items);if(n>-1&&n!==(this||e)._selectedIndex){(this||e)._selectedIndex=n;(this||e)._element.value=t;this._setNewValue(i)}},destroy:function(){this._removeEvents();this._removeElement();(this||e)._container=(this||e)._items=(this||e)._selectedIndex=(this||e)._element=null}});s.mixin(p);t.exports=p},function(e,t,i){var n=i(7);e.exports=function(e){var t='<select class="tui-timepicker-select" aria-label="Time">  {{each items}}    {{if equals initialValue @this}}      <option value="{{@this}}" selected {{if disabledItems[@index]}}disabled{{/if}}>{{formatTime @this format}}</option>    {{else}}      <option value="{{@this}}" {{if disabledItems[@index]}}disabled{{/if}}>{{formatTime @this format}}</option>    {{/if}}  {{/each}}</select>';return n(t,e)}},function(e,t,i){e.exports={en:{am:"AM",pm:"PM"},ko:{am:"오전",pm:"오후"}}},function(e,t,i){var n=i(7);e.exports=function(e){var t='<div class="tui-timepicker">  <div class="tui-timepicker-body">    <div class="tui-timepicker-row">      {{if isSpinbox}}        <div class="tui-timepicker-column tui-timepicker-spinbox tui-timepicker-hour"></div>        <span class="tui-timepicker-column tui-timepicker-colon"><span class="tui-ico-colon">:</span></span>        <div class="tui-timepicker-column tui-timepicker-spinbox tui-timepicker-minute"></div>        {{if showMeridiem}}          {{meridiemElement}}        {{/if}}      {{else}}        <div class="tui-timepicker-column tui-timepicker-selectbox tui-timepicker-hour"></div>        <span class="tui-timepicker-column tui-timepicker-colon"><span class="tui-ico-colon">:</span></span>        <div class="tui-timepicker-column tui-timepicker-selectbox tui-timepicker-minute"></div>        {{if showMeridiem}}          {{meridiemElement}}        {{/if}}      {{/if}}    </div>  </div></div>';return n(t,e)}},function(e,t,i){var n=i(7);e.exports=function(e){var t='{{if isSpinbox}}  <div class="tui-timepicker-column tui-timepicker-checkbox tui-timepicker-meridiem">    <div class="tui-timepicker-check-area">      <ul class="tui-timepicker-check-lst">        <li class="tui-timepicker-check">          <div class="tui-timepicker-radio">            <input type="radio"                  name="optionsRadios-{{radioId}}"                  value="AM"                  class="tui-timepicker-radio-am"                  id="tui-timepicker-radio-am-{{radioId}}">            <label for="tui-timepicker-radio-am-{{radioId}}" class="tui-timepicker-radio-label">              <span class="tui-timepicker-input-radio"></span>{{am}}            </label>          </div>        </li>        <li class="tui-timepicker-check">          <div class="tui-timepicker-radio">            <input type="radio"                  name="optionsRadios-{{radioId}}"                  value="PM"                  class="tui-timepicker-radio-pm"                  id="tui-timepicker-radio-pm-{{radioId}}">            <label for="tui-timepicker-radio-pm-{{radioId}}" class="tui-timepicker-radio-label">              <span class="tui-timepicker-input-radio"></span>{{pm}}            </label>          </div>        </li>      </ul>    </div>  </div>{{else}}  <div class="tui-timepicker-column tui-timepicker-selectbox tui-is-add-picker tui-timepicker-meridiem">    <select class="tui-timepicker-select" aria-label="AM/PM">      <option value="AM">{{am}}</option>      <option value="PM">{{pm}}</option>    </select>  </div>{{/if}}';return n(t,e)}}])}));var i=t;const n=t.TimePicker,r=t.__esModule;export{n as TimePicker,r as __esModule,i as default};

