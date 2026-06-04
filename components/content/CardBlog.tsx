import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';

import { CardBlogProps } from '@/types';

import ShowSkills from '../utils/ShowSkills';
import AnimationContainer from '../utils/AnimationContainer';

import ExternalLink from '../ui/ExternalLink';

// The social card is 1200x630. We try to generate a blur placeholder from the
// remote image, but never let a failed fetch break the card (or the page).
const getImage = async (src: string) => {
  try {
    const buffer = await fetch(src).then(async (res) => {
      if (!res.ok) throw new Error(`Image ${res.status}`);
      return Buffer.from(await res.arrayBuffer());
    });

    const {
      metadata: { height, width },
      ...plaiceholder
    } = await getPlaiceholder(buffer, { size: 10 });

    return {
      base64: plaiceholder.base64,
      img: { src, height, width }
    };
  } catch {
    return { base64: undefined, img: { src, height: 630, width: 1200 } };
  }
};

const CardBlog = async ({
  title,
  description,
  url,
  image,
  readingTime,
  category,
  tags
}: CardBlogProps) => {
  const { base64, img } = await getImage(image);

  return (
    <AnimationContainer customClassName="w-full h-full flex flex-col justify-start items-center rounded border border-gray-800 hover:border-gray-500 bg-[#080809] shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all ease overflow-hidden">
      <ExternalLink
        href={url}
        customClassName="w-full h-full flex flex-col text-inherit"
      >
        <div className="w-full h-full flex flex-col justify-start items-start rounded gap-3">
          <Image
            src={img.src || '/rrg.png'}
            height={img.height}
            width={img.width}
            alt={title}
            className="w-full h-auto object-cover"
            placeholder={base64 ? 'blur' : 'empty'}
            blurDataURL={base64}
          />

          <div className="p-4 flex flex-col gap-3 flex-1">
            <h3 className="text-xl lg:text-2xl font-medium text-white">
              {title}
            </h3>

            <p className="text-base text-gray-400 flex-1">{description}</p>

            <div className="w-full flex flex-col gap-3">
              {(readingTime || category) && (
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  {readingTime && <span>{readingTime}</span>}
                  {readingTime && category && <span aria-hidden>·</span>}
                  {category && <span>{category}</span>}
                </div>
              )}

              {tags && tags.length > 0 && (
                <div className="flex justify-start items-center gap-2 flex-wrap">
                  <ShowSkills skills={tags} />
                </div>
              )}
            </div>
          </div>
        </div>
      </ExternalLink>
    </AnimationContainer>
  );
};

export default CardBlog;
