import { Component } from '@angular/core';

import { contactService, IContactService } from './contactService';

@Component({
    selector: 'contact-list',
    template: `
    <h1>{{title}}</h1>
    <h2>{{serviceTitle}}</h2>
    `,
    providers: [ contactService ]
})

export class ContactListComponent {

    title: string;
    serviceTitle: string;

    constructor(public contactService: IContactService) {
        this.title = 'Contact List';
        this.serviceTitle = contactService.title;
    }

}
