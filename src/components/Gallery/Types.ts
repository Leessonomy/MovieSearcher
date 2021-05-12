export interface IGalleryProps {
  match: any;
  imageURL: string;
  galleryDesktop: string[];
  galleryMobile: string[];
  order: number;
}

export interface IState {
  isOpen: boolean;
  loaded: boolean;
  indexImage: number;
}
