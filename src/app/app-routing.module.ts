import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumberSortComponent } from './games/numbersort/number.sort';

const routes: Routes = [
  {path: 'number-sort', component: NumberSortComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
