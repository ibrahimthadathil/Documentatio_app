import * as React from "react";
const SVGComponent = (props:{color:string,className?:string,size?:string}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 43 40"
    width={props.size ? props.size:40}
    height={props.size ? props.size:30}
    {...props}
  >
    <title>{"yy"}</title>
    <defs>
      <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
        <path className={props.className}  fill={props.color} d="m172-2v43h-175v-43z" />
      </clipPath>
    </defs>
    <style>{`\n\t\t.s0 { fill: ${props.color} } \n\t`}</style>
    <g id="Clip-Path" clipPath="url(#cp1)">
      <g> 
        <path className={props.className} fill={props.color} d="m25.2 31.1l-16.1-26.8h-7.1l19.7 32.7z" />
        <path className={props.className}
          fill={props.color}
          d="m27.6 15.7l-1.2 1.9-7.9-13.2h-7.1l15 24.9 8.2-13.6-3.9-6.5h2.2l2.8 4.7c0 0 4.6-7.6 5.7-9.5h-20.7z"
        /> 
        <path className={props.className} fill={props.color} d="m41.4 4.4c-0.1 0.2 0.2-0.3 0 0z" />
      </g>
    </g>
  </svg>
);
export default SVGComponent;
