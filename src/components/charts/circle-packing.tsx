import { ResponsiveCirclePacking } from '@nivo/circle-packing'

import { useData } from '@/hooks/use-data'

export function CirclePacking() {
  const { characters, isLoading } = useData()

  function generateRandomHSL() {
    return `hsl(${Math.random() * 360}, 50%, 50%)`
  }

  if (isLoading) return <>Loading</>
  const data =
    characters?.data.results.map(c => ({
      name: c.name,
      comics: c.comics.available,
      color: generateRandomHSL(),
    })) || []

  return (
    <div className='h-[600px]'>
      <ResponsiveCirclePacking
        data={{ name: 'characters', children: data }}
        id='name'
        value='comics'
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        colors={{ scheme: 'nivo' }}
        childColor={{
          from: 'color',
          modifiers: [['brighter', 0.4]],
        }}
        padding={4}
        enableLabels={true}
        labelsFilter={n => 2 === n.node.depth}
        labelsSkipRadius={10}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 2]],
        }}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.5]],
        }}
        defs={[
          {
            id: 'lines',
            type: 'patternLines',
            background: 'none',
            color: 'inherit',
            rotation: -45,
            lineWidth: 5,
            spacing: 8,
          },
        ]}
        fill={[
          {
            match: {
              depth: 1,
            },
            id: 'lines',
          },
        ]}
      />
    </div>
  )
}
