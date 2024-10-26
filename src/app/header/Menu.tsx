// app/menu/signature/Menu.tsx (Client Component)
'use client'; // Ensure this is a client component to use Framer Motion

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define animation variants for the mobile menu
  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.3,
        delayChildren: 0.3,
        staggerChildren: 0.3
     },
    },
    closed: {
      opacity: 0,
      x: '-100%',
      transition: { 
        duration: 0.3
    },
    },
  };

  const itemVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { 
        type: 'spring',
        duration: 0.5, 
        stiffness: 90
    },
    },
    closed: {
      x: -50,
      opacity: 0,
      transition: { 
        type: 'spring',
        duration: 0.1, 
        stiffness: 100
    },
    },
  };

  return (
    <div>
      {/* Menu toggle button for mobile */}
      <button
        className="md:hidden text-white focus:outline-none z-50 relative mt-3"
        onClick={toggleMenu}
      >
        {isOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
      </button>

      {/* Mobile Menu Animation */}
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        style={{backgroundColor: "#003c22"}}
        className="absolute top-0 left-0 w-screen h-screen flex flex-col justify-center items-center md:hidden"
      >
            <motion.div variants={itemVariants} className="text-white text-lg mb-8">
                <Link href="/menu/signature" onClick={toggleMenu} >88 Signature & Combo</Link>
            </motion.div>
            <motion.div variants={itemVariants} className="text-white text-lg mb-8">
                <Link  href="/menu/soup"  onClick={toggleMenu} >Soup & Noodle</Link>
            </motion.div>
            <motion.div variants={itemVariants} className="text-white text-lg mb-8">
                <Link href="/menu/dish"  onClick={toggleMenu} >Raw & Stir Fried Dish</Link>
            </motion.div>
            <motion.div variants={itemVariants} className="text-white text-lg mb-8">
                <Link href="/menu/snack"  onClick={toggleMenu} >Snack & Soft Drink</Link>
            </motion.div>
            <motion.div variants={itemVariants} className="text-white text-lg m7-8">
                <Link href="/menu/alcohol"  onClick={toggleMenu} >Alcohol</Link>
            </motion.div>
      </motion.div>
    </div>
  );
}
