# aop
aop

## Note
This repos will not be published, for there is already a better version of AOP: [meld](https://github.com/cujojs/meld). But it will still be my studying project.

## Goals
- [ ] chains:

 ```javascript
 function foo() {...}
 let wrapFoo = new Aop(foo);
 wrapFoo()
    .before(() => {...})
    .after(() => {...})
    .before(() => {...})
    .after(() => {...}); // aop works
 ```
- [ ] pass an `object`:

 ```javascript
 function foo() {...}
  let wrapFoo = new Aop(foo, {
     before: () => {...}, // or an Array: [foo, bar]
     after: () => {...}, // or an Array: [foo, bar]
 });
 wrapFoo(); // aop works
 ```
- [ ] support node and browser
