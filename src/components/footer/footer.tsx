export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white px-[16px] py-[32px] shadow-[rgba(17,12,46,0.12)_0px_48px_100px_0px]">
      <div className="text-center">
        <p className="font-poppins text-textSecondary">
          <span className="font-poppins-bold text-textPrimary">
            &copy; {currentYear}
          </span>{' '}
          Sangay Wangchuk. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
