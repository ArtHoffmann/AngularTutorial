export class Person {
    constructor(
        public FirstName?: string,
        public LastName?: string,
        public DateOfBirth?: Date
    ) { }
}

export interface PersonPresentation {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
}
