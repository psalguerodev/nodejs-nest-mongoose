import { Controller, Post, Req, Body, Res, HttpStatus, Get } from '@nestjs/common';
import { CreateCatDto } from '../dto/createCatDto';
import { Response } from 'express';
import { CatsService } from '../services/cats.service';

@Controller('cat')
export class CatController {

  constructor(private readonly catService: CatsService) {}

  @Post()
  createOne(@Body() createCatDto: CreateCatDto, @Res() response: Response) {
    this.catService.create(createCatDto).then(cat => {
      response.status(HttpStatus.CREATED).json(cat);
    })
    .catch(error => response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error));
  }

  @Get()
  findAll(@Res() response: Response) {
    this.catService.findAll().then(cats => {
      response.status(HttpStatus.OK).json(cats);
    })
    .catch(error => response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error));
  }
}
