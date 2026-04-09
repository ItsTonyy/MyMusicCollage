export interface LastFmImage {
  '#text': string;
  size: string;
}

export interface LastFmAlbum {
  name: string;
  playcount?: string;
  image: LastFmImage[];
}
