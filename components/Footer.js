import styled from 'styled-components'
import Image from 'next/image'

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;

    /* background-color: black;
    color: white; */

    border-top: 2px solid black;
    margin: 8rem 96px 2rem;

    p {
      font-weight: 700;
    }

    .social-links {
      display: flex;

      span {
        margin: 0 4px !important;

        img {
          :hover {
            filter: grayscale(80%) !important;
          }
        }
      }
    }

    @media (max-width: 900px) {
      margin: 8rem 48px 2rem;
    }

    @media (max-width: 400px) {
      margin: 8rem 24px 2rem;
    }
`

export default function Footer() {
    return (
        <StyledFooter>
            <p>Matthew Dizon</p>
            <div className="social-links">
                <a href="https://github.com/matthewdizon" target="_blank" rel="noopener noreferrer">
                <Image src="/github.svg" height={30} width={30} />
                </a>
                <a href="https://www.facebook.com/Nozid16/" target="_blank" rel="noopener noreferrer">
                <Image src="/fb.svg" height={30} width={30} />
                </a>
                <a href="https://www.linkedin.com/in/matthewdominicdizon/" target="_blank" rel="noopener noreferrer">
                <Image src="/linkedin.svg" height={30} width={30} />
                </a>
            </div>
        </StyledFooter>
    )
}