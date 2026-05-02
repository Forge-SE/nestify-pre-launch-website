import React from 'react';

interface MacbookFrameProps {
  children: React.ReactNode;
  title?: string;
  url?: string;
}

export const MacbookFrame: React.FC<MacbookFrameProps> = ({
  children,
  title = 'Nestify',
  url = 'www.stu.trynestify.xyz',
}) => {
  return (
    <div className="w-full max-w-4xl overflow-hidden shadow-2xl bg-black" style={{ borderRadius: '24px' }}>
      {/* Macbook Top Bezel */}
      <div className="bg-black h-6 flex items-center justify-center" style={{ borderRadius: '24px 24px 0 0' }}>
        <div className="w-12 h-1 bg-black rounded-full"></div>
      </div>

      {/* Browser Tab Bar */}
      <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-300">
        {/* Traffic Lights */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer"></div>
        </div>
        {/* Tab */}
        <div className="ml-4 flex items-center gap-2 bg-white rounded-t-lg px-4 py-2 flex-1 max-w-xs">
          <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          <span className="text-xs text-gray-600 truncate">{title}</span>
        </div>
        {/* Plus Button */}
        <button className="p-1 hover:bg-gray-200 rounded text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
        </button>
        {/* Menu Button */}
        <button className="p-1 hover:bg-gray-200 rounded text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
      </div>

      {/* Address & Navigation Bar */}
      <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b border-gray-300">
        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button className="p-1.5 hover:bg-gray-200 rounded text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
        <div className="flex-1 bg-gray-200 rounded-full px-3 py-1.5 text-xs text-gray-600 flex items-center">
          <svg className="w-3 h-3 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          <span>{url}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white min-h-[70dvh] p-8">
        {children}
      </div>

      {/* Macbook Bottom Bezel */}
      <div className="bg-black h-4" style={{ borderRadius: '0 0 24px 24px' }}></div>
    </div>
  );
};
