"use client"
import { useRef, useState, useEffect } from 'react';

interface DropdownProps {
  children: React.ReactNode;
  title: React.ReactNode;
  className?: string;
  classNameList?: string;
}

interface MouseEvent extends Event {
  target: EventTarget | null;
}

export default function Dropdown({ children, title, className, classNameList }: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickOutside = (event: MouseEvent): void => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);   

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`dropdown ${className}`} ref={dropdownRef}>
      <div 
        tabIndex={0} 
        role="button" 
        className="flex gap-2 justify-center items-center" 
        onClick={() => setIsOpen(!isOpen)}
      > 
        {title}  
      </div>
      {isOpen && 
        <ul 
          tabIndex={0} 
          className={`dropdown-content text-nowrap bg-base-100 rounded-box z-[1] shadow overflow-hidden ${classNameList}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {children}
        </ul>
      }
    </div>
  );
}
