// Link to question: https://leetcode.com/problems/longest-palindromic-substring

// אני בוחרת את התו הראשון ושומרת אותו ואת המיקום שלו.
// ממשיכה לתו השני, אם הוא זהה לראשון אז אני בודקת את המערך בין שני התווים והאם הוא סימטרי. אם כן אני שומרת את האורך שלו.
// אם הוא לא זהה אני שומרת אותו ואת האורך שלו וומשיכה לתו השלישי.

// באופן זהת אני עוברת על המערך רק פעם אחת וכל פעם שאני נתקלת בתו חוזר אני בודקת אם יש לי פילנדרום.
// אם יש לי פילנדרום אני בודקת האם הוא מקסימלי באורכו ואם כן שומרת אותו.
// אם יש לי פלינדרום שהוא חלק מפלינדרום גדול יותר (למשל תתאתת) אני צריכה לשמור אותו כKEY במפה
// אז אני בעצם צריכה להשוות פלינדרומים ממערך זמני למפתחות במפה
// אני מחיזרה את הפילנדרום הארוך ביותר.

function longestPalindrome(s: string): string {
  const chars = 'abffffgffffrgjhrn'
  return '';
};
export default longestPalindrome;