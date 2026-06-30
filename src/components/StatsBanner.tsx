const stats = [
  { value: "500+", label: "Professionals Trained", icon: "👥" },
  { value: "50+", label: "Organizations Served", icon: "🏛️" },
  { value: "8+", label: "Countries Reached", icon: "🌍" },
  { value: "100%", label: "Commitment to Impact", icon: "🎯" },
];

const StatsBanner = () => {
  return (
    <section className="bg-[hsl(25,90%,50%)] py-0">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
          {stats.map((stat, i) => (
            <div key={i} className="text-center text-white py-10 px-6 hover:bg-white/10 transition-colors">
              <p className="text-4xl md:text-5xl font-black mb-2">{stat.value}</p>
              <div className="w-8 h-0.5 bg-white/40 mx-auto mb-2"></div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
