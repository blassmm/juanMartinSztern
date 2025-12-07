"use client";
import React from 'react';

// Configuración interna del componente
const DEFAULT_CONFIG = {
    // Número de teléfono con código de país (sin espacios ni guiones)
    phoneNumber: "1126838497",

    // Mensaje predeterminado para WhatsApp
    defaultMessage: "Hola Juan Martin! te escribo porque me intereso..."
};

interface WhatsAppButtonProps {
    phoneNumber?: string;
    message?: string;
    size?: 'sm' | 'md' | 'lg';
    position?: 'fixed' | 'static';
    customClass?: string;
    variant?: 'icon' | 'button';
    buttonText?: string;
    buttonStyle?: 'default' | 'outline' | 'custom';
}

const WhatsAppButton = ({ phoneNumber, message, size = 'md', position = 'fixed', customClass = '', variant = 'icon', buttonText = 'Agendar Consulta', buttonStyle = 'default'}: WhatsAppButtonProps) => {
    // Use phoneNumber from props or from default config
    const finalPhoneNumber = phoneNumber || DEFAULT_CONFIG.phoneNumber;
    // Use message from props or from default config
    const finalMessage = message || DEFAULT_CONFIG.defaultMessage;

    // Remove any non-numeric characters from phone number
    const cleanPhoneNumber = finalPhoneNumber.replace(/\D/g, '');

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${cleanPhoneNumber}${finalMessage ? `?text=${encodeURIComponent(finalMessage)}` : ''}`;

    // Size classes
    const sizeClasses = {
        sm: 'w-10 h-10',
        md: 'w-14 h-14',
        lg: 'w-16 h-16',
    };

    // Si es fixed lo ubicamos abajo a la derecha
    const positionClasses = position === 'fixed' ? 'fixed bottom-6 right-6 z-50' : '';

    // Render icon or button based on variant
    if (variant === 'icon') {
        return (
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                    ${sizeClasses[size]}
                    ${positionClasses}
                    ${customClass}
                    flex items-center justify-center
                    rounded-full bg-[#25D366] hover:bg-[#20c35c]
                    shadow-lg hover:shadow-xl
                    transition-all duration-300
                `}
                aria-label="Contactar por WhatsApp"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={`w-${size === 'sm' ? '5' : size === 'md' ? '7' : '8'} h-${size === 'sm' ? '5' : size === 'md' ? '7' : '8'}`}
                    fill="white"
                >
                    <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                    />
                </svg>
            </a>
        );
    } else {
        // Button styles based on buttonStyle prop
        let buttonClasses = '';

        switch (buttonStyle) {
            case 'outline':
                buttonClasses = 'border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white';
                break;
            case 'custom':
                // Use customClass for styling
                buttonClasses = customClass;
                break;
            default: // 'default'
                buttonClasses = 'bg-[#25D366] hover:bg-[#20c35c] text-white';
                break;
        }

        return (
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                    ${positionClasses}
                    ${buttonStyle === 'custom' ? '' : buttonClasses}
                    ${buttonStyle !== 'custom' ? customClass : ''}
                    px-6 py-3 rounded-md
                    flex items-center justify-center gap-2
                    font-medium shadow-lg hover:shadow-xl
                    transition-all duration-300
                `}
                aria-label="Agendar consulta por WhatsApp"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="currentColor"
                >
                    <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                    />
                </svg>
                {buttonText}
            </a>
        );
    }
};

export default WhatsAppButton;
