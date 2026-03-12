import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: 'model', text: '¡Hola! Soy Velvet AI. ¿En qué puedo ayudarte hoy para impulsar tu carrera?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userMsg = inputValue.trim();
        setInputValue('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setIsLoading(true);

        try {
            const responseText = await sendMessageToGemini(userMsg);
            setMessages(prev => [...prev, { role: 'model', text: responseText }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'model', text: 'Lo siento, ocurrió un error.', isError: true }]);
        } finally {
            setIsLoading(false);
        }
    };

    const formatMessage = (text: string) => {
        // Regex to match markdown links: [text](url)
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const parts = [];
        let lastIndex = 0;
        let match;

        while ((match = linkRegex.exec(text)) !== null) {
            // Add text before the link
            if (match.index > lastIndex) {
                parts.push(text.substring(lastIndex, match.index));
            }

            // Add the link as a button
            parts.push(
                <a
                    key={match.index}
                    href={match[2]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-2 px-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 my-2 no-underline text-xs"
                >
                    <span className="material-symbols-outlined text-sm">chat</span>
                    {match[1]}
                </a>
            );

            lastIndex = linkRegex.lastIndex;
        }

        // Add remaining text
        if (lastIndex < text.length) {
            parts.push(text.substring(lastIndex));
        }

        return parts.length > 0 ? parts : text;
    };

    return (
        <>
            {/* Toggle Button Container */}
            <div className="fixed bottom-24 right-6 z-[60] group flex items-center gap-3 justify-end">
                {/* Tooltip Text */}
                <div className="bg-black/80 backdrop-blur-md border border-primary/40 text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(139,0,0,0.3)] hidden md:block pointer-events-none">
                    Soy la Asistente Velvet AI. Puedes preguntarme
                </div>

                {/* Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="size-16 rounded-full bg-[#0a0505] border border-primary/30 hover:border-primary/80 text-white shadow-[0_0_20px_rgba(139,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,0,0,0.8)] hover:scale-105 transition-all duration-300 flex items-center justify-center relative overflow-hidden"
                    aria-label="Chat with AI"
                >
                    {isOpen ? (
                        <span className="material-symbols-outlined text-3xl text-red-200 transition-transform duration-300 group-hover:rotate-90">close</span>
                    ) : (
                        <div className="relative flex items-center justify-center w-full h-full">
                            {/* ANIMACIÓN OPCIÓN 1: Radar / Latido Dorado */}
                            {/* 1. La Onda Expansiva (Ping) */}
                            <span className="absolute inset-0 rounded-2xl bg-[#D4AF37] opacity-30 animate-ping [animation-duration:4s]">
                            </span>
                            
                            {/* TU LOGO AQUI */}
                            <div className="size-12 rounded-full overflow-hidden z-10 shadow-lg">
                                <img 
                                    src="https://res.cloudinary.com/dsblmqrrg/image/upload/v1771392270/favicon_Asistant_AI_180x180_faudyx.png" 
                                    alt="Velvet AI" 
                                    loading="lazy"
                                    className="w-full h-full object-cover animate-fadeIn"
                                />
                            </div>
                            
                            {/* AI Dot (Notificación) */}
                            <span className="absolute top-3 right-3 flex size-2.5 z-20">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full size-2.5 bg-green-500 border border-black"></span>
                            </span>
                        </div>
                    )}
                </button>
            </div>

            {/* Chat Window */}
            <div className={`fixed bottom-40 right-6 w-[90vw] md:w-[380px] bg-card-dark border border-white/10 rounded-2xl shadow-2xl z-[60] flex flex-col transition-all duration-300 transform origin-bottom-right overflow-hidden max-h-[600px] h-[70vh] ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
                
                {/* Header */}
                <div className="bg-primary/20 backdrop-blur-md p-4 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {/* INICIO REEMPLAZO: Tu Favicon en lugar del diamante */}
                        <div className="relative size-8 rounded-none overflow-hidden border border-white/10 shadow-sm">
                            <img 
                                src="https://res.cloudinary.com/dsblmqrrg/image/upload/v1771392270/favicon_Asistant_AI_180x180_faudyx.png" 
                                alt="Velvet AI" 
                                loading="lazy"
                                className="w-full h-full object-cover animate-fadeIn"
                            />
                            {/* Opcional: Un puntito verde de "Online" */}
                            <div className="absolute bottom-0 right-0 size-2 bg-green-500 rounded-full border border-black"></div>
                        </div>
                        {/* FIN REEMPLAZO */}

                        <div className="flex flex-col">
                            <h3 className="font-bold text-white text-sm">Velvet AI Assistant</h3>
                            <span className="text-[10px] text-green-400 flex items-center gap-1">
                                En línea
                            </span>
                        </div>
                    </div>
                    
                    {/* Close Button */}
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="text-white/70 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
                        aria-label="Cerrar chat"
                    >
                        <span className="material-symbols-outlined text-xl">close</span>
                    </button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background-dark/95 custom-scrollbar">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed ${
                                msg.role === 'user' 
                                    ? 'bg-primary text-white rounded-tr-none' 
                                    : 'bg-white/10 text-stone-200 rounded-tl-none border border-white/5'
                            } ${msg.isError ? 'bg-red-900/50 border-red-500/30' : ''}`}>
                                {formatMessage(msg.text)}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-white/10 rounded-2xl rounded-tl-none p-3 border border-white/5 flex gap-1">
                                <span className="size-2 bg-gray-400 rounded-full animate-bounce"></span>
                                <span className="size-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                <span className="size-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <form onSubmit={handleSendMessage} className="p-3 bg-card-dark border-t border-white/10">
                    <div className="relative flex items-center gap-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Escribe tu pregunta..."
                            className="w-full bg-background-dark/50 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all placeholder-gray-500"
                        />
                        <button 
                            type="submit"
                            disabled={!inputValue.trim() || isLoading}
                            className="absolute right-2 p-1.5 rounded-lg bg-primary hover:bg-accent text-white hover:text-secondary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="material-symbols-outlined text-[20px]">send</span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};