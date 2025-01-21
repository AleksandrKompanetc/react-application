import './Button.css';

export default function Button({children, isActive, ...props}) {
  // let classes = 'button';
  // if (isActive) classes += ' active';

  return (
    <button 
      {...props}
      className={isActive ? 'button active' : 'button'} 
    >
      {children}
    </button>
  )
}