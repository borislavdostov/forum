import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

import { UserService } from './services/user.service';
import { storageServiceProvider } from './services/storage.service';
import { ThemeService } from './services/theme.service';
import { PostService } from './services/post.service';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeListComponent,
    ThemeListItemComponent,
    HomeComponent,
    PostListComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
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
