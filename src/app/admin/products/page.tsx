"use client"
import useSWR from 'swr'
import Button from "@/components/Button";
import Image from 'next/image';

export default function Products() {
 /*  function deleteProduct(id: number) {
    const { error:DeleteError, isLoading:DeleteLoading } = useSWR('/api/subscriptions/get-subs', (url)=>{
      return fetch(url, { method: 'DELETE', body: JSON.stringify({ id }) }).then(res => res.json())
    })
  } */
  const { data, error, isLoading } = useSWR('/api/subscriptions/get-subs', (url)=>{
    return fetch(url, { method: 'GET' }).then(res => res.json())
  })
  if(isLoading) return <div className='h-[80vh] w-full flex justify-center items-center'> <span className=" loading loading-bars loading-lg"></span></div>

  if(error) return <div className='text-red-500 text-center w-full h-screen'>Serverdə Problem Var</div>
  return (
    <div className="overflow-x-auto h-[80vh]  flex justify-center items-center">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Şəkil</th>
            <th>Adı</th>
            <th>Rəng</th>
            <th>Qiymət</th>
            <th>Əməlliyat</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {data?.map((sub: any) => (
            <tr key={sub.id}>
              <td><input type="checkbox" className='checkbox' name="" id="" /></td>
              <td><Image width={50} height={50} className='w-20' src={sub.image} alt="" /> </td>
              <td>{sub.name}</td>
              <td></td>
              <td>{sub.description.en}</td>
              <td className='flex gap-2'><Button className='btn btn-info text-white'>Dəyiştir</Button>
              <Button onClick={() => console.log("delete")} className='btn btn-error text-white'>Sil</Button>
              </td>
            </tr>
            

          ))}
          {/* row 2 */}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
