import { Container, Text, VStack, Heading, Box, Button, IconButton, Image, HStack } from "@chakra-ui/react";
import { FaBrain, FaChalkboardTeacher, FaBook, FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl" color="teal.500">
          Learn Neural Networks
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Master the art of building and training neural networks with our comprehensive online course.
        </Text>
        <Box boxSize="sm">
          <Image src="https://images.unsplash.com/photo-1639322537231-2f206e06af84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwY29uY2VwdHxlbnwwfHx8fDE3MTc2NzkyMzR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Neural Network Concept" borderRadius="md" />
        </Box>
        <HStack spacing={4}>
          <Button leftIcon={<FaBrain />} colorScheme="teal" variant="solid">
            Start Learning
          </Button>
          <Button leftIcon={<FaChalkboardTeacher />} colorScheme="teal" variant="outline">
            Meet the Instructors
          </Button>
        </HStack>
        <VStack spacing={4} alignItems="flex-start">
          <HStack>
            <IconButton aria-label="Course Content" icon={<FaBook />} size="lg" colorScheme="teal" />
            <Text fontSize="md" color="gray.700">
              Comprehensive Course Content
            </Text>
          </HStack>
          <HStack>
            <IconButton aria-label="Interactive Lessons" icon={<FaChalkboardTeacher />} size="lg" colorScheme="teal" />
            <Text fontSize="md" color="gray.700">
              Interactive Lessons and Quizzes
            </Text>
          </HStack>
          <HStack>
            <IconButton aria-label="Project-Based Learning" icon={<FaRocket />} size="lg" colorScheme="teal" />
            <Text fontSize="md" color="gray.700">
              Project-Based Learning
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
