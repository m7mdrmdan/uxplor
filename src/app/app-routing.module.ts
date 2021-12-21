import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes =[
  { path: '', redirectTo: 'business-profile', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: () =>
      import('./feature-modules/home/home.module').then(
        (m) => m.HomeModule
      ),
  },
  {
    path: 'business-profile',
    loadChildren: () =>
      import('./feature-modules/business-profile/business-profile.module').then(
        (m) => m.BusinessProfileModule
      ),
  },
  { path: '**', redirectTo: 'business-profile'},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
