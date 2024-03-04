// import { useContext } from 'react'
// import { myBox } from './index'
// import './index.css'

// function HomePage() 
// {

//     const { ss } = useContext(myBox)
//     // ss = setStage

//     function startTheQuiz()
//     {
//         // Logic to navigate to Question component
//         ss("question")
//         // setStage("question")
//     }

//   return (
//     <div id='button'>
//         <img style={{display:"relative"}} src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
//       <button style={{marginLeft: "50px", marginTop: "50px", width:"500px" , height:"100px", position:"absolute", marginLeft:"950px", marginTop:"-1100px",backgroundColor:"skyblue"}} className='btn btn-success' onClick={startTheQuiz}><h1>Start Quiz</h1></button>
//     </div>
//   )
// }

// export default HomePage


import { useContext } from 'react';
import { useSpring, animated } from 'react-spring';
import { myBox } from './index';
import './index.css';

function HomePage() {
  const { ss } = useContext(myBox);

  const startButtonSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const imageSpring = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-50px)' },
    delay: 300,
  });

  function startTheQuiz() {
    // Logic to navigate to Question component
    ss('question');
  }

  return (
    <div id='home-page'>
      <animated.div className='overlay'></animated.div>
      <animated.div
        style={{ ...imageSpring, position: 'relative', zIndex: 1, display: 'block', margin: 'auto', maxWidth: '100%', maxHeight: '100vh' }}
      >
        <img
          src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="background"
        />
        {/* Add any decorative shapes or designs here */}
      </animated.div>
      <animated.button
        style={{ ...startButtonSpring, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'skyblue', zIndex: 2 }}
        className='btn btn-success'
        onClick={startTheQuiz}
      >
        <h1>Start Quiz</h1>
      </animated.button>
    </div>
  );
}

export default HomePage;
