import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Viewer, ViewerConfig } from '@photo-sphere-viewer/core';

@Component({
  selector: 'app-single-sphere',
  templateUrl: './single_sphere.component.html',
  styleUrls: ['./single_sphere.component.scss']
})
export class SingleSphereComponent implements OnInit {
  @Input() imagePath: string = '';
  public viewer!: Viewer;

  ngOnInit() {
    if (this.imagePath != ''){
      this.viewer =  new Viewer({
        container: document.querySelector('#viewer'),
        panorama: 'assets/' + this.imagePath,
      } as ViewerConfig);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.viewer) {
      this.viewer.destroy();
      this.ngOnInit();
    }
  }
}
