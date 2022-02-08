export interface wrapperProps {
  bgColor?: string;
  textColor?: string;
  fromRightToLeft?: boolean;
}

export interface sectionTypes extends wrapperProps {
  caption: string;
  title: string;
  para: string;
  images: StaticImageData[];
  bgImgColor?: string;
}
