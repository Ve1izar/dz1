import React from "react";
import "./Article.css";
import Author from "./Author";

function Article({ author, title, content, links, imageUrl }) {
  return (
    <article className="article">
      <header className="article-header">
        <h1>{title}</h1>
        <Author name={author.name} bio={author.bio} photo={author.photo} />
      </header>
      <img className="article-image" src={imageUrl} alt={title} />
      <section className="article-content">
        {content.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </section>
      <footer className="article-footer">
        <h2>Корисні посилання</h2>
        <ul>
          {links.map((lnk, i) => (
            <li key={i}>
              <a href={lnk.href} target="_blank" rel="noopener noreferrer">
                {lnk.text}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </article>
  );
}

export default Article;
