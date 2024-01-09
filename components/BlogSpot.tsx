import { forwardRef } from "react";

const BlogSpot = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref}></div>;
});

export default BlogSpot;
