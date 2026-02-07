import Hero from "../components/Hero"
import Layout from "../components/Layout"
import ExperienceTimeline from "../components/Timeline"
import { experiences } from "../siteData"

export default function Experience() {
    return (
        <Layout title="Experience">
            <Hero
                title="🤝 Experience"
                description="Check out the different organizations and respective positions I've taken!"
            />
            <ExperienceTimeline
                experiences={experiences}
            />
        </Layout>
    )
}