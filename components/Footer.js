import styled from 'styled-components'

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;

    background-color: black;
    color: white;

    padding: 2rem 96px;

    .social-links {
        display: flex;

        p {
            margin: auto 1rem;
        }
    }
`

export default function Footer() {
    return (
        <StyledFooter>
            <p>Matthew Dizon</p>
            <div className='social-links'>
                <p>Facebook</p>
                <p>LinkedIn</p>
                <p>GitHub</p>
            </div>
        </StyledFooter>
    )
}