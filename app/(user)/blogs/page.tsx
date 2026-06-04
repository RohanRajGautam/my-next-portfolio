import { BlogApiResponse } from '@/types';
import CardBlog from '@/components/content/CardBlog';
import BlogPagination from '@/components/content/BlogPagination';
import SectionContainer from '@/components/utils/SectionContainer';
import TitleSectionPageContainer from '@/components/utils/TitleSectionPageContainer';
import AnimationContainer from '@/components/utils/AnimationContainer';

const BLOG_API = 'https://rrg.com.np/api/blog';
const BLOG_HOME = 'https://rrg.com.np/blog';

// Two-column grid in the ~768px content container → 6 posts fills two rows.
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
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="Blog" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="w-full text-base text-gray-400">
            Notes on software engineering, web performance, and the things I
            learn while building. You can read every post on my{' '}
            <a
              href={BLOG_HOME}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline transition-all ease"
            >
              blog
            </a>
            .
          </p>
        </AnimationContainer>

        {!data || data.posts.length === 0 ? (
          <p className="text-gray-400 text-center py-8">
            {data
              ? 'No posts here yet — check back soon.'
              : "Couldn't load posts right now. Please try again later."}
          </p>
        ) : (
          <>
            <article className="w-full grid grid-cols-1 gap-6 mx-auto">
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
            </article>

            <BlogPagination pagination={data.pagination} />
          </>
        )}
      </div>
    </SectionContainer>
  );
};

export default Blog;
