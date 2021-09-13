import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ThemeListComponent } from './theme-list/theme-list.component';

const routes: Routes = [
    {
        path: 'theme',
        pathMatch: 'full',
        redirectTo: 'theme/list'
    },
    {
        path: 'theme/list',
        component: ThemeListComponent
    },
    {
        path: 'theme/detail/:id',
        component: DetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }
