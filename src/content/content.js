// src/content/content.js — SINGLE SOURCE OF TRUTH

// ─── SITE META ────────────────────────────────────────────────────────────────

export const site = {
  name: 'VERIDIAN',
  tagline: 'Intelligent Supply Chain Operating System',
  description: 'AI · Machine Learning · Blockchain · IoT · Accelerated Computing',
  url: 'veridian.io',
  announcement: 'Veridian is now live in 3 pilot cities across North America and the UAE.',
  announcementCTA: 'Read the Case Study',
  contact: {
    general:    'contact@veridian.io',
    investors:  'investors@veridian.io',
    partners:   'partners@veridian.io',
    enterprise: 'enterprise@veridian.io',
    phone:      '+1 (415) 000-VRID',
    hq:         'San Francisco, CA, USA',
    regional:   ['London', 'Singapore', 'Dubai'],
  },
  social: {
    linkedin: '#',
    twitter:  '#',
    youtube:  '#',
  },
}

// ─── NAVIGATION ───────────────────────────────────────────────────────────────

export const nav = {
  links: [
    { label: 'Platform',         path: '/platform' },
    { label: 'Solutions',        path: '/solutions' },
    { label: 'For Enterprises',  path: '/for-enterprises' },
    { label: 'For Governments',  path: '/for-governments' },
    { label: 'Case Studies',     path: '/case-studies' },
    { label: 'Contact',          path: '/contact' },
  ],
  ctaPrimary:   { label: 'Request a Demo',     path: '/contact' },
  ctaSecondary: { label: 'View the Platform',  path: '/platform' },
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: 'THE INTELLIGENT SUPPLY CHAIN OPERATING SYSTEM',
  headlineLine1: 'Every Shipment.',
  headlineLine2: 'Every Node.',
  headlineLine3: 'Total Intelligence.',
  subheadline:
    'Veridian unifies edge IoT sensing, immutable blockchain provenance, predictive machine learning, and autonomous AI agents into a single governed operating system — delivering real-time visibility, self-healing logistics, and compliance-grade auditability at global scale.',
  supportingLine:
    'Enterprise-grade. Edge-first. Built for the industries where failure is not an option.',
  ctaPrimary:   { label: 'Request a Demo',       path: '/contact' },
  ctaSecondary: { label: 'Explore the Platform', path: '/platform' },
  trustBadges: [
    'SOC 2 Type II Ready',
    'ISO 27001',
    'GDPR Compliant',
    'FedRAMP Aligned',
  ],
  stats: [
    { value: 950,  prefix: '$', suffix: 'B',  label: 'Annual Loss from Supply Chain Disruptions' },
    { value: 82,   prefix: '',  suffix: '%',  label: 'Enterprises Report Poor End-to-End Visibility' },
    { value: 11,   prefix: '',  suffix: ' Days', label: 'Average Breach Detection Time in Logistics' },
    { value: 50,   prefix: '$', suffix: 'B+', label: 'Addressable Market by 2028' },
  ],
}

// ─── PROBLEM ──────────────────────────────────────────────────────────────────

export const problem = {
  eyebrow: 'THE PROBLEM',
  headline: 'An Industry Built on Fragmentation, Blind Trust, and Manual Reconciliation.',
  intro:
    'The $19 trillion global supply chain industry runs on disconnected spreadsheets, siloed ERP data, and fragmented communication. The consequences are systematic and catastrophic — measured not in inefficiencies but in billions lost and lives put at risk.',
  cards: [
    {
      id:    'fraud',
      icon:  'AlertTriangle',
      title: 'Fraud & Counterfeiting',
      body:  '$4.5 trillion in counterfeit goods enter commerce annually. Without reliable provenance infrastructure, there is no way to verify what you are receiving is what you ordered.',
    },
    {
      id:    'reactive',
      icon:  'Clock',
      title: 'Reactive Logistics',
      body:  'Disruptions are discovered after the damage is done. Average breach detection takes 11 days. By then, the shipment is delayed, the customer is affected, and the loss is already written.',
    },
    {
      id:    'compliance',
      icon:  'ShieldOff',
      title: 'Compliance Exposure',
      body:  'Pharmaceutical, food, and defense supply chains face escalating regulatory mandates. Legacy systems cannot produce the audit trail required. The cost of non-compliance is existential.',
    },
    {
      id:    'silos',
      icon:  'Layers',
      title: 'Data Silos',
      body:  'Suppliers, carriers, customs agencies, and buyers operate in total isolation. Real-time cross-party decisions are impossible. Multi-party disputes create billions in write-offs annually.',
    },
  ],
  pullQuote:
    'Without an immutable shared ledger and real-time AI intelligence, the global supply chain is not a system — it is a collection of assumptions held together by email threads.',
  pullQuoteAttribution: 'Veridian was built to replace the assumptions with certainty.',
}

// ─── PLATFORM / HOW IT WORKS ──────────────────────────────────────────────────

export const platform = {
  eyebrow:  'THE VERIDIAN PLATFORM',
  headline: 'One Intelligent OS. Every Node. Every Mile.',
  intro:
    'Veridian integrates four breakthrough technology layers into a single unified control plane. Each layer is independently powerful. Together, they create an emergent intelligence that no point solution can replicate — and a defensible moat that deepens with every shipment processed.',
  convergenceBanner:
    'IoT + Blockchain + AI + Autonomous Agents — Four layers. One operating system. Zero blind spots.',
  tabs: [
    {
      id:       'iot',
      label:    'Edge IoT',
      sublabel: 'Edge Intelligence Layer',
      icon:     'Cpu',
      headline: 'Intelligence Lives on the Asset — Not Just in the Cloud.',
      body:     'Ruggedized IoT sensor nodes — temperature, humidity, vibration, GPS, tamper-detection — stream encrypted telemetry from pallets, containers, and vehicles. On-device ML models process data locally, enabling sub-second anomaly detection even in zero-connectivity zones. Device lifecycle and firmware are managed remotely through Veridian\'s cloud-native IoT fleet management layer.',
    },
    {
      id:       'blockchain',
      label:    'Provenance',
      sublabel: 'Blockchain Provenance Ledger',
      icon:     'Link',
      headline: 'Every Event. Immutable. Timestamped. Irrefutable.',
      body:     'Every lifecycle event — origin, handling, customs clearance, custody transfer, quality inspection — is written as an immutable, timestamped record to a permissioned distributed ledger. Smart contracts automate compliance checks, release payments on delivery, and trigger regulatory alerts — eliminating human bottlenecks and creating a single auditable chain of custody for all authorized parties.',
    },
    {
      id:       'ml',
      label:    'Predictive AI',
      sublabel: 'Predictive AI & ML Engine',
      icon:     'BrainCircuit',
      headline: '72 Hours of Foresight. Zero Hours of Guesswork.',
      body:     'Veridian\'s ML backend ingests IoT telemetry, weather data, port congestion feeds, geopolitical risk signals, and historical shipment data to forecast disruptions 72+ hours in advance. Gradient-boosted demand models, transformer-based anomaly detection, and graph neural networks for supplier risk all run on GPU-accelerated inference infrastructure — delivering predictions that enable autonomous rerouting before disruptions occur.',
    },
    {
      id:       'agents',
      label:    'AI Agents',
      sublabel: 'Autonomous Agent Orchestration',
      icon:     'Bot',
      headline: 'Veridian Does Not Surface Insights. It Acts on Them.',
      body:     'Veridian\'s agentic AI layer — built on large language model foundations with domain-specific fine-tuning on supply chain corpora — autonomously executes procurement negotiations, vendor communications, customs filings, and carrier rebooking. Human operators set policy guardrails; Veridian handles execution at machine speed, reducing response time from days to seconds.',
    },
  ],
}

// ─── FEATURES / DIFFERENTIATORS ───────────────────────────────────────────────

export const features = {
  eyebrow:  'COMPETITIVE DIFFERENTIATORS',
  headline: 'The Only Platform That Unifies It All.',
  intro:
    'Point solutions solve one problem. Veridian solves the whole system. Every capability is built into a single governed data model — so intelligence compounds across every layer, every shipment, every decision.',
  items: [
    {
      id:    'fullstack',
      icon:  'Layers',
      title: 'Full-Stack Integration',
      body:  'The only platform unifying IoT, blockchain, ML, and agentic AI in one governed data model. Competitors offer point solutions. Veridian is the operating system.',
    },
    {
      id:    'edge',
      icon:  'Cpu',
      title: 'Edge-First Architecture',
      body:  'Intelligence lives on the asset — not only in the cloud — enabling full operation in disconnected environments with zero data loss and sub-second local inference.',
    },
    {
      id:    'autonomous',
      icon:  'Bot',
      title: 'Autonomous Execution',
      body:  'Veridian does not surface insights and wait for humans to act. Agents execute rerouting, procurement, and compliance workflows without human intervention — at machine speed.',
    },
    {
      id:    'provenance',
      icon:  'ShieldCheck',
      title: 'Compliance-Grade Provenance',
      body:  'Every event in the supply chain is written to an immutable ledger. FDA, EMA, ITAR, FSMA 204 — Veridian produces the audit trail that regulators require and legacy systems cannot deliver.',
    },
    {
      id:    'prediction',
      icon:  'TrendingUp',
      title: '72-Hour Disruption Forecasting',
      body:  'GPU-accelerated ML models forecast supply chain disruptions 72+ hours before they occur — enabling proactive rerouting before the damage is done, not after.',
    },
    {
      id:    'integration',
      icon:  'Plug',
      title: 'ERP Native Integration',
      body:  'REST, GraphQL, and Webhook APIs connect natively to SAP, Oracle, and Manhattan WMS/TMS — no rip-and-replace required. Veridian augments your existing stack from day one.',
    },
  ],
}

// ─── VERTICALS ────────────────────────────────────────────────────────────────

export const verticals = {
  eyebrow:  'TARGET VERTICALS',
  headline: 'Built for the Industries Where Failure Is Not an Option.',
  intro:
    'Veridian is purpose-built for regulated, high-value verticals where the cost of supply chain failure is measured in lives, regulatory penalties, and billions in write-offs.',
  items: [
    {
      id:    'pharma',
      icon:  'Pill',
      title: 'Pharmaceutical & Life Sciences',
      body:  'GDP-compliant cold-chain tracking, FDA and EMA audit trail requirements, clinical trial sample logistics. Regulatory mandate creates non-discretionary budget — compliance is not optional.',
    },
    {
      id:    'defense',
      icon:  'Shield',
      title: 'Aerospace & Defense',
      body:  'Part provenance verification, export compliance for ITAR and EAR regulations, multi-tier supplier visibility. Government contracts with 5 to 10 year terms and zero tolerance for data compromise.',
    },
    {
      id:    'food',
      icon:  'Package',
      title: 'Food & Beverage',
      body:  'Farm-to-shelf traceability, FSMA 204 compliance, contamination recall automation. $1.4 billion average compliance spend per major retailer annually — Veridian turns that cost into a competitive advantage.',
    },
    {
      id:    'luxury',
      icon:  'Gem',
      title: 'Luxury & Consumer Electronics',
      body:  'Anti-counterfeiting via blockchain provenance, grey-market detection, and ESG supply chain reporting for sustainability mandates. Protect brand value at every node.',
    },
  ],
}

// ─── SOCIAL PROOF ─────────────────────────────────────────────────────────────

export const proof = {
  eyebrow:  'PROVEN RESULTS',
  headline: 'When the Supply Chain Thinks, Everything Changes.',
  intro:
    'From pharmaceutical cold-chain to aerospace provenance — Veridian is delivering measurable outcomes for the enterprises that cannot afford to get it wrong.',
  stats: [
    { value: 40,   prefix: '',  suffix: '%',  label: 'Reduction in Supply Chain Disruption Costs' },
    { value: 6,    prefix: '',  suffix: 'x',  label: 'Faster Breach Detection vs Industry Average' },
    { value: 2.1,  prefix: '$', suffix: 'B',  label: 'In Compliance Penalties Avoided Across Client Base' },
    { value: 0,    prefix: '',  suffix: '',   label: 'Data Governance Violations Since Launch' },
  ],
  testimonials: [
    {
      id:       'vasquez',
      initials: 'EV',
      name:     'Elena Vasquez',
      title:    'Commissioner of Public Utilities',
      badge:    'Pilot Program Partner',
      quote:
        'We had tried three enterprise platforms before Veridian. None of them gave us a real-time picture of our entire infrastructure. Within 60 days of deploying Veridian, we identified two critical failure points that would have cost us millions in emergency repairs. The predictive layer alone justified the entire contract.',
    },
    {
      id:       'osei',
      initials: 'JO',
      name:     'Councillor James Osei',
      title:    'Director of Infrastructure, City Council',
      badge:    'Government Partner',
      quote:
        'Transparency in public infrastructure spending has always been a political challenge. Veridian\'s blockchain ledger gave us an immutable, publicly auditable record of every procurement decision. That level of accountability is not something legacy systems can produce. It changed how our constituents trust us.',
    },
    {
      id:       'webb',
      initials: 'MW',
      name:     'Marcus Webb',
      title:    'VP Global Logistics, Fortune 500 Manufacturer',
      badge:    'Enterprise Client',
      quote:
        'Our supply chain spans 47 countries and 800 suppliers. Before Veridian, our average disruption detection time was 9 days. It is now under 4 hours. The autonomous rerouting agents have eliminated an entire tier of manual coordination. The ROI was visible within the first quarter.',
    },
  ],
}

