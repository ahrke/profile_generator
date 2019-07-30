const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  {  
    prompt: `What's your name? Nicknames are also acceptable :`,
    key: 'name'
  }, 
  {
    prompt: `What's an activity you like doing?`,
    key: 'interests'
  }, 
  { 
    prompt: `What do you listen to while doing that?`,
    key: 'music'
  }, 
  {
    prompt: `Which meal is your favourite (eg: dinner, brunch, etc.)`,
    key: 'whichMeal'
  }, 
  { 
    prompt: `What's your favourite thing to eat for that meal?`,
    key: 'food'
  }, 
  {
    prompt: `Which sport is your absolute favourite?`,
    key: 'sport'
  }, 
  { 
    prompt: `What is your superpower? In a few words, tell us what you are amazing at!`,
    key: 'superpower'
  }
]

const getAnswer = (questions, cb) => {
  if (questions.length === 0) {
    cb();
    return;
  } 

  rl.question(questions[0].prompt, (answer) => {
    questions[0].answer = answer;
    getAnswer(questions.slice(1), cb)
  })
}

const createParagraph = () => {

  const getAnswerFromKey = (key) => {
    for (k of questions) {
      if (k.key === key) {
        return k.answer
      }
    }
  }

  let paraOut = `${getAnswerFromKey("name")} loves listening to ${getAnswerFromKey("music")} while` +
  ` ${getAnswerFromKey("interests")}, devouring ${getAnswerFromKey("food")} for ${getAnswerFromKey("meal")},` +
  ` prefers ${getAnswerFromKey("sport")} over any other sport, and is amazing at ${getAnswerFromKey("superpower")}.`
  process.stdout.write(paraOut + `\n`);
  process.exit();
}

getAnswer(questions, createParagraph);