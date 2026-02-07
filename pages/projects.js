import Image from "next/image";
import styled from "styled-components";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { projects } from "../siteData";

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  padding: 24px 96px;
  column-gap: 50px;

  @media (max-width: 900px) {
    padding: 24px 48px;
  }

  @media (max-width: 400px) {
    padding: 24px;
  }

  @media (max-width: 595px) {
    grid-template-columns: 1fr;
  }
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 45%;

  margin-bottom: 24px;

  .image-container {
    position: relative;
    height: 300px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.1) 8px 8px 8px 8px;

    transition-duration: 0.5s;
    transition-property: all;

    img {
      border-radius: 8px;
      transition-duration: 0.3s;
      transition-property: all;
      /* transition: all; */

      :hover {
        transform: scale(1.05);
      }
    }

    :hover {
      box-shadow: #b3d4ec 0px 8px 24px 16px;
    }
  }

  .project-details {
    padding: 16px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;

    h1 {
      margin: 0;
      font-size: 24px;
    }

    p {
      font-size: 12px;
    }

    button {
      :hover {
        cursor: pointer;
      }
    }

    .tech-container {
      display: flex;
      padding-bottom: 16px;
      flex-wrap: wrap;

      .tech {
        font-size: 12px;
        font-weight: 600;
        padding: 2px 16px;
        margin: 0 8px 8px 0;
        box-shadow: rgba(0, 0, 0, 0.1) 2px 2px 2px 2px;
        border-radius: 10px;

        background-color: aliceblue;

        transition-duration: 0.3s;
        transition-property: transform;

        :hover {
          transform: translateY(-3px);
        }
      }
    }
  }
`;

const orderedProjects = [...projects].reverse();

export default function Projects() {
  return (
    <Layout title="Projects">
      <div>
        <Hero
          title="🛠 Projects"
          description="Check out all of the projects I've made contributions to throughout my career as a software developer!"
        />
        <ProjectsContainer>
          {orderedProjects.map((project, index) => {
            return (
              <Project key={index}>
                <div className="image-container">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </a>
                </div>
                <div className="project-details">
                  <h1>{project.title}</h1>
                  <p>{project.description}</p>
                  <div className="tech-container">
                    {project.tech.map((tech, index) => {
                      return (
                        <div key={index} className="tech">
                          {tech}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Project>
            );
          })}
        </ProjectsContainer>
      </div>
    </Layout>
  );
}
