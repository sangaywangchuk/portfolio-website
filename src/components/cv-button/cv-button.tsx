'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Swal from 'sweetalert2';

const contentVariant = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const contentItemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

export default function CvButton() {
  const [isOpen, setIsOpen] = useState(false);

  const downloadResume = () => {
    fetch('thinley-dhendup-ux-resume.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        const alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'thinley-dhendup-ux-resume.pdf';
        alink.click();
      });
    });
    Swal.fire({
      title: 'Download Completed!',
      text: 'Thank you for downloading resume.',
      icon: 'success',
      showConfirmButton: false,
      timer: 2500,
    });
  };
  return (
    <div className="cv-download-btn bg-white">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary-500 flex cursor-pointer items-center px-[6px] py-[12px]"
      >
        <p className="cv-text-orientation uppercase text-white">Resume</p>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.button
            onClick={downloadResume}
            initial={{ width: 0 }}
            animate={{
              width: 190,
              transition: { delay: 0.7, duration: 0.3 },
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
          >
            <motion.div
              className={`flex flex-col items-start px-[16px] py-[12px]`}
              initial="closed"
              animate="open"
              exit="closed"
              variants={contentVariant}
            >
              <motion.p
                variants={contentItemVariants}
                className="text-textSecondary uppercase"
              >
                Pdf
              </motion.p>
              <motion.div
                variants={contentItemVariants}
                className="flex items-center space-x-[8px]"
              >
                <p className="font-poppins_medium text-textPrimary mt-[4px] text-[18px]">
                  Download CV
                </p>
                <svg
                  className={`${isOpen ? `animate-bounce` : `animate-none`}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M8.46997 14.03C8.17697 13.737 8.17697 13.262 8.46997 12.969C8.76297 12.676 9.23801 12.676 9.53101 12.969L11.251 14.689V3.5C11.251 3.086 11.587 2.75 12.001 2.75C12.415 2.75 12.751 3.086 12.751 3.5V14.689L14.4709 12.969C14.7639 12.676 15.239 12.676 15.532 12.969C15.825 13.262 15.825 13.737 15.532 14.03L12.532 17.03C12.463 17.099 12.3801 17.154 12.2881 17.192C12.1961 17.23 12.099 17.25 12.001 17.25C11.903 17.25 11.8061 17.23 11.7141 17.192C11.6221 17.154 11.539 17.099 11.47 17.03L8.46997 14.03ZM18 9.75C17.586 9.75 17.25 10.086 17.25 10.5C17.25 10.914 17.586 11.25 18 11.25C19.577 11.25 20.25 11.923 20.25 13.5V18.5C20.25 20.077 19.577 20.75 18 20.75H6C4.423 20.75 3.75 20.077 3.75 18.5V13.5C3.75 11.923 4.423 11.25 6 11.25C6.414 11.25 6.75 10.914 6.75 10.5C6.75 10.086 6.414 9.75 6 9.75C3.582 9.75 2.25 11.082 2.25 13.5V18.5C2.25 20.918 3.582 22.25 6 22.25H18C20.418 22.25 21.75 20.918 21.75 18.5V13.5C21.75 11.082 20.418 9.75 18 9.75Z"
                    fill="#67748E"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
