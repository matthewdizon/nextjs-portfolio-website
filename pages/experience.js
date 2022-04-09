import Hero from "../components/Hero"
import Layout from "../components/Layout"
import ExperienceTimeline from "../components/Timeline"

const experiences = [
    {
        position: "Vice President of Engineering",
        organization: "User Experience Society",
        date: "June '20 - Jaunary '21",
        image: "/atomic-habits.jpg",
    },
    {
        position: "Vice President of Engineering",
        organization: "User Experience Society",
        date: "June '20 - Jaunary '21",
        image: "/atomic-habits.jpg",
    },
    {
        position: "Vice President of Engineering",
        organization: "User Experience Society",
        date: "June '20 - Jaunary '21",
        image: "/atomic-habits.jpg",
    },
    {
        position: "Vice President of Engineering",
        organization: "User Experience Society",
        date: "June '20 - Jaunary '21",
        image: "/atomic-habits.jpg",
    },
    {
        position: "Vice President of Engineering",
        organization: "User Experience Society",
        date: "June '20 - Jaunary '21",
        image: "/atomic-habits.jpg",
    },
]

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
            {/* <ExperienceContainer>
                <div className="experience">
                    <div className="image-container">
                        <Image src="/atomic-habits.jpg" height={200} width={200} objectFit="cover" />
                    </div>
                    <div className="info-container">
                        <h2>Senior Software Engineer E awoeijf aoiwjef oaiwjef</h2>
                        <h3>Organization</h3>
                    </div>
                    <span className="date">June '20 - January '21</span>
                </div>
                <div className="experience">
                    <div className="image-container">
                        <Image src="/atomic-habits.jpg" height={200} width={200} objectFit="cover" />
                    </div>
                    <div className="info-container">
                        <h2>Senior Software Engineer E awoeijf aoiwjef oaiwjef</h2>
                        <h3>Organization</h3>
                    </div>
                    <span className="date">June '20 - January '21</span>
                </div>
                <div className="experience">
                    <div className="image-container">
                        <Image src="/atomic-habits.jpg" height={200} width={200} objectFit="cover" />
                    </div>
                    <div className="info-container">
                        <h2>Senior Software Engineer E awoeijf aoiwjef oaiwjef</h2>
                        <h3>Organization</h3>
                    </div>
                    <span className="date">June '20 - January '21</span>
                </div>
            </ExperienceContainer> */}
        </Layout>
    )
}