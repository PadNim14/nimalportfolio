import os from '../assets/os.png';
import compiler from '../assets/compiler.png';
import poke from '../assets/pokedex.png';
import ems from '../assets/ems.jpg';
import pacers from '../assets/pacers.jpg';
import invaders from '../assets/invaders.png';
import verilog from '../assets/verilog.png';
import rogue from '../assets/rogue.png';
export const ProjectList = [
    {
        name: "Micro-C Compiler",
        image: compiler,
        skills: "Java, x86 Assembly, C",
        link: "Get permission",
        desc: "Created a parser that deals with a subset of the C language that supports features like loops, pointers, and (barely) register allocation"
        
    },
    {
        name: "Paramedic Health Dashboard",
        image: ems,
        skills: "Python, React.js, Google Firebase, Dash, Figma",
        link: "https://github.com/purdue-ehealth-projects",
        desc: "Helped build a realtime dashboard in Python and Dash and a daily survey in React.js that monitors the health of low-income, at-risk patients in the Bronx, NY metro area in collaboration with the Purdue Nursing Department and the Purdue Weldon School of Biomedical Engineering"
        
    },
    {
        name: "Boiler Invaders",
        image: invaders,
        skills: "C, Thumb ISA of ARM, Python, KiCad (PCB Design)",
        link: "https://github.com/Rkothand/BoilerInvaders",
        desc: "For our ECE 362 (Microprocessor Systems and Interfacing) Mini Project, this was our take on the popular Space Invaders arcade game with a Star Wars twist, where we used an STM32 microcontroller to program the game in embedded C and used peripherals like GPIO, SPI, DAC, and Analog for input, display, and generation of sound, respectively. We first prototyped our game using a breadboard for initial testing, but later made a PCB design using KiCad to make the game portable."

    },
    {
        name: "jos",
        image: os,
        skills: "C",
        link: "Get permission",
        desc: "Created an exokernel version of an operating system, which is based off of MIT's jos lectures and labs"
        
    },
    {
        name: "Spectivity",
        image: pacers,
        skills: "React.js, Node.js, HTML/CSS, IBM Cloudant",
        link: "https://github.com/PadNim14/ATTHack",
        desc: "Devised a React.js web app with 3 other developers that quizzed spectators with some Pacers trivia and used the Challonge API to form brackets against the fans, which resulted in winning an award at a hackathon"

        // video: ""
        
    },
    {
        name: "Pokedex Encyclopedia Viewer",
        image: poke,
        skills: "React.js, HTML/CSS, Material-UI",
        link: "https://github.com/PadNim14/pokedex",
        desc: "Created a Pokedex viewer that pulls from the Poke API using React.js and renders each Pokemon with its image, name, weight, height, and XP"

        
    },
    // {
    //     name: "FPGA Nonsense",
    //     image: verilog,
    //     skills: "SystemVerilog",
    //     link: "Get permission"
        
    // },
    {
        name: "Rogue Dungeon Crawler",
        image: rogue,
        skills: "Java, XML",
        link: "https://github.com/PadNim14/JAVAPROJECT",
        desc: "Built an 80s-style arcade dungeon crawler GUI in Java, consisting of various grids, spells, and characters"
        
    },

]