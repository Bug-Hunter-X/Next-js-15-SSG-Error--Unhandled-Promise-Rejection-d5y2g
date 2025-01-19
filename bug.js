```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will throw an error if the function is not async
  const data = await fetch('/api/data');
  const json = await data.json();
  console.log(json);
  return (
    <div>About</div>
  );
}
```
```javascript
// pages/api/data.js
export default async function handler(req, res) {
  // Simulate an API call that takes time
  await new Promise(resolve => setTimeout(resolve, 1000));
  res.status(200).json({ data: 'This is the data' });
}
```