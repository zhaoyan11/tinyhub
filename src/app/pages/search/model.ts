export interface SearchResultItem {
  id: string | number;
  type: string;
  title: string;
  desc: string;
  date: string | number | Date;
  contributor: string;
  likes: string | number;
  liked: boolean;
  referenceCount: string | number;
  tags: string;
}
