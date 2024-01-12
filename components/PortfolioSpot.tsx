import { forwardRef } from "react";

const PortfolioSpot = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref}></div>;
});

export default PortfolioSpot;
