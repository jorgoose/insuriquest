import Card from "@/components/card";
import Heading from "@/components/heading";
import Button from "@/components/button";
import { TreeNode } from "@/types/data";
import { useState } from "react";

type Props = {
  node: TreeNode;
  onSelect: (index: number) => void;
}

export default function Node({
  node: {
    title,
    scenario,
    options
  },
  onSelect
}: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (selected === null) {
      onSelect(index + 1);
      setSelected(index);
    }
  }

  return (
    <>
      <Card className="shadow-2xl border-2 border-blue-200 w-full max-w-xl p-6" key={`${title}-scenario`}>
        <Heading classNames="mb-4 text-center">{title}</Heading>
        <p className="text-lg text-gray-600 mb-6 text-center">{scenario}</p>
        <div className='flex justify-center space-x-4'>
          {options.map((option, index) => (
            <Button className='hover:scale-105 transition-transform transform duration-150' key={option.title} onClick={() => handleClick(index)}>
              {option.title}
            </Button>
          ))}
        </div>
      </Card>
      {selected !== null && (
        <Card className="shadow-2xl border-2 border-blue-200 w-full max-w-xl p-6" key={`${title}-result`}>
          <p className="text-lg text-gray-600 mb-6 text-center">{options[selected]!.result}</p>
        </Card>
      )}
    </>
  );
}
