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
    'inline-flex h-11 items-center gap-2 rounded-sm border border-border px-4 text-sm text-text transition-colors duration-fast';

  return (
    <nav
      className="mt-12 flex w-full items-center justify-between gap-4"
      aria-label="Blog pagination"
    >
      {hasPrevPage && prevPage ? (
        <Link
          href={`/blogs?page=${prevPage}`}
          className={`${base} hover:border-muted`}
          rel="prev"
        >
          ← Newer
        </Link>
      ) : (
        <span className={`${base} cursor-not-allowed opacity-40`} aria-disabled>
          ← Newer
        </span>
      )}

      <span className="font-mono text-sm text-muted">
        {page} / {totalPages}
      </span>

      {hasNextPage && nextPage ? (
        <Link
          href={`/blogs?page=${nextPage}`}
          className={`${base} hover:border-muted`}
          rel="next"
        >
          Older →
        </Link>
      ) : (
        <span className={`${base} cursor-not-allowed opacity-40`} aria-disabled>
          Older →
        </span>
      )}
    </nav>
  );
};

export default BlogPagination;
