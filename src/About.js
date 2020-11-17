import React from 'react';

const About = () => {
  return (
    <div className="mx-auto mb-auto" id="about">
      <h2 className="text-center my-3 my-md-5">About</h2>
      <p>CurrentEvents is an example of a website built by Morgan Grau with React. It features responsive layouts, and a REST API to deliver the most recent currency conversion rates.</p>
      <p>With this project, Morgan challenged himself to combine the various tools he learned through <a href="https://www.altcademy.com" target="_blank">altcademy.com</a> to create a sleek and functional app. By employing React's core features such as state and reusing/importing components (in addition to other new concepts like template literal and arrow functions) Morgan learned how to build an app much more efficiently than before</p>
      <p>Had he more free time on his hands, Morgan would have liked to experiment with animations, as well as to clean up his code. Another challenge for another day!</p>
      <p>If you'd like to see more of Morgan's work, you can see a portfolio of his work (web development as well as artistic), by <a href="https://adoring-mclean-bb6d7c.netlify.app/" target="_blank">clicking here.</a></p>
    </div>
  );
}

export default About;
