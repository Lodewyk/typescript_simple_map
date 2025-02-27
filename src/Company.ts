import { faker } from "@faker-js/faker";
import { Mappable } from './CustomMap';

export class Company implements Mappable {
    name: string;
    catchphrase: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string;

    constructor() {
        this.name = faker.company.name();
        this.catchphrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
        this.color = faker.color.rgb();
    }

    markerContent(): string {
        return `
        <div>
            <h1>Company Name: ${this.name}</h1>
            <h3>Catchphrase: ${this.catchphrase}</h3>
        </div>
        `;
    }
}