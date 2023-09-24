import fetch from "node-fetch";
import { TreeNode, TreeDTO, ExpandTreeDTO } from "@/types/data";

// Define the API endpoint
const API_ENDPOINT = "/api/chat";
const Topics = [
  "Deductibles",
  "Premiums",
  "Coverage",
  "Liability",
  "Collision",
  "Comprehensive",
  "Uninsured/Underinsured Motorist Coverage",
];

const randomTopic = Math.floor(Math.random() * 7);

/**
 * Send a POST request to the API to get a response based on the prompt.
 * @param messages The array of messages to be sent as a prompt.
 * @return Promise<OpenAIResponse> The response from the OpenAI API.
 */
export async function createNewTree(treeData: TreeDTO): Promise<TreeNode> {
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
  let prompt;
  if (Math.random() * 3 == 0) {
    prompt = `"
        ${treeData.node}"
        The user chose option ${treeData.option} from above
      Use the scenario above continue the story about ${treeData.insuranceType} insurance with 2 user options in the form of a decision tree
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
  } else {
    prompt = `"
        ${treeData.node}"
        The user chose option ${treeData.option} from above
        Use the scenario above continue the story about ${treeData.insuranceType} insurance with 2 user options in the form of a decision tree

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
  }

  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });

    console.log(await response);
    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    const data: TreeNode = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}
