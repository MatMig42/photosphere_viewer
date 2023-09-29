import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mandelring 10';
  roomList = {
    "Hof": "Hof",
    "Scheune_Hof": "Verbindung zwischen Scheune und Haus",
    "Scheune_EG": "Scheune Erdgeschoss",
    "Scheune_DG": "Scheune Dachgeschoss",
    "EG_F": "Erdgeschoss Flur und Waschküsche",
    "EG_K": "Erdgeschoss Küche",
    "EG_W": "Erdgeschoss Wohnzimmer",
    "1OG_B": "1.OG Zimmer hinten rechts",
    "1OG_F": "1.OG Flur",
    "1OG_L": "1.OG Zimmer links",
    "1OG_S": "1.OG Zimmer vorne rechts",
    "DG_B": "2. OG Bad",
    "DG_F": "2. OG Flur",
    "DG_L": "2. OG Zimmer links",
    "DG_R": "2. OG Zimmer rechts"
  }
}
