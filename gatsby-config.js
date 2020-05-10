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
        siteUrl: `https://martin-andersen.netlify.app`,
        siteName: `Martin Andersen developer portfolio | @webmaeistro`,
        siteShortName: `MA`,
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
        email: `marander@protonmail.com`,
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
          h1Text: `Hi!, I'm Martin Andersen`,
          h2Text: `I'm a fullstack developer + designer ("unicorn"), based out of Horten, Norway, who loves to make threejs + p5js WEBGL 3D animations. And blazing fast websites I have
              worked as a software developer since 2011.`,
          typewriter: [
            `Coding is my passion 😎`,
            `I'm a 🍕 lover`,
            `I'm a fast learner and always interested in learning new technologies 🤓`,
            `I think one of my values is the <strong>ability to find solutions to problems<strong>`,
            `I like to share what I know 👨‍🏫`,
            `In my non-coding hours, I'm a electro IoT nerd and a family man.`,
            `I also do design and UX work <span style='color: #27ae60;'>using Figma.com</span>`,
          ],
        },
        // Color for menu background
        shapeColor: {
          link: { color: "#171616", hover: "#fff" },
          shape1: {
            color: `#413f46`,
            opacity: `0.7`,
          },
          shape2: {
            color: `#e6e5ea`,
            opacity: `0.7`,
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
          cookie_name: `martin-andersen-cv.*.*`,
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
