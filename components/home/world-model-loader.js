import { forwardRef } from "react";
import { Box, Spinner, useBreakpointValue } from "@chakra-ui/react";

const WorldModelSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
  // <LoadingAnimation />
);

const WorldModelContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="world"
    w="100vw"
    h="100vh"
    position="absolute"
    borderRadius="30px"
    // border="1px #000 solid"
    zIndex={1}
    top={0}
    left={0}
    right={0}
    cursor="grab"
    onMouseDown={(e) => (e.target.style.cursor = "grabbing")}
    onMouseUp={(e) => (e.target.style.cursor = "grab")}
  >
    <canvas id="world-model-canvas" style={{ borderRadius: "30px" }}></canvas>
    {children}
  </Box>
));

const WorldLoader = () => {
  return (
    <WorldModelContainer>
      <WorldModelSpinner />
    </WorldModelContainer>
  );
};

WorldModelSpinner.displayName = "WorldModelSpinner";
WorldLoader.displayName = "WorldModelLoader";
WorldModelContainer.displayName = "WorldModelContainer";

export { WorldModelSpinner, WorldModelContainer };
export default WorldLoader;
