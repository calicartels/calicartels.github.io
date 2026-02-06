import Image from "next/image"

type Project = {
  number: string
  title: string
  descriptions: string[]
  tags: string[]
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
    githubUrl:
      "https://github.com/calicartels/Support-Vector-Machine-for-Arabic-Handwritten-Character-Recognition-using-DOST-PCA-Features",
    image: "/assets/image/arabic.png",
    imageAlt: "Arabic character recognition",
  },
]

function BrowserBar() {
  return (
    <div className="flex justify-end items-center px-3 py-2 bg-secondary/50 border-b border-border rounded-t-lg">
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
        <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
        <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
      </div>
    </div>
  )
}

export function FeaturedProjects() {
  return (
    <section id="featured-projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-16 text-balance">
          {"Things I've Developed"}
        </h2>

        <div className="space-y-20">
          {projects.map((project) => (
            <div
              key={project.number}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              {/* Image */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-1/2 w-full flex-shrink-0"
              >
                <div className="rounded-lg overflow-hidden shadow-sm border border-border group">
                  <BrowserBar />
                  <div className="h-[220px] overflow-hidden bg-secondary">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      width={550}
                      height={220}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </a>

              {/* Content */}
              <div className="md:w-1/2">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                  {"project \u2014 "}
                  {project.number}
                </p>
                <h3 className="text-xl font-normal text-foreground tracking-wide lowercase mb-3">
                  {project.title}
                </h3>
                {project.descriptions.map((desc, i) => (
                  <p
                    key={i}
                    className="text-sm text-foreground/80 leading-relaxed mb-2"
                  >
                    {desc}
                  </p>
                ))}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-foreground relative after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                >
                  GitHub
                  <i className="fas fa-angle-right text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
