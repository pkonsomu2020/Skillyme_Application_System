import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  photo: string;
  linkedin: string;
  review: string;
  done?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Breattah Okeyo",
    photo: "/TESTIMONIALS/Breattah_Okeyo_Computer Science.jpeg",
    linkedin: "https://www.linkedin.com/in/breattah-okeyo-0693963b1/",
    review: "Joining SkillyMe is one of the best decisions I've made recently and I couldn't be more grateful for the outcome. From the mentorship, to teamwork, to tasks and contributions it was all an amazing experience. I learned it's not about being the best, but showing up with your best. What made SkillyMe different for me is that I learned not by watching YouTube videos but by building something that had to actually work. And it did.",
    done: true,
  },
  {
    id: 2,
    name: "Maxmillin Muiruri Njuguna",
    photo: "/TESTIMONIALS/Maxmillian Muiruri Njuguna.jpeg",
    linkedin: "https://www.linkedin.com/in/maxmillin-muiruri-njuguna/",
    review: "Being part of the SkillyMe program has been an amazing experience for me. It gave me a chance to grow my skills, work with a great team, and build real projects like PharmX. The collaboration, guidance, and hands-on practice really helped me improve my confidence as a developer. I'm grateful for the opportunity and proud to be part of the Tier 1 contributors.",
    done: true,
  },
  {
    id: 3,
    name: "Chris Leo",
    photo: "/TESTIMONIALS/Chris_Leo.jpeg",
    linkedin: "https://www.linkedin.com/in/leo-chrisben-evans-a49570322/",
    review: "Participating in the Skillyme Africa Computer Science Cohort equipped me with practical skills in software development, allowing me to contribute to the creation of a genuine pharmacy application. The program pushed me to think critically, work collaboratively, and apply computer science principles beyond theoretical knowledge. I wholeheartedly recommend Skillyme Africa to anyone seeking to advance in the tech industry.",
    done: true,
  },
  {
    id: 4,
    name: "Solomon Omondi Otieno",
    photo: "/TESTIMONIALS/Solomon_Omondi.jpeg",
    linkedin: "https://www.linkedin.com/in/solomon-omondi-83b2a7331",
    review: "I was always coding without direction, but Skillyme Africa gave me an identity. As a Public Health student, being recognized as a top contributor was a defining milestone. The program allowed me to balance my studies while building proficiency in full-stack development—leveraging AI and API architectures for social impact. I am deeply grateful to the team for trusting me and providing this opportunity to bridge the gap between passion and professional expertise.",
    done: true,
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative mx-auto max-w-[1100px] px-6">
      {/* Main Testimonial Card */}
      <div
        className="relative overflow-hidden bg-white transition-all duration-500"
        style={{
          border: "1px solid #EDF7F0",
          padding: "48px 40px",
          minHeight: 320,
        }}
      >
        {/* Quote Icon Background */}
        <div
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            fontSize: 120,
            fontFamily: "Georgia, serif",
            color: "#EDF7F0",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          "
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-[140px_1fr]">
          {/* Photo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div
              style={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid #D4AF37",
                background: "#EDF7F0",
              }}
            >
              <img
                src={currentTestimonial.photo}
                alt={currentTestimonial.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' fill='%23EDF7F0'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' font-family='Georgia,serif' font-size='48' font-weight='700' fill='%231B4332'%3E" +
                    currentTestimonial.name.charAt(0) +
                    "%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>

            {/* Stars */}
            <div className="mt-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill="#D4AF37"
                  stroke="#D4AF37"
                  style={{ color: "#D4AF37" }}
                />
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "#111",
                fontSize: 17,
                lineHeight: 1.8,
                marginBottom: 24,
              }}
            >
              "{currentTestimonial.review}"
            </p>

            <div className="flex items-center justify-between">
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    color: "#1B4332",
                    fontSize: 18,
                  }}
                >
                  {currentTestimonial.name}
                </div>
                <a
                  href={currentTestimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 text-sm transition-colors"
                  style={{ color: "#D4AF37" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#c19f2e")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#D4AF37")}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  View LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200"
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "#1B4332",
          border: "2px solid #D4AF37",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 20,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "#2D6A4F";
          (e.currentTarget as HTMLElement).style.transform = "translate(-50%, -50%) scale(1.1)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "#1B4332";
          (e.currentTarget as HTMLElement).style.transform = "translate(-50%, -50%) scale(1)";
        }}
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={24} color="#D4AF37" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 transition-all duration-200"
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "#1B4332",
          border: "2px solid #D4AF37",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 20,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "#2D6A4F";
          (e.currentTarget as HTMLElement).style.transform = "translate(50%, -50%) scale(1.1)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "#1B4332";
          (e.currentTarget as HTMLElement).style.transform = "translate(50%, -50%) scale(1)";
        }}
        aria-label="Next testimonial"
      >
        <ChevronRight size={24} color="#D4AF37" />
      </button>

      {/* Indicator Dots */}
      <div className="mt-8 flex items-center justify-center gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="transition-all duration-300"
            style={{
              width: currentIndex === index ? 32 : 10,
              height: 10,
              borderRadius: 5,
              background: currentIndex === index ? "#D4AF37" : "#E0E0E0",
              border: "none",
              cursor: "pointer",
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
