import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { ThemeService } from './theme.service';
import { ThemeRoutingModule } from './theme-routing.module';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    ThemeListComponent,
    ThemeListItemComponent,
    DetailComponent
  ],
  providers: [
    ThemeService
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule
  ],
  exports: [
    ThemeListComponent,
    ThemeListItemComponent
  ]
})
export class ThemeModule { }
