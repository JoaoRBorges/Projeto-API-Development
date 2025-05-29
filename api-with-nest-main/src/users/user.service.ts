import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;

  createUsr(name: string, email: string): User {
    const id = this.idCounter++;
    const newUser: User = {
      id,
      name: this.nameUsr(id),
      email: this.emailUsr(id, this.nameUsr(id)),
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException(`Usuário com o ID ${id} não foi encontrado`);
    }
    return user;
  }

  deleteUsr(id: number): void {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) {
      throw new NotFoundException(`Usuário com o ID ${id} não encontrado`);
    }
    this.users.splice(index, 1);
  }
  nameUsr(id: number): string {
    switch (id) {
      case 1:
        return 'Joao Victor Ribeiro';
      case 2:
        return 'Deivid Venancio';
      case 3:
        return 'Guilherme Leite';
      case 4:
        return 'Sandro Sousa';
      default:
        return `Usuário ${id}`; // Nome de usuário default para usuários não presentes no exemplo
    }
  }
  emailUsr(id: number, name: string): string {
    switch (id) {
      case 1:
        return 'Joao.rborges@aluno.faculdadeimpacta.com.br';
      case 2:
        return 'Deivid.venancio@aluno.faculdadeimpacta.com.br';
      case 3:
        return 'Guilherme.mata@aluno.faculdadeimpacta.com.br';
      case 4:
        return 'Sandro.sousa@aluno.faculdadeimpacta.com.br';
      default:
        return `${name.toLowerCase().replace(/ /g, '.')}@aluno.faculdadeimpacta.com.br`;
    }
  }

  DisplayUsers() {
    return [
      {
        id: 1,
        name: 'Joao Victor Ribeiro Borges',
        email: 'Joao.rborges@aluno.faculdadeimpacta.com.br',
      },
      {
        id: 2,
        name: 'Deivid Venancio',
        email: 'deivid.venancio@aluno.faculdadeimpacta.com.br',
      },
      {
        id: 3,
        name: 'Guilherme Leite',
        email: 'guilherme.mata@aluno.faculdadeimpacta.com.br',
      },
      {
        id: 4,
        name: 'Sandro Sousa',
        email: 'sandro.sousa@aluno.faculdadeimpacta.com.br',
      },
    ];
  }
}
