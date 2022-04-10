import Hero from "../components/Hero"
import Layout from "../components/Layout"
import ExperienceTimeline from "../components/Timeline"

const experiences = [
    {
        position: "Vice President of Engineering",
        organization: "User Experience Society",
        date: "June '20 - Jaunary '21",
        image: "/uxsoc.png",
        accomplishments: [
            "this is my first accomplishment",
            "this is my second accomplishment",
            "this is my third accomplishment",
        ],
    },
    {
        position: "Vice President of Engineering",
        organization: "DSC",
        date: "June '20 - Jaunary '21",
        image: "/gdsc.png",
        accomplishments: [
            "this is my first accomplishment",
            "this is my second accomplishment",
            "this is my third accomplishment",
        ],
    },
    {
        position: "Vice President of Engineering",
        organization: "Punta",
        date: "June '20 - Jaunary '21",
        image: "/punta.jpeg",
        accomplishments: [
            "this is my first accomplishment",
            "this is my second accomplishment",
            "this is my third accomplishment",
        ],
    },
    {
        position: "Vice President of Engineering",
        organization: "MISA",
        date: "June '20 - Jaunary '21",
        image: "/misa.png",
        accomplishments: [
            "this is my first accomplishment",
            "this is my second accomplishment",
            "this is my third accomplishment",
        ],
    },
    {
        position: "Vice President of Engineering",
        organization: "XUSHS SG",
        date: "June '20 - Jaunary '21",
        image: "/xu-shs-sg.png",
        accomplishments: [
            "this is my first accomplishment",
            "this is my second accomplishment",
            "this is my third accomplishment",
        ],
    },
    {
        position: "Vice President of Engineering",
        organization: "XUSHS Football Varsity Team",
        date: "June '20 - Jaunary '21",
        image: "/xu-crusaders.jpg",
        accomplishments: [
            "this is my first accomplishment",
            "this is my second accomplishment",
            "this is my third accomplishment",
        ],
    },
    {
        position: "Vice President of Engineering",
        organization: "XUJHS LCLC",
        date: "June '20 - Jaunary '21",
        image: "/xu-lclc.jpeg",
        accomplishments: [
            "this is my first accomplishment",
            "this is my second accomplishment",
            "this is my third accomplishment",
        ],
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
        </Layout>
    )
}