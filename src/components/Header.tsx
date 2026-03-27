"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { Button, Flex, Text } from "@once-ui-system/core";

import { display, person, site, social } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

function isNavActive(pathname: string, href: string, hash: string): boolean {
  if (href === "/work") return pathname.startsWith("/work");
  if (href.startsWith("/#")) {
    return pathname === "/" && hash === href.slice(1);
  }
  return false;
}

export const Header = () => {
  const pathname = usePathname() ?? "";
  const [menuOpen, setMenuOpen] = useState(false);
  const [hash, setHash] = useState("");
  const resume = social.find((s) => s.name === "Resume");

  const nav = site.header.nav;

  useEffect(() => {
    const sync = () => setHash(typeof window !== "undefined" ? window.location.hash : "");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className={styles.shell}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={() => setMenuOpen(false)}>
          <Text variant="heading-strong-m">{person.name}</Text>
        </Link>

        <nav className={styles.navDesktop} aria-label="Primary">
          {nav.map((item) => {
            const active = isNavActive(pathname, item.href, hash);
            return (
              <Link
                key={item.href + item.label}
                href={item.href}
                className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
              >
                <Text
                  variant="label-default-s"
                  style={{ letterSpacing: "0.12em", textTransform: "uppercase" }}
                >
                  {item.label}
                </Text>
              </Link>
            );
          })}
        </nav>

        <Flex className={styles.rightCluster}>
          {display.themeSwitcher && <ThemeToggle />}
          {resume?.link && (
            <Button
              href={resume.link}
              variant="primary"
              size="s"
              prefixIcon="document"
              target={resume.target}
              className={styles.ctaDesktop}
            >
              {site.header.ctaLabel}
            </Button>
          )}
          <button
            type="button"
            className={styles.burger}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <HiXMark size={22} /> : <HiBars3 size={22} />}
          </button>
        </Flex>
      </div>

      {menuOpen && (
        <nav className={styles.mobilePanel} aria-label="Mobile primary">
          {nav.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`${styles.navLink} ${isNavActive(pathname, item.href, hash) ? styles.navLinkActive : ""}`}
            >
              <Text
                variant="body-default-m"
                style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}
              >
                {item.label}
              </Text>
            </Link>
          ))}
          {resume?.link && (
            <Button
              href={resume.link}
              variant="primary"
              size="m"
              prefixIcon="document"
              target={resume.target}
            >
              {site.header.ctaLabel}
            </Button>
          )}
        </nav>
      )}
    </header>
  );
};
