import fetch from "node-fetch";
import { TreeNode, TreeDTO, ExpandTreeDTO } from "@/types/data";

// Define the API endpoint
const API_ENDPOINT = "/api/chat";
const AutoTopics = [
  "Premium",
  "Deductible",
  "Policyholder",
  "Claim",
  "Liability Coverage",
  "Collision Coverage",
  "Comprehensive Coverage",
  "Uninsured/Underinsured Motorist Coverage",
  "Medical Payments Coverage",
  "Personal Injury Protection (PIP)",
  "Bodily Injury Liability",
  "Property Damage Liability",
  "Gap Insurance",
  "Rental Reimbursement",
  "Towing and Labor",
  "Ride-Sharing Coverage",
  "SR-22",
  "Telematics",
  "No-Fault Insurance",
  "At-Fault",
  "Actuary",
  "Adjuster",
  "Appraisal",
  "Declarations Page",
  "Exclusion",
  "Grace Period",
  "Indemnity",
  "Insurable Interest",
  "Insurance Score",
  "Named Insured",
  "Occasional Driver",
  "Primary Use",
  "Quote",
  "Subrogation",
  "Underwriting",
  "Usage-Based Insurance",
  "Agent",
  "Broker",
  "Claimant",
  "Endorsement",
  "Salvage Title",
  "Total Loss",
  "Accident Forgiveness",
  "Diminishing Deductible",
  "Roadside Assistance",
  "Classic Car Insurance",
  "High-Risk Auto Insurance",
  "Non-Owners Auto Insurance",
  "Pay-Per-Mile Insurance",
  "Credit-Based Insurance Score",
  "Aftermarket Parts",
  "OEM Parts",
  "Ride-Share Insurance"
  ];

const HomeTopics = [
  "Dwelling Coverage",
  "Personal Property Coverage",
  "Liability Protection",
  "Guest Medical Protection",
  "Additional Living Expenses",
  "Deductible",
  "Actual Cash Value",
  "Replacement Cost",
  "Extended Replacement Cost",
  "Policyholder",
  "Premium",
  "Underwriting",
  "Peril",
  "Exclusion",
  "Endorsement",
  "Rider",
  "Floater",
  "Binders",
  "Claim",
  "Liability Limit",
  "Umbrella Policy",
  "Earthquake Insurance",
  "Flood Insurance",
  "Named Peril",
  "All-Risk/All-Peril",
  "Scheduled Personal Property",
  "Home Inventory",
  "Credit Report",
  "Depreciation",
  "Public Adjuster",
  "Appraisal",
  "Market Value",
  "Subrogation",
  "Loss of Use",
  "Ordinance or Law Coverage",
  "Water Backup Coverage",
  "Loss Assessment Coverage",
  "High-Risk Home Insurance",
  "Homeowners Association (HOA)",
  "Condominium Insurance",
  "Renters Insurance",
  "Mobile Home Insurance",
  "Title Insurance",
  "Mortgage Insurance",
  "Home Warranty",
  "Catastrophe",
  "Liability Coverage",
  "Medical Payments Coverage",
  "Personal Umbrella Policy",
  "Vacant and Unoccupied Home Insurance"
  ];

const lifeTopics = [
  "Premium",
  "Beneficiary",
  "Death Benefit",
  "Policyholder",
  "Insurable Interest",
  "Underwriting",
  "Term Life Insurance",
  "Whole Life Insurance",
  "Universal Life Insurance",
  "Variable Life Insurance",
  "Cash Value",
  "Dividend",
  "Rider",
  "Exclusion",
  "Grace Period",
  "Surrender Value",
  "Face Value",
  "Convertible Term",
  "Renewable Term",
  "Annuity",
  "Policy Loan",
  "Free Look Period",
  "Incontestability Clause",
  "Accelerated Death Benefit",
  "Waiver of Premium",
  "Level Premium",
  "Decreasing Term",
  "Increasing Term",
  "Permanent Life Insurance",
  "Group Life Insurance",
  "Credit Life Insurance",
  "Endowment Policy",
  "Maturity Date",
  "Mortality Charge",
  "Policy Reinstatement",
  "Risk Classification",
  "Settlement Option",
  "Substandard Risk",
  "Suicide Clause",
  "Underwriter",
  "Viatical Settlement",
  "Living Benefits",
  "Guaranteed Insurability"
  ];







/**
 * Send a POST request to the API to get a response based on the prompt.
 * @param messages The array of messages to be sent as a prompt.
 * @return Promise<OpenAIResponse> The response from the OpenAI API.
 */
export async function createNewTree(treeData: TreeDTO): Promise<TreeNode> {
  let Topics = AutoTopics;
  let randomTopic = 0;
  if(treeData.insuranceType == "Auto") {
    Topics = AutoTopics;
    randomTopic = Math.floor(Math.random() * AutoTopics.length);
  } else if(treeData.insuranceType == "Home") {
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
  if(treeData.insuranceType == "Auto") {
    Topics = AutoTopics;
    randomTopic = Math.floor(Math.random() * AutoTopics.length);
  } else if(treeData.insuranceType == "Home") {
    Topics = HomeTopics;
    randomTopic = Math.floor(Math.random() * HomeTopics.length);
  } else if (treeData.insuranceType == "Life") {
    Topics = lifeTopics;
    randomTopic = Math.floor(Math.random() * lifeTopics.length);
  }
  let prompt;
  const random = Math.random() * 3;
  if (random == 0) {
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

    if(random == 0) {
    data.topic = Topics[randomTopic];
    }

    return data;
  } catch (error) {
    throw error;
  }
}
