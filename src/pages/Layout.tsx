function Layout({ children }) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>HTMX Demo</title>
        <script src="https://unpkg.com/htmx.org"></script>
        <link href="/styles.css" rel="stylesheet"></link>
      </head>
      <body hx-boost="true" class="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

export { Layout };
