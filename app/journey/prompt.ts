import fetch from "node-fetch";
import { TreeNode, TreeDTO, ExpandTreeDTO } from "@/types/data";

// Define the API endpoint
const API_ENDPOINT = "/api/chat";

const AutoTopics = [
  "At-fault",
  "Bodily Injury Liability",
  "Claim",
  "Collision Coverage",
  "Comprehensive Coverage",
  "Coverage Limit",
  "Deductible",
  "Gap Insurance",
  "Liability Coverage",
  "Medical Payments Coverage",
  "No-fault Insurance",
  "Policy Term",
  "Policyholder",
  "Premium",
  "Property Damage Liability",
  "Quote",
  "Rate",
  "Total Loss",
  "Underinsured Motorist Coverage",
  "Uninsured Motorist Coverage",
];

const HomeTopics = [
  "Actual Cash Value",
  "Additional Living Expenses",
  "Coverage Area",
  "Deductible",
  "Dwelling Coverage",
  "Endorsement",
  "Flood Insurance",
  "Home Inventory",
  "Liability Coverage",
  "Loss of Use",
  "Medical Payments Coverage",
  "Personal Property Coverage",
  "Policyholder",
  "Premium",
  "Replacement Cost",
  "Riders",
  "Scheduled Personal Property",
  "Underwriting",
  "Umbrella Policy",
  "Water Backup Coverage",
];

const lifeTopics = [
  "Accelerated Death Benefit",
  "Annuitization",
  "Beneficiary",
  "Cash Surrender Value",
  "Convertible Term Life Insurance",
  "Death Benefit",
  "Face Amount",
  "Grace Period",
  "Group Life Insurance",
  "Guaranteed Issue Life Insurance",
  "Level Term Life Insurance",
  "Permanent Life Insurance",
  "Policyholder",
  "Premium",
  "Renewable Term Life Insurance",
  "Riders",
  "Term Life Insurance",
  "Underwriting",
  "Universal Life Insurance",
  "Whole Life Insurance",
];

/**
 * Send a POST request to the API to get a response based on the prompt.
 * @param messages The array of messages to be sent as a prompt.
 * @return Promise<OpenAIResponse> The response from the OpenAI API.
 */
export async function createNewTree(treeData: TreeDTO): Promise<TreeNode> {
  let Topics = AutoTopics;
  let randomTopic = 0;
  if (treeData.insuranceType == "Auto") {
    Topics = AutoTopics;
    randomTopic = Math.floor(Math.random() * AutoTopics.length);
  } else if (treeData.insuranceType == "Home") {
    Topics = HomeTopics;
    randomTopic = Math.floor(Math.random() * HomeTopics.length);
  } else if (treeData.insuranceType == "Life") {
    Topics = lifeTopics;
    randomTopic = Math.floor(Math.random() * lifeTopics.length);
  }
  // const randomTopic = Math.floor(Math.random() * 7);
  const prompt = `
  Create a specific story senario with 2 user options in the form of a decision tree

  Generate a scenario to teach about ${treeData.insuranceType} insurance
  Use the scenario to teach about the concept of ${Topics[randomTopic]}
  
  Make the character name ${treeData.name}
  Use a ${treeData.theme} theme in your generation
 
  Output ONLY a JSON in the following format:
  {
  title: "Senaio title",
  scenario: "scenario description",
  options[]: {
  title: "Option title",
  result: "Result of given action"
  },
  }
  
  Please write in English language.`;

  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    const data: TreeNode = await response.json();
    data.topic = Topics[randomTopic];

    return data;
  } catch (error) {
    throw error;
  }
}

/**
 * Send a POST request to the API to get a response based on the prompt.
 * @param messages The array of messages to be sent as a prompt.
 * @return Promise<OpenAIResponse> The response from the OpenAI API.
 */
export async function expandTree(treeData: ExpandTreeDTO): Promise<TreeNode> {
  let Topics = AutoTopics;
  let randomTopic = 0;
  if (treeData.insuranceType == "Auto") {
    Topics = AutoTopics;
    randomTopic = Math.floor(Math.random() * AutoTopics.length);
  } else if (treeData.insuranceType == "Home") {
    Topics = HomeTopics;
    randomTopic = Math.floor(Math.random() * HomeTopics.length);
  } else if (treeData.insuranceType == "Life") {
    Topics = lifeTopics;
    randomTopic = Math.floor(Math.random() * lifeTopics.length);
  }
  const random = Math.random() * 3;
  let prompt;

  if (random == 0) {
    prompt = `
      ${JSON.stringify(treeData.node)}
      The user chose the ${treeData.option === 0 ? 'first' : 'second'} option from above
      Use the scenario above continue the story about ${treeData.insuranceType} insurance with 2 user options in the form of a decision tree
      Use the scenario to teach about the concept of ${Topics[randomTopic]}

      Make the character name ${treeData.name}
      Use a ${treeData.theme} theme in your generation
      
     
      Output ONLY a JSON in the following format:
      {
      scenario: "scenario description",
      options[]: {
      title: "Option title",
      result: "Result of given action"
      },
      }
      
      Please write in English language.`;
  } else {
    prompt = `
      ${JSON.stringify(treeData.node)}
      The user chose the ${treeData.option === 0 ? 'first' : 'second'} option from above
      Continue the story from above, and present the user with two different options

      Make the character name ${treeData.name}
      Use a ${treeData.theme} theme in your generation

      Output ONLY a JSON in the following format:
      {
      scenario: "scenario description",
      options[]: {
      title: "Option title",
      result: "Result of given action"
      },
      }
      
      Please write in English language.`;
  }

  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    const data: TreeNode = await response.json();

    if (random == 0) {
      data.topic = Topics[randomTopic];
    }

    return data;
  } catch (error) {
    throw error;
  }
}
