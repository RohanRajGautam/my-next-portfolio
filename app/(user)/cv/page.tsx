import SectionContainer from '@/components/utils/SectionContainer';
import TitleSectionPageContainer from '@/components/utils/TitleSectionPageContainer';

const Blog = () => (
  <SectionContainer>
    <div
      className="w-full flex flex-col items-center gap-6"
      // style={{ height: '100vh' }}
    >
      <TitleSectionPageContainer title="Résumé" />

      <a
        download="rohan_cv.pdf"
        href="/rohan_cv.pdf"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded px-5 py-3 text-white bg-black hover:bg-gray-900 shadow-sm transition ease mx-auto"
      >
        <span className="font-medium text-base">Download</span>

        <svg
          width="30"
          height="33"
          viewBox="0 0 30 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-3 mb-1 h-5 w-5"
        >
          <path
            d="M1 23.996C0.734784 23.996 0.48043 24.1014 0.292893 24.2889C0.105357 24.4764 0 24.7308 0 24.996V31.129C0 31.3942 0.105357 31.6486 0.292893 31.8361C0.48043 32.0236 0.734784 32.129 1 32.129H29C29.2652 32.129 29.5196 32.0236 29.7071 31.8361C29.8946 31.6486 30 31.3942 30 31.129V24.996C30 24.7308 29.8946 24.4764 29.7071 24.2889C29.5196 24.1014 29.2652 23.996 29 23.996C28.7348 23.996 28.4804 24.1014 28.2929 24.2889C28.1054 24.4764 28 24.7308 28 24.996V30.129H2V24.996C2 24.7308 1.89464 24.4764 1.70711 24.2889C1.51957 24.1014 1.26522 23.996 1 23.996Z"
            fill="white"
          />
          <path
            d="M15 0.129C14.7348 0.129 14.4804 0.234357 14.2929 0.421893C14.1054 0.609429 14 0.863783 14 1.129V22.639L7.65701 16.512C7.56259 16.4208 7.45113 16.3491 7.32899 16.301C7.20686 16.2528 7.07644 16.2292 6.94518 16.2315C6.81393 16.2338 6.6844 16.2619 6.56401 16.3142C6.44362 16.3665 6.33471 16.4421 6.24351 16.5365C6.1523 16.6309 6.08059 16.7424 6.03246 16.8645C5.98434 16.9867 5.96074 17.1171 5.96301 17.2483C5.96529 17.3796 5.99339 17.5091 6.04572 17.6295C6.09805 17.7499 6.17359 17.8588 6.26801 17.95L14.291 25.701L14.293 25.703L14.305 25.714C14.342 25.75 14.389 25.765 14.429 25.794C14.491 25.839 14.549 25.889 14.621 25.918C14.8631 26.0181 15.135 26.0181 15.377 25.918C15.444 25.891 15.497 25.844 15.555 25.803C15.601 25.772 15.653 25.753 15.694 25.713L23.73 17.948C23.8244 17.8567 23.8999 17.7476 23.9522 17.6271C24.0045 17.5066 24.0325 17.377 24.0347 17.2456C24.0369 17.1143 24.0132 16.9838 23.9649 16.8616C23.9167 16.7394 23.8448 16.6279 23.7535 16.5335C23.6622 16.4391 23.5531 16.3636 23.4326 16.3113C23.3121 16.259 23.1825 16.231 23.0511 16.2288C22.9198 16.2266 22.7893 16.2503 22.6671 16.2986C22.5449 16.3468 22.4334 16.4187 22.339 16.51L16 22.639V1.129C16 0.863783 15.8946 0.609429 15.7071 0.421893C15.5196 0.234357 15.2652 0.129 15 0.129Z"
            fill="white"
          />
        </svg>
      </a>

      <iframe
        src="/rohan_cv.pdf"
        width="100%"
        height="100%"
        style={{ width: '100vw', height: '80vh', marginTop: '2rem' }}
      />
    </div>
  </SectionContainer>
);

export default Blog;
