import { faker } from "@faker-js/faker";

export class Students {
  private firstName: string;
  private lastName: string;
  private latitude: number;
  private longtitude: number;

  constructor() {
    this.firstName = faker.person.firstName();
    this.lastName = faker.person.lastName();
    this.latitude = faker.location.latitude(59, 49);
    this.longtitude = faker.location.longitude(-129, -129);
  }
  getName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getLocation(): { latitude: number; longtitude: number } {
    return { latitude: this.latitude, longtitude: this.longtitude };
  }
}
