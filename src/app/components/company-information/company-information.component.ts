import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-company-information',
  templateUrl: './company-information.component.html',
  styleUrls: ['./company-information.component.css']
})
export class CompanyInformationComponent {
  todo = ['Progress Circular', 'switch'];
  done = ['Input', 'Date Picker', 'Select', 'Tool tip', 'Panel','Radio Button',];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  moveToTodo(item: string) {
    // Remove the item from the done list and add it to the todo list
    const index = this.done.indexOf(item);
    if (index > -1) {
      this.done.splice(index, 1);
      this.todo.push(item);
    }
  }

  // Optional: Track items by index to improve rendering efficiency
  trackByFn(index: number, item: string): number {
    return index;
  }
}
