import { Component } from '@angular/core';

import { contactService } from './contactService';

@Component({
    selector: 'contact-list',
    template: `
    <h1>{{title}}</h1>
    <h2>{{serviceTitle}}</h2>
    `,
    providers: [
        { provide: contactService, useClass: contactService }
        ]
})
export class ContactListComponent {

    title: string;
    serviceTitle: string;

    constructor(public contactService: contactService) {
        this.title = 'Contact List';
        this.serviceTitle = contactService.title;
    }

}
