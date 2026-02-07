import { useCopy } from '@/content/CopyContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X, Save, RotateCcw } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function EditTextPanel() {
  const { draftCopy, updateDraft, saveDraft, cancelDraft, resetToDefaults, exitEditMode } = useCopy();

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] flex flex-col">
        <CardHeader className="flex-shrink-0">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl">Edit Text</CardTitle>
              <CardDescription>Customize the text on your Valentine's page</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={exitEditMode}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <ScrollArea className="flex-1">
          <CardContent className="space-y-6">
            {/* Landing Page Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-rose-900 border-b pb-2">Landing Page</h3>
              
              <div className="space-y-2">
                <Label htmlFor="headline">Headline</Label>
                <Input
                  id="headline"
                  value={draftCopy.landing.headline}
                  onChange={(e) => updateDraft({ landing: { ...draftCopy.landing, headline: e.target.value } })}
                  placeholder="Enter headline"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subheadline">Subheadline</Label>
                <Textarea
                  id="subheadline"
                  value={draftCopy.landing.subheadline}
                  onChange={(e) => updateDraft({ landing: { ...draftCopy.landing, subheadline: e.target.value } })}
                  placeholder="Enter subheadline"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quote">Quote</Label>
                <Textarea
                  id="quote"
                  value={draftCopy.landing.quote}
                  onChange={(e) => updateDraft({ landing: { ...draftCopy.landing, quote: e.target.value } })}
                  placeholder="Enter quote"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ctaLabel">CTA Button Label</Label>
                <Input
                  id="ctaLabel"
                  value={draftCopy.landing.ctaLabel}
                  onChange={(e) => updateDraft({ landing: { ...draftCopy.landing, ctaLabel: e.target.value } })}
                  placeholder="Enter button text"
                />
              </div>
            </div>

            {/* Coupon Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-rose-900 border-b pb-2">Coupon</h3>
              
              <div className="space-y-2">
                <Label htmlFor="couponHeader">Coupon Header</Label>
                <Input
                  id="couponHeader"
                  value={draftCopy.coupon.header}
                  onChange={(e) => updateDraft({ coupon: { ...draftCopy.coupon, header: e.target.value } })}
                  placeholder="Enter coupon header"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="recipientName">Recipient Name</Label>
                <Input
                  id="recipientName"
                  value={draftCopy.coupon.recipientName}
                  onChange={(e) => updateDraft({ coupon: { ...draftCopy.coupon, recipientName: e.target.value } })}
                  placeholder="Enter recipient name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="redemptionCode">Redemption Code Text</Label>
                <Input
                  id="redemptionCode"
                  value={draftCopy.coupon.redemptionCode}
                  onChange={(e) => updateDraft({ coupon: { ...draftCopy.coupon, redemptionCode: e.target.value } })}
                  placeholder="Enter redemption code"
                />
              </div>
            </div>
          </CardContent>
        </ScrollArea>

        <CardFooter className="flex-shrink-0 flex flex-col sm:flex-row gap-2 border-t pt-6">
          <Button
            variant="outline"
            onClick={resetToDefaults}
            className="w-full sm:w-auto"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset to Defaults
          </Button>
          <div className="flex-1" />
          <Button
            variant="outline"
            onClick={cancelDraft}
            className="w-full sm:w-auto"
          >
            Cancel
          </Button>
          <Button
            onClick={saveDraft}
            className="w-full sm:w-auto"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
