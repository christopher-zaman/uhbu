import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

export default function SubscribeInline({ cardTitle = "", source = "seo-card" }) {
  const form = useRef();
  const location = useLocation();

  const sendSubscription = async (e) => {
    e.preventDefault();

    const fd = new FormData(form.current);

    const payload = {
      email: fd.get("subscriber_email") || "",
      source: fd.get("source") || source,
      page: fd.get("page") || location.pathname,
      cardTitle: fd.get("cardTitle") || cardTitle,
    };

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const text = await response.text();

      let result = null;
      try {
        result = JSON.parse(text);
      } catch {
        throw new Error(`API returned non-JSON: ${text.slice(0, 160)}`);
      }

      if (!response.ok) {
        throw new Error(result?.error || "Something went wrong.");
      }

      alert("Thank you for subscribing!");
      form.current.reset();
    } catch (error) {
      console.error("Subscription error:", error);
      alert(error?.message || "Failed to subscribe. Please try again later.");
    }
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

      <input type="hidden" name="source" value={source} />
      <input type="hidden" name="page" value={location.pathname} />
      <input type="hidden" name="cardTitle" value={cardTitle} />

      <button type="submit" className="btn new-btn">
        Subscribe
      </button>
    </form>
  );
}