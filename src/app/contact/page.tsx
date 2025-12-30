import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center min-h-[70vh] bg-[rgb(255, 251, 244)]">
      <h1>Send us a message</h1>
      <form
        action="https://formspree.io/f/mnjqggjl"
        method="POST"
        className="w-full max-w-md space-y-6 p-6"
      >
        <div className="space-y-2">
          <Label htmlFor="email">Your email:</Label>
          <Input 
            type="email" 
            id="email"
            name="email" 
            required 
            placeholder="your.email@example.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Your message:</Label>
          <Textarea 
            id="message"
            name="message" 
            required 
            placeholder="Type your message here..."
            className="min-h-[150px]"
          />
        </div>
        <Button type="submit" className="w-full">Send</Button>
      </form>
    </div>
  );
}
