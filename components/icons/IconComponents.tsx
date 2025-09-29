import React from 'react';

const iconProps = {
  className: "w-6 h-6",
  strokeWidth: 1.5,
  stroke: "currentColor",
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const DashboardIcon: React.FC = () => (
  <svg {...iconProps} viewBox="0 0 24 24">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M4 4h6v8h-6z" />
    <path d="M4 16h6v4h-6z" />
    <path d="M14 12h6v8h-6z" />
    <path d="M14 4h6v4h-6z" />
  </svg>
);

export const ProductIcon: React.FC = () => (
  <svg {...iconProps} viewBox="0 0 24 24">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M18.004 18.333a5.612 5.612 0 0 0 -4.33 -4.515m-2.288 -1.15a5.64 5.64 0 0 0 -3.382 .653m-2.618 2.618a5.612 5.612 0 0 0 4.515 4.33" />
    <path d="M12 12a5.64 5.64 0 0 0 3.382 -.653m2.232 -2.232a5.612 5.612 0 0 0 -2.93 -4.43" />
    <path d="M12 12c-1.468 0 -2.812 .55 -3.818 1.48" />
    <path d="M3 3l18 18" />
  </svg>
);

export const OrderIcon: React.FC = () => (
  <svg {...iconProps} viewBox="0 0 24 24">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M9 5h10l-2 7h-8z" />
    <path d="M3 5h5l.5 2.5" />
    <path d="M11 18.004a2 2 0 1 0 4 .002a2 2 0 0 0 -4 -.002" />
    <path d="M3 18.004a2 2 0 1 0 4 .002a2 2 0 0 0 -4 -.002" />
    <path d="M12.5 13.5l-1.5 4.5" />
  </svg>
);

export const VendorIcon: React.FC = () => (
  <svg {...iconProps} viewBox="0 0 24 24">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 21l18 0" />
    <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
    <path d="M5 21v-10.15" />
    <path d="M19 21v-10.15" />
    <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
  </svg>
);

export const CustomerIcon: React.FC = () => (
  <svg {...iconProps} viewBox="0 0 24 24">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  </svg>
);

export const ReportIcon: React.FC = () => (
  <svg {...iconProps} viewBox="0 0 24 24">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" />
    <path d="M18 14v4h4" />
    <path d="M18 11h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
    <path d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
    <path d="M12 11v-1" />
    <path d="M3 12h3" />
    <path d="M3 15h3" />
  </svg>
);

export const SparklesIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg {...iconProps} className={`w-5 h-5 ${className || ''}`} viewBox="0 0 24 24">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
     <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2z" />
     <path d="M8 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2z" />
     <path d="M12 10a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2z" />
   </svg>
);