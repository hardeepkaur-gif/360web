"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function closeMenu() {
  const menu = document.querySelector(".nav__menu");
  const btn = document.getElementById("navToggle");
  menu?.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  btn?.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  const menu = document.querySelector(".nav__menu");
  const btn = document.getElementById("navToggle");
  if (!menu || !btn) return;

  const isOpen = !menu.classList.contains("is-open");
  menu.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("nav-open", isOpen);
  btn.setAttribute("aria-expanded", String(isOpen));
}

export function MobileNavToggle() {
  const pathname = usePathname();

  useEffect(() => {
    closeMenu();

    function onClick(e: MouseEvent) {
      const target = e.target as Element | null;
      if (!target) return;

      if (target.closest("#navToggle")) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
        return;
      }

      const menu = document.querySelector(".nav__menu");
      const btn = document.getElementById("navToggle");
      if (
        menu?.classList.contains("is-open") &&
        btn &&
        !menu.contains(target) &&
        !btn.contains(target)
      ) {
        closeMenu();
      }
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  return null;
}
