import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  public room: string = 'Hof';
  public imageName: string = '';


  constructor(
    private route: ActivatedRoute 
  ) {
    this.route.paramMap.subscribe(params => {
        if (params.has('roomID')){
          this.room = params.get("roomID")!
        }
        if (params.has('ImageID')){
          this.imageName = params.get("ImageID")!
        }
      });
  }

  ngOnInit() {
    console.log(this.room)
    console.log(this.imageName)
  }

}
