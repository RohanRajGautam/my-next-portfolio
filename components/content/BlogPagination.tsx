import Link from 'next/link';

import { BlogPagination as BlogPaginationProps } from '@/types';

// Page 1 holds the newest posts, so a lower page number is "newer" and a higher
// one is "older". Server-rendered Prev/Next links keep the listing crawlable.
const BlogPagination = ({
  pagination
}: {
  pagination: BlogPaginationProps;
}) => {
  const { page, totalPages, hasPrevPage, hasNextPage, prevPage, nextPage } =
    pagination;

  if (totalPages <= 1) return null;

  const base =
    'inline-flex items-center gap-2 rounded border border-gray-800 bg-black px-4 py-2 text-sm text-white transition-all ease';

  return (
    <nav
      className="w-full flex items-center justify-between gap-4 mt-4"
      aria-label="Blog pagination"
    >
      {hasPrevPage && prevPage ? (
        <Link
          href={`/blogs?page=${prevPage}`}
          className={`${base} hover:border-gray-500`}
          rel="prev"
        >
          ← Newer
        </Link>
      ) : (
        <span className={`${base} opacity-40 cursor-not-allowed`} aria-disabled>
          ← Newer
        </span>
      )}

      <span className="text-sm text-gray-500">
        Page {page} of {totalPages}
      </span>

      {hasNextPage && nextPage ? (
        <Link
          href={`/blogs?page=${nextPage}`}
          className={`${base} hover:border-gray-500`}
          rel="next"
        >
          Older →
        </Link>
      ) : (
        <span className={`${base} opacity-40 cursor-not-allowed`} aria-disabled>
          Older →
        </span>
      )}
    </nav>
  );
};

export default BlogPagination;
