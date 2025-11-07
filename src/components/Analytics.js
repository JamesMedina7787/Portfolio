// src/components/Analytics.js
import { useEffect } from 'react';
import { withRouter } from 'react-router';

function AnalyticsImpl({ history }) {
  useEffect(() => {
    const unlisten = history.listen((location) => {
      if (window.gtag) {
        window.gtag('event', 'page_view', { page_path: location.pathname + location.search });
      }
    });
    return () => unlisten();
  }, [history]);
  return null;
}

export const Analytics = withRouter(AnalyticsImpl);
