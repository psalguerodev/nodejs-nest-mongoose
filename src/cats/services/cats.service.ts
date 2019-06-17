import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from '../interfaces/cat.interface';
import { CreateCatDto } from '../dto/createCatDto';
import { Model } from 'mongoose';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat> ) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createCat = new this.catModel(createCatDto);
    return await createCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }
}
