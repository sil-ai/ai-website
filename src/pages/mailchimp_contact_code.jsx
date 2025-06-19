import React from 'react';

const MailChimpContactPage = () => (
  <>
    <iframe
      src="https://us11.list-manage.com/contact-form?u=fde88a1e2cd6f30e3892969c9&form_id=7450e461c8476418f7f8208ee9b71527"
      frameBorder="0"
      scrolling="yes"
      width="100%"
      height="100%"
      marginHeight="0"
      marginWidth="0"
      name="landing-page-embed-frame"
      style={{ height: '100vh' }}
    ></iframe>
    <script type="text/javascript">
      {`window.addEventListener("message", function(e) {
        if (e.data && e.data.redirect) {
          window.location.href = e.data.url;
        }
      })`}
    </script>
  </>
);

export default MailChimpContactPage;
