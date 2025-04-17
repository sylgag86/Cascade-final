
import React from 'react';

export default function CascadeLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] text-white font-sans">

      <header className="flex justify-between items-center p-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white drop-shadow-md">Cascade</h1>
          <p className="text-sm text-blue-100">Exterior Cleaning</p>
        </div>
        <div className="text-sm text-blue-100 font-medium">Call/Text: (716) 243-1397</div>
      </header>

      <div className="relative w-full h-[85vh] overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-700/50 flex flex-col justify-center items-center text-center p-4 z-10">
          <h2 className="text-5xl font-extrabold text-white drop-shadow-xl mb-3">Clean Starts at the Surface</h2>
          <p className="text-blue-200 mb-6">We blast away dirt from homes, driveways, decks, gutters & more.</p>
          <button className="bg-blue-500 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-blue-400 transition-all">
            Get a Free Quote
          </button>
        </div>
      </div>

      <section className="text-center py-12">
        <h3 className="text-3xl font-bold text-white drop-shadow-lg mb-8">Our Shine Packages</h3>
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

      <section className="py-12 px-4 bg-white/5 backdrop-blur-2xl rounded-2xl mx-2 shadow-inner border border-white/10 text-white">
        <h3 className="text-3xl font-bold text-center mb-6">Book Your Free Quote</h3>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" placeholder="Full Name" className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/80 backdrop-blur-md border border-white/20" />
          <input type="email" placeholder="Email Address" className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/80 backdrop-blur-md border border-white/20" />
          <input type="tel" placeholder="Phone Number" className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/80 backdrop-blur-md border border-white/20" />
          <textarea placeholder="What do you need cleaned?" className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/80 backdrop-blur-md border border-white/20"></textarea>
          <button type="submit" className="w-full bg-blue-500 p-3 rounded-xl text-white font-semibold hover:bg-blue-400 transition-all">Submit Quote Request</button>
        </form>
      </section>

      <footer className="text-center text-sm text-blue-200 mt-10">
        &copy; {new Date().getFullYear()} Cascade Exterior Cleaning | cascadeexteriorcleaning716@gmail.com
      </footer>
    </div>
  );
}
