// import Generator from 'react-router-sitemap-generator';
// import Router from './sitemapRoutes'; //import your react router component

// const generator = new Generator('https://meta-recognition.site', Router(), {
//   lastmod: new Date().toISOString().slice(0, 10),
//   changefreq: 'monthly',
//   priority: 0.8,
// });
// generator.save('public/sitemap.xml');

require('babel-register')({
  presets: ['es2015', 'react'],
});

const router = require('./sitemapRoutes').default; // 좀 전에 만든 sitemapRoutes 파일이 있는 경로입니다.
const Sitemap = require('react-router-sitemap').default;

function generateSitemap() {
  return new Sitemap(router)
    .build('https://www.meta-recongnition.site') // 여러분의 도메인 이름으로 변경해주세요.
    .save('./public/sitemap.xml'); // sitemap.xml 파일이 생성될 위치입니다.
}

generateSitemap();
