"use client"
import { FaAngleDown } from "react-icons/fa"
import { useRef, useState,useEffect } from 'react';

export default function Dropdown({ children, title,className,classNameList }: { children: React.ReactNode, title: React.ReactNode,className?:string,classNameList?:string }) {
  const dropdownRef: any = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
<div tabIndex={0} role="button" className="flex gap-2 justify-center items-center" onClick={() => setIsOpen(!isOpen)}  > {title}  </div>
{isOpen && 
 <ul tabIndex={0} className={`dropdown-content text-nowrap bg-base-100 rounded-box z-[1]  shadow overflow-hidden ${classNameList}`} onClick={() => setIsOpen(!isOpen)}>
 {children}
</ul>
}
   
</div>

  )


}
