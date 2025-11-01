'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Ngum',
    role: 'Engineering Student',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Homie made finding accommodation in Bamenda so easy! The verification process gave me peace of mind, and I found my perfect hostel within days.',
  },
  {
    name: 'Emmanuel Tanyi',
    role: 'Medical Student',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'The chat feature is incredible. I could ask landlords questions directly and even schedule viewings through the app. Highly recommend!',
  },
  {
    name: 'Grace Fon',
    role: 'Business Student',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'As an international student, finding safe accommodation was my biggest worry. Homie connected me with verified hostels and made the process seamless.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Students Say
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of satisfied students who found their perfect home with Homie
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div data-aos="zoom-in" className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-24 h-24 rounded-full object-cover shadow-lg"
              />

              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start space-x-1 mb-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonials[current].text}"
                </p>

                <div>
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[current].name}
                  </div>
                  <div className="text-emerald-600 text-sm">
                    {testimonials[current].role}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-emerald-100 hover:bg-emerald-200 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-emerald-700" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === current
                        ? 'w-8 bg-emerald-600'
                        : 'bg-emerald-200 hover:bg-emerald-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-full bg-emerald-100 hover:bg-emerald-200 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-emerald-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
