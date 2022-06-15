import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyStoryComponent } from './my-story/my-story.component';
import { HiMelissaComponent } from './hi-melissa/hi-melissa.component';
import { MyToolsComponent } from './my-tools/my-tools.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hi-melissa',
    pathMatch: 'full',
  },
  {
    path: 'hi-melissa',
    component: HiMelissaComponent,
  },
  {
    path: 'my-story',
    component: MyStoryComponent,
  },
  {
    path: 'my-tools',
    component: MyToolsComponent
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
  },
  {
    path: '**',
    redirectTo: 'hi-melissa',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
