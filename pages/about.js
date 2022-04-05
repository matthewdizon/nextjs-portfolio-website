import Hero from "../components/Hero"
import Layout from "../components/Layout"
import styled from 'styled-components'
import Image from 'next/image'

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
    }

    .tech-container {
        border-radius: 4px;
        padding: 1.5rem;
        text-align: center;
        width: 20%;

        box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 4px 4px;
        background-color: aliceblue;
        margin: 0 1rem 1rem 0;
    }

    .book-container {
        display: flex;
        padding: 1.5rem;

        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 4px 4px;
        
        background-color: #94C2A4;
        color: white;
        /* width: 50%; */

        h3 {
            font-size: 24px;
        }

        .image-container {
            height: 200px;
            position: relative;
            width: 100%;
        }
    }
`

export default function About() {
    return (
        <Layout title="About">
            <Hero
                title="👋 About"
                description="Hello, you can call me Chu! I'm a passionate full-stack software engineer who is eager to learn new technology and generate remarkable products."
            />
            <AboutContainer>
                <div className="sub-content">
                    <div>
                        <h2>Skills</h2>
                        <div>
                            <p>→ Python</p>                    
                            <p>→ Django</p>                    
                            <p>→ JavaScript</p>                    
                            <p>→ React</p>                    
                            <p>→ Data Preprocessing</p>                    
                            <p>→ Data Visualization</p>                    
                            <p>→ Artificial Intelligence</p>                    
                            <p>→ Machine Learning</p>                    
                            <p>→ Time Management</p>                    
                            <p>→ Test</p>                    
                            <p>→ Test</p>   
                        </div>    
                    </div>      
                    <div>
                        <h2>Currently, I'm...</h2>
                        <p>→ VP of Engineering @ User Experience Society</p>
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
                        <div className="tech-container">
                            <Image src="/github.svg" height={50} width={50} />
                        </div>
                        <div className="tech-container">
                            <Image src="/github.svg" height={50} width={50} />
                        </div>
                        <div className="tech-container">
                            <Image src="/github.svg" height={50} width={50} />
                        </div>
                        <div className="tech-container">
                            <Image src="/github.svg" height={50} width={50} />
                        </div>
                        <div className="tech-container">
                            <Image src="/github.svg" height={50} width={50} />
                        </div>
                        <div className="tech-container">
                            <Image src="/github.svg" height={50} width={50} />
                        </div>
                        <div className="tech-container">
                            <Image src="/github.svg" height={50} width={50} />
                        </div>
                    </div>

                    <h2>Interests</h2>
                    <div>
                    </div>

                    <h2>Books & Notes</h2>
                    <div>
                        <div className="book-container">
                            <div className="image-container">
                                <Image src="/atomic-habits.jpg" layout="fill" objectFit='contain' />
                            </div>
                            <div>
                                <a href="">
                                    <h3>Atomic Habits</h3>
                                </a>
                                <p> This book helped me understand how habits are formed and what we can do to build long-lasting chains of cues, cravings, responses, and rewards to create systems that will help us achieve our goals. </p>
                            </div>
                        </div>
                    </div>

                    <h2>Notion Templates</h2>
                    <div>
                    </div>
                </div>
            </AboutContainer>
        </Layout>
    )
}