import Script from 'next/script';

interface GoogleAnalyticsProps {
  measurementId: string;
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_title: document.title,
            page_location: window.location.href,
            custom_map: {
              'custom_parameter_1': 'page_category',
              'custom_parameter_2': 'user_type'
            }
          });
        `}
      </Script>
    </>
  );
}

// Enhanced Analytics with SEO tracking
export function EnhancedAnalytics({ measurementId }: GoogleAnalyticsProps) {
  return (
    <>
      <GoogleAnalytics measurementId={measurementId} />
      <Script id="enhanced-analytics" strategy="afterInteractive">
        {`
          // Track SEO-related events
          function trackSEOEvent(eventName, parameters) {
            gtag('event', eventName, {
              event_category: 'SEO',
              event_label: parameters.label || '',
              value: parameters.value || 0,
              ...parameters
            });
          }
          
          // Track page performance
          function trackPagePerformance() {
            if ('performance' in window) {
              const perfData = performance.getEntriesByType('navigation')[0];
              if (perfData) {
                trackSEOEvent('page_performance', {
                  page_load_time: Math.round(perfData.loadEventEnd - perfData.loadEventStart),
                  dom_content_loaded: Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart),
                  first_paint: Math.round(perfData.responseEnd - perfData.requestStart)
                });
              }
            }
          }
          
          // Track scroll depth
          let maxScrollDepth = 0;
          function trackScrollDepth() {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            if (scrollPercent > maxScrollDepth) {
              maxScrollDepth = scrollPercent;
              if (scrollPercent >= 25 && scrollPercent % 25 === 0) {
                trackSEOEvent('scroll_depth', {
                  scroll_percent: scrollPercent
                });
              }
            }
          }
          
          // Track form interactions
          function trackFormInteractions() {
            const forms = document.querySelectorAll('form');
            forms.forEach(form => {
              form.addEventListener('submit', function(e) {
                trackSEOEvent('form_submit', {
                  form_id: form.id || 'unknown',
                  form_class: form.className || 'unknown'
                });
              });
            });
          }
          
          // Track link clicks
          function trackLinkClicks() {
            document.addEventListener('click', function(e) {
              const target = e.target.closest('a');
              if (target) {
                trackSEOEvent('link_click', {
                  link_url: target.href,
                  link_text: target.textContent?.trim() || '',
                  is_external: !target.href.includes(window.location.hostname)
                });
              }
            });
          }
          
          // Initialize tracking when DOM is ready
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
              trackPagePerformance();
              trackFormInteractions();
              trackLinkClicks();
              
              // Track scroll depth on scroll
              window.addEventListener('scroll', trackScrollDepth);
            });
          } else {
            trackPagePerformance();
            trackFormInteractions();
            trackLinkClicks();
            window.addEventListener('scroll', trackScrollDepth);
          }
          
          // Track Core Web Vitals
          function trackCoreWebVitals() {
            // Track LCP
            new PerformanceObserver((entryList) => {
              const entries = entryList.getEntries();
              const lastEntry = entries[entries.length - 1];
              trackSEOEvent('core_web_vital', {
                metric_name: 'LCP',
                metric_value: Math.round(lastEntry.startTime),
                metric_rating: lastEntry.startTime <= 2500 ? 'good' : lastEntry.startTime <= 4000 ? 'needs_improvement' : 'poor'
              });
            }).observe({entryTypes: ['largest-contentful-paint']});
            
            // Track FID
            new PerformanceObserver((entryList) => {
              const entries = entryList.getEntries();
              entries.forEach(entry => {
                trackSEOEvent('core_web_vital', {
                  metric_name: 'FID',
                  metric_value: Math.round(entry.processingStart - entry.startTime),
                  metric_rating: entry.processingStart - entry.startTime <= 100 ? 'good' : entry.processingStart - entry.startTime <= 300 ? 'needs_improvement' : 'poor'
                });
              });
            }).observe({entryTypes: ['first-input']});
            
            // Track CLS
            let clsValue = 0;
            new PerformanceObserver((entryList) => {
              const entries = entryList.getEntries();
              entries.forEach(entry => {
                if (!entry.hadRecentInput) {
                  clsValue += entry.value;
                }
              });
              trackSEOEvent('core_web_vital', {
                metric_name: 'CLS',
                metric_value: Math.round(clsValue * 1000) / 1000,
                metric_rating: clsValue <= 0.1 ? 'good' : clsValue <= 0.25 ? 'needs_improvement' : 'poor'
              });
            }).observe({entryTypes: ['layout-shift']});
          }
          
          // Initialize Core Web Vitals tracking
          trackCoreWebVitals();
        `}
      </Script>
    </>
  );
}

// Google Search Console integration
export function GoogleSearchConsole({ verificationCode }: { verificationCode: string }) {
  return (
    <meta name="google-site-verification" content={verificationCode} />
  );
}
