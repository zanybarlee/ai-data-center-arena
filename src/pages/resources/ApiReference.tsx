
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet';

const ApiReference = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>API Reference | MCP AI Agents Marketplace</title>
        <meta name="description" content="Complete API reference for integrating with the MCP AI Agents platform" />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Resources
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">API Reference</h1>
            <p className="text-xl text-foreground/70 max-w-3xl">
              Complete reference documentation for the MCP API, enabling programmatic access to our platform.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2>API Overview</h2>
            <p>
              The MCP API provides RESTful endpoints for integrating AI agent functionality into your own applications and workflows. All API requests require authentication using an API key.
            </p>
            
            <h3>Base URL</h3>
            <pre><code>https://api.mcp-platform.com/v1</code></pre>
            
            <h3>Authentication</h3>
            <p>
              Include your API key in the header of all requests:
            </p>
            <pre><code>Authorization: Bearer YOUR_API_KEY</code></pre>
            
            <h2>Endpoints</h2>
            
            <h3>Agents</h3>
            <p>
              Endpoints for managing AI agents.
            </p>
            
            <pre><code>GET /agents - List all available agents
GET /agents/{agent_id} - Get details of a specific agent
POST /agents/{agent_id}/deploy - Deploy an agent to your environment
DELETE /agents/{agent_id} - Remove an agent from your environment</code></pre>
            
            <h3>Sandbox</h3>
            <p>
              Endpoints for testing agents in the sandbox environment.
            </p>
            
            <pre><code>POST /sandbox/create - Create a new sandbox environment
GET /sandbox/{sandbox_id} - Get details of a sandbox environment
POST /sandbox/{sandbox_id}/agents/{agent_id} - Add an agent to a sandbox
DELETE /sandbox/{sandbox_id} - Delete a sandbox environment</code></pre>
            
            <h3>Metrics</h3>
            <p>
              Endpoints for retrieving performance metrics.
            </p>
            
            <pre><code>GET /metrics/agents/{agent_id} - Get metrics for a specific agent
GET /metrics/environments/{env_id} - Get metrics for a specific environment</code></pre>
            
            <p>
              For detailed information about request parameters, response formats, and examples, please refer to the specific endpoint documentation.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApiReference;
