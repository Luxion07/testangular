import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<ul><li *ngFor="let name of names">Hello {{name}}</li></ul>'
})

export class HelloAngular{
    names: string[];
    constructor(){
        this.names=['Zar', 'dsf', 'sdf', 'sdfg'];
    }
}