import React from "react"

const ArrowFooter = ({ className = "" }) => {
  const backGroundArrow = className.indexOf("active") === -1 ? "black": "white" 

  return (
    <svg
      className={className}
      aria-hidden="true"
      width="15"
      height="9"
      viewBox="0 0 15 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.239758 8.11925L0.731104 8.61401C0.885739 8.76852 1.09147 8.85364 1.31135 8.85364C1.53111 8.85364 1.73709 8.76852 1.89172 8.61401L7.49665 3.00884L13.108 8.62023C13.2624 8.77474 13.4684 8.85974 13.6882 8.85974C13.9079 8.85974 14.114 8.77474 14.2685 8.62023L14.76 8.12852C15.08 7.80876 15.08 7.2879 14.76 6.96814L8.07897 0.263085C7.92458 0.108694 7.71884 -8.7738e-05 7.49713 -8.7738e-05H7.49457C7.27469 -8.7738e-05 7.06896 0.108816 6.91457 0.263085L0.239758 6.94997C0.0851231 7.10436 0.000243187 7.31631 0 7.53607C0 7.75595 0.0851231 7.96498 0.239758 8.11925Z"
        fill={backGroundArrow}
      />
    </svg>
  )
}

export default ArrowFooter
