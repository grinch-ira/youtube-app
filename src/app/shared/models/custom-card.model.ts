export interface ICustomCard {
  id: string;
  snippet: ICustomSnippet;
}

export interface ICustomSnippet {
  publishedAt: string;
  title: string;
  description: string;
  thumbnail: string;
  link: string;
}

export class CustomCard implements ICustomCard {
  public id: string;

  public snippet: ICustomSnippet;

  constructor(
    title: string,
    desc: string,
    imageUrl: string,
    link:string,
  ) {
    this.snippet = {
      description: desc,
      publishedAt: new Date().toString(),
      thumbnail: imageUrl,
      title: title,
      link: link,
    };
    this.id = Date.now() + '';
  }
}
