import { Box } from "@mui/material";
import Tags from "./Tags";
type Props = {
  bottomInfo: {
    lanuages: string[];
    tools: string[];
    role: string;
    level: string;
  };
};
const Bottom = ({ bottomInfo }: Props) => {
  return (
    <Box className="h-full flex flex-wrap lg:flex-nowrap lg:items-center gap-4 -top-10 lg:top-0 relative">
      <Tags label={bottomInfo.role} />
      <Tags label={bottomInfo.level} />
      {bottomInfo.lanuages.map((lan) => {
        return <Tags key={lan} label={lan} />;
      })}
      {bottomInfo.tools.map((tool) => (
        <Tags key={tool} label={tool} />
      ))}
    </Box>
  );
};

export default Bottom;
