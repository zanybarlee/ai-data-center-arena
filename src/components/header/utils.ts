
// Helper functions to get descriptions for menu items
export function getResourceDescription(title: string): string {
  switch (title) {
    case 'Documentation':
      return 'Comprehensive guides and reference documentation for MCP platform.';
    case 'API Reference':
      return 'Detailed API documentation for integrating with MCP services.';
    case 'Case Studies':
      return 'Real-world examples of how organizations use MCP to transform their data centers.';
    case 'Knowledge Base':
      return 'Articles and solutions to common questions about MCP platform.';
    case 'Tutorials':
      return 'Step-by-step guides to help you get started with MCP features.';
    default:
      return '';
  }
}

export function getCompanyDescription(title: string): string {
  switch (title) {
    case 'About Us':
      return 'Learn about our mission, vision, and the team behind MCP.';
    case 'Blog':
      return 'Latest news, updates, and insights from the MCP team.';
    case 'Careers':
      return 'Join our team and help shape the future of AI in data centers.';
    case 'Contact Us':
      return 'Get in touch with our sales, support, or partnership teams.';
    case 'Partner Program':
      return 'Collaborate with MCP to deliver innovative solutions to customers.';
    default:
      return '';
  }
}
