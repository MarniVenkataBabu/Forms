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
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  fields: FormField[] = [];
  newField: FormField = {
    type: 'text',
    label: '',
    placeholder: '',
    width: '100%',
    textAlign: 'left',
    shadowColor: '#ccc',
    backgroundColor: '#ffffff',
    hoverColor: '#f5f5f5',
    maxLength: 50,
    isRequired: false
  };

  addField() {
    this.fields.push({ ...this.newField });
  }

  generateJson() {
    const jsonData = JSON.stringify(this.fields, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'form.json';
    link.click();
    URL.revokeObjectURL(url);
  }
  
}
