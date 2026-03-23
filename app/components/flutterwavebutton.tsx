"use client";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

type Props = {
  amount: number;
  email: string;
  name: string;
  phone: string;
  onSuccess: () => void;
};

export default function FlutterwaveButton({ amount, email, name, phone, onSuccess }: Props) {
  const config = {
    public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY!,
    tx_ref: `OSHODI-${Date.now()}`,
    amount,
    currency: "NGN", // change to USD, GBP etc if needed
    payment_options: "card, mobilemoney, ussd",
    customer: {
      email,
      phone_number: phone,
      name,
    },
    customizations: {
      title: "Oshodi Store",
      description: "Payment for your order",
      logo: "/icons/logo.png",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <button
      type="button"
      onClick={() => {
        handleFlutterPayment({
          callback: (response) => {
            console.log("Payment response:", response);
            if (response.status === "successful") {
              onSuccess();
            }
            closePaymentModal();
          },
          onClose: () => {
            console.log("Payment modal closed");
          },
        });
      }}
      className="w-full bg-[#1a1a1a] text-white text-sm font-semibold py-4 rounded-xl hover:bg-black transition-colors"
    >
      Place order
    </button>
  );
}