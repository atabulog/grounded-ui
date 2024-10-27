import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MapComponent} from "./map-viewer/map-viewer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'leaflet-example';
}
