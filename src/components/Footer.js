import React from 'react';

const Footer = () => (
  <footer className="bg-gray-100 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Shop and Learn', 'Services', 'Apple Store'].map((section, index) => (
          <div key={index}>
            <h4 className="text-sm font-semibold mb-4">{section}</h4>
            <ul className="space-y-2">
              {['Store', 'Mac', 'iPad', 'iPhone', 'Watch'].map(item => (
                <li key={item}><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">{item}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8 pt-8 border-t border-gray-200 text-center">
        <p className="text-gray-600 text-sm">&copy; 2024 Apple Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
