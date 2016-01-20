use school
// db.students.find().forEach(function(doc){var minScore=101; doc.scores.forEach(function(score){if(score.type=="homework" && score.score < minScore){minScore = score.score}}); filteredScores = doc.scores.filter(function(score){return !(score.type=="homework" && score.score==minScore)}); doc.scores = filteredScores; db.students.save(doc);});
db.students.find().forEach(function (doc) {
  var minScore = 101;
  doc.scores.forEach(function (score) {
    if (score.type == "homework" && score.score < minScore) {
      minScore = score.score
    }
  });
  filteredScores = doc.scores.filter(function (score) {
    return !(score.type == "homework" && score.score == minScore)
  });
  doc.scores = filteredScores;
  db.students.save(doc);
});
