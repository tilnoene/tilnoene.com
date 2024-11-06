export default function Footer() {
  const links = [
    {
      title: 'Email',
      url: '/contact',
      icon: 'ri-mail-line',
    },
    {
      title: 'LinkedIn',
      url: 'https://linkedin.com/in/victor-manuel-brito-santos',
      icon: 'ri-linkedin-line',
    },
    {
      title: 'GitHub',
      url: 'https://github.com/tilnoene',
      icon: 'ri-github-line',
    },
    {
      title: 'Instagram',
      url: 'https://instagram.com/tilnoene',
      icon: 'ri-instagram-line',
    },
  ]

  return (
    <footer className="w-full h-14 flex justify-center items-center mt-24">
      <ul className="flex gap-5">
        {links.map(link => (
          <li key={link.title}>
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-secondary lowercase font-body no-underline hover:underline hover:text-primary underline-offset-2"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
