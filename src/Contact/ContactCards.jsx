import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function ContactCards() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Mohammed Nayeemuddin Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src="/Contact/MohammedNayeemuddin.avif"
                alt="Mohammed Nayeemuddin"
                className="w-full h-80 object-cover"
              />
            </div>

            <div className="bg-blue-600 text-white p-6">
              <h2 className="text-xl font-semibold mb-1">Mohammed Nayeemuddin</h2>
              <p className="text-blue-100 mb-4">Managing Director</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  <span className="text-sm">+91 9448291585</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <span className="text-sm">nayeem@asianextrusions.com</span>
                </div>
              </div>

              <div className="flex space-x-3">

              </div>
            </div>
          </div>
          {/* Pankaj K Mahapatra Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src="/Contact/PANKAJ_K_MAHAPATRA.avif"
                alt="Pankaj K Mahapatra"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="bg-blue-600 text-white p-6">
              <h2 className="text-xl font-semibold mb-1">Pankaj K Mahapatra</h2>
              <p className="text-blue-100 mb-4">General Manager</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  <span className="text-sm">+91 9448291588</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <span className="text-sm">pankaj@asianextrusions.com</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}