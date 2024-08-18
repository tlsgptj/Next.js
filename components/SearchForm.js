import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SearchForm({ initalValue = '' }) {
  const [value, setValue] = useState(initalValue);
  const router = useRouter();

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) {
        router.push('/');
        return;
    }
    router.push(`/search?q=${value}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="q" value={value} onChange={handleChange} />
      <button>검색</button>
    </form>
  );
}
