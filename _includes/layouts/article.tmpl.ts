export const layout = "layouts/main.tmpl.ts"

export default ({ title, description, content, createdAt, evergreen }, filters) =>
  `<article>
     <header>
       <time dateTime=${filters.date(createdAt, "DATE")}></time>
       <h1>${title}</h1>
       <p>${description}</p>
     </header>
     ${content}
   </article>`
