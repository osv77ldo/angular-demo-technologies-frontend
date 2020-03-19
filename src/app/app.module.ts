import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnologyCardComponent } from './components/technology-card/technology-card.component';
import { SearchComponent } from './pages/search/search.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnologyCardComponent,
    SearchComponent,
    TechnologyComponent,
    TechnologiesComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
