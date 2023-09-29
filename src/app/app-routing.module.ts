import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { RoomComponent } from './views/room/room.component';

const routes: Routes = [
  { path: '',   redirectTo: '/?room=Hof&imageName=PXL_20230413_164228630.PHOTOSPHERE.jpg', pathMatch: 'full' },
  { path: 'room', component: RoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding()),]
})
export class AppRoutingModule { }
