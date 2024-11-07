import GradientTitle from '@/app/components/GradientTitle'
import ProjectPreview from '@/app/components/ProjectPreview'

import { featuredProjects, projects, Project } from '@/app/data/projects'

export default function Projects() {
  return (
    <div>
      <div>
        <GradientTitle className="from-cyan to-green mb-2">
          Work, Hobby & Open Source
        </GradientTitle>

        <p>
          Here you can see{' '}
          <strong>
            {featuredProjects.length + projects.length} different projects
          </strong>{' '}
          I built. Feel free to <strong>click</strong> and see more information
          about each one.
        </p>
      </div>

      <div className="my-10">
        <h2 className="mb-1">Featured Projects</h2>

        <div className="flex flex-wrap gap-2 ml-[-20px]">
          {featuredProjects.map((project: Project) => (
            <ProjectPreview project={project} key={project.name} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-2">All Projects</h2>

        <div className="flex flex-wrap justify-start gap-2 ml-[-20px]">
          {projects.map((project: Project) => (
            <ProjectPreview project={project} key={project.name} />
          ))}
        </div>
      </div>
    </div>
  )
}
