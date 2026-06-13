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
      <ul className="blog-pagination__list">
        {pages.map((page) => (
          <li key={page}>
            <Link
              href={pageHref(page)}
              className={`blog-pagination__page${page === currentPage ? " is-active" : ""}`}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
