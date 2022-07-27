import { Icon, Link } from '@chakra-ui/react';
import { ElementType } from 'react';

interface SocialMediaItemProps {
  data: { icon: ElementType; href: string; noTargetBlank?: boolean };
}

export function SocialMediaItem({ data }: SocialMediaItemProps) {
  return (
    <Link href={data.href} target={data.noTargetBlank ? '' : '_blank'}>
      <Icon
        as={data.icon}
        color="brandRed.500"
        transition="all 0.2s ease-in-out"
        boxSize="32px"
        _hover={{
          transform: 'translateX(6px)',
        }}
      />
    </Link>
  );
}
