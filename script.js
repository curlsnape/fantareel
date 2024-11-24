let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    scrub: 3,
    start: "-10% 50%",
    end: "50% 50%",
  },
});
tl.to(
  "#fanta",
  {
    top: "120%",
    rotate: 20,
    left: "-1%",
    width: "38%",
  },
  "orange"
);
tl.to(
  "#slice",
  {
    top: "170%",
    width: "12%",
    left: "18%",
  },
  "orange"
);
tl.to(
  "#orange",
  {
    top: "162%",
    left: "80%",
  },
  "orange"
);
tl.to(
  "#lleaf",
  {
    top: "110%",
    left: "80%",
  },
  "orange"
);
tl.to(
  "#rleaf",
  {
    top: "110%",
    left: "0%",
    rotate: 45,
  },
  "orange"
);
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",

    scrub: 3,
    start: "-10% 50%",
    end: "40% 50%",
  },
});
tl2.from(
  "#sprite",
  { opacity: 0, rotate: -120, left: "-100%" },
  "three"
);
tl2.from("#lemon", { opacity: 0, left: "-100%", top: "20%" }, "three");
tl2.from(
  "#coke",
  {
    opacity: 0,
    rotate: 120,
    left: "100%",
  },
  "three"
);
tl2.from("#lemon2", { opacity: 0, left: "100%", top: "20%" }, "three");
tl2.to(
  "#fanta",
  {
    top: "217%",
    left: "35%",
    width: "30%",
    rotate: 0,
  },
  "three"
);
tl2.to(
  "#slice",
  {
    top: "203%",
    left: "43%",
    width: "13%",
  },
  "three"
);
