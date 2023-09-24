// These two might be enums later
export type Theme = 'modern day' | "fantasy" | "sci-fi" | "wild west" | "medieval" | "pirate" | "cyberpunk";
export type InsuranceType = 'Home' | 'Auto' | 'Life';

export type Tree = {
    title: string;
    nodes: TreeNode[];
}

export type TreeNode = {
    title?: string;
    scenario: string;
    topic: string;
    options: NodeOption[];
}

type NodeOption = {
    title: string;
    result: string;
}

export type TreeDTO = {
    name: string; // name of user for personalization
    theme: Theme;
    insuranceType: InsuranceType;
}

export type ExpandTreeDTO = TreeDTO & { // pass to function that returns TreeNode
    node: TreeNode; // emmit options, the previous senario
    option: number; // what you selected
}
