"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Twitter, Linkedin, Instagram, ArrowUp, Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
    { icon: Github, href: "https://github.com/yourprofile", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/yourprofile", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/aenfinite/", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/yourprofile", label: "Instagram" },
];

export function Footer() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setMessage("");

        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage("Subscription successful! Check your email.");
                setEmail("");
            } else {
                setMessage(data.message || "Subscription failed.");
            }
        } catch (error) {
            setMessage("An error occurred. Please try again.");
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer ref={ref} className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6 py-12 relative z-10"
            >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            AeFinite
                        </h2>
                        <p className="text-gray-400">
                            Transforming digital experiences through innovative solutions and cutting-edge technology.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    <Icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {["Home", "Services", "Portfolio", "About Us", "Contact"].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors hover:underline">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-center space-x-2">
                                <Mail size={20} />
                                <a href="mailto:info@aenfinite.com" className="hover:text-white transition-colors">
                                    info@aenfinite.com
                                </a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Phone size={20} />
                                <a href="tel:+923179647967" className="hover:text-white transition-colors">
                                    +923179647967
                                </a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <MapPin size={20} />
                                <span>123 Innovation Street, Tech City</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Subscription */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                        <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
                        <form onSubmit={handleSubmit} className="flex space-x-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 text-black"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Button type="submit" className="bg-purple-500 hover:bg-purple-600">Subscribe</Button>
                        </form>
                        {message && <p className="mt-2 text-sm text-gray-300">{message}</p>}
                    </div>
                </div>

                {/* Scroll to Top Button */}
                <div className="flex justify-center mt-8">
                    <button onClick={scrollToTop} className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">
                        <ArrowUp size={24} className="text-white" />
                    </button>
                </div>
            </motion.div>
        </footer>
    );
}
