import Image from "next/image"

type OtherProject = {
  title: string
  description: string
  image: string
  imageAlt: string
  githubUrl: string
}

const otherProjects: OtherProject[] = [
  {
    title: "Stream Sphere",
    description:
      "Welcome to Stream Sphere, a Video Streaming application, similar to Netflix, Amazon Prime, Hulu, Apple TV+ and more. It houses both an admin panel and a User panel, both with their unique set of functionalities.",
    image: "/assets/image/streamsphere.jpeg",
    imageAlt: "Stream Sphere app",
    githubUrl: "https://github.com/calicartels/StreamSphere",
  },
  {
    title: "QR Code Generator",
    description:
      "A QR Code Generator that helps you generate a QR Code of various forms like URL, Email, SMS, Cryptocurrency etc. For easy & Quick transferring of data.",
    image: "/assets/image/Rickrolling_QR_code.png",
    imageAlt: "QR Code Generator",
    githubUrl: "https://github.com/calicartels/QR-code-generator",
  },
  {
    title: "Productivity App",
    description:
      "Elevate your productivity with this App. Streamline tasks, stay organized, and seize the day. Your key to efficiency is just a tap away.",
    image: "/assets/image/productivity app.jpg",
    imageAlt: "Productivity App",
    githubUrl: "https://github.com/calicartels/Productivity-app",
  },
  {
    title: "MeeTUp",
    description:
      "Experience seamless connections with MeeTUp, your go-to video calling solution. Stay connected with friends, family, and colleagues like never before.",
    image: "/assets/image/Meetup.jpg",
    imageAlt: "MeeTUp app",
    githubUrl: "https://github.com/calicartels/MeeTUp",
  },
]

const showcaseProjects = [
  {
    title: "Data Analysis at your fingertip",
    description:
      "AutoVizML is a Streamlit based app capable of reading, preprocessing, performing Exploratory Analysis, comparing models, and visualizing data with just one click.",
    image: "/assets/image/AutoViz.jpeg",
    imageAlt: "AutoVizML",
    link: "https://github.com/calicartels/AutoVizML",
  },
  {
    title: "Where Data meets India's innovation",
    description:
      "This project aims to provide valuable data-driven information for entrepreneurs, investors, and anyone interested in understanding the Indian startup scene.",
    image: "/assets/image/Startup.jpg",
    imageAlt: "Indian Startup EDA",
    link: "https://github.com/calicartels/Indian-Startup-EDA",
  },
  {
    title: "Stock Price Dashboard",
    description:
      "Plotly Dash: Your stock market compass to navigate the high seas of trading.",
    image: "/assets/image/Stock.jpeg",
    imageAlt: "Stock Price Dashboard",
    link: "https://github.com/calicartels/Plotly-Dash-based-Stock-Market-Analysis",
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

export function OtherProjects() {
  return (
    <>
      {/* Card Grid */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-16 text-balance">
            Other Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((project) => (
              <a
                key={project.title}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="rounded-lg overflow-hidden shadow-sm border border-border bg-background">
                  <BrowserBar />
                  <div className="h-[160px] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      width={300}
                      height={160}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <h3 className="text-sm font-medium text-foreground">
                    {project.title}
                  </h3>
                  <i className="fa-solid fa-arrow-right-long text-xs text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Projects */}
      <section className="py-24 px-6 hidden md:block">
        <div className="max-w-5xl mx-auto space-y-24">
          {showcaseProjects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col md:flex-row gap-10 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2">
                <h3 className="text-xl font-medium text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-foreground relative after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                >
                  View Details
                  <i className="fa-solid fa-arrow-right-long text-xs" />
                </a>
              </div>
              <div className="md:w-1/2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={550}
                    height={350}
                    className="rounded-lg shadow-sm w-full h-auto"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
