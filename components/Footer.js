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
`

export default function Footer() {
    return (
        <StyledFooter>
            <p>Matthew Dizon</p>
            <div className="social-links">
                <a href="https://github.com/matthewdizon" target="_blank">
                <Image src="/github.svg" height={30} width={30} />
                </a>
                <a href="https://www.facebook.com/Nozid16/" target="_blank">
                <Image src="/fb.svg" height={30} width={30} />
                </a>
                <a href="https://www.linkedin.com/in/matthewdominicdizon/" target="_blank">
                <Image src="/linkedin.svg" height={30} width={30} />
                </a>
            </div>
        </StyledFooter>
    )
}