import { motion as m } from "framer-motion";

interface OpacityProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function MotionOpacity({ children, id, className }: any) {
  return (
    <m.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      className={className}
      id={id}
    >
      {children}
    </m.section>
  );
}

export function MotionUpOpacity({ children, className, id }: any) {
  return (
    <m.section
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      className={className}
      id={id}
    >
      {children}
    </m.section>
  )
}

export function MotionDownOpacity({ children, className, id }: any) {
  return (
    <m.section
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: -100, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      className={className}
      id={id}
    >
      {children}
    </m.section>
  )
}
