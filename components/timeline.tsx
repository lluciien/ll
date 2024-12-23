import * as React from "react"

const events = [
  {
    date: '2023',
    title: 'Project Started',
    description: 'Initial development began'
  },
  {
    date: '2024',
    title: 'Major Update',
    description: 'New features and improvements'
  },
]

export function Timeline() {
  return (
    <div className="space-y-8">
      {events.map((event, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-px h-full bg-border" />
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <div className="pb-8">
            <time className="text-sm text-muted-foreground">
              {event.date}
            </time>
            <h3 className="text-lg font-semibold mt-1">
              {event.title}
            </h3>
            <p className="mt-2 text-muted-foreground">
              {event.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

