import Image from 'next/image';
import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';

export default function Home() {
  const getTodos = async () => {
    const response: AxiosResponse = await axios.get("http://localhost:3001/todos");
    return response.data;
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ul>

        </ul>
      </div>
    </main>
  )
}
