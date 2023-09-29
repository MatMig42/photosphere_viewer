import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Router, RoutesRecognized } from '@angular/router';

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

  public room: string = '';
  public imageName: string = '';

  file_list: any;

  roomImages: Map<string, string[]> = new Map;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ){
  }

  ngOnInit() {
    this.http.get('/assets/image_list.json').subscribe(res => {
      this.file_list = res;
      
      this.roomImages = new Map();
      for (const [imageName, roomName] of Object.entries(this.file_list)) {
        if (this.roomImages.has(roomName as string)) {
          this.roomImages.get(roomName as string)?.push(imageName)
        } else {
          this.roomImages.set(roomName as string, [imageName as string])
        }
      }
    });
    let params = new URLSearchParams(window.location.search)
    this.room = params.get('room')!
    this.imageName = params.get('imageName')!
  }

  navigateToRoom(room: string, imageName: string) {
    this.router.navigate(['/room'], {
      queryParams: {room: room, imageName: imageName}
    }).then(() =>
      {window.location.reload()}
    );
  }
}
