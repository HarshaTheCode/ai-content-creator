import React, { useContext, useState } from 'react';
import { LLMcontext } from '../context/LLMresponse';
import Navcomponent from '../components/Navcomponent';
import GlassCard from '../components/ui/GlassCard';
import NeonButton from '../components/ui/NeonButton';
import NeonInput from '../components/ui/NeonInput';
import NeonTextArea from '../components/ui/NeonTextArea';
import PageLayout from '../components/ui/PageLayout';

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
    // You can now use the formData object
    console.log(formData);
    // TODO: Add logic to send data to the backend or another component
  };

  return (
    <PageLayout>
      <Navcomponent />

      <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8">

        {/* Left Side: Form */}
        <div className="w-full lg:w-3/5">
          <GlassCard className="animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">
              Enter Your Details
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                <NeonInput name="name" label="Full Name" placeholder="Your full name" value={formData.name} onChange={handleChange} />
                <NeonInput name="email" label="Email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} />
                <NeonInput name="phone" label="Phone" type="tel" placeholder="Your phone number" value={formData.phone} onChange={handleChange} />
                <NeonInput name="location" label="Location" placeholder="City, Country" value={formData.location} onChange={handleChange} />
                <NeonInput name="linkedin" label="LinkedIn" placeholder="Profile URL" value={formData.linkedin} onChange={handleChange} />
                <NeonInput name="website" label="Website" placeholder="Portfolio URL" value={formData.website} onChange={handleChange} />
              </div>

              <div className="my-8 border-t border-white/10" />

              {/* Summary */}
              <NeonTextArea name="summary" label="Professional Summary" placeholder="A brief professional summary about yourself." value={formData.summary} onChange={handleChange} />

              <div className="my-8 border-t border-white/10" />

              {/* Skills */}
              <NeonTextArea name="skills" label="Skills" placeholder="List your skills, separated by commas (e.g., React, Node.js, Python)" value={formData.skills} onChange={handleChange} />

              <div className="my-8 border-t border-white/10" />

              {/* Experience */}
              <h3 className="text-xl font-semibold mb-4 text-gray-200">Experience</h3>
              <NeonTextArea name="experience" placeholder="Describe your work experience. You can add multiple roles." value={formData.experience} onChange={handleChange} />

              <div className="my-8 border-t border-white/10" />

              {/* Education */}
              <h3 className="text-xl font-semibold mb-4 text-gray-200">Education</h3>
              <NeonTextArea name="education" placeholder="List your degrees or relevant education." value={formData.education} onChange={handleChange} />

              <div className="my-8 border-t border-white/10" />

              {/* Projects */}
              <h3 className="text-xl font-semibold mb-4 text-gray-200">Projects</h3>
              <NeonTextArea name="projects" placeholder="Describe personal or professional projects you have worked on." value={formData.projects} onChange={handleChange} />

              <div className="my-8 border-t border-white/10" />

              {/* Certifications */}
              <h3 className="text-xl font-semibold mb-4 text-gray-200">Certifications</h3>
              <NeonTextArea name="certifications" placeholder="List any certifications you have earned." value={formData.certifications} onChange={handleChange} />

              <div className="mt-10 text-center">
                <NeonButton onClick={axiosfecting} className="w-full md:w-auto text-lg">
                  Generate Resume
                </NeonButton>
              </div>
            </form>
          </GlassCard>
        </div>

        {/* Right Side: Result Preview */}
        <div className="w-full lg:w-2/5">
          <div className="sticky top-10">
            <GlassCard className="h-[80vh] flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-gray-200">Generated Result</h3>
              <div className="flex-grow overflow-hidden relative rounded-xl bg-black/50 border border-white/10">
                <pre className='w-full h-full overflow-y-auto p-6 text-xs text-gray-300 font-mono hide-vertical'>
                  <code>
                    {resumedata || "Your generated resume content will appear here..."}
                  </code>
                </pre>
              </div>
            </GlassCard>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default Details;