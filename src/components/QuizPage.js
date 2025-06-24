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
  Progress,
  Badge,
  IconButton,
  Flex,
  useBreakpointValue
} from '@chakra-ui/react';
import { Clock, Home, ArrowRight, AlertCircle } from 'lucide-react';

const QuizPage = ({ 
  currentQuiz, 
  currentQuestion, 
  timeLeft, 
  formatTime, 
  selectedAnswer, 
  onAnswerSelect, 
  onNextQuestion, 
  onBackToHome 
}) => {
  const currentQ = currentQuiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / currentQuiz.questions.length) * 100;
  const isLastQuestion = currentQuestion === currentQuiz.questions.length - 1;
  
  // Responsive values
  const cardPadding = useBreakpointValue({ base: 4, md: 6, lg: 8 });
  const questionSize = useBreakpointValue({ base: 'lg', md: 'xl', lg: '2xl' });
  const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' });
  const numberSize = useBreakpointValue({ base: '2xl', md: '3xl' });

  const getTimeColor = () => {
    const percentage = (timeLeft / currentQuiz.duration) * 100;
    if (percentage > 50) return 'green.600';
    if (percentage > 20) return 'yellow.600';
    return 'red.600';
  };

  const getQuizColorScheme = () => {
    if (currentQuiz.color === 'bg-blue-500') return 'blue';
    if (currentQuiz.color === 'bg-green-500') return 'green';
    return 'purple';
  };

  const getTimeColorScheme = () => {
    const percentage = (timeLeft / currentQuiz.duration) * 100;
    if (percentage > 50) return 'green';
    if (percentage > 20) return 'yellow';
    return 'red';
  };

  return (
    <Box minH="100vh" bgGradient="linear(to-br, blue.50, purple.100)" py={4} px={4}>
      <Container maxW="5xl">
        <VStack spacing={6}>
          {/* Header */}
          <Card className="enhanced-card" variant="elevated" w="full">
            <CardBody p={cardPadding}>
              <VStack spacing={4}>
                {/* Top row - Title, Timer, and Navigation */}
                <Flex 
                  direction={{ base: 'column', lg: 'row' }}
                  justify="space-between"
                  align="center"
                  w="full"
                  gap={4}
                >
                  <HStack spacing={4} flex={1}>
                    <IconButton
                      onClick={onBackToHome}
                      icon={<Icon as={Home} />}
                      variant="ghost"
                      colorScheme="gray"
                      title="Back to Home"
                      size={buttonSize}
                    />
                    <Heading 
                      size={questionSize} 
                      color="gray.800"
                      className="enhanced-heading"
                      noOfLines={1}
                    >
                      {currentQuiz.title}
                    </Heading>
                  </HStack>
                  
                  <HStack spacing={4} flexShrink={0}>
                    <HStack 
                      color={getTimeColor()} 
                      fontSize={{ base: "xl", md: "2xl" }} 
                      fontFamily="mono"
                      fontWeight="bold"
                    >
                      <Icon as={Clock} />
                      <Text>{formatTime(timeLeft)}</Text>
                    </HStack>
                    <Badge 
                      colorScheme={getQuizColorScheme()} 
                      fontSize={{ base: "sm", md: "md" }}
                      px={3}
                      py={1}
                      borderRadius="full"
                    >
                      {currentQuestion + 1} of {currentQuiz.questions.length}
                    </Badge>
                  </HStack>
                </Flex>
                
                {/* Progress Bar */}
                <VStack w="full" spacing={2}>
                  <Progress 
                    value={progress} 
                    w="full" 
                    colorScheme={getQuizColorScheme()}
                    size="lg"
                    borderRadius="md"
                    className="enhanced-progress"
                  />
                  <Text fontSize="sm" color="gray.600">
                    Progress: {Math.round(progress)}% completed
                  </Text>
                </VStack>
              </VStack>
            </CardBody>
          </Card>

          {/* Question Card */}
          <Card className="enhanced-card" variant="elevated" w="full">
            <CardBody p={cardPadding}>
              <VStack spacing={8} align="stretch">
                {/* Question with Enhanced Number */}
                <HStack align="flex-start" spacing={6}>
                  <Box
                    className="question-number-large"
                    bg={`${getQuizColorScheme()}.500`}
                    color="white"
                    fontSize={numberSize}
                    fontWeight="900"
                    minW={{ base: "70px", md: "80px" }}
                    h={{ base: "70px", md: "80px" }}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    boxShadow="lg"
                    position="relative"
                  >
                    {currentQuestion + 1}
                    <Box
                      position="absolute"
                      top="-2px"
                      right="-2px"
                      w="6"
                      h="6"
                      bg="white"
                      color={`${getQuizColorScheme()}.500`}
                      borderRadius="full"
                      fontSize="xs"
                      fontWeight="bold"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      Q
                    </Box>
                  </Box>
                  
                  <VStack align="stretch" flex={1} spacing={3}>
                    <Heading 
                      size={{ base: "md", md: "lg", lg: "xl" }}
                      color="gray.800"
                      lineHeight="1.4"
                      className="enhanced-heading"
                    >
                      {currentQ.question}
                    </Heading>
                    <Text fontSize="sm" color="gray.500">
                      Select the best answer from the options below
                    </Text>
                  </VStack>
                </HStack>

                {/* Answer Options */}
                <VStack spacing={4} align="stretch">
                  {currentQ.options.map((option, index) => (
                    <Button
                      key={index}
                      onClick={() => onAnswerSelect(index)}
                      variant={selectedAnswer === index ? "solid" : "outline"}
                      colorScheme={selectedAnswer === index ? getQuizColorScheme() : "gray"}
                      size={buttonSize}
                      h="auto"
                      p={{ base: 4, md: 6 }}
                      textAlign="left"
                      justifyContent="flex-start"
                      whiteSpace="normal"
                      className="enhanced-button"
                      _hover={{
                        transform: selectedAnswer !== index ? 'translateX(4px)' : 'none',
                        borderColor: `${getQuizColorScheme()}.300`
                      }}
                      border="2px solid"
                      borderColor={selectedAnswer === index ? "transparent" : "gray.200"}
                    >
                      <HStack align="flex-start" spacing={4} w="full">
                        <Box
                          borderRadius="full"
                          border="3px solid"
                          borderColor={selectedAnswer === index ? "transparent" : "gray.400"}
                          bg={selectedAnswer === index ? "white" : "transparent"}
                          color={selectedAnswer === index ? `${getQuizColorScheme()}.500` : "gray.500"}
                          w={{ base: 10, md: 12 }}
                          h={{ base: 10, md: 12 }}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          fontSize={{ base: "lg", md: "xl" }}
                          fontWeight="bold"
                          flexShrink={0}
                        >
                          {String.fromCharCode(65 + index)}
                        </Box>
                        <Text 
                          fontSize={{ base: "md", md: "lg" }} 
                          lineHeight="1.5"
                          textAlign="left"
                          className="enhanced-text"
                        >
                          {option}
                        </Text>
                      </HStack>
                    </Button>
                  ))}
                </VStack>

                {/* Action Area */}
                <Flex 
                  direction={{ base: 'column', md: 'row' }}
                  justify="space-between"
                  align="center"
                  gap={4}
                  pt={4}
                  borderTop="1px solid"
                  borderColor="gray.200"
                >
                  <HStack color="gray.600" fontSize="sm">
                    <Icon as={AlertCircle} />
                    <Text>
                      {selectedAnswer !== null 
                        ? "Answer selected - ready to continue" 
                        : "Please select an answer to continue"
                      }
                    </Text>
                  </HStack>
                  
                  <Button
                    onClick={onNextQuestion}
                    isDisabled={selectedAnswer === null}
                    colorScheme={getQuizColorScheme()}
                    size={buttonSize}
                    rightIcon={<Icon as={ArrowRight} />}
                    className="enhanced-button"
                    minW={{ base: "full", md: "200px" }}
                    h={{ base: "50px", md: "auto" }}
                  >
                    {isLastQuestion ? 'Complete Quiz' : 'Next Question'}
                  </Button>
                </Flex>
              </VStack>
            </CardBody>
          </Card>

          {/* Question Navigation Dots */}
          <Card className="enhanced-card" variant="elevated" w="full">
            <CardBody p={4}>
              <VStack spacing={3}>
                <Text fontSize="sm" color="gray.600" textAlign="center">
                  Question Progress
                </Text>
                <Flex justify="center" flexWrap="wrap" gap={2}>
                  {currentQuiz.questions.map((_, index) => (
                    <Box
                      key={index}
                      w={{ base: 4, md: 5 }}
                      h={{ base: 4, md: 5 }}
                      borderRadius="full"
                      bg={
                        index === currentQuestion
                          ? `${getQuizColorScheme()}.500`
                          : index < currentQuestion
                          ? 'green.400'
                          : 'gray.300'
                      }
                      transition="all 0.3s ease"
                      position="relative"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      {index < currentQuestion && (
                        <Text fontSize="xs" color="white" fontWeight="bold">
                          ✓
                        </Text>
                      )}
                      {index === currentQuestion && (
                        <Text fontSize="xs" color="white" fontWeight="bold">
                          {index + 1}
                        </Text>
                      )}
                    </Box>
                  ))}
                </Flex>
              </VStack>
            </CardBody>
          </Card>

          {/* Time Warning */}
          {timeLeft <= 60 && (
            <Card 
              variant="elevated" 
              w="full"
              bg={getTimeColorScheme() === 'red' ? 'red.50' : 'yellow.50'}
              borderColor={getTimeColorScheme() === 'red' ? 'red.200' : 'yellow.200'}
              borderWidth="2px"
              className={timeLeft <= 30 ? 'timer-danger' : 'timer-warning'}
            >
              <CardBody p={4}>
                <HStack justify="center" color={getTimeColor()}>
                  <Icon as={Clock} />
                  <Text fontWeight="bold">
                    {timeLeft <= 30 
                      ? "⚠️ Only 30 seconds remaining!" 
                      : "⏰ Less than 1 minute left!"
                    }
                  </Text>
                </HStack>
              </CardBody>
            </Card>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default QuizPage;