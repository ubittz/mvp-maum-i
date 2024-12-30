import { SVGProps } from 'react';

interface CheckBoxProps extends SVGProps<SVGSVGElement> {
  isChecked: boolean;
}

export function CheckBox({ isChecked, ...props }: CheckBoxProps) {
  return isChecked ? (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect width='20' height='20' fill='white' />
      <mask id='mask0_40081_17622' style={{ maskType: 'alpha' }} maskUnits='userSpaceOnUse' x='0' y='0' width='20' height='20'>
        <rect width='20' height='20' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_40081_17622)'>
        <rect width='20' height='20' rx='4' fill='#484B51' />
        <rect x='4.64844' y='9.70703' width='1' height='5' transform='rotate(-45 4.64844 9.70703)' fill='white' />
        <rect x='15.0703' y='6' width='1' height='10' transform='rotate(45 15.0703 6)' fill='white' />
      </g>
    </svg>
  ) : (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <mask id='mask0_40081_17623' style={{ maskType: 'alpha' }} maskUnits='userSpaceOnUse' x='0' y='0' width='20' height='20'>
        <rect width='20' height='20' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_40081_17623)'>
        <rect x='0.5' y='0.5' width='19' height='19' rx='3.5' stroke='#484B51' />
      </g>
    </svg>
  );
}
