import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  photo: string;
  linkedin: string;
  review: string;
  date?: string;
  done?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Breattah Okeyo",
    photo: "/TESTIMONIALS/Breattah_Okeyo_Computer Science.jpeg",
    linkedin: "https://www.linkedin.com/in/breattah-okeyo-0693963b1/",
    review: "Joining SkillyMe is one of the best decisions I've made recently and I couldn't be more grateful for the outcome. From the mentorship, to teamwork, to tasks and contributions it was all an amazing experience. I learned it's not about being the best, but showing up with your best. What made SkillyMe different for me is that I learned not by watching YouTube videos but by building something that had to actually work. And it did.",
    date: "March 15, 2026",
    done: true,
  },
  {
    id: 2,
    name: "Maxmillin Muiruri Njuguna",
    photo: "/TESTIMONIALS/Maxmillian Muiruri Njuguna1.jpeg",
    linkedin: "https://www.linkedin.com/in/maxmillin-muiruri-njuguna/",
    review: "Being part of the SkillyMe program has been an amazing experience for me. It gave me a chance to grow my skills, work with a great team, and build real projects like PharmX. The collaboration, guidance, and hands-on practice really helped me improve my confidence as a developer. I'm grateful for the opportunity and proud to be part of the Tier 1 contributors.",
    date: "March 18, 2026",
    done: true,
  },
  {
    id: 3,
    name: "Chris Leo",
    photo: "/TESTIMONIALS/Chris_Leo.jpeg",
    linkedin: "https://www.linkedin.com/in/leo-chrisben-evans-a49570322/",
    review: "Participating in the Skillyme Africa Computer Science Cohort equipped me with practical skills in software development, allowing me to contribute to the creation of a genuine pharmacy application. The program pushed me to think critically, work collaboratively, and apply computer science principles beyond theoretical knowledge. I wholeheartedly recommend Skillyme Africa to anyone seeking to advance in the tech industry.",
    date: "March 20, 2026",
    done: true,
  },
  {
    id: 4,
    name: "Solomon Omondi Otieno",
    photo: "/TESTIMONIALS/Solomon_Omondi.jpeg",
    linkedin: "https://www.linkedin.com/in/solomon-omondi-83b2a7331",
    review: "I was always coding without direction, but Skillyme Africa gave me an identity. As a Public Health student, being recognized as a top contributor was a defining milestone. The program allowed me to balance my studies while building proficiency in full-stack development—leveraging AI and API architectures for social impact. I am deeply grateful to the team for trusting me and providing this opportunity to bridge the gap between passion and professional expertise.",
    date: "March 22, 2026",
    done: true,
  },
  {
    id: 5,
    name: "John Kamau",
    photo: "/TESTIMONIALS/John_Kamau_Expert_Machine _Learning_Engineer.jpeg",
    linkedin: "#",
    review: "I think Skillyme is an innovative platform for knowledge and skills transfer in the IT space. I am proud to have worked with such a motivated and professional team and look forward to more engagement in the future.",
    date: "March 25, 2026",
    done: true,
  },
  {
    id: 6,
    name: "Victor Chogo",
    photo: "/TESTIMONIALS/Victor_Chogo.jpeg",
    linkedin: "https://www.linkedin.com/in/victor-chogo",
    review: "Skillyme Cohort 1 is the most practical program I've been part of. From day one we were building a real full-stack system not toy projects and by Saturday we had something to actually demo and be proud of. The weekly structure keeps you accountable, the team dynamic pushes you harder than you'd push yourself alone, and the mentorship is genuinely invested in your growth. If you want to level up fast and learn by actually doing, this is the program. I came in as a developer. I'm leaving as an engineer.",
    date: "March 28, 2026",
    done: true,
  },
  {
    id: 7,
    name: "Yvonne Wangeci",
    photo: "/TESTIMONIALS/Yvonne_Wangeci.jpeg",
    linkedin: "https://www.linkedin.com/in/yvonne-wangeci-25664b274",
    review: "Even though I am an IT student I was just freestyling code with no structure or direction. That when I stumbled upon SkillyMe program I gained hands-on experience building real-world solutions with an amazing team. Together, we developed a system that pushed me to think critically and collaborate effectively. Now I can boldly say that SkillyMe has transformed me from someone who simply writes code into someone who builds systems with purpose, clarity, and confidence, with much stronger understanding of how real development works.",
    date: "April 2, 2026",
    done: true,
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  // Get initials for avatar fallback
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #E0E0E0",
        borderRadius: 8,
        padding: "20px 24px",
        marginBottom: 16,
      }}
    >
      {/* Header: Avatar + Name + Date */}
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            overflow: "hidden",
            background: "#1DB8A0",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={testimonial.photo}
            alt={testimonial.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              if (target.parentElement) {
                target.parentElement.innerHTML = `<span style="color: #fff; font-family: var(--font-display); font-size: 16px; font-weight: 600;">${initials}</span>`;
              }
            }}
          />
        </div>

        {/* Name */}
        <div className="flex-1">
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              color: "#0D1E2C",
              fontSize: 16,
              lineHeight: 1.3,
            }}
          >
            {testimonial.name}
          </div>
        </div>
      </div>

      {/* Stars + Date */}
      <div className="mt-3 flex items-center gap-3">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              fill="#1DB8A0"
              stroke="#1DB8A0"
              style={{ color: "#1DB8A0" }}
            />
          ))}
        </div>
        {testimonial.date && (
          <span
            style={{
              color: "#6B7280",
              fontSize: 13,
              fontWeight: 400,
            }}
          >
            {testimonial.date}
          </span>
        )}
      </div>

      {/* Review Text */}
      <p
        className="mt-3"
        style={{
          color: "#374151",
          fontSize: 14,
          lineHeight: 1.7,
          fontWeight: 400,
        }}
      >
        {testimonial.review}
      </p>

      {/* LinkedIn Link */}
      {testimonial.linkedin && testimonial.linkedin !== "#" && (
        <a
          href={testimonial.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 transition-colors"
          style={{
            color: "#1DB8A0",
            fontSize: 13,
            textDecoration: "none",
            fontWeight: 500,
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#17a089")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#1DB8A0")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          View LinkedIn
        </a>
      )}
    </div>
  );
}

export function TestimonialsCarousel() {
  return (
    <div className="mx-auto max-w-[900px] px-6">
      {/* Testimonials List */}
      <div>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}
