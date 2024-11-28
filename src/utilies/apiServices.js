const API_URL = process.env.REACT_APP_API_URL

export const generateCode = async (prompt) => {
  const response = await fetch(`${API_URL}generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prompt })
  })
  const result = await response.json();
  return result
}