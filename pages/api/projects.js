export default function handler(req, res) {
    res.status(200).json([
        {
            link: "https://www.brigadaeskwela.org/",
            image: "/brigadaeskwela.png",
            title: "Brigada E-Skwela Website",
            description: "A non-stock, non-profit, youth-led organization that conducts various education-based programs",
            tech: [
                "Vue",
                "Strapi"
            ]
        },
        {
            link: "https://oursanggu.com/",
            image: "/sanggu.png",
            title: "OurSanggu ADMU Website",
            description: "Sole Autonomous Student Government of Ateneo de Manila University",
            tech: [
                "React",
                "Gatsby",
                "Prismic"
            ]
        },
    ])
  }
  