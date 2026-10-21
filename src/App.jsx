import { useEffect, useRef, useState } from 'react'
import { TechLogo } from './components/TechLogo.jsx'

const Icon = ({ name, size = 20 }) => {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    arrowUpRight: <><path d="M7 17 17 7"/><path d="M7 7h10v10"/></>,
    github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.1.5S18 0 15 1.8a13.4 13.4 0 0 0-7 0C5 0 3.9.5 3.9.5A5 5 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.2 3.5 6.4 6.8 6.8A4.8 4.8 0 0 0 8 18v4"/>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><path d="M2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></>,
    mail: <><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></>,
    phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></>,
    telegram: <><path d="m15 10-4 4 6 6 4-16-18 7 4 2 2 6 3-3"/></>,
    mapPin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>,
    code: <><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></>,
    layers: <><path d="m12.83 2.18 8 4a2 2 0 0 1 0 3.58l-8 4a2 2 0 0 1-1.66 0l-8-4a2 2 0 0 1 0-3.58l8-4a2 2 0 0 1 1.66 0Z"/><path d="m22 12.5-9.17 4.59a2 2 0 0 1-1.66 0L2 12.5"/><path d="m22 17.5-9.17 4.59a2 2 0 0 1-1.66 0L2 17.5"/></>,
    server: <><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></>,
    terminal: <><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></>,
    smartphone: <><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></>,
    spark: <path d="m12 3-1.9 5.2L5 10l5.1 1.8L12 17l1.9-5.2L19 10l-5.1-1.8L12 3Z"/>,
    check: <path d="m5 12 4 4L19 6"/>,
    menu: <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>,
    close: <><path d="M18 6 6 18"/><path d="m6 6 12 12"/></>,
    globe: <><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,
    user: <><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
    chevronDown: <path d="m6 9 6 6 6-6"/>,
    usFlag: (
      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" className="nation-flag-svg">
        <rect width="20" height="15" rx="2" fill="#B22234" />
        <path d="M0 2.3h20M0 4.6h20M0 6.9h20M0 9.2h20M0 11.5h20M0 13.8h20" stroke="#FFFFFF" strokeWidth="1.15" />
        <rect width="8" height="8" rx="1.5" fill="#3C3B6E" />
        <circle cx="2" cy="2" r="0.6" fill="#FFFFFF" />
        <circle cx="4" cy="2" r="0.6" fill="#FFFFFF" />
        <circle cx="6" cy="2" r="0.6" fill="#FFFFFF" />
        <circle cx="3" cy="4" r="0.6" fill="#FFFFFF" />
        <circle cx="5" cy="4" r="0.6" fill="#FFFFFF" />
        <circle cx="2" cy="6" r="0.6" fill="#FFFFFF" />
        <circle cx="4" cy="6" r="0.6" fill="#FFFFFF" />
        <circle cx="6" cy="6" r="0.6" fill="#FFFFFF" />
      </svg>
    ),
    khFlag: (
      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" className="nation-flag-svg">
        <rect width="20" height="15" rx="2" fill="#032ea1" />
        <rect y="3.5" width="20" height="8" fill="#e00025" />
        <path d="M10 5.2l.6 1.3h1.2l-.9.8.3 1.3-1.2-.8-1.2.8.3-1.3-.9-.8h1.2z" fill="#ffffff" />
        <rect x="7.5" y="8.2" width="5" height="1.6" fill="#ffffff" rx="0.3" />
        <path d="M8.2 8.2v-1.5l1.8-1.2 1.8 1.2v1.5H8.2z" fill="#ffffff" />
      </svg>
    ),
    external: <><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></>
  }
  if (paths[name]?.type === 'svg') return paths[name]
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

