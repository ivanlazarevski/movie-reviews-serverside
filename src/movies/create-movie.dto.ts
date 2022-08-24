import { IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  title: string;

  @IsNumber()
  year: number;

  @IsString()
  genres: string;

  @IsNumber()
  rating: number;

  @IsString()
  text: string;

  @IsString()
  author: string;

  @IsNumber()
  likeCount: number;

  @IsString()
  director: string;
}
