import React, { useEffect } from 'react';

// Mailchimp forms run inside an iframe. When a form is submitted, Mailchimp
// can post a message asking this page to go to a new address (for example a
// thank-you page). Only accept that message from Mailchimp's own sites, and
// only follow https:// addresses, so no other site can redirect our visitors.
const MAILCHIMP_ORIGIN = /^https:\/\/([a-z0-9-]+\.)*(list-manage\.com|mailchi\.mp)$/;

const MailchimpEmbed = ({ src, height = '80vh' }) => {
  useEffect(() => {
    const onMessage = (event) => {
      if (!MAILCHIMP_ORIGIN.test(event.origin)) return;
      const data = event.data;
      if (!data || !data.redirect || typeof data.url !== 'string') return;
      let target;
      try {
        target = new URL(data.url);
      } catch {
        return;
      }
      if (target.protocol !== 'https:') return;
      window.location.href = target.href;
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <iframe
      src={src}
      title="Mailchimp sign-up form"
      frameBorder="0"
      scrolling="yes"
      width="100%"
      name="landing-page-embed-frame"
      style={{ height }}
    ></iframe>
  );
};

export default MailchimpEmbed;
