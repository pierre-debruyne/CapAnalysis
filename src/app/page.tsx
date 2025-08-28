
export default function Home() {
  return (
    <div>
    <div className="space-y-10 p-10">
      {/* Montserrat */}
      <section>
        <h2 className="text-2xl font-bold">Montserrat (font-sans)</h2>
        <p className="font-sans font-light">Light 300 – The quick brown fox jumps over the lazy dog</p>
        <p className="font-sans font-normal">Regular 400 – The quick brown fox jumps over the lazy dog</p>
        <p className="font-sans font-semibold">SemiBold 600 – The quick brown fox jumps over the lazy dog</p>
      </section>

      {/* Playfair Display */}
      <section>
        <h2 className="text-2xl font-bold">Playfair Display (font-serif)</h2>
        <p className="font-serif font-normal">Regular 400 – The quick brown fox jumps over the lazy dog</p>
        <p className="font-serif italic">Italic 400 – The quick brown fox jumps over the lazy dog</p>
        <p className="font-serif font-bold">Bold 700 – The quick brown fox jumps over the lazy dog</p>
        <p className="font-serif font-bold italic">Bold Italic 700 – The quick brown fox jumps over the lazy dog</p>
        <p className="font-serif font-black">Black 900 – The quick brown fox jumps over the lazy dog</p>
        <p className="font-serif font-black italic">Black Italic 900 – The quick brown fox jumps over the lazy dog</p>
      </section>

      {/* Playfair Display Small Caps */}
      <section>
        <h2 className="text-2xl font-bold">Playfair Display SC (font-serif-sc)</h2>
        <p className="font-serif-sc font-normal">Regular 400 – The quick brown fox jumps over the lazy dog</p>
        <p className="font-serif-sc italic">Italic 400 – The quick brown fox jumps over the lazy dog</p>
        <p className="font-serif-sc font-bold">Bold 700 – The quick brown fox jumps over the lazy dog</p>
        <p className="font-serif-sc font-bold italic">Bold Italic 700 – The quick brown fox jumps over the lazy dog</p>
        <p className="font-serif-sc font-black">Black 900 – The quick brown fox jumps over the lazy dog</p>
        <p className="font-serif-sc font-black italic">Black Italic 900 – The quick brown fox jumps over the lazy dog</p>
      </section>

      {/* Minion Pro */}
      <section>
        <h2 className="text-2xl font-bold">Minion Pro (font-minion)</h2>
        <p className="font-minion">Regular 400 – The quick brown fox jumps over the lazy dog</p>
      </section>
    </div>
    </div>
  );
}
