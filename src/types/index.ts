export type SocialMedia = {
  name: string,
  icon: string,
  url: string,
}

export interface Image {
  url: string,
  caption: string
}

export type Theme = "light" | "dark";

export interface Link {
  title: string;
  url: string;
}

export interface Page {
  [key: string]: string
}

export interface ComponentData {
  [key: string]: null | string | Link[];
}

export interface Traduction {
  PAGES: {
    [key: string]: Page
  }
  COMPONENTS: {
    [key: string]: ComponentData
  }
} 