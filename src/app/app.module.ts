import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { PigLatinTranslatorComponent } from './pig-latin-translator/pig-latin-translator.component';
import { PiglatinPipe } from './pig-latin-translator/piglatin-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PigLatinTranslatorComponent,
    PiglatinPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
