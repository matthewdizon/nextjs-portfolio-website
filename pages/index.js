import styled from 'styled-components'
import Layout from '../components/Layout'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';

const StyledHome = styled.div`
  background-color: aliceblue;
  height: 80vh;
  padding: 0 96px;

  display: flex;
  align-items: center;

  .info {
    width: 50%;

    h1 {
      font-size: 52px;

      span {
        color: #5a716a;
      }
    }

    h2 {
      font-size: 40px;

      .Typewriter {
        color: #5F706A;
      }
    }

    .cta-buttons {

      button {
        padding: 12px 32px;
        border-radius: 8px;
        border: black;
        background-color: #B3D5ED;
        color: white;

        :hover {
            cursor: pointer;
            background-color: #3172C1;
        }
      }

      .secondary {
        margin-left: 8px;
        background-color: #95C3A5;
        color: white;

        :hover {
            background-color: #5F706A;
        }
      }
    }

    .social-links {
      display: flex;
      margin-top: 2rem;

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
          <h2>
            <Typewriter
              options={{
                // strings: ["I'm a Frontend Software Developer", "I'm a Frontend Software Developer", "I'm a Frontend Software Developer"],
                strings: ['Frontend', 'Backend', 'Full Stack'],
                autoStart: true,
                loop: true,
              }}
            /> 
            Software Developer
          </h2>
          <div className='cta-buttons'>
            <button className='primary'>📑 View Resume</button>
            <button className='secondary'>🗓 Schedule a Meeting</button>
          </div>
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
