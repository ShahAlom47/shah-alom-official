

export type ProjectFormInput = Omit<Project, "_id" | "createdAt" | "updatedAt">;

export type OptionType = {
  value: string;
  label: string;
};

export interface MediaItem {
  type: "image" | "video";
  url: string;
  thumbnail?: string;
  publicId?: string;
}

export interface Project {
  _id: string;
  title: string;
  slug: string;
  description: string;
  content?: string;
  media: MediaItem[];
  techStack: OptionType[];
  tags?: OptionType[];
  liveLink?: string;
  repoLink?: string;
  featured?: boolean;
  order?: number;
  createdAt: string;
  updatedAt: string;
}
