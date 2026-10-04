import React, { useState } from 'react';

export default function InquiryForm() {
  const [status, setStatus] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const body = [
      'Namn: ' + (values.get('name') || ''),
      'Telefon: ' + (values.get('phone') || ''),
      'E-post: ' + (values.get('email') || ''),
      'Område: ' + (values.get('service') || 'Ej valt'),
      '',
      'Vad behöver du hjälp med?',
      values.get('message') || ''
    ].join('\n');
    setStatus('Ett e-postutkast öppnas. Skicka det i ditt e-postprogram för att slutföra förfrågan.');
    window.location.href = 'mailto:nicklasroos@elteammalmo.se?subject=' +
      encodeURIComponent('Förfrågan via Elteams webbplats') + '&body=' + encodeURIComponent(body);
  }

  return <form className="inquiry-form" onSubmit={handleSubmit}>
    <p className="form-title">Vad behöver du hjälp med?</p>
    <div className="field-pair">
      <div className="field"><label htmlFor="name">Namn</label><input id="name" name="name" autoComplete="name" required /></div>
      <div className="field"><label htmlFor="phone">Telefon</label><input id="phone" name="phone" type="tel" autoComplete="tel" required /></div>
    </div>
    <div className="field"><label htmlFor="email">E-post</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
    <div className="field"><label htmlFor="service">Vad gäller det?</label><select id="service" name="service" defaultValue=""><option value="">Välj gärna ett område</option><option>Elinstallation</option><option>Laddbox</option><option>Renovering</option><option>Storkök</option><option>Solceller</option><option>Annat</option></select></div>
    <div className="field"><label htmlFor="message">Berätta kort om jobbet</label><textarea id="message" name="message" rows={4} required /></div>
    <button className="button button-bright" type="submit">Öppna e-postutkast <span aria-hidden="true">↗</span></button>
    <p className="form-note">Formuläret öppnar ditt e-postprogram. Du skickar meddelandet därifrån.</p>
    <p className="form-status" role="status" aria-live="polite">{status}</p>
  </form>;
}
