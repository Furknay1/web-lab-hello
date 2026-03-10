import React from 'react';

// TypeScript ile prop tiplerini ve varyantları kısıtlıyoruz [cite: 782-787]
interface AlertProps {
  children: React.ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export default function Alert({
  children,
  variant = "info",
  title,
  dismissible = false,
  onDismiss,
}: AlertProps) {
  
  // Föydeki varyant renk skalası [cite: 789-803]
  const variants = {
    info: "bg-blue-50 border-blue-500 text-blue-800 dark:bg-blue-950 dark:text-blue-200",
    success: "bg-green-50 border-green-500 text-green-800 dark:bg-green-950 dark:text-green-200",
    warning: "bg-amber-50 border-amber-500 text-amber-800 dark:bg-amber-950 dark:text-amber-200",
    error: "bg-red-50 border-red-500 text-red-800 dark:bg-red-950 dark:text-red-200",
  };

  return (
    <div 
      role="alert" // Erişilebilirlik için zorunlu [cite: 832, 882]
      className={`border-l-4 rounded-r-lg p-4 mb-4 ${variants[variant]}`} // Sol kenarlık ve iç boşluk [cite: 833-834]
    >
      <div className="flex justify-between items-start">
        <div>
          {title && <p className="font-semibold mb-1">{title}</p>} {/* Başlık stili [cite: 840] */}
          <p className="text-sm">{children}</p> {/* İçerik stili [cite: 842] */}
        </div>
        
        {/* Kapatılabilir buton [cite: 844-851] */}
        {dismissible && (
          <button 
            onClick={onDismiss} 
            className="ml-4 opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Kapat" // Ekran okuyucular için [cite: 848, 883]
          >
            &#10005; {/* X simgesi [cite: 849] */}
          </button>
        )}
      </div>
    </div>
  );
}