import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThridComponent } from '../components/thrid/thrid.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThridComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test2';
}
