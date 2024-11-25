import { Injectable } from '@nestjs/common';
export type User = {
  id: string;
  name: string;
  password: string;
};
const users: User[] = [
  {
    id: 'a;dlsfkj',
    name: 'anees',
    password: 'password123',
  },
  {
    id: 'a;dlsfkj',
    name: 'Waleed Malik',
    password: 'password123',
  },
];
@Injectable()
export class UsersService {
  async findUserByName(name: string): Promise<User | undefined> {
    return users.find((user) => user.name === name);
  }
}
