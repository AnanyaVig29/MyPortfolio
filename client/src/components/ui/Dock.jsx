import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import { createContext, useContext, useRef, useState } from 'react';

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const DockContext = createContext(undefined);

function DockProvider({ children, value }) {
  return <DockContext.Provider value={value}>{children}</DockContext.Provider>;
}

function useDock() {
  const context = useContext(DockContext);
  if (!context) {
    throw new Error('useDock must be used within a DockProvider');
  }
  return context;
}

export function Dock({
  children,
  className,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
}) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={className}
    >
      <DockProvider value={{ mouseX, magnification, distance }}>
        {children}
      </DockProvider>
    </motion.div>
  );
}

export function DockItem({ children, className, onClick }) {
  const ref = useRef(null);
  const { mouseX, magnification, distance } = useDock();
  const [isHovered, setIsHovered] = useState(false);

  const mouseDistance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={className}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {typeof children === 'function' ? children(isHovered) : children}
    </motion.div>
  );
}

export function DockIcon({ children }) {
  return (
    <div style={{ 
      height: '100%', 
      width: '100%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      {children}
    </div>
  );
}

export function DockLabel({ children }) {
  return (
    <div style={{
      position: 'absolute',
      top: '-2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      whiteSpace: 'nowrap',
      borderRadius: '0.375rem',
      backgroundColor: 'rgba(26, 26, 26, 0.9)',
      padding: '0.25rem 0.5rem',
      fontSize: '0.75rem',
      color: 'white',
      opacity: 0,
      transition: 'opacity 0.2s',
      zIndex: 50
    }}>
      {children}
    </div>
  );
}
