import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HubSpotForm = ({ 
  className = "",
  title = "Get Started with HiveSurf",
  subtitle = "Fill out the form below and we'll get back to you within 24 hours.",
  source = "Website"
}) => {
  const formRef = useRef(null);

  useEffect(() => {
    // Load HubSpot form script
    const script = document.createElement('script');
    script.src = 'https://js-na2.hsforms.net/forms/embed/243516569.js';
    script.defer = true;
    script.onload = () => {
      // Script loaded, the form should render automatically
      console.log('HubSpot form script loaded');
    };
    
    document.head.appendChild(script);

    // Cleanup
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`hubspot-form-container ${className}`}
    >
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 font-display">
          {title}
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          {subtitle}
        </p>
      </div>
      
      <div 
        className="hubspot-form-wrapper glass-effect rounded-xl p-8"
        style={{
          minHeight: '400px'
        }}
      >
        {/* Hidden source tracking field */}
        <input 
          type="hidden" 
          name="source" 
          value={source}
        />
        
        {/* HubSpot Form Embed */}
        <div 
          className="hs-form-frame" 
          data-region="na2" 
          data-form-id="7a88f6de-c616-4a7e-a938-46f981035858" 
          data-portal-id="243516569"
        />
      </div>
    </motion.div>
  );
};

export default HubSpotForm; 