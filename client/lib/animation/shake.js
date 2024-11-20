export function shake(target) {
  const animation = gsap.fromTo(
    target,
    {
      x: -5,
    },
    {
      duration: 0.1,
      x: 0,
      repeat: 5,
      yoyo: true,
    }
  );

  return animation;
}
