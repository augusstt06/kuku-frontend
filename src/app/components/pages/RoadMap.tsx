type TRoadMapTitle = {
  title: string
}
export default function RoadMap() {
  return (
    <div className="text-white h-screen bg-red-100">
      <RoadMapTitle title="Development Roadmap" />
    </div>
  )
}

function RoadMapTitle(props: TRoadMapTitle) {
  const { title } = props
  return (
    <div className="row-flex justify-center xl:justify-start items-center">
      <h1 className="text-4xl px-16 py-4">{title}</h1>
    </div>
  )
}
