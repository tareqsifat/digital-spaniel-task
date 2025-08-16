import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useAppDispatch, useProjects, useActiveProject } from '../hooks/useRedux';
import { fetchProjects } from '../store/slices/dataSlice';
import { setActiveProject } from '../store/slices/uiSlice';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const dispatch = useAppDispatch();
  const { data: projects, loading } = useProjects();
  const activeProject = useActiveProject();
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Web Design', 'Mobile App', 'Branding', 'E-commerce'];

  useEffect(() => {
    if (projects.length === 0) {
      dispatch(fetchProjects());
    }
  }, [dispatch, projects.length]);

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const handlePrevProject = () => {
    const newIndex = activeProject > 0 ? activeProject - 1 : filteredProjects.length - 1;
    dispatch(setActiveProject(newIndex));
  };

  const handleNextProject = () => {
    const newIndex = activeProject < filteredProjects.length - 1 ? activeProject + 1 : 0;
    dispatch(setActiveProject(newIndex));
  };

  if (loading) {
    return (
      <section id="work" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200 rounded w-80 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded w-32 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Some Of Our Recent Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful digital projects that have helped businesses 
            achieve their goals and exceed expectations.
          </p>
        </div>

        {/* Project Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                dispatch(setActiveProject(0));
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-blue-600 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Featured Project Slider */}
        {filteredProjects.length > 0 && (
          <div className="mb-16">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Project Image */}
                <div className="relative group overflow-hidden">
                  <img
                    src={filteredProjects[activeProject]?.image}
                    alt={filteredProjects[activeProject]?.title}
                    className="w-full h-64 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-blue-600 hover:bg-blue-50"
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      View Project
                    </Button>
                  </div>
                  {/* Special hover state for "Make Ideas Happen" project */}
                  {filteredProjects[activeProject]?.title.includes('Ideas') && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {filteredProjects[activeProject]?.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {filteredProjects[activeProject]?.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-lg">
                    {filteredProjects[activeProject]?.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {filteredProjects[activeProject]?.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white w-fit"
                    onClick={() => window.open(filteredProjects[activeProject]?.link, '_blank')}
                  >
                    View Case Study
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrevProject}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-700 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={handleNextProject}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-700 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>

              {/* Project Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => dispatch(setActiveProject(index))}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === activeProject
                        ? 'bg-blue-600 scale-125'
                        : 'bg-white bg-opacity-60 hover:bg-opacity-80'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, 6).map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              onClick={() => dispatch(setActiveProject(index))}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-50 text-gray-600 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-50 text-gray-600 px-2 py-1 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

