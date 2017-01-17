var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundProgressComponent } from './round-progress.component';
import { RoundProgressService } from './round-progress.service';
import { RoundProgressEase } from './round-progress.ease';
import { RoundProgressConfig } from './round-progress.config';
var RoundProgressModule = (function () {
    function RoundProgressModule() {
    }
    return RoundProgressModule;
}());
RoundProgressModule = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [RoundProgressComponent],
        exports: [RoundProgressComponent],
        providers: [RoundProgressService, RoundProgressEase, RoundProgressConfig]
    })
], RoundProgressModule);
export { RoundProgressModule };
;
export { RoundProgressComponent } from './round-progress.component';
export { RoundProgressService } from './round-progress.service';
export { RoundProgressEase } from './round-progress.ease';
export { RoundProgressConfig } from './round-progress.config';
//# sourceMappingURL=round-progress.js.map