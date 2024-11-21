module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-banshorian`,
      options: {
        basePath: ``,
        path: `src/`,
        imagesPath: `src/images/`,
        iconFile: `src/images/icon.png`,
        siteTitle: `Software developer CV Martin Andersen`,
        siteUrl: `https://gatsby-starter-banshorian.vercel.app`,
        siteName: `Martin Andersen developer portfolio | @webmaeistro`,
        siteShortName: `Martin Andersen CV`,
        siteDescription: `This cool App contains information about my work experience as a software developer.`,
        siteKeywords: `Application developer, Full Stack Developer, Front-end`,
        useMozJpeg: true,
        menuLinks: [
          // title = Link text
          // color = Animation background color on click
          { name: `home`, title: `Home`, color: `#000`, link: `` },
          {
            name: `experience`,
            title: `Experience`,
            color: `#3a3d98`,
            link: ``,
          },
          { name: `skills`, title: `Skills`, color: `#d52d43`, link: `` },
          { name: `aboutMe`, title: `About Me`, color: `#fff`, link: `` },
        ],
        email: `paranoia.holding@proton.me`,
        social: {
          // Usernames
          twitter: `webmaeistro`,
          gitHub: `webmaeistro`,
          stackOverflow: `/`,
          linkedIn: `in/martin-andersen`,
          resumeInPdf: `/CV-20.pdf`, // url or local link
        },
        homePage: {
          availableToHire: true,
          dotColors: ["#0e3e1e", "#6CC551"],
          h1Text: `Hi! I'm Martin Andersen`,
          h2Text: `I'm a front end serverless blazing fast site diciple + designer ("unicorn"), based out of Horten, Norway. I have worked as a software developer since 2011.`,
          typewriter: [
            `People person, coder, designer, infrastructure-as-code guy 😎`,
            `react, LAMP stack, javacript`,
            `Im that guy with the right personality n skillet u need 🤓`,
            `I think one of my values is the <strong>ability to find solutions<strong>`,
            `I like to share what I know 👨‍🏫`,
            `In my non-coding hours.. wait that don't exist!`,
            `I also do design and UX work <span style='color: #27ae60;'>using Figma.com</span>`,
          ],
        },
        // Color for menu background
        shapeColor: {
          link: { color: "#434343", hover: "#ffff" },
          shape1: {
            color: `#13547A`,
            opacity: `0.8`,
          },
          shape2: {
            color: `#80D0C7`,
            opacity: `0.3`,
          },
          shape3: {
            color: `#fff`,
            opacity: `0.7`,
          },
        },
        footer: `heart`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `*`, // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
          send_page_view: true,
          cookie_name: `gatsby-starter-banshorian.vercel.app`,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
  ],
}
