import {Publication} from './publication';

export interface Article {
  articleBody: string;
  articleLead: string;
  created_at: Date;
  date: Date;
  publication: Publication;
  thumbnail: string;
  title: string;
  updated_at: Date;
  url: string;
  _v: number;
  _id: string;
  state: any;
}
