import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import {StartpageComponent} from "./layouts/login_signup_module/startpage.component";
import {ProfileSettingsComponent} from "./layouts/profile-settings/profile-settings.component";

const routes: Routes = [
  {
    path: "",
    component: StartpageComponent
  },
  {
    path: "home",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
      }
    ]
  },
  {
    path: "settings",
    component: ProfileSettingsComponent
  }
  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
