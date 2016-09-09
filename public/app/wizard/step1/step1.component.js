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
var app_component_1 = require('../../app.component');
var Step1Component = (function () {
    function Step1Component(appComponent) {
        this.appComponent = appComponent;
        this.appComponent.toolbar = false;
    }
    Step1Component.prototype.ngOnDestroy = function () {
        this.appComponent.toolbar = true;
    };
    Step1Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-step1',
            templateUrl: 'step1.component.html',
            styleUrls: ['step1.component.css']
        }), 
        __metadata('design:paramtypes', [app_component_1.AppComponent])
    ], Step1Component);
    return Step1Component;
}());
exports.Step1Component = Step1Component;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93aXphcmQvc3RlcDEvc3RlcDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsOEJBQTZCLHFCQUFxQixDQUFDLENBQUE7QUFXbkQ7SUFDRyx3QkFBbUIsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUMsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFDRCxvQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFaSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNuQyxDQUFDOztzQkFBQTtJQVFGLHFCQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSxzQkFBYyxpQkFPMUIsQ0FBQSIsImZpbGUiOiJhcHAvd2l6YXJkL3N0ZXAxL3N0ZXAxLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9hcHAuY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIFN0ZXAxQ29tcG9uZW50LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NkLXN0ZXAxJyxcclxuICB0ZW1wbGF0ZVVybDogJ3N0ZXAxLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnc3RlcDEuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdGVwMUNvbXBvbmVudCB7XHJcbiAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhcHBDb21wb25lbnQ6IEFwcENvbXBvbmVudCkge1xyXG4gICAgIHRoaXMuYXBwQ29tcG9uZW50LnRvb2xiYXI9ZmFsc2U7XHJcbiAgfVxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5hcHBDb21wb25lbnQudG9vbGJhcj10cnVlO1xyXG4gIH0gXHJcbn1cclxuIl19
