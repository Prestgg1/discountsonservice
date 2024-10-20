import Link from 'next/link'
export default function Header() {
  return (
    <header>
<div className="navbar bg-base-100">
  <div className="navbar-start">
    
    <Link href="/admin" className="btn btn-ghost text-xl">DisCountOnServiceAdmin</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="px-1 flex gap-5 ">

      <Link href="/admin/dashboard" className="btn">Göstərgə Paneli</Link>
      <Link href="/admin/products" className="btn">Productlar</Link>
      <Link href="/admin/orders" className="btn">Sifarişlər</Link>
    </ul>
  </div>
  <div className="navbar-end">
    <Link href="/" className="btn">Sehifəyə Get</Link>
  </div>
</div>
    </header>
  )
}
