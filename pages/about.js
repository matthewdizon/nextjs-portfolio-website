import Hero from "../components/Hero"
import Layout from "../components/Layout"

export default function About() {
    return (
        <Layout title="About">
            <Hero
                title="👋 About"
                description="Hello, you can call me Chu! I'm a passionate full-stack software engineer who is eager to learn new technology and generate remarkable products."
            />
        </Layout>
    )
}