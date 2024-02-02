'use client';

import Avatar from '@/components/avatar/avatar';
import Container from '@/components/container/container';
import { fadeInAnimationVariants } from '@/utils/animations';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

export default function Intro() {
  const socialIconsData = [
    {
      svgIcon: (
        <svg
          className="svg-zoom-out"
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M8.69873 35.1925H1.47386V11.9641H8.69873V35.1925ZM5.04745 8.85666C2.79454 8.85666 0.930054 6.91449 0.930054 4.58389C0.930054 1.39873 4.34827 -0.621125 7.14499 1.0103C8.46567 1.70948 9.24253 3.10784 9.24253 4.58389C9.24253 6.91449 7.37805 8.85666 5.04745 8.85666ZM28.5088 35.1925V23.9279C28.5088 21.2088 28.4312 17.7906 24.7022 17.7906C20.9732 17.7906 20.4294 20.665 20.4294 23.6948V35.1925H13.2046V11.9641H20.1187V15.1493H20.1964C21.2063 13.3625 23.5369 11.4203 27.0328 11.4203C34.3354 11.4203 35.7337 16.2369 35.7337 22.4518V35.1925H28.5088Z"
            fill="#67748E"
          />
        </svg>
      ),
      redirect: 'https://www.linkedin.com/in/sangay-wangchuk-078632187/',
    },
    {
      svgIcon: (
        <svg
          className="svg-zoom-out"
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M30.2547 5.53772C33.5176 8.80057 35.5374 13.0733 35.5374 17.7345C35.5374 27.2123 27.6134 34.981 18.0579 34.981C15.1835 34.981 12.3868 34.2041 9.82311 32.8835L0.733765 35.2141L3.14205 26.2801C1.66601 23.7164 0.811451 20.7643 0.811451 17.6569C0.811451 8.17907 8.58013 0.4104 18.0579 0.4104C22.7191 0.4104 27.0696 2.27488 30.2547 5.53772ZM18.0579 32.0289C25.982 32.0289 32.5853 25.5809 32.5853 17.7345C32.5853 13.8502 30.9539 10.2766 28.2349 7.55758C25.5158 4.83854 21.9422 3.3625 18.1356 3.3625C10.2115 3.3625 3.76355 9.81049 3.76355 17.6569C3.76355 20.3759 4.54041 23.0172 5.93878 25.3478L6.32721 25.8916L4.85116 31.1743L10.2892 29.6983L10.7554 30.009C13.0083 31.3297 15.4942 32.0289 18.0579 32.0289ZM25.982 21.3081C26.3704 21.5412 26.6811 21.6189 26.7588 21.8519C26.9142 22.0073 26.9142 22.8619 26.5258 23.8718C26.1373 24.8817 24.4282 25.814 23.6514 25.8916C22.253 26.1247 21.1654 26.047 18.4463 24.804C14.0959 22.9396 11.2992 18.5891 11.0661 18.356C10.833 18.0453 9.35699 16.0254 9.35699 13.8502C9.35699 11.7527 10.4446 10.7427 10.833 10.2766C11.2215 9.8105 11.6876 9.73281 11.9983 9.73281C12.2314 9.73281 12.5421 9.73281 12.7752 9.73281C13.086 9.73281 13.3967 9.65512 13.7851 10.5097C14.0959 11.3642 15.0281 13.4618 15.1058 13.6948C15.1835 13.9279 15.2612 14.161 15.1058 14.4717C14.3289 16.1031 13.3967 16.0254 13.8628 16.8023C15.5719 19.6767 17.2034 20.6866 19.767 21.9296C20.1554 22.1627 20.3885 22.085 20.6993 21.8519C20.9323 21.5412 21.7869 20.5313 22.0199 20.1428C22.3307 19.6767 22.6414 19.7544 23.0299 19.9098C23.4183 20.0651 25.5158 21.0751 25.982 21.3081Z"
            fill="#67748E"
          />
        </svg>
      ),
      redirect: 'https://api.whatsapp.com/send?phone=97517581267',
    },
    {
      svgIcon: (
        <svg
          className="svg-zoom-out"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="38"
          viewBox="0 0 40 38"
          fill="none"
        >
          <path
            d="M13.3557 30.2978C13.3557 30.1425 13.2003 29.9871 12.9672 29.9871C12.7342 29.9871 12.5788 30.1425 12.5788 30.2978C12.5788 30.4532 12.7342 30.6086 12.9672 30.5309C13.2003 30.5309 13.3557 30.4532 13.3557 30.2978ZM10.9474 29.9094C11.0251 29.754 11.2581 29.6763 11.4912 29.754C11.7242 29.8317 11.8019 29.9871 11.8019 30.1425C11.7242 30.2978 11.4912 30.3755 11.3358 30.2978C11.1027 30.2978 10.9474 30.0648 10.9474 29.9094ZM14.4433 29.8317C14.5987 29.754 14.8317 29.9094 14.8317 30.0648C14.9094 30.2201 14.754 30.2978 14.521 30.3755C14.2879 30.4532 14.0548 30.3755 14.0548 30.2201C14.0548 29.9871 14.2102 29.8317 14.4433 29.8317ZM19.4929 0C30.2914 0 39.07 8.23479 39.07 18.9556C39.07 27.5788 33.7873 34.959 26.0186 37.5227C25.0087 37.7558 24.6202 37.1343 24.6202 36.5905C24.6202 35.969 24.6979 32.7061 24.6979 30.1425C24.6979 28.278 24.0764 27.1127 23.3773 26.4912C27.7277 26.0251 32.3112 25.4036 32.3112 17.9456C32.3112 15.7704 31.5344 14.7605 30.2914 13.3621C30.4467 12.8183 31.1459 10.7985 30.0583 8.07942C28.4269 7.53561 24.6979 10.177 24.6979 10.177C23.1442 9.71084 21.5128 9.55547 19.8037 9.55547C18.1722 9.55547 16.5408 9.71084 14.9871 10.177C14.9871 10.177 11.1804 7.6133 9.6267 8.07942C8.53909 10.7985 9.16058 12.8183 9.39364 13.3621C8.15065 14.7605 7.52916 15.7704 7.52916 17.9456C7.52916 25.4036 11.9573 26.0251 16.3078 26.4912C15.6863 27.035 15.2201 27.8895 15.0648 29.1325C13.8995 29.6763 11.1027 30.5309 9.39364 27.5011C8.30603 25.6366 6.36386 25.4812 6.36386 25.4812C4.49938 25.4812 6.28617 26.7242 6.28617 26.7242C7.52916 27.268 8.38371 29.521 8.38371 29.521C9.54902 33.0169 14.9871 31.8516 14.9871 31.8516C14.9871 33.483 14.9871 36.1243 14.9871 36.6681C14.9871 37.1343 14.6763 37.7558 13.6664 37.6004C5.89774 34.959 0.537354 27.5788 0.537354 18.9556C0.537354 8.23479 8.77215 0 19.4929 0ZM8.07297 26.8019C8.15065 26.7242 8.30603 26.8019 8.4614 26.8796C8.61677 27.035 8.61677 27.268 8.53909 27.3457C8.38371 27.4234 8.22834 27.3457 8.07297 27.268C7.99528 27.1127 7.91759 26.8796 8.07297 26.8019ZM7.21841 26.1804C7.2961 26.1027 7.37379 26.1027 7.52916 26.1804C7.68453 26.2581 7.76222 26.3358 7.76222 26.4135C7.68453 26.5689 7.52916 26.5689 7.37379 26.4912C7.21841 26.4135 7.14073 26.3358 7.21841 26.1804ZM9.70439 28.9772C9.85976 28.8218 10.0928 28.8995 10.2482 29.0548C10.4036 29.2102 10.4036 29.4433 10.3259 29.521C10.2482 29.6763 10.0151 29.5986 9.85976 29.4433C9.6267 29.2879 9.6267 29.0548 9.70439 28.9772ZM8.84983 27.8119C9.00521 27.7342 9.16058 27.8119 9.31595 27.9672C9.39364 28.1226 9.39364 28.3557 9.31595 28.4333C9.16058 28.511 9.00521 28.4333 8.84983 28.278C8.69446 28.1226 8.69446 27.8895 8.84983 27.8119Z"
            fill="#67748E"
          />
        </svg>
      ),
      redirect: 'https://github.com/sangaywangchuk',
    },
  ];

  return (
    <Container
      bgColor="bg-white"
      className="flex-col items-center justify-center px-[24px]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.9,
          ease: 'easeIn',
          opacity: {
            duration: 1,
          },
          duration: 1,
        }}
      >
        <Avatar src="/profile_avatar.png" />
      </motion.div>
      <div className="mt-[24px] w-full space-y-[28px] text-center md:w-[66%]">
        <div className="text-center">
          <motion.h3
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={1}
          >
            Hi, I’m Sangay Wangchuk
          </motion.h3>
          <span className="text-primary-500 font-poppins_medium flex items-center justify-center space-x-[6px] text-[16px] font-[600] md:text-[18px]">
            <motion.span
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={2}
              className="text-textSecondary font-poppins_thin"
            >
              I am a
            </motion.span>
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={3}
            >
              <Typewriter
                options={{
                  strings: [
                    'Web App Developer',
                    'Mobile App Developer',
                    'Website Maintainer',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.div>
          </span>
        </div>
        <motion.p
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={4}
          className="text-textSecondary font-poppins text-[14px]"
        >
          Over the course of 4 years in the tech industry, I have delved into
          diverse areas of design and development, refining my expertise as a
          frontend specialist. Seamlessly blending design aesthetics with
          intuitive functionality, I craft immersive digital experiences that
          deeply resonate with users. Within the intricate realm of coding, I
          thrive on addressing complex challenges with creative solutions.
          {/* With over 4 years of experience in the tech industry, I've explored various
          facets of design and development, honing my skills as a frontend
          specialist. I harmoniously blend design aesthetics with intuitive
          functionality, crafting immersive digital experiences that profoundly
          connect with users. Within the intricate domain of code, complex
          challenges find resolution through creative solutions. */}
        </motion.p>
      </div>
      <div className="mt-[48px] flex flex-col items-center justify-center space-y-[28px]">
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={5}
          className="flex items-center space-x-[24px]"
        >
          {socialIconsData.map((item, index) => (
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={5}
              key={index}
            >
              <Link href={item.redirect} key={index} target="_blank">
                {item.svgIcon}
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={6}
        >
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sangaywangchuk100@gmail.com"
            target="_blank"
          >
            <button type="button" className="btn-primary">
              Hire Me
            </button>
          </Link>
        </motion.div>
      </div>
    </Container>
  );
}
