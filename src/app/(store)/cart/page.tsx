"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { formatINR } from "@/lib/utils";
import toast from "react-hot-toast";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalAmount, clearCart } = useCartStore();
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [shippingAddress, setShippingAddress] = useState({
    fullName: "", phone: "", address: "", city: "", state: "", pincode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "cod">("upi");
  const [step, setStep] = useState<"cart" | "address" | "payment">("cart");

  const subtotal = getTotalAmount();
  const shippingCost = subtotal >= 2000 ? 0 : 99;
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + shippingCost + gst - couponDiscount;

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === "HERITAGE10") {
      const disc = Math.round(subtotal * 0.1);
      setCouponDiscount(disc);
      setCouponApplied(true);
      toast.success(`Coupon applied! You save ${formatINR(disc)}`);
    } else {
      toast.error("Invalid coupon code");
    }
  };

  const handlePayment = async () => {
    // Razorpay integration — replace with actual API call
    toast.success("Redirecting to Razorpay...");
    // const response = await fetch(`${API_URL}/payments/create-order`, { ... })
    // const { orderId } = await response.json();
    // const rzp = new Razorpay({ key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, ... })
    // rzp.open()
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <span className="material-symbols-outlined text-stone-300 text-[80px]">shopping_bag</span>
          <h2 className="font-headline-md text-on-surface text-2xl font-semibold mt-4 mb-2">Your bag is empty</h2>
          <p className="text-stone-500 font-manrope mb-8">Start adding pieces from our curated collections.</p>
          <Link href="/collections" className="bg-primary text-white font-label-sm px-10 py-4 uppercase tracking-widest hover:bg-primary-container transition-all inline-block">
            Explore Collections
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-8xl mx-auto px-6 lg:px-8 py-10">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="font-headline-xl text-primary text-4xl font-bold mb-2">Shopping Bag</h1>
          <p className="font-body-md text-on-surface-variant">Review your selections and proceed to secure checkout.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* ─── Left Column ─────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-8 space-y-10">
            {/* Cart Items */}
            <section className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-5 pb-6 border-b border-outline-variant">
                  {/* Product Image */}
                  <div className="w-28 h-36 bg-surface-container rounded overflow-hidden flex-shrink-0 relative">
                    {item.product.imageUrls?.[0] && (
                      <Image src={item.product.imageUrls[0]} alt={item.product.title} fill className="object-cover" />
                    )}
                  </div>
                  {/* Product Info */}
                  <div className="flex-grow flex flex-col justify-between">
                    <div className="flex justify-between gap-4">
                      <div>
                        <h3 className="font-headline-md text-on-surface text-xl font-semibold leading-snug">{item.product.title}</h3>
                        {(item.selectedSize || item.selectedColor) && (
                          <p className="font-label-sm text-[10px] text-on-secondary-container mt-1 uppercase tracking-wider">
                            {[item.selectedColor, item.selectedSize].filter(Boolean).join(" / ")}
                          </p>
                        )}
                      </div>
                      <span className="font-headline-md text-primary text-xl font-semibold flex-shrink-0">
                        {formatINR((item.product.salePrice ?? item.product.price) * item.quantity)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity */}
                      <div className="flex items-center border border-outline rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:text-primary transition-colors"
                        >
                          <span className="material-symbols-outlined text-[18px]">remove</span>
                        </button>
                        <span className="px-4 font-manrope text-sm min-w-[40px] text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:text-primary transition-colors"
                        >
                          <span className="material-symbols-outlined text-[18px]">add</span>
                        </button>
                      </div>
                      {/* Remove */}
                      <button
                        onClick={() => { removeItem(item.id); toast.success("Removed from bag"); }}
                        className="text-on-surface-variant hover:text-error flex items-center gap-1.5 font-label-sm text-[10px] uppercase tracking-wider transition-colors"
                      >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* Delivery Address */}
            <section className="bg-surface-container-low p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary">local_shipping</span>
                <h2 className="font-headline-md text-on-surface text-xl font-semibold">Delivery Address</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                {[
                  { label: "Full Name", key: "fullName", type: "text", placeholder: "Ananya Sharma" },
                  { label: "Phone Number", key: "phone", type: "tel", placeholder: "+91 98765 43210" },
                  { label: "Street Address", key: "address", type: "text", placeholder: "House No. 12, Malviya Nagar", full: true },
                  { label: "City", key: "city", type: "text", placeholder: "New Delhi" },
                  { label: "State", key: "state", type: "text", placeholder: "Delhi" },
                  { label: "Pincode", key: "pincode", type: "text", placeholder: "110017" },
                ].map((field) => (
                  <div key={field.key} className={`flex flex-col ${field.full ? "md:col-span-2" : ""}`}>
                    <label className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={(shippingAddress as any)[field.key]}
                      onChange={(e) => setShippingAddress((prev) => ({ ...prev, [field.key]: e.target.value }))}
                      className="input-boutique"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Payment */}
            <section className="bg-surface-container-highest p-8 rounded-xl border border-outline-variant">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">verified_user</span>
                  <h2 className="font-headline-md text-on-surface text-xl font-semibold">Secure Payment</h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-[10px] text-on-surface-variant">SECURED BY</span>
                  <div className="bg-[#2B3144] px-2 py-1 rounded text-white font-bold italic text-xs tracking-tighter">Razorpay</div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { key: "upi", icon: "account_balance_wallet", label: "UPI (GPay, PhonePe, Paytm)" },
                  { key: "card", icon: "credit_card", label: "Credit / Debit Card" },
                  { key: "cod", icon: "payments", label: "Cash on Delivery" },
                ].map((method) => (
                  <button
                    key={method.key}
                    onClick={() => setPaymentMethod(method.key as any)}
                    className={`flex items-center justify-between p-4 bg-white rounded-lg border transition-colors ${
                      paymentMethod === method.key ? "border-primary" : "border-stone-100 hover:border-stone-300"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-primary">{method.icon}</span>
                      <span className="font-manrope font-semibold text-sm">{method.label}</span>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${paymentMethod === method.key ? "border-primary" : "border-stone-300"}`}>
                      {paymentMethod === method.key && <div className="w-2 h-2 bg-primary rounded-full" />}
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* ─── Right: Order Summary ───────────────────────────────────────────────── */}
          <aside className="lg:col-span-4 sticky top-28">
            <div className="bg-surface-container-lowest border border-stone-100 p-8 whisper-shadow">
              <h2 className="font-headline-md text-on-surface text-xl font-semibold mb-6">Order Summary</h2>

              {/* Item list */}
              <div className="space-y-3 mb-6 pb-6 border-b border-stone-100">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-sm font-manrope">
                    <span className="text-on-surface-variant truncate pr-4">{item.product.title} × {item.quantity}</span>
                    <span className="text-on-surface font-semibold flex-shrink-0">{formatINR((item.product.salePrice ?? item.product.price) * item.quantity)}</span>
                  </div>
                ))}
              </div>

              {/* Coupon */}
              <div className="mb-6 pb-6 border-b border-stone-100">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Coupon code (HERITAGE10)"
                    className="input-boutique flex-1 text-sm"
                  />
                  <button
                    onClick={applyCoupon}
                    className="px-4 py-2 border border-primary text-primary font-label-sm text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all"
                  >
                    Apply
                  </button>
                </div>
                {couponApplied && (
                  <p className="text-green-600 font-label-sm text-[10px] uppercase tracking-wider mt-2">
                    ✓ Code applied — {formatINR(couponDiscount)} off
                  </p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6 pb-6 border-b border-stone-100">
                <div className="flex justify-between text-sm font-manrope text-on-surface-variant">
                  <span>Subtotal</span>
                  <span className="text-on-surface">{formatINR(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm font-manrope text-on-surface-variant">
                  <span>Shipping</span>
                  <span className={shippingCost === 0 ? "text-green-600 font-semibold" : "text-on-surface"}>
                    {shippingCost === 0 ? "FREE" : formatINR(shippingCost)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-manrope text-on-surface-variant">
                  <span>GST (5%)</span>
                  <span className="text-on-surface">{formatINR(gst)}</span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-sm font-manrope text-green-600">
                    <span>Coupon Discount</span>
                    <span>−{formatINR(couponDiscount)}</span>
                  </div>
                )}
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-6">
                <span className="font-headline-md text-on-surface font-semibold text-lg">Total</span>
                <span className="font-headline-md text-primary font-bold text-2xl">{formatINR(total)}</span>
              </div>

              {/* Place Order */}
              <button
                onClick={handlePayment}
                className="w-full bg-primary text-white font-label-sm text-[11px] py-5 uppercase tracking-[0.2em] hover:opacity-90 transition-opacity whisper-shadow flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">lock</span>
                Place Secure Order
              </button>

              <p className="text-stone-400 text-[10px] font-manrope text-center mt-4 uppercase tracking-wider">
                Your payment information is encrypted and secure
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
