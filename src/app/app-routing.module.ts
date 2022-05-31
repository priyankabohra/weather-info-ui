import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewWeatherComponent} from './view-weather/view-weather.component';

const routes: Routes = [
{path : '', component : ViewWeatherComponent },
{ path: 'view-weather', component: ViewWeatherComponent}
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
