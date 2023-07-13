import { useState } from "react";
import { Box, Flex, HStack, Heading, Highlight, Image, Stack, Text } from "@chakra-ui/react";

export default function Carousel ({ slides }) {
  // console.log(slides)

    const arrowStyles = {
        cursor: "pointer",
        pos: "absolute",
        top: "50%",
        w: "auto",
        mt: "-170px",
        p: "16px",
        color: "brand.300",
        fontWeight: "bold",
        fontSize: "30px",
        transition: "0.6s ease",
        borderRadius: "0 3px 3px 0",
        userSelect: "none",
        _hover: {
          opacity: 0.8,
          bg: "black",
        },
      }
    
      const [currentSlide, setCurrentSlide] = useState(0);
    
      const slidesCount = slides.length;
    
      const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
      };
      const nextSlide = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
      };
      const setSlide = (slide) => {
        setCurrentSlide(slide);
      };
      const carouselStyle = {
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
      };
    
      return (
        <Flex
          // border='solid pink'
          w="auto"
          bg='brand.100' //"#edf3f8"
          _dark={{ bg: "#3e3e3e" }}
          p={2}
          alignItems="center"
          justifyContent="center"
        >
          <Flex 
            // border='solid green' 
            w="full" 
            pos="relative" 
            overflow="hidden"
          >
            <Flex 
                {...carouselStyle}
                boxSize={{ base: '100%' }}
            >
              {slides.map((slide, sid) => (
                <Box 
                  key={`slide-${sid}`}
                  // border='solid red' 
                  boxSize="full" 
                  shadow="md" 
                  flex="none" 
                >
                  <Text
                    color="white"
                    bg='black'
                    fontSize="xs"
                    p="5px"
                    pos="absolute"
                    top="0"
                  >
                    {sid + 1} / {slidesCount}
                  </Text>
                  {/* <a href={slide.link} target="_blank" rel="noreferrer"> */}
                  <Image
                    src={slide.img}
                    alt="carousel image"
                    boxSize="full"
                    p='10px'

                    objectFit='scale-down'
                    backgroundColor='brand.200'
                    height='400px'                    
                    // onClick={slide.click}
                  />
                  {/* </a> */}
                  <Stack
                    p="8px 12px"
                    pos="absolute"
                    bottom="40px"
                    textAlign="center"
                    w="full"
                    mb="0"
                    // color="white"
                  >
                    <a 
                      href={slide.link} 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      <Text fontSize='lg'>
                        <Highlight 
                          query={slide.label} 
                          styles={{bg: 'brand.300', color: 'brand.100', px: '1', py: '1',}}
                        >
                          {slide.label}
                        </Highlight>
                      </Text>
                    </a>
                    <Text 
                      fontSize="sm"
                    >
                      <Highlight 
                        query={slide.description} 
                        styles={{bg: 'brand.300', color: 'brand.100', px: '1', py: '1',}}
                        >
                        {slide.description}
                      </Highlight>
                    </Text>
                    <Text 
                      fontSize="sm"
                      textDecoration='Highlight'
                    >
                      <Highlight 
                        query={slide.position} 
                        styles={{bg: 'brand.300', color: 'brand.100', px: '1', py: '1',}}
                      >
                        {slide.position}
                      </Highlight>

                    </Text>

                  </Stack>
                </Box>
              ))}
            </Flex>

            <Text 
              {...arrowStyles} 
              left="0" 
              onClick={prevSlide}
            >
              &#10094; 
            </Text>
            <Text 
              {...arrowStyles} 
              right="0" 
              onClick={nextSlide}
            >
              &#10095;
            </Text>

            <HStack 
              justify="center" 
              pos="absolute" 
              bottom="8px" 
              w="full"
            >
              {Array.from({ length: slidesCount }).map((_, slide) => (
                <Box
                  key={`dots-${slide}`}
                  cursor="pointer"
                  boxSize={["7px", null, "15px"]}
                  m="0 2px"
                  bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
                  rounded="50%"
                  display="inline-block"
                  transition="background-color 0.6s ease"
                  _hover={{ bg: "blackAlpha.800" }}
                  onClick={() => setSlide(slide)}
                ></Box>
              ))}
            </HStack>
          </Flex>
        </Flex>
      );
    }