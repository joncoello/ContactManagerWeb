import { Component } from '@angular/core';

@Component({
    selector: 'contact-list',
    template: '<h1>{{title}}</h1>'
})
export class ContactListComponent {

    title: string;

    constructor() {
        this.title = 'Contact List';
    }

}
