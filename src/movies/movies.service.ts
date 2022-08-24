import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './create-movie.dto';
import { Movie } from './movie.entity';

@Injectable()
export class MoviesService {
  constructor(@InjectRepository(Movie) private repo: Repository<Movie>) {}
  getAllMovies() {
    return this.repo.find();
  }

  getMovieById(movieId: number) {
    const foundMovie = this.repo.findOne({
      where: {
        id: movieId,
      },
    });
    if (!foundMovie) {
      throw new NotFoundException('Movie not found!');
    }
    return foundMovie;
  }

  createNewMovie(movieDto: CreateMovieDto) {
    const newMovie = this.repo.create(movieDto);
    return this.repo.save(newMovie);
  }

  async updateMovie(movieId: number, attrs: Partial<Movie>) {
    const movie = await this.getMovieById(movieId);
    Object.assign(movie, attrs);
    console.log(movie);
    return this.repo.save(movie);
  }

  async deleteMovie(movieId: number) {
    const movie = await this.getMovieById(movieId);
    return this.repo.remove(movie);
  }
}
