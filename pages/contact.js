import Hero from "../components/Hero"
import Layout from "../components/Layout"
import styled from 'styled-components'

const ContactContainer = styled.div`
    
    padding: 48px 96px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .contact {
        display: inline-block;
        text-align: center;
        
        border-radius: 10px;
        padding: 24px 60px;
        margin-bottom: 16px;
        
        box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 4px 4px;
        /* box-shadow: 0 4px 10px var(black); */

        transition-duration: 0.3s;
        transition-property: transform;

        span {
            font-size: 48px;
        }

        :hover {
            cursor: pointer;
            transform: translateY(-3px);
        }
    }
`

export default function Contact() {
    return (
        <Layout title="Contact">
            <Hero
                title="📞 Contact"
                description="Feel free to connect with me to discuss software development and business opportunities. I am also available for freelance and internship opportunities."
            />
            <ContactContainer>
                <div className="contact">
                    <span>📧</span>
                    <h2>Email</h2>
                    <p>Send me an email at dominic.dizon@obf.ateneo.edu</p>
                </div>
                <div className="contact">
                    <span>📧</span>
                    <h2>Email</h2>
                    <p>Send me an email at dominic.dizon@obf.ateneo.edu</p>
                </div>
                <div className="contact">
                    <span>📧</span>
                    <h2>Email</h2>
                    <p>Send me an email at dominic.dizon@obf.ateneo.edu</p>
                </div>
                <div className="contact">
                    <span>📧</span>
                    <h2>Email</h2>
                    <p>Send me an email at dominic.dizon@obf.ateneo.edu</p>
                </div>
            </ContactContainer>
        </Layout>
    )
}