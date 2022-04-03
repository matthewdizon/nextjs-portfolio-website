import Image from 'next/image'
import styled from 'styled-components'

const StyledHero = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 40vh;
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
`

export default function Hero({title, description, image}) {
    return (
        <StyledHero>
            {/* <Image src={image}/> */}
            <h1>{title}</h1>
            <p>{description}</p>
            <hr />
        </StyledHero>
    )
}