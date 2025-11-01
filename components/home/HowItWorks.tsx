import { Search, MessageCircle, Home } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Search & Explore',
    description: 'Browse through hundreds of verified hostels with detailed photos, reviews, and pricing.',
  },
  {
    icon: MessageCircle,
    title: 'Contact Landlord',
    description: 'Chat directly with landlords, ask questions, and schedule viewings at your convenience.',
  },
  {
    icon: Home,
    title: 'Move In',
    description: 'Complete your booking securely and move into your new home with confidence.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Finding your perfect hostel is just three simple steps away
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-700 text-xl shadow-md">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
