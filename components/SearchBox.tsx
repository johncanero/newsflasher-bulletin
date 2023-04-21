// rcfe
'use client'
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

function SearchBox() {
    const [input, setInput] = useState('');
    const router = useRouter();
    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input) return;

        router.push(`/search?term=${input}`);
    };
    return (
        <form
            onSubmit={handleSearch}
            className="flex items-center justify-between max-w-6xl px-5 mx-auto">
            {/* input */}
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search keywords"
                className="flex-1 w-full placeholder-gray-500 bg-transparent rounded-sm outline-none h-14 text-stone-800"
            />

            {/* button */}
            <button
                disabled={!input}
                type="submit"
                className="text-lime-500 disabled:text-gray-400"
            >
                Search
            </button>
        </form>
    )
}

export default SearchBox
