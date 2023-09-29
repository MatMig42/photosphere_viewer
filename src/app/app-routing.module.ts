import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { RoomComponent } from './views/room/room.component';

const routes: Routes = [
  { path: '',   redirectTo: '/room?room=Hof&imageName=PXL_20230426_153423371.PHOTOSPHERE.jpg', pathMatch: 'full' },
  { path: 'room', component: RoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding()),]
})
export class AppRoutingModule { }
