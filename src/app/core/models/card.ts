import { Thumbnail } from "./response.model";

export class CharacterCard {
  constructor(
    public id: number,
    public name: string,
    public thumbnail: Thumbnail,
    public isFavorite: boolean,
  ) {}

  get imageURL() {
    if (this.thumbnail.path.includes('image_not_available')) {
      return '/assets/img/marvel-shield.jpg';
    } else {
      return `${this.thumbnail.path}.${this.thumbnail.extension}`;
    }
  }
}