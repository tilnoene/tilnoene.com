import Image from 'next/image'
import { parseISO, format, intervalToDuration } from 'date-fns'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineDocumentText } from 'react-icons/hi'

import GradientTitle from '@/app/components/GradientTitle'

import {
  Award,
  awards,
  Education,
  education,
  Job,
  jobs,
} from '@/app/data/about'
import profileImage from '@/app/assets/victor-computador.jpg'
import Button from '@/app/components/Button'

export default function About() {
  const getDuration = (startDate: string, endDate: string) => {
    const durationObj = intervalToDuration({
      start: parseISO(startDate),
      end: endDate ? parseISO(endDate) : new Date(),
    })

    let durationStr = ''

    if (durationObj.years !== undefined && durationObj.years > 1) {
      durationStr = `${durationObj.years} yrs`
    } else if (durationObj.years === 1) {
      durationStr = `${durationObj.years} yr`
    }

    if (durationObj.months !== undefined && durationObj.months > 0) {
      durationStr += ` ${durationObj.months} mos`
    }

    return durationStr
  }

  return (
    <div>
      <GradientTitle className="from-pink to-purple mb-5">
        Programming goes far beyond syntax
      </GradientTitle>

      <div className="flex gap-8">
        <Image
          width={333}
          height={333}
          src={profileImage}
          alt="Victor Santos profile picture"
          className="rounded-lg"
          priority
          // placeholder="blur"
          // blurDataURL="" TODO: colocar 10px or less image base64
        />

        <div>
          <p>
            <strong>Hey, I'm Victor Santos!</strong> I started programming in
            2019, etc
          </p>

          <br />

          <p>OBI Medalist and ICPC Finalist</p>

          <br />

          <p>
            When I'm not working, I like running, playing guitar and{' '}
            <strong>cooking</strong>.
          </p>
        </div>
      </div>

      <div className="flex gap-2 mt-4 items-center ml-[-14px]">
        <a
          href="/files/resume.pdf"
          target="_blank"
          // rel="noreferrer"
          className="no-underline"
        >
          <Button>
            <HiOutlineDocumentText size={24} />
            <span className="mt-1">Resume</span>
          </Button>
        </a>

        <p>•</p>

        <a
          href="https://www.linkedin.com/in/victor-manuel-brito-santos/"
          target="_blank"
          rel="noreferrer"
          className="no-underline"
        >
          <Button>
            <FaLinkedin size={24} />
            <span className="mt-1">LinkedIn</span>
          </Button>
        </a>

        <p>•</p>

        <a
          href="https://github.com/tilnoene"
          target="_blank"
          rel="noreferrer"
          className="no-underline"
        >
          <Button>
            <FaGithub size={24} />
            <span className="mt-1">GitHub</span>
          </Button>
        </a>
      </div>

      <div className="mt-8 flex flex-col gap-9">
        <div>
          <h2 className="mb-3">Education</h2>

          <div className="flex flex-col gap-6">
            {education.map((education: Education) => (
              <div key={education.title.concat(education.universityName)}>
                <h3>{education.title}</h3>
                <div className="[&_*]:text-sm">
                  <p className="mb-1">
                    <a
                      href={education.universityUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {education.universityName}
                    </a>
                    <span> • {education.location}</span>
                  </p>
                  <p>
                    <span>
                      {format(parseISO(education.startDate), 'LLL yyyy')}
                    </span>
                    <span> – </span>
                    <span>
                      {education.endDate
                        ? format(parseISO(education.endDate), 'LLL yyyy')
                        : 'Present'}
                    </span>
                    <span> • </span>
                    <span>
                      {getDuration(education.startDate, education.endDate)}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-3">Career</h2>

          <div className="flex flex-col gap-6">
            {jobs.map((job: Job) => (
              <div key={job.title.concat(job.company)}>
                <h3>{job.title}</h3>
                <div className="[&_*]:text-sm">
                  <p className="mb-1">
                    <a href={job.companyUrl} target="_blank" rel="noreferrer">
                      {job.company}
                    </a>
                    <span> • {job.location}</span>
                  </p>
                  <p>
                    <span>{format(parseISO(job.startDate), 'LLL yyyy')}</span>
                    <span> – </span>
                    <span>
                      {job.endDate
                        ? format(parseISO(job.endDate), 'LLL yyyy')
                        : 'Present'}
                    </span>
                    <span> • </span>
                    <span>{getDuration(job.startDate, job.endDate)}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div>
            <h2 className="mb-3">Awards</h2>

            <div className="flex flex-col gap-6">
              {awards.map((award: Award) => (
                <div key={award.title.concat(award.competition)}>
                  <h3
                    className={
                      award.title === 'Silver Medal'
                        ? `bg-gradient-to-r from-secondary to-primary`
                        : 'bg-primary'
                    }
                    style={{
                      backgroundSize: '100%',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      MozBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      WebkitBoxDecorationBreak: 'clone',
                    }}
                  >
                    {award.title}
                  </h3>
                  <div className="[&_*]:text-sm">
                    <p className="mb-1">
                      <a
                        href={award.competitionUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {award.competition}
                      </a>
                    </p>
                    <p>{award.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
