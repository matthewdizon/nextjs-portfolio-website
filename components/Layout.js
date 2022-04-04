import Head from 'next/head'
import Navbar from "./Navbar"
import styled from 'styled-components'
import Footer from './Footer'

const StyledLayout = styled.div`
`

export default function Layout({children, title}) {
    return (
        <StyledLayout>
            <Head>
                <title>Matthew Dizon | {title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </StyledLayout>
    )
}