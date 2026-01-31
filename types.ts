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

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}