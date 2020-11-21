import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SparklineComponent } from './custom-charts/sparkline/sparkline.component';
import { TimelineFilterBarChartComponent } from './custom-charts/timeline-filter-bar-chart/timeline-filter-bar-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts/ngx-charts.module';
import { NgxUIModule } from '@swimlane/ngx-ui';
import { ComboChartComponent, ComboSeriesVerticalComponent } from './custom-charts/combo-chart';
import { BubbleChartInteractiveModule } from './custom-charts/bubble-chart-interactive';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'demo', component: DemoComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  providers: [
  ],
  imports: [
    NgxChartsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxUIModule,
    BubbleChartInteractiveModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    SparklineComponent,
    TimelineFilterBarChartComponent,
    ComboChartComponent,
    ComboSeriesVerticalComponent,
    DemoComponent,
    PricingComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function getBaseLocation() {
  const paths: string[] = location.pathname.split('/').splice(1, 1);
  const basePath: string = (paths && paths[0]) || '';
  return '/' + basePath;
}
