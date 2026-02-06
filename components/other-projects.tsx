"use client"

import Image from "next/image"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import type { Skill } from "@/components/skill-filter"
import type { ProjectDetail } from "@/components/project-modal"
import { cn } from "@/lib/utils"

type OtherProject = {
  title: string
  description: string
  skills: Skill[]
  image: string
  imageAlt: string
  githubUrl: string
  summary: string
  tags: string[]
}

const otherProjects: OtherProject[] = [
  {
    title: "Stream Sphere",
    description:
      "Welcome to Stream Sphere, a Video Streaming application, similar to Netflix, Amazon Prime, Hulu, Apple TV+ and more. It houses both an admin panel and a User panel, both with their unique set of functionalities.",
    skills: ["React", "Node.js"],
    image: "/assets/image/streamsphere.jpeg",
    imageAlt: "Stream Sphere app",
    githubUrl: "https://github.com/calicartels/StreamSphere",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    summary:
      "A full-stack Netflix-style video streaming platform built with the MERN stack. Features dual admin/user panels, content upload and management, user authentication, and a responsive video player. The admin dashboard handles content cataloging while users enjoy a familiar browsing and streaming experience.",
  },
  {
    title: "QR Code Generator",
    description:
      "A QR Code Generator that helps you generate a QR Code of various forms like URL, Email, SMS, Cryptocurrency etc. For easy & Quick transferring of data.",
    skills: ["Python", "Flask"],
    image: "/assets/image/Rickrolling_QR_code.png",
    imageAlt: "QR Code Generator",
    githubUrl: "https://github.com/calicartels/QR-code-generator",
    tags: ["Python", "Flask", "qrcode", "Pillow"],
    summary:
      "A Python Flask web app that generates QR codes for multiple data formats including URLs, emails, SMS, and cryptocurrency addresses. Uses the qrcode library with Pillow for image generation, providing a clean interface for quick data transfer through scannable codes.",
  },
  {
    title: "Productivity App",
    description:
      "Elevate your productivity with this App. Streamline tasks, stay organized, and seize the day. Your key to efficiency is just a tap away.",
    skills: ["Flutter"],
    image: "/assets/image/productivity app.jpg",
    imageAlt: "Productivity App",
    githubUrl: "https://github.com/calicartels/Productivity-app",
    tags: ["Flutter", "Dart", "SQLite"],
    summary:
      "A cross-platform mobile productivity app built with Flutter featuring task management, daily goal tracking, and organizational tools. Uses SQLite for local data persistence and Flutter's Material Design widgets for a polished, intuitive UI that helps users streamline their daily workflow.",
  },
  {
    title: "MeeTUp",
    description:
      "Experience seamless connections with MeeTUp, your go-to video calling solution. Stay connected with friends, family, and colleagues like never before.",
    skills: ["React", "Node.js", "WebRTC"],
    image: "/assets/image/Meetup.jpg",
    imageAlt: "MeeTUp app",
    githubUrl: "https://github.com/calicartels/MeeTUp",
    tags: ["React", "Node.js", "WebRTC", "Socket.io"],
    summary:
      "A peer-to-peer video calling application built with React and WebRTC for real-time communication. Uses Socket.io for signaling, enabling direct browser-to-browser video/audio streams. Features room creation, screen sharing, and a responsive interface for seamless video conferencing.",
  },
]

type ShowcaseProject = {
  title: string
  description: string
  skills: Skill[]
  image: string
  imageAlt: string
  link: string
  summary: string
  tags: string[]
}

const showcaseProjects: ShowcaseProject[] = [
  {
    title: "Data Analysis at your fingertip",
    description:
      "AutoVizML is a Streamlit based app capable of reading, preprocessing, performing Exploratory Analysis, comparing models, and visualizing data with just one click.",
    skills: ["Python", "Streamlit", "Machine Learning", "Data Science"],
    image: "/assets/image/AutoViz.jpeg",
    imageAlt: "AutoVizML",
    link: "https://github.com/calicartels/AutoVizML",
    tags: ["Python", "Streamlit", "Scikit-learn", "Plotly", "Pandas"],
    summary:
      "An automated ML and EDA tool built with Streamlit that lets users upload datasets and instantly perform data cleaning, exploratory analysis, model comparison, and interactive Plotly visualizations -- all with a single click. Supports multiple Scikit-learn classifiers and regressors with automatic hyperparameter tuning.",
  },
  {
    title: "Where Data meets India's innovation",
    description:
      "This project aims to provide valuable data-driven information for entrepreneurs, investors, and anyone interested in understanding the Indian startup scene.",
    skills: ["Python", "Data Science"],
    image: "/assets/image/Startup.jpg",
    imageAlt: "Indian Startup EDA",
    link: "https://github.com/calicartels/Indian-Startup-EDA",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    summary:
      "An exploratory data analysis project dissecting the Indian startup ecosystem using Pandas, Matplotlib, and Seaborn. Uncovers funding trends, top investors, sector-wise growth, and geographical distribution of startups through detailed visualizations and statistical analysis in Jupyter notebooks.",
  },
  {
    title: "Stock Price Dashboard",
    description:
      "Plotly Dash: Your stock market compass to navigate the high seas of trading.",
    skills: ["Python", "Dash", "Data Science"],
    image: "/assets/image/Stock.jpeg",
    imageAlt: "Stock Price Dashboard",
    link: "https://github.com/calicartels/Plotly-Dash-based-Stock-Market-Analysis",
    tags: ["Python", "Plotly Dash", "yfinance", "Pandas"],
    summary:
      "An interactive stock market analysis dashboard built with Plotly Dash that pulls real-time data via yfinance. Features candlestick charts, moving averages, volume analysis, and technical indicators with a responsive layout that lets users compare multiple tickers side by side.",
  },
]

