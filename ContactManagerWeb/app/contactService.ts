export class Contact {
    constructor(public name: string) {
    }
}

export interface IContactService {
    title: string;
    GetContacts() : Contact[];
}

export class contactService implements IContactService{

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