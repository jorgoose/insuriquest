// These two might be enums later
type Theme = '';
type InsurranceType = 'home' | 'auto';

type InsuranceSelection = { // null in case you have no insurance
    premium: number;
    deductible: number;
} | null;

type Tree = {
    title: string;
    nodes: TreeNode[];
}

export type TreeNode = {
    title: string;
    scenario: string;
    options: NodeOption[];
}

type NodeOption = {
    title: string;
    result: string;
}

export type TreeDTO = {
    name: string; // name of user for personalization
    theme: Theme;
    insuranceType: InsurranceType;
    insuranceSelection: InsuranceSelection;
}

export type ExpandTreeDTO = TreeDTO & { // pass to function that returns TreeNode
    node: TreeNode; // emmit options, the previous senario
    option: number; // what you selected
}