import React from "react";
import Article from "./Article";

function App() {
  const articleData = {
    author: {
      name: "Оззі Осборн",
      bio: "Англійський рок-музикант, співак, автор пісень та медійна особистість.",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/OzzyChangingHands02-20-2010.jpg/375px-OzzyChangingHands02-20-2010.jpg",
    },
    title: "Оззі Осборн: Принц темряви",
    content: `
Оззі Осборн (John Michael Osbourne; 3 грудня 1948 – 22 липня 2025) — легендарний вокаліст групи Black Sabbath, а також видатний сольний артист. Він започаткував жанр хеві‑метал як вокаліст дебютного альбому гурту 1970 року, а також альбоми «Paranoid» і «Master of Reality» :contentReference[oaicite:2]{index=2}.

Після звільнення з Black Sabbath у 1979 році через проблеми з алкоголем, Оззі розпочав сольну кар'єру, випустив альбом *Blizzard of Ozz* (1980), який увійшов до класики жанру :contentReference[oaicite:3]{index=3}. Його перші сім сольних альбомів отримали мультиплатинові сертифікати в США :contentReference[oaicite:4]{index=4}.

У 2000‑х він здобув нову популярність як зірка реаліті‑шоу *The Osbournes*, що транслювалося на MTV :contentReference[oaicite:5]{index=5}. Кар'єру Оззі завершив прощальним концертом Black Sabbath 5 липня 2025 року у Бірмінгемі — менше ніж за три тижні до своєї смерті 22 липня 2025 року :contentReference[oaicite:6]{index=6}.
    `,
    links: [
      {
        href: "https://uk.wikipedia.org/wiki/%D0%9E%D0%B7%D0%B7%D1%96_%D0%9E%D1%81%D0%B1%D0%BE%D1%80%D0%BD",
        text: "Вікіпедія: Оззі Осборн",
      },
      {
        href: "https://uk.wikipedia.org/wiki/Blizzard_of_Ozz",
        text: "Blizzard of Ozz",
      },
    ],
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Ozzy_Osbourne_2010.jpg/600px-Ozzy_Osbourne_2010.jpg",
  };

  return (
    <div className="App">
      <Article {...articleData} />
    </div>
  );
}

export default App;
