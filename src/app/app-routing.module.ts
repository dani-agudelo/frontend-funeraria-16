import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './public-pages/about/about.component';
import { HomeComponent } from './public-pages/components/home/home.component'
import { ContactComponent } from './public-pages/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'auth',
    // canActivate: [ isNotAuthenticatedGuard ], //<-- esto protege la ruta
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) // Lazy load module
  },
  {
    path: 'dashboard',
    // canActivate: [ isAuthenticatedGuard ], //<-- esto protege la ruta 
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) // Lazy load module
  },
  {
    path: '**',
    redirectTo: '/'  //<-- si la ruta no existe redirige a la raiz
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
