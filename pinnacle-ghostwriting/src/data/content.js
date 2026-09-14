export const GENRES = [
  { t: 'Action & Adventure', d: "We plot the set pieces first, then carry that momentum into journeys that move across places and change the people making them." },
  { t: 'Drama', d: "A narrative built so the conflict surfaces through what characters say and do, rather than through the author explaining it." },
  { t: 'Science Fiction', d: "Invented science and technology, written with enough internal logic that readers stop questioning it by chapter two." },
  { t: 'Travel', d: "Guidebooks, outdoor writing, travel memoir and nature writing, with places rendered so readers can smell the air." },
  { t: 'Health', d: "Clear, accurate writing about the body and how it works, pitched at ordinary readers rather than at clinicians." },
  { t: 'Horror', d: "Dread built through setting and pacing, so the fear arrives well before the monster ever does." },
];

export const SERVICES = [
  'Video Trailer', 'Social Media Marketing', 'Audio Book', 'Book Translation',
  'Book Cover Designing', 'Marketing Consultation', 'Author Website',
  'Amazon Marketing', 'Book Publishing', 'Barnes & Noble Nook Edition',
];

export const REVIEWS = [
  { q: "I almost never leave reviews, but this one is earned. From the intake form through to the final eBook, nothing slipped. Every chapter arrived on the date they promised.", n: "Richard Mator" },
  { q: "Thank you for giving my romance the emotional weight it needed. None of it reads like a cliché, and the plot holds together from the first page to the last.", n: "Joanna Steven" },
  { q: "Fast replies, and every amendment handled without pushback. I appreciate the effort and the commitment, and I recommend them without reservation.", n: "Sarah A Fetcher" },
  { q: "I came to them for cookbook marketing and left with insights I hadn't considered. Sales are up, and my recipes are being cooked in roughly ten countries now.", n: "Louis Park" },
  { q: "I hired them for a video book trailer and the result was excellent, and every element of the story came through clearly. Thank you.", n: "Shenelle Fuinua" },
];

/* ONE canonical book list — rendered in this exact order everywhere.
   Covers are real cover photographs stored in /public/images/covers. */
export const BOOKS = [
  { title: 'Spark of the Everflame', author: 'Penn Cole', img: '/images/covers/spark-of-the-everflame.jpg' },
  { title: 'Glow of the Everflame',  author: 'Penn Cole', img: '/images/covers/glow-of-the-everflame.jpg' },
  { title: 'Heat of the Everflame',  author: 'Penn Cole', img: '/images/covers/heat-of-the-everflame.jpg' },
  { title: 'Burn of the Everflame',  author: 'Penn Cole', img: '/images/covers/burn-of-the-everflame.jpg' },
];

/* Services dropdown — the four items marked with a caret in the reference
   have their own sub-menus, which weren't in the screenshot, so they render
   flat for now. */
export const SERVICE_MENU = [
  { t: 'Book Publishing Services',    href: '#publishing' },
  { t: 'Book Marketing Services',     href: '#marketing' },
  { t: 'AudioBook Services',          href: '#services' },
  { t: 'Book Writing/Ghost Writing',  href: '#services' },
  { t: 'Book Illustrations & Designs', href: '#services' },
  { t: 'Book Editing Services',       href: '#services' },
  { t: 'Author Website Development',  href: '#services' },
  { t: 'Book Printing Services',      href: '#services' },
  { t: 'Author Podcast Services',     href: '#services' },
];

/* the nine services, in the order the header dropdown lists them */
export const ALL_SERVICES = [
  {
    t: 'Book Publishing Services', icon: 'publish',
    d: 'From formatted manuscript to live listing. We handle the imprint, the ISBN and distribution to every major store, and the rights stay entirely with you.',
  },
  {
    t: 'Book Marketing Services', icon: 'mega',
    d: 'Amazon ads, social campaigns and press outreach, planned around your category so the finished book reaches the readers who were already looking for it.',
  },
  {
    t: 'AudioBook Services', icon: 'headphones',
    d: 'Bring your words to life with professional narration, recording and mastering, delivered ready for Audible, Apple Books and Spotify.',
  },
  {
    t: 'Book Writing / Ghost Writing', icon: 'quill',
    d: 'A writer matched to your genre turns your idea into a finished manuscript, written in your voice, chapter by chapter, on a schedule you can hold us to.',
  },
  {
    t: 'Book Illustrations & Designs', icon: 'palette',
    d: 'Covers, interior art and typography built to compete both on a crowded shelf and in a thumbnail the size of a postage stamp.',
  },
  {
    t: 'Book Editing Services', icon: 'edit',
    d: 'Developmental edits, line edits and a final proofread, so structure, pacing and grammar are all settled well before anything goes to print.',
  },
  {
    t: 'Author Website Development', icon: 'monitor',
    d: 'A fast, mobile-ready author site with your catalogue, your mailing list and your buy links, built so you can update it without calling a developer.',
  },
  {
    t: 'Book Printing Services', icon: 'printer',
    d: 'Print-on-demand and short-run offset, with paper stock, trim size and finish chosen to suit the book rather than whatever is cheapest.',
  },
  {
    t: 'Author Podcast Services', icon: 'mic',
    d: 'Launch and produce your own show, or get booked on the ones your readers already listen to. Recording, editing and pitching all included.',
  },
];

/* retailers the finished book is distributed to, for the home strip */
export const RETAILERS = [
  'Amazon', 'Barnes & Noble', 'Baker & Taylor', 'Alibris',
  'Google Books', 'Ingram', 'Apple Books', 'Kobo',
];
