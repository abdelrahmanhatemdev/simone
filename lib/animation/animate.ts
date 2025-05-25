type AnimateOptions = {
  type?:
    | "fade"
    | "fadeScale"
    | "slideTop"
    | "slideDown"
    | "fadeSlideUp"
    | "fadeSlideDown"
    | "bounce"
    | "fillHorizontal";
  delay?: number;
  duration?: number;
  scaleFrom?: number;
  scaleTo?: number;
  opacityFrom?: number;
  opacityTo?: number;
  yFrom?: number;
  yTo?: number | number[];
  xFrom?: number;
  xTo?: number | string;
};

export function animate({
  type = "fade",
  delay = 0,
  duration = 0.8,
  scaleFrom = 0.8,
  scaleTo = 1,
  opacityFrom=0,
  opacityTo=1,
  yFrom=20,
  yTo=0,
  xFrom=0,
  xTo="100%",
}: AnimateOptions = {}) {
  const transition = { duration: duration, delay: delay };

  switch (type) {
    case "fade":
      return {
        visible: { opacity: opacityTo, transition },
        hidden: { opacity: opacityFrom },
      };

    case "fadeScale":
      return {
        visible: { opacity: opacityTo, scale: scaleTo, transition },
        hidden: { opacity: opacityFrom, scale: scaleFrom },
      };

    case "slideTop":
      return {
        visible: { y: yTo, transition },
        hidden: { y: yFrom },
      };

    case "slideDown":
      return {
        visible: { y: yTo, transition },
        hidden: { y: -yFrom },
      };

    case "fadeSlideUp":
      return {
        visible: { opacity: opacityTo, y: yTo, transition },
        hidden: { opacity: opacityFrom, y: yFrom },
      };

    case "fadeSlideDown":
      return {
        visible: { opacity: opacityTo, y:yTo, transition },
        hidden: { opacity: opacityFrom, y: -yFrom },
      };

    case "bounce":
      return {
        visible: { y: yTo, transition },
        hidden: { y: yFrom},
      };

    case "fillHorizontal":
      return {
        visible: { width: xTo, transition },
        hidden: { width: xFrom },
      };

    default:
      return {
        visible: { opacity: opacityTo, transition },
        hidden: { opacity: opacityFrom },
      };
  }
}
