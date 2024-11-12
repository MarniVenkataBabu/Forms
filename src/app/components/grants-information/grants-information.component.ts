import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-grants-information',
  templateUrl: './grants-information.component.html',
  styleUrls: ['./grants-information.component.css']
})
export class GrantsInformationComponent {
  isDropdownOpen = false;
  searchQuery = '';
  selectedFieldIndex: number | null = null;
  selectedFieldForChange: string = ''; // Track the selected field type for the dropdown
  isDownloadDropdownOpen = false;
  isAddFieldDropdownOpen = false;

  fields: {
    name: string;
    value: string;
    label?: string;
    placeholder?: string;
    width?: number;
    borderRadius?: number;
    maxLength?: number;
    required?: boolean;
    labelAlignment?: string;
    option1?: string
  }[] = []; // List of added fields with customizable properties

  availableFields = [
    'Input', 'Radio', 'Select', 'Checkbox', 'Progress', 'Password', 'Email', 'Dropdown', 'Switch', 'Table', 'DatePicker'
  ];

  // Filter available fields based on the search query
  get filteredFields() {
    return this.availableFields.filter(field =>
      field.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Toggle dropdown visibility
  toggleDropdown(dropdownType: 'addField' | 'download') {
    if (dropdownType === 'addField') {
      this.isAddFieldDropdownOpen = !this.isAddFieldDropdownOpen;
      this.isDownloadDropdownOpen = false; // Close the download dropdown if addField is clicked
    } else if (dropdownType === 'download') {
      this.isDownloadDropdownOpen = !this.isDownloadDropdownOpen;
      this.isAddFieldDropdownOpen = false; // Close the addField dropdown if download is clicked
    }
  }

  // Add the selected field to the fields array
  addField(field: string) {
    this.fields.push({ name: field, value: '', labelAlignment: 'left' }); // Set default alignment to left
    this.selectedFieldIndex = this.fields.length - 1;
    this.selectedFieldForChange = field;
    this.toggleDropdown('addField');
  }

  // Select a field from the left section
  selectField(index: number) {
    this.selectedFieldIndex = index;
    this.selectedFieldForChange = this.fields[index].name;
  }

  // Update the selected field based on the user's choice in the "Change Field" dropdown
  updateField(newFieldName: string) {
    if (this.selectedFieldIndex !== null) {
      this.fields[this.selectedFieldIndex].name = newFieldName; // Update the name in the array
      this.selectedFieldForChange = newFieldName; // Update the dropdown selection
    }
  }

  // Get CSS class for label alignment
  getLabelAlignmentClass(alignment: string | undefined): string {
    switch (alignment) {
      case 'left': return 'align-left';
      case 'center': return 'align-center';
      case 'right': return 'align-right';
      case 'side-by-side': return 'align-side-by-side';
      case 'top': return 'align-top';
      case 'bottom': return 'align-bottom';
      default: return 'align-left';
    }
  }

  addBackgroundImage() {
    const imageUrl = prompt('Enter the background image URL');
    if (imageUrl) {
      document.body.style.backgroundImage = `url(${imageUrl})`;
      document.body.style.backgroundSize = 'cover';
    }
  }
  // Function to handle file download in different formats
  downloadFile(format: string) {
    let data = '';
    if (format === 'html') {
      data = this.generateHTML();
    } else if (format === 'json') {
      data = JSON.stringify(this.fields, null, 2);
    } else if (format === 'xml') {
      data = this.generateXML();
    }
    
    // Create a link to download the file
    const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `fields.${format}`;
    link.click();
  }

 

  // Generate XML representation of the fields
  generateXML() {
    let xml = '<fields>';
    this.fields.forEach(field => {
      xml += `
        <field>
          <name>${field.name}</name>
          <value>${field.value}</value>
        </field>
      `;
    });
    xml += '</fields>';
    return xml;
  }

   // Generate HTML representation of the fields
   generateHTML() {
    return `
      <html>
        <body>
          <h2>Grants Information</h2>
          <form style="max-width: 800px; margin: 0 auto;">
          ${this.fields.map(field => this.generateFieldHTML(field)).join('')}
        </form>
        </body>
      </html>
    `;
  }
  // Helper function to generate HTML for each field based on its type and properties
generateFieldHTML(field: any) {
  let fieldHTML = '';
  
  switch (field.type) {
    case 'Input':
      fieldHTML = `
        <div style="margin-bottom: 10px; padding: 10px; border: 1px dotted lightgray;">
          <label style="color: ${field.color || 'black'};">
            ${field.label || 'Label'} ${field.required ? '*' : ''}
          </label>
          <input type="text" placeholder="${field.placeholder || ''}" 
                 style="width: ${field.width || 200}px; border-radius: ${field.borderRadius || 0}px;" 
                 ${field.required ? 'required' : ''} />
        </div>
      `;
      break;

    case 'Radio':
      fieldHTML = `
        <div style="margin-bottom: 10px; padding: 10px; border: 1px dotted lightgray;">
          <label>${field.label || 'Label'} ${field.required ? '*' : ''}</label>
          ${field.options.map((option: string) => `
            <label>
              <input type="radio" name="${field.label}" value="${option}" ${field.required ? 'required' : ''} /> 
              ${option}
            </label>
          `).join('')}
        </div>
      `;
      break;

    case 'Checkbox':
      fieldHTML = `
        <div style="margin-bottom: 10px; padding: 10px; border: 1px dotted lightgray;">
          <label>
            <input type="checkbox" ${field.checked ? 'checked' : ''} /> ${field.label || 'Label'}
          </label>
        </div>
      `;
      break;

    // Add other cases for different field types (e.g., Progress, Password, etc.)

          }
  }
}
