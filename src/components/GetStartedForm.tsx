
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { toast } from '@/hooks/use-toast';

interface GetStartedFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetStartedForm: React.FC<GetStartedFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing information",
        description: "Please provide your name and email.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      // Success toast
      toast({
        title: "Request submitted!",
        description: "We'll be in touch with you shortly.",
      });
      
      // Reset form and close
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="sm:max-w-md">
        <SheetHeader className="mb-4">
          <SheetTitle>Get Started with MCP</SheetTitle>
          <SheetDescription>
            Fill out this form and we'll contact you to help you transform your data center operations.
          </SheetDescription>
        </SheetHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Name *</label>
            <Input 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email *</label>
            <Input 
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium">Company</label>
            <Input 
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company name"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <Textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your data center needs"
              rows={4}
            />
          </div>
          
          <SheetFooter className="mt-6">
            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default GetStartedForm;
