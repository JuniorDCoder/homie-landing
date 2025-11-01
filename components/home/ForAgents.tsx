import { BarChart3, Shield, TrendingUp, Users } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Verification Badge',
    description: 'Get verified and stand out to potential tenants with our trust badge.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track views, inquiries, and bookings with comprehensive analytics.',
  },
  {
    icon: Users,
    title: 'Direct Communication',
    description: 'Connect directly with students through our secure chat platform.',
  },
  {
    icon: TrendingUp,
    title: 'Increase Visibility',
    description: 'Reach thousands of students actively searching for accommodation.',
  },
];

export default function ForAgents() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              For Agents & Landlords
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Join our platform and connect with thousands of students looking for verified accommodations. Manage your listings, communicate with tenants, and grow your business.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="space-y-3"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500/20 rounded-xl">
                    <benefit.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl">
                Register as Agent
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all border border-white/20">
                Learn More
              </button>
            </div>
          </div>

          <div data-aos="fade-left" className="relative">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-emerald-100">Total Views</span>
                    <TrendingUp className="w-5 h-5 text-emerald-200" />
                  </div>
                  <div className="text-4xl font-bold mb-2">12,450</div>
                  <div className="text-sm text-emerald-100">+23% this month</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-emerald-100">Active Listings</span>
                    <BarChart3 className="w-5 h-5 text-emerald-200" />
                  </div>
                  <div className="text-4xl font-bold mb-2">24</div>
                  <div className="text-sm text-emerald-100">8 pending approval</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-emerald-100">Messages</span>
                    <Users className="w-5 h-5 text-emerald-200" />
                  </div>
                  <div className="text-4xl font-bold mb-2">38</div>
                  <div className="text-sm text-emerald-100">5 unread</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
