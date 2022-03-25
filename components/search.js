import { SearchIcon } from '@heroicons/react/outline';

const Search = () => {
  return (
    <div>
      <span className="sr-only">Search</span>
      <div className="relative mt-1 flex items-center">
        <input
          placeholder="Search for anything..."
          type="text"
          name="search"
          id="search"
          className="block w-full rounded-full border-zinc-300 pr-12 shadow-sm placeholder:text-zinc-400 focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd className="inline-flex items-center px-2 font-sans text-sm font-medium text-zinc-400">
            <SearchIcon className="h-6 w-6" aria-hidden="true" />
          </kbd>
        </div>
      </div>
    </div>
  );
};

export default Search;
