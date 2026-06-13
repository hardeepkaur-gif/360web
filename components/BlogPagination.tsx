import Link from "next/link";

type BlogPaginationProps = {
  currentPage: number;
  totalPages: number;
};

function pageHref(page: number) {
  return page <= 1 ? "/blogs" : `/blogs?page=${page}`;
}

export function BlogPagination({ currentPage, totalPages }: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="blog-pagination" aria-label="Blog pagination">
      {currentPage > 1 ? (
        <Link href={pageHref(currentPage - 1)} className="blog-pagination__btn">
          ← Previous
        </Link>
      ) : (
        <span className="blog-pagination__btn blog-pagination__btn--disabled">
          ← Previous
        </span>
      )}

      <div className="blog-pagination__pages">
        {pages.map((page) => (
          <Link
            key={page}
            href={pageHref(page)}
            className={`blog-pagination__page${page === currentPage ? " is-active" : ""}`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </Link>
        ))}
      </div>

      {currentPage < totalPages ? (
        <Link href={pageHref(currentPage + 1)} className="blog-pagination__btn">
          Next →
        </Link>
      ) : (
        <span className="blog-pagination__btn blog-pagination__btn--disabled">
          Next →
        </span>
      )}
    </nav>
  );
}
