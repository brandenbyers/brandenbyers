import lume from 'lume/mod.ts'
import attributes from 'lume/plugins/attributes.ts'
import code_highlight from 'lume/plugins/code_highlight.ts'
import date from 'lume/plugins/date.ts'
import filter_pages from 'lume/plugins/filter_pages.ts'
import imagick from 'lume/plugins/imagick.ts'
import inline from 'lume/plugins/inline.ts'
import katex from 'lume/plugins/katex.ts'
import metas from 'lume/plugins/metas.ts'
import minify_html from 'lume/plugins/minify_html.ts'
import pagefind from 'lume/plugins/pagefind.ts'
import relations from 'lume/plugins/relations.ts'
import resolve_urls from 'lume/plugins/resolve_urls.ts'
import sitemap from 'lume/plugins/sitemap.ts'
import svgo from 'lume/plugins/svgo.ts'
import slugify_urls from 'lume/plugins/slugify_urls.ts'

import footnote from "npm:markdown-it-footnote"
import emoji from "npm:markdown-it-emoji"
import anchor from "npm:markdown-it-anchor"
import figure from "npm:markdown-it-figure"

const site = lume()

site.use(attributes())
site.use(date())
site.use(filter_pages())
site.use(imagick())
site.use(inline())
site.use(katex())
site.use(metas())
site.use(minify_html())
site.use(pagefind())
site.use(relations())
site.use(resolve_urls())
site.use(sitemap())
site.use(svgo())
site.use(slugify_urls())
site.hooks.addMarkdownItPlugin(anchor)
site.hooks.addMarkdownItPlugin(emoji)
site.hooks.addMarkdownItPlugin(footnote)
site.hooks.addMarkdownItPlugin(figure)

site.ignore('README.md')

site.copy("static", ".")

export default site
