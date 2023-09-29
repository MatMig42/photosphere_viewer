import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from './views/room/room.component';

const routes: Routes = [
  { path: '',   redirectTo: '/room/Hof', pathMatch: 'full' },
  { path: 'room/:roomID', component: RoomComponent},
  { path: 'room/:roomID/:ImageID', component: RoomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
