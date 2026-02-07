import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Heart, Edit } from 'lucide-react';
import { useCopy } from '@/content/CopyContext';
import EditTextPanel from '@/components/EditTextPanel';

export default function ValentineLanding() {
  const navigate = useNavigate();
  const { copy, isEditMode, enterEditMode } = useCopy();

  const handleCTAClick = () => {
    navigate({ to: '/coupon' });
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/generated/valentine-bg.dim_1920x1080.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-rose-950/40 via-rose-900/30 to-rose-950/50" />
      </div>

      {/* Edit Button */}
      <div className="relative z-10 p-6 flex justify-end">
        <Button
          onClick={enterEditMode}
          variant="outline"
          size="sm"
          className="bg-white/90 hover:bg-white text-rose-900 border-rose-300"
        >
          <Edit className="w-4 h-4 mr-2" />
          Edit Text
        </Button>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-120px)] flex-col items-center justify-center px-4 py-12">
        <div className="max-w-4xl text-center space-y-8">
          {/* Decorative Hearts */}
          <div className="flex justify-center gap-4 mb-6 animate-pulse">
            <Heart className="w-8 h-8 fill-rose-400 text-rose-400" />
            <Heart className="w-12 h-12 fill-rose-300 text-rose-300" />
            <Heart className="w-8 h-8 fill-rose-400 text-rose-400" />
          </div>

          {/* Main Message */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl leading-tight">
              {copy.landing.headline}
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-rose-100 font-light drop-shadow-lg leading-relaxed max-w-3xl mx-auto">
              {copy.landing.subheadline}
            </p>
            <div className="pt-4">
              <p className="text-xl md:text-2xl text-rose-50 font-medium drop-shadow-md italic">
                "{copy.landing.quote}"
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button
              onClick={handleCTAClick}
              size="lg"
              className="valentine-cta text-lg md:text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-rose-500/50 transition-all duration-300 hover:scale-105"
            >
              <Heart className="w-6 h-6 mr-3 fill-current" />
              {copy.landing.ctaLabel}
              <Heart className="w-6 h-6 ml-3 fill-current" />
            </Button>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center gap-2 pt-8">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-rose-300 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 pb-6 text-center">
        <p className="text-rose-100 text-sm drop-shadow-md">
          © 2026. Built with <Heart className="inline w-4 h-4 fill-rose-400 text-rose-400 mx-1" /> using{' '}
          <a 
            href="https://caffeine.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>

      {/* Edit Panel */}
      {isEditMode && <EditTextPanel />}
    </div>
  );
}
