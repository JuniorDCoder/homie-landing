import { Target, Eye, Shield, Users, Award, Heart } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'All hostels are verified and landlords are screened for your security.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Built by students, for students. We understand your needs.',
  },
  {
    icon: Award,
    title: 'Quality Standards',
    description: 'Only the best accommodations make it to our platform.',
  },
  {
    icon: Heart,
    title: 'Student Support',
    description: '24/7 support to help you every step of the way.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About Homie
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're on a mission to make student accommodation search stress-free, transparent, and secure.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Homie was born from a real challenge faced by students in Bamenda. Finding safe, affordable, and quality accommodation was a stressful and time-consuming process filled with uncertainty.
                </p>
                <p>
                  We saw students struggling with unreliable listings, lack of transparency, and safety concerns. That's when we decided to create a platform that would change everything.
                </p>
                <p>
                  Today, Homie connects thousands of students with verified hostels and trusted landlords, making the accommodation search process seamless and secure. We've built a community where transparency, safety, and trust come first.
                </p>
              </div>
            </div>

            <div data-aos="fade-left" className="relative">
              <img
                src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold mb-1">10,000+</div>
                <div className="text-emerald-100">Happy Students</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: 'Verified Hostels', value: '500+' },
                    { label: 'Active Users', value: '10K+' },
                    { label: 'Cities Covered', value: '5+' },
                    { label: 'App Rating', value: '4.8' },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                    >
                      <div className="text-3xl font-bold mb-1">{stat.value}</div>
                      <div className="text-emerald-100 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div data-aos="fade-left" className="order-1 lg:order-2">
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-emerald-500/20 rounded-full px-4 py-2 mb-4">
                  <Target className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-300 font-medium">Our Mission</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Making Housing Accessible
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  To revolutionize student accommodation by providing a secure, transparent, and user-friendly platform that connects students with verified hostels and trusted landlords.
                </p>
              </div>

              <div>
                <div className="inline-flex items-center space-x-2 bg-teal-500/20 rounded-full px-4 py-2 mb-4">
                  <Eye className="w-5 h-5 text-teal-400" />
                  <span className="text-teal-300 font-medium">Our Vision</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  A Home for Every Student
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  To become the leading accommodation platform across Cameroon and beyond, where every student can find their perfect home with confidence and ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-xl mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
