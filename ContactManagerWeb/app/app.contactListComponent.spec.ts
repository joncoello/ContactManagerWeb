/* tslint:disable:no-unused-variable */
import { ReflectiveInjector } from '@angular/core';

import { ContactListComponent } from './app.contactListComponent';

import { IContactService, contactService, Contact } from './contactService';

////////  SPECS  /////////////
describe('ContactListComponent', function () {

    var injector: ReflectiveInjector;

    beforeAll(()=> {
        injector = ReflectiveInjector.resolveAndCreate([mockService]);
    });

    var sut: ContactListComponent;

    beforeEach(() => {
        sut = new ContactListComponent(injector.get(mockService));
    });

    it('should create', () => {
        expect(sut instanceof ContactListComponent).toBe(true, 'should create');
    });

    it('should start with the correct title', () => {
        expect(sut.title).toEqual('Contact List');
    });

    it('should start with the correct service title', () => {
        expect(sut.serviceTitle).toEqual('Hello Service');
    });
    
});

class mockService implements IContactService{
    title: string;
    constructor() {
        this.title = 'Hello Service';
    }
    GetContacts(): Contact[] {
        return [
            new Contact('Jon Smith')
        ];
    }
}