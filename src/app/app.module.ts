import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    FormComponent,
    FooterComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
