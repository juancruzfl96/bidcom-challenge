export async function getImage() {
  const response = await fetch('https://mock.staging.bidcom.com.ar/api/challenge/images');
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}
