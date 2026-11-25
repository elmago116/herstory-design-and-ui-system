"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { Combobox } from "@/ui/components/Combobox";
import { IconButton } from "@/ui/components/IconButton";
import { TextArea } from "@/ui/components/TextArea";
import { TextField } from "@/ui/components/TextField";
import { FeatherAlertTriangle } from "@subframe/core";
import { FeatherArrowRight } from "@subframe/core";
import { FeatherCheck } from "@subframe/core";
import { FeatherCopy } from "@subframe/core";
import { FeatherExternalLink } from "@subframe/core";
import { FeatherLink2 } from "@subframe/core";
import { FeatherLock } from "@subframe/core";
import { FeatherPenLine } from "@subframe/core";
import { FeatherPlus } from "@subframe/core";
import { FeatherTrash } from "@subframe/core";
import { FeatherX } from "@subframe/core";

function Ui116EditClass() {
  return (
    <div className="flex w-full flex-col items-start gap-2">
      <div className="flex w-full items-center justify-center bg-[#00000099] px-6 py-6">
        <div className="flex w-[1120px] flex-none flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-8 py-8 shadow-lg max-w-full">
          <div className="flex w-full items-start justify-between gap-6 mobile:flex-col">
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <span className="text-caption font-caption text-subtext-color">
                  Q-code
                </span>
                <Badge variant="neutral">Q5</Badge>
                <Badge variant="warning" icon={<FeatherLock />}>
                  inmutable
                </Badge>
                <Badge variant="success" icon={<FeatherCheck />}>
                  publicada
                </Badge>
              </div>
              <h1 className="text-heading-2 font-heading-2 text-default-font">
                Person
              </h1>
              <span className="text-caption font-caption text-subtext-color">
                Clase de la ontología · rdfs:Class · owl:Class
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="neutral-tertiary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                ocultar de este perfil
              </Button>
              <Button
                variant="neutral-tertiary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                restaurar del bootstrap
              </Button>
            </div>
          </div>
          <div className="w-full items-end gap-4 grid grid-cols-4 mobile:grid mobile:grid-cols-2">
            <div className="flex flex-col items-start gap-1">
              <span className="text-caption font-caption text-subtext-color">
                IRI
              </span>
              <div className="flex w-full items-center gap-1">
                <span className="line-clamp-1 text-monospace-body font-monospace-body text-default-font">
                  http://www.wikidata.org/entity/Q5
                </span>
                <IconButton
                  variant="neutral-tertiary"
                  size="small"
                  icon={<FeatherCopy />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="text-caption font-caption text-subtext-color">
                Prefijo
              </span>
              <span className="text-monospace-body font-monospace-body text-default-font">
                wd
              </span>
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="text-caption font-caption text-subtext-color">
                Origen
              </span>
              <Badge variant="neutral">bootstrap · Wikidata</Badge>
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="text-caption font-caption text-subtext-color">
                Versión
              </span>
              <span className="text-body font-body text-default-font">
                v12 · 14 nov 2026, 18:02
              </span>
            </div>
          </div>
          <Alert
            variant="warning"
            title="Clase del bootstrap"
            description="Las etiquetas y descripciones de origen no se editan. Los cambios se guardan como override de este perfil y quedan en el registro de auditoría."
          />
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full items-center justify-between gap-4">
              <div className="flex gap-2 items-baseline">
                <span className="text-body-bold font-body-bold text-default-font">
                  Etiqueta
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  rdfs:label
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  · 4 idiomas
                </span>
              </div>
            </div>
            <div className="w-full items-start gap-4 grid grid-cols-2 mobile:grid mobile:grid-cols-1">
              <TextField
                className="h-auto w-auto flex-none self-stretch"
                label="ca"
                helpText=""
              >
                <TextField.Input
                  placeholder="Persona"
                  value="Persona"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                />
              </TextField>
              <TextField
                className="h-auto w-auto flex-none self-stretch"
                label="en"
                helpText=""
              >
                <TextField.Input
                  placeholder="human"
                  value="human"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                />
              </TextField>
              <TextField
                className="h-auto w-auto flex-none self-stretch"
                label="es"
                helpText=""
              >
                <TextField.Input
                  placeholder="Persona"
                  value="Persona"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                />
              </TextField>
              <TextField
                className="h-auto w-auto flex-none self-stretch"
                label="pt"
                helpText=""
              >
                <TextField.Input
                  placeholder="Pessoa"
                  value="Pessoa"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                />
              </TextField>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full items-center justify-between gap-4">
              <div className="flex gap-2 items-baseline">
                <span className="text-body-bold font-body-bold text-default-font">
                  Descripción
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  rdfs:comment
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  · 4 idiomas
                </span>
              </div>
              <Badge variant="warning" icon={<FeatherAlertTriangle />}>
                1 sin descripción
              </Badge>
            </div>
            <div className="w-full items-start gap-4 grid grid-cols-2 mobile:grid mobile:grid-cols-1">
              <TextArea
                className="h-auto w-auto flex-none self-stretch"
                label="ca"
                helpText=""
              >
                <TextArea.Input
                  placeholder="Qualsevol membre de l'Homo sapiens…"
                  value="Qualsevol membre de l'Homo sapiens, única espècie extant del gènere Homo."
                  onChange={(
                    event: React.ChangeEvent<HTMLTextAreaElement>
                  ) => {}}
                />
              </TextArea>
              <TextArea
                className="h-auto w-auto flex-none self-stretch"
                label="en"
                helpText=""
              >
                <TextArea.Input
                  placeholder="Any member of Homo sapiens…"
                  value="Any member of Homo sapiens, unique extant species of the genus Homo."
                  onChange={(
                    event: React.ChangeEvent<HTMLTextAreaElement>
                  ) => {}}
                />
              </TextArea>
              <TextArea
                className="h-auto w-auto flex-none self-stretch"
                label="es"
                helpText=""
              >
                <TextArea.Input
                  placeholder="Cualquier miembro de Homo sapiens…"
                  value="Cualquier miembro de Homo sapiens, única especie existente del género Homo."
                  onChange={(
                    event: React.ChangeEvent<HTMLTextAreaElement>
                  ) => {}}
                />
              </TextArea>
              <TextArea
                className="h-auto w-auto flex-none self-stretch"
                label="pt"
                helpText="Pendiente de traducir"
              >
                <TextArea.Input
                  placeholder="Añadir descripción…"
                  value=""
                  onChange={(
                    event: React.ChangeEvent<HTMLTextAreaElement>
                  ) => {}}
                />
              </TextArea>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full items-center justify-between gap-4">
              <div className="flex gap-2 items-baseline">
                <span className="text-body-bold font-body-bold text-default-font">
                  Relaciones
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  clase
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  · 1 declarada
                </span>
              </div>
            </div>
            <div className="w-full items-start gap-4 grid grid-cols-2 mobile:grid mobile:grid-cols-1">
              <div className="flex flex-col items-start gap-2 self-stretch rounded-lg border border-solid border-neutral-border px-6 py-6">
                <span className="text-body-bold font-body-bold text-default-font">
                  Es subclase de rdfs:subClassOf
                </span>
                <Combobox
                  label=""
                  placeholder="buscar por nombre o código…"
                  value=""
                  helpText=""
                />
                <div className="flex w-full items-center justify-between rounded-md border border-solid border-neutral-border px-3 py-2 gap-2">
                  <span className="line-clamp-1 text-body font-body text-default-font">
                    Homo sapiens · Q171283
                  </span>
                  <IconButton
                    variant="neutral-tertiary"
                    size="small"
                    icon={<FeatherX />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </div>
                <span className="text-caption font-caption text-subtext-color">
                  Inversa: tieneSubclase
                </span>
              </div>
              <div className="flex flex-col items-start gap-2 self-stretch rounded-lg border border-solid border-neutral-border px-6 py-6">
                <span className="text-body-bold font-body-bold text-default-font">
                  Equivale a owl:equivalentClass
                </span>
                <Combobox
                  label=""
                  placeholder="buscar por nombre o código…"
                  value=""
                  helpText=""
                />
                <span className="text-caption font-caption text-subtext-color">
                  Sin equivalencias declaradas.
                </span>
              </div>
              <div className="flex flex-col items-start gap-2 self-stretch rounded-lg border border-solid border-neutral-border px-6 py-6">
                <span className="text-body-bold font-body-bold text-default-font">
                  Es disjunta de owl:disjointWith
                </span>
                <Combobox
                  label=""
                  placeholder="buscar por nombre o código…"
                  value=""
                  helpText=""
                />
                <span className="text-caption font-caption text-subtext-color">
                  Ninguna clase disjunta.
                </span>
              </div>
              <div className="flex flex-col items-start gap-2 self-stretch rounded-lg border border-solid border-neutral-border px-6 py-6">
                <span className="text-body-bold font-body-bold text-default-font">
                  Es el complemento de owl:complementOf
                </span>
                <Combobox
                  label=""
                  placeholder="buscar por nombre o código…"
                  value=""
                  helpText=""
                />
                <span className="text-caption font-caption text-subtext-color">
                  Ningún complemento declarado.
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full items-center justify-between gap-4">
              <div className="flex gap-2 items-baseline">
                <span className="text-body-bold font-body-bold text-default-font">
                  Propiedades de la clase
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  owl:DatatypeProperty · owl:ObjectProperty
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  · 8 propiedades · 3 mapeadas
                </span>
              </div>
              <Button
                variant="neutral-secondary"
                size="small"
                icon={<FeatherPlus />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                propiedad
              </Button>
            </div>
            <div className="flex w-full flex-col items-start overflow-x-auto">
              <div className="w-full items-center gap-4 border-b border-solid border-neutral-border bg-neutral-50 px-4 py-2 grid grid-cols-6">
                <span className="text-caption-bold font-caption-bold text-subtext-color">
                  Propiedad
                </span>
                <span className="text-caption-bold font-caption-bold text-subtext-color">
                  Tipo
                </span>
                <span className="text-caption-bold font-caption-bold text-subtext-color">
                  Cardinalidad
                </span>
                <span className="text-caption-bold font-caption-bold text-subtext-color">
                  Mapeo
                </span>
                <span className="text-caption-bold font-caption-bold text-subtext-color">
                  Estado
                </span>
                <span className="text-caption-bold font-caption-bold text-subtext-color">
                  Acciones
                </span>
              </div>
              <div className="w-full items-center gap-4 border-b border-solid border-neutral-border bg-default-background px-4 py-2 grid grid-cols-6">
                <span className="text-monospace-body font-monospace-body text-default-font">
                  given_name
                </span>
                <span className="text-body font-body text-default-font">
                  xsd:string
                </span>
                <span className="text-body font-body text-default-font">
                  1..*
                </span>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  P735
                </span>
                <Badge variant="success">mapeada</Badge>
                <div className="flex items-center justify-end gap-1">
                  <IconButton
                    variant="neutral-tertiary"
                    size="small"
                    icon={<FeatherPenLine />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                  <IconButton
                    variant="neutral-tertiary"
                    size="small"
                    icon={<FeatherTrash />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </div>
              </div>
              <div className="w-full items-center gap-4 border-b border-solid border-neutral-border bg-default-background px-4 py-2 grid grid-cols-6">
                <span className="text-monospace-body font-monospace-body text-default-font">
                  family_name
                </span>
                <span className="text-body font-body text-default-font">
                  xsd:string
                </span>
                <span className="text-body font-body text-default-font">
                  0..*
                </span>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  P734
                </span>
                <Badge variant="success">mapeada</Badge>
                <div className="flex items-center justify-end gap-1">
                  <IconButton
                    variant="neutral-tertiary"
                    size="small"
                    icon={<FeatherPenLine />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                  <IconButton
                    variant="neutral-tertiary"
                    size="small"
                    icon={<FeatherTrash />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </div>
              </div>
              <div className="w-full items-center gap-4 border-b border-solid border-neutral-border bg-default-background px-4 py-2 grid grid-cols-6">
                <span className="text-monospace-body font-monospace-body text-default-font">
                  birth_date
                </span>
                <span className="text-body font-body text-default-font">
                  xsd:date
                </span>
                <span className="text-body font-body text-default-font">
                  0..1
                </span>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  P569
                </span>
                <Badge variant="success">mapeada</Badge>
                <div className="flex items-center justify-end gap-1">
                  <IconButton
                    variant="neutral-tertiary"
                    size="small"
                    icon={<FeatherPenLine />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                  <IconButton
                    variant="neutral-tertiary"
                    size="small"
                    icon={<FeatherTrash />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </div>
              </div>
              <div className="w-full items-center gap-4 border-b border-solid border-neutral-border bg-default-background px-4 py-2 grid grid-cols-6">
                <span className="text-monospace-body font-monospace-body text-default-font">
                  place_of_birth
                </span>
                <span className="text-body font-body text-default-font">
                  wd:Item
                </span>
                <span className="text-body font-body text-default-font">
                  0..1
                </span>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  —
                </span>
                <Badge variant="neutral">sin mapear</Badge>
                <div className="flex items-center justify-end gap-1">
                  <IconButton
                    variant="neutral-tertiary"
                    size="small"
                    icon={<FeatherPenLine />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                  <IconButton
                    variant="neutral-tertiary"
                    size="small"
                    icon={<FeatherTrash />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </div>
              </div>
              <div className="w-full items-center gap-4 border-b border-solid border-neutral-border bg-default-background px-4 py-2 grid grid-cols-6">
                <span className="text-monospace-body font-monospace-body text-default-font">
                  occupation
                </span>
                <span className="text-body font-body text-default-font">
                  wd:Item
                </span>
                <span className="text-body font-body text-default-font">
                  0..*
                </span>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  —
                </span>
                <Badge variant="neutral">sin mapear</Badge>
                <div className="flex items-center justify-end gap-1">
                  <IconButton
                    variant="neutral-tertiary"
                    size="small"
                    icon={<FeatherPenLine />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                  <IconButton
                    variant="neutral-tertiary"
                    size="small"
                    icon={<FeatherTrash />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </div>
              </div>
              <div className="w-full items-center gap-4 border-b border-solid border-neutral-border bg-default-background px-4 py-2 grid grid-cols-6">
                <span className="text-monospace-body font-monospace-body text-default-font">
                  gender
                </span>
                <span className="text-body font-body text-default-font">
                  wd:Item
                </span>
                <span className="text-body font-body text-default-font">
                  0..1
                </span>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  —
                </span>
                <Badge variant="neutral">sin mapear</Badge>
                <div className="flex items-center justify-end gap-1">
                  <IconButton
                    variant="neutral-tertiary"
                    size="small"
                    icon={<FeatherPenLine />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                  <IconButton
                    variant="neutral-tertiary"
                    size="small"
                    icon={<FeatherTrash />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </div>
              </div>
              <div className="w-full items-center gap-4 border-b border-solid border-neutral-border bg-default-background px-4 py-2 grid grid-cols-6">
                <span className="text-monospace-body font-monospace-body text-default-font">
                  participant_in
                </span>
                <span className="text-body font-body text-default-font">
                  wd:Item
                </span>
                <span className="text-body font-body text-default-font">
                  0..*
                </span>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  —
                </span>
                <Badge variant="neutral">sin mapear</Badge>
                <div className="flex items-center justify-end gap-1">
                  <IconButton
                    variant="neutral-tertiary"
                    size="small"
                    icon={<FeatherPenLine />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                  <IconButton
                    variant="neutral-tertiary"
                    size="small"
                    icon={<FeatherTrash />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </div>
              </div>
              <div className="w-full items-center gap-4 border-b border-solid border-neutral-border bg-default-background px-4 py-2 grid grid-cols-6">
                <span className="text-monospace-body font-monospace-body text-default-font">
                  described_by_source
                </span>
                <span className="text-body font-body text-default-font">
                  wd:Item
                </span>
                <span className="text-body font-body text-default-font">
                  0..*
                </span>
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  —
                </span>
                <Badge variant="neutral">sin mapear</Badge>
                <div className="flex items-center justify-end gap-1">
                  <IconButton
                    variant="neutral-tertiary"
                    size="small"
                    icon={<FeatherPenLine />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                  <IconButton
                    variant="neutral-tertiary"
                    size="small"
                    icon={<FeatherTrash />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </div>
              </div>
            </div>
            <span className="text-caption font-caption text-subtext-color">
              5 propiedades sin mapear bloquean la validación de UI-11.5.
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full items-center justify-between gap-4">
              <div className="flex gap-2 items-baseline">
                <span className="text-body-bold font-body-bold text-default-font">
                  Anotaciones
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  skos:altLabel · rdfs:seeAlso
                </span>
              </div>
            </div>
            <div className="w-full items-start gap-4 grid grid-cols-2 mobile:grid mobile:grid-cols-1">
              <div className="flex flex-col items-start gap-2 self-stretch rounded-lg border border-solid border-neutral-border px-6 py-6">
                <span className="text-body-bold font-body-bold text-default-font">
                  Etiquetas alternativas
                </span>
                <div className="flex w-full items-center gap-2">
                  <span className="w-8 flex-none text-caption font-caption text-subtext-color">
                    ca
                  </span>
                  <TextField
                    className="h-auto w-auto min-w-[0px] flex-none grow shrink basis-0"
                    label=""
                    helpText=""
                  >
                    <TextField.Input
                      placeholder="persona"
                      value="persona"
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                </div>
                <div className="flex w-full items-center gap-2">
                  <span className="w-8 flex-none text-caption font-caption text-subtext-color">
                    en
                  </span>
                  <TextField
                    className="h-auto w-auto min-w-[0px] flex-none grow shrink basis-0"
                    label=""
                    helpText=""
                  >
                    <TextField.Input
                      placeholder="human being"
                      value="human being"
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                </div>
                <div className="flex w-full items-center gap-2">
                  <span className="w-8 flex-none text-caption font-caption text-subtext-color">
                    es
                  </span>
                  <TextField
                    className="h-auto w-auto min-w-[0px] flex-none grow shrink basis-0"
                    label=""
                    helpText=""
                  >
                    <TextField.Input
                      placeholder="persona"
                      value="persona"
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                </div>
                <div className="flex w-full items-center gap-2">
                  <span className="w-8 flex-none text-caption font-caption text-subtext-color">
                    pt
                  </span>
                  <TextField
                    className="h-auto w-auto min-w-[0px] flex-none grow shrink basis-0"
                    label=""
                    helpText=""
                  >
                    <TextField.Input
                      placeholder="pessoa"
                      value="pessoa"
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 self-stretch rounded-lg border border-solid border-neutral-border px-6 py-6">
                <span className="text-body-bold font-body-bold text-default-font">
                  Referencias y códigos externos
                </span>
                <div className="flex w-full items-center justify-between rounded-md border border-solid border-neutral-border px-3 py-2 gap-2">
                  <div className="flex items-center gap-2">
                    <FeatherExternalLink className="text-body font-body text-subtext-color w-4 flex-none" />
                    <span className="text-body font-body text-default-font">
                      https://www.wikidata.org/wiki/Q5
                    </span>
                  </div>
                  <IconButton
                    variant="neutral-tertiary"
                    size="small"
                    icon={<FeatherX />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </div>
                <div className="flex w-full flex-wrap items-center gap-2">
                  <Badge variant="brand" icon={<FeatherLink2 />}>
                    Wikidata Q5
                  </Badge>
                  <Badge variant="neutral">VIAF —</Badge>
                  <Badge variant="neutral">GND —</Badge>
                </div>
                <Combobox
                  label=""
                  placeholder="añadir identificador externo…"
                  value=""
                  helpText=""
                />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full items-center justify-between gap-4">
              <div className="flex gap-2 items-baseline">
                <span className="text-body-bold font-body-bold text-default-font">
                  restricciones (OWL)
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  owl:Restriction
                </span>
                <span className="text-caption font-caption text-subtext-color">
                  · 2 declaradas
                </span>
              </div>
              <Button
                variant="neutral-secondary"
                size="small"
                icon={<FeatherPlus />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                restricción
              </Button>
            </div>
            <div className="flex w-full items-center gap-3 rounded-md border border-solid border-neutral-border px-4 py-2">
              <span className="text-monospace-body font-monospace-body text-default-font">
                place_of_birth
              </span>
              <FeatherArrowRight className="text-body font-body text-subtext-color w-4 flex-none" />
              <Badge variant="neutral">someValuesFrom</Badge>
              <span className="line-clamp-1 grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                wd:Q17334923
              </span>
              <span className="text-caption font-caption text-subtext-color">
                0..1
              </span>
              <IconButton
                variant="neutral-tertiary"
                size="small"
                icon={<FeatherTrash />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
            </div>
            <div className="flex w-full items-center gap-3 rounded-md border border-solid border-neutral-border px-4 py-2">
              <span className="text-monospace-body font-monospace-body text-default-font">
                birth_date
              </span>
              <FeatherArrowRight className="text-body font-body text-subtext-color w-4 flex-none" />
              <Badge variant="neutral">maxCardinality</Badge>
              <span className="line-clamp-1 grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                xsd:dateTime
              </span>
              <span className="text-caption font-caption text-subtext-color">
                1
              </span>
              <IconButton
                variant="neutral-tertiary"
                size="small"
                icon={<FeatherTrash />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
            </div>
            <span className="text-caption font-caption text-subtext-color">
              Las restricciones se comprueban con el reasoner y el runner OOPS!
              (UI-11.5).
            </span>
          </div>
          <div className="flex w-full items-center justify-between border-t border-solid border-neutral-border pt-4 gap-4 mobile:flex-col mobile:items-start">
            <div className="flex flex-col items-start gap-1">
              <span className="text-caption font-caption text-subtext-color">
                Los cambios crean una nueva versión de la clase y quedan en el
                registro de auditoría.
              </span>
              <span className="text-caption font-caption text-warning-700">
                1 idioma sin descripción · 5 propiedades sin mapear
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="neutral-tertiary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                cancelar
              </Button>
              <Button
                variant="brand-primary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                guardar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui116EditClass;
