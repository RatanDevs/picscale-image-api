import Link from 'next/link';

export default function NotFound() {
  return (
    <div class="bg-[#fafbfd] text-slate-800 antialiased min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header class="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="bg-indigo-600 text-white p-2 rounded-xl shadow-md shadow-indigo-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" class="w-5 h-5 sm:w-6 sm:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375 0 1 1-.75 0 .375 0 0 1 .75 0Z" />
              </svg>
            </div>
            <span class="font-bold text-lg sm:text-xl tracking-tight text-slate-900">PicScale<span class="text-indigo-600">.</span></span>
          </div>
          <Link href="/" class="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Back to Home</Link>
        </div>
      </header>

      {/* Main Content */}
      <main class="max-w-7xl mx-auto px-4 sm:px-6 py-16 flex-grow flex flex-col items-center justify-center text-center">
        <div class="max-w-md w-full">
          <div class="relative inline-block mb-6">
            <span class="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-600 select-none tracking-tight opacity-20">404</span>
            <span class="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Oops!</span>
          </div>
          
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Page Not Found</h1>
          <p class="text-slate-500 text-sm sm:text-base mb-8 px-4">
            The requested URL was not found on this server, or direct access to this resource has been restricted.
          </p>

          <Link href="/" class="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md shadow-indigo-100 transition-all text-sm space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" class="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            <span>Return to Playground</span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer class="border-t border-slate-100 bg-white py-8 w-full">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <div>&copy; 2026 PicScale. All rights reserved.</div>
          <div class="text-[10px] tracking-wider uppercase font-semibold text-slate-300">NextJS Router active</div>
        </div>
      </footer>
    </div>
  );
}
