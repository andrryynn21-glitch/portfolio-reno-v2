import "./Button.css";

function Button({
  children,
  variant = "primary",
  type = "button",
  href,
  target,
  rel,
  download,
  onClick,
}) {
  const className = `btn btn-${variant}`;

  if (href) {
    return (
      <a
        href={href}
        className={className}
        target={target}
        rel={rel}
        download={download}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
