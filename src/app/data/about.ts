export type Job = {
  title: string,
  type: string,
  company: string,
  companyUrl: string,
  startDate: string,
  endDate: string,
  location: string,
};

export type Education = {
  title: string,
  universityName: string,
  universityUrl: string,
  startDate: string,
  endDate: string,
  location: string,
}

export type Award = {
  title: string,
  competition: string,
  competitionUrl: string,
  date: string,
}

export const jobs: Job[] = [
  {
    title: 'Web Developer',
    type: 'Internship',
    company: 'simpleasy',
    companyUrl: 'https://www.simpleasy.jp/',
    startDate: '2024-09-30',
    endDate: '2024-10-30',
    location: 'Tokyo, Japan',
  },
  {
    title: 'Software Developer',
    type: 'Full Time',
    company: 'Lacuna Software',
    companyUrl: 'https://www.lacunasoftware.com/',
    startDate: '2022-06-01',
    endDate: '2023-04-01',
    location: 'Brasília, Brazil',
  },
  {
    title: 'Software Developer',
    type: 'Part Time',
    company: 'CJR',
    companyUrl: 'https://www.cjr.org.br/',
    startDate: '2021-01-01',
    endDate: '2022-06-01',
    location: 'Brasília, Brazil',
  }
]

export const education: Education[] = [
  {
    title: "Bachelor's, Computer Science",
    universityName: 'University of Brasília',
    universityUrl: 'TODO',
    startDate: '2020-06-01',
    endDate: '2025-06-01',
    location: 'Brasília, Brazil',
  }
]

export const awards: Award[] = [
  {
    title: "Silver Medal",
    competition: "Brazilian Olympiad in Informatics (OBI)",
    competitionUrl: "https://olimpiada.ic.unicamp.br/",
    date: "2021"
  },
  {
    title: "Participation on ICPC Brazil Subregionals",
    competition: "International Collegiate Programming Contest (ICPC)",
    competitionUrl: "https://icpc.global",
    date: "2020 – 2024",
  },
  {
    title: "Bronze Medal",
    competition: "Brazilian Mathematics Olympiad (OBMEP)",
    competitionUrl: "http://obmep.org.br/",
    date: "2019"
  },
]