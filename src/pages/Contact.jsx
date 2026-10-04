import React from 'react';
import InquiryForm from '../InquiryForm.jsx';
export default function Contact() {
  return <main id="main"><section className="page-hero"><div className="shell"><p className="section-kicker">07 / KONTAKT</p><h1>Vi tar det<br />härifrån.</h1><p>Berätta vad du behöver hjälp med. Du når Nicklas Roos direkt på telefon eller e-post.</p></div></section><section className="contact-section section-pad contact-page"><div className="shell contact-grid"><div><p className="section-kicker">DIREKTKONTAKT</p><h2>Hör av dig.</h2><p>Beskriv kort vad jobbet gäller och var i Skåne du finns.</p><a className="contact-phone" href="tel:+46738049314">073–80 49 314 <span aria-hidden="true">↗</span></a><a className="contact-email" href="mailto:nicklasroos@elteammalmo.se">nicklasroos@elteammalmo.se</a><p>Elteam i Malmö AB<br />Erikslustvägen 34A<br />217 73 Malmö</p></div><InquiryForm /></div></section></main>;
}
