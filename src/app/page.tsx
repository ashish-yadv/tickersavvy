import HEADER from "./ui/HEADER";
import SEARCH_BAR from "./ui/SEARCH";


export default function Home() {

  return (
    <main>
      <HEADER />
      <h1 className={`text-4xl font-semibold text-center my-6`}>Investing Ka Search Engine</h1>
      <p
        className={`text-xl text-cyan-600 font-semibold text-center mb-8`}
      >
        The Modern Stock Screener that helps you pick better stocks.
      </p>
      <SEARCH_BAR />
    </main>
  );
}
