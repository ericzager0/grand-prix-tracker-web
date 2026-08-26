export interface ServicesCardProps {
  service: {
    title: string;
    body: string;
    tag: string;
    icon: string;
  };
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function ServicesCard({ service, Icon }: ServicesCardProps) {
    return (
      <div className="group relative h-full overflow-hidden rounded-md border border-[#1C1D24] bg-[#131318] p-8 transition-colors hover:border-[#E10600]/50">
        <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[#E10600] transition-transform duration-500 group-hover:scale-x-100" />
        <Icon className="h-8 w-8 text-[#E10600]" />
        <h3
          className={"font-display" + " mt-5 text-xl font-700"}
        >
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[#93949F]">
          {service.body}
        </p>
        <span
          className={
            "font-mono" +
            " mt-5 inline-block text-[10px] tracking-[0.25em] text-[#7C4DFF]"
          }
        >
          {service.tag.toUpperCase()}
        </span>
      </div>
    );
}