import { SVGProps } from "react";

const Icons = {
  icon: (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M47.382 27.6818C46.3962 19.2469 45.357 10.3414 45.357 0H54.6419C54.6419 10.2251 53.6082 19.1198 52.6245 27.5633..." fill="currentColor" />
    </svg>
  ),
  instagram: (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path fill="currentColor" d="M13.028 2c1.125.003 1.696.009 2.189.023l..."></path>
    </svg>
  ),
  circle1: (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42 21C42 32.598 32.598 42 21 42..." fill="currentColor" />
      <circle cx="21" cy="21" r="10" fill="currentColor" />
    </svg>
  ),
  circle2: (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="10" fill="currentColor" />
    </svg>
  ),
  linkedin: (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path d="M44.4469 0H3.54375C1.58437 0 0 1.54688..." fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="48" height="48" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  ),
  facebook: (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path d="M24 0C10.7453 0 0 10.7453..." fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="48" height="48" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  ),
  x: (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36.6526 3.8078H43.3995L28.6594..." fill="currentColor" />
    </svg>
  ),
  insta: (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path d="M24 4.32187C30.4125 4.32187..." fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="48" height="48" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  ),
  youtube: (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path d="M47.044 12.3709C46.7726 11.3497..." fill="currentColor" />
        <path d="M19.1385 31.1373V16.8628..." fill="black" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="48" height="48" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  ),
  tiktok: (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M34.1451 0H26.0556V32.6956..." fill="currentColor" />
    </svg>
  ),
};

export default Icons;
