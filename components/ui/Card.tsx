export default function Card({ children, className = '' }: any) {
  return <div className={`card ${className}`}>{children}</div>
}
