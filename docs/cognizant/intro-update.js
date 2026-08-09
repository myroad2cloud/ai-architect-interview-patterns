(function(){
  const D = window.COGNIZANT_DATA;
  if (!D) return;

  const intro = D.questions.find(q => q.id === 'intro-1');
  if (!intro) return;

  intro.opening = 'I am an Azure Cloud Architect with close to 20 years of experience across enterprise architecture, migration, landing zones, networking, security, and application platforms.';
  intro.answer = 'I am an Azure Cloud Architect with close to 20 years of experience across enterprise architecture, migration, landing zones, networking, security, and application platforms. At Rackspace, I work across the presales-to-delivery lifecycle. I lead discovery workshops, shape target architectures, estimate effort and Azure consumption, identify delivery risks, contribute to proposals and SOWs, present solutions to customers and support the transition into delivery. I am now looking to apply that experience in a dedicated presales role with broader ownership of pursuits, commercials and customer outcomes.';
})();
