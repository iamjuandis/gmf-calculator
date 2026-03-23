import GMFCalculatorClient from "./components/GMFCalculatorClient";

export default function Page() {
  return (
    <main className="page">
      <section className="container">
        <header className="hero">
          <h1>Calculadora GMF (4x1000)</h1>
        </header>

        <GMFCalculatorClient />
      </section>
    </main>
  );
}

