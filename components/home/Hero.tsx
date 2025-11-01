'use client';

import Link from 'next/link';
import { Download, Play, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Trusted by 10,000+ students</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Find your perfect hostel,{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                stress-free
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Connect with verified hostels and trusted landlords in Bamenda. Your journey to safe, comfortable accommodation starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 bg-gray-900 text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl group"
              >
                <Play className="w-6 h-6 fill-white" />
                <div className="text-left">
                  <div className="text-xs text-gray-300">Get it on</div>
                  <div className="text-base font-semibold">Google Play</div>
                </div>
              </a>

              <a
                href="https://apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 bg-white text-gray-900 px-6 py-4 rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl border border-gray-200 group"
              >
                <Download className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">Download on</div>
                  <div className="text-base font-semibold">App Store</div>
                </div>
              </a>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Verified Hostels</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900">4.8</div>
                <div className="text-sm text-gray-600">App Rating</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="relative">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <div className="relative mx-auto w-64 h-[500px] bg-gray-900 rounded-[3rem] shadow-2xl overflow-hidden border-8 border-gray-800">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl"></div>

                <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-100 p-6 flex flex-col items-center justify-center space-y-6">
                  <div className="w-full bg-white rounded-2xl shadow-lg p-4 space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-16 h-16 bg-emerald-100 rounded-xl"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="flex-1 h-8 bg-emerald-500 rounded-lg"></div>
                      <div className="flex-1 h-8 bg-gray-200 rounded-lg"></div>
                    </div>
                  </div>

                  <div className="w-full bg-white rounded-2xl shadow-lg p-4 space-y-3">
                    <div className="h-32 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-xl"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="absolute -top-6 -right-6 w-72 h-72 bg-emerald-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-teal-200 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
