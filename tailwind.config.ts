import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
                // Light mode colors
                light: {
                    100: "#FFFFFF",
                    200: "#F5F5F5",
                    300: "#EEEEEE",
                },
                // Keep the neon colors for accents
                neon: {
                    teal: "#0cffe1",
                    blue: "#4361ee",
                    purple: "#7209b7",
                    pink: "#f72585",
                },
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'fade-out': {
                    '0%': { opacity: '1', transform: 'translateY(0)' },
                    '100%': { opacity: '0', transform: 'translateY(10px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '1', filter: 'brightness(100%)' },
                    '50%': { opacity: '0.8', filter: 'brightness(150%)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'slide-in-right': {
                    '0%': { transform: 'translateX(100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                'slide-in-left': {
                    '0%': { transform: 'translateX(-100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                'ping-slow': {
                    '75%, 100%': {
                        transform: 'scale(1.5)',
                        opacity: '0',
                    },
                },
                'shimmer': {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.6s ease-out',
                'fade-out': 'fade-out 0.6s ease-out',
                'pulse-glow': 'pulse-glow 2s infinite',
                'float': 'float 6s ease-in-out infinite',
                'slide-in-right': 'slide-in-right 0.5s ease-out',
                'slide-in-left': 'slide-in-left 0.5s ease-out',
                'ping-slow': 'ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite',
                'shimmer': 'shimmer 3s infinite linear',
			},
            fontFamily: {
                sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'noise': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c4zIymAAAA20lEQVR4nO3VbU/CMBSGUdz2dKVjKm7K//+hBrI3ha5JX3zhhpPQpvS5SZZFAAAAAIC0Qgy3v8RB05+cJvGW+8jycFZVs4uYZCyr/ESr+JwkGjSe5YH/nPwgVVW1a7Eyy5W/s1qzDZ0ZuSw30Q5JBVM5TKwWN/m7hc1DZDAxLGebSGVvsR63fg4XM1KzMSOHZW25MPjMN5aJ0c0XrGXBOaZr8VUyrJW6J5/s4+wsVp1z7F1kfmup9tFfKuRLmdt6vkj707leGnMAAAAAwP/1A0RmDijKYwZZAAAAAElFTkSuQmCC')",
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            boxShadow: {
                'neon-teal': '0 0 5px #0cffe1, 0 0 20px rgba(12, 255, 225, 0.3)',
                'neon-blue': '0 0 5px #4361ee, 0 0 20px rgba(67, 97, 238, 0.3)',
                'neon-purple': '0 0 5px #7209b7, 0 0 20px rgba(114, 9, 183, 0.3)',
                'neon-pink': '0 0 5px #f72585, 0 0 20px rgba(247, 37, 133, 0.3)',
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.15)',
            },
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
