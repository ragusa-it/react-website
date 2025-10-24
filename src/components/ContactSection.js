// src/components/ContactSection.js
import React, { memo, useCallback, useRef, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { Section, SectionCard } from './Reusable';

const ContactSection = memo(() => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [formStatus, setFormStatus] = useState({ submitting: false, success: false, error: '' });
    const textareaRef = useRef(null);
    const isResizing = useRef(false);
    const startY = useRef(0);
    const startHeight = useRef(0);

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setErrors((prevErrors) => {
            if (prevErrors[name]) {
                const newErrors = { ...prevErrors };
                delete newErrors[name];
                return newErrors;
            }
            return prevErrors;
        });
    }, []);

    const validateForm = useCallback(() => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name ist erforderlich.";
        if (!formData.email.trim()) {
            newErrors.email = "E-Mail ist erforderlich.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
        }
        if (!formData.message.trim()) newErrors.message = "Nachricht ist erforderlich.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }, [formData]);
    
    const handleResizeMouseMove = useCallback((e) => { if (isResizing.current) { const newHeight = startHeight.current + e.clientY - startY.current; textareaRef.current.style.height = `${Math.max(120, newHeight)}px`; } }, []);
    const handleResizeMouseUp = useCallback(() => { isResizing.current = false; window.removeEventListener('mousemove', handleResizeMouseMove); window.removeEventListener('mouseup', handleResizeMouseUp); }, [handleResizeMouseMove]);
    const handleResizeMouseDown = useCallback((e) => { isResizing.current = true; startY.current = e.clientY; startHeight.current = textareaRef.current.clientHeight; window.addEventListener('mousemove', handleResizeMouseMove); window.addEventListener('mouseup', handleResizeMouseUp); }, [handleResizeMouseMove, handleResizeMouseUp]);

    const encode = useCallback((data) => Object.keys(data).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&'), []);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setFormStatus({ submitting: true, success: false, error: '' });

        try {
            const response = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: encode({ 'form-name': 'contact', ...formData }) });
            if (!response.ok) throw new Error(`Server error: ${response.statusText}`);
            setFormStatus({ submitting: false, success: true, error: '' });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setFormStatus({ submitting: false, success: false, error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.' });
            console.error('Form submission error:', error);
        }
    }, [formData, validateForm, encode]);

    return (
        <Section id="contact">
            <SectionCard className="max-w-3xl animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 text-glow-green">Kontakt</h2>
                {formStatus.success ? (
                    <div className="text-center p-8 bg-green-900/30 border border-green-500/30 rounded-lg glow-green animate-scale-in">
                        <h3 className="text-2xl font-bold text-green-400 text-glow-green">Vielen Dank!</h3>
                        <p className="text-green-300 mt-2">Ihre Nachricht wurde erfolgreich gesendet. Ich werde mich in Kürze bei Ihnen melden.</p>
                    </div>
                ) : (
                    <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} noValidate>
                        <input type="hidden" name="form-name" value="contact" />
                        <p className="hidden"><label>Don't fill this out if you're human: <input name="bot-field" /></label></p>

                        <div className="grid md:grid-cols-2 gap-6 mb-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-400 mb-2 font-mono text-sm">Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className={`w-full bg-black/60 border ${errors.name ? 'border-red-500' : 'border-green-500/30'} rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300`} required autoComplete="name" />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-400 mb-2 font-mono text-sm">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className={`w-full bg-black/60 border ${errors.email ? 'border-red-500' : 'border-green-500/30'} rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300`} required autoComplete="email" />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-400 mb-2 font-mono text-sm">Nachricht</label>
                            {/* --- FIX APPLIED HERE --- */}
                            <div className={`relative bg-black/60 border ${errors.message ? 'border-red-500' : 'border-green-500/30'} rounded-md focus-within:ring-2 focus-within:ring-green-500 transition-all duration-300`}>
                                <textarea
                                    ref={textareaRef}
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent border-none rounded-md py-2 px-4 text-white focus:outline-none focus:ring-0 resize-none"
                                    style={{height: '120px'}}
                                    required
                                ></textarea>
                                <div
                                    id="custom-resize-handle"
                                    onMouseDown={handleResizeMouseDown}
                                    className="absolute bottom-1 right-1 cursor-none"
                                >
                                    <svg width="10" height="10" viewBox="0 0 10 10" className="stroke-current text-green-500/60" style={{ filter: 'drop-shadow(0 0 2px #4ade80)' }}>
                                        <line x1="1" y1="9" x2="9" y2="1" strokeWidth="1.5" />
                                        <line x1="5" y1="9" x2="9" y2="5" strokeWidth="1.5" />
                                    </svg>
                                </div>
                            </div>
                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                        </div>

                        <div className="text-center mt-6">
                            <button type="submit" disabled={formStatus.submitting} className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-110 glow-green-intense hover:animate-glow disabled:bg-gray-700 disabled:cursor-not-allowed flex items-center justify-center gap-2 w-full md:w-auto mx-auto cursor-none">
                                {formStatus.submitting && <LoaderCircle className="animate-spin glow-green" size={20} />}
                                {formStatus.submitting ? 'Wird gesendet...' : 'Nachricht senden'}
                            </button>
                        </div>
                        {formStatus.error && <p className="text-red-500 dark:text-red-400 text-center mt-4">{formStatus.error}</p>}
                    </form>
                )}
            </SectionCard>
        </Section>
    );
});

export default ContactSection;
