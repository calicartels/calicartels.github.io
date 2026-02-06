"use client"

import Image from "next/image"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import type { Skill } from "@/components/skill-filter"
import { cn } from "@/lib/utils"

type Project = {
  number: string
  title: string
  descriptions: string[]
  tags: string[]
  skills: Skill[]
  githubUrl: string
  image: string
  imageAlt: string
}

const projects: Project[] = [
  {
    number: "00",
    title: "Blind.Ai",
    descriptions: [
      "Blind.ai, An app to make the lives of visually impaired people a little more ordinary, powered by Flutter, Python, Twilio and Flask.",
      "The app offers an intuitive UI which facilitates the user to access the key features: SOS, Object detection, Currency detection and Read text, without much effort.",
    ],
    tags: [
      "Python",
      "Flutter",
      "Twilio",
      "PythonAnywhere",
      "YoloV5",
      "Pytesseract",
      "Heroku",
    ],
    skills: ["Python", "Flutter", "Flask", "Computer Vision", "Deep Learning"],
    githubUrl: "https://github.com/calicartels/blind.ai",
    image: "/assets/image/Blind_Ai Logo 2.png",
    imageAlt: "Blind.ai app logo",
  },
  {
    number: "01",
    title: "Tamil Character Recognition",
    descriptions: [
      "This is the Code for the paper presented at the 7th International Conference on Computing, Communication, Control and Automation (ICCUBEA-2023), Pune, India.",
      "The research aims to address the gap in OCR technology for Tamil characters and provide a comparative analysis of existing OCR studies across different languages and algorithms.",
    ],
    tags: ["Python", "OpenCv", "CatBoost", "Optuna"],
    skills: ["Python", "Machine Learning", "Computer Vision"],
    githubUrl:
      "https://github.com/calicartels/Categorical-Boosting-Machine-for-Tamil-Character-Recognition-using-Shape-based-Features",
    image: "/assets/image/tamil letter.jpg",
    imageAlt: "Tamil character recognition",
  },
  {
    number: "02",
    title: "Indian Sign Language Detection",
    descriptions: [
      'Code for the conference paper titled "A Media-pipe integrated deep learning model for ISL (Alphabet) recognition and converting Text to Speech with Video Input", published at the 3rd International Conference on Applied Intelligence and Informatics (AII2023), Dubai, UAE.',
      "Our proposed methodology aims at indian sign language recognition using a novel pipeline.",
    ],
    tags: ["Python", "OpenCV", "GTTS", "Keras"],
    skills: ["Python", "Deep Learning", "Computer Vision"],
    githubUrl:
      "https://github.com/calicartels/Indian-Sign-Language-Detection",
    image: "/assets/image/indian Sign language LOGO.jpg",
    imageAlt: "Indian Sign Language Detection",
  },
  {
    number: "03",
    title: "LLMTalk",
    descriptions: [
      "A Streamlit based application that helps you chat with your audio file, powered by Langchain, ChromaDB, and OpenAI.",
      "Used to chat with any YouTube Video by inputting the URL into a pipeline that extracts the video transcript and feeds it into GPT-4.",
    ],
    tags: [
      "Streamlit",
      "GPT-4",
      "Python",
      "Vector DB",
      "Langchain",
      "Assembly AI",
    ],
    skills: ["Python", "Streamlit", "LLM", "NLP"],
    githubUrl: "https://github.com/calicartels/LLMTalk",
    image: "/assets/image/LLMtalk Logo.jpeg",
    imageAlt: "LLMTalk logo",
  },
  {
    number: "04",
    title: "UFC Fight Prediction Matrix",
    descriptions: [
      "An app that predicts the outcome of a UFC fight by analyzing Fighter performances.",
    ],
    tags: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Flask",
      "HTML",
      "CSS",
    ],
    skills: ["Python", "Machine Learning", "Flask", "Data Science"],
    githubUrl:
      "https://github.com/calicartels/UFC-fight-prediction-matrix",
    image: "/assets/image/UFC.jpg",
    imageAlt: "UFC fight prediction",
  },
  {
    number: "05",
    title: "SVM for Arabic Handwritten Character Recognition",
    descriptions: [
      "Support Vector Machine for Arabic Handwritten Character Recognition using DOST-PCA Features without Hyperparameter optimization.",
    ],
    tags: ["OpenCV", "Keras", "Numpy", "pywt"],
    skills: ["Python", "Machine Learning", "Computer Vision", "Deep Learning"],
    githubUrl:
      "https://github.com/calicartels/Support-Vector-Machine-for-Arabic-Handwritten-Character-Recognition-using-DOST-PCA-Features",
    image: "/assets/image/arabic.png",
    imageAlt: "Arabic character recognition",
  },
]

export function FeaturedProjects({ activeSkills }: { activeSkills: Skill[] }) {
  const showAll = activeSkills.includes("All")

  return (
    <section id="featured-projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-16 text-balance">
          {"Things I've Developed"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {projects.map((project) => {
            const isMatch =
              showAll ||
              project.skills.some((s) => activeSkills.includes(s))

            return (
              <CardContainer
                key={project.number}
                containerClassName={cn(
                  "py-4 transition-all duration-500",
                  !isMatch && "opacity-20 scale-[0.97] pointer-events-none"
                )}
              >
                <CardBody className="relative group/card border border-border rounded-xl p-6 bg-card h-auto w-full">
                  {/* Project Number */}
                  <CardItem translateZ="50" className="w-full">
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                      {"project \u2014 "}
                      {project.number}
                    </p>
                    <h3 className="text-xl font-semibold text-foreground tracking-wide mb-3">
                      {project.title}
                    </h3>
                  </CardItem>

                  {/* Image */}
                  <CardItem translateZ="100" rotateX={5} className="w-full mt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="rounded-lg overflow-hidden border border-border shadow-sm">
                        <div className="flex justify-end items-center px-3 py-2 bg-secondary/50 border-b border-border">
                          <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                            <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                            <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                          </div>
                        </div>
                        <div className="h-[180px] overflow-hidden bg-secondary">
                          <Image
                            src={project.image}
                            alt={project.imageAlt}
                            width={550}
                            height={180}
                            className="object-cover"
                            style={{ width: "100%", height: "100%" }}
                          />
                        </div>
                      </div>
                    </a>
                  </CardItem>

                  {/* Description */}
                  <CardItem translateZ="60" className="w-full mt-4">
                    {project.descriptions.map((desc, i) => (
                      <p
                        key={i}
                        className="text-sm text-foreground/70 leading-relaxed mb-2 line-clamp-3"
                      >
                        {desc}
                      </p>
                    ))}
                  </CardItem>

                  {/* Tags */}
                  <CardItem translateZ="80" className="w-full mt-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardItem>

                  {/* GitHub link */}
                  <CardItem
                    as="a"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    translateZ="120"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg bg-foreground text-background"
                  >
                    View on GitHub
                    <i className="fas fa-angle-right text-xs" />
                  </CardItem>
                </CardBody>
              </CardContainer>
            )
          })}
        </div>
      </div>
    </section>
  )
}
