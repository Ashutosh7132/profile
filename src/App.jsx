import React, { useEffect, useState } from 'react'
import Starfield from './components/Starfield'
import ThemeToggle from './components/ThemeToggle'
import { motion } from 'framer-motion'
import { 
  FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaJava, FaReact, FaDocker, FaAws, FaDatabase, FaCode, 
  FaBriefcase, FaGraduationCap, FaCertificate, FaRocket,
  FaExternalLinkAlt, FaCalendarAlt, FaBuilding
} from 'react-icons/fa'
import { SiSpring, SiKubernetes, SiMicrosoftazure, SiPostgresql, SiOracle, SiApachekafka } from 'react-icons/si'

const resume = './assets/Ashutosh_Shriansh_Resume.pdf'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
}

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  
  useEffect(() => {
    document.documentElement.classList.remove('dark','light')
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const skills = {
    'Programming Languages': [
      { name: 'Java', icon: FaJava, level: 95 },
      { name: 'JavaScript', icon: FaCode, level: 85 },
      { name: 'TypeScript', icon: FaCode, level: 80 },
      { name: 'C++', icon: FaCode, level: 75 },
      { name: 'C', icon: FaCode, level: 70 }
    ],
    'Frameworks & Technologies': [
      { name: 'Spring Boot', icon: SiSpring, level: 95 },
      { name: 'React', icon: FaReact, level: 85 },
      { name: 'Angular', icon: FaCode, level: 80 },
      { name: 'Hibernate', icon: FaDatabase, level: 90 },
      { name: 'Struts', icon: FaCode, level: 75 }
    ],
    'Cloud & DevOps': [
      { name: 'Microsoft Azure', icon: SiMicrosoftazure, level: 90 },
      { name: 'Docker', icon: FaDocker, level: 85 },
      { name: 'Kubernetes', icon: SiKubernetes, level: 80 },
      { name: 'AWS', icon: FaAws, level: 75 },
      { name: 'ELK Stack', icon: FaDatabase, level: 80 }
    ],
    'Databases & Messaging': [
      { name: 'Oracle', icon: SiOracle, level: 90 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 85 },
      { name: 'MySQL', icon: FaDatabase, level: 85 },
      { name: 'Apache Kafka', icon: SiApachekafka, level: 90 },
      { name: 'IBM MQ', icon: FaDatabase, level: 80 }
    ]
  }

  const experiences = [
    {
      company: 'Maybank',
      location: 'Kuala Lumpur, Malaysia',
      position: 'Senior Java Backend Lead',
      duration: 'Oct 2023 - Present',
      description: 'Leading backend development for critical banking systems including Payment API, ASNB Onboarding, and Fraud Prevention systems.',
      achievements: [
        'Architected and delivered ALIPAY+ merchant payment aggregator handling 10K+ transactions daily',
        'Led MIGA+ digital gold platform integration in Maybank mobile app with 2M+ users',
        'Implemented SFDS fraud prevention system reducing fraudulent transactions by 40%',
        'Mentored team of 8 developers and improved code quality standards'
      ],
      technologies: ['Java 21', 'Spring Boot 3x', 'Oracle', 'Azure', 'Microservices']
    },
    {
      company: 'IBM',
      location: 'India',
      position: 'Senior Systems Analyst',
      duration: 'Mar 2022 - Jul 2023',
      description: 'Developed Azure-based microservices and enterprise integration solutions for Fortune 500 clients.',
      achievements: [
        'Designed and implemented Comet A&F system processing 50M+ records daily',
        'Built scalable Kafka-based data pipelines improving data processing efficiency by 60%',
        'Led cloud migration strategy for legacy systems to Azure platform',
        'Established DevOps practices reducing deployment time by 70%'
      ],
      technologies: ['Azure', 'Spring Boot', 'Kafka', 'Docker', 'Kubernetes']
    },
    {
      company: 'Cognizant',
      location: 'India',
      position: 'Senior Associate',
      duration: 'Sep 2021 - Mar 2022',
      description: 'Specialized in Alfresco content management and Spring Boot cloud integrations.',
      achievements: [
        'Developed cloud-native applications using Spring Boot and Azure services',
        'Integrated Alfresco ECM with various enterprise systems',
        'Improved system performance by 45% through optimization techniques',
        'Created comprehensive API documentation and testing frameworks'
      ],
      technologies: ['Alfresco', 'Spring Boot', 'Azure', 'REST APIs', 'Microservices']
    },
    {
      company: 'Conduent',
      location: 'India',
      position: 'Senior Software Engineer',
      duration: '2017 - 2021',
      description: 'Developed high-volume print processing systems and benefits management platforms.',
      achievements: [
        'Built scalable print processing systems handling 1M+ documents daily',
        'Designed benefits management system serving 500K+ beneficiaries',
        'Implemented automated testing frameworks improving code coverage to 95%',
        'Optimized database queries reducing response time by 50%'
      ],
      technologies: ['Java', 'Spring', 'Oracle', 'Hibernate', 'REST APIs']
    }
  ]

  const projects = [
    {
      title: 'Payment API (ALIPAY+)',
      description: 'Enterprise-grade merchant payment aggregator system processing thousands of transactions daily with real-time fraud detection and multi-currency support.',
      technologies: ['Java 21', 'Spring Boot', 'Oracle', 'HazelCast', 'Kafka'],
      features: ['Real-time processing', 'Multi-currency support', 'Fraud detection', 'High availability'],
      impact: '10K+ daily transactions, 99.9% uptime'
    },
    {
      title: 'MIGA+ Digital Gold Platform',
      description: 'Digital gold trading and investment platform integrated into Maybank mobile application, enabling users to buy, sell, and manage gold investments.',
      technologies: ['Java 8', 'Spring Boot', 'Microservices', 'Azure', 'PostgreSQL'],
      features: ['Real-time gold prices', 'Investment tracking', 'Mobile integration', 'Secure transactions'],
      impact: '2M+ active users, $50M+ in transactions'
    },
    {
      title: 'SFDS Fraud Prevention System',
      description: 'Advanced fraud detection and prevention system using machine learning algorithms and real-time transaction monitoring across multiple banking channels.',
      technologies: ['Java', 'Spring Boot', 'Outseer', 'Kafka', 'Azure ML'],
      features: ['ML-based detection', 'Real-time monitoring', 'Multi-channel support', 'Risk scoring'],
      impact: '90% reduction in fraud, 99% accuracy rate'
    },
    {
      title: 'Comet Enterprise Integration',
      description: 'Large-scale data integration platform for Abercrombie & Fitch, processing sales data from multiple channels with real-time analytics and reporting.',
      technologies: ['Azure', 'Spring Boot', 'Kafka', 'Docker', 'ELK Stack'],
      features: ['Real-time data processing', 'Multi-channel integration', 'Advanced analytics', 'Scalable architecture'],
      impact: '50M+ records processed daily, 60% efficiency improvement'
    }
  ]

  return (
    <div className='min-h-screen text-white relative overflow-x-hidden'>
      {/* Background */}
      <div className='canvas-wrap fixed inset-0 z-0' aria-hidden>
        <Starfield theme={theme} />
      </div>

      {/* Main Content */}
      <div className='relative z-10'>
        {/* Navigation Header */}
        <motion.header 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className='sticky top-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10'
        >
          <div className='max-w-7xl mx-auto px-6 py-4'>
            <div className='flex items-center justify-between'>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className='flex items-center space-x-2'
              >
                <div className='w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-sm font-bold'>
                  AS
                </div>
                <h1 className='text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>
                  Ashutosh Shriansh
                </h1>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className='flex items-center gap-3'
              >
                <a 
                  href={resume} 
                  download 
                  className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                >
                  <FaDownload className='text-sm' /> Resume
                </a>
                <a 
                  href='https://github.com/Ashutosh7132' 
                  target='_blank' 
                  rel='noreferrer' 
                  className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm'
                >
                  <FaGithub className='text-sm' /> GitHub
                </a>
                <ThemeToggle theme={theme} setTheme={setTheme} />
              </motion.div>
            </div>
          </div>
        </motion.header>

        {/* Hero Section */}
        <section className='min-h-screen flex items-center justify-center px-6'>
          <div className='max-w-7xl mx-auto'>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'
            >
              {/* Hero Content */}
              <div className='space-y-8'>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-4'>
                    <FaRocket className='text-xs' /> Available for new opportunities
                  </div>
                  <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold leading-tight'>
                    <span className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                      Senior Java
                    </span>
                    <br />
                    <span className='bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                      Backend Lead
                    </span>
                  </h1>
                </motion.div>

                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className='text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl'
                >
                  Building <span className='text-indigo-400 font-semibold'>scalable</span>, <span className='text-purple-400 font-semibold'>secure</span>, and <span className='text-pink-400 font-semibold'>high-performance</span> enterprise solutions with <span className='font-bold text-white'>11+ years</span> of expertise in Java, Spring Boot, Microservices, and Azure Cloud.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className='flex flex-wrap gap-4'
                >
                  <a 
                    href='mailto:ashutosh104shriansh@outlook.com' 
                    className='inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1'
                  >
                    <FaEnvelope /> Let's Connect
                  </a>
                  <a 
                    href={resume} 
                    download 
                    className='inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 font-semibold text-lg transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/30'
                  >
                    <FaDownload /> Download Resume
                  </a>
                </motion.div>

                {/* Quick Stats */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className='grid grid-cols-3 gap-6 pt-8'
                >
                  <div className='text-center'>
                    <div className='text-3xl font-bold text-indigo-400'>11+</div>
                    <div className='text-gray-400 text-sm'>Years Experience</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold text-purple-400'>50+</div>
                    <div className='text-gray-400 text-sm'>Projects Delivered</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold text-pink-400'>2M+</div>
                    <div className='text-gray-400 text-sm'>Users Served</div>
                  </div>
                </motion.div>
              </div>

              {/* Hero Image/Avatar */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className='flex justify-center lg:justify-end'
              >
                <div className='relative'>
                  <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-2xl opacity-20 scale-110'></div>
                  <img 
                    src='./assets/Ashutosh Shriansh.png' 
                    alt='Ashutosh Shriansh' 
                    className='relative w-80 h-80 lg:w-96 lg:h-96 rounded-full border-4 border-gradient-to-r from-indigo-400 to-purple-400 shadow-2xl object-cover'
                  />
                  {/* Floating badges */}
                  <div className='absolute -top-4 -right-4 p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-xl'>
                    <FaJava className='text-2xl text-white' />
                  </div>
                  <div className='absolute -bottom-4 -left-4 p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-xl'>
                    <SiSpring className='text-2xl text-white' />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <motion.section 
          {...fadeInUp}
          className='py-20 px-6'
        >
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'
              >
                About Me
              </motion.h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '5rem' }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className='h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full'
              ></motion.div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className='space-y-6'
              >
                <p className='text-lg text-gray-300 leading-relaxed'>
                  I'm a passionate Senior Java Backend Lead with <span className='text-indigo-400 font-semibold'>11+ years</span> of experience in building enterprise-grade solutions. My journey in software development has been driven by a constant pursuit of excellence and innovation.
                </p>
                <p className='text-lg text-gray-300 leading-relaxed'>
                  Currently based in <span className='text-purple-400 font-semibold'>Kuala Lumpur, Malaysia</span>, I specialize in developing scalable backend systems, microservices architecture, and cloud-native applications. My expertise spans across banking, payment systems, fraud prevention, and large-scale enterprise integrations.
                </p>
                <p className='text-lg text-gray-300 leading-relaxed'>
                  I believe in writing clean, maintainable code and mentoring the next generation of developers. When I'm not coding, I enjoy exploring new technologies, contributing to open source projects, and sharing my knowledge with the tech community.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className='grid grid-cols-2 gap-6'
              >
                <div className='p-6 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 backdrop-blur-sm'>
                  <FaBriefcase className='text-3xl text-indigo-400 mb-4' />
                  <div className='text-2xl font-bold text-white mb-2'>11+</div>
                  <div className='text-gray-300'>Years of Experience</div>
                </div>
                <div className='p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm'>
                  <FaRocket className='text-3xl text-purple-400 mb-4' />
                  <div className='text-2xl font-bold text-white mb-2'>50+</div>
                  <div className='text-gray-300'>Projects Completed</div>
                </div>
                <div className='p-6 rounded-2xl bg-gradient-to-br from-pink-500/20 to-red-500/20 border border-pink-500/30 backdrop-blur-sm'>
                  <FaBuilding className='text-3xl text-pink-400 mb-4' />
                  <div className='text-2xl font-bold text-white mb-2'>7</div>
                  <div className='text-gray-300'>Companies</div>
                </div>
                <div className='p-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500/30 backdrop-blur-sm'>
                  <FaCertificate className='text-3xl text-green-400 mb-4' />
                  <div className='text-2xl font-bold text-white mb-2'>2M+</div>
                  <div className='text-gray-300'>Users Impacted</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          className='py-20 px-6'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
              >
                Technical Skills
              </motion.h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '5rem' }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className='h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full'
              ></motion.div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.2 }}
                  className='p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300'
                >
                  <h3 className='text-2xl font-bold mb-6 text-white'>{category}</h3>
                  <div className='space-y-4'>
                    {skillList.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: categoryIndex * 0.2 + index * 0.1 }}
                        className='flex items-center justify-between'
                      >
                        <div className='flex items-center gap-3'>
                          <skill.icon className='text-2xl text-indigo-400' />
                          <span className='text-gray-300 font-medium'>{skill.name}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <div className='w-24 h-2 bg-gray-700 rounded-full overflow-hidden'>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ delay: categoryIndex * 0.2 + index * 0.1 + 0.3, duration: 1 }}
                              className='h-full bg-gradient-to-r from-indigo-500 to-purple-500'
                            ></motion.div>
                          </div>
                          <span className='text-xs text-gray-400 font-medium min-w-[35px]'>{skill.level}%</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          className='py-20 px-6'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent'
              >
                Professional Experience
              </motion.h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '5rem' }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className='h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto rounded-full'
              ></motion.div>
            </div>

            <div className='relative'>
              {/* Timeline line */}
              <div className='absolute left-8 md:left-1/2 transform md:-translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-pink-500 to-transparent'></div>
              
              <div className='space-y-12'>
                {experiences.map((exp, index) => (
                  <motion.div
                    key={`${exp.company}-${exp.duration}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className={`relative flex flex-col md:flex-row items-start gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className='absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full border-4 border-black z-10'></div>
                    
                    {/* Experience card */}
                    <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className='p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-2'>
                        <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                          <div>
                            <h3 className='text-2xl font-bold text-white mb-1'>{exp.position}</h3>
                            <div className='flex items-center gap-2 text-indigo-400 font-semibold mb-2'>
                              <FaBuilding className='text-sm' />
                              <span>{exp.company}</span>
                              <span className='text-gray-500'>•</span>
                              <FaMapMarkerAlt className='text-sm' />
                              <span className='text-gray-300'>{exp.location}</span>
                            </div>
                          </div>
                          <div className='flex items-center gap-2 text-pink-400 font-medium'>
                            <FaCalendarAlt className='text-sm' />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                        
                        <p className='text-gray-300 mb-6 leading-relaxed'>{exp.description}</p>
                        
                        <div className='mb-6'>
                          <h4 className='text-lg font-semibold text-white mb-3'>Key Achievements:</h4>
                          <ul className='space-y-2'>
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className='flex items-start gap-2 text-gray-300'>
                                <div className='w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2 flex-shrink-0'></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className='text-lg font-semibold text-white mb-3'>Technologies:</h4>
                          <div className='flex flex-wrap gap-2'>
                            {exp.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex} 
                                className='px-3 py-1 text-sm bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-full text-indigo-300 font-medium'
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          className='py-20 px-6'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent'
              >
                Featured Projects
              </motion.h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '5rem' }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className='h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full'
              ></motion.div>
              <p className='text-gray-400 text-lg mt-6 max-w-3xl mx-auto'>
                Here are some of the key projects I've worked on, showcasing my expertise in enterprise-scale applications and modern technologies.
              </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className='group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-2'
                >
                  <div className='flex items-start justify-between mb-4'>
                    <h3 className='text-2xl font-bold text-white group-hover:text-green-400 transition-colors'>
                      {project.title}
                    </h3>
                    <FaExternalLinkAlt className='text-gray-400 group-hover:text-green-400 transition-colors' />
                  </div>
                  
                  <p className='text-gray-300 mb-6 leading-relaxed'>{project.description}</p>
                  
                  <div className='mb-6'>
                    <h4 className='text-lg font-semibold text-white mb-3'>Key Features:</h4>
                    <div className='grid grid-cols-2 gap-2'>
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className='flex items-center gap-2 text-gray-300'>
                          <div className='w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full'></div>
                          <span className='text-sm'>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className='mb-6'>
                    <h4 className='text-lg font-semibold text-white mb-3'>Technologies:</h4>
                    <div className='flex flex-wrap gap-2'>
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className='px-3 py-1 text-sm bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-full text-green-300 font-medium'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className='p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20'>
                    <div className='text-sm text-gray-400 mb-1'>Impact:</div>
                    <div className='text-green-400 font-semibold'>{project.impact}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          className='py-20 px-6'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent'
              >
                Let's Connect
              </motion.h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '5rem' }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className='h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full'
              ></motion.div>
              <p className='text-gray-400 text-lg mt-6 max-w-3xl mx-auto'>
                I'm always open to discussing new opportunities, collaboration, or just having a conversation about technology. Let's build something amazing together!
              </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12'>
              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className='space-y-6'
              >
                <div className='flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors'>
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center'>
                    <FaEnvelope className='text-white' />
                  </div>
                  <div>
                    <div className='text-gray-400 text-sm'>Email</div>
                    <a href='mailto:ashutosh104shriansh@outlook.com' className='text-white hover:text-blue-400 transition-colors'>
                      ashutosh104shriansh@outlook.com
                    </a>
                  </div>
                </div>
                
                <div className='flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors'>
                  <div className='w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center'>
                    <FaPhone className='text-white' />
                  </div>
                  <div>
                    <div className='text-gray-400 text-sm'>Phone</div>
                    <div className='text-white'>
                      <div>+91-8587097968</div>
                      <div>+60-102060548</div>
                    </div>
                  </div>
                </div>
                
                <div className='flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors'>
                  <div className='w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center'>
                    <FaMapMarkerAlt className='text-white' />
                  </div>
                  <div>
                    <div className='text-gray-400 text-sm'>Location</div>
                    <div className='text-white'>Kuala Lumpur, Malaysia</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Social Links */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className='space-y-6'
              >
                <a 
                  href='https://github.com/Ashutosh7132' 
                  target='_blank' 
                  rel='noreferrer' 
                  className='flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group'
                >
                  <div className='w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center group-hover:from-gray-600 group-hover:to-gray-800 transition-all'>
                    <FaGithub className='text-white text-xl' />
                  </div>
                  <div>
                    <div className='text-gray-400 text-sm'>GitHub</div>
                    <div className='text-white group-hover:text-blue-400 transition-colors'>github.com/Ashutosh7132</div>
                  </div>
                  <FaExternalLinkAlt className='text-gray-400 group-hover:text-blue-400 transition-colors ml-auto' />
                </a>
                
                <a 
                  href='https://www.linkedin.com/in/ashutosh-shriansh-ba1586264/' 
                  target='_blank' 
                  rel='noreferrer' 
                  className='flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group'
                >
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center group-hover:from-blue-500 group-hover:to-blue-700 transition-all'>
                    <FaLinkedin className='text-white text-xl' />
                  </div>
                  <div>
                    <div className='text-gray-400 text-sm'>LinkedIn</div>
                    <div className='text-white group-hover:text-blue-400 transition-colors'>ashutosh-shriansh</div>
                  </div>
                  <FaExternalLinkAlt className='text-gray-400 group-hover:text-blue-400 transition-colors ml-auto' />
                </a>
                
                <a 
                  href={resume} 
                  download 
                  className='flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 group'
                >
                  <div className='w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center'>
                    <FaDownload className='text-white' />
                  </div>
                  <div>
                    <div className='text-gray-400 text-sm'>Resume</div>
                    <div className='text-white group-hover:text-indigo-400 transition-colors'>Download PDF</div>
                  </div>
                </a>
              </motion.div>
              
              {/* Availability */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className='space-y-6'
              >
                <div className='p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30'>
                  <div className='flex items-center gap-2 mb-4'>
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                    <span className='text-green-400 font-semibold'>Available for Work</span>
                  </div>
                  <h4 className='text-xl font-bold text-white mb-4'>Open to:</h4>
                  <div className='space-y-3'>
                    <div className='flex items-center gap-2 text-gray-300'>
                      <div className='w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full'></div>
                      <span>Full-time Opportunities</span>
                    </div>
                    <div className='flex items-center gap-2 text-gray-300'>
                      <div className='w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full'></div>
                      <span>Consulting Projects</span>
                    </div>
                    <div className='flex items-center gap-2 text-gray-300'>
                      <div className='w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full'></div>
                      <span>Technical Discussions</span>
                    </div>
                    <div className='flex items-center gap-2 text-gray-300'>
                      <div className='w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full'></div>
                      <span>Mentoring</span>
                    </div>
                  </div>
                </div>
                
                <div className='p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/30'>
                  <h4 className='text-xl font-bold text-white mb-4'>Response Time</h4>
                  <div className='space-y-3 text-gray-300'>
                    <div className='flex justify-between'>
                      <span>Email</span>
                      <span className='text-blue-400'>Within 24h</span>
                    </div>
                    <div className='flex justify-between'>
                      <span>LinkedIn</span>
                      <span className='text-blue-400'>Same day</span>
                    </div>
                    <div className='flex justify-between'>
                      <span>Phone</span>
                      <span className='text-blue-400'>By appointment</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className='text-center'
            >
              <div className='p-8 rounded-2xl bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 backdrop-blur-sm'>
                <h3 className='text-3xl font-bold text-white mb-4'>Ready to Start a Project?</h3>
                <p className='text-gray-300 text-lg mb-8 max-w-2xl mx-auto'>
                  Whether you need a robust backend system, cloud architecture, or technical consultation, I'm here to help bring your vision to life.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <a 
                    href='mailto:ashutosh104shriansh@outlook.com?subject=Project Inquiry' 
                    className='inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1'
                  >
                    <FaEnvelope /> Start a Conversation
                  </a>
                  <a 
                    href='https://www.linkedin.com/in/ashutosh-shriansh-ba1586264/' 
                    target='_blank' 
                    rel='noreferrer' 
                    className='inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 font-semibold text-lg transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/30'
                  >
                    <FaLinkedin /> Connect on LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className='py-12 px-6 border-t border-white/10'>
          <div className='max-w-7xl mx-auto text-center'>
            <div className='flex items-center justify-center gap-2 mb-4'>
              <div className='w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-sm font-bold'>
                AS
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>
                Ashutosh Shriansh
              </span>
            </div>
            <p className='text-gray-400 mb-4'>
              Senior Java Backend Lead • Building scalable enterprise solutions
            </p>
            <div className='flex items-center justify-center gap-6 mb-6'>
              <a href='mailto:ashutosh104shriansh@outlook.com' className='text-gray-400 hover:text-indigo-400 transition-colors'>
                <FaEnvelope className='text-xl' />
              </a>
              <a href='https://github.com/Ashutosh7132' target='_blank' rel='noreferrer' className='text-gray-400 hover:text-indigo-400 transition-colors'>
                <FaGithub className='text-xl' />
              </a>
              <a href='https://www.linkedin.com/in/ashutosh-shriansh-ba1586264/' target='_blank' rel='noreferrer' className='text-gray-400 hover:text-indigo-400 transition-colors'>
                <FaLinkedin className='text-xl' />
              </a>
            </div>
            <div className='text-gray-500 text-sm'>
              © {new Date().getFullYear()} Ashutosh Shriansh. Built with React + Tailwind CSS + Framer Motion.
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
