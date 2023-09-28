const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    
    extend:
    {
      animation:{
        'slide-in': 'slide-in 0.3s ease-in',
        'slide-out': 'slide-out 0.3s ease-out',
        'fade-up': 'fade-up 2s',
        'fade-down': 'fade-down 2s ',
        circle: 'circle 8s infinite',
        circleup: 'circleup 8s infinite',
        circledown: 'circledown 8s infinite',
        floating: 'floating 8s infinite',
      },
        keyframes:{
          'slide-in': {
            '0%': {
              transform: 'translateX(100%)',
              opacity: '0',
            },
            '100%': {
              transform: 'translateX(0)',
              opacity: '1',
            },
          },

          'slide-out': {
            '0%': {
              transform: 'translateX(0%)',
              opacity: '1',
            },
            '100%': {
              transform: 'translateX(100%)',
              opacity: '0',
            },
          },

          'fade-up': {
            '0%': {
              opacity: '0',
              transform: 'translateY(30px) scale(0.9)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0px) scale(1)',
            },
          },
          
          'fade-down': {
            '0%': {
              opacity: '0',
         
            },
            '100%': {
              opacity: '1',
             
            },
          },
          
          circle:{
            '0%':{
              transform: 'scale(1)',
            },
            '50%':{
              transform: 'scale(1.1)',
            },
            '100%':{
              transform: 'scale(1)',
            },
          },

          circleup:{
            '0%':{
              transform: 'translate(0px, 0px) scale(1)',
            },
            '50%':{
              transform: 'translate(-30px, -50px) scale(1.1)',
            },
            '100%':{
              transform: 'translate(0px, 0px) scale(1)',
            },
          },

          circledown:{
            '0%':{
              transform: 'translate(0px, 0px) scale(1)',
            },
            '50%':{
              transform: 'translate(20px, 40px) scale(1.1)',
            },
            '100%':{
              transform: 'translate(0px, 0px) scale(1)',
            },
          },
          floating:{
            '0%':{
              transform: 'translate(0px, 0px)',
            },
            '50%':{
              transform: 'translate(0px, -20px)',
            },
            '100%':{
              transform: 'translate(0px, 0px)',
            },
          },
        },
        

     
    },

		fontFamily:{
			outfit: ['Outfit-variable, sans-serif']
		},
		
    fontSize:{
			largeDesktop: [
        '72px',
        {
          lineHeight: '84px',
          letterSpacing: '-1.44px',
          fontWeight: 700,
        },
      ],
			largeMobile: [
        '56px',
        {
          lineHeight: '64px',
          letterSpacing: '-1.12px',
          fontWeight: 700,
        },
      ],
			title1: [
        '40px',
        {
          lineHeight: '48px',
          letterSpacing: '-0.8px',
          fontWeight: 600,
        },
      ],
			title2: [
        '32px',
        {
          lineHeight: '36px',
          letterSpacing: '-0.32px',
          fontWeight: 600,
        },
      ],
			title2: [
        '32px',
        {
          lineHeight: '36px',
          letterSpacing: '-0.32px',
          fontWeight: 600,
        },
      ],
      title3: [
        '24px',
        {
          lineHeight: '32px',
          letterSpacing: '-0.24px',
          fontWeight: 600,
        },
      ],
      subtitle1: [
        '21px',
        {
          lineHeight: '32px',
          letterSpacing: '-0.21px',
          fontWeight: 400,
        },
      ],
      subtitle2: [
        '18px',
        {
          lineHeight: '18px',
          letterSpacing: '-0.18px',
          fontWeight: 600,
        },
      ],
      body: [
        '18px',
        {
          lineHeight: '28px',
          letterSpacing: '0',
          fontWeight: 400,
        },
      ],
      action: [
        '16px',
        {
          lineHeight: '24px',
          letterSpacing: '0',
          fontWeight: 600,
        },
      ],
      bodySm: [
        '14px',
        {
          lineHeight: '20px',
          letterSpacing: '0',
          fontWeight: 400,
        },
      ],
      captionText: [
        '12px',
        {
          lineHeight: '16px',
          letterSpacing: '0',
          fontWeight: 400,
        },
      ],
      overline: [
        '12px',
        {
          lineHeight: '16px',
          letterSpacing: '2.88px',
          fontWeight: 500,
          textTransform: 'uppercase',

        },
      ],
      overlineSm: [
        '10px',
        {
          lineHeight: '14px',
          letterSpacing: '2.4px',
          fontWeight: 500,
          textTransform: 'uppercase',
        },
      ]
		},

			colors: {
        neutral: {
          10: '#FDFDFE',
          20: '#F8F8FA',
          30: '#E6E4EC',
          40: '#9B99A9',
          50: '#666785',
          60: '#4E4763',
          80: '#29233B',
          90: '#100D18',
          100:'#000000',
        },
        violet: {
          10: '#B295EF',
          30: '#9E76EF',
          50: '#8A59EC',
          70: '#7044C9',
          90: '#342856',
        },
        surface: {
          primary: 'hsl(var(--bg-primary) / <alpha-value>)',
          secondary: 'hsl(var(--bg-secondary) / <alpha-value>)',
        },
        button: {
          bgPrimary: 'hsl(var(--button-bg-primary) / <alpha-value>)',
          bgPrimaryDisabled: 'hsl(var(--button-bg-primary-disabled) / <alpha-value>)',
          bgPrimaryHovered: 'hsl(var(--button-bg-primary-hovered) / <alpha-value>)',
          bgPrimaryPressed: 'hsl(var(--button-bg-primary-pressed) / <alpha-value>)',
          bgSecondary: 'hsl(var(--button-bg-secondary) / <alpha-value>)',
          bgSecondaryDisabled: 'hsl(var(--button-bg-secondary-disabled) / <alpha-value>)',
          bgSecondaryHovered: 'hsl(var(--button-bg-secondary-hovered) / <alpha-value>)',
          bgSecondaryPressed: 'hsl(var(--button-bg-secondary-pressed) / <alpha-value>)',
          bgTertiaryHovered: 'hsl(var(--button-bg-tertiary-hovered) / <alpha-value>)',
          bgTertiaryPressed: 'hsl(var(--button-bg-tertiary-pressed) / <alpha-value>)',
         
          borderSecondary: 'hsl(var(--button-border-secondary) / <alpha-value>)',
          borderSecondaryDisabled: 'hsl(var(--button-border-secondary-disabled) / <alpha-value>)',
          borderSecondaryHovered: 'hsl(var(--button-border-secondary-hovered) / <alpha-value>)',
          borderSecondaryPressed: 'hsl(var(--button-border-secondary-pressed) / <alpha-value>)',
          borderTertiarySelected: 'hsl(var(--button-border-tertiary-selected) / <alpha-value>)',
          
          iconPrimary: 'hsl(var(--button-icon-primary) / <alpha-value>)',
          iconPrimaryDisabled: 'hsl(var(--button-icon-primary-disabled) / <alpha-value>)',
          iconSecondary: 'hsl(var(--button-icon-secondary) / <alpha-value>)',
          iconSecondaryDisabled: 'hsl(var(--button-icon-secondary-disabled) / <alpha-value>)',
          iconSecondaryHovered: 'hsl(var(--button-icon-secondary-hovered) / <alpha-value>)',
          iconSecondaryPressed: 'hsl(var(--button-icon-secondary-pressed) / <alpha-value>)',
          iconTertiary: 'hsl(var(--button-icon-tertiary) / <alpha-value>)',
          iconTertiaryDisabled: 'hsl(var(--button-icon-tertiary-disabled) / <alpha-value>)',
          iconTertiaryHovered: 'hsl(var(--button-icon-tertiary-hovered) / <alpha-value>)',
          iconTertiaryPressed: 'hsl(var(--button-icon-tertiary-pressed) / <alpha-value>)',
          iconTertiarySelected: 'hsl(var(--button-icon-tertiary-selected) / <alpha-value>)',
          
          labelPrimary: 'hsl(var(--button-label-primary) / <alpha-value>)',
          labelPrimaryDisabled: 'hsl(var(--button-label-primary-disabled) / <alpha-value>)',
          labelSecondary: 'hsl(var(--button-label-secondary) / <alpha-value>)',
          labelSecondaryDisabled: 'hsl(var(--button-label-secondary-disabled) / <alpha-value>)',
          labelSecondaryHovered: 'hsl(var(--button-label-secondary-hovered) / <alpha-value>)',
          labelSecondaryPressed: 'hsl(var(--button-label-secondary-pressed) / <alpha-value>)',
          labelTertiary: 'hsl(var(--button-label-tertiary) / <alpha-value>)',
          labelTertiaryDisabled: 'hsl(var(--button-label-tertiary-disabled) / <alpha-value>)',
          labelTertiaryHovered: 'hsl(var(--button-label-tertiary-hovered) / <alpha-value>)',
          labelTertiaryPressed: 'hsl(var(--button-label-tertiary-pressed) / <alpha-value>)',
          labelTertiarySelected: 'hsl(var(--button-label-tertiary-selected) / <alpha-value>)',
        },
        card: {
          surface: 'hsl(var(--card-bg) / <alpha-value>)',
          border: 'hsl(var(--card-border) / <alpha-value>)',
          borderHovered: 'hsl(var(--card-border-hovered) / <alpha-value>)',
        },
        chip: {
          bg: 'hsl(var(--chip-bg) / <alpha-value>)',
          bgDisabled: 'hsl(var(--chip-bg-disabled) / <alpha-value>)',
          bgHovered: 'hsl(var(--chip-bg-hovered) / <alpha-value>)',
          bgSelected: 'hsl(var(--chip-bg-selected) / <alpha-value>)',
          border: 'hsl(var(--chip-border) / <alpha-value>)',
          borderDisabled: 'hsl(var(--chip-border-disabled) / <alpha-value>)',
          borderHovered: 'hsl(var(--chip-border-hovered) / <alpha-value>)',
          borderSelected: 'hsl(var(--chip-border-selected) / <alpha-value>)',
          content: 'hsl(var(--chip-content) / <alpha-value>)',
          contentDisabled: 'hsl(var(--chip-content-disabled) / <alpha-value>)',
          contentHovered: 'hsl(var(--chip-content-hovered) / <alpha-value>)',
          contentSelected: 'hsl(var(--chip-content-selected) / <alpha-value>)',
        },
        inputText: {
          bg: 'hsl(var(--input-text-bg) / <alpha-value>)',
          bgDisabled: 'hsl(var(--input-text-bg-disabled) / <alpha-value>)',
          bgTyped: 'hsl(var(--input-text-bg-typed) / <alpha-value>)',
          borderDefault: 'hsl(var(--input-text-border-default) / <alpha-value>)',
          borderError: 'hsl(var(--input-text-border-error) / <alpha-value>)',
          borderHovered: 'hsl(var(--input-text-border-hovered) / <alpha-value>)',
          borderOnFocus: 'hsl(var(--input-text-border-onfocus) / <alpha-value>)',
          borderTyping: 'hsl(var(--input-text-border-typing) / <alpha-value>)',
          description: 'hsl(var(--input-text-description) / <alpha-value>)',
          descriptionError: 'hsl(var(--input-text-description-error) / <alpha-value>)',
          icon: 'hsl(var(--input-text-icon) / <alpha-value>)',
          textDefault: 'hsl(var(--input-text-text-default) / <alpha-value>)',
          textDisabled: 'hsl(var(--input-text-text-disabled) / <alpha-value>)',
          textError: 'hsl(var(--input-text-text-error) / <alpha-value>)',
          textHovered: 'hsl(var(--input-text-text-hovered) / <alpha-value>)',
          textOnFocus: 'hsl(var(--input-text-text-onfocus) / <alpha-value>)',
          textTyped: 'hsl(var(--input-text-text-typed) / <alpha-value>)',
          textTyping: 'hsl(var(--input-text-text-typing) / <alpha-value>)',
          textTitle: 'hsl(var(--input-text-title) / <alpha-value>)',
          textTitleDisabled: 'hsl(var(--input-text-title-disabled) / <alpha-value>)',
          textTitleErrorRequired: 'hsl(var(--input-text-title-error-required) / <alpha-value>)',
        },
        color: {
          title: 'hsl(var(--text-title) / <alpha-value>)',
          subtitle: 'hsl(var(--text-subtitle) / <alpha-value>)',
          body: 'hsl(var(--text-body) / <alpha-value>)',
          caption: 'hsl(var(--text-caption) / <alpha-value>)',
          disabled: 'hsl(var(--text-disabled) / <alpha-value>)',
        }

			},
	},
}
