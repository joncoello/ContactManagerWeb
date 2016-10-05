/* tslint:disable:no-unused-variable */
import { ReflectiveInjector } from '@angular/core';

import { ContactListComponent } from './app.contactListComponent';

import { IContactService, contactService } from './contactService';

////////  SPECS  /////////////
describe('ContactListComponent', function () {

    var injector: ReflectiveInjector;

    beforeAll(()=> {
        injector = ReflectiveInjector.resolveAndCreate([
            { provide: contactService, useClass: contactService}
        ]);
    });

    var sut: ContactListComponent;

    beforeEach(() => {
        sut = new ContactListComponent(injector.get(contactService));
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
