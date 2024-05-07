import { Injectable } from '@angular/core';
import { Person } from '../pages/model/person.model';

@Injectable({
  providedIn: 'root',
})
export class CsvParserService {
  private readonly delimiter = ',';

  constructor() {}

  public parseCsv(content: string): Person[] {
    const lines = content.split('\n');
    const people: Person[] = [];

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line) {
        const person = this.parseCsvLine(line);
        if (person) {
          people.push(person);
        }
      }
    }

    return people;
  }

  private parseCsvLine(line: string): Person | null {
    const values = this.splitCsvLine(line);
    if (values.length === 28) {
      return {
        id: parseInt(values[0]),
        username: values[1],
        firstName: values[2],
        lastName: values[3],
        email: values[4],
        phoneNumber: values[5],
        country: values[6],
        state: values[7],
        city: values[8],
        postalCode: values[9],
        streetAddress: values[10],
        password: values[11],
        securityQuestion1: values[12],
        securityAnswer1: values[13],
        securityQuestion2: values[14],
        securityAnswer2: values[15],
        deviceType: values[16],
        deviceBrand: values[17],
        deviceModel: values[18],
        deviceOs: values[19],
        lastLogin: new Date(values[20]),
        accountCreated: new Date(values[21]),
        accountStatus: values[22],
        twoFactorEnabled: values[23] === 'true',
        lastIpAddress: values[24],
        loginAttempts: parseInt(values[25]),
        accountLocked: values[26] === 'true',
        passwordLastChanged: new Date(values[27]),
      };
    } else {
      console.warn(`Skipping line due to incorrect field count: ${line}`);
      return null;
    }
  }

  private splitCsvLine(line: string): string[] {
    const values: string[] = [];
    let currentField = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"') {
        if (inQuotes && i < line.length - 1 && line[i + 1] === '"') {
          currentField += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
        continue;
      }

      if (c === this.delimiter && !inQuotes) {
        values.push(currentField);
        currentField = '';
      } else {
        currentField += c;
      }
    }

    values.push(currentField);
    return values;
  }
}
