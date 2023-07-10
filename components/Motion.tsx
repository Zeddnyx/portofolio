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
