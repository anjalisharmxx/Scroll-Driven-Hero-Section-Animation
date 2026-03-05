/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HeroSection from './components/HeroSection';

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <HeroSection />
      {}
      <div className="h-screen flex items-center justify-center bg-gray-900">
        <h2 className="text-4xl font-bold text-gray-500">More Content Below</h2>
      </div>
    </div>
  );
}
