"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var index_1 = require('./index');
var WizardModule = (function () {
    function WizardModule() {
    }
    WizardModule.forRoot = function () {
        return {
            ngModule: WizardModule
        };
    };
    WizardModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule],
            declarations: [index_1.Step1Component, index_1.Step2Component, index_1.RegisterComponent, index_1.LoginComponent, index_1.PaymentComponent],
            exports: [index_1.Step1Component, index_1.Step2Component, index_1.RegisterComponent, index_1.LoginComponent, index_1.PaymentComponent, forms_1.FormsModule, router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], WizardModule);
    return WizardModule;
}());
exports.WizardModule = WizardModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93aXphcmQvd2l6YXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThDLGVBQWUsQ0FBQyxDQUFBO0FBQzlELHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLHNCQUFvRyxTQUFTLENBQUMsQ0FBQTtBQVk5RztJQUFBO0lBT0EsQ0FBQztJQU5RLG9CQUFPLEdBQWQ7UUFDRSxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsWUFBWTtTQUV2QixDQUFDO0lBQ0osQ0FBQztJQVhIO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSxxQkFBWSxDQUFDO1lBQ3JDLFlBQVksRUFBRSxDQUFDLHNCQUFjLEVBQUUsc0JBQWMsRUFBRSx5QkFBaUIsRUFBRSxzQkFBYyxFQUFFLHdCQUFnQixDQUFDO1lBQ25HLE9BQU8sRUFBRSxDQUFDLHNCQUFjLEVBQUUsc0JBQWMsRUFBRSx5QkFBaUIsRUFBRSxzQkFBYyxFQUFFLHdCQUFnQixFQUFFLG1CQUFXLEVBQUUscUJBQVksQ0FBQztTQUMxSCxDQUFDOztvQkFBQTtJQVFGLG1CQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSxvQkFBWSxlQU94QixDQUFBIiwiZmlsZSI6ImFwcC93aXphcmQvd2l6YXJkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgU3RlcDFDb21wb25lbnQsIFN0ZXAyQ29tcG9uZW50LCBSZWdpc3RlckNvbXBvbmVudCwgTG9naW5Db21wb25lbnQsIFBheW1lbnRDb21wb25lbnQgfSBmcm9tICcuL2luZGV4JztcclxuXHJcblxyXG4vKipcclxuICogRG8gbm90IHNwZWNpZnkgcHJvdmlkZXJzIGZvciBtb2R1bGVzIHRoYXQgbWlnaHQgYmUgaW1wb3J0ZWQgYnkgYSBsYXp5IGxvYWRlZCBtb2R1bGUuXHJcbiAqL1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1N0ZXAxQ29tcG9uZW50LCBTdGVwMkNvbXBvbmVudCwgUmVnaXN0ZXJDb21wb25lbnQsIExvZ2luQ29tcG9uZW50LCBQYXltZW50Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbU3RlcDFDb21wb25lbnQsIFN0ZXAyQ29tcG9uZW50LCBSZWdpc3RlckNvbXBvbmVudCwgTG9naW5Db21wb25lbnQsIFBheW1lbnRDb21wb25lbnQsIEZvcm1zTW9kdWxlLCBSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaXphcmRNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFdpemFyZE1vZHVsZVxyXG4gICAgICAvL3Byb3ZpZGVyczogW05hbWVMaXN0U2VydmljZV1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==
