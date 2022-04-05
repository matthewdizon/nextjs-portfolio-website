import styled from "styled-components"
import Hero from "../components/Hero"
import Layout from "../components/Layout"

const ButtonsContainer = styled.div`

    margin-top: 48px;
    text-align: center;

    button {
        padding: 12px 32px;
        margin: 0 16px;

        border-radius: 8px;
        border: black;
        background-color: black;
        color: white;

        :hover {
            cursor: pointer;
            background-color: rgba(31,41,55);
        }
    }
`
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
                description="Here's my resume if you'd like to learn more about me. This was updated last 4 April 2022."
            />
            <ButtonsContainer>
                <button>⬇️ Download Resume (PDF)</button>
                <button>☁️ View Resume in Google Drive</button>
            </ButtonsContainer>
            <ResumeContainer>
                <embed src="/matthew-dizon-resume-4-4-2022.pdf" width="800px" height="1050px" />
                {/* <div>
                    <h1>Highlights</h1>
                    <p> 1</p>
                </div> */}
            </ResumeContainer>
        </Layout>
    )
}