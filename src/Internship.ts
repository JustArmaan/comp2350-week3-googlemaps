import { faker } from "@faker-js/faker";

export class Internship {
  private businessName: string;
  private latitude: number;
  private longtitude: number;

  constructor() {
    this.businessName = faker.company.name();
    this.latitude = faker.location.latitude(59, 49);
    this.longtitude = faker.location.longitude(-129, -129);
  }
  getLocationBusiness(): { latitude: number; longtitude: number } {
    return { latitude: this.latitude, longtitude: this.longtitude };
  }
  getBusinessName() {
    return this.businessName;
  }
}
