
import React from 'react';
import { ArrowDown, Download, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* Floating colored circles */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-32 left-16 w-16 h-16 bg-blue-500/20 rounded-full animate-float blur-sm"></div>
                <div className="absolute top-64 right-20 w-12 h-12 bg-purple-500/20 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-green-500/20 rounded-full animate-float blur-sm" style={{ animationDelay: '4s' }}></div>
                <div className="absolute top-1/2 right-16 w-14 h-14 bg-pink-500/20 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-48 right-1/3 w-10 h-10 bg-cyan-500/20 rounded-full animate-float blur-sm" style={{ animationDelay: '3s' }}></div>
                <div className="absolute top-48 left-1/3 w-8 h-8 bg-yellow-500/20 rounded-full animate-float blur-sm" style={{ animationDelay: '5s' }}></div>
            </div>

            <div className="container mx-auto px-6 text-center relative z-20">
                <div className="max-w-4xl mx-auto space-y-4">
                    {/* Profile Images/}
                    <div className="flex flex-col items-center">
                        <div className="relative w-32 h-32">
                            <a href="#" className="block" aria-label="Profile link">
                                <div className="w-full h-full rounded-full bg-[var(--profile-gradient)] p-1 hover:scale-105 transition-all duration-300">
                                    <img
                                        src="/images/profile.jpg"
                                        alt="Temi Kayode Profile"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>

                    </div>
                    {/* Name */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white animate-fade-in">
                        Temi
                    </h1>

                    {/* Description */}
                    <div className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        <Typewriter
                            options={{
                                strings: [
                                    '5+ years Full Stack Developer specializing in React, Node.js and modern web technologies.',
                                    'Building scalable solutions with focus on user experience and performance.'
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>

                    {/* Achievement Badges */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 px-6 py-3 rounded-full text-sm font-medium border border-yellow-500/30 hover:scale-105 transition-transform backdrop-blur-sm">
                            ⭐ 5+ Years Experience
                        </div>
                        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 px-6 py-3 rounded-full text-sm font-medium border border-blue-500/30 hover:scale-105 transition-transform backdrop-blur-sm">
                            ⚡ React & Node.js
                        </div>
                        <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 text-green-400 px-6 py-3 rounded-full text-sm font-medium border border-green-500/30 hover:scale-105 transition-transform backdrop-blur-sm">
                            🤖 AI Automation
                        </div>
                        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 px-6 py-3 rounded-full text-sm font-medium border border-purple-500/30 hover:scale-105 transition-transform backdrop-blur-sm">
                            👥 Full Stack Expert
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
                        <a
                            href="https://wa.me/2347035401659"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-[var(--whatsapp-gradient)] hover:scale-105 transition-all duration-300 text-white font-semibold px-8 py-4 rounded-full shadow-lg border-0 text-base h-12"
                            aria-label="Contact Temi Kayode via WhatsApp"
                        >
                            <MessageCircle className="mr-2" size={18} />
                            WhatsApp Contact
                        </a>
                        <a
                            href="/images/TemiCV.pdf"
                            download
                            className="inline-flex items-center bg-[var(--cv-gradient)] hover:scale-105 transition-all duration-300 text-white font-semibold px-8 py-4 rounded-full shadow-lg border-0 text-base h-12"
                            aria-label="Download Temi Kayode's CV"
                        >
                            <Download className="mr-2" size={18} />
                            Download CV
                        </a>
                    </div>
                    {/* Discover More */}
                    <div className="animate-bounce">
                        <a href="#about" className="inline-flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors">
                            <ArrowDown size={24} />
                            <span className="text-sm mt-2">Discover More</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
