import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PigLatinTranslatorComponent } from './pig-latin-translator/pig-latin-translator.component';

@NgModule({
  declarations: [
    AppComponent,
    PigLatinTranslatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
