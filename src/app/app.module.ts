import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyStoryComponent } from './my-story/my-story.component';
import { HiMelissaComponent } from './hi-melissa/hi-melissa.component';
import { MyCareerComponent } from './my-career/my-career.component';
import { HowThisSiteWasBuiltComponent } from './how-this-site-was-built/how-this-site-was-built.component';
import { MyAspirationsComponent } from './my-aspirations/my-aspirations.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    MyStoryComponent,
    HiMelissaComponent,
    MyCareerComponent,
    HowThisSiteWasBuiltComponent,
    MyAspirationsComponent,
    NavigationComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
