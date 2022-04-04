import Hero from "../components/Hero"
import Layout from "../components/Layout"

export default function Contact() {
    return (
        <Layout title="Contact">
            <Hero
                title="📞 Contact"
                description="Feel free to connect with me to discuss software development and business opportunities. I am also available for freelance and internship opportunities."
            />
            <div>
                <div>
                    <p>📧</p>
                    <h2>Email</h2>
                </div>
                <div>
                    <p>📧</p>
                    <h2>Email</h2>
                </div>
                <div>
                    <p>📧</p>
                    <h2>Email</h2>
                </div>
            </div>
        </Layout>
    )
}