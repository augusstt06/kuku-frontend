'use client'

import 'react-vertical-timeline-component/style.min.css'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

import {
  FaExchangeAlt,
  // FaProjectDiagram,
  FaRocket,
  FaUsers,
} from 'react-icons/fa'

type Props = {
  roadmapRef: React.RefObject<HTMLDivElement>
}
type TRoadMapTitle = {
  title: string
}
type TRoadMapTimeline = {
  date: string
  title: string
  content: string
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
  // FIXME: 타임라인 추가하기
  const timelines = [
    {
      date: 'DEC 2024',
      title: 'Kuku Coin development based on solidity',
      content: 'Developing a website to introduce Kuku Coin',
      color: '#3b82f6',
      summary: 'rocket',
    },
    {
      date: 'JAN 2025',
      title: 'Launch of Kuku Coin Website and Initial Community Building.',
      content: 'DEX listing and airdrop event',
      color: '#10b981',
      summary: 'exchange',
    },
    // FIXME: 로드맵 워딩 생각하기
    {
      date: 'FEB 2025',
      title: 'Enhancement of user base and expansion',
      content:
        'Listing on a centralized exchange and release of NFT collection',
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
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <p className="text-lg">{content}</p>
    </VerticalTimelineElement>
  )
}
