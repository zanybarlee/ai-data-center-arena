import React, { useState, useEffect, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X, Calendar, Clock } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface ScheduleDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScheduleDemoModal: React.FC<ScheduleDemoModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    date: '',
    time: '',
    attendees: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [visible, setVisible] = useState(false);

  // Handle opening and closing with animation
  useEffect(() => {
    if (isOpen) {
      // First make it visible
      setVisible(true);
    } else {
      // When closing, first animate out, then make invisible
      setTimeout(() => {
        setVisible(false);
      }, 300); // Match this with the CSS transition duration
    }
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      toast({
        title: "Missing information",
        description: "Please provide your name, email, preferred date and time.",
        variant: "destructive",
        duration: 8000,
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      // Success toast
      toast({
        title: "Demo scheduled!",
        description: `Your demo is scheduled for ${formData.date} at ${formData.time}. We'll send a confirmation email shortly.`,
        duration: 8000,
      });
      
      // Reset form and close
      setFormData({
        name: '',
        email: '',
        company: '',
        date: '',
        time: '',
        attendees: '',
        notes: '',
      });
      setIsSubmitting(false);
      onClose();
    }, 1500);
  };

  // Generate available dates (next 14 days, excluding weekends)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends (0 = Sunday, 6 = Saturday)
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        const formattedDate = date.toISOString().split('T')[0];
        dates.push(formattedDate);
      }
    }
    
    return dates;
  };

  // Generate available time slots (9 AM to 5 PM, hourly)
  const getAvailableTimeSlots = () => {
    const timeSlots = [];
    
    for (let hour = 9; hour <= 17; hour++) {
      const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
      const amPm = hour < 12 ? 'AM' : 'PM';
      timeSlots.push(`${formattedHour}:00 ${amPm}`);
    }
    
    return timeSlots;
  };

  // If not visible at all, don't render anything
  if (!visible && !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/80 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={() => !isSubmitting && onClose()}
      />
      
      {/* Modal */}
      <div 
        className={cn(
          "relative bg-background rounded-lg shadow-lg w-full max-w-md p-6 mx-4 transition-all duration-300 max-h-[90vh] overflow-y-auto",
          isOpen 
            ? "opacity-100 scale-100 translate-y-0" 
            : "opacity-0 scale-95 translate-y-4"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          onClick={() => !isSubmitting && onClose()}
          disabled={isSubmitting}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold leading-none tracking-tight">
            Schedule a Demo
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Book a personalized demonstration of the MCP platform with our experts.
          </p>
        </div>
        
        {/* Form */}
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
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="date" className="text-sm font-medium">Preferred Date *</label>
              <div className="relative">
                <select
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                  required
                >
                  <option value="">Select a date</option>
                  {getAvailableDates().map(date => (
                    <option key={date} value={date}>
                      {new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                    </option>
                  ))}
                </select>
                <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground pointer-events-none" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="time" className="text-sm font-medium">Preferred Time *</label>
              <div className="relative">
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                  required
                >
                  <option value="">Select a time</option>
                  {getAvailableTimeSlots().map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
                <Clock className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="attendees" className="text-sm font-medium">Number of Attendees</label>
            <Input 
              id="attendees"
              name="attendees"
              type="number"
              min="1"
              value={formData.attendees}
              onChange={handleChange}
              placeholder="How many people will attend?"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="notes" className="text-sm font-medium">Additional Notes</label>
            <Textarea 
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any specific topics or questions you'd like to cover?"
              rows={3}
            />
          </div>
          
          <div className="mt-6 flex justify-end">
            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Scheduling...' : 'Schedule Demo'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleDemoModal; 