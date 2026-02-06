export function QuoteSection() {
  return (
    <section
      id="quote"
      className="min-h-screen flex items-center justify-center bg-foreground text-background px-6"
    >
      <div className="max-w-3xl text-center">
        <blockquote className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-balance">
          {"Once you bid "}
          <span className="text-background/70">farewell</span>
          {" to "}
          <span className="text-background/70">discipline</span>
          {" you say "}
          <span className="text-background/70">goodbye</span>
          {" to "}
          <span className="text-background/70">success</span>.
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="w-12 h-[1px] bg-background" />
          <cite className="text-lg not-italic font-normal">
            Sir Alex Ferguson
          </cite>
        </div>
      </div>
    </section>
  )
}
