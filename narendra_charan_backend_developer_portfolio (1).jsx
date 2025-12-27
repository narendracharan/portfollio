import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-[#E6E8F0]">
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C7CFF]/20 via-[#00E5A8]/10 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <span className="inline-block mb-4 rounded-full bg-[#00E5A8]/10 px-4 py-1 text-sm text-[#00E5A8]">
            Backend Developer · Node.js
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Narendra <span className="text-[#7C7CFF]">Charan</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-[#B8BEDD]">
            I design and build scalable backend systems using Node.js, MongoDB, and
            microservices architecture. I specialize in real-time applications,
            complex aggregation pipelines, and secure payment integrations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/Narendra_Backend_Developer_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl bg-[#7C7CFF] px-6 py-3 font-semibold text-black hover:opacity-90 transition"
            >
              <Download size={18} /> Download Resume
            </a>
            <a
              href="https://github.com/narendracharan"
              className="inline-flex items-center gap-2 rounded-xl border border-[#2A2F55] px-6 py-3 text-[#E6E8F0] hover:border-[#7C7CFF] transition"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/narendra-charan-39a4a7242"
              className="inline-flex items-center gap-2 rounded-xl border border-[#2A2F55] px-6 py-3 text-[#E6E8F0] hover:border-[#00E5A8] transition"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* CONTACT STRIP */}
      <section className="border-y border-[#1B2140] bg-[#0F1424]">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-[#B8BEDD]">
          <div className="flex items-center gap-3"><Mail size={18}/> narendracharan25753@gmail.com</div>
          <div className="flex items-center gap-3"><Phone size={18}/> +91 9116472181</div>
          <div className="flex items-center gap-3"><MapPin size={18}/> Neemuch, India</div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Core Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Node.js", "JavaScript", "TypeScript", "Express / Fastify", "MongoDB", "Aggregation Pipelines", "Microservices", "Socket.IO", "Payment Gateways", "AWS", "Swagger", "Git"].map(skill => (
            <div key={skill} className="rounded-2xl bg-gradient-to-br from-[#141A35] to-[#0F1424] border border-[#1B2140] px-5 py-4 text-center hover:border-[#7C7CFF] transition">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-[#0F1424] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Experience</h2>

          <div className="space-y-8">
            <div className="rounded-3xl border border-[#1B2140] bg-[#0B0F1A] p-8">
              <h3 className="text-2xl font-semibold">Node.js Developer · Techgropse Pvt Ltd</h3>
              <p className="text-[#7C7CFF] mt-1">2023 – Present</p>
              <ul className="mt-4 space-y-3 text-[#B8BEDD]">
                <li>• Designed scalable REST APIs serving thousands of daily users.</li>
                <li>• Built microservices for orders, payments, notifications, and admin systems.</li>
                <li>• Implemented real-time chat and live updates using Socket.IO.</li>
                <li>• Integrated payment gateways like Telr, Apple Pay, ClickPay, and wallets.</li>
                <li>• Worked on multilingual and role-based platforms (Admin, Merchant, User).</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[#1B2140] bg-[#0B0F1A] p-8">
              <h3 className="text-2xl font-semibold">Backend Developer Intern · CoderId</h3>
              <p className="text-[#00E5A8] mt-1">Oct 2022 – Jan 2023</p>
              <ul className="mt-4 space-y-3 text-[#B8BEDD]">
                <li>• Developed RESTful APIs using Node.js and Express.</li>
                <li>• Wrote complex MongoDB aggregation pipelines for reporting.</li>
                <li>• Collaborated using Git and Agile development practices.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <Project
            title="MISD – eCommerce & Marketplace"
            description="A full-scale multi-vendor eCommerce platform with admin, merchant, and user panels. Features include real-time order updates, multilingual support, role-based access control, and secure online payments."
            tech="Node.js · MongoDB · Socket.IO · Payment Gateways"
          />
          <Project
            title="Sofrati – Service Booking Platform"
            description="A service marketplace where users can book services, chat with providers in real time, and pay via digital wallets. Includes powerful admin dashboards and merchant management."
            tech="Node.js · Express · MongoDB · Real-time Chat"
          />
          <Project
            title="Verento – AI Property Management"
            description="An AI-powered property system for comparison, rentals, and agreement automation. Handles complex workflows, document management, and analytics."
            tech="Node.js · MongoDB · AI Integrations"
          />
          <Project
            title="Friends App – Social Network"
            description="A social media application supporting posts, likes, follows, notifications, and real-time messaging with scalable backend architecture."
            tech="Node.js · Socket.IO · MongoDB"
          />
          <Project
            title="Saman – Car Marketplace & Bidding Platform"
            description="A multi-language car marketplace application where users can sign up, upload and sell their cars, and buyers can purchase or place bids on vehicles. The platform includes separate User and Admin panels, supports English and Arabic languages, and provides a complete car bidding and selling workflow with secure online payments."
            tech="Node.js · Express · TypeScript · MongoDB · Telr Payment Gateway"
          />
          <Project
            title="Timp – Smart Restaurant Discovery & Deals Platform"
            description="A location-based restaurant discovery platform that allows users to find nearby restaurants, get exclusive discounts, and submit ratings and reviews. Merchants can onboard and manage their restaurants, while admins approve listings and oversee platform operations. The system includes real-time restaurant tracking, subscription-based payments for merchants, and automated commission distribution to the admin."
            tech="Node.js · Express · MongoDB · AWS · Stripe Payments · Real-time Location"
          />
        </div>
      </section>

      {/* EDUCATION */}
      <section className="bg-[#0F1424] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <p className="text-[#B8BEDD] text-lg">
            Bachelor of Computer Applications · Ashwariya College, Udaipur
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1B2140] py-6 text-center text-[#8A90B8]">
        © {new Date().getFullYear()} Narendra Charan · Backend Engineer
      </footer>
    </div>
  );
}

function Project({ title, description, tech }) {
  return (
    <div className="rounded-3xl border border-[#1B2140] bg-gradient-to-br from-[#141A35] to-[#0B0F1A] p-8 hover:border-[#7C7CFF] transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-[#B8BEDD] mb-4 leading-relaxed">{description}</p>
      <span className="text-sm text-[#00E5A8]">{tech}</span>
    </div>
  );
}
