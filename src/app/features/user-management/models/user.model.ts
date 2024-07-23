export class User {
  constructor(public name: string, public id: string, public email: string) {}
}

export class AuthenticateRequest {
  constructor(public emailOrPhone: string, public password: string) {}
}

export class TokenResponse {
  constructor(public accessToken: string, public refreshToken: string) {}
}

export interface PrivillageResponse {
  page: string;
  permissions: string[];
}
