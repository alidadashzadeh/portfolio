import { ScrollArea } from "@/components/ui/scroll-area";

export default function Experience({ experience }) {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{experience.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {experience.description}
      </p>

      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
          {experience.items.map((item, i) => {
            return (
              <li
                key={i}
                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
              >
                <span className="text-accent">{item.duration}</span>
                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center xl:text-left">
                  {item.position}
                </h3>

                <div className="flex items-center gap-3">
                  <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                  <p className="text-white/60">{item.company}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
}
