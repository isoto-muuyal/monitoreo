import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NotasComponent } from './notas/notas.component';
import { DisplayNotesComponent } from './display-notes/display-notes.component';
import { NotesService } from './notes.service';
import { NotesPipe } from './notes.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NotasComponent,
    DisplayNotesComponent,
    NotesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    NotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
