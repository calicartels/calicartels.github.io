"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react"

type TimelineItem = {
  date: string
  title: string
  subtitle?: string
  details: string[]
  url?: string
}

const internships: TimelineItem[] = [
  {
    date: "Aug '25 - Present",
    title: "TRUST Lab Duke DeepTech",
    subtitle: "Lead AI Developer",
    url: "https://www.duketrustlab.com/",
    details: [
      "Developed voice-based liaison agents as part of a research project in collaboration with OpenAI to explore how voice-based, conversational LLM agents can function as 'research translators' in interdisciplinary collaborations.",
      "Orchestrated low-latency (800ms) text-to-speech agents using OpenAI Whisper, leveraging an orchestrator-worker workflow and agent memory for real-time information retrieval.",
    ],
  },
  {
    date: "Jun '25 - Aug '25",
    title: "JPMorgan Chase & Co.",
    subtitle: "AI/ML Associate Intern",
    url: "https://www.jpmorganchase.com/",
    details: [
      "Led automation of SAR Narrative generation using AWS Bedrock, cutting costs by $50,000 and reducing production time by 90% through prompt engineering.",
      "Built a SHAP Explainer Model to provide explanations to outputs for combating anti-money laundering.",
    ],
  },
  {
    date: "Dec '23 - Apr '24",
    title: "ProAxion",
    subtitle: "Student Machine Learning Engineer",
    url: "https://proaxion.io/",
    details: [
      "Built an industrial IoT chatbot enabling natural-language queries against machine health and maintenance data.",
      "Integrated with ProAxion's sensor platform for real-time equipment status and predictive maintenance insights.",
    ],
  },
  {
    date: "Nov '23 - Jun '23",
    title: "Deakin University",
    subtitle: "Research Intern",
    url: "https://experts.deakin.edu.au/",
    details: [
      "Developed a pipeline capable of on-edge video text detection using the Google Vision API, and wrote the C# code for the wrapper capable of running on a Microsoft Hololens headset.",
      "Collaborated with Dr. William Raffe to deploy it as a scalable implementation.",
    ],
  },
  {
    date: "Aug '22 - Nov '22",
    title: "Sentics GmbH",
    subtitle: "Computer Vision Engineer",
    url: "https://www.sentics.de/en/",
    details: [
      "Engineered an algorithm that accurately estimated the base point of an object using pose keypoint data from TRTPose and 2D-3D correspondence, resulting in a 100% improvement in object location estimation accuracy.",
      "Conducted extensive research and experimentation with various object and keypoint tracking methods to evaluate performance trade-offs.",
    ],
  },
  {
    date: "May '22 - Jul '22",
    title: "Miniscule Technologies",
    subtitle: "Cloud AIOps Engineer",
    url: "https://www.minusculetechnologies.com/",
    details: [
      "Performed extensive research on evaluating major cloud service providers and their readiness for industrial 5G use cases.",
      "Deployed an on-edge custom face detection model through Amazon Rekognition trained on employee data stored on Amazon S3, achieving an accuracy of 88% on the Hikvision AcuSense camera module.",
    ],
  },
]

