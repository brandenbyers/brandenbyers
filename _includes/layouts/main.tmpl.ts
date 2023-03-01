export default ({ search, title, content }) =>
  `<html>
    <link rel="stylesheet" href="/css/core.css" inline>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
    </head>
    <body>
      ${content}
    <footer>
      <nav>
        <ol>
<li><a href='/'>brandenbyers.com</a></li>
${
    (search.values('tags') as string[])
      .filter((tag) => tag !== 'article')
      .map((tag) => {
        return `<li><a href='/${tag}'>${tag}</a></li>`
      }).join('')
  }
          <li><a href='/rss'>rss</a></li>
        </ul>
      </nav>
    </footer>
    </body>
  </html>`
