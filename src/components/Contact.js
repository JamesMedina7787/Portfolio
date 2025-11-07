// src/components/Contact.js
import React, { useState } from 'react';

const wrap = { maxWidth: 640, margin: '30px auto', padding: 16, border: '1px solid #eee', borderRadius: 12 };
const input = { width: '100%', padding: 10, marginBottom: 12, borderRadius: 8, border: '1px solid #ddd' };
const submit = { padding: '10px 14px', borderRadius: 8, border: '1px solid #333', background: '#111', color: '#fff' };

export default function Contact() {
  const [ok, setOk] = useState(false);
  return (
    <div style={wrap}>
      <h2>Contact</h2>
      <p>Let’s work together. I usually respond within 1–2 business days.</p>
      {!ok ? (
        <form
          action="https://formspree.io/f/your-id" /* replace with your Formspree ID */
          method="POST"
          onSubmit={() => setOk(true)}
        >
          <input style={input} type="text" name="name" placeholder="Your name" required />
          <input style={input} type="email" name="email" placeholder="Your email" required />
          <input style={input} type="text" name="subject" placeholder="Subject" />
          <textarea style={{ ...input, minHeight: 140 }} name="message" placeholder="Your message" required />
          <button style={submit} type="submit">Send</button>
        </form>
      ) : (
        <p>Thanks! Your message was sent.</p>
      )}
    </div>
  );
}
