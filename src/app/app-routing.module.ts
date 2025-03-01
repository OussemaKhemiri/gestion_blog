import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostFormComponentComponent } from './post-form-component/post-form-component.component';
import { PostDetailComponentComponent } from './post-detail-component/post-detail-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' }, // Redirection vers la liste des posts
  { path: 'posts', component: PostListComponentComponent }, // Liste des posts (Page d'accueil)
  { path: 'posts/add', component: PostFormComponentComponent }, // Formulaire d'ajout de post
  { path: 'posts/:id', component: PostDetailComponentComponent } // Détails d'un post par ID
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
