// src/components/CherryPayment.jsx
import { useEffect, useRef } from "react";

const CHERRY_SCRIPT_SRC = "https://files.withcherry.com/widgets/widget.js";
const GOOGLE_FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Playfair+Display&family=Slabo+27px&family=Lato&family=Raleway&family=Montserrat&family=Oswald&family=Poppins&family=Source+Sans+Pro&family=PT+Sans&family=Open+Sans&display=swap";

export default function CherryPayment({
  debug = false,
  slug = "ultimate-health-direct-primary-care",
  name = "Ultimate Health Direct Primary Care",
  primaryColor = "#00c37d",
  secondaryColor = "#00c37d10",
  fontFamily = "Open Sans",
  sections = ["all"], // other valid: 'hero','howitworks','testimony','faq','calculator'
}) {
  const didInitRef = useRef(false);

  useEffect(() => {
    if (didInitRef.current) return;
    didInitRef.current = true;

    // 1) Ensure Google Fonts once
    const fontsAlreadyPresent = Array.from(document.styleSheets || []).some(
      (s) => s?.href === GOOGLE_FONTS_HREF
    );
    if (!fontsAlreadyPresent) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = GOOGLE_FONTS_HREF;
      document.head.appendChild(link);
    }

    // 2) Ensure/clear anchor containers
    sections.forEach((id) => {
      let el = document.getElementById(id);
      if (!el) {
        el = document.createElement("div");
        el.id = id;
        document.body.appendChild(el);
      } else {
        el.innerHTML = "";
      }
    });

    // 3) Define Cherry loader stub BEFORE loading script
    const w = window;
    const o = "_hw";
    w[o] =
      w[o] ||
      function () {
        (w[o].q = w[o].q || []).push(arguments);
      };

    // 4) Inject script once (id must be "_hw")
    let script = document.getElementById(o);
    if (!script) {
      script = document.createElement("script");
      script.id = o;
      script.src = CHERRY_SCRIPT_SRC; // no leading/trailing spaces!
      script.async = true;
      document.head.appendChild(script);
    }

    // 5) Queue init immediately (script will drain the queue on load)
    w._hw(
      "init",
      {
        debug,
        variables: { slug, name },
        styles: { primaryColor, secondaryColor, fontFamily },
      },
      sections
    );
  }, [debug, slug, name, primaryColor, secondaryColor, fontFamily, sections]);

  return (
    <>
      {sections.map((id) => (
        <div key={id} id={id} />
      ))}
    </>
  );
}
