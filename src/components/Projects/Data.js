import portofolio from "./images/portofolio.PNG";
import reactEpl from "./images/react-epl.PNG";
import pwaEpl from "./images/pwa-epl.PNG";
import burgerWeb from "./images/burger-web.PNG";
import travelLanding from "./images/travel-landingpage.PNG";
import fylo from "./images/frontend-fylo.PNG";

const dataProjects = [
    {
        id: 6,
        img: portofolio,
        name: "ReactJS - Portofolio",
        linkGithub: "https://github.com/danangpurbojati/portofolio",
        linkLive: "https://danang-portofolio.web.app/",
        tags: [
            "reactjs",
            "styled-components",
            "react-scroll"
        ]
    },
    {
        id: 5,
        img: reactEpl,
        name: "ReactJS - Football Matches",
        linkGithub: "https://github.com/danangpurbojati/reactjs-epl",
        linkLive: "https://reactjsepl-purbojati.netlify.app/",
        tags: [
            "reactjs",
            "axios",
            "hooks"
        ]
    },
    {
        id: 4,
        img: pwaEpl,
        name: "PWA - Football Matches",
        linkGithub: "https://github.com/danangpurbojati/football-match-pwa",
        linkLive: "https://danangpurbojati.github.io/football-match-pwa/",
        tags: [
            "pwa",
            "fetch-api",
            "service-worker",
            "materialize css"
        ]
    },
    {
        id: 3,
        img: burgerWeb,
        name: "PWA - Burger Landing Page",
        linkGithub: "https://github.com/danangpurbojati/landing-page-pwa",
        linkLive: "https://burger-pwa-fb11a.web.app/",
        tags: [
            "pwa",
            "service-worker"
        ]
    },
    {
        id: 2,
        img: travelLanding,
        name: "Simple Landing Page",
        linkGithub: "https://github.com/danangpurbojati/travel-landingpage",
        linkLive: "https://danangpurbojati.github.io/travel-landingpage/",
        tags: [
            "html",
            "css",
            "javascript"
        ]
    },
    {
        id: 1,
        img: fylo,
        name: "Landing Page - FrontEndmentor",
        linkGithub: "https://github.com/danangpurbojati/fylo-dark-frontendmentorio",
        linkLive: "https://danangpurbojati.github.io/fylo-dark-frontendmentorio/index.html",
        tags: [
            "html",
            "css",
        ]
    },
]

export default dataProjects;