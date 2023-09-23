"use client";
import { useEffect, useState } from 'react';
import {Flex, Text, Button} from '@radix-ui/themes';

export default function Home() {
    const [data, setData] = useState(0);

    useEffect(() => {

        fetch('/message.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // Set the JSON data in state
                setData(data);
            })
            .catch((error) => {
                console.error('Error fetching JSON data:', error);
            });
    }, []);



  return (
      <div>
        <Button onClick={() => setData(data + 1)}>
            Click me please
        </Button>
        <Text>{JSON.stringify(data)}</Text>
      </div>
  )
}