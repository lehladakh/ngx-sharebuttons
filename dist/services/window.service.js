"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WindowService = (function () {
    function WindowService() {
    }
    Object.defineProperty(WindowService.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowService;
}());
WindowService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
WindowService.ctorParameters = function () { return []; };
exports.WindowService = WindowService;
function _window() {
    // return the global native browser window object
    return typeof window !== 'undefined' ? window : undefined;
}
//# sourceMappingURL=window.service.js.map