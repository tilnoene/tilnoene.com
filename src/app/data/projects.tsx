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
import { BsQuestionLg } from 'react-icons/bs'
import { PiHandGrabbing } from 'react-icons/pi'
import { FiCpu } from 'react-icons/fi'
import { FaStethoscope } from 'react-icons/fa6'
import { TbTruckDelivery } from 'react-icons/tb'
import { TbDeviceGamepad } from 'react-icons/tb'
import { TbMicrophone2 } from 'react-icons/tb'

export type Project = {
  name: string
  description: string
  icon?: JSX.Element
  slug?: string
  sourceUrl: string
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
    description: 'Automatic notebook generator for DSA.',
    slug: '5+ forks',
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
    description: 'Assembly recreation of Celeste game.',
    icon: <PiMountains size={32} />,
    sourceUrl: 'https://github.com/tilnoene/chocadeira',
  },
  {
    name: 'Repet',
    description: 'Pet manager.',
    icon: <FaStethoscope size={32} />,
    sourceUrl: 'https://github.com/tilnoene/repet',
  },
  {
    name: 'tilnoene.com',
    description: 'My personal website, also known as "this website".',
    icon: <GoPerson size={32} />,
    sourceUrl: 'https://github.com/tilnoene/repet',
  },
  {
    name: 'ZeptoProcessor',
    description: 'A 16-bit processor created from scratch.',
    icon: <FiCpu size={32} />,
    sourceUrl: 'https://github.com/tilnoene/repet',
  },
  {
    name: 'Viniccius13 Facts',
    description: 'Sudoku generator and solver.',
    icon: <PiQuotes size={32} />,
    sourceUrl: 'https://github.com/tilnoene/sudoku',
  },
  {
    name: 'Mashup Builder',
    description: 'Random mashup builder for codeforces.',
    icon: <GoGear size={32} />,
    sourceUrl: 'https://github.com/tilnoene/chocadeira',
  },
  {
    name: 'PetGato',
    description: 'Food delivery app.',
    icon: <IoPawOutline size={32} />,
    sourceUrl: 'https://github.com/tilnoene/repet',
  },

  {
    name: 'UaiFood',
    description: 'Food delivery app.',
    icon: <TbTruckDelivery size={32} />,
    sourceUrl: 'https://github.com/tilnoene/repet',
  },
  {
    name: 'SpeedCalc',
    description: 'Math game to solve expressions faster.',
    icon: <SlCalculator size={32} />,
    sourceUrl: 'https://github.com/tilnoene/repet',
  },
  {
    name: 'ChaTil',
    description: 'Real time chat using websocket.',
    icon: <PiChatText size={32} />,
    sourceUrl: 'https://github.com/tilnoene/repet',
  },
  {
    name: 'Gauntlet',
    description: 'Food delivery app.',
    icon: <PiHandGrabbing size={32} />,
    sourceUrl: 'https://github.com/tilnoene/repet',
  },
  {
    name: 'Solar System',
    description: 'Solar system made using Three.js.',
    icon: <PiPlanet size={32} />,
    sourceUrl: 'https://github.com/tilnoene/repet',
  },
  {
    name: 'CP Badges',
    description: 'Competitive programming badges for GitHub.',
    icon: <LiaMedalSolid size={32} />,
    sourceUrl: 'https://github.com/tilnoene/repet',
  },
  {
    name: 'Way of the Exploding Fist',
    description: 'Assembly recreation of the game.',
    icon: <TbDeviceGamepad size={32} />,
    sourceUrl: 'https://github.com/tilnoene/repet',
  },

  {
    name: 'Guess the Lyrics',
    description: 'Food delivery app.',
    icon: <TbMicrophone2 size={32} />,
    sourceUrl: 'https://github.com/tilnoene/repet',
  },
  {
    name: 'Pokemon Quiz',
    description: 'Food delivery app.',
    icon: <BsQuestionLg size={32} />,
    sourceUrl: 'https://github.com/tilnoene/repet',
  },
  {
    name: 'Cassette Tape',
    description: 'Food delivery app.',
    icon: <PiCassetteTapeLight size={32} />,
    sourceUrl: 'https://github.com/tilnoene/repet',
  },
]
