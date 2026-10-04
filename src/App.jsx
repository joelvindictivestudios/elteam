import React, { useEffect, useState } from 'react';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Electrical from './pages/Electrical.jsx';
import Charging from './pages/Charging.jsx';
import Solar from './pages/Solar.jsx';
import CommercialKitchen from './pages/CommercialKitchen.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import { pageMeta } from './pageMeta.js';

const pages = { index: Home, tjanster: Services, elinstallationer: Electrical, laddbox: Charging, solceller: Solar, storkok: CommercialKitchen, 'om-elteam': About, kontakt: Contact };

function Wordmark() {
  return <a className="wordmark" href="/" aria-label="Elteam Malmö, startsida"><span>ELTEAM</span><small>MALMÖ</small><i aria-hidden="true" /></a>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30);
    update();
    window.addEventListener('scroll', update, { passive: true });
    const closeOnEscape = e => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', closeOnEscape);
    return () => { window.removeEventListener('scroll', update); document.removeEventListener('keydown', closeOnEscape); };
  }, []);
  return <header className={`site-header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' menu-open' : ''}`} id="top">
    <div className="shell nav-row">
      <Wordmark />
      <nav className="desktop-nav" aria-label="Huvudmeny"><a href="/tjanster/">Tjänster</a><a href="/om-elteam/">Om Elteam</a><a href="/kontakt/">Kontakt</a></nav>
      <a className="nav-button" href="/kontakt/">Få hjälp med elen <span aria-hidden="true">↗</span></a>
      <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(open => !open)}>Meny <span aria-hidden="true">☰</span></button>
    </div>
    <nav className="mobile-menu" id="mobile-menu" aria-label="Mobilmeny" onClick={() => setMenuOpen(false)}><a href="/tjanster/">Tjänster</a><a href="/om-elteam/">Om Elteam</a><a href="/kontakt/">Kontakt</a><a href="tel:+46738049314">Ring 073–80 49 314</a></nav>
  </header>;
}

function Footer() {
  return <><footer className="site-footer"><div className="shell footer-inner"><Wordmark /><p>Elteam i Malmö AB · Erikslustvägen 34A, 217 73 Malmö</p><a href="tel:+46738049314">073–80 49 314</a><a href="mailto:nicklasroos@elteammalmo.se">nicklasroos@elteammalmo.se</a></div></footer><div className="mobile-actions" aria-label="Snabbkontakt"><a href="tel:+46738049314">Ring oss</a><a href="/kontakt/">Skicka förfrågan</a></div></>;
}

export default function App() {
  const slug = window.location.pathname.split('/').filter(Boolean)[0] || 'index';
  const Page = pages[slug] || Home;
  useEffect(() => {
    const meta = pageMeta[slug] || pageMeta.index;
    document.title = meta.title;
    document.querySelector('meta[name="description"]').setAttribute('content', meta.description);
    const updateHero = () => document.querySelector('.hero')?.classList.toggle('is-lit', window.scrollY > 60);
    updateHero();
    window.addEventListener('scroll', updateHero, { passive: true });
    return () => window.removeEventListener('scroll', updateHero);
  }, [slug]);
  return <><a className="skip-link" href="#main">Hoppa till innehåll</a><Header /><Page /><Footer /></>;
}
