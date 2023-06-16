import { useEffect } from 'react';

function HookEff({ message }) {
  useEffect(() => {
    setInterval(() => {
      console.log(message);
    }, 2000);
  }, [message]);

  return <div>I'm logging to console "{message}"</div>;
}
export  default HookEff