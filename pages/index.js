import Image from 'next/image'
import styled from 'styled-components'
import Layout from '../components/Layout'

const StyledHome = styled.div`
  .hero {
    padding: 0 96px;
  }
`

export default function Home() {
  return (
    <Layout title="Home">
      <StyledHome>
        <div className='hero'>
          <div>
            <h1>Frontend Software Engineer</h1>
            <h2>UXSociety Vice President of Engineering</h2>
          </div>
        </div>
      </StyledHome>
    </Layout>
  )
}
