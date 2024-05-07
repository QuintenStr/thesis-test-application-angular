export interface Person {
  [key: string]: any; // Allowing any property to be accessed via a string index
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
  streetAddress: string;
  password: string;
  securityQuestion1: string;
  securityAnswer1: string;
  securityQuestion2: string;
  securityAnswer2: string;
  deviceType: string;
  deviceBrand: string;
  deviceModel: string;
  deviceOs: string;
  lastLogin: Date;
  accountCreated: Date;
  accountStatus: string;
  twoFactorEnabled: boolean;
  lastIpAddress: string;
  loginAttempts: number;
  accountLocked: boolean;
  passwordLastChanged: Date;
}
