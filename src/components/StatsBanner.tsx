const stats = [
  { value: "500+", label: "Professionals Trained" },
  { value: "50+", label: "Organizations Served" },
  { value: "8+", label: "Countries Reached" },
  { value: "100%", label: "Commitment to Impact" },
];

const StatsBanner = () => {
  return (
    <section className="bg-primary py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center text-white">
              <p className="text-4xl md:text-5xl font-black text-accent mb-1">{stat.value}</p>
              <p className="text-sm font-medium text-primary-foreground/75 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
