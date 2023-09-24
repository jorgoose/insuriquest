"use client";

import { useEffect, useState } from "react";
import { TreeDTO, TreeNode } from "@/types/data";
import { expandTree } from "./prompt";
import Node from "./node";

export default function Home() {
  const [nodes, setNodes] = useState<TreeNode[]>([]);
  const [treeDTO, setTreeDTO] = useState<TreeDTO>();
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  
    function removeSpaces(theme: any): string {
        let themeString: string = String(theme);
        return themeString.replace(/\s+/g, '');
    }

  useEffect(() => {
    const storage = localStorage.getItem("treeNode")!;
    const data: TreeNode = JSON.parse(storage);

    const dtoStorage = localStorage.getItem("treeDTO")!;
    const dto: TreeDTO = JSON.parse(dtoStorage);

    setNodes([data]);
    setTreeDTO(dto);

    const fixedTheme = removeSpaces(dto.theme);

    const imageArray = [
      `background/${fixedTheme}/1.jpg`,
      `background/${fixedTheme}/2.jpg`,
      `background/${fixedTheme}/3.jpg`,
      `background/${fixedTheme}/4.jpg`,
      `background/${fixedTheme}/5.jpg`,
      `background/${fixedTheme}/6.jpg`,
    ];

    const randomIndex = Math.floor(Math.random() * imageArray.length);
    const selectedImage = imageArray[randomIndex];
    setBackgroundImage(selectedImage);
  }, []);

  const handleExtendQuest = async (choice: number) => {
    const data = await expandTree({
      ...(treeDTO as TreeDTO),
      node: nodes[nodes.length - 1],
      option: choice,
    });
    setNodes([...nodes, data]);
  };

  return (
    <div
      className="flex flex-col items-center space-y-12 pt-20 pb-10 min-h-screen font-poppins transition-all duration-300 ease-in-out"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-2xl space-y-6 relative z-10 border-2 border-blue-200 overflow-y-auto">
        {nodes.map((node, index) => (
          <Node
            key={`${node.title}-${index}`}
            node={node}
            onSelect={handleExtendQuest}
            insuranceType={treeDTO!.insuranceType}
          />
        ))}
      </div>
    </div>
  );
}
