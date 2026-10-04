import { defineConfig } from 'vite';
import { pageMeta } from './src/pageMeta.js';

// Skriver dist/<sida>/index.html med rätt titel och beskrivning, så att
// undersidorna finns som riktiga filer på Netlify (och i länkförhandsvisningar).
function pageHtml() {
  return {
    name: 'page-html',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const html = bundle['index.html'].source;
      for (const [slug, { title, description }] of Object.entries(pageMeta)) {
        if (slug === 'index') continue;
        this.emitFile({
          type: 'asset',
          fileName: `${slug}/index.html`,
          source: html
            .replace(/<title>.*<\/title>/, `<title>${title}</title>`)
            .replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${description}"`),
        });
      }
    },
  };
}

export default defineConfig({
  cacheDir: '.vite-cache',
  plugins: [pageHtml()],
});
