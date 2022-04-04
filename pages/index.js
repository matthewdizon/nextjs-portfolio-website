import styled from 'styled-components'
import Layout from '../components/Layout'
import Image from 'next/image'

const StyledHome = styled.div`
  background-color: aliceblue;
  height: 85vh;
  padding: 0 96px;

  display: flex;
  align-items: center;

  h1 {
    margin: 0;
  }

  .info {
    width: 50%;

    h1 {
      margin: 0;
      font-size: 52px;

      span {
        color: #C6E1F3;
      }
    }

    h2 {
      margin: 0;
      font-size: 40px;
    }

    .social-links {
      display: flex;

      p {
        margin: 0 4px;
      }
    }
  }
  
  .image {
    height: 100%;
    width: 50%;
    position: relative;
  }
`

export default function Home() {
  return (
    <Layout title="Home">
      <StyledHome>
        <div className='info'>
          <h1>Hello, I'm <span>Matthew Dizon</span></h1>
          <h2>I'm a Software Developer</h2>
          <button>View Resume</button>
          <button>Schedule a Meeting</button>
          <div className='social-links'>
            <p>Github</p>
            <p>Facebook</p>
            <p>LinkedIn</p>
          </div>
        </div>
        <div className='image'>
          <Image src="/chu.png" alt="Matthew Dizon" layout="fill" objectFit='cover' />
        </div>
      </StyledHome>
    </Layout>
  )
}
