const API_URL = process.env.REACT_APP_API_URL

export const generateCodeFromPrompt = async (prompt) => {
  const response = await fetch(`${API_URL}generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prompt })
  })
  const result = await response.json();
  return result.solution
}

export const generateCodeFromImg = async (img_data) => {
  const response = await fetch(`${API_URL}generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prompt: "", img_data })
  })
  const result = await response.json();
  return result.solution
}