import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movie.entity';

@Module({
  providers: [MoviesService],
  controllers: [MoviesController],
  imports: [TypeOrmModule.forFeature([Movie])],
})
export class MoviesModule {}
