"use client"

import Image from "next/image"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import type { Skill } from "@/components/skill-filter"
import type { ProjectDetail } from "@/components/project-modal"
import { cn } from "@/lib/utils"

type FeaturedProject = {
  number: string
  title: string
  descriptions: string[]
  tags: string[]
  skills: Skill[]
  githubUrl: string
  image: string
  imageAlt: string
  summary: string
}

const projects: FeaturedProject[] = [
  {
    number: "00",
    title: "PicoChat",
    descriptions: [
      "Implementing inference optimizations for Large Language Models using Karpathy's nanochat as the base. Built a working distillation pipeline with MQA, multi-token prediction heads, speculative decoding, structured pruning, and INT8 quantization.",
      "Trained a 375M parameter student model from a 2B teacher on a single A100 for under $10. Achieved 70.7% model compression (1.2GB to 363MB) via INT8 quantization while keeping the full inference pipeline production-ready.",
    ],
    tags: ["Python", "PyTorch", "CUDA", "Vast.ai", "Hugging Face", "WandB"],
    skills: ["Python", "Deep Learning", "LLM"],
    githubUrl: "https://github.com/calicartels/PicoChat",
    image: "/assets/image/picochat.jpg",
    imageAlt: "PicoChat LLM distillation",
    summary:
      "A sub-$10 LLM distillation and inference optimization project built on Karpathy's nanochat. Implements Multi-Query Attention, multi-token prediction, speculative decoding with a draft head, structured pruning, and INT8 quantization. Trained a 375M-param student from a 2B teacher on a single A100, compressing the model by 70.7% while keeping the pipeline production-ready.",
  },
  {
    number: "01",
    title: "PersonaPlex Voice Diarization",
    descriptions: [
      "A speaker diarization system that identifies and segments different speakers in audio recordings, enabling per-speaker analysis and transcription.",
      "Combines state-of-the-art voice activity detection with embedding-based clustering to accurately separate overlapping speakers in real-world audio.",
    ],
    tags: ["Python", "PyTorch", "Whisper", "pyannote", "HuggingFace"],
    skills: ["Python", "Deep Learning", "NLP"],
    githubUrl:
      "https://github.com/calicartels/PersonaPlex-Voice-Diarization",
    image: "/assets/image/personaplex.jpg",
    imageAlt: "PersonaPlex voice diarization",
    summary:
      "A speaker diarization pipeline using pyannote and Whisper to identify, segment, and transcribe individual speakers from audio. Leverages voice activity detection and neural embedding clustering to handle overlapping speech and produce per-speaker transcripts.",
  },
  {
    number: "02",
    title: "Duke Agentic Chatbot",
    descriptions: [
      "A dual-implementation agentic chatbot for Duke University: one built from scratch with Flask, LangGraph, and Gemini, and another using Google Cloud Conversational Agents.",
      "Features a structured agentic workflow -- Planning, Tool Execution, Thinking, and Evaluation -- querying Duke Events API, Google Custom Search, and program-specific data sources.",
    ],
    tags: [
      "Python",
      "Flask",
      "React",
      "LangGraph",
      "Gemini",
      "GCP",
      "Tailwind",
    ],
    skills: ["Python", "LLM", "NLP"],
    githubUrl: "https://github.com/calicartels/Agentic-Chatbot--Duke-Themed",
    image: "/assets/image/duke-chatbot.jpg",
    imageAlt: "Duke Agentic Chatbot",
    summary:
      "A dual-approach agentic chatbot for Duke University. The custom version uses Flask + LangGraph + Gemini with a Planning-Execution-Thinking-Evaluation workflow, querying Duke APIs and Google Custom Search. The second version uses Google Cloud Conversational Agents for rapid deployment. Both are cloud-hosted on GCP.",
  },
  {
    number: "03",
    title: "RAG Evaluation Framework",
    descriptions: [
      "A comprehensive evaluation framework for Retrieval-Augmented Generation systems, benchmarking retrieval quality, generation faithfulness, and end-to-end performance.",
      "Uses RAGAS metrics across different embedding models and chunk strategies, providing actionable insights for RAG pipeline optimization.",
    ],
    tags: ["Python", "LangChain", "RAGAS", "Sentence Transformers", "FAISS"],
    skills: ["Python", "NLP", "LLM"],
    githubUrl: "https://github.com/shaunak-badani/NLP_Project",
    image: "/assets/image/rag-eval.jpg",
    imageAlt: "RAG Evaluation Framework",
    summary:
      "An end-to-end evaluation framework for RAG systems. Benchmarks retrieval precision, generation faithfulness, and answer relevancy using RAGAS metrics across different embedding models and chunk strategies, providing actionable insights for RAG pipeline optimization.",
  },
  {
    number: "04",
    title: "HyperExplainer",
    descriptions: [
      "A Chrome extension that uses AI to explain hyperparameters in ML code. Hover over any parameter to see an interactive explanation with visualizations.",
      "Powered by OpenAI and D3.js, it helps practitioners understand tuning implications in context without leaving their browser.",
    ],
    tags: ["JavaScript", "Chrome Extension", "OpenAI", "D3.js"],
    skills: ["Python", "Machine Learning", "Deep Learning"],
    githubUrl: "https://github.com/calicartels/HyperExplainer",
    image: "/assets/image/hyperexplainer.jpg",
    imageAlt: "HyperExplainer Chrome extension",
    summary:
      "A Chrome extension that detects hyperparameters in ML code on the web and overlays interactive AI-generated explanations with D3.js visualizations. Powered by OpenAI, it helps practitioners understand tuning implications in context without leaving their browser.",
  },
  {
    number: "05",
    title: "ProAxion Industrial Chatbot",
    descriptions: [
      "A capstone project building an industrial IoT chatbot for ProAxion, enabling natural-language queries against machine health and maintenance data.",
      "Integrates with ProAxion's sensor platform to provide real-time equipment status, predictive maintenance insights, and historical trend analysis through a conversational interface.",
    ],
    tags: ["Python", "LangChain", "OpenAI", "Flask", "IoT", "RAG"],
    skills: ["Python", "LLM", "NLP"],
    githubUrl: "https://github.com/calicartels/Capstone---ProAxion-Chatbot",
    image: "/assets/image/proaxion.jpg",
    imageAlt: "ProAxion Industrial Chatbot",
    summary:
      "A capstone project building a conversational AI interface for ProAxion's industrial IoT platform. Uses LangChain and RAG to let maintenance teams query machine health data, predictive alerts, and historical trends in natural language. Backed by a Flask API connected to ProAxion's sensor infrastructure.",
  },
  {
    number: "06",
    title: "Blind.Ai",
    descriptions: [
      "An app to make the lives of visually impaired people a little more ordinary, powered by Flutter, Python, Twilio, and Flask.",
      "Offers an intuitive UI facilitating key features: SOS emergency alerts, real-time object detection, currency recognition, and text-to-speech OCR -- all accessible with minimal effort.",
    ],
    tags: [
      "Python",
      "Flutter",
      "Twilio",
      "PythonAnywhere",
      "YOLOv5",
      "Pytesseract",
    ],
    skills: ["Python", "Computer Vision", "Deep Learning"],
    githubUrl: "https://github.com/calicartels/blind.ai",
    image: "/assets/image/blind-ai.jpg",
    imageAlt: "Blind.ai app logo",
    summary:
      "A Flutter mobile app empowering visually impaired users with AI-powered features: real-time object detection via YOLOv5, currency recognition, text-to-speech OCR with Pytesseract, and an SOS emergency system through Twilio. The Flask backend handles inference and is deployed on PythonAnywhere.",
  },
  {
    number: "07",
    title: "LLMTalk",
    descriptions: [
      "A Streamlit-based application that lets you chat with your audio files, powered by LangChain, ChromaDB, and OpenAI.",
      "Chat with any YouTube video by inputting the URL -- the pipeline extracts the transcript and feeds it into GPT-4 for context-aware Q&A.",
    ],
    tags: [
      "Streamlit",
      "GPT-4",
      "Python",
      "ChromaDB",
      "LangChain",
      "AssemblyAI",
    ],
    skills: ["Python", "LLM", "NLP"],
    githubUrl: "https://github.com/calicartels/LLMTalk",
    image: "/assets/image/llmtalk.jpg",
    imageAlt: "LLMTalk logo",
    summary:
      "A conversational AI app built with Streamlit and LangChain that lets you chat with audio files or YouTube videos. Audio is transcribed via AssemblyAI, embedded into ChromaDB as vectors, and GPT-4 answers questions against the transcript context using retrieval-augmented generation.",
  },
]

export function FeaturedProjects({
  activeSkills,
  onProjectClick,
}: {
  activeSkills: Skill[]
  onProjectClick: (project: ProjectDetail) => void
}) {
  const showAll = activeSkills.includes("All")

  const handleCardClick = (project: FeaturedProject) => {
    onProjectClick({
      title: project.title,
      descriptions: project.descriptions,
      tags: project.tags,
      image: project.image,
      imageAlt: project.imageAlt,
      githubUrl: project.githubUrl,
      summary: project.summary,
      skills: project.skills,
    })
  }

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
                <CardBody
                  className="relative group/card border border-border rounded-xl p-6 bg-card h-auto w-full cursor-pointer"
                  onClick={() => handleCardClick(project)}
                >
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
                          className="object-cover w-full h-full"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    </div>
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

                  {/* Tap hint */}
                  <CardItem translateZ="40" className="w-full mt-4">
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
  )
}
