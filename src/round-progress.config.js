var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var RoundProgressConfig = (function () {
    function RoundProgressConfig() {
        this._options = {
            radius: 125,
            animation: 'easeOutCubic',
            animationDelay: null,
            duration: 500,
            stroke: 15,
            color: '#45CCCE',
            background: '#EAEAEA',
            responsive: false,
            clockwise: true,
            semicircle: false,
            rounded: false
        };
    }
    /** Configures the defaults. */
    RoundProgressConfig.prototype.setDefaults = function (config) {
        return Object.assign(this._options, config);
    };
    /** Fetches a value from the defaults. */
    RoundProgressConfig.prototype.get = function (key) {
        return this._options[key];
    };
    return RoundProgressConfig;
}());
RoundProgressConfig = __decorate([
    Injectable()
], RoundProgressConfig);
export { RoundProgressConfig };
//# sourceMappingURL=round-progress.config.js.map