export type Props = {
  className?: string;
  width?: string;
  height?: string;
};

function IconLock({ className = '', ...props }: Props) {
  return (
    <svg
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M11.25 16.5C11.25 16.9142 11.5858 17.25 12 17.25C12.4142 17.25 12.75 16.9142 12.75 16.5H11.25ZM12.75 14.5C12.75 14.0858 12.4142 13.75 12 13.75C11.5858 13.75 11.25 14.0858 11.25 14.5H12.75ZM8 9.25H16V7.75H8V9.25ZM19.25 12.5V18.5H20.75V12.5H19.25ZM16 21.75H8V23.25H16V21.75ZM4.75 18.5V12.5H3.25V18.5H4.75ZM8 21.75C6.20508 21.75 4.75 20.2949 4.75 18.5H3.25C3.25 21.1234 5.37665 23.25 8 23.25V21.75ZM19.25 18.5C19.25 20.2949 17.7949 21.75 16 21.75V23.25C18.6234 23.25 20.75 21.1234 20.75 18.5H19.25ZM16 9.25C17.7949 9.25 19.25 10.7051 19.25 12.5H20.75C20.75 9.87665 18.6234 7.75 16 7.75V9.25ZM8 7.75C5.37665 7.75 3.25 9.87665 3.25 12.5H4.75C4.75 10.7051 6.20507 9.25 8 9.25V7.75ZM8.75 8.5V6.5H7.25V8.5H8.75ZM15.25 6.5V8.5H16.75V6.5H15.25ZM12 3.25C13.7949 3.25 15.25 4.70507 15.25 6.5H16.75C16.75 3.87665 14.6234 1.75 12 1.75V3.25ZM8.75 6.5C8.75 4.70507 10.2051 3.25 12 3.25V1.75C9.37665 1.75 7.25 3.87665 7.25 6.5H8.75ZM12.75 16.5V14.5H11.25V16.5H12.75Z" />
    </svg>
  );
}

export default IconLock;