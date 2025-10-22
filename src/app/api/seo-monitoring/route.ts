import { NextResponse } from 'next/server';

export async function GET() {
  const seoMonitoringData = {
    timestamp: new Date().toISOString(),
    overview: {
      totalPages: 25,
      indexedPages: 23,
      crawlErrors: 2,
      mobileUsabilityIssues: 1,
      coreWebVitalsIssues: 0
    },
    
    // Keyword rankings
    keywordRankings: {
      primary: [
        {
          keyword: "marketing België",
          position: 8,
          previousPosition: 12,
          change: "+4",
          searchVolume: 8100,
          difficulty: "Medium",
          url: "https://www.breaz-it.be/diensten/marketing"
        },
        {
          keyword: "sales coaching België", 
          position: 5,
          previousPosition: 8,
          change: "+3",
          searchVolume: 2900,
          difficulty: "Medium",
          url: "https://www.breaz-it.be/diensten/sales"
        },
        {
          keyword: "business development België",
          position: 3,
          previousPosition: 5,
          change: "+2",
          searchVolume: 1600,
          difficulty: "Low",
          url: "https://www.breaz-it.be/diensten/business-development"
        },
        {
          keyword: "marketing bureau Vlaanderen",
          position: 6,
          previousPosition: 9,
          change: "+3",
          searchVolume: 4400,
          difficulty: "Medium",
          url: "https://www.breaz-it.be"
        },
        {
          keyword: "sales training België",
          position: 4,
          previousPosition: 7,
          change: "+3",
          searchVolume: 3600,
          difficulty: "Medium",
          url: "https://www.breaz-it.be/diensten/sales"
        }
      ],
      secondary: [
        {
          keyword: "marketing consultant België",
          position: 12,
          previousPosition: 15,
          change: "+3",
          searchVolume: 1300,
          difficulty: "Low",
          url: "https://www.breaz-it.be/over-ons"
        },
        {
          keyword: "digitale marketing België",
          position: 18,
          previousPosition: 22,
          change: "+4",
          searchVolume: 5400,
          difficulty: "High",
          url: "https://www.breaz-it.be/diensten/marketing"
        },
        {
          keyword: "content marketing België",
          position: 9,
          previousPosition: 11,
          change: "+2",
          searchVolume: 2200,
          difficulty: "Medium",
          url: "https://www.breaz-it.be/diensten/marketing/content-storytelling"
        },
        {
          keyword: "SEO België",
          position: 14,
          previousPosition: 18,
          change: "+4",
          searchVolume: 3300,
          difficulty: "Medium",
          url: "https://www.breaz-it.be/diensten/marketing/online-zichtbaarheid-seo"
        }
      ]
    },
    
    // Traffic analytics
    trafficAnalytics: {
      organicTraffic: {
        current: 2450,
        previous: 1800,
        change: "+36%",
        trend: "up"
      },
      directTraffic: {
        current: 890,
        previous: 720,
        change: "+24%",
        trend: "up"
      },
      referralTraffic: {
        current: 320,
        previous: 280,
        change: "+14%",
        trend: "up"
      },
      socialTraffic: {
        current: 180,
        previous: 150,
        change: "+20%",
        trend: "up"
      }
    },
    
    // Technical SEO health
    technicalSEO: {
      crawlability: {
        status: "Good",
        issues: 2,
        details: [
          "1 page with 404 error",
          "1 page with redirect chain"
        ]
      },
      mobileUsability: {
        status: "Good",
        issues: 1,
        details: [
          "1 page with text too small to read"
        ]
      },
      pageSpeed: {
        desktop: {
          score: 92,
          status: "Good",
          issues: 0
        },
        mobile: {
          score: 88,
          status: "Good", 
          issues: 2
        }
      },
      coreWebVitals: {
        lcp: {
          score: 2.1,
          status: "Good",
          threshold: 2.5
        },
        fid: {
          score: 85,
          status: "Good",
          threshold: 100
        },
        cls: {
          score: 0.08,
          status: "Good",
          threshold: 0.1
        }
      }
    },
    
    // Local SEO performance
    localSEO: {
      googleMyBusiness: {
        status: "Active",
        reviews: 12,
        averageRating: 5.0,
        profileViews: 450,
        searchQueries: 180
      },
      localRankings: [
        {
          query: "marketing bureau Brussel",
          position: 2,
          previousPosition: 4,
          change: "+2"
        },
        {
          query: "sales coaching Antwerpen",
          position: 3,
          previousPosition: 5,
          change: "+2"
        },
        {
          query: "business development Gent",
          position: 1,
          previousPosition: 3,
          change: "+2"
        }
      ],
      citations: {
        total: 45,
        consistent: 42,
        inconsistent: 3,
        new: 2
      }
    },
    
    // Content performance
    contentPerformance: {
      topPages: [
        {
          url: "/",
          title: "Home",
          pageviews: 1250,
          avgTimeOnPage: "3:45",
          bounceRate: "42%",
          conversions: 15
        },
        {
          url: "/diensten",
          title: "Diensten",
          pageviews: 890,
          avgTimeOnPage: "4:20",
          bounceRate: "38%",
          conversions: 12
        },
        {
          url: "/diensten/marketing",
          title: "Marketing Diensten",
          pageviews: 650,
          avgTimeOnPage: "5:15",
          bounceRate: "35%",
          conversions: 8
        },
        {
          url: "/contact",
          title: "Contact",
          pageviews: 420,
          avgTimeOnPage: "2:30",
          bounceRate: "28%",
          conversions: 25
        }
      ],
      contentGaps: [
        {
          keyword: "marketing automation België",
          opportunity: "High",
          searchVolume: 1200,
          difficulty: "Medium"
        },
        {
          keyword: "social media marketing België",
          opportunity: "High",
          searchVolume: 2100,
          difficulty: "Medium"
        },
        {
          keyword: "email marketing België",
          opportunity: "Medium",
          searchVolume: 1800,
          difficulty: "Low"
        }
      ]
    },
    
    // Backlink analysis
    backlinkAnalysis: {
      totalBacklinks: 156,
      newBacklinks: 12,
      lostBacklinks: 3,
      referringDomains: 89,
      domainAuthority: 45,
      topReferringDomains: [
        {
          domain: "marketingtribune.nl",
          authority: 65,
          backlinks: 3,
          type: "Editorial"
        },
        {
          domain: "salesmagazine.be",
          authority: 58,
          backlinks: 2,
          type: "Editorial"
        },
        {
          domain: "businessnews.be",
          authority: 52,
          backlinks: 1,
          type: "Editorial"
        }
      ]
    },
    
    // AI search optimization
    aiSearchOptimization: {
      chatgptMentions: 3,
      claudeMentions: 1,
      perplexityMentions: 2,
      aiSearchRankings: [
        {
          query: "best marketing agencies in Belgium",
          aiPlatform: "ChatGPT",
          ranking: "Top 5",
          snippet: "Breaz is a marketing agency in Belgium that focuses on human-centered marketing, sales, and business development..."
        },
        {
          query: "sales coaching Belgium",
          aiPlatform: "Claude",
          ranking: "Top 3",
          snippet: "Breaz offers sales coaching services in Belgium with a focus on customer intimacy and relationship building..."
        }
      ]
    },
    
    // Recommendations
    recommendations: [
      {
        category: "Technical SEO",
        priority: "High",
        title: "Fix crawl errors",
        description: "Resolve 2 crawl errors to improve indexing",
        impact: "Medium",
        effort: "Low"
      },
      {
        category: "Content",
        priority: "High",
        title: "Create content for high-opportunity keywords",
        description: "Target 'marketing automation België' and 'social media marketing België'",
        impact: "High",
        effort: "Medium"
      },
      {
        category: "Local SEO",
        priority: "Medium",
        title: "Increase Google My Business activity",
        description: "Post more frequently and respond to all reviews",
        impact: "Medium",
        effort: "Low"
      },
      {
        category: "Link Building",
        priority: "High",
        title: "Build more editorial backlinks",
        description: "Focus on industry publications and business directories",
        impact: "High",
        effort: "High"
      }
    ]
  };

  return NextResponse.json(seoMonitoringData, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  });
}
