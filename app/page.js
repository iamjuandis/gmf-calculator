"use client";

import { useMemo, useState } from "react";
import CurrencyInput, { formatValue } from "react-currency-input-field";
import { ChevronDown } from "react-feather";

const DEFAULT_FACTOR = 0.004;

function formatMoney(value) {
  const formatted = formatValue({
    value: String(value ?? 0),
    prefix: "$ ",
    decimalSeparator: ",",
    groupSeparator: ".",
    decimalScale: 2,
  });
  return formatted.replace(/,00$/, "");
}

export default function Page() {
  const [amountStr, setAmountStr] = useState("144000");
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const amount = useMemo(() => {
    const n = parseFloat(String(amountStr || "0").replace(",", "."));
    return Number.isFinite(n) ? n : 0;
  }, [amountStr]);

  const safeFactor = DEFAULT_FACTOR;

  const results = useMemo(() => {
    const case1Tax = amount * safeFactor;

    const case2Send = amount / (1 + safeFactor);
    const case2Tax = amount - case2Send;

    const case3Send = safeFactor < 1 ? amount / (1 - safeFactor) : 0;
    const case3Tax = case3Send - amount;

    const case4Base = safeFactor > 0 ? amount / safeFactor : 0;

    return {
      case1Tax,
      case2Send,
      case2Tax,
      case3Send,
      case3Tax,
      case4Base,
    };
  }, [amount, safeFactor]);

  return (
    <main className="page">
      <section className="container">
        <header className="hero">
          <h1>Calculadora GMF (4x1000)</h1>
        </header>

        <section className="card card--input">
          <label className="field field--main">
            <span>Valor (COP)</span>
            <CurrencyInput
              className="main-input"
              inputMode="decimal"
              value={amountStr}
              onValueChange={(value) => setAmountStr(value ?? "")}
              decimalsLimit={2}
              decimalScale={2}
              allowDecimals
              groupSeparator="."
              decimalSeparator=","
              prefix="$ "
              allowNegativeValue={false}
              disableAbbreviations
              placeholder="0"
              aria-label="Valor en pesos colombianos"
            />
          </label>
        </section>

        <section>
          <h2 className="cases-title">Casos</h2>
          <div className="results-grid">
            <details className="card result result-collapsed">
              <summary>
                <span className="summary-title">&iquest;Cu&aacute;nto es el 4x1000 por enviar <span className="value-pill">{formatMoney(amount)}</span>?</span>
                <span className="summary-equals">=</span>
                <span className="summary-trailing">
                  <strong>{formatMoney(results.case1Tax)}</strong>
                  <ChevronDown className="chevron-icon" size={20} aria-hidden />
                </span>
              </summary>
            <div className="result-body">
              <p>Monto a enviar: {formatMoney(amount)}</p>
              <p className="highlight">4x1000 cobrado: {formatMoney(results.case1Tax)}</p>
              <p>Total debitado de tu cuenta: {formatMoney(amount + results.case1Tax)}</p>
            </div>
          </details>

            <details className="card result result-collapsed">
              <summary>
                <span className="summary-title">&iquest;Cu&aacute;nto debo enviar para cubrir el 4x1000 si solo tengo <span className="value-pill">{formatMoney(amount)}</span>?</span>
                <span className="summary-equals">=</span>
                <span className="summary-trailing">
                  <strong>{formatMoney(results.case2Send)}</strong>
                  <ChevronDown className="chevron-icon" size={20} aria-hidden />
                </span>
              </summary>
            <div className="result-body">
              <p>Total disponible: {formatMoney(amount)}</p>
              <p className="highlight">Monto que debes enviar: {formatMoney(results.case2Send)}</p>
              <p>4x1000 cobrado: {formatMoney(results.case2Tax)}</p>
            </div>
          </details>

            <details className="card result result-collapsed">
              <summary>
                <span className="summary-title">&iquest;Cu&aacute;nto debo enviar para que lleguen <span className="value-pill">{formatMoney(amount)}</span> si me cobran el 4x1000?</span>
                <span className="summary-equals">=</span>
                <span className="summary-trailing">
                  <strong>{formatMoney(results.case3Send)}</strong>
                  <ChevronDown className="chevron-icon" size={20} aria-hidden />
                </span>
              </summary>
            <div className="result-body">
              <p>Valor que debe llegar: {formatMoney(amount)}</p>
              <p className="highlight">Monto que debes enviar: {formatMoney(results.case3Send)}</p>
              <p>4x1000 cobrado: {formatMoney(results.case3Tax)}</p>
            </div>
          </details>

            <details className="card result result-collapsed">
              <summary>
                <span className="summary-title">&iquest;Sobre qu&eacute; valor se calcul&oacute; <span className="value-pill">{formatMoney(amount)}</span> como 4x1000?</span>
                <span className="summary-equals">=</span>
                <span className="summary-trailing">
                  <strong>{formatMoney(results.case4Base)}</strong>
                  <ChevronDown className="chevron-icon" size={20} aria-hidden />
                </span>
              </summary>
            <div className="result-body">
              <p>4x1000 cobrado: {formatMoney(amount)}</p>
              <p className="highlight">Valor base del movimiento: {formatMoney(results.case4Base)}</p>
              <p>Verificaci&oacute;n: 0.4% de la base = {formatMoney(amount)}</p>
            </div>
          </details>
          </div>
        </section>

        <button className="gmf-info-trigger" onClick={() => setIsInfoOpen(true)}>
          &iquest;Qu&eacute; es el GMF (4x1000)?
        </button>
      </section>

      {isInfoOpen && (
        <div className="sheet-overlay" onClick={() => setIsInfoOpen(false)}>
          <section
            className="sheet"
            role="dialog"
            aria-modal="true"
            aria-label="Informaci&oacute;n sobre GMF"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="sheet-header">
              <h2>&iquest;Qu&eacute; es el GMF?</h2>
              <button
                className="sheet-close"
                onClick={() => setIsInfoOpen(false)}
                aria-label="Cerrar"
              >
                Cerrar
              </button>
            </header>
            <div className="sheet-content">
              <p>
                El GMF (Gravamen a los Movimientos Financieros), conocido como
                4x1000, es un impuesto aplicado a ciertas transacciones
                financieras en Colombia.
              </p>
              <p>
                Un factor de <strong>0.004</strong> significa que por cada
                movimiento se cobra el 0.4% del valor base.
              </p>
              <p>
                Esta calculadora te ayuda a estimar r&aacute;pidamente valores
                de env&iacute;o, recibo y costo del GMF en escenarios comunes.
              </p>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
