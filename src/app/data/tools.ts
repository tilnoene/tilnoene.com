export type Item = {
  title: string,
  description: string,
  url: string,
}

export type Category = {
  name: string;
  items: Item[],
}

export const categories: Category[] = [
  {
    name: 'Computer',
    items: [
      {
        title: 'Xeon E5',
        description: 'An old processor for servers.',
        url: '',
      },
      {
        title: 'X79 Motherboard',
        description: 'A not well known motherboard for a not well known processor.',
        url: ''
      },
      {
        title: 'RTX 4060 Ti',
        description: 'Just for gaming.',
        url: 'https://amzn.to/4fsUtMC'
      },
      {
        title: 'SSD SATA Kingston 480GB',
        description: '',
        url: 'https://amzn.to/4fijwlL'
      },
      {
        title: 'SSD M.2 KingSpec 512GB',
        description: '',
        url: 'https://amzn.to/3YFORaP'
      },
      {
        title: 'HDD WD Blue 1TB',
        description: '',
        url: 'https://amzn.to/4eszZCU'
      },
      // {
      //   title: 'Case',
      //   description: '',
      //   url: ''
      // },
      {
        title: '3x 120mm Rise Mode fans',
        description: 'The Name of the Wind',
        url: 'https://amzn.to/40x22h2'
      },
    ]
  },
  {
    name: 'Periphericals',
    items: [
      // {
      //   title: 'Keyboard',
      //   description: 'Just for gaming.',
      //   url: 'TODO'
      // },
      {
        title: 'Mouse Redragon Cobra',
        description: '7 buttons are great.',
        url: 'https://amzn.to/40D5zuf'
      },
      // {
      //   title: 'Microphone',
      //   description: 'Just for gaming.',
      //   url: 'TODO'
      // },
      // {
      //   title: 'Headset',
      //   description: 'Just for gaming.',
      //   url: 'TODO'
      // },
      // {
      //   title: 'Monitor',
      //   description: 'Just for gaming.',
      //   url: 'TODO'
      // },
      {
        title: '8Bitdo Ultimate 2C Wireless Controller',
        description: 'Black Myth: Wukong edition.',
        url: 'https://amzn.to/4fbmCYK'
      },
      {
        title: '8Bitdo Ultimate Controller',
        description: 'For Nintendo Switch.',
        url: 'https://amzn.to/3AwHxGA'
      },
      {
        title: 'Nintendo Switch OLED',
        description: 'My favorite videogame.',
        url: 'https://amzn.to/3CrvwCO'
      },
    ]
  },
]