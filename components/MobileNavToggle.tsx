"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function closeDropdowns() {
  document.querySelectorAll(".nav__dropdown.is-open").forEach((dropdown) => {
    dropdown.classList.remove("is-open");
    const trigger = dropdown.querySelector(
      ":scope > a, :scope > .nav__dropdown-trigger",
    );
    trigger?.setAttribute("aria-expanded", "false");
  });
}

function isMobileNav() {
  return window.matchMedia("(max-width: 991px)").matches;
}

function closeMenu() {
  const menu = document.querySelector(".nav__menu");
  const btn = document.getElementById("navToggle");
  menu?.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  btn?.setAttribute("aria-expanded", "false");
  closeDropdowns();
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

      if (isMobileNav()) {
        const dropdown = target.closest(".nav__dropdown");
        if (dropdown) {
          const trigger = target.closest(
            ".nav__dropdown > a, .nav__dropdown > .nav__dropdown-trigger",
          );
          if (trigger && trigger.parentElement === dropdown) {
            const isOpen = dropdown.classList.contains("is-open");

            e.preventDefault();
            if (isOpen) {
              dropdown.classList.remove("is-open");
              trigger.setAttribute("aria-expanded", "false");
            } else {
              closeDropdowns();
              dropdown.classList.add("is-open");
              trigger.setAttribute("aria-expanded", "true");
            }
            return;
          }
        }
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
