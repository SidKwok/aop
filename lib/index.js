export default class Aop {
    constructor(fn, options = {}) {
        this.fn = fn;
        this.options = options;
        const {before, after} = options;
        const self = this;
        return function(...args) {
            return self.fn.apply(this, args);
        };
    }

    before(fn) {
        return this;
    }

    after(fn) {
        return this;
    }
}
