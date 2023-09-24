'use client';

import { useEffect, useState } from 'react';
import { ExpandTreeDTO, TreeDTO, TreeNode } from '@/types/data';
import Card from '@/components/card';
import Heading from '@/components/heading';
import Button from '@/components/button';
import { expandTree } from './prompt';

export default function Home() {
  const [nodes, setNodes] = useState<TreeNode[]>([]);
  const [treeDTO, setTreeDTO] = useState<TreeDTO>();

  useEffect(() => {
    const storage = localStorage.getItem('treeNode')!;
    const data: TreeNode = JSON.parse(storage);
    const dtoStorage = localStorage.getItem('treeDTO')!;
    const dto: TreeDTO = JSON.parse(dtoStorage);
    
    setNodes([data]);
    setTreeDTO(dto);
  }, []);

  const handleExtendQuest = async (choice: number) => {
    console.log(choice);
    const data = await expandTree({
        ...treeDTO as TreeDTO,
        node: nodes[0], 
        option: choice,
      });
      setNodes([...nodes, data]);
  };

  return (
    <div className="flex flex-col items-center space-y-12 pt-20 pb-10 bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen font-poppins">
      {nodes.map(({ title, scenario, options }) => (
        <Card className="shadow-2xl border-2 border-blue-200 w-full max-w-xl p-6" key={title}>
          <Heading classNames="mb-4 text-center">{title}</Heading>
          <p className="text-lg text-gray-600 mb-6 text-center">{scenario}</p>
          <div className='flex justify-center space-x-4'>
            {options.map((option, index) => (
              <Button className='hover:scale-105 transition-transform transform duration-150' key={option.title} onClick={() => handleExtendQuest(index + 1)}>
                {option.title}
              </Button>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
