# Data structure for questions

## Question: True/False

```json
{
  "question": {
    "type": "true-false",
    "header": "String",
    "body": "String",
    "answers": [
      {
        "answer": "String",
        "feedback": "String",
        "correct": "Boolean"
      }
    ]
  }
}
```

### Properties

- header

  The text that goes above the question body. Default:

  ```json
  {
    "header": "Is the following statement true or false"
  }
  ```

- body

  The question body. Default:

  ```json
  {
    "body: ""
  }
  ```

- answers

  An array of 2 answers. Default:

  ```json
  {
    "answers": [
      {
        "answer": "True",
        "feedback": "",
        "correct": true
      },
      {
        "answer": "False",
        "feedback": "",
        "correct": false
      }
    ]
  }
  ```

### Examples

```json
{
  "question": {
    "type": "true-false",
    "header": "Is the following statement true or false",
    "body": "The square root of 4 is 2",
    "answers": [
      {
        "answer": "True",
        "feedback": "Wow, you are like a doctor or a rocket scientist!",
        "correct": true
      },
      {
        "answer": "False",
        "feedback": "Are you a kindergarden dropout?",
        "correct": false
      }
    ]
  }
}
```

```json
{
  "question": {
    "type": "true-false",
    "header": "Is this equation right?",
    "body": "2 + 2 = 5",
    "answers": [
      {
        "answer": "Yes, that is correct",
        "feedback": "Please join the elections sir, we need more people like you!",
        "correct": false
      },
      {
        "answer": "No, that equation is wrong",
        "feedback": "Thanks, my whole life has been a lie.",
        "correct": true
      }
    ]
  }
}
```

## Question: Multiple Choice

```json
{
  "question": {
    "type": "multiple-choice",
    "header": "String",
    "body": "String",
    "answers": [
      {
        "answer": "String",
        "feedback": "String",
        "correct": "Boolean"
      }
    ],
    "correctFeedback": "String",
    "incorrectFeedback": "String"
  }
}
```

### Examples

```json
{
  "question": {
    "type": "multiple-choice",
    "header": "Please select the correct answer",
    "body": "How many toes does a two toed sloth have?",
    "answers": [
      {
        "answer": "None",
        "feedback": "Nope, definitely more than that",
        "correct": false
      },
      {
        "answer": "Ten",
        "feedback": "Nope, that is too many",
        "correct": false
      },
      {
        "answer": "Two",
        "feedback": "Nope, a little more than that.",
        "correct": false
      },
      {
        "answer": "Either six or eight",
        "feedback": "You are correct! The name \"two-toed sloth\" erroneously describe the number of toes.",,
        "correct": true
      },
      {
        "answer": "All of the above",
        "feedback": "Really?",
        "correct": false
      }
    ],
    "correctFeedback": "You picked the correct answer!",
    "incorrectFeedback": "You picked an incorrect answer, see the feedback below your answer for why it was wrong."
  }
}
```

## Question: Multiple Answer

```json
{
  "question": {
    "type": "multiple-answer",
    "header": "String",
    "body": "String",
    "answers": [
      {
        "answer": "String",
        "feedback": "String",
        "correct": "Boolean"
      }
    ],
    "correctFeedback": "String",
    "incorrectFeedback": "String"
  }
}
```

## Question: Matching

```json
{
  "question": {
    "type": "matching",
    "header": "String",
    "body": "String",
    "answers": [
      {
        "stimulus": "String",
        "match": "String"
      }
    ],
    "feedback": "String"
  }
}
```

### Examples

```json
{
  "question": {
    "type": "matching",
    "header": "Match the terms",
    "body": "What are the correct portuguese translations for the following english words?",
    "answers": [
      {
        "stimulus": "Accident",
        "match": "Acidente"
      },
      {
        "stimulus": "Animal",
        "match": "Animal"
      },
      {
        "stimulus": "Continent",
        "match": "Continente"
      },
      {
        "stimulus": "Telephone",
        "match": "Telefone"
      },
      {
        "stimulus": "Gorilla",
        "match": "Gorila"
      }
    ],
    "feedback": "Not so hard to speak portuguese huh?"
  }
}
```

## Question: Calculated Numeric

```json
{
  "question": {
    "type": "calculated-numeric",
    "header": "String",
    "body": "String",
    "answer": "Float",
    "answerRange": "Float",
    "decimalNumbers": "Integer",
    "feedback": "String"
  }
}
```

### Examples

```json
{
  "question": {
    "type": "calculated-numeric",
    "header": "What is the result of",
    "body": "10 / 3",
    "answer": 1.333,
    "answerRange": 0.01,
    "decimalNumbers": 3,
    "feedback": "The accepted answer range is 1.323 to 1.343"
  }
}
```
