import React from "react";

export default function LoadingPage() {
  return (
    <div className="flex h-[85vh] items-center justify-center gap-4">
      Global Loading
      <span className="loading loading-spinner loading-xl"></span>
    </div>
  );
}
