```javascript
// pages/about.js
import { getStaticProps } from 'next';

export default function About({ data }) {
  return (
    <div>About {data}</div>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/data');
  const data = await res.json();
  return {
    props: {
      data: data.data,
    },
  };
}
```