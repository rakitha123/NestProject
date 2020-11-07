import { Module } from "@nestjs/common";
import { BookController } from "./books.controller";
import { BookServices } from "./books.service";

@Module({
    imports: [],
    controllers: [BookController],
    providers: [BookServices],
})
export class BookModule{}