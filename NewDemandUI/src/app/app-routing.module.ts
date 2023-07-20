import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyHereComponent } from './apply-here/apply-here.component';
import { HideShowColmComponent } from './hide-show-colm/hide-show-colm.component';
import { ReusableTableComponent } from './reusable-table/reusable-table.component';
import { UserDisplayComponent } from './user-display/user-display.component';



const routes: Routes = [
  { path: 'userDisplay', component: UserDisplayComponent },
  //{ path: 'hideShowColm', component: HideShowColmComponent},
  //{ path: 'reusableTable', component: ReusableTableComponent},
  { path: 'userDisplay/apply', component: ApplyHereComponent} ///:id

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
