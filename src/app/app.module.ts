import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyStoryComponent } from './my-story/my-story.component';
import { HiMelissaComponent } from './hi-melissa/hi-melissa.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MyToolsComponent } from './my-tools/my-tools.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    MyStoryComponent,
    HiMelissaComponent,
    NavigationComponent,
    MyToolsComponent,
    AboutMeComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
