gsap.RegisterPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach(section => {
  ScrollTrigger.create({
  trigger: section,
  start: 'top up',
  pin: true,
  pinSpacing: false
  });
});