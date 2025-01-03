'use client'

import 'react-vertical-timeline-component/style.min.css'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

import Link from 'next/link'
import {
  FaExchangeAlt,
  // FaProjectDiagram,
  FaRocket,
  FaUsers,
} from 'react-icons/fa'
import { MdDeveloperBoard } from 'react-icons/md'

import { ETHERSCAN_URL } from '@/constant'

type Props = {
  roadmapRef: React.RefObject<HTMLDivElement>
}
type TRoadMapTitle = {
  title: string
}
type TRoadMapTimeline = {
  date: string
  title: string
  content: React.ReactNode
  color: string
  summary: string
}
export default function RoadMap(props: Props) {
  const { roadmapRef } = props
  return (
    <article ref={roadmapRef} className="text-white pt-24 pb-10">
      <RoadMapTitle title="Development Roadmap" />
      <RoadmapComponent />
    </article>
  )
}

function RoadMapTitle(props: TRoadMapTitle) {
  const { title } = props
  return (
    <div className="row-flex justify-center xl:justify-start items-center text-center">
      <h1 className="md:text-[3.5rem] text-4xl px-16 py-4">{title}</h1>
    </div>
  )
}

function RoadmapComponent() {
  const timelines = [
    {
      date: 'DEC 2024',
      title: 'Kuku Coin development based on solidity',
      content: (
        <>
          <p>Developing a website to introduce Kuku Coin.</p>
          <p>Smart contract writing and web front-end development.</p>
        </>
      ),
      color: '#3b82f6',
      summary: 'dev',
    },
    {
      date: 'JAN 2025',
      title: 'Kuku Coin officially launched.',
      content: (
        <>
          <p>Smart contract testing and mainnet deployment.</p>

          <p>Click the button below to check the contract address.</p>
          <button className="bg-[#1d634c] hover:bg-[#1d4a3b] simple-transition md:text-md text-sm text-white px-4 py-2 rounded-md mt-4">
            <Link href={ETHERSCAN_URL}>Contract Address</Link>
          </button>
        </>
      ),
      color: '#10b981',
      summary: 'rocket',
    },
    // FIXME: 로드맵 워딩 생각하기
    {
      date: 'FEB 2025',
      title: 'Collect community feedback and improve services.',
      content: 'Gathering feedback from the community to enhance the service.',
      color: '#f59e0b',
      summary: 'users',
    },
  ]
  return (
    <div className="p-8">
      <VerticalTimeline>
        {timelines.map((data) => (
          <RoadMapTimelineElement key={data.date} {...data} />
        ))}
      </VerticalTimeline>
    </div>
  )
}

function RoadMapTimelineElement(props: TRoadMapTimeline) {
  const { date, title, content, color, summary } = props
  const Icon = () => {
    switch (summary) {
      case 'rocket':
        return <FaRocket />
      case 'exchange':
        return <FaExchangeAlt />
      case 'users':
        return <FaUsers />
      case 'dev':
        return <MdDeveloperBoard />
    }
  }
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: color, color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #f59e0b' }}
      date={date}
      iconStyle={{ background: color, color: '#fff' }}
      icon={Icon()}
    >
      <h3 className="vertical-timeline-element-title text-xl">{title}</h3>
      <p className="text-lg">{content}</p>
    </VerticalTimelineElement>
  )
}
