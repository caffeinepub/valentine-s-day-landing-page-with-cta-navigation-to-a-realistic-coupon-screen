import { useNavigate } from '@tanstack/react-router';
import CouponCard from '@/components/CouponCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Heart, Edit } from 'lucide-react';
import { useCopy } from '@/content/CopyContext';
import EditTextPanel from '@/components/EditTextPanel';

export default function CouponPage() {
  const navigate = useNavigate();
  const { isEditMode, enterEditMode } = useCopy();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-rose-950 via-rose-900 to-pink-950">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-rose-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Top Bar with Back and Edit Buttons */}
      <div className="relative z-10 p-6 flex justify-between items-center">
        <Button
          onClick={() => navigate({ to: '/' })}
          variant="ghost"
          className="text-rose-100 hover:text-white hover:bg-rose-800/30"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Button>
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

      {/* Centered Coupon */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-180px)] px-4 py-8">
        <CouponCard />
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
