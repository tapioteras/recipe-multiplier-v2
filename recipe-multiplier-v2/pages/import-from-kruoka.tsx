import { useEffect, useState } from "react";

const ImportFromKRuokaPage = () => {
  const [search, setSearch] = useState();
  const [isLoading, setIsLoading] = useState<boolean>();
  useEffect(() => {
    if (isLoading) {
      fetch(`/api/k-ruoka-search?query=${search}`)
        .then((res) => {
          console.log("res", res);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isLoading]);
  return (
    <div className="import-from-k-ruoka--container">
      <h2>Import from K-Ruoka</h2>
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        value={search}
      />
      <button
        onClick={() => {
          setIsLoading(true);
        }}
      >
        Search
      </button>
      <button
        onClick={() => {
          setSearch(undefined);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default ImportFromKRuokaPage;
