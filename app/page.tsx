export default function KnowMe() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4 py-12">
      <div className="max-w-3xl mx-auto bg-black border border-white/10 rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Hello, I'm Neston Cabral
          </h1>
          <div className="h-px w-16 bg-white/30 mx-auto mb-6"></div>
          <p className="text-lg text-white/70 font-light">
            Web Developer(for now)
            
          </p>
        </div>
        
        <div className="space-y-6 text-left">
          <p className="text-base text-white/60 leading-relaxed">
            Since February 2025, I've been exploring various technologies:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-white/10 p-4 rounded-sm hover:bg-white/5 transition-colors">
              <h3 className="font-medium text-white mb-2">API Integration</h3>
              <p className="text-white/50 text-sm">Third-party APIs integration for Next.js applications</p>
            </div>
            
            <div className="border border-white/10 p-4 rounded-sm hover:bg-white/5 transition-colors">
              <h3 className="font-medium text-white mb-2">Data Visualization</h3>
              <p className="text-white/50 text-sm">PowerBI dashboards for data analysis</p>
            </div>
            
            <div className="border border-white/10 p-4 rounded-sm hover:bg-white/5 transition-colors">
              <h3 className="font-medium text-white mb-2">Mobile Development</h3>
              <p className="text-white/50 text-sm">Expo Router solutions for React Native applications</p>
            </div>
            
            <div className="border border-white/10 p-4 rounded-sm hover:bg-white/5 transition-colors">
              <h3 className="font-medium text-white mb-2">Telecommunications</h3>
              <p className="text-white/50 text-sm">Flutter applications with telecom API integration</p>
            </div>
          </div>
          
          {/* <div className="text-center mt-10">
            <a 
              href="/whatimdoing" 
              className="inline-block px-5 py-2 border border-white/30 hover:bg-white hover:text-black transition-colors rounded-sm text-sm font-medium"
            >
              Current Projects
            </a>
          </div> */}
        </div>

        {/* Bento Box Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-3 gap-4 h-auto">
          {/* Box 1: Large vertical */}
          <div className="lg:row-span-3 bg-black border border-white/10 rounded-xl flex flex-col items-center justify-center p-0 shadow-lg hover:bg-white/5 transition-colors">
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-6 m-4 w-full h-full flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold text-white mb-2">Bento 1</h2>
              <p className="text-white/70 text-center">Tall box for feature highlight or profile.</p>
            </div>
          </div>
          {/* Box 2: Wide horizontal */}
          <div className="lg:row-span-1 lg:col-span-2 bg-black border border-white/10 rounded-xl flex flex-col items-center justify-center p-0 shadow-lg hover:bg-white/5 transition-colors">
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-6 m-4 w-full h-full flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold text-white mb-1">Bento 2</h2>
              <p className="text-white/70 text-center">Wide box for a summary or image.</p>
            </div>
          </div>
          {/* Box 3: Square */}
          <div className="lg:row-span-2 bg-black border border-white/10 rounded-xl flex flex-col items-center justify-center p-0 shadow-lg hover:bg-white/5 transition-colors">
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-6 m-4 w-full h-full flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold text-white mb-1">Bento 3</h2>
              <p className="text-white/70 text-center">Square box for stats or quick info.</p>
            </div>
          </div>
          {/* Box 4: Small */}
          <div className="bg-black border border-white/10 rounded-xl flex flex-col items-center justify-center p-0 shadow-lg hover:bg-white/5 transition-colors">
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-4 m-4 w-full h-full flex flex-col items-center justify-center">
              <h2 className="text-lg font-medium text-white">Bento 4</h2>
            </div>
          </div>
          {/* Box 5: Medium */}
          <div className="lg:row-span-1 lg:col-span-2 bg-black border border-white/10 rounded-xl flex flex-col items-center justify-center p-0 shadow-lg hover:bg-white/5 transition-colors">
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-6 m-4 w-full h-full flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold text-white mb-1">Bento 5</h2>
              <p className="text-white/70 text-center">Medium box for call to action or links.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
