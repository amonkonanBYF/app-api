import { Controller, Get, Post, Put } from '@nestjs/common';
import { UsersService } from '../services/users.service';

/**
 * listen localhost:3000/users
 */
@Controller('users')
export class UsersController {
    // role du controlleur écouter les request et y repondre 
    // c'est le service qui est chargé d'importer les données
    constructor(private userService: UsersService) {
    }
    
    @Post()
    create(): string {
        return 'created user'
    }
    
    @Get()
    findAll(): string {
        return 'all users'
    }

    @Get()
    findOne(): string {
        return 'user'
    }

    @Put()
    update(user: string): string {
        return 'update user '
    }
}
