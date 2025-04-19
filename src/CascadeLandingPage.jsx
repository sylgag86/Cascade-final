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

      {/* VIDEO BACKGROUND SECTION */}
      <div className="relative w-full h-[85vh] overflow-hidden my-8 rounded-2xl shadow-2xl border border-white/10">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4 space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2">Clean Starts at the Surface</h1>
            <p className="text-blue-100 text-base sm:text-lg">
              Professional exterior cleaning for homes and businesses in Western New York.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="text-center py-16 px-6 sm:px-12 bg-white/10 backdrop-blur-lg border-t border-b border-white/20 shadow-inner">
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
          Get 25% Off Your First Cleaning
        </h3>
        <p className="text-blue-100 text-lg mb-6">
          Call now and save on your first exterior service.
        </p>
        <a
          href="tel:+17162431397"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Call Now
        </a>
      </section>

      {/* Shine Packages */}
      <section className="text-center py-12 mt-16">
        <a
          href="tel:+17162431397"
          className="text-3xl font-bold text-white drop-shadow-lg mb-10 hover:underline hover:text-blue-300 transition block"
        >
          Free Quote
        </a>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
          Select your service to schedule your wash. After booking, you’ll be directed to secure your 50% deposit.
        </p>

        <div className="grid md:grid-cols-3 gap-6 px-2">
          {[
            {
              title: 'Silver Shine',
              desc: 'Driveway + Porch or Deck',
              price: '$199',
              stripe: 'https://buy.stripe.com/6oEeY9gPz9d07rq5kk',
            },
            {
              title: 'Gold Shine',
              desc: 'Full House Wash + Driveway',
              price: '$299',
              stripe: 'https://buy.stripe.com/3cs03f6aVbl87rq145',
            },
            {
              title: 'Platinum Shine',
              desc: 'House + Driveway + Gutter + Deck or Fence',
              price: '$399',
              stripe: 'https://buy.stripe.com/aEU4jvbvf74S276fZ0',
            },
          ].map((pkg, i) => (
            <button
              key={i}
              onClick={() => {
                window.Calendly.initPopupWidget({
                  url: 'https://calendly.com/syl-gagliardi/new-meeting?hide_event_type_details=1&primary_color=3b82f6&text_color=ffffff&background_color=0f172a',
                });

                const handleCalendlyEvent = (e) => {
                  if (e.data.event === 'calendly.event_scheduled') {
                    window.removeEventListener('message', handleCalendlyEvent);
                    window.open(pkg.stripe, '_blank');
                  }
                };

                window.addEventListener('message', handleCalendlyEvent);
              }}
              className="block bg-white/10 backdrop-blur-2xl rounded-2xl p-6 shadow-xl text-white border border-white/20 hover:scale-105 transition-transform cursor-pointer hover:bg-white/20 w-full"
            >
              <h4 className="text-xl font-bold mb-2">{pkg.title}</h4>
              <p className="text-blue-100 mb-2">{pkg.desc}</p>
              <p className="text-white text-lg font-semibold">{pkg.price}</p>
              <p className="mt-4 text-green-300 text-sm italic">Schedule & Pay</p>
            </button>
          ))}
        </div>

        <div className="text-center mt-6 text-blue-200">
          Roof cleaning starts at <span className="font-bold text-white">$399</span> based on pitch and difficulty.
        </div>
      </section>

      {/* Contact Form */}
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
