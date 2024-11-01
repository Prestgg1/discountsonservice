import axios from "axios"
export async function getSubsName() {

  const res = await axios.get(`${process.env.NEXT_PUBLIC_CURRENT_URL}/api/subscriptions/get-subs`,{
    method: "GET",
  })
  return res.data
} 

export async function getSub(slug) {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_CURRENT_URL}/api/subscriptions/get-sub?slug=${slug}`);
    return res.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return null; 
    }
    throw error; 
  }
}

 export async function getSubs() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_CURRENT_URL}/api/subscriptions/get-subs`);
  return res.data;
} 
export const fetchDurations = async (subscription, type) => {
  const response = await fetch(`/api/subscriptions/durations?slug=${subscription}&type=${type}`);

  if (!response.ok) {
    throw new Error('Bilgi Alına Bilmedi.');
  }

  const data = await response.json();
  return data; 
};
