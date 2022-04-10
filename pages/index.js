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

      span {
        margin: 0 4px !important;

        img {
          :hover {
            filter: grayscale(80%) !important;
          }
        }
      }
    }
  }
  
  .image {
    height: 100%;
    width: 50%;
    position: relative;
  }

  @media (max-width: 1370px) {
    .info {
      h1 {
        font-size: 35px;
      }

      h2 {
        font-size: 30px;
      }

      .cta-buttons {
        button {
          padding: 8px 12px;
        }
      }
    }
  }

  @media (max-width: 990px) {
    .info {
      h1 {
        font-size: 30px;
      }

      h2 {
        font-size: 24px;
      }

      .cta-buttons {
        button {
          padding: 8px 12px;
        }
      }
    }
  }

  @media (max-width: 900px) {
    padding: 0 48px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    height: 100vh;

    text-align: center;

    .cta-buttons {
      display: flex;
      justify-content: center;
    }

    .social-links {
      justify-content: center;
    }

    .info, .image {
      width: 100%;
    }

    .info {
      h1 {
        font-size: 36px;
      }

      h2 {
        font-size: 28px;
      }
    }
  }

  @media (max-width: 400px) {
    padding: 0 24px;

    .cta-buttons {
      flex-direction: column;
      
      .secondary {
        margin: 8px 0 0 0 !important;
      }
    }
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
            <a href="/matthew-dizon-resume-4-4-2022.pdf" target="_blank" rel="noopener noreferrer">
              <button className='primary'>📑 View Resume</button>
            </a>
            <a href="https://calendly.com/matthew-dizon/15-minute-meeting" target="_blank" rel="noopener noreferrer">
              <button className='secondary'>🗓 Schedule a Meeting</button>
            </a>
          </div>
          <div className='social-links'>
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
        </div>
        <div className='image'>
          <Image src="/chu.png" alt="Matthew Dizon" layout="fill" objectFit='cover' />
        </div>
      </StyledHome>
    </Layout>
  )
}
