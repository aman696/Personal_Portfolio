
const experienceData = [
  {
    role: "Software Developer Intern",
    company: "Quant Scientist",
    location: "Remote",
    dateRange: "Feb. 2024 – Nov. 2024",
    details: [
      "Developed InterxTV, a video streaming platform with embedded quizzes and gamified features to boost user retention.",
      "Enhanced series creation with real-time analytics, progress tracking, and advanced content management for paid/free content.",
      "Integrated AI-powered accessibility tools (speech-to-text, sign-language interpreters), increasing inclusivity by 30%.",
      "Automated H5P workflows using Python and UI Path, cutting manual video production effort by 80%.",
      "Collaborated with cross-functional teams to deliver scalable, user-focused solutions under tight deadlines.",
    ],
  },
  {
    role: "Freelance Software Developer",
    company: "AI Gym Tool Project",
    location: "Remote",
    dateRange: "Dec. 2024 – Feb. 2025",
    details: [
      "Created an AI Gym Tool to track exercise form, provide personalized diet plans, and generate workout routines.",
      "Utilized computer vision and machine learning to analyze real-time exercise form, improving accuracy by 25%.",
      "Designed a scalable backend with Python and MySQL to process user data and deliver tailored fitness recommendations.",
      "Developed a user-friendly React frontend for seamless interaction and real-time feedback.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gradient text-center">
          Experience
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          {experienceData.map((exp, index) => (
            <div key={index} className="flex-1">
              <div className="glass-card p-6 hover-lift flex flex-col h-full transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold">{exp.role}</h3>
                    <p className="text-xs sm:text-sm text-hero-text/80 mt-1">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <p className="mt-2 sm:mt-0 text-xs sm:text-sm font-medium text-hero-text/50">
                    {exp.dateRange}
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base ml-4 flex-grow">
                  {exp.details.map((item, idx) => (
                    <li key={idx} className="leading-relaxed text-hero-text/90">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
