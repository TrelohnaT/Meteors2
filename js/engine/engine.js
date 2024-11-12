System.register([], function (exports_1, context_1) {
    "use strict";
    var Engine;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Engine = class Engine {
                constructor(a) {
                    this.a = a;
                }
            };
            exports_1("default", Engine);
        }
    };
});
