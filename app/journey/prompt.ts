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
];

//random number between 0 and 5
const randomTopic = Math.floor(Math.random() * 5);

/**
 * Send a POST request to the API to get a response based on the prompt.
 * @param messages The array of messages to be sent as a prompt.
 * @return Promise<OpenAIResponse> The response from the OpenAI API.
 */
export async function createNewTree(treeData: TreeDTO): Promise<TreeNode> {
  const prompt = `
  Create a specific story senario with 2 user options in the form of a decision tree

  Generate a scenario about ${treeData.insuranceType} insurance
  Use the scenario to teach about ${Topics[randomTopic]}
  Also generate a 2 paragraph description about ${Topics[randomTopic]}
  
  Use a ${treeData.insuranceType} insurance plan in the scenario
  Use a ${treeData.theme} theme in your generation
  Make the character name ${treeData.name}
  ${treeData.name} is not able to modify anything about their insurance plan
  Output in the JSON format
  {
  
  title: "Senaio title"
  scenario: "scenario description"
  options[]: {
  title: "option title"
  result: "Result of given action"
  description: "description of deductibles"
  }
  }
  
  
  Please write in English language.`;

  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      body: JSON.stringify({prompt})
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
    const prompt = `
        ${treeData.node}
      Continue the specific story scenario with 2 user options in the form of a decision tree
      
      Generate a scenario about ${treeData.insuranceType} insurance
      Use the scenario to teach about ${Topics[randomTopic]}
      Also generate a 2 paragraph description about ${Topics[randomTopic]}
      
      Use a ${treeData.insuranceSelection} insurance plan in the scenario
      Use a ${treeData.theme} theme in your generation
      Make the character name ${treeData.name}
      ${treeData.name} is not able to modify anything about their insurance plan
      Output in the JSON format
      {
      
      title: "Senaio title"
      scenario: "scenario description"
      options[]: {
      title: "option title"
      result: "Result of given action"
      description: "description of deductibles"
      }
      }
      
      Please write in English language.
      `;
  
    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: prompt,
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
