export interface IUser{
    _id: string | undefined;
    email: string;
    password: string;
    name: string;
    address?: string;
    phoneNumber?: string;
    role: Role;
}
export enum Role {
    client = 0,
    admin = 1
}
export class UserInfor {
    _id: string | undefined;
    email: string;
    password: string;
    name: string;
    address?: string;
    phoneNumber?: string;
    role: Role;
    constructor(args?: any) {
        this._id = args.id?? undefined;
        this.email = args.email?? "";
        this.password = args.password?? "";
        this.address = args.address?? "";
        this.phoneNumber = args.phoneNumber?? "";
        this.role = args.role?? 0;
        this.name = args.name ?? "";
    }
}