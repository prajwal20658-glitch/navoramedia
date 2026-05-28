/**
 * Comprehensive Content Database for Navora Media
 */
import { Service, CaseStudy, BlogPost, FAQItem, JobOpening, Testimonial } from "./types";

export const SERVICES: Service[] = [
  {
    id: "meta-ads",
    title: "Meta Ads Performance Optimization",
    subtitle: "Unlock hyper-scale on Facebook and Instagram with algorithmic spend allocation and rigorous creative pipelines.",
    description: "Multi-funnel scaling strategies to capture high-value customer actions, increase ROAS, and bypass tracking limitations.",
    longDescription: `At Navora Media, we approach Meta Ads as a disciplined science. We deploy advanced consolidated account structures built to maximize the power of Meta’s machine learning algorithm. Rather than constant manual tampering, we design a structural framework that allows Meta's native bidding to perform, backed by rigorous creative-testing loops and offline conversion APIs. Our proprietary 'Creative Sandbox' method tests hooks, concept visual directions, and angles aggressively, identifying winners before scaling budget.`,
    iconName: "Facebook",
    features: [
      "Dynamic Creative Sandbox (testing hooks, visual angles, and CTAs separately)",
      "CBO / ABO hybrid performance scaling campaigns",
      "Offline Conversion API (CAPI) and Advanced Matching integration",
      "Custom Cohort Lookalike Modeling & First-Party Data Custom Audiences",
      "High-ROAS Ecommerce Retargeting & catalogue feed optimization",
      "Thumb-stopping UGC & premium ad creative direction and asset generation"
    ],
    strategies: [
      {
        title: "Aggressive Creative Testing Pipeline",
        desc: "We run a structured testing workflow where single-variable ad structures isolate the exact background graphic, headline, and hook that drives the maximum conversion lift."
      },
      {
        title: "Broad Conversions & Consolidation",
        desc: "We consolidate ad sets to gather data faster, reaching the 50 conversions/week threshold quickly, while deploying broad targeting that beats rigid narrow audiences."
      },
      {
        title: "ROAS-First Dynamic Bidding",
        desc: "Using cost caps and bid caps to maintain healthy margins during major holidays or competitive quarters, preventing overspending on low-intent segments."
      }
    ],
    faqs: [
      {
        q: "How do you handle iOS 14+ tracking limitations?",
        a: "We integrate Meta's server-side Conversions API (CAPI), set up custom subdomain tracking, and utilize third-party attribution systems like Triple Whale or Northbeam to verify first-party data correctness."
      },
      {
        q: "What is your recommended minimum monthly ad spend for Meta?",
        a: "To trigger solid learning and test multiple creatives effectively, we recommend starting with a minimum of $3,000 / month."
      }
    ],
    caseStudyId: "meta-roas"
  },
  {
    id: "google-ads",
    title: "Google Ads & Intent Capture",
    subtitle: "Intercept customers at the exact millisecond of high purchase intent across Search, Shopping, and YouTube.",
    description: "Dominating high-intent search terms and feeding machine-learning algorithms with clean conversion vectors.",
    longDescription: `Google Ads is about capturing existing demand. Navora Media builds clean, laser-targeted Search, Performance Max, and YouTube campaigns that capture buyers at the decision point. We construct deep negative-keyword maps, test premium intent-based landing pages, and configure precise server-side tracking so our partners don't pay for empty clicks. By using custom-intent audience signals in Performance Max, we focus Google’s neural network on your most valuable customer segments.`,
    iconName: "Search",
    features: [
      "Search campaigns with phrase and exact match intent dominance",
      "Performance Max (PMax) audit, structure, and asset-group segregation",
      "YouTube In-Stream and bumper high-converting video display ads",
      "Google Merchant Center product feed optimization & troubleshooting",
      "Local Search and Google Maps campaign integrations for local footprints",
      "Dynamic Search Ads (DSA) and smart bidding margin control limits"
    ],
    strategies: [
      {
        title: "Performance Max Asset Separation",
        desc: "We prevent PMax from wasting budget on bad search queries by adding account-level negative keywords and segregating high-margin products into independent asset groups with custom copy."
      },
      {
        title: "High-Intent Landing Page Optimization",
        desc: "Every Search click lands on a custom, fast-loading, dynamic text insertion page designed exclusively for conversion, boosting Google quality score and dropping cost-per-acquisition."
      }
    ],
    faqs: [
      {
        q: "How do we ensure Search campaigns don't bid on our own brand name?",
        a: "We set up dedicated Brand Protection campaigns with low cost limits and separate them entirely from Non-Brand Conquesting and generic Search terms."
      },
      {
        q: "What bidding strategies do you use?",
        a: "We transition from Maximize Conversions (for initial pixel priming) to Target CPA (tCPA) or Target ROAS (tROAS) once standard historical data is fully locked in."
      }
    ],
    caseStudyId: "seo-organic"
  },
  {
    id: "seo",
    title: "Organic SEO & Digital Authority",
    subtitle: "Command organic real estate on search engines for high-intent keywords that keep delivering compounding pipeline value.",
    description: "Comprehensive SEO combining impeccable technical architecture, semantic page structures, and authoritative link networks.",
    longDescription: `High-performance SEO is not about writing generic blog posts. It is about architectural authority, programmatic topic clusters, and clean schema architectures. Navora Media engineers structural rank gains through rigorous log-file audits, core-web-vitals speed optimizations, and authoritative digital-PR link deployment. We find high-intent 'middle of the funnel' search terms that your competitors are ignoring, and we build content hubs that search engine crawlers rank instantly.`,
    iconName: "TrendingUp",
    features: [
      "Core Web Vitals structural speed and JavaScript rendering audit",
      "Topic cluster architecture mapping and semantic content hubs",
      "Google Search Console & crawlers indexation debugging",
      "Advanced Local SEO schema injection, citations, and Maps packs ranking",
      "Digital PR backlink distribution from highly authoritative domains",
      "On-page heading, alt text, and internal link chain optimization"
    ],
    strategies: [
      {
        title: "Entity-Based Topical Clustering",
        desc: "We establish absolute topical relevance by building internal link-chains from highly detailed sub-pages to core transactional hub pages, showing Google your complete mastery of an industry."
      },
      {
        title: "Technical Schema Instrumentation",
        desc: "Injecting detailed JSON-LD structured schemas (Product, FAQ, LocalBusiness, Organization) so that search engines understand your raw page entities and display rich visual snippets."
      }
    ],
    faqs: [
      {
        q: "How long does it take to see tangible organic rank results?",
        a: "While technical SEO fixes can yield crawl improvements in weeks, structural topical authority typically manifests compound rank growth over 3 to 6 months of steady publishing."
      },
      {
        q: "Do you focus on search volume or search intent?",
        a: "We explicitly target high-intent keywords. 100 highly qualified visitors with transaction intent outperform 10,000 low-match info-seekers every time."
      }
    ],
    caseStudyId: "seo-organic"
  },
  {
    id: "lead-generation",
    title: "Enterprise Lead Generation Fannels",
    subtitle: "Turn cold visitors into pre-qualified, sales-ready appointments through psychological funnels and automation.",
    description: "Custom conversion-rate engineered funnel paths mated with frictionless CRM triggers and lead systems.",
    longDescription: `Relying on simple lead capture forms is dead. Modern high-ticket lead generation requires custom interactive assets, interactive multi-step qualifying questions, and automated response systems. Navora Media engineers complete conversion channels. We build sleek multi-choice quizzes that classify leads by budget/intent, hook them into automated WhatsApp/SMS chains instantly, and plug them directly into your HubSpot or Salesforce pipeline so sales agents can call within 3 minutes of opt-in.`,
    iconName: "Filter",
    features: [
      "Psychology-driven multi-step micro-funnel engineering",
      "Frictionless multi-page form paths with progressive profile fields",
      "CRM pipeline configurations (HubSpot, Salesforce, Pipedrive sync)",
      "Instant WhatsApp & SMS follow-up sequence automation triggers",
      "Low-churn interactive lead magnets, webinars, and interactive estimators",
      "Integrations with Calendly, Chili Piper, and sales calendars"
    ],
    strategies: [
      {
        title: "The Frictionless Multi-Step Form",
        desc: "By starting with low-friction questions (e.g., 'What is your current size?') before asking for emails or phone numbers, we double standard opt-in rates while obtaining rich lead intelligence."
      },
      {
        title: "Instant Verification & Booking Hooks",
        desc: "We forward successful form submissions directly to a calendar booking engine with a tailored video from the founders, translating passive lead captures into face-to-face consultations on the spot."
      }
    ],
    faqs: [
      {
        q: "How do you filter out low-budget or unqualified leads?",
        a: "We introduce targeted qualifying filters inside our multi-stage forms (e.g., budget thresholds, timelines) that tag and redirect unqualified applicants into informational mailers without wasting sales calendar time."
      },
      {
        q: "Can you hook into our current bespoke CRM system?",
        a: "Yes! Using Zapier, Make, or custom webhooks, we bridge leads securely into any modern API-compliant CRM architecture."
      }
    ],
    caseStudyId: "meta-roas"
  },
  {
    id: "dental-marketing",
    title: "Premium Dental Clinic Patient Acquisition",
    subtitle: "The ultimate local pipeline to fill calendar gaps for Invisalign, Dental Implants, and high-worth cosmetic cases.",
    description: "Custom Patient Acquisition engines combining geo-targeted hyper-intent ads with rapid appointment booking tech.",
    longDescription: `Dental marketing is highly regional and built on clinical trust. General marketing tricks do not work here. Navora Media has refined a specialized patient capture engine tailored exclusively for high-end dental clinics, cosmetic clinics, and implant centers. We target patients actively looking for high-worth procedures (Invisalign, implants, veneers) using micro-targeted Google search ads and local geotargeted Meta ads, guiding them through booking flows that confirm treatment criteria and sync directly with Dentrix, Cliniconex, or custom calendars.`,
    iconName: "ShieldCheck",
    features: [
      "Procedural intent campaigns for high-ticket implants, veneers, and Invisalign",
      "Geo-fenced 5-mile local radius campaign targeting around your clinic doors",
      "Dynamic appointment calendar configurations (including automated SMS prompts)",
      "Clinical reputation systems (automating patient review capture on Google/Yelp)",
      "Interactive pre-treatment survey funnels that pre-qualify patient candidacies",
      "High-contrast local pack organic map ranking for orthodontic keywords"
    ],
    strategies: [
      {
        title: "Procedure-Specific Value Funnels",
        desc: "We skip generic 'Visit our general clinic' ads and build focused ads for smile makeovers, showing patient case transformations, transparent pricing tiers, and immediate visual qualifiers."
      },
      {
        title: "No-Show Prevention SMS Cascade",
        desc: "Our automated systems trigger a 3-stage reminder sequence (SMS + email + WhatsApp) that has been proven to slash patient no-show rates down to less than 4.5%."
      }
    ],
    faqs: [
      {
        q: "How do you ensure HIPAA compliance on leads?",
        a: "Our lead landing capture forms contain strict disclaimers, utilize secure storage fields, and avoid transmitting personal clinical history records via non-secure channel platforms."
      },
      {
        q: "What is the typical cost-per-lead for implant procedures?",
        a: "Depending on target density, qualified implant leads range from $35 to $75, with high transaction conversions due to clinical pre-qualification."
      }
    ],
    caseStudyId: "dental-surge"
  },
  {
    id: "social-media",
    title: "Social Media Organic Strategy & UGC",
    subtitle: "Crafting modern cultural footprints for high-end brands that support performance scaling ad campaigns.",
    description: "Creative styling, editorial calendar frameworks, and creator collaborations designed to convert followers into brand assets.",
    longDescription: `A performance ad campaign operates best when supported by an impeccably polished, highly active organic profile. If a prospective client leaves an ad to check your profile and finds a ghost town, your trust metrics plummet. Navora Media manages premium organic visual assets and deploys curated creator partnerships that build long-term retention. We design a cohesive editorial grid, direct UGC creator sequences, and establish real-world engagement patterns that generate brand depth.`,
    iconName: "Instagram",
    features: [
      "Pre-curated visual editorial grid designs that project agency luxury",
      "Creator matching and sourcing for high-performance visual video campaigns",
      "TikTok, Reels, and YouTube Shorts dynamic video editing templates",
      "Advanced content mapping focused on customer mental models & objections",
      "Proactive profile styling for founder and executive personal branding",
      "Detailed engagement tactics to build early core audience advocates"
    ],
    strategies: [
      {
        title: "Creator Sourcing & Strategy Loop",
        desc: "We screen, contract, and brief talented niche creators to record natural vertical video content that fits modern mobile consumption habits perfectly, serving both organic and ad feeds."
      },
      {
        title: "Objection-Buster Grid Curation",
        desc: "We structure highlight reels and pinned posts that immediately answer FAQ details, client credentials, and display real transformation results to reassure skeptics."
      }
    ],
    faqs: [
      {
        q: "Does organic social media replace paid running ads?",
        a: "No. Organic building establishes trust and high retention, while paid ads establish immediate, controllable, predictable traffic and volume scaling."
      },
      {
        q: "Do you handle creator contract management?",
        a: "Absolutely. We manage creator agreements, licensing terms for ad accounts, content brief approvals, and final asset deliveries."
      }
    ],
    caseStudyId: "meta-roas"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "meta-roas",
    clientName: "Aura Home & Living",
    category: "Meta Ads & Scaling",
    title: "How We Scaled Aura Living beyond $4.8M in Annual Revenue and Achieved a 5.1x Sustainable ROAS",
    challenge: "Aura Living was stuck at $80k/month. Their ad accounts suffered from excessive audience overlap, over-fragmented ad budgets, and quick creative fatigue. Standard retargeting was churning and customer acquisition cost (CAC) was creeping up due to poor creative diversification.",
    strategy: "We audited their account and performed a complete account consolidation. We moved from 24 fragmented target groups down to a neat, automated balance of Broad Campaigns backed by a strict Creative Sandbox account layer. We tested 5 hook visual ideas per week, directing fresh UGC content focusing on lifestyle benefits, and deployed server-side tracking to capture raw pixel leaks.",
    results: [
      { label: "Annual Scale", value: "$4.8M+", desc: "Up from $960K prior year" },
      { label: "Average ROAS", value: "5.1x", desc: "Blended search and social ROAS" },
      { label: "CAC Reduction", value: "-34%", desc: "Highly optimized customer acquisition cost" },
      { label: "Creative Testing Scale", value: "220+", desc: "Unique ad visual units verified successfully" }
    ],
    visualMetrics: [
      { label: "Meta Ad ROAS Growth", percentage: 92 },
      { label: "Sales Revenue Compound", percentage: 140 },
      { label: "Offline Conversion Capture Accuracy", percentage: 98 }
    ],
    roas: "5.1x Total Account ROAS",
    scaleMetric: "400% YoY Growth",
    quote: {
      text: "Navora Media didn't just spend our budgets; they engineered our entire creative testing structure. They scaled us to levels we thought would kill our margins, all while maintaining perfect purchase volume.",
      author: "Julianne Vane",
      role: "VP of Growth, Aura Living"
    },
    mockAnalyticsData: [
      { period: "Month 1-3", spend: "$15K/mo", revenue: "$48K/mo", leads: "1,200 purchases" },
      { period: "Month 4-6", spend: "$45K/mo", revenue: "$180K/mo", leads: "4,400 purchases" },
      { period: "Month 7-12", spend: "$120K/mo", revenue: "$612K/mo", leads: "14,800 purchases" }
    ]
  },
  {
    id: "dental-surge",
    clientName: "Radiant Dental & Orthodontic Group",
    category: "Specialized Healthcare Marketing",
    title: "Dominating Cosmetic Orthodontics: 182 Qualified Dental Implants in 90 Days under a 5-mile radius",
    challenge: "Radiant Dental struggled with inconsistent book rates. Their clinic had empty calendar chairs on Tuesdays and Thursdays. Their advertising attempts yielded low-intent general check-up searchers but failed to acquire high-value Invisalign and Dental Implant cases.",
    strategy: "We built a procedure-specific local acquisition funnel. First, we configured dynamic localized Google Search landing paths focused purely on dental implants. Next, we launched geographic-precise Facebook/Instagram lead qualifiers with high-contrast before/after patient case files. We integrated our leads directly into their Cliniconex calendar and loaded a high-velocity SMS automated follow-up system.",
    results: [
      { label: "Confirmed Consultations", value: "182", desc: "For dental implants & cosmetic cases" },
      { label: "Cost-Per-Lead (CPL)", value: "$38.50", desc: "Strictly qualified with budget filters" },
      { label: "Treatment Pipeline Value", value: "$540,000+", desc: "Based on clinic treatment case sizes" },
      { label: "No-Show Churn Reduction", value: "-82%", desc: "Thanks to our automated reminders" }
    ],
    visualMetrics: [
      { label: "Appointment Book Rates", percentage: 84 },
      { label: "Clinic Chair Utilization Peak", percentage: 95 },
      { label: "Implant Lead Qualification", percentage: 90 }
    ],
    roas: "12.4x Estimated ROI",
    scaleMetric: "+182 High-Ticket Implant Bookings",
    quote: {
      text: "Before Navora, our lead forms received empty entries. Now, we receive detailed patient summaries, and our doctors show up to patient appointments that are pre-qualified and ready for treatment.",
      author: "Dr. Marcus Chen",
      role: "Lead Dentist & Owner, Radiant Dentists"
    },
    mockAnalyticsData: [
      { period: "Week 1-3", spend: "$2,500", revenue: "$18,000", leads: "45 leads" },
      { period: "Week 4-8", spend: "$6,000", revenue: "$124,000", leads: "112 leads" },
      { period: "Week 9-12", spend: "$12,000", revenue: "$540,000 value", leads: "182 bookings" }
    ]
  },
  {
    id: "seo-organic",
    clientName: "Vertex Global SaaS Solutions",
    category: "Enterprise SEO & Google Search",
    title: "Organic Authority Engine: Increasing Monthly Organic Traffic from 14K to 135K and Outranking Unicorn Rivals",
    challenge: "Vertex was spending millions on high-CPA Google search terms while their site organic blog generated practically zero conversions. Their domain rating was stunted, and crawl reports showed heavy render blocks and dynamic JavaScript routing errors.",
    strategy: "We initiated a complete Technical and On-Page code restructure. We cleared internal redirect chains, injected strict JSON-LD custom entities, and created 8 targeted SEO Topic Clusters. Instead of general blog text, we wrote dense, expert-authored comparative guides mapping 'competitor alternatives' and loaded highly authoritative Digital PR backlinks from massive business platforms.",
    results: [
      { label: "Organic Monthly Traffic", value: "135K+", desc: "Up from 14.5K in 6 months" },
      { label: "High-Intent Rankings", value: "620+", desc: "Keywords in top 3 organic spots" },
      { label: "Organic Demo Form Books", value: "4,100+", desc: "Translating to zero ad dollar cost" },
      { label: "Domain Authority Metric", value: "DR 78", desc: "Up from DR 32 post migration" }
    ],
    visualMetrics: [
      { label: "Google Indexed Target Pages", percentage: 100 },
      { label: "Crawl Traffic Compounding", percentage: 930 },
      { label: "Organic Brand Conversions", percentage: 380 }
    ],
    roas: "N/A (Compounding Organic Value)",
    scaleMetric: "9.3x Free Traffic Explode",
    quote: {
      text: "Navora Media understands SEO as a code and link building science. They bypassed high ad buying costs and systematically dominated high-value search keywords we believed were permanently locked down by older competitors.",
      author: "Ashwin S.",
      role: "Chief Marketing Officer, Vertex SaaS"
    },
    mockAnalyticsData: [
      { period: "Month 1", spend: "Tech Audit Phase", revenue: "14K visits", leads: "120 organic conversions" },
      { period: "Month 3", spend: "Content Rollout", revenue: "48K visits", leads: "980 organic conversions" },
      { period: "Month 6", spend: "Authority Linking", revenue: "135K visits", leads: "4,120 organic conversions" }
    ]
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: "ios14-meta-strategy",
    title: "The Ultimate Meta Ads Playbook: Defeating Ad Tracker Leaks and Scaling Campaigns in 2026",
    category: "Meta Ads",
    date: "May 14, 2026",
    readTime: "8 min read",
    author: {
      name: "Saurav Mehta",
      role: "Head of Media Buying",
      avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&h=120&q=80"
    },
    summary: "Relying on raw browser pixel data is throwing away budget. Discover how server-to-server CAPI, CBO consolidations, and dynamic hook testing can safeguard your ad spend.",
    tags: ["Meta Ads", "iOS 14 Tracking", "CAPI", "Ecommerce Optimization"],
    contentMarkdown: `## Transitioning Beyond Browser-Side Pixels
In 2026, relying purely on standard browser pixels to report performance metrics is akin to advertising in the dark. Browsers block external trackers, ad blockers scrub cookie files, and tracking metrics have degraded by up to 40%.
To achieve sustainable ROAS, agencies must set up rigorous first-party integrations.

### The Conversion API (CAPI) Solution
A structured Conversions API matches server events with client datasets. When a buyer completes checkout:
- Your application server pushes a hash event directly to Meta: **purchase event, click ID, email hash, transaction total**.
- Meta reconciles this record even if Safari had dropped the client cookie.

### Account Consolidation vs. Hyper-Targeting
Stop building 50 tiny ad sets based on specific interest parameters. Here is our recommended setup:
1. **The Sandbox Campaign**: Run a single ABO campaign dedicated *entirely* to testing dynamic creative variables.
2. **The Consolidated Scaling Campaign**: Run a single CBO campaign with only 3 ad sets mapping to (a) Broad Broad targeting, (b) Stacked Lookalikes, and (c) broad retargeting rules.
3. Keep the winning creatives from the Sandbox flowing into your scale campaigns. This creates an uninterrupted loop of high-ROAS creative updates before burnout happens.`
  },
  {
  id: "google-pmax-secrets",
  title: "Google Performance Max Secrets: What Most Agencies in Bangalore Won't Tell You",
  category: "Google Ads",
  date: "April 28, 2026",
  readTime: "11 min read",
  seoTitle: "Google Performance Max Secrets for Bangalore Businesses | Navora Media",
  seoDescription: "Unlock Google PMax campaign secrets that drive real ROI. Navora Media shares advanced Performance Max strategies for Bangalore businesses. Read the guide.",
  author: {
    name: "Radhika K. Rao",
    role: "Director of Search Performance",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
  },
  summary: "Google Performance Max campaigns promise automation and reach — but without the right asset structure, audience signals, and exclusion strategy, they silently drain your budget. Here is what actually works.",
  tags: ["Google Ads", "Performance Max", "PMax", "Search Engine Marketing"],
  contentMarkdown: `## Google Performance Max Campaigns: The Complete Guide for Bangalore Advertisers

Google Performance Max (PMax) is the most misunderstood campaign type in Google Ads today. Launched as the successor to Smart Shopping and Local campaigns, PMax promises to serve your ads across all of Google's channels — Search, Display, YouTube, Gmail, Maps, and Discover — using a single campaign structure. For businesses in Bangalore, that sounds like an efficient, scalable solution. In practice, without the right configuration, it is one of the fastest ways to burn your ad budget with nothing to show for it.

At Navora Media, we have managed Performance Max campaigns across industries — from e-commerce retailers in Koramangala to dental clinics in Whitefield. This guide shares everything we have learned about what actually makes PMax work, and what most agencies either do not know or will not tell you.

## What Is Google Performance Max and How Does It Work?

Performance Max is a goal-based campaign type that uses Google's machine learning to optimise bids, targeting, and ad placements in real time. You provide the inputs — creative assets, audience signals, budget, and conversion goals — and Google's algorithm determines where, when, and to whom your ads are shown.

The campaign pulls from six Google inventory channels simultaneously. This means a single PMax campaign can reach a user who is searching on Google, watching YouTube, browsing a website in the Display Network, checking Gmail, or using Google Maps — all within the same campaign.

The appeal is obvious. But the danger is equally real: because PMax consolidates everything behind Google's automation, advertisers who do not understand how to structure inputs correctly lose visibility and control over where their money is going.

## Why Most PMax Campaigns Underperform

The number one reason Performance Max campaigns fail is poor asset group structure. Many advertisers — and unfortunately, many agencies — create a single asset group with a generic mix of headlines, descriptions, and images, then let Google run. This approach produces mediocre results across all channels because the algorithm has no thematic direction.

The second most common mistake is ignoring audience signals. Audience signals are not targeting — Google can go beyond them — but they give the algorithm a starting point. Without strong audience signals built from your first-party data, customer match lists, or high-intent in-market segments, PMax spends weeks in a learning phase burning budget on irrelevant placements.

The third mistake is running PMax alongside standard Search campaigns without proper campaign-level exclusions. Without brand keyword exclusions at the campaign level and careful management of search term overlap, PMax will cannibalise your branded traffic — and take credit for those conversions, artificially inflating its reported performance.

## Asset Group Structure: The Foundation of a High-Performing PMax Campaign

Think of asset groups the same way you think of ad groups in standard Search campaigns — each one should represent a tightly themed cluster of products, services, or audience segments. For a Bangalore-based dental clinic, you might build separate asset groups for dental implants, teeth whitening, orthodontic treatments, and emergency dental care. Each group gets its own headlines, descriptions, images, and videos tailored to that specific service.

For each asset group, provide the maximum number of assets Google allows: 15 headlines, 5 descriptions, at least 5 landscape images, 5 square images, and ideally 1–2 videos. Campaigns with video assets consistently outperform those without, because YouTube inventory is only accessible when video is provided.

## Audience Signals: How to Give Google the Right Starting Point

The most powerful audience signal you can provide is a Customer Match list — a list of your existing customers uploaded as a hashed data file. If you have an email list of past patients, customers, or leads, upload it. Google uses this list to find similar users and to exclude existing customers from acquisition campaigns if needed.

After Customer Match, add your website remarketing audiences — all website visitors, specific page visitors, and cart abandoners if applicable. Finally, layer in relevant in-market segments like "Business Services" and "Advertising and Marketing Services."

## Search Term Controls: Protecting Your Branded Traffic

By default, Performance Max will bid on your own brand name. Apply brand exclusions at the campaign level in PMax so your branded traffic continues to flow through your standard Search campaigns at a lower CPC, and PMax focuses exclusively on net-new acquisition.

## Conversion Goals: Setting Up PMax for What Actually Matters

Ensure you have conversion tracking set up for every meaningful action: form submissions, phone call clicks, WhatsApp link clicks, and appointment bookings. Assign conversion values where possible. If a dental implant inquiry is worth ten times more than a teeth cleaning inquiry, assign values accordingly.

## Budget Strategy: How Much to Spend on PMax

A practical starting budget for Bangalore SMBs is a minimum of ₹500–₹800 per day for PMax. Start with Maximise Conversions to let the algorithm collect data, then transition to Target CPA or Target ROAS after 30–50 conversions.

## Reporting and Performance Analysis

Use the Asset Group performance report to see which creative combinations are rated "Best," "Good," or "Low." Pause or replace assets rated "Low" regularly. For placement-level visibility, check the Placement Report under Insights.

## Is Performance Max Right for Your Bangalore Business?

Asset group structure, audience signals, brand exclusions, and conversion tracking accuracy are the four pillars that separate profitable PMax campaigns from expensive ones. At Navora Media, every Google Ads campaign we manage is built on these principles. Request a free audit below.`
},
  {
  id: "dental-seo-guide",
  title: "Dental SEO Guide for Bangalore Clinics: How to Fill Your Appointment Book Through Google",
  category: "Dental Marketing",
  date: "May 10, 2026",
  readTime: "13 min read",
  seoTitle: "Dental SEO Guide Bangalore | Rank Your Dental Clinic on Google – Navora Media",
  seoDescription: "Complete dental SEO guide for Bangalore clinics. Learn how to rank on Google Maps, target local keywords, and fill your appointment book. Expert guide by Navora Media.",
  author: {
    name: "Marcus Chen, DDS & Rohan Lal",
    role: "Specialized Healthcare partner & SEO VP",
    avatarUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=120&h=120&q=80"
  },
  summary: "Dental SEO in Bangalore is more competitive than ever — but most clinics are making the same five mistakes. This complete guide covers Google Business Profile optimisation, local keyword targeting, on-page SEO, and content strategy to help your clinic rank and get more appointments.",
  tags: ["Local SEO", "Dental Marketing", "Google Maps Pack", "Dental Clinic"],
  contentMarkdown: `## Dental SEO in Bangalore: Why Most Clinics Are Invisible on Google

There are over 4,000 registered dental clinics in Bangalore. When a prospective patient searches "dentist near me" or "dental implants Bangalore," Google shows three clinics in the Map Pack at the top of the results — and the rest are effectively invisible. The difference between those three clinics and everyone else is rarely the quality of their dentistry. It is almost always the quality of their SEO.

Dental SEO is the process of making your clinic appear prominently in Google's organic search results and Google Maps listings for the searches that matter most to your business. Done correctly, it is the single highest-ROI marketing investment a dental clinic in Bangalore can make.

## Understanding How Patients Search for Dentists in Bangalore

There are three categories of search behaviour for Bangalore dental queries.

The first is proximity-based searches: "dentist near me," "dental clinic near Indiranagar," "best dentist in Koramangala." These searches have extremely high local intent and are dominated by the Google Map Pack. Winning these requires a well-optimised Google Business Profile backed by strong review velocity and local citation consistency.

The second is treatment-specific searches: "dental implants Bangalore," "teeth whitening Bangalore cost," "braces treatment Bangalore," "root canal specialist Whitefield." These are high-commercial-intent searches where patients have already identified what they need and are comparing providers. These are best won through dedicated service pages with strong on-page SEO.

The third is informational searches: "how long does dental implant procedure take," "dental implant cost in Bangalore 2026," "is teeth whitening safe for sensitive teeth." A dental blog targeting these queries builds trust and captures patients before they have made a decision.

## Google Business Profile: The Foundation of Dental Local SEO

Your Google Business Profile (GBP) is the single most important SEO asset for a dental clinic. It determines whether you appear in the Map Pack — the three local results that appear above organic listings for location-based searches.

An optimised GBP starts with complete and accurate information. Every field matters: clinic name, address, phone number, website URL, hours of operation, appointment booking link, and service areas. Inconsistency between your GBP and your website — even minor differences like "Road" versus "Rd" — sends negative signals to Google's local algorithm.

Your primary category should be "Dentist." Add secondary categories for every specialty: "Dental Implants Provider," "Orthodontist," "Cosmetic Dentist," "Pediatric Dentist." These secondary categories directly influence which treatment-specific searches trigger your GBP listing.

The Services section of your GBP is critically underused by most Bangalore clinics. Add every service you offer with a detailed description. Google indexes this content and uses it to match your listing to relevant search queries.

GBP Posts — short updates published directly to your profile — are another underutilised tool. Post weekly updates about offers, new equipment, or before-and-after cases. Active GBP profiles receive preferential treatment in Google's local ranking algorithm.

## Google Reviews: The Most Powerful Local Ranking Signal

Reviews are the most significant ranking factor in Google's local search algorithm. A dental clinic with 200 reviews averaging 4.8 stars will almost always outrank a clinic with 20 reviews averaging 4.9 stars, everything else being equal.

Most dental clinics in Bangalore have between 20 and 80 Google reviews. The clinics dominating the Map Pack typically have 150 or more. The most effective method is the post-appointment review request — after a successful appointment, send an SMS with a direct link to your Google review page. Response rates on same-day SMS review requests are consistently 15–25%.

Always respond to every review — positive and negative. Your responses are indexed by Google and read by prospective patients. A professional, empathetic response to a negative review often does more for your reputation than the positive reviews themselves.

## Website On-Page SEO: Building Pages That Rank for Treatment Searches

Every major service your clinic offers should have a dedicated, optimised page — not a paragraph on a general "Services" page, but a full standalone page targeting the specific keyword patients use when searching for that treatment.

For a comprehensive dental clinic in Bangalore, this means individual pages for: dental implants, teeth whitening, braces and orthodontics, root canal treatment, dental crowns and bridges, pediatric dentistry, gum disease treatment, dental veneers, and emergency dental care.

Each service page should be structured around a primary keyword — for example, "Dental Implants Bangalore" for your implants page. The primary keyword should appear in the title tag, H1, meta description, first paragraph, at least two H2 subheadings, the URL slug, and the alt text of at least one image.

Google's Helpful Content system rewards pages that demonstrate E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness). Write with clinical accuracy, showcase before-and-after cases, include doctor credentials, and provide specific information about procedures, recovery times, and costs. Aim for 1,000–1,500 words per service page.

## Local Keyword Strategy: Targeting Bangalore Neighbourhoods

Rather than competing for broad terms like "dental clinic Bangalore," dominate more specific, lower-competition searches by targeting the areas your patients come from. A page optimised for "dentist in HSR Layout" faces significantly less competition than "dentist Bangalore" — and patients searching with neighbourhood-level specificity are typically further along in their decision and more likely to convert.

A clinic with 8–10 neighbourhood-specific landing pages targeting its service radius effectively multiplies its local search visibility without needing to outrank large multi-branch chains.

## Dental Blog Content: Capturing Top-of-Funnel Patients

A regularly updated dental blog generates organic traffic from informational searches and signals to Google that your website is an active, authoritative source of dental information.

The most valuable blog topics directly address questions patients have before booking: dental implant cost in Bangalore, how to choose a dentist in Bangalore, teeth whitening options compared, what to expect during a root canal, and signs you need to see a dentist urgently.

Each blog post should target a specific informational keyword, include a clear answer in the first paragraph for featured snippet eligibility, and close with a call-to-action linking to the relevant service page. Publish at minimum one post per month.

## Technical SEO for Dental Clinic Websites

Over 70% of dental search queries in Bangalore are performed on mobile devices. A website that takes more than 3 seconds to load on mobile loses a significant portion of potential patients. Use Google's PageSpeed Insights to identify and fix speed issues.

Schema markup — specifically LocalBusiness schema with Dentist type — helps Google understand your clinic's nature, location, hours, and services. This structured data can trigger rich results in Google's search listings, increasing click-through rates significantly.

## How Long Does Dental SEO Take to Show Results?

For Google Business Profile optimisation and review generation, meaningful improvement in Map Pack rankings typically occurs within 60–90 days. For website on-page SEO and blog content, organic ranking improvements begin showing within 3–6 months, with significant traffic growth at 6–12 months.

At Navora Media, we specialise in dental marketing for Bangalore clinics — combining Google Ads for immediate patient flow with SEO for long-term dominance. Request a free dental marketing audit and we will review your GBP, website, and local keyword rankings within 24 hours.`
  },
    ];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "About Our Services",
    question: "What makes Navora Media different from typical creative agencies?",
    answer: "Typical creative agencies build artsy assets without monitoring return-on-ad-spend (ROAS). Generic agencies build basic campaigns and bill for time. Navora Media is a performance marketing agency. Every single asset we generate, campaign we optimize, and technical schema we write is measured directly against core bottom-line growth: lowering Customer Acquisition Cost (CAC) and scaling absolute revenue volume."
  },
  {
    id: "faq-2",
    category: "Our Process",
    question: "Do you lock clients into rigid, 12-month restrictive agreements?",
    answer: "No. We believe in performance retention. We provide flexible 3-month initial sprint structures to test client channels under strict KPI targets, followed by rolling monthly agreements. If we aren't delivering, we don't expect you to stay."
  },
  {
    id: "faq-3",
    category: "Ad Spend Tracking",
    question: "How do you track ad spend and verify campaign metrics?",
    answer: "We establish a personalized, interactive, real-time client dashboard that connects to your Meta, Google, and analytical engines. You see your exact day-by-day ad spend, CAC, CPA, ROAS, and volume of conversions. There are no opaque monthly reports or hidden markups."
  },
  {
    id: "faq-4",
    category: "Dental Specialty",
    question: "Can we start with dental clinic marketing alone?",
    answer: "Absolutely. We offer customized modules. Small and multi-location orthodontic groups usually start with our Specialized Dental Patient Capture funnel (Local SEO map pack, implant intent campaign, and Automated SMS booking) and expand as they scale clinical capacity."
  }
];

