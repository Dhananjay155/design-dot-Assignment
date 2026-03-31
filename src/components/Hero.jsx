import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[520px] lg:h-[540px] bg-[#0a3494] overflow-hidden text-white font-sans">
      {/* SVG CLIP PATH (desktop only) */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="hero-clip" clipPathUnits="objectBoundingBox">
            <path
              d="
              M0.32,0
              C0.22,0.12 0.22,0.28 0.30,0.40
              L0.78,1
              H1
              V0
              Z
              "
            />
          </clipPath>
        </defs>
      </svg>

      {/* IMAGE (hidden on mobile) */}
      <div
        className="hidden lg:block absolute top-0 right-0 w-[72%] h-full"
        style={{ clipPath: "url(#hero-clip)" }}
      >
        <Image
          src="/images/Hero.jpg"
          alt="workspace"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-center px-6 lg:px-14 py-8 lg:py-0 max-w-full lg:max-w-[42%]">
        <p className="text-[10px] tracking-[0.18em] uppercase mt-15 font-semibold text-blue-200">
          Accountants and Global Business Advisors
        </p>

        <h1 className="text-[36px] sm:text-[44px] lg:text-[52px] font-extrabold uppercase leading-[1.05] mb-2">
          Empowered <br /> Workplaces
        </h1>

        <div className="w-16 h-[3px] bg-white mt-2 mb-5" />

        <p className="text-[13px] leading-relaxed text-blue-100 mb-8 max-w-[320px]">
          by fostering inclusivity, encouraging growth, promoting collaboration,
          valuing diversity, supporting innovation, and building trust for
          shared success.
        </p>

        {/* BUTTON */}
        <button className="inline-flex items-center gap-3 text-black text-[11px] font-bold tracking-widest uppercase px-6 py-3 bg-[#f26522] rounded w-fit">
          <span className="text-lg">→</span>
          Lets Connect
        </button>
      </div>

      {/* TAGLINE */}
      <div className="absolute bottom-6 left-6 lg:left-14 z-10">
        <p className="text-[9px] tracking-[0.2em] uppercase font-bold text-blue-200">
          Accounting, Taxation, & Business Advisory between India, Japan, and
          the World{" "}
        </p>
      </div>

      {/* TEAM */}
      <div className="absolute bottom-6 right-6 lg:right-10 z-10 mb-10 flex items-center gap-3">
        <div className="flex -space-x-3">
          {["/images/C1.png", "/images/C2.png", "/images/C3.png"].map(
            (src, i) => (
              <img
                key={i}
                src={src}
                className="w-8 h-8 lg:w-9 lg:h-9 rounded-full border-2 border-white object-cover"
              />
            ),
          )}

          <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold bg-[#f26522]">
            +
          </div>
        </div>

        <div>
          <p className="text-lg lg:text-xl font-extrabold">250+</p>
          <p className="text-[10px] text-blue-200 leading-tight">
            Enjoy Working <br /> with us
          </p>
        </div>
      </div>

      {/* BADGE */}
      <div className="hidden lg:flex absolute top-6 right-[14%] z-20 items-center gap-2 px-3 py-2 rounded-full bg-blue-900/80 backdrop-blur">
        <div className="w-7 h-7 rounded-full overflow-hidden">
          <img src="/images/C1.png" className="w-full h-full object-cover" />
        </div>

        <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold bg-blue-600">
          D
        </div>
      </div>
    </section>
  );
}
