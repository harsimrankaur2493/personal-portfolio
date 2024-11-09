import React, { useState } from 'react';

export default function Contact() {
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append('access_key', '27dd9623-3df8-4b1f-bf26-8de4ef263d92');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully');
        event.target.reset();
      } else {
        setResult('Error: ' + data.message);
      }
    } catch (error) {
      console.error('Error', error);
      setResult('Submission failed. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-form" id='contact'>
      <h2>Contact Me</h2>
      <form onSubmit={onSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name</label><br/>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label><br/>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-field">
          <label htmlFor="message">Message</label><br/>
          <textarea id="message" name="message" required></textarea>
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>

      {result && <p className="result-message">{result}</p>}
    </section>
  );
}
