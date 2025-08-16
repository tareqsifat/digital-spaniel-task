import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useAppDispatch, useCaseStudies, useActiveCaseStudy } from '../hooks/useRedux';
import { fetchCaseStudies } from '../store/slices/dataSlice';
import { setActiveCaseStudy } from '../store/slices/uiSlice';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  const dispatch = useAppDispatch();
  const { data: caseStudies, loading } = useCaseStudies();
  const activeCaseStudy = useActiveCaseStudy();

  useEffect(() => {
    if (caseStudies.length === 0) {
      dispatch(fetchCaseStudies());
    }
  }, [dispatch, caseStudies.length]);

  const handlePrevCase = () => {
    const newIndex = activeCaseStudy > 0 ? activeCaseStudy - 1 : caseStudies.length - 1;
    dispatch(setActiveCaseStudy(newIndex));
  };

  const handleNextCase = () => {
    const newIndex = activeCaseStudy < caseStudies.length - 1 ? activeCaseStudy + 1 : 0;
    dispatch(setActiveCaseStudy(newIndex));
  };

  const getVisibleCases = () => {
    if (caseStudies.length === 0) return [];
    
    const cases = [];
    const totalCases = caseStudies.length;
    
    // Previous case
    const prevIndex = activeCaseStudy > 0 ? activeCaseStudy - 1 : totalCases - 1;
    cases.push({ ...caseStudies[prevIndex], position: 'prev' });
    
    // Active case
    cases.push({ ...caseStudies[activeCaseStudy], position: 'active' });
    
    // Next case
    const nextIndex = activeCaseStudy < totalCases - 1 ? activeCaseStudy + 1 : 0;
    cases.push({ ...caseStudies[nextIndex], position: 'next' });
    
    return cases;
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="relative h-96 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </section>
    );
  }

  const visibleCases = getVisibleCases();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dive deep into our most successful projects and discover how we've helped 
            businesses transform their digital presence and achieve remarkable results.
          </p>
        </div>

        {/* Case Studies Slider */}
        <div className="relative">
          <div className="flex items-center justify-center min-h-[500px]">
            {visibleCases.map((caseStudy, index) => {
              const isActive = caseStudy.position === 'active';
              const isPrev = caseStudy.position === 'prev';
              const isNext = caseStudy.position === 'next';
              
              return (
                <div
                  key={`${caseStudy.id}-${caseStudy.position}`}
                  className={`absolute transition-all duration-500 ease-in-out ${
                    isActive
                      ? 'z-20 scale-100 opacity-100 translate-x-0'
                      : isPrev
                      ? 'z-10 scale-75 opacity-60 -translate-x-80'
                      : 'z-10 scale-75 opacity-60 translate-x-80'
                  }`}
                >
                  <div className={`bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto ${
                    isActive ? 'shadow-2xl' : 'shadow-lg'
                  }`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Case Study Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={caseStudy.image}
                          alt={caseStudy.title}
                          className={`w-full h-64 lg:h-80 object-cover transition-transform duration-500 ${
                            isActive ? 'scale-100' : 'scale-110'
                          }`}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {caseStudy.category}
                          </span>
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <span className="bg-white bg-opacity-90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                            {caseStudy.year}
                          </span>
                        </div>
                      </div>

                      {/* Case Study Content */}
                      <div className="p-8 lg:p-10 flex flex-col justify-center">
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-blue-600 mb-1">
                            Client: {caseStudy.client}
                          </h4>
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                          {caseStudy.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                          {caseStudy.description}
                        </p>
                        
                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2">
                            {caseStudy.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {isActive && (
                          <Button 
                            className="bg-blue-600 hover:bg-blue-700 text-white w-fit group"
                          >
                            Read Full Case Study
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevCase}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-30"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={handleNextCase}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-30"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Case Study Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => dispatch(setActiveCaseStudy(index))}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === activeCaseStudy
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg group"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

