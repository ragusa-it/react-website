// src/components/ContactSection.js
import React, { memo, useCallback, useRef, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { Section } from './Reusable';

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
            {/* Section Header */}
            <div className="text-center mb-12">
                <div className="inline-block border-4 border-green-500 bg-black px-8 py-4 shadow-brutal-lg">
                    <h2 className="text-3xl md:text-5xl font-bold font-mono text-green-500 uppercase tracking-wider">
                        [ contact.conf ]
                    </h2>
                </div>
            </div>

            <div className="max-w-3xl mx-auto border-4 border-green-500 bg-black shadow-brutal-lg animate-fade-in">
                {/* Terminal Title Bar */}
                <div className="bg-green-500 border-b-4 border-green-500 p-3">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-black"></div>
                        <div className="w-3 h-3 bg-black"></div>
                        <div className="w-3 h-3 bg-black"></div>
                        <span className="font-mono font-bold text-black text-sm ml-2">
                            send_message.sh
                        </span>
                    </div>
                </div>

                <div className="p-8 md:p-12">
                    {formStatus.success ? (
                        <div className="text-center p-8 border-4 border-green-500 bg-black shadow-brutal-inset animate-scale-in">
                            <div className="font-mono text-green-500 mb-4">
                                [SUCCESS] MESSAGE_SENT
                            </div>
                            <h3 className="text-2xl font-bold text-green-400 text-glow-green font-mono mb-2">TRANSMISSION COMPLETE</h3>
                            <p className="text-green-300 mt-2 font-mono text-sm">Ihre Nachricht wurde erfolgreich gesendet. Ich werde mich in Kürze bei Ihnen melden.</p>
                            <div className="mt-4 text-green-500 font-mono text-xs">
                                <span className="animate-pulse">█</span>
                            </div>
                        </div>
                    ) : (
                        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} noValidate className="font-mono">
                            <input type="hidden" name="form-name" value="contact" />
                            <p className="hidden"><label>Don't fill this out if you're human: <input name="bot-field" /></label></p>

                            {/* Terminal Prompt */}
                            <div className="mb-6 text-green-500 text-sm">
                                <span className="text-white">root@contact:~$</span> initiate secure_transmission
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-green-500 mb-2 text-sm uppercase tracking-wider">
                                        {'>'} Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`w-full bg-black border-2 ${errors.name ? 'border-red-500' : 'border-green-500'} py-3 px-4 text-green-500 focus:outline-none focus:border-white transition-all font-mono`}
                                        required
                                        autoComplete="name"
                                        placeholder="ENTER_NAME..."
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1 font-mono">[ERROR] {errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-green-500 mb-2 text-sm uppercase tracking-wider">
                                        {'>'} Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full bg-black border-2 ${errors.email ? 'border-red-500' : 'border-green-500'} py-3 px-4 text-green-500 focus:outline-none focus:border-white transition-all font-mono`}
                                        required
                                        autoComplete="email"
                                        placeholder="ENTER_EMAIL..."
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1 font-mono">[ERROR] {errors.email}</p>}
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-green-500 mb-2 text-sm uppercase tracking-wider">
                                    {'>'} Nachricht
                                </label>
                                <div className={`relative bg-black border-2 ${errors.message ? 'border-red-500' : 'border-green-500'} focus-within:border-white transition-all`}>
                                    <textarea
                                        ref={textareaRef}
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full bg-transparent border-none py-3 px-4 text-green-500 focus:outline-none resize-none font-mono"
                                        style={{ height: '120px' }}
                                        required
                                        placeholder="ENTER_MESSAGE..."
                                    ></textarea>
                                    <div
                                        id="custom-resize-handle"
                                        onMouseDown={handleResizeMouseDown}
                                        className="absolute bottom-1 right-1 cursor-none"
                                    >
                                        <svg width="10" height="10" viewBox="0 0 10 10" className="stroke-current text-green-500">
                                            <line x1="1" y1="9" x2="9" y2="1" strokeWidth="1.5" />
                                            <line x1="5" y1="9" x2="9" y2="5" strokeWidth="1.5" />
                                        </svg>
                                    </div>
                                </div>
                                {errors.message && <p className="text-red-500 text-xs mt-1 font-mono">[ERROR] {errors.message}</p>}
                            </div>

                            <div className="text-center mt-8">
                                <button
                                    type="submit"
                                    disabled={formStatus.submitting}
                                    className="bg-green-500 hover:bg-white text-black font-bold py-4 px-12 text-lg border-4 border-black shadow-brutal-black-lg hover:shadow-brutal-black transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] disabled:bg-gray-700 disabled:cursor-not-allowed flex items-center justify-center gap-3 w-full md:w-auto mx-auto font-mono uppercase tracking-wider"
                                >
                                    {formStatus.submitting && <LoaderCircle className="animate-spin" size={20} />}
                                    {formStatus.submitting ? '[ SENDING... ]' : '[ TRANSMIT_MESSAGE ]'}
                                </button>
                            </div>
                            {formStatus.error && <p className="text-red-500 text-center mt-4 font-mono">[SYSTEM_ERROR] {formStatus.error}</p>}
                        </form>
                    )}
                </div>
            </div>
        </Section>
    );
});

export default ContactSection;
