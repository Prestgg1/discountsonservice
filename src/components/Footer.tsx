const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-10 px-5">
      <div className="container mx-auto grid grid-cols-4 gap-8">
        <nav className="col-span-1">
          <div className="flex items-center gap-2 text-xl">
            <img src="./images/logo1.png" alt="Logo" className="w-12 h-12" />
            <div className="font-bold text-lg">DiscountsOnServices</div>
          </div>
          <p className="text-sm mt-2">It's simple, fast and economical</p>
        </nav>

        <nav className="col-span-1">
          <h6 className="font-bold mb-2">Subscriptions</h6>
          <ul>
            <li><a href="#" className="link link-hover">Netflix</a></li>
            <li><a href="#" className="link link-hover">YouTube Premium</a></li>
            <li><a href="#" className="link link-hover">Spotify</a></li>
          </ul>
        </nav>

        <nav className="col-span-1">
          <h6 className="font-bold mb-2">Site navigation</h6>
          <ul>
            <li><a href="#" className="link link-hover">About</a></li>
            <li><a href="#" className="link link-hover">FAQ</a></li>
            <li><a href="#" className="link link-hover">Support</a></li>
          </ul>
        </nav>

        <nav className="col-span-1 flex flex-col items-end">
          <div className="flex gap-4">
            <a href="#">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M12.002 2c-5.522 0-10 4.478-10 10 0 1.678.422 3.347 1.228 4.826l-1.256 4.196 4.285-1.256c1.445.755 2.897 1.153 4.443 1.153 5.522 0 10-4.478 10-10 0-5.522-4.478-10-10-10zm-.009 17.94c-1.42 0-2.809-.386-4.01-1.09l-2.891.851.837-2.858c-.737-1.206-1.131-2.608-1.131-4.03 0-4.414 3.589-8.003 8.003-8.003 4.414 0 8.003 3.589 8.003 8.003 0 4.414-3.589 8.003-8.003 8.003zm4.605-5.993c-.198-.099-1.171-.579-1.352-.646-.179-.066-.308-.099-.437.099-.128.197-.502.646-.616.777-.113.128-.227.148-.426.05-.198-.099-.837-.309-1.595-.984-.59-.528-.988-1.178-1.104-1.376-.116-.198-.012-.305.088-.404.091-.09.198-.228.297-.342.099-.115.132-.197.198-.329.066-.131.033-.246-.016-.342-.049-.099-.437-1.051-.597-1.434-.158-.379-.317-.329-.437-.336-.116-.007-.247-.008-.378-.008-.131 0-.343.049-.523.246-.179.197-.684.67-.684 1.634s.7 1.895.797 2.027c.099.131 1.376 2.106 3.336 2.952.466.201.828.32 1.11.41.466.148.891.128 1.227.078.374-.058 1.171-.479 1.336-.94.164-.461.164-.856.115-.94-.049-.082-.179-.131-.376-.23z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M22.446 2.6l-20.971 8.724c-1.461.609-1.456 1.459-.267 1.846l5.383 1.682 2.053 6.463c.272.847.64 1.046 1.299.846l3.187-2.599 4.94 3.629c.907.513 1.57.247 1.794-.841l3.262-15.558c.343-1.644-.62-2.365-1.68-1.905zm-3.904 4.874l-10.93 9.927-.439 5.027c-.073.844-.441.859-.84.191l-3.184-5.176-3.256-1.015c-.862-.246-.871-.868-.154-1.208l18.706-7.686c.773-.322 1.169.133.565.939z"></path>
              </svg>
            </a>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="#">EN</a>
          </div>
        </nav>
      </div>

      <div className="container mx-auto mt-8 pt-4">
        <div className="flex justify-between text-sm">
          <a href="#" className="link link-hover">Privacy Policy</a>
          <p>Copyright 2024 © All Rights Reserved.</p>
          <p>Developed by ...</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
