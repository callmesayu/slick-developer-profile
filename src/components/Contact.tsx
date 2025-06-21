
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Contact</h2>
          <p className="text-purple-200 mb-8 leading-relaxed">
            I'm always interested in hearing about new opportunities and interesting projects. 
            Let's create something amazing together.
          </p>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <div className="space-y-4">
              <div>
                <p className="text-purple-300 text-sm mb-1">Email</p>
                <p className="text-white font-medium">alex.johnson@example.com</p>
              </div>
              <div>
                <p className="text-purple-300 text-sm mb-1">Location</p>
                <p className="text-white font-medium">San Francisco, CA</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl">
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Mail, href: "#" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href}
                className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-purple-200 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