export function OtherProjects({
  activeSkills,
  onProjectClick,
}: {
  activeSkills: Skill[]
  onProjectClick: (project: ProjectDetail) => void
}) {
  const showAll = activeSkills.includes("All")

  const handleOtherClick = (project: OtherProject) => {
    onProjectClick({
      title: project.title,
      descriptions: [project.description],
      tags: project.tags,
      image: project.image,
      imageAlt: project.imageAlt,
      githubUrl: project.githubUrl,
      summary: project.summary,
    })
  }

  const handleShowcaseClick = (project: ShowcaseProject) => {
    onProjectClick({
      title: project.title,
      descriptions: [project.description],
      tags: project.tags,
      image: project.image,
      imageAlt: project.imageAlt,
      githubUrl: project.link,
      summary: project.summary,
    })
  }

  return (
    <>
      {/* Card Grid */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-16 text-balance">
            Other Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherProjects.map((project) => {
              const isMatch =
                showAll ||
                project.skills.some((s) => activeSkills.includes(s))

              return (
                <CardContainer
                  key={project.title}
                  containerClassName={cn(
                    "py-2 transition-all duration-500",
                    !isMatch && "opacity-20 scale-[0.97] pointer-events-none"
                  )}
                >
                  <CardBody
                    className="relative group/card border border-border rounded-xl p-4 bg-background h-auto w-full cursor-pointer"
                    onClick={() => handleOtherClick(project)}
                  >
                    {/* Image */}
                    <CardItem translateZ="80" className="w-full">
                      <div className="rounded-lg overflow-hidden border border-border">
                        <div className="flex justify-end items-center px-3 py-1.5 bg-secondary/50 border-b border-border">
                          <div className="flex gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
                            <div className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                            <div className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
                          </div>
                        </div>
                        <div className="h-[140px] overflow-hidden bg-secondary">
                          <Image
                            src={project.image}
                            alt={project.imageAlt}
                            width={300}
                            height={140}
                            className="object-cover"
                            style={{ width: "100%", height: "100%" }}
                          />
                        </div>
                      </div>
                    </CardItem>

                    {/* Title */}
                    <CardItem translateZ="50" className="w-full mt-3">
                      <h3 className="text-sm font-semibold text-foreground">
                        {project.title}
                      </h3>
                    </CardItem>

                    {/* Description */}
                    <CardItem translateZ="40" className="w-full mt-1">
                      <p className="text-xs text-foreground/60 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </CardItem>

                    {/* Tap hint */}
                    <CardItem translateZ="30" className="w-full mt-2">
                      <p className="text-[10px] text-muted-foreground italic">
                        Tap to view details
                      </p>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              )
            })}
          </div>
        </div>
      </section>

      {/* Showcase Projects */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {showcaseProjects.map((project) => {
              const isMatch =
                showAll ||
                project.skills.some((s) => activeSkills.includes(s))

              return (
                <CardContainer
                  key={project.title}
                  containerClassName={cn(
                    "py-2 transition-all duration-500",
                    !isMatch && "opacity-20 scale-[0.97] pointer-events-none"
                  )}
                >
                  <CardBody
                    className="relative group/card border border-border rounded-xl p-5 bg-card h-auto w-full cursor-pointer"
                    onClick={() => handleShowcaseClick(project)}
                  >
                    {/* Image */}
                    <CardItem
                      translateZ="100"
                      rotateX={5}
                      className="w-full"
                    >
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        width={550}
                        height={350}
                        className="rounded-lg shadow-sm object-cover"
                        style={{ width: "100%", height: "200px" }}
                      />
                    </CardItem>

                    {/* Title */}
                    <CardItem translateZ="60" className="w-full mt-4">
                      <h3 className="text-base font-semibold text-foreground">
                        {project.title}
                      </h3>
                    </CardItem>

                    {/* Description */}
                    <CardItem translateZ="40" className="w-full mt-2">
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {project.description}
                      </p>
                    </CardItem>

                    {/* Tap hint */}
                    <CardItem translateZ="30" className="w-full mt-3">
                      <p className="text-xs text-muted-foreground italic">
                        Tap to view details
                      </p>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
