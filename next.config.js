const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: "ro",
    locales: ["ro", "en"],
  },
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
