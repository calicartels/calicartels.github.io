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

/* ── AI / ML Application Projects ── */
const aiProjects: OtherProject[] = [
  {
    title: "Multimodal RAG Chatbot",
    description:
      "A retrieval-augmented generation chatbot that handles both text and image queries, embedding multimodal documents into a vector store for context-aware answers.",
    skills: ["Python", "LLM", "NLP", "Deep Learning"],
    image: "/assets/image/multimodal-rag.jpg",
    imageAlt: "Multimodal RAG Chatbot",
    githubUrl: "https://github.com/calicartels/Multimodal_RAG_Chatbot",
    tags: ["Python", "LangChain", "ChromaDB", "OpenAI", "CLIP", "Streamlit"],
    summary:
      "A multimodal RAG chatbot that processes both text and images. Documents and images are embedded via CLIP and OpenAI into ChromaDB, and LangChain orchestrates retrieval-augmented generation so the model answers queries with grounded, multi-format context.",
  },

  {
    title: "GNN Watch Market Analysis",
    description:
      "Graph Neural Network-based analysis of the luxury watch market, modeling brand-model-feature relationships as a graph to uncover pricing patterns and market dynamics.",
    skills: ["Python", "Deep Learning", "Data Science", "Machine Learning"],
    image: "/assets/image/gnn-watch.jpg",
    imageAlt: "GNN Watch Market",
    githubUrl:
      "https://github.com/calicartels/GNN-based-Watch-Market-Dataset",
    tags: ["Python", "PyTorch Geometric", "NetworkX", "Pandas", "Scikit-learn"],
    summary:
      "Models the luxury watch market as a graph with brands, models, and features as nodes. Uses PyTorch Geometric GNNs to learn embeddings that capture pricing patterns, brand relationships, and market dynamics -- outperforming tabular baselines on price prediction.",
  },
  {
    title: "ImproViz",
    description:
      "A real-time voice-to-visualization tool that converts spoken descriptions into interactive data charts and diagrams on the fly.",
    skills: ["Python", "NLP", "Data Science"],
    image: "/assets/image/improviz.jpg",
    imageAlt: "ImproViz voice visualization",
    githubUrl: "https://github.com/notthattal/improviz",
    tags: ["Python", "Whisper", "GPT-4", "Plotly", "Streamlit"],
    summary:
      "Transforms spoken descriptions into interactive Plotly visualizations in real time. Uses Whisper for speech-to-text and GPT-4 to interpret intent and generate chart code, then renders the result in a Streamlit dashboard -- turning voice into data stories instantly.",
  },
  {
    title: "Anemia Cell Detection",
    description:
      "A computer vision pipeline that segments and classifies red blood cells from microscope images to detect anemia subtypes using deep learning.",
    skills: ["Python", "Computer Vision", "Deep Learning"],
    image: "/assets/image/anemia-detection.jpg",
    imageAlt: "Anemia cell detection",
    githubUrl: "https://github.com/shaunak-badani/Computer-Vision-Project",
    tags: ["Python", "PyTorch", "OpenCV", "U-Net", "ResNet"],
    summary:
      "A deep learning pipeline for anemia detection from blood smear microscopy. Uses U-Net for cell segmentation and ResNet for classification of red blood cell morphology, enabling automated identification of anemia subtypes from slide images.",
  },
  {
    title: "XR Dyslexia-Friendly Text Detector",
    description:
      "An XR-based application that detects text in the environment and converts it to a dyslexia-friendly font (OpenDyslexic) using Google Cloud Vision API and Unity.",
    skills: ["Computer Vision", "XR / AR"],
    image: "/assets/image/xr-dyslexia.jpg",
    imageAlt: "XR Dyslexia-Friendly Text Detector",
    githubUrl:
      "https://github.com/calicartels/XR-based-Dyslexia-Friendly-Text-Detector",
    tags: ["C#", "Unity", "Google Vision API", "OpenDyslexic", "XR"],
    summary:
      "An augmented reality application that helps dyslexic users interact with text in their environment. Uses the Google Cloud Vision API to detect text from the smartphone camera feed and re-renders it in the OpenDyslexic font with animated effects, making everyday reading more accessible.",
  },
]

/* ── Notebook / Research Projects ── */
type NotebookProject = {
  title: string
  description: string
  skills: Skill[]
  image: string
  imageAlt: string
  githubUrl: string
  summary: string
  tags: string[]
}

