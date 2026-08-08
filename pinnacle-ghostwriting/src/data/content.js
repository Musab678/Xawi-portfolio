export const GENRES = [
  { t: 'Action & Adventure', d: "We plot the set pieces first, then carry that momentum into journeys that move across places and change the people making them." },
  { t: 'Drama', d: "A narrative built so the conflict surfaces through what characters say and do, rather than through the author explaining it." },
  { t: 'Science Fiction', d: "Invented science and technology, written with enough internal logic that readers stop questioning it by chapter two." },
  { t: 'Travel', d: "Guidebooks, outdoor writing, travel memoir and nature writing — places rendered so readers can smell the air." },
  { t: 'Health', d: "Clear, accurate writing about the body and how it works, pitched at ordinary readers rather than at clinicians." },
  { t: 'Horror', d: "Dread built through setting and pacing, so the fear arrives well before the monster ever does." },
];

export const SERVICES = [
  'Video Trailer', 'Social Media Marketing', 'Audio Book', 'Book Translation',
  'Book Cover Designing', 'Marketing Consultation', 'Author Website',
  'Amazon Marketing', 'Book Publishing', 'Barnes & Noble Nook Edition',
];

export const REVIEWS = [
  { q: "I almost never leave reviews, but this one is earned. From the intake form through to the final eBook, nothing slipped — every chapter arrived on the date they promised.", n: "Joseph F." },
  { q: "Thank you for giving my romance the emotional weight it needed. None of it reads like a cliché, and the plot holds together from the first page to the last.", n: "Hazel G." },
  { q: "Fast replies, and every amendment handled without pushback. I appreciate the effort and the commitment, and I recommend them without reservation.", n: "Arthur J." },
  { q: "I came to them for cookbook marketing and left with insights I hadn't considered. Sales are up, and my recipes are being cooked in roughly ten countries now.", n: "Oliver M." },
  { q: "I hired them for a video book trailer and the result was excellent — every element of the story came through clearly. Thank you.", n: "Ivy R." },
];

/* ONE canonical book list — rendered in this exact order everywhere.
   Covers are real cover photographs stored in /public/images/covers. */
export const BOOKS = [
  { title: 'Everything She Feared', author: 'Rick Mofina',           img: '/images/covers/everything-she-feared.jpg' },
  { title: 'The Wager',             author: 'David Grann',           img: '/images/covers/the-wager.jpg' },
  { title: 'Pomegranate',           author: 'Helen Elaine Lee',      img: '/images/covers/pomegranate.jpg' },
  { title: 'Dirty Laundry',         author: 'Disha Bose',            img: '/images/covers/dirty-laundry.jpg' },
  { title: 'Happy Place',           author: 'Emily Henry',           img: '/images/covers/happy-place.jpg' },
  { title: 'Yellowface',            author: 'R. F. Kuang',           img: '/images/covers/yellowface.jpg' },
  { title: 'Camp Zero',             author: 'Michelle Min Sterling', img: '/images/covers/camp-zero.jpg' },
  { title: 'Only the Beautiful',    author: 'Susan Meissner',        img: '/images/covers/only-the-beautiful.jpg' },
];
