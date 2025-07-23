#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import inquirer from "inquirer";
import open from "open";
import gradient from "gradient-string";
import figlet from "figlet";
import ora from "ora";

// Create gradient themes
const coolGradient = gradient(['#00f5ff', '#0099ff', '#0066ff']);
const fireGradient = gradient(['#ff6b6b', '#feca57', '#ff9ff3']);
const techGradient = gradient(['#667eea', '#764ba2']);

// Enhanced data with more technical details
const data = {
  name: "Giriraj Parsewar",
  title: "Full-Stack Developer | DevOps Engineer",
  subtitle: "Building scalable solutions with modern tech stack",
  tagline: '"Code is poetry written in logic 🚀"',
  
  // Personal Info
  location: "📍 Bhopal, India",
  experience: "💼 SDE Intern @ Setu (PineLabs)",
  education: "🎓 B.Tech CSE @ VIT Bhopal | CGPA: 8.85",
  
  // Tech Stack Categories
  frontend: ["React.js", "Next.js", "Redux", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "Python", "Flask", "FastAPI", "REST APIs"],
  databases: ["MongoDB", "MySQL", "Firebase", "Supabase"],
  cloud: ["AWS", "Docker", "Vercel", "Netlify"],
  languages: ["JavaScript", "Python", "Java", "C++"],
  tools: ["Git", "GitHub", "GitLab", "Docker", "Postman", "VS Code"],
  
  // Links
  github: "https://github.com/giriraj-parsewar",
  linkedin: "https://linkedin.com/in/giriraj-parsewar", 
  email: "girirajparsewar61@gmail.com",
  phone: "+91-7240739968",
  
  // Projects
  projects: [
    {
      name: "Auditora",
      desc: "Multi-venue booking platform for 90+ clubs",
      tech: "React.js, Supabase, Redux, Tailwind CSS",
      users: "100+ daily bookings"
    },
    {
      name: "Personal Finance Tracker", 
      desc: "Full-stack expense tracking with data visualization",
      tech: "React.js, Firebase, Chart.js",
      users: "100+ active users"
    }
  ],
  
  // Achievements
  achievements: [
    "🏆 Nokia Accelerate Her - Top 346/33,000+ participants",
    "🎯 JEE Advanced 2022 - AIR 23,246", 
    "💻 LeetCode & GFG - Top 10% (200+ problems solved)",
    "📈 Performance optimization - 20% improvement at Setu",
    "♿ Accessibility champion - 95+ WCAG compliance scores"
  ],
  
  // Leadership
  leadership: [
    "👑 President, Android Club (150+ members)",
    "🚀 Technical Lead, Freelancing Club (300% growth)"
  ]
};

// Animation function
const showLoadingAnimation = async (text, duration = 1000) => {
  const spinner = ora({
    text: chalk.cyan(text),
    spinner: 'dots12'
  }).start();
  
  await new Promise(resolve => setTimeout(resolve, duration));
  spinner.succeed(chalk.green(`${text} ✨`));
};

// Display ASCII Art Header with better formatting
const displayHeader = () => {
  console.clear();
  
  // Create GIRIRAJ with better spacing and centering
  const nameLines = [
    "  ██████╗ ██╗██████╗ ██╗██████╗  █████╗      ██╗",
    " ██╔════╝ ██║██╔══██╗██║██╔══██╗██╔══██╗     ██║",
    " ██║  ███╗██║██████╔╝██║██████╔╝███████║     ██║",
    " ██║   ██║██║██╔══██╗██║██╔══██╗██╔══██║██   ██║",
    " ╚██████╔╝██║██║  ██║██║██║  ██║██║  ██║╚█████╔╝",
    "  ╚═════╝ ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚════╝ "
  ];
  
  // Display each line with gradient
  nameLines.forEach(line => {
    console.log(coolGradient(line));
  });
  
  // Center PARSEWAR properly
  console.log(techGradient('                      P A R S E W A R'));
  console.log();
};

// Main business card display
const displayCard = () => {
  const cardContent = `
${chalk.bold.hex('#00f5ff')(data.name)}
${chalk.hex('#feca57')(data.title)}
${chalk.italic.gray(data.subtitle)}

${chalk.bold('📧 Contact:')}
  Email: ${chalk.magenta(data.email)}
  Phone: ${chalk.green(data.phone)}
  ${chalk.gray(data.location)}
  ${chalk.blue(data.experience)}
  ${chalk.white(data.education)}

${chalk.bold('🛠️  Tech Arsenal:')}
  ${chalk.hex('#61dafb')('Frontend:')} ${data.frontend.join(' • ')}
  ${chalk.hex('#68a063')('Backend:')}  ${data.backend.join(' • ')}
  ${chalk.hex('#f39c12')('Database:')} ${data.databases.join(' • ')}
  ${chalk.hex('#ff6b6b')('Cloud:')}    ${data.cloud.join(' • ')}
  ${chalk.hex('#9b59b6')('Languages:')} ${data.languages.join(' • ')}

${chalk.bold('👥 Leadership:')}
${data.leadership.map(role => `  ${role}`).join('\n')}

${fireGradient(data.tagline)}
`;

  return boxen(cardContent, {
    padding: 1,
    margin: 1,
    borderStyle: 'double',
    borderColor: 'cyan',
    backgroundColor: '#000000'
  });
};

// Interactive menu options
const menuOptions = [
  {
    name: `${chalk.hex('#00d2d3')('🔗')} Connect on LinkedIn ${chalk.dim('(Professional Network)')}`,
    value: 'linkedin'
  },
  {
    name: `${chalk.hex('#333')('📁')} View GitHub Portfolio ${chalk.dim('(Code & Projects)')}`,
    value: 'github'
  },
  {
    name: `${chalk.hex('#ea4335')('📬')} Send Email ${chalk.dim('(Let\'s collaborate!)')}`,
    value: 'email'
  },
  {
    name: `${chalk.hex('#25d366')('📱')} Call/WhatsApp ${chalk.dim('(Quick chat)')}`,
    value: 'phone'
  },
  {
    name: `${chalk.hex('#f39c12')('💼')} View Resume ${chalk.dim('(Detailed experience)')}`,
    value: 'resume'
  },
  {
    name: `${chalk.hex('#9b59b6')('🛠️ ')} Tech Stack Details ${chalk.dim('(Deep dive)')}`,
    value: 'techstack'
  },
  {
    name: `${chalk.hex('#e74c3c')('🚀')} Project Showcase ${chalk.dim('(Live demos)')}`,
    value: 'projects'
  },
  {
    name: `${chalk.hex('#95a5a6')('ℹ️ ')} System Info ${chalk.dim('(Geek stats)')}`,
    value: 'sysinfo'
  },
  {
    name: `${chalk.red('❌')} Exit ${chalk.dim('(See you later!)')}`,
    value: 'exit'
  }
];

// Tech stack detailed view
const showTechStack = async () => {
  console.clear();
  
  const techDetails = `
${coolGradient('🛠️  COMPLETE TECH ARSENAL')}

${chalk.bold.hex('#61dafb')('⚛️  Frontend Development:')}
  • React.js - Component-based UI development
  • Next.js - Full-stack React framework with SSR/SSG
  • Redux - Predictable state container
  • HTML5/CSS3 - Semantic markup & modern styling
  • Tailwind CSS - Utility-first CSS framework
  • Bootstrap - Responsive design framework

${chalk.bold.hex('#68a063')('🔧 Backend Development:')}
  • Node.js - JavaScript runtime for server-side
  • Express.js - Minimal web framework for Node.js
  • Python - Versatile programming language
  • Flask/FastAPI - Python web frameworks
  • REST APIs - RESTful web services design

${chalk.bold.hex('#f39c12')('🗄️  Database Management:')}
  • MongoDB - NoSQL document database
  • MySQL - Relational database management
  • Firebase - Google's mobile/web development platform
  • Supabase - Open source Firebase alternative

${chalk.bold.hex('#ff6b6b')('☁️  Cloud & DevOps:')}
  • AWS - Amazon Web Services cloud platform
  • Docker - Containerization platform
  • Vercel - Frontend deployment platform
  • Netlify - Web development platform
  • CI/CD - Continuous Integration/Deployment

${chalk.bold.hex('#9b59b6')('🔨 Development Tools:')}
  • Git/GitHub/GitLab - Version control systems
  • VS Code - Preferred code editor
  • Postman - API development/testing
  • Docker - Container orchestration

${chalk.bold.hex('#e67e22')('📊 Data & Analytics:')}
  • Chart.js - JavaScript charting library
  • Google Analytics - Web analytics
  • Microsoft Clarity - User behavior analytics
  • Google Tag Manager - Tag management system
`;

  console.log(boxen(techDetails, {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'magenta'
  }));
  
  await inquirer.prompt([{
    type: 'confirm',
    name: 'continue',
    message: 'Press enter to return to main menu...',
    default: true
  }]);
};

// Project showcase
const showProjects = async () => {
  console.clear();
  
  const projectDetails = `
${fireGradient('🚀 PROJECT SHOWCASE')}

${chalk.bold.hex('#00d2d3')('1. Auditora - Auditorium Booking Platform')}
  ${chalk.gray('●')} ${chalk.white('Multi-venue booking system for 90+ clubs')}
  ${chalk.gray('●')} ${chalk.green('Handles 100+ daily booking proposals')}
  ${chalk.gray('●')} ${chalk.blue('Real-time availability with interactive calendar')}
  ${chalk.gray('●')} ${chalk.yellow('Role-based access control (3 user types)')}
  ${chalk.gray('●')} ${chalk.magenta('Automated email notifications via EmailJS')}
  
  ${chalk.dim('Tech Stack:')} React.js, Tailwind CSS, Supabase, Redux, EmailJS
  ${chalk.dim('Deployment:')} Netlify
  ${chalk.dim('Features:')} Same-day scheduling, Multi-slot booking, Secure authentication

${chalk.bold.hex('#f39c12')('2. Personal Finance Tracker')}
  ${chalk.gray('●')} ${chalk.white('Comprehensive expense and income tracking')}
  ${chalk.gray('●')} ${chalk.green('Automated monthly financial reports')}
  ${chalk.gray('●')} ${chalk.blue('Interactive data visualization dashboard')}
  ${chalk.gray('●')} ${chalk.yellow('Helps identify 20%+ unnecessary expenses')}
  ${chalk.gray('●')} ${chalk.magenta('Real-time transaction syncing')}
  
  ${chalk.dim('Tech Stack:')} React.js, Firebase, Chart.js, NoSQL
  ${chalk.dim('Deployment:')} Vercel
  ${chalk.dim('Users:')} 100+ active users

${chalk.bold.hex('#9b59b6')('3. Performance Optimization @ Setu')}
  ${chalk.gray('●')} ${chalk.white('React.js/Next.js codebase optimization')}
  ${chalk.gray('●')} ${chalk.green('20% performance score improvement')}
  ${chalk.gray('●')} ${chalk.blue('95+ accessibility compliance (WCAG)')}
  ${chalk.gray('●')} ${chalk.yellow('UI migration across 5+ web projects')}
  ${chalk.gray('●')} ${chalk.magenta('Analytics integration (GTM, GA, Clarity)')}
`;

  console.log(boxen(projectDetails, {
    padding: 1,
    margin: 1,
    borderStyle: 'double',
    borderColor: 'green'
  }));
  
  await inquirer.prompt([{
    type: 'confirm',
    name: 'continue',
    message: 'Press enter to return to main menu...',
    default: true
  }]);
};

// System info display
const showSystemInfo = async () => {
  console.clear();
  
  const sysInfo = `
${techGradient('💻 DEVELOPER SYSTEM INFO')}

${chalk.bold('🔧 Current Status:')}
  Mode: ${chalk.green('● ONLINE')} - Ready for new opportunities
  Coffee Level: ${chalk.yellow('████████░░')} 80% (High productivity mode)
  Code Quality: ${chalk.green('█████████░')} 95% (Clean code advocate)
  
${chalk.bold('📈 GitHub Stats:')}
  Total Repositories: ${chalk.cyan('25+')}
  Languages Used: ${chalk.blue('10+')}
  Problem Solving: ${chalk.green('200+ DSA problems')}
  Contributions: ${chalk.yellow('Daily commits')}

${chalk.bold('🎯 Current Focus:')}
  • Full-stack development with React/Node.js
  • Cloud architecture with AWS
  • DevOps practices and CI/CD
  • Performance optimization
  • Open source contributions

${chalk.bold('🏆 Competitive Programming:')}
  LeetCode: ${chalk.orange('Top 10%')} 
  GeeksforGeeks: ${chalk.blue('Top 10%')}
  Problem Count: ${chalk.green('200+')}
  
${chalk.bold('📚 Currently Learning:')}
  • Advanced AWS Services
  • Kubernetes & Container Orchestration  
  • GraphQL & Apollo
  • Microservices Architecture
  • AI/ML Integration in Web Apps

${chalk.bold('🌟 Fun Facts:')}
  • Led 150+ member Android Club as President
  • Achieved 300% growth in Freelancing Club
  • Nokia Hackathon Top 346/33,000+ globally
  • JEE Advanced AIR 23,246 (Top percentile)
`;

  console.log(boxen(sysInfo, {
    padding: 1,
    margin: 1,
    borderStyle: 'classic',
    borderColor: 'blue'
  }));
  
  await inquirer.prompt([{
    type: 'confirm',
    name: 'continue',
    message: 'Press enter to return to main menu...',
    default: true
  }]);
};

// Handle menu actions
const handleAction = async (action) => {
  const spinner = ora();
  
  switch(action) {
    case 'linkedin':
      spinner.start('Opening LinkedIn profile...');
      await new Promise(resolve => setTimeout(resolve, 800));
      spinner.succeed('LinkedIn opened! 🔗');
      await open(data.linkedin);
      break;
      
    case 'github':
      spinner.start('Loading GitHub repositories...');
      await new Promise(resolve => setTimeout(resolve, 800));
      spinner.succeed('GitHub opened! 📁');
      await open(data.github);
      break;
      
    case 'email':
      spinner.start('Opening email client...');
      await new Promise(resolve => setTimeout(resolve, 800));
      spinner.succeed('Email client opened! 📬');
      await open(`mailto:${data.email}?subject=Hello Giriraj! Let's connect&body=Hi Giriraj,%0D%0A%0D%0AI came across your CLI business card and would love to connect!`);
      break;
      
    case 'phone':
      console.log(chalk.green(`📱 Call/WhatsApp: ${data.phone}`));
      console.log(chalk.dim('You can also reach out via WhatsApp for quick discussions!'));
      break;
      
    case 'resume':
      spinner.start('Opening resume PDF...');
      await new Promise(resolve => setTimeout(resolve, 800));
      spinner.succeed('Resume opened! 📄');
      await open('https://github.com/giriraj-parsewar/online-resume/blob/main/Giriraj_Parsewar_resume.pdf');
      break;
      
    case 'techstack':
      await showTechStack();
      break;
      
    case 'projects':
      await showProjects();
      break;
      
    case 'sysinfo':
      await showSystemInfo();
      break;
      
    case 'exit':
      console.clear();
      console.log(coolGradient('Thanks for visiting! 👋'));
      console.log(chalk.dim('Feel free to reach out anytime. Happy coding! 🚀'));
      process.exit(0);
  }
};

// Main application
const main = async () => {
  // Show loading animation
  await showLoadingAnimation('Initializing CLI Business Card', 1200);
  await showLoadingAnimation('Loading developer profile', 1000);
  await showLoadingAnimation('Preparing interactive experience', 800);
  
  // Display header
  displayHeader();
  
  // Display main card
  console.log(displayCard());
  
  // Interactive loop
  while (true) {
    console.log(chalk.bold.hex('#00f5ff')('\n🎯 Interactive Menu:'));
    
    const { action } = await inquirer.prompt([{
      type: 'list',
      name: 'action',
      message: 'What would you like to explore?',
      choices: menuOptions,
      pageSize: 10
    }]);
    
    await handleAction(action);
    
    if (action !== 'exit') {
      console.log(chalk.dim('\n' + '─'.repeat(80)));
    }
  }
};

// Handle process termination gracefully
process.on('SIGINT', () => {
  console.log('\n' + coolGradient('Thanks for visiting! 👋'));
  console.log(chalk.dim('Happy coding! 🚀'));
  process.exit(0);
});

// Start the application
main().catch(console.error);