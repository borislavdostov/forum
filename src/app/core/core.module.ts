import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { storageServiceProvider } from './storage.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AsideComponent,
    FooterComponent,
    HeaderComponent,
  ],
  providers: [
    storageServiceProvider
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ]
})
export class CoreModule { }
