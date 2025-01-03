import { SVGProps } from 'react';

export const EditIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width='44' height='44' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g filter='url(#filter0_b_40060_13616)'>
        <rect width='44' height='44' rx='22' fill='#FFC133' fill-opacity='0.5' />
        <mask id='mask0_40060_13616' style={{ maskType: 'alpha' }} maskUnits='userSpaceOnUse' x='10' y='10' width='24' height='24'>
          <rect x='10' y='10' width='24' height='24' fill='#D9D9D9' />
        </mask>
        <g mask='url(#mask0_40060_13616)'>
          <path
            d='M14 31C13.7167 31 13.4792 30.9042 13.2875 30.7125C13.0958 30.5208 13 30.2833 13 30V27.575C13 27.3083 13.05 27.0542 13.15 26.8125C13.25 26.5708 13.3917 26.3583 13.575 26.175L26.2 13.575C26.4 13.3917 26.6208 13.25 26.8625 13.15C27.1042 13.05 27.3583 13 27.625 13C27.8917 13 28.15 13.05 28.4 13.15C28.65 13.25 28.8667 13.4 29.05 13.6L30.425 15C30.625 15.1833 30.7708 15.4 30.8625 15.65C30.9542 15.9 31 16.15 31 16.4C31 16.6667 30.9542 16.9208 30.8625 17.1625C30.7708 17.4042 30.625 17.625 30.425 17.825L17.825 30.425C17.6417 30.6083 17.4292 30.75 17.1875 30.85C16.9458 30.95 16.6917 31 16.425 31H14ZM27.6 17.8L29 16.4L27.6 15L26.2 16.4L27.6 17.8Z'
            fill='#484B51'
          />
        </g>
      </g>
      <defs>
        <filter id='filter0_b_40060_13616' x='-10' y='-10' width='64' height='64' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImageFix' stdDeviation='5' />
          <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_40060_13616' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur_40060_13616' result='shape' />
        </filter>
      </defs>
    </svg>
  );
};
