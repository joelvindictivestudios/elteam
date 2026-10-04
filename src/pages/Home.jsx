import React from 'react';
import InquiryForm from '../InquiryForm.jsx';
export default function Home() {
  return <main id="main">
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-photo" role="img" aria-label="Konceptbild av ett arkitektoniskt rum med elektrisk belysning"></div>
      <div className="hero-darkness" aria-hidden="true"></div>
      <div className="hero-grid" aria-hidden="true"></div>
      <div className="shell hero-inner">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line"></span>ELTEAM I MALMÖ AB <span className="eyebrow-separator">/</span> SEDAN 1988</p>
          <h1 id="hero-title">Elektriker i Malmö med<br /><em>Skåne som arbetsplats</em></h1>
          <p className="hero-lead">Vi arbetar med elinstallationer för hem, företag och fastigheter i Malmö och Skåne. Från det lilla jobbet till nästa stora steg.</p>
          <div className="hero-actions"><a className="button button-bright" href="/kontakt/">Få hjälp av en elektriker <span aria-hidden="true">↗</span></a><a className="button button-quiet" href="/tjanster/">Se våra tjänster <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="hero-bottom"><span>SKÅNE SOM ARBETSPLATS</span><span>01 / 04</span><span className="hero-scroll">SCROLLA FÖR ATT UTFORSKA <i aria-hidden="true"></i></span></div>
      </div>
    </section>
    <section className="proof-bar" aria-label="Elteam i korthet"><div className="shell proof-inner"><p><strong>1988</strong><span>Året Elteam grundades</span></p><p><strong>50<span>+</span></strong><span>Års samlad erfarenhet hos Nicklas och Robert Roos</span></p><p className="proof-statement">El som bara fungerar.<br /><span>Hemma. På jobbet. I fastigheten.</span></p></div></section>

    <section className="intro section-pad" id="om" aria-labelledby="intro-title"><div className="shell intro-grid">
      <div><p className="section-kicker">01 / ERFARENHET MÖTER FRAMTID</p><h2 id="intro-title">El är vårt<br /><span>hantverk.</span></h2></div>
      <div className="intro-body"><p className="large-copy">Elteam startades av Robert Roos 1988. I dag drivs företaget av sonen Nicklas. Tillsammans har de över 50 års erfarenhet av elarbete i Malmö och Skåne.</p><p>Det märks i sättet vi arbetar: genomtänkt från början, noggrant genomfört och gjort för att fungera i vardagen. Vi hjälper till med allt från service och renoveringar till nya installationer, laddboxar och solceller.</p><a className="text-link" href="/om-elteam/">Lär känna Elteam <span aria-hidden="true">↗</span></a></div>
    </div></section>

    <section className="service-section section-pad" id="tjanster" aria-labelledby="services-title"><div className="shell"><div className="section-heading"><p className="section-kicker">02 / VAD VI GÖR</p><h2 id="services-title">Elen bakom<br /><span>allt det andra.</span></h2><p>Fyra områden. Samma noggrannhet i varje uppdrag.</p></div>
      <div className="service-ledger">
        <a className="service-row" href="/elinstallationer/"><span className="service-number">01</span><span className="service-name">Elinstallationer<small>Hem · kontor · fastigheter</small></span><span className="service-row-arrow" aria-hidden="true">↗</span></a>
        <a className="service-row" href="/laddbox/"><span className="service-number">02</span><span className="service-name">Laddboxar<small>Hemma · på jobbet</small></span><span className="service-row-arrow" aria-hidden="true">↗</span></a>
        <a className="service-row" href="/storkok/"><span className="service-number">03</span><span className="service-name">Storkök<small>Installation · renovering</small></span><span className="service-row-arrow" aria-hidden="true">↗</span></a>
        <a className="service-row" href="/solceller/"><span className="service-number">04</span><span className="service-name">Solceller<small>Installation · modern el</small></span><span className="service-row-arrow" aria-hidden="true">↗</span></a>
      </div><div className="service-footer"><p>Behöver du något annat inom el? Berätta vad du planerar.</p><a className="text-link" href="/kontakt/">Prata med oss <span aria-hidden="true">↗</span></a></div>
    </div></section>

    <section className="image-feature" aria-labelledby="charge-title"><div className="feature-image"><img src="/assets/ev-garage-v2.webp" alt="Konceptbild av laddbox i ett modernt garage" width="1672" height="941" loading="lazy" /></div><div className="feature-copy"><p className="section-kicker">03 / LADDBOXAR</p><h2 id="charge-title">Laddning<br />som passar<br />din vardag.</h2><p>Vi installerar laddboxar för hem och arbetsplatser. Bland märkena vi arbetar med finns Phasebox, Charge Amps, Zaptec, Easee, DEFA och Wallbox.</p><a className="button button-bright" href="/laddbox/">Läs om laddboxar <span aria-hidden="true">↗</span></a><span className="feature-marker" aria-hidden="true">02 / 04</span></div></section>

    <section className="capabilities section-pad" aria-labelledby="scope-title"><div className="shell"><div className="section-heading"><p className="section-kicker">04 / FRÅN HEM TILL VERKSAMHET</p><h2 id="scope-title">Rätt el för<br /><span>rätt miljö.</span></h2></div><div className="capability-grid"><article><span>01 / HEM</span><h3>Hemma</h3><p>Renoveringar, köksinstallationer, badrum, tillbyggnader och hjälp med elen i vardagen.</p></article><article><span>02 / FÖRETAG</span><h3>På jobbet</h3><p>Elinstallationer för kontor, verksamheter och andra arbetsplatser där tekniken behöver fungera.</p></article><article><span>03 / FASTIGHET</span><h3>I fastigheten</h3><p>Nyinstallation, service och elarbeten i större miljöer. Vi arbetar också med laddboxar och solceller.</p></article><article><span>04 / STORKÖK</span><h3>I köket</h3><p>Installation och renovering av professionella kök är en del av vår erfarenhet.</p></article></div></div></section>

    <section className="process section-pad" aria-labelledby="process-title"><div className="shell process-grid"><div><p className="section-kicker">05 / ENKELT ATT KOMMA IGÅNG</p><h2 id="process-title">Berätta vad<br />du behöver.</h2><p>Du behöver inte ha en färdig lösning. Beskriv jobbet, så tar vi dialogen vidare.</p><a className="button button-bright" href="/kontakt/">Skicka en förfrågan <span aria-hidden="true">↗</span></a></div><ol><li><span>01</span><strong>Berätta om jobbet</strong><p>Vad behöver du hjälp med, och var finns du?</p></li><li><span>02</span><strong>Vi planerar arbetet</strong><p>Vi går igenom förutsättningarna tillsammans.</p></li><li><span>03</span><strong>Vi utför installationen</strong><p>Med erfarenhet och omsorg om detaljerna.</p></li><li><span>04</span><strong>Klart för användning</strong><p>El som fungerar i den miljö där den behövs.</p></li></ol></div></section>

    <section className="local section-pad" aria-labelledby="local-title"><div className="shell local-layout"><p className="section-kicker">06 / MALMÖ & SKÅNE</p><h2 id="local-title">Härifrån.<br /><span>Här för dig.</span></h2><div className="local-bottom"><p>Elektriker i Malmö med Skåne som arbetsplats. Det är Elteams egen beskrivning och vår utgångspunkt sedan 1988.</p><a className="text-link" href="/om-elteam/">Mer om oss <span aria-hidden="true">↗</span></a></div><div className="local-word" aria-hidden="true">MALMÖ</div></div></section>

    <section className="contact-section section-pad" id="kontakt" aria-labelledby="contact-title"><div className="shell contact-grid"><div><p className="section-kicker">07 / KONTAKT</p><h2 id="contact-title">Låt oss prata<br />om elen.</h2><p>Beskriv ditt projekt eller ring direkt. Vi återkommer när vi fått din förfrågan.</p><a className="contact-phone" href="tel:+46738049314">073–80 49 314 <span aria-hidden="true">↗</span></a><a className="contact-email" href="mailto:nicklasroos@elteammalmo.se">nicklasroos@elteammalmo.se</a></div><InquiryForm /></div></section>
  </main>;
}
