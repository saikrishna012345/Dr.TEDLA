import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Linkedin, BookOpen, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set your EmailJS service ID, template ID, and public user ID here
    const serviceID = 'service_m08mdyg';  // Your EmailJS Service ID
    const templateID = 'template_7o9ff5q';  // Your EmailJS Template ID
    const userID = '2Ro5GB3snccfdWDgZ';  // Your EmailJS Public Key (User ID)

    // Send form data to EmailJS using the sendForm method
    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
        console.log(result.text);
        setStatus('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        setStatus('Something went wrong. Please try again.');
      });

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="py-20 px-4 bg-navy text-white" id="contact">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <a href="mailto:jtedla@kku.edu.sa" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Mail className="w-5 h-5" />
                <span>jtedla@kku.edu.sa</span>
              </a>
              <a href="mailto:jayashankertedla@gmail.com" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Mail className="w-5 h-5" />
                <span>jayashankertedla@gmail.com </span>
              </a>
              <a href="tel:+966 538901083" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Phone className="w-5 h-5" />
                <span>+966 538901083</span>
              </a>
              <a href="tel:+91 7674897379" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Phone className="w-5 h-5" />
                <span>+91 7674897379</span>
              </a>
            </div>
            <div className="flex gap-4 pt-6">
              <a href="https://scholar.google.com/citations?user=vWc27OgAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-white hover:bg-white hover:text-navy text-black">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Google Scholar
                </Button>
              </a>
            </div>
          </div>

          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-white/20 border border-white/30 focus:outline-none focus:border-gold"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-white/20 border border-white/30 focus:outline-none focus:border-gold"
                  required
                />
              </div>

              <div>
                <label className="block mb-2">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-white/20 border border-white/30 focus:outline-none focus:border-gold"
                  required
                ></textarea>
              </div>

              <Button className="w-full bg-gold hover:bg-gold/90 text-navy" type="submit">
                Send Message
              </Button>
            </form>

            {status && (
              <div className="mt-4 text-center text-white">
                <p>{status}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
