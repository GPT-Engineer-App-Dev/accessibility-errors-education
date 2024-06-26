import { useState } from "react";
import { Container, VStack, Text, Button, Box, Link, Input, Select, Image, Heading } from "@chakra-ui/react";
import { FaArrowRight, FaExclamationTriangle } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes, Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">
          Accessibility Errors Demo
        </Heading>
        <Text>Navigate through the pages to see different accessibility errors.</Text>
        <Button as={RouterLink} to="/page1" rightIcon={<FaArrowRight />}>
          Go to Page 1
        </Button>
      </VStack>
    </Container>
  );
};

const Page1 = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h2" size="xl">
          Page 1: Missing Alt Text
        </Heading>
        <Text>This image is missing alt text:</Text>
        <Image src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyYW5kb20lMjBpbWFnZXxlbnwwfHx8fDE3MTkzODY0MTl8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        <Button as={RouterLink} to="/page2" rightIcon={<FaArrowRight />}>
          Go to Page 2
        </Button>
      </VStack>
    </Container>
  );
};

const Page2 = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h2" size="xl">
          Page 2: Low Contrast Text
        </Heading>
        <Text color="gray.400">This text has low contrast and is hard to read.</Text>
        <Button as={RouterLink} to="/page3" rightIcon={<FaArrowRight />}>
          Go to Page 3
        </Button>
      </VStack>
    </Container>
  );
};

const Page3 = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h2" size="xl">
          Page 3: Missing Form Labels
        </Heading>
        <Text>This form input is missing a label:</Text>
        <Input placeholder="Enter your name" />
        <Button as={RouterLink} to="/page4" rightIcon={<FaArrowRight />}>
          Go to Page 4
        </Button>
      </VStack>
    </Container>
  );
};

const Page4 = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h2" size="xl">
          Page 4: Non-Descriptive Link Text
        </Heading>
        <Text>This link text is not descriptive:</Text>
        <Link href="#">Click here</Link>
        <Button as={RouterLink} to="/page5" rightIcon={<FaArrowRight />}>
          Go to Page 5
        </Button>
      </VStack>
    </Container>
  );
};

const Page5 = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h2" size="xl">
          Page 5: Missing Focus Indicator
        </Heading>
        <Text>This button has no focus indicator:</Text>
        <Button _focus={{ boxShadow: "none" }}>No Focus Indicator</Button>
        <Button as={RouterLink} to="/" rightIcon={<FaArrowRight />}>
          Go to Home
        </Button>
      </VStack>
    </Container>
  );
};

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
      </Routes>
    </Router>
  );
};

export default Index;
