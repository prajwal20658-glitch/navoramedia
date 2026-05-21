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
    title: "Demystifying Google Performance Max: How to Prevent Bidding Leaks and Fuel Asset Groups",
    category: "Google Ads",
    date: "April 28, 2026",
    readTime: "6 min read",
    author: {
      name: "Radhika K. Rao",
      role: "Director of Search Performance",
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
    },
    summary: "Performance Max automates campaign distributions, but it easily bleeds spend on low-value searches. Learn the exact structures to reclaim control from the Google algorithm.",
    tags: ["Google Ads", "Performance Max", "PMax", "Search Engine Marketing"],
    contentMarkdown: `## Why Standard PMax Underperforms
Google's Performance Max is a powerful neural-network tool, but if given raw keys, it chooses low-resistance channels. By default, it prioritizes bidding on your own brand searches to pad its conversion metrics, or distributes blurry assets onto junk mobile display placements.

### Steps to Regain PMax Command
1. **Deploy Account Negative Lists**: Ask Google reps or set account restrictions to block brand keywords. This forces PMax to find novel prospecting traffic instead of taking credit for users already searching for you.
2. **Separate Asset Groups by Topical Content**: Do not mix generic models, implant services, and low-cost items in a single collection. Build specific Asset Groups with exact matching headings, titles, long descriptions, and hero visuals matching a single intent set.
3. **Turn Off URL Expansion (Selective Rules)**: Google allows URL expansion by default. If you have non-transaction columns (like regulatory forms or old updates), prevent Google from dropping landing ad traffic onto them by filtering them out explicitly.`
  },
  {
    id: "dental-seo-guide",
    title: "Local SEO Blueprints for Orthodontic and Dental Centers: Dominating the Google Map Pack",
    category: "Dental Marketing",
    date: "May 10, 2026",
    readTime: "10 min read",
    author: {
      name: "Marcus Chen, DDS & Rohan Lal",
      role: "Specialized Healthcare partner & SEO VP",
      avatarUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=120&h=120&q=80"
    },
    summary: "90% of dental patients search within a 15-minute commute path. Discover the exact schema additions, map listing configurations, and local citations to dominate orthopedic terms.",
    tags: ["Local SEO", "Dental Marketing", "Google Maps Pack", "Dental Clinic"],
    contentMarkdown: `## The 3 Pillars of Dental Map Dominance
When a prospective patient breaks a crown or decides they want Invisalign, they search 'orthodontics near me'. The top 3 map positions occupy almost 60% of all local transaction call volume.

### 1. The LocalBusiness JSON-LD Injection
Your dental website requires precise clinical structured schema elements. Adding these structures tells search engines:
- **Your Exact Geographic Coordinates** (Lat/Long matches your GMB pins exactly).
- **Procedures Offered** (Invisalign orthdontics, implant dentistry, root canals).
- **Correct NAP Fields** (Name, Address, Phone Number matches your Google Business profile consistently across the web).

### 2. Clinical Reputation Generation Loops
Google's local ranking directly weights search volume and count rating.
- We implement automated text hooks: as soon as a hygienist flags a procedure complete in Dentrix or clinic software, our system fires a frictionless SMS link: *'Thank you for visiting Radiant Clinics. How did Dr. Marcus do? Share a 3-second review here.'*
- This workflow collects premium, multi-sentence reviews with procedure keywords (implant, smile cosmetic, crowns), driving map pack rankings upward.`
  }
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
