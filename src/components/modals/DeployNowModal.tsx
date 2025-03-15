
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DeployNowModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName?: string;
}

export function DeployNowModal({ open, onOpenChange, productName }: DeployNowModalProps) {
  const [environment, setEnvironment] = useState("production");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptTerms) {
      toast({
        title: "Please accept terms",
        description: "You must accept the terms and conditions to deploy.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Deployment initiated!",
      description: `${productName || "Your agent"} is being deployed to ${environment}. You'll receive deployment details by email.`,
    });
    
    setIsSubmitting(false);
    onOpenChange(false);
    setAcceptTerms(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Upload className="h-5 w-5 text-primary" />
            Deploy {productName || "AI Agent"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="environment">Deployment Environment</Label>
            <Select value={environment} onValueChange={setEnvironment}>
              <SelectTrigger id="environment">
                <SelectValue placeholder="Select environment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="development">Development</SelectItem>
                <SelectItem value="staging">Staging</SelectItem>
                <SelectItem value="production">Production</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="apiKey">API Key (Optional)</Label>
            <Input 
              id="apiKey" 
              type="password" 
              placeholder="Enter your API key if you have one" 
            />
            <p className="text-xs text-muted-foreground">
              Leave blank to use your account's default credentials
            </p>
          </div>
          
          <div className="flex items-center space-x-2 pt-4">
            <Checkbox 
              id="terms" 
              checked={acceptTerms}
              onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
            />
            <Label htmlFor="terms" className="text-sm">
              I accept the deployment terms and understand the associated costs
            </Label>
          </div>
          
          <DialogFooter className="sm:justify-start">
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Deploying..." : "Deploy Now"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default DeployNowModal;
