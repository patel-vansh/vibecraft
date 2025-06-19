import React, { useState } from 'react';
import './FeatureCards.css';

function FeatureCards() {
  const [showReportCard, setShowReportCard] = useState(false);
  const [showCards, setShowCards] = useState(false);

  return (
    <div className="featurecards-container">
      {/* Ratings Bar */}
      <div className="featurecards-ratings">
        <span>
          ★ 4.8 rating on{' '}
          <span className="featurecards-link">Capterra</span>
        </span>
        <span>
          ★ 4.8 rating on <span className="featurecards-link">G2</span>
        </span>
        <span>
          ★ 350+ reviews on{' '}
          <span className="featurecards-link">xero</span>
        </span>
        <span>
          ★ 550+ reviews on{' '}
          <span className="featurecards-link">intuit quickbooks</span>
        </span>
      </div>

      <div className="featurecards-hero-row">
        {/* Cards absolutely positioned above headline, so text doesn't move */}
        <div className="featurecards-cards-absolute-wrapper">
          {showCards && (
            <div
              className="featurecards-cards-row"
              onMouseEnter={() => setShowCards(true)}
              onMouseLeave={() => setShowCards(false)}
            >
              {/* Reports Card */}
              <div className="featurecards-report-card featurecards-report-card-scale featurecards-card-reports">
                <div className="featurecards-report-card-img" />
                <div className="featurecards-report-card-content">
                  <div className="featurecards-report-card-title">Edge Design Studio</div>
                  <div className="featurecards-report-card-main">Business overview report</div>
                  <div className="featurecards-report-card-date">August 2024</div>
                  <div className="featurecards-report-card-logos">
                    <span className="featurecards-report-card-org">ORG LOGO</span>
                    <span className="featurecards-report-card-entity">ENTITY LOGO</span>
                  </div>
                </div>
              </div>
              {/* Forecasts Card */}
              <div className="featurecards-report-card featurecards-report-card-scale featurecards-card-forecasts">
                <div className="featurecards-report-card-img-forecast" />
                <div className="featurecards-report-card-content">
                  <div className="featurecards-report-card-title">Forecast AI</div>
                  <div className="featurecards-report-card-main">Revenue Forecast</div>
                  <div className="featurecards-report-card-date">2024-2025</div>
                  <div className="featurecards-report-card-logos">
                    <span className="featurecards-report-card-org">ACME Corp</span>
                    <span className="featurecards-report-card-entity">Forecast Team</span>
                  </div>
                </div>
              </div>
              {/* Dashboards Card */}
              <div className="featurecards-report-card featurecards-report-card-scale featurecards-card-dashboards">
                <div className="featurecards-report-card-img-dashboard" />
                <div className="featurecards-report-card-content">
                  <div className="featurecards-report-card-title">Analytics</div>
                  <div className="featurecards-report-card-main">KPI Dashboard</div>
                  <div className="featurecards-report-card-date">Live</div>
                  <div className="featurecards-report-card-logos">
                    <span className="featurecards-report-card-org">BizOps</span>
                    <span className="featurecards-report-card-entity">Dashboards</span>
                  </div>
                </div>
              </div>
              {/* Consolidation Card */}
              <div className="featurecards-report-card featurecards-report-card-scale featurecards-card-consolidations">
                <div className="featurecards-report-card-img-consolidation" />
                <div className="featurecards-report-card-content">
                  <div className="featurecards-report-card-title">Group Finance</div>
                  <div className="featurecards-report-card-main">Consolidation</div>
                  <div className="featurecards-report-card-date">Q2 2024</div>
                  <div className="featurecards-report-card-logos">
                    <span className="featurecards-report-card-org">Parent Co</span>
                    <span className="featurecards-report-card-entity">Subsidiaries</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Report Card */}
        {showReportCard && (
          <div
            className="featurecards-report-card featurecards-report-card-scale"
            onMouseEnter={() => setShowReportCard(true)}
            onMouseLeave={() => setShowReportCard(false)}
          >
            {/* Example: Different card content */}
            <div className="featurecards-report-card-img-alt" />
            <div className="featurecards-report-card-content">
              <div className="featurecards-report-card-title">AI-Powered Report</div>
              <div className="featurecards-report-card-main">Instant Profit &amp; Loss</div>
              <div className="featurecards-report-card-date">Generated: August 2024</div>
              <div className="featurecards-report-card-logos">
                <span className="featurecards-report-card-org">ACME Corp</span>
                <span className="featurecards-report-card-entity">Global Entity</span>
              </div>
            </div>
          </div>
        )}

        {/* Headline */}
        <span className="featurecards-headline">
          Create{' '}
          <span
            className={`featurecards-hoverable-word${showCards ? ' active' : ''}`}
            onMouseEnter={() => setShowCards(true)}
            onMouseLeave={() => setShowCards(false)}
          >
            reports
          </span>
          <span className={`featurecards-fade${showCards ? ' faded' : ''}`}>, forecasts,</span>
          <br />
          <span className={`featurecards-fade${showCards ? ' faded' : ''}`}>
            dashboards <span className="featurecards-amp">&amp;</span> consolidations
          </span>
        </span>
      </div>

      {/* Subheadline */}
      <div className="featurecards-subheadline">
        <span role="img" aria-label="sparkles">
          ✨
        </span>
        Now with AI-insights
      </div>

      {/* CTA Button */}
      <button className="featurecards-cta">
        Start 14-day free trial
      </button>

      {/* See what we do link */}
      <a href="#" className="featurecards-see-link">
        See what we do
      </a>
    </div>
  );
}

export default FeatureCards;
