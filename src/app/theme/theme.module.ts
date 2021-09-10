import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { ThemeService } from './theme.service';

@NgModule({
  declarations: [
    ThemeListComponent,
    ThemeListItemComponent
  ],
  providers: [
    ThemeService
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThemeListComponent,
    ThemeListItemComponent
  ]
})
export class ThemeModule { }
