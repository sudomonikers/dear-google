import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyStoryComponent } from './my-story/my-story.component';
import { HiMelissaComponent } from './hi-melissa/hi-melissa.component';
import { MyCareerComponent } from './my-career/my-career.component';
import { MyAspirationsComponent } from './my-aspirations/my-aspirations.component';
import { MyToolsComponent } from './my-tools/my-tools.component';

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
    path: 'my-career',
    component: MyCareerComponent,
  },
  {
    path: 'my-tools',
    component: MyToolsComponent
  },
  {
    path: 'my-aspirations',
    component: MyAspirationsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
