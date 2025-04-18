import React from 'react';

export default function CascadeLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] text-white font-sans">

      <header className="text-center py-4 px-4 sm:px-8 bg-black/60 backdrop-blur-sm rounded-xl shadow-md">
        <div className="text-2xl font-extrabold text-white">Cascade Exterior Cleaning</div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-blue-100 font-medium">
          <a href="tel:7162431397" className="hover:underline">Call: (716) 243-1397</a>
          <a href="mailto:cascadeexteriorcleaning716@gmail.com" className="hover:underline">Email: cascadeexteriorcleaning716@gmail.com</a>
        </div>
      </header>

      {/* VIDEO BACKGROUND SECTION WITH OVERLAY AND CTA */}
      <div className="relative w-full h-[85vh] overflow-hidden my-8 rounded-2xl shadow-2xl border border-white/10">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4 space-y-6">

          {/* 🔹 CTA (now overlaid) */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 shadow-md">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 drop-shadow-lg">
               Get 25% Off Your First Cleaning!
            </h3>
            <p className="text-blue-100 text-sm sm:text-base mb-4">
              Book now and save big on your first exterior service.
            </p>
            <a
              href="tel:+17162431397"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
               Call to Claim Offer
            </a>
          </div>

          {/* 🔹 Headline */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2">Clean Starts at the Surface</h1>
            <p className="text-blue-100 text-base sm:text-lg">
              Powerful, professional exterior cleaning for homes and businesses in Western New York.
            </p>
          </div>
        </div>
      </div>

      {/* 🔹 SERVICE CARDS — SHINE PACKAGES */}
      <section className="text-center py-12">
        <div className="grid md:grid-cols-3 gap-6 px-2">
          {['Silver Shine', 'Gold Shine', 'Platinum Shine'].map((title, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-2xl rounded-2xl p-6 shadow-xl text-white border border-white/20 hover:scale-105 transition-transform">
              <h4 className="text-xl font-bold mb-2">{title}</h4>
              <p className="text-blue-100 mb-2">
                {title === 'Silver Shine' && 'Driveway + Porch or Deck'}
                {title === 'Gold Shine' && 'Full House Wash + Driveway'}
                {title === 'Platinum Shine' && 'House + Driveway + Gutter + Deck or Fence'}
              </p>
              <p className="text-white text-lg font-semibold">
                {title === 'Silver Shine' && '$199'}
                {title === 'Gold Shine' && '$299'}
                {title === 'Platinum Shine' && '$399'}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6 text-blue-200">
          Roof Cleaning starts at <span className="font-bold text-white">$399</span> — based on pitch & difficulty.
        </div>
      </section>

      {/* 🔹 CONTACT FORM */}
      <form
        action="https://formsubmit.co/cascadeexteriorcleaning716@gmail.com"
        method="POST"
        className="glassmorphism p-6 rounded-xl space-y-4 max-w-xl mx-auto text-left"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-white/20 text-white placeholder:text-white/70 outline-none"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-white/20 text-white placeholder:text-white/70 outline-none"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full p-3 rounded-lg bg-white/20 text-white placeholder:text-white/70 outline-none"
        />
        <textarea
          name="message"
          rows="4"
          required
          placeholder="How can we help?"
          className="w-full p-3 rounded-lg bg-white/20 text-white placeholder:text-white/70 outline-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-white/30 text-white font-bold py-3 rounded-lg hover:bg-white/50 transition"
        >
          Send Message
        </button>
      </form>

      <footer className="text-center text-sm text-blue-200 mt-10">
        &copy; {new Date().getFullYear()} Cascade Exterior Cleaning | cascadeexteriorcleaning716@gmail.com
      </footer>
    </div>
  );
}

