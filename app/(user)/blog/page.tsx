'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import SectionContainer from '@/components/utils/SectionContainer';
import TitleSectionPageContainer from '@/components/utils/TitleSectionPageContainer';
import { Post } from '@/types';
import CardBlog from '@/components/content/CardBlog';

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getPostData = async () => {
    try {
      const response = await axios.get(
        'https://dev.to/api/articles?username=rohanrajgautam'
      );
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      setError('Failed to fetch blog posts. Please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  if (loading) {
    return <TitleSectionPageContainer title="Loading..." />;
  }

  if (error) {
    return <TitleSectionPageContainer title={error} />;
  }

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
            }) => (
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
            )
          )}
        </article>
      </div>
    </SectionContainer>
  );
};

export default Blog;
