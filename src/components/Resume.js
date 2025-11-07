// src/pages/Resume.js
import React from 'react';

const wrap = { maxWidth: 820, margin: '30px auto', padding: 16 };
const box = { display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-start' };
const btn = { padding: '10px 14px', borderRadius: 8, border: '1px solid #333', textDecoration: 'none' };

export default function Resume() {
  return (
    <div style={wrap}>
      <h2>Résumé</h2>
      <p>Download a current PDF résumé or view it in your browser.</p>
      <div style={box}>
        <a style={btn} href="/resume.pdf" download>Download PDF</a>
        <a style={btn} href="/resume.pdf" target="_blank" rel="noreferrer">Open in new tab</a>
      </div>
    </div>
  );
}
