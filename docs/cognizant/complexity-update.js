(function(){
  const D = window.COGNIZANT_DATA;
  if (!D) return;
  const q = D.questions.find(x => x.id === 'complexity-1');
  if (!q) return;

  q.opening = 'I classify complexity using a simple scoring model based on ten practical factors, and I also apply automatic complex overrides for high-risk conditions.';
  q.answer = 'I keep it simple. I look at ten factors: application architecture, dependencies, migration method, operating system support, database complexity, data volume, availability needs, downtime tolerance, network and security changes, and testing effort. I score each factor as 1 for simple, 2 for medium, and 3 for complex. With ten factors, a total score of 10 to 15 is simple, 16 to 22 is medium, and 23 to 30 is complex. But I do not rely only on the score. If I see something high risk, such as an unsupported OS, clustered database, near-zero downtime requirement, unclear critical dependencies, major regulatory controls, or specialised hardware, I automatically treat it as complex. The key point is that I classify based on migration effort and risk, not just VM size.';
  q.testing = 'Can you explain a repeatable complexity method in a way that is practical for estimation and migration planning?';
  q.mistake = 'Making the answer sound too academic, or classifying complexity only by CPU, RAM, or VM size.';
  q.followup = 'Can a small VM still be a complex migration?';
  q.cue = 'Memory: 10 factors, score 1-2-3, then apply complex overrides. Simple 10-15, Medium 16-22, Complex 23-30. Line to remember: “Complexity is about migration effort and risk, not VM size.”';
})();
