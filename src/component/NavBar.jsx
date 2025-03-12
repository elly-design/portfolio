import React from 'react';

export default function NavBar(props) {
  const { title, pageheader, links } = props;

  return (

    <nav class="flex justify-between px-4 py-2 bg-violet-500 p-4">
      <div>
        <h1 class="text-white text-2xl font-bold">{title}</h1>
      </div>

      <h1 class="text-white gb-green-700 text-2xl font-bold">{pageheader}</h1>
      <ul class="space-x-4 flex">
        {links && links.slice(0,5).map((link, index) => (  
          <li index={index} class=" gap-6">
            <a key={index} href={link.path} class="text-white">{link.title}</a>
          </li>
        ))}
      </ul>   
    </nav>
  );
}
