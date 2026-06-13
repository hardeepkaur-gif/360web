"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function BlogSidebarSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const term = query.trim();

    if (term) {
      router.push(`/blogs?search=${encodeURIComponent(term)}`);
      return;
    }

    router.push("/blogs");
  }

  return (
    <form className="blog-sidebar__search" onSubmit={handleSubmit}>
      <label className="visually-hidden" htmlFor="blog-sidebar-search">
        Search blog posts
      </label>
      <span className="blog-sidebar__search-icon" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" />
        </svg>
      </span>
      <input
        id="blog-sidebar-search"
        type="search"
        name="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Type Here"
        autoComplete="off"
      />
    </form>
  );
}
