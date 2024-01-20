console.log(`[instrumentation] File loaded. Process id: ${process.pid}.`);

export async function register() {
  if (
    process.env.NEXT_RUNTIME === "nodejs" &&
    process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
  ) {
    const initMocks = await import(`@/mocks`).then((res) => res.initMocks);
    await initMocks();
    console.log("[instrumentation][register] API mocking enabled, starting.");
  }
}
