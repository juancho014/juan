import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './paginas/about/about.component';
import { HomeComponent } from './paginas/home/home.component';
import{PortafolioComponent} from './paginas/portafolio/portafolio.component';

const routes: Routes = [

  {path: 'home', component:HomeComponent},
  {path:'portafolio', component:PortafolioComponent},
  {path:'about', component:AboutComponent},
  {path:'**',pathMatch: 'full',redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
