'use client';

import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';

export const MyClientAnimationWrapper = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'>
>((props, ref) => {
  const { children, ...buttonProps } = props;
  return (
    <motion.div {...buttonProps} ref={ref}>
      {props.children}
    </motion.div>
  );
});

MyClientAnimationWrapper.displayName = 'MyClientAnimationWrapper';
