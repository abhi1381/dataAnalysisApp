import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnalysisComponent} from './analysis/analysis.component';
import {ConclusionComponent} from './conclusion/conclusion.component';

const routes: Routes = [
  {path: 'analysis',component: AnalysisComponent},
  {path: 'conclusion',component: ConclusionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
