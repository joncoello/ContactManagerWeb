/* tslint:disable:no-unused-variable */
import { ContactListComponent } from './app.contactListComponent';

////////  SPECS  /////////////
describe('ContactListComponent', function () {

    var sut: ContactListComponent;

    beforeEach(() => {
        sut = new ContactListComponent();
    });

    it('should create', () => {
        expect(sut instanceof ContactListComponent).toBe(true, 'should create');
    });

    it('should start with the correct title', () => {
        expect(sut.title).toEqual('Contact List');
    });


});
