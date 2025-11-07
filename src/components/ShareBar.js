// src/components/ShareBar.js
import React from 'react';

const root = { display: 'flex', gap: 12, alignItems: 'center', margin: '16px 0' };
const btn = { border: '1px solid #ccc', padding: '6px 10px', borderRadius: 8, textDecoration: 'none' };

export default function ShareBar({ title }) {
  const url = typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '';
  const text = encodeURIComponent(title ?? 'Check this out');
  return (
    <div style={root} aria-label="Share this page">
      <a style={btn} href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`} target="_blank" rel="noreferrer">Share on X</a>
      <a style={btn} href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`} target="_blank" rel="noreferrer">LinkedIn</a>
      <a style={btn} href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noreferrer">Facebook</a>
      <a style={btn} href={`mailto:?subject=${text}&body=${url}`} rel="noreferrer">Email</a>
    </div>
  );
}
