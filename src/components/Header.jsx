
export default function Header() {
  const now = new Date();
  return (
    <header>
      <h3>Result</h3>
      <span>Time now: {now.toLocaleTimeString()}</span>
    </header>
  )
}