'use client';
import { useEffect, useState } from 'react';
import { TreeNode } from '@/types/data';
import Card from '@/components/card';
import Heading from '@/components/heading';
import Button from '@/components/button';
import {useSearchParams} from "next/navigation";

export default function Home() {
  const [nodes, setNodes] = useState<TreeNode[]>([]);
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const searchParams = useSearchParams();
  const theme = searchParams.get("theme") || 'sci_fi';

  function removeSpaces(theme) {
    // Get the theme parameter and remove all spaces
    return theme.replace(/\s+/g, '');
  }

  let fixedTheme = removeSpaces(theme);

  useEffect(() => {
    const storage = localStorage.getItem('data')!;
    const data: TreeNode = JSON.parse(storage);
    setNodes([data]);

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
      {nodes.map(({ title, scenario, options }) => (
        <Card className="shadow-2xl border-2 border-blue-200 w-full max-w-xl p-6" key={title}>
          <Heading classNames="mb-4 text-center">{title}</Heading>
          <p className="text-lg text-gray-600 mb-6 text-center">{scenario}</p>
          <div className='flex justify-center space-x-4'>
            {options.map(option => (
              <Button className='hover:scale-105 transition-transform transform duration-150' key={option.title}>
                {option.title}
              </Button>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
