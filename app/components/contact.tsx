export default function Contact() {
    return (
      <section className="w-full max-w-[1440px] mx-auto px-20 py-24">
  
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-normal text-black  border border-green-500 :border-green-700 px-3 py-0.5 rounded-full w-fit">
              Contact Us
            </span>
            <h2 className="text-5xl font-medium text-black  leading-tight">
              Let's Build Something<br /> Worth Talking About
            </h2>
          </div>
          <p className="text-black  text-base max-w-xs text-right leading-relaxed">
            Reach out — we're always open to a good conversation about great work.
          </p>
        </div>
  
        {/* Main grid */}
        <div className="grid grid-cols-2 gap-8">
  
          {/* Left — contact form */}
          <div className="bg-white border border-gray-200 :border-gray-800 rounded-2xl p-10 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-gray-500 :text-gray-400 uppercase tracking-widest">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="bg-white  border border-gray-200 rounded-xl px-4 py-3 text-sm text-black  placeholder:text-gray-300  outline-none focus:border-[#a8d87c] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-gray-500  uppercase tracking-widest">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="bg-white :bg-[#0f1210] border border-gray-200  rounded-xl px-4 py-3 text-sm text-black  placeholder:text-gray-300 :placeholder:text-gray-600 outline-none focus:border-[#a8d87c] transition-colors"
                />
              </div>
            </div>
  
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-gray-500  uppercase tracking-widest">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="bg-white :bg-[#0f1210] border border-gray-200 :border-gray-700 rounded-xl px-4 py-3 text-sm text-black :text-white placeholder:text-gray-300 :placeholder:text-gray-600 outline-none focus:border-[#a8d87c] transition-colors"
              />
            </div>
  
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-gray-500 :text-gray-400 uppercase tracking-widest">Message</label>
              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="bg-white :bg-[#0f1210] border border-gray-200 :border-gray-700 rounded-xl px-4 py-3 text-sm text-black :text-white placeholder:text-gray-300 :placeholder:text-gray-600 outline-none focus:border-[#a8d87c] transition-colors resize-none"
              />
            </div>
  
            <button className="w-full py-4 rounded-xl bg-[#a8d87c] text-[#1b3a2b] font-medium text-sm tracking-wide hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </div>
  
          {/* Right — info cards */}
          <div className="flex flex-col gap-5">
  
            {/* Email */}
            <a
              href="mailto:hello@oshodilive.com"
              className="group flex items-center gap-6 bg-white border border-gray-200 :border-gray-800 rounded-2xl px-8 py-7 hover:border-[#a8d87c] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#a8d87c]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#a8d87c]/40 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1b3a2b" strokeWidth="1.8">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Email</span>
                <span className="text-base font-medium text-black :!text-white">hello@oshodilive.com</span>
              </div>
              <svg className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a8d87c" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
  
            {/* Phone */}
            <a
              href="tel:+2348147710837"
              className="group flex items-center gap-6 bg-white border border-gray-200 :border-gray-800 rounded-2xl px-8 py-7 hover:border-[#a8d87c] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#a8d87c]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#a8d87c]/40 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1b3a2b" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.08 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Phone</span>
                <span className="text-base font-medium text-black :!text-white">+234 (0)814 771 0837</span>
              </div>
              <svg className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a8d87c" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
  
            {/* Address */}
            <a
              href="https://maps.google.com/?q=Safecourt+Apartments+Ojulari+Road+Ikate+Elegushi+Lekki"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-6 bg-white border border-gray-200 :border-gray-800 rounded-2xl px-8 py-7 hover:border-[#a8d87c] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#a8d87c]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#a8d87c]/40 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1b3a2b" strokeWidth="1.8">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Office</span>
                <span className="text-base font-medium text-black :!text-white leading-snug">
                  Block C, Safecourt Apartments,<br />Ojulari Rd, Ikate Elegushi, Lekki
                </span>
              </div>
              <svg className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a8d87c" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
  
            {/* CTA strip */}
            <div className="flex items-center justify-between bg-[#f0fae8] border border-gray-200 rounded-2xl px-8 py-6 mt-auto">
              <p className="text-black text-sm leading-relaxed">
                Prefer a quick chat?<br />
                <span className="text-[#a8d87c] font-medium">We typically respond within 2 hours.</span>
              </p>
              <div className="w-10 h-10 rounded-full bg-[#a8d87c] flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1b3a2b" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    )
  }