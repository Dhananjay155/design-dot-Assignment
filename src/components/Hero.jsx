import { ArrowRight } from "@deemlol/next-icons";

export default function Hero() {
  return (
    <section className="bg-blue-900 text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div className="text-center md:text-left">
          <p className="text-xs md:text-sm mb-2 tracking-wide">
            ACCOUNTANTS AND GLOBAL BUSINESS ADVISORS
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            EMPOWERED <br className="hidden md:block" /> WORKPLACES
          </h1>

          <p className="mt-4 text-sm md:text-base leading-relaxed">
            by fostering inclusivity, encouraging growth, promoting
            collaboration, valuing diversity, supporting innovation, and
            building trust for shared success.
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <button
              className="bg-orange-500 text-black font-bold flex items-center gap-2 pl-5 mt-8 md:mt-16 shadow-lg hover:bg-orange-600 transition"
              style={{
                width: "206px",
                height: "49px",
                borderRadius: "6px",
                clipPath: "polygon(0 0, 90% 0, 80% 0, 92% 100%, 0 100%)",
              }}
            >
              <ArrowRight className="w-4 h-4" />
              LET’S CONNECT
            </button>
          </div>

          <div className="mt-5 text-xs md:text-sm text-gray-200">
            Accounting, Taxation, & Business Advisory between India, Japan, and
            the World
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/Hero.jpg"
            alt="hero"
            className="rounded-lg w-full max-w-md md:max-w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
