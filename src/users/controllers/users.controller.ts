import { Controller } from '@nestjs/common';
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
}
