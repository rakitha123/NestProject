import { Body, Controller, Get, Post } from "@nestjs/common";
import CreateBookDto from "src/user/dto/create-book.dto";
import { BookServices } from "./books.service";

@Controller('books')
export class BookController{
    constructor(private readonly bookServices: BookServices) {}

        @Post('post')
        postBook(@Body() book: CreateBookDto) {
            return this.bookServices.insert(book);
        }

        @Get()
        getAll() {
            return this.bookServices.getAllBooks();
        }

}