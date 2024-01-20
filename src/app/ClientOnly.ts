"use client";

export default function ClientOnly() {
  if (process.env.NEXT_PUBLIC_APP_API_MOCKING === "enabled") {
    console.log("[Layout] Mocking enabled.");

    import(`@/mocks`).then((res) => res.initMocks);
    // initMocks();
  }

  return null;
}
