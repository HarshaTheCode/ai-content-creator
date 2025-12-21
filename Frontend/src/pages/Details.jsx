import React, { useContext, useState } from 'react';
import { LLMcontext } from '../context/LLMresponse';
import Navcomponent from '../components/Navcomponent';

const InputField = ({ label, name, value, onChange, type = "text", placeholder }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={name} className="text-xs font-semibold uppercase tracking-wider text-gray-500">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all duration-200 shadow-sm hover:border-gray-300"
    />
  </div>
);

const TextAreaField = ({ label, name, value, onChange, placeholder }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={name} className="text-xs font-semibold uppercase tracking-wider text-gray-500">
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={5}
      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all duration-200 shadow-sm hover:border-gray-300 resize-y"
    />
  </div>
);

const Details = () => {
  const [resumedata, axiosfecting] = useContext(LLMcontext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    website: '',
    summary: '',
    skills: '',
    experience: '',
    education: '',
    projects: '',
    certifications: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Trigger the context function if needed, mainly controlled by the button onClick in original
  };

  return (
    <div className="min-h-screen bg-[#FDFBF6] text-[#1a1a1a] selection:bg-black/10">
      <Navcomponent />

      <main className="container mx-auto px-4 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left Side: Form */}
          <div className="w-full lg:w-[60%] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] mb-3">
                Build Your Resume
              </h1>
              <p className="text-lg text-gray-600">
                Enter your details below and use our AI to craft a perfect resume.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">

              {/* Personal Information */}
              <section className="space-y-6">
                <h2 className="text-xl font-serif italic text-[#1a1a1a] border-b border-gray-200 pb-2">
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField name="name" label="Full Name" placeholder="e.g. Alex Morgan" value={formData.name} onChange={handleChange} />
                  <InputField name="email" label="Email" type="email" placeholder="e.g. alex@example.com" value={formData.email} onChange={handleChange} />
                  <InputField name="phone" label="Phone" type="tel" placeholder="e.g. +1 (555) 000-0000" value={formData.phone} onChange={handleChange} />
                  <InputField name="location" label="Location" placeholder="e.g. San Francisco, CA" value={formData.location} onChange={handleChange} />
                  <InputField name="linkedin" label="LinkedIn" placeholder="e.g. linkedin.com/in/alex" value={formData.linkedin} onChange={handleChange} />
                  <InputField name="website" label="Website" placeholder="e.g. alexmorgan.dev" value={formData.website} onChange={handleChange} />
                </div>
              </section>

              {/* Summary */}
              <section className="space-y-6">
                <h2 className="text-xl font-serif italic text-[#1a1a1a] border-b border-gray-200 pb-2">
                  Professional Summary
                </h2>
                <TextAreaField
                  name="summary"
                  label="Summary"
                  placeholder="Briefly describe your professional background and goals..."
                  value={formData.summary}
                  onChange={handleChange}
                />
              </section>

              {/* Skills */}
              <section className="space-y-6">
                <h2 className="text-xl font-serif italic text-[#1a1a1a] border-b border-gray-200 pb-2">
                  Skills
                </h2>
                <TextAreaField
                  name="skills"
                  label="Skills List"
                  placeholder="React, Node.js, Python, TypeScript, etc."
                  value={formData.skills}
                  onChange={handleChange}
                />
              </section>

              {/* Experience */}
              <section className="space-y-6">
                <h2 className="text-xl font-serif italic text-[#1a1a1a] border-b border-gray-200 pb-2">
                  Experience
                </h2>
                <TextAreaField
                  name="experience"
                  label="Work History"
                  placeholder="Software Engineer at Tech Co (2020-Present)..."
                  value={formData.experience}
                  onChange={handleChange}
                />
              </section>

              {/* Education */}
              <section className="space-y-6">
                <h2 className="text-xl font-serif italic text-[#1a1a1a] border-b border-gray-200 pb-2">
                  Education
                </h2>
                <TextAreaField
                  name="education"
                  label="Education Details"
                  placeholder="BS in Computer Science, State University..."
                  value={formData.education}
                  onChange={handleChange}
                />
              </section>

              {/* Projects */}
              <section className="space-y-6">
                <h2 className="text-xl font-serif italic text-[#1a1a1a] border-b border-gray-200 pb-2">
                  Projects
                </h2>
                <TextAreaField
                  name="projects"
                  label="Key Projects"
                  placeholder="Project Name: Description of what you built and technologies used..."
                  value={formData.projects}
                  onChange={handleChange}
                />
              </section>

              {/* Certifications */}
              <section className="space-y-6">
                <h2 className="text-xl font-serif italic text-[#1a1a1a] border-b border-gray-200 pb-2">
                  Certifications
                </h2>
                <TextAreaField
                  name="certifications"
                  label="Certifications"
                  placeholder="AWS Solutions Architect, Google Professional Developer..."
                  value={formData.certifications}
                  onChange={handleChange}
                />
              </section>

              <div className="pt-8">
                <button
                  type="button"
                  onClick={axiosfecting}
                  className="w-full md:w-auto px-8 py-4 bg-[#1a1a1a] text-white rounded-lg font-medium text-lg hover:bg-black transition-all shadow-lg hover:shadow-xl active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  Generate Resume
                </button>
              </div>

            </form>
          </div>

          {/* Right Side: Result Preview */}
          <div className="w-full lg:w-[40%]">
            <div className="sticky top-28 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col h-[calc(100vh-140px)]">
                <div className="p-4 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Preview</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                  </div>
                </div>

                <div className="flex-grow overflow-auto p-0 bg-[#1e1e1e] relative">
                  {/* Using a darker background for code/preview contrast, or keep it light paper? 
                       The previous one used black/50. Users often associate 'code' with dark mode.
                       But if it's the RESUME document, it should be white paper?
                       The user had <pre><code> which implies code/markdown output.
                       I will stick to a dark code editor look for the PREVIEW as it contrasts nicely with the light page.
                   */}
                  <pre className="w-full h-full p-6 text-sm font-mono text-gray-300 leading-relaxed whitespace-pre-wrap">
                    <code>
                      {resumedata || "// Your generated resume content will appear here...\n// Fill out the form to the left to get started."}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Details;