import LoginButton from "../components/ui/buttons/login-button";
import Logo from "../components/ui/logo";
import StaticMenu from "../components/ui/menu/static-menu";

const Header = () => {
  return (
    <header
      // id="site-header"
      className={"top-0 z-50 w-full transition-all lg:h-22 sticky lg:fixed"}
    >
      <div
        className={
          "fixed z-50 flex w-full items-center justify-between border-b border-border-200 bg-light px-5 py-3 shadow-sm transition-transform duration-300 lg:h-22 lg:py-5 lg:px-6 xl:px-8"
        }
      >
        <div className="flex shrink-0 grow-0 basis-auto flex-wrap items-center ltr:mr-auto rtl:ml-auto lg:w-auto lg:flex-nowrap">
          <Logo className={"py-3 ml-0"} />

          <div className="hidden shrink-0 items-center space-x-7 ml-10 mr-auto lg:flex 2xl:space-x-10">
            <ul className="hidden shrink-0 items-center space-x-7 xl:flex 2xl:space-x-10">
              <StaticMenu />
            </ul>
          </div>
        </div>
        {/* initially hidden */}
        {/* <NavbarSearch /> */}

        <div className="flex shrink-0 items-center space-x-7  2xl:space-x-10">
          <div className="hidden lg:flex items-center space-x-4">
            {/* Button Component */}
            {/* <SearchIconButton />

            <CartCounterIconButton />

            <WishlistButton />*/}
            <LoginButton />
            <div className=" lg:inline-flex">
              {/* {isAuthorize ? <AuthorizedMenu /> : <JoinButton />} */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
