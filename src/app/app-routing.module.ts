import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomepgComponent } from './homepg/homepg.component';
import { PropageComponent } from './propage/propage.component';


const routes: Routes = [
  {path : 'homepg', component: HomepgComponent},
  {path : "", component: PropageComponent},
  {path : 'about-us', component: AboutUsComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true, onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }



