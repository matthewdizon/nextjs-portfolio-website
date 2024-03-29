import Hero from "../components/Hero";
import Layout from "../components/Layout";
import styled from "styled-components";
import Image from "next/image";
import SimpleAccordion from "../components/Accordion";

const AboutContainer = styled.div`
  display: flex;
  padding: 0 96px;

  h2 {
    font-size: 16px;
    display: inline-block;

    text-align: center;
    width: fit-content;
    border-radius: 4px;
    padding: 8px;

    background: black;
    color: white;
  }

  .sub-content {
    width: 30%;
    margin-right: 40px;

    .currently {
      text-align: justify;
      word-spacing: -2px;
    }

    p {
      font-size: 20px;
    }
  }

  .main-content {
    width: 70%;
    display: flex;
    flex-direction: column;

    .general-info {
      font-size: 24px;

      .ideas {
        li {
          margin: 16px 0;
        }

        span {
          color: #94c2a4;
          font-weight: 500;
        }
      }
    }
  }

  .tech-stack-container {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }

  .tech-container {
    flex: 1 20%;

    border-radius: 4px;
    padding: 3rem;
    /* padding: 2rem; */
    text-align: center;

    position: relative;
    /* height: 200px; */
    /* width: 100%; */

    box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 4px 4px;
    background-color: aliceblue;
    /* margin: 0 1rem 1rem 0; */

    transition: transform 1s;

    img {
      padding: 20px !important;
    }

    :hover {
      cursor: pointer;
      transform: translateY(-5px);
    }

    @media (max-width: 600px) {
      flex: 1 25%;
    }

    @media (max-width: 450px) {
      flex: 1 40%;
    }
  }

  .book-container {
    display: flex;
    padding: 1.5rem;

    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 4px 4px;

    background-color: #94c2a4;
    color: white;

    margin-bottom: 8px;

    :nth-child(even) {
      flex-direction: row-reverse;

      .info-container {
        margin-left: 0;
        margin-right: 48px;
      }
    }

    h3 {
      font-size: 24px;

      :hover {
        color: #5f706a;
      }
    }

    .image-container {
      height: 200px;
      position: relative;
      width: 100%;

      transition: transform 0.5s;

      :hover {
        transform: scale(1.1);
      }
    }

    .info-container {
      margin-left: 48px;
    }

    @media (max-width: 600px) {
      flex-direction: column;
      text-align: center;

      .info-container {
        margin: 0;
      }
    }
  }

  @media (max-width: 900px) {
    padding: 0 48px;
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;

    .book-container {
      :nth-child(even) {
        flex-direction: column;
      }
    }

    .main-content,
    .sub-content {
      width: 100%;
    }

    .sub-content {
      display: flex;

      .currently {
        margin-left: 40px;
      }
    }
  }

  @media (max-width: 600px) {
    .sub-content {
      flex-direction: column;

      .currently {
        margin: 0;
      }
    }
  }

  @media (max-width: 400px) {
    padding: 0 24px;
  }
`;

