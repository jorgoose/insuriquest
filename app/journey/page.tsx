'use client';

import { useEffect, useState } from 'react';
import { Heading, Card, Text, Flex, Button } from '@radix-ui/themes';
import { TreeNode } from '@/types/data';

export default function Home() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);

    useEffect(() => {
        fetch('/message.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json() as Promise<TreeNode>;
            })
            .then((data) => {
                setNodes([...nodes, data]);
            })
            .catch((error) => {
                console.error('Error fetching JSON data:', error);
            });
    }, []);

    return (nodes.map(({ title, scenario, options }) => (
        <Card>
            <Heading>{title}</Heading>
            <Text>{scenario}</Text>
            <Flex>
                {options.map(option => (
                    <Button>
                        {option.title}
                    </Button>
                ))}
            </Flex>
        </Card>
    )));
}
