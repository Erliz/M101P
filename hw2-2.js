// execute in mongo shell
use students;
var lastStId = null; db.grades.find({type: 'homework'}).sort({student_id: 1, score: 1}).forEach(function(doc){if (lastStId != doc.student_id){lastStId = doc.student_id; db.grades.remove(doc);print("remove: " + doc.student_id + " with "+ doc.score);}})
