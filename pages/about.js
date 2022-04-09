import Hero from "../components/Hero"
import Layout from "../components/Layout"
import styled from 'styled-components'
import Image from 'next/image'
import SimpleAccordion from "../components/Accordion"

const AboutContainer = styled.div`
    display: flex;
    padding: 0 96px;
    
    h2 {
        font-size: 16px;
        display: inline-block;

        text-align: center;
        width: fit-content;
        border-radius: 4px;
        padding: 8px;

        background: black;
        color: white;
    }

    .sub-content {
        width: 30%;
        margin-right: 40px;

        p {
            font-size: 20px;
        }
    }

    .main-content {
        width: 70%;
        display: flex;
        flex-direction: column;

        .general-info {
            font-size: 24px;
        }
    }

    .tech-stack-container {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
    }

    .tech-container {
        flex: 1 20%;

        border-radius: 4px;
        padding: 1.5rem;
        /* padding: 2rem; */
        text-align: center;

        position: relative;
        /* height: 200px; */
        /* width: 100%; */

        box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 4px 4px;
        background-color: aliceblue;
        /* margin: 0 1rem 1rem 0; */

        @media (max-width: 600px) {
            flex: 1 25%;
        }

        @media (max-width: 450px) {
            flex: 1 40%;
        }
    }

    .book-container {
        display: flex;
        padding: 1.5rem;

        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 4px 4px;
        
        background-color: #94C2A4;
        color: white;

        margin-bottom: 8px;

        :nth-child(even) {
            flex-direction: row-reverse;
            
            .info-container {
                margin-left: 0;
                margin-right: 48px;
            }
        }

        h3 {
            font-size: 24px;

            :hover {
                color: #5F706A;
            }
        }

        .image-container {
            height: 200px;
            position: relative;
            width: 100%;

            transition: transform 0.5s;

            :hover {
                transform: scale(1.1)
            }
        }

        .info-container {
            margin-left: 48px;
        }

        @media (max-width: 600px) {
            flex-direction: column;
            text-align: center;

            .info-container {
                margin: 0;
            }
        }
    }

    @media (max-width: 900px) {
        padding: 0 48px;
    }

    @media (max-width: 800px) {
        flex-direction: column-reverse;

        .book-container {

            :nth-child(even) {
                flex-direction: column;
            }
            
        }

        .main-content, .sub-content {
            width: 100%;
        }

        .sub-content {
            display: flex;

            .currently {
                margin-left: 40px;
            }
        }
    }

    @media (max-width: 600px) {
        .sub-content {
            flex-direction: column;
            
            .currently {
                margin: 0;
            }
        }
    }

    @media (max-width: 400px) {
        padding: 0 24px;
    }
`

export default function About() {

    const skills = [
        "Python",
        "Django",
        "JavaScript",
        "React",
        "Data Preprocessing",
        "Data Visualization",
        "Artificial Intelligence",
        "Machine Learning",
        "Time Management",
    ]

    const currents = [
        "VP of Engineering @ User Experience Society",
        "VP of Engineering @ User Experience Society",
        "VP of Engineering @ User Experience Society",
        "VP of Engineering @ User Experience Society",
        "VP of Engineering @ User Experience Society",
    ]

    const techs = [
        "/github.svg",
        "/github.svg",
        "/github.svg",
        "/atomic-habits.jpg",
        "/chu.png",
        "/chu.png",
        "/chu.png",
        "/chu.png",
    ]

    const interests = [
        {
            title: "🤖 Machine Learning",
            description: "This is why I am interested in Machine Learning",
        },
        {
            title: "🤖 Machine Learning",
            description: "This is why I am interested in Machine Learning",
        },
        {
            title: "🤖 Machine Learning",
            description: "This is why I am interested in Machine Learning",
        },
        {
            title: "🤖 Machine Learning",
            description: "This is why I am interested in Machine Learning",
        },
    ]

    const books = [
        {
            title: "Atomic Habits",
            description: "This book helped me understand how habits are formed and what we can do to build long-lasting chains of cues, cravings, responses, and rewards to create systems that will help us achieve our goals.",
            image: "/atomic-habits.jpg",
            notes: "https://www.notion.so/matthewdizon/Atomic-Habits-0dab5352f58949ae87bae1b441c8b2f0",
        },
        {
            title: "Atomic Habits",
            description: "This book helped me understand how habits are formed and what we can do to build long-lasting chains of cues, cravings, responses, and rewards to create systems that will help us achieve our goals.",
            image: "/atomic-habits.jpg",
            notes: "https://www.notion.so/matthewdizon/Atomic-Habits-0dab5352f58949ae87bae1b441c8b2f0",
        },
        {
            title: "Atomic Habits",
            description: "This book helped me understand how habits are formed and what we can do to build long-lasting chains of cues, cravings, responses, and rewards to create systems that will help us achieve our goals.",
            image: "/atomic-habits.jpg",
            notes: "https://www.notion.so/matthewdizon/Atomic-Habits-0dab5352f58949ae87bae1b441c8b2f0",
        },
    ]

    return (
        <Layout title="About">
            <Hero
                title="👋 About"
                description="Hello, you can call me Chu! I'm a passionate full-stack software engineer who is eager to learn new technology and generate remarkable products."
            />
            <AboutContainer>
                <div className="sub-content">
                    <div className="skills">
                        <h2>Skills</h2>
                        <div>
                            {skills.map((skill, index) => {
                                return (
                                    <p key={index}>→ {skill}</p>                    
                                )
                            })}
                        </div>    
                    </div>      
                    <div className="currently">
                        <h2>Currently, I'm...</h2>
                        <div>
                            {currents.map((current, index) => {
                                return (
                                    <p key={index}>→ {current}</p>                    
                                )
                            })}
                        </div>
                    </div>       
                </div>
                <div className="main-content">
                    <div className="general-info">
                        <p>I see myself as a problem solver, an opportunity seeker, and a great fit for any team — I also am interested in taking leadership roles.</p>
                        <p>EDIT ME! Personal development, productivity, life organization</p>
                        <p>When I'm not writing code, you could find me reading and learning about new technologies, monitoring different cryptocurrency values, or organizing my virtual workspaces.</p>
                    </div>
                    <h2>Technology Stack</h2>
                    <div className="tech-stack-container">
                        {techs.map((tech, index) => {
                            return (
                                <div className="tech-container" key={index}>
                                    <Image src={tech} layout="fill" objectFit="contain" />
                                </div>
                            )
                        })}
                    </div>

                    <h2>Interests</h2>
                    <div>
                        {interests.map((interest, index) => {
                            return (
                                <SimpleAccordion
                                    title={interest.title}
                                    content={interest.description}
                                    key={index}
                                />
                            )
                        })}
                    </div>

                    <h2>Books & Notes</h2>
                    <div>
                        {books.map((book, index) => {
                            return (
                                <div className="book-container" key={index}>
                                    <div className="image-container">
                                        <a href={book.notes}>
                                            <Image src={book.image} layout="fill" objectFit='contain' />
                                        </a>
                                    </div>
                                    <div className="info-container">
                                        <a href={book.notes} rel="noopener noreferrer">
                                            <h3>{book.title}</h3>
                                        </a>
                                        <p>{book.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* <h2>Notion Templates</h2> */}
                    <div>
                    </div>
                </div>
            </AboutContainer>
        </Layout>
    )
}