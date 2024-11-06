import Card from '@/app/components/Card'
import GradientTitle from '@/app/components/GradientTitle'

export default function Projects() {
  return (
    <div>
      <div>
        <GradientTitle className="from-cyan to-green mb-2">
          Work, Hobby & Open Source
        </GradientTitle>

        <p>
          Here you can see <strong>{13} different projects</strong> I built.
        </p>
      </div>

      <div className="my-10">
        <h2 className="mb-2">Featured Projects</h2>

        <div className="flex justify-between">
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div>
        <h2>All Projects</h2>
      </div>
    </div>
  )
}
