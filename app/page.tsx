'use client';

import React, { useState } from 'react';
import { Camera } from 'lucide-react';

// Layout Component
const Layout = ({ children }) => (
  <div className="flex min-h-screen w-full">
    <Sidebar />
    <main className="min-h-full w-full min-w-0 flex-1">
      {children}
    </main>
  </div>
);

// Sidebar Component
const Sidebar = () => (
  <nav className="z-20 h-screen max-md:pointer-events-none max-md:fixed">
    <div className="fixed bottom-0 left-0 top-0 z-20 px-3 pb-4 pt-2.5 pointer-events-none">
      <div className="from-bg-500/40 to-bg-500/0 fixed left-0 top-0 h-full bg-gradient-to-r to-80% transition-opacity max-md:hidden"></div>
      <div className="from-bg-300/70 to-bg-400/70 border-r-0.5 border-border-300 absolute left-0 overflow-hidden bg-gradient-to-b backdrop-blur shadow-level-1 border-t-0.5 border-b-0.5 bottom-1 top-1 rounded-r-xl">
        {/* Sidebar content */}
      </div>
    </div>
  </nav>
);

// Button Component
const Button = ({ children, className, ...props }: any) => (
  <button
    className={`inline-flex items-center justify-center relative shrink-0 ring-offset-2 ring-offset-bg-300 ring-accent-main-100 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none disabled:drop-shadow-none text-text-200 transition-all font-styrene active:bg-bg-400 hover:bg-bg-500/40 hover:text-text-100 h-8 rounded-md px-3 text-xs min-w-[4rem] active:scale-[0.985] ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Input Component
const Input = ({ placeholder, value, onChange }: any) => (
  <div className="flex flex-col bg-bg-000 gap-1.5 border-0.5 border-border-300 pl-4 pt-2.5 pr-2.5 pb-2.5 -mx-1 sm:mx-0 items-stretch transition-all duration-200 relative shadow-[0_0.25rem_1.25rem_rgba(0,0,0,0.035)] focus-within:shadow-[0_0.25rem_1.25rem_rgba(0,0,0,0.075)] hover:border-border-200 focus-within:border-border-200 cursor-text z-10 rounded-2xl">
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="mt-1 w-full overflow-y-auto break-words min-h-[4.5rem] bg-transparent focus:outline-none"
    />
  </div>
);

// Card Component
const Card = ({ title, description, icon }) => (
  <div className="from-bg-100 to-bg-100/30 border-0.5 border-border-300 hover:from-bg-000 hover:to-bg-000/80 hover:border-border-200 text-text-200 hover:text-text-100 group relative flex cursor-pointer flex-col gap-1.5 rounded-xl bg-gradient-to-b py-3.5 pl-3.5 pr-1.5 transition-all ease-in-out hover:shadow-sm active:scale-[0.98] md:gap-2">
    <div className="flex flex-1 flex-col items-start gap-1.5">
      <div className="flex gap-1.5 max-md:items-center md:flex-col">
        <div className="text-text-400 h-4 w-4 md:h-5 md:w-5">
          {icon}
        </div>
        <div className="font-tiempos line-clamp-1 overflow-hidden text-base md:line-clamp-2 md:h-12 md:pr-2">
          {title}
        </div>
      </div>
    </div>
    <div className="text-text-400 text-xs">{description}</div>
  </div>
);

export default function Page() {
  const [inputValue, setInputValue] = useState('');

  return (
    <Layout>
      <div className="mx-auto mt-4 w-full max-w-7xl flex-1 px-4 pb-20 md:pl-8 lg:mt-6 min-h-screen-w-scroll !mt-0 flex flex-col items-center gap-8 pt-12 md:pr-14 2xl:pr-20">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 max-md:pt-4">
          <h1 className="font-copernicus text-text-200 w-full flex-col items-center text-center text-3xl tracking-tight max-md:flex sm:-ml-0.5 sm:block sm:text-4xl sm:leading-snug md:text-[2.5rem]">
            Chat with AI Assistant
          </h1>
        </div>

        <div className="top-5 z-10 mx-auto w-full max-w-2xl md:sticky">
          <Input
            placeholder="Ask me anything..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="flex justify-end mt-2">
            <Button>
              <Camera className="mr-2" size={16} />
              Send
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-2xl px-1 md:px-2">
          <h2 className="text-text-300 flex items-center gap-2 text-sm font-medium mb-4">
            Suggested Topics
          </h2>
          <div className="grid w-full gap-3 max-md:flex-col md:grid-cols-3">
            <Card
              title="What is AI?"
              description="Learn about artificial intelligence"
              icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12" y2="17" /></svg>}
            />
            <Card
              title="AI in healthcare"
              description="Explore AI applications in medicine"
              icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>}
            />
            <Card
              title="Machine Learning"
              description="Understand the basics of ML"
              icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" /></svg>}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}