import Hero from "../components/Hero"
import Layout from "../components/Layout"

export default function About() {
    return (
        <Layout title="About">
            <Hero
                title="👋 About"
                description="Hello, you can call me Chu! I'm a passionate full-stack software engineer who is eager to learn new technology and generate remarkable products."
            />
            <div>
                <p>Information about you</p>
                <p>More Information</p>
                <p>And even more information</p>
            </div>
            <div>
                <h2>Technology Stack</h2>
            </div>
            <div>
                <h2>Interests</h2>
            </div>
            <div>
                <h2>Books & Notes</h2>
            </div>
            <div>
                <h2>Notion Templates</h2>
            </div>
        </Layout>
    )
}