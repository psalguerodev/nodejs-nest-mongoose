import { Controller, Post, Body, Res, HttpStatus, Get, Put, Param } from '@nestjs/common';
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

  @Get(':id')
  findOneById(@Param() params, @Res() response: Response) {
    this.catService.findOneById(params.id)
    .then(catFound => response.status(HttpStatus.OK).json(catFound))
    .catch(error => response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error));
  }

  @Put(':id')
  updateOne(@Param() params, @Body() createCatDto: CreateCatDto, @Res() response: Response) {
    this.catService.updateOne(params.id, createCatDto).then(catUpdated => {
      response.status(HttpStatus.OK).json(createCatDto);
    })
    .catch(error => response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error));
  }

}
