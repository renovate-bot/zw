// Attach multiple handlers
export const onRequest = [
  async ({ request, next }) => {
    try {
      // Call the next handler in the stack
      const response = await next();
      const responseText = await response.text();
      //~> "Hello from next base middleware"
      return new Response(responseText + ' from middleware');
    } catch (thrown) {
      return new Response(`Error ${thrown}`, {
        status: 500,
        statusText: 'Internal Server Error',
      });
    }
  },
  ({ request, next }) => {
    return new Response('Hello from next base middleware');
  },
];
