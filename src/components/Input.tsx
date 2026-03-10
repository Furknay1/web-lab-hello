import React from 'react';

// Föydeki prop tanımlamalarını TypeScript'e uygun yapıyoruz [cite: 576-591]
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helpText?: string;
}

export default function Input({
  label,
  type = "text",
  error,
  helpText,
  id,
  ...props
}: InputProps) {
  return (
    <div className="space-y-1"> {/* Etiket ve input arası boşluk [cite: 594] */}
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}
      
      <input
        id={id}
        type={type}
        className={`w-full px-3 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 
          ${error 
            ? "border-red-500 focus:ring-red-500" // Hata durumu renkleri [cite: 610]
            : "border-gray-300 focus:ring-blue-500" // Normal durum [cite: 611]
          } 
          ${props.disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white dark:bg-gray-800 dark:text-gray-100"}
        `}
        // Erişilebilirlik için hata veya yardım metniyle bağlantı kurar [cite: 647-649]
        aria-describedby={error ? `${id}-error` : helpText ? `${id}-help` : undefined}
        {...props}
      />

      {/* Hata Mesajı [cite: 641-655] */}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}

      {/* Yardımcı Metin (Sadece hata yoksa görünür) [cite: 658-671] */}
      {helpText && !error && (
        <p id={`${id}-help`} className="text-sm text-gray-500 dark:text-gray-400">
          {helpText}
        </p>
      )}
    </div>
  );
}