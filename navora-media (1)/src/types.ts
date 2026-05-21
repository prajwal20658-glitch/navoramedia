/**
 * Shared Type Definitions for Navora Media Website
 */

export interface Service {
  id: string; // e.g. "meta-ads", "google-ads"
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  iconName: string; // Dynamic icon mapper
  features: string[];
  strategies: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  caseStudyId?: string; // Associated case study
}

export interface CaseStudy {
  id: string; // e.g. "meta-roas", "dental-surge"
  clientName: string;
  category: string;
  title: string;
  challenge: string;
  strategy: string;
  results: { label: string; value: string; desc?: string }[];
  visualMetrics: { label: string; percentage: number }[];
  roas?: string;
  scaleMetric?: string;
  quote?: { text: string; author: string; role: string };
  mockAnalyticsData?: { period: string; spend: string; revenue: string; leads: string }[];
}

export interface BlogPost {
  id: string; // e.g. "ios14-meta-strategy"
  title: string;
  category: string; // "Meta Ads" | "Google Ads" | "SEO" | "Dental Marketing" | "Lead Generation"
  date: string;
  readTime: string;
  author: { name: string; role: string; avatarUrl: string };
  summary: string;
  contentMarkdown: string; // Detailed structural copy
  tags: string[];
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string; // "Creative" | "Media Buying" | "SEO" | "Engineering"
  location: string;
  type: string; // "Full-time" | "Remote" | "Contract"
  description: string;
  requirements: string[];
  benefits: string[];
}

export interface Testimonial {
  id: string;
  authorName: string;
  authorTitle: string;
  companyName: string;
  quote: string;
  rating: number;
}
