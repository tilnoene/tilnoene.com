import { Project } from '@/app/data/projects'

export default function ProjectPreview({ project }: { project: Project }) {
  return (
    <a
      className="no-underline cursor-pointer"
      href={project.sourceUrl}
      target="_blank"
      rel="noreferrer"
    >
      <div
        className={`${
          project.slug ? 'h-48' : 'h-[150px]'
        } w-[248px] p-5 ml-[-20px] mr-[20px] rounded-lg flex flex-col hover:bg-hover transition-colors`}
      >
        <div className="mb-4">{project.icon}</div>

        <h1 className="text-lg font-light leading-6">{project.name}</h1>
        <p className="leading-5">{project.description}</p>

        {project.slug && (
          <p className="mt-auto uppercase text-primary font-body font-medium text-sm tracking-wider">
            {project.slug}
          </p>
        )}
      </div>
    </a>
  )
}
