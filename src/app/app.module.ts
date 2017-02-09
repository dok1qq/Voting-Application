import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule} from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';

// Import Services
import { AuthService } from './auth/auth.service';
import { CrudService } from './auth/crud.sercive';

// Import Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { PollsComponent }  from './poll/polls.component';
import { NewComponent } from './poll/new.component';
import { VoteComponent } from './vote/vote.component';
import { BarComponent } from './vote/charts/bar.component';
import { PieComponent } from './vote/charts/pie.component';
import { RadarComponent } from './vote/charts/radar.component';
import { PolarComponent } from './vote/charts/polar.component';
import { DoughnutComponent } from './vote/charts/doughnut.component';
import { ErrorComponent } from './404/error.component';

// Initialize Firebase config
export const firebaseConfig = {
  apiKey: "AIzaSyC82l1sRFAtM05HsZSo25gp-9TPlXuXA0U",
  authDomain: "votingapp-e046f.firebaseapp.com",
  databaseURL: "https://votingapp-e046f.firebaseio.com",
  storageBucket: "votingapp-e046f.appspot.com",
  messagingSenderId: "48144912948"
};


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    ChartsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    PollsComponent,
    NewComponent,
    VoteComponent,
    BarComponent,
    PieComponent,
    RadarComponent,
    PolarComponent,
    DoughnutComponent,
    ErrorComponent
  ],
  providers: [
    AuthService,
    CrudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
