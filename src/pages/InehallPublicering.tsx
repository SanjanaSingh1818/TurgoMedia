import Navigation from '../components/Navigation';

const InehallPublicering = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              Innehåll och publicering på sociala medier
            </span>
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Vi planerar, producerar och publicerar innehåll – så att du kan fokusera på din verksamhet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InehallPublicering;