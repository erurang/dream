// validate
import { IsString, IsNumber } from 'class-validator';
import 'class-transformer';

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString({ each: true })
  readonly genres: string[];
}
