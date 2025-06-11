export async function getData() {
  const response = await fetch('https://mock.staging.bidcom.com.ar/api/challenge/info');
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}
