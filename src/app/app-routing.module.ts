import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes =[
  {
    path: '',
    redirectTo: 'home', // TODO: should be replaced to the redirections to home when add a new module
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./feature-modules/home/home.module').then(
        (m) => m.HomeModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
