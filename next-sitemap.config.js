/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://aenfinite.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: './out',
  exclude: ['/404'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/404'],
      },
    ],
  },
  transform: async (config, path) => {
    // Custom transform function
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: path === '/' ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    }
  },
  priority: 0.7,
  changefreq: 'daily',
}