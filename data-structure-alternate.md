# Data structure for questions

## True/False

```yaml
Question:
  Type: 'true-false'
  Header: String
  Body: String
  Answers: 
    1: String
    2: String
  Feedback:
    1: String
    2: String
  CorrectAnswer: Integer
```

## Multiple Choice
```yaml
Question:
  Type: 'multiple-choice'
  Header: String
  Body: String
  Answers: 
    1: String
    2: String
    3: String
    4: String
    5: String
  Feedback:
    1: String
    2: String
    3: String
    4: String
    5: String
  CorrectAnswer: Integer
```

## Multiple Answer
```yaml
Question:
  Type: 'multiple-answer'
  Header: String
  Body: String
  Answers: 
		1: String
		2: String
		3: String
		4: String
		5: String
  Feedback:
		1: String
		2: String
		3: String
		4: String
		5: String
  CorrectAnswers: [Integer]
```