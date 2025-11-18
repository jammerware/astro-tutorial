import { useState } from 'preact/hooks';

// a simple react (technically preact) component
// Obviously, this isn't doing anything particularly useful, but the idea here is that I can create fully-
// scripted components and send them down as "client islands" inside Astro pages/components. See the /pages/index.astro
// to see how this componment is consumed.
//
// The Menu.astro component would probably be better served if it were this kind of thing rather than
// an Astro component which relies on a script sent down with BaseLayout.astro, but you know. Tutorial stuff.
export default function Greeting({messages}) {
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}