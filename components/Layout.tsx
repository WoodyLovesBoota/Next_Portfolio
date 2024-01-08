const Layout = ({ children }: Ititle) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default Layout;

interface Ititle {
  children: React.ReactNode;
}
