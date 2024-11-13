export type Item = {
  title: string
  description?: string
  url?: string
}

export type Category = {
  name: string
  items: Item[]
}

export const categories: Category[] = [
  {
    name: 'Computer',
    items: [
      {
        title: 'Xeon E5-2630 V2',
        description: 'An old processor for servers.',
      },
      {
        title: 'Atermiter X79T',
        description:
          'A not well known motherboard for a not well known processor.',
      },
      {
        title: '16GB DDR3 1333 MHz (4x 4GB)',
        description: 'No brand.',
      },
      {
        title: 'RTX 4060 Ti Gigabyte',
        description: 'Just for gaming.',
        url: 'https://amzn.to/4fsUtMC',
      },
      {
        title: 'SSD SATA Kingston 480GB',
        url: 'https://amzn.to/4fijwlL',
      },
      {
        title: 'SSD M.2 KingSpec 512GB',
        url: 'https://amzn.to/3YFORaP',
      },
      {
        title: 'HDD WD Blue 1TB',
        url: 'https://amzn.to/4eszZCU',
      },
      {
        title: 'Pichau Komor Led RGB',
        description: 'A beautiful and spacious case.',
        url: 'https://www.pichau.com.br/gabinete-gamer-pichau-komor-led-rgb-lateral-em-vidro-temp-pgk-01-rgb',
      },
      {
        title: '3x 120mm Rise Mode fans',
        description: 'The Name of the Wind.',
        url: 'https://amzn.to/40x22h2',
      },
    ],
  },
  {
    name: 'Periphericals',
    items: [
      {
        title: 'HyperX Alloy Origins Core (blue switch)',
        description: 'An absolutely amazing mechanical keyboard with ABNT2.',
        url: 'https://amzn.to/40HpdFz',
      },
      {
        title: 'Redragon Cobra Mouse',
        description: 'The 7 buttons are great.',
        url: 'https://amzn.to/40D5zuf',
      },
      {
        title: 'Husky Howl',
        description: 'A basic condenser microphone.',
        url: 'https://www.kabum.com.br/produto/113993/microfone-gamer-husky-gaming-howl-podcast-preto-usb-condensador-hgmm001',
      },
      {
        title: 'Havit H2002D Headset',
        description: 'The plug-in mic is a game-changer.',
        url: 'https://amzn.to/3AO8x4r',
      },
      // {
      //   title: 'Monitor',
      //   description: 'Just for gaming.',
      //   url: 'TODO'
      // },
      {
        title: 'Generic Mousepad 900x350x3mm',
      },
      {
        title: '8Bitdo Ultimate 2C Wireless Controller',
        description: 'Black Myth: Wukong edition.',
        url: 'https://amzn.to/4fbmCYK',
      },
      {
        title: '8Bitdo Ultimate Controller',
        description: 'For Nintendo Switch.',
        url: 'https://amzn.to/3AwHxGA',
      },
      {
        title: 'Nintendo Switch OLED',
        description: 'My favorite videogame.',
        url: 'https://amzn.to/3CrvwCO',
      },
    ],
  },
]
