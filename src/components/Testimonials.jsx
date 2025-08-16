import React, { useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { useAppDispatch, useTestimonials, useActiveTestimonial } from '../hooks/useRedux';
import { fetchTestimonials } from '../store/slices/dataSlice';
import { setActiveTestimonial } from '../store/slices/uiSlice';

const Testimonials = () => {
  const dispatch = useAppDispatch();
  const { data: testimonials, loading } = useTestimonials();
  const activeTestimonial = useActiveTestimonial();

  useEffect(() => {
    if (testimonials.length === 0) {
      dispatch(fetchTestimonials());
    }
  }, [dispatch, testimonials.length]);

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        const nextIndex = (activeTestimonial + 1) % testimonials.length;
        dispatch(setActiveTestimonial(nextIndex));
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [activeTestimonial, testimonials.length, dispatch]);

  if (loading) {
    return (
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 bg-blue-500 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-blue-500 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-500 rounded-lg p-8 animate-pulse">
              <div className="h-6 bg-blue-400 rounded w-full mb-4"></div>
              <div className="h-6 bg-blue-400 rounded w-3/4 mb-8"></div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-blue-400 rounded-full mr-4"></div>
                <div>
                  <div className="h-4 bg-blue-400 rounded w-32 mb-2"></div>
                  <div className="h-3 bg-blue-400 rounded w-24"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) return null;

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about 
            working with Digital Spaniel.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <Quote size={48} className="text-blue-300" />
            </div>

            {/* Testimonial Content */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    size={24}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg lg:text-xl leading-relaxed mb-8 font-medium">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-white"
                />
                <div className="text-left">
                  <div className="font-semibold text-lg">{currentTestimonial.name}</div>
                  <div className="text-blue-200">
                    {currentTestimonial.position} at {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => dispatch(setActiveTestimonial(index))}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-white scale-125'
                    : 'bg-white bg-opacity-40 hover:bg-opacity-60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 cursor-pointer hover:bg-opacity-20 ${
                index === activeTestimonial ? 'ring-2 ring-white' : ''
              }`}
              onClick={() => dispatch(setActiveTestimonial(index))}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-blue-200 text-xs">{testimonial.company}</div>
                </div>
              </div>
              <p className="text-sm text-blue-100 line-clamp-3">
                "{testimonial.content.substring(0, 100)}..."
              </p>
              <div className="flex mt-3">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={16}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

