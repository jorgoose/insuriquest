// These two might be enums later
type Theme = 'medeival';
type InsurranceType = 'home' | 'auto';

type InsuranceSelection = { // null in case you have no insurance
    premium: number;
    deductible: number;
} | null;

export type Tree = {
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
    description: string;
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
