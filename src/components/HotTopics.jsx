export default function HotTopics() {
  const topics = [
    "Parliament Introduces Income Tax Bill to Reshape India's Direct Tax Landscape",
    "Indian Export Earnings at Risk as U.S. Tariffs Double to 50%",
    "India Eases Select BIS Norms While Tightening Overall Standards Enforcement",
    "India Modernizes Maritime Law with Carriage of Goods by Sea Bill, 2025",
  ];

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-6">
        {/* HOT TOPICS badge */}
        <div
          className="bg-orange-500 text-black font-bold flex items-center pl-5 shadow-lg shrink-0 mx-auto md:mx-0"
          style={{
            width: "206px",
            height: "49px",
            borderRadius: "6px",
            clipPath: "polygon(0 0, 90% 0, 80% 0, 92% 100%, 0 100%)",
          }}
        >
          HOT TOPICS
        </div>

        {/* Topics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-1">
          {topics.map((topic, i) => (
            <div
              key={i}
              className="pt-3 flex flex-col justify-between min-h-[100px]"
              style={{ borderTop: "2px solid #00338D" }}
            >
              {/* TEXT */}
              <p className="text-sm text-gray-800 leading-snug">{topic}</p>

              {/* ARROW */}
              <div className="flex justify-end mt-3">
                <span className="text-gray-600 text-lg hover:translate-x-1 transition">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
