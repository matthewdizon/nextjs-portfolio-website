import Image from "next/image"
import { useState } from "react"
import { useEffect } from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import Hero from "../components/Hero"

const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 96px;
`

const Project = styled.div`
    display: flex;
    flex: 1 1 0;
    border-left: 4px solid black;

    margin-bottom: 48px;
    /* justify-content: space-evenly; */

    :nth-child(even) {
        flex-direction: row-reverse;
        border-right: 4px solid black;
        border-left: none;

        .project-details {
            text-align: right;
        }

        .image-container {
            margin: 0 20px 0 0;
        }

        .tech-container {
            justify-content: flex-end;

            .tech {
                margin: 0 0 0 8px !important;
            }
        }
    }

    .image-container {
        position: relative;
        height: 300px;
        width: 50%;
        border-radius: 8px;
        -webkit-box-shadow: -3px 2px 23px 3px rgba(0,0,0,0.75);
        -moz-box-shadow: -3px 2px 23px 3px rgba(0,0,0,0.75);
        box-shadow: -3px 2px 23px 3px rgba(0,0,0,0.75);

        margin: 0 0 0 20px;

        transition-duration: 0.3s;
        transition-property: transform;

        img {
            border-radius: 8px;
        }

        :hover {
            transform: scale(1.05);
        }
    }

    .project-details {
        width: 50%;
        padding: 0 24px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;

        h1 {
            margin: 0;
        }

        button {
            :hover {
                cursor: pointer;
            }
        }

        .tech-container {
            display: flex;
            padding-bottom: 16px;
            
            .tech {
                font-size: 12px;
                padding: 2px 16px;
                margin: 0 8px 0 0;
                border: 0.5px solid black;
                border-radius: 20px;

                background-color: aliceblue;
            }
        }
    }
`

export default function Projects() {

    const [projects, setProjects] = useState([])

    const fetchProjects = async () => {
        const response = await fetch('/api/projects')
        const data = await response.json()
        setProjects(data)
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    return (
        <Layout title="Projects">
            <div>
                <Hero
                    title="🛠 Projects"
                    description="Check out all of the projects I've made contributions to throughout my career as a software developer!"
                />
                <h2 style={{textAlign: "center", fontSize: "36px"}}>🌐 Websites</h2>
                <ProjectsContainer>
                    {
                        projects.map(project => {
                            return (
                                <Project>
                                    <div className="image-container">
                                        {/* <Image src={project.image} alt={project.title} width="1000" height="500" objectFit='cover'/> */}
                                        <a href={project.link} target="_blank">
                                            <Image src={project.image} alt={project.title} layout="fill" objectFit='cover' />
                                        </a>
                                    </div>
                                    <div className="project-details">
                                        <h1>{project.title}</h1>
                                        <p>{project.description}</p>
                                        <div className="tech-container">
                                            {project.tech.map(tech => {
                                                return (
                                                    <div className="tech">
                                                        {/* <p>{tech}</p> */}
                                                        {tech}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <a href={project.link} target="_blank"><button>View Project</button></a>
                                    </div>
                                </Project>
                            )
                        })
                    }
                </ProjectsContainer>
            </div>
        </Layout>
    )
}