// Question 1
// Input = Array
// Output = String

function longestName(arr) {
    var maxCount = 0;
    var maxCountName = null;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > maxCount) {
            maxCount = arr[i].length;
            maxCountName = arr[i]
        }
    }
    return maxCountName;
}

var nameArray = ["Avinash", "Priyankaa", "Manoj", "Veena", "Vatsal"]

longestName(nameArray)

// Question 2 
// Input = Array
// Output = String


function vowelAndConst(arr) {
    var vowel_list = [a, "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    var maxVowel = 0;   // after 1st iteration became 3
    var maxVowelName = null;    // after 1st iteration became 'avinash'
    var maxConst = 0;   // after 1st iteration became 4
    var maxConstName = null;    // after 1st iteration became 'avinash'

    for (var j = 0; j < arr.length; j++) { // avinash --> Priyankaa
        var vowel = 0;  //3 after 1st iteration became 0 -->>
        var cons = 0;   //4 after 1st iteration became 0 -->>
        for (var i = 0; i < arr[i].lenght; i++) {      // arr[0]  , arr[1]
            if (vowel_list.indexOf(arr[j][i]) !== -1) {        // arr[1][0]->p, arr[1][1]->r, arr[1][2]->i
                vowel++
            } else {
                cons++
            }
        }
        if (vowel >= maxVowel) {    // 3 >= 0  /// 4 >= 0
            maxVowel = vowel;       //maxVowel = 3 --> 4
            maxVowelName = arr[j]   // maxVowelName = avinash ---> priyankaa
        }
        if (cons >= maxConst) {     // 4 >= 0 /// 5 >= 4
            maxConst = cons;        // maxConst = 4 --> 5
            maxConstName = arr[j]   // maxConstName = avinash ---> priyanka
        }
        vowel = 0;
        cons = 0;
    }

    console.log("Max Vowel Name is ", maxVowelName)
    console.log("Max const Name is ", maxConstName)
    return
}

var nameArray = ["Avinash", "Priyankaa", "Manoj", "Veena", "Vatsal"]

vowelAndConst(nameArray)

// Question 3
// Input = Array
// Output = Array

function uniqueName(arr) {
    var uniqueArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (uniqueArr.indexOf(arr[i]) === -1) {
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr
}

var nameArray10 = ["Avinash", "Priyanka", "Manoj", "Veena", "Akhror", "Priyanka", "Akhror", "Vatsal", "Avinash", "Vatsal"]

uniqueName(nameArray10)