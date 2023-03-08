module.exports = {
  async redirects() {
    return [
      {
        source: "/rickroll",
        destination: "https://www.youtube.com/watch?v=eBGIQ7ZuuiU",
        permanent: false,
        basePath: false,
      },
    ];
  },
};
