'use client';

import { motion } from 'framer-motion';

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1
  }
};

const AllLearningTechs = () => {
  return (
    <>
      <motion.p
        className="text-base text-center lg:text-start mb-2.5 text-gray-400"
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        I am currently learning or interested in learning:
      </motion.p>

      <motion.ul
        className="flex justify-center items-center flex-wrap gap-3.5 text-[#444]"
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
        <motion.li
          style={{ opacity: 1, transform: 'none' }}
          variants={animation}
        >
          <div className="transition duration-200 text-[#326DE6]">
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <title>Kubernetes</title>
              <path d="M4.5 14.569c.214.278.539.431.874.431h5.251c.335 0 .66-.165.875-.434l3.258-4.178c.214-.278.288-.633.214-.978l-1.165-5.207a1.128 1.128 0 00-.606-.777l-4.714-2.31A1.062 1.062 0 008.002 1c-.168 0-.335.038-.485.115l-4.715 2.32a1.129 1.129 0 00-.605.777L1.032 9.42c-.084.345 0 .7.214.978L4.5 14.568z" />
              <path
                fill="#ffffff"
                fillRule="evenodd"
                d="M12.741 9.128c.098.002.196.01.293.024l.058.013.031.008a.308.308 0 01.26.371.306.306 0 01-.396.223h-.004l-.003-.001-.003-.002a1.58 1.58 0 00-.03-.006l-.05-.01a2.55 2.55 0 01-.274-.106 2.867 2.867 0 00-.533-.157.242.242 0 00-.171.064 4.656 4.656 0 00-.131-.023 3.971 3.971 0 01-1.764 2.212c.015.042.032.083.051.123a.239.239 0 00-.023.18c.074.17.165.332.271.484.06.078.114.16.164.244l.028.057.012.025a.306.306 0 01-.381.44.308.308 0 01-.172-.18l-.01-.02a1.57 1.57 0 01-.028-.058 2.546 2.546 0 01-.089-.28 2.837 2.837 0 00-.21-.512.242.242 0 00-.156-.095l-.03-.053-.035-.064a3.97 3.97 0 01-2.823-.007l-.07.125a.25.25 0 00-.132.064 2.13 2.13 0 00-.237.548 2.518 2.518 0 01-.088.28 1.196 1.196 0 01-.025.05l-.013.027v.001a.306.306 0 01-.421.173.308.308 0 01-.173-.314.306.306 0 01.041-.12l.014-.03.026-.052c.05-.085.104-.166.164-.244.108-.156.2-.322.277-.496a.302.302 0 00-.028-.173l.056-.133A3.972 3.972 0 014.22 9.532l-.134.023a.34.34 0 00-.176-.062 2.871 2.871 0 00-.533.156c-.09.04-.181.075-.274.105a1.017 1.017 0 01-.05.011l-.03.007H3.02l-.002.002h-.005a.308.308 0 01-.397-.349.306.306 0 01.261-.245l.005-.001h.002l.006-.002c.024-.006.054-.014.076-.018.097-.013.195-.021.293-.023.186-.013.37-.043.549-.09a.422.422 0 00.131-.133l.128-.037a3.938 3.938 0 01.625-2.752l-.098-.087a.338.338 0 00-.062-.176 2.854 2.854 0 00-.455-.319 2.557 2.557 0 01-.254-.148l-.048-.038-.015-.013-.004-.003a.323.323 0 01-.076-.45.295.295 0 01.244-.107.365.365 0 01.213.08l.022.017c.016.013.034.026.046.037.072.067.139.139.202.213.125.137.263.262.412.372.056.03.121.036.182.018l.11.078a3.938 3.938 0 012.552-1.224l.008-.129a.332.332 0 00.099-.158 2.844 2.844 0 00-.034-.553 2.56 2.56 0 01-.042-.29v-.082-.005A.306.306 0 018 2.82a.308.308 0 01.306.337v.087a2.529 2.529 0 01-.041.29 2.85 2.85 0 00-.035.553.242.242 0 00.1.153v.007l.007.129c.967.088 1.87.522 2.54 1.223l.116-.082a.34.34 0 00.186-.02c.149-.11.287-.236.412-.373.063-.075.13-.146.202-.213l.051-.04.017-.014a.307.307 0 11.381.477l-.024.02c-.015.012-.03.025-.043.034a2.537 2.537 0 01-.254.148 2.87 2.87 0 00-.455.32.241.241 0 00-.058.172l-.05.044-.058.053c.542.806.77 1.783.637 2.745l.123.036c.031.055.077.101.133.132.179.048.363.078.548.09zM7.291 5.24c.107-.024.216-.043.326-.056l-.09 1.6-.008.004a.268.268 0 01-.293.256.27.27 0 01-.135-.05l-.002.001-1.316-.93c.419-.41.945-.696 1.518-.825zm1.618 1.75l1.308-.924a3.182 3.182 0 00-1.833-.882l.09 1.598h.002a.268.268 0 00.294.256.27.27 0 00.135-.05l.004.002zm2.248 1.656L9.609 8.2l-.002-.006a.27.27 0 01-.185-.343.27.27 0 01.08-.12L9.5 7.73l1.195-1.067c.366.594.527 1.29.46 1.983zM9.096 9.5l.618 1.49a3.148 3.148 0 001.275-1.598l-1.593-.269-.002.003a.26.26 0 00-.166.023.27.27 0 00-.13.348l-.002.003zm-.385 1.905c-.573.13-1.17.1-1.727-.088l.777-1.4h.001a.27.27 0 01.475-.001h.006l.779 1.402a3.286 3.286 0 01-.311.087zm-2.418-.422l.611-1.474-.004-.006a.268.268 0 00-.297-.37L6.6 9.13l-1.579.267a3.16 3.16 0 001.272 1.586zm-.997-4.32l1.201 1.071-.001.007a.269.269 0 01-.106.462l-.001.005-1.54.443a3.134 3.134 0 01.447-1.988zm2.95 1.154h-.492l-.307.38.11.476.443.213.442-.212.11-.476-.306-.381z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </motion.li>

        <motion.li
          style={{ opacity: 1, transform: 'none' }}
          variants={animation}
        >
          <div className="transition duration-200 grayscale grayscale-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="32px"
              height="32px"
            >
              <title>Jenkins</title>
              <path
                fill="#ffe0b2"
                d="M15.2,33.5c-0.5,0.3-8.2,5.2-8.2,5.5c0,0.4,0,0.4,0,0.4L8.4,43h31.2c0,0,1.5-4.8,1.4-6 c0-0.6-5-3.9-5-3.9s3.9-3.9,4-12.4c0-0.8,0-1.6-0.1-2.4C39.2,8.7,33.1,5.3,26.7,5c-6.5-0.2-10.1,2.8-10.1,2.8s-4.1,1.4-4.5,4.7 c0,0-3.2,0.6-1.5,7.1C9.3,20.6,9,22,9,23c0,1.3,0.4,2.8,1.2,3.7c1.7,1.8,3.1,1.4,3.1,1.4S13.9,31.3,15.2,33.5z"
              />
              <path
                fill="#f44336"
                d="M36.8,36.9C36.6,35.6,36,35,34.7,35h-0.1l-0.1,0c-0.4,0.1-1,0.3-2.7,1.5l-1,0.7 C30.6,37.1,30.3,37,30,37c-0.5,0-0.9,0.2-1.3,0.5l-1-0.5L26,36.1c-0.9-0.4-1.8-0.7-2.5-0.7c-0.5,0-0.9,0.1-1.3,0.3 c-0.5,0.4-0.7,1-0.6,1.8c0,0.4,0.1,0.9,0.1,1.3c0.2,2.1,0.3,3.6,2.3,3.7c0.1,0,0.2,0,0.3,0c1.1,0,2.4-0.4,3.6-1.3l0.9-0.6 c0.3,0.2,0.7,0.4,1.1,0.4c0.5,0,0.9-0.2,1.2-0.4l1.4,0.3c0.6,0.1,1.1,0.2,1.6,0.2l0.4,0c0.5,0,1,0,1.5-0.3c0.6-0.3,0.9-1,0.9-2.1 c0-0.5-0.1-1-0.1-1.4L36.8,36.9z"
              />
              <path
                fill="#fff"
                d="M21.7,38.9c0-0.4-0.1-0.8-0.1-1.3c-0.1-0.6,0-1,0.2-1.4c-5-0.1-6.6-2.7-6.6-2.7s-0.3,1.6,1.1,3.4 c2.1,2.5,5.3,2.8,5.3,2.8h0.2C21.8,39.5,21.8,39.2,21.7,38.9z"
              />
              <path
                fill="#546e7a"
                d="M22.9,43l-0.7-1.4c-0.1-0.3-0.2-0.6-0.3-1.1l-0.1-0.7l-0.7-0.1c-0.9-0.2-3.1-0.8-4.7-2.7 c-0.5-0.6-0.8-1.3-1-2L15,33.7l-1.1,0.7c-2,1.3-5.3,3.4-6.4,4.3l-0.6,0.5L8.4,43L22.9,43L22.9,43z"
              />
              <path
                fill="#455a64"
                d="M12.2,43h10.7l-0.7-1.4c-0.1-0.3-0.2-0.6-0.3-1.1l-0.1-0.7l-0.7-0.1c-0.9-0.2-3.1-0.8-4.7-2.7 c-0.1-0.1-0.2-0.3-0.3-0.4L11,40L12.2,43z"
              />
              <path
                fill="#546e7a"
                d="M40.7,36.5c-0.6-0.6-2.4-1.9-3.1-2.4l-0.7-0.5c-0.2,0.2-0.6,0.7-1.3,1.2l0.7,0.7 c0.3,0.3,0.5,0.8,0.6,1.3l0,0.3c0.1,0.4,0.1,0.9,0.1,1.4c0,1.7-0.6,2-0.9,2.1c-0.2,0.1-0.5,0.2-0.8,0.2l0.1,2h4.1l0.2-0.7 c0.5-1.6,1.1-3.9,1.2-4.9l0-0.5L40.7,36.5z"
              />
              <path
                fill="#455a64"
                d="M39.6,43l0.2-0.7c0.3-0.8,0.5-1.9,0.8-2.8l-3.7-2c0,0.3,0.1,0.7,0.1,1.1c0,1.7-0.6,2-0.9,2.1 c-0.2,0.1-0.5,0.2-0.8,0.2l0.1,2L39.6,43L39.6,43z"
              />
              <path
                fill="#616161"
                d="M10.3,19.8C10.3,19.8,10.4,19.7,10.3,19.8L10.3,19.8l0.1-0.1c0.5-0.4,1.2-0.7,1.8-0.7 c0.6,0,0.9,0.2,1.2,0.3c1.3,0.7,1.6,2,1.7,2.9l0,0l0,0.1l0,0.1c0.6-0.2,1.2-0.4,1.4-0.5c0-0.1,0-0.3-0.1-0.6 c-0.1-0.4-0.2-0.9-0.4-1.4c-0.4-1.1-0.3-2.5,0.3-4.3l0.1-0.2c0.1-0.4,0.3-0.8,0.3-1.1c0-0.3,0.1-0.6,0.1-0.7c0-0.3-0.1-0.5-0.2-0.8 l-0.2-0.5l0.3-0.5c0.9-1.5,4.2-6.5,10.9-6.5c0.2,0,0.4,0,0.7,0l-0.2,0C27.7,5.1,27.2,5,26.7,5c-0.2,0-0.5,0-0.7,0l0,0 c-5.4,0-8.7,2.3-9.3,2.7l-0.1,0.1l-0.1,0.1c-0.6,0.2-3.7,1.5-4.3,4.2L12,12.4l-0.4,0.2c-0.4,0.2-0.7,0.5-0.9,0.9 c-0.7,1.2-0.8,3-0.3,5.5l0.1,0.5L10.1,20c0,0-0.1,0.1-0.1,0.1C10.1,20,10.2,19.9,10.3,19.8z"
              />
              <path
                fill="#263238"
                d="M28 41H34V43H28zM14.2 22.4c-.1-.9-.4-1.7-1.1-2.1-.3-.1-.5-.2-.8-.2-.5 0-1.1.2-1.6.9l-.7-2c.9-.5 1.7-.8 2.5-.8.5 0 1 .1 1.5.3.4.2.8.5 1.1.8-.2-1.4.1-2.9.5-4.1.2-.5.3-1 .4-1.3.1-.6 0-.7-.2-1-1.9.2-3.5.7-3.5.7l-.5-1.9c.1 0 2.1-.6 4.4-.8l.7-.1.3.6c0 0 .1.1.1.2.3.3.7.9.8 1.9 0 .2 0 .6-.1.9-.1.5-.3.9-.4 1.5-.4 1.2-.7 2.6-.3 3.6.2.6.3 1.2.4 1.6.1.4.2 1.3-.2 1.6-.4.3-2.7 1-2.7 1S14.3 23.3 14.2 22.4z"
              />
              <path
                fill="#263238"
                d="M17.5,12.6l-1.8-0.8c0-0.1,3.7-8.2,13-7.6l-0.1,2C20.6,5.8,17.5,12.6,17.5,12.6z"
              />
              <path
                fill="#fff"
                d="M22,36.2c-5.1,0-6.8-2.7-6.8-2.7s-0.3,1.6,1.1,3.4c2.1,2.5,5.3,2.8,5.3,2.8"
              />
              <path
                fill="#263238"
                d="M21.5 40.7c-.1 0-3.6-.4-5.9-3.2-1.7-2.2-1.4-4-1.3-4.2l.5-2.6 1.4 2.3c.1.1 1.5 2.2 5.9 2.2v2c-2.1 0-3.7-.4-4.9-1 0 0 0 0 0 .1 1.8 2.1 4.5 2.4 4.6 2.4L21.5 40.7zM34.7 42c-.1 0-.2 0-.3 0-1.8 0-3.5-.6-3.6-.6l.7-1.9c0 0 1.4.5 2.8.5l.1 0c.5 0 1 0 1.3-.1C36 39.7 36 39 36 38.6c0-.4-.1-.9-.1-1.3l0-.3c-.1-.8-.4-1.1-1.2-1.1-.6.1-2.5 1.5-3.2 2L31 38.3l-1.2-1.6.4-.3c1.9-1.4 3.4-2.4 4.4-2.4 1.8 0 2.9 1 3.2 2.8l0 .3c.1.4.1 1 .2 1.5 0 1.5-.4 2.6-1.4 3C35.9 42 35.3 42 34.7 42z"
              />
              <path
                fill="#263238"
                d="M24.3 43.6c-.1 0-.2 0-.3 0-2.9-.2-3.1-2.5-3.2-4.6 0-.4-.1-.8-.1-1.2-.2-1.6.5-2.4 1-2.8 1.3-.9 3.3-.5 4.8.2l3 1.6-.9 1.8-3-1.6c-1.2-.6-2.4-.7-2.7-.4-.2.2-.2.6-.2.9.1.4.1.9.1 1.3.2 2.4.4 2.7 1.4 2.8 2.1.2 4.2-1.8 4.2-1.9l1.4 1.4C29.6 41.3 27.2 43.6 24.3 43.6zM21 15.4c0 0-.2.6-.6.6-.2 0-.4-.4-.4-.8 0-1.2.8-2.7 1.6-3.4.6-.5 1.4-.8 2.3-.8.4 0 .9 0 1.3.2.5.2.8.6.8 1.4 0 0 0 .4-1.3.4-.8 0-1.8.1-2.2.5C22.1 13.9 21.5 14.3 21 15.4zM26.4 21c-.5 0-1.1-.1-1.6-.2-.6-.1-.9-.7-.7-1.2l.2-.3c.1-.2.3-.3.5-.3.1 0 .2 0 .3 0 .8.2 2 .2 2.4.2-.5-1.9-.4-3.3-.1-3.3s1.1 2.3 1.5 2.8c.4.5.3 1.1-.1 1.5C28.1 20.8 27.3 21 26.4 21zM36.4 21c-.2 0-.3 0-.5 0-.6-.1-.9-.5-.9-1.1 0 0 .1-.9.6-.9.4 0 .9.2 1.1.2C36.5 18 36.2 16 36.5 16c.3 0 1 2.4 2.4 3.3.4.3.4.9-.2 1.3C37.9 20.9 37.2 21 36.4 21zM38.3 14.5c-.2-.8-1.1-1.5-2.1-1.8C34.9 12.4 34 13 34 13c0-.9.7-1.6 1-1.7.4-.2.6-.3 1-.3 2.1 0 2.9 1.3 3.6 2.6L38.3 14.5z"
              />
              <path
                fill="#263238"
                d="M31.9 27c-.1 0-.3 0-.4 0 0 0 0 0 0 0-.7 0-1.3-.2-1.7-.7-.8-.9-.9-2.1-.6-2.3.3-.2.5.5 1.5.8 0 0 .7.1.9.1.2 0 .3 0 .5 0 1.3 0 2.4-.3 2.8-.6C35 24.2 35 24 35 24c0 0 0-.3-1.3-1.5-1.3-1.2-1.7-2.7-1.7-4 0-1.5.2-2.5.4-2.5.3 0 .6 3.2 2.7 5 1.5 1.3 1.9 2.2 1.9 3.1 0 .9-.5 1.4-.8 1.7C35.1 26.8 33.3 27 31.9 27zM31.4 30c-3.1-.1-4.7-2-4.7-2s3.5.3 5.8.3V30H31.4zM33.6 30v-.9-.9c.2-.1 1.8.1 3.6-.6C36.8 29.7 33.7 30 33.6 30zM29.1 33c-2.2 0-3.3-.6-4.1-3.2 0 0-.1-.2.2-.3s.4.1.4.1c.4 1.1 2.1 1.4 4.2 1.4.1 0 .2 0 .3 0 1 0 3 0 3 0s-.4 2-2.5 2C30.3 33 29.3 33 29.1 33z"
              />
              <path
                fill="#263238"
                d="M29 37c-3.2 0-5.7-1-8.4-3.9-1.5-1.6-1.5-3.7-1.3-3.9s.5 1.2 1.7 2.5c2.4 2.6 5.8 3.4 8.7 3.2 3.8-.3 5.4-2.5 5.7-2.7l1.7 1.2c-.1.1-2.4 3.1-7.2 3.5C29.5 37 29.3 37 29 37zM13.4 29l-.1-1-.1-1c0 0 .2-.1.6-.4.3-.2.6-.2.9 0l.5.4c.3.3.3.8 0 1.1C14.3 28.9 13.5 29 13.4 29zM13 23l1.6.6c-.1-.4-.6-2.2-2-2.6-.4-.1-1.1.2-1.2.9 0 0 0 .2 0 .3 0 0 0 .1 0 .1C11.5 24 13 25 13 25V23z"
              />
              <path
                fill="#263238"
                d="M30,42c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S31.7,42,30,42z M30,38c-0.5,0-1,0.4-1,1s0.4,1,1,1 s1-0.4,1-1S30.6,38,30,38z"
              />
              <path
                fill="#263238"
                d="M39.6,44H8.4c-0.4,0-0.8-0.2-0.9-0.6l-1.4-3.5C6,39.6,6,39.5,6,39.3l0-0.4c0.1-1,5.7-4.5,7.9-5.8 c-0.7-1.5-1.2-3.1-1.4-4.1c-0.8-0.1-1.8-0.5-3-1.7C8.4,26.2,8,24.3,8,23c0-0.9,0.2-2.4,1.4-3.7c-0.6-2.7-0.5-4.8,0.4-6.2 c0.4-0.7,0.9-1,1.3-1.3c0.8-3.1,4.1-4.5,4.9-4.9c0.8-0.6,4.5-3.1,10.7-2.9c8.4,0.3,13.6,5.5,14.2,14.2C41,19,41,19.8,41,20.6 c0,6.5-2.3,10.5-3.5,12.1c4.5,3.1,4.5,3.6,4.5,4.1c0.1,1.3-1.1,5.2-1.5,6.4C40.4,43.7,40,44,39.6,44z M9.1,42h29.7 c0.6-1.9,1.1-3.9,1.2-4.7c-0.6-0.6-2.7-2.2-4.6-3.4c-0.2-0.2-0.4-0.4-0.4-0.7s0.1-0.6,0.3-0.8c0,0,3.6-3.7,3.7-11.7 c0-0.7,0-1.5-0.1-2.3C38.2,8,30.9,6.2,26.6,6c-6-0.2-9.4,2.5-9.5,2.6c-0.1,0.1-0.2,0.1-0.3,0.2c0,0-3.5,1.2-3.8,3.9 c-0.1,0.4-0.4,0.8-0.8,0.9c-0.7,0.2-1.8,1.7-0.7,5.9c0.1,0.4,0,0.8-0.3,1c-1,0.8-1.1,2-1.1,2.6c0,1.2,0.4,2.4,1,3 c1.2,1.3,2.1,1.1,2.1,1.1c0.3-0.1,0.6,0,0.8,0.1c0.2,0.2,0.4,0.4,0.4,0.7c0,0,0.5,3.1,1.8,5.1c0.1,0.2,0.2,0.5,0.1,0.8 c-0.1,0.3-0.2,0.5-0.5,0.6c-0.7,0.4-6.3,4-7.7,5L9.1,42z M40.1,37.4L40.1,37.4L40.1,37.4z"
              />
            </svg>
          </div>
        </motion.li>

        <motion.li
          style={{ opacity: 1, transform: 'none' }}
          variants={animation}
        >
          <div className="transition duration-200 grayscale grayscale-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="32px"
              height="32px"
            >
              <title>Terraform</title>
              <polygon fill="#6042ea" points="17,23 5,16 5,2 17,9" />
              <polygon fill="#6042ea" points="31,31 19,24 19,10 31,17" />
              <polygon fill="#4040b2" points="33,31 45,24 45,10 33,17" />
              <polygon fill="#6042ea" points="31,47 19,40 19,26 31,33" />
            </svg>
          </div>
        </motion.li>
      </motion.ul>
    </>
  );
};

export default AllLearningTechs;
