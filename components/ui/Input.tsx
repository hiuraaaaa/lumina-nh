export default function Input({ className = '', ...props }: any) {
  return <input className={`input ${className}`} {...props} />
}
