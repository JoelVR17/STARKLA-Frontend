import React from 'react';
import { Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6" />
            <span className="text-white font-semibold">STARKLA</span>
          </div>
          <p className="text-sm">© 2025 STARKLA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;