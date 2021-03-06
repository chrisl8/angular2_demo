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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var project_service_1 = require("./project.service");
var ProjectInsertComponent = (function () {
    function ProjectInsertComponent(_route, _projectService, _router) {
        this._route = _route;
        this._projectService = _projectService;
        this._router = _router;
        this.pageTitle = 'Insert Project';
        this.project = this.createNewProject();
    }
    ProjectInsertComponent.prototype.onBack = function () {
        this._router.navigate(['/projects']);
    };
    ProjectInsertComponent.prototype.onSave = function () {
        var _this = this;
        this._projectService.insertProject(this.project)
            .subscribe(function (result) { return _this.processSaveResult(result); }, function (error) { return _this.errorMessage = error; });
    };
    ProjectInsertComponent.prototype.processSaveResult = function (result) {
        console.log(result);
        this._router.navigate(['/projects']);
    };
    ProjectInsertComponent.prototype.createNewProject = function () {
        return {
            "_id": null,
            "project_name": null,
            "customer_name": null,
            "start_date": null,
            "end_date": null,
            "details": null,
            "hours": []
        };
    };
    return ProjectInsertComponent;
}());
ProjectInsertComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/projects/project-detail.component.html',
        providers: [project_service_1.ProjectService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        project_service_1.ProjectService,
        router_2.Router])
], ProjectInsertComponent);
exports.ProjectInsertComponent = ProjectInsertComponent;
//# sourceMappingURL=project-insert.component.js.map