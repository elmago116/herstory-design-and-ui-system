"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextField } from "@/ui/components/TextField";

function Ui011InviteUser() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#00000099] px-6 py-6">
      <div className="flex w-[560px] flex-col items-start gap-5 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg max-w-full">
        <div className="flex w-full flex-col items-start gap-1">
          <h1 className="text-heading-3 font-heading-3 text-default-font">
            Invite user
          </h1>
          <p className="text-body font-body text-subtext-color">
            An invitation binds this email address to one role and one
            workspace. The account stays pending until it is accepted.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-4">
          <TextField
            className="h-auto w-full flex-none"
            label="Email"
            helpText="The invitation is sent to this address."
          >
            <TextField.Input
              placeholder="name@institution.org"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
          <Select
            className="h-auto w-full flex-none"
            label="Role"
            placeholder="Select a role"
            helpText="Determines what the account can review and publish."
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="Superadmin">Superadmin</Select.Item>
            <Select.Item value="Coordinator">Coordinator</Select.Item>
            <Select.Item value="Reviewer">Reviewer</Select.Item>
            <Select.Item value="Inquirer">Inquirer</Select.Item>
          </Select>
          <Select
            className="h-auto w-full flex-none"
            label="Workspace access"
            placeholder="Select a workspace"
            helpText="One workspace per invitation. More can be granted later."
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="Barcelona 1912">Barcelona 1912</Select.Item>
            <Select.Item value="Ateneu Obrer">Ateneu Obrer</Select.Item>
            <Select.Item value="Parish Records">Parish Records</Select.Item>
          </Select>
        </div>
        <div className="flex w-full flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-neutral-50 px-4 py-3">
          <span className="text-caption font-caption text-subtext-color">
            Superadmin can publish approved records to Wikidata.
          </span>
          <span className="text-caption font-caption text-subtext-color">
            Grant it only to accounts responsible for external releases.
          </span>
        </div>
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-tertiary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Cancel
          </Button>
          <Button
            variant="brand-primary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Send invite
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Ui011InviteUser;
