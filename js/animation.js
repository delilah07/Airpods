export const loadAnim = () => {
  const tl = gsap.timeline({ default: { duration: 1 } });
  tl.to('body', { opacity: 1 })
    .from(
      '.header__logo',
      {
        scale: 0,
      },
      0.5
    )
    .from('.header .nav__link', {
      x: 200,
    })
    .fromTo(
      '.header .nav__item:last-child',
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        ease: 'none',
      }
    )
    .from('.design__image', { opacity: 0, duration: 2 }, '<0.5')
    .fromTo(
      '.design__title span:nth-child(1)',
      { opacity: 0, x: -300, y: 300 },
      { opacity: 1, x: -300, y: 300, duration: 0.5 },

      '-=1.5'
    )
    .to(
      '.design__title span:nth-child(1)',
      {
        motionPath: {
          path: [
            { x: -300, y: 300 },
            { x: -100, y: -100 },
            { x: 0, y: 0 },
          ],
        },

        duration: 2,
      },
      '-=1.4'
    )
    .fromTo(
      '.design__title span:nth-child(2)',
      { opacity: 0, x: -250, y: -300 },
      { opacity: 1, x: -250, y: -300, duration: 0.5 },
      '-=1.5'
    )
    .to(
      '.design__title span:nth-child(2)',
      {
        motionPath: {
          path: [
            { x: -250, y: -300 },
            { x: 50, y: -200 },
            { x: 0, y: 0 },
          ],
        },

        duration: 2,
      },
      '-=1.3'
    )
    .fromTo(
      '.design__title span:nth-child(3)',
      { opacity: 0, x: 300, y: -300 },
      { opacity: 1, x: 300, y: -300, duration: 0.5 },
      '-=1.5'
    )
    .to(
      '.design__title span:nth-child(3)',
      {
        motionPath: {
          path: [
            { x: 300, y: -300 },
            { x: 50, y: -200 },
            { x: 0, y: 0 },
          ],
        },

        duration: 2,
      },
      '-=1.4'
    )
    .fromTo(
      '.design__title span:nth-child(4)',
      { opacity: 0 },
      { opacity: 1 },
      '-=1'
    )
    .fromTo(
      '.design__title span:nth-child(5)',
      { opacity: 0, x: 300, y: -300 },
      { opacity: 1, x: 300, y: -300, duration: 0.5 },
      '-=0.8'
    )
    .to(
      '.design__title span:nth-child(5)',
      {
        motionPath: {
          path: [
            { x: 300, y: -300 },
            { x: 50, y: -200 },
            { x: 0, y: 0 },
          ],
        },

        duration: 2,
      },
      '-=0.5'
    );
};
export const scrollAnim = () => {
  let mm = gsap.matchMedia(),
    breakPoint = 800;

  mm.add(
    {
      // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    },
    (context) => {
      // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
      let { isDesktop, isMobile } = context.conditions;

      gsap.to('.design__image', {
        scrollTrigger: {
          trigger: '.design',
          start: isDesktop ? `0 top ` : '',
          end: isDesktop
            ? `${
                document.querySelector('.composition').offsetTop +
                document.querySelector('.composition').offsetHeight
              }`
            : '',
          scrub: true,
        },
        keyframes: isDesktop
          ? [
              {
                rotate: 0,
                scale: 0.8,
                y: `${document.querySelector('.composition').offsetTop / 4}`,
                x: 300,
                zIndex: -1,
                filter: 'blur(0)',
              },
              {
                rotate: 30,
                y: `${document.querySelector('.composition').offsetTop / 2}`,
                x: 500,
                filter: 'blur(10px)',
              },
              {
                y: `${
                  (document.querySelector('.composition').offsetTop / 4) * 3
                }`,
                x: 600,
              },
              {
                rotate: -30,
                scale: 0.8,
                y: `${document.querySelector('.composition').offsetTop * 1.1}`,
                x: -600,
              },

              {
                y: `${document.querySelector('.composition').offsetTop * 2}`,
              },
            ]
          : [],
      });
      document.querySelectorAll('.section__title').forEach((el, i) =>
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,

            start: isMobile
              ? i !== 0
                ? '-=50 bottom'
                : 'bottom bottom'
              : '+=100 bottom',
          },
          y: 20,
          opacity: 0,
        })
      );
      document.querySelectorAll('.section__text').forEach((el, i) =>
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: isMobile
              ? i !== 0
                ? '-=50 bottom'
                : '+=10 bottom'
              : '+=100 bottom',
          },
          y: 20,
          opacity: 0,
        })
      );
      document.querySelectorAll('.choose__item').forEach((el, i) =>
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: isDesktop ? '+=100 bottom' : '-=50 bottom',
          },
          opacity: 0,
          delay: i * 0.4,
        })
      );
      document.querySelectorAll('.composition__content p').forEach((el, i) =>
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: isDesktop ? '+=100 bottom' : '-=50 bottom',
          },
          opacity: 0,
          x: -200,
          delay: i * 0.4,
        })
      );

      gsap.from('.composition__picture', {
        scrollTrigger: {
          trigger: '.composition__picture',
          start: isDesktop ? '+=100 bottom' : '-=50 bottom',
        },
        opacity: 0,
        x: 200,
      });
      gsap.from('.case__picture', {
        scrollTrigger: {
          trigger: '.case__picture',
          start: isDesktop ? '+=200 bottom' : '-=50 bottom',
        },
        opacity: 0,
      });

      gsap.from('.case__number', {
        scrollTrigger: {
          trigger: '.case__number',
          start: isDesktop ? '+=200 bottom' : '-=50 bottom',
        },
        opacity: 0,
        textContent: 0,
        duration: 1,
        ease: Power1.easeIn,
        snap: { textContent: 1 },
        stagger: 2,
      });
      document.querySelectorAll('.picture__content p').forEach((el) =>
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: isDesktop ? '+=200 bottom' : '-=50 bottom',
          },
          y: 20,
          opacity: 0,
        })
      );

      gsap.from('.picture__sound', {
        scrollTrigger: {
          trigger: '.picture__sound',
          start: isDesktop ? '+=100 bottom' : '-=50 bottom',
        },
        keyframes: {
          scaleY: [0, 1, 0.9, 1, 0.9, 1],
        },
        duration: 5,
        transformOrigin: 'center bottom',
      });
    }
  );
};
console.log(document.querySelector('.composition'));
