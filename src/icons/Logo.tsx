import { Icon } from '@chakra-ui/react';

export function LogoIcon() {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      fill="none"
      viewBox="0 0 42 42"
      transition="all 0.2s ease-in-out"
      _hover={{ transform: 'scale(1.05)', filter: 'brightness(150%)' }}
    >
      <rect
        width="40"
        height="40"
        x="1"
        y="1"
        fill="#1A1A2E"
        stroke="#E94560"
        strokeWidth="2"
        rx="2.316"
      />
      <path
        fill="#E94560"
        d="M18.67 32v-6.96l-5.91-12.6h4.74l1.74 4.5c.28.74.55 1.46.81 2.16.26.68.52 1.4.78 2.16h.12c.28-.76.56-1.48.84-2.16.28-.7.55-1.42.81-2.16l1.77-4.5h4.62l-5.91 12.6V32h-4.41z"
      />
    </Icon>
  );
}
