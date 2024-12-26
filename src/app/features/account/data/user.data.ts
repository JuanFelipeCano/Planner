import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserData {
  private _name!: string;
  private _lastname!: string;
  private _phone!: number;
  private _email!: string;
  private _password!: string;

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get lastname(): string {
    return this._lastname;
  }

  public set lastname(lastname: string) {
    this._lastname = lastname;
  }

  public get phone(): number {
    return this._phone;
  }

  public set phone(phone: number) {
    this._phone = phone;
  }

  public get email(): string {
    return this._email;
  }

  public set email(email: string) {
    this._email = email;
  }

  public get password(): string {
    return this._password;
  }

  public set password(password: string) {
    this._password = password;
  }
}
