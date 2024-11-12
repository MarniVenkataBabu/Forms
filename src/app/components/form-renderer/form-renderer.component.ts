import { Component } from '@angular/core';

interface FormField {
  type: string;
  label: string;
  placeholder: string;
  width: string;
  textAlign: string;
  shadowColor: string;
  backgroundColor: string;
  hoverColor: string;
  maxLength: number;
  isRequired: boolean;
}

@Component({
  selector: 'app-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.css']
})
export class FormRendererComponent {
  fields: FormField[] = [];

  loadJson(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.fields = JSON.parse(reader.result as string);
    };
    reader.readAsText(file);
  }

  
}
