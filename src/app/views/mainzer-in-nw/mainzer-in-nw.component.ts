import { Component, OnInit } from '@angular/core';
import { Viewer, ViewerConfig } from '@photo-sphere-viewer/core';

@Component({
  selector: 'app-mainzer-in-nw',
  templateUrl: './mainzer-in-nw.component.html',
  styleUrls: ['./mainzer-in-nw.component.scss']
})
export class MainzerInNwComponent implements OnInit {
  public viewer!: Viewer;

  ngOnInit() {
    this.viewer =  new Viewer({
      container: document.querySelector('#viewer'),
      panorama: 'assets/PXL_20230427_160725095.PHOTOSPHERE.jpg',
    } as ViewerConfig);
  }
}
