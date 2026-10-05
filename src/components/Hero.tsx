import { motion } from 'framer-motion';
import { Download, Brush, Type, PenTool, Crop, Wand2, Layers, MousePointer2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Floating Tool Stickers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] text-adobe-blue/30 drop-shadow-md"
        >
          <Brush size={48} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-[15%] text-purple-400/30 drop-shadow-md"
        >
          <Wand2 size={56} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[40%] left-[5%] text-green-400/30 drop-shadow-md hidden sm:block"
        >
          <Crop size={64} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[30%] right-[5%] text-orange-400/30 drop-shadow-md hidden sm:block"
        >
          <Layers size={52} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-[60%] left-[20%] text-pink-400/30 drop-shadow-md"
        >
          <Type size={40} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          className="absolute top-[20%] left-[80%] text-yellow-400/30 drop-shadow-md"
        >
          <PenTool size={44} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[10%] left-[40%] text-cyan-400/30 drop-shadow-md hidden md:block"
        >
          <MousePointer2 size={48} />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-adobe-text mb-6">
            Imagine what you can create.
          </h1>
          <p className="text-xl text-adobe-text-muted mb-10 leading-relaxed">
            PixelForge gives you the power to bring your ideas to life. From quick edits to complex composites, the world's best professional photo editing software is now faster, lighter, and completely free.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-adobe-blue hover:bg-adobe-blue-hover text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              <Download size={20} /> Download for Windows
            </button>
            <button className="w-full sm:w-auto bg-white border border-adobe-border hover:bg-gray-50 text-adobe-text px-8 py-4 rounded-full text-lg font-medium transition-colors">
              Explore Features
            </button>
          </div>
          <p className="mt-4 text-sm text-adobe-text-muted">Available for Windows 10/11 • 64-bit</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-adobe-blue opacity-10 blur-[100px] rounded-full" />
          
          {/* Mockup Container */}
          <div className="relative rounded-xl overflow-hidden border border-adobe-border shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white p-2">
             {/* We simulate the app interface here or put an image. Since we don't have a real image asset here easily, we'll build a CSS mockup */}
             <div className="aspect-[16/10] bg-[#111111] rounded-lg overflow-hidden flex flex-col">
                <div className="h-10 bg-[#1e1e1e] flex items-center px-4 gap-2 border-b border-[#333]">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 flex">
                   <div className="w-12 border-r border-[#333] flex flex-col items-center py-4 gap-4">
                     <div className="w-6 h-6 rounded bg-[#333]"></div>
                     <div className="w-6 h-6 rounded bg-adobe-blue"></div>
                     <div className="w-6 h-6 rounded bg-[#333]"></div>
                     <div className="w-6 h-6 rounded bg-[#333]"></div>
                   </div>
                   <div className="flex-1 bg-[#0a0a0a] flex items-center justify-center p-8">
                     {/* Canvas representation */}
                     <div className="w-full h-full bg-white shadow-2xl relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 to-adobe-blue opacity-20"></div>
                       {/* Simulating a brush stroke */}
                       <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                         <path d="M10,50 Q40,10 60,70 T90,30" fill="none" stroke="#0054e6" strokeWidth="4" strokeLinecap="round" />
                       </svg>
                     </div>
                   </div>
                   <div className="w-64 border-l border-[#333] p-4 flex flex-col gap-4 hidden sm:flex">
                     <div className="h-32 bg-[#1e1e1e] rounded"></div>
                     <div className="h-48 bg-[#1e1e1e] rounded flex flex-col p-2 gap-2">
                       <div className="h-8 bg-[#333] rounded"></div>
                       <div className="h-8 bg-[#333] rounded"></div>
                       <div className="h-8 bg-adobe-blue opacity-50 rounded"></div>
                     </div>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
