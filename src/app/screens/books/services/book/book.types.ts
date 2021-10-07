export interface ResponseBooks {
  page: Book[];
  count: number;
  total_pages: number;
  total_count: number;
  current_page: number;
  next_page: number | null;
}

export interface Book {
  id: number;
  author: string;
  title: string;
  image_url: string;
  editor: string;
  year: string;
  genre: Genre;
  created_at: Date;
  updated_at: Date;
}

export enum Genre {
  NoRegistra = "no registra",
  SinRegistro = "Sin registro",
}
