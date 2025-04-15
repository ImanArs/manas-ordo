export const Footer = () => {
  return (
    <footer
      id="contacts"
      className="relative z-[10] bg-[#282828] flex flex-col gap-10 md:gap-0 md:grid grid-cols-4 p-2.5 items-center justify-center text-center text-white"
    >
      <img src="/images/logo.png" className="w-[45px] h-[45px]" alt="" />
      <div>
        partners
        <div></div>
      </div>
      <div>
        <h3>phone</h3>
        <ul>
          <li>0700-655-901</li>
          <li>0772-655-901</li>
          <li>0552-655-901</li>
          <li>0771-550-560</li>
          <li>0700-550-560</li>
        </ul>
      </div>
      <div>
        <h3>social media</h3>
        <a href="https://fb.watch/hqEA2vbFzB/?mibextid=RUbZ1f">facebook</a>
      </div>
    </footer>
  );
};