const notebookProjects: NotebookProject[] = [
  {
    title: "Indian Sign Language Detection",
    description:
      "Published at AII2023 Dubai -- a MediaPipe + Keras pipeline that recognizes ISL alphabets from video and converts them to speech in real time.",
    skills: ["Python", "Deep Learning", "Computer Vision"],
    image: "/assets/image/indian Sign language LOGO.jpg",
    imageAlt: "Indian Sign Language Detection",
    githubUrl:
      "https://github.com/calicartels/Indian-Sign-Language-Detection",
    tags: ["Python", "OpenCV", "MediaPipe", "Keras", "gTTS"],
    summary:
      "Published at AII2023 Dubai. Builds a deep learning pipeline using MediaPipe hand landmarks and a Keras classifier to recognize Indian Sign Language alphabets from video input. Detected signs are converted to speech via gTTS, creating an accessible communication bridge.",
  },
  {
    title: "Tamil Character Recognition",
    description:
      "Published at ICCUBEA-2023 -- CatBoost classifier with Optuna tuning for Tamil handwritten character recognition using shape-based features.",
    skills: ["Python", "Machine Learning", "Computer Vision"],
    image: "/assets/image/tamil letter.jpg",
    imageAlt: "Tamil character recognition",
    githubUrl:
      "https://github.com/calicartels/Categorical-Boosting-Machine-for-Tamil-Character-Recognition-using-Shape-based-Features",
    tags: ["Python", "OpenCV", "CatBoost", "Optuna", "Scikit-learn"],
    summary:
      "Published at ICCUBEA-2023. Introduces a CatBoost classifier with Optuna hyperparameter tuning for Tamil handwritten character recognition. Extracts shape-based features using OpenCV and compares performance across multiple ML algorithms to fill the OCR gap for Tamil script.",
  },
  {
    title: "Adversarial Patches with FGSM",
    description:
      "Explores adversarial robustness by generating FGSM-based adversarial patches to fool image classifiers, and evaluates defense strategies.",
    skills: ["Python", "Deep Learning", "Computer Vision"],
    image: "/assets/image/adversarial-fgsm.jpg",
    imageAlt: "Adversarial FGSM patches",
    githubUrl:
      "https://github.com/calicartels/Adversarial-Patch-using-FSGM---Adversarial-AI",
    tags: ["Python", "PyTorch", "FGSM", "Adversarial ML"],
    summary:
      "Implements Fast Gradient Sign Method (FGSM) adversarial attacks on image classifiers. Generates adversarial patches, measures model vulnerability across epsilon values, and evaluates defense strategies including adversarial training and input preprocessing.",
  },
  {
    title: "Flow Matching Adversarial Attacks",
    description:
      "Studies adversarial attacks on flow-matching generative models, analyzing how perturbations to the learned vector field degrade generation quality.",
    skills: ["Python", "Deep Learning"],
    image: "/assets/image/flow-matching.jpg",
    imageAlt: "Flow matching adversarial attacks",
    githubUrl:
      "https://github.com/calicartels/Understanding-Flow-Matching---Adversarial-attacks",
    tags: ["Python", "PyTorch", "Flow Matching", "Adversarial ML"],
    summary:
      "Investigates adversarial vulnerabilities in flow-matching generative models. Perturbs the learned velocity field at various time steps and measures degradation in sample quality, providing insights into the robustness of continuous normalizing flows.",
  },
  {
    title: "GAM for Customer Churn",
    description:
      "Applies Generalized Additive Models to customer churn prediction, offering interpretable smooth feature effects compared to black-box alternatives.",
    skills: ["Python", "Machine Learning", "Data Science"],
    image: "/assets/image/gam-churn.jpg",
    imageAlt: "GAM customer churn",
    githubUrl:
      "https://github.com/calicartels/GAM-for-customer-churn---Interpretable_ML",
    tags: ["Python", "pyGAM", "Scikit-learn", "Pandas", "Matplotlib"],
    summary:
      "Uses Generalized Additive Models (GAMs) for customer churn prediction, providing smooth, interpretable feature-effect curves. Compares GAM performance against tree-based and linear baselines, demonstrating that interpretability need not sacrifice predictive power.",
  },
  {
    title: "Dimensionality Reduction for XAI in LLMs",
    description:
      "Visualizes high-dimensional LLM embeddings using t-SNE, UMAP, and PCA to understand how language models represent semantic structure.",
    skills: ["Python", "NLP", "LLM", "Data Science"],
    image: "/assets/image/xai-llms.jpg",
    imageAlt: "Dimensionality reduction XAI",
    githubUrl:
      "https://github.com/calicartels/Dimensionality-Reduction-and-Visualization---XAI-in-LLMs",
    tags: ["Python", "t-SNE", "UMAP", "PCA", "Sentence Transformers"],
    summary:
      "Projects high-dimensional LLM embeddings into 2D/3D space using t-SNE, UMAP, and PCA. Reveals semantic clustering patterns, layer-wise representation evolution, and inter-model differences, serving as an explainability lens into large language models.",
  },
  {
    title: "SHAP & Partial Dependence Plots",
    description:
      "Model-agnostic explainability using SHAP values and PDP to attribute feature importance and visualize marginal feature effects.",
    skills: ["Python", "Machine Learning", "Data Science"],
    image: "/assets/image/shap-pdp.jpg",
    imageAlt: "SHAP and PDP explainability",
    githubUrl:
      "https://github.com/calicartels/SHAP-and-PDP---Explainable-AI",
    tags: ["Python", "SHAP", "Scikit-learn", "Matplotlib", "Pandas"],
    summary:
      "Demonstrates model-agnostic explainability using SHAP beeswarm plots, force plots, and Partial Dependence Plots. Applies these techniques to tabular classification tasks, revealing per-feature contributions and interaction effects for tree-based and linear models.",
  },
  {
    title: "LIME Explainability",
    description:
      "Local Interpretable Model-agnostic Explanations applied to image and tabular classifiers, highlighting which input regions drive predictions.",
    skills: ["Python", "Machine Learning", "Computer Vision"],
    image: "/assets/image/lime-xai.jpg",
    imageAlt: "LIME explainability",
    githubUrl:
      "https://github.com/calicartels/LIME---Explainable-Techniques",
    tags: ["Python", "LIME", "Scikit-learn", "Keras", "Matplotlib"],
    summary:
      "Applies LIME to both image classifiers and tabular models. For images, superpixel perturbation highlights the regions driving predictions; for tabular data, feature-weight explanations reveal local decision boundaries -- making black-box models locally interpretable.",
  },
  {
    title: "iModels: Interpretable ML",
    description:
      "Benchmarks inherently interpretable models -- rule lists, decision sets, and optimal trees -- against black-box alternatives on real-world datasets.",
    skills: ["Python", "Machine Learning", "Data Science"],
    image: "/assets/image/imodels.jpg",
    imageAlt: "Interpretable ML models",
    githubUrl:
      "https://github.com/calicartels/iModels---Interpretable-Machine-Learning-Models",
    tags: ["Python", "imodels", "Scikit-learn", "Pandas"],
    summary:
      "Uses the imodels library to train and compare inherently interpretable models -- Bayesian Rule Lists, SLIM, Optimal Classification Trees -- against XGBoost and Random Forest baselines. Shows that interpretable models achieve competitive accuracy while offering transparent decision logic.",
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

  const handleClick = (project: OtherProject | NotebookProject) => {
    onProjectClick({
      title: project.title,
      descriptions: [project.description],
      tags: project.tags,
      image: project.image,
      imageAlt: project.imageAlt,
      githubUrl: project.githubUrl,
      summary: project.summary,
      skills: project.skills,
    })
  }

  return (
    <>
      {/* AI / ML Application Projects Grid */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-16 text-balance">
            Other Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiProjects.map((project) => {
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
                    onClick={() => handleClick(project)}
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
                            className="object-cover w-full h-full"
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

      {/* Notebook / Research Projects */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-16 text-balance">
            Research & Notebooks
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {notebookProjects.map((project) => {
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
                    className="relative group/card border border-border rounded-xl p-4 bg-card h-auto w-full cursor-pointer"
                    onClick={() => handleClick(project)}
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
                        <div className="h-[120px] overflow-hidden bg-secondary">
                          <Image
                            src={project.image}
                            alt={project.imageAlt}
                            width={300}
                            height={120}
                            className="object-cover w-full h-full"
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

                    {/* Tags */}
                    <CardItem translateZ="30" className="w-full mt-2">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-secondary text-foreground/70"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-secondary text-foreground/70">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
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
