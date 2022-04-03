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

    padding: 16px 0;
    /* justify-content: space-evenly; */

    :nth-child(even) {
        flex-direction: row-reverse;

        .project-details {
            text-align: right;
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

        transition-duration: 0.3s;
        transition-property: transform;

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
                <ProjectsContainer>
                    {
                        projects.map(project => {
                            return (
                                <Project>
                                    <div className="image-container">
                                        {/* <Image src={project.image} alt={project.title} width="1000" height="500" objectFit='cover'/> */}
                                        <Image src={project.image} alt={project.title} layout="fill" objectFit='cover' />
                                    </div>
                                    <div className="project-details">
                                        <h1>{project.title}</h1>
                                        <p>{project.description}</p>
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