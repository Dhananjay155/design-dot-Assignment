export default function About() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[150px_1fr_1.3fr] gap-6 items-start">
        {/* ABOUT BOX (SMALL) */}
        <div className="bg-gray-300 w-[140px] h-[140px] rounded-2xl flex flex-col justify-end items-start p-4 text-sm font-bold text-gray-800">
          ABOUT <br /> FIRM
        </div>

        {/* CONTENT (MEDIUM) */}
        <div className="relative">
          {/* MAP BG */}
          <img
            src="/images/Map.jpg"
            alt="map"
            className="absolute  w-100% h-100%"
          />

          <div className="relative z-10 pr-4">
            <h2 className="text-lg font-semibold mb-3">HLS Global Group</h2>

            <p className="text-xs text-gray-600 leading-relaxed">
              is an international accounting and business advisory firm with a
              focus on providing superior services in the areas of accounting,
              tax, audit, advisory, and consulting. Founded in 1990, we pride
              ourselves in delivering the highest levels of quality and customer
              service while remaining cost-effective. We have grown to more than
              250 professionals serving clients in the United States, Japan,
              Mexico, India, Germany, and UAE. While catering to the business
              requirements of Japanese subsidiaries operating in the United
              States, Mexico, India, Germany, and UAE, we also provide
              comprehensive solutions to non-Japanese multinational companies
              operating in Japan.{" "}
            </p>

            {/* STATS */}
            <div className="mt-8">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold">250+</h3>
                  <p className="text-xs text-gray-600">
                    Professional Staff Members Globally
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">1000+</h3>
                  <p className="text-xs text-gray-600">
                    Clients in the HLS Global Network
                  </p>
                </div>
              </div>

              <div className="border-t-2 border-blue-800 my-6"></div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold">35+</h3>
                  <p className="text-xs text-gray-600">Years of Experience</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">15+</h3>
                  <p className="text-xs text-gray-600">Countries Covered</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE (WIDE) */}
        <div className="relative font-bold">
          {/* BADGE */}
          <div
            className="
    md:absolute md:-top-8 md:right-4 
    bg-orange-500 text-black text-xs px-6 py-1 
    rounded-full flex items-center gap-2 
    mb-3 md:mb-0 w-fit mx-auto md:mx-0
  "
          >
            WE ARE LOCATED
            <span className="px-3 py-[2px] rounded-full">INDIA ▾</span>
          </div>

          {/* IMAGE */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/Building.png"
              alt="building"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
