import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from "next/router";

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
        list-style: none;
        display: flex;
        align-items: center;

        a {
            margin: 0 16px;

            :hover {
                color: gray;
            }
        }

        button {
            padding: 12px 32px;
            border-radius: 8px;
            border: black;
            background-color: black;
            color: white;

            :hover {
                cursor: pointer;
                background-color: rgba(31,41,55);
            }
        }

        .active {
            /* color: red; */
            font-weight: 600;
        }
    }
`

export default function Navbar() {

    const router = useRouter();
    
    return (
        <StyledNav>
            <Link href="/">
                <div className='icon'>
                    <h1>Matthew Dizon</h1>
                    <p>Software Engineer</p>
                </div>
            </Link>
            {/* <div className='nav-links'>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/experience">Experience</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/resume"><button>Resume</button></Link>
            </div> */}
            <ul className='nav-links'>
                <li className={router.pathname == "/about" ? "active" : ""}>
                    <Link href="/about">About</Link>
                </li>
                <li className={router.pathname == "/projects" ? "active" : ""}>
                    <Link href="/projects">Projects</Link>
                </li>
                <li className={router.pathname == "/experience" ? "active" : ""}>
                    <Link href="/experience">Experience</Link>
                </li>
                <li className={router.pathname == "/contact" ? "active" : ""}>
                    <Link href="/contact">Contact</Link>
                </li>
                <li className={router.pathname == "/resume" ? "active" : ""}>
                    <Link href="/resume"><button>Resume</button></Link>
                </li>
            </ul>
        </StyledNav>
    )
}