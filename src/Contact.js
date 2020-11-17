import React from 'react';

const Contact = () => {
  return (
    <div className="mx-auto mb-auto" id="contact">
      <h2 className="text-center my-5">Contact</h2>
      <div className="row">
        <div className="col-md-4 col-3">
          <p>Phone:</p>
          <p>Email:</p>
          <p>Mail:</p>
        </div>
        <div className="col-md-8 col-9">
          <p>1-(XXX)-555-1234</p>
          <p><a target="_blank" href="mailto:grau.morgan@gmail.com">grau.morgan@gmail.com</a></p>
          <p className="text-center">#1234, 123 Street NW<br/>Edmonton, AB, Canada<br/>A1A 1A1</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
