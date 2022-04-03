import Link from 'next/link'
import styled from 'styled-components'

const StyledNav = styled.nav`

    padding: 36px 96px;
    background-color: aliceblue;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon {
        display: flex;
        flex-direction: column;

        :hover {
            cursor: pointer;
        }

        h1 {
            margin: 0;
        }

        p {
            margin: 0;
        }
    }

    .nav-links {
        a {
            margin: 0 16px;

            :hover {
                color: aqua;
            }
        }

        button {
            padding: 8px 20px;

            :hover {
                cursor: pointer;
            }
        }
    }
`

export default function Navbar() {
    return (
        <StyledNav>
            <Link href="/">
                <div className='icon'>
                    <h1>Matthew Dizon</h1>
                    <p>Software Engineer</p>
                </div>
            </Link>
            <div className='nav-links'>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/experience">Experience</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/resume"><button>Resume</button></Link>
            </div>
        </StyledNav>
    )
}