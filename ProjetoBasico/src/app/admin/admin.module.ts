import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AdminRoutingModule } from "./admin.routes";

@NgModule({
    declarations: [
        AdminDashboardComponent,
    ],
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    providers: [

    ],
    exports: []
})
export class AdminModule {}