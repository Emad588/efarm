import React from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const CustomerCare: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Customer Care</h1>
        <p className="mt-4 text-gray-600">We're here to help! Reach out to us for any queries regarding your orders, livestock care, or farming tips.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
           <div className="bg-blue-50 p-6 rounded-lg flex items-start gap-4">
              <div className="bg-blue-600 text-white p-3 rounded-full">
                 <Phone size={24} />
              </div>
              <div>
                 <h3 className="font-bold text-lg text-gray-900">Call Us</h3>
                 <p className="text-gray-600 mb-2">Available Mon-Sat, 9AM to 6PM</p>
                 <p className="text-2xl font-bold text-blue-900">+91 9744420741</p>
              </div>
           </div>

           <div className="bg-blue-50 p-6 rounded-lg flex items-start gap-4">
              <div className="bg-blue-600 text-white p-3 rounded-full">
                 <Mail size={24} />
              </div>
              <div>
                 <h3 className="font-bold text-lg text-gray-900">Email Us</h3>
                 <p className="text-gray-600 mb-2">For general inquiries and bulk orders</p>
                 <p className="text-lg font-medium text-blue-900">info@dekkans.com</p>
              </div>
           </div>

           <div className="bg-blue-50 p-6 rounded-lg flex items-start gap-4">
              <div className="bg-blue-600 text-white p-3 rounded-full">
                 <MapPin size={24} />
              </div>
              <div>
                 <h3 className="font-bold text-lg text-gray-900">Visit Us</h3>
                 <p className="text-gray-600 mb-2">Come see our farm</p>
                 <p className="text-lg font-medium text-blue-900">
                    Punchavayal, Kannapuram<br/>
                    Kannur, Kerala
                 </p>
              </div>
           </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
           <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
             <MessageSquare className="text-blue-600" /> Send a Message
           </h2>
           <form className="space-y-4">
              <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                 <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe" />
              </div>
              <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                 <input type="email" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500" placeholder="john@example.com" />
              </div>
              <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                 <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Order Status</option>
                    <option>Product Inquiry</option>
                    <option>Livestock Advice</option>
                    <option>Other</option>
                 </select>
              </div>
              <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                 <textarea rows={4} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition">
                 Send Message
              </button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerCare;