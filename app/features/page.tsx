import {
  Search,
  MapPin,
  Star,
  Heart,
  MessageCircle,
  Shield,
  BarChart3,
  Users,
  Globe,
  AlertCircle,
  Camera,
  Bell,
} from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Smart Hostel Search',
    description: 'Advanced filters to find hostels by location, price, amenities, and more.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: MapPin,
    title: 'Interactive Map View',
    description: 'Explore hostels on an interactive map and see what\'s nearby.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Star,
    title: 'Ratings & Reviews',
    description: 'Read honest reviews from real students who lived there.',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: Heart,
    title: 'Wishlist',
    description: 'Save your favorite hostels and compare them later.',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: MessageCircle,
    title: 'Direct Chat',
    description: 'Message landlords directly and get instant responses.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Shield,
    title: 'Verified Listings',
    description: 'All hostels are verified for your safety and peace of mind.',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: BarChart3,
    title: 'Agent Analytics',
    description: 'Landlords get detailed analytics on views and inquiries.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Users,
    title: 'Community Forum',
    description: 'Connect with other students and share experiences.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    description: 'Use the app in English, French, and more languages.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: AlertCircle,
    title: 'Emergency Contacts',
    description: 'Quick access to important contacts in case of emergencies.',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Camera,
    title: 'Photo Gallery',
    description: 'Browse high-quality photos of hostels and rooms.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Get alerts for new listings, price drops, and messages.',
    color: 'from-amber-500 to-amber-600',
  },
];

export default function FeaturesPage() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to find your perfect hostel in one app
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-emerald-200"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute top-4 right-4 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-emerald-600 font-bold text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="zoom-in" className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-emerald-50 mb-8">
              Download Homie now and discover why thousands of students trust us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-lg">
                Download for Android
              </button>
              <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg">
                Download for iOS
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
