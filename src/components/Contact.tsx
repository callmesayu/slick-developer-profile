
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
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
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let's Work <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Together</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next MERN stack project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with fellow developers and businesses. 
                Whether you need a full-stack MERN application or want to discuss a potential opportunity, 
                feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "alex.johnson@example.com",
                  href: "mailto:alex.johnson@example.com",
                  color: "text-blue-400"
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+1 (555) 123-4567",
                  href: "tel:+15551234567",
                  color: "text-green-400"
                },
                {
                  icon: MapPin,
                  title: "Location",
                  value: "San Francisco, CA",
                  href: "#",
                  color: "text-purple-400"
                }
              ].map((contact, index) => (
                <div 
                  key={contact.title}
                  className="flex items-center gap-6 p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center ${contact.color}`}>
                    <contact.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-400 text-sm mb-1">{contact.title}</div>
                    <a 
                      href={contact.href}
                      className="text-xl font-semibold text-white hover:text-blue-400 transition-colors duration-200"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-semibold text-white mb-4">Available for:</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'Full-stack Development',
                  'MERN Stack Projects',
                  'API Development',
                  'Database Design',
                  'Code Review',
                  'Technical Consulting'
                ].map((service) => (
                  <span 
                    key={service}
                    className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-600/30"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Card className="bg-slate-800 border-slate-700 animate-slide-in-right">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-blue-400" />
                Send a Message
              </CardTitle>
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
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-500"
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
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-500"
                  required
                />
                
                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-500 min-h-[120px]"
                  required
                />
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30"
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
