export function Footer() {
  const year = new Date().getFullYear()

  return (
    <section
      id="connect"
      className="min-h-screen flex flex-col justify-center bg-foreground text-background px-6"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-background/70 mb-4">
            Have an idea?
          </h2>
          <a
            href="mailto:tm.vishnu.m@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl md:text-6xl lg:text-7xl font-medium text-background hover:text-background/80 transition-colors"
          >
            Tell me about it
          </a>
        </div>

        <footer className="border-t border-background/20 pt-10">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="space-y-2 text-sm text-background/60">
              <a
                href="mailto:tm.vishnu.ms@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-background transition-colors"
              >
                tm.vishnu.ms@gmail.com
              </a>
              <p>
                <i className="fas fa-map-marker-alt mr-1" />
                Chennai, India
              </p>
              <p>&copy; {year}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 text-sm">
              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/vishnu-mukundan-tm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/60 hover:text-background transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/calicartels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/60 hover:text-background transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="mailto:tm.vishnu.ms@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/60 hover:text-background transition-colors"
                >
                  Email
                </a>
              </div>
              <div className="flex gap-6">
                <a
                  href="https://www.credly.com/earner/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/60 hover:text-background transition-colors"
                >
                  Credly
                </a>
                <a
                  href="/assets/file/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/60 hover:text-background transition-colors"
                >
                  Resume
                </a>
                <a
                  href="#"
                  className="text-background/60 hover:text-background transition-colors"
                >
                  Top
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}
