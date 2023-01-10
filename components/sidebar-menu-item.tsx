import { SVGProps } from "react";

interface Props {
  text: string;
  Icon: (
    props: SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    }
  ) => JSX.Element;
  active?: boolean;
}

const SidebarMenuItem: React.FC<Props> = ({ text, Icon, active }) => {
  return (
    <div className="hoverEffect flex items-center justify-center text-gray-700 xl:justify-start text-lg space-x-3">
      <Icon className="h-7" />
      <span className={`${active && "font-bold"} hidden xl:inline`}>
        {text}
      </span>
    </div>
  );
};

export default SidebarMenuItem;
