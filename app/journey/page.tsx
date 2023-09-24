'use client';

import { useEffect, useState } from 'react';
import { TreeDTO, TreeNode } from '@/types/data';
import { expandTree } from './prompt';
import Node from './node';

export default function Home() {
  const [nodes, setNodes] = useState<TreeNode[]>([]);
  const [treeDTO, setTreeDTO] = useState<TreeDTO>();
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  function removeSpaces(theme: string) {
    return theme.replace(/\s+/g, '');
  }

  useEffect(() => {
    const storage = localStorage.getItem('treeNode')!;
    const data: TreeNode = JSON.parse(storage);

    const dtoStorage = localStorage.getItem('treeDTO')!;
    const dto: TreeDTO = JSON.parse(dtoStorage);
    
    setNodes([data]);
    setTreeDTO(dto);

    const fixedTheme = removeSpaces(dto.theme);

    // Define an array of images
    const imageArray = [
      `background/${fixedTheme}/1.jpg`,
      `background/${fixedTheme}/2.jpg`,
      `background/${fixedTheme}/3.jpg`,
      `background/${fixedTheme}/4.jpg`,
      `background/${fixedTheme}/5.jpg`,
      `background/${fixedTheme}/6.jpg`
    ];

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * imageArray.length);

    // Set the selected image as the background
    const selectedImage = imageArray[randomIndex];
    setBackgroundImage(selectedImage);
  }, []);

  const handleExtendQuest = async (choice: number) => {
    const data = await expandTree({
        ...treeDTO as TreeDTO,
        node: nodes[0], 
        option: choice,
      });
      setNodes([...nodes, data]);
  };

  return (
      <div
          className="flex flex-col items-center space-y-12 pt-20 pb-10 bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen font-poppins"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
          }}
      >
      {nodes.map((node, index) => (
        <Node
          key={`${node.title}-${index}`}
          node={node}
          onSelect={handleExtendQuest}
        />
      ))}
    </div>
  );
}
