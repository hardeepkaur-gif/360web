import Image from "next/image";

type HomeHeroProps = {
  innerHtml: string;
};

export function HomeHero({ innerHtml }: HomeHeroProps) {
  return (
    <section className="hero hero--editorial" id="home">
      <div className="hero__bg" aria-hidden="true">
        <Image
          src="/assets/images/hero-home-cover.webp"
          alt=""
          fill
          sizes="100vw"
          quality={65}
          className="hero__bg-image"
          style={{ objectFit: "cover" }}
          fetchPriority="high"
          preload
        />
        <div className="hero__bg-overlay" />
        <span className="hero__watermark">360</span>
      </div>
      <div
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: innerHtml }}
        suppressHydrationWarning
      />
    </section>
  );
}