export const JOBS: JobOpening[] = [
  {
    id: "senior-media-buyer",
    title: "Senior Meta & Google Media Buyer",
    department: "Media Buying",
    location: "Bangalore (Hybrid) / Remote optional",
    type: "Full-time",
    description: "We are seeking an analytical, ROI-focused media buyer who has managed and scaled direct-to-consumer or medical clinics budget beyond $100k/month.",
    requirements: [
      "3+ years managing cold prospect budgets on Meta Ads or Google Search Solutions",
      "Profound mastery of CAPI, custom domain tracking, and analytics models",
      "Strong background interpreting split-test metrics and creative asset testing",
      "Sharp copywriting capability and creator direction styles"
    ],
    benefits: [
      "Highly competitive salary plus monthly revenue performance bonuses",
      "Comprehensive medical and orthodontic coverage benefits",
      "Generous annual education stipend and equipment allocations",
      "Flexible hybrid workspace structures"
    ]
  },
  {
    id: "seo-technical-director",
    title: "Technical SEO & Schema Specialist",
    department: "SEO",
    location: "Bangalore (Hybrid)",
    type: "Full-time",
    description: "We are hiring a technical rank specialist to lead site audit workflows, core web vitals adjustments, schema structure development, and link distributions.",
    requirements: [
      "In-depth command of GSC index rules, Screaming Frog audits, and rendering",
      "Deep understanding of JSON-LD schema markup scripts and internal link trees",
      "Extensive experience scaling SaaS or localized orthodontic healthcare portals",
      "Clean basic HTML/JS and static deployment optimizations"
    ],
    benefits: [
      "Top-tier compensation matching Bangalore development scales",
      "Annual conference and speaking opportunity backing",
      "Modern agency workspace with high-end tech",
      "Ample direct leadership projection room"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    authorName: "Ananya Mehta",
    authorTitle: "Founder & CMO",
    companyName: "Solstice Apparel",
    quote: "By redesigning our Meta funnel and deploying their Creative Sandbox loop, Navora Media took our brand beyond 4x ROAS while doubling our monthly spend budget. Absolute performance masters.",
    rating: 5
  },
  {
    id: "t2",
    authorName: "Dr. Vikram Sabharwal",
    authorTitle: "Managing Orthodontist",
    companyName: "Elite Smiles Clinic Group",
    quote: "We spent years on general ads that generated useless calls. Navora set up Invisalign funnels that have booked 54 clinical veneers and high-ticket implant cases this quarter alone.",
    rating: 5
  },
  {
    id: "t3",
    authorName: "David Sterling",
    authorTitle: "Director of Marketing",
    companyName: "HoloCloud SaaS",
    quote: "They auditing our organic crawl issues, structured beautiful schema, and in 90 days brought us 60,000 extra organic readers. Our sales team is flooded with software demos.",
    rating: 5
  }
];
