/* 3D mockup shell — the generated SVG cover was swapped for the real cover photograph.
   Everything else (pages, spine, gloss, contact shadow) is unchanged. */
export default function Book3d({ book, eager = false }) {
  return (
    <div className="book3d">
      <div className="book3d-in">
        <span className="pages" />
        <img
          className="cover-img"
          src={book.img}
          alt={`Book cover: ${book.title} by ${book.author}`}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
        <span className="spine" />
        <span className="gloss" />
      </div>
    </div>
  );
}
