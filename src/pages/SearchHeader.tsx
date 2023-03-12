import { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

function SearchHeader() {
  const [text, setText] = useState('');
  const { keyword } = useParams();
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (text) {
      navigate(`/videos/${text}`);
    }
  };
  useEffect(() => {
    keyword ? setText(keyword) : setText('');
  }, [keyword]);
  return (
    <header className="flex p-3 border-b-2 border-gray-500 mb-2">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-brand mr-2" size={40} />
        <h1 className="text-2xl font-bold">Youtube</h1>
      </Link>
      <form className="flex w-full justify-center" onSubmit={handleSubmit}>
        <input
          className="outline-none bg-black p-3 text-xl w-2/4"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-gray-600 p-3">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}

export default SearchHeader;
