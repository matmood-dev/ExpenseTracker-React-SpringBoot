import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10 py-4 text-center text-sm text-gray-600">
      <div className="flex justify-center items-center gap-1 text-blue-700 font-medium">
        <span>Developed with</span>
        <Heart className="w-4 h-4 text-red-500" />
        <a
          href="https://matmood.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-900"
        >
          Mahmood
        </a>
      </div>
    </footer>
  );
}
