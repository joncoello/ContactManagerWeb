import { Component } from '@angular/core';

@Component({
    selector: 'contact-list',
    template: 'Contact List'
})
export class ContactListComponent {

    title: string;

    constructor() {
        this.title = 'title';
    }

}
