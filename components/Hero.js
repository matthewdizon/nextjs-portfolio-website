import Image from 'next/image'
import styled from 'styled-components'

const StyledHero = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* height: 40vh; */
    padding: 36px 0;
    background-color: aliceblue;

    h1 {
        /* font-size: ; */
        font-size: 80px;
        margin: 0;
    }

    p {
        width: 40%;
        text-align: center;
    }

    hr {
        height: 8px;
        width: 180px;
        background-color: black;
    }
    
    :after {
        content: "";
        position: fixed;
        top: calc(50% - 1000px);
        left: 0;
        width: 500px;
        height:2000px;
        background: #F2F8FE;
        transform: skew(-10deg);
        transform-origin:top;
        z-index: -9;
    }

    @media (max-width: 900px) {
      h1 {
          font-size: 40px;
      }

      p {
          width: 80%;
      }

      :after {
        width: 400px;
      }
    }
`

export default function Hero({title, description, image}) {
    return (
        <StyledHero>
            <h1>{title}</h1>
            <p>{description}</p>
            <hr />
        </StyledHero>
    )
}