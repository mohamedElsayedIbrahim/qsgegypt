export interface OptimizedImageProps {
  src: string // path without extension (e.g. "/assets/hero")
  alt: string
  className?: string
  placeholder?: string // optional blurred image
  sizes?: string // optional responsive hint for browsers
}


export interface BannerSlideProps {
  videoSrc: string
  title: string
  buttonText: string
  buttonLink: string
}

export interface Service {
  title: string;
  image: string;
  link: string;
}

export interface SeriveProps {
  service: Service;
  index: number;
}

export interface Project {
  category: string;
  categoryLink: string;
  title: string;
  description: string;
  image: string;
  link: string;
}


export interface ProjectSlideProps {
  project: Project;
  index: number;
}

export interface ProjectImageProps {
  image: string;
  link: string;
}

export interface ProjectContentProps {
  category: string;
  categoryLink: string;
  title: string;
  description: string;
  link: string;
}

export interface NewsItem {
  title: string;
  image: string;
  link: string;
  description?: string;
  date: string;
  large?: boolean; // For layout style (left big card vs right small)
}

export interface NewsProps {
  news: NewsItem;
  index?:number
}