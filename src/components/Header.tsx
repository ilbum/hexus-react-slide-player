const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center font-mono text-sm bg-gradient-to-r from-purple-500 to-pink-500 min-w-full">
      <p className="m-5">
        Created by&nbsp;
        <code className="font-bold">Ilbum Kwak</code>
      </p>
      <div className="m-5">
        <a
          className="flex place-items-center gap-2"
          href="https://www.hexus.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          For <img src="./hexus-logo.svg" alt="Hexus Logo" width={115} />
        </a>
      </div>
    </div>
  );
};

export default Header;
