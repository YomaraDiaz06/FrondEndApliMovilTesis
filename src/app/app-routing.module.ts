import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
   
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'solutions',
    loadChildren: () => import('./solutions/solutions.module').then( m => m.SolutionsPageModule)
  },
  {
    path:'userclient',
    loadChildren: () => import('./userclient/userclient.module').then ( m => m.UserclientPageModule)
  },
  {
    path: 'usertechnical',
    loadChildren: () => import('./usertechnical/usertechnical.module').then( m => m.UsertechnicalPageModule)
  },
  {
    path: 'usercomment',
    loadChildren: () => import('./usercomment/usercomment.module').then( m => m.UsercommentPageModule)
  },
  {
    path: 'technicalcomment',
    loadChildren: () => import('./technicalcomment/technicalcomment.module').then( m => m.TechnicalcommentPageModule)
  },  {
    path: 'work',
    loadChildren: () => import('./work/work.module').then( m => m.WorkPageModule)
  },
  {
    path: 'request',
    loadChildren: () => import('./request/request.module').then( m => m.RequestPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
