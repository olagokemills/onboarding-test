import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideSectionComponent } from './side-section/side-section.component';
import { PersonalComponent } from './personal/personal.component';
import { DocumentComponent } from './document/document.component';
import { ReviewComponent } from './review/review.component';
import { ModalComponent } from './modal/modal.component';
import { ModalDocumentComponent } from './modal-document/modal-document.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideSectionComponent,
    PersonalComponent,
    DocumentComponent,
    ReviewComponent,
    ModalComponent,
    ModalDocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
