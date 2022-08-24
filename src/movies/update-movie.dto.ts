import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateMovieDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsNumber()
  @IsOptional()
  year: number;

  @IsString()
  @IsOptional()
  genres: string;

  @IsNumber()
  @IsOptional()
  rating: number;

  @IsString()
  @IsOptional()
  text: string;

  @IsString()
  @IsOptional()
  author: string;

  @IsNumber()
  @IsOptional()
  likeCount: number;

  @IsString()
  @IsOptional()
  director: string;
}
