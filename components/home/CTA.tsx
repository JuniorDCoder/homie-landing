import { Download, Play } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-aos="zoom-in"
          className="relative bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Find Your Perfect Home?
            </h2>
            <p className="text-lg text-emerald-50 mb-10 max-w-2xl mx-auto">
              Download Homie today and join thousands of students who found their ideal accommodation with ease.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl group"
              >
                <Play className="w-6 h-6 fill-gray-900" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">Get it on</div>
                  <div className="text-base font-semibold">Google Play</div>
                </div>
              </a>

              <a
                href="https://apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl group"
              >
                <Download className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on</div>
                  <div className="text-base font-semibold">App Store</div>
                </div>
              </a>
            </div>
          </div>

          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
