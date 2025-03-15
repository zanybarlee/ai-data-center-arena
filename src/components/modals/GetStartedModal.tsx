
import { useState, useEffect } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Rocket } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface GetStartedModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GetStartedModal({ open, onOpenChange }: GetStartedModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Reset form when modal closes
  useEffect(() => {
    if (!open) {
      setEmail("");
      setName("");
    }
    console.log("GetStartedModal useEffect - open state changed to:", open);
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast({
        title: "Missing information",
        description: "Please provide your name and email to get started.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Thanks for your interest!",
      description: "We'll contact you shortly with more information about our AI agents.",
    });
    
    setIsSubmitting(false);
    onOpenChange(false);
  };

  console.log("GetStartedModal rendered, open state:", open);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Rocket className="h-5 w-5 text-primary" />
            Get Started with MCP AI Agents
          </DialogTitle>
          <DialogDescription>
            Fill out the form below to get more information about our AI agents.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter your full name" 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="you@company.com" 
            />
          </div>
          <div className="pt-4 text-sm text-muted-foreground">
            By submitting this form, you agree to our Terms of Service and Privacy Policy.
          </div>
          <DialogFooter className="sm:justify-start">
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Get Started Now"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default GetStartedModal;