const content = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      letsTalk: "Let's talk",
    },
    hero: {
      status: 'Available for projects & roles',
      vibe: '⚡ Vibe Coder',
      greeting: "Hi, I'm",
      headlineRole: 'Full-Stack & Software Developer',
      headlineSub: 'Mobile & Web Vibe Coder',
      subheadline: '21-year-old Software Development student based in Phnom Penh, currently in Year 4 at Norton University. Passionate about building fast, intuitive web and mobile applications.',
      btnProjects: 'View Projects',
      btnContact: 'Contact Me',
      readyShip: 'Ready to build, prototype & ship',
      online: 'Online',
      roleBadge: 'Full-Stack Dev',
      universityTag: 'Year 4 @ Norton University',
      locationTag: 'Phnom Penh',
    },
    about: {
      eyebrow: '01 / About Me',
      titlePrimary: 'Software Engineering Core.',
      titleSecondary: 'Vibe Coder Execution.',
      authorRole: 'Full-Stack & Software Developer · Year 4 Student',
      p1: 'Year 4 Software Development student at <strong>Norton University</strong> combining core software engineering principles with hands-on full-stack development. Focused on creating sleek user experiences across web platforms and mobile devices.',
      p2: 'As a fast-paced "Vibe Coder", I turn product concepts into scalable digital solutions with rapid iteration, responsive interfaces, and reliable service architecture.',
      p3: 'Comfortable working across the complete software cycle: from cross-platform mobile apps with Flutter/Dart to scalable backends with Python, Flask, Node.js, and PostgreSQL databases.',
      metaLocation: 'Location',
      metaLocationVal: 'Phnom Penh, Cambodia',
      metaEducation: 'Education',
      metaEducationVal: 'Year 4 Software Development @ Norton University',
      metaAge: 'Age',
      metaAgeVal: '21 Years Old',
      metaSpec: 'Specialization',
      metaSpecVal: 'Full-Stack & Mobile Software',
      highlights: [
        ['01', 'Software Engineering', 'Strong foundation in design patterns, clean architecture, scalable data modeling, and robust backend engineering.'],
        ['02', 'Full-Stack Web Development', 'Building dynamic, responsive web platforms using React, TypeScript/JavaScript, and Python, Flask & Node.js REST APIs.'],
        ['03', 'Mobile App Architecture', 'Developing fluid, cross-platform mobile experiences for iOS and Android powered by Dart and Flutter.'],
        ['04', 'Rapid Prototyping', 'High-speed Vibe Coding execution that converts design ideas and user stories into working MVPs rapidly.']
      ]
    },
    skills: {
      eyebrow: '02 / Skills & Technologies',
      title: 'Tech stack I build with.',
      detail: 'A balanced toolkit spanning modern web frameworks, cross-platform mobile development, API microservices, and database systems.',
      groups: {
        'Mobile & Frontend': ['Flutter', 'Dart', 'React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'],
        'Backend & APIs': ['Python', 'Flask', 'FastAPI', 'Node.js', 'RESTful APIs'],
        'Database & Servers': ['PostgreSQL', 'IIS Server Configuration'],
        'Tools & Workflow': ['Git', 'GitHub', 'VS Code', 'Postman']
      }
    },
    projects: {
      eyebrow: '03 / Featured Work',
      title: 'Projects crafted with speed & precision.',
      detail: 'A selection of mobile and web applications showcasing responsive architecture, backend integration, and sleek UI implementation.',
      list: [
        {
          number: '01',
          category: 'Mobile Application',
          title: 'Cross-Platform Flutter/Dart Mobile App',
          description: 'High-performance iOS & Android mobile application engineered with Flutter & Dart. Features real-time state management, smooth native micro-interactions, RESTful API integration, and offline-first data caching.',
          tags: ['Flutter', 'Dart', 'Mobile UI/UX', 'REST API', 'iOS & Android'],
          tone: 'cyan',
          badge: 'Mobile App'
        },
        {
          number: '02',
          category: 'Full-Stack Web Application',
          title: 'Modern Full-Stack Web Platform',
          description: 'Scalable full-stack web application combining a reactive React & Tailwind CSS interface with a robust Python/Node backend service. Features secure JWT authentication, responsive dashboards, and PostgreSQL database storage.',
          tags: ['React', 'Python / Flask', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
          tone: 'violet',
          badge: 'Web App'
        },
        {
          number: '03',
          category: 'Client Web Application',
          title: 'High-Conversion Responsive Web App',
          description: 'Production-ready responsive web product designed for maximum speed, accessibility, and clean UI aesthetics. Built with modern component architecture, smooth client-side routing, and SEO optimization.',
          tags: ['React', 'JavaScript/TypeScript', 'Tailwind CSS', 'Vite', 'Responsive Design'],
          tone: 'cyan',
          badge: 'Web Product'
        }
      ],
      liveDemo: 'Live Demo',
      githubRepo: 'GitHub Repo'
    },
    contact: {
      eyebrow: '04 / Get In Touch',
      titlePrimary: "Let's talk code &",
      titleSecondary: 'build something epic.',
      lead: 'I am open to software development opportunities, full-stack roles, freelance client projects, and tech collaborations. Reach out via Telegram, email, or direct call.',
      labelTelegram: 'Telegram (Direct Message)',
      labelEmail: 'Direct Email',
      labelPhone: 'Phone / WhatsApp',
      labelLocation: 'Current Location',
      formTitle: 'Send a direct message',
      formSub: 'I typically reply within a few hours.',
      fieldName: 'Your Name',
      phName: 'e.g. Alex Smith',
      fieldEmail: 'Your Email',
      phEmail: 'alex@company.com',
      fieldMsg: 'Project or Message',
      phMsg: 'Tell me about your web, mobile, or software project...',
      btnSend: 'Send Message',
      btnSent: 'Message Prepared',
      errName: 'Please enter your name.',
      errEmail: 'Please enter a valid email address.',
      errMsg: 'Please provide at least 10 characters.'
    },
    footer: {
      copy: 'Copyright © 2026 Korn Koemlong. Designed & coded with passion.',
      backToTop: 'Back to top ↑'
    }
  },
  km: {
    nav: {
      about: 'អំពីខ្ញុំ',
      skills: 'ជំនាញបច្ចេកវិទ្យា',
      projects: 'គម្រោងការងារ',
      contact: 'ទំនាក់ទំនង',
      letsTalk: 'ជជែកពិភាក្សា',
    },
    hero: {
      status: 'ត្រៀមខ្លួនសម្រាប់គម្រោង និងការងារ',
      vibe: '⚡ Vibe Coder',
      greeting: 'សួស្តី ខ្ញុំបាទឈ្មោះ',
      headlineRole: 'អ្នកអភិវឌ្ឍន៍ Full-Stack & Software Developer',
      headlineSub: 'ជំនាញបង្កើតកម្មវិធីទូរស័ព្ទ និងគេហទំព័រទំនើប',
      subheadline: 'និស្សិតឆ្នាំទី ៤ ផ្នែកអភិវឌ្ឍន៍កម្មវិធីកុំព្យូទ័រ (Software Development) នៅសាកលវិទ្យាល័យ ន័រតុន រាជធានីភ្នំពេញ។ មានចំណង់ចំណូលចិត្តខ្ពស់ក្នុងការបង្កើតកម្មវិធីគេហទំព័រ និងទូរស័ព្ទដៃ ដែលមានល្បឿនលឿន និងទាក់ទាញ។',
      btnProjects: 'មើលស្នាដៃគម្រោង',
      btnContact: 'ទាក់ទងមកខ្ញុំ',
      readyShip: 'ត្រៀមខ្លួនបង្កើត និងដាក់ឱ្យដំណើរការ',
      online: 'កំពុងអនឡាញ',
      roleBadge: 'Full-Stack Dev',
      universityTag: 'ឆ្នាំទី ៤ @ សាកលវិទ្យាល័យ ន័រតុន',
      locationTag: 'រាជធានីភ្នំពេញ',
    },
    about: {
      eyebrow: '០១ / អំពីខ្ញុំ',
      titlePrimary: 'មូលដ្ឋានគ្រឹះវិស្វកម្មកម្មវិធីដ៏រឹងមាំ។',
      titleSecondary: 'ការអនុវត្តការងាររហ័សទាន់ចិត្ត (Vibe Coder)។',
      authorRole: 'Full-Stack & Software Developer · និស្សិតឆ្នាំទី ៤',
      p1: 'ជានិស្សិតឆ្នាំទី ៤ ផ្នែក <strong>Software Development នៅសាកលវិទ្យាល័យ ន័រតុន</strong> ដោយរួមបញ្ចូលចំណេះដឹងវិស្វកម្មកម្មវិធីស្នូល ជាមួយនឹងការអនុវត្តផ្ទាល់លើការអភិវឌ្ឍប្រព័ន្ធ Full-Stack ទាំងមូល។ ផ្តោតលើការផ្តល់នូវបទពិសោធន៍អ្នកប្រើប្រាស់យ៉ាងរលូនទាំងនៅលើគេហទំព័រ និងកម្មវិធីទូរស័ព្ទដៃ។',
      p2: 'ក្នុងនាមជា "Vibe Coder" ដែលមានល្បឿនលឿន ខ្ញុំចូលចិត្តប្រែក្លាយគំនិតច្នៃប្រឌិតទៅជាផលិតផលឌីជីថលជាក់ស្តែង ប្រកបដោយប្រសិទ្ធភាព និងរចនាសម្ព័ន្ធបច្ចេកវិទ្យាដែលអាចពង្រីកបានខ្ពស់។',
      p3: 'មានជំនាញគ្រប់ដំណាក់កាលនៃការអភិវឌ្ឍ៖ ចាប់ពីកម្មវិធីទូរស័ព្ទដៃ Cross-Platform ជាមួយ Flutter/Dart រហូតដល់ប្រព័ន្ធ Backend ជាមួយ Python, Flask, Node.js និងមូលដ្ឋានទិន្នន័យ PostgreSQL។',
      metaLocation: 'ទីតាំងបច្ចុប្បន្ន',
      metaLocationVal: 'រាជធានីភ្នំពេញ, ប្រទេសកម្ពុជា',
      metaEducation: 'ការអប់រំ',
      metaEducationVal: 'ឆ្នាំទី ៤ ផ្នែក Software Development @ សាកលវិទ្យាល័យ ន័រតុន',
      metaAge: 'អាយុ',
      metaAgeVal: '២១ ឆ្នាំ',
      metaSpec: 'ជំនាញស្នូល',
      metaSpecVal: 'Full-Stack & កម្មវិធីទូរស័ព្ទដៃ (Mobile App)',
      highlights: [
        ['01', 'វិស្វកម្មកម្មវិធី (Software Engineering)', 'មូលដ្ឋានគ្រឹះរឹងមាំលើ Design Patterns, Clean Architecture និងការរៀបចំប្រព័ន្ធ Backend ដ៏មានសុវត្ថិភាព។'],
        ['02', 'ការអភិវឌ្ឍ Full-Stack Web', 'បង្កើតគេហទំព័រទំនើប និងឆ្លើយតបគ្រប់អេក្រង់ដោយប្រើ React, JavaScript/TypeScript និង Python Flask / Node.js REST APIs។'],
        ['03', 'ស្ថាបត្យកម្ម Mobile App', 'បង្កើតកម្មវិធីទូរស័ព្ទដៃយ៉ាងរលូនលើប្រព័ន្ធប្រតិបត្តិការ iOS និង Android ដោយប្រើប្រាស់ Flutter និង Dart។'],
        ['04', 'ការសាកល្បងគំរូយ៉ាងរហ័ស (Rapid Prototyping)', 'ការអនុវត្តការងារបែប Vibe Coding ប្រកបដោយល្បឿនលឿន ដើម្បីប្រែក្លាយតម្រូវការទៅជាផលិតផល MVP ក្នុងរយៈពេលខ្លី។']
      ]
    },
    skills: {
      eyebrow: '០២ / ជំនាញ និងបច្ចេកវិទ្យា',
      title: 'បច្ចេកវិទ្យាដែលខ្ញុំប្រើប្រាស់ក្នុងការបង្កើត។',
      detail: 'ការរួមបញ្ចូលគ្នានៃឧបករណ៍បច្ចេកវិទ្យាទំនើប ទាំង Frontend, Mobile Frameworks, API Microservices និង Database។',
      groups: {
        'Mobile & Frontend': ['Flutter', 'Dart', 'React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'],
        'Backend & APIs': ['Python', 'Flask', 'FastAPI', 'Node.js', 'RESTful APIs'],
        'Database & Servers': ['PostgreSQL', 'IIS Server Configuration'],
        'Tools & Workflow': ['Git', 'GitHub', 'VS Code', 'Postman']
      }
    },
    projects: {
      eyebrow: '០៣ / ស្នាដៃ និងគម្រោងសំខាន់ៗ',
      title: 'គម្រោងដែលបង្កើតឡើងដោយល្បឿន និងភាពជាក់លាក់។',
      detail: 'បណ្តុំគម្រោងកម្មវិធីទូរស័ព្ទ និងគេហទំព័រ ដែលបង្ហាញពីរចនាសម្ព័ន្ធឆ្លើយតប ការតភ្ជាប់ Backend និង UI ដ៏ទំនើប។',
      list: [
        {
          number: '01',
          category: 'កម្មវិធីទូរស័ព្ទដៃ (Mobile App)',
          title: 'Cross-Platform Flutter/Dart Mobile App',
          description: 'កម្មវិធីទូរស័ព្ទដៃកម្រិតខ្ពស់សម្រាប់ iOS និង Android បង្កើតឡើងដោយ Flutter & Dart។ មានប្រព័ន្ធ State Management រហ័ស Micro-interactions ដ៏រលូន ការតភ្ជាប់ RESTful API និងការរក្សាទុកទិន្នន័យ Offline Caching។',
          tags: ['Flutter', 'Dart', 'Mobile UI/UX', 'REST API', 'iOS & Android'],
          tone: 'cyan',
          badge: 'Mobile App'
        },
        {
          number: '02',
          category: 'កម្មវិធីគេហទំព័រ Full-Stack',
          title: 'Modern Full-Stack Web Platform',
          description: 'កម្មវិធីគេហទំព័រ Full-Stack ដែលរួមបញ្ចូលចំណុចប្រទាក់ React & Tailwind CSS ជាមួយសេវាកម្ម Backend Python/Flask ដ៏រឹងមាំ។ មានប្រព័ន្ធសុវត្ថិភាព JWT Dashboard ឆ្លើយតបគ្រប់ឧបករណ៍ និងមូលដ្ឋានទិន្នន័យ PostgreSQL។',
          tags: ['React', 'Python / Flask', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
          tone: 'violet',
          badge: 'Web App'
        },
        {
          number: '03',
          category: 'គម្រោងគេហទំព័រអតិថិជន',
          title: 'High-Conversion Responsive Web App',
          description: 'គេហទំព័រអាជីវកម្មដែលមានល្បឿនលឿនខ្ពស់ ងាយស្រួលប្រើប្រាស់ និងមានសោភ័ណភាព UI ទាក់ទាញ។ បង្កើតឡើងដោយ Modular Component Architecture ការផ្លាស់ប្តូរទំព័ររលូន និង SEO Optimization។',
          tags: ['React', 'JavaScript/TypeScript', 'Tailwind CSS', 'Vite', 'Responsive Design'],
          tone: 'cyan',
          badge: 'Web Product'
        }
      ],
      liveDemo: 'ដំណើរការសាកល្បង',
      githubRepo: 'កូដលើ GitHub'
    },
    contact: {
      eyebrow: '០៤ / ទំនាក់ទំនង',
      titlePrimary: 'តោះជជែកគ្នាអំពីកូដ និង',
      titleSecondary: 'បង្កើតអ្វីដែលអស្ចារ្យជាមួយគ្នា។',
      lead: 'ខ្ញុំបើកទូលាយជានិច្ចសម្រាប់ការងារអភិវឌ្ឍន៍សូហ្វវែរ មុខតំណែង Full-Stack គម្រោង Freelance និងការសហការបច្ចេកវិទ្យាផ្សេងៗ។ អាចទាក់ទងមកខ្ញុំតាម Telegram, អ៊ីមែល ឬទូរស័ព្ទផ្ទាល់។',
      labelTelegram: 'តេឡេក្រាម (សារផ្ទាល់)',
      labelEmail: 'អ៊ីមែលផ្ទាល់ខ្លួន',
      labelPhone: 'លេខទូរស័ព្ទ / WhatsApp',
      labelLocation: 'ទីតាំងបច្ចុប្បន្ន',
      formTitle: 'ផ្ញើសារមកកាន់ខ្ញុំផ្ទាល់',
      formSub: 'ខ្ញុំនឹងឆ្លើយតបវិញក្នុងរយៈពេលប៉ុន្មានម៉ោង។',
      fieldName: 'ឈ្មោះរបស់អ្នក',
      phName: 'ឧ. សុខ វិសាល',
      fieldEmail: 'អ៊ីមែលរបស់អ្នក',
      phEmail: 'visal@example.com',
      fieldMsg: 'គម្រោង ឬសារដែលចង់ផ្ញើ',
      phMsg: 'សូមប្រាប់ខ្ញុំអំពីគម្រោងគេហទំព័រ ឬកម្មវិធីទូរស័ព្ទរបស់អ្នក...',
      btnSend: 'ផ្ញើសារឥឡូវនេះ',
      btnSent: 'សារត្រូវបានរៀបចំរួចរាល់',
      errName: 'សូមបញ្ចូលឈ្មោះរបស់អ្នក។',
      errEmail: 'សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលឱ្យបានត្រឹមត្រូវ។',
      errMsg: 'សូមសរសេរសារយ៉ាងតិច ១០ តួអក្សរ។'
    },
    footer: {
      copy: 'រក្សាសិទ្ធិគ្រប់យ៉ាង © ២០២៦ Korn Koemlong (គន់ គឺមឡុង)។ បង្កើតឡើងដោយក្តីស្រឡាញ់។',
      backToTop: 'ត្រឡប់ទៅខាងលើ ↑'
    }
  }
}

function Header({ lang, setLang, onPhotoClick }) {
  const [open, setOpen] = useState(false)
  const [langMenu, setLangMenu] = useState(false)
  const [contactMenu, setContactMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const t = content[lang]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const links = [
    { key: 'about', label: t.nav.about, icon: 'user' },
    { key: 'skills', label: t.nav.skills, icon: 'layers' },
    { key: 'projects', label: t.nav.projects, icon: 'spark' },
    { key: 'contact', label: t.nav.contact, icon: 'mail' }
  ]

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.lang-dropdown-wrapper')) {
        setLangMenu(false)
      }
      if (!e.target.closest('.contact-dropdown-wrapper')) {
        setContactMenu(false)
      }
    }
    document.addEventListener('click', handleOutsideClick)
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [])

  return (
    <header className={`site-header${scrolled || open ? ' scrolled' : ''}`}>
      <div className="logo brand-logo">
        <button 
          type="button" 
          className="avatar-photo-btn" 
          onClick={onPhotoClick}
          title="Click to view full photo"
          aria-label="View Korn Koemlong profile photo"
        >
          <img src="/profile.jpg" alt="Korn Koemlong" className="nav-profile-img" />
          <span className="photo-zoom-hint">🔍</span>
        </button>
        <a href="#home" className="brand-text">
          {lang === 'km' ? 'គន់ គឺមឡុង' : 'Korn Koemlong'}<span>.</span>
        </a>
      </div>

      <nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.key} href={`#${link.key}`} className="nav-link-item" onClick={() => setOpen(false)}>
            <span className="nav-link-icon"><Icon name={link.icon} size={15} /></span>
            <span className="nav-label">{link.label}</span>
          </a>
        ))}
      </nav>

      <div className="header-actions">
        {/* CLICKABLE LANGUAGE SELECTOR DROPDOWN */}
        <div className="lang-dropdown-wrapper">
          <button 
            type="button"
            className={`lang-trigger-btn ${langMenu ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation()
              setLangMenu(!langMenu)
              setContactMenu(false)
            }}
            aria-expanded={langMenu}
            aria-haspopup="listbox"
            aria-label="Select language"
          >
            <span className="lang-trigger-flag">
              <Icon name={lang === 'en' ? 'usFlag' : 'khFlag'} />
            </span>
            <span className="lang-current-code">{lang === 'en' ? 'EN' : 'KH'}</span>
            <Icon name="chevronDown" size={13} />
          </button>

          {langMenu && (
            <div className="lang-dropdown-menu" role="listbox">
              <button
                type="button"
                className={`lang-option ${lang === 'en' ? 'selected' : ''}`}
                onClick={() => {
                  setLang('en')
                  setLangMenu(false)
                }}
              >
                <span className="lang-opt-flag">
                  <Icon name="usFlag" />
                </span>
                <div className="lang-opt-text">
                  <strong>English</strong>
                  <small>EN</small>
                </div>
                {lang === 'en' && <Icon name="check" size={14} />}
              </button>

              <button
                type="button"
                className={`lang-option ${lang === 'km' ? 'selected' : ''}`}
                onClick={() => {
                  setLang('km')
                  setLangMenu(false)
                }}
              >
                <span className="lang-opt-flag">
                  <Icon name="khFlag" />
                </span>
                <div className="lang-opt-text">
                  <strong>ភាសាខ្មែរ</strong>
                  <small>Khmer (KH)</small>
                </div>
                {lang === 'km' && <Icon name="check" size={14} />}
              </button>
            </div>
          )}
        </div>

        {/* CONTACT OPTIONS DROPDOWN (TELEGRAM, EMAIL, PHONE) */}
        <div className="contact-dropdown-wrapper">
          <button 
            type="button" 
            className={`contact-trigger-btn ${contactMenu ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation()
              setContactMenu(!contactMenu)
              setLangMenu(false)
            }}
            aria-expanded={contactMenu}
            aria-label="Contact options"
          >
            <span className="contact-trigger-icon">
              <Icon name="telegram" size={15}/>
            </span>
            <span>{lang === 'km' ? 'ទំនាក់ទំនង' : 'Contact'}</span>
            <Icon name="chevronDown" size={13}/>
          </button>

          {contactMenu && (
            <div className="contact-dropdown-menu">
              <a 
                href="https://t.me/Long6789101112" 
                target="_blank" 
                rel="noreferrer" 
                className="contact-drop-item telegram"
                onClick={() => setContactMenu(false)}
              >
                <span className="contact-item-icon telegram-icon">
                  <Icon name="telegram" size={16}/>
                </span>
                <div className="contact-item-info">
                  <strong>Telegram</strong>
                  <small>@Long6789101112</small>
                </div>
                <Icon name="arrowUpRight" size={14} />
              </a>

              <a 
                href="mailto:kimlongkorn168@icloud.com" 
                className="contact-drop-item email"
                onClick={() => setContactMenu(false)}
              >
                <span className="contact-item-icon email-icon">
                  <Icon name="mail" size={16}/>
                </span>
                <div className="contact-item-info">
                  <strong>Email</strong>
                  <small>kimlongkorn168@icloud.com</small>
                </div>
                <Icon name="arrowUpRight" size={14} />
              </a>

              <a 
                href="tel:+855713957208" 
                className="contact-drop-item phone"
                onClick={() => setContactMenu(false)}
              >
                <span className="contact-item-icon phone-icon">
                  <Icon name="phone" size={16}/>
                </span>
                <div className="contact-item-info">
                  <strong>Phone / WhatsApp</strong>
                  <small>+855 71 395 7208</small>
                </div>
                <Icon name="arrowUpRight" size={14} />
              </a>
            </div>
          )}
        </div>

        <a className="header-cta" href="#contact">{t.nav.letsTalk} <Icon name="arrowUpRight" size={17}/></a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  )
}

function SectionTitle({ eyebrow, title, detail }) {
  return (
    <div className="section-heading reveal">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {detail && <p className="section-detail">{detail}</p>}
    </div>
  )
}

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'contact']

// floating tech logos, kept mostly near the edges so they never sit behind text
const BG_LOGOS = [
  { name: 'Flutter', x: 4, y: 14, size: 54, depth: 3, delay: 0 },
  { name: 'React', x: 90, y: 10, size: 60, depth: 2, delay: -4 },
  { name: 'Python', x: 12, y: 46, size: 44, depth: 1, delay: -8 },
  { name: 'Dart', x: 94, y: 38, size: 40, depth: 3, delay: -2 },
  { name: 'JavaScript', x: 46, y: 6, size: 30, depth: 1, delay: -6, mobileHide: true },
  { name: 'TypeScript', x: 82, y: 62, size: 46, depth: 2, delay: -10 },
  { name: 'Flask', x: 3, y: 74, size: 42, depth: 2, delay: -3 },
  { name: 'Node.js', x: 64, y: 88, size: 38, depth: 1, delay: -12, mobileHide: true },
  { name: 'PostgreSQL', x: 92, y: 84, size: 50, depth: 3, delay: -7 },
  { name: 'Tailwind', x: 26, y: 90, size: 34, depth: 1, delay: -5, mobileHide: true },
  { name: 'GitHub', x: 72, y: 24, size: 32, depth: 1, delay: -9, mobileHide: true },
  { name: 'Git', x: 20, y: 24, size: 30, depth: 2, delay: -11, mobileHide: true },
  { name: 'FastAPI', x: 40, y: 70, size: 30, depth: 1, delay: -1, mobileHide: true },
  { name: 'VS Code', x: 58, y: 44, size: 28, depth: 1, delay: -13, mobileHide: true },
  { name: 'Postman', x: 8, y: 94, size: 32, depth: 2, delay: -14, mobileHide: true },
  { name: 'HTML', x: 78, y: 96, size: 30, depth: 1, delay: -15, mobileHide: true }
]

function useConstellation(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const colors = ['34, 211, 238', '192, 132, 252', '96, 165, 250']
    const mouse = { x: -9999, y: -9999 }
    let w = 0, h = 0, dpr = 1, points = [], frame = 0, linkDist = 130

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      linkDist = w < 768 ? 100 : 130
      const count = Math.min(Math.round((w * h) / (w < 768 ? 16000 : 12000)), 120)
      points = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.6,
        c: colors[Math.floor(Math.random() * colors.length)]
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of points) {
        if (!reduceMotion) {
          const dx = mouse.x - p.x, dy = mouse.y - p.y
          const d = Math.hypot(dx, dy)
          if (d < 200 && d > 1) {
            p.vx += (dx / d) * 0.004
            p.vy += (dy / d) * 0.004
          }
          p.vx *= 0.995
          p.vy *= 0.995
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0 || p.x > w) p.vx *= -1
          if (p.y < 0 || p.y > h) p.vy *= -1
        }
      }

      for (let i = 0; i < points.length; i++) {
        const a = points[i]
        for (let j = i + 1; j < points.length; j++) {
          const b = points[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < linkDist) {
            const nearMouse = Math.hypot(mouse.x - a.x, mouse.y - a.y) < 180
            ctx.strokeStyle = `rgba(${a.c}, ${(1 - d / linkDist) * (nearMouse ? 0.45 : 0.16)})`
            ctx.lineWidth = nearMouse ? 1 : 0.7
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const p of points) {
        const nearMouse = Math.hypot(mouse.x - p.x, mouse.y - p.y) < 180
        ctx.fillStyle = `rgba(${p.c}, ${nearMouse ? 0.95 : 0.55})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, nearMouse ? p.r + 0.6 : p.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const loop = () => {
      // skip work once the hero has scrolled away and the canvas is faded out
      if (!document.hidden && window.scrollY < window.innerHeight * 1.3) draw()
      frame = requestAnimationFrame(loop)
    }

    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999 }

    resize()
    if (reduceMotion) draw()
    else frame = requestAnimationFrame(loop)
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [canvasRef])
}

function SiteBackground() {
  const ref = useRef(null)
  const canvasRef = useRef(null)
  useConstellation(canvasRef)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(pointer: coarse)').matches) return
    let frame = 0
    const move = (e) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${e.clientX}px`)
        el.style.setProperty('--my', `${e.clientY}px`)
        el.classList.add('has-pointer')
      })
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', move)
    }
  }, [])

  // fade the constellation out as the hero scrolls away
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const fade = Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.9))
        const max = document.documentElement.scrollHeight - window.innerHeight
        el.style.setProperty('--hero-fade', fade.toFixed(3))
        el.style.setProperty('--scroll-progress', max > 0 ? (window.scrollY / max).toFixed(4) : '0')
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // tint the background to match whichever section is in the middle of the screen
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) el.dataset.section = entry.target.id
      })
    }, { rootMargin: '-45% 0px -45% 0px' })
    SECTION_IDS.forEach(id => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-bg" data-section="home" ref={ref} aria-hidden="true">
      <div className="bg-aurora aurora-1" />
      <div className="bg-aurora aurora-2" />
      <div className="bg-aurora aurora-3" />
      <div className="bg-grid" />
      <div className="bg-logos">
        {BG_LOGOS.map(logo => (
          <div
            key={logo.name}
            className={`bg-logo depth-${logo.depth}${logo.mobileHide ? ' mobile-hide' : ''}`}
            style={{ left: `${logo.x}%`, top: `${logo.y}%` }}
          >
            <div className="bg-logo-float" style={{ animationDelay: `${logo.delay}s` }}>
              <TechLogo name={logo.name} size={logo.size} />
            </div>
          </div>
        ))}
      </div>
      <canvas className="bg-constellation" ref={canvasRef} />
      <div className="bg-spotlight" />
      <div className="bg-vignette" />
    </div>
  )
}

export default function App() {
  const [lang, setLang] = useState('en')
  const [showPhotoModal, setShowPhotoModal] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const t = content[lang]

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setShowPhotoModal(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [lang])

  const submit = (event) => {
    event.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = t.contact.errName
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = t.contact.errEmail
    if (form.message.trim().length < 10) next.message = t.contact.errMsg
    setErrors(next)
    if (Object.keys(next).length === 0) {
      window.location.href = `mailto:kimlongkorn168@icloud.com?subject=${encodeURIComponent(`Portfolio Message from ${form.name}`)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`
      setSent(true)
    }
  }

  const skillGroups = [
    { title: 'Mobile & Frontend', icon: 'smartphone', items: t.skills.groups['Mobile & Frontend'] },
    { title: 'Backend & APIs', icon: 'code', items: t.skills.groups['Backend & APIs'] },
    { title: 'Database & Servers', icon: 'server', items: t.skills.groups['Database & Servers'] },
    { title: 'Tools & Workflow', icon: 'terminal', items: t.skills.groups['Tools & Workflow'] }
  ]

  return (
    <div className={`app-root ${lang === 'km' ? 'lang-khmer' : ''}`}>
      <SiteBackground />
      <Header lang={lang} setLang={setLang} onPhotoClick={() => setShowPhotoModal(true)} />
      <main>
        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="hero-glow cyan-glow" />
          <div className="hero-glow violet-glow" />
          
          <div className="hero-copy reveal visible">
            <div className="badge-row">
              <div className="status"><span /> {t.hero.status}</div>
              <span className="vibe-tag">{t.hero.vibe}</span>
            </div>

            <h1 className="hero-name">
              {t.hero.greeting}{' '}
              <span className="highlight-name">
                {lang === 'km' ? 'គន់ គឺមឡុង' : 'Korn Koemlong'}
              </span>
            </h1>
            <p className="alias">(Journey)</p>

            <h2 className="hero-headline">
              {t.hero.headlineRole} <br />
              <span className="gradient-text">{t.hero.headlineSub}</span>
            </h2>

            <p className="hero-subheadline">
              {t.hero.subheadline}
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">{t.hero.btnProjects} <Icon name="arrow" size={18}/></a>
              <a className="button secondary" href="#contact">{t.hero.btnContact}</a>
            </div>

            {/* DIRECT CONTACT BADGES */}
            <div className="quick-badges">
              <a href="https://t.me/Long6789101112" target="_blank" rel="noreferrer" className="badge-pill telegram" title="Direct Telegram Chat">
                <Icon name="telegram" size={16}/> <span>@Long6789101112</span>
              </a>
              <a href="mailto:kimlongkorn168@icloud.com" className="badge-pill email" title="Direct Email">
                <Icon name="mail" size={16}/> <span>kimlongkorn168@icloud.com</span>
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="badge-pill github" title="GitHub">
                <Icon name="github" size={16}/> <span>GitHub</span>
              </a>
              <a href="tel:+855713957208" className="badge-pill phone" title="Call or SMS">
                <Icon name="phone" size={16}/> <span>071 395 7208</span>
              </a>
            </div>
          </div>

          <div className="hero-aside reveal visible">
            <div className="code-window">
              <div className="window-bar">
                <div className="window-dots"><i/><i/><i/></div>
                <span className="window-filename">developer.ts</span>
                <span className="window-status-pill"><span className="live-dot" /> {t.hero.online}</span>
              </div>

              <div className="window-hero-profile">
                <div 
                  className="profile-img-frame clickable" 
                  onClick={() => setShowPhotoModal(true)}
                  title="Click to view full photo"
                  role="button"
                  tabIndex={0}
                >
                  <img src="/profile.jpg" alt="Korn Koemlong" className="profile-img" />
                  <span className="profile-active-dot" title="Available to collaborate" />
                </div>
                <div className="profile-summary">
                  <div className="profile-title-row">
                    <h3 className="profile-name">
                      {lang === 'km' ? 'គន់ គឺមឡុង' : 'Korn Koemlong'}
                    </h3>
                    <span className="profile-role-tag">{t.hero.roleBadge}</span>
                  </div>
                  <div className="profile-handle">
                    <span>@journey</span>
                    <span className="dot-sep">•</span>
                    <span>21 y/o</span>
                  </div>
                  <div className="profile-badges">
                    <span className="mini-tag university">
                      <Icon name="code" size={12} /> {t.hero.universityTag}
                    </span>
                    <span className="mini-tag location">
                      <Icon name="mapPin" size={12} /> {t.hero.locationTag}
                    </span>
                  </div>
                </div>
              </div>

              <pre><code>
                <span className="muted">01</span>  <span className="purple">const</span> dev = &#123;{`\n`}
                <span className="muted">02</span>    role: <span className="cyan">'Full-Stack &amp; Software Dev'</span>,{`\n`}
                <span className="muted">03</span>    vibe: <span className="purple">'High Velocity ⚡'</span>,{`\n`}
                <span className="muted">04</span>    stack: [<span className="cyan">'Flutter'</span>, <span className="cyan">'React'</span>, <span className="cyan">'Python'</span>, <span className="cyan">'Flask API'</span>],{`\n`}
                <span className="muted">05</span>    openToWork: <span className="violet">true</span>{`\n`}
                <span className="muted">06</span>  &#125;;{`\n`}
                <span className="muted">07</span>{`\n`}
                <span className="muted">08</span>  <span className="purple">export default</span> dev;
              </code></pre>
              <div className="window-footer">
                <span>●</span> {t.hero.readyShip}
              </div>
            </div>
            <div className="orbit one">Flutter</div>
            <div className="orbit two">React</div>
            <div className="orbit three">Flask</div>
          </div>
          <div className="scroll-cue"><span>Scroll to explore</span><i /></div>
        </section>

        {/* ABOUT ME SECTION */}
        <section className="section about" id="about">
          <SectionTitle 
            eyebrow={t.about.eyebrow} 
            title={<>{t.about.titlePrimary}<br/>{t.about.titleSecondary}</>} 
          />
          <div className="about-grid">
            <div className="about-copy reveal">
              <div className="about-author-header">
                <img 
                  src="/profile.jpg" 
                  alt="Korn Koemlong" 
                  className="about-avatar-small clickable" 
                  onClick={() => setShowPhotoModal(true)}
                  title="Click to view full photo"
                />
                <div>
                  <h3 className="about-name-title">
                    {lang === 'km' ? 'គន់ គឺមឡុង (Journey)' : 'Korn Koemlong (Journey)'}
                  </h3>
                  <p className="about-role-sub">{t.about.authorRole}</p>
                </div>
              </div>
              <p className="lead" dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
              
              <div className="about-meta-grid">
                <div className="meta-box">
                  <span className="meta-label">{t.about.metaLocation}</span>
                  <strong className="meta-value">{t.about.metaLocationVal}</strong>
                </div>
                <div className="meta-box">
                  <span className="meta-label">{t.about.metaEducation}</span>
                  <strong className="meta-value">{t.about.metaEducationVal}</strong>
                </div>
                <div className="meta-box">
                  <span className="meta-label">{t.about.metaAge}</span>
                  <strong className="meta-value">{t.about.metaAgeVal}</strong>
                </div>
                <div className="meta-box">
                  <span className="meta-label">{t.about.metaSpec}</span>
                  <strong className="meta-value">{t.about.metaSpecVal}</strong>
                </div>
              </div>
            </div>

            <div className="highlights reveal">
              {t.about.highlights.map(item => (
                <article key={item[0]}>
                  <span>{item[0]}</span>
                  <div>
                    <h3>{item[1]}</h3>
                    <p>{item[2]}</p>
                  </div>
                  <Icon name="arrowUpRight" size={20}/>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="section skills" id="skills">
          <SectionTitle 
            eyebrow={t.skills.eyebrow} 
            title={t.skills.title} 
            detail={t.skills.detail} 
          />
          <div className="skill-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card reveal" key={group.title}>
                <div className="skill-header">
                  <div className="skill-icon">
                    <Icon name={group.icon} size={22} />
                  </div>
                  <p className="card-number">0{index + 1}</p>
                </div>
                <h3>{group.title}</h3>
                <div className="tags">
                  {group.items.map(item => (
                    <span key={item} className="tech-skill-pill">
                      <TechLogo name={item} size={15} />
                      <span className="tech-skill-name">{item}</span>
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="section projects" id="projects">
          <SectionTitle 
            eyebrow={t.projects.eyebrow} 
            title={t.projects.title} 
            detail={t.projects.detail} 
          />
          <div className="project-list">
            {t.projects.list.map((project, idx) => (
              <article className="project reveal" key={project.number}>
                <div className={`project-visual ${project.tone}`}>
                  <div className="visual-top">
                    <span className="badge-type">{project.badge}</span>
                    <div className="dots"><i/><i/><i/></div>
                  </div>

                  {idx === 0 && (
                    <div className="mobile-mock">
                      <div className="mobile-speaker" />
                      <div className="mobile-screen">
                        <div className="mobile-top-bar">
                          <span className="mobile-clock">09:41</span>
                          <div className="mobile-icons"><i /><i /><i /></div>
                        </div>
                        <div className="app-nav-row">
                          <span className="app-logo-badge">Flutter</span>
                          <span className="app-status-chip">Active</span>
                        </div>
                        <div className="app-hero-card">
                          <div className="app-hero-title">Mobile Dashboard</div>
                          <div className="app-hero-sub">Flutter · Dart · iOS &amp; Android</div>
                          <div className="app-hero-pill">99.8% Smooth 60FPS</div>
                        </div>
                        <div className="app-stats-row">
                          <div className="stat-card">
                            <span className="stat-num">2.4k</span>
                            <span className="stat-lbl">Users</span>
                          </div>
                          <div className="stat-card highlight">
                            <span className="stat-num">4.9 ★</span>
                            <span className="stat-lbl">Rating</span>
                          </div>
                        </div>
                        <div className="app-menu-list">
                          <div className="menu-bar active"><span /> REST API Sync</div>
                          <div className="menu-bar"><span /> Offline Cache</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {idx === 1 && (
                    <div className="web-dashboard-mock">
                      <div className="browser-header">
                        <div className="dots"><i /><i /><i /></div>
                        <span className="browser-url">https://webapp.journey.dev</span>
                      </div>
                      <div className="web-body">
                        <div className="web-sidebar">
                          <div className="side-logo">Web</div>
                          <div className="side-link active" />
                          <div className="side-link" />
                          <div className="side-link" />
                        </div>
                        <div className="web-content">
                          <div className="web-banner">
                            <h4>Full-Stack React + Flask Web Platform</h4>
                            <p>Real-time analytics &amp; PostgreSQL persistence</p>
                          </div>
                          <div className="web-grid">
                            <div className="web-stat-box">
                              <span>API Latency</span>
                              <strong>18ms</strong>
                            </div>
                            <div className="web-stat-box">
                              <span>Uptime</span>
                              <strong>99.9%</strong>
                            </div>
                          </div>
                          <div className="web-table-row" />
                          <div className="web-table-row" />
                        </div>
                      </div>
                    </div>
                  )}

                  {idx === 2 && (
                    <div className="browser-mock">
                      <div className="browser-header-clean">
                        <div className="dots"><i /><i /><i /></div>
                        <span className="browser-url-clean">https://client-project.com</span>
                      </div>
                      <div className="browser-inner">
                        <div className="mock-nav"/>
                        <div className="mock-title"/>
                        <div className="mock-copy"/>
                        <div className="mock-button"/>
                        <div className="mock-card a"/>
                        <div className="mock-card b"/>
                      </div>
                    </div>
                  )}
                </div>

                <div className="project-info">
                  <p className="project-type">{project.category} / {project.number}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tech-skill-pill">
                        <TechLogo name={tag} size={14} />
                        <span className="tech-skill-name">{tag}</span>
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href="#" onClick={e => e.preventDefault()}>{t.projects.liveDemo} <Icon name="arrowUpRight" size={17}/></a>
                    <a href="#" onClick={e => e.preventDefault()}>{t.projects.githubRepo} <Icon name="github" size={17}/></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* INTERACTIVE CONTACT SECTION */}
        <section className="section contact" id="contact">
          <div className="contact-copy reveal">
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2>
              {t.contact.titlePrimary}<br/>
              <em>{t.contact.titleSecondary}</em>
            </h2>
            <p>
              {t.contact.lead}
            </p>

            {/* QUICK CONTACT CARDS */}
            <div className="contact-details-panel">
              <a href="https://t.me/Long6789101112" target="_blank" rel="noreferrer" className="contact-row telegram-row">
                <div className="row-icon"><Icon name="telegram" size={20}/></div>
                <div className="row-info">
                  <span className="row-label">{t.contact.labelTelegram}</span>
                  <span className="row-val">@Long6789101112</span>
                </div>
                <Icon name="arrowUpRight" size={16}/>
              </a>

              <a href="mailto:kimlongkorn168@icloud.com" className="contact-row">
                <div className="row-icon"><Icon name="mail" size={20}/></div>
                <div className="row-info">
                  <span className="row-label">{t.contact.labelEmail}</span>
                  <span className="row-val">kimlongkorn168@icloud.com</span>
                </div>
                <Icon name="arrowUpRight" size={16}/>
              </a>

              <a href="tel:+855713957208" className="contact-row">
                <div className="row-icon"><Icon name="phone" size={20}/></div>
                <div className="row-info">
                  <span className="row-label">{t.contact.labelPhone}</span>
                  <span className="row-val">+855 71 395 7208 (071 395 7208)</span>
                </div>
                <Icon name="arrowUpRight" size={16}/>
              </a>

              <div className="contact-row static">
                <div className="row-icon"><Icon name="mapPin" size={20}/></div>
                <div className="row-info">
                  <span className="row-label">{t.contact.labelLocation}</span>
                  <span className="row-val">Phnom Penh, Cambodia</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://t.me/Long6789101112" target="_blank" rel="noreferrer" aria-label="Telegram"><Icon name="telegram"/></a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github"/></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin"/></a>
              <a href="mailto:kimlongkorn168@icloud.com" aria-label="Email"><Icon name="mail"/></a>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form className="contact-form reveal" onSubmit={submit} noValidate>
            <h3 className="form-heading">{t.contact.formTitle}</h3>
            <p className="form-subheading">{t.contact.formSub}</p>

            <label>
              {t.contact.fieldName}
              <input 
                value={form.name} 
                onChange={e => setForm({...form, name: e.target.value})} 
                placeholder={t.contact.phName} 
              />
              {errors.name && <small>{errors.name}</small>}
            </label>

            <label>
              {t.contact.fieldEmail}
              <input 
                type="email" 
                value={form.email} 
                onChange={e => setForm({...form, email: e.target.value})} 
                placeholder={t.contact.phEmail} 
              />
              {errors.email && <small>{errors.email}</small>}
            </label>

            <label>
              {t.contact.fieldMsg}
              <textarea 
                rows="5" 
                value={form.message} 
                onChange={e => setForm({...form, message: e.target.value})} 
                placeholder={t.contact.phMsg} 
              />
              {errors.message && <small>{errors.message}</small>}
            </label>

            <button className="button primary" type="submit">
              {sent ? (
                <><Icon name="check"/> {t.contact.btnSent}</>
              ) : (
                <>{t.contact.btnSend} <Icon name="arrow" size={18}/></>
              )}
            </button>
          </form>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          <div className="logo brand-logo">
            <button 
              type="button" 
              className="avatar-photo-btn" 
              onClick={() => setShowPhotoModal(true)}
              title="Click to view full photo"
              aria-label="View Korn Koemlong profile photo"
            >
              <img src="/profile.jpg" alt="Korn Koemlong" className="nav-profile-img footer-avatar" />
            </button>
            <a href="#home" className="brand-text">
              {lang === 'km' ? 'គន់ គឺមឡុង' : 'Korn Koemlong'}<span>.</span>
            </a>
          </div>
          <span>(Journey)</span>
        </div>
        <p>{t.footer.copy}</p>
        <a href="#home">{t.footer.backToTop}</a>
      </footer>

      {/* FULL PHOTO LIGHTBOX MODAL */}
      {showPhotoModal && (
        <div 
          className="photo-modal-backdrop" 
          onClick={() => setShowPhotoModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Profile Photo Lightbox"
        >
          <div className="photo-modal-card" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="photo-modal-close" 
              onClick={() => setShowPhotoModal(false)}
              aria-label="Close photo preview"
              title="Close (Esc)"
            >
              <Icon name="close" size={18} />
            </button>
            <div className="photo-modal-image-wrapper">
              <img src="/profile.jpg" alt="Korn Koemlong (គន់ គឺមឡុង)" className="photo-modal-img" />
            </div>
            <div className="photo-modal-footer">
              <div className="modal-dev-info">
                <h4 className="modal-dev-name">
                  {lang === 'km' ? 'គន់ គឺមឡុង (Journey)' : 'Korn Koemlong (Journey)'}
                </h4>
                <p className="modal-dev-alias">{lang === 'km' ? 'និស្សិតឆ្នាំទី ៤ · Software Developer' : '@journey · Software Developer'}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
