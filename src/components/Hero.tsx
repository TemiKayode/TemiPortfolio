
import React from 'react';
import { ArrowDown, Download, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black three-d-container">
            {/* 3D Terminal Grid Background */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                    transform: 'perspective(1000px) rotateX(60deg) translateZ(-200px)',
                    transformOrigin: 'center center'
                }}></div>
                <div className="absolute top-32 left-16 w-64 h-48 border border-green-500/20 rounded bg-black/30 blur-sm animate-float" style={{ transform: 'perspective(1000px) rotateY(-15deg) translateZ(-100px)' }}></div>
                <div className="absolute bottom-32 right-20 w-72 h-56 border border-green-500/20 rounded bg-black/30 blur-sm animate-float" style={{ animationDelay: '2s', transform: 'perspective(1000px) rotateY(15deg) translateZ(-100px)' }}></div>
                <div className="absolute top-1/2 left-1/4 w-48 h-36 border border-green-500/20 rounded bg-black/30 blur-sm animate-float" style={{ animationDelay: '4s', transform: 'perspective(1000px) rotateX(-10deg) translateZ(-150px)' }}></div>
            </div>

            <div className="container mx-auto px-6 text-center relative z-20 three-d-container">
                <div className="max-w-4xl mx-auto space-y-6 three-d-card">
                    {/* Terminal Window */}
                    <div className="terminal-window mx-auto max-w-3xl mb-8 animate-fade-in">
                        <div className="text-left space-y-2">
                            <div className="terminal-prompt mb-4">
                                <span className="text-green-500">temi@portfolio</span>:<span className="text-blue-400">~</span>$ <span className="terminal-command">whoami</span>
                            </div>
                            <div className="text-green-300 font-mono mb-4 text-lg">
                                <Typewriter
                                    options={{
                                        strings: [
                                            'Python Backend Engineer — Kafka · ArcFace · Qdrant · Docker · Kubernetes.',
                                            'Building intelligence-grade systems: biometric pipelines, ML platforms, security tooling.',
                                            'Supply chain security, anomaly detection, and real-time data pipelines at production scale.',
                                            'Open to remote roles worldwide and relocation opportunities.',
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 30,
                                        delay: 60,
                                    }}
                                />
                                <span className="terminal-cursor"></span>
                            </div>
                            <div className="terminal-prompt">
                                <span className="text-green-500">temi@portfolio</span>:<span className="text-blue-400">~</span>$ <span className="text-green-400">cat experience.txt</span>
                            </div>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="relative w-32 h-32 three-d-card">
                            <a href="#" className="block" aria-label="Profile link">
                                <div className="w-full h-full rounded-lg border-2 border-green-500/50 bg-black/50 hover:scale-105 transition-all duration-300" style={{
                                    boxShadow: '0 0 30px rgba(0, 255, 65, 0.3), inset 0 0 20px rgba(0, 255, 65, 0.1)',
                                    transform: 'perspective(1000px) rotateY(-10deg)'
                                }}>
                                    <img
                                        src="/images/profile.jpg"
                                        alt="Temi Kayode Profile"
                                        className="w-full h-full rounded-lg object-cover opacity-90"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Name */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-green-400 animate-glow font-mono" style={{
                        textShadow: '0 0 20px rgba(0, 255, 65, 0.8), 0 0 40px rgba(0, 255, 65, 0.5)',
                        transform: 'perspective(1000px) rotateX(5deg)'
                    }}>
                        &gt; TEMI
                    </h1>

                    {/* Role title */}
                    <p className="text-xl md:text-2xl text-green-300 font-mono mb-2" style={{
                        textShadow: '0 0 10px rgba(0, 255, 65, 0.4)'
                    }}>
                        Python Backend &amp; ML Engineer
                    </p>
                    <p className="text-sm text-green-500 font-mono mb-6">
                        Remote · Open to relocation · 5+ years building production systems
                    </p>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {[
                            '$ Python',
                            '$ Kafka',
                            '$ Machine Learning',
                            '$ Security Engineering',
                            '$ Docker & K8s',
                            '$ Qdrant / Vector DB',
                            '$ Go & Rust',
                            '$ Full Stack (React / Node.js)',
                        ].map((badge) => (
                            <div
                                key={badge}
                                className="bg-black/80 border border-green-500/30 text-green-400 px-5 py-2 rounded text-sm font-mono hover:scale-105 transition-transform three-d-card"
                                style={{ boxShadow: '0 0 15px rgba(0, 255, 65, 0.2)' }}
                            >
                                {badge}
                            </div>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
                        <a
                            href="https://wa.me/2347035401659"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-black/80 border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-500 hover:text-green-300 font-mono px-8 py-4 rounded transition-all duration-300 three-d-card"
                            style={{ boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)' }}
                            aria-label="Contact Temi Kayode via WhatsApp"
                        >
                            <MessageCircle className="mr-2" size={18} />
                            ./contact --whatsapp
                        </a>
                        <a
                            href="/images/TemiCV.pdf"
                            download
                            className="inline-flex items-center bg-black/80 border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-500 hover:text-green-300 font-mono px-8 py-4 rounded transition-all duration-300 three-d-card"
                            style={{ boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)' }}
                            aria-label="Download Temi Kayode's CV"
                        >
                            <Download className="mr-2" size={18} />
                            ./download --cv
                        </a>
                    </div>

                    <div className="animate-bounce">
                        <a href="#about" className="inline-flex flex-col items-center text-green-400 hover:text-green-300 transition-colors font-mono">
                            <ArrowDown size={24} />
                            <span className="text-sm mt-2">$ scroll --down</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
