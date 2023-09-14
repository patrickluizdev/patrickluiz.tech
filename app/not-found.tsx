"use client"; // Marque este componente como um "Client Component"

export default function NotFound() {
  try {
    window.location.href = 'http://patrickluiz.tech/';
  } catch (error) {
    console.error(error);
  }

  return null;
}
