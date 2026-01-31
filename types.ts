export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  gallery?: string[];
  description?: string;
  technologies?: string[];
  link?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}