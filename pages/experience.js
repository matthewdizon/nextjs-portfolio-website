import Hero from "../components/Hero"
import Layout from "../components/Layout"
import styled from 'styled-components'
import Image from 'next/image'

const ExperienceContainer = styled.div`

    padding: 48px 96px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    text-align: center;

    .experience {
        padding: 48px 0;
        margin: 0 24px 24px 0;
        width: 80%;

        display: flex;
        justify-content: space-evenly;
        position: relative;
        
        align-items: center;

        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 4px 4px;

        .date {
            font-size: 14px;
            font-style: italic;
            font-weight: 500;

            position: absolute;
            bottom: 0;
            right: 0;
            padding: 0 16px 16px 0;
        }

        .image-container {
            position: relative;
            width: 40%;
            
            img {
                border: 1px solid black !important;
                border-radius: 50%;
            }
        }
        
        .info-container {
            margin-right: 64px;
            text-align: left;
            width: 60%;
        }
    }
`

export default function Experience() {
    return (
        <Layout title="Experience">
            <Hero
                title="🤝 Experience"
                description="Check out the different organizations and respective positions I've taken!"
            />
            <ExperienceContainer>
                <div className="experience">
                    <div className="image-container">
                        <Image src="/atomic-habits.jpg" height={200} width={200} objectFit="cover" />
                    </div>
                    <div className="info-container">
                        <h2>Senior Software Engineer E awoeijf aoiwjef oaiwjef</h2>
                        <h3>Organization</h3>
                    </div>
                    <span className="date">June '20 - January '21</span>
                </div>
                <div className="experience">
                    <div className="image-container">
                        <Image src="/atomic-habits.jpg" height={200} width={200} objectFit="cover" />
                    </div>
                    <div className="info-container">
                        <h2>Senior Software Engineer E awoeijf aoiwjef oaiwjef</h2>
                        <h3>Organization</h3>
                    </div>
                    <span className="date">June '20 - January '21</span>
                </div>
                <div className="experience">
                    <div className="image-container">
                        <Image src="/atomic-habits.jpg" height={200} width={200} objectFit="cover" />
                    </div>
                    <div className="info-container">
                        <h2>Senior Software Engineer E awoeijf aoiwjef oaiwjef</h2>
                        <h3>Organization</h3>
                    </div>
                    <span className="date">June '20 - January '21</span>
                </div>
            </ExperienceContainer>
        </Layout>
    )
}