import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';

import { CardBlogProps } from '@/types';

import ShowSkills from '../utils/ShowSkills';
import AnimationContainer from '../utils/AnimationContainer';

import ExternalLink from '../ui/ExternalLink';

const getImage = async (src: string) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width }
  };
};

const CardBlog = async ({
  title,
  content,
  link,
  thumbnail,
  tags,
  like,
  comment
}: CardBlogProps) => {
  const { base64, img } = await getImage(thumbnail);

  return (
    <AnimationContainer customClassName="w-full h-30 flex flex-col justify-center items-center rounded border border-gray-800 hover:border-gray-900 bg-[#080809] shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all ease">
      <ExternalLink href={link} customClassName="w-full">
        <div className="w-full flex flex-col justify-center items-start rounded gap-3">
          <Image
            src={img.src || '/rrg.png'}
            height={400}
            width={800}
            alt="thumbnail"
            priority
            placeholder="blur"
            blurDataURL={base64}
          />

          <div className="p-4 flex flex-col gap-4">
            <h3 className="text-2xl lg:text-2xl font-medium text-white">
              {title}
            </h3>

            <p className="text-base text-gray-400">{content}</p>

            <div className="w-full flex justify-between items-center flex-wrap flex-col lg:flex-row gap-5">
              <div className="flex justify-center items-start gap-3">
                <ShowSkills skills={tags.replace(/,/g, ' - ')} />
              </div>

              <div className="flex justify-center items-end gap-3">
                <div className="gap-1 text-white inline-flex items-center rounded-lg bg-black p-2 hover:bg-gray-900 transition-all ease">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path
                      d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>

                  <p className="text-xs">{like}</p>
                </div>

                <div className="gap-1 text-white inline-flex items-center rounded-lg bg-black p-2 hover:bg-gray-900 transition-all ease">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path
                      d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M11.9955 12H12.0045M15.991 12H16M8 12H8.00897"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="text-xs">{comment}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExternalLink>
    </AnimationContainer>
  );
};

export default CardBlog;