const research: TimelineItem[] = [
  {
    date: "Dec '23 - Dec '25",
    title: "Adversarial attack on Flow matching",
    details: [
      "Studied adversarial attacks on flow-matching generative models, analyzing how perturbations to the learned vector field degrade generation quality.",
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

function TimelineNode({ index, isVisible }: { index: number; isVisible: boolean }) {
  return (
    <div className="hidden md:flex flex-col items-center z-10 absolute left-1/2 -translate-x-1/2 top-6">
      <motion.div
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: index * 0.08 + 0.1, duration: 0.4, type: "spring", stiffness: 260, damping: 20 }}
      >
        <div className="w-3.5 h-3.5 rounded-full border-2 border-foreground bg-background" />
      </motion.div>
    </div>
  )
}

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
  const isInView = useInView(cardRef, { once: true, margin: "-60px" })
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-4, 4])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }, [mouseX, mouseY])

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }, [mouseX, mouseY])

  return (
    <div
      ref={cardRef}
      className={`relative flex items-start gap-6 md:gap-0 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Card content */}
      <div className={`flex-1 md:w-[calc(50%-24px)]`}>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{
            delay: index * 0.1,
            duration: 0.6,
            ease: [0.23, 1, 0.32, 1],
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: isHovered ? rotateX : 0,
            rotateY: isHovered ? rotateY : 0,
            transformPerspective: 800,
          }}
          className={`rounded-xl border border-border/60 bg-background p-5 md:p-6 transition-shadow duration-300 cursor-default ${
            isLeft ? "md:mr-12" : "md:ml-12"
          } ${isHovered ? "shadow-lg shadow-foreground/5 border-foreground/15" : "shadow-sm"}`}
        >
          {/* Hover spotlight effect */}
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute w-[200px] h-[200px] rounded-full"
              style={{
                background: "radial-gradient(circle, hsl(var(--foreground) / 0.06) 0%, transparent 70%)",
                x: useTransform(smoothX, [-0.5, 0.5], [-100, 300]),
                y: useTransform(smoothY, [-0.5, 0.5], [-100, 200]),
              }}
            />
          </motion.div>

          <div className="relative z-10">
            <motion.span
              className="inline-block text-xs font-medium text-muted-foreground bg-secondary/80 px-3 py-1 rounded-full mb-3"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 + 0.15, duration: 0.4 }}
            >
              {item.date}
            </motion.span>
            <motion.h3
              className="text-base font-semibold text-foreground mb-1"
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
            >
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground transition-colors group/link"
                >
                  {item.title}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-40 group-hover/link:opacity-100 transition-opacity flex-shrink-0 -translate-y-px"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              ) : (
                item.title
              )}
            </motion.h3>
            {item.subtitle && (
              <motion.p
                className="text-sm text-muted-foreground mb-3"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.25, duration: 0.4 }}
              >
                {item.subtitle}
              </motion.p>
            )}
            <ul className="space-y-2">
              {item.details.map((detail, i) => (
                <motion.li
                  key={i}
                  className="flex gap-2 text-sm text-foreground/75 leading-relaxed"
                  initial={{ opacity: 0, y: 6 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.3 + i * 0.08, duration: 0.4 }}
                >
                  <span className="text-muted-foreground mt-1 flex-shrink-0 text-xs">
                    {"\u25CF"}
                  </span>
                  <span>{detail}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Center node */}
      <TimelineNode index={index} isVisible={isInView} />

      {/* Spacer */}
      <div className="hidden md:block flex-1 md:w-[calc(50%-24px)]" />
    </div>
  )
}

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"internships" | "research">("internships")
  const timelineRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const data = activeTab === "internships" ? internships : research

  useEffect(() => {
    setScrollProgress(0)

    const handleScroll = () => {
      if (!timelineRef.current) return
      const rect = timelineRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const totalHeight = rect.height

      const scrolled = windowHeight - rect.top
      const progress = Math.min(100, Math.max(0, (scrolled / (totalHeight + windowHeight * 0.3)) * 100))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeTab])

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-normal text-foreground mb-2 text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Experience
        </motion.h2>
        <motion.div
          className="w-12 h-[2px] bg-foreground mb-10"
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        {/* Tabs */}
        <div className="flex gap-0 mb-12 border-b border-border relative">
          {(["internships", "research"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-medium transition-colors relative capitalize ${
                activeTab === tab
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.span
                  layoutId="experience-tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Vertical Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Simple black line - desktop only */}
          <div className="hidden md:block absolute left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-[1px]">
            <div className="absolute inset-0 bg-border" />
            <div
              className="absolute top-0 left-0 right-0 bg-foreground transition-[height] duration-300 ease-out"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          {/* Mobile line */}
          <div className="md:hidden absolute left-[7px] top-0 bottom-0 w-[1px] bg-border">
            <div
              className="w-full bg-foreground transition-[height] duration-300 ease-out"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          <div className="flex flex-col gap-10 md:gap-14">
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
