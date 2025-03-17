import React from 'react';

export default function NavBar(props) {
  const { title, pageheader, links } = props;

  return (
    <nav className="flex justify-between px-4 py-2 bg-violet-500 p-4">
      <div>
        <h1 className="text-white text-2xl font-bold">{title}</h1>
      </div>

      <h1 className="text-white gb-green-700 text-2xl font-bold">{pageheader}</h1>
      <ul className="space-x-4 flex">
        {links && links.slice(0, 4).map((link, index) => (
          <li key={index} className="gap-6">
            <a href={link.path} className="text-white">{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}