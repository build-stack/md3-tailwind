import { Display, Body, Button } from "@build-stack/md3-tailwind";
import { Header, ComponentsShowcase } from "./components";

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <Display size="large" className="text-slate-900 font-bold tracking-tight">
              The Material Design 3 Component Library For Building Modern React Apps
            </Display>
            <Body size="large" className="text-slate-600 max-w-3xl mx-auto">
              MD3 Tailwind is an open-source library that brings Material Design 3 primitives to React 19 and Tailwind CSS v4. 
              Build beautiful, accessible interfaces faster with our minimal, customizable components.
            </Body>
          </div>

          {/* Install Command */}
          <div className="bg-slate-900 rounded-2xl p-6 inline-block">
            <code className="text-green-400 font-mono text-lg">
              npm i @build-stack/md3-tailwind
            </code>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center gap-4">
            <Button variant="filled" size="md" className="shadow-lg">
              Get Started
            </Button>
            <Button variant="outline" size="md">
              View Components
            </Button>
          </div>

          {/* Framework Support */}
          <div className="pt-8">
            <Body size="small" className="text-slate-500 mb-4 uppercase tracking-wide font-medium">
              Built for modern React
            </Body>
            <div className="flex justify-center items-center gap-8 text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  R
                </div>
                <span className="font-medium">React 19</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  T
                </div>
                <span className="font-medium">Tailwind v4</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  M
                </div>
                <span className="font-medium">Material Design 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-slate-900">19+</div>
              <Body size="small" className="text-slate-600">React Version</Body>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-slate-900">v4</div>
              <Body size="small" className="text-slate-600">Tailwind CSS</Body>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-slate-900">MD3</div>
              <Body size="small" className="text-slate-600">Material Design</Body>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-slate-900">OSS</div>
              <Body size="small" className="text-slate-600">Open Source</Body>
            </div>
          </div>
        </div>
      </div>

      {/* Components Showcase */}
      <ComponentsShowcase />
    </main>
    </>
  );
}


