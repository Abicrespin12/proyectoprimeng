import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagesModule } from '../pages/pages.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    PagesModule, 
    MaterialModule
  ],
  exports:[
    FooterComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
