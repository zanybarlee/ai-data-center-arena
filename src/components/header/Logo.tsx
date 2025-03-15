
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center">
        <img 
          src="/lovable-uploads/bb2cfa8c-c134-4d11-a895-7bc15dde2b1e.png" 
          alt="Akira Logo" 
          className="h-6 w-auto dark:invert" 
        />
      </Link>
    </div>
  );
}
