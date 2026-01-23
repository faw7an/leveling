"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const DotLottieReact = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
);

function Loader({ src = "/animations/loader.lottie", size = 230 }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        style={{
          width: size,
          height: size,
          display: "grid",
          placeItems: "center",
        }}
      >
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-transparent" />
      </div>
    );
  }
  return (
  <div style={{ width: size, height: size, display: "inline-block" }} aria-hidden="true">
      <DotLottieReact
        src={src}
        loop
        autoplay
        style={{ width: "100%", height: "100%" }}
        onError={() => setErrored(true)}
      />
    </div>
    );
}

export default Loader;
