// Personal and professional data - shared across // Filter function to only show visible items
// @ts-ignore
const filterVisible = (items) => {
    // @ts-ignore
    return items.filter(item => item.visible !== false);
};

export const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    // { href: '/projects', label: 'Projects' },
    { href: 'https://appwriters.dev/blog', label: 'Blog', target: '_blank' },
    { href: '/contact', label: 'Contact' }
];

export const personalInfo = {
    name: "Damodar Lohani",
    title: "Consultant for Scalable Systems & Process Automation",
    location: "Remote, Global",
    website: "https://dlohani.com.np",
    bio: "I help businesses systematize processes, build scalable projects, and integrate technology effectively. With 15+ years of experience, I consult on technical decisions, architect scalable solutions, and guide teams to create systems that drive measurable improvements.",
    experience: "15+",
    consulting_experience: "0+",
    projectsCompleted: "50+",
    systemsBuilt: "30+",
    clientsSatisfied: "20+"
};

export const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/lohanidamodar",
        icon: "github"
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/lohanidamodar",
        icon: "linkedin"
    },
    {
        name: "Twitter",
        url: "https://twitter.com/lohanidamodar",
        icon: "twitter"
    },
    {
        name: "YouTube",
        url: "https://www.youtube.com/@appwriters",
        icon: "youtube"
    },
    {
        name: "YouTube Nepali",
        url: "https://www.youtube.com/@LohaniDamodar",
        icon: "youtube"
    }
];

// Import page-specific data
import aboutData from './data/pages/about.json';
import contactData from './data/pages/contact.json';
import homeData from './data/pages/home.json';
import projectsData from './data/pages/projects.json';
import servicesData from './data/pages/services.json';


// Extract and filter data from the JSON files
export const benefits = filterVisible(homeData.whyWorkWithMe.benefits);
export const technologies = filterVisible(homeData.technologiesSection.categories);
export const projects = filterVisible(projectsData.projectsSection.projects);
export const clients = filterVisible(homeData.recentProjects.clients);
export const blogPosts = filterVisible(homeData.blogSection.posts);
export const testimonials = filterVisible(homeData.testimonialsSection.testimonials);
export const services = filterVisible(servicesData.servicesSection.services);
export const processSteps = filterVisible(servicesData.processSection.steps);
export const packages = filterVisible(servicesData.pricingSection.packages);
export const includedItems = filterVisible(servicesData.pricingSection.includedSection.items);
export const skills = filterVisible(aboutData.skillsSection.skills);
export const experience = filterVisible(aboutData.experienceSection.experience);
export const education = filterVisible(aboutData.educationSection.education);
export const achievements = filterVisible(aboutData.achievementsSection.achievements);
export const contactItems = filterVisible(contactData.contactInfo.items);
export const faqs = filterVisible(contactData.faqSection.faqs);

// Export imports for convenience
export {
    aboutData,
    contactData,
    homeData,
    projectsData,
    servicesData
};
