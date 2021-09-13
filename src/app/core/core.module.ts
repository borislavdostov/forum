import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { storageServiceProvider } from './storage.service';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AsideComponent,
    FooterComponent,
    HeaderComponent,
  ],
  providers: [
    storageServiceProvider,
    AuthGuard
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
