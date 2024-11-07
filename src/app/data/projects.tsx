import { PiTrophy } from 'react-icons/pi'
import { PiEggCrack } from 'react-icons/pi'
import { PiNotebook } from 'react-icons/pi'
import { BsGrid3X3 } from 'react-icons/bs'
import { PiMountains } from 'react-icons/pi'
import { IoPawOutline } from 'react-icons/io5'
import { PiChatText } from 'react-icons/pi'
import { PiQuotes } from 'react-icons/pi'
import { GoGear } from 'react-icons/go'
import { LiaMedalSolid } from 'react-icons/lia'
import { PiPlanet } from 'react-icons/pi'
import { GoPerson } from 'react-icons/go'
import { PiCassetteTapeLight } from 'react-icons/pi'
import { SlCalculator } from 'react-icons/sl'
import { PiHandGrabbing } from 'react-icons/pi'
import { FiCpu } from 'react-icons/fi'
import { FaStethoscope } from 'react-icons/fa6'
import { TbTruckDelivery } from 'react-icons/tb'
import { TbDeviceGamepad } from 'react-icons/tb'
import { TbMicrophone2 } from 'react-icons/tb'
import { TbPokeball } from 'react-icons/tb'

export type Project = {
  name: string
  description: string
  icon?: JSX.Element
  slug?: string
  sourceUrl: string
  private?: boolean
}

export const featuredProjects: Project[] = [
  {
    name: 'UnBalloon Ranking',
    description: 'A ranking for competitive programmers.',
    slug: '50+ users',
    icon: <PiTrophy size={32} />,
    sourceUrl: 'https://github.com/tilnoene/unballoon-ranking',
  },
  {
    name: 'Automatic Brooder',
    description: 'Low cost homemade automatic brooder.',
    slug: '10+ stars',
    icon: <PiEggCrack size={32} />,
    sourceUrl: 'https://github.com/tilnoene/chocadeira',
  },
  {
    name: 'CP Notebook Template',
    description: 'Template generator for organized coding notes.',
    slug: '5+ copies',
    icon: <PiNotebook size={32} />,
    sourceUrl: 'https://github.com/tilnoene/competitive-programming-template',
  },
]

export const projects: Project[] = [
  {
    name: 'Sudoku',
    description: 'Sudoku generator and solver.',
    icon: <BsGrid3X3 size={32} />,
    sourceUrl: 'https://github.com/tilnoene/sudoku',
  },
  {
    name: 'Celeste',
    description: 'Recreation of the Celeste game in assembly language.',
    icon: <PiMountains size={32} />,
    sourceUrl: 'https://github.com/tilnoene/chocadeira',
  },
  {
    name: 'Repet',
    description: 'App to manage pet vaccines and general care.',
    icon: <FaStethoscope size={32} />,
    sourceUrl: 'https://github.com/tilnoene/repet',
  },
  {
    name: 'tilnoene.com',
    description: 'My personal website, also known as "this website".',
    icon: <GoPerson size={32} />,
    sourceUrl: 'https://github.com/tilnoene/tilnoene.com',
  },
  {
    name: 'ZeptoProcessor',
    description: 'A 16-bit processor created from scratch.',
    icon: <FiCpu size={32} />,
    sourceUrl: 'https://github.com/tilnoene/zeptoprocessador',
  },
  {
    name: 'Viniccius13 Facts',
    description: 'A website with funny quotes about Viniccius13.',
    icon: <PiQuotes size={32} />,
    sourceUrl: 'https://github.com/tilnoene/viniccius13facts-front',
  },
  {
    name: 'Mashup Builder',
    description: 'Selects random Codeforces problems by rating.',
    icon: <GoGear size={32} />,
    sourceUrl: 'https://github.com/tilnoene/chocadeira',
  },
  {
    name: 'PetGato',
    description: 'Blog for a veterinarian, sharing pet care tips.',
    icon: <IoPawOutline size={32} />,
    sourceUrl: 'https://petgato-git-develop-tilnoene.vercel.app/erro',
  },

  {
    name: 'UaiFood',
    description: 'Simplified version of a food delivery app.',
    icon: <TbTruckDelivery size={32} />,
    sourceUrl: 'https://github.com/tilnoene/uaifood',
  },
  {
    name: 'SpeedCalc',
    description: 'Solve random math questions as fast as possible.',
    icon: <SlCalculator size={32} />,
    sourceUrl: 'https://speedcalc.vercel.app/',
  },
  {
    name: 'ChaTil',
    description: 'Real time chat using websocket.',
    icon: <PiChatText size={32} />,
    sourceUrl: 'https://github.com/tilnoene/chat',
  },
  {
    name: 'Gauntlet',
    description: 'RC car controlled by glove movement.',
    icon: <PiHandGrabbing size={32} />,
    sourceUrl: 'https://github.com/tilnoene/manopla',
  },
  {
    name: 'Solar System',
    description: 'Solar system made using Three.js.',
    icon: <PiPlanet size={32} />,
    sourceUrl: 'https://solar-system-treejs.vercel.app/',
  },
  {
    name: 'CP Badges',
    description: 'Competitive programming badges for GitHub.',
    icon: <LiaMedalSolid size={32} />,
    sourceUrl: 'https://github.com/kehsihba19/CP-Badges',
  },
  {
    name: 'Way of the Exploding Fist',
    description: 'Recreation of this game in assembly language.',
    icon: <TbDeviceGamepad size={32} />,
    sourceUrl: 'https://github.com/marcelomamorim/RISC-V-assembly-game',
  },

  {
    name: 'Guess the Lyrics',
    description: 'Fill in the random missing words of a song.',
    icon: <TbMicrophone2 size={32} />,
    sourceUrl: 'https://github.com/tilnoene/guess-the-lyrics',
  },
  {
    name: 'Pokemon Quiz',
    description: "Who's That Pokémon? Guess it from a silhouette.",
    icon: <TbPokeball size={32} />,
    sourceUrl: 'https://github.com/tilnoene/pokemon-quiz',
  },
  {
    name: 'Cassette Tape',
    description: 'A basic web music player built without frameworks.',
    icon: <PiCassetteTapeLight size={32} />,
    sourceUrl: 'https://github.com/tilnoene/cassette-tape',
  },
]
