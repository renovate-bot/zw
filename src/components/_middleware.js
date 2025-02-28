async function errorHandler(context) {
  try {
    // wait for the next function to finish
    return await context.next();
  } catch (err) {
    // catch and report and errors when running the next function
    return new Response(`${err.message}\n${err.stack}`, {status: 500});
  }
}
export const onRequest = errorHandler;

/**export default function(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/');
  }
}*/
