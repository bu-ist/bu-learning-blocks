# Data structure for questions

## Question Type: True/False

```yaml
Question:
  Type: "true-false"
  Header: String
  Body: String
  Answers:
    - Answer: String
      Feedback: String
      Correct: Boolean
```

### Properties

- Header

  The text that goes above the question body.

  Default:

  ```yaml
  Header: "Is the following statement true or false"
  ```

- Body

  The question body.

  Default:

  ```yaml
  Body: ""
  ```

- Answers

  An array of 2 answers.

  Default:

  ```yaml
  Answers:
    - Answer: "True"
      Feedback: ""
      Correct: true
    - Answer: "False"
      Feedback: ""
      Correct: false
  ```

### Examples

```yaml
Question:
  Type: "true-false"
  Body: "The square root of 4 is 2"
  Answers:
    - Answer: "True"
      Feedback: "Wow, you are like a doctor or a rocket scientist!"
      Correct: true
    - Answer: "False"
      Feedback: "Are you a kindergarden dropout?"
      Correct: false
```

```yaml
Question:
  Type: "true-false"
  Header: "Is this equation right?"
  Body: "2 + 2 = 5"
  Answers:
    - Answer: "Yes, that is correct"
      Feedback: "Please join the elections sir, we need more people like you!"
    - Answer: "No, that equation is wrong"
      Feedback: "Thanks, my whole life has been a lie."
      Correct: true
```

## Question Type: Multiple Choice

```yaml
Question:
  Type: "multiple-choice"
  Header: String
  Body: String
  Answers:
    - Answer: String
      Feedback: String
      Correct: Boolean
```

### Examples

```yaml
Question:
  Type: "multiple-choice"
  Header: "Please select the correct answer"
  Body: "How many toes does a two toed sloth have?"
  Answers:
    - Answer: "None"
      Feedback: "Nope, definitely more than that"
    - Answer: "Ten"
      Feedback: "Nope, that is too many"
    - Answer: "Two"
      Feedback: "Nope, a little more than that."
    - Answer: "Either six or eight"
      Feedback:
        'You are correct! The name "two-toed sloth" erroneously describe the number of toes.'
      Correct: True
    - Answer: "All of the above"
      Feedback: "Really?"
```

## Question Type: Multiple Answer

```yaml
Question:
  Type: "multiple-answer"
  Header: String
  Body: String
  Answers:
    - Answer: String
      Feedback: String
      Correct: Boolean
```

## Question Type: Matching

```yaml
Question:
  Type: "matching"
  Header: String
  Body: String
  Answers:
    - Stimulus: String
      Match: String
  Feedback: String
```

### Examples

```yaml
Question:
  Type: "matching"
  Header: Match the terms
  Body:
    What are the correct portuguese translations for the following english words?
  Answers:
    - Stimulus: "Accident"
      Match: "Acidente"
    - Stimulus: "Animal"
      Match: "Animal"
    - Stimulus: "Continent"
      Match: "Continente"
    - Stimulus: "Telephone"
      Match: "Telefone"
    - Stimulus: "Gorilla"
      Match: "Gorila"
  Feedback: "Not so hard to speak portuguese huh?"
```

## Question Type: Calculated Numeric

```yaml
Question:
  Type: "calculated-numeric"
  Header: String
  Body: String
  Answer: Float
  AnswerRange: Float
  DecimalNumbers: Integer
  Feedback: String
```

### Examples

```yaml
Question:
  Type: "calculated-numeric"
  Header: "What is the result of"
  Body: "10 / 3"
  Answer: 1.333
  AnswerRange: 0.01
  DecimalNumbers: 3
  Feedback: "The accepted answer range is 1.323 to 1.343"
```
