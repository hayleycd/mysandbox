import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { BubbleChart } from './bubblechart.component';
import { Dashboard } from './dashboard.component';


const appRoutes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'bubblechart', component: BubbleChart},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [
    AppComponent,
    Dashboard,
    BubbleChart
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
