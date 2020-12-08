import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [

      {
        path: 'personalprofile',
        loadChildren: () => import('../personalprofile/personalprofile.module').then( m => m.PersonalprofilePageModule)
      },
      {
        path: 'techskills',
        loadChildren: () => import('../techskills/techskills.module').then( m => m.TechskillsPageModule)
      },

      {
        path: 'softskills',
        loadChildren: () => import('../softskills/softskills.module').then( m => m.SoftskillsPageModule)
      },
      {
        path: 'teamprojects',
        loadChildren: () => import('../teamprojects/teamprojects.module').then( m => m.TeamprojectsPageModule)
      },
      {
        path: 'personalprojects',
        loadChildren: () => import('../personalprojects/personalprojects.module').then( m => m.PersonalprojectsPageModule)
      },
      {
        path: 'hobbies',
        loadChildren: () => import('../hobbies/hobbies.module').then( m => m.HobbiesPageModule)
      },

      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/personalprofile',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/personalprofile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