// ─── TEAM ─────────────────────────────────────────────────────────────────────

export const team = {
  eyebrow:  'THE TEAM',
  headline: 'Deep Expertise. One Shared Mission.',
  intro:
    'Veridian was founded by operators who have lived inside the supply chain problem — from enterprise logistics and blockchain infrastructure to AI research and regulatory compliance. We did not build Veridian from the outside in. We built it from the scar tissue of the industry.',
  members: [
    {
      id:       'chen',
      initials: 'AC',
      name:     'Adrian Chen',
      title:    'Chief Executive Officer & Co-Founder',
      bio:      'Former VP of Global Supply Chain at Maersk and Head of Logistics Intelligence at Palantir. Adrian spent 15 years watching enterprise supply chains fail at scale before building the platform he always needed but could never find.',
      linkedin: '#',
      twitter:  '#',
    },
    {
      id:       'okonkwo',
      initials: 'NO',
      name:     'Nadia Okonkwo',
      title:    'Chief Technology Officer & Co-Founder',
      bio:      'Led distributed systems engineering at Hyperledger Foundation and previously built IoT fleet infrastructure at Bosch. Nadia architected Veridian\'s edge-first computing layer — the system that makes intelligence possible without cloud connectivity.',
      linkedin: '#',
      twitter:  '#',
    },
    {
      id:       'sharma',
      initials: 'RS',
      name:     'Dr. Rohan Sharma',
      title:    'Chief AI Officer',
      bio:      'PhD in Operations Research from Stanford. Former research scientist at DeepMind and quantitative modeller at McKinsey\'s Operations Practice. Rohan built Veridian\'s 72-hour disruption forecasting engine — trained on the largest private supply chain dataset in existence.',
      linkedin: '#',
      twitter:  '#',
    },
    {
      id:       'laurent',
      initials: 'CL',
      name:     'Claire Laurent',
      title:    'Chief Legal & Compliance Officer',
      bio:      '18 years in international trade law and digital infrastructure regulation, formerly at Clifford Chance and the WTO\'s Digital Trade Task Force. Claire built Veridian\'s multi-jurisdictional compliance framework across FDA, EMA, ITAR, and FSMA 204.',
      linkedin: '#',
      twitter:  '#',
    },
    {
      id:       'ibrahim',
      initials: 'KI',
      name:     'Khalid Ibrahim',
      title:    'Chief Revenue Officer',
      bio:      'Previously led enterprise sales at C3.ai and SAP\'s AI division, closing over $400M in enterprise contracts across pharmaceutical, defense, and logistics verticals. Khalid built Veridian\'s go-to-market strategy from zero to first enterprise contract in under six months.',
      linkedin: '#',
      twitter:  '#',
    },
    {
      id:       'nakamura',
      initials: 'YN',
      name:     'Yuki Nakamura',
      title:    'Head of Product',
      bio:      'Former product lead at Flexport and early-stage team at project44. Yuki translated the complexity of Veridian\'s four-layer architecture into a product experience that enterprise operators can use on day one — without a six-month implementation project.',
      linkedin: '#',
      twitter:  '#',
    },
  ],
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

export const cta = {
  urgencyBanner:
    'The 2026 enterprise pilot cohort is now open. Only 8 deployment slots remain for Q2.',
  headline:    'Your Supply Chain Is Ready to Think for Itself.',
  subheadline:
    'Request a live demo. See Veridian operating on a real supply chain dataset. Understand the ROI before you sign anything.',
  formHeadline: 'Request an Enterprise Demo',
  fields: {
    name:      'Full Name',
    email:     'Work Email',
    company:   'Company Name',
    role:      'Your Role',
    vertical:  'Industry Vertical',
  },
  roleOptions: [
    'CEO / C-Suite',
    'VP of Supply Chain',
    'Director of Logistics',
    'Procurement Director',
    'IT / Technology Lead',
    'Government Official',
    'Other',
  ],
  verticalOptions: [
    'Pharmaceutical & Life Sciences',
    'Aerospace & Defense',
    'Food & Beverage',
    'Luxury & Consumer Electronics',
    'Industrial Manufacturing',
    'Other',
  ],
  submitLabel: 'Request My Demo',
  privacyNote:
    'Enterprise data is encrypted end-to-end and never shared with third parties. SOC 2 Type II audit-ready. By submitting you agree to our Privacy Policy and Terms of Service.',
  secondaryCTAs: [
    { label: 'Download the Platform Overview (PDF)', path: '#' },
    { label: 'Read the Full Case Study',              path: '/case-studies' },
    { label: 'View Technology Architecture',          path: '/platform' },
  ],
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

export const footer = {
  tagline:
    'The operating system underneath the supply chains that move the world\'s most critical goods.',
  links: [
    { label: 'Platform',         path: '/platform' },
    { label: 'Solutions',        path: '/solutions' },
    { label: 'For Enterprises',  path: '/for-enterprises' },
    { label: 'For Governments',  path: '/for-governments' },
    { label: 'Case Studies',     path: '/case-studies' },
    { label: 'About',            path: '#' },
    { label: 'Careers',          path: '#' },
    { label: 'Legal',            path: '#' },
  ],
  legalLinks: [
    'Privacy Policy',
    'Terms of Service',
    'Government Data Policy',
    'Cookie Settings',
  ],
  legalLine:
    'Veridian Technologies Inc. is not a financial services company. Platform capabilities are subject to jurisdictional regulatory requirements.',
  copyright: '© 2026 Veridian Technologies Inc. All rights reserved.',
}

// ─── PLATFORM PAGE (EXTENDED) ─────────────────────────────────────────────────

export const platformPage = {
  eyebrow:  'TECHNOLOGY ARCHITECTURE',
  headline: 'Built for Accelerated Computing Infrastructure.',
  intro:
    'Veridian is purpose-built to leverage the full performance of GPU-accelerated computing environments, cloud-native managed services, and enterprise-grade MLOps pipelines.',
  architectureLayers: [
    { layer: 'Edge Hardware',      tech: 'ARM SoC + On-device ML runtime',               function: 'Real-time inference, offline-first operation' },
    { layer: 'IoT Connectivity',   tech: 'LoRaWAN / 5G NB-IoT / MQTT over TLS',         function: 'Low-power encrypted sensor telemetry' },
    { layer: 'Device Management',  tech: 'Cloud-managed IoT fleet + FOTA updates',       function: 'Remote firmware, provisioning, lifecycle' },
    { layer: 'Data Streaming',     tech: 'Apache Kafka / Managed cloud streaming',       function: 'Sub-100ms event ingestion, global scale' },
    { layer: 'ML Training',        tech: 'GPU cluster — distributed training framework', function: 'Demand forecasting, anomaly detection' },
    { layer: 'ML Inference',       tech: 'Containerized GPU inference endpoints',        function: '72hr disruption prediction, fraud scoring' },
    { layer: 'Blockchain',         tech: 'Hyperledger Fabric (permissioned DLT)',        function: 'Immutable provenance, smart contract automation' },
    { layer: 'AI Agent Runtime',   tech: 'Fine-tuned LLM + multi-tool agent framework', function: 'Autonomous procurement, routing, compliance' },
    { layer: 'Security',           tech: 'Zero-trust, E2E encryption, SOC 2 Type II',   function: 'Enterprise, regulatory, government compliance' },
  ],
}

// ─── PRICING ──────────────────────────────────────────────────────────────────

export const pricing = {
  eyebrow:  'REVENUE MODEL',
  headline: 'Priced for Enterprise. Structured for Scale.',
  tiers: [
    {
      id:       'saas',
      name:     'SaaS Platform License',
      price:    '$8K–$85K',
      period:   '/month per lane',
      subtitle: 'For enterprises managing high-value supply chain lanes',
      features: [
        'Full four-layer platform access',
        'Scaled by throughput and feature tier',
        'Annual and 3-year enterprise contracts',
        'SOC 2 audit trail included',
        'ERP integration support',
      ],
      cta:       'Request Pricing',
      highlight: false,
    },
    {
      id:       'iot',
      name:     'IoT Hardware-as-a-Service',
      price:    'Per Asset',
      period:   'leased',
      subtitle: 'Ruggedized sensor kits leased per tracked asset',
      features: [
        'Full sensor node deployment',
        'Recurring hardware revenue model',
        'Remote firmware management',
        'Device lifecycle management',
        'Zero upfront capital required',
      ],
      cta:       'Request Pricing',
      highlight: true,
      badge:     'Most Deployed',
    },
    {
      id:       'api',
      name:     'Data Intelligence API',
      price:    'Custom',
      period:   'institutional',
      subtitle: 'For insurers, commodity traders, and financial institutions',
      features: [
        'Institutional supply chain risk signals',
        'Demand forecasting data feeds',
        'Fraud and provenance scoring API',
        'Real-time disruption intelligence',
        'Custom data delivery SLA',
      ],
      cta:       'Contact Sales',
      highlight: false,
    },
  ],
}
