import React from 'react';
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Heading,
  Button,
  Card,
  CardBody,
  Icon,
  SimpleGrid,
  List,
  ListItem,
  Center,
  useBreakpointValue,
  Badge,
  Flex,
  Divider
} from '@chakra-ui/react';
import { CheckCircle, XCircle, RotateCcw, Home, Award, TrendingUp, Target, Star, BookOpen } from 'lucide-react';

const ResultsPage = ({ 
  currentQuiz, 
  answers, 
  calculateScore, 
  onRetakeQuiz, 
  onBackToHome 
}) => {
  const score = calculateScore();
  const total = currentQuiz.questions.length;
  const percentage = Math.round((score / total) * 100);
  
  // Responsive values
  const cardPadding = useBreakpointValue({ base: 4, md: 6, lg: 8 });
  const scoreSize = useBreakpointValue({ base: '4xl', md: '5xl', lg: '6xl' });
  const titleSize = useBreakpointValue({ base: 'xl', md: '2xl', lg: '3xl' });
  const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' });

  const getScoreColor = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return 'green.600';
    if (percentage >= 60) return 'yellow.600';
    return 'red.600';
  };

  const getScoreColorScheme = () => {
    if (percentage >= 80) return 'green';
    if (percentage >= 60) return 'yellow';
    return 'red';
  };

  const getScoreMessage = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage >= 90) return 'Outstanding! You have mastered these concepts. 🎉';
    if (percentage >= 80) return 'Excellent! You have a strong understanding of the material. 👏';
    if (percentage >= 70) return 'Good job! You understand most concepts well. 👍';
    if (percentage >= 60) return 'Not bad! Consider reviewing some topics to strengthen your knowledge. 📚';
    return 'Keep learning! Review the material and try again to improve your understanding. 💪';
  };

  const getScoreIcon = () => {
    if (percentage >= 80) return Award;
    if (percentage >= 60) return Target;
    return TrendingUp;
  };

  const getGradientColors = () => {
    if (percentage >= 80) return ['green.400', 'green.600'];
    if (percentage >= 60) return ['yellow.400', 'yellow.600'];
    return ['red.400', 'red.600'];
  };

  const getQuizColorScheme = () => {
    if (currentQuiz.color === 'bg-blue-500') return 'blue';
    if (currentQuiz.color === 'bg-green-500') return 'green';
    return 'purple';
  };

  const getPerformanceLevel = () => {
    if (percentage >= 90) return { level: 'Expert', icon: '🏆', color: 'gold' };
    if (percentage >= 80) return { level: 'Advanced', icon: '⭐', color: 'green.500' };
    if (percentage >= 70) return { level: 'Proficient', icon: '👍', color: 'blue.500' };
    if (percentage >= 60) return { level: 'Developing', icon: '📈', color: 'yellow.500' };
    return { level: 'Novice', icon: '📚', color: 'red.500' };
  };

  const performanceLevel = getPerformanceLevel();

  return (
    <Box minH="100vh" bgGradient="linear(to-br, blue.50, purple.100)" py={8} px={4}>
      <Container maxW="6xl">
        <VStack spacing={8}>
          {/* Results Header */}
          <Card className="enhanced-card" shadow="xl" w="full">
            <CardBody p={cardPadding} textAlign="center">
              <VStack spacing={8}>
                <Center>
                  <Icon 
                    as={getScoreIcon()} 
                    boxSize={{ base: 16, md: 20 }}
                    color={getScoreColor(score, total)}
                    className="score-reveal"
                  />
                </Center>

                <VStack spacing={4}>
                  <Heading size={titleSize} color="gray.800" className="enhanced-heading">
                    Quiz Completed! 🎯
                  </Heading>
                  
                  <Badge 
                    colorScheme={getScoreColorScheme()} 
                    px={4} 
                    py={2} 
                    borderRadius="full" 
                    fontSize="lg"
                  >
                    {performanceLevel.level} Level {performanceLevel.icon}
                  </Badge>
                </VStack>
                
                <VStack spacing={6}>
                  <HStack spacing={8} flexWrap="wrap" justify="center">
                    <VStack spacing={2}>
                      <Text fontSize={scoreSize} fontWeight="900" color={getScoreColor(score, total)}>
                        {score}
                      </Text>
                      <Text fontSize="lg" color="gray.600">Correct</Text>
                    </VStack>
                    
                    <Center height="80px">
                      <Divider orientation="vertical" />
                    </Center>
                    
                    <VStack spacing={2}>
                      <Text fontSize={scoreSize} fontWeight="900" color="gray.400">
                        {total}
                      </Text>
                      <Text fontSize="lg" color="gray.600">Total</Text>
                    </VStack>
                  </HStack>
                  
                  <Box
                    px={8}
                    py={4}
                    borderRadius="full"
                    color="white"
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="bold"
                    bgGradient={`linear(to-r, ${getGradientColors()[0]}, ${getGradientColors()[1]})`}
                    boxShadow="lg"
                    className="score-reveal"
                  >
                    {percentage}%
                  </Box>
                </VStack>

                <Text 
                  fontSize={{ base: "lg", md: "xl" }} 
                  color="gray.600" 
                  maxW="3xl" 
                  lineHeight="relaxed"
                  className="enhanced-text"
                >
                  {getScoreMessage(score, total)}
                </Text>

                <HStack spacing={4} flexDirection={{ base: 'column', sm: 'row' }}>
                  <Button
                    onClick={onRetakeQuiz}
                    colorScheme={getQuizColorScheme()}
                    size={buttonSize}
                    leftIcon={<Icon as={RotateCcw} />}
                    className="enhanced-button"
                    minW={{ base: "full", sm: "auto" }}
                  >
                    Retake Quiz
                  </Button>
                  
                  <Button
                    onClick={onBackToHome}
                    variant="outline"
                    size={buttonSize}
                    leftIcon={<Icon as={Home} />}
                    className="enhanced-button"
                    minW={{ base: "full", sm: "auto" }}
                  >
                    Back to Home
                  </Button>
                </HStack>
              </VStack>
            </CardBody>
          </Card>

          {/* Enhanced Performance Breakdown */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
            <Card className="enhanced-card" shadow="lg">
              <CardBody p={cardPadding}>
                <VStack spacing={6}>
                  <Heading size="lg" color="gray.800" className="enhanced-heading">
                    Performance Breakdown
                  </Heading>
                  <SimpleGrid columns={2} spacing={6} w="full">
                    <VStack spacing={3}>
                      <Box
                        w={16}
                        h={16}
                        borderRadius="full"
                        bg="green.100"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Icon as={CheckCircle} color="green.600" boxSize={8} />
                      </Box>
                      <Text fontSize="3xl" fontWeight="bold" color="green.600">{score}</Text>
                      <Text fontSize="sm" color="gray.600" textAlign="center">Correct Answers</Text>
                    </VStack>
                    
                    <VStack spacing={3}>
                      <Box
                        w={16}
                        h={16}
                        borderRadius="full"
                        bg="red.100"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Icon as={XCircle} color="red.600" boxSize={8} />
                      </Box>
                      <Text fontSize="3xl" fontWeight="bold" color="red.600">{total - score}</Text>
                      <Text fontSize="sm" color="gray.600" textAlign="center">Incorrect Answers</Text>
                    </VStack>
                  </SimpleGrid>
                </VStack>
              </CardBody>
            </Card>

            <Card className="enhanced-card" shadow="lg">
              <CardBody p={cardPadding}>
                <VStack spacing={6}>
                  <Heading size="lg" color="gray.800" className="enhanced-heading">
                    Quiz Statistics
                  </Heading>
                  <VStack spacing={4} w="full">
                    <Flex justify="space-between" w="full">
                      <Text color="gray.600">Accuracy Rate:</Text>
                      <Text fontWeight="bold" color={getScoreColor(score, total)}>
                        {percentage}%
                      </Text>
                    </Flex>
                    <Flex justify="space-between" w="full">
                      <Text color="gray.600">Questions Attempted:</Text>
                      <Text fontWeight="bold" color="blue.600">{answers.length}</Text>
                    </Flex>
                    <Flex justify="space-between" w="full">
                      <Text color="gray.600">Performance Level:</Text>
                      <Badge colorScheme={getScoreColorScheme()} px={2} py={1}>
                        {performanceLevel.level}
                      </Badge>
                    </Flex>
                    <Flex justify="space-between" w="full">
                      <Text color="gray.600">Subject Area:</Text>
                      <Text fontWeight="bold" color="purple.600">{currentQuiz.title}</Text>
                    </Flex>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>

          {/* Answer Review */}
          <Card className="enhanced-card" shadow="lg" w="full">
            <CardBody p={cardPadding}>
              <VStack spacing={6} align="stretch">
                <Heading size="lg" color="gray.800" className="enhanced-heading">
                  Detailed Answer Review
                </Heading>
                
                <Box 
                  maxH={{ base: "400px", md: "500px" }} 
                  overflowY="auto" 
                  pr={2}
                  css={{
                    '&::-webkit-scrollbar': {
                      width: '6px',
                    },
                    '&::-webkit-scrollbar-track': {
                      background: '#f1f1f1',
                      borderRadius: '3px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      background: '#cbd5e1',
                      borderRadius: '3px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                      background: '#94a3b8',
                    },
                  }}
                >
                  <VStack spacing={6} align="stretch">
                    {currentQuiz.questions.map((q, index) => {
                      const isCorrect = answers[index] === q.correct;
                      return (
                        <Card 
                          key={index} 
                          variant="outline" 
                          borderColor={isCorrect ? 'green.200' : 'red.200'}
                          bg={isCorrect ? 'green.50' : 'red.50'}
                        >
                          <CardBody p={4}>
                            <HStack align="flex-start" spacing={4}>
                              <Box flexShrink={0}>
                                <Icon 
                                  as={isCorrect ? CheckCircle : XCircle}
                                  boxSize={6}
                                  color={isCorrect ? 'green.500' : 'red.500'}
                                />
                              </Box>
                              <VStack align="stretch" spacing={3} flex={1}>
                                <Text fontWeight="medium" color="gray.800" className="enhanced-text">
                                  <Badge colorScheme="gray" mr={2} fontSize="xs">
                                    Q{index + 1}
                                  </Badge>
                                  {q.question}
                                </Text>
                                
                                {isCorrect ? (
                                  <HStack spacing={2}>
                                    <Icon as={CheckCircle} color="green.500" boxSize={4} />
                                    <Text color="green.700" fontSize="sm" fontWeight="medium">
                                      Correct: {q.options[q.correct]}
                                    </Text>
                                  </HStack>
                                ) : (
                                  <VStack align="stretch" spacing={2} fontSize="sm">
                                    <HStack spacing={2}>
                                      <Icon as={XCircle} color="red.500" boxSize={4} />
                                      <Text color="red.700" fontWeight="medium">
                                        Your answer: {answers[index] !== undefined ? q.options[answers[index]] : 'No answer selected'}
                                      </Text>
                                    </HStack>
                                    <HStack spacing={2}>
                                      <Icon as={CheckCircle} color="green.500" boxSize={4} />
                                      <Text color="green.700" fontWeight="medium">
                                        Correct answer: {q.options[q.correct]}
                                      </Text>
                                    </HStack>
                                  </VStack>
                                )}
                              </VStack>
                            </HStack>
                          </CardBody>
                        </Card>
                      );
                    })}
                  </VStack>
                </Box>
              </VStack>
            </CardBody>
          </Card>

          {/* Recommendations */}
          <Card 
            className="enhanced-card"
            shadow="lg" 
            w="full"
            bgGradient="linear(to-r, blue.500, purple.600)"
            color="white"
          >
            <CardBody p={cardPadding}>
              <VStack spacing={6} align="stretch">
                <Center>
                  <HStack spacing={3}>
                    <Icon as={BookOpen} boxSize={6} />
                    <Heading size="lg">Continue Your Learning Journey</Heading>
                  </HStack>
                </Center>
                
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} fontSize="sm">
                  <VStack align="stretch" spacing={3}>
                    <Heading size="md" mb={2}>📚 Study Recommendations:</Heading>
                    <List spacing={2} opacity={0.9}>
                      <ListItem>• Review Unity's AR Foundation documentation</ListItem>
                      <ListItem>• Practice with hands-on AR development tutorials</ListItem>
                      <ListItem>• Explore industry XR case studies and applications</ListItem>
                      <ListItem>• Join XR developer communities and forums</ListItem>
                    </List>
                  </VStack>
                  
                  <VStack align="stretch" spacing={3}>
                    <Heading size="md" mb={2}>🎯 Next Steps:</Heading>
                    <List spacing={2} opacity={0.9}>
                      <ListItem>• Retake quizzes to improve your understanding</ListItem>
                      <ListItem>• Focus on areas where you scored lower</ListItem>
                      <ListItem>• Apply concepts in practical development projects</ListItem>
                      <ListItem>• Track your progress over multiple attempts</ListItem>
                    </List>
                  </VStack>
                </SimpleGrid>
                
                <Center>
                  <HStack spacing={6} flexWrap="wrap" justify="center" opacity={0.8}>
                    <HStack>
                      <Icon as={Star} />
                      <Text fontSize="sm">University of Bern</Text>
                    </HStack>
                    <HStack>
                      <Icon as={BookOpen} />
                      <Text fontSize="sm">XR Development Course</Text>
                    </HStack>
                    <HStack>
                      <Icon as={Award} />
                      <Text fontSize="sm">Academic Excellence</Text>
                    </HStack>
                  </HStack>
                </Center>
              </VStack>
            </CardBody>
          </Card>
        </VStack>
      </Container>
    </Box>
  );
};

export default ResultsPage;