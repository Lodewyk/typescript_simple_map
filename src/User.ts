import { faker } from "@faker-js/faker";
import { Mappable } from './CustomMap';

export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string;

    // https://github.com/faker-js/faker#typescript-support
    constructor() {
        this.name = faker.name.firstName('male');
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
        this.color = faker.color.rgb();
    }

    markerContent(): string {
        return `user name: ${this.name}`;
    }
}

