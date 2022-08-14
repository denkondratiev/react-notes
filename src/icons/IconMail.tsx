export type Props = {
  className?: string;
  width?: string;
  height?: string;
};

function IconMail({ className = '', ...props }: Props) {
  return (
    <svg
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M3.99996 5.16667L6.20566 6.63713C6.98943 7.15964 8.01049 7.15964 8.79426 6.63713L11 5.16667M3.99996 12.75H11C12.2886 12.75 13.3333 11.7053 13.3333 10.4167V4.58333C13.3333 3.29467 12.2886 2.25 11 2.25H3.99996C2.7113 2.25 1.66663 3.29467 1.66663 4.58333V10.4167C1.66663 11.7053 2.71129 12.75 3.99996 12.75Z"
        stroke="white"
        stroke-width="0.875"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default IconMail;
