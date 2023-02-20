"use strict";
exports.__esModule = true;
exports.App = void 0;
var App = /** @class */ (function () {
    function App() {
        this.toggler = document.querySelector(".mobile-nav-toggle");
        this.primaryNavigation = document.querySelector(".primary-navigation");
    }
    App.prototype.toggle = function () {
        var _this = this;
        var _a;
        (_a = this.toggler) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            var _a, _b, _c, _d;
            ((_a = _this.primaryNavigation) === null || _a === void 0 ? void 0 : _a.hasAttribute("data-visible"))
                ? (_b = _this.toggler) === null || _b === void 0 ? void 0 : _b.setAttribute("aria-expanded", true)
                : (_c = _this.toggler) === null || _c === void 0 ? void 0 : _c.setAttribute("aria-expanded", false);
            (_d = _this.primaryNavigation) === null || _d === void 0 ? void 0 : _d.toggleAttribute("data-visible");
        });
    };
    return App;
}());
exports.App = App;
var app = new App();
app.toggle();
