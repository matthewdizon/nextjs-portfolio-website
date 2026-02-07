import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 200;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--color-border);

  .nav-container {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 24px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand {
    display: flex;
    flex-direction: column;
    gap: 2px;
    color: var(--color-text);
  }

  .brand-name {
    font-size: 18px;
    font-weight: 600;
  }

  .brand-role {
    font-size: 12px;
    color: var(--color-muted);
    letter-spacing: 0.04em;
  }

  .nav-links {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 24px;
    margin: 0;
    padding: 0;
  }

  .nav-links a {
    color: var(--color-text);
    font-weight: 500;
  }

  .nav-links a:hover {
    color: var(--color-accent);
  }

  .resume {
    padding: 10px 18px;
    border-radius: 999px;
    border: 1px solid var(--color-primary);
    background: var(--color-primary);
    color: #ffffff;
    font-weight: 600;
  }

  .resume:hover {
    background: #111827;
  }

  .burger {
    display: none;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    padding: 8px;
  }

  .burger span {
    display: block;
    width: 20px;
    height: 2px;
    background: var(--color-text);
    margin: 3px 0;
  }

  @media (max-width: 900px) {
    .nav-links {
      position: absolute;
      top: 72px;
      left: 0;
      right: 0;
      flex-direction: column;
      align-items: flex-start;
      background: #ffffff;
      padding: 16px 24px 24px;
      border-bottom: 1px solid var(--color-border);
      display: none;
      gap: 16px;
    }

    .nav-links.open {
      display: flex;
    }

    .burger {
      display: inline-flex;
    }

    .resume {
      width: 100%;
      text-align: center;
    }
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" },
  ];

  const handleNavClick = () => setIsOpen(false);

  return (
    <StyledNav>
      <div className="nav-container">
        <Link href="/" legacyBehavior>
          <a className="brand" onClick={handleNavClick}>
            <span className="brand-name">Matthew Dizon</span>
            <span className="brand-role">Full-Stack Engineer</span>
          </a>
        </Link>

        <button
          className="burger"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul
          id="primary-navigation"
          className={`nav-links ${isOpen ? "open" : ""}`}
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={handleNavClick}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="resume"
              href="/DIZON_MATTHEW_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </StyledNav>
  );
}
