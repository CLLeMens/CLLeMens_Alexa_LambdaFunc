# CLLeMens_Alexa_LambdaFunc

This is basically the code inside the Lambda Function of AWS

- Remember to replace the Alexa Skill ID
- Also you have to do `npm i` and zip the whole folder (+node_modules) then upload it to the lambda func.

CI/CD will (maybe) come at a later time


To Invoke the skill:

- Open the Alexa Test simulator and say "CLLeMens Assistant" to start the skill, then use the questions defined in the QuestionIntent to kick off the question intent

Sample Conversation
~~~
Q: CLLeMens Assistant
A: Welcome to the CLLeMens Assistant! How can i help you?
Q: who are the authors of the document?
A: This is a sample answer
~~~
