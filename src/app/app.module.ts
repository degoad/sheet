import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import { IonicModule, IonicRouteStrategy} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiDjangoService} from './services/api-django.service';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule,  
  IonicStorageModule.forRoot()],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    HttpClientModule,
    Geolocation,
    NativeGeocoder,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ApiDjangoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}





