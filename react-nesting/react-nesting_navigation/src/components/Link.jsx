export default Link;

const Link = ({ href, children }) => {
  return (
    <a className="navigation__link" href={href}>
      {children}
    </a>
  );
};
