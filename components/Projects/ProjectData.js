import { crypto, photograph, landingPage, realEstate } from "../../assets/img"

export const projectInfo = [
    { 
        id: 1, img: photograph, 
        title: 'Photograph App', 
        desc: 'i build this lovely photograph app using nextjs, reactjs and tailwindcss',
        // stacks:[
        //     { id: 1, names: 'Reactjs' },
        //     { id: 2, names: 'Tailwindcss' },
        // ],
        liveName: 'Live Site', 
        liveLink: 'https://photograph-app.vercel.app/', sourceName: 'Source Code', 
        sourceLink: 'https://github.com/muhammadraazy/Photograph-App'
    },
    { 
        id: 2, img: crypto, 
        title: 'CryptoApp', 
        desc: 'building a cryptocurrency info app with reactjs, redux toolkit, ant design, and axios',
        // stacks:[
        //     { id: 1, names: 'Reactjs' },
        //     { id: 2, names: 'Tailwindcss' },
        // ],
        liveName: 'Live Site', 
        liveLink: 'https://cryptos-info.netlify.app/', sourceName: 'Source Code', sourceLink: 'https://github.com/muhammadraazy/crypto-app'
    },
    { 
        id: 3, img: landingPage, 
        title: 'Landing Page',
        desc: 'i build this lovely startup landing page using nextjs, reactjs, and themeui',
        // stacks:[
        //     { id: 1, names: 'Reactjs' },
        //     { id: 2, names: 'Tailwindcss' },
        // ],
        liveName: 'Live Site', 
        liveLink: 'https://startup-homepage.netlify.app/', sourceName: 'Source Code', sourceLink: 'https://github.com/muhammadraazy/Landing_Page'
    },
    { 
        id: 4, img: realEstate, 
        title: 'World Estate', 
        desc: 'building this beautiful real estate web app with nextjs, react, chakraui, and axios',
        // stacks:[
        //     { id: 1, names: 'Reactjs' },
        //     { id: 2, names: 'Tailwindcss' },
        // ],
        liveName: 'Live Site', 
        liveLink: 'https://world-estate.vercel.app/', sourceName: 'Source Code', sourceLink: 'https://github.com/muhammadraazy/world-estate'
    },
]


export const projectStack = [
    { id: 1, names: ['Reactjs', 'Tailwindcss', 'React Icons'] },
    { id: 2, names: ['Nextjs', 'Sass', 'React Icons'] },
    { id: 3, names: ['Reactjs', 'Material UI', 'React Icons'] },
    { id: 4, names: ['Reactjs', 'Tailwindcss', 'React Icons'] },
]