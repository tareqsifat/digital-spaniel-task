import React, { useEffect } from 'react';
import { useAppDispatch, useGalleryImages } from '../hooks/useRedux';
import { fetchGalleryImages } from '../store/slices/dataSlice';

const About = () => {
  const dispatch = useAppDispatch();
  const { data: galleryImages, loading } = useGalleryImages();

  useEffect(() => {
    if (galleryImages.length === 0) {
      dispatch(fetchGalleryImages());
    }
  }, [dispatch, galleryImages.length]);

  if (loading) {
    return (
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200 rounded w-80 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6">
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className={`bg-gray-200 rounded-lg mb-6 animate-pulse ${
                  index % 3 === 0 ? 'h-64' : index % 3 === 1 ? 'h-48' : 'h-80'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Are We All About?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're a passionate team of creators, strategists, and innovators who believe in the power 
            of great design and technology to transform businesses and create meaningful connections.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Our Story
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded with a vision to bridge the gap between creativity and technology, Digital Spaniel 
              has grown from a small team of dreamers to a full-service digital agency that partners 
              with businesses of all sizes.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We believe that every brand has a unique story to tell, and our mission is to help you 
              tell that story in the most compelling and effective way possible through innovative 
              digital solutions.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Our Approach
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              We combine strategic thinking with creative execution, ensuring that every project we 
              undertake is not just visually stunning, but also drives real business results for our clients.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our collaborative approach means we work closely with you throughout the entire process, 
              from initial concept to final delivery, ensuring your vision is brought to life exactly 
              as you imagined.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">C</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Creativity</h4>
            <p className="text-gray-600">
              We push boundaries and think outside the box to deliver innovative solutions that stand out.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">Q</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Quality</h4>
            <p className="text-gray-600">
              We maintain the highest standards in everything we do, from design to development to delivery.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">P</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Partnership</h4>
            <p className="text-gray-600">
              We believe in building long-term relationships and becoming an extension of your team.
            </p>
          </div>
        </div>

        {/* Masonry Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
            Behind The Scenes
          </h3>
          
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="break-inside-avoid mb-6 group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">300+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

