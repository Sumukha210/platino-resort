export interface heroContentProps {
  forFrontPage?: boolean;
  title: string;
}

export interface heroProps extends heroContentProps {
  bannerImg: StaticImageData;
}
