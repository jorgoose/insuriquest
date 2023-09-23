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

type TreeNode = {
    title: string;
    scenario: string;
    options: NodeOption[];
}

type NodeOption = {
    title: string;
    result: string;
}

type TreeDTO = {
    name: string; // name of user for personalization
    theme: Theme;
    insuranceType: InsurranceType;
    insuranceSelection: InsuranceSelection;
}

type ExpandTreeDTO = TreeDTO & { // pass to function that returns TreeNode
    node: Omit<TreeNode, 'options'>; // emmit options, the previous senario
    option: NodeOption; // what you selected
}
