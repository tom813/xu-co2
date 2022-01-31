import { Box } from "@chakra-ui/react";

function DataExample({ Code }) {
  return (
    <Box
      bg="rgb(1, 22, 39)"
      color="white"
      p="1.25rem"
      borderRadius="10px"
      w="full"
    >
      {Object.entries(Code).map(([key, value]) => {
        return (
          <Box mb="5px" key={key}>
            {key}: {value}
          </Box>
        );
      })}
    </Box>
  );
}

export default DataExample;
