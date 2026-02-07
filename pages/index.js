import styled from "styled-components";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { experiences, projects } from "../siteData";

const Page = styled.div`
  background: var(--color-bg);
`;

const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
`;

const HeroSection = styled.section`
  padding: 96px 0 72px;
  background: linear-gradient(180deg, #f3f6ff 0%, #ffffff 100%);

  .hero-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 48px;
    align-items: center;
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 12px;
    color: var(--color-muted);
  }

  h1 {
    font-size: 48px;
    line-height: 1.1;
    margin: 12px 0;
  }

  p {
    font-size: 18px;
    color: var(--color-muted);
    margin: 0 0 20px;
  }

  .cta {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 24px;
  }

  .primary,
  .secondary {
    padding: 12px 20px;
    border-radius: 999px;
    font-weight: 600;
    border: 1px solid transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .primary {
    background: var(--color-primary);
    color: #ffffff;
  }

  .primary:hover {
    background: #111827;
  }

  .secondary {
    border-color: var(--color-border);
    color: var(--color-text);
    background: #ffffff;
  }

  .secondary:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
    margin-top: 32px;
  }

  .stat {
    background: #ffffff;
    border: 1px solid var(--color-border);
    border-radius: 14px;
    padding: 16px;
  }

  .stat span {
    display: block;
    font-size: 20px;
    font-weight: 600;
    color: var(--color-text);
  }

  .stat small {
    color: var(--color-muted);
    font-size: 13px;
  }

  .hero-image {
    position: relative;
    width: 100%;
    height: 380px;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 24px 64px rgba(15, 23, 42, 0.12);
  }

  @media (max-width: 900px) {
    padding: 72px 0 56px;

    .hero-grid {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .cta {
      justify-content: center;
    }

    .stats {
      grid-template-columns: 1fr;
    }
  }
`;

const Section = styled.section`
  padding: 80px 0;
  background: ${(props) =>
    props.$alt ? "var(--color-soft)" : "transparent"};
  border-top: ${(props) => (props.$alt ? "1px solid var(--color-border)" : "0")};
`;

const SectionHeader = styled.div`
  margin-bottom: 32px;

  h2 {
    margin: 0 0 8px;
    font-size: 32px;
  }

  p {
    margin: 0;
    color: var(--color-muted);
    max-width: 640px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.article`
  background: #ffffff;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  .image {
    position: relative;
    height: 210px;
  }

  .content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 100%;
  }

  h3 {
    margin: 0;
    font-size: 20px;
  }

  p {
    margin: 0;
    color: var(--color-muted);
    font-size: 14px;
  }

  .tech {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .pill {
    padding: 4px 10px;
    background: var(--color-soft);
    border-radius: 999px;
    font-size: 12px;
    font-weight: 600;
    color: var(--color-primary);
  }

  .project-link {
    margin-top: auto;
    color: var(--color-accent);
    font-weight: 600;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div`
  background: #ffffff;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 20px;

  h3 {
    margin: 0 0 12px;
    font-size: 18px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .tag {
    padding: 6px 12px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 600;
    background: var(--color-soft);
    color: var(--color-primary);
  }
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ExperienceCard = styled.div`
  background: #ffffff;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  h3 {
    margin: 0;
    font-size: 18px;
  }

  span {
    color: var(--color-muted);
    font-size: 14px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled.a`
  background: #ffffff;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: inherit;
  transition: transform 0.2s ease, border-color 0.2s ease;

  h3 {
    margin: 0;
    font-size: 18px;
  }

  span {
    color: var(--color-muted);
    font-size: 14px;
  }

  &:hover {
    transform: translateY(-3px);
    border-color: var(--color-accent);
  }
`;

const ActionRow = styled.div`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  a {
    padding: 12px 18px;
    border-radius: 999px;
    border: 1px solid var(--color-border);
    font-weight: 600;
    color: var(--color-text);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  a.primary {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: #ffffff;
  }
`;

export default function Home() {
  const featuredProjects = projects.slice(0, 4);
  const experienceHighlights = experiences.slice(0, 3);
  const organizationCount = new Set(
    experiences.map((experience) => experience.organization)
  ).size;

  const stats = [
    { value: `${projects.length}+`, label: "Projects shipped" },
    { value: `${organizationCount}`, label: "Organizations supported" },
    { value: "Full-stack", label: "React, Node, Django" },
  ];

  const skillGroups = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Gatsby", "TypeScript", "Styled Components"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Django", "GraphQL", "MongoDB", "MySQL"],
    },
    {
      title: "Tools",
      skills: ["Docker", "Figma", "Prismic", "Netlify", "Vercel"],
    },
  ];

  const contactMethods = [
    {
      title: "Email",
      detail: "dominic.dizon@obf.ateneo.edu",
      href: "mailto:dominic.dizon@obf.ateneo.edu",
    },
    {
      title: "LinkedIn",
      detail: "linkedin.com/in/matthewdominicdizon",
      href: "https://www.linkedin.com/in/matthewdominicdizon/",
    },
    {
      title: "Schedule a Call",
      detail: "Book a 15-minute meeting",
      href: "https://calendly.com/matthew-dizon/15-minute-meeting",
    },
  ];

  return (
    <Layout
      description="Full-stack software engineer building modern, accessible web experiences."
    >
      <Page>
        <HeroSection id="top">
          <Container>
            <div className="hero-grid">
              <div>
                <span className="eyebrow">Full-stack engineer</span>
                <h1>Matthew Dizon</h1>
                <p>
                  I build clean, scalable web products with strong UX and
                  reliable engineering. Experienced in React, Next.js, Django,
                  and data-driven applications.
                </p>
                <div className="cta">
                  <a
                    className="primary"
                    href="/DIZON_MATTHEW_RESUME.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View resume
                  </a>
                  <a className="secondary" href="#contact">
                    Contact me
                  </a>
                </div>
                <div className="stats">
                  {stats.map((stat) => (
                    <div key={stat.label} className="stat">
                      <span>{stat.value}</span>
                      <small>{stat.label}</small>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hero-image">
                <Image
                  src="/chu.png"
                  alt="Matthew Dizon portrait"
                  layout="fill"
                  objectFit="cover"
                  priority
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
            </div>
          </Container>
        </HeroSection>

        <Section id="projects">
          <Container>
            <SectionHeader>
              <h2>Featured projects</h2>
              <p>
                A curated selection of recent work focused on product clarity,
                performance, and shipping real outcomes.
              </p>
            </SectionHeader>
            <ProjectsGrid>
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title}>
                  <div className="image">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />
                  </div>
                  <div className="content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech">
                      {project.tech.map((tech) => (
                        <span key={tech} className="pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View live project
                    </a>
                  </div>
                </ProjectCard>
              ))}
            </ProjectsGrid>
            <ActionRow>
              <Link href="/projects" legacyBehavior>
                <a>View all projects</a>
              </Link>
            </ActionRow>
          </Container>
        </Section>

        <Section id="skills" $alt>
          <Container>
            <SectionHeader>
              <h2>Skills and tools</h2>
              <p>
                A balanced toolkit across frontend, backend, and product
                delivery.
              </p>
            </SectionHeader>
            <SkillsGrid>
              {skillGroups.map((group) => (
                <SkillCard key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="tags">
                    {group.skills.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </SkillCard>
              ))}
            </SkillsGrid>
          </Container>
        </Section>

        <Section id="experience">
          <Container>
            <SectionHeader>
              <h2>Experience highlights</h2>
              <p>
                Leadership and engineering roles focused on building teams and
                shipping software.
              </p>
            </SectionHeader>
            <ExperienceGrid>
              {experienceHighlights.map((experience) => (
                <ExperienceCard key={`${experience.position}-${experience.organization}`}>
                  <h3>{experience.position}</h3>
                  <span>{experience.organization}</span>
                  <span>{experience.date}</span>
                </ExperienceCard>
              ))}
            </ExperienceGrid>
            <ActionRow>
              <Link href="/experience" legacyBehavior>
                <a>View full experience</a>
              </Link>
            </ActionRow>
          </Container>
        </Section>

        <Section id="contact" $alt>
          <Container>
            <SectionHeader>
              <h2>Get in touch</h2>
              <p>
                Looking for a full-stack engineer or a collaborator? Let's
                connect.
              </p>
            </SectionHeader>
            <ContactGrid>
              {contactMethods.map((method) => {
                const isExternal = method.href.startsWith("http");
                return (
                  <ContactCard
                    key={method.title}
                    href={method.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    <h3>{method.title}</h3>
                    <span>{method.detail}</span>
                  </ContactCard>
                );
              })}
            </ContactGrid>
            <ActionRow>
              <a
                className="primary"
                href="/DIZON_MATTHEW_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download resume
              </a>
              <a href="mailto:dominic.dizon@obf.ateneo.edu">
                Email me directly
              </a>
            </ActionRow>
          </Container>
        </Section>
      </Page>
    </Layout>
  );
}
