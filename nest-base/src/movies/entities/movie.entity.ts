// ts에서는 type interface로 타입을 지정해줬지만 nest에서는 class로 타입을 지정해줌
export class Movie {
  id: number;
  title: string;
  year: number;
  genres: string[];
}
