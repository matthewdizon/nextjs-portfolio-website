import styled from "styled-components"
import Hero from "../components/Hero"
import Layout from "../components/Layout"

const ResumeContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 48px 0;

    div {
        width: 40%;
        /* text-align: center; */

        h1 {
            margin: 0;
        }
    }
`

export default function Resume() {
    return (
        <Layout title="Resume">
            <Hero
                title="📑 Resume"
                description="Here's my resume if you'd like to learn more about me. This was updated last 12 February 2022."
            />
            <div>
                <button>Download Resume</button>
                <button>View in Google Drive</button>
            </div>
            <ResumeContainer>
                <embed src="/Resume_2022_Feb_12.pdf" width="800px" height="1050px" />
                <div>
                    <h1>Highlights</h1>
                    <p> 1</p>
                </div>
            </ResumeContainer>
        </Layout>
    )
}