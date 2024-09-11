import {
  Form,
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
  
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="sidebar">
          <h1>Extra 1</h1>
          <div>
            <Form method="post">
              <button><a href="http://localhost:5173/">Home</a></button>
            </Form>
          </div>
          <div>
            <Form method="post">
              <button><a href="/page1">Extra 1</a></button>
            </Form>
          </div>
          <div>
            <Form method="post">
              <button><a href="/page2">Extra 2</a></button>
            </Form>
          </div>
        </div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
  