import React, { useEffect } from 'react';
import { Target, TrendingUp, Code, Palette, ArrowRight } from 'lucide-react';
import { useAppDispatch, useServices } from '../hooks/useRedux';
import { fetchServices } from '../store/slices/dataSlice';
import { Button } from '@/components/ui/button';

const iconMap = {
  target: Target,
  'trending-up': TrendingUp,
  code: Code,
  palette: Palette,
};

const Services = () => {
  const dispatch = useAppDispatch();
  const { data: services, loading } = useServices();

  useEffect(() => {
    if (services.length === 0) {
      dispatch(fetchServices());
    }
  }, [dispatch, services.length]);

  if (loading) {
    return (
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg animate-pulse">
                <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-32 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Are We Capable Of?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine strategy, creativity, and technology to deliver exceptional digital experiences 
            that drive real business results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Target;
            const isActive = service.title === 'Brand Strategy';
            
            return (
              <div
                key={service.id}
                className={`group p-6 border rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                  isActive 
                    ? 'border-blue-500 bg-blue-50 shadow-md' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${
                  isActive 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-600 group-hover:bg-blue-600 group-hover:text-white'
                }`}>
                  <IconComponent size={24} />
                </div>
                
                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                  isActive ? 'text-blue-900' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>
                
                <p className={`text-gray-600 mb-4 ${isActive ? 'text-blue-700' : ''}`}>
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`text-sm flex items-center ${
                      isActive ? 'text-blue-600' : 'text-gray-500'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        isActive ? 'bg-blue-600' : 'bg-gray-400'
                      }`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className={`p-0 h-auto font-medium transition-colors duration-300 group/btn ${
                      isActive 
                        ? 'text-blue-600 hover:text-blue-700' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg group"
          >
            Discuss Your Project
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

