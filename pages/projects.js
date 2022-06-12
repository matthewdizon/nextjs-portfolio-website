import Image from "next/image"
import styled from "styled-components"

import Layout from "../components/Layout"
import Hero from "../components/Hero"

const ProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 24px 96px;
    column-gap: 50px;

    @media (max-width: 900px) {
        padding: 24px 48px;
    }

    @media (max-width: 400px) {
        padding: 24px;
    }
`

const Project = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 45%;

    margin-bottom: 24px;

    :last-child {
        /* flex: 0 0 45%; // comment this out if there are EVEN number of projects. */

        @media (max-width: 624px) {
            flex: 1 1 45%;
        }
    }

    .image-container {
        position: relative;
        height: 300px;
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.1) 8px 8px 8px 8px;

        transition-duration: 0.3s;
        transition-property: transform;

        img {
            border-radius: 8px;
            transition-duration: 0.3s;
            transition-property: transform;

            :hover {
                transform: scale(1.05);
            }
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
`

export default function Projects() {

    const projects = [
        {
            link: "https://www.brigadaeskwela.org/",
            image: "/brigadaeskwela.png",
            title: "Brigada E-Skwela Website",
            description: "A non-stock, non-profit, youth-led organization that conducts various education-based programs",
            tech: [
                "Vue",
                "Strapi"
            ]
        },
        {
            link: "https://oursanggu.com/",
            image: "/sanggu.png",
            title: "OurSanggu ADMU Website",
            description: "Sole Autonomous Student Government of Ateneo de Manila University",
            tech: [
                "React",
                "Gatsby",
                "Prismic",
                "GraphQL"
            ]
        },
        {
            link: "https://aegis.ateneo.edu/",
            image: "/aegis.png",
            title: "Aegis ADMU Website",
            description: "Yearbook Committee of Ateneo de Manila University",
            tech: [
                "React",
                "Gatsby",
                "Django"
            ]
        },
        {
            link: "https://apps.uxsociety.org/",
            image: "/uxsoc-apps.png",
            title: "UXSoc Applications Website",
            description: "Primer and Application for UXSociety Applicants",
            tech: [
                "React",
                "Gatsby",
                "Netlify CMS"
            ]
        },
        {
            link: "https://heights-ateneo.com/",
            image: "/heights.png",
            title: "Heights Ateneo Website",
            description: "Literary and Artistic Publication and Organization of the Ateneo de Manila University",
            tech: [
                "React",
                "Gatsby",
                "Contentful",
                "Typescript",
            ]
        },
        {
            link: "https://treknbrew.netlify.app/",
            image: "/trek-n-brew.png",
            title: "Mangkalalot Trek & Brew",
            description: "River Trekking and Camping in Malaybalay City",
            tech: [
                "React",
                "Gatsby",
                "Prismic",
                "GraphQL"
            ]
        },
        {
            link: "https://about.degencoinflip.com/",
            image: "/dcf.png",
            title: "About Degen Coin Flip Website",
            description: "Landing page for a blockchain application where you could double your Solana",
            tech: [
                "React",
            ]
        },
        {
            link: "https://godzid-hsl.netlify.app/",
            image: "/hsl.png",
            title: "Heavens 7s Lotto",
            description: "Solana blockchain lottery where you could buy tickets, win prizes, and view a hall of winners",
            tech: [
                "React",
            ]
        },
        {
            link: "https://www.solanamonkeball.com/",
            image: "/monkeball.png",
            title: "Solana Monke Ball Website",
            description: "Landing page for a Solana blockchain lottery where you could buy tickets and win prizes",
            tech: [
                "React",
            ]
        },
        {
            link: "https://zankoku-godzidcrypto.vercel.app/",
            image: "/zankoku.png",
            title: "Zankoku Raffle Website",
            description: "Landing page for a Solana blockchain raffle system where you could buy tickets and win NFTs",
            tech: [
                "React", 
                "Solana"
            ]
        },
    ]
    
    return (
        <Layout title="Projects">
            <div>
                <Hero
                    title="🛠 Projects"
                    description="Check out all of the projects I've made contributions to throughout my career as a software developer!"
                />
                <ProjectsContainer>
                    {
                        projects.map((project, index) => {
                            return (
                                <Project key={index}>
                                    <div className="image-container">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <Image src={project.image} alt={project.title} layout="fill" objectFit='cover' />
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
                                                )
                                            })}
                                        </div>
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