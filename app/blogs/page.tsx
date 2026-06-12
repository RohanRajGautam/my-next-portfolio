import type { Metadata } from 'next';
import { BlogApiResponse } from '@/types';
import CardBlog from '@/components/content/CardBlog';
import BlogPagination from '@/components/content/BlogPagination';
import SectionContainer from '@/components/utils/SectionContainer';
import SectionHeading from '@/components/utils/SectionHeading';
import AnimationContainer from '@/components/utils/AnimationContainer';

export const metadata: Metadata = {
  title: 'Blog',
  alternates: { canonical: '/blogs' }
};

const BLOG_API = 'https://rrg.com.np/api/blog';
const BLOG_HOME = 'https://rrg.com.np/blog';

const POSTS_PER_PAGE = 6;

const getPosts = async (page: number): Promise<BlogApiResponse> => {
  const res = await fetch(
    `${BLOG_API}?page=${page}&limit=${POSTS_PER_PAGE}`,
    // The API sends s-maxage=3600, stale-while-revalidate=86400; mirror that
    // with an hourly ISR revalidate so each page is fetched at build/request
    // time and cached server-side.
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) throw new Error(`Blog API ${res.status}`);

  return res.json();
};

const Blog = async ({ searchParams }: { searchParams?: { page?: string } }) => {
  const requestedPage = Number(searchParams?.page);
  const page =
    Number.isInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;

  let data: BlogApiResponse | null = null;
  try {
    data = await getPosts(page);
  } catch {
    data = null;
  }

  return (
    <SectionContainer>
      <AnimationContainer customClassName="w-full">
        <SectionHeading as="h1" label="notes" title="Blog" />

        <p className="mt-6 max-w-[60ch] text-base text-muted">
          Notes on software engineering, web performance, and the things I learn
          while building. Every post lives on my{' '}
          <a
            href={BLOG_HOME}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text underline decoration-border underline-offset-4 transition-colors duration-fast hover:decoration-accent"
          >
            blog
          </a>
          .
        </p>
      </AnimationContainer>

      {!data || data.posts.length === 0 ? (
        <p className="py-12 text-base text-muted">
          {data
            ? 'No posts here yet - check back soon.'
            : 'Couldn’t load posts right now. Please try again later.'}
        </p>
      ) : (
        <>
          <div className="mt-12 grid grid-cols-1 gap-6">
            {data.posts.map((post) => (
              <CardBlog
                key={post.slug}
                title={post.title}
                description={post.description}
                url={post.url}
                image={post.coverImage ?? post.ogImage}
                readingTime={post.readingTime}
                category={post.category}
                tags={post.tags}
              />
            ))}
          </div>

          <BlogPagination pagination={data.pagination} />
        </>
      )}
    </SectionContainer>
  );
};

export default Blog;
