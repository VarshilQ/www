export interface IWorkDetails {
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  title: string;
  description: string;
  url?: string;
  content: string[];
}
