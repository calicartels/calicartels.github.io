"use client"

import { useState } from "react"

type TimelineItem = {
  date: string
  title: string
  details: string[]
}

const internships: TimelineItem[] = [
  {
    date: "June '24 - Aug '24",
    title: "JPMorgan Chase",
    details: ["Working on anti-money laundering."],
  },
  {
    date: "Dec '23 - April '24",
    title: "ProAxion Student MLE",
    details: ["Created a RAG system, part of capstone project."],
  },
  {
    date: "Nov '23 - June '23",
    title: "Deakin University",
    details: [
      "Developed a pipeline capable of on-edge video text detection using the Google Vision API, and wrote the C# code for the wrapper capable of running on a Microsoft Hololens headset.",
      "Collaborated with Dr. William Raffe to deploy it as a scalable implementation.",
    ],
  },
  {
    date: "Aug '22 - Nov '22",
    title: "Sentics GmbH",
    details: [
      "Developed an algorithm that accurately estimated the base point of an object using pose keypoint data from TRTPose and their 2D-3D correspondence, resulting in a 100% improvement in the accuracy of object location estimation.",
      "Conducted extensive research and experimentation with various object and keypoint tracking methods and presented detailed findings and recommendations to the team.",
    ],
  },
  {
    date: "May '22 - Jul '22",
    title: "Miniscule Technologies",
    details: [
      "Cloud AIOps Engineer, performing extensive research on evaluating major Cloud Service Providers and their readiness for industrial 5G use-cases.",
      "Deployed an on-edge custom face detection model using Amazon Rekognition, trained on employee data stored on Amazon S3 with an accuracy of 88%.",
      "Platform and hardware's used: AWS Cloud, Hikvision AcuSense camera.",
    ],
  },
]

const research: TimelineItem[] = [
  {
    date: "Dec '23 - Present",
    title: "Adversarial attack on Flow matching",
    details: [
      "Working on adversarial attack techniques for Flow matching models.",
    ],
  },
  {
    date: "May '23 - July '23",
    title: "Handwritten Arabic Character Recognition",
    details: [
      "Classification of Arabic Handwritten character recognition by detecting discrete orthonormal Stockwell transform points in the image data and reducing their dimensionality using PCA.",
      "Research accepted at International Journal of Computational Vision and Robotics, Inderscience Journal.",
      "Done in collaboration with an exchange student from Esprit, Tunis, Tunisia.",
    ],
  },
  {
    date: "Dec '22 - June '23",
    title: "A Media-pipe Integrated DL Model for ISL Recognition",
    details: [
      "Crafted a novel deep learning-based vision application used for Indian sign-language recognition.",
      "Developed a model which automatically segments the frames from videos and sends it to a custom CNN model that classified the texts and returned the output as voice.",
      "Part 1 of an ongoing research to deploy an edge-based solution.",
    ],
  },
  {
    date: "Jan '22 - June '23",
    title: "Handwritten Tamil Character Recognition",
    details: [
      "Developed two iterations: a preliminary model fitted into a CatBoost classifier presented at IEEE conference, ICCUBEA-2023, Pune, India.",
      "Created an updated version with improved feature detection and contour segmentation fitted into a LightGBM Classifier, accepted for publication under Pattern Recognition and Image Analysis.",
    ],
  },
]

function TimelineEntry({
  item,
  index,
  expandedIndex,
  onToggle,
}: {
  item: TimelineItem
  index: number
  expandedIndex: number | null
  onToggle: (i: number) => void
}) {
  const isExpanded = expandedIndex === index
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      {/* Line */}
      <div className="absolute left-[7px] top-2 bottom-0 w-[1px] bg-border" />
      {/* Dot */}
      <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-foreground bg-background" />

      <div className="text-xs text-muted-foreground font-medium mb-1">
        {item.date}
      </div>
      <button
        onClick={() => onToggle(index)}
        className="flex items-center gap-2 text-left w-full group"
        aria-expanded={isExpanded}
      >
        <h3 className="text-base font-medium text-foreground group-hover:text-foreground/80 transition-colors">
          {item.title}
        </h3>
        <span className="text-muted-foreground text-lg leading-none flex-shrink-0">
          {isExpanded ? "\u2212" : "+"}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-2 text-sm text-foreground/80 leading-relaxed">
          {item.details.map((detail, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-muted-foreground mt-1 flex-shrink-0">
                &bull;
              </span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"internships" | "research">(
    "internships"
  )
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const data = activeTab === "internships" ? internships : research

  function handleToggle(index: number) {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-2 text-balance">
          My Experience
        </h2>
        <div className="w-12 h-[2px] bg-foreground mb-10" />

        {/* Tabs */}
        <div className="flex gap-0 mb-10 border-b border-border relative">
          <button
            onClick={() => {
              setActiveTab("internships")
              setExpandedIndex(null)
            }}
            className={`px-6 py-3 text-sm font-medium transition-colors relative ${
              activeTab === "internships"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Internships
            {activeTab === "internships" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground" />
            )}
          </button>
          <button
            onClick={() => {
              setActiveTab("research")
              setExpandedIndex(null)
            }}
            className={`px-6 py-3 text-sm font-medium transition-colors relative ${
              activeTab === "research"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Research
            {activeTab === "research" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground" />
            )}
          </button>
        </div>

        {/* Timeline */}
        <div>
          {data.map((item, index) => (
            <TimelineEntry
              key={`${activeTab}-${index}`}
              item={item}
              index={index}
              expandedIndex={expandedIndex}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
