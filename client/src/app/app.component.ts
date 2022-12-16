import { Component, EnvironmentInjector } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

@Component({
  standalone: true,
  imports: [IonicModule],
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [{ provide:RouteReuseStrategy, useClass:IonicRouteStrategy }],
})
export class AppComponent {
  constructor(public environmentInjector: EnvironmentInjector) {}
}
