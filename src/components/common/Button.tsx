import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    variant?: 'outlined' | 'filled' | 'gold' | 'yellow' | 'red' | 'cyan' | 'purple' | 'orange'
    size?: 'sm' | 'md' | 'lg'
    className?: string
    fullWidth?: boolean
    style?: React.CSSProperties
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = 'outlined',
    size = 'md',
    className = '',
    fullWidth = false,
    style = {},
}) => {
    const baseStyles = 'flex items-center justify-center gap-2 rounded-full font-heading font-semibold uppercase tracking-[0.15em] transition-all duration-500 ease-out relative overflow-hidden cursor-pointer'

    // Increased font sizes for better readability
    const sizeStyles = {
        sm: 'px-5 py-2.5 text-[13px]',
        md: 'px-7 py-3 text-[14px]',
        lg: 'px-9 py-5 text-[16px]',
    }

    const variantStyles = {
        outlined: 'border-2 border-text hover:border-secondary hover:text-secondary bg-transparent',
        filled: 'text-white bg-secondary hover:brightness-110 hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl',
        gold: 'text-white bg-primary hover:brightness-110 hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl',

        // Apple-inspired premium gradients with sophisticated color harmonies
        cyan: 'text-white bg-gradient-to-br from-[#0A84FF] via-[#0071E3] to-[#005BB5] hover:from-[#0071E3] hover:via-[#005BB5] hover:to-[#004494] hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-600/60 hover:shadow-2xl',

        red: 'text-white bg-gradient-to-br from-[#FF6B6B] via-[#FF5252] to-[#FF3B3B] hover:from-[#FF5252] hover:via-[#FF3B3B] hover:to-[#E63946] hover:scale-105 active:scale-95 shadow-lg hover:shadow-red-500/60 hover:shadow-2xl',

        purple: 'text-white bg-gradient-to-br from-[#BF5AF2] via-[#A855F7] to-[#9333EA] hover:from-[#A855F7] hover:via-[#9333EA] hover:to-[#7E22CE] hover:scale-105 active:scale-95 shadow-lg hover:shadow-purple-600/60 hover:shadow-2xl',

        orange: 'text-white bg-gradient-to-br from-[#FF9500] via-[#FF8C00] to-[#F77F00] hover:from-[#FF8C00] hover:via-[#F77F00] hover:to-[#E66F00] hover:scale-105 active:scale-95 shadow-lg hover:shadow-orange-600/60 hover:shadow-2xl',

        yellow: 'text-white bg-gradient-to-br from-[#34D399] via-[#10B981] to-[#059669] hover:from-[#10B981] hover:via-[#059669] hover:to-[#047857] hover:scale-105 active:scale-95 shadow-lg hover:shadow-emerald-500/60 hover:shadow-2xl',
    }

    const widthStyles = fullWidth ? 'w-full' : ''

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyles} ${className}`}
            style={style}
        >
            {/* Shimmer effect overlay */}
            <span className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="relative z-10">{children}</span>
        </button>
    )
}

export default Button
