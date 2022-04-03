export default function handler(req, res) {
  res.status(200).json([
    {
      title: "Projects",
      all: "http://localhost:3000/api/projects",
    }
  ])
}
