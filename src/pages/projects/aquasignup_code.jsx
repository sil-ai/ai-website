import React from 'react';

const AQuASignUpPage = () => (
  <>
    <iframe
      src="https://mailchi.mp/820d37d1cf93/aqua-sign-up"
      frameBorder="0"
      scrolling="yes"
      width="100%"
      height="100%"
      marginHeight="0"
      marginWidth="0"
      name="landing-page-embed-frame"
      style={{ height: '80vh' }}
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

export default AQuASignUpPage;
