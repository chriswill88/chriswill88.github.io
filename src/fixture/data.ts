
// import ae from "../assets/techimages/aftereffect.png";
// import aws from "../assets/techimages/aws.png";
// import babel from "../assets/techimages/babel.png";
// import css from "../assets/techimages/css3.png";
// import flask from "../assets/techimages/flask.png";
// import github from "../assets/techimages/github.png";
// import html from "../assets/techimages/html5.png";
// import js from "../assets/techimages/JavaScript.png";
// import lottie from "../assets/techimages/Lottie.png";
// import nginx from "../assets/techimages/nginx.png";
// import npm from "../assets/techimages/npm.png";
// import parcel from "../assets/techimages/parcel.png";
// import phaser from "../assets/techimages/phaserImage.png";
// import python from "../assets/techimages/python.png";
// import react from "../assets/techimages/react.png";
// import slack from "../assets/techimages/Slack.png";
// import trello from "../assets/techimages/trello.png";
// import cloudflare from "../assets/techimages/Cloudflare_Logo.png";
// import ghPages from "../assets/techimages/github-pages.png";
// import socketIO from "../assets/techimages/socketio.png";
// import vite from "../assets/techimages/vite.png";
// import vercel from "../assets/techimages/Vercel_logo.png";
// import nodejs from "../assets/techimages/nodejs.png"
// import express from "../assets/techimages/expressJS.png"

interface project {
    name: string,
    url: null | string,
    github?: null | string,
    description: string,
    techNames: string[],
    pictures: string[]
}

const projectsData: project[] = [
    {
        name: "Portfolio Website",
        url: "https://chriswilliams.tech",
        github: "https://github.com/chriswill88/chriswill88.github.io",
        description: "Christian Williams Portfolio website used to showcase skills and projects.",
        techNames: ["React", "TypeScript", "GSAP", "NodeJS", "Vite", "Github Pages", "HTML5", "JavaScript", "NPM", "Cloudflare", "CSS3" ],
        pictures: []
    },
    {
        name: "RocketRiders",
        url: "https://rocket-riders-git-master-chriswill88.vercel.app/",
        github: "https://github.com/chriswill88/RocketRiders",
        description: "This game was created using Phaser 3, a javascript game making framework. You can only play the game on PC!",
        techNames: ["AWS", "React", "Vercel", "JavaScript", "Flask", "Phaser3", "NodeJS", "After Effects", "Babel", "CSS3", "HTML5", "Lottie", "NPM", "Parcel", "Python", "Slack", "Trello", "Nginx"],
        pictures: []
    },
    {
        name: "Chatroom App",
        url: null,
        github: "https://github.com/chriswill88/chatapp/",
        description: "A simple chatroom app to learn socket io",
        techNames: [ "Express JS", "Socket.io", "Vite", "React", "NodeJS", "CSS3", "JavaScript", "Github Pages", "HTML5", "Github", "NPM" ],
        pictures: []
    },
    {
        name: "Nature Fresh Bins Website",
        url: "https://v0-bins-website.vercel.app/",
        github: "https://github.com/chriswill88/V0-bins-website",
        description: "Buisness page for trash bin cleaning service",
        techNames: ["Vercel", "V0", "Next JS", "Tailwind CSS", "NPM", "React", "NodeJS", "CSS3" ],
        pictures: []
    },

]

interface technology {
    name: String,
    type: "create" | "tool" | "framework" | "lang" | "other" | "back"
}

const technologiesMap: technology[] = [
    {
        name: "Photoshop",
        type: "create",
    },
    {
        name: "Premiere Pro",
        type: "create"
    },
    {
        name: "Figma",
        type: "create"
    },
    {
        name: "AWS",
        type: "tool"
    },
    {
        name: "Vercel",
        type: "tool"
    },
    {
        name: "MySQL",
        type: "tool",
    },
    {
        name: "Mongo DB",
        type: "tool",
    },
    {
        name: "JavaScript",
        type: "lang"
    },
    {
        name: "TypeScript",
        type: "lang",
    },
    {
        name: "CSS3",
        type: "lang"
    },
    {
        name: "React",
        type: "framework"
    },
    {
        name: "React Native",
        type: "framework",
    },
    {
        name: "Flask",
        type: "framework"
    },
    {
        name: "Git & Github",
        type: "tool"
    },
    {
        name: "HTML5",
        type: "lang"
    },
    {
        name: "Python",
        type: "lang"
    },

    {
        name: "Jira",
        type: "tool"
    },
    {
        name: "Vite",
        type: "tool"
    },
    {
        name: "Socket.io",
        type: "framework"
    },
    {
        name: "Cloudflare",
        type: "tool"
    },
    {
        name: "Node JS",
        type: "framework"
    },
    {
        name: "Express JS",
        type: "framework"
    },
    {
        name: "C",
        type: "lang",
    },
    {
        name: "SQL",
        type: "lang",
    },
    
    {
        name: "Ember JS",
        type: "framework",
    },
    {
        name: "Java",
        type: "lang",
    },
    {
        name: "Spring Boot",
        type: "framework",
    },
    {
        name: "Postman",
        type: "tool",
    },
    {
        name: "Insomina",
        type: "tool",
    },
    {
        name: "Bash",
        type: "lang",
    },
    {
        name: "GSAP",
        type: "create",
    },
]



export {projectsData, technologiesMap};