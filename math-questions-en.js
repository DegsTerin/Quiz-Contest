Object.assign(EN_QUESTION_TRANSLATIONS, {
  "math-sets-01": {
    "prompt": "In a class of 80 students, 46 study English, 38 study Spanish and 17 study both languages. How many study at least one of the two languages?",
    "options": [
      "50",
      "57",
      "63",
      "67",
      "84"
    ],
    "explanation": "By inclusion-exclusion, 46 + 38 - 17 = 67."
  },
  "math-sets-02": {
    "prompt": "If A = {2, 4, 6, 8} and B = {4, 5, 6, 7}, then A ∩ B is:",
    "options": [
      "{2, 8}",
      "{4, 6}",
      "{4, 5, 6, 7}",
      "{2, 4, 5, 6, 7, 8}",
      "∅"
    ],
    "explanation": "The intersection contains only elements present in both sets: 4 and 6."
  },
  "math-sets-03": {
    "prompt": "In a universe U = {1, 2, 3, 4, 5, 6}, if A = {1, 3, 5}, the complement of A in U is:",
    "options": [
      "{1, 3, 5}",
      "{2, 4, 6}",
      "{1, 2, 3}",
      "{4, 5, 6}",
      "∅"
    ],
    "explanation": "The complement contains the elements of U that do not belong to A."
  },
  "math-sets-04": {
    "prompt": "In a survey of 120 people, 70 use service X, 55 use service Y and 20 use neither. How many use both?",
    "options": [
      "5",
      "15",
      "25",
      "35",
      "45"
    ],
    "explanation": "At least one is used by 120 - 20 = 100. The intersection is 70 + 55 - 100 = 25."
  },
  "math-sets-05": {
    "prompt": "Which relation is always true if C is a subset of A?",
    "options": [
      "A ⊂ C",
      "C ∈ A",
      "C ⊆ A",
      "A ∩ C = ∅",
      "A = C"
    ],
    "explanation": "A subset means every element of C belongs to A, so C ⊆ A."
  },
  "math-sets-06": {
    "prompt": "If n(A) = 28, n(B) = 19 and n(A ∪ B) = 40, then n(A ∩ B) is:",
    "options": [
      "0",
      "5",
      "7",
      "12",
      "47"
    ],
    "explanation": "n(A ∪ B) = n(A) + n(B) - n(A ∩ B). Therefore 40 = 28 + 19 - x and x = 7."
  },
  "math-equations-01": {
    "prompt": "The sum of the roots of x² - 7x + 10 = 0 is:",
    "options": [
      "-10",
      "-7",
      "3",
      "5",
      "7"
    ],
    "explanation": "For ax² + bx + c = 0, the root sum is -b/a. Here it is 7."
  },
  "math-equations-02": {
    "prompt": "The roots of x² - 5x + 6 = 0 are:",
    "options": [
      "1 and 6",
      "2 and 3",
      "-2 and -3",
      "-1 and -6",
      "3 and 5"
    ],
    "explanation": "2 × 3 is 6 and 2 + 3 is 5."
  },
  "math-equations-03": {
    "prompt": "The reduced equation obtained from (2x - 1)² = 25 is:",
    "options": [
      "4x² - 4x - 24 = 0",
      "4x² - 4x + 24 = 0",
      "2x² - 2x - 24 = 0",
      "4x² + 4x - 24 = 0",
      "x² - 4x - 24 = 0"
    ],
    "explanation": "Expanding gives 4x² - 4x + 1 = 25, therefore 4x² - 4x - 24 = 0."
  },
  "math-equations-04": {
    "prompt": "The value of x that solves 3x - 8 = 19 is:",
    "options": [
      "3",
      "7",
      "9",
      "11",
      "27"
    ],
    "explanation": "Adding 8 to both sides gives 3x = 27, so x = 9."
  },
  "math-equations-05": {
    "prompt": "The function f(x) = x² - 4x + 3 has a minimum value of:",
    "options": [
      "-4",
      "-1",
      "0",
      "1",
      "3"
    ],
    "explanation": "The vertex is at x = 2. Thus f(2) = -1."
  },
  "math-equations-06": {
    "prompt": "For x² + kx + 9 = 0 to have exactly one real root, k must be:",
    "options": [
      "0",
      "3",
      "6",
      "9",
      "18"
    ],
    "explanation": "Exactly one real root requires a zero discriminant: k² - 36 = 0. Of the options, k = 6."
  },
  "math-proportion-01": {
    "prompt": "A product costs R$240.00 and receives a 15% discount. Its new price is:",
    "options": [
      "R$196.00",
      "R$204.00",
      "R$210.00",
      "R$216.00",
      "R$225.00"
    ],
    "explanation": "15% of 240 is 36. Subtracting gives 204."
  },
  "math-proportion-02": {
    "prompt": "In a recipe, the ratio of flour to sugar is 5:2. For 750 g of flour, the amount of sugar is:",
    "options": [
      "150 g",
      "250 g",
      "300 g",
      "375 g",
      "500 g"
    ],
    "explanation": "If 5 parts are 750 g, one part is 150 g; two parts are 300 g."
  },
  "math-proportion-03": {
    "prompt": "A R$2,000.00 salary receives a 10% increase and then a 10% reduction. The final salary is:",
    "options": [
      "R$1,800.00",
      "R$1,980.00",
      "R$2,000.00",
      "R$2,020.00",
      "R$2,200.00"
    ],
    "explanation": "After the increase it is 2,200. The 10% reduction applies to 2,200, resulting in 1,980."
  },
  "math-proportion-04": {
    "prompt": "If 4 notebooks cost R$30.00, at the same unit price, 10 notebooks cost:",
    "options": [
      "R$60.00",
      "R$70.00",
      "R$75.00",
      "R$80.00",
      "R$90.00"
    ],
    "explanation": "The unit price is 30/4 = 7.50. For 10 units, it is 75.00."
  },
  "math-proportion-05": {
    "prompt": "A class has 40 students. If 35% were absent, how many attended?",
    "options": [
      "14",
      "21",
      "25",
      "26",
      "28"
    ],
    "explanation": "0.35 × 40 = 14 were absent. Therefore 40 - 14 = 26 attended."
  },
  "math-proportion-06": {
    "prompt": "A machine produces 180 pieces in 3 hours at a constant rate. How many pieces does it produce in 7 hours?",
    "options": [
      "300",
      "360",
      "390",
      "420",
      "540"
    ],
    "explanation": "The rate is 60 pieces per hour. In 7 hours it produces 420."
  },
  "math-geometry-01": {
    "prompt": "The sum of the internal angles of a triangle is:",
    "options": [
      "90°",
      "180°",
      "270°",
      "360°",
      "540°"
    ],
    "explanation": "Every triangle has an internal-angle sum of 180°."
  },
  "math-geometry-02": {
    "prompt": "A right triangle has legs of 6 cm and 8 cm. Its hypotenuse is:",
    "options": [
      "9 cm",
      "10 cm",
      "12 cm",
      "14 cm",
      "16 cm"
    ],
    "explanation": "By Pythagoras, h² = 6² + 8² = 100, so h = 10."
  },
  "math-geometry-03": {
    "prompt": "The area of a square with side 9 cm is:",
    "options": [
      "18 cm²",
      "36 cm²",
      "45 cm²",
      "72 cm²",
      "81 cm²"
    ],
    "explanation": "The area is side²: 9² = 81 cm²."
  },
  "math-geometry-04": {
    "prompt": "A rectangle has perimeter 30 cm and width 5 cm. Its length is:",
    "options": [
      "5 cm",
      "10 cm",
      "15 cm",
      "20 cm",
      "25 cm"
    ],
    "explanation": "2(l + 5) = 30, so l + 5 = 15 and l = 10."
  },
  "math-geometry-05": {
    "prompt": "The area of a triangle with base 12 cm and height 7 cm is:",
    "options": [
      "19 cm²",
      "24 cm²",
      "36 cm²",
      "42 cm²",
      "84 cm²"
    ],
    "explanation": "A = (base × height)/2 = (12 × 7)/2 = 42."
  },
  "math-geometry-06": {
    "prompt": "A circle with radius 4 cm has circumference:",
    "options": [
      "4π cm",
      "8π cm",
      "12π cm",
      "16π cm",
      "32π cm"
    ],
    "explanation": "The circumference is 2πr = 8π cm."
  },
  "math-trigonometry-01": {
    "prompt": "π radians are equivalent to:",
    "options": [
      "45°",
      "90°",
      "180°",
      "270°",
      "360°"
    ],
    "explanation": "π radians is half a turn, or 180°."
  },
  "math-trigonometry-02": {
    "prompt": "90° are equivalent to:",
    "options": [
      "π/6 rad",
      "π/4 rad",
      "π/3 rad",
      "π/2 rad",
      "π rad"
    ],
    "explanation": "Since 180° = π radians, 90° = π/2 radians."
  },
  "math-trigonometry-03": {
    "prompt": "In a right triangle, if the opposite leg is 3 and the hypotenuse is 5, the sine of the angle is:",
    "options": [
      "3/5",
      "4/5",
      "5/3",
      "3/4",
      "5/4"
    ],
    "explanation": "Sine is opposite leg divided by hypotenuse: 3/5."
  },
  "math-trigonometry-04": {
    "prompt": "The value of cos 60° is:",
    "options": [
      "0",
      "1/2",
      "√2/2",
      "√3/2",
      "1"
    ],
    "explanation": "For a special triangle, cos 60° = 1/2."
  },
  "math-trigonometry-05": {
    "prompt": "A 10 m ladder forms a 30° angle with the ground. Using sin 30° = 1/2, the approximate height reached is:",
    "options": [
      "2.5 m",
      "5 m",
      "5√3 m",
      "8.66 m",
      "10 m"
    ],
    "explanation": "Height equals hypotenuse times sine: 10 × 1/2 = 5 m."
  },
  "math-trigonometry-06": {
    "prompt": "If tan θ = 3/4 in a right triangle and θ is acute, then sin θ is:",
    "options": [
      "3/5",
      "4/5",
      "3/4",
      "4/3",
      "5/4"
    ],
    "explanation": "With legs 3 and 4, the hypotenuse is 5. Therefore sin θ = 3/5."
  },
  "math-logic-01": {
    "prompt": "The arithmetic mean of 6, 8, 10 and 16 is:",
    "options": [
      "8",
      "9",
      "10",
      "11",
      "12"
    ],
    "explanation": "The sum is 40; divided by 4, it is 10."
  },
  "math-logic-02": {
    "prompt": "The median of 3, 7, 9, 12, 15 is:",
    "options": [
      "3",
      "7",
      "9",
      "12",
      "15"
    ],
    "explanation": "With five ordered values, the median is the middle value: 9."
  },
  "math-logic-03": {
    "prompt": "A sequence starts at 2 and doubles each term: 2, 4, 8, 16, ... The next term is:",
    "options": [
      "18",
      "24",
      "28",
      "30",
      "32"
    ],
    "explanation": "Each term is twice the previous one: 16 × 2 = 32."
  },
  "math-logic-04": {
    "prompt": "A box contains 3 red balls, 2 blue balls and 5 green balls. The probability of drawing a blue ball is:",
    "options": [
      "1/10",
      "1/5",
      "1/4",
      "1/3",
      "1/2"
    ],
    "explanation": "There are 10 balls in total and 2 are blue: 2/10 = 1/5."
  },
  "math-logic-05": {
    "prompt": "R$1,000.00 is invested at 2% simple interest per month for 5 months. The final amount is:",
    "options": [
      "R$1,020.00",
      "R$1,050.00",
      "R$1,100.00",
      "R$1,102.00",
      "R$1,200.00"
    ],
    "explanation": "Simple interest: 1000 × 0.02 × 5 = 100. The final amount is 1,100."
  },
  "math-logic-06": {
    "prompt": "How many even numbers are in the set of integers from 1 through 20 inclusive?",
    "options": [
      "8",
      "9",
      "10",
      "11",
      "20"
    ],
    "explanation": "The even numbers are 2, 4, ..., 20: there are 20/2 = 10."
  }
});
