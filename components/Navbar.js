import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from "next/router";
import { useState } from 'react';

const StyledNav = styled.nav`

    height: 20vh;
    padding: 0 96px;
    background-color: aliceblue;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-responsive {

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
                font-weight: 100;
            }
        }
        
        .nav-burger {
            display: none;
            flex-direction: column;
            justify-content: space-around;
            width: 2rem;
            height: 2rem;
            background: transparent;
            border: none;
            cursor: pointer;
            z-index: 999;
            
            div {
                width: 2rem;
                height: 0.15rem;
                background: black;
                border-radius: 10px;
                transition: all 0.3s linear;
                position: relative;
                transform-origin: 1px;
            }
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
                text-decoration: underline;
            }
        }

        button {
            margin-left: 8px;
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
            font-weight: 600;
        }
    }

    @media (max-width: 900px) {
        padding: 0 48px;
        height: auto;
    }

    @media (max-width: 805px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;

        .nav-responsive {
            padding: 24px 48px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            width: 100%;

            .nav-burger {
                display: flex;
            }
        }

        .hide-links {
            display: none;
        }

        .nav-links-responsive {
            /* display: none; */
            margin: 0;
            padding: 0 48px;

            bottom: 0;
            z-index: 99;

            background-color: aliceblue;
            flex-direction: column;

            width: 100%;

            text-align: left;

            li {
                width: 100%;
                height: 100%;
                padding: 8px 0;
                border-bottom: 1px solid gray;
                
                a {
                    margin: 0;
                    padding: 8px;
                    display: block;
                    /* background-color: red; */
                }

                :last-child {
                    border: none;
                }
            }

            button {
                margin: 0;
                width: 100%;
            }
        }
    }

    @media (max-width: 400px) {
        height: auto;

        .nav-responsive {
            padding: 24px;
        }

        .nav-links-responsive {
            padding: 0 24px;
        }
    }
`

export default function Navbar() {

    const router = useRouter();
    const [open, setOpen] = useState(true)

    return (
        <StyledNav>
            <div className="nav-responsive">
                <Link href="/">
                    <div className='icon'>
                        <h1>Matthew Dizon</h1>
                        <p>Software Engineer</p>
                    </div>
                </Link>
                <div className="nav-burger" onClick={() => setOpen(!open)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            {/* <div className='nav-links'>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/experience">Experience</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/resume"><button>Resume</button></Link>
            </div> */}
            <ul className={`${ open ? "nav-links hide-links" : "nav-links nav-links-responsive"}`}>
                <li className={router.pathname == "/about" ? "active" : ""} onClick={() => setOpen(!false)}>
                    <Link href="/about">About</Link>
                </li>
                <li className={router.pathname == "/projects" ? "active" : ""} onClick={() => setOpen(!false)}>
                    <Link href="/projects">Projects</Link>
                </li>
                <li className={router.pathname == "/experience" ? "active" : ""} onClick={() => setOpen(!false)}>
                    <Link href="/experience">Experience</Link>
                </li>
                <li className={router.pathname == "/contact" ? "active" : ""} onClick={() => setOpen(!false)}>
                    <Link href="/contact">Contact</Link>
                </li>
                <li className={router.pathname == "/resume" ? "active" : ""} onClick={() => setOpen(!false)}>
                    <a href="/matthew-dizon-resume-4-4-2022.pdf"><button>Resume</button></a>
                </li>
            </ul>
        </StyledNav>
    )
}