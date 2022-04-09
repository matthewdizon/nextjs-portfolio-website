import Hero from "../components/Hero"
import Layout from "../components/Layout"
import ExperienceTimeline from "../components/Timeline"

const experiences = [
    {
        position: "Vice President of Engineering",
        organization: "User Experience Society",
        date: "June '20 - Jaunary '21",
        image: "/atomic-habits.jpg",
        accomplishments: [
            "this is my first accomplishment",
            "this is my second accomplishment",
            "this is my third accomplishment",
        ],
    },
    {
        position: "Vice President of Engineering",
        organization: "User Experience Society",
        date: "June '20 - Jaunary '21",
        image: "/atomic-habits.jpg",
        accomplishments: [
            "this is my first accomplishment",
            "this is my second accomplishment",
            "this is my third accomplishment",
        ],
    },
    {
        position: "Vice President of Engineering",
        organization: "User Experience Society",
        date: "June '20 - Jaunary '21",
        image: "/atomic-habits.jpg",
        accomplishments: [
            "this is my first accomplishment",
            "this is my second accomplishment",
            "this is my third accomplishment",
        ],
    },
    {
        position: "Vice President of Engineering",
        organization: "User Experience Society",
        date: "June '20 - Jaunary '21",
        image: "/atomic-habits.jpg",
        accomplishments: [
            "this is my first accomplishment",
            "this is my second accomplishment",
            "this is my third accomplishment",
        ],
    },
    {
        position: "Vice President of Engineering",
        organization: "User Experience Society",
        date: "June '20 - Jaunary '21",
        image: "/atomic-habits.jpg",
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