"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, User, Bot, ExternalLink, ChevronRight, MessageCircle } from "lucide-react";
import { chatbotData, ChatNode, ChatOption } from "@/lib/chatbot-data";
import Link from "next/link";

interface Message {
    id: string;
    type: "bot" | "user";
    text: string;
    timestamp: Date;
    options?: ChatOption[];
}

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            addBotMessage("start");
        }
    }, [isOpen]);

    const addBotMessage = (nodeId: string) => {
        const node = chatbotData[nodeId];
        if (!node) return;

        setIsTyping(true);

        // Simulate typing delay
        setTimeout(() => {
            const newMessage: Message = {
                id: Math.random().toString(36).substr(2, 9),
                type: "bot",
                text: node.message,
                timestamp: new Date(),
                options: node.options,
            };
            setMessages((prev) => [...prev, newMessage]);
            setIsTyping(false);
        }, 800);
    };

    const handleOptionClick = (option: ChatOption) => {
        // If it's an external link, we handle it separately
        if (option.external && option.link) {
            window.open(option.link, "_blank");
            return;
        }

        // If it's a relative link, the user will probably navigate away, but we can't really "click" a Link component programmatically easily here without refactoring. 
        // Actually, we'll let the user click the link if it's there, but for chat options we prefer 'next'.

        const userMsg: Message = {
            id: Math.random().toString(36).substr(2, 9),
            type: "user",
            text: option.label,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMsg]);

        if (option.next) {
            addBotMessage(option.next);
        } else if (option.link) {
            // Fallback for internal links if 'next' is not defined
            // We'll just show a "Redirecting..." message or similar if needed, 
            // but typically 'next' is preferred for conversational flow.
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-[350px] md:w-[400px] h-[500px] md:h-[600px] glass-card rounded-[2rem] flex flex-col overflow-hidden shadow-2xl border border-white/10"
                    >
                        {/* Header */}
                        <div className="p-6 bg-gradient-to-r from-blue-600/20 to-violet-600/20 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                                    {/* <Bot size={20} className="text-white" /> */}
                                    <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV8yN19yZWFsaXN0aWNfcGhvdG9fb2Zfc21pbGluZ19oYW5kc29tZV95b3VuZ19pbl8xNWExMTE1ZC0xZTBiLTQ4YjAtOGEyNi01ZDE1ZmE3Njg2MzYucG5n.png" alt="IIAS Logo" className="w-10 h-10 rounded-full" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">Sujal from IIAS</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors group"
                            >
                                <X size={18} className="text-gray-400 group-hover:text-white" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, x: msg.type === "bot" ? -10 : 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.type === "bot" ? "justify-start" : "justify-end"}`}
                                >
                                    <div className={`flex gap-3 max-w-[85%] ${msg.type === "bot" ? "" : "flex-row-reverse"}`}>
                                        <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs ${msg.type === "bot" ? "bg-white/5 border border-white/10 text-blue-400" : "bg-blue-600 text-white"
                                            }`}>
                                            {msg.type === "bot" ? <Bot size={14} /> : <User size={14} />}
                                        </div>
                                        <div className="space-y-3">
                                            <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.type === "bot"
                                                    ? "bg-white/5 border border-white/10 text-gray-200 rounded-tl-none"
                                                    : "bg-blue-600 text-white rounded-tr-none shadow-lg shadow-blue-500/10"
                                                }`}>
                                                {msg.text.split("\n").map((line, i) => (
                                                    <p key={i} className={i > 0 ? "mt-2" : ""}>{line}</p>
                                                ))}
                                            </div>

                                            {msg.type === "bot" && msg.options && idx === messages.length - 1 && (
                                                <div className="flex flex-wrap gap-2 pt-1">
                                                    {msg.options.map((option, i) => (
                                                        option.link && !option.external && !option.next ? (
                                                            <Link
                                                                key={i}
                                                                href={option.link}
                                                                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 text-xs font-medium text-blue-400 transition-all flex items-center gap-2 group"
                                                            >
                                                                {option.label}
                                                                <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                                                            </Link>
                                                        ) : (
                                                            <button
                                                                key={i}
                                                                onClick={() => handleOptionClick(option)}
                                                                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 text-xs font-medium text-blue-400 transition-all flex items-center gap-2 group"
                                                            >
                                                                {option.label}
                                                                {option.external ? <ExternalLink size={12} /> : <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />}
                                                            </button>
                                                        )
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                            <Bot size={14} className="text-blue-400" />
                                        </div>
                                        <div className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 flex gap-1 items-center rounded-tl-none">
                                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Footer */}
                        <div className="p-4 bg-white/5 border-t border-white/10 text-center">
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Powering the Future of Learning at IIAS</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 relative ${isOpen
                        ? "bg-white/10 border border-white/10 text-white"
                        : "bg-blue-600 text-white hover:bg-blue-500 shadow-blue-500/20"
                    }`}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                        >
                            <MessageCircle size={28} />
                        </motion.div>
                    )}
                </AnimatePresence>

                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-slate-950 rounded-full" />
                )}
            </motion.button>
        </div>
    );
}
