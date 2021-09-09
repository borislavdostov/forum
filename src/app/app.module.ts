import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeListComponent } from './components/theme-list/theme-list.component';
import { AsideComponent } from './components/aside/aside.component';
import { ThemeListItemComponent } from './components/theme-list-item/theme-list-item.component';

import { UserService } from './services/user/user.service';
import { storageServiceProvider } from './services/storage/storage.service';
import { ThemeService } from './services/theme/theme.service';
import { PostService } from './services/post/post.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ThemeListComponent,
    AsideComponent,
    ThemeListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    ThemeService,
    PostService,
    storageServiceProvider
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppModule { }
