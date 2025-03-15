import { BookOpen, BookText, GraduationCap, Building, Users, Newspaper, BriefcaseBusiness, Mail, Handshake, FileText, Bot } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-secondary py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center">
              <img src="/lovable-uploads/e8c71c07-95c6-4422-b1ef-0d6918430fb5.png" alt="Akira Logo" className="h-8" />
              <div className="ml-1 px-2 py-0.5 bg-primary/10 rounded text-primary text-xs font-medium">
            </div>
            </div>
            <p className="mt-4 text-sm text-foreground/70 max-w-xs">
              The premier marketplace for certified AI agents specialized in data center optimization and management.
            </p>
            <div className="mt-6 flex items-center space-x-4">
              {/* Social Links */}
              {[{
              name: 'Twitter',
              icon: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'
            }, {
              name: 'LinkedIn',
              icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
            }, {
              name: 'GitHub',
              icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'
            }].map(social => <a key={social.name} href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-foreground/5 text-foreground/70 hover:bg-primary/10 hover:text-primary transition-colors" aria-label={social.name}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={social.icon} />
                  </svg>
                </a>)}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Product */}
            <div>
              <h4 className="text-base font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                {['Agent Store', 'Certification Engine', 'Testing Sandbox', 'Deployment UI', 'Pricing'].map(link => <li key={link}>
                    <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>)}
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h4 className="text-base font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {[{
                name: 'Documentation',
                href: '/resources/documentation',
                icon: BookOpen
              }, {
                name: 'API Reference',
                href: '/resources/api-reference',
                icon: FileText
              }, {
                name: 'Case Studies',
                href: '/resources/case-studies',
                icon: BookText
              }, {
                name: 'Knowledge Base',
                href: '/resources/knowledge-base',
                icon: BookText
              }, {
                name: 'Tutorials',
                href: '/resources/tutorials',
                icon: GraduationCap
              }, {
                name: 'Design & Build Agents',
                href: '/resources/design-build-agents',
                icon: Bot
              }].map(link => <li key={link.name}>
                    <a href={link.href} className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center gap-1">
                      <link.icon className="w-3 h-3" />
                      <span>{link.name}</span>
                    </a>
                  </li>)}
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="text-base font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {[{
                name: 'About Us',
                href: '/company/about',
                icon: Building
              }, {
                name: 'Blog',
                href: '/company/blog',
                icon: Newspaper
              }, {
                name: 'Careers',
                href: '/company/careers',
                icon: BriefcaseBusiness
              }, {
                name: 'Contact Us',
                href: '/company/contact',
                icon: Mail
              }, {
                name: 'Partner Program',
                href: '/company/partners',
                icon: Handshake
              }].map(link => <li key={link.name}>
                    <a href={link.href} className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center gap-1">
                      <link.icon className="w-3 h-3" />
                      <span>{link.name}</span>
                    </a>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            &copy; {currentYear} Akira AI Agents Marketplace. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-6">
            {['Terms', 'Privacy', 'Cookies'].map(item => <a key={item} href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                {item}
              </a>)}
          </div>
        </div>
      </div>
    </footer>;
}
export default Footer;