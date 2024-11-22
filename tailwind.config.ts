import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				card: {
					DEFAULT: 'var(--card)',
					foreground: 'var(--card-foreground)'
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)'
				},
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)'
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)'
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--accent-foreground)'
				},
				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'var(--destructive-foreground)',
					light: {
						DEFAULT: 'var(--destructive-light)',
						foreground: 'var(--destructive-light-foreground)'
					}
				},
				success: {
					DEFAULT: 'var(--success)',
					foreground: 'var(--success-foreground)',
					light: {
						DEFAULT: 'var(--success-light)',
						foreground: 'var(--success-light-foreground)'
					},
				},
				border: 'var(--border)',
				input: 'var(--input)',
				ring: 'var(--ring)',
				chart: {
					'1': 'var(--chart-1)',
					'2': 'var(--chart-2)',
					'3': 'var(--chart-3)',
					'4': 'var(--chart-4)',
					'5': 'var(--chart-5)'
				},
				sidebar: {
					DEFAULT: 'var(--sidebar-background)',
					foreground: 'var(--sidebar-foreground)',
					primary: 'var(--sidebar-primary)',
					'primary-foreground': 'var(--sidebar-primary-foreground)',
					accent: 'var(--sidebar-accent)',
					'accent-foreground': 'var(--sidebar-accent-foreground)',
					border: 'var(--sidebar-border)',
					ring: 'var(--sidebar-ring)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontSize: {
				xs: '11px',
				sm: '12px',
				tiny: '13px',
				base: '15px',
				lg: '17px',
				xl: '19px',
				'2x': '22px',
				'3xl': '25px',
				'4xl': '29px',
				'5xl': '35px',
				'6xl': '41px',
				'7xl': '49px',
				'8xl': '60px',
				'9xl': '72px'
			},
			lineHeight: {
				1: '0.5rem', // 8px
				2: '0.6rem', // 10px
				3: '0.7rem', // 11px
				4: '0.9rem', // 14px
				5: '1.1rem', // 18px
				6: '1.3rem', // 21px
				7: '1.5rem', // 24px
				8: '1.75rem', // 28px
				9: '2rem', // 32px
				10: '2.25rem', // 36px
				none: '0.9',
				tight: '1.1',
				snug: '1.2',
				normal: '1.35',
				relaxed: '1.5',
				loose: '1.75',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
