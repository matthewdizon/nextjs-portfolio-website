import Hero from "../components/Hero"
import Layout from "../components/Layout"

export default function Experience() {
    return (
        <Layout title="Experience">
            <Hero
                title="🤝 Experience"
                description="Check out the different organizations and respective positions I've taken!"
            />
            <div>
                <div>
                    <span>Year</span>
                    <h2>Position</h2>
                    <h3>Organization</h3>
                    <p>Description</p>
                </div>
                <div>
                    <span>Year</span>
                    <h2>Position</h2>
                    <h3>Organization</h3>
                    <p>Description</p>
                </div>
                <div>
                    <span>Year</span>
                    <h2>Position</h2>
                    <h3>Organization</h3>
                    <p>Description</p>
                </div>
            </div>
        </Layout>
    )
}