import React from 'react';

const InstagramSection = () => {
  return (
    <section id="instagram" className="bg-[#FDF6ED] py-20">
      <div className="container mx-auto px-4">
        {/* Header Row */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left gap-6"
          data-aos="fade-down"
        >
          {/* Left Side */}
          <div className="md:w-2/3">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="w-12 h-0.5 bg-black opacity-100"></div>
              <h5 className="text-[#5f4c8c] text-base font-bold">FÖLJ OSS</h5>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 relative z-10">
  <span className="text-black">Senaste på </span>
  <span className="bg-gradient-warm bg-clip-text text-transparent">
    Instagram
  </span>
</h2>

            <p className="text-black/80 max-w-xl mx-auto md:mx-0">
              Kolla in våra senaste videor och uppdateringar på Instagram
            </p>
          </div>

          {/* Right Side Button */}
          <div className="md:w-1/3 flex items-center justify-center md:justify-end">
            <a
              href="https://www.instagram.com/turgomedia?igsh=eWpwZDQ3cnh2eWs0&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5E4B8B] text-[#fff] border border-white font-semibold px-6 py-2 rounded-md transition-colors duration-300 hover:bg-[#ed9542]"
            >
              Visa profil
            </a>
          </div>
        </div>

        {/* Instagram Embed */}
<div className="mt-10 flex justify-center">
  <div className="w-full max-w-5xl rounded-xl overflow-hidden shadow-lg">
    <iframe
      src="https://www.instagram.com/turgomedia/embed/"
      width="100%"
      height="800"
      className="w-full h-[800px] border-none"
      frameBorder="0"
      scrolling="no"
      style={{ backgroundColor: "transparent" }} 
      title="Instagram Feed"
    ></iframe>
  </div>
</div>

      </div>
    </section>
  );
};

export default InstagramSection;
