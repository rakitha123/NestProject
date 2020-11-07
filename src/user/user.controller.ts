import { Body, Controller, Get, ParseIntPipe, Post } from "@nestjs/common";
import { CONNREFUSED } from "dns";
import CreateUserDto from "./dto/create-user.dto";
import { UserServices } from "./user.service";

@Controller('users')
export class UserController {
    constructor(private readonly userServices: UserServices){}

    //'postUser()' will handle the creating of new User
    @Post('post')
    postUser(@Body() user: CreateUserDto) {
        return this.userServices.insert(user);
    }

    // 'getAll()' returns the list of all the existing users in the database
    @Get()
    getAll() {
        return this.userServices.getAllUsers();
    }

    //'getBooks()' return all the books which are associated with the user 
    // provided through 'userID' by the request 
    @Get('books')
    getBooks(@Body('userID', ParseIntPipe) userID: number ) {
        return this.userServices.getBooksOfUser(userID);
    }
}