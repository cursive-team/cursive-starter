"use client";
import { Modal } from "@/components/modals/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Radio } from "@/components/ui/Radio";
import React, { useState } from "react";

export default function ProfilePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div>Modal</div>
      </Modal>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <strong>Button</strong>
          <div className="grid grid-cols-3 gap-3">
            <Button>Button</Button>
            <Button variant="secondary">Button</Button>
            <Button variant="tertiary">Button</Button>
            <div className="text-xs col-span-3">Disabled</div>
            <Button disabled>Button</Button>
            <Button variant="secondary" disabled>
              Button
            </Button>
            <Button variant="tertiary" disabled>
              Button
            </Button>
            <div className="text-xs col-span-3">Loading</div>
            <Button loading>Button</Button>
            <Button variant="secondary" loading>
              Button
            </Button>
            <Button variant="tertiary" loading>
              Button
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <strong>Input</strong>
          <div className="grid grid-cols-3 gap-4">
            <Input
              label="Default input"
              placeholder="Example"
              className="col-span-3 w-full"
            />
            <Input
              label="Input disabled"
              placeholder="Example"
              className="col-span-3 w-full"
              disabled
            />
            <Input
              label="Input with error"
              placeholder="Example"
              className="col-span-3 w-full"
              disabled
              error="Error message"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <strong>Radio</strong>
          <div className="grid grid-cols-3 gap-4">
            <Radio id="radio1" label="Radio 1" checked={true} />
            <Radio id="radio1" label="Radio 2" disabled />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <strong>Modal</strong>
          <Button className="col-span-3" onClick={() => setIsModalOpen(true)}>
            Open Modal
          </Button>
        </div>
      </div>
    </>
  );
}
