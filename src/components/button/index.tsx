interface Props {
  children: string;
  variant?: "primary" | "secondary";
  hasIcon?: boolean;
  icon?: string;
  size?: "small" | "medium" | "large";
}

export function Button({
  children,
  variant = "primary",
  hasIcon = false,
  icon,
  size,
}: Props) {
  const getVariantClass = () => {
    switch (variant) {
      case "primary":
        return "btn-gradient-primary";
      case "secondary":
        return "btn-gradient-secondary hover:btn-gradient-primary";
      default:
        return "";
    }
  };

  const getBtnSize = () => {
    switch (size) {
      case "small":
        return "p-[8px_20px]";
      case "medium":
        return "p-[12px_27px]";
      case "large":
        return "p-[18px_40px]";
      default:
        return "p-[8px_20px]";
    }
  };

  return (
    <button
      className={`rounded-[37px] border-2 font-bold text-white justify-center flex gap-3 cursor-pointer ${getVariantClass()} ${getBtnSize()}`}
    >
      {hasIcon && <img src={icon} alt="Icon" className="h-[24px] w-[24px]" />}
      <span>{children}</span>
    </button>
  );
}
