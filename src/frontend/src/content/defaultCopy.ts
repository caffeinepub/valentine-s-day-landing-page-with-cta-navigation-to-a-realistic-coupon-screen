// Default copy values for the Valentine's Day application
export interface AppCopy {
  landing: {
    headline: string;
    subheadline: string;
    quote: string;
    ctaLabel: string;
  };
  coupon: {
    header: string;
    recipientName: string;
    redemptionCode: string;
  };
}

export const defaultCopy: AppCopy = {
  landing: {
    headline: "Happy Valentine's Day",
    subheadline: "Love is in the air, and so are special surprises just for you",
    quote: "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.",
    ctaLabel: "click to avail your Valentine's day coupon"
  },
  coupon: {
    header: "Free Kisses and Hugs",
    recipientName: "Shubham Kumar",
    redemptionCode: "Your deep, romantic voice"
  }
};
