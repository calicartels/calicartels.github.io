"use client"

import { useState, useEffect, useRef } from "react"

type TimelineItem = {
  date: string
  title: string
  subtitle?: string
  details: string[]
}

const internships: TimelineItem[] = [
  {
    date: "June '24 - Aug '24",
    title: "JPMorgan Chase",
    subtitle: "Software Engineering Intern",
    details: ["Working on anti-money laundering."],
  },
  {
    date: "Dec '23 - April '24",
    title: "ProAxion Student MLE",
    subtitle: "Machine Learning Engineer",
    details: ["Created a RAG system, part of capstone project."],
  },
  {
    date: "Nov '23 - June '23",
    title: "Deakin University",
    subtitle: "Research Intern",
    details: [
      "Developed a pipeline capable of on-edge video text detection using the Google Vision API, and wrote the C# code for the wrapper capable of running on a Microsoft Hololens headset.",
      "Collaborated with Dr. William Raffe to deploy it as a scalable implementation.",
    ],
  },
  {
    date: "Aug '22 - Nov '22",
    title: "Sentics GmbH",
    subtitle: "Computer Vision Engineer",
    details: [
      "Developed an algorithm that accurately estimated the base point of an object using pose keypoint data from TRTPose and their 2D-3D correspondence, resulting in a 100% improvement in the accuracy of object location estimation.",
      "Conducted extensive research and experimentation with various object and keypoint tracking methods and presented detailed findings and recommendations to the team.",
    ],
  },
  {
    date: "May '22 - Jul '22",
    title: "Miniscule Technologies",
    subtitle: "Cloud AIOps Engineer",
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

function TimelineCard({
  item,
  index,
  isLeft,
}: {
  item: TimelineItem
  index: number
  isLeft: boolean
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    )

    const el = cardRef.current
    if (el) observer.observe(el)
    return () => {
      if (el) observer.unobserve(el)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={`relative flex items-start gap-6 md:gap-0 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Card content - on desktop it alternates sides */}
      <div
        className={`flex-1 md:w-[calc(50%-24px)] transition-all duration-700 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: `${index * 80}ms` }}
      >
        <div
          className={`rounded-xl border border-border/60 bg-background p-5 md:p-6 shadow-sm hover:shadow-md hover:border-foreground/10 transition-all duration-300 ${
            isLeft ? "md:mr-12" : "md:ml-12"
          }`}
        >
          <span className="inline-block text-xs font-medium text-muted-foreground bg-secondary/80 px-3 py-1 rounded-full mb-3">
            {item.date}
          </span>
          <h3 className="text-base font-semibold text-foreground mb-1">
            {item.title}
          </h3>
          {item.subtitle && (
            <p className="text-sm text-muted-foreground mb-3">
              {item.subtitle}
            </p>
          )}
          <ul className="space-y-2">
            {item.details.map((detail, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm text-foreground/75 leading-relaxed"
              >
                <span className="text-muted-foreground mt-1 flex-shrink-0 text-xs">
                  {"\u25CF"}
                </span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Center node - visible on desktop only */}
      <div className="hidden md:flex flex-col items-center z-10 absolute left-1/2 -translate-x-1/2 top-6">
        <div
          className={`w-3.5 h-3.5 rounded-full border-2 border-foreground bg-background transition-all duration-500 ${
            isVisible ? "scale-100" : "scale-0"
          }`}
          style={{ transitionDelay: `${index * 80 + 100}ms` }}
        />
      </div>

      {/* Empty spacer for opposite side - desktop only */}
      <div className="hidden md:block flex-1 md:w-[calc(50%-24px)]" />
    </div>
  )
}

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"internships" | "research">(
    "internships"
  )
  const lineRef = useRef<HTMLDivElement>(null)
  const [lineHeight, setLineHeight] = useState(0)

  const data = activeTab === "internships" ? internships : research

  useEffect(() => {
    setLineHeight(0)
    const timer = setTimeout(() => {
      if (lineRef.current) {
        setLineHeight(lineRef.current.scrollHeight)
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [activeTab])

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-2 text-balance">
          My Experience
        </h2>
        <div className="w-12 h-[2px] bg-foreground mb-10" />

        {/* Tabs */}
        <div className="flex gap-0 mb-12 border-b border-border relative">
          <button
            onClick={() => setActiveTab("internships")}
            className={`px-6 py-3 text-sm font-medium transition-colors relative ${
              activeTab === "internships"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Internships
            {activeTab === "internships" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground transition-all" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("research")}
            className={`px-6 py-3 text-sm font-medium transition-colors relative ${
              activeTab === "research"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Research
            {activeTab === "research" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground transition-all" />
            )}
          </button>
        </div>

        {/* Vertical Timeline */}
        <div ref={lineRef} className="relative">
          {/* Animated vertical line - desktop only */}
          <div className="hidden md:block absolute left-1/2 -translate-x-[0.5px] top-0 w-[1px] bg-border overflow-hidden">
            <div
              className="w-full bg-foreground/30 transition-all duration-1000 ease-out"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Mobile vertical line */}
          <div className="md:hidden absolute left-[7px] top-0 bottom-0 w-[1px] bg-border" />

          <div className="flex flex-col gap-10 md:gap-12">
            {data.map((item, index) => (
              <div key={`${activeTab}-${index}`} className="relative">
                {/* Mobile node */}
                <div className="md:hidden absolute left-0 top-6 w-[15px] h-[15px] rounded-full border-2 border-foreground bg-background z-10" />
                <div className="pl-8 md:pl-0">
                  <TimelineCard
                    item={item}
                    index={index}
                    isLeft={index % 2 === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
