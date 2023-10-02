import { Component } from "@angular/core";
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
    selector: 'number-sort',
    templateUrl: './number.sort.html',
    styleUrls: ['./number.sort.scss']
  })
export class NumberSortComponent {
    numbersList : number[] = [];
    answer  : number[] = [];
    showMessage : boolean = false;
    
    
    constructor ()
    {
        this.newGame();
    }
      onDrop(event: any) {
        if (event.previousContainer === event.container) {
          moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
          if (this.equalsCheck(this.numbersList,this.answer))
          this.showMessage = true;
        }}  

    equalsCheck = (a :number [],  b: number []) => {
        return JSON.stringify(a) === JSON.stringify(b);
    } 
    
    newGame () {
        this.numbersList = Array(5) 
  .fill(undefined)
  .map(() => Math.floor(100 * Math.random())); 

        this.answer  = [...this.numbersList].sort((n1,n2) => n1 - n2);
        this.showMessage = false;
    }
}