(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.Aop = factory());
}(this, (function () { 'use strict';

var Aop = function Aop(fn, options) {
    if ( options === void 0 ) options = {};
    this.fn = fn;
    this.options = options;
    var before = options.before;
    var after = options.after;
    var self = this;
    return function() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        return self.fn.apply(this, args);
    };
};
Aop.prototype.before = function before (fn) {
    return this;
};
Aop.prototype.after = function after (fn) {
    return this;
};

return Aop;

})));
