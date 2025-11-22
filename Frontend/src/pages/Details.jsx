import React, { useContext, useState } from 'react';
import { LLMcontext } from '../context/LLMresponse';
import Navcomponent from '../components/Navcomponent';

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

  const renderInput = (name, placeholder, type = 'text') => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-300 text-sm font-bold mb-2 capitalize">
        {name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleChange}
        className="w-full px-3 py-2 text-white bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );

  const renderTextarea = (name, placeholder) => (
     <div className="mb-6">
      <label htmlFor={name} className="block text-gray-300 text-sm font-bold mb-2 capitalize">
        {name}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleChange}
        rows="4"
        className="w-full px-3 py-2 text-white bg-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500"
      ></textarea>
    </div>
  );

  return (<>

    <div className="min-h-screen bg-black text-white">
      <Navcomponent/>
      <div className="w-full max-w-4xl mx-auto p-8 my-10 bg-black text-white rounded-lg border border-gray-700">
      <h2 className="text-3xl font-bold mb-8 text-center">Enter Your Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 ">
          {renderInput('name', 'Your full name')}
          {renderInput('email', 'your.email@example.com', 'email')}
          {renderInput('phone', 'Your phone number', 'tel')}
          {renderInput('location', 'City, Country')}
          {renderInput('linkedin', 'Your LinkedIn profile URL')}
          {renderInput('website', 'Your personal website or portfolio')}
        </div>

        <hr className="my-6 border-gray-600 " />

        {/* Summary */}
        {renderTextarea('summary', 'A brief professional summary about yourself.')}

        <hr className="my-6 border-gray-600" />

        {/* Skills */}
        {renderTextarea('skills', 'List your skills, separated by commas (e.g., React, Node.js, Python)')}

        <hr className="my-6 border-gray-600" />

        {/* Experience */}
        <h3 className="text-xl font-semibold mb-4">Experience</h3>
        {renderTextarea(
            'experience',
            'Describe your work experience. You can add multiple roles.'
        )}

        <hr className="my-6 border-gray-600" />

        {/* Education */}
        <h3 className="text-xl font-semibold mb-4">Education</h3>
        {renderTextarea(
            'education',
            'List your degrees or relevant education.'
        )}

        <hr className="my-6 border-gray-600" />

        {/* Projects */}
        <h3 className="text-xl font-semibold mb-4">Projects</h3>
        {renderTextarea(
            'projects',
            'Describe personal or professional projects you have worked on.'
        )}

        <hr className="my-6 border-gray-600" />

        {/* Certifications */}
        <h3 className="text-xl font-semibold mb-4">Certifications</h3>
        {renderTextarea(
            'certifications',
            'List any certifications you have earned.'
        )}

        <div className="mt-8 text-center">
         
          <button onClick={axiosfecting} className="px-8 py-3 bg-white text-black font-bold rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors"
      
      >click </button>
        </div>
      </form>
    </div>
      <div className='w-full max-w-4xl mx-auto px-8 pb-8'>
        <pre className='w-full bg-black border border-gray-700 mb-10 overflow-y-scroll overflow-x-auto hide-vertical rounded-2xl p-10 text-white text-sm' >
         
          <code>
            {resumedata}
            </code>
            
          </pre>
      </div>
    </div>
      </>
  );
};

export default Details;

// className="px-8 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"