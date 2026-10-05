import { Brush, Crop, Hand, MousePointer2, Pipette, Search, Type, Wand2, Image as ImageIcon, Layers, Square, Eraser } from 'lucide-react';
import { useState } from 'react';

const tools = [
  {
    id: "getting-started",
    name: "Getting Started",
    icon: <ImageIcon size={24} />,
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-adobe-text mb-6">Getting Started with PixelForge</h2>
        <p className="text-lg text-adobe-text-muted">Welcome to PixelForge! This documentation will help you understand every tool available in our professional photo editing suite.</p>
        <p className="text-lg text-adobe-text-muted">To begin editing, simply open the application and drag-and-drop an image onto the canvas, or go to <strong>File &gt; New</strong> to create a blank canvas.</p>
        <h3 className="text-xl font-semibold text-adobe-text mt-8">The Interface</h3>
        <ul className="list-disc list-inside space-y-2 text-adobe-text-muted">
          <li><strong>Left Toolbar:</strong> Contains all your primary editing and selection tools.</li>
          <li><strong>Top Bar:</strong> Contains tool-specific options (like brush size) and file operations.</li>
          <li><strong>Right Panel:</strong> Houses your Layers panel, Properties, and History.</li>
        </ul>
      </div>
    )
  },
  {
    id: "selection-tools",
    name: "Selection Tools",
    icon: <MousePointer2 size={24} />,
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-adobe-text mb-6">Selection Tools</h2>
        
        <div className="bg-gray-50 p-6 rounded-xl border border-adobe-border mb-6">
          <h3 className="text-xl font-bold text-adobe-text flex items-center gap-2 mb-2"><MousePointer2 size={20}/> Move Tool (V)</h3>
          <p className="text-adobe-text-muted mb-4">Used to move entire layers or active selections around the canvas.</p>
          <p className="text-sm font-medium">How to use: Click and drag any element on the canvas. Use the corners to scale or rotate the layer.</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl border border-adobe-border mb-6">
          <h3 className="text-xl font-bold text-adobe-text flex items-center gap-2 mb-2"><Square size={20}/> Rectangle Select (M)</h3>
          <p className="text-adobe-text-muted mb-4">Creates a perfect rectangular or square selection.</p>
          <p className="text-sm font-medium">How to use: Click and drag across the canvas. Hold SHIFT to constrain proportions to a perfect square.</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl border border-adobe-border mb-6">
          <h3 className="text-xl font-bold text-adobe-text flex items-center gap-2 mb-2"><Wand2 size={20}/> Magic Wand (W)</h3>
          <p className="text-adobe-text-muted mb-4">Automatically selects adjacent pixels of similar colors.</p>
          <p className="text-sm font-medium">How to use: Click on any color in your image. Adjust the "Tolerance" slider in the top bar to select a wider or narrower range of similar colors.</p>
        </div>
      </div>
    )
  },
  {
    id: "drawing-tools",
    name: "Drawing & Painting",
    icon: <Brush size={24} />,
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-adobe-text mb-6">Drawing & Painting Tools</h2>
        
        <div className="bg-gray-50 p-6 rounded-xl border border-adobe-border mb-6">
          <h3 className="text-xl font-bold text-adobe-text flex items-center gap-2 mb-2"><Brush size={20}/> Brush Tool (B)</h3>
          <p className="text-adobe-text-muted mb-4">The core painting tool powered by our custom Brush Engine.</p>
          <p className="text-sm font-medium mb-4">How to use: Select the Brush tool, choose a color from the color picker, and click-and-drag on the canvas.</p>
          <h4 className="font-semibold text-adobe-text">Available Brush Types:</h4>
          <ul className="list-disc list-inside text-adobe-text-muted mt-2 space-y-1">
            <li><strong>Hard Round:</strong> Standard solid brush.</li>
            <li><strong>Soft Round:</strong> Blurred edges for smooth blending.</li>
            <li><strong>Oil Brush:</strong> Thick, textured strokes that mix with background colors.</li>
            <li><strong>Glitter:</strong> Scatters glowing particles along your stroke.</li>
            <li><strong>Sketchpen / Marker:</strong> Simulates real ink drying and overlapping.</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl border border-adobe-border mb-6">
          <h3 className="text-xl font-bold text-adobe-text flex items-center gap-2 mb-2"><Eraser size={20}/> Eraser Tool (E)</h3>
          <p className="text-adobe-text-muted mb-4">Removes pixels from the current active layer.</p>
          <p className="text-sm font-medium">How to use: Acts exactly like the brush tool, but makes the painted area transparent.</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-xl border border-adobe-border mb-6">
          <h3 className="text-xl font-bold text-adobe-text flex items-center gap-2 mb-2"><Pipette size={20}/> Eyedropper Tool (I)</h3>
          <p className="text-adobe-text-muted mb-4">Samples a specific color from your image to use as your active color.</p>
          <p className="text-sm font-medium">How to use: Click anywhere on your image. Your active brush/text color will instantly update to match the exact pixel you clicked.</p>
        </div>
      </div>
    )
  },
  {
    id: "editing-tools",
    name: "Editing & Utilities",
    icon: <Crop size={24} />,
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-adobe-text mb-6">Editing & Utilities</h2>
        
        <div className="bg-gray-50 p-6 rounded-xl border border-adobe-border mb-6">
          <h3 className="text-xl font-bold text-adobe-text flex items-center gap-2 mb-2"><Crop size={20}/> Crop Tool (C)</h3>
          <p className="text-adobe-text-muted mb-4">Trims or expands the overall canvas size.</p>
          <p className="text-sm font-medium">How to use: Drag the corners of the crop bounding box to your desired size, then press ENTER or click the checkmark to apply.</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl border border-adobe-border mb-6">
          <h3 className="text-xl font-bold text-adobe-text flex items-center gap-2 mb-2"><Type size={20}/> Text Tool (T)</h3>
          <p className="text-adobe-text-muted mb-4">Creates a new vector text layer.</p>
          <p className="text-sm font-medium">How to use: Click anywhere on the canvas to start typing. Use the right properties panel to change font, size, weight, and color.</p>
        </div>
      </div>
    )
  },
  {
    id: "navigation",
    name: "Canvas Navigation",
    icon: <Hand size={24} />,
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-adobe-text mb-6">Navigating the Canvas</h2>
        
        <div className="bg-gray-50 p-6 rounded-xl border border-adobe-border mb-6">
          <h3 className="text-xl font-bold text-adobe-text flex items-center gap-2 mb-2"><Hand size={20}/> Hand Tool (H)</h3>
          <p className="text-adobe-text-muted mb-4">Pans around your document without affecting the image.</p>
          <p className="text-sm font-medium">Pro tip: Hold the <strong>SPACEBAR</strong> at any time, with any tool selected, to temporarily activate the Hand tool!</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl border border-adobe-border mb-6">
          <h3 className="text-xl font-bold text-adobe-text flex items-center gap-2 mb-2"><Search size={20}/> Zoom Tool (Z)</h3>
          <p className="text-adobe-text-muted mb-4">Zooms in or out of your document.</p>
          <p className="text-sm font-medium mb-2">How to use: Click to zoom in. Hold ALT and click to zoom out.</p>
          <p className="text-sm font-medium">Shortcuts: <strong>CTRL + 0</strong> (Fit to screen), <strong>CTRL + 1</strong> (Actual 100% size), or simply use your mouse scroll wheel!</p>
        </div>
      </div>
    )
  },
  {
    id: "layers",
    name: "Layer System",
    icon: <Layers size={24} />,
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-adobe-text mb-6">Working with Layers</h2>
        <p className="text-lg text-adobe-text-muted mb-6">Layers are the foundation of non-destructive editing. Think of them as stacked sheets of transparent glass.</p>
        
        <ul className="space-y-6 text-adobe-text-muted">
          <li><strong>Creating Layers:</strong> Click the "+" icon at the bottom of the right panel to add an empty layer.</li>
          <li><strong>Reordering:</strong> Click and drag layers up or down in the panel to change their stacking order.</li>
          <li><strong>Opacity:</strong> Use the opacity slider at the top of the layers panel to make a layer semi-transparent.</li>
          <li><strong>Layer Effects:</strong> Select a layer and open the Properties panel to add effects like Image Shadows.</li>
        </ul>
      </div>
    )
  }
];

export default function Documentation() {
  const [activeSection, setActiveSection] = useState(tools[0].id);

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 border-b border-adobe-border pb-8">
          <h1 className="text-4xl font-bold text-adobe-text mb-4">Documentation</h1>
          <p className="text-xl text-adobe-text-muted">Everything you need to master PixelForge.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full md:w-64 shrink-0">
            <nav className="sticky top-32 space-y-2">
              {tools.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeSection === section.id 
                    ? 'bg-adobe-blue text-white font-medium' 
                    : 'text-adobe-text-muted hover:bg-gray-100 hover:text-adobe-text'
                  }`}
                >
                  <span className={activeSection === section.id ? 'opacity-100' : 'opacity-70'}>{section.icon}</span>
                  {section.name}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 min-h-[600px]">
            {tools.find(t => t.id === activeSection)?.content}
          </main>
        </div>

      </div>
    </div>
  );
}
