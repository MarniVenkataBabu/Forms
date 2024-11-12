// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "FormsManagementApp"
  selectedSection: string = 'home';

  // This method is triggered when a section is selected from the sidebar
  onSectionSelected(section: string) {
    this.selectedSection = section;
  }
}
