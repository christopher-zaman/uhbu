export function trackGA4(eventName, params = {}) {
  // GA4 via gtag
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
    return true;
  }

  // GA4 via dataLayer (if you ever use GTM)
  if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...params });
    return true;
  }

  // No tracker available
  return false;
}
