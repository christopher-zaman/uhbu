import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLocation } from "react-router-dom";

export default function SubscribeInline({ cardTitle = "", source = "seo-card" }) {
  const form = useRef();
  const location = useLocation();

  const sendSubscription = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_SUBSCRIBE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Thank you for subscribing!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("Subscription error:", error);
        alert("Failed to subscribe. Please try again later.");
      });
  };

  return (
    <form ref={form} onSubmit={sendSubscription} className="subscribe-inline d-flex gap-2">
      <input
        type="email"
        name="subscriber_email"
        placeholder="Enter Your Email, Let's Get Started!"
        className="new-form-control"
        required
      />

      {/* tracking (matches template) */}
      <input type="hidden" name="source" value={source} />
      <input type="hidden" name="page" value={location.pathname} />
      <input type="hidden" name="cardTitle" value={cardTitle} />

      <button type="submit" className="btn new-btn">
        Subscribe
      </button>
    </form>
  );
}
