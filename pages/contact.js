import Hero from "../components/Hero"
import Layout from "../components/Layout"
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
const ContactContainer = styled.div`
    
    padding: 48px 96px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 24px;

    .contact {
        flex: 1 0 45%;

        display: inline-block;
        text-align: center;
        
        border-radius: 10px;
        padding: 24px 0;
        
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

    @media (max-width: 900px) {
        padding: 48px;
    }

    @media (max-width: 400px) {
        padding: 48px 24px;
    }
`

const EmailFormContainer = styled.div`

    padding: 0 96px;

    form {
        display: flex;
        flex-direction: column;
        
        background-color: #B3D5ED;
        border-radius: 12px;

        padding: 40px;
        
        button {
            margin-top: 24px;
            padding: 20px 32px;
            border-radius: 8px;
            border: black;
            background-color: black;
            color: white;

            :hover {
                cursor: pointer;
                background-color: rgba(31,41,55);
            }
        }

        div {
            display: flex;
        }

        .person-info, .mail-info {
            display: flex;
            flex-direction: column;

            .textfield {
                margin-bottom: 16px;
            }
        }

        .person-info {
            width: 30%;
        }

        .mail-info {
            flex: 1;
            margin-left: 40px;
            width: 60%;
        }

        @media (max-width: 600px) {
            padding: 20px;

            div {
                flex-direction: column;
            }

            .person-info, .mail-info {
                width: 100%;

                input {
                    width: 95%;
                }
            }

            .mail-info {
                margin: 0;
            }
        }
    }

    @media (max-width: 900px) {
        padding: 0 48px;
    }

    @media (max-width: 400px) {
        padding: 0 24px;
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
            <EmailFormContainer>
                <form
                    action="https://formspree.io/f/xoqrkqgy"
                    method="POST"
                    className="inner-container"
                >
                    <div>
                        <div className="person-info">
                            <TextField
                                required
                                id="filled-required"
                                label="Email"
                                variant="filled"
                                name="email"
                                type="email"
                                className="textfield"
                            />
                            <TextField
                                required
                                id="filled-required"
                                label="First Name"
                                variant="filled"
                                name="fname"
                                className="textfield"
                            />
                            <TextField
                                required
                                id="filled-required"
                                label="Last Name"
                                variant="filled"
                                name="lname"
                                className="textfield"
                            />
                            {/* <label>
                                Email
                                <input type="email" name="email" required/>
                            </label>
                            <label>
                                First Name
                                <input type="text" name="fname" required/>
                            </label>
                            <label>
                                Last Name
                                <input type="text" name="lname" required/>
                            </label> */}
                        </div>

                        <div className="mail-info">
                            <TextField
                                required
                                id="filled-required"
                                label="Title"
                                variant="filled"
                                name="title"
                                className="textfield"
                            />
                            <TextField
                                required
                                id="filled-required"
                                label="Message"
                                variant="filled"
                                name="message"
                                className="textfield"
                                multiline
                                rows={4}
                            />
                            {/* <label>
                                Title
                                <input type="text" name="title" required/>
                            </label>
                            <label>
                                Message
                                <input className="message-text-area" name="message" required></input>
                            </label> */}
                        </div>
                    </div>

                    <button type="submit">Send</button>

                </form>
            </EmailFormContainer>
        </Layout>
    )
}