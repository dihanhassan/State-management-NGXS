import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

// Import the NGXS Store module
import { NgxsModule } from '@ngxs/store';

// import class
import { ZooComponent } from './zoo/zoo.component';
import { ZooState } from '../shared/store/animal.state';

@NgModule({
  declarations: [
    AppComponent,
    ZooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([ZooState])
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
