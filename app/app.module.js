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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var project_list_component_1 = require("./projects/project-list.component");
var project_insert_component_1 = require("./projects/project-insert.component");
var project_update_component_1 = require("./projects/project-update.component");
var project_hours_list_component_1 = require("./projects/hours/project-hours-list.component");
var project_hours_insert_component_1 = require("./projects/hours/project-hours-insert.component");
var project_filter_pipe_1 = require("./projects/project-filter.pipe");
var project_startDate_pipe_1 = require("./projects/project-startDate.pipe");
var project_endDate_pipe_1 = require("./projects/project-endDate.pipe");
var project_hours_pipe_1 = require("./projects/hours/project-hours.pipe");
var orderBy_pipe_1 = require("./shared/orderBy.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'projects', component: project_list_component_1.ProjectListComponent },
                { path: 'project/update/:id', component: project_update_component_1.ProjectUpdateComponent },
                { path: 'project/insert', component: project_insert_component_1.ProjectInsertComponent },
                { path: 'project/hours/insert/:id', component: project_hours_insert_component_1.ProjectHoursInsertComponent }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            project_list_component_1.ProjectListComponent,
            project_insert_component_1.ProjectInsertComponent,
            project_update_component_1.ProjectUpdateComponent,
            project_hours_list_component_1.ProjectHoursListComponent,
            project_hours_insert_component_1.ProjectHoursInsertComponent,
            project_filter_pipe_1.ProjectFilterPipe,
            project_endDate_pipe_1.ProjectEndDatePipe,
            project_startDate_pipe_1.ProjectStartDatePipe,
            project_hours_pipe_1.ProjectHoursPipe,
            orderBy_pipe_1.OrderByPipe
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map