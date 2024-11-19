const mathsQuestions = [
  {
    question: "What is the square root of 144?",
    options: ["10", "11", "12", "13"],
    correct: "12",
  },
  {
    question: "Solve: 5 + 3 × 2",
    options: ["10", "11", "16", "8"],
    correct: "11",
  },
  {
    question: "What is 15% of 200?",
    options: ["30", "20", "15", "25"],
    correct: "30",
  },
  {
    question: "What is 9 × 7?",
    options: ["56", "64", "63", "72"],
    correct: "63",
  },
  {
    question: "What is the value of π (pi)?",
    options: ["3.12", "3.14", "3.16", "3.18"],
    correct: "3.14",
  },
  {
    question: "What is the perimeter of a square with side length 5?",
    options: ["10", "20", "15", "25"],
    correct: "20",
  },
  {
    question: "What is 100 divided by 4?",
    options: ["25", "20", "50", "40"],
    correct: "25",
  },
  { question: "What is 2³?", options: ["6", "8", "9", "4"], correct: "8" },
  {
    question: "What is 7% of 300?",
    options: ["21", "25", "19", "27"],
    correct: "21",
  },
  {
    question: "How many degrees are there in a triangle?",
    options: ["90", "120", "180", "360"],
    correct: "180",
  },
  {
    question: "What is the value of 3²?",
    options: ["3", "6", "9", "12"],
    correct: "9",
  },
  {
    question: "What is the area of a rectangle with length 8 and width 3?",
    options: ["24", "16", "32", "18"],
    correct: "24",
  },
  {
    question: "What is the cube root of 27?",
    options: ["2", "3", "4", "5"],
    correct: "3",
  },
  {
    question: "What is 10 ÷ 0.5?",
    options: ["20", "5", "10", "25"],
    correct: "20",
  },
  {
    question: "What is the next prime number after 7?",
    options: ["9", "11", "13", "10"],
    correct: "11",
  },
  {
    question: "What is the factorial of 4 (4!)?",
    options: ["12", "24", "16", "20"],
    correct: "24",
  },
  {
    question: "What is the greatest common divisor of 12 and 16?",
    options: ["2", "4", "6", "8"],
    correct: "4",
  },
  {
    question: "What is the sum of the angles in a pentagon?",
    options: ["360°", "540°", "720°", "180°"],
    correct: "540°",
  },
  {
    question: "How many sides does a hexagon have?",
    options: ["4", "6", "8", "10"],
    correct: "6",
  },
  {
    question: "What is the value of 10³?",
    options: ["10", "100", "1000", "10000"],
    correct: "1000",
  },
];
const englishQuestions = [
  {
    question: "What is a synonym for 'happy'?",
    options: ["Sad", "Angry", "Joyful", "Tired"],
    correct: "Joyful",
  },
  {
    question: "Which of these is an adjective?",
    options: ["Run", "Beautiful", "Quickly", "Joy"],
    correct: "Beautiful",
  },
  {
    question: "Choose the correct form: She ___ to school every day.",
    options: ["go", "goes", "gone", "going"],
    correct: "goes",
  },
  {
    question: "What is the plural of 'child'?",
    options: ["Childs", "Childes", "Children", "Child"],
    correct: "Children",
  },
  {
    question: "What is the past tense of 'run'?",
    options: ["Ran", "Run", "Running", "Runned"],
    correct: "Ran",
  },
  {
    question: "Which is a noun?",
    options: ["Quickly", "Kind", "Book", "Brave"],
    correct: "Book",
  },
  {
    question: "What is a synonym for 'small'?",
    options: ["Tiny", "Big", "Huge", "Large"],
    correct: "Tiny",
  },
  {
    question: "Identify the verb: He dances gracefully.",
    options: ["He", "Dances", "Gracefully", "None"],
    correct: "Dances",
  },
  {
    question: "What is an antonym for 'hot'?",
    options: ["Warm", "Cold", "Cool", "Boiling"],
    correct: "Cold",
  },
  {
    question: "What type of word is 'quickly'?",
    options: ["Adjective", "Adverb", "Noun", "Verb"],
    correct: "Adverb",
  },
  {
    question: "Choose the correct spelling:",
    options: ["Definetly", "Definitely", "Definately", "Definite"],
    correct: "Definitely",
  },
  {
    question: "What does the prefix 'un-' mean?",
    options: ["With", "Not", "Before", "Over"],
    correct: "Not",
  },
  {
    question: "What is the opposite of 'begin'?",
    options: ["End", "Start", "Continue", "Create"],
    correct: "End",
  },
  {
    question: "What is the comparative form of 'fast'?",
    options: ["Faster", "More fast", "Fastest", "Fast"],
    correct: "Faster",
  },
  {
    question: "What is the past tense of 'eat'?",
    options: ["Eated", "Ate", "Eating", "Eaten"],
    correct: "Ate",
  },
  {
    question: "What is the superlative form of 'beautiful'?",
    options: [
      "Beautifulest",
      "More beautiful",
      "Most beautiful",
      "Beautifuller",
    ],
    correct: "Most beautiful",
  },
  {
    question: "Which sentence is punctuated correctly?",
    options: ["Where is he?", "Where is he.", "Where, is he?", "Where is he"],
    correct: "Where is he?",
  },
  {
    question: "What is the root word of 'unhappily'?",
    options: ["Happy", "Happily", "Unhappy", "Unhappily"],
    correct: "Happy",
  },
  {
    question: "What is the antonym of 'strong'?",
    options: ["Weak", "Tough", "Firm", "Solid"],
    correct: "Weak",
  },
  {
    question: "What is the plural of 'fish'?",
    options: ["Fishes", "Fish", "Fishs", "Fishies"],
    correct: "Fish",
  },
];
const historyQuestions = [
  {
    question: "Who was the first president of the United States?",
    options: [
      "George Washington",
      "Abraham Lincoln",
      "Thomas Jefferson",
      "John Adams",
    ],
    correct: "George Washington",
  },
  {
    question: "In what year did World War II end?",
    options: ["1945", "1939", "1918", "1965"],
    correct: "1945",
  },
  {
    question: "Which empire built the Colosseum?",
    options: ["Roman", "Greek", "Ottoman", "Byzantine"],
    correct: "Roman",
  },
  {
    question: "Who discovered America in 1492?",
    options: [
      "Christopher Columbus",
      "Ferdinand Magellan",
      "Marco Polo",
      "Amerigo Vespucci",
    ],
    correct: "Christopher Columbus",
  },
  {
    question:
      "What was the name of the ship on which the Pilgrims traveled to America?",
    options: ["Mayflower", "Santa Maria", "Beagle", "Endeavour"],
    correct: "Mayflower",
  },
  {
    question: "Who was the British Prime Minister during World War II?",
    options: [
      "Winston Churchill",
      "Neville Chamberlain",
      "Margaret Thatcher",
      "Tony Blair",
    ],
    correct: "Winston Churchill",
  },
  {
    question: "What was the primary cause of the Cold War?",
    options: [
      "Religious differences",
      "Economic rivalries",
      "Ideological conflicts",
      "Colonialism",
    ],
    correct: "Ideological conflicts",
  },
  {
    question: "Who was known as the 'Iron Lady'?",
    options: [
      "Margaret Thatcher",
      "Indira Gandhi",
      "Angela Merkel",
      "Hillary Clinton",
    ],
    correct: "Margaret Thatcher",
  },
  {
    question: "In which year did the Berlin Wall fall?",
    options: ["1989", "1991", "1985", "1995"],
    correct: "1989",
  },
  {
    question: "Who was the first emperor of Rome?",
    options: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
    correct: "Augustus",
  },
  {
    question: "Which revolution began in 1789?",
    options: [
      "American Revolution",
      "French Revolution",
      "Industrial Revolution",
      "Russian Revolution",
    ],
    correct: "French Revolution",
  },
  {
    question: "What year did India gain independence from Britain?",
    options: ["1947", "1945", "1950", "1930"],
    correct: "1947",
  },
  {
    question: "Who was the first man to set foot on the moon?",
    options: [
      "Neil Armstrong",
      "Buzz Aldrin",
      "Yuri Gagarin",
      "Michael Collins",
    ],
    correct: "Neil Armstrong",
  },
  {
    question:
      "What is the name of the ship that sank in 1912 after hitting an iceberg?",
    options: ["Titanic", "Olympic", "Lusitania", "Britannic"],
    correct: "Titanic",
  },
  {
    question:
      "Who was the longest-reigning British monarch before Queen Elizabeth II?",
    options: [
      "Queen Victoria",
      "King George III",
      "Queen Mary",
      "King Edward VIII",
    ],
    correct: "Queen Victoria",
  },
  {
    question: "What was the name of the German airship that exploded in 1937?",
    options: ["Hindenburg", "Graf Zeppelin", "Goodyear Blimp", "Spitfire"],
    correct: "Hindenburg",
  },
  {
    question: "What treaty ended World War I?",
    options: [
      "Treaty of Versailles",
      "Treaty of Paris",
      "Treaty of Vienna",
      "Treaty of Ghent",
    ],
    correct: "Treaty of Versailles",
  },
  {
    question: "Who led the Soviet Union during World War II?",
    options: [
      "Joseph Stalin",
      "Vladimir Lenin",
      "Nikita Khrushchev",
      "Leonid Brezhnev",
    ],
    correct: "Joseph Stalin",
  },
  {
    question: "Which famous wall was built in 1961?",
    options: [
      "Berlin Wall",
      "Great Wall of China",
      "Hadrian's Wall",
      "Maginot Line",
    ],
    correct: "Berlin Wall",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Leonardo da Vinci",
      "Michelangelo",
      "Raphael",
      "Vincent van Gogh",
    ],
    correct: "Leonardo da Vinci",
  },
];
const chemistryQuestions = [
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "O2", "HO", "H"],
    correct: "H2O",
  },
  {
    question: "What is the atomic number of carbon?",
    options: ["6", "8", "12", "14"],
    correct: "6",
  },
  {
    question: "Which element is a noble gas?",
    options: ["Helium", "Oxygen", "Carbon", "Iron"],
    correct: "Helium",
  },
  {
    question: "What is the pH of a neutral solution?",
    options: ["7", "0", "14", "10"],
    correct: "7",
  },
  {
    question: "What is the most abundant gas in Earth's atmosphere?",
    options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Helium"],
    correct: "Nitrogen",
  },
  {
    question: "Which of these is an alkali metal?",
    options: ["Sodium", "Iron", "Gold", "Helium"],
    correct: "Sodium",
  },
  {
    question: "What is the chemical formula for table salt?",
    options: ["NaCl", "H2O", "CO2", "CH4"],
    correct: "NaCl",
  },
  {
    question: "Which acid is found in lemons?",
    options: [
      "Citric acid",
      "Acetic acid",
      "Sulfuric acid",
      "Hydrochloric acid",
    ],
    correct: "Citric acid",
  },
  {
    question: "What is the hardest natural substance?",
    options: ["Diamond", "Graphite", "Iron", "Quartz"],
    correct: "Diamond",
  },
  {
    question: "Which element has the highest atomic number?",
    options: ["Oganesson", "Uranium", "Gold", "Iron"],
    correct: "Oganesson",
  },
  {
    question: "What is the chemical name for baking soda?",
    options: [
      "Sodium bicarbonate",
      "Sodium chloride",
      "Calcium carbonate",
      "Magnesium sulfate",
    ],
    correct: "Sodium bicarbonate",
  },
  {
    question: "What is the molecular formula for glucose?",
    options: ["C6H12O6", "H2O", "CO2", "CH4"],
    correct: "C6H12O6",
  },
  {
    question: "Which gas is known as laughing gas?",
    options: ["Nitrous oxide", "Carbon dioxide", "Oxygen", "Helium"],
    correct: "Nitrous oxide",
  },
  {
    question: "What is the chemical formula for ammonia?",
    options: ["NH3", "CH4", "H2O", "CO2"],
    correct: "NH3",
  },
  {
    question: "What is the study of carbon compounds called?",
    options: [
      "Organic chemistry",
      "Inorganic chemistry",
      "Physical chemistry",
      "Analytical chemistry",
    ],
    correct: "Organic chemistry",
  },
  {
    question: "Which is a halogen?",
    options: ["Chlorine", "Oxygen", "Carbon", "Nitrogen"],
    correct: "Chlorine",
  },
  {
    question: "What is the main component of natural gas?",
    options: ["Methane", "Ethane", "Propane", "Butane"],
    correct: "Methane",
  },
  {
    question: "What is the common name for calcium sulfate dihydrate?",
    options: ["Plaster of Paris", "Baking soda", "Salt", "Vinegar"],
    correct: "Plaster of Paris",
  },
  {
    question: "Which element is liquid at room temperature?",
    options: ["Mercury", "Iron", "Sodium", "Gold"],
    correct: "Mercury",
  },
  {
    question: "What is the charge of a proton?",
    options: ["Positive", "Negative", "Neutral", "Depends on the atom"],
    correct: "Positive",
  },
];
const physicsQuestions = [
  {
    question: "What is the speed of light in a vacuum?",
    options: ["300,000 km/s", "150,000 km/s", "100,000 km/s", "1,000,000 km/s"],
    correct: "300,000 km/s",
  },
  {
    question: "Who formulated the laws of motion?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Nikola Tesla",
    ],
    correct: "Isaac Newton",
  },
  {
    question: "What is the unit of force?",
    options: ["Newton", "Joule", "Watt", "Pascal"],
    correct: "Newton",
  },
  {
    question:
      "What is the primary force responsible for keeping planets in orbit?",
    options: ["Gravity", "Magnetism", "Friction", "Electrostatic"],
    correct: "Gravity",
  },
  {
    question: "What is the formula for kinetic energy?",
    options: ["½mv²", "mv", "mgh", "2mv"],
    correct: "½mv²",
  },
  {
    question: "Which color of light has the shortest wavelength?",
    options: ["Violet", "Red", "Blue", "Green"],
    correct: "Violet",
  },
  {
    question: "What type of lens is used to correct short-sightedness?",
    options: ["Concave", "Convex", "Cylindrical", "Plano"],
    correct: "Concave",
  },
  {
    question: "What is the SI unit of power?",
    options: ["Watt", "Joule", "Newton", "Pascal"],
    correct: "Watt",
  },
  {
    question: "What is absolute zero in Kelvin?",
    options: ["0 K", "273 K", "-273 K", "100 K"],
    correct: "0 K",
  },
  {
    question: "What type of energy is stored in a stretched spring?",
    options: [
      "Elastic potential energy",
      "Kinetic energy",
      "Chemical energy",
      "Thermal energy",
    ],
    correct: "Elastic potential energy",
  },
  {
    question: "What is the symbol for resistance?",
    options: ["R", "Ω", "P", "W"],
    correct: "Ω",
  },
  {
    question: "What is the acceleration due to gravity on Earth?",
    options: ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "11 m/s²"],
    correct: "9.8 m/s²",
  },
  {
    question: "Who discovered the electron?",
    options: [
      "J.J. Thomson",
      "Ernest Rutherford",
      "Niels Bohr",
      "James Clerk Maxwell",
    ],
    correct: "J.J. Thomson",
  },
  {
    question: "Which wave is used in a microwave oven?",
    options: ["Microwave", "Radio wave", "Infrared", "X-ray"],
    correct: "Microwave",
  },
  {
    question: "What is the process of splitting a nucleus called?",
    options: ["Fission", "Fusion", "Radioactivity", "Decay"],
    correct: "Fission",
  },
  {
    question: "What is the main component of an electric circuit?",
    options: ["Conductor", "Insulator", "Resistor", "Battery"],
    correct: "Battery",
  },
  {
    question: "What is the first law of thermodynamics?",
    options: [
      "Energy cannot be created or destroyed",
      "For every action, there is an equal reaction",
      "Entropy always increases",
      "Energy equals mass times the speed of light squared",
    ],
    correct: "Energy cannot be created or destroyed",
  },
  {
    question: "What does a voltmeter measure?",
    options: ["Voltage", "Current", "Resistance", "Power"],
    correct: "Voltage",
  },
  {
    question: "What is the force that opposes motion?",
    options: ["Friction", "Gravity", "Tension", "Magnetism"],
    correct: "Friction",
  },
  {
    question: "What type of wave is light?",
    options: ["Electromagnetic", "Sound", "Mechanical", "Longitudinal"],
    correct: "Electromagnetic",
  },
];
const geographyQuestions = [
  {
    question: "What is the largest continent?",
    options: ["Asia", "Africa", "Europe", "North America"],
    correct: "Asia",
  },
  {
    question: "Which river is the longest in the world?",
    options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    correct: "Nile",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
    correct: "Canberra",
  },
  {
    question: "Which desert is the largest in the world?",
    options: ["Sahara", "Kalahari", "Gobi", "Atacama"],
    correct: "Sahara",
  },
  {
    question: "Which country has the most islands?",
    options: ["Sweden", "Philippines", "Indonesia", "Canada"],
    correct: "Sweden",
  },
  {
    question: "Which ocean is the largest?",
    options: ["Pacific", "Atlantic", "Indian", "Arctic"],
    correct: "Pacific",
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Vatican City", "Monaco", "Malta", "San Marino"],
    correct: "Vatican City",
  },
  {
    question: "Which mountain is the tallest in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    correct: "Mount Everest",
  },
  {
    question: "Which U.S. state is the largest by area?",
    options: ["Alaska", "Texas", "California", "Montana"],
    correct: "Alaska",
  },
  {
    question: "What is the capital of Canada?",
    options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
    correct: "Ottawa",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["Japan", "China", "Korea", "Thailand"],
    correct: "Japan",
  },
  {
    question: "What is the driest place on Earth?",
    options: ["Atacama Desert", "Sahara Desert", "Antarctica", "Death Valley"],
    correct: "Atacama Desert",
  },
  {
    question: "Which river flows through London?",
    options: ["Thames", "Seine", "Rhine", "Danube"],
    correct: "Thames",
  },
  {
    question:
      "What is the term for a narrow strip of land connecting two larger land masses?",
    options: ["Isthmus", "Peninsula", "Archipelago", "Delta"],
    correct: "Isthmus",
  },
  {
    question: "Which country has the highest population?",
    options: ["China", "India", "United States", "Indonesia"],
    correct: "China",
  },
  {
    question: "Which is the southernmost continent?",
    options: ["Antarctica", "Australia", "Africa", "South America"],
    correct: "Antarctica",
  },
  {
    question: "Which sea is the saltiest?",
    options: ["Dead Sea", "Mediterranean Sea", "Red Sea", "Baltic Sea"],
    correct: "Dead Sea",
  },
  {
    question: "Which U.S. city is known as the Windy City?",
    options: ["Chicago", "New York", "Los Angeles", "Seattle"],
    correct: "Chicago",
  },
  {
    question: "What is the longest mountain range in the world?",
    options: ["Andes", "Himalayas", "Rockies", "Alps"],
    correct: "Andes",
  },
  {
    question: "What is the capital city of Egypt?",
    options: ["Cairo", "Alexandria", "Luxor", "Giza"],
    correct: "Cairo",
  },
];

const signIn = document.querySelector(".signIn");
const subjects = document.querySelector(".subjects");
const usernameText = document.querySelector(".subjects h3");
const rules = document.querySelector(".rules");
const quiz = document.querySelector(".quiz");
const result = document.querySelector(".result");
const username = document.querySelector("#username");
const signInBtn = document.querySelector("#signInBtn");
const subjectBtns = document.querySelectorAll("#subjectsList button");
const startBtn = document.querySelector("#startBtn");
const options = document.getElementById("options");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
let selectedQuiz;
let time = 60;
let score = 0;
let currentIndex = 0;

signIn.style.display = "flex";
username.focus();

signInBtn.addEventListener("click", () => {
  const usernameValue = username.value;

  if (usernameValue.trim() !== "") {
    signIn.style.display = "none";
    subjects.style.display = "block";
    usernameText.textContent = usernameValue;
  } else {
    alert("Please enter a username");
    username.focus();
  }
});

subjectBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedSubject = button.textContent;
    document.getElementById("selectedSubject").textContent = selectedSubject;

    if (selectedSubject === "Maths") {
      selectedQuiz = mathsQuestions;
    } else if (selectedSubject === "English") {
      selectedQuiz = englishQuestions;
    } else if (selectedSubject === "History") {
      selectedQuiz = historyQuestions;
    } else if (selectedSubject === "Geography") {
      selectedQuiz = geographyQuestions;
    } else if (selectedSubject === "Physics") {
      selectedQuiz = physicsQuestions;
    } else if (selectedSubject === "Chemistry") {
      selectedQuiz = chemistryQuestions;
    }

    rules.style.display = "block";
    subjects.style.display = "none";
  });
});

startBtn.addEventListener("click", () => {
  rules.style.display = "none";
  quiz.style.display = "block";
  displayQuestion();
});

const displayQuestion = () => {
  if (currentIndex < selectedQuiz.length) {
    const question = selectedQuiz[currentIndex];

    document.getElementById("questionNumber").textContent = currentIndex + 1;
    document.getElementById("question").textContent = question.question;

    options.innerHTML = question.options
      .map(
        (option) =>
          `<label class="option">
            <input type="radio" name="option" value="${option}">
            <span>${option}</span>
           </label>
      `
      )
      .join("");
  } else {
    displayResult();
  }
};
