import { Card } from '@/components/ui/card';
import { Heart, Gift, Users, Calendar, Key } from 'lucide-react';
import { useCopy } from '@/content/CopyContext';

export default function CouponCard() {
  const { copy } = useCopy();

  return (
    <div className="relative max-w-2xl w-full">
      {/* Coupon Card with Ticket Shape */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-rose-50 to-pink-50 border-4 border-rose-300 shadow-2xl">
        {/* Paper Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-30 mix-blend-multiply"
          style={{ 
            backgroundImage: 'url(/assets/generated/coupon-paper-texture.dim_1024x1024.png)',
            backgroundSize: 'cover'
          }}
        />

        {/* Perforated Edge Effect - Top */}
        <div className="absolute top-0 left-0 right-0 h-4 flex justify-around items-center">
          {[...Array(30)].map((_, i) => (
            <div key={`top-${i}`} className="w-2 h-2 rounded-full bg-white border border-rose-300" />
          ))}
        </div>

        {/* Perforated Edge Effect - Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-4 flex justify-around items-center">
          {[...Array(30)].map((_, i) => (
            <div key={`bottom-${i}`} className="w-2 h-2 rounded-full bg-white border border-rose-300" />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 p-12 space-y-8">
          {/* Header with Hearts */}
          <div className="text-center space-y-4 pb-6 border-b-4 border-dashed border-rose-300">
            <div className="flex justify-center gap-3 mb-4">
              <Heart className="w-10 h-10 fill-rose-500 text-rose-500 animate-pulse" />
              <Gift className="w-12 h-12 text-rose-600" />
              <Heart className="w-10 h-10 fill-rose-500 text-rose-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-rose-900 drop-shadow-sm coupon-header break-words">
              {copy.coupon.header}
            </h2>
            <p className="text-rose-700 text-lg font-medium italic">
              A Special Valentine's Gift
            </p>
          </div>

          {/* Coupon Details */}
          <div className="space-y-6 pt-4">
            {/* To Field */}
            <div className="flex items-start gap-4 p-4 bg-white/60 rounded-lg border-2 border-rose-200 shadow-sm">
              <Heart className="w-6 h-6 text-rose-600 mt-1 flex-shrink-0 fill-rose-600" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-rose-800 uppercase tracking-wide mb-1">To</p>
                <p className="text-2xl font-bold text-rose-900 break-words">{copy.coupon.recipientName}</p>
              </div>
            </div>

            {/* Users Field */}
            <div className="flex items-start gap-4 p-4 bg-white/60 rounded-lg border-2 border-rose-200 shadow-sm">
              <Users className="w-6 h-6 text-rose-600 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-rose-800 uppercase tracking-wide mb-1">Users</p>
                <p className="text-2xl font-bold text-rose-900">Unlimited</p>
              </div>
            </div>

            {/* Expiration Field */}
            <div className="flex items-start gap-4 p-4 bg-white/60 rounded-lg border-2 border-rose-200 shadow-sm">
              <Calendar className="w-6 h-6 text-rose-600 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-rose-800 uppercase tracking-wide mb-1">Expiration</p>
                <p className="text-2xl font-bold text-rose-900">Never</p>
              </div>
            </div>

            {/* Redemption Code Field */}
            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-rose-100 to-pink-100 rounded-lg border-2 border-rose-300 shadow-md">
              <Key className="w-6 h-6 text-rose-700 mt-1 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-rose-800 uppercase tracking-wide mb-1">Redemption Code</p>
                <p className="text-xl md:text-2xl font-bold text-rose-900 italic break-words">{copy.coupon.redemptionCode}</p>
              </div>
            </div>
          </div>

          {/* Decorative Bottom */}
          <div className="pt-6 text-center border-t-4 border-dashed border-rose-300">
            <p className="text-rose-700 font-medium text-sm">
              Valid for endless love and affection ❤️
            </p>
          </div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-8 left-8 w-12 h-12 border-l-4 border-t-4 border-rose-400 rounded-tl-lg opacity-50" />
        <div className="absolute top-8 right-8 w-12 h-12 border-r-4 border-t-4 border-rose-400 rounded-tr-lg opacity-50" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-l-4 border-b-4 border-rose-400 rounded-bl-lg opacity-50" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-r-4 border-b-4 border-rose-400 rounded-br-lg opacity-50" />
      </Card>

      {/* Shadow Effect */}
      <div className="absolute inset-0 -z-10 bg-rose-900/20 blur-2xl transform translate-y-4" />
    </div>
  );
}
