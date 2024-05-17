import { Post } from '@/types';
import CardBlog from '@/components/content/CardBlog';
import SectionContainer from '@/components/utils/SectionContainer';
import TitleSectionPageContainer from '@/components/utils/TitleSectionPageContainer';

const Blog = async () => {
  const res = await fetch(
    'https://dev.to/api/articles?username=rohanrajgautam',
    {
      next: { revalidate: 3600 } // Will revalidate every 1 hour
    }
  );

  if (!res.ok) {
    return <TitleSectionPageContainer title={'Failed to fetch the data'} />;
  }

  const posts: Post[] = await res.json();

  return (
    <SectionContainer>
      <div className="w-full flex flex-col items-center gap-6">
        <article className="w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto">
          {posts.map(
            ({
              title,
              description,
              cover_image,
              url,
              social_image,
              tags,
              comments_count,
              positive_reactions_count
            }) => {
              return (
                <CardBlog
                  key={title}
                  content={description}
                  link={url}
                  thumbnail={cover_image || social_image}
                  title={title}
                  tags={tags}
                  like={positive_reactions_count}
                  comment={comments_count}
                />
              );
            }
          )}
        </article>
      </div>
    </SectionContainer>
  );
};

export default Blog;
