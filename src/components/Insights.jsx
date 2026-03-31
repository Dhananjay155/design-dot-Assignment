export default function Insights() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[140px_1fr_1.2fr] gap-8 items-start">
        {/* BOX */}
        <div className="bg-gray-300 w-[140px] h-[140px] rounded-2xl flex flex-col justify-end items-start p-4 text-sm font-bold text-gray-800">
          INSPIRATION & <br /> INSIGHTS
        </div>

        {/* TEXT CONTENT */}
        <div className="space-y-5 ">
          <div className="border-b pb-4 hover:text-blue-600">
            <h3 className="font-semibold text-sm">Pre-market Entry</h3>
            <p className="text-xs mt-1">
              Pre-market entry means trading securities before regular market
              hours to react to overnight news, with lower liquidity and wider
              spreads.{" "}
            </p>
          </div>

          <div className="border-b pb-4 hover:text-blue-600">
            <h3 className="font-semibold text-sm">Market Entry</h3>
            <p className="text-xs mt-1">
              Research demand, assess competition, choose mode, localize
              offering, comply regulations, price strategically, partner
              locally, iterate learning.{" "}
            </p>
          </div>

          <div className="border-b pb-4 hover:text-blue-600">
            <h3 className="font-semibold text-sm">Operations</h3>
            <p className="text-xs mt-1">
              Planning, organizing, and managing processes to efficiently
              produce goods or services, ensuring quality, cost-effectiveness,
              and customer satisfaction.
            </p>
          </div>

          <div className="hover:text-blue-600">
            <h3 className="font-semibold text-sm">Growth & Expansion</h3>
            <p className="text-xs mt-1">
              Increasing business size, market reach, revenue, and resources to
              achieve long-term sustainability and competitive advantage.
            </p>
          </div>
        </div>

        {/* CARDS (UNCHANGED ✅) */}
        <div className="flex gap-4 h-[300px]">
          {/* PRE-MARKET (DEFAULT BIG) */}
          <div className="group relative flex-[1] hover:flex-[3] transition-all duration-500 rounded-2xl overflow-hidden">
            <img
              src="/images/coins.jpg"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 p-4 text-white text-xs bg-gradient-to-t from-blue-950/100 to-transparent">
              <p className="font-semibold">Pre-Market</p>
              <p className="text-[10px]">
                Evaluating Supply Chain Readiness Before Committing Capital in
                Emerging Markets
              </p>
            </div>
          </div>

          {/* OPERATIONS */}
          <div className="group relative flex-[1] hover:flex-[3] transition-all duration-500 rounded-2xl overflow-hidden">
            <img
              src="/images/Hero.jpg"
              className="w-full h-full object-cover"
            />

            {/* TEXT SMALL */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 group-hover:hidden">
              <p className="text-white text-xs font-bold rotate-[-90deg] ">
                Operations
              </p>
            </div>

            {/* EXPANDED CONTENT */}
            <div className="absolute bottom-0 p-4 text-white text-xs bg-gradient-to-t from-blue-950/100 to-transparent opacity-0 group-hover:opacity-100 transition">
              <p className="font-bold">Operations</p>
            </div>
          </div>

          {/* GROWTH */}
          <div className="group relative flex-[1] hover:flex-[3] transition-all duration-500 rounded-2xl overflow-hidden">
            <img
              src="/images/person.jpg"
              className="w-full h-full object-cover"
            />

            {/* TEXT SMALL */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 group-hover:hidden">
              <p className="text-white text-xs rotate-[-90deg] font-bold">
                Growth & Expansion
              </p>
            </div>

            {/* EXPANDED */}
            <div className="absolute bottom-0 p-4 text-white text-xs bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition">
              <p className="font-bold">Growth & Expansion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
