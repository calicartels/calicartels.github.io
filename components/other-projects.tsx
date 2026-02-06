import Image from "next/image"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"

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

export function OtherProjects() {
  return (
    <>
      {/* Card Grid */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-16 text-balance">
            Other Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherProjects.map((project) => (
              <CardContainer
                key={project.title}
                containerClassName="py-2"
              >
                <CardBody className="relative group/card border border-border rounded-xl p-4 bg-background h-auto w-full">
                  {/* Image */}
                  <CardItem
                    translateZ="80"
                    className="w-full"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                    </a>
                  </CardItem>

                  {/* Title */}
                  <CardItem
                    translateZ="50"
                    className="w-full mt-3"
                  >
                    <h3 className="text-sm font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </CardItem>

                  {/* Description */}
                  <CardItem
                    translateZ="40"
                    className="w-full mt-1"
                  >
                    <p className="text-xs text-foreground/60 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </CardItem>

                  {/* Link */}
                  <CardItem
                    as="a"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    translateZ="100"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md bg-foreground text-background"
                  >
                    View Project
                    <i className="fa-solid fa-arrow-right-long text-[10px]" />
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Projects */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {showcaseProjects.map((project) => (
              <CardContainer
                key={project.title}
                containerClassName="py-2"
              >
                <CardBody className="relative group/card border border-border rounded-xl p-5 bg-card h-auto w-full">
                  {/* Image */}
                  <CardItem
                    translateZ="100"
                    rotateX={5}
                    className="w-full"
                  >
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
                        className="rounded-lg shadow-sm object-cover"
                        style={{ width: "100%", height: "200px" }}
                      />
                    </a>
                  </CardItem>

                  {/* Title */}
                  <CardItem
                    translateZ="60"
                    className="w-full mt-4"
                  >
                    <h3 className="text-base font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </CardItem>

                  {/* Description */}
                  <CardItem
                    translateZ="40"
                    className="w-full mt-2"
                  >
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {project.description}
                    </p>
                  </CardItem>

                  {/* Link */}
                  <CardItem
                    as="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    translateZ="120"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg bg-foreground text-background"
                  >
                    View Details
                    <i className="fa-solid fa-arrow-right-long text-xs" />
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
