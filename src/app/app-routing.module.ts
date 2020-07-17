import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutHomeComponent } from './layout-home/layout-home/layout-home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  { path: '',component: LayoutHomeComponent, loadChildren: () => import('src/app/layout-home/layout-home/layout-home.module').then(m => m.LayoutHomeModule) } ,
  // {
  //   path: '',
  //   component: LayoutHomeComponent,
  //   children: [ 
  //     {
  //       path: '',

  //       loadChildren: 'src/app/layout-home/layout-home/layout-home.module#LayoutHomeModule'
  //     }
  //   ]
  // },  ,
   {
    path: '**',
    redirectTo: 'dashboard'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
