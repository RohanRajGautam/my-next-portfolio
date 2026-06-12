export interface ExternalLinkProps {
  href: string;
  customClassName?: string;
  children: React.ReactNode;
}

export interface AnimationContainerProps {
  children: React.ReactNode;
  customClassName?: string;
  customDelay?: number;
}

export interface CardBlogProps {
  title: string;
  description: string;
  url: string;
  image: string;
  readingTime?: string;
  category?: string | null;
  tags?: string[];
}

export type BlogPost = {
  title: string;
  slug: string;
  url: string;
  description: string;
  date: string;
  updated: string;
  readingTime: string;
  tags: string[];
  category: string | null;
  author: string;
  featured: boolean;
  ogImage: string;
  coverImage: string | null;
};

export type BlogPagination = {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number | null;
  prevPage: number | null;
  next: string | null;
  prev: string | null;
};

export type BlogApiResponse = {
  site: {
    name: string;
    url: string;
    blog: string;
  };
  pagination: BlogPagination;
  posts: BlogPost[];
};