export default function About() {
  const skills = [
    "Python",
    "Django",
    "JavaScript",
    "React",
    "Data Preprocessing",
    "Data Visualization",
    "Artificial Intelligence",
    "Machine Learning",
    "Time Management",
    "Communication",
    "Organization",
    "Planning",
    "Problem-Solving",
    "Flexibility",
    "Writing",
    "Public Speaking",
  ];

  const currents = [
    "Looking for a Software Engineering Internship",
    "Majoring in Management Information Systems and Specializing in Data Science and Analytics @ Ateneo de Manila University",
    "Working as the Vice President of Engineering @ User Experience Society",
    "Working as a Senior Software Engineer @ Google Developer Student Clubs Loyola",
    "Reading The 4-Hour Work Week",
  ];

  const techs = [
    "/react-js.png",
    "/gatsby-js.png",
    "/next-js.png",
    "/graphql.png",
    "/vercel.svg",
    "/netlify.png",
    "/prismic.png",
    "/figma.png",
    "/solana.png",
    "/django.png",
    "/mysql.png",
    "/docker.png",
  ];

  const interests = [
    {
      title: "🌱 Self-Development",
      description:
        "Ever since the COVID-19 pandemic, I spent a lot of time learning new things. It was March of 2020 when I wrote my first line of code and explored the whole industry of software development. By the following year, I started to read non-fiction books. I would get daily physical exercise. I would listen to podcasts and consume content that revolve around self-motivation and personal development. I find the time to meditate, journal, and reflect about my day/week. I am in a recursive process of understanding who I am and iterate between my plans for growth.",
    },
    {
      title: "⛓ Blockchain Technology",
      description:
        "Some people view it as 'The Next Big Thing.' We have Cryptocurrencies, NFTs (Non-Fungible Tokens), and a ton of different blockchain networks that can achieve different things. I've been able to learn more about blockchain technology ever since Q3 of 2021 - I've invested in several cryptocurrencies through different platforms (Binance, KuCoin, Gate.io) and I've also been able to gain some profits by buying and selling NFTs on the Solana Blockchain Network. From time to time, I learn blockchain development (particularly Solana Development).",
    },
    {
      title: "🏋️‍♂️ Physical Fitness",
      description:
        "I've been playing Football ever since I was in Kindergarten. I was an active kid who would always enjoy to run around and embark in physical activities. With the online setup, I've spent a lot of time exercising at home through calisthenics and would also go jogging whenever I had the chance.",
    },
    {
      title: "💰 Financial Literacy",
      description:
        "As a student that has spent time freelancing and dabbling with investments, I've been able to deal with my own hard-earned money. I continue to seek for opportunities that could bring in more revenue, I find ways for me to utilize the skills and assets I have, and I constantly aim to achieve financial freedom.",
    },
  ];

  const books = [
    {
      title: "⚛ Atomic Habits",
      description:
        "The book elaborates on how we can make/break habits by following 4 rules: making it obvious/invisible, making it attractive/unattractive, making it easy/difficult, making it satisfying/unsatisfying.",
      image: "/atomic-habits.jpg",
      notes:
        "https://matthewdizon.notion.site/Atomic-Habits-0dab5352f58949ae87bae1b441c8b2f0",
    },
    {
      title: "Eat That Frog 🐸",
      description:
        "The book teaches you on how you can overcome procrastination with a variety (21) of productivity tips. It talks a lot about how we can dictate the value or importance of every task/activity, how we can prepare ourselves to jump into the task we have, and how we can (and should) accomplish our tasks fully.",
      image: "/eat-that-frog.jpg",
      notes:
        "https://matthewdizon.notion.site/Eat-That-Frog-c405f1bef77c405791ed9b8e30c27851",
    },
    {
      title: "🦸‍♂️ The Power of Habit",
      description:
        "The book discusses the habit loop (cue, routine, and reward) and how we can notice it among individuals, organizations, and within the society.",
      image: "/power-of-habit.jpg",
      notes:
        "https://matthewdizon.notion.site/The-Power-of-Habit-fe45c6d3cc2345feb329f7b778e64011",
    },
    {
      title: "The 7 Habits of Highly Effective People ⚙️",
      description:
        "The book breaks the habits down into 3 main parts: Private Victory — where we learn to become independent; Public Victory — where we learn to become interdependent; and Renewal — where we are in a constant spiral of learning, committing, and doing.",
      image: "/7-habits.jpg",
      notes:
        "https://matthewdizon.notion.site/The-7-Habits-of-Highly-Effective-People-70c83d1636904183a7ed2808879c34fc",
    },
  ];

  return (
    <Layout title="About">
      <Hero
        title="👋 About"
        description="Hello, you can call me Chu! I'm a passionate full-stack software engineer who is eager to learn new technology and generate remarkable products."
      />
      <AboutContainer>
        <div className="sub-content">
          <div className="skills">
            <h2>Skills</h2>
            <div>
              {skills.map((skill, index) => {
                return <p key={index}>→ {skill}</p>;
              })}
            </div>
          </div>
          {/* <div className="currently">
                        <h2>Currently, I'm...</h2>
                        <div>
                            {currents.map((current, index) => {
                                return (
                                    <p key={index}>→ {current}</p>                    
                                )
                            })}
                        </div>
                    </div>        */}
        </div>
        <div className="main-content">
          <div className="general-info">
            <p>
              I see myself as a problem solver, an opportunity seeker, and a
              great fit for any team — I also am interested in taking leadership
              roles.
            </p>
            {/* <p>EDIT ME! Personal development, productivity, life organization</p> */}
            <div className="ideas">
              <p>Ideas I Live By:</p>
              <ol>
                <li>
                  <span>Have a Growth Mindset.</span> It helps to look past our
                  failures and view them as steps required for you to continue
                  moving forward. Whenever we deal with challenges, view them as
                  opportunities for you to step out of your comfort zone.
                </li>
                <li>
                  <span>We Never Stop Learning.</span> May it be in any aspects
                  of our lives, there's always something new for you to learn.
                  Have a system that can help you capture these ideas and apply
                  them into your personal endeavors.{" "}
                </li>
                <li>
                  <span>Be a Solution Finder.</span> With the technology we have
                  in our hands, a simple Google Search can provide us numerous
                  resources that we may need to move past any hurdles we
                  encounter. Having the ability to independently solve problems
                  can lead you to success.
                </li>
              </ol>
            </div>
            <p>
              When I'm not writing code, you could find me reading and learning
              about new technologies, monitoring different cryptocurrency
              values, or organizing my virtual workspaces.
            </p>
          </div>
          <h2>Technology Stack</h2>
          <div className="tech-stack-container">
            {techs.map((tech, index) => {
              return (
                <div className="tech-container" key={index}>
                  <Image src={tech} layout="fill" objectFit="contain" />
                </div>
              );
            })}
          </div>

          <h2>Interests</h2>
          <div>
            {interests.map((interest, index) => {
              return (
                <SimpleAccordion
                  title={interest.title}
                  content={interest.description}
                  key={index}
                />
              );
            })}
          </div>

          <h2>Books & Notes</h2>
          <div>
            {books.map((book, index) => {
              return (
                <div className="book-container" key={index}>
                  <div className="image-container">
                    <a
                      href={book.notes}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={book.image}
                        layout="fill"
                        objectFit="contain"
                      />
                    </a>
                  </div>
                  <div className="info-container">
                    <a
                      href={book.notes}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3>{book.title}</h3>
                    </a>
                    <p>{book.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* <h2>Notion Templates</h2> */}
          <div></div>
        </div>
      </AboutContainer>
    </Layout>
  );
}
