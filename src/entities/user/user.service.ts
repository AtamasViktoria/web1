import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { genSalt, hash } from "bcrypt";


@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ){}

    public async createUser (userData: any){
        const salt = await genSalt(10)

        const hashedPassword = await hash(userData.password, salt)

        const newUser = this.userRepository.create({...userData, password: hashedPassword,})
        return await this.userRepository.save(newUser)
    }
}