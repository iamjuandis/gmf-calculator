"use client";

import { useEffect, useMemo, useState } from "react";
import CurrencyInput, { formatValue } from "react-currency-input-field";
import { ChevronDown, Share2, X } from "react-feather";
import ThemeToggle from "./ThemeToggle";
import RoundIconButton from "./RoundIconButton";

type Results = {
  case1Tax: number;
  case2Send: number;
  case2Tax: number;
  case3Send: number;
  case3Tax: number;
  case4Base: number;
};

const DEFAULT_FACTOR = 0.004;
const MAX_AMOUNT = 99999999999;

function formatMoney(value: number) {
  const formatted = formatValue({
    value: String(Number.isFinite(value) ? value : 0),
    prefix: "$ ",
    decimalSeparator: ",",
    groupSeparator: ".",
    decimalScale: 2,
  });
  return formatted.replace(/,00$/, "");
}

export default function GMFCalculatorClient() {
  const [amountStr, setAmountStr] = useState<string>("144000");
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);
  const [shareUrl, setShareUrl] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [toast, setToast] = useState<string>("");

  const amount = useMemo(() => {
    const n = parseFloat(String(amountStr || "0").replace(",", "."));
    return Number.isFinite(n) ? n : 0;
  }, [amountStr]);

  const safeFactor = DEFAULT_FACTOR;

  const results = useMemo<Results>(() => {
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

  useEffect(() => {
    setShareUrl(window.location.href);

    const mqViewport = window.matchMedia?.("(max-width: 720px)");
    const mqCoarse = window.matchMedia?.("(pointer: coarse)");

    const update = () => {
      const v = Boolean(mqViewport?.matches || mqCoarse?.matches);
      setIsMobile(v);
    };

    update();

    mqViewport?.addEventListener?.("change", update);
    mqCoarse?.addEventListener?.("change", update);

    return () => {
      mqViewport?.removeEventListener?.("change", update);
      mqCoarse?.removeEventListener?.("change", update);
    };
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(""), 2200);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  };

  const onShare = async () => {
    const url = shareUrl || window.location.href;
    if (!url) return;

    const navAny = navigator as any;
    const canNativeShare = Boolean(navAny?.share);

    // Mobile: native share sheet.
    if (isMobile && canNativeShare) {
      try {
        await navAny.share({
          title: "GMF Calculator",
          text: "Calcula el 4x1000 (GMF) en Colombia",
          url,
        });
        return;
      } catch {
        // If user cancels/fails, fall back to copy-to-clipboard.
      }
    }

    // Desktop (or fallback): copy + toast.
    const ok = await copyToClipboard(url);
    showToast(ok ? "Link copiado. Listo para compartir." : "No se pudo copiar el link.");
  };

  const shareLinkText = useMemo(() => {
    if (!shareUrl) return "Link";
    try {
      const u = new URL(shareUrl);
      return u.host;
    } catch {
      return "Link";
    }
  }, [shareUrl]);

  return (
    <>
      <div className="input-area">
        <label className="field field--main">
          <span>Valor (COP)</span>
          <CurrencyInput
            className="main-input"
            inputMode="decimal"
            value={amountStr}
            onValueChange={(value) => {
              const nextStr = value ?? "";
              if (nextStr === "") {
                setAmountStr("");
                return;
              }

              const nextNum = parseFloat(String(nextStr).replace(",", "."));
              if (Number.isFinite(nextNum) && nextNum > MAX_AMOUNT) {
                setAmountStr(String(MAX_AMOUNT));
                return;
              }

              setAmountStr(nextStr);
            }}
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

        <div className="shortcut-pills" role="group" aria-label="Atajos de monto">
          <button
            type="button"
            className="shortcut-pill"
            onClick={() => setAmountStr("100000")}
          >
            100k
          </button>
          <button
            type="button"
            className="shortcut-pill"
            onClick={() => setAmountStr("1000000")}
          >
            1m
          </button>
          <button
            type="button"
            className="shortcut-pill"
            onClick={() => setAmountStr("10000000")}
          >
            10m
          </button>
          <button
            type="button"
            className="shortcut-pill"
            onClick={() => setAmountStr("100000000")}
          >
            100m
          </button>
        </div>
      </div>

      <section>
        <h2 className="cases-title">Casos</h2>
        <div className="results-grid">
          <details className="card result result-collapsed">
            <summary>
              <span className="summary-title">
                El 4x1000 por enviar <span className="value-pill">{formatMoney(amount)}</span>, es{" "}
                <span className="value-pill value-pill--green">{formatMoney(results.case1Tax)}</span>
              </span>
              <span className="summary-trailing">
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
              <span className="summary-title">
                Si solo tengo <span className="value-pill">{formatMoney(amount)}</span>, puedo enviar{" "}
                <span className="value-pill value-pill--green">{formatMoney(results.case2Send)}</span> para cubrir el 4x1000.
              </span>
              <span className="summary-trailing">
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
              <span className="summary-title">
                Para enviar <span className="value-pill">{formatMoney(amount)}</span> debo tener{" "}
                <span className="value-pill value-pill--green">{formatMoney(results.case3Send)}</span> para cubrir el 4x1000
              </span>
              <span className="summary-trailing">
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
              <span className="summary-title">
                <span className="value-pill">{formatMoney(amount)}</span> por 4x1000 fue por mover{" "}
                <span className="value-pill value-pill--green">{formatMoney(results.case4Base)}</span>
              </span>
              <span className="summary-trailing">
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

      <footer className="gmf-footer" aria-label="Cr&eacute;ditos y ayuda">
        <div className="gmf-footer-row">
          <span className="gmf-footer-text">
            &copy; {new Date().getFullYear()} GMF Calculator
          </span>
          <span className="gmf-footer-sep">·</span>
          <button
            type="button"
            className="gmf-info-trigger"
            onClick={() => setIsInfoOpen(true)}
          >
            &iquest;Qu&eacute; es el GMF (4x1000)?
          </button>
        </div>

        <div className="gmf-footer-actions">
          <div className="gmf-share">
            <RoundIconButton
              ariaLabel="Compartir"
              title="Compartir"
              onClick={onShare}
            >
              <Share2 size={24} aria-hidden />
            </RoundIconButton>
          </div>

          <div className="gmf-footer-theme">
            <ThemeToggle variant="inline" />
          </div>
        </div>
      </footer>

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
              <RoundIconButton
                ariaLabel="Cerrar"
                onClick={() => setIsInfoOpen(false)}
              >
                <X size={24} aria-hidden />
              </RoundIconButton>
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

      {toast ? (
        <div className="share-toast" role="status" aria-live="polite">
          {toast}
        </div>
      ) : null}
    </>
  );
}

