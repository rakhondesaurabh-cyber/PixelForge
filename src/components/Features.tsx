import { motion } from 'framer-motion';
import { Brush, Layers, Zap, PenTool, Image as ImageIcon, Type, Crop, Wand2, MonitorDown } from 'lucide-react';

const features = [
  {
    title: "The Ultimate Brush Engine",
    description: "Experience the most natural, responsive brushes ever created. Choose from Marker, Sketchpen, Oil Brush, Glitter, Highlighter, and more. With real-time GPU acceleration, every stroke flows flawlessly across your canvas.",
    icon: <Brush size={32} className="text-adobe-blue" />,
    image: "https://plus.unsplash.com/premium_photo-1722156533656-b22cbcf1c82e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBob3Rvc2hvcCUyMGVkaXRpbmd8ZW58MHx8MHx8fDA%3D",
    reverse: false
  },
  {
    title: "Non-Destructive Layers",
    description: "Unleash your creativity with a professional layer system. Group, mask, blend, and organize with infinite possibilities. Seamlessly drag and drop image layers and apply dynamic drop-shadows.",
    icon: <Layers size={32} className="text-adobe-blue" />,
    image: "https://images.unsplash.com/photo-1744948961024-66baaafbb5dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG8lMjBlZGl0aW5nfGVufDB8fDB8fHww",
    reverse: true
  },
  {
    title: "Pro-Level Selections",
    description: "Isolate complex objects in seconds. Use the Magic Wand, Freehand Lasso, or Rectangle Select to cut, copy, paste, and remove regions with pixel-perfect accuracy.",
    icon: <Wand2 size={32} className="text-adobe-blue" />,
    image: "https://plus.unsplash.com/premium_photo-1720908579765-3cf1dd7999f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9zaG9wJTIwZWRpdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    reverse: false
  },
  {
    title: "Live Adjustments & Filters",
    description: "Fine-tune your photography. Adjust brightness, contrast, and saturation in real-time. Apply Gaussian blurs and color grading without ever leaving your canvas.",
    icon: <ImageIcon size={32} className="text-adobe-blue" />,
    image: "https://images.unsplash.com/photo-1603993097397-89c963e325c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZpbHRlcnN8ZW58MHx8MHx8fDA%3D",
    reverse: true
  }
];

const bentoFeatures = [
  { title: "Native Desktop App", desc: "Available as a lightning-fast Windows .exe powered by Electron.", icon: <MonitorDown /> },
  { title: "WebGL Performance", desc: "Zero-lag editing with hardware-accelerated rendering.", icon: <Zap /> },
  { title: "Smart Typography", desc: "Advanced text layers with font, size, and styling control.", icon: <Type /> },
  { title: "Precision Cropping", desc: "Reframe your masterpiece with customizable crop overlays.", icon: <Crop /> },
  { title: "Smart Eyedropper", desc: "Instantly pick and match colors from anywhere on your canvas.", icon: <PenTool /> },
  { title: "History & Undo", desc: "Never lose a mistake with unlimited non-destructive undo/redo history.", icon: <Layers /> },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-adobe-text mb-6">Built for the masters.</h2>
          <p className="text-lg text-adobe-text-muted">
            Whether you are touching up a portrait or composing a masterpiece, PixelForge gives you all the professional tools you need without the professional learning curve.
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="space-y-32">
          {features.map((feature, idx) => (
            <div key={idx} className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
              <motion.div
                initial={{ opacity: 0, x: feature.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex-1 space-y-6"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-3xl font-bold text-adobe-text">{feature.title}</h3>
                <p className="text-lg text-adobe-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex-1 w-full"
              >
                <div className="aspect-[4/3] rounded-2xl bg-gray-100 border border-adobe-border overflow-hidden relative group shadow-lg">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="mt-32">
          <h3 className="text-3xl font-bold text-adobe-text mb-12 text-center">Everything you need. Nothing you don't.</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bentoFeatures.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                className="p-8 rounded-2xl bg-gray-50 border border-adobe-border hover:shadow-lg transition-all hover:-translate-y-1 cursor-default group"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-adobe-border flex items-center justify-center text-adobe-blue mb-6 group-hover:bg-adobe-blue group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-adobe-text mb-3">{item.title}</h4>
                <p className="text-adobe-text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
