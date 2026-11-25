"use client";

import React from "react";

function Ui221ViewDocument() {
  return (
    <div className="flex h-full w-full flex-col items-center gap-2 bg-default-background px-12 py-12 mobile:px-4 mobile:py-8">
      <div className="flex w-full max-w-[1120px] flex-col items-start gap-8">
        <div className="flex w-full flex-col items-start gap-2">
          <span className="text-micro font-micro text-subtext-color uppercase">
            HERSTORY · OBJECTION EVIDENCE
          </span>
          <h1 className="text-heading-1 font-heading-1 text-default-font mobile:text-heading-2 mobile:font-heading-2">
            Padró municipal d&#39;habitants 1936 — Mercè Puig
          </h1>
          <p className="text-caption font-caption text-subtext-color">
            Arxiu Municipal de Barcelona, Padró Municipal d&#39;Habitants,
            districte V, 1936 · full 148–149 · domini públic
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-surface px-6 py-6">
          <span className="text-micro font-micro text-subtext-color uppercase">
            Transcripció
          </span>
          <p className="text-body font-body text-default-font">
            En el full 148 del padró corresponent al districte cinquè, barri del
            Raval, hi consta Mercè Puig, natural de Vic, de quaranta-dos anys,
            casada, amb domicili al carrer de la Cera número 14, segon pis.
            S&#39;hi fa constar la seva professió de cosidora i la convivència
            amb el seu marit, Josep Vidal, jornaler, i amb dues filles menors
            d&#39;edat.
          </p>
          <p className="text-body font-body text-default-font">
            A la columna d&#39;observacions hom anotà que la família havia
            residit anteriorment al carrer de la Lluna, número 3, i que es
            traslladà a aquesta adreça durant el mes de novembre de 1935. La
            lletra de l&#39;escrivà és cursiva i presenta correccions fetes amb
            tinta més fosca, fet que motiva la present objecció sobre
            l&#39;adscripció de la persona a la versió v3 del mapatge.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ui221ViewDocument;
