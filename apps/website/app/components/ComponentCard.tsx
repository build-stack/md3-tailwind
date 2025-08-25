import { Body } from "@build-stack/md3-tailwind";

interface ComponentCardProps {
  name: string;
  description?: string;
  available?: boolean;
  icon?: React.ReactNode;
}

export function ComponentCard({ name, description, available = true, icon }: ComponentCardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-xl border transition-all duration-200 hover:shadow-lg ${
      available 
        ? 'border-slate-200 bg-white hover:border-violet-200 hover:shadow-violet-100/50' 
        : 'border-slate-100 bg-slate-50'
    }`}>
      {/* Coming Soon Badge */}
      {!available && (
        <div className="absolute top-2 right-2 z-10">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-slate-200 text-slate-600">
            Soon
          </span>
        </div>
      )}
      
      <div className="p-6">
        {/* Icon/Visual */}
        <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors ${
          available 
            ? 'bg-violet-100 text-violet-600 group-hover:bg-violet-200' 
            : 'bg-slate-200 text-slate-400'
        }`}>
          {icon}
        </div>
        
        {/* Content */}
        <div className="space-y-1">
          <h3 className={`font-semibold transition-colors ${
            available ? 'text-slate-900 group-hover:text-violet-700' : 'text-slate-500'
          }`}>
            {name}
          </h3>
          {description && (
            <Body size="small" className={available ? 'text-slate-600' : 'text-slate-400'}>
              {description}
            </Body>
          )}
        </div>
      </div>
      
      {/* Hover Effect */}
      {available && (
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-indigo-500/0 group-hover:from-violet-500/5 group-hover:to-indigo-500/5 transition-all duration-200" />
      )}
    </div>
  );
}
