export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-foreground text-background">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <h2 className="text-2xl md:text-3xl font-normal leading-snug text-balance">
            Studying MEng in Artificial Intelligence for Product Innovation
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-background/80">
            <p>
              I am extremely <strong className="text-background">passionate</strong>{" "}
              about all aspects of{" "}
              <strong className="text-background">
                Computer Vision, Product Development
              </strong>{" "}
              and <strong className="text-background">Generative AI</strong>. I
              embrace{" "}
              <strong className="text-background">working</strong> on research
              and development in those topics to{" "}
              <strong className="text-background">improve lives</strong> and{" "}
              <strong className="text-background">experiences</strong>.
            </p>
            <p>
              The <strong className="text-background">atmosphere</strong> in
              which I work is{" "}
              <strong className="text-background">essential</strong>, and I find
              it difficult to{" "}
              <strong className="text-background">collaborate</strong> with
              individuals who aren&apos;t{" "}
              <strong className="text-background">inspired</strong>. I&apos;m
              driven to <strong className="text-background">grow</strong> as a{" "}
              <strong className="text-background">developer</strong> and{" "}
              <strong className="text-background">learn</strong> from others.
            </p>
            <p>
              I enjoy spending time with my{" "}
              <strong className="text-background">friends</strong>, training
              myself in the arts of{" "}
              <strong className="text-background">Mixed Martial Arts</strong>,
              going to the <strong className="text-background">gym</strong>, and
              at the <strong className="text-background">beach</strong> where I{" "}
              <strong className="text-background">Surf</strong> and{" "}
              <strong className="text-background">Scuba dive</strong>.
            </p>
          </div>
        </div>

        <div className="h-[1px] bg-background/20 mb-12" />

        {/* Technologies */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-background/30 mb-4">
              Technologies
            </span>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">Languages</h3>
            <ul className="space-y-1 text-sm text-background/70">
              <li>Python</li>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>C#</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">Frameworks</h3>
            <ul className="space-y-1 text-sm text-background/70">
              <li>TensorFlow</li>
              <li>PyTorch</li>
              <li>Keras</li>
              <li>Scikit-Learn</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">Others</h3>
            <ul className="space-y-1 text-sm text-background/70">
              <li>Amazon Web Services</li>
              <li>Microsoft Azure</li>
            </ul>
          </div>
        </div>

        <div className="h-[1px] bg-background/20 mb-12" />

        {/* Education */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-background/30 mb-4">
              Education
            </span>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-1">2024 &mdash; 2026</h3>
            <ul className="space-y-1 text-sm text-background/70">
              <li>Duke University</li>
              <li>MEng in AI for Product Innovation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-1">2019 &mdash; 2024</h3>
            <ul className="space-y-1 text-sm text-background/70">
              <li>Vellore Institute of Technology</li>
              <li>Integrated MTech in Computer Science</li>
              <li>Specialization in Data Science</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-1">2004 &mdash; 2019</h3>
            <ul className="space-y-1 text-sm text-background/70">
              <li>Bala Vidya Mandir Senior Secondary School</li>
            </ul>
          </div>
        </div>

        <div className="h-[1px] bg-background/20 mb-12" />

        {/* Certifications */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-background/30 mb-4">
              Certifications
            </span>
          </div>
          <div>
            <ul className="space-y-1 text-sm text-background/70">
              <li>Introduction to TensorFlow for AI, ML, and DL</li>
              <li className="text-background/50">Coursera (2022)</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-1 text-sm text-background/70">
              <li>AWS Certified Cloud Practitioner</li>
              <li className="text-background/50">Amazon Services (2022)</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-1 text-sm text-background/70">
              <li>Developing AI Applications on Azure</li>
              <li className="text-background/50">Coursera (2022)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
