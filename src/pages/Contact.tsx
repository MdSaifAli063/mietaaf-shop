import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  subject: z.string().trim().min(5, { message: "Subject must be at least 5 characters" }).max(200),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(1000),
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setLoading(true);

    const whatsappNumber = "1234567890"; // Replace with actual WhatsApp number
    const message = encodeURIComponent(
      `New Contact Form Submission\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    
    toast.success("Redirecting to WhatsApp...");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 animate-fade-in-up">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-elegant hover-scale transition-smooth">
            <CardContent className="pt-6 text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">contact@mietaaf.com</p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant hover-scale transition-smooth">
            <CardContent className="pt-6 text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+1 (234) 567-8900</p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant hover-scale transition-smooth">
            <CardContent className="pt-6 text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">123 Fashion Street, NY 10001</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto shadow-elegant">
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you via WhatsApp
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What is this regarding?"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={loading}
                  className={errors.subject ? "border-destructive" : ""}
                />
                {errors.subject && (
                  <p className="text-sm text-destructive">{errors.subject}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={loading}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send via WhatsApp"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
