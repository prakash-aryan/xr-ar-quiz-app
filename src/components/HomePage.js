import React from 'react';
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  Icon,
  Center,
  List,
  ListItem,
  Badge,
  Flex
} from '@chakra-ui/react';
import { BookOpen, Award, Target, TrendingUp, Users, Zap, Shield } from 'lucide-react';

const HomePage = () => {
  return (
    <Box minH="100vh" bgGradient="linear(to-br, blue.50, purple.100)" py={{ base: 8, md: 12 }} px={4}>
      <Container maxW="7xl">
        <VStack spacing={{ base: 12, md: 16 }}>
          {/* Hero Section */}
          <VStack spacing={8} textAlign="center" maxW="4xl">
            <Center>
              <Box
                bgGradient="linear(to-r, blue.500, purple.600)"
                p={{ base: 4, md: 6 }}
                borderRadius="full"
                boxShadow="lg"
              >
                <Icon as={BookOpen} color="white" boxSize={{ base: 10, md: 16 }} />
              </Box>
            </Center>
            
            <VStack spacing={6}>
              <Heading
                as="h1"
                size={{ base: "2xl", md: "4xl" }}
                color="gray.800"
                className="enhanced-heading"
              >
                Extended Reality Learning Platform
              </Heading>
              
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.600"
                maxW="3xl"
                lineHeight="relaxed"
                className="c-text"
              >
                Assessment platform for Extended Reality (XR), Augmented Reality (AR), 
                and Unity development. Master the fundamentals through interactive learning experiences.
              </Text>
              
              <HStack spacing={4} flexWrap="wrap" justify="center">
                <Badge colorScheme="blue" px={3} py={1} borderRadius="full" fontSize="sm">
                  Digital Horizon Workshop
                </Badge>
                <Badge colorScheme="purple" px={3} py={1} borderRadius="full" fontSize="sm">
                  Interactive Learning
                </Badge>
                <Badge colorScheme="green" px={3} py={1} borderRadius="full" fontSize="sm">
                  Industry Standards
                </Badge>
              </HStack>
            </VStack>
          </VStack>

          {/* Features Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            <Card className="enhanced-card" variant="elevated">
              <CardBody p={8}>
                <VStack spacing={6}>
                  <Center>
                    <Box bg="blue.100" borderRadius="full" p={4}>
                      <Icon as={Target} color="blue.600" boxSize={8} />
                    </Box>
                  </Center>
                  <Heading size="lg" color="gray.800" className="enhanced-heading">
                    Assessment
                  </Heading>
                  <Text color="gray.600" textAlign="center" className="enhanced-text">
                    Evaluate your understanding across XR fundamentals, AR development, 
                    and Unity implementation with carefully crafted questions.
                  </Text>
                </VStack>
              </CardBody>
            </Card>

            <Card className="enhanced-card" variant="elevated">
              <CardBody p={8}>
                <VStack spacing={6}>
                  <Center>
                    <Box bg="green.100" borderRadius="full" p={4}>
                      <Icon as={TrendingUp} color="green.600" boxSize={8} />
                    </Box>
                  </Center>
                  <Heading size="lg" color="gray.800" className="enhanced-heading">
                    Progressive Learning
                  </Heading>
                  <Text color="gray.600" textAlign="center" className="enhanced-text">
                    Build knowledge systematically from basic XR concepts to advanced 
                    Unity AR development techniques and best practices.
                  </Text>
                </VStack>
              </CardBody>
            </Card>

            <Card className="enhanced-card" variant="elevated">
              <CardBody p={8}>
                <VStack spacing={6}>
                  <Center>
                    <Box bg="purple.100" borderRadius="full" p={4}>
                      <Icon as={Award} color="purple.600" boxSize={8} />
                    </Box>
                  </Center>
                  <Heading size="lg" color="gray.800" className="enhanced-heading">
                    Instant Feedback
                  </Heading>
                  <Text color="gray.600" textAlign="center" className="enhanced-text">
                    Get immediate results with detailed explanations and performance 
                    analytics to identify strengths and areas for improvement.
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>

          {/* Learning Areas */}
          <Card className="enhanced-card" variant="elevated" w="full">
            <CardBody p={{ base: 6, md: 10 }}>
              <VStack spacing={8}>
                <Heading size="xl" textAlign="center" color="gray.800" className="enhanced-heading">
                  Learning Areas Covered
                </Heading>
                
                <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8} w="full">
                  <VStack spacing={4} align="stretch">
                    <Flex align="center" gap={3}>
                      <Box bg="blue.500" color="white" p={2} borderRadius="lg">
                        <Icon as={BookOpen} boxSize={5} />
                      </Box>
                      <Heading size="md" color="blue.600">XR Fundamentals</Heading>
                    </Flex>
                    <List spacing={2} color="gray.600" pl={12}>
                      <ListItem>• Extended Reality spectrum and definitions</ListItem>
                      <ListItem>• VR, AR, and MR distinctions and applications</ListItem>
                      <ListItem>• Industry use cases and implementations</ListItem>
                      <ListItem>• Technology platforms and ecosystems</ListItem>
                    </List>
                  </VStack>
                  
                  <VStack spacing={4} align="stretch">
                    <Flex align="center" gap={3}>
                      <Box bg="green.500" color="white" p={2} borderRadius="lg">
                        <Icon as={Zap} boxSize={5} />
                      </Box>
                      <Heading size="md" color="green.600">AR Development</Heading>
                    </Flex>
                    <List spacing={2} color="gray.600" pl={12}>
                      <ListItem>• AR system components and architecture</ListItem>
                      <ListItem>• SLAM technology and tracking methods</ListItem>
                      <ListItem>• Marker-based vs markerless AR approaches</ListItem>
                      <ListItem>• Platform capabilities and performance optimization</ListItem>
                    </List>
                  </VStack>
                  
                  <VStack spacing={4} align="stretch">
                    <Flex align="center" gap={3}>
                      <Box bg="purple.500" color="white" p={2} borderRadius="lg">
                        <Icon as={Shield} boxSize={5} />
                      </Box>
                      <Heading size="md" color="purple.600">Unity AR Foundation</Heading>
                    </Flex>
                    <List spacing={2} color="gray.600" pl={12}>
                      <ListItem>• Cross-platform AR development workflow</ListItem>
                      <ListItem>• AR Foundation architecture and components</ListItem>
                      <ListItem>• Session management and camera integration</ListItem>
                      <ListItem>• Plane detection and object placement patterns</ListItem>
                    </List>
                  </VStack>
                </SimpleGrid>
              </VStack>
            </CardBody>
          </Card>

          {/* Statistics */}
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} w="full">
            <Card className="enhanced-card" variant="elevated">
              <CardBody p={6} textAlign="center">
                <VStack spacing={2}>
                  <Text fontSize="3xl" fontWeight="bold" color="blue.600">30+</Text>
                  <Text color="gray.600" fontSize="sm">Assessment Questions</Text>
                </VStack>
              </CardBody>
            </Card>
            
            <Card className="enhanced-card" variant="elevated">
              <CardBody p={6} textAlign="center">
                <VStack spacing={2}>
                  <Text fontSize="3xl" fontWeight="bold" color="green.600">3</Text>
                  <Text color="gray.600" fontSize="sm">Learning Modules</Text>
                </VStack>
              </CardBody>
            </Card>
            
            <Card className="enhanced-card" variant="elevated">
              <CardBody p={6} textAlign="center">
                <VStack spacing={2}>
                  <Text fontSize="3xl" fontWeight="bold" color="purple.600">25+</Text>
                  <Text color="gray.600" fontSize="sm">Minutes Content</Text>
                </VStack>
              </CardBody>
            </Card>
            
            <Card className="enhanced-card" variant="elevated">
              <CardBody p={6} textAlign="center">
                <VStack spacing={2}>
                  <Text fontSize="3xl" fontWeight="bold" color="orange.600">∞</Text>
                  <Text color="gray.600" fontSize="sm">Retake Attempts</Text>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>

          {/* Workshop Information */}
          <Card 
            className="enhanced-card"
            variant="elevated" 
            w="full"
            bgGradient="linear(to-r, blue.500, purple.600)"
            color="white"
          >
            <CardBody p={{ base: 6, md: 10 }}>
              <VStack spacing={6} textAlign="center">
                <Heading size="lg">Workshop Presentation</Heading>
                <Text fontSize="lg" opacity={0.9} maxW="3xl">
                  This assessment platform is based on "Introduction to Extended Reality (XR) and 
                  Building AR Applications with Unity" - a workshop presentation covering modern XR 
                  development practices and industry-standard implementation techniques.
                </Text>
                <HStack spacing={6} flexWrap="wrap" justify="center">
                  <HStack>
                    <Icon as={Users} />
                    <Text>Digital Horizon Workshop</Text>
                  </HStack>
                  <HStack>
                    <Icon as={BookOpen} />
                    <Text>Prakash Aryan</Text>
                  </HStack>
                  <HStack>
                    <Icon as={Award} />
                    <Text>June 24, 2025</Text>
                  </HStack>
                </HStack>
              </VStack>
            </CardBody>
          </Card>
        </VStack>
      </Container>
    </Box>
  );
};

export default HomePage;