import Hero from "../components/Hero"
import Layout from "../components/Layout"
import ExperienceTimeline from "../components/Timeline"

const experiences = [
    {
        position: "Senior Software Engineer",
        organization: "Google Developer Student Club Loyola",
        date: "October '21 - Present",
        image: "/gdsc.png",
        accomplishments: [
            "this is my first accomplishment",
            "this is my second accomplishment",
            "this is my third accomplishment",
        ],
    },
    {
        position: "Vice President of Engineering",
        organization: "User Experience Society",
        date: "June '21 - Present",
        image: "/uxsoc.png",
        accomplishments: [
            "this is my first accomplishment",
            "this is my second accomplishment",
            "this is my third accomplishment",
        ],
    },
    {
        position: "AVP for Backend Engineering",
        organization: "User Experience Society",
        date: "February '21 - June '21",
        image: "/uxsoc.png",
        accomplishments: [
            "this is my first accomplishment",
            "this is my second accomplishment",
            "this is my third accomplishment",
        ],
    },
    {
        position: "Web Engineering Committee Member",
        organization: "Google Developer Student Club Loyola",
        date: "November '20 - May '21",
        image: "/gdsc.png",
        accomplishments: [
            "this is my first accomplishment",
            "this is my second accomplishment",
            "this is my third accomplishment",
        ],
    },
    {
        position: "eServices Developer Training Pool Member",
        organization: "Ateneo Management Information Systems Association",
        date: "November '20 - May '21",
        image: "/misa.png",
        accomplishments: [
            "this is my first accomplishment",
            "this is my second accomplishment",
            "this is my third accomplishment",
        ],
    },
    {
        position: "Co-Founder & Chief Technology Officer",
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
        position: "Senior High School Ambassador",
        organization: "Xavier University Ateneo de Cagayan (SHS) - Student Government",
        date: "June '18 - March '19",
        image: "/xu-shs-sg.png",
        accomplishments: [
            "this is my first accomplishment",
            "this is my second accomplishment",
            "this is my third accomplishment",
        ],
    },
    {
        position: "Varsity Team Captain",
        organization: "Xavier University Ateneo de Cagayan (SHS) - Football Varsity Team",
        date: "June '18 - March '19",
        image: "/xu-crusaders.jpg",
        accomplishments: [
            "this is my first accomplishment",
            "this is my second accomplishment",
            "this is my third accomplishment",
        ],
    },
    {
        position: "Fund Committee Head",
        organization: "Xavier University Ateneo de Cagayan (JHS) - Light Cavalry Leadership Community",
        date: "June '16 - March '17",
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