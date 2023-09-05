export function onRequest(context) {
  console.log("hello world");
  console.log({ context });
  return new Response("Hello, world!");
}
