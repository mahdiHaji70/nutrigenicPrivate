import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NutrigenicRoutes } from './nutrigenic.routes';

@NgModule({
  imports: [RouterModule.forChild(NutrigenicRoutes)],
  exports: [RouterModule]
})
export class NutrigenicRoutingModule {}
