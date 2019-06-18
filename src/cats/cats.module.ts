import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatController } from './controllers/cat.controller';
import { CatsService } from './services/cats.service';
import { CatSchema } from './schema/cat.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }]),
  ],
  controllers: [CatController],
  providers: [
    CatsService,
  ],
})
export class CatsModule {}
