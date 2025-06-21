
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together 
            to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "alex.johnson@example.com",
                  href: "mailto:alex.johnson@example.com"
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+1 (555) 123-4567",
                  href: "tel:+15551234567"
                },
                {
                  icon: MapPin,
                  title: "Location",
                  value: "San Francisco, CA",
                  href: "#"
                }
              ].map((contact, index) => (
                <div 
                  key={contact.title}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/30 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-electric-blue/10 rounded-xl flex items-center justify-center">
                    <contact.icon className="h-6 w-6 text-electric-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-sm text-muted-foreground">{contact.title}</div>
                    <a 
                      href={contact.href}
                      className="text-lg font-semibold hover:text-electric-blue transition-colors duration-200"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-white/50 backdrop-blur-sm border-white/20 animate-slide-in-right">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/50 border-white/20"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/50 border-white/20"
                      required
                    />
                  </div>
                </div>
                
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-white/50 border-white/20"
                  required
                />
                
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-white/50 border-white/20 min-h-[120px]"
                  required
                />
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-electric-blue/30"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
