import SplitType from "split-type";
import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";

  // Reset scroll (replacement for smoother)
  window.scrollTo(0, 0);

  document.querySelector("main")?.classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  // 🔹 Split multiple elements
  const landingSplit = new SplitType(
    ".landing-info h3, .landing-intro h2, .landing-intro h1",
    { types: "chars,lines" }
  );

  gsap.fromTo(
    landingSplit.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      stagger: 0.025,
      delay: 0.3,
    }
  );
// const textProps = { types: "chars, lines" };
  const landingText2 = new SplitType(".landing-h2-info", {
  types: "chars,lines",
});
  gsap.fromTo(
    landingText2.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.8,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  const landingText3 = new SplitType(".landing-h2-info-1",{
  types: "chars,lines",});
  const landingText4 = new SplitType(".landing-h2-1",{
  types: "chars,lines",});
  const landingText5 = new SplitType(".landing-h2-2",{
  types: "chars,lines",});

  LoopText(landingText2, landingText3);
  LoopText(landingText4, landingText5);
}

function LoopText(Text1: SplitType, Text2: SplitType) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.inOut",
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.chars,
      { y: 80 },
      {
        y: 0,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1.chars,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2.chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}