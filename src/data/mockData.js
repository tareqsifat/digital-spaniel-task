import { faker } from '@faker-js/faker';

// Generate testimonials data
export const generateTestimonials = () => {
  return Array.from({ length: 5 }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    company: faker.company.name(),
    position: faker.person.jobTitle(),
    content: faker.lorem.paragraph(3),
    avatar: faker.image.avatar(),
    rating: faker.number.int({ min: 4, max: 5 })
  }));
};

// Generate case studies data
export const generateCaseStudies = () => {
  return Array.from({ length: 6 }, () => ({
    id: faker.string.uuid(),
    title: faker.company.catchPhrase(),
    description: faker.lorem.paragraph(2),
    image: faker.image.urlPicsumPhotos({ width: 600, height: 400 }),
    category: faker.helpers.arrayElement(['Brand Strategy', 'Digital Marketing', 'Web Development', 'UI/UX Design']),
    client: faker.company.name(),
    year: faker.date.recent({ days: 365 }).getFullYear(),
    tags: faker.helpers.arrayElements(['Strategy', 'Design', 'Development', 'Marketing', 'Branding'], { min: 2, max: 4 })
  }));
};

// Generate projects data
export const generateProjects = () => {
  return Array.from({ length: 8 }, () => ({
    id: faker.string.uuid(),
    title: faker.lorem.words(3),
    description: faker.lorem.paragraph(1),
    image: faker.image.urlPicsumPhotos({ width: 500, height: 350 }),
    category: faker.helpers.arrayElement(['Web Design', 'Mobile App', 'Branding', 'E-commerce']),
    technologies: faker.helpers.arrayElements(['React', 'Vue', 'Angular', 'Node.js', 'Python', 'PHP'], { min: 2, max: 4 }),
    link: faker.internet.url()
  }));
};

// Generate services data
export const generateServices = () => {
  return [
    {
      id: faker.string.uuid(),
      title: 'Brand Strategy',
      description: 'Comprehensive brand development and positioning strategies that resonate with your target audience.',
      icon: 'target',
      features: ['Brand Identity', 'Market Research', 'Competitive Analysis', 'Brand Guidelines']
    },
    {
      id: faker.string.uuid(),
      title: 'Digital Marketing',
      description: 'Data-driven digital marketing campaigns that drive engagement and conversions.',
      icon: 'trending-up',
      features: ['SEO Optimization', 'Social Media', 'Content Marketing', 'PPC Campaigns']
    },
    {
      id: faker.string.uuid(),
      title: 'Web Development',
      description: 'Custom web solutions built with modern technologies and best practices.',
      icon: 'code',
      features: ['Responsive Design', 'E-commerce', 'CMS Development', 'API Integration']
    },
    {
      id: faker.string.uuid(),
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create meaningful and intuitive experiences.',
      icon: 'palette',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
    }
  ];
};

// Generate team members data
export const generateTeamMembers = () => {
  return Array.from({ length: 8 }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    position: faker.person.jobTitle(),
    bio: faker.lorem.paragraph(1),
    image: faker.image.avatar(),
    social: {
      linkedin: faker.internet.url(),
      twitter: faker.internet.url(),
      email: faker.internet.email()
    }
  }));
};

// Generate gallery images for "What are we all about?" section
export const generateGalleryImages = () => {
  return Array.from({ length: 12 }, () => ({
    id: faker.string.uuid(),
    url: faker.image.urlPicsumPhotos({ width: 400, height: faker.number.int({ min: 300, max: 600 }) }),
    alt: faker.lorem.words(3),
    category: faker.helpers.arrayElement(['Office', 'Team', 'Projects', 'Events'])
  }));
};

// Initialize all mock data
export const mockData = {
  testimonials: generateTestimonials(),
  caseStudies: generateCaseStudies(),
  projects: generateProjects(),
  services: generateServices(),
  teamMembers: generateTeamMembers(),
  galleryImages: generateGalleryImages()
};

