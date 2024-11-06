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
        url: 'TODO',
      },
      {
        title: 'X79 Motherboard',
        description: 'A not well known motherboard for a not well known processor.',
        url: 'TODO'
      },
      {
        title: 'RTX 4060 Ti',
        description: 'Just for gaming.',
        url: 'TODO'
      },
      {
        title: 'SSD',
        description: '',
        url: 'TODO'
      },
      {
        title: 'HDD',
        description: '',
        url: 'TODO'
      },
      {
        title: 'Case',
        description: '',
        url: 'TODO'
      },
      {
        title: 'Fans',
        description: '',
        url: 'TODO'
      },
    ]
  },
  {
    name: 'Periphericals',
    items: [
      {
        title: 'Keyboard',
        description: 'Just for gaming.',
        url: 'TODO'
      },
      {
        title: 'Redragon Kobra',
        description: 'Just for gaming.',
        url: 'TODO'
      },
      {
        title: 'Microphone',
        description: 'Just for gaming.',
        url: 'TODO'
      },
      {
        title: 'Headset',
        description: 'Just for gaming.',
        url: 'TODO'
      },
      {
        title: 'Monitor',
        description: 'Just for gaming.',
        url: 'TODO'
      },
    ]
  },
]