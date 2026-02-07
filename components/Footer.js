import styled from "styled-components";
import Image from "next/image";

const StyledFooter = styled.footer`
  border-top: 1px solid var(--color-border);
  padding: 32px 0 48px;
  margin-top: 72px;

  .footer-inner {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .identity {
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: var(--color-muted);
  }

  .identity strong {
    color: var(--color-text);
    font-weight: 600;
  }

  .social-links {
    display: flex;
    gap: 12px;
  }

  .social-links a {
    width: 36px;
    height: 36px;
    border-radius: 999px;
    background: var(--color-soft);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .social-links a:hover {
    background: #e2e8ff;
  }

  @media (max-width: 700px) {
    .footer-inner {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div className="footer-inner">
        <div className="identity">
          <strong>Matthew Dizon</strong>
          <span>Full-stack engineer open to new roles.</span>
        </div>
        <div className="social-links">
          <a
            href="https://github.com/matthewdizon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
          >
            <Image src="/github.svg" height={18} width={18} alt="GitHub" />
          </a>
          <a
            href="https://www.facebook.com/Nozid16/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Facebook profile"
          >
            <Image src="/fb.svg" height={18} width={18} alt="Facebook" />
          </a>
          <a
            href="https://www.linkedin.com/in/matthewdominicdizon/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn profile"
          >
            <Image src="/linkedin.svg" height={18} width={18} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </StyledFooter>
  );
}