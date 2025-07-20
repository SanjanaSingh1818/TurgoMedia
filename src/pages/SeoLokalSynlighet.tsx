import Navigation from '../components/Navigation';

const SeoLokalSynlighet = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              SEO & Lokal synlighet
            </span>
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Vi optimerar din hemsida för Google och hjälper dig nå fler kunder i din närhet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeoLokalSynlighet;